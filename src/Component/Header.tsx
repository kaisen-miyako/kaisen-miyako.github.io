import styles from "./Header.module.scss";
import { Button, IconButton, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import contactLogo from "../imgs/contact_logo.png";

export const Header = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isPc = useMediaQuery(theme.breakpoints.up("sm"));
  const [open, setOpen] = useState(false);

  const handleNav = (to?: string, external?: string) => {
    if (to) navigate({ to });
    if (external) window.location.href = external;
    setOpen(false);
  };

  return (
    <div className={styles.header}>
      <img src={contactLogo} alt="logo" />
      {isPc ? (
        <div className={styles.tab}>
          <Button onClick={() => handleNav("/")}>海鮮みやこについて</Button>
          <Button onClick={() => handleNav("/menu")}>お品書き</Button>
          <Button onClick={() => handleNav("/access")}>アクセス</Button>
          <Button
            onClick={() =>
              handleNav(undefined, "https://kaisenmiyako.owst.jp/")
            }
          >
            予約
          </Button>
        </div>
      ) : (
        <div className={styles.mobileWrap}>
          <IconButton
            aria-label="menu"
            onClick={() => setOpen((prev) => !prev)}
            className={styles.menuButton}
            size="large"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          {open && (
            <div className={styles.mobileMenu}>
              <button onClick={() => handleNav("/")}>海鮮みやこについて</button>
              <button onClick={() => handleNav("/menu")}>お品書き</button>
              <button onClick={() => handleNav("/access")}>アクセス</button>
              <button
                onClick={() =>
                  handleNav(undefined, "https://kaisenmiyako.owst.jp/")
                }
              >
                予約
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
