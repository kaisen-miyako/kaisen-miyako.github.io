import styles from "./Header.module.scss";
import { Button } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";
export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <img src="../imgs/contact_logo.png"></img>
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
