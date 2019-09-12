import { Given, Then, When } from "cucumber";
import {floydSitePage} from "../Pages/floydSitePage";
import {siteDetailPage} from "../Pages/siteDetailPage";

//data variables
const yaml = require('js-yaml');
const fs = require('fs');
let cred = yaml.safeLoad(fs.readFileSync('./Test/testData/users.yml', 'utf8'));
let floyd = yaml.safeLoad(fs.readFileSync('./Test/testData/floydSite.yml', 'utf8'));


const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const floydSite = new floydSitePage();
const sitedetail = new siteDetailPage();

When(/^Click on additional features link "([^"]*)"$/, {timeout: 5 * 50000}, async(link)=> {
    let hyperlink=floyd[link]['hyperLink'];
    await sitedetail.selectSite(hyperlink);
});
When(/^Click on add a portfolio "([^"]*)"$/, {timeout: 5 * 50000}, async(addPortfolio)=> {
    let portfolio=floyd[addPortfolio]['portfolio'];
    await floydSite.clickHeading(portfolio);
});
Then(/^Click on plus icon button$/, {timeout: 5 * 50000}, async()=> {
    await floydSite.clickPlusIcon();
});
Then(/^Click on portfolio type "([^"]*)"$/, {timeout: 5 * 50000}, async(portfolioType)=> {
    let portfolio=floyd[portfolioType]['portfolio'];
    await floydSite.clickPortfolioType(portfolio);
});
Then(/^Select portfolio name "([^"]*)"$/, {timeout: 5 * 50000}, async(portfolioName)=> {
    let portfolio=floyd[portfolioName]['portfolioName'];
    await floydSite.portfolioName(portfolio);
});
Then(/^Click on save button "([^"]*)"$/, {timeout: 5 * 50000}, async(btnName)=> {
    let buttonName=floyd[btnName]['buttonName'];
    await floydSite.clickSaveBtn(buttonName);
});
Then(/^verify portfolio should be created "([^"]*)"$/, {timeout: 5 * 50000}, async(confirmationMessage)=> {
    let txt=floyd[confirmationMessage]['confirmationMessage'];
    await sitedetail.advanceSearchRefinementCriteria(txt);
});
Then(/^verify tabs for portfolio "([^"]*)"$/, {timeout: 5 * 50000}, async(tabs)=> {
    let tab=floyd[tabs]['tabs'];
    await  floydSite.verifyTabsFloydSite(tab);
});
Then(/^verify attributes on floyd site$/,  {timeout: 5 * 50000}, async()=> {
     await floydSite.attributeFloydSite();
});

