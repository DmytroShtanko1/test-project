import {links} from "../misc/request.links"
import {client} from "nightwatch-cucumber";
import {Text} from "../engine/common/setText";
import {bbc_reg} from "../controls/bbc/bbc.registration";
import {PullObject} from "../helpers/pullObject";

export class TempMail {
    static async openFirstTAb() {
        return await client.url(links.temp_email);
    }

    static async setEmail() {
        const email = await Text.setValueField(bbc_reg.TempMailEmail);
        PullObject.set('temp_email', email);
    }
}