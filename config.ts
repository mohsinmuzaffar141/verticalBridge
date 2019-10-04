import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "./Test/hooks/reporter";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {
    defaultTimeoutInterval: 144550000,

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    SELENIUM_PROMISE_MANAGER: false,

    baseUrl: "https://www.google.com/",

    capabilities: {
        browserName: 'chrome'
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
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

    suites:{
        "login":"../features/login.feature",
        "managementAgreement": "./Test/features/managemenetAgreement.feature",
        "site": "./Test/features/mySites.feature",
        "tabs": "./Test/features/tabs.feature",
        "siteGeneral": "./Test/features/siteGeneral.feature",
        "floydSite": "./Test/features/floydSite.feature",
        "reports": "./Test/features/reports.feature",
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
