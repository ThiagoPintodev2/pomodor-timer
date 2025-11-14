import SettingIcon from "../settingIcon/Index";
import SignInIcon from "../signInIcon/Index";
import WindowSetting from "../windowSetting/Index";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import Btn from "../button/Index";

function Header() {

  return (
    <>
      <div className="flex text-[#FFF] gap-[1rem] mt-[1rem] items-center">
        <h1 className="mr-[10rem] text-[2rem] font-bold">ThiagoPomo</h1>

        <Dialog>
          <DialogTrigger
            className={
              "flex items-center cursor-pointer justify-center gap-3 bg-[#c66a6a] text-[1.7rem] w-[10rem] h-[4rem] rounded-[0.5rem] border  shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
            }
          >
            {<SettingIcon />}
            {"SETTING"}
          </DialogTrigger>
          <DialogContent
            className="
                overflow-y-auto scroll-area
                h-[92vh]
                rounded-2xl"
          >
            <DialogHeader>
              <DialogDescription>
                <WindowSetting />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Btn
          className={
            "flex items-center justify-center gap-3 bg-[#C66A6A] text-[1.7rem] w-[10rem] h-[4rem] rounded-[0.5rem] font-normal cursor-pointer"
          }
          value={"SIGN IN"}
          img={<SignInIcon />}
        />
      </div>
      <div className="w-[58rem] bg-gray-200 h-[0.1rem] mt-[2rem]"></div>
    </>
  );
}
export default Header;
