import {client} from "nightwatch-cucumber";
import {bbc_reg} from "../controls/bbc/bbc.registration";
import {PullObject} from "../helpers/pullObject";
import {timeouts} from "../engine/config/timeouts";

export class BBC {
    static async waitSignInPage(title) {
        await client.waitForTitle(res => res === title);
    }
    static async submitButton(){
        await client.clickButton(bbc_reg.SubmitButton, 'Click Submit date');
        try{
            await client.waitForElementNotPresent(bbc_reg.DayReg, timeouts.ll);
        }catch(e){
            await client.clickButton(bbc_reg.SubmitButton, 'Click Submit date');
        }
    }

    static async clickRegisterButton() {
        await client.clickButton(bbc_reg.RegistrationButton, 'Click registration link');
    }

    static async buttonsInRegForms(arg) {
        await client.waitElement(bbc_reg.ButtonsInRegistration, 'Wait for buttons');
        await client.verify.elementsCount(bbc_reg.ButtonsInRegistration, 'css selector', Number(arg), 'Buttons with ages are present!');
    }

    static async chooseOlderAge() {
        await client.clickButton(bbc_reg.MoreThenThirteen, 'Click to older age');
    }

    static async dayOfBirth() {
        await fillInData(bbc_reg.DayReg, 21, 'Fill in the day');
        await fillInData(bbc_reg.MouthReg, 12, 'Fill in the mouth');
        await fillInData(bbc_reg.YearReg, 1988, 'Fill in the year');
    }

    static async fillCredential() {
        const email = PullObject.get('temp_email');
        const pass = 'Sindikat123';
        await fillInData(bbc_reg.EmailField, email, 'Fill in the email');
        await fillInData(bbc_reg.PasswordField, pass, 'Fill in the account password');
    }

    static async refuseSubscribing() {
        await client.clickButton(bbc_reg.RefusedSubscribing, 'Reject subscribing');
        try{
            await client.expect.element(bbc_reg.RefusedSubscribingValue).to.be.selected.before(timeouts.ll);
        }catch(e){
            await client.clickButton(bbc_reg.RefusedSubscribing, 'Reject subscribing');
        }
    }

    static async messageInTempMail() {
        const success = 'Подтвердите адрес электр';
        await client.switch_back();
        await client.waitElement(bbc_reg.MessageInTempMail, 'Wait for registration latter');
        await client.waitForText(bbc_reg.MessageInTempMail, res => res === success);
    }
}

async function fillInData(sel, value, msg) {
    await client.visibleSet(sel, value, msg);
}