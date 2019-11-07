
import {browser, by, element} from "protractor";
// const http = require('http');
 import * as request from "request-promise-native";
const yaml = require('js-yaml');

const fs = require('fs');
import * as http from "http";
// const request = require('request');
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const baseUrl = "https://stagepartnerportal.verticalbridge.com";
let tokenKey;
let headerOptions;


export class APIPage{

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
                await expect(body).to.contains(value);
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

}