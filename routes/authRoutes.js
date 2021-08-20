const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.json(
      // adding the message is not required 
      // it seems that all that is required at this
      // point is to respond and maybe with json
      // issue prior was not logging out truly\
      // this is before the side was built.....
      { status: "logout",
      msg:"Please Log In again"}
      );
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
