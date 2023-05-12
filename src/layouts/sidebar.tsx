import * as React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import { Accordion, Divider, IconButton, Box } from "@mui/material";
import { Close as IconClose } from "@mui/icons-material";
import SidebarLanguage from "./SidebarLanguage";

const drawerWidth = 270;
interface LanguageType {
  value: string;
  label: string;
  icon: string;
rate:number
}

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  background: "#FFFFFF",
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: 0,
  ...(open && {
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: "80px",
  padding: "16px",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

type SideBarProps = {
  setOpenSideBar: (isOpen: boolean) => void;
  openSideBar: boolean;
  setDisplayLanguageFlag: any;
  displayLanguageFlag: { value: string; label: string; icon: string };
  LANGS: LanguageType[];
};

const SideBar = ({
  openSideBar,
  setOpenSideBar,
  setDisplayLanguageFlag,
  displayLanguageFlag,
  LANGS,
}: SideBarProps) => {
  const theme = useTheme();

  const handleDrawerClose = () => {
    setOpenSideBar(false);
  };
  console.log(openSideBar);

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          padding: "16px",
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            background: "#142241",
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={openSideBar}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <IconClose sx={{ color: "#FFFFFF", width: "18px" }} />
          </IconButton>
        </DrawerHeader>
        <Box px={"16px"}>
          <Divider sx={{ borderColor: "#FFFFFF" }} />
          <Box sx={{ py: "10px" }}>
            <NavLink
              to="/"
              style={{ fontSize: "16px" }}
              className="sidebar-link"
            >
              OSRS Gold
            </NavLink>
          </Box>
          <Divider sx={{ borderColor: "#FFFFFF" }} />
          <Box sx={{ py: "10px" }}>
            <NavLink
              to="/"
              style={{ fontSize: "16px" }}
              className="sidebar-link"
            >
              RS3 Gold
            </NavLink>
          </Box>
          <Divider sx={{ borderColor: "#FFFFFF" }} />
          <Box sx={{ py: "10px" }}>
            <NavLink
              to="/"
              style={{ fontSize: "16px" }}
              className="sidebar-link"
            >
              Sell RS Gold
            </NavLink>
          </Box>

          <Divider sx={{ borderColor: "#FFFFFF" }} />
          <Box sx={{ py: "10px" }}>
            <NavLink
              to="/"
              style={{ fontSize: "16px" }}
              className="sidebar-link"
            >
              OSRS Items
            </NavLink>
          </Box>
          <Divider sx={{ borderColor: "#FFFFFF" }} />
          <Box sx={{ py: "10px" }}>
            <NavLink
              to="/"
              style={{ fontSize: "16px" }}
              className="sidebar-link"
            >
              OSRS Accounts
            </NavLink>
          </Box>
          <Divider sx={{ borderColor: "#FFFFFF" }} />
          <Box sx={{ py: "10px" }}>
            <NavLink
              to="/"
              style={{ fontSize: "16px" }}
              className="sidebar-link"
            >
              Reward Chests
            </NavLink>
          </Box>
          <Divider sx={{ borderColor: "#FFFFFF" }} />
        </Box>
        <Box sx={{ py: "7.2px" }}>
          <SidebarLanguage
            setDisplayLanguageFlag={setDisplayLanguageFlag}
            displayLanguageFlag={displayLanguageFlag}
            LANGS={LANGS}
          ></SidebarLanguage>
        </Box>
        <Box px="16px">
          <Divider sx={{ borderColor: "#FFFFFF" }} />
        </Box>
        <Box sx={{ pt: "20px", px: "16px", display: "flex" }}>
          <Box pr="16px">
            <NavLink
              to="/"
              style={{
                color: "#FFFFFF",
                border: "solid 1px #FFFFFF",
                borderRadius: "4px",
                padding: "8px 24px",
                fontWeight: 500,
              }}
            >
              Sign Up
            </NavLink>
          </Box>
          <Box pr="16px">
            <NavLink to="/" className={"navbar-login-btn "}>
              Log In
            </NavLink>
          </Box>
        </Box>
      </Drawer>
      <Main open={openSideBar}>
        {/* <DrawerHeader /> */}
        <Outlet />
      </Main>
    </>
  );
};

export default SideBar;
