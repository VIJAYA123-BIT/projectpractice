import { LightningElement } from "lwc";
export default class dataBinding extends LightningElement{
    greetings='Happy New Year';
    firstName='';
    lastName='';
    showMe=false;
    handleChange(event){
        const  field =event.target.name;
        if(field === 'firstName'){
            this.firstName= event.target.value;
        }
        else if(field === 'lastName'){
            this.lastName = event.target.value;
        }
        this.showMe=event.target.checked
    }
    get Fullname(){
        return `${this.firstName}  ${this.lastName}`;
    }
    myValue='BTS'
    changeHandler(event){
        this.myValue = event.target.value;
    }
   
        
    }
