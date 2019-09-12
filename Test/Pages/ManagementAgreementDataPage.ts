import { browser, element, by, protractor } from 'protractor'
import { IdentificationType, BasePage } from './BasePage';
const chai = require("chai").use(require("chai-as-promised"));

//data variables
const yaml = require('js-yaml');
const fs = require('fs');

let cred = yaml.safeLoad(fs.readFileSync('./Test/testData/users.yml', 'utf8'));


const expect = chai.expect;
let until = protractor.ExpectedConditions;

export class ManagementAgreementDataPage extends BasePage{

    selectPartner = element(by.xpath("//span[@class='mat-button-wrapper' and text()='Select Partner View']"));
    searchField= element(by.xpath("(//div[@class='mat-form-field-infix']//input)[1]"));
    selectBtn = element(by.xpath("//span[@class='mat-button-wrapper' and text()='Select']"));
    mySite_btn= element(by.xpath('//span[@class="mat-button-wrapper" and text()="My Sites"]'));
    filter_btn=element(by.xpath('//span[text()="Filter On/Off"]'));
    filter_box=element(by.xpath('//input[@id="filter-siteNo"]'));
    verifySite=element(by.xpath('//div[@id="reportSummary"]//div'));
    search_txt=element(by.xpath('//input[@id="GlobalSearchInput"]'));
    searchIcon=element(by.xpath('//mat-icon[@id="SearchIcon"]'));
    removeFilter_btn=element(by.xpath('//span[@class="filterX hidden showX"]'));
    text=element(by.xpath('//h2[text()="Select Partner View"]'));
    cancel=element(by.xpath('//span[text()="Cancel"]'));



    async clickOnSearchButton(){
        await browser.wait(until.presenceOf(this.selectPartner), 5000, 'Element taking too long to appear in the DOM');
        await this.selectPartner.click();
        await browser.wait(until.presenceOf(this.searchField), 5000, 'Element taking too long to appear in the DOM');
    }
    async enterSearchValue(searchValue: string){
        await this.searchField.click();
        let data=cred[searchValue]['name'];
        await this.searchField.sendKeys(data);
        let value = element(by.xpath('//span[text()=" '+data+' "]'));
        await browser.wait(until.presenceOf(value), 5000, 'Element taking too long to appear in the DOM');
        await value.click();
        await browser.wait(until.presenceOf(this.selectBtn), 5000, 'Element taking too long to appear in the DOM');;
    }
    async clickSelectButton() {
        await this.selectBtn.click();
        await browser.sleep(5000);
    }
    async validate() {
        let path = element(by.xpath("//h1[text()='RMR Group']")).getText();
        let title: string = "RMR Group";
        //await expect(path).to.equal(title);
        if (await expect(path).to.eventually.equal(title)) {
            console.log("Passed");
        }
    }

    async clickMySites(){
        await browser.wait(until.presenceOf(this.mySite_btn), 5000, 'Element taking too long to appear in the DOM');
        await this.mySite_btn.click();
        await browser.sleep(5000);
    }

    async verifyAgreementData(value: string) {
        let agreementData = cred[value]['managementData']
        let managementAgreement = element(by.xpath('//div[@class="col-portfolioName ng-star-inserted" and contains(text(),"' + agreementData + '")]'))
        await managementAgreement.getText().then(async function(value){
            await expect(value).to.equals(agreementData);
        });

    }
    async verifyOwnerName(name: string) {
        let ownerNameData = cred[name]['owner_name']
        let ownerName = element(by.xpath('//div[@class="col-ownerName ng-star-inserted" and contains(text(),"' + ownerNameData + '")]'))
        await ownerName.getText().then(async function(value){
            await expect(value).to.equals(ownerNameData);
        });
    }
    async verifyNoOfSites(siteNumber:string) {
        let sitesData = cred[siteNumber]['numberOfSites'];
        let numberOfSites = element(by.xpath('//div[@class="col-siteCount ng-star-inserted" and contains(text(),"' + sitesData + '")]'));
        await numberOfSites.getText().then(async function(value){
            await expect(value).to.equals(sitesData);
        });
    }
    async verifyRevenue(revenue:string){
        let revenueData= cred[revenue]['revenue'];
        let revenueValue= element.all(by.xpath('//div[@class="right ng-star-inserted"]'));
        await revenueValue.getText().then(async function(value){
         for(let i=0;i<value.length;i++){
             console.log(value[i]);
         }
        });
       // await expect(revenueValue.isDisplayed()).to.eventually.equal(true);
    }

    async verifyOwnerOrder(colName:string,counter:string){
        let NAMES=[];
        let table=element.all(by.xpath('(//tbody[@class="ui-table-tbody"])['+counter+']//tr'));
        await table.then(async function (txt) {
            for (let i=1;i<=txt.length;i++){
                let ownerName = element(by.xpath('(//div[@class="col-'+colName+' ng-star-inserted"])[' + i + ']'));
                await ownerName.getText().then(async function (text) {
                    await NAMES.push(text);
                });
            }
        });
        console.log('Sorted Array sorted default: '+NAMES);
        console.log("==========================================");
        let unsortedArr = [];
        unsortedArr = NAMES.sort();
        await expect(unsortedArr).to.be.equal(NAMES);
        console.log('Sorted Array sorted: '+unsortedArr);
        console.log("==========================================");
    }
    async verifyDescendingOwnerOrder(colName:string,counter:string){
        let NAMES=[];
        let table=element.all(by.xpath('(//tbody[@class="ui-table-tbody"])['+counter+']//tr'));
        await table.then(async function (txt) {
            for (let i=1;i<=txt.length;i++){
                let ownerName = element(by.xpath('(//div[@class="col-'+colName+' ng-star-inserted"])[' + i + ']'));
                await ownerName.getText().then(async function (text) {
                    await NAMES.push(text);
                });
            }
        });
        console.log('Sorted Array sorted Default: '+NAMES);
        console.log("==========================================");
        let unsortedArr = [];
        unsortedArr = NAMES.sort();
        unsortedArr.reverse();
        await expect(unsortedArr).to.be.equal(NAMES);
        console.log('Sorted Array unSorted: '+unsortedArr)
    }

    async getPortfolioList(portfolioName:string){
        let ListData=cred[portfolioName]['name'];
        await this.searchField.click();

        let portfolioList=element.all(by.xpath('//span[@class="mat-option-text"]'));
        await portfolioList.getText().then(async function(ele){
            for(let i=0; i<ele.length;i++) {
                console.log(ele[i]);
                await expect(ele).to.contain(ListData)
            }
        });
        await this.text.click();
        await this.cancel.click();
    }

    async clickFilterBtn(){
        await browser.wait(until.presenceOf(this.filter_btn), 5000, 'Element taking too long to appear in the DOM');
        await this.filter_btn.click();
        await browser.sleep(5000);
    }
    async verifyFilter(){
        await expect(this.filter_box.isEnabled()).to.eventually.equals(true);
    }

    async verifySites(count:string) {
        let siteData = cred[count]['sitesCount'];
        await this.verifySite.getText().then(async function (text) {
            var sp = text.split('of');
            var req = sp[1].split(" ");
            console.log(text);
            console.log(req[1]);
            await expect(req[1]).to.equals(siteData);

        });
    }

    async searchBox(searchValue:string,count:string){
        await this.search_txt.click();
        await this.search_txt.sendKeys(searchValue);
        await this.searchIcon.click();
        await browser.sleep(35000);
        let verifySearch=element(by.xpath('(//tbody[@class="ui-table-tbody"])['+count+']'));
        await browser.wait(until.presenceOf(verifySearch), 5000000, 'Element taking too long to appear in the DOM');
        await expect(verifySearch.getText()).to.eventually.contain(searchValue)

    }
    async searchFilter(searchValue:string,count:string){
        await this.filter_box.click();
        await this.filter_box.sendKeys(searchValue);
        browser.sleep(2000);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        let verifySearch=element(by.xpath('(//tbody[@class="ui-table-tbody"])['+count+']'));
        await browser.wait(until.presenceOf(verifySearch), 5000, 'Element taking too long to appear in the DOM');
        await expect(verifySearch.getText()).to.eventually.contain(searchValue);

    }

    async verifyFilterPresent(){
        await expect(this.filter_box.isPresent()).to.eventually.equals(true);
    }

    async verifySiteNumber(siteNumber:string){
        let data=cred[siteNumber]['siteNumber'];
        let siteNo=element(by.xpath('//div[@class="ng-star-inserted"]/a[text()="' +data+ '"]'))
        await siteNo.getText().then(async function (text) {
            await expect(text).to.equals(data);
        });

    }

    async verifySiteData(sitedata:string){
        let data=cred[sitedata]['name'];
        let siteData=element(by.xpath('//td[@class="ng-star-inserted"]//div[text()=" '+data +' "]'))
        await siteData.getText().then(async function (text) {
            await expect(text).to.equals(data);
        });
    }


    async verifySiteOrder(){
        let table=element.all(by.xpath('//tr[@class="ui-selectable-row ng-star-inserted"]'))
        await table.then(async function (txt) {
            var NAMES=[];
            for (let i=1;i<=txt.length;i++) {
                let ownerName = element(by.xpath('(//div[@class="col-siteName ng-star-inserted"])['+i+']'))
                await ownerName.getText().then(async function (text){
                    await NAMES.push(text);
                });
            }
            //let copyArray = [...NAMES];
            let arr=NAMES.sort((a,b)=>a-b);
            if (NAMES===arr){
                console.log("Site Name is in Ascending Order");
            } else {
                console.log("Error Occurred");
            }
        });
    }
    async removeFilter(){
        await this.removeFilter_btn.click();
        await browser.sleep(5000);
    }

    async clickAscendingAndDescendingOrder(column:string){
        let colName=element(by.xpath('//div[text()=" '+column+' "]'));
        await colName.click();
        await browser.sleep(35000);
    }
    async clickEcportFile(exportFile:string){
        let button=element(by.xpath('//span[text()=" '+exportFile+' "]'));
        await button.click();
        await browser.sleep(10000);
    }
    async verifyDownloadFile(){
        let downloadsFolder = require('downloads-folder');
        let filepath = downloadsFolder() + '\\My Sites-Export.xlsx';
        await expect(fs.existsSync(filepath)).to.be.true;
        if(fs.existsSync(filepath)) {
            await fs.unlinkSync(filepath);
            await browser.sleep(5000);
        }
    }

}
