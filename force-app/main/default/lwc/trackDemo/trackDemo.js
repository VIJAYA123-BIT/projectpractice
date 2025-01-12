import { LightningElement ,track } from 'lwc';

export default class TrackDemo extends LightningElement {
    @track FullName ={FirstName :"",LastName:""};
    UpdatedFirstName
    inputHandler(event){
        this.FullName.FirstName = event.target.value;
    }
    SubmitHandler(){
        this.UpdatedFirstName = this.FullName.FirstName

    }

}