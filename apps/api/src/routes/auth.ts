import User from "../models/User.js";
import authMiddleware from "../middleware/auth.middleware.js";
import { Router } from "express";
import {
    registerSchema,
    loginSchema,
} from "../validators/auth.validator.js";
import {
    registerUser,
    loginUser,
} from "../services/auth.service.js";

const authRouter = Router();

// Inscription
authRouter.post("/register", async (req, res) => {
    try {
        const validation = registerSchema.safeParse(req.body);

        if (!validation.success) {
            return res.status(400).json({
                message: "Données invalides",
                errors: validation.error.flatten().fieldErrors,
            });
        }

        const user = await registerUser(validation.data);

        return res.status(201).json({
            message: "Utilisateur créé avec succès",
            user,
        });
    } catch (error) {
        const message =
            error instanceof Error ? error.message : "Erreur serveur";

        if (message === "Cette adresse e-mail est déjà utilisée.") {
            return res.status(409).json({ message });
        }

        console.error("Erreur inscription :", error);

        return res.status(500).json({
            message: "Une erreur est survenue lors de l'inscription",
        });
    }
});

// Connexion
authRouter.post("/login", async (req, res) => {
    try {
        const validation = loginSchema.safeParse(req.body);

        if (!validation.success) {
            return res.status(400).json({
                message: "Données invalides",
                errors: validation.error.flatten().fieldErrors,
            });
        }

        const result = await loginUser(validation.data);

        return res.status(200).json({
            message: "Connexion réussie",
            ...result,
        });
    } catch (error) {
        const message =
            error instanceof Error ? error.message : "Erreur serveur";

        if (message === "Identifiants incorrects.") {
            return res.status(401).json({ message });
        }

        if (message === "Ce compte est désactivé.") {
            return res.status(403).json({ message });
        }

        console.error("Erreur connexion :", error);

        return res.status(500).json({
            message: "Une erreur est survenue lors de la connexion",
        });
    }
});

// Récupérer les informations de l'utilisateur connecté
authRouter.get("/me", authMiddleware, async (req, res) => {
    try {
        // Vérifier que le middleware a identifié l'utilisateur
        if (!req.user) {
            return res.status(401).json({
                message: "Authentification requise.",
            });
        }

        // Rechercher l'utilisateur dans MongoDB
        const user = await User.findById(req.user.id);

        if (!user || !user.isActive) {
            return res.status(401).json({
                message: "Utilisateur introuvable ou désactivé.",
            });
        }

        // Retourner les informations sans le mot de passe
        return res.status(200).json({
            message: "Utilisateur authentifié.",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });

    } catch (error) {
        console.error("Erreur récupération utilisateur :", error);

        return res.status(500).json({
            message: "Erreur lors de la récupération de l'utilisateur.",
        });
    }
});

export default authRouter;