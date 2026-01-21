import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/menu/")({
  component: RouteComponent,
});

// メイン料理画像
import anago from "../../imgs/menu_11.jpg";
import menu1 from "../../imgs/menu_1.jpg";
import menu2 from "../../imgs/NZ6_6495.jpg";
import menu4 from "../../imgs/menu_4.jpg";

// ギャラリー画像を自動取得
const galleryImages = Object.values(
  import.meta.glob("../../imgs/menu/**/*.{jpg,JPG,png,PNG}", {
    eager: true,
    import: "default",
  }),
);
import wholebackground from "../../imgs/wholebackground.png";
import styles from "../index.module.scss";

function RouteComponent() {
  return (
    <div className={styles.topContainer}>
      <div className={styles.rotatedBg}>
        <img src={wholebackground} alt="背景" />
      </div>
      <div className={styles.menuContainer}>
        <h1 className={styles.menuTitle}>お品書き</h1>
        <p
          style={{
            marginBottom: 24,
            fontSize: "1.1em",
            color: "#4c3a1e",
            textAlign: "center",
          }}
        >
          海鮮みやこでは、店主自ら毎朝豊洲市場で厳選した旬の海鮮を仕入れ、
          <br />
          職人の技で仕上げた逸品料理をご提供しております。名物の活〆穴子や、
          <br />
          天然本まぐろの刺身盛り合わせなど、季節ごとに変わるおすすめ料理をぜひご堪能ください。
        </p>

        <ul
          className={styles.menuList}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            justifyContent: "center",
            padding: 0,
            listStyle: "none",
          }}
        >
          <li className={styles.menuItem}>
            <img src={anago} alt="穴子重" className={styles.menuItemImg} />
            <div
              className={styles.menuItemDesc}
              style={{ textAlign: "left", fontSize: "1.05em", lineHeight: 1.6 }}
            >
              <div
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginBottom: 6,
                }}
              >
                <strong>穴子重</strong>
              </div>
              <span style={{ display: "block", marginTop: 8 }}>
                自ら市場で厳選した肉厚の穴子を使った当店看板の一品。煮穴子はふっくらとした優しい甘み、蒲焼は香ばしい特製ダレで香り高く仕上げています。品目に合わせて白米と炊き込みご飯を使い分け、穴子の旨味を最大限に引き出すこだわりをお楽しみください。
              </span>
              <div
                style={{
                  textAlign: "center",
                  marginTop: 10,
                  fontWeight: "bold",
                }}
              >
                上 2,600円　極 3,100円
              </div>
            </div>
          </li>

          <li className={styles.menuItem}>
            <img
              src={menu1}
              alt="選べるミニ丼付きコース（写真）"
              className={styles.menuItemImg}
            />
            <div
              className={styles.menuItemDesc}
              style={{ textAlign: "left", fontSize: "1.05em", lineHeight: 1.6 }}
            >
              <div
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginBottom: 6,
                }}
              >
                <strong>選べるミニ丼付きコース</strong>
              </div>
              <div style={{ display: "block", marginTop: 8 }}>
                ミニ丼（煮穴子丼、穴子蒲焼丼、鉄火丼）からお好みで一つ選べる人気のコース。店主厳選の鮮魚を使った一品が揃います。季節により内容が異なる場合がございます。写真は7700円コースの2人前の例です。
              </div>
              <div
                style={{
                  textAlign: "center",
                  marginTop: 8,
                  fontWeight: "bold",
                }}
              >
                全6品 5,500円 全7品 7,700円
              </div>
            </div>
          </li>

          <li className={styles.menuItem}>
            <img
              src={menu4}
              alt="寿司付きコース（写真）"
              className={styles.menuItemImg}
            />
            <div
              className={styles.menuItemDesc}
              style={{ textAlign: "left", fontSize: "1.05em", lineHeight: 1.6 }}
            >
              <div
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginBottom: 6,
                }}
              >
                <strong>寿司付きコース</strong>
              </div>
              <div style={{ display: "block", marginTop: 8 }}>
                職人が握る寿司と一品料理を組み合わせた贅沢なコース。特別な日や記念日におすすめです。季節により内容が異なる場合がございます。写真は2人前の例です。
              </div>
              <div
                style={{
                  textAlign: "center",
                  marginTop: 8,
                  fontWeight: "bold",
                }}
              >
                8,800円
              </div>
            </div>
          </li>
          <li className={styles.menuItem}>
            <img
              src={menu2}
              alt="季節の逸品料理"
              className={styles.menuItemImg}
            />
            <div
              className={styles.menuItemDesc}
              style={{ textAlign: "left", fontSize: "1.05em", lineHeight: 1.6 }}
            >
              <div
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginBottom: 6,
                }}
              >
                <strong>季節の逸品料理</strong>
              </div>
              <div>
                あん肝や白子ポン酢、銀だら西京焼きなど、旬の食材を使った繊細な逸品。
              </div>
            </div>
          </li>
        </ul>
        <h2
          style={{
            marginTop: 40,
            marginBottom: 16,
            color: "#bfa76f",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          料理ギャラリー
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto 32px",
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
