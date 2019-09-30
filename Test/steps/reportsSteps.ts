import { Given, Then, When } from "cucumber";

import {ManagementAgreementDataPage} from "../Pages/ManagementAgreementDataPage";
import {siteDetailPage} from "../Pages/siteDetailPage";
import {floydSitePage} from "../Pages/floydSitePage";
import {reports} from "../Pages/reportsPage";

//data variables
const yaml = require('js-yaml');
const fs = require('fs');
let floyd = yaml.safeLoad(fs.readFileSync('./Test/testData/floydSite.yml', 'utf8'));
let site = yaml.safeLoad(fs.readFileSync('./Test/testData/siteGeneral.yml', 'utf8'));
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
Then(/^click on hide column "([^"]*)"$/, {timeout: 5 * 50000}, async(hideColumn)=> {
    let hide=floyd[hideColumn]['button'];
    await manageAgreePage.clickExportFile(hide);
});
Then(/^selected column should be hidden "([^"]*)"$/, {timeout: 5 * 50000}, async(columnName)=> {
    let name=floyd[columnName]['colName'];
    await report.hideColumn(name);
});
Then(/^verify that selected column should be unhidden "([^"]*)"$/, {timeout: 5 * 50000}, async(columnName)=> {
    let name=floyd[columnName]['colName'];
    await report.unHideColumn(name);
});
Then(/^verify the scroll should move$/, {timeout: 5 * 50000}, async()=> {
    await report.scrollMovement();
});
Then(/^verify group hierarchy on forecast report "([^"]*)"$/, {timeout: 5 * 50000}, async(columnName)=>  {
    let colName=floyd[columnName]['colName'];
    let count=floyd[columnName]['count'];
    let siteNumber=floyd[columnName]['siteNumber'];
    let leaseNumber=floyd[columnName]['leaseNumber'];
    await report.verifyManagementAgreementForecast(colName,count);
    await sitedetail.verifyLink(siteNumber);
    await sitedetail.verifyLink(leaseNumber);
});
Then(/^verify group hierarchy on new leases report "([^"]*)"$/, {timeout: 5 * 50000}, async(columnName)=> {
    let siteNumber=floyd[columnName]['siteNumber'];
    let leaseNumber=floyd[columnName]['leaseNumber'];
    await sitedetail.verifyLink(siteNumber);
    await sitedetail.verifyLink(leaseNumber);
});
Then(/^verify data of rent roll report against partner portal "([^"]*)"$/, {timeout: 5 * 50000}, async(data)=>{
    let colName=floyd[data]['columnName'];
    let value=floyd[data]['value'];
    await floydSite.getPartnerPortalData(colName,value);
});

Then(/^verify data of rent roll report against floyd site "([^"]*)"$/, {timeout: 5 * 50000}, async(data)=>{
    let colName=floyd[data]['columnName'];
    let value=floyd[data]['value'];
    let siteNumber=floyd[data]['siteNumber'];
    let siteName=floyd[data]['siteName'];
    let number=floyd[data]['number'];

    await floydSite.clickOnTab();
    await floydSite.verifySiteNameFloyd(siteNumber,siteName,number);
    await floydSite.getFloydSiteData(value);
    await floydSite.verifyDataOfBothSides();
    await floydSite.deleteArray();
});
Then(/^search the values in floyd site "([^"]*)"$/, {timeout: 5 * 50000}, async(floydData)=> {
    let siteNumber=floyd[floydData]['siteNumber'];
    await floydSite.sendValuesToFloyd(siteNumber);
});
Then(/^I click on floyd stage "([^"]*)"$/, {timeout: 5 * 50000}, async(floydStage)=> {
    let floydLink=floyd[floydStage]['floydStage'];
    await sitedetail.selectSite(floydLink);
});
Then(/^verify data on partner portal site "([^"]*)"$/, {timeout: 5 * 50000}, async(partnerPortal)=>  {
    let partnerData=floyd[partnerPortal]['labels'];
    await floydSite.partnerPortalSiteData(partnerData);
});
Then(/^verify data on floyd site "([^"]*)"$/, {timeout: 5 * 50000}, async(floydSiteData)=>  {
    let floydData=floyd[floydSiteData]['labelsFloyd'];
    await floydSite.floydSiteData(floydData);
    await floydSite.verifyDataOfBothSides();
    await floydSite.deleteArray();
});
Then(/^verify labels on partner portal site "([^"]*)"$/, {timeout: 5 * 50000}, async(labelsPartnerPortal)=>  {
    let partnerLabels=floyd[labelsPartnerPortal]['labelsPartner'];
    await floydSite.partnerPortalSiteData(partnerLabels);
});
Then(/^verify labels on floyd site "([^"]*)"$/, {timeout: 5 * 50000}, async(labelsFloyd)=>  {
    let floydLabels=floyd[labelsFloyd]['labelsFloyd'];
    await floydSite.floydSiteLabels(floydLabels);
});
Then(/^click "([^"]*)" on floyd site$/, {timeout: 5 * 50000}, async(tabs)=>  {
    let floydTabs=floyd[tabs]['tab'];
    await sitedetail.verifyLabelsUnderAdvanceSearch(floydTabs);
});
Then(/^verify label on floyd site "([^"]*)"$/, {timeout: 5 * 50000}, async(labelsFloyd)=>  {
    let floydLabels=floyd[labelsFloyd]['labelsFloyd'];
    await floydSite.floydSiteData(floydLabels);
});
Then(/^verify documents on partner portal site "([^"]*)"$/, {timeout: 5 * 50000}, async (documentPartnerPortal)=> {
    let partnerDocuments=floyd[documentPartnerPortal]['labelsPartner'];
    await floydSite.partnerSiteDocument(partnerDocuments);
});
Then(/^click on document on site detail page$/, {timeout: 5 * 50000}, async ()=> {
    await floydSite.clickDocumentPartner();
});
Then(/^verify documents on floyd site "([^"]*)"$/, {timeout: 5 * 50000}, async (documentFloyd)=> {
    let floydDocuments=floyd[documentFloyd]['labelsFloyd'];
    await floydSite.partnerSiteDocument(floydDocuments);
});
Then(/^click on document on floyd site detail page$/, {timeout: 5 * 50000}, async ()=> {
    await floydSite.clickDocumentFloyd();
});
Then(/^verify header against rent roll report "([^"]*)"$/, {timeout: 5 * 50000}, async (reportHeader)=> {
    let header=floyd[reportHeader]['thReportHeader'];
    await sitedetail.verifyDataUnderPropertyInformation(header);
});
Then(/^verify active sites against rent roll report "([^"]*)"$/, {timeout: 5 * 50000}, async (activeSites)=>  {
    let count=floyd[activeSites]['siteCount'];
    await floydSite.verifySitesAgainstRentRollReport(count);
});
Then(/^verify sites against rent roll report "([^"]*)"$/, {timeout: 5 * 50000}, async (sites)=> {
    let count=floyd[sites]['siteCount'];
    await floydSite.verifySitesRentRollReport(count);
    await floydSite.verifyDataOfBothSides();
    await floydSite.deleteArray();
});
