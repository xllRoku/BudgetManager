import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const createWallet = async (req, res) => {
  const { id } = req.params;

  const { walletName, walletBalance } = req.body;

  const wallet = await prisma.wallet.create({
    data: {
      name: walletName,
      balance: walletBalance,
      userId: id,
    },
  });

  res.json(wallet);
};

export { createWallet };
