import generateId from "../helpers/generateId.js";
import generateJWT from "../helpers/generateJWT.js";
import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const register = async (req, res) => {
  const { email } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user) {
    const error = new Error("User already exits");
    return res.status(404).json({ msg: error.message });
  }

  //Creating user

  const { name, lastName, password } = req.body;
  const userCreate = await prisma.user.create({
    data: {
      name,
      lastName,
      email,
      password,
    },
  });

  res.json({ msg: "User has been created" });
};

const logear = async (req, res) => {
  const { email } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    const error = new Error("User doesn't exits");
    return res.status(404).json({ msg: error.message });
  }

  const { password } = req.body;

  if (user.password === password) {
    user.token = generateJWT(user.id);
    await prisma.user.update({
      where: {
        email,
      },
      data: {
        token: user.token,
      },
    });
    res.json(user);
  } else {
    const error = new Error("Incorrect Password");
    return res.status(404).json({ msg: error.message });
  }
};

const forgetPassword = async (req, res) => {
  const { email } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    const error = new Error("User doesn't exits");
    return res.status(404).json({ msg: error.message });
  }

  user.token = generateId();

  await prisma.user.update({
    where: {
      email,
    },
    data: {
      token: user.token,
    },
  });
  res.json({ msg: "Hemos enviado un correo con las instrucciones" });
};

const confirmToken = async (req, res) => {
  const { token } = req.params;

  const tokenValid = await prisma.user.findUnique({
    where: {
      token,
    },
  });

  if (tokenValid) {
    res.json({ msg: "Token valido " });
  } else {
    const error = new Error("Token no valido");
    return res.status(404).json({ msg: error.message });
  }
};

const newPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  const user = await prisma.user.findUnique({ where: { token } });

  if (user) {
    user.password = password;
    user.token = "";
    await prisma.user.update({
      where: {
        email: user.email,
      },
      data: {
        password: user.password,
        token: user.token,
      },
    });
    res.json({ msg: "Password changed" });
  } else {
    const error = new Error("Token no valdio");
    return res.status(404).json({ msg: error.message });
  }
};

const profile = async (req, res) => {
  const { user } = req.user;
  res.json(user);
};

export { register, logear, forgetPassword, confirmToken, newPassword, profile };
