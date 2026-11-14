import mongoose from "mongoose";

const connectDatabase = async (): Promise<void> => {
    try {
        const mongoUri = process.env.MONGODB_URI;

        if (!mongoUri) {
            throw new Error("MONGODB_URI est absente du fichier .env");
        }

        await mongoose.connect(mongoUri, {
            serverSelectionTimeoutMS: 5000,
        });

        console.log("MongoDB connecté avec succès !");
    } catch (error) {
        console.error("Erreur de connexion MongoDB :", error);
        throw error;
    }
};

export default connectDatabase;