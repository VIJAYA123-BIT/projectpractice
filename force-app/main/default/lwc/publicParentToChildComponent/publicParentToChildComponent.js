import { LightningElement, track , wire} from 'lwc';
import { publish ,MessageContext } from 'lightning/messageService';
import lmsPubSub from '@salesforce/messageChannel/lmsPubSub__c';
export default class PublicParentToChildComponent extends LightningElement {
    @wire(MessageContext)
    messageContext;
    childword ="great job";
    input1
    input2
    childword1=''
    inputHandler(event){
        this.input1 = event.target.value;
        console.log('the requirement is '+this.input1)
    }
    submitHandler(){
        console.log('the requirement submit is '+this.input1);
        this.childword1 = this.input1;
        let payload = {userName : this.input1};
        console.log('the payload111 first username is '+ payload.userName);
        publish(this.messageContext ,lmsPubSub, payload );
        
    }
    @track tasklist=[];
    handleAddedTask(event){
        console.log('new task'+event.detail);
        this.tasklist.push(event.detail);
        console.log('Tasks '+this.tasklist);
    }
    SecondinputHandler(event){
        this.input2 = event.target.value;
    }
    secondsubmitHandler(){
        let userName = this.input2
        let payload = {userName : userName};
        console.log('the payload username is '+ payload.userName);
        publish(this.messageContext ,lmsPubSubSecond, payload );

    }
}