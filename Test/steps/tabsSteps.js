"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var siteDetailPage_1 = require("../Pages/siteDetailPage");
//data variables
var yaml = require('js-yaml');
var fs = require('fs');
var cred = yaml.safeLoad(fs.readFileSync('./Test/testData/users.yml', 'utf8'));
var map = yaml.safeLoad(fs.readFileSync('./Test/testData/map.yml', 'utf8'));
var chai = require("chai").use(require("chai-as-promised"));
var expect = chai.expect;
var maps = new siteDetailPage_1.siteDetailPage();
cucumber_1.Then(/^search the lotaion on the map "([^"]*)"$/, { timeout: 5 * 50000 }, function (location) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, maps.searchMapLocation(location)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^click on reset button "([^"]*)"$/, { timeout: 5 * 50000 }, function (text) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, maps.clickResetTab()];
            case 1:
                _a.sent();
                return [4 /*yield*/, maps.verifyMapPin(text)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^click on auto view button$/, { timeout: 5 * 50000 }, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, maps.clickAutoViewTab()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^click "([^"]*)" on site detail page$/, { timeout: 5 * 50000 }, function (tab) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, maps.selectTab(tab)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify contact label are present "([^"]*)"$/, { timeout: 5 * 50000 }, function (contactLabel) { return __awaiter(_this, void 0, void 0, function () {
    var labelContacts;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                labelContacts = map[contactLabel]['tabLabel'];
                return [4 /*yield*/, maps.verifyContactsLabel(labelContacts)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify contact data are present "([^"]*)"$/, { timeout: 5 * 50000 }, function (contactsData) { return __awaiter(_this, void 0, void 0, function () {
    var thData, tdData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                thData = map[contactsData]['thContacts'];
                tdData = map[contactsData]['tdcontacts'];
                return [4 /*yield*/, maps.verifyContactGroupData(thData)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify contact data are not present "([^"]*)"$/, { timeout: 5 * 50000 }, function (contactsData) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, maps.contactDataNOtPresent(contactsData)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify contact data should not be duplicated "([^"]*)"$/, { timeout: 5 * 50000 }, function (duplicateData) { return __awaiter(_this, void 0, void 0, function () {
    var contctData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                contctData = map[duplicateData]['duplicateData'];
                return [4 /*yield*/, maps.contactDataDuplication(contctData)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify attributes should be present on property tab "([^"]*)"$/, { timeout: 5 * 50000 }, function (attributeProperty) { return __awaiter(_this, void 0, void 0, function () {
    var attributeData, txt;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                attributeData = map[attributeProperty]['attribues'];
                txt = map[attributeProperty]['attributeData'];
                return [4 /*yield*/, maps.verifyAttributeOnPropertTab(attributeData)];
            case 1:
                _a.sent();
                return [4 /*yield*/, maps.verifyAttributeOnLeasesTab(txt)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify data should be present under property information "([^"]*)"$/, { timeout: 5 * 50000 }, function (propertyData) { return __awaiter(_this, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = map[propertyData]['propertyInformation'];
                return [4 /*yield*/, maps.verifyDataUnderPropertyInformation(data)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify property data are present "([^"]*)"$/, { timeout: 5 * 50000 }, function (propertyData) { return __awaiter(_this, void 0, void 0, function () {
    var thData, tdData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                thData = map[propertyData]['thProperty'];
                tdData = map[propertyData]['tdProperty'];
                return [4 /*yield*/, maps.verifyContactGroupData(thData)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify property data is not present "([^"]*)"$/, { timeout: 5 * 50000 }, function (invaliddata) { return __awaiter(_this, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = map[invaliddata]['propertyDataNotPresent'];
                return [4 /*yield*/, maps.verifyLabelNotPreent(data)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify leases tab attribute should be present "([^"]*)"$/, { timeout: 5 * 50000 }, function (leasesAttribute) { return __awaiter(_this, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = map[leasesAttribute]['attributeData'];
                return [4 /*yield*/, maps.verifyAttributeOnLeasesTab(data)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify data present on leases tab "([^"]*)"$/, { timeout: 5 * 50000 }, function (leasesData) { return __awaiter(_this, void 0, void 0, function () {
    var leaseData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                leaseData = map[leasesData]['tabData'];
                return [4 /*yield*/, maps.verifyLeasesTabData(leaseData)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify leases tab labels sholud be present on leases tab "([^"]*)"$/, { timeout: 5 * 50000 }, function (leasesLabels) { return __awaiter(_this, void 0, void 0, function () {
    var leaseData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                leaseData = map[leasesLabels]['thLeases'];
                return [4 /*yield*/, maps.verifyLeasesLabel(leaseData)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify data should be present under ground rights "([^"]*)"$/, { timeout: 5 * 50000 }, function (dataGroundrights) { return __awaiter(_this, void 0, void 0, function () {
    var leaseData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                leaseData = map[dataGroundrights]['thLeases'];
                return [4 /*yield*/, maps.verifyGroundRightsData(leaseData)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify leases tab data is not present "([^"]*)"$/, { timeout: 5 * 50000 }, function (dataNotPresent) { return __awaiter(_this, void 0, void 0, function () {
    var leaseDataNotPresent;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                leaseDataNotPresent = map[dataNotPresent]['leaseDataNotPresent'];
                return [4 /*yield*/, maps.verifyLabelNotPreent(leaseDataNotPresent)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify labels on operational tab "([^"]*)"$/, { timeout: 5 * 50000 }, function (opreationLabels) { return __awaiter(_this, void 0, void 0, function () {
    var label, label1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                label = map[opreationLabels]['attribues'];
                label1 = map[opreationLabels]['attributeData'];
                return [4 /*yield*/, maps.verifyAttributeOnPropertTab(label)];
            case 1:
                _a.sent();
                return [4 /*yield*/, maps.verifyAttributeOnLeasesTab(label1)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify labels not present on operational tab "([^"]*)"$/, { timeout: 5 * 50000 }, function (labelNotPresent) { return __awaiter(_this, void 0, void 0, function () {
    var label;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                label = map[labelNotPresent]['operationDataNotPresent'];
                return [4 /*yield*/, maps.verifyLabelNotPreent(label)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify data under operational attribute "([^"]*)"$/, { timeout: 5 * 50000 }, function (operationAttribute) { return __awaiter(_this, void 0, void 0, function () {
    var attribute;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                attribute = map[operationAttribute]['operationAttributeData'];
                return [4 /*yield*/, maps.verifyDataUnderPropertyInformation(attribute)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify data under site comments "([^"]*)"$/, { timeout: 5 * 50000 }, function (dataOperation) { return __awaiter(_this, void 0, void 0, function () {
    var operationData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                operationData = map[dataOperation]['thOperation'];
                return [4 /*yield*/, maps.verifyLeasesLabel(operationData)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify labels under FCC tab "([^"]*)"$/, { timeout: 5 * 50000 }, function (labelFCC) { return __awaiter(_this, void 0, void 0, function () {
    var label;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                label = map[labelFCC]['attribues'];
                return [4 /*yield*/, maps.verifyAttributeOnPropertTab(label)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify labels data under FCC tab "([^"]*)"$/, { timeout: 5 * 50000 }, function (dataFCC) { return __awaiter(_this, void 0, void 0, function () {
    var label;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                label = map[dataFCC]['fccAttributeData'];
                return [4 /*yield*/, maps.verifyDataUnderPropertyInformation(label)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify display message under FCC tab "([^"]*)"$/, { timeout: 5 * 50000 }, function (msgFCC) { return __awaiter(_this, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = map[msgFCC]['fccMessage'];
                return [4 /*yield*/, maps.verifyDisplayMessage(data)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify link under FCC tab "([^"]*)"$/, { timeout: 5 * 50000 }, function (linkFCC) { return __awaiter(_this, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = map[linkFCC]['fccLink'];
                return [4 /*yield*/, maps.verifyLink(data)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify label under rad center tab "([^"]*)"$/, { timeout: 5 * 50000 }, function (labelRadCenter) { return __awaiter(_this, void 0, void 0, function () {
    var label;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                label = map[labelRadCenter]['attribues'];
                return [4 /*yield*/, maps.verifyAttributeOnPropertTab(label)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify label data under rad center tab "([^"]*)"$/, { timeout: 5 * 50000 }, function (dataRadCenter) { return __awaiter(_this, void 0, void 0, function () {
    var label;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                label = map[dataRadCenter]['radAttributeData'];
                return [4 /*yield*/, maps.verifyDataUnderPropertyInformation(label)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=tabsSteps.js.map