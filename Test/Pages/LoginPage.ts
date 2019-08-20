import { browser, element, by, protractor } from 'protractor'
import { IdentificationType, BasePage } from './BasePage';
const chai = require("chai").use(require("chai-as-promised"));

//data variables
const yaml = require('js-yaml');
const fs = require('fs');
// let cred = yaml.safeLoad(fs.readFileSync('../testData/users.yml', 'utf8'));
// let configuration = yaml.safeLoad(fs.readFileSync('../testData/configurations.yml', 'utf8'));
let cred = yaml.safeLoad(fs.readFileSync('./Test/testData/users.yml', 'utf8'));
let configuration = yaml.safeLoad(fs.readFileSync('./Test/testData/configurations.yml', 'utf8'));

const expect = chai.expect;
let until = protractor.ExpectedConditions;

const Locators = {
    usernameField: {
        type: IdentificationType[IdentificationType.Name],
        value:"loginfmt"
    },
    passwordField: {
        type: IdentificationType[IdentificationType.Name],
        value:"passwd"
    },

    nextButton: {
        type: IdentificationType[IdentificationType.Id],
        value:"idSIButton9"
    },

    loginButton: {
        type: IdentificationType[IdentificationType.Id],
        value:"idSIButton9"
    },
    logoutButton: {
        type: IdentificationType[IdentificationType.Id],
        value:"logoutbutton"
    }
}

export class LoginPage extends BasePage{

    //usernameField = this.ElementLocator(Locators.usernameField);
    passwordField = this.ElementLocator(Locators.passwordField);
    loginButton = this.ElementLocator(Locators.loginButton);
    //nextBtn = this.ElementLocator(Locators.nextButton);
    unField = element(by.xpath("//input[@name='loginfmt']"));
    nexBtn = element(by.xpath("//input[@type='submit']"));
    checkbox = element(by.id("KmsiCheckboxField"));
    yesbtn = element(by.xpath("//input[@id='idSIButton9']"));
    logout_btn=element(by.xpath('//span[text()="Log Out"]'));



    async OpenBrowser() {
        browser.ignoreSynchronization = true;
        await browser.get("https://stagepartnerportal.verticalbridge.com");
        await browser.sleep(7000);
    }
    async launchApp() {
        await browser.sleep(5000);
        browser.ignoreSynchronization = true;
        await browser.get(configuration['App-url']);
    }


    async giveUserName(na: string){
        await browser.sleep(2000);
        await browser.wait(until.presenceOf(this.unField), 50000, 'Element taking too long to appear in the DOM');
        // let userName = 'username';
        await this.unField.sendKeys(cred[na]['username']);
        // await browser.wait(until.presenceOf(this.nexBtn), 50000, 'Element taking too long to appear in the DOM');
        await this.nexBtn.click();
        await browser.sleep(7000);
    }
    async enterPassword(passwordText: string){
        // let pass = 'password';
        await browser.wait(until.presenceOf(this.passwordField), 50000, 'Element taking too long to appear in the DOM');
        await this.passwordField.sendKeys(cred[passwordText]['password']);

    }
    async clickLoginButton(){
        await browser.wait(until.presenceOf(this.loginButton), 50000, 'Element taking too long to appear in the DOM');
        await this.loginButton.click();
        await browser.sleep(7000);
    }
    async clickcheckbox(){
        if (this.checkbox.checked) {
            await browser.wait(until.presenceOf(this.checkbox), 50000, 'Element taking too long to appear in the DOM');
            await this.yesbtn.click();
        }
        else {
            await browser.wait(until.presenceOf(this.checkbox), 50000, 'Element taking too long to appear in the DOM');
            await this.checkbox.click();
        }
    }

    async clickyesbutton(){
        await browser.wait(until.presenceOf(this.yesbtn), 50000, 'Element taking too long to appear in the DOM');
        await this.yesbtn.click();
        await browser.sleep(7000);

    }
    async validate(){
        let path = element(by.xpath("//h1[text()='Vertical Bridge Partner Portal']")).getText();

        let title: string = "Vertical Bridge Partner Portal";
        await expect(path).to.eventually.equal(title);
    }
    async logout(){
        await browser.wait(until.presenceOf(this.logout_btn),50000, 'Element taking too long to appear in the DOM');
        await this.logout_btn.click();
        await browser.sleep(7000);
        await browser.manage().deleteAllCookies();
        await browser.sleep(4000);
    }
}
