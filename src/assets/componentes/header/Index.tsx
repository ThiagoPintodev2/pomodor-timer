import { useState } from "react";
import Btn from "../button/Index";
import SettingIcon from "../settingIcon/Index";
import SignInIcon from "../signInIcon/Index";
import WindowSetting from "../windowSetting/Index";

function Header() {
  const [OpenWindowSetting, setOpenWindowSetting] = useState<boolean>(false);

  const buttons = [
    {
      value: "Setting",
      img: <SettingIcon />,
      onClick: () => setOpenWindowSetting(!OpenWindowSetting),
    },
    {
      value: "Sign In",
      img: <SignInIcon />,
    },
  ];

  return (
    <>
      <div className="flex text-[#FFF] gap-[1rem] mt-[1rem] max-w-[65rem] m-auto items-center">
        <h1 className="mr-[10rem] text-[2rem] font-bold">ThiagoPomo</h1>
        {buttons.map((item) => (
          <Btn
            className={"bg-[#C66A6A] text-[1.4rem] w-[10rem] h-[4rem] "}
            value={item.value}
            img={item.img}
            onClick={item?.onClick}
          />
        ))}
      </div>
      {OpenWindowSetting === true && <WindowSetting />}
    </>
  );
}
export default Header;
