import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // Split by space to get the token
    const decodedToken = jwt.verify(token, "RANDOM-TOKEN");
    req.user = decodedToken; // The decoded token contains user information
    next();
  } catch (error) {
    res.status(401).json({
      error: new Error("Invalid request"),
    });
  }
};

export default auth;
