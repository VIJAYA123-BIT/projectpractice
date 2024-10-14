import { LightningElement ,track } from 'lwc';
import PrintAccountRecords from '@salesforce/apex/PrintRecords.PrintAccountRecords';
import AddAccountRecords from '@salesforce/apex/PrintRecords.AddAccountRecords';

export default class PrintingNumbers extends LightningElement {
    @track numbers=[1,2,3,4,5]
    @track accountRecords=[]
    @track userEnteredNumber 
    inputHandler(event){
        this.userEnteredNumber = event.target.value
        }
        submithandler(){
            this.userEnteredNumber = parseInt(this.userEnteredNumber, 10);
            PrintAccountRecords({numberEntered : this.userEnteredNumber}).then(response =>{
                this.accountRecords = response
            })
            .catch(error =>{
                console.log('the error is '+ error.getErrorMessage)
            })
        }
        @track UserenteredName='';
        UserIndustry
        NameHandler(event){
        const{name, value} = event.target
        if(name== 'EnteredName'){
            this.UserenteredName = value
            console.log('the user entered name is '+ this.UserName)
        }
        else if( name = 'UserEnteredIndustry'){
            this.UserIndustry = value

        }

        }
        Addhandler(){
            console.log('the user secondvalue is  '+ this.UserenteredName)
            AddAccountRecords({EntereduserName : this.UserenteredName , EnteredIndustry : this.UserIndustry }).then(() =>{
                console.log('the record is saved');
                this.UserenteredName ='';
                this.UserIndustry ='';
            }).catch(error =>{
                console.log('the error is '+error.getErrorMessage);
            })

        }

}