import { LightningElement } from 'lwc';

export default class AmazonClone extends LightningElement {
    email
    password
    handleUserName(event){
        this.email = event.target.value;

    }
    handlePasswordChange(event){
        this.password =event.target.value;
    }
    handleLogin(){
        console.log('Inside Login');
        console.log('Email value: ',this.email);
        console.log('Password is :'+this.password);
    }
}