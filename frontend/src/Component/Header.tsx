import styles from "./Header.module.scss";
import { Button } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";
import contactLogo from "../imgs/contact_logo.png";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <img src={contactLogo} alt="logo" />
      <div className={styles.tab}>
        <Button onClick={() => navigate({ to: "/" })}>
          <span
            style={{
              fontFamily: "Shippori Mincho, Noto Serif JP, serif",
              color: "#bfa76f",
              fontWeight: 600,
              letterSpacing: "0.08em",
            }}
          >
            海鮮みやこについて
          </span>
        </Button>
        <Button onClick={() => navigate({ to: "/menu" })}>
          <span
            style={{
              fontFamily: "Shippori Mincho, Noto Serif JP, serif",
              color: "#bfa76f",
              fontWeight: 600,
              letterSpacing: "0.08em",
            }}
          >
            お品書き
          </span>
        </Button>
        <Button onClick={() => navigate({ to: "/access" })}>
          <span
            style={{
              fontFamily: "Shippori Mincho, Noto Serif JP, serif",
              color: "#bfa76f",
              fontWeight: 600,
              letterSpacing: "0.08em",
            }}
          >
            アクセス
          </span>
        </Button>
        <Button
          onClick={() =>
            (window.location.href = "https://kaisenmiyako.owst.jp/")
          }
        >
          <span
            style={{
              fontFamily: "Shippori Mincho, Noto Serif JP, serif",
              color: "#bfa76f",
              fontWeight: 600,
              letterSpacing: "0.08em",
            }}
          >
            予約
          </span>
        </Button>
      </div>
    </div>
  );
};
