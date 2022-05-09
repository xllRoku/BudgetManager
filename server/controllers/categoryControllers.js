import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const getTypeCategory = async (req, res) => {
  const { type } = req.params;

  const categorys = await prisma.category.findMany({
    where: {
      type,
    },
  });

  res.status(200).json(categorys);
};

export { getTypeCategory };
