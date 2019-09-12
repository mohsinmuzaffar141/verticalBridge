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
    tableHeader=element(by.xpath('//div[text()=" Tenant Name "]'));


    async executedDate(){
        await this.date.getText().then(async function(text){
           console.log(text);
        });
        await expect(this.date.isPresent()).to.eventually.equal(true);
    }

    async verifyActiveTenant(columnName:string,counter:string){
        await browser.wait(until.presenceOf(this.tableHeader),50000000);
        // let table=element.all(by.xpath('(//tbody[@class="ui-table-tbody"])['+counter+']//tr'));
        // await table.then(async function (txt) {
        //     for (let i = 1; i <= txt.length; i++) {
        //         let tenantName = element(by.xpath('(//div[@class="col-' + columnName + ' ng-star-inserted"])[' + i + ']'));
        //         await tenantName.getText().then(async function (text) {
        //             console.log(text);
        //         });
        //     }
        // });
    }
}
