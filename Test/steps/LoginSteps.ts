import { Given, Then, When } from "cucumber";
// import { expect } from 'chai';
import { browser,element,by } from "protractor";
import { LoginPage } from "../Pages/LoginPage";
import { when } from "q";

//data variables
const yaml = require('js-yaml');
const fs = require('fs');
let cred = yaml.safeLoad(fs.readFileSync('./Test/testData/users.yml', 'utf8'));

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const loginPage = new LoginPage();

Given(/^I am on floyd Page$/, {timeout:  5 * 50000}, async() => {
    try {
        await loginPage.OpenBrowser();
    }
    catch(e) {
        console.log(e);
    }
});

Given(/^I am on vertical bridge Page$/,{timeout:  5 * 50000}, async() => {
    try {
        await loginPage.launchApp();
    }
    catch(e) {
        console.log(e);
    }
});
When(/^Login to vertical bridge with "([^"]*)"$/, {timeout:  5 * 50000}, async(text) => {
    await loginPage.giveUserName(text);
    await loginPage.enterPassword(text);
    await loginPage.clickLoginButton();

});

When(/^Click checkbox button$/, {timeout:  5 * 50000}, async() => {
    await loginPage.clickcheckbox();
    await loginPage.clickyesbutton();
    // await loginPage.validate();
});
When(/^I log out$/, {timeout:  5 * 500000}, async() =>{
    await loginPage.logout();
});
When(/^I log out from floyd site$/, {timeout:  5 * 500000}, async() => {
    await loginPage.logoutfloyd();
});

Given(/^I am on floyd login Page$/,{timeout:  5 * 50000}, async() => {
    try {
        await loginPage.launchFloyd();
    }
    catch(e) {
        console.log(e);
    }
});
