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
let cred = yaml.safeLoad(fs.readFileSync('./Test/testData/users.yml', 'utf8'));

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const sitedetail = new siteDetailPage();

Then(/^verify edit and site inspection icon are not present on site header$/, {timeout: 5 * 50000}, async() =>  {
    await sitedetail.editSiteNOtPresent();
});