# passport-donationalerts

DonationAlerts is a trademark or registered trademark of My.com B.V. "passport-donationalerts" is not operated by, sponsored by, or affiliated with My.com B.V. in any way.

[Passport](https://passportjs.org/) strategy for authenticating with [DonationAlerts](https://www.donationalerts.com/).

## Installation

Simply run in your terminal:

```bash
$ npm install passport-donationalerts
```

## Example usage

```javascript
const passport = require('passport');
const daStrategy = require('passport-donationalerts').Strategy;

passport.use(new daStrategy({
        clientID: 12345,
        clientSecret: 'AbCdEfGHiJKlMNoP123456890',
        callbackURL: 'http://127.0.0.1/daCb/'
    },
    function (accessToken, refreshToken, profile, done) {
        // work with recieved tokens and profile here
    }
));
```

Read the [Passport documentation](http://www.passportjs.org/docs/) for further information.

## Special thanks

* [Bioblaze](https://github.com/Bioblaze) opensource repository for codebase
