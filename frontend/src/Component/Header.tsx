import styles from "./Header.module.scss";
import { Button } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";

import contactLogo from "../imgs/contact_logo.png";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <img
        src={contactLogo}
        alt="logo"
        style={{ height: 60, marginLeft: 16 }}
      />
      <div className={styles.tab}>
        <Button onClick={() => navigate({ to: "/" })}>
          海鮮みやこについて
        </Button>
        <Button onClick={() => navigate({ to: "/menu" })}>お品書き</Button>
        <Button onClick={() => navigate({ to: "/access" })}>アクセス</Button>
        <Button
          onClick={() =>
            (window.location.href = "https://kaisenmiyako.owst.jp/")
          }
        >
          予約
        </Button>
      </div>
    </div>
  );
};
