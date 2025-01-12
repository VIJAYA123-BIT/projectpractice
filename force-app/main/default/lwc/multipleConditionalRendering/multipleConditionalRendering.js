import { LightningElement , track } from 'lwc';

export default class MultipleConditionalRendering extends LightningElement {
     buttonnumber ='buttom 3'
     property1 = false;
     property2 = false;
    buttonHandler(){
        if(this.property1 == true){
            console.log('the property 1 is true')
            this.buttonnumber = 'button 2';
            this.property1 = false;
            this.property2= true;
        }
        else{
            this.property2 = false;
            this.property1 = true;
            this.buttonnumber = 'button 1';
        }
    }
}