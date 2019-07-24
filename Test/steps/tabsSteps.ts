import { Given, Then, When } from "cucumber";

import {siteDetailPage} from "../Pages/siteDetailPage";

//data variables
const yaml = require('js-yaml');
const fs = require('fs');
let cred = yaml.safeLoad(fs.readFileSync('./Test/testData/users.yml', 'utf8'));

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