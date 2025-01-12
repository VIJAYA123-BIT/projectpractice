import { LightningElement , track } from 'lwc';
import Secondwiredemo from '@salesforce/apex/wiredemo.Secondwiredemo';
export default class ComboboxLwc extends LightningElement {
    @track selectedValue ='';
    @track AccountOptions =[]
    connectedCallback(){
        this.fetchAccountOptions();
    }
    fetchAccountOptions(){
            Secondwiredemo().then(result =>{
                if(result){
                    this.AccountOptions = result.map(Account => ({ label : Account.Name , value : Account.Name}));
                    console.log('the account option result is '+ this.AccountOptions);    
                }
            })
    
    }
        HandleChange(event){
            console.log('onchange fires');
            this.selectedValue = event.detail.value;
        }
}
    
    
