import { LightningElement, api, wire } from 'lwc';
import getRecordDetails from '@salesforce/apex/YourApexClass.getRecordDetails';

export default class pdfRecordDetails extends LightningElement {
    @api recordId; // Current record Id
    lookupRecord;  // Stores lookup record details

    @wire(getRecordDetails, { recordId: '$recordId' })
    wiredRecord({ error, data }) {
        if (data) {
            this.lookupRecord = data;
        } else if (error) {
            console.error('Error fetching lookup record: ', error);
        }
    }

    handleDownload() {
        // Check if lookup record is loaded
        if (this.lookupRecord) {
            const pdfUrl = 'file:///Users/VI20422272/Downloads/Coreflex%20Approved%20Applicator%20Certificate_Blank%20(1).pdf'; // Set the actual URL or static resource path
            window.open(pdfUrl, '_blank'); // Open the PDF in a new tab
        } else {
            console.error('No lookup record found');
        }
    }
}
