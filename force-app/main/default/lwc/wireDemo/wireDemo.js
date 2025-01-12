import { LightningElement , wire, track} from 'lwc';
import firstwiredemo from '@salesforce/apex/wiredemo.firstwiredemo';
const columns =[{label : 'Name',fieldName:'Name',editable: true}]
export default class WireDemo extends LightningElement {
    @track arraydata=[]
    @track columns=columns;
    @wire(firstwiredemo)  firstwiremethodcall(result){
        if(result.data){
            console.log('the callback starts');

            this.arraydata = result.data
        }
    }
    // connectedCallback(){
    //     console.log('the callback starts');
    //     this.arraydata = this.firstwiremethodcall;
    //     console.log('the arraydata is ... '+ this.arraydata);
    // }

}