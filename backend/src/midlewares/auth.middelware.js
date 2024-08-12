import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

// authantication:

export const authantication = async (req, res, next) => {
  try {
    // fetch the token
    const token =
      req.body.token ||
      req.cookies.token ||
      req.header("Authorization").replace("Bearer ", "");
    // if token is missing then return the response:
    if (!token) {
      res.json({
        succes: false,
        message: "token is missing",
      });
    }
    console.log("token is ", token);

    try {
      var payload = jwt.verify(token, process.env.JWT_SECRET);
      console.log("payload is:", payload);

      req.user = payload;
    } catch (err) {
      console.log("error in token is invalid", err);
      return res.json({
        succes: false,
        message: "token is invalid",
        err: err.message,
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({
      succes: false,
      message: "something went wrong while verifying the token",
      error: error.message,
    });
  }
  next();
};

// isstudent:

export const isStudent = (req, res, next) => {
  try {
    if (req.user.accountType != "Student") {
      return res.json({
        succes: false,
        message: "this route is protected for student only",
      });
    }
  } catch (error) {
    return res.json({
      succes: false,
      message: "something went wrong in isStudent",
      error,
    });
  }
  next();
};

// isInstructore
export const isInstructore = (req, res, next) => {
  try {
    if (req.user.accountType != "Instructor") {
      return res.json({
        succes: false,
        message: "this route is protected for Instructor only",
      });
    }
  } catch (error) {
    return res.json({
      succes: false,
      message: "something went wrong in isInstructore",
      error,
    });
  }
  next();
};

// isAdmin
export const isAdmin = (req, res, next) => {
  try {
    if (req.user.accountType != "Admin") {
      return res.json({
        succes: false,
        message: "this route is protected for Admin only",
      });
    }
  } catch (error) {
    return res.json({
      succes: false,
      message: "something went wrong in isAdmin",
      error,
    });
  }
  next();
};
