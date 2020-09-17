import { LightningElement, api, track } from 'lwc';

export default class NonProfitAdminCheckGroup extends LightningElement {
    @api group;
    @track open = false;

    get displaySteps() {
        return this.open && this.group.steps;
    }

    get infoClass() {
        const classs = ['slds-media', 'info'];
        if(this.displaySteps) {
            classs.push('open');
        }
        return classs.join(' '); 
    }

    onClickOpenOrClose(event) {
        console.log('onClickOpenOrClose2');
        this.open = !this.open;
    }
}