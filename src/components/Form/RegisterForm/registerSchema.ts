import { z } from "zod";

export const registerSchema = z
    .object({
        name: z
            .string()
            .min(3, "O nome precisa ter pelo menos 3 caracteres!")
            .max(120, "Numero máximo de caracteres atingido!")
            .nonempty("Nome obrigatório!"),
        email: z
            .string()
            .max(45, "Numero máximo de caracteres atingido!")
            .email("Email invalido!")
            .nonempty("Email obrigatório!"),
        cpf: z.string().max(11),
        cellPhone: z.string().nonempty(),
        birthDate: z.string(),
        description: z.string(),
        accountType: z.string(),
        address: z.object({
            cep: z.string(),
            state: z.string(),
            city: z.string(),
            street: z.string(),
            number: z.string(),
            complement: z.string(),
        }),
        password: z
            .string()
            .min(8, "Sua senha deve conter no minimo 8 caracteres")
            .max(120)
            .nonempty("Senha obrigatória!"),
        confirmPassword: z
            .string()
            .nonempty("A confirmação de senha é obrigatório!"),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
        message: "Password doesn't match",
        path: ["confirmPassword"],
    });

export type TRegisterData = z.infer<typeof registerSchema>;
