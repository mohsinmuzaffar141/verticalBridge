import { Given, Then, When } from "cucumber";
// import { expect } from 'chai';
import { browser,element,by } from "protractor";
import {ManagementAgreementDataPage} from "../Pages/ManagementAgreementDataPage";
import {siteDetailPage} from "../Pages/siteDetailPage";

//data variables
const yaml = require('js-yaml');
const fs = require('fs');
let cred = yaml.safeLoad(fs.readFileSync('./Test/testData/users.yml', 'utf8'));

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const siteDetail = new siteDetailPage();


Then(/^click on site link "([^"]*)"$/, {timeout: 5 * 50000}, async(siteNumber)=>{
    let site = cred[siteNumber]['siteNumber'];
    await siteDetail.selectSite(site);
});

Then(/^verify site number on detail page "([^"]*)"$/, {timeout: 5 * 50000}, async(site)=>{
    let siteNumber = cred[site]['siteNumber'];
    await siteDetail.verifySiteNumber(siteNumber);
});

Then(/^verify site Name on detail page "([^"]*)"$/, {timeout: 5 * 50000}, async(siteName)=>{
    let site = cred[siteName]['siteName'];
    let siteNumber = cred[siteName]['siteNumber'];
    await siteDetail.verifyName(site,siteNumber);
});

Then(/^verify general and contacts section on detailed page "([^"]*)"$/, {timeout: 5 * 50000}, async(label)=> {
    let data=cred[label]['label'];
    await siteDetail.verifyHeaderOnDetailedPage(data);
});

Then(/^verify site detail labels "([^"]*)"$/, {timeout: 5 * 50000}, async(detailLabel)=> {
    let data=cred[detailLabel]['detailLabel'];
    let value=cred[detailLabel]['labelValue'];
    await siteDetail.verifySiteDetailsData(data,value);
});

Then(/^verify site contacts labels "([^"]*)"$/, {timeout: 5 * 50000}, async(contacts)=> {
    let contact=cred[contacts]['contacts'];
    let contactData=cred[contacts]['contactsData'];
    await siteDetail.verifySiteContacts(contact,contactData);
});

Then(/^verify tabs on site detail page "([^"]*)"$/, {timeout: 5 * 50000}, async(tabs)=> {
    let tab=cred[tabs]['tabs'];
    await siteDetail.verifyTabs(tab);
});

Then(/^verify map pin site detail page "([^"]*)"$/, {timeout: 5 * 50000}, async(mapPin)=> {
    await siteDetail.verifyMapPin(mapPin);
});

Then(/^verify data above map on site detail page "([^"]*)"$/, {timeout: 5 * 50000}, async(mapdata)=> {
    let mapData=cred[mapdata]['mapData'];
    await siteDetail.verifyMapData(mapData);
});

Then(/^verify site detail labels not present "([^"]*)"$/, {timeout: 5 * 50000}, async(invalidlabels)=> {
    let data=cred[invalidlabels]['detailLabel'];
    await siteDetail.verifyLabelNotPreent(data);
});

Then(/^verify relationship should be present on the top "([^"]*)"$/, {timeout: 5 * 50000}, async(relationship)=>{
    let relation=cred[relationship]['name'];
    await siteDetail.verifyRelationshipName(relation);
});
Then(/^verify home page image on portal$/, {timeout: 5 * 50000}, async()=>{
    await siteDetail.homePageImage();
});