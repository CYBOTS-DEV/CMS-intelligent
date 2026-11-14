
import type { RequestHandler } from "express";
import type { UserRole } from "./auth.middleware.js";

export const authorizeRoles = (
    ...allowedRoles: UserRole[]
): RequestHandler => {
    return (req, res, next) => {

        // Vérifier l'authentification
        if (!req.user) {
            return res.status(401).json({
                message: "Authentification requise.",
            });
        }

        // Vérifier les permissions
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({
                message: "Accès interdit : permissions insuffisantes.",
            });
        }

        next();
    };
};
