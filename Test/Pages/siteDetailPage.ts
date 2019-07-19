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
    }
}