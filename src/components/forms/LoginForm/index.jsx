import { useForm } from "react-hook-form";
import { Input, InputPwd } from "../../forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginForm.schema";
import { useState } from "react";

export const LoginForm = ({ onSubmit, navigate }) => {
    const [showPWd, setShowPwd] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginFormSchema), 
    });

    return (
        <>
            <form
                className="formContainer"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Input
                    label="Email"
                    type="text"
                    error={errors.email}
                    {...register("email")}
                    placeholder="E-mail"
                />
                <InputPwd
                    label="Senha"
                    error={errors.password}
                    {...register("password")}
                    placeholder="Senha"
                />

                <button
                    className="buttonDefault typoButton"
                    type="submit"
                    onClick={() => navigate("/dashboard")}
                >
                    Entrar
                </button>
                <p
                    className="headlineBold"
                >
                    Ainda não possui uma conta?
                </p>
                <button
                    className="buttonDisable typoButton"
                    type="submit"
                    onClick={() => navigate("/register")}
                >
                    Cadastre-se
                </button>
            </form>
        </>
    );
}; 