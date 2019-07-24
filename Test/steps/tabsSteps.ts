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
    await maps.verifyContactGroupData(thData,tdData);
});