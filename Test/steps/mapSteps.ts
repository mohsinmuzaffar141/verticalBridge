import { Given, Then, When } from "cucumber";

import {siteDetailPage} from "../Pages/siteDetailPage";

//data variables
const yaml = require('js-yaml');
const fs = require('fs');
let cred = yaml.safeLoad(fs.readFileSync('./Test/testData/users.yml', 'utf8'));

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const maps = new siteDetailPage();


Then(/^search the lotaion on the map "([^"]*)"$/, function () {

});