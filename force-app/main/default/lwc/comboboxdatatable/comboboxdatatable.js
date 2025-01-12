import { LightningElement , track } from 'lwc';
import Secondwiredemo from '@salesforce/apex/wiredemo.Secondwiredemo';
import Thirdwiredemo from '@salesforce/apex/wiredemo.Thirdwiredemo';
import { updateRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {refreshApex} from '@salesforce/apex';
const columns =[{label:'Name', fieldName:'LastName' , editable:true},
    {label:'email' , fieldName:'Email' , editable:true},
    {label:'Phone' , fieldName:'Phone' , editable:true}]
export default class Comboboxdatatable extends LightningElement {
    selectedValue
    showAccrelatedContacts = false
    showContacts = false
    @track accountOptions =[]
    @track ArrayContacts=[]
    @track columns= columns;
    @track fieldItemValues =[];
    @track draftValues = [];
    connectedCallback(){
        this.fetchAccounts()
    }
    fetchAccounts(){
        Secondwiredemo().then(result =>{
            if(result){
                this.accountOptions = result.map(accounts =>({label:accounts.Name,value:accounts.Id}));
            }
        })
    }
    comboHandler(event){
        this.selectedValue = event.detail.value;
       this.showAccrelatedContacts = true;
    }
    submitHandler(){
        this.showContacts= true
        Thirdwiredemo({Accountvalue:this.selectedValue}).then(result =>{
            if(result){
                this.ArrayContacts = result;
                console.log('the related contacts are '+ JSON.stringify(this.ArrayContacts));
            }
        })
    }
    handleSave(event){
        const inputItems = event.detail.draftValues.slice().map(draft => {
        const fields = Object.assign({}, draft);
            return { fields };
        });
        const promises = inputItems.map(recordInput => updateRecord(recordInput));
        Promise.all(promises).then(res => {
            this.dispatchEvent (
                new ShowToastEvent({
                    title :'Success',
                    message :'Record updated Successfully !!',
                    variant : 'Success'
                })
            );
            this.draftValues = [];
            return this.refresh();
        })
    }
    async refresh(){
       await refreshApex(this.ArrayContacts)
    }
}