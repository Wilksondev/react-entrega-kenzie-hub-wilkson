import { z } from "zod";

const registerFormSchema = z
    .object({
        name: z.string().min(1, "Este campo é obrigatório."),
        email: z
            .string()
            .email("Forneça um e-mail valido.")
            .min(1, "Este campo é obrigatório."),
        password: z
            .string()
            .min(8, "É necessário um mínimo de oito (8) caracteres.")
            .regex(/[a-z]+/, "É necessário ao menos uma letra minúscula.")
            .regex(/[A-Z]+/, "É necessário ao menos uma letra maiúscula.")
            .regex(/[0-9]+/, "É necessário ao menos um número.")
            .regex(
                /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]+/,
                "É necessário conter pelo menos um caracter especial."
              ),
        confirmPassword: z
            .string()
            .min(1, "Este campo é obrigatório."),
        bio: z.string().min(1, "Este campo é obrigatório."),
        contact: z
            .string()
            .min(1, "Este campo é obrigatório."),
        course_module: z
            .string()
            .min(1, "Este campo é obrigatório."),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
        message: "As senhas não correspondem.",
        path: ["confirmPassword"],
    });

export { registerFormSchema };