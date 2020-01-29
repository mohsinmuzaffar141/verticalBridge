import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "./Test/hooks/reporter";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {
    defaultTimeoutInterval: 144550000,

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    //SELENIUM_PROMISE_MANAGER: false,

    baseUrl: "https://www.google.com/",

    suites:{
        "login":"../features/login.feature",
        "managementAgreement": "./Test/features/managemenetAgreement.feature",
        "site": "./Test/features/mySites.feature",
        "tabs": "./Test/features/tabs.feature",
        "siteGeneral": "./Test/features/siteGeneral.feature",
        //"floydSite": "./Test/features/floydSite.feature",
         "reports": "./Test/features/reports.feature",
        // "role": "./Test/features/rolesPermission.feature",
         "api": "./Test/features/api.feature",


        portal:[
            "./Test/features/login.feature",
            "./Test/features/managemenetAgreement.feature",
            "./Test/features/mySites.feature",
            "./Test/features/tabs.feature",
            "./Test/features/siteGeneral.feature",
        ],
        general:[

            //"./Test/features/floydSite.feature",
        ],
        report:[
            // "./Test/features/api.feature",
            "./Test/features/reports.feature",
            "./Test/features/rolesPermission.feature",

        ],


    },

    capabilities: {
        browserName: 'chrome',
        unexpectedAlertBehaviour: 'accept',

        'goog:chromeOptions': {
            'w3c': false
        },
        chromeOptions: {
            args:['--window-size=1920,1080']
        }
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    ignoreUncaughtExceptions: true,
    // framework: "custom",
    // frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
        "./Test/features/login.feature",
        "./Test/features/managemenetAgreement.feature",
        "./Test/features/mySites.feature",
        "./Test/features/tabs.feature",
        "./Test/features/siteGeneral.feature",
        "./Test/features/floydSite.feature",
        "./Test/features/reports.feature",
        "./Test/features/rolesPermission.feature",
        "./Test/features/api.feature",
    ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        browser.manage().timeouts().setScriptTimeout(6000000);
        Reporter.createDirectory(jsonReports);
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
        require : [ '../steps/*.js',
            path.resolve(process.cwd(), './/Test/steps/*.js'),
        ],
        removeOriginalJsonReportFile : true,
        format: "json:./reports/json/cucumber_report.json",
        strict  : true,
        dryRun  : false,
        tags    : ['']
    },
    onComplete: () => {
        Reporter.createHTMLReport();
    },


// };
    plugins: [{
        package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
        options:{
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true,
            openReportInBrowser: true,
            pageTitle : 'Vertical Bridge',
            reportName :'Vertical Bridge Test Report',

            //jsonOutputPath: './features',     //?featuresJsonPath
            removeOriginalJsonReportFile: true, //! This Option will Delete Generated Json File
            pageFooter: '<div class= "text-center"><b> VERTICAL BRIDGE </b></div>',
            displayDuration:true,
            // TODO overrideStyle: 'path of css file'


        }
    }],
    getPageTimeout: 30000,
};
