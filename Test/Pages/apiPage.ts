import {browser, by, element, protractor} from "protractor";
// const http = require('http');
 import * as request from "request-promise-native";
import {BasePage} from "./BasePage";
const yaml = require('js-yaml');

const fs = require('fs');
// import * as http from "http";
// const request = require('request');
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const baseUrl = "https://stagepartnerportal.verticalbridge.com";
let tokenKey;
let headerOptions;
let annualizedRevenue;
let until = protractor.ExpectedConditions;

export class APIPage extends BasePage{

    async getHeaderOptions(data){
        headerOptions = {
            headers: ({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + tokenKey,
            }),
            body: data

        }
    }


    async keyGet(){
        await browser.sleep(1000);
        tokenKey = await browser.executeScript("return window.localStorage.getItem('adal.idtoken');");
        console.log(tokenKey);
    }


    async getRequest(api:string, value:string) {
        try {
            await request.get(baseUrl+api ,headerOptions,async (error, response, body) => {
                const bodyObj = JSON.parse(body);
                console.log("-----------------------------------------------------------------------------------------------------");
                console.log('Response Message', response.statusMessage);
                console.log('Response StatusCode', response.statusCode);
                await expect(response.statusCode).to.equal(200);
                await expect(response.statusMessage).to.equal('OK');
                console.log('body', bodyObj);
                annualizedRevenue=body;
                // await expect(body).to.contains(value);
            });
        } catch (e) {
            console.log('Error',e);
        }

    }
    async postRequest(api:string, value:string) {
        try{
            await request.post(baseUrl+api ,headerOptions,async (error, response, body) => {
                console.log("-----------------------------------------------------------------------------------------------------");
                console.log('Response Message', response.statusMessage);
                console.log('Response StatusCode', response.statusCode);
                await expect(response.statusCode).to.equal(200);
                await expect(response.statusMessage).to.equal('OK');

                const bodyObj = JSON.parse(body);
                console.log('Body',bodyObj);
                await expect(body).to.contains(value);
            });
        } catch (e) {
            console.log('Error',e);
        }

    }

    async putRequest(api:string, value:string) {
        try{
            await request.put(baseUrl+api ,headerOptions,async (error, response, body) => {
                console.log("-----------------------------------------------------------------------------------------------------");
                console.log('Response Message', response.statusMessage);
                console.log('Response StatusCode', response.statusCode);
                await expect(response.statusCode).to.equal(200);
                await expect(response.statusMessage).to.equal('OK');
                // const bodyObj = JSON.parse(body);
                console.log('Body',body);
                await expect(body).to.contains(value);
            });
        } catch (e) {
            console.log('Error',e);
        }
    }

    async compareAnnualizedRevenue(){
        let revenueApi = annualizedRevenue.substr(0, 3);
        let revenue=element(by.xpath("(//div[@class='TopNumber ng-star-inserted'])[2]"));
        await browser.wait(until.presenceOf(revenue), 50000, 'Element taking too long to appear in the DOM');
        await revenue.getText().then(async function (text) {
            let revenuePortal = text.substr(1, 3);
            await expect(revenuePortal).to.equal(revenueApi);
        });
    }
}