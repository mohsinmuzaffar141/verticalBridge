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
    await maps.verifyAttributeOnPropertTab(attributeData,txt);
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