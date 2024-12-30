import { LightningElement } from 'lwc';

export default class LifeCycleHook extends LightningElement {
    a=[]
    constructor(){
        super();
        console.log('hey constructor')
    }
    connectedCallback(){
        // both the connected call back & disconnected call back are move from parent to child.
        console.log('hey connectedCallback');
        this.a.push(2);
        console.log('the list is '+this.a);
    }
    disconnectedCallback(){
        this.a=[];
        console.log("hey the list is "+this.a)
        console.log('hey disconnected callback');
    }
    renderedCallback(){ //it flows from the child to parent.,
        console.log('hey renderedd');
    }
    errorCallback(error,stack){
        console.log('Error call back :'+error);
    }
}