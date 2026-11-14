import "dotenv/config";
import express from "express";
import gateway from "./gateway.js";
import connectDatabase from "./config/database.js";

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(express.json());
app.use("/api", gateway);

const startServer = async (): Promise<void> => {
    console.log("Démarrage de l'API...");

    await connectDatabase();

    app.listen(PORT, () => {
        console.log(`API démarrée sur http://localhost:${PORT}`);
    });
};

startServer().catch((error) => {
    console.error("Erreur au démarrage :", error);
    process.exit(1);
});