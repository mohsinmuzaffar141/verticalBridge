import { browser, element, by, protractor } from 'protractor'
import { IdentificationType, BasePage } from './BasePage';
import {location} from "@angular/platform-browser/src/facade/browser";
const chai = require("chai").use(require("chai-as-promised"));

//data variables
const yaml = require('js-yaml');
const fs = require('fs');

let cred = yaml.safeLoad(fs.readFileSync('./Test/testData/users.yml', 'utf8'));
let maps = yaml.safeLoad(fs.readFileSync('./Test/testData/map.yml', 'utf8'));


const expect = chai.expect;
let until = protractor.ExpectedConditions;

export class siteDetailPage extends BasePage {

    searchMap=element(by.xpath('//input[@id="SearchAddress"]'))
    resetTab=element(by.xpath('//span[text()="Reset Map"]'))
    autoView=element(by.xpath('//div[@class="mat-checkbox-inner-container"]//input[@type="checkbox"]'));
    autoV=element(by.xpath('//div[@class="mat-checkbox-inner-container"]'))

    async selectSite(value: string) {
        let siteNumber = cred[value]['siteNumber'];
        let site = element(by.xpath('//a[text()="' + siteNumber + '"]'))
        await browser.wait(until.presenceOf(site), 5000, 'Element taking too long to appear in the DOM');
        await site.click();
        await browser.sleep(5000);
    }

    async verifySiteNumber(value: string) {
        let siteNumber = cred[value]['siteNumber'];
        let title = element(by.xpath('//div[@class="PageTitle"]//div[contains(text()," ' + siteNumber + '")]'))
        await browser.wait(until.presenceOf(title), 5000, 'Element taking too long to appear in the DOM');
        await title.getText().then(async function (text) {
            var sp = text.split(" ")
            var req = sp[0]
            await expect(siteNumber).to.equals(req);
        });
    }

    async verifyName(value: string) {
        let site = cred[value]['siteName'];
        let title = element(by.xpath('//div[@class="PageTitle"]//div[contains(text()," ' + site + '")]'))
        await expect(title.getText()).to.eventually.contain(site);
    }

    async verifyHeaderOnDetailedPage(listed: string) {
        let lists = listed.split(',');
        for (let i = 0; i < lists.length; i++) {
            let label = element(by.xpath('//div[@class="SectionHeader" and text()=" '+lists[i]+' "]'));
            await label.getText().then(async function (text) {
                console.log(text);
            });
            await expect(label.isDisplayed()).to.eventually.equal(true);
        }
    }

    async verifySiteDetailsData(data:string, label:string) {
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

    async verifySiteContacts(label:string, data:string) {
        let datas=data.split(',');
        let labels=label.split(',');
        for (let i = 0; i < labels.length; i++) {
            let siteDetail = element(by.xpath('//mat-panel-title[text()=" '+labels[i]+' "]'));
            await siteDetail.click();
            let contactsData=element(by.xpath('//div[@class="mat-expansion-panel-body"]//strong[text()="'+datas[i]+'"]'))
            await siteDetail.getText().then(async function (text) {
                console.log(text);
            });
            await expect(contactsData.isDisplayed()).to.eventually.equal(true);
        }
    }
    async verifyTabs(tab:string) {
        let tabs=tab.split(',');
        for (let i = 0; i < tabs.length; i++) {
            let pageTabs = element(by.xpath('//a[text()=" '+tabs[i]+' "]'));
            await pageTabs.getText().then(async function (text) {
                console.log(text);
            });
            await expect(pageTabs.isDisplayed()).to.eventually.equal(true);
        }
    }
    async verifyMapPin(siteNo:string){
        let site=cred[siteNo]['siteNumber'];
        let pageMap = element(by.xpath('//div[text()=": ' +site+'"]'));
        await expect(pageMap.isDisplayed()).to.eventually.equal(true);
    }
    async verifyMapData(maplabel:string){
        let mapLabel=maplabel.split(',');
        for (let i = 0; i < mapLabel.length; i++) {
            let mapData=element(by.xpath('//strong[text()="'+mapLabel[i]+'"]'))
            await mapData.getText().then(async function (text) {
                console.log(text);
            });
            await expect(mapData.isDisplayed()).to.eventually.equal(true);
        }
    }

    async verifyLabelNotPreent(labelPresent:string){
        let label=labelPresent.split(',');
        for (let i = 0; i < label.length; i++) {
            await expect(element(by.xpath('//strong[text()="'+label[i]+'"]')).isPresent()).to.eventually.equal(false);
        }
    }

    async searchMapLocation(value:string){
        await browser.wait(until.presenceOf(this.searchMap), 5000, 'Element taking too long to appear in the DOM');
        let searchValue=maps[value]['siteSearch'];
        await this.searchMap.click();
        await this.searchMap.sendKeys(searchValue);
        await browser.sleep(5000);
        let loc=element(by.xpath('//p[text()="'+searchValue+'"]'))
        await loc.click();
        browser.actions().sendKeys(protractor.Key.ENTER).perform();

    }
    async clickResetTab(){
        await browser.wait(until.presenceOf(this.resetTab), 5000, 'Element taking too long to appear in the DOM');
        await this.resetTab.click();
    }
    async clickAutoViewTab() {
        await browser.wait(until.presenceOf(this.autoView), 5000, 'Element taking too long to appear in the DOM')
         let beforeClick =this.autoView.getAttribute('aria-checked');
        if (beforeClick) {
            console.log("1:Element is unchecked");
            await this.autoV.click()
            await browser.sleep(2000);
            // await expect(afterClick).to.eventually.equals(false)
        }
        let afterClick =this.autoView.getAttribute('aria-checked');
        if(afterClick){
            console.log("1:Element is checked");
            await this.autoV.click();
        }
    }

    async selectTab(tabName:string){
        let tab=maps[tabName]['tabName'];
        let tabClick=element(by.xpath('//a[text()=" '+tab+' "]'))
        await  tabClick.click();
        await browser.sleep(5000);
    }
    async verifyContactsLabel(contactLabel:string){
        let contactLabels = contactLabel.split(',');
        for (let i = 0; i < contactLabels.length; i++) {
            let label = element(by.xpath('//h2[text()="'+contactLabels[i]+'"]'));
            await label.getText().then(async function (text) {
                console.log(text);
            });
            await expect(label.isDisplayed()).to.eventually.equal(true);
        }
    }
    async verifyContactGroupData(thData:string, tdData: string){
        let thdata=thData.split(',');
        let tddata=tdData.split(',');
        for (let i = 1; i < tddata.length; i++) {
            let headerData = element(by.xpath('//th[text()="'+thdata[i]+'"]'));
            await expect(headerData.isDisplayed()).to.eventually.equal(true);
            //let tableData=element(by.xpath('//td[contains(text(),"'+tddata[i]+'")]'))
            let tableData=element(by.xpath('//tr[@class="tableMainData ng-star-inserted"]//td['+i+']'))
            //tr[@class='tableMainData ng-star-inserted']//td[1]
            await tableData.getText().then(async function (text) {
                console.log(text);
            });
            await expect(tableData.isDisplayed()).to.eventually.equal(true);
        }
    }
}