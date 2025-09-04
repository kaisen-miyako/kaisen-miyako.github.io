import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/menu/")({
  component: RouteComponent,
});

// メイン料理画像
import menu1 from "../../imgs/menu_1.jpg";
import menu2 from "../../imgs/menu_2.jpg";
import menu3 from "../../imgs/menu_3.jpg";
import menu4 from "../../imgs/menu_4.jpg";

// ギャラリー画像を自動取得
const galleryImages = Object.values(
  import.meta.glob("../../imgs/menu/**/*.{jpg,JPG,png,PNG}", { eager: true, import: 'default' })
);
import washi from "../../washi.module.scss";

function RouteComponent() {
  return (
    <div className={washi.washiBg}>
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: 24,
          fontFamily: "Shippori Mincho, Noto Serif JP, serif",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: 32 }}>お品書き</h1>
        <p style={{ marginBottom: 24, fontSize: "1.1em" }}>
          海鮮みやこでは、店主自ら毎朝豊洲市場で厳選した旬の海鮮を仕入れ、
          <br />
          職人の技で仕上げた逸品料理をご提供しております。名物の活〆穴子や、
          <br />
          天然本まぐろの刺身盛り合わせなど、季節ごとに変わるおすすめ料理をぜひご堪能ください。
        </p>
        <h2 style={{ marginTop: 32 }}>おすすめ料理</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: 24 }}>
            <img
              src={menu1}
              alt="厳選コース"
              style={{ width: "100%", maxWidth: 400, borderRadius: 8 }}
            />
            <div style={{ marginTop: 8 }}>
              <strong>厳選コース（7品）</strong>
              <br />
              初めてのお客様におすすめ。活〆穴子や旬の海鮮を贅沢に味わえるコースです。
              <br />
              7,700円（税込）
            </div>
          </li>
          <li style={{ marginBottom: 24 }}>
            <img
              src={menu2}
              alt="季節の逸品料理"
              style={{ width: "100%", maxWidth: 400, borderRadius: 8 }}
            />
            <div style={{ marginTop: 8 }}>
              <strong>季節の逸品料理</strong>
              <br />
              あん肝や白子ポン酢、銀だら西京焼きなど、旬の食材を使った繊細な逸品。
              <br />
              880円（税込）～
            </div>
          </li>
          <li style={{ marginBottom: 24 }}>
            <img
              src={menu3}
              alt="刺身盛り合わせ"
              style={{ width: "100%", maxWidth: 400, borderRadius: 8 }}
            />
            <div style={{ marginTop: 8 }}>
              <strong>旬の刺身盛り合わせ</strong>
              <br />
              天然本まぐろや穴子の刺身など、店主が目利きした新鮮な海の幸を盛り合わせで。
              <br />
              3～4人前 6,600円＋税
            </div>
          </li>
          <li style={{ marginBottom: 24 }}>
            <img
              src={menu4}
              alt="穴子丼"
              style={{ width: "100%", maxWidth: 400, borderRadius: 8 }}
            />
            <div style={{ marginTop: 8 }}>
              <strong>名物 穴子丼</strong>
              <br />
              ふっくらとした穴子を贅沢に盛り付けた、当店自慢の一品。
              <br />
              ランチタイム限定
            </div>
          </li>
        </ul>
        <h2 style={{ marginTop: 40, marginBottom: 16 }}>料理ギャラリー</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            justifyContent: "center",
            marginBottom: 32,
          }}
        >
          {galleryImages.map((img, idx) => (
            <img
              src={img as string}
              alt={`料理${idx + 1}`}
              style={{
                width: "120px",
                height: "90px",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0 2px 12px #0a254044",
                border: "1.5px solid #e6d3b3",
              }}
              key={idx}
            />
          ))}
        </div>
        <div style={{ marginTop: 40, textAlign: "center" }}>
          <a
            href="https://kaisenmiyako.owst.jp/foods"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#bfa76f", fontWeight: "bold" }}
          >
            詳しいお品書きはこちら
          </a>
        </div>
      </div>
    </div>
  );
}
