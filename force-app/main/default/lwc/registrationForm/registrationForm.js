import { LightningElement , track } from 'lwc';

export default class RegistrationForm extends LightningElement {
    @track firstName=''
    @track CompanyName=''
    @track EmailName=''
    @track PasswordEntered=''
    @track ConfirmPassword=''
    @track passwordError = '';
    @track confirmPasswordError = '';
    @track RegistrationFormflag = true;
    @track Thankyouflag =false;
    @track cnfpswrd='';
    @track pswrd='';
   
    InputHandler(event){ 
        const {name,value} = event.target;
        // this[name]= value;

        if(name === 'first'){
            this.firstName= value;
            console.log(this.firstName);
        }
        else if(name === 'Company'){
            this.CompanyName = value;
            console.log(this.CompanyName)
        }
        else if(name === 'Email'){
            this.EmailName =value;
            console.log(this.EmailName)
        }
        else if(name === 'PasswordEntered'){
            this.PasswordEntered = value;
            console.log(this.PasswordEntered)
        }
        else if(name === 'ConfirmPassword'){
            this.ConfirmPassword = value;
            if(this.PasswordEntered != this.ConfirmPassword){
                console.log('error password');
            }
            else{
                console.log('matched');
            }
           
            //this.validatePassword();
            console.log(this.ConfirmPassword)
           
            this.checkPasswordMatch();
        }
    }
    
    get passwordErrorClass() {
        return this.passwordError === 'Good' ? 'slds-text-color_success' : 'slds-text-color_error';
    }

    get confirmPasswordErrorClass() {
        return this.confirmPasswordError === 'Matched' ? 'slds-text-color_success' : 'slds-text-color_error';
    }
    handlePasswordChange(event) {
        this.PasswordEntered = event.target.value;
        this.validatePassword();
    }
    validatePassword() {
        if (this.PasswordEntered.length < 3 || this.PasswordEntered.length > 5) {
            this.passwordError = 'Password should be between 3-5 characters';
        } else {
            this.passwordError = 'Good';
        }
    }
    handleConfirmPasswordChange(event) {

        this.ConfirmPassword = event.target.value;
        this.checkPasswordMatch();
    }

    checkPasswordMatch() {
        if (this.PasswordEntered !== this.ConfirmPassword && (this.PasswordEntered !=='' && this.ConfirmPassword !== '')) {

            this.confirmPasswordError = 'Passwords do not match';
        } else {
            this.confirmPasswordError = 'Matched';
        }
    }
     

    signUpHandler() {
        this.validatePassword();
        this.checkPasswordMatch();
        if (this.passwordError === 'Good' && this.confirmPasswordError === 'Matched') {
            this.RegistrationFormflag = false;
            this.Thankyouflag = true;
        }
        console.log('please work yaar');
    }
    TargetHandler(){
        console.log('this is the target');
    }
renderedCallback(){
    let divElement = this.template.querySelector('div.recaptcha');
    if (divElement) {
        let payload = { element: divElement };
        document.dispatchEvent(new CustomEvent("grecaptchaRender", { "detail": payload }));
        this.recaptchaRendered = true;
    } else {
        console.error("reCAPTCHA placeholder element not found.");
    }
}
}