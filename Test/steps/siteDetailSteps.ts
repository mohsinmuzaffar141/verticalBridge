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
const sitedetail = new siteDetailPage();


Then(/^click on site link  "([^"]*)"$/, {timeout: 5 * 50000}, async(siteNumber)=>{
    let site = cred[siteNumber]['siteNumber'];
    await sitedetail.selectSite(site);
});

Then(/^verify site number on detail page "([^"]*)"$/, {timeout: 5 * 50000}, async(site)=>{
    await sitedetail.verifySiteNumber(site);
});

Then(/^verify site Name on detail page "([^"]*)"$/, {timeout: 5 * 50000}, async(siteName)=>{
    await sitedetail.verifyName(siteName);
});

Then(/^verify general and contacts section on detailed page "([^"]*)"$/, {timeout: 5 * 50000}, async(label)=> {
    let data=cred[label]['label'];
    await sitedetail.verifyHeaderOnDetailedPage(data);
});

Then(/^verify site detail labels "([^"]*)"$/, {timeout: 5 * 50000}, async(detailLabel)=> {
    let data=cred[detailLabel]['detailLabel'];
    let value=cred[detailLabel]['labelValue'];
    await sitedetail.verifySiteDetailsData(data,value);
});

Then(/^verify site contacts labels "([^"]*)"$/, {timeout: 5 * 50000}, async(contacts)=> {
    let contact=cred[contacts]['contacts'];
    let contactData=cred[contacts]['contactsData'];
    await sitedetail.verifySiteContacts(contact,contactData);
});

Then(/^verify tabs on site detail page "([^"]*)"$/, {timeout: 5 * 50000}, async(tabs)=> {
    let tab=cred[tabs]['tabs'];
    await sitedetail.verifyTabs(tab);
});

Then(/^verify map pin site detail page "([^"]*)"$/, {timeout: 5 * 50000}, async(mapPin)=> {
    await sitedetail.verifyMapPin(mapPin);
});

Then(/^verify data above map on site detail page "([^"]*)"$/, {timeout: 5 * 50000}, async(mapdata)=> {
    let mapData=cred[mapdata]['mapData'];
    await sitedetail.verifyMapData(mapData);
});

Then(/^verify site detail labels not present "([^"]*)"$/, {timeout: 5 * 50000}, async(invalidlabels)=> {
    let data=cred[invalidlabels]['detailLabel'];
    await sitedetail.verifyLabelNotPreent(data);
});

Then(/^verify relationship should be present on the top "([^"]*)"$/, {timeout: 5 * 50000}, async(relationship)=>{
    let relation=cred[relationship]['name'];
    await sitedetail.verifyRelationshipName(relation);
});
Then(/^verify home page image on portal$/, {timeout: 5 * 50000}, async()=>{
    await sitedetail.homePageImage();
});