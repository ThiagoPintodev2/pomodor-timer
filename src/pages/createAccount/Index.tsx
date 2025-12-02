import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";
import { LuArrowLeftFromLine } from "react-icons/lu";

const schema = z
  .object({
    name: z.string().min(2, "Campo obrigatório"),
    email: z.string().email("Campo obrigatório"),
    password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

function CreateAccount() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: FormData) {
    console.log("Cadastro enviado:", data);
  }

  return (
    <div className="flex flex-col w-[100vw] h-[100vh] items-center justify-center">
      <Card className="flex flex-col justify-baseline w-[39rem] h-[50rem] bg-white">
        <CardHeader>
          <CardTitle className="text-[2.8rem] text-center">
            Cadastro de Usuário
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
            <div className="space-y-0">
              <Label className="text-[1.3rem]">Nome</Label>
              <Input className="h-[3.2rem]" {...register("name")} />
              {errors.name && (
                <p className="text-sm text-red-500 ">{errors.name.message}</p>
              )}
            </div>
            <div className="space-y-0">
              <Label className="text-[1.3rem]">Email</Label>
              <Input
                className="h-[3.2rem]"
                type="email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-0">
              <Label className="text-[1.3rem]">Senha</Label>
              <Input
                className="h-[3.2rem]"
                type="password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="space-y-0">
              <Label className="text-[1.3rem]">Confirmar Senha</Label>
              <Input
                className="h-[3.2rem]"
                type="password"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="text-sm text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full h-[4.2rem] text-[1.7rem]">
              Criar Conta
            </Button>
          </form>
        </CardContent>
      </Card>
      <div className="mt-[1rem]">
        <NavLink className="flex gap-2 text-[1.5rem] text-white" to="/">
          <LuArrowLeftFromLine />
          <p>voltar</p>
        </NavLink>
      </div>
    </div>
  );
}
export default CreateAccount;
