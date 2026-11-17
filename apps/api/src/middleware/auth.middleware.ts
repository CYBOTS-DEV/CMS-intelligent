
import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Définition des rôles autorisés
export type UserRole = "admin" | "editor" | "user";

// Ajouter les informations utilisateur à Express Request
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                role: UserRole;
            };
        }
    }
}

const authMiddleware: RequestHandler = async (req, res, next) => {
    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
        return res.status(500).json({
            message: "Configuration JWT manquante.",
        });
    }

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            message: "Token manquant.",
        });
    }

    const token = authHeader.slice(7).trim();

    if (!token) {
        return res.status(401).json({
            message: "Token invalide.",
        });
    }

    // 1. Vérifier le JWT
    let decoded;

    try {
        decoded = jwt.verify(token, jwtSecret);
    } catch {
        return res.status(401).json({
            message: "Token invalide ou expiré.",
        });
    }

    if (
        typeof decoded === "string" ||
        typeof decoded.sub !== "string"
    ) {
        return res.status(401).json({
            message: "Token invalide.",
        });
    }

    try {
        // 2. Récupérer l'utilisateur depuis MongoDB
        const user = await User.findById(decoded.sub);

        // 3. Vérifier son existence et son statut
        if (!user || !user.isActive) {
            return res.status(401).json({
                message: "Utilisateur introuvable ou désactivé.",
            });
        }

        // 4. Récupérer le rôle actuel depuis MongoDB
        req.user = {
            id: user._id.toString(),
            role: user.role,
        };

        next();
    } catch (error) {
        next(error);
    }
};

export default authMiddleware;
