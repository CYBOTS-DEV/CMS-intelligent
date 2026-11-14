
import { Router } from "express";
import healthRouter from "./routes/health.js";
import authRouter from "./routes/auth.js";

const gateway = Router();

gateway.use(healthRouter);
gateway.use("/auth", authRouter);

export default gateway;
