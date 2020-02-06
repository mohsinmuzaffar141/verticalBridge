"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var protractor_1 = require("protractor");
var reporter_1 = require("./Test/hooks/reporter");
var jsonReports = process.cwd() + "/reports/json";
exports.config = {
    defaultTimeoutInterval: 144550000,
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    //SELENIUM_PROMISE_MANAGER: false,
    baseUrl: "https://www.google.com/",
    suites: {
        "login": "./Test/features/login.feature",
        "managementAgreement": "./Test/features/managementAgreement.feature",
        "site": "./Test/features/mySites.feature",
        "tabs": "./Test/features/tabs.feature",
        "siteGeneral": "./Test/features/siteGeneral.feature",
        // "floydSite": "./Test/features/floydSite.feature",
        "reports": "./Test/features/reports.feature",
        "role": "./Test/features/rolesPermission.feature",
        "api": "./Test/features/api.feature",
        sites: [
            "./Test/features/login.feature",
            "./Test/features/managementAgreement.feature",
            "./Test/features/siteGeneral.feature",
        ],
        siteDetail: [
            "./Test/features/mySites.feature",
            "./Test/features/tabs.feature",
        ],
        report: [
            "./Test/features/reports.feature",
        ],
        rolesPermission: [
            "./Test/features/rolesPermission.feature",
        ],
        portalApi: [
            "./Test/features/api.feature"
        ],
    },
    capabilities: {
        browserName: 'chrome',
        unexpectedAlertBehaviour: 'accept',
        'goog:chromeOptions': {
            'w3c': false
        },
        chromeOptions: {
            args: ['--window-size=1920,1080']
        }
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    ignoreUncaughtExceptions: true,
    // framework: "custom",
    // frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: [
        "./Test/features/login.feature",
        "./Test/features/managementAgreement.feature",
        "./Test/features/mySites.feature",
        "./Test/features/tabs.feature",
        "./Test/features/siteGeneral.feature",
        "./Test/features/floydSite.feature",
        "./Test/features/reports.feature",
        "./Test/features/rolesPermission.feature",
        "./Test/features/api.feature",
    ],
    onPrepare: function () {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.manage().timeouts().setScriptTimeout(6000000);
        reporter_1.Reporter.createDirectory(jsonReports);
    },
    // cucumberOpts: {
    //     compiler: "ts:ts-node/register",
    //     // format: ['pretty'],
    //     require: ["../steps/*.js","../hooks/*.js"],
    //     strict: true,
    //     tags: false
    // },
    cucumberOpts: {
        // required step definitions
        compiler: [],
        require: ['../steps/*.js',
            path.resolve(process.cwd(), './/Test/steps/*.js'),
        ],
        removeOriginalJsonReportFile: true,
        format: "json:./reports/json/cucumber_report.json",
        strict: true,
        dryRun: false,
        tags: ['']
    },
    onComplete: function () {
        reporter_1.Reporter.createHTMLReport();
    },
    // };
    plugins: [{
            package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
            options: {
                automaticallyGenerateReport: true,
                removeExistingJsonReportFile: true,
                openReportInBrowser: true,
                pageTitle: 'Vertical Bridge',
                reportName: 'Vertical Bridge Test Report',
                //jsonOutputPath: './features',     //?featuresJsonPath
                removeOriginalJsonReportFile: true,
                pageFooter: '<div class= "text-center"><b> VERTICAL BRIDGE </b></div>',
                displayDuration: true,
            }
        }],
    getPageTimeout: 30000,
};
//# sourceMappingURL=config.js.map