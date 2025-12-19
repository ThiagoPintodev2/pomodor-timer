import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NavLink } from "react-router";
import { LuArrowLeftFromLine } from "react-icons/lu";

function LoginArea() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] items-center justify-center gap-6">
      <h1 className="text-[2rem] font-bold text-white">ThiagoPomoFocus</h1>
      <Card className="flex flex-col justify-around w-[36rem] h-[36rem] bg-white max-[410px]:w-[90vw]">
        <CardHeader>
          <div className="text-[2.8rem] font-medium text-center">
            Enter your Account
          </div>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label className="text-[1.4rem]" htmlFor="email">
                  Email
                </Label>
                <Input
                  className="h-[4rem]"
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label className="text-[1.4rem]" htmlFor="password">
                    Password
                  </Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-[1.4rem]"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  className="h-[4rem]"
                  id="password"
                  type="password"
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            className="w-full h-[4.5rem] border text-[1.6rem] text-white cursor-pointer hover:bg-gray-800"
          >
            Login
          </Button>
        </CardFooter>
      </Card>
      <div>
        <NavLink className="flex gap-2 text-[1.5rem] text-white" to="/">
          <LuArrowLeftFromLine />
          <p>voltar</p>
        </NavLink>
      </div>
      <NavLink to="/createaccount">
        <div className="text-[1.2rem] font-medium mt-[1rem] underline cursor-pointer">
          Create your account
        </div>
      </NavLink>
    </div>
  );
}

export default LoginArea;
