import * as React from "react";
import {
  Box,
  MenuList,
  MenuItem,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const styles = {
  menu: {
    width: 200, // set your desired width here
  },
};
interface LanguageType {
  value: string;
  label: string;
  icon: string;
  rate: number;
}
type SidebarLanguageProps = {
  setDisplayLanguageFlag: any;
  displayLanguageFlag: { value: string; label: string; icon: string };
  LANGS: LanguageType[];
};
export default function SidebarLanguage({
  displayLanguageFlag,
  setDisplayLanguageFlag,
  LANGS,
}: SidebarLanguageProps) {
  const [expanded, setExpanded] = React.useState(false);
  const [language, setLanguage] = React.useState(LANGS[0].value);

  const handleClose = () => {
    setExpanded(false);
  };
  const handleSelectLanguage = (value: string) => {
    setLanguage(value);
    handleClose();
  };

  // return focus to the button when we transitioned from !open -> open
  React.useEffect(() => {
    const selected = LANGS.filter((lang) => lang.value === language);
    setDisplayLanguageFlag(selected[0]);
  }, [language]);
  return (
    <>
      <Accordion
        sx={{ boxShadow: "none" }}
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#FAFAFA" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            background: "#142241",
            px: "16px",
            minHeight: "17.6px",
            my: "0px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              alt={displayLanguageFlag.label}
              src={displayLanguageFlag.icon}
              sx={{ width: 16, mr: "8px" }}
            />
            <span
              style={{
                color: "#FFFFFF",
                alignItems: "center",
                fontSize: "16px",
              }}
            >
              {displayLanguageFlag.label}
            </span>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <MenuList
            id="composition-menu"
            aria-labelledby="composition-button"
            sx={{
              width: "100%",
              background: "#142241",
              color: "#FFFFFF",
              pr: "16px",
            }}
          >
            {LANGS.map((option: LanguageType) => (
              <MenuItem
                key={option.value}
                // selected={option.value === language}
                onClick={(e) => handleSelectLanguage(option.value)}
                sx={{
                  backgroundColor: "#142241",
                  padding: "4px 0px",
                  "&:hover": {
                    backgroundColor: "rgba(44, 62, 103, 0.2)",
                    color: "#E9B109",
                    borderLeft: " solid 2px #E9B109",
                  },
                }}
              >
                <Box
                  component="img"
                  alt={option.label}
                  src={option.icon}
                  sx={{ width: 16, mr: "8px", pl: "16px" }}
                />
                <span style={{ fontSize: "16px" }}>{option.label}</span>
              </MenuItem>
            ))}
          </MenuList>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
