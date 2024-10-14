import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    valuemessage
    valuerecieved(event){
        this.valuemessage = event.detail
    }}