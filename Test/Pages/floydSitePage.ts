import {browser, element, by, protractor} from 'protractor'
import { IdentificationType, BasePage } from './BasePage';
import {location} from "@angular/platform-browser/src/facade/browser";

const chai = require("chai").use(require("chai-as-promised"));

//data variables
const yaml = require('js-yaml');
const fs = require('fs');

let cred = yaml.safeLoad(fs.readFileSync('./Test/testData/users.yml', 'utf8'));

const expect = chai.expect;
let until = protractor.ExpectedConditions;
let partnerPortal=[];
let floydSite=[];

export class floydSitePage extends BasePage {

    plusIcon = element(by.xpath('//*[name()="svg" and @data-icon="plus"]'));
    portName = element(by.xpath('//input[@formcontrolname="name"]'));
    floydSearch=element(by.xpath('//input[@id="txtSearchBox"]'));
    goButton=element(by.xpath('//button[@id="goHome"]'));
    lease=element(by.xpath('//div[text()="Leases"]'));
    document_Arrow=element(by.xpath('(//span[@class="toggle-children"])[1]'));
    verifySite=element(by.xpath('//div[@id="reportSummary"]//div'));


    async clickHeading(heading: string) {
        let label = element(by.xpath('//h2[text()="' + heading + '"]'));
        await label.isPresent().then(async function (text) {
            if (text) {
                await label.click();
            }
        });

    }

    async clickPlusIcon() {
        await browser.wait(until.presenceOf(this.plusIcon), 5000, 'Element taking too long to appear in the DOM');
        await this.plusIcon.click();
    }

    async clickPortfolioType(portfolio: string) {
        let selectPortfotioType = element(by.xpath('(//div[@class="mat-select-arrow"])[2]'));
        let portfolioType = element(by.xpath('//span[contains(text(),"' + portfolio + '")]'));
        await browser.sleep(3000);
        await selectPortfotioType.click();
        await browser.wait(until.presenceOf(portfolioType), 5000, 'Element taking too long to appear in the DOM');
        await portfolioType.click();
    }

    async portfolioName(portfolio: string) {
        await browser.wait(until.presenceOf(this.portName), 5000, 'Element taking too long to appear in the DOM');
        await this.portName.sendKeys(portfolio);
        await browser.sleep(3000);
    }

    async clickSaveBtn(text: string) {
        let saveBtn = element(by.xpath('//span[contains(text(),"' + text + '")]'));
        await saveBtn.isPresent().then(async function (display) {
            if (display) {
                await saveBtn.click();
                await browser.sleep(15000);
            }
        });
    }

    async verifyTabsFloydSite(tabs: string) {
        let tab = tabs.split(',');
        for (let i = 0; i < tab.length; i++) {
            let label = element(by.xpath('//div[contains(text(),"' + tab[i] + '")]'));
            await label.getText().then(async function (text) {
                await label.click();
                await expect(text).to.equal(tab[i]);
            });
        }
    }

    async attributeFloydSite(){
        let portfolioName = element(by.xpath('//input[@placeholder="Portfolio Name"]'));
        let portfolioType = element(by.xpath('//mat-select[@aria-label="Portfolio type"]'));
        await expect(portfolioName.isDisplayed()).to.eventually.equal(true);
        await expect(portfolioType.isDisplayed()).to.eventually.equal(true);
    }


    async getPartnerPortalData(colName: string,value:string) {
        let firstValue=colName.split(',');
        let secondValue=value.split(',');
        for(let i=0;i<firstValue.length;i++){
            let managementAgreement = element(by.xpath('//div[@class="col-'+firstValue[i]+' ng-star-inserted" and contains(text(),"' + secondValue[i] + '")]'));
            await managementAgreement.getText().then(async function(text){
                await partnerPortal.push(text);
            });
            console.log(partnerPortal[i]);
        }
    }

    async getFloydSiteData(value:string) {
        let secondValue=value.split(',');
        for(let i=0;i<secondValue.length;i++){
            let managementAgreement = element(by.xpath('//a[contains(text(),"'+secondValue[i]+'")]'));
            await browser.wait(until.presenceOf(managementAgreement), 50000, 'Element taking too long to appear in the DOM');
            await managementAgreement.getText().then(async function(text){
                await floydSite.push(text);
            });
        }
        console.log(floydSite);
    }

    async verifyDataOfBothSides(){
        for(let i=0; i < partnerPortal.length; i++){
            await expect(partnerPortal[i]).to.be.contains(floydSite[i]);
        }
    }

    async sendValuesToFloyd(number:string){

        await this.floydSearch.sendKeys(number);
        await this.goButton.click();
        await browser.wait(until.presenceOf(this.lease), 50000, 'Element taking too long to appear in the DOM');
    }

    async clickOnTab(){
        await this.lease.click();
    }
    async verifySiteNameFloyd(siteNumber:string, name:string,number:string) {
        let sitName=element(by.xpath('//span[contains(text(),"'+siteNumber+'")]'));
        await sitName.getText().then(async function (text) {
            let sp = text.split(number+' ');
            console.log(sp[1]);
            await expect(sp[1]).to.equal(name);
            await floydSite.push(sp[1]);
        });

    }
    async deleteArray(){
        partnerPortal.splice(0,partnerPortal.length);
        floydSite.splice(0,floydSite.length);
    }

    async partnerPortalSiteData(partnerData:string){
        let data=partnerData.split(',');
        for(let i=0;i<data.length;i++){
            let partnerPortalData = element(by.xpath('//div[contains(text(),"'+data[i]+'")]'));
            await browser.wait(until.presenceOf(partnerPortalData), 50000, 'Element taking too long to appear in the DOM');
            await partnerPortalData.getText().then(async function(text){
                await partnerPortal.push(text);
            });
        }
        console.log(partnerPortal)
    }

    async partnerSiteDocument(partnerData:string){
        let data=partnerData.split(',');
        for(let i=0;i<data.length;i++){
            let partnerDocument = element(by.xpath('//span[contains(text(),"'+data[i]+'")]'));
            await browser.wait(until.presenceOf(partnerDocument), 50000, 'Element taking too long to appear in the DOM');
            await partnerDocument.getText().then(async function(text){
                await partnerPortal.push(text);
                console.log(text);
            });
        }
        console.log(partnerPortal)
    }

    async floydSiteData(floydData:string){
        let data=floydData.split(',');
        for(let i=0;i<data.length;i++){
            let floydSiteData = element(by.xpath('//span[contains(text(),"'+data[i]+'")]'));
            await browser.wait(until.presenceOf(floydSiteData), 50000, 'Element taking too long to appear in the DOM');
            await floydSiteData.getText().then(async function(text){
                await floydSite.push(text);
            });
        }
        console.log(floydSite);
    }

    async floydSiteLabels(floydData:string){
        let data=floydData.split(',');
        for(let i=0;i<data.length;i++){
            let floydSiteData = element(by.xpath('//td[contains(text(),"'+data[i]+'")]'));
            await browser.wait(until.presenceOf(floydSiteData), 50000, 'Element taking too long to appear in the DOM');
            await floydSiteData.getText().then(async function(text){
                await floydSite.push(text);
            });
            console.log(floydSite[i]);
        }
    }

    async verifySitesAgainstRentRollReport(count:string) {
        await this.verifySite.getText().then(async function (text) {
            let sp = text.split('of');
            let req = sp[1].split(" ");
            console.log(req[1]);
            await partnerPortal.push(req[1]);
        });
    }
    async verifySitesRentRollReport(count:string) {
        await this.verifySite.getText().then(async function (text) {
            let sp = text.split('of');
            let req = sp[1].split(" ");
            console.log(req[1]);
            await floydSite.push(req[1]);
            await browser.sleep(5000);
        });
    }

    async clickDocumentPartner(){
        await browser.wait(until.presenceOf(this.document_Arrow), 50000, 'Element taking too long to appear in the DOM');
        await this.document_Arrow.click();
    }
    async clickDocumentFloyd(){
        await browser.switchTo().frame(1);
        await browser.sleep(5000);
        await this.document_Arrow.click();

    }
    async switchFrame(){
        let windowHandles = browser.getAllWindowHandles();
        let parentHandle, childHandle;
        await browser.sleep(2000);
        await windowHandles.then(async function (handles) {
            parentHandle = handles[0];
            console.log("Total Handles :- " + handles.length);
            await browser.switchTo().window(parentHandle).then(async function () {
            });
        });
    }

    async buttonPresent(text:string){
        let btn = element(by.xpath('//span[contains(text(),"' + text + '")]'));
        await expect(btn.isPresent()).to.eventually.equal(false);
    }
}