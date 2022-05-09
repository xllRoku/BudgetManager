import { categorys } from "./data/categorys.js";
import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const main = async () => {
  await prisma.category.createMany({
    data: categorys,
  });
};

main().catch((error) => console.error(error));
