import { LightningElement, track } from 'lwc';

export default class ConditionalCards extends LightningElement {
@track showcard  = false

submitHandler(){
    this.showcard =! this.showcard
}
get showlabel(){
    return this.showcard ?  'hide' : 'show'
}
}