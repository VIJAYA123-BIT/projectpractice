public with sharing class RecaptchaDemo {
   // private static String recaptchaSecretKey = 'reCAPTCHA_secret_key';
    // private static String recaptchaSecretKey = '6Le_hvUpAAAAAPPslhvGzRzTb8n_ds3p95-7Nx-i';
        
    // @AuraEnabled
    // public static String insertRecord(SObject record, String recaptchaResponse){
    //     //https://developers.google.com/recaptcha/docs/verify
    //     Http http = new Http();
    //     HttpRequest request = new HttpRequest();
    //     request.setEndpoint('https://www.google.com/recaptcha/api/siteverify');
    //     request.setMethod('POST');
    //     request.setBody('secret=' + recaptchaSecretKey + '&response=' + recaptchaResponse);
    //     HttpResponse response = http.send(request);

    //     if (response.getStatusCode() == 200) {
    //         System.debug(response.getBody());
    //         Map<String, Object> result = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());

    //         if (result.containsKey('success') && result.get('success') == true) {
    //             if (result.containsKey('score')) {
    //                 //score logic is only needed/returned for v3 (0.0 - 1.0)
    //                 //https://developers.google.com/recaptcha/docs/v3
    //                 //TODO: verify action name for the request
    //                 String action = (String)result.get('action');
    //                 //TODO: get threshold configuration for each action
    //                 Decimal threshold = .4;
    //                 Decimal score = (Decimal)result.get('score');
    //                 if (score > threshold) {
    //                     //TODO: perform action on record
                        
    //                     return 'Success - v3';
    //                 }
    //             } else {
    //                 //TODO: perform action on record
                    
    //                 return 'Success - v2';
    //             }
    //         } else {
    //             return 'Invalid Verification';
    //         }
    //     }
    //     //consider letting this through
    //     return 'Invalid Verification Request';
    // }
    public RecaptchaDemo(){

    }


    @AuraEnabled
    public static Boolean isReCAPTCHAValid(String tokenFromClient) {
        String SECRET_KEY = '6Le_hvUpAAAAAPPslhvGzRzTb8n_ds3p95-7Nx-i';
        String RECAPTCHA_SERVICE_URL = 'https://www.google.com/recaptcha/api/siteverify';
        Http http = new Http();

        HttpRequest request = new HttpRequest();

        request.setEndpoint(RECAPTCHA_SERVICE_URL + '?secret=' + SECRET_KEY + '&response' + tokenFromClient);
        request.setMethod('POST');
        request.setHeader('Content-Length', '0');
        HttpResponse response = http.send(request);

        Map<String, Object> mapOfBody = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());

        Boolean success = (Boolean) mapOfBody.get('success');

        return success;
    }
}

