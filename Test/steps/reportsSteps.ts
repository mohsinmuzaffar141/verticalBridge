import { Given, Then, When } from "cucumber";

import {ManagementAgreementDataPage} from "../Pages/ManagementAgreementDataPage";
import {siteDetailPage} from "../Pages/siteDetailPage";
import {floydSitePage} from "../Pages/floydSitePage";
import {reports} from "../Pages/reportsPage";

//data variables
const yaml = require('js-yaml');
const fs = require('fs');
let floyd = yaml.safeLoad(fs.readFileSync('./Test/testData/floydSite.yml', 'utf8'));

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