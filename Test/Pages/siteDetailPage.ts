import {browser, element, by, protractor} from 'protractor'
import { IdentificationType, BasePage } from './BasePage';
import {location} from "@angular/platform-browser/src/facade/browser";

const chai = require("chai").use(require("chai-as-promised"));

//data variables
const yaml = require('js-yaml');
const fs = require('fs');

let cred = yaml.safeLoad(fs.readFileSync('./Test/testData/users.yml', 'utf8'));
let maps = yaml.safeLoad(fs.readFileSync('./Test/testData/map.yml', 'utf8'));
let site = yaml.safeLoad(fs.readFileSync('./Test/testData/siteGeneral.yml', 'utf8'));

const expect = chai.expect;
let until = protractor.ExpectedConditions;

export class siteDetailPage extends BasePage {

    searchMap = element(by.xpath('//input[@id="SearchAddress"]'));
    resetTab = element(by.xpath('//span[text()="Reset Map"]'));
    autoView = element(by.xpath('//div[@class="mat-checkbox-inner-container"]//input[@type="checkbox"]'));
    autoV = element(by.xpath('//div[@class="mat-checkbox-inner-container"]'));
    linkTitle = element(by.xpath('//div[@class="header-title"]'));
    searchFile=element(by.id('SearchDocument'));
    search_btn=element(by.id('DocSearchBtn'));
    editFile=element(by.xpath('//i[@class="fa fa-pencil-square-o fa-2x"]'));
    siteInspection=element(by.xpath('//i[@class="fa fa-file-text-o fa-2x"]'));
    managementAgreement=element(by.xpath('//div[text()="Management Agreement:"]'));
    helpBtn=element(by.xpath('//span[text()="Help"]'));
    advanceSearch=element(by.xpath('//span[text()="Advanced Search"]'));
    mainMenuSearchField=element(by.xpath('//input[@id="SearchInput"]'));
    relationName=element(by.xpath('//h1[@id="PartnerFullName"]'));
    homeImage=element(by.xpath('//div[@id="HomePageImage"]'));

    async selectSite(value: string) {
        let site = element(by.xpath('//a[contains(text(),"' + value + '")]'));
        await browser.wait(until.presenceOf(site), 50000, 'Element taking too long to appear in the DOM');
        await site.click();
        await browser.sleep(5000);
    }
    async verifySiteNumber(value: string) {
        let title = element(by.xpath('//div[@class="PageTitle"]//div[contains(text()," ' + value + '")]'));
        // await browser.wait(until.presenceOf(title), 15000, 'Element taking too long to appear in the DOM');
        await title.getText().then(async function (text) {
            let sp = text.split(" ");
            let req = sp[0];
            console.log(req);
            await expect(value).to.equals(req);
        });
    }

    async verifyName(value: string,number:string){
        let title = element(by.xpath('//div[@class="PageTitle"]//div[contains(text()," ' + value + '")]'));
        await title.getText().then(async function (text) {
            let sp = text.split("keyboard_arrow_up");
            let req = sp[0];
            let sp1 = req.split(number+' ');
            let req1 = sp1[1];
            let name=req1.trim();
            console.log(name);
            await expect(value).to.equals(name);
        });
    }

    async verifyHeaderOnDetailedPage(listed: string) {
        let lists = listed.split(',');
        for (let i = 0; i < lists.length; i++) {
            let label = element(by.xpath('//div[@class="SectionHeader" and text()=" ' + lists[i] + ' "]'));
            await label.getText().then(async function (text) {
                console.log(text);
            });
            await expect(label.isDisplayed()).to.eventually.equal(true);
        }
    }

    async verifySiteDetailsData(data: string, label: string) {
        let datas = data.split(',');
        let labels = label.split(',');
        for (let i = 0; i < datas.length; i++) {
            let siteDetail = element(by.xpath('//div[contains(text(),"' + datas[i] + '")]//following-sibling::div[contains(text(),"' + labels[i] + '")]'));
            await siteDetail.getText().then(async function (text) {
                console.log(text);
            });
            await expect(siteDetail.isDisplayed()).to.eventually.equal(true);
        }
    }

    async verifySiteContacts(label: string, data: string) {
        let datas = data.split(',');
        let labels = label.split(',');
        for (let i = 0; i < labels.length; i++) {
            let siteDetail = element(by.xpath('//mat-panel-title[text()=" ' + labels[i] + ' "]'));
            await siteDetail.click();
            let contactsData = element(by.xpath('//div[@class="mat-expansion-panel-body"]//strong[text()="' + datas[i] + '"]'));
            await siteDetail.getText().then(async function (text) {
                console.log(text);
            });
            await expect(contactsData.isDisplayed()).to.eventually.equal(true);
        }
    }

    async verifyTabs(tab: string) {
        let tabs = tab.split(',');
        for (let i = 0; i < tabs.length; i++) {
            let pageTabs = element(by.xpath('//a[text()=" ' + tabs[i] + ' "]'));
            await pageTabs.getText().then(async function (text) {
                console.log(text);
                await pageTabs.click();
                await browser.sleep(3000);
            });
            await expect(pageTabs.isDisplayed()).to.eventually.equal(true);
        }
    }

    async verifyMapPin(siteNo: string) {
        let site = cred[siteNo]['siteNumber'];
        let pageMap = element(by.xpath('//div[text()=": ' + site + '"]'));
        await expect(pageMap.isDisplayed()).to.eventually.equal(true);
    }

    async verifyMapData(maplabel: string) {
        let mapLabel = maplabel.split(',');
        for (let i = 0; i < mapLabel.length; i++) {
            let mapData = element(by.xpath('//strong[text()="' + mapLabel[i] + '"]'));
            await mapData.getText().then(async function (text) {
                console.log(text);
            });
            await expect(mapData.isDisplayed()).to.eventually.equal(true);
        }
    }

    async verifyLabelNotPreent(labelPresent: string) {
        let label = labelPresent.split(',');
        for (let i = 0; i < label.length; i++) {
            await expect(element(by.xpath('//strong[text()="' + label[i] + '"]')).isPresent()).to.eventually.equal(false);
        }
    }

    async searchMapLocation(value: string) {
        await browser.wait(until.presenceOf(this.searchMap), 50000, 'Element taking too long to appear in the DOM');
        let searchValue = maps[value]['siteSearch'];
        await this.searchMap.click();
        await this.searchMap.sendKeys(searchValue);
        let loc = element(by.xpath('//p[text()="' + searchValue + '"]'));
        await browser.wait(until.presenceOf(loc), 50000, 'Element taking too long to appear in the DOM');
        await loc.click();
        browser.actions().sendKeys(protractor.Key.ENTER).perform();

    }

    async clickResetTab() {
        await browser.wait(until.presenceOf(this.resetTab), 50000, 'Element taking too long to appear in the DOM');
        await this.resetTab.click();
    }

    async clickAutoViewTab() {
        await browser.wait(until.presenceOf(this.autoView), 5000, 'Element taking too long to appear in the DOM');
        let beforeClick = this.autoView.getAttribute('aria-checked');
        if (beforeClick) {
            console.log("1:Element is unchecked");
            await this.autoV.click();
            await browser.sleep(2000);
            // await expect(afterClick).to.eventually.equals(false)
        }
        let afterClick = this.autoView.getAttribute('aria-checked');
        if (afterClick) {
            console.log("2:Element is checked");
            await this.autoV.click();
        }
    }

    async selectTab(tabName: string) {
        let tab = maps[tabName]['tabName'];
        let tabClick = element(by.xpath('//a[text()=" ' + tab + ' "]'));
        await tabClick.isPresent().then(async function (display) {
            if (display) {
                await tabClick.click();
                await browser.sleep(5000);
            } else
                console.log(tab + " is not present")
        });
    }


    async verifyContactsLabel(contactLabel: string) {
        let contactLabels = contactLabel.split(',');
        for (let i = 0; i < contactLabels.length; i++) {
            let label = element(by.xpath('//h2[text()="' + contactLabels[i] + '"]'));
            await label.getText().then(async function (text) {
                console.log(text);
            });
            await expect(label.isDisplayed()).to.eventually.equal(true);
        }
    }

    async verifyContactGroupData(thData: string) {
        let thdata = thData.split(',');
        //let tddata = tdData.split(',');
        console.log(thdata.length);
        for (let i = 1; i <= thdata.length; i++) {
            let headerData = element(by.xpath('//tr[@class="tableMainHeader"]//th[' + i + ']'));
            await headerData.getText().then(async function (text) {
                console.log(text);
                await expect(text).to.equal(thdata[i - 1]);
            });
            // await expect(headerData.isDisplayed()).to.eventually.equal(true);
            //let tableData=element(by.xpath('//td[contains(text(),"'+tddata[i]+'")]'))
            let tableData = element(by.xpath('//tr[@class="tableMainData ng-star-inserted"]//td[' + i + ']'));
            //tr[@class='tableMainData ng-star-inserted']//td[1]
            await tableData.getText().then(async function (text) {
                console.log(text);
            });
            await expect(tableData.getAttribute('href')).to.eventually.equal(null);
            await expect(tableData.isDisplayed()).to.eventually.equal(true);
        }
    }

    async contactDataNOtPresent(contctData: string) {
        let data = maps[contctData]['contactData'];
        let contactData = element.all(by.xpath('//div[@class="ng-star-inserted" and text()="No records found"]'));
        await contactData.getText().then(async function (txt) {
            for (let i = 0; i < txt.length; i++) {
                console.log(txt[i]);
                await expect(data).to.equal(txt[i]);
            }
        });
    }

    async contactDataDuplication(data) {
        var arr = [];
        let dataDuplication = data.split(',');
        for (let i = 0; i < dataDuplication.length; i++) {
            let contactData = element(by.xpath('//td[contains(text(),"' + dataDuplication[i] + '")]'));
            await contactData.getText().then(async function (text) {
                await arr.push(text)
            });
        }
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    console.log(arr[i]);
                }
            }
        }
        console.log("There is no duplication in values");
    }

    async verifyAttributeOnPropertTab(attributes: string) {
        let attribute = attributes.split(',');
        for (let i = 0; i < attribute.length; i++) {
            let attributeData = element(by.xpath('//mat-card-title[contains(text(), "' + attribute[i] + '")]'));
            await attributeData.getText().then(async function (text) {
                console.log(text);
                await expect(text).to.equal(attribute[i]);
            });
        }
    }

    async verifyDataUnderPropertyInformation(attributeData: string) {
        let attribute = attributeData.split(',');
        for (let i = 0; i < attribute.length; i++) {
            let attributeDataInfo = element(by.xpath('//div[contains(text(),"' + attribute[i] + '")]'));
            await browser.wait(until.presenceOf(attributeDataInfo), 50000, 'Element taking too long to appear in the DOM');
            await attributeDataInfo.getText().then(async function (text) {
                console.log(text);
            });
            await expect(attributeDataInfo.isDisplayed()).to.eventually.equal(true);
        }
    }

    async verifyAttributeOnLeasesTab(txt: string) {
        let attribute = txt.split(',');
        for (let i = 0; i < attribute.length; i++) {
            let data = element(by.xpath('//h2[contains(text(),"' + attribute[i] + '")]'));
            await data.getText().then(async function (text) {
                console.log(text);
                await expect(text).to.equal(attribute[i]);
            });
        }
    }

    async verifyLeasesTabData(data: string) {
        let leasesData = data.split(',');
        for (let i = 0; i < leasesData.length; i++) {
            let data = element(by.xpath('//div[contains(text(),"' + leasesData[i] + '")]'));
            await data.getText().then(async function (text) {
                console.log(text);
            });
            await expect(data.getAttribute('href')).to.eventually.equal(null);
            await expect(data.isDisplayed()).to.eventually.equal(true);
        }
    }

    async verifyLeasesLabel(thData: string) {
        let thdata = thData.split(',');
        for (let i = 1; i <= thdata.length; i++) {
            let headerData = element(by.xpath('//tr[@class="tableMainHeader"]//th[' + i + ']'));
            await headerData.getText().then(async function (text) {
                console.log(text);
                await expect(text).to.equal(thdata[i - 1]);
            });
        }
    }

    async verifyGroundRightsData(thData: string) {
        let thdata = thData.split(',');
        for (let i = 1; i <= thdata.length; i++) {
            let headerData = element(by.xpath('(//table)[2]//tr[@class="tableMainHeader"]//th[' + i + ']'));
            await headerData.getText().then(async function (text) {
                console.log(text);
                await expect(text).to.equal(thdata[i - 1]);
            });
        }
    }

    async verifyDisplayMessage(message: string) {
        let thdata = message.split(',');
        for (let i = 0; i < thdata.length; i++) {
            let msg = element(by.xpath('//p[contains(text(),"' + thdata[i] + '")]'));
            await msg.getText().then(async function (text) {
                console.log(text);
            });
            await expect(msg.isDisplayed()).to.eventually.equal(true);
        }
    }

    async verifyLink(link: string) {
        let thdata = link.split(',');
        for (let i = 0; i < thdata.length; i++) {
            let msg = element(by.xpath('//a[contains(text(),"' + thdata[i] + '")]'));
            await msg.getText().then(async function (text) {
                console.log(text);
            });
            await expect(msg.isDisplayed()).to.eventually.equal(true);
        }
    }

    async verifyIndicatorColor(indicator: string) {
        let indicators = indicator.split(',');
        for (let i = 0; i < indicators.length; i++) {
            let msg = element(by.xpath('//mat-card-content//div[@class="ng-star-inserted"]//div[contains(text(),"' + indicators[i] + '")]'));
            await browser.wait(until.presenceOf(msg), 5000, 'Element taking too long to appear in the DOM');
            await msg.getText().then(async function (text) {
                console.log(text);
            });
            await expect(msg.isDisplayed()).to.eventually.equal(true);
        }
    }

    async documentLabel(label: string) {
        let labels = label.split(',');
        for (let i = 1; i < labels.length; i++) {
            let msg = element(by.xpath('(//div[@class="node-content-wrapper"])['+i+']'));
            await browser.wait(until.presenceOf(msg), 15000, 'Element taking too long to appear in the DOM');
            await expect(msg).to.be.exist;
        }
    }


    async fileSearch(file: string){
        let files=maps[file]['fileDocument'];
        let doc=element(by.xpath('//span[text()="'+files+'"]'));
        await this.searchFile.click();
        await this.searchFile.sendKeys(files);
        await this.search_btn.click();
        await browser.wait(until.presenceOf(doc), 15000, 'Element taking too long to appear in the DOM');
        await expect(files).to.be.exist;
    }

    async folderAndSubFolder(){
        for(let i=1;i<=4;i++){
            let folder=element(by.xpath('(//span[@class="toggle-children"])['+i+']'));
            await folder.click();
            await folder.click();
        }
        // for(let i=4;i>0;i--){
        //     let folder=element(by.xpath('(//span[@class="toggle-children"])['+i+']'))
        //     await folder.click();
        // }
    }
    async optionsNotPresent(){
        let alert= element(by.xpath('//a[text()="Add or View Documents/Images"]'));
        await expect(alert.isPresent()).to.eventually.equal(false);
    }

    async editSiteNOtPresent(){
        await expect(this.editFile.isPresent()).to.eventually.equal(false);
    }
    async siteInspectionNOtPresent(){
        await expect(this.siteInspection.isPresent()).to.eventually.equal(false);
    }
    async managementAgreementNotPresent(){
        await expect(this.managementAgreement.isPresent()).to.eventually.equal(false);
    }
    async homePageImage(){
        await browser.wait(until.presenceOf(this.homeImage), 500000, 'Search Text Element taking too long to appear in the DOM');
        await expect(this.homeImage.isDisplayed()).to.eventually.equal(true);
    }


    async selectTabUnderHomePage(tabName: string) {
        let tab = maps[tabName]['tab'];
        let tabClick = element(by.xpath('//div[text()="' + tab + '"]'));
        await tabClick.isPresent().then(async function (display) {
            if (display) {
                await tabClick.click();
                await browser.sleep(5000);
            } else
                console.log(tab + " is not present")
        });
    }
    async verifyContentUnderContactTab(txt: string) {
        let attribute = txt.split(',');
        for (let i = 0; i < attribute.length; i++) {
            let data = element(by.xpath('//h3[contains(text(),"' + attribute[i] + '")]'));
            await data.getText().then(async function (text) {
                console.log(text);
                await expect(text).to.equal(attribute[i]);
            });
        }
    }

    async verifyListContentUnderContactTab(contactLabel: string) {
        let data=maps[contactLabel]['listData'];
        let contactLabels = data.split(',');
        for (let i = 0; i < contactLabels.length; i++) {
            let label = element(by.xpath('//li[contains(text(),"' + contactLabels[i] + '")]'));
            await label.getText().then(async function (text) {
                console.log(text);
            });
            await expect(label.isDisplayed()).to.eventually.equal(true);
        }
    }
    async clickOnLinks(){
        let link=element(by.xpath('//a[contains(text(),"561-406-4046")]'));
        await link.click();
        await browser.sleep(5000);
        await browser.switchTo().alert().then(async function(){
            let pop = browser.switchTo().alert().getText();
            console.log(pop);
        });
    }

    async verifyHelpTab(){
        await expect(this.helpBtn.isDisplayed()).to.eventually.equal(true);
    }
    async mainMenuSearch(){
        let advanceSearch=element(by.xpath('//span[text()="Advanced Search"]'));
        let mainMenuSearchField=element(by.xpath('//input[@id="SearchInput"]'));
        await mainMenuSearchField.isPresent().then(async function (display) {
            if (display) {
                await mainMenuSearchField.click();
                await browser.sleep(3000);
                await advanceSearch.isPresent().then(function (displ) {
                    expect(displ).to.be.equal(true);
                });
            } else
                console.log(mainMenuSearchField + " is not present")
        });

    }

    async verifySearchSuggestion(text:string){
        let txt=site[text]['searchTxt'];
        let searchText=element(by.xpath('//span[contains(text()," '+txt+' ")]'));
        await this.mainMenuSearchField.sendKeys(txt);
        await browser.sleep(2000);
        await browser.wait(until.presenceOf(searchText), 500000, 'Search Text Element taking too long to appear in the DOM');
        await searchText.isPresent().then(async function (display) {
            if (display) {
                await searchText.click();
                await browser.sleep(2000);
            } else
                console.log(searchText + " is not present")
        });
    }

    async clickOnAdvanceSearch(){
        await this.mainMenuSearchField.click();
        await browser.wait(until.presenceOf(this.advanceSearch), 500000, 'Advance Search taking too long to appear in the DOM');
        await this.advanceSearch.click();
        await browser.sleep(10000);
    }

    async advanceSearchTableHeader(thData: string) {
        let thdata = thData.split(',');
        for (let i = 1; i <= thdata.length; i++) {
            let headerData = element(by.xpath('//tr[@class="ng-star-inserted"]//th[' + i + ']'));
            await browser.wait(until.presenceOf(headerData), 500000, 'Advance Search taking too long to appear in the DOM');
            await headerData.getText().then(async function (text) {
                console.log(text);
                await expect(text).to.equal(thdata[i - 1]);
            });
        }
    }

    async verifyLabelsUnderAdvanceSearch(text:string){
        let labels = text.split(',');
        for (let i = 0; i < labels.length; i++) {
            let searchText=element(by.xpath('//span[contains(text(),"' +labels[i]+ '")]'));
            await searchText.isPresent().then(async function (display) {
                if (display) {
                    await browser.wait(until.presenceOf(searchText), 500000, 'Labels Advance search taking too long to appear');
                    await searchText.click();
                    await browser.sleep(2000);
                } else
                    console.log(searchText + " is not present")
            });
        }
    }
    async advanceSearchRefinementCriteria(text:string){
        let searchText=element(by.xpath('//span[contains(text(),"' +text+ '")]'));
        await browser.wait(until.presenceOf(searchText), 500000, 'Relationship taking too long to appear');
        await searchText.isPresent().then(async function (display) {
            console.log(display);
        });
    }
    async verifyRelationshipName(text:string){
        await browser.wait(until.presenceOf(this.relationName), 500000, 'Relationship taking too long to appear');
        await this.relationName.getText().then(async function (display) {
            console.log(display);
            await expect(display).to.equal(text);
        });
    }

}
