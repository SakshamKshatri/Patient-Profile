const checkRole = (role) => {
  return (req, res, next) => {
    console.log(req.user);
    if (req.user && req.user.role === role) {
      next();
    } else {
      res.status(403).json({ message: "Unathorized" });
    }
  };
};

// export default checkRole;
