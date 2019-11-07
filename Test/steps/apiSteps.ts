import { Given, Then, When } from "cucumber";
import {APIPage} from "../Pages/apiPage";
import {browser} from "protractor";



//data variables
const yaml = require('js-yaml');
const fs = require('fs');
let data = yaml.safeLoad(fs.readFileSync('./Test/testData/api.yml', 'utf8'));

const apiPage = new APIPage();


When(/^we get token from site$/, {timeout:  5 * 50000}, async() => {
    await apiPage.keyGet();

});
When(/^I send get request to site "([^"]*)"$/, {timeout:  5 * 500000}, async(link) => {
    let apiLink=data[link]['link'];
    let apiContent=data[link]['content'];
    let apiData=data[link]['bodyData'];
    await apiPage.getHeaderOptions(apiData);
    await apiPage.getRequest(apiLink,apiContent);
});


When(/^I send post request to site "([^"]*)"$/, {timeout:  5 * 500000}, async(link) => {

    let apiLink=data[link]['link'];
    let apiContent=data[link]['content'];
    let apiData=data[link]['bodyData'];
    await apiPage.getHeaderOptions(apiData);
    await apiPage.postRequest(apiLink,apiContent);
});

When(/^I send put request to site "([^"]*)"$/, {timeout:  5 * 500000}, async(link) => {
    let apiLink=data[link]['link'];
    let apiContent=data[link]['content'];
    let apiData=data[link]['bodyData'];
    await apiPage.getHeaderOptions(apiData);
    await apiPage.putRequest(apiLink,apiContent);
});