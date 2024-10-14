import { LightningElement, api } from 'lwc';

export default class Child extends LightningElement {
    // @api message;
    inputMessageforparent
    handlechangeforparent(event){
        this.inputMessageforparent = event.target.value;
    }
    submitHandler(){
        const eve = new CustomEvent('sucess',{
            detail: this.inputMessageforparent
        })
        this.dispatchEvent(eve);
    }
}