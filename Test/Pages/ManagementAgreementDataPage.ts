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

    selectpartner = element(by.xpath("//span[@class='mat-button-wrapper' and text()='Select Partner View']"));
    searchfield= element(by.xpath("(//div[@class='mat-form-field-infix']//input)[1]"));
    selectbtn = element(by.xpath("//span[@class='mat-button-wrapper' and text()='Select']"));
    mysite_btn= element(by.xpath('//span[@class="mat-button-wrapper" and text()="My Sites"]'))
    filter_btn=element(by.xpath('//span[text()="Filter On/Off"]'))
    filter_box=element(by.xpath('//input[@id="filter-siteNo"]'))
    verifySite=element(by.xpath('//div[@id="reportSummary"]//div'))
    search_txt=element(by.xpath('//input[@id="GlobalSearchInput"]'))
    searchIcon=element(by.xpath('//mat-icon[@id="SearchIcon"]'))
    verfySearch=element(by.xpath('(//tbody[@class="ui-table-tbody"])[2]'))
    removeFilter_btn=element(by.xpath('//span[@class="filterX hidden showX"]'))



    async clickonsearchbutton(){
        await browser.wait(until.presenceOf(this.selectpartner), 5000, 'Element taking too long to appear in the DOM');
        await this.selectpartner.click();
        await browser.wait(until.presenceOf(this.searchfield), 5000, 'Element taking too long to appear in the DOM');
    }
    async entersearchvalue(searchvalue: string){
        await this.searchfield.click();
        let data=cred[searchvalue]['name'];
        await this.searchfield.sendKeys(data);
        let value = element(by.xpath('//span[text()=" '+data+' "]'));
        await browser.wait(until.presenceOf(value), 5000, 'Element taking too long to appear in the DOM');
        await value.click();
        await browser.wait(until.presenceOf(this.selectbtn), 5000, 'Element taking too long to appear in the DOM');;
    }
    async clickselectbutton() {
        await this.selectbtn.click();
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
        await browser.wait(until.presenceOf(this.mysite_btn), 5000, 'Element taking too long to appear in the DOM');
        await this.mysite_btn.click();
        await browser.sleep(5000);
    }

    async verifyAgreementData(value: string) {
        let agreementData = cred[value]['managementData']
        let managmentAgreemnet = element(by.xpath('//div[@class="col-portfolioName ng-star-inserted" and text()="' + agreementData + '"]'))
        expect(managmentAgreemnet.isDisplayed()).to.eventually.equals(agreementData);
    }
    async verifyOwnerName(name: string) {
        let ownerNameData = cred[name]['owner_name']
        let ownerName = element(by.xpath('//div[@class="col-ownerName ng-star-inserted" and text()="' + ownerNameData + '"]'))
        expect(ownerName.isDisplayed()).to.eventually.equals(ownerNameData);
    }
    async verifyNoOfsites(siteNumber:string) {
        let sitesData = cred[siteNumber]['numberOfSites']
        let numberofSites = element(by.xpath('//div[@class="col-siteCount ng-star-inserted" and text()="' + sitesData + '"]'))
        expect(numberofSites.isDisplayed()).to.eventually.equals(sitesData);
    }
    async verifyRevenue(revenue:string){
        let revenueData= cred[revenue]['revenue']
        let revenueValue= element(by.xpath('//div[@class="col-siteCount ng-star-inserted" and text()="' +revenueData+ '"]'))
        expect(revenueValue.isDisplayed()).to.eventually.equals(revenueData);
    }

    async verifyOwnerOrder(){
        let table=element.all(by.xpath('//tr[@class="ui-selectable-row ui-state-highlight ng-star-inserted"]'))
        await table.then(async function (txt) {
            var NAMES=[];
            for (let i=1;i<=txt.length;i++) {
                let ownerName = element(by.xpath('(//div[@class="col-ownerName ng-star-inserted"])['+i+']'))
                await ownerName.getText().then(async function (text){
                    await NAMES.push(text);
                });
            }
            //let copyArray = [...NAMES];
            let arr=NAMES.sort((a,b)=>a-b);
            if (NAMES===arr){
                    console.log("Owner Name is in Ascending Order");
                } else {
                   console.log("Error Occurred");
            }
        });
    }

    async getPortfolioList(portfolioName:string){
        let ListData=cred[portfolioName]['name'];
        await this.searchfield.click();

        let portfolioList=element.all(by.xpath('//span[@class="mat-option-text"]'))

        await portfolioList.filter(async function(ele){
            return ele.isDisplayed();

        }).then(async function(filteredElement){
            console.log("filteredElement");
            console.log(filteredElement.length);
            await expect(filteredElement.toString()).to.eventually.contain(ListData)
        });
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

    async searchbox(searchValue:string){
            let filterData=cred[searchValue]['siteNumber'];
            await this.search_txt.click();
            await this.search_txt.sendKeys(filterData);
            await this.searchIcon.click();
            await browser.wait(until.presenceOf(this.verfySearch), 5000, 'Element taking too long to appear in the DOM')
            await expect(this.verfySearch.getText()).to.eventually.contain(filterData)

        }
    async searchFilter(searchValue:string){
        let filterData=cred[searchValue]['siteNumber'];
        await this.filter_box.click();
        await this.filter_box.sendKeys(filterData);
        browser.sleep(2000);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        await browser.wait(until.presenceOf(this.verfySearch), 5000, 'Element taking too long to appear in the DOM')
        await expect(this.verfySearch.getText()).to.eventually.contain(filterData)
        await browser.sleep(10000);
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



}
