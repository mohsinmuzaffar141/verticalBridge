import { Given, Then, When } from "cucumber";

import {ManagementAgreementDataPage} from "../Pages/ManagementAgreementDataPage";
import {siteDetailPage} from "../Pages/siteDetailPage";
import {floydSitePage} from "../Pages/floydSitePage";
import {reports} from "../Pages/reportsPage";

//data variables
const yaml = require('js-yaml');
const fs = require('fs');
let floyd = yaml.safeLoad(fs.readFileSync('./Test/testData/floydSite.yml', 'utf8'));
const manageAgreePage = new ManagementAgreementDataPage();

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const sitedetail = new siteDetailPage();
const floydSite = new floydSitePage();
const report= new reports();

Then(/^verify dashboard option on portal "([^"]*)"$/, {timeout: 5 * 50000}, async(dashboardOption)=> {
    let dashboard=floyd[dashboardOption]['tab'];
    await sitedetail.advanceSearchRefinementCriteria(dashboard);
});
Then(/^I click on my dashboard "([^"]*)"$/, {timeout: 5 * 50000}, async(dashboardOption)=> {
    let dashboard=floyd[dashboardOption]['tab'];
    await floydSite.clickSaveBtn(dashboard);
});
Then(/^verify executed date on my dashboard$/, {timeout: 5 * 50000}, async()=> {
    await report.executedDate();
});
Then(/^verify management agreement count "([^"]*)"$/, {timeout: 5 * 50000}, async(management)=> {
    let count=floyd[management]['count'];
    await sitedetail.verifyDataUnderPropertyInformation(count);
});
Then(/^verify reports on my dashboard "([^"]*)"$/, {timeout: 5 * 50000}, async(reports)=>  {
    let report=floyd[reports]['report'];
    await sitedetail.verifyLink(report);
});
Then(/^click management agreement on my dashboard "([^"]*)"$/, {timeout: 5 * 50000}, async(reportLink)=>{
    let managementLink=floyd[reportLink]['link'];
    await sitedetail.selectSite(managementLink);
});
Then(/^verify management agreement report data "([^"]*)"$/, {timeout: 5 * 50000}, async(tableHeader)=> {
    let values=floyd[tableHeader]['tableHeader'];
    await sitedetail.verifyDataUnderPropertyInformation(values);
});
Then(/^verify active tenant should be present under rent roll report "([^"]*)"$/, {timeout: 5 * 50000000}, async(colName)=> {
    let columnName=floyd[colName]['colName'];
    let counter=floyd[colName]['count'];
    await report.verifyActiveTenant(columnName,counter)
});

Then(/^search the rent roll report list "([^"]*)"$/, {timeout: 5 * 50000}, async(text)=> {
    let filterData=floyd[text]['siteNumber'];
    let count=floyd[text]['count'];
    await manageAgreePage.searchBox(filterData,count);
});
Then(/^verify ascending and descending order of reports "([^"]*)"$/, {timeout: 5 * 50000}, async(colName)=> {
    let col=floyd[colName]['name'];
    let columnName= floyd[colName]['colName'];
    let counter=floyd[colName]['count'];
    await manageAgreePage.verifyOwnerOrder(columnName,counter);
    await manageAgreePage.clickAscendingAndDescendingOrder(col);
    await manageAgreePage.verifyDescendingOwnerOrder(columnName,counter);
});