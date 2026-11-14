
import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";

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

const allowedRoles: UserRole[] = ["admin", "editor", "user"];

const authMiddleware: RequestHandler = (req, res, next) => {
    try {
        // 1. Vérifier la présence du JWT_SECRET
        const jwtSecret = process.env.JWT_SECRET;

        if (!jwtSecret) {
            return res.status(500).json({
                message: "Configuration JWT manquante.",
            });
        }

        // 2. Récupérer le token
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "Token manquant.",
            });
        }

        const token = authHeader.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                message: "Token invalide.",
            });
        }

        // 3. Vérifier le token
        const decoded = jwt.verify(token, jwtSecret);

        if (
            typeof decoded === "string" ||
            typeof decoded.sub !== "string" ||
            typeof decoded.role !== "string" ||
            !allowedRoles.includes(decoded.role as UserRole)
        ) {
            return res.status(401).json({
                message: "Token invalide.",
            });
        }

        // 4. Ajouter l'utilisateur à la requête
        req.user = {
            id: decoded.sub,
            role: decoded.role as UserRole,
        };

        // 5. Autoriser la suite de la requête
        next();

    } catch (error) {
        return res.status(401).json({
            message: "Token invalide ou expiré.",
        });
    }
};

export default authMiddleware;
