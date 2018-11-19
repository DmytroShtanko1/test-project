import {timeouts} from "./engine/config/timeouts";
const killChrome = require('kill-chrome');
const chromedriver = require('chromedriver');
const {Before, After, AfterAll, BeforeAll} = require('cucumber');
const {client} = require('nightwatch-cucumber');

Before(() => new Promise(resolve => {
    client.maximizeWindow();
    client.cookie('DELETE');
    client.execute(`                 
                  chromedriver.stop();
                  window.localStorage.clear();
                  window.sessionStorage.clear();
                  window.localStorage.clear();
                `).deleteCookies().refresh();
    resolve();
}));

After(() => new Promise(resolve => {
    client.consoleLog();
    chromedriver.stop();
    //   console.log('After start');
    setTimeout(() => {
        client.execute(`                 
                  chromedriver.stop();
                  window.localStorage.clear();
                  window.sessionStorage.clear();
                  window.localStorage.clear();
                `).deleteCookies().refresh();
        // console.log('After end');
        resolve();
    }, 1);
}));

AfterAll(async () => {
try{
    await killChrome()
}catch(e){}
});

BeforeAll(function () {
    client.timeoutsImplicitWait(timeouts.l);
});