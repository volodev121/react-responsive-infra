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
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface LanguageType {
  value: string;
  label: string;
  icon: string;
  rate: number;
}

type navbarLanguageProps = {
  setDisplayLanguageFlag: any;
  displayLanguageFlag: LanguageType;
  LANGS: LanguageType[];
};

export default function NavbarLanguage({
  setDisplayLanguageFlag,
  displayLanguageFlag,
  LANGS,
}: navbarLanguageProps) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const [language, setLanguage] = React.useState(LANGS[0].value);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };
  const handleSelectLanguage = (e: any, value: string) => {
    setLanguage(value);
    handleClose(e);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  React.useEffect(() => {
    const selected = LANGS.filter((lang) => lang.value === language);
    setDisplayLanguageFlag(selected[0]);
    // eslint-disable-next-line
  }, [language]);
  return (
    <>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              alt={displayLanguageFlag.label}
              src={displayLanguageFlag.icon}
              sx={{ width: 16, mr: "5px" }}
            />
            <span
              style={{
                color: "#FFFFFF",
                alignItems: "center",
                fontSize: "14px",
              }}
            >
              {displayLanguageFlag.label}
            </span>
            <KeyboardArrowDownIcon sx={{ color: "#FFFFFF" }} />
          </Box>
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                    sx={{
                      width: "114px",
                      background: "#142241",
                      color: "#FFFFFF",
                    }}
                  >
                    {LANGS.map((option: LanguageType) => (
                      <MenuItem
                        key={option.value}
                        // selected={option.value === language}
                        onClick={(e) => handleSelectLanguage(e, option.value)}
                        sx={{
                          backgroundColor: "#142241",
                          "&:hover": {
                            backgroundColor: "rgba(44, 62, 103, 0.2)",
                            color: "#E9B109",
                            borderRight: " solid 2px #E9B109",
                          },
                        }}
                      >
                        <Box
                          component="img"
                          alt={option.label}
                          src={option.icon}
                          sx={{ width: 16, mr: "5px" }}
                        />
                        <span style={{ fontSize: "14px" }}>{option.label}</span>
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </>
  );
}
