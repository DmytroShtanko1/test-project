import {client} from "nightwatch-cucumber";
import {Random} from "./random.number";
import {buran} from "../../controls/buran/main.page";
import {campobet} from "../../controls/campobet/registration";
import {menuItems} from "../../pages/registration";

const email = require('random-email');
const {createWord} = require('vertex-names');
const Fakerator = require("fakerator");
const fakerator = new Fakerator("en-AU");

let pass = {}
let number = {}

export class FormFields {
    static getPassword(value) {
        pass = value
    }

    static getPhoneNumber(value) {
        number = value
    }

    static setPhoneNumber() {
        return number
    }

    static setPassword() {
        return pass
    }

    static async emailFieldRegistrationForm(message) {
        const phone = Random.range()
        this.getPhoneNumber(phone);
        const sentEmail = `test_` + email({domain: `${phone}${createWord(9)}.${createWord(9)}`});
        await client.visibleSet(buran.EmailField, sentEmail, message);
    }

    static async passFieldRegistrationForm(message) {
        const word = createWord(9);
        const pass = word.charAt(0).toUpperCase() + word.substr(1).toLowerCase() + 1;
        this.getPassword(pass)
        await client.visibleSet(buran.PassField, pass, message);
        return pass
    }

    static async checkboxesRegistrationForm(checkbox_state) {
        await clickCheckboxes(buran.CheckBoxesInRegistrationForm, checkbox_state);
        await client.expect.element(checkbox_state).to.be.selected;
    }

    static async confirmPassword(message) {
        const randomWord = this.setPassword()
        await client.visibleSet(campobet.PasswordConfirmationField, randomWord, message);
        return randomWord
    }

    static async fillInPhoneNumber(message) {
        const phoneNumber = FormFields.setPhoneNumber();
        await client.clickButton(buran.PhoneRegistrationForm, message);
        await client.visibleSet(buran.PhoneRegistrationForm, phoneNumber, message);
    }

    static async fillInAddress(message) {
        const address = fakerator.address.street();
        await client.visibleSet(buran.AddressRegistrationForm, address, message);
    }

    static async fillInPostCode(message) {
        const postCode = Random.customRangeDiopazon(10, 10000);
        await client.clickButton(buran.PostCodeRegistrationForm, message);
        await client.visibleSet(buran.PostCodeRegistrationForm, postCode, message);
    }

    static async fillInDayOfBirth(message) {
        await client.clickButton(buran.BirthdayRegistrationForm, message);
        await chooseDateInCalendar();
    }

    static async country(message) {
        await client.clickButton(buran.CountryMenu, message);
        const country = await menuItems(buran.CountryMenuItems);
        const random = Random.customRange(country);
        await client.clickButton(buran.CountryMenuItem(random), message);
        await client.clickButton(buran.CountryMenu, message);
    }

    static async currency(message) {
        await client.clickButton(buran.CurrencyMenu, message);
        const currency = await menuItems(buran.CurrencyMenuItems);
        const random = Random.customRange(currency);
        await client.clickButton(buran.CurrencyMenuItem(random), message);
        await client.clickButton(buran.CurrencyMenu, message);
    }
}

export async function fillInField(selector, message) {
    const word = createWord(9);
    const randomWord = word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    await client.visibleSet(selector, randomWord, message);
    return randomWord;
}

export async function fillInLogin(selector, message) {
    const word = generateWord()
    const randomWord = word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    await client.visibleSet(selector, randomWord, message);
    return randomWord;
}

async function chooseDateInCalendar() {
    await chooseYear(`Select year button `);
    await chooseMonth(`Select month button `);
    await chooseDay(`Select day button `);
}

async function chooseYear(message) {
    await client.waitElement(buran.DatePicker, 'DatePickerWindow ');
    await client.clickButton(buran.SelectYear, message);
    const years = await menuItems(buran.SelectYearItems);
    const random = Random.customRange(years);
    await client.clickButton(buran.SelectYearItem(random), `SelectYear `);
    await client.clickButton(buran.SelectYear, message);
}

async function chooseMonth(message) {
    await client.clickButton(buran.SelectMonth, message);
    const month = await menuItems(buran.SelectMonthTotal);
    const random = Random.customRange(month);
    await client.clickButton(buran.SelectMonthItem(random), message);
    await client.clickButton(buran.SelectMonth, message);
}

async function chooseDay(message) {
    const days = await menuItems(buran.DaysInCalendar);
    const random = Random.customRange(days);
    await client.useXpath();
    await client.clickButton(buran.DayInCalendar(random), message);
    return client.useCss();
}


export async function clickCheckboxes(selector, checkbox_state) {
    await client.expect.element(selector).to.be.visible;
    await client.expect.element(checkbox_state).to.be.present;
    await client.elements(`css selector`, selector, res => {
        for (let i = 0; i < res.value.length; i++) {
            client.elementIdClick(res.value[i].ELEMENT)
        }
    })
}

export function generateWord() {
    const number = Random.customRange(9);
    const first = createWord(2);
    const second = createWord(2);
    const third = createWord(1);
    const staticWord = "e8e7edf7";
    return staticWord.concat(first).concat(second).concat(third).concat(number);
}