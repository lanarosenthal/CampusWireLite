const isAuthenticated = (req, _res, next) => {
  if (req.session.username && req.session.username !== '') {
    next();
  } else {
    next(new Error('authentication failed'));
  }
};

module.exports = isAuthenticated;
