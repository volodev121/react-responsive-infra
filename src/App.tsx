import React from "react";
import { Route, Routes } from "react-router-dom";

import { Box } from "@mui/material";
import Navbar from "./layouts/Navbar";
import SideBar from "./layouts/sidebar";
import CalculatePage from "./pages/calculate";

interface LanguageType {
  value: string;
  label: string;
  icon: string;
  rate: number;
}

const LANGS: LanguageType[] = [
  {
    value: "usd",
    label: "USD",
    icon: "./assets/svgs/flags/us.svg",
    rate: 1,
  },
  {
    value: "eur",
    label: "EUR",
    icon: "../assets/svgs/flags/eu.svg",
    rate: 1.1,
  },
  {
    value: "gbp",
    label: "GBP ",
    icon: "./assets/svgs/flags/gb.svg",
    rate: 1.245,
  },
  {
    value: "aud",
    label: "AUD",
    icon: "./assets/svgs/flags/au.svg",
    rate: 0.64,
  },
  {
    value: "cad",
    label: "CAD",
    icon: "./assets/svgs/flags/ca.svg",
    rate: 0.738,
  },
];
function App() {
  const [openSideBar, setOpenSideBar] = React.useState(false);
  const [displayLanguageFlag, setDisplayLanguageFlag] = React.useState(
    LANGS[0]
  );
  console.log(displayLanguageFlag);
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Navbar
        setOpenSideBar={setOpenSideBar}
        LANGS={LANGS}
        setDisplayLanguageFlag={setDisplayLanguageFlag}
        displayLanguageFlag={displayLanguageFlag}
      ></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <SideBar
              setOpenSideBar={setOpenSideBar}
              openSideBar={openSideBar}
              setDisplayLanguageFlag={setDisplayLanguageFlag}
              displayLanguageFlag={displayLanguageFlag}
              LANGS={LANGS}
            />
          }
        >
          <Route
            path=""
            element={
              <CalculatePage displayLanguageFlag={displayLanguageFlag} />
            }
          ></Route>
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
