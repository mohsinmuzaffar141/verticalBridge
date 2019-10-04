import { browser, element, by, protractor } from 'protractor'
import { IdentificationType, BasePage } from './BasePage';
import {Key} from "readline";
const chai = require("chai").use(require("chai-as-promised"));

//data variables
const yaml = require('js-yaml');
const fs = require('fs');

let cred = yaml.safeLoad(fs.readFileSync('./Test/testData/users.yml', 'utf8'));


const expect = chai.expect;
let until = protractor.ExpectedConditions;

export class reports extends BasePage {

    date = element(by.xpath('//b[contains(text(),"Executed At")]'));
    reportDate=element(by.xpath('//div[contains(text(),"Executed On")]'));
    table = element(by.xpath('//div[text()=" Site Name "]'));
    logo = element(by.xpath('(//img[@id="Logo"])[2]'));
    startDate = element(by.xpath('//div[text()=" Start Date "]//following-sibling::div//span//input'));
    endDate = element(by.xpath('//div[text()=" End Date "]//following-sibling::div//span//input'));
    defaultDateStart = element(by.xpath('//a[contains(@class, "ui-state-active") and @draggable="false"]'));
    moveRight=element(by.xpath('//button[@icon="pi pi-angle-right"]'));
    moveLeft=element(by.xpath('//button[@icon="pi pi-angle-left"]'));
    cancel=element(by.xpath('//span[text()="Close"]'));

    async executedDate() {
        await this.date.getText().then(async function (text) {
            console.log(text);
        });
        await expect(this.date.isPresent()).to.eventually.equal(true);
    }
    async executedDateReport() {
        await this.reportDate.getText().then(async function (text) {
            console.log(text);
        });
        await expect(this.reportDate.isPresent()).to.eventually.equal(true);
    }

    async verifyActiveTenant(columnName: string, counter: string) {
        await browser.wait(until.presenceOf(this.table),50000000);
        let table=element.all(by.xpath('(//tbody[@class="ui-table-tbody"])['+counter+']//tr'));
        await table.then(async function (txt) {
            for (let i = 1; i <= txt.length; i++) {
                let tenantName = element(by.xpath('(//div[@class="col-' + columnName + ' ng-star-inserted"])[' + i + ']'));
                await tenantName.getText().then(async function (text) {
                    console.log(text);
                });
            }
        });
    }

    async verifyLogo() {
        await expect(this.logo.isPresent()).to.eventually.equal(true);
    }

    async verifyReport() {
        await browser.wait(until.presenceOf(this.table), 50000000);
        await expect(this.table.isPresent()).to.eventually.equal(true);
    }

    async setStartDate(date: string) {
        await this.startDate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await this.startDate.sendKeys(protractor.Key.DELETE);
        await browser.sleep(2000);
        await this.startDate.sendKeys(date);
    }

    async setEndDate(date: string) {
        await this.endDate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await this.endDate.sendKeys(protractor.Key.DELETE);
        await browser.sleep(2000);
        await this.endDate.sendKeys(date);
    }

    async defaultStartDate(date: string) {
        let labels = date.split(',');
        await this.startDate.click();
        await browser.wait(until.presenceOf(this.defaultDateStart), 50000000);
        await this.defaultDateStart.getText().then(async function (text) {
            console.log(text);
            await expect(text).to.equal('1');
            for (let i = 0; i < labels.length; i++) {
                let msg = element(by.xpath('//span[contains(text(),"'+labels[i]+'")]'));
                await msg.getText().then(async function(display){
                    console.log(display);
                    await expect(display).to.equal(labels[i]);
                });
            }
        });
    }

    async defaultEndDate(date: string) {
        let labels = date.split(',');
        await this.endDate.click();
        await browser.wait(until.presenceOf(this.defaultDateStart), 50000000);
        await this.defaultDateStart.getText().then(async function (text) {
            console.log(text);
            await expect(text).to.equal('31');
            for(let i = 0; i < labels.length; i++){
                let msg = element(by.xpath('//span[contains(text(),"'+labels[i]+'")]'));
                await msg.getText().then(async function(display){
                    console.log(display);
                    await expect(display).to.equal(labels[i]);
                });
            }
        });
    }

    async selectStartDateFromCalender(date:string){
        await this.startDate.click();
        let selectDate=element(by.xpath('//a[contains(text(),"'+date+'")]'));
        await selectDate.click();
    }
    async selectEndDateFromCalender(date:string){
        await this.endDate.click();
        let selectDate=element(by.xpath('//a[contains(text(),"'+date+'")]'));
        await selectDate.click();
    }

    async hideColumn(colName:string){
        let columnName=element(by.xpath('//div[text()="'+colName+'"]'));
        let column=element(by.xpath('//div[@title="Sort by '+colName+'"]'));
        await columnName.click();
        await this.moveRight.click();
        await this.cancel.click();
        await expect(column.isPresent()).to.eventually.equal(false);
    }
    async unHideColumn(colName:string){
        let columnName=element(by.xpath('//div[text()="'+colName+'"]'));
        let column=element(by.xpath('//div[@title="Sort by '+colName+'"]'));
        await columnName.click();
        await this.moveLeft.click();
        await this.cancel.click();
        await browser.refresh(5000);
        await browser.wait(until.presenceOf(this.table), 50000000);
        await expect(column.isPresent()).to.eventually.equal(true);
    }
    async scrollMovement(){
        for(let i=0;i<=10000;i+=20){
            await browser.executeScript("document.querySelector('.ui-table-wrapper.ng-star-inserted').scrollLeft = "+i);
        }
        //await browser.sleep(2000);
        for(let j=10000;j>=0;j-=20) {
            await browser.executeScript("document.querySelector('.ui-table-wrapper.ng-star-inserted').scrollLeft = " + j);
        }
    }
    async verifyManagementAgreementForecast(colName:string,counter:string) {
        let NAMES =[];
        let table = element.all(by.xpath('(//tbody[@class="ui-table-tbody"])[' + counter + ']//tr'));
        await table.then(async function (txt) {
            for (let i = 1; i <= txt.length; i++) {
                let ownerName = element(by.xpath('(//div[@class="col-' + colName + ' ng-star-inserted"])[' + i + ']'));
                await ownerName.getText().then(async function (text) {
                    await console.log(text);
                });
            }
        });
    }
}
