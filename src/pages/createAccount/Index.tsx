import Btn from "@/assets/componentes/button/Index";
import { useState } from "react";
import type { InputValuesProps } from "./createAccountType";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import InputConfiguration from "@/assets/componentes/inputConfiguration/Index";
import { NavLink } from "react-router";

function CreateAccount() {
  const [messagePassword, setMessagePassword] = useState<string | boolean>("");
  const [changePasswordType, setChangePasswordType] =
    useState<string>("password");
  const [changeConfirmPasswordType, setChangeConfirmPasswordType] =
    useState<string>("password");
  const [inputValues, setInputValues] = useState<InputValuesProps>({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [inputsValidation, setInputsValidation] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(window.innerWidth);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const handleBtn = () => {
    setInputsValidation(true);
    if (inputValues.password === inputValues.password2) {
      setMessagePassword(true);
    } else {
      return setMessagePassword("The passwords must be the same.");
    }
  };

  const handlePassword = () => {
    if (changePasswordType === "password") {
      setChangePasswordType("text");
    } else {
      setChangePasswordType("password");
    }
  };
  const handleConfirmPassword = () => {
    if (changeConfirmPasswordType === "password") {
      setChangeConfirmPasswordType("text");
    } else {
      setChangeConfirmPasswordType("password");
    }
  };

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  return (
    <div>
      <div
        className={`flex absolute inset-0 m-auto  
          w-[100rem] h-[60rem] items-center shadow-xl/30 rounded-3xl
          max-[1030px]:w-[90vw]`}
      >
        {width >= 660 && (
          <div
            className={`flex flex-col w-[50vw] bg-gray-300 h-[100%] 
            justify-center items-center rounded-l-3xl`}
          >
            <p
              className={`text-[4rem] text-gray-600 max-[730px]:text-[3rem] max-[730px]:font-bold`}
            >
              Welcome
            </p>
            <p
              className={`text-[2.2rem] mb-[4rem] text-gray-600 text-center max-[730px]:text-[2.0rem]`}
            >
              Access your account
            </p>
            <NavLink to="/signin">
              <Btn
                className={`w-[12rem] h-[4rem] text-[1.4rem] cursor-pointer
             text-gray-600 border-2 hover:bg-gray-200 border-gray-500 shadow-xl max-[730px]:w-[12vw]`}
                value="Sign in"
              />
            </NavLink>
          </div>
        )}
        <div
          className={`flex flex-col w-[100vw] bg-[#FFF] h-[100%] 
            justify-center items-center gap-[4rem] rounded-r-xl max-[660px]:rounded-l-xl`}
        >
          {width <= 660 && (
            <div
              className={`flex flex-col w-[50vw] h-[100%] 
            justify-center items-center rounded-l-3xl max-[660px]:mb-[-6rem]`}
            >
              <p
                className={`text-[4rem] text-gray-600 max-[730px]:text-[3rem] max-[730px]:font-bold`}
              >
                Welcome
              </p>
              <p
                className={`text-[2.2rem] mb-[1rem] text-gray-600 text-center max-[730px]:text-[2.0rem]`}
              >
                Access your account OR
              </p>
              <NavLink to="/signin">
                <Btn
                  className={`w-[19vw] h-[4rem] text-[1.4rem] cursor-pointer
                   text-gray-600 border-2 hover:bg-gray-200
                   border-gray-500 shadow-xl`}
                  value="Sign in"
                />
              </NavLink>
            </div>
          )}
          <p className={`text-[4rem] text-gray-600 max-[400px]:text-5xl`}>Create account</p>
          <form
            onSubmit={handleSubmit}
            action=""
            className={`flex flex-col justify-center items-center gap-6 
              max-[660px]:mb-[3rem] max-[660px]:mt-[-3rem]`}
          >
            <div>
              <InputConfiguration
                icon={<AiOutlineUserAdd />}
                className={`
                    w-[32rem] h-[3.3rem] pl-10 border-2 rounded-md max-[400px]:w-[80vw]
                    ${
                      inputValues.name === "" && inputsValidation === true
                        ? "border-red-500"
                        : "border-gray-200"
                    }
                  `}
                placeholder={"Name"}
                onChange={(e) =>
                  setInputValues({ ...inputValues, name: e.target.value })
                }
              />
              {inputValues.name === "" && inputsValidation === true && (
                <p className={`text-red-600 text-[1.2rem]`}>
                  write a valid name
                </p>
              )}
            </div>
            <div>
              <InputConfiguration
                icon={<MdOutlineEmail />}
                className={`
                    w-[32rem] h-[3.3rem] pl-10 border-2 rounded-md max-[400px]:w-[80vw]
                    ${
                      inputValues.email === "" && inputsValidation === true
                        ? "border-red-500"
                        : "border-gray-200"
                    }
                  `}
                placeholder={"Email"}
                onChange={(e) =>
                  setInputValues({ ...inputValues, email: e.target.value })
                }
              />
              {inputValues.email === "" && inputsValidation === true && (
                <p className={`text-red-600 text-[1.2rem]`}>
                  write a valid email
                </p>
              )}
            </div>
            <div>
              <InputConfiguration
                icon={<RiLockPasswordLine />}
                className={`
                    w-[32rem] h-[3.3rem] pl-10 border-2 rounded-md max-[400px]:w-[80vw]
                    ${
                      inputValues.password === "" && inputsValidation === true
                        ? "border-red-500"
                        : "border-gray-200"
                    }
                  `}
                onChange={(e) =>
                  setInputValues({ ...inputValues, password: e.target.value })
                }
                type={changePasswordType}
                placeholder={"Password"}
                iconPassword={
                  changePasswordType === "password" ? (
                    <IoEyeOutline size={18} />
                  ) : (
                    <IoEyeOffOutline size={18} />
                  )
                }
                onClick={handlePassword}
              />
              {inputValues.password === "" && inputsValidation === true && (
                <p className={`text-red-600 text-[1.2rem]`}>
                  write a valid password
                </p>
              )}
            </div>
            <div>
              <InputConfiguration
                icon={<RiLockPasswordLine />}
                className={`
                    w-[32rem] h-[3.3rem] pl-10 border-2 rounded-md max-[400px]:w-[80vw]
                    ${
                      inputValues.password2 === "" && inputsValidation === true
                        ? "border-red-500"
                        : "border-gray-200"
                    }
                  `}
                onChange={(e) =>
                  setInputValues({ ...inputValues, password2: e.target.value })
                }
                type={changeConfirmPasswordType}
                placeholder="Confirm password"
                iconPassword={
                  changeConfirmPasswordType === "password" ? (
                    <IoEyeOutline size={18} />
                  ) : (
                    <IoEyeOffOutline size={18} />
                  )
                }
                onClick={handleConfirmPassword}
              />
              {messagePassword && (
                <p className={`text-red-600 text-[1.2rem]`}>
                  {messagePassword}
                </p>
              )}
            </div>
            <Btn
              onClick={handleBtn}
              className={`w-[15rem] text-[2rem] mt-[4rem] h-[5rem] cursor-pointer 
                hover:bg-gray-400 bg-gray-500 text-[#FFF] shadow-xl/20 border-0`}
              value="Register"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
export default CreateAccount;
