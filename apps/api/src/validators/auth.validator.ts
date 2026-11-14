import { z } from "zod";

export const registerSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Le nom doit contenir au moins 2 caractères"),

    email: z
        .string()
        .trim()
        .email("Adresse e-mail invalide")
        .toLowerCase(),

    password: z
        .string()
        .min(8, "Le mot de passe doit contenir au moins 8 caractères"),
});

export const loginSchema = z.object({
    email: z
        .string()
        .trim()
        .email("Adresse e-mail invalide")
        .toLowerCase(),

    password: z
        .string()
        .min(1, "Le mot de passe est obligatoire"),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;