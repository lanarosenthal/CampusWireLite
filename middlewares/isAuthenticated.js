const isAuthenticated = (req, _res, next) => {
  console.log(`username ${req.session}`);

  console.log(`username ${req.session.username}`);
  if (req.session.username && req.session.username !== '') {
    next();
  } else {
    console.log("Error");
    next(new Error('authentication failed'));
  }
};

module.exports = isAuthenticated;
