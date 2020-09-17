import { LightningElement, api } from 'lwc';

export default class NonProfitAdminCheckItem extends LightningElement {
    @api item = {}

    get hasButtonLight() {
        return !!this.item.buttonLight;
    }

    get hasButtonDark() {
        return !!this.item.buttonDark;
    }

    get hasLink() {
        return !!this.item.link
    }
}