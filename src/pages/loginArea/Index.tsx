import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";

function LoginArea() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] items-center justify-center gap-6">
        <h1 className="text-[2rem] font-bold text-white">ThiagoPomoFocus</h1>
        <p className="text-[1.3rem] font-medium text-white">Enter your Account</p>
      <Card className="w-full h-[32vh] max-w-md">
        <CardHeader>
         <Button variant="outline" className="w-full h-[4vh] text-[1.1rem] text-gray-500">
            <FcGoogle size={14} />
            Login with Google
          </Button>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full h-[3.8vh] bg-gray-600 text-[1.3rem]">
            Login
          </Button>
          
        </CardFooter>
      </Card>
    </div>
  );
}

export default LoginArea;
