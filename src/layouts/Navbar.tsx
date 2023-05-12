import React from "react";

import { Box, IconButton, useMediaQuery } from "@mui/material";
import { ReactComponent as IconLogo } from "../assets/svgs/logo.svg";
import { NavLink } from "react-router-dom";
import { Menu as IconMenu } from "@mui/icons-material";
import NavbarLanguage from "./NavbarLanguage";

interface LanguageType {
  value: string;
  label: string;
  icon: string;
rate:number
}
type NavbarProps = {
  setOpenSideBar: (isOpen: boolean) => void;
  LANGS: LanguageType[];
  setDisplayLanguageFlag: any;
  displayLanguageFlag: LanguageType;
};

const Navbar = ({
  setOpenSideBar,
  LANGS,
  setDisplayLanguageFlag,
  displayLanguageFlag,
}: NavbarProps) => {
  const breakPoint = useMediaQuery("(max-width:1220px)");
  React.useEffect(() => {
    breakPoint === true ? setOpenSideBar(true) : setOpenSideBar(false);
    // @typescript-eslint/no-unused-expressions
  }, [breakPoint]);
  return (
    <Box
      sx={{
        height: "80px",
        backgroundColor: "#142241",
        px: `${breakPoint ? "20px" : "70px"}`,
      }}
      display="flex"
      justifyContent={"space-between"}
    >
      {breakPoint ? (
        <IconButton
          onClick={() => {
            setOpenSideBar(true);
          }}
        >
          <IconMenu sx={{ color: "#FFFFFF" }}></IconMenu>
        </IconButton>
      ) : null}

      <Box display={"flex"} alignItems="center" sx={{ height: "100%" }}>
        <Box
          sx={{
            width: "110px",
            height: "100%",
            alignItems: "center",
            display: "flex",
          }}
        >
          <IconLogo />
        </Box>
        {breakPoint ? null : (
          <Box>
            <NavLink to="/" className={"navbar-link"}>
              OSRS Gold
            </NavLink>
            <NavLink to="/" className={"navbar-link"}>
              RS3 Gold
            </NavLink>
            <NavLink to="/" className={"navbar-link"}>
              Sell RS Gold
            </NavLink>
            <NavLink to="/" className={"navbar-link"}>
              OSRS Items
            </NavLink>
            <NavLink to="/" className={"navbar-link"}>
              OSRS Accounts
            </NavLink>
            <NavLink to="/" className={"navbar-link"}>
              Reward Chests
            </NavLink>
          </Box>
        )}
      </Box>
      <Box display={"flex"} alignItems="center" sx={{ height: "100%" }}>
        {breakPoint ? null : (
          <>
            <NavbarLanguage
              displayLanguageFlag={displayLanguageFlag}
              setDisplayLanguageFlag={setDisplayLanguageFlag}
              LANGS={LANGS}
            ></NavbarLanguage>
            <NavLink to="/" className={"navbar-signup-btn"}>
              Sign Up
            </NavLink>
          </>
        )}
        <NavLink to="/" className={"navbar-login-btn "}>
          Log In
        </NavLink>
      </Box>
    </Box>
  );
};

export default Navbar;
