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
    table = element(by.xpath('//div[text()=" Site Number "]'));
    logo = element(by.xpath('(//img[@id="Logo"])[2]'));
    startDate = element(by.xpath('//div[text()=" Start Date "]//following-sibling::div//span//input'));
    endDate = element(by.xpath('//div[text()=" End Date "]//following-sibling::div//span//input'));
    defaultDateStart = element(by.xpath('//a[contains(@class, "ui-state-active") and @draggable="false"]'));


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
        //await browser.wait(until.presenceOf(this.table),50000000);
        // let table=element.all(by.xpath('(//tbody[@class="ui-table-tbody"])['+counter+']//tr'));
        // await table.then(async function (txt) {
        //     for (let i = 1; i <= txt.length; i++) {
        //         let tenantName = element(by.xpath('(//div[@class="col-' + columnName + ' ng-star-inserted"])[' + i + ']'));
        //         await tenantName.getText().then(async function (text) {
        //             console.log(text);
        //         });
        //     }
        // });
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
}
