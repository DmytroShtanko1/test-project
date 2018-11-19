import {client} from "nightwatch-cucumber"

export class Text{
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