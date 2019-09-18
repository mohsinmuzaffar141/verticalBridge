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
Then(/^verify rent roll report should be paginated "([^"]*)"$/, {timeout: 5 * 50000}, async(count)=> {
    let siteData = floyd[count]['sitesCount'];
    await manageAgreePage.verifySites(siteData);
});
Then(/^verify rent roll report should be downloaded "([^"]*)"$/, {timeout: 5 * 50000}, async(exportExcel)=>{
    let exportFile=floyd[exportExcel]['button'];
    let file= floyd[exportExcel]['fileName'];
    await manageAgreePage.clickExportFile(exportFile);
    await manageAgreePage.verifyDownloadFilePdf(file);
});
Then(/^filter the rent roll report list "([^"]*)"$/, {timeout: 5 * 50000}, async(text)=>{
    let filterData=floyd[text]['siteNumber'];
    let filterColumn=floyd[text]['sitecolumn'];
    let count=floyd[text]['count'];
    await manageAgreePage.searchFilter(filterData,count,filterColumn);
});
Then(/^verify logo and rent roll present on page "([^"]*)"$/, {timeout: 5 * 50000}, async(reports)=> {
    let txt=floyd[reports]['attributeData'];
    await sitedetail.verifyAttributeOnLeasesTab(txt);
    await report.verifyLogo();
});
Then(/^verify table header of rent roll report "([^"]*)"$/, {timeout: 5 * 50000}, async(tableHeader)=> {
    let thData=floyd[tableHeader]['thReportHeader'];
    await sitedetail.advanceSearchTableHeader(thData);
});
Then(/^verify that records should be displayed on rent roll report "([^"]*)"$/, {timeout: 5 * 50000}, async(count)=> {
    let siteData = floyd[count]['recordCount'];
    await manageAgreePage.verifySites(siteData);
});
Then(/^verify no parameter should be passed to generate rent roll report$/, {timeout: 5 * 50000}, async()=>{
    await report.verifyReport();
});
Then(/^Enter start date on forecast report "([^"]*)"$/, {timeout: 5 * 50000}, async(date)=>{
    let startDate=floyd[date]['startDate'];
    await report.setStartDate(startDate);
});
Then(/^Enter end date on forecast report "([^"]*)"$/, {timeout: 5 * 50000}, async(date)=>{
    let endDate=floyd[date]['endDate'];
    await report.setEndDate(endDate);
});
Then(/^Click on generate report button "([^"]*)"$/, {timeout: 5 * 50000}, async(generateReport)=> {
    let report=floyd[generateReport]['button'];
    await manageAgreePage.clickExportFile(report);
});
Then(/^verify default start date on forecast report "([^"]*)"$/, {timeout: 5 * 50000}, async(text)=> {
    let month=floyd[text]['monthStart'];
    await report.defaultStartDate(month);
});
Then(/^verify default end date on forecast report "([^"]*)"$/, {timeout: 5 * 50000}, async(text)=> {
    let month=floyd[text]['monthEnd'];
    await report.defaultEndDate(month);
});
Then(/^click start date from calendar on forecast report "([^"]*)"$/, {timeout: 5 * 50000}, async(startDate)=>  {
    let startDateFromCalender=floyd[startDate]['startDateCalender'];
    await report.selectStartDateFromCalender(startDateFromCalender);
});
Then(/^click end date from calendar on forecast report "([^"]*)"$/, {timeout: 5 * 50000}, async(endDate)=>  {
    let endDateFromCalender=floyd[endDate]['endDateCalender'];
    await report.selectEndDateFromCalender(endDateFromCalender);
});
Then(/^verify executed date report on my dashboard$/, {timeout: 5 * 50000}, async()=>{
    await report.executedDateReport();
});