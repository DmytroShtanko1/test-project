import {client} from "nightwatch-cucumber";
import {bbc_reg} from "../../controls/bbc/bbc.registration";
import {timeouts} from "../config/timeouts";

export async function navigatePage(host) {
    if (!!process.env.NODE_ENV) {
        host = process.env.NODE_ENV
    }
    await openSecondTab(host);
    await client.waitForElementPresent(bbc_reg.Loader,timeouts.default, `Page loader %s was presented on the page after %d ms` )
}

async function openSecondTab(host) {
        await client.execute(function (newWindow) {  // open another window
         window.open('http://www.bbc.com/', null, 'height=1920,width=1080', true);
    }, [host])
    await client.window_handles(function (result) {
        console.log(result);
        let temp = result.value[1];
        this.switchWindow(temp);
    })
    await client.deleteCookies().refresh();
}