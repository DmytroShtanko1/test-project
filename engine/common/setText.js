import {client} from "nightwatch-cucumber"

export class Text{
    static async set(selector){
        return setText(selector)
    }
    static async list(selector){
        return setAttributes(selector)
    }
    static async setValueField(selector){
        let text = null;
        await client.expect.element(selector).to.be.visible;
        await client.getValue(selector, async res => {
            text= res.value
        });
        console.log(` ✔  Set text is: ${text}`);
        return text;
    }
}


async function setText(selector) {
    let text = null;
    await client.expect.element(selector).to.be.visible;
    await client.getText(selector, async res => {
        text= res.value
    });
    console.log(` ✔  Set text is: ${text}`);
    return text;
}

async function setAttributes(selector) {
    let text = [];
    await client.elements('css selector', selector, function (result) {
        for (let i = 0; i < result.value.length; i++) {
            this.elementIdAttribute(result.value[i].ELEMENT, `innerText`, res => {
                text.push(res.value)
            })
        }
    });
    return text;
}