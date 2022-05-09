import jwt from "jsonwebtoken";
import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const checkAuth = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await prisma.user.findUnique({
      where: {
        id: decoded.id,
      },
    });

    delete req.user.password;
    delete req.user.budget;
    delete req.user.token;

    if (!token) {
      const error = new Error("Not valid token");
      res.status(401).json({ msg: error.message });
    }
  }
  next();
};

export default checkAuth;
