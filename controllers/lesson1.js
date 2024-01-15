const homeRoute = (req, res) => {
  res.send("Welcome to the Home page");
};

const aboutRoute = (req, res) => {
  res.send("Welcome to Abouts page");
};

const usersRoute = (req, res) => {
  res.send("Welcome to Users page");
};

// export the
module.exports = {
  homeRoute,
  aboutRoute,
  usersRoute,
};
