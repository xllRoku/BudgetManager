import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import transacionstRoutes from "./routes/transactionsRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import walletRoutes from "./routes/walletRoutes.js";

const app = express();
const PORT = 4000;

app.use(express.json());

const whitelist = [process.env.FRONTEND_URL];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      //Puede consultar la api
      callback(null, true);
    } else {
      //No está permitido
      callback(new Error("Error de cors"));
    }
  },
};

app.use(cors(corsOptions));

//Routing
app.use("/api/users", userRoutes);
app.use("/api/transactions", transacionstRoutes);
app.use("/api/categorys", categoryRoutes);
app.use("/api/wallets", walletRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
