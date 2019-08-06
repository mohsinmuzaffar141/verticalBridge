import { Given, Then, When } from "cucumber";
// import { expect } from 'chai';
import { browser,element,by } from "protractor";
import { LoginPage } from "../Pages/LoginPage";
import { when } from "q";
import {ManagementAgreementDataPage} from "../Pages/ManagementAgreementDataPage";

//data variables
const yaml = require('js-yaml');
const fs = require('fs');
let cred = yaml.safeLoad(fs.readFileSync('./Test/testData/users.yml', 'utf8'));

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const manageAgreepage = new ManagementAgreementDataPage();
//const login: LoginPage = new LoginPage();

When(/^I click to the select partner view button$/, {timeout: 5 * 50000}, async() => {
    await manageAgreepage.clickonsearchbutton();
});

When(/^selects the "([^"]*)"$/, {timeout: 5 * 50000},async(text) => {
    await  manageAgreepage.entersearchvalue(text);
});

Then(/^click the select button$/, {timeout: 5 * 50000}, async() => {
    await manageAgreepage.clickselectbutton();
});
Then(/^click on my sites button$/, {timeout: 5 * 50000}, async() => {
    await manageAgreepage.clickMySites();
});
Then(/^verify managment agreement data "([^"]*)"$/, {timeout: 5 * 50000}, async(text) => {
    await manageAgreepage.verifyAgreementData(text);
    await manageAgreepage.verifyOwnerName(text);
    await manageAgreepage.verifyNoOfsites(text);
    await manageAgreepage.verifyRevenue(text);
});
Then(/^verify owner name should be sorted in ascending order$/, {timeout: 5 * 50000}, async() => {
    await manageAgreepage.verifyOwnerOrder();
});

Then(/^verify revenue "([^"]*)"$/, {timeout: 5 * 50000}, async(text) => {
    await manageAgreepage.verifyRevenue(text);
});
When(/^I click on relationship "([^"]*)"$/, {timeout: 5 * 50000}, async(portfolioName) => {
    await manageAgreepage.getPortfolioList(portfolioName);
});
Then(/^click on filter on\/off tab$/, {timeout: 5 * 50000}, async() => {
    await manageAgreepage.clickFilterBtn();
});
Then(/^verify filter is enabled$/, {timeout: 5 * 50000}, async() => {
    await manageAgreepage.verifyFilter();
});
Then(/^verify that sites should be displayed "([^"]*)"$/, {timeout: 5 * 50000}, async(text) => {
    await manageAgreepage.verifySites(text);
});
Then(/^search the management agreement list "([^"]*)"$/, {timeout: 5 * 50000}, async(text) => {
    await manageAgreepage.searchbox(text);
});
Then(/^click on ascending and descending order tab "([^"]*)"$/, function () {

});
