import { LightningElement , track } from 'lwc';
import Secondwiredemo from '@salesforce/apex/wiredemo.Secondwiredemo';
export default class ImperativeCallDemo extends LightningElement {

@track arrayData =[]
firstArray =false
submitHandler(){
    this.firstArray = true
    console.log('the array data is ');
    Secondwiredemo().then(result => {
        console.log('the result array  data is '+ JSON.stringify(result));

        if(result){
            this.arrayData = result;
            console.log('the result is '+ this.arrayData);
        }

    }).cache(Error =>{
        console.log('the error is ');

    })
}}