import { LightningElement ,api} from 'lwc';

export default class PublicChildToParentComponent extends LightningElement {
    @api letter;
    @api textvalue;
    @api isFirstInstance;
    @api isSecondInstance;
    @api isThirdInstance =false;
    userinput
    inputHandler(event){
        this.userinput = event.target.value;
    }
    submitHandler(){
        console.log('the userinput is '+this.userinput);
        const env = new CustomEvent('addtask', {detail:this.userinput});
        this.dispatchEvent(env);
        this.userinput ='';
    }

}