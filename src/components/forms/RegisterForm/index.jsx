import { useForm } from "react-hook-form";
import { Input, InputPwd } from "../../forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerForm.schema";

export const RegisterForm = ({ onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(registerFormSchema),
    });

    return (
        <>
            <form
                className="formContainer"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Input
                    label="Nome"
                    type="text"
                    error={errors.name}
                    {...register("name")}
                    placeholder="Digite novamente seu nome."
                />
                <Input
                    label="Email"
                    type="text"
                    error={errors.email}
                    {...register("email")}
                    placeholder="Digite novamente seu e-mail."
                />
                <InputPwd
                    label="Senha"
                    error={errors.password}
                    {...register("password")}
                    placeholder="Digite sua senha."
                />
                <InputPwd
                    label="Confirmar Senha"
                    error={errors.confirmPassword}
                    {...register("confirmPassword")}
                    placeholder="Digite novamente sua senha."
                />
                <Input
                    label="Bio"
                    type="text"
                    error={errors.bio}
                    {...register("bio")}
                    placeholder="Fale sobre você"
                />
                <Input
                    label="Contato"
                    type="tel"
                    error={errors.contact}
                    {...register("contact")}
                    placeholder="Opção de contato"
                />
                <div className="campContainer">
                    <p className="headline" >Selecionar módulo</p>
                    <select
                        name="" id=""
                        {...register("course_module")}
                        className="inputContainer"
                    >
                        <option value="Módulo 1">Módulo 1</option>
                        <option value="Módulo 2">Módulo 2</option>
                        <option value="Módulo 3">Módulo 3</option>
                        <option value="Módulo 4">Módulo 4</option>
                        <option value="Módulo 5">Módulo 5</option>
                    </select>
                </div>
                <button
                    className="buttonNegative typoButton"
                    type="submit"
                >
                    Cadastrar
                </button>
            </form>
        </>
    );
};