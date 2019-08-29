import { browser, element, by, protractor } from 'protractor'
import { IdentificationType, BasePage } from './BasePage';
const chai = require("chai").use(require("chai-as-promised"));

//data variables
const yaml = require('js-yaml');
const fs = require('fs');

let cred = yaml.safeLoad(fs.readFileSync('./Test/testData/users.yml', 'utf8'));


const expect = chai.expect;
let until = protractor.ExpectedConditions;

export class reports extends BasePage{

    date=element(by.xpath('//b[contains(text(),"Executed At")]'));


    async executedDate(){
        await this.date.getText().then(async function(text){
           console.log(text);
        });
        await expect(this.date.isPresent()).to.eventually.equal(true);
    }
}
