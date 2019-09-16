import { Given, Then, When } from "cucumber";

import {ManagementAgreementDataPage} from "../Pages/ManagementAgreementDataPage";

//data variables
const yaml = require('js-yaml');
const fs = require('fs');
let cred = yaml.safeLoad(fs.readFileSync('./Test/testData/users.yml', 'utf8'));

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const manageAgreepage = new ManagementAgreementDataPage();



Then(/^filter the management agreement list "([^"]*)"$/, {timeout: 5 * 50000}, async(text) => {
    let filterData=cred[text]['siteNumber'];
    let filterColumn=cred[text]['sitecolumn'];
    let count=cred[text]['count'];
    await manageAgreepage.searchFilter(filterData,count,filterColumn);
});

Then(/^verify filter is provided in site list$/, {timeout: 5 * 50000}, async() => {
    await manageAgreepage.verifyFilterPresent();
});
Then(/^verify site number should be present "([^"]*)"$/, {timeout: 5 * 50000}, async(siteNumber) => {
    await manageAgreepage.verifySiteNumber(siteNumber);
});
Then(/^verify site name should be present "([^"]*)"$/, {timeout: 5 * 50000}, async(siteName) => {
    await manageAgreepage.verifySiteData(siteName);
});
Then(/^verify address should be present "([^"]*)"$/, {timeout: 5 * 50000}, async(address) => {
    await manageAgreepage.verifySiteData(address);
});
Then(/^verify city should be present "([^"]*)"$/, {timeout: 5 * 50000}, async(city) => {
    await manageAgreepage.verifySiteData(city);
});
Then(/^verify state should be present "([^"]*)"$/, {timeout: 5 * 50000}, async(state) => {
    await manageAgreepage.verifySiteData(state);
});
Then(/^verify zipCode should be present "([^"]*)"$/, {timeout: 5 * 50000}, async(zipcode) => {
    await manageAgreepage.verifySiteData(zipcode);
});
Then(/^verify country should be present "([^"]*)"$/, {timeout: 5 * 50000}, async(country) => {
    await manageAgreepage.verifySiteData(country);
});
Then(/^verify status should be present "([^"]*)"$/, {timeout: 5 * 50000}, async(status) => {
    await manageAgreepage.verifySiteData(status);
});
Then(/^verify site name should be sorted in ascending order$/, {timeout: 5 * 50000}, async() => {
    await manageAgreepage.verifySiteOrder();
});
Then(/^verify that filter applied is removed "([^"]*)"$/, {timeout: 5 * 50000}, async(text) =>{
    let count=cred[text]['sitesCount'];
    await manageAgreepage.removeFilter();
    await manageAgreepage.verifySites(count);
});

