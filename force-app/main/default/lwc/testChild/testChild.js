import { LightningElement, api } from 'lwc';

export default class TestChild extends LightningElement {
    @api testInput;
    inp1 
    inputHandler(event){
        this.inp1 = event.target.value;
    }
    submitHandler(){

        const evnv = new CustomEvent('inputtask' , {detail : this. inp1 })
            this.dispatchEvent(evnv);     
        }

}