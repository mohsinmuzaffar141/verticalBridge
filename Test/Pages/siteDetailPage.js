"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var BasePage_1 = require("./BasePage");
var chai = require("chai").use(require("chai-as-promised"));
//data variables
var yaml = require('js-yaml');
var fs = require('fs');
var cred = yaml.safeLoad(fs.readFileSync('./Test/testData/users.yml', 'utf8'));
var maps = yaml.safeLoad(fs.readFileSync('./Test/testData/map.yml', 'utf8'));
var expect = chai.expect;
var until = protractor_1.protractor.ExpectedConditions;
var siteDetailPage = /** @class */ (function (_super) {
    __extends(siteDetailPage, _super);
    function siteDetailPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.searchMap = protractor_1.element(protractor_1.by.xpath('//input[@id="SearchAddress"]'));
        return _this;
    }
    siteDetailPage.prototype.selectSite = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var siteNumber, site;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        siteNumber = cred[value]['siteNumber'];
                        site = protractor_1.element(protractor_1.by.xpath('//a[text()="' + siteNumber + '"]'));
                        return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(site), 5000, 'Element taking too long to appear in the DOM')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, site.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(5000)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.verifySiteNumber = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var siteNumber, title;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        siteNumber = cred[value]['siteNumber'];
                        title = protractor_1.element(protractor_1.by.xpath('//div[@class="PageTitle"]//div[contains(text()," ' + siteNumber + '")]'));
                        return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(title), 5000, 'Element taking too long to appear in the DOM')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, title.getText().then(function (text) {
                                return __awaiter(this, void 0, void 0, function () {
                                    var sp, req;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                sp = text.split(" ");
                                                req = sp[0];
                                                return [4 /*yield*/, expect(siteNumber).to.equals(req)];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.verifyName = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var site, title;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        site = cred[value]['siteName'];
                        title = protractor_1.element(protractor_1.by.xpath('//div[@class="PageTitle"]//div[contains(text()," ' + site + '")]'));
                        return [4 /*yield*/, expect(title.getText()).to.eventually.contain(site)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.verifyHeaderOnDetailedPage = function (listed) {
        return __awaiter(this, void 0, void 0, function () {
            var lists, i, label;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lists = listed.split(',');
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < lists.length)) return [3 /*break*/, 5];
                        label = protractor_1.element(protractor_1.by.xpath('//div[@class="SectionHeader" and text()=" ' + lists[i] + ' "]'));
                        return [4 /*yield*/, label.getText().then(function (text) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        console.log(text);
                                        return [2 /*return*/];
                                    });
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, expect(label.isDisplayed()).to.eventually.equal(true)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.verifySiteDetailsData = function (data, label) {
        return __awaiter(this, void 0, void 0, function () {
            var datas, labels, i, siteDetail;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        datas = data.split(',');
                        labels = label.split(',');
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < datas.length)) return [3 /*break*/, 5];
                        siteDetail = protractor_1.element(protractor_1.by.xpath('//div[contains(text(),"' + datas[i] + '")]//following-sibling::div[contains(text(),"' + labels[i] + '")]'));
                        return [4 /*yield*/, siteDetail.getText().then(function (text) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        console.log(text);
                                        return [2 /*return*/];
                                    });
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, expect(siteDetail.isDisplayed()).to.eventually.equal(true)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.verifySiteContacts = function (label, data) {
        return __awaiter(this, void 0, void 0, function () {
            var datas, labels, i, siteDetail, contactsData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        datas = data.split(',');
                        labels = label.split(',');
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < labels.length)) return [3 /*break*/, 6];
                        siteDetail = protractor_1.element(protractor_1.by.xpath('//mat-panel-title[text()=" ' + labels[i] + ' "]'));
                        return [4 /*yield*/, siteDetail.click()];
                    case 2:
                        _a.sent();
                        contactsData = protractor_1.element(protractor_1.by.xpath('//div[@class="mat-expansion-panel-body"]//strong[text()="' + datas[i] + '"]'));
                        return [4 /*yield*/, siteDetail.getText().then(function (text) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        console.log(text);
                                        return [2 /*return*/];
                                    });
                                });
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, expect(contactsData.isDisplayed()).to.eventually.equal(true)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.verifyTabs = function (tab) {
        return __awaiter(this, void 0, void 0, function () {
            var tabs, i, pageTabs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tabs = tab.split(',');
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < tabs.length)) return [3 /*break*/, 5];
                        pageTabs = protractor_1.element(protractor_1.by.xpath('//a[text()=" ' + tabs[i] + ' "]'));
                        return [4 /*yield*/, pageTabs.getText().then(function (text) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        console.log(text);
                                        return [2 /*return*/];
                                    });
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, expect(pageTabs.isDisplayed()).to.eventually.equal(true)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.verifyMapPin = function (siteNo) {
        return __awaiter(this, void 0, void 0, function () {
            var site, pageMap;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        site = cred[siteNo]['siteNumber'];
                        pageMap = protractor_1.element(protractor_1.by.xpath('//div[text()=": ' + site + '"]'));
                        return [4 /*yield*/, expect(pageMap.isDisplayed()).to.eventually.equal(true)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.verifyMapData = function (maplabel) {
        return __awaiter(this, void 0, void 0, function () {
            var mapLabel, i, mapData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mapLabel = maplabel.split(',');
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < mapLabel.length)) return [3 /*break*/, 5];
                        mapData = protractor_1.element(protractor_1.by.xpath('//strong[text()="' + mapLabel[i] + '"]'));
                        return [4 /*yield*/, mapData.getText().then(function (text) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        console.log(text);
                                        return [2 /*return*/];
                                    });
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, expect(mapData.isDisplayed()).to.eventually.equal(true)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.verifyLabelNotPreent = function (labelPresent) {
        return __awaiter(this, void 0, void 0, function () {
            var label, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        label = labelPresent.split(',');
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < label.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, expect(protractor_1.element(protractor_1.by.xpath('//strong[text()="' + label[i] + '"]')).isPresent()).to.eventually.equal(false)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.searchMapLocation = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var searchValue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(this.searchMap), 5000, 'Element taking too long to appear in the DOM')];
                    case 1:
                        _a.sent();
                        searchValue = maps[value]['siteSearch'];
                        return [4 /*yield*/, this.searchMap.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.searchMap.sendKeys(searchValue)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return siteDetailPage;
}(BasePage_1.BasePage));
exports.siteDetailPage = siteDetailPage;
//# sourceMappingURL=siteDetailPage.js.map