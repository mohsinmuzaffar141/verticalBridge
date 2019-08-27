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

export class floydSitePage extends BasePage {

    plusIcon=element(by.xpath('//*[name()="svg" and @data-icon="plus"]'));
    selectPortfotioType=element(by.xpath('//form[@class="ng-pristine ng-invalid ng-touched"]//div[@class="mat-select-value"]'));
    portName=element(by.xpath('//input[@formcontrolname="name"]'));


    async clickHeading(heading: string) {
        let label = element(by.xpath('//h2[text()="' + heading + '"]'));
        await label.isPresent().then(async function (text) {
            if (text) {
                await label.click();
            }
        });
    }
    async clickPlusIcon() {
        await browser.wait(until.presenceOf(this.plusIcon), 500000, 'Element taking too long to appear in the DOM');
        await this.plusIcon.click();
    }
    async clickPortfolioType(portfolio:string) {
        let portfolioType=element(by.xpath('//span[contains(text()," '+portfolio+' ")]'));
        browser.getAllWindowHandles().then(function(handles){
            browser.switchTo().window(handles[1]).then(async function(){
                await browser.wait(until.presenceOf(this.selectPortfotioType), 5000, 'Element taking too long to appear in the DOM');
                await this.selectPortfotioType.click();
                await browser.sleep(3000);
                await browser.wait(until.presenceOf(portfolioType), 5000, 'Element taking too long to appear in the DOM');
                await portfolioType.click();
                await browser.sleep(3000);
            });
        });
    }
    async portfolioName(portfolio:string) {
        await browser.wait(until.presenceOf(this.portName), 5000, 'Element taking too long to appear in the DOM');
        await this.portName.sendKeys(portfolio);
        await browser.sleep(3000);
    }
}