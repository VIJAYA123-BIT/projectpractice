import { LightningElement , wire ,track} from 'lwc';
import LdtWithRowActionsmethod from '@salesforce/apex/PrintRecords.LdtWithRowActionsmethod';
import { NavigationMixin } from 'lightning/navigation';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import delSelectedAccs from '@salesforce/apex/PrintRecords.delSelectedAccs'
// importing to refresh the apex if any record changes the datas
import {refreshApex} from '@salesforce/apex';
const actions=[
    {label:'View' , name:'view'},
    {label:'Edit', name:'edit'},
    {label:'Delete', name :'delete'}
]

const columns =[
    { label :'Name', fieldName: 'Name'},
    {label: 'Phone', fieldName : 'Phone'},
    {label: 'Industry', fieldName : 'Industry'},
    {
        type:'action', typeAttributes :{
            rowActions : actions,
            menuAlignment : 'right'
        },
    }
];

export default class LdtWithRowActions extends NavigationMixin(LightningElement) {
    @track data;
    @track columns = columns;
    @track record = [];
    @track bShowModal = false;
    @track currentRecordId;
    @track isEditMode = false;
    @track showLoadingSpinner = false;
    refreshTable
    // connectedCallback(){
    //     LdtWithRowActionsmethod().then(result => {
    //         console.log('the result is', JSON.stringify(result))
    //         this.data = result;
    //         this.refreshTable = result;
    //         console.log('the data are ',this.data);
    //     })
    //     .catch(error => {
    //         console.log('you are not done yet');
    //     });
    // }
    @wire(LdtWithRowActionsmethod) AccountRecords(result){
        this.refreshTable = result;
        if (result.data) {
            this.data = result.data;
            this.error = undefined;

        } else if (result.error) {
            this.error = result.error;
            this.data = undefined;
        }
    }
    handlerowaction(event) {
        let actionName = event.detail.action.name;
        window.console.log('actionName ====> ' + actionName);
        let row = event.detail.row;
        console.log('the row id is '+ row.Id , 'the datatype is ',typeof(row));
        window.console.log('row ====> ' + row);
        // eslint-disable-next-line default-case
        switch (actionName) {
            case 'view':
                this.viewCurrentRecord(row);
                break;
            case 'edit':
                this.editCurrentRecord(row);
                break;
            case 'delete':
                this.deleteAccs(row.Id);
                break;
        }
    }

    // view the current record details
    viewCurrentRecord(currentRow) {
        this.bShowModal = true;
        this.isEditMode = false;
        this.record = currentRow;
    }

    // closing modal box
    closeModal() {
        this.bShowModal = false;
    }


    editCurrentRecord(currentRow) {
        // open modal box
        this.bShowModal = true;
        this.isEditMode = true;

        // assign record id to the record edit form
        this.currentRecordId = currentRow.Id;
        console.log('the current record is '+this.currentRecordId )
    }

    // handleing record edit form submit
    handleSubmit(event) {
        // querying the record edit form and submiting fields to form
        this.template.querySelector('lightning-record-edit-form').submit(event.detail.fields);
        // closing modal
        this.bShowModal = false;
// showing success message
this.dispatchEvent(new ShowToastEvent({
    title: 'Success!!',
    // message: event.detail.fields.Name +' Account updated Successfully!!.',
    variant: 'success'
}),);

}
handleSuccess() {
    return refreshApex(this.refreshTable);
}
deleteAccs(currentRow) {
    this.showLoadingSpinner = true;
    console.log('going to the apex with id '+ currentRow);
    // calling apex class method to delete the selected contact
    delSelectedAccs({lstAccIds: currentRow}).then(result => {
        window.console.log('result ====> ' + result);
        this.showLoadingSpinner = false;
        this.dispatchEvent(new ShowToastEvent({
            title: 'Success!!',
            message: currentRow +' Account deleted.',
            variant: 'success'
        }),);
        console.log('the refresh started');
        return refreshApex(this.refreshTable);
        

    })
    .catch(error => {
        window.console.log('Error ====> '+error);
        this.dispatchEvent(new ShowToastEvent({
            title: 'Error!!', 
            message: error.message, 
            variant: 'error'
        }),);
    });
}  
}