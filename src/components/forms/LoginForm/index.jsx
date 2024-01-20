import { useForm } from "react-hook-form";
import { Input, InputPwd } from "../../forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginForm.schema";

export const LoginForm = ({ onSubmit}) => {

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
                >
                    Entrar
                </button>
            </form>
        </>
    );
}; 