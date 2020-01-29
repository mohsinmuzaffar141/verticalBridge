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
// const http = require('http');
var request = require("request-promise-native");
var BasePage_1 = require("./BasePage");
var yaml = require('js-yaml');
var fs = require('fs');
// import * as http from "http";
// const request = require('request');
var chai = require("chai").use(require("chai-as-promised"));
var expect = chai.expect;
var baseUrl = "https://stagepartnerportal.verticalbridge.com";
var tokenKey;
var headerOptions;
var annualizedRevenue;
var until = protractor_1.protractor.ExpectedConditions;
var APIPage = /** @class */ (function (_super) {
    __extends(APIPage, _super);
    function APIPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    APIPage.prototype.getHeaderOptions = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                headerOptions = {
                    headers: ({
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + tokenKey,
                    }),
                    body: data
                };
                return [2 /*return*/];
            });
        });
    };
    APIPage.prototype.keyGet = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.sleep(1000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.executeScript("return window.localStorage.getItem('adal.idtoken');")];
                    case 2:
                        tokenKey = _a.sent();
                        console.log(tokenKey);
                        return [2 /*return*/];
                }
            });
        });
    };
    APIPage.prototype.getRequest = function (api, value) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, request.get(baseUrl + api, headerOptions, function (error, response, body) { return __awaiter(_this, void 0, void 0, function () {
                                var bodyObj;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            bodyObj = JSON.parse(body);
                                            console.log("-----------------------------------------------------------------------------------------------------");
                                            console.log('Response Message', response.statusMessage);
                                            console.log('Response StatusCode', response.statusCode);
                                            return [4 /*yield*/, expect(response.statusCode).to.equal(200)];
                                        case 1:
                                            _a.sent();
                                            return [4 /*yield*/, expect(response.statusMessage).to.equal('OK')];
                                        case 2:
                                            _a.sent();
                                            console.log('body', bodyObj);
                                            annualizedRevenue = body;
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.log('Error', e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    APIPage.prototype.postRequest = function (api, value) {
        return __awaiter(this, void 0, void 0, function () {
            var e_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, request.post(baseUrl + api, headerOptions, function (error, response, body) { return __awaiter(_this, void 0, void 0, function () {
                                var bodyObj;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log("-----------------------------------------------------------------------------------------------------");
                                            console.log('Response Message', response.statusMessage);
                                            console.log('Response StatusCode', response.statusCode);
                                            return [4 /*yield*/, expect(response.statusCode).to.equal(200)];
                                        case 1:
                                            _a.sent();
                                            return [4 /*yield*/, expect(response.statusMessage).to.equal('OK')];
                                        case 2:
                                            _a.sent();
                                            bodyObj = JSON.parse(body);
                                            console.log('Body', bodyObj);
                                            return [4 /*yield*/, expect(body).to.contains(value)];
                                        case 3:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        console.log('Error', e_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    APIPage.prototype.putRequest = function (api, value) {
        return __awaiter(this, void 0, void 0, function () {
            var e_3;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, request.put(baseUrl + api, headerOptions, function (error, response, body) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log("-----------------------------------------------------------------------------------------------------");
                                            console.log('Response Message', response.statusMessage);
                                            console.log('Response StatusCode', response.statusCode);
                                            return [4 /*yield*/, expect(response.statusCode).to.equal(200)];
                                        case 1:
                                            _a.sent();
                                            return [4 /*yield*/, expect(response.statusMessage).to.equal('OK')];
                                        case 2:
                                            _a.sent();
                                            // const bodyObj = JSON.parse(body);
                                            console.log('Body', body);
                                            return [4 /*yield*/, expect(body).to.contains(value)];
                                        case 3:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _a.sent();
                        console.log('Error', e_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    APIPage.prototype.compareAnnualizedRevenue = function () {
        return __awaiter(this, void 0, void 0, function () {
            var revenueApi, revenue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        revenueApi = annualizedRevenue.substr(0, 3);
                        revenue = protractor_1.element(protractor_1.by.xpath("(//div[@class='TopNumber ng-star-inserted'])[2]"));
                        return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(revenue), 50000, 'Element taking too long to appear in the DOM')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, revenue.getText().then(function (text) {
                                return __awaiter(this, void 0, void 0, function () {
                                    var revenuePortal;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                revenuePortal = text.substr(1, 3);
                                                return [4 /*yield*/, expect(revenuePortal).to.equal(revenueApi)];
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
    return APIPage;
}(BasePage_1.BasePage));
exports.APIPage = APIPage;
//# sourceMappingURL=apiPage.js.map