import {Given, Then, When} from "cucumber";
import {navigatePage} from "../../engine/common/navigate";
import {TempMail} from "../../pages/temp-mail";
import {client} from "nightwatch-cucumber";
import {bbc_reg} from "../../controls/bbc/bbc.registration";
import {BBC} from "../../pages/bbc-page";
import {timeouts} from "../../engine/config/timeouts";

Given(/^have a temporary mail adress$/, async () => {
    await TempMail.openFirstTAb();
    await TempMail.setEmail();
});

Given(/^go to the main page (.*?)$/, async (domain) => {
    await navigatePage(domain);
});

When(/^I click to Sign in$/, async () => {
    await client.clickButton(bbc_reg.Sign_in, 'Click to Sign in button');
});

When(/^see (.*?) form$/, async title => {
    await BBC.waitSignInPage(title);
});

When(/^click Register now link$/, async () => {
    await BBC.clickRegisterButton();
});

Then(/^I see (.*?) buttons with ages$/, async arg => {
    await BBC.buttonsInRegForms(arg);
});

Then(/^choose more 13 age$/, async () => {
    await BBC.chooseOlderAge();
});

Then(/^fill in it by random data$/, async () => {
    await BBC.dayOfBirth();
});

Then(/^submit data$/, async () => {
    await client.clickButton(bbc_reg.SubmitButton, 'Click Submit date');
});

Then(/^fill temp mail and pass from acc$/, async () => {
    await BBC.fillCredential();
});

Then(/^refuse for subscribe to the news$/, async () => {
    await BBC.refuseSubscribing();
});

Then(/^see message from BBC Account in TempMail$/, async () => {
    await BBC.messageInTempMail();
});