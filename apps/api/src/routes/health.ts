
import { Router } from "express";

const healthRouter = Router();

healthRouter.get("/health", (_req, res) => {
    res.json({
        status: "ok",
        message: "CMS Intelligent API is running",
    });
});

export default healthRouter;
