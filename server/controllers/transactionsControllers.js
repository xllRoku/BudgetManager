import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const getTransactions = async (req, res) => {
  const { id } = req.params;

  const transacitons = await prisma.transaction.findMany({
    where: {
      userId: id,
    },
    include: {
      categorys: true,
    },
  });
  res.json(transacitons);
};

const createTransaction = async (req, res) => {
  const { id } = req.params;

  const { type, amount, date, categoryId } = req.body;

  console.log(type, amount, date, categoryId, id);

  const transaction = await prisma.transaction.create({
    data: {
      type,
      amount,
      userId: id,
      date,
      categoryId,
    },
  });

  res.json(transaction);
};

const getTransaction = async (req, res) => {
  const { id } = req.params;
  const transaciton = await prisma.transaction.findUnique({
    where: {
      id: idInt,
    },
  });

  if (!transaciton) {
    const error = new Error("Don't found");
    return res.status(404).json({ msg: error.message });
  }

  if (transaciton.userId !== req.user.id) {
    const error = new Error("denegate");
    return res.status(401).json({ msg: error.message });
  }

  res.json(transaciton);
};

const editTransaction = async (req, res) => {
  const { id } = req.params;
  const transaction = await prisma.transaciton({
    where: {
      id,
    },
  });
  if (!transaction) {
    const error = new Error("No encontrado");
    return res.status(404).json({ msg: error.message });
  }

  // if (proyecto.creador !== req.user.id) {
  //   const error = new Error("Acción no valida");
  //   return res.status(401).json({ msg: error.message });
  // }

  transaction.amount = req.body.amount || proyecto.amount;
  transaction.date = req.body.date || proyecto.date;
  transaction.categoryId = req.body.categoryId || proyecto.categoryId;

  try {
    const changedTransaction = await prisma.transaction.update({
      where: {
        id,
      },
      data: {
        transaction,
      },
    });
    res.json({ changedTransaction });
  } catch (error) {
    console.log(error);
  }
};

const deleteTransaction = async (req, res) => {
  const { id } = req.params;

  const transaction = await prisma.transaction.findUnique({ where: { id } });

  console.log(transaction);

  if (!transaction) {
    const error = new Error("No encontrado");
    return res.status(404).json({ msg: error.message });
  }

  // if (proyecto.creador.toString() !== req.user._id.toString()) {
  //   const error = new Error("Acción no valida");
  //   return res.status(401).json({ msg: error.message });
  // }

  await prisma.transaction.delete({
    where: {
      id,
    },
  });
  res.json({ msg: "Proyecto eliminado" });
};

export {
  getTransactions,
  createTransaction,
  getTransaction,
  editTransaction,
  deleteTransaction,
};
