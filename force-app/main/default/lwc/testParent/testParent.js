import { LightningElement } from 'lwc';

export default class TestParent extends LightningElement {
    valuetochild="extradinary claim 100";
    thesecond
    secondvaluetochild(event){
        this.thesecond =event.detail;
    }
}