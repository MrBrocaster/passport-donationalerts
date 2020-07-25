const OAuth2Strategy = require('passport-oauth2');
const InternalOAuthError = OAuth2Strategy.InternalOAuthError;
const baseURL = 'https://www.donationalerts.com';

class Strategy extends OAuth2Strategy {
    constructor(options, verify) {;
        options = options || {};
        options.authorizationURL = options.authorizationURL || `${baseURL}/oauth/authorize`;
        options.tokenURL = options.tokenURL || `${baseURL}/oauth/token`;
        options.scopeSeparator = options.scopeSeparator || ' ';
        options.customHeaders = options.customHeaders || {};

        super(options, verify);

        this.clientID = options.clientID;
        this.name = 'donationalerts';
        this.pem = options.pem;

        this._oauth2.setAuthMethod('Bearer');
        this._oauth2.useAuthorizationHeaderforGET(true);
    }

    userProfile(token, done) {
        let headers = {
            'Client-ID': this.clientID
        };
    
        if (this._oauth2._useAuthorizationHeaderForGET) {
            headers['Authorization'] = this._oauth2.buildAuthHeader(token)
            token = null
        }
    
        this._oauth2._request('GET', `${baseURL}/api/v1/user/oauth`, headers, '', token, function (err, body, res) {
            if (err)
                return done(new InternalOAuthError('Failed to fetch user profile! Check your scope.', err));

            try {
                done(null, {
                    ...JSON.parse(body).data,
                    provider: 'donationalerts'
                });
            } catch(e) {
                done(e);
            }
        });
    }
}

module.exports = Strategy;
