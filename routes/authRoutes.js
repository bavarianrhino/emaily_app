const passport = require('passport');

module.exports = (app) => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );
    
    app.get('/auth/google/callback',
        passport.authenticate('google'),
        (req,res) => {
            res.redirect('/surveys')
        }
    );

    app.get('/api/logout', (req, res) => {
        req.logout();
        console.log('******', req.user);
        res.send(req.user)
        // NOTE: navigating to /api/logout logged null for user, then navigated
        //   to /api/current_user which logged undefined for user.
    })

    app.get('/api/current_user', (req, res) => {
        console.log('******', req.user)
        res.send(req.user);
    });
};

