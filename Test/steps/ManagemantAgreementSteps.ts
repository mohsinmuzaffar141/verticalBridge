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
const manageAgreePage = new ManagementAgreementDataPage();
//const login: LoginPage = new LoginPage();

When(/^I click to the select partner view button$/, {timeout: 5 * 50000}, async() => {
    await manageAgreePage.clickOnSearchButton();
});

When(/^selects the "([^"]*)"$/, {timeout: 5 * 50000},async(text) => {
    await  manageAgreePage.enterSearchValue(text);
});

Then(/^click the select button$/, {timeout: 5 * 50000}, async() => {
    await manageAgreePage.clickSelectButton();
    });
Then(/^click on my sites button$/, {timeout: 5 * 50000}, async() => {
    await manageAgreePage.clickMySites();
});
Then(/^verify management agreement data "([^"]*)"$/, {timeout: 5 * 50000}, async(text) => {
    let agreementData = cred[text]['managementData'];
    let colName = cred[text]['columnName'];
    await manageAgreePage.verifyAgreementData(agreementData,colName);
    await manageAgreePage.verifyOwnerName(text);
    await manageAgreePage.verifyNoOfSites(text);
    await manageAgreePage.verifyRevenue(text);
});
Then(/^verify owner name should be sorted in ascending order "([^"]*)"$/, {timeout: 5 * 50000}, async(colName) => {
    let columnName= cred[colName]['colName'];
    let counter=cred[colName]['count'];
    await manageAgreePage.verifyOwnerOrder(columnName,counter);
});

Then(/^verify revenue "([^"]*)"$/, {timeout: 5 * 50000}, async(text) => {
    await manageAgreePage.verifyRevenue(text);
});
When(/^I click on relationship "([^"]*)"$/, {timeout: 5 * 50000}, async(portfolioName) => {
    await manageAgreePage.getPortfolioList(portfolioName);
});
Then(/^click on filter on\/off tab$/, {timeout: 5 * 50000}, async() => {
    await manageAgreePage.clickFilterBtn();
});
Then(/^verify filter is enabled$/, {timeout: 5 * 50000}, async() => {
    await manageAgreePage.verifyFilter();
});
Then(/^verify that sites should be displayed "([^"]*)"$/, {timeout: 5 * 50000}, async(count) => {
    let siteData = cred[count]['sitesCount'];
    await manageAgreePage.verifySites(siteData);
});
Then(/^search the management agreement list "([^"]*)"$/, {timeout: 5 * 50000}, async(text) => {
    let filterData=cred[text]['siteNumber'];
    let count=cred[text]['count'];
    await manageAgreePage.searchBox(filterData,count);
});
Then(/^click on ascending and descending order tab "([^"]*)"$/, {timeout: 5 * 50000}, async(colName) => {
    let col=cred[colName]['name'];
    let columnName= cred[colName]['colName'];
    let counter=cred[colName]['count'];
    await manageAgreePage.verifyOwnerOrder(columnName,counter);
    await manageAgreePage.clickAscendingAndDescendingOrder(col);
    await manageAgreePage.verifyDescendingOwnerOrder(columnName,counter);
});
Then(/^click on export to excel button "([^"]*)"$/, {timeout: 5 * 50000}, async(exportExcel) => {
    let exportFile=cred[exportExcel]['button'];
    await manageAgreePage.clickExportFile(exportFile);
});
Then(/^verify the file should be downloaded$/, {timeout: 5 * 50000}, async() =>  {
    await manageAgreePage.verifyDownloadFile();
});
