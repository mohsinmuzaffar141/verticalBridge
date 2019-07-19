"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var siteDetailPage_1 = require("../Pages/siteDetailPage");
//data variables
var yaml = require('js-yaml');
var fs = require('fs');
var cred = yaml.safeLoad(fs.readFileSync('./Test/testData/users.yml', 'utf8'));
var chai = require("chai").use(require("chai-as-promised"));
var expect = chai.expect;
var maps = new siteDetailPage_1.siteDetailPage();
cucumber_1.Then(/^search the lotaion on the map "([^"]*)"$/, function () {
});
//# sourceMappingURL=mapSteps.js.map