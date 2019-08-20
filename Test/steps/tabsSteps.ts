import { Given, Then, When } from "cucumber";

import {siteDetailPage} from "../Pages/siteDetailPage";

//data variables
const yaml = require('js-yaml');
const fs = require('fs');
let cred = yaml.safeLoad(fs.readFileSync('./Test/testData/users.yml', 'utf8'));
let map = yaml.safeLoad(fs.readFileSync('./Test/testData/map.yml', 'utf8'));

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const maps = new siteDetailPage();


Then(/^search the lotaion on the map "([^"]*)"$/, {timeout: 5 * 50000}, async(location)=> {
    await maps.searchMapLocation(location);
});
Then(/^click on reset button "([^"]*)"$/, {timeout: 5 * 50000}, async(text)=> {
    await maps.clickResetTab();
    await maps.verifyMapPin(text);
});
Then(/^click on auto view button$/, {timeout: 5 * 50000}, async()=> {
 await maps.clickAutoViewTab();
});
Then(/^click "([^"]*)" on site detail page$/, {timeout: 5 * 50000}, async(tab)=>  {
    await maps.selectTab(tab);
});
Then(/^verify contact label are present "([^"]*)"$/, {timeout: 5 * 50000}, async(contactLabel)=> {
    let labelContacts=map[contactLabel]['tabLabel'];
    await maps.verifyContactsLabel(labelContacts);
});
Then(/^verify contact data are present "([^"]*)"$/, {timeout: 5 * 50000}, async(contactsData)=> {
    let thData=map[contactsData]['thContacts'];
    let tdData=map[contactsData]['tdcontacts'];
    await maps.verifyContactGroupData(thData);
});
Then(/^verify contact data are not present "([^"]*)"$/, {timeout: 5 * 50000}, async(contactsData)=> {
    await maps.contactDataNOtPresent(contactsData);
});
Then(/^verify contact data should not be duplicated "([^"]*)"$/, {timeout: 5 * 50000}, async(duplicateData)=> {
    let contctData=map[duplicateData]['duplicateData'];
    await maps.contactDataDuplication(contctData);
});
Then(/^verify attributes should be present on property tab "([^"]*)"$/, {timeout: 5 * 50000}, async(attributeProperty)=> {
    let attributeData=map[attributeProperty]['attribues'];
    let txt=map[attributeProperty]['attributeData'];
    await maps.verifyAttributeOnPropertTab(attributeData);
    await maps.verifyAttributeOnLeasesTab(txt);
});
Then(/^verify data should be present under property information "([^"]*)"$/, {timeout: 5 * 50000}, async(propertyData)=> {
    let data=map[propertyData]['propertyInformation'];
    await maps.verifyDataUnderPropertyInformation(data);
});
Then(/^verify property data are present "([^"]*)"$/, {timeout: 5 * 50000}, async(propertyData)=>  {
    let thData=map[propertyData]['thProperty'];
    let tdData=map[propertyData]['tdProperty'];
    await maps.verifyContactGroupData(thData);
});
Then(/^verify property data is not present "([^"]*)"$/, {timeout: 5 * 50000}, async(invaliddata)=> {
    let data=map[invaliddata]['propertyDataNotPresent'];
    await maps.verifyLabelNotPreent(data);
});
Then(/^verify leases tab attribute should be present "([^"]*)"$/, {timeout: 5 * 50000}, async(leasesAttribute)=>{
    let data=map[leasesAttribute]['attributeData'];
    await maps.verifyAttributeOnLeasesTab(data);
});
Then(/^verify data present on leases tab "([^"]*)"$/, {timeout: 5 * 50000}, async(leasesData)=> {
    let leaseData=map[leasesData]['tabData'];
    await maps.verifyLeasesTabData(leaseData);
});
Then(/^verify leases tab labels sholud be present on leases tab "([^"]*)"$/, {timeout: 5 * 50000}, async(leasesLabels)=>  {
    let leaseData=map[leasesLabels]['thLeases'];
    await maps.verifyLeasesLabel(leaseData);
});
Then(/^verify data should be present under ground rights "([^"]*)"$/, {timeout: 5 * 50000}, async(dataGroundrights)=>{
    let leaseData=map[dataGroundrights]['thLeases'];
    await maps.verifyGroundRightsData(leaseData);
});
Then(/^verify leases tab data is not present "([^"]*)"$/, {timeout: 5 * 50000}, async(dataNotPresent)=> {
    let leaseDataNotPresent=map[dataNotPresent]['leaseDataNotPresent'];
    await maps.verifyLabelNotPreent(leaseDataNotPresent);
});
Then(/^verify labels on operational tab "([^"]*)"$/, {timeout: 5 * 50000}, async(opreationLabels)=> {
    let label=map[opreationLabels]['attribues'];
    let label1=map[opreationLabels]['attributeData'];
    await maps.verifyAttributeOnPropertTab(label);
    await maps.verifyAttributeOnLeasesTab(label1);
});
Then(/^verify labels not present on operational tab "([^"]*)"$/, {timeout: 5 * 50000}, async(labelNotPresent)=> {
    let label=map[labelNotPresent]['operationDataNotPresent'];
    await maps.verifyLabelNotPreent(label);
});
Then(/^verify data under operational attribute "([^"]*)"$/, {timeout: 5 * 50000}, async(operationAttribute)=> {
    let attribute=map[operationAttribute]['operationAttributeData'];
    await maps.verifyDataUnderPropertyInformation(attribute);
});
Then(/^verify data under site comments "([^"]*)"$/, {timeout: 5 * 50000}, async(dataOperation)=> {
    let operationData=map[dataOperation]['thOperation'];
    await maps.verifyLeasesLabel(operationData);
});
Then(/^verify labels under FCC tab "([^"]*)"$/, {timeout: 5 * 50000}, async (labelFCC)=> {
    let label=map[labelFCC]['attribues'];
    await maps.verifyAttributeOnPropertTab(label);
});
Then(/^verify labels data under FCC tab "([^"]*)"$/, {timeout: 5 * 50000}, async(dataFCC)=>  {
    let label=map[dataFCC]['fccAttributeData'];
    await maps.verifyDataUnderPropertyInformation(label);
});
Then(/^verify display message under FCC tab "([^"]*)"$/, {timeout: 5 * 50000}, async(msgFCC)=> {
    let data=map[msgFCC]['fccMessage'];
    await maps.verifyDisplayMessage(data);
});
Then(/^verify link under FCC tab "([^"]*)"$/, {timeout: 5 * 50000}, async(linkFCC)=> {
    let data=map[linkFCC]['fccLink'];
    await maps.verifyLink(data);
});
Then(/^verify label under rad center tab "([^"]*)"$/, {timeout: 5 * 50000}, async (labelRadCenter)=> {
    let label=map[labelRadCenter]['attribues'];
    await maps.verifyAttributeOnPropertTab(label);
});
Then(/^verify label data under rad center tab "([^"]*)"$/, {timeout: 5 * 50000}, async(dataRadCenter)=> {
    let label=map[dataRadCenter]['radAttributeData'];
    await maps.verifyDataUnderPropertyInformation(label);
});
Then(/^verify indicator under rad center tab "([^"]*)"$/, {timeout: 5 * 50000}, async(indicator)=> {
    let indicators=map[indicator]['colorIndicators'];
    await maps.verifyIndicatorColor(indicators);
});
Then(/^verify table header under rad center tab "([^"]*)"$/, {timeout: 5 * 50000}, async(tableHeaderRad)=> {
    let thData=map[tableHeaderRad]['thRadCenter'];
    await maps.verifyContactGroupData(thData);
});
Then(/^verify table header under leasing activity tab "([^"]*)"$/, {timeout: 5 * 50000}, async(tableHeaderLeasing)=>  {
    let thData=map[tableHeaderLeasing]['thLeasingActivity'];
    await maps.verifyContactGroupData(thData);
});
Then(/^verify label not present under leasing activity tab "([^"]*)"$/, {timeout: 5 * 50000}, async(leasingData)=> {
    let label=map[leasingData]['leasingDataNotPresent'];
    await maps.verifyLabelNotPreent(label);
});
Then(/^verify labels under document tab "([^"]*)"$/, {timeout: 5 * 50000}, async(labelDocument)=> {
    let label=map[labelDocument]['documanetLabel1'];
    await maps.documentLabel(label);
});
Then(/^verify files under document tab "([^"]*)"$/, {timeout: 5 * 50000}, async(filesDocument)=>{
    await maps.fileSearch(filesDocument);
});
Then(/^click folder and sub folder under document tab$/, {timeout: 5 * 50000}, async()=>{
    await maps.folderAndSubFolder()
});
Then(/^verify tabs are present under home page "([^"]*)"$/, {timeout: 5 * 50000}, async(homeTab)=>{
    let homeTabs=map[homeTab]['tabName'];
    await maps.verifyDataUnderPropertyInformation(homeTabs);
});
Then(/^verify content under about tab "([^"]*)"$/, {timeout: 5 * 50000}, async(aboutContent)=>{
    let heading=map[aboutContent]['header'];
    let content=map[aboutContent]['content'];
    await maps.verifyAttributeOnLeasesTab(heading);
    await maps.verifyDisplayMessage(content);
});
Then(/^click "([^"]*)" on home page$/, {timeout: 5 * 50000}, async(tab)=> {
    await maps.selectTabUnderHomePage(tab);
});
Then(/^verify sub tabs under services tab "([^"]*)"$/, {timeout: 5 * 50000}, async(subTab)=> {
    let subTabName=map[subTab]['subTabName'];
    await maps.verifyDataUnderPropertyInformation(subTabName);
});
Then(/^verify content under services tab "([^"]*)"$/, {timeout: 5 * 50000}, async(servicesContent)=> {
    let heading=map[servicesContent]['header'];
    let content=map[servicesContent]['content'];
    await maps.verifyAttributeOnLeasesTab(heading);
    await maps.verifyDisplayMessage(content);
});
Then(/^click sub tab "([^"]*)" under services tab$/, {timeout: 5 * 50000}, async(subTab)=> {
    await maps.selectTabUnderHomePage(subTab);
});
Then(/^verify content under contact tab "([^"]*)"$/, {timeout: 5 * 50000}, async(content)=> {
    let contacts=map[content]['label'];
    await maps.verifyContentUnderContactTab(contacts);
});
Then(/^verify content data under contact tab "([^"]*)"$/, {timeout: 5 * 50000}, async(content)=> {
    let data=map[content]['labelData'];
    let dataNotPresent=map[content]['dataNotPresent'];
    await maps.verifyMapData(data);
    await maps.verifyListContentUnderContactTab(content);
    await maps.verifyLabelNotPreent(dataNotPresent);
});
