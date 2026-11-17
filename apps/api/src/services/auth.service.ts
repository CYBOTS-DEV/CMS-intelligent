import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import {
    RegisterInput,
    LoginInput,
} from "../validators/auth.validator.js";

export const registerUser = async (data: RegisterInput) => {
    const existingUser = await User.findOne({
        email: data.email,
    });

    if (existingUser) {
        throw new Error("Cette adresse e-mail est déjà utilisée.");
    }

    const hashedPassword = await bcrypt.hash(data.password, 12);

    const user = await User.create({
        name: data.name,
        email: data.email,
        password: hashedPassword,
    });

    return {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
    };
};

export const loginUser = async (data: LoginInput) => {
    const user = await User.findOne({
        email: data.email,
    }).select("+password");

    if (!user) {
        throw new Error("Identifiants incorrects.");
    }

    if (!user.isActive) {
        throw new Error("Ce compte est désactivé.");
    }

    const isPasswordValid = await bcrypt.compare(
        data.password,
        user.password
    );

    if (!isPasswordValid) {
        throw new Error("Identifiants incorrects.");
    }

    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
        throw new Error("JWT_SECRET est absente du fichier .env");
    }

    const token = jwt.sign(
        {
            sub: user._id.toString(),
        },
        jwtSecret,
        {
            expiresIn: "15m",
        }
    );

    return {
        token,
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        },
    };
};