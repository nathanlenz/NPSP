import { LightningElement, track } from 'lwc';
import checklist from './data';

export default class NonProfit_AdminChecklist extends LightningElement {
    @track checklists = checklist;

}