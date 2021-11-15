const isAuthenticated = (req, next) => {
  console.log(`username ${req.session}`);

  console.log(`username ${req.session.username}`);
  if (req.session.username && req.session.username !== '') {
    next();
  } else {
    next(new Error('authentication failed'));
  }
};

module.exports = isAuthenticated;
