import { LightningElement, api } from 'lwc';

export default class NonProfitAdminCheckGroupIcon extends LightningElement {
    @api progress = 0;
    @api label = 1;
    @api compleate = false;

    get classRing() {
        const classes = ['slds-progress-ring', 'slds-progress-ring_large']
        if(this.complateIcon) {
            classes.put('slds-progress-ring_complete');
        } else if(this.progresIcon) {
            classes.put('slds-progress-ring_active-step');
        }
        return classes.join(' ');
    }

    get complateIcon() {
        return this.compleate || this.progress >= 100;
    }

    get ringLabel() {
        return this.complateIcon ? 'Complate' : this.label;
    }

    get ringLabelClass() {
        return this.complateIcon ? 'slds-assistive-text' : 'slds-progress-ring__content';
    }

    get progresIcon() {
        return this.progress > 0 && this.progress < 100;
    }

    get unprogresIcon() {
        return !this.complateIcon && !this.progresIcon;
    }
}