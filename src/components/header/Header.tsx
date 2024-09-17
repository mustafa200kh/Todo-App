import { useEffect, useState } from "react";
// components
import Input from "@components/input/Input";
// Svgs
import MoonSvg from "@assets/icon-moon.svg?react";
import SunSvg from "@assets/icon-sun.svg?react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { changeTheme } from "@store/themes/themeSlice";
const Header = () => {
  let dispatch = useAppDispatch();

  let mode = useAppSelector((state) => state.theme.siteMode);

  const [darkMode, setDarkMode] = useState<boolean>(false);

  const modeToggler = () => {
    if (darkMode == true) {
      dispatch(changeTheme("light"));
    } else {
      dispatch(changeTheme("dark"));
    }
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  useEffect(() => {
    if (mode == "dark") {
      setDarkMode(true);
      document.body.classList.add("dark");
    } else {
      setDarkMode(false);
      document.body.classList.remove("dark");
    }
  }, [dispatch]);
  return (
    <div
      className={`${
        darkMode
          ? `bg-mobile-dark md:bg-desktop-dark`
          : `bg-mobile-light md:bg-desktop-light `
      } bg-cover`}
    >
      <div className="px-5 md:px-0 container mx-auto">
        <div className="md:w-1/2 mx-auto pt-12 pb-12">
          <div className="flex justify-between items-center mb-10">
            <div className="logo">
              <h1 className="text-4xl text-white font-semibold">T O D O</h1>
            </div>
            <div
              className="Left-sideIcon cursor-pointer"
              onClick={() => modeToggler()}
            >
              {darkMode ? <SunSvg /> : <MoonSvg />}
            </div>
          </div>
          <Input />
        </div>
      </div>
    </div>
  );
};

export default Header;
