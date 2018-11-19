const launcher = require('james-browser-launcher');
const reporter = require('cucumber-html-reporter');
const timestamp = require('time-stamp');
const npmConfig = require("./package.json");
const driver = "Chrome Driver " + npmConfig.devDependencies["chromedriver"];
const selenium = "Selenium " + npmConfig.devDependencies["selenium-server"];

launcher.detect(available => {

    const first = available.filter(x => x.name === 'chrome');
    const version = JSON.stringify(first, ['version']);
    const toObject = version.replace(/\[|\]/g, '');
    const chrome_vers = JSON.parse(toObject);
    const time = timestamp('YYYY-MM-DD HH:mm:ss');
    console.log(timestamp('YYYY-MM-DD HH:mm:ss'));
    (() => {
        let foundationOptions = {
            theme: 'bootstrap',
            jsonDir: 'reports/json/',
            ignoreBadJsonFile: true,
            output: './reports/report.html',
            reportSuiteAsScenarios: true,
            launchReport: false,
            metadata: {
                "Browser": `Chrome ${ chrome_vers.version} (64-bit)`,
                "Selenium": selenium.replace("\^", ""),
                "Driver": driver.replace("\^", ""),
                "Launch time": time,
                "Test platform": process.env.NODE_ENV
            },
        };
        reporter.generate(foundationOptions);
    })();
});

var exec = require('child_process').exec;
process.platform.includes('win32');

if (process.platform.includes('win32')) {
    exec('xml_report.sh', function (error, stdOut, stdErr) {
    });
} else {
    exec('bash xml_report.sh', function (error, stdOut, stdErr) {
    });
}