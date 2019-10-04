import { Given, Then, When } from "cucumber";
import {siteDetailPage} from "../Pages/siteDetailPage";
import {floydSitePage} from "../Pages/floydSitePage";
import {reports} from "../Pages/reportsPage";
import {ManagementAgreementDataPage} from "../Pages/ManagementAgreementDataPage";

//data variables
const yaml = require('js-yaml');
const fs = require('fs');
let role = yaml.safeLoad(fs.readFileSync('./Test/testData/rolesPermission.yml', 'utf8'));
let cred = yaml.safeLoad(fs.readFileSync('./Test/testData/users.yml', 'utf8'));

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const siteDetail = new siteDetailPage();
const floydSite = new floydSitePage();
const report= new reports();
const manageAgreePage = new ManagementAgreementDataPage();


When(/^Click on security button "([^"]*)"$/, {timeout: 5 * 50000}, async (tab)=> {
    let value=role[tab]['tab'];
    await siteDetail.verifyLabelsUnderAdvanceSearch(value);
});
When(/^Click on manage users "([^"]*)"$/, {timeout: 5 * 50000}, async (rolesLink)=> {
    let link=role[rolesLink]['link'];
    await siteDetail.selectSite(link);
});
When(/^Search the External\/Internal users "([^"]*)"$/, {timeout: 5 * 50000}, async (searchText)=> {
    let searchData=role[searchText]['search'];
    let count=role[searchText]['count'];
    await manageAgreePage.searchBox(searchData,count);
});
When(/^Click on external and internal user "([^"]*)"$/, {timeout: 5 * 50000}, async (user)=> {
    let userData=role[user]['search'];
    await floydSite.verifyTabsFloydSite(userData);

});
Then(/^Click on is internal checkbox "([^"]*)"$/, {timeout: 5 * 50000}, async (text)=> {
    let data=role[text]['role'];
    await siteDetail.verifyLabelsUnderAdvanceSearch(data);
});
Then(/^verify my site access on main page for internal\/external users$/, {timeout: 5 * 50000}, async ()=>{
    await manageAgreePage.verifyMySiteAccess();
});
Then(/^verify management agreement list "([^"]*)"$/, {timeout: 5 * 50000}, async (text)=> {
    let data=cred[text]['list'];
    await siteDetail.verifyContactsLabel(data);
});
Then(/^verify relationship should not be viewable for external users "([^"]*)"$/, {timeout: 5 * 50000}, async (text)=>{
    let btn=role[text]['button'];
    await floydSite.buttonPresent(btn);
});