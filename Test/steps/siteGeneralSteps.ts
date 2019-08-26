import { Given, Then, When } from "cucumber";
// import { expect } from 'chai';
import { browser,element,by } from "protractor";
import { LoginPage } from "../Pages/LoginPage";
import { when } from "q";
import {ManagementAgreementDataPage} from "../Pages/ManagementAgreementDataPage";
import {siteDetailPage} from "../Pages/siteDetailPage";

//data variables
const yaml = require('js-yaml');
const fs = require('fs');
let site = yaml.safeLoad(fs.readFileSync('./Test/testData/siteGeneral.yml', 'utf8'));
let map = yaml.safeLoad(fs.readFileSync('./Test/testData/map.yml', 'utf8'));

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const sitedetail = new siteDetailPage();
const maps = new siteDetailPage();

Then(/^verify edit and site inspection icon are not present on site header "([^"]*)"$/, {timeout: 5 * 50000}, async(clickable)=>{
    let data=site[clickable]['tabData'];
    await sitedetail.editSiteNOtPresent();
    await sitedetail.siteInspectionNOtPresent();
    await sitedetail.verifyLeasesTabData(data);
});

Then(/^verify management agreement are not present on property tab "([^"]*)"$/, {timeout: 5 * 50000}, async(propertyData)=>{
    let thData=map[propertyData]['thProperty'];
    await sitedetail.managementAgreementNotPresent();
    await sitedetail.verifyContactGroupData(thData);
});
Then(/^verify links to linkedIn page and newsroom page "([^"]*)"$/, {timeout: 5 * 50000}, async(links)=> {
    let link=site[links]['linkText'];
    await sitedetail.verifyLink(link);
});
Then(/^verify click to call function under contact tab$/, {timeout: 5 * 50000}, async()=> {
    await sitedetail.clickOnLinks();
});
Then(/^verify footer on home page "([^"]*)"$/, {timeout: 5 * 50000}, async(footer)=> {
    let footerText=site[footer]['footerText'];
    await sitedetail.verifyDataUnderPropertyInformation(footerText);
});
Then(/^verify help tab on home page$/, {timeout: 5 * 50000}, async()=>{
    await sitedetail.verifyHelpTab();
});
Then(/^verify search box on main menu$/, {timeout: 5 * 50000}, async()=> {
    await sitedetail.mainMenuSearch();
});
Then(/^verify search box will display suggestions to match the text "([^"]*)"$/, {timeout: 5 * 50000}, async(text)=>{
    await sitedetail.verifySearchSuggestion(text);
});
Then(/^verify table header of advance search "([^"]*)"$/, {timeout: 5 * 50000}, async(tableHeader)=>{
    let thData=site[tableHeader]['thAdvanceSearch'];
    await maps.advanceSearchTableHeader(thData);
});
Then(/^click on advance search$/, {timeout: 5 * 50000}, async()=> {
    await sitedetail.clickOnAdvanceSearch();
});
Then(/^verify labels of advance search "([^"]*)"$/, {timeout: 5 * 50000}, async(label)=>{
    let txt1=site[label]['advanceLabel'];
    await sitedetail.verifyLabelsUderAdvanceSearch(label);
    await sitedetail.verifyDataUnderPropertyInformation(txt1);
});
Then(/^verify advance search should have refinemenet criteria "([^"]*)"$/, {timeout: 5 * 50000}, async(searchCriteria)=>{
    let txt1=site[searchCriteria]['advanceLabel'];
    await sitedetail.advanceSearchRefinementCriteria(searchCriteria);
    await sitedetail.verifyDataUnderPropertyInformation(txt1);
});