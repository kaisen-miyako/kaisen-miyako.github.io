import washi from "../../washi.module.scss";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className={washi.washiBg}>
      <div
        style={{
          maxWidth: 700,
          margin: "0 auto",
          padding: 32,
          fontFamily: "Shippori Mincho, Noto Serif JP, serif",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: 32 }}>お問い合わせ</h1>
        <p style={{ marginBottom: 24, fontSize: "1.1em" }}>
          ご予約・ご質問・ご要望など、お気軽にお問い合わせください。
          <br />
          お電話（
          <a
            href="tel:03-6801-8360"
            style={{ color: "#bfa76f", fontWeight: "bold" }}
          >
            03-6801-8360
          </a>
          ）でも承ります。
        </p>
        <form>
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="name">お名前：</label>
            <br />
            <input
              id="name"
              name="name"
              type="text"
              style={{
                width: "100%",
                padding: 8,
                borderRadius: 6,
                border: "1px solid #bfa76f",
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="email">メールアドレス：</label>
            <br />
            <input
              id="email"
              name="email"
              type="email"
              style={{
                width: "100%",
                padding: 8,
                borderRadius: 6,
                border: "1px solid #bfa76f",
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="message">お問い合わせ内容：</label>
            <br />
            <textarea
              id="message"
              name="message"
              rows={5}
              style={{
                width: "100%",
                padding: 8,
                borderRadius: 6,
                border: "1px solid #bfa76f",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              background: "#bfa76f",
              color: "#fff",
              padding: "10px 24px",
              border: "none",
              borderRadius: 6,
              fontFamily: "Shippori Mincho, Noto Serif JP, serif",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            送信
          </button>
        </form>
      </div>
    </div>
  );
}
