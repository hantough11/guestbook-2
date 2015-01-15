//var OAUTH2_CLIENT_ID = '541405025964-6qhiqh0uihcr1lricqgeboge3c74ojhn.apps.googleusercontent.com';
var OAUTH2_CLIENT_ID = '792310793065-6rnor8jge4k83norti3aksv9rd5r4clo.apps.googleusercontent.com';

var OAUTH2_SCOPES = [
  'https://www.googleapis.com/auth/youtube'
];

googleApiClientReady = function () {
    gapi.auth.init(function () {
        window.setTimeout(checkAuth, 1);
    });
}

function checkAuth() {
    gapi.auth.authorize({
        client_id: OAUTH2_CLIENT_ID,
        scope: OAUTH2_SCOPES,
        immediate: true,
    }, handleAuthResult);
}

function handleAuthResult(authResult) {
    if (authResult && !authResult.error) {
        loadAPIClientInterfaces();
    } else {
        $('#login-link').click(function () {
            gapi.auth.authorize({
                client_id: OAUTH2_CLIENT_ID,
                scope: OAUTH2_SCOPES,
                immediate: false
            }, handleAuthResult);
        });
    }
}

function loadAPIClientInterfaces() {
    gapi.client.load('youtube', 'v3', function () {
    });
}
