# passport-donationalerts

**DEVELOPMENT VERSION**

DonationAlerts is a trademark or registered trademark of My.com B.V. "passport-donationalerts" is not operated by, sponsored by, or affiliated with My.com B.V. in any way.

[Passport](https://passportjs.org/) strategy for authenticating with [DonationAlerts](https://www.donationalerts.com/).

## Installation

Simply run in your terminal:

```bash
$ npm install passport-twitch.js
```

## Example usage

```javascript
const passport = require('passport');
const daStrategy = require('passport-donationalerts').Strategy;

passport.use(new daStrategy({
        clientID: DONATIONALERTS_APP_ID,
        callbackURL: 'http://127.0.0.1/auth/da/cb',
        scope: 'user_read'
    },
    function (accessToken, refreshToken, profile, done) {
        // work with recieved tokens and profile here
    }
));
```

## Special thanks

* [Bioblaze](https://github.com/Bioblaze) opensource repository for codebase
