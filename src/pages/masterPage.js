import wixLocation from 'wix-location';

$w.onReady(function () {
    // Replace '#loginButton' with the actual ID of your login button
    $w("#membersLoginBar1").onClick(() => {
        // AWS Cognito Hosted UI URL
        const cognitoUrl = "https://authent.westwooddeca.org/login?client_id=2hli7g0usurtkif6bv2qk8nrau&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fwestwooddeca.org";
        
        // Redirect to the Cognito URL
        wixLocation.to(cognitoUrl);
    });
});
