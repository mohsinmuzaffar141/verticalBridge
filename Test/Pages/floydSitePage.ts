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

    plusIcon = element(by.xpath('//*[name()="svg" and @data-icon="plus"]'));
    portName = element(by.xpath('//input[@formcontrolname="name"]'));


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
                await browser.sleep(3000);
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
        await expect(portfolioName.isDisplayed()).to.eventually.equals(true);
        await expect(portfolioType.isDisplayed()).to.eventually.equals(true);

        }
}