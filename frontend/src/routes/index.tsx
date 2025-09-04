import iconTabelog from "../imgs/icon/taberogu.png";
import iconInstagram from "../imgs/icon/instagram.png";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

import styles from "./index.module.scss";

import topMain from "../imgs/top/NZ6_6451 2.JPG";
import topSeafood from "../imgs/top/NZ6_6492.JPG";
import topAnago from "../imgs/top/NZ6_6495.JPG";
import topSpace from "../imgs/top/NZ6_6465.JPG";
import topSub1 from "../imgs/top/NZ6_6447.JPG";
import topSub2 from "../imgs/top/NZ6_6477.JPG";
import topSub3 from "../imgs/top/NZ6_6487.JPG";
import topSub4 from "../imgs/top/NZ6_6489.JPG";
import topSub5 from "../imgs/top/NZ6_6515 2.JPG";
const topImages = [topSub1, topSub2, topSub3, topSub4, topSub5];

function RouteComponent() {
  return (
    <div className={styles.topContainer}>
      <div
        className={styles.heroSection}
        style={{ backgroundImage: `url(${topMain})` }}
      >
        <h1 className={styles.title}>海鮮みやこ</h1>
      </div>
      <div className={styles.introBox}>
        <p className={styles.introText}>
          <span
            style={{
              fontSize: "1.25em",
              fontWeight: "bold",
              color: "#bfa76f",
              letterSpacing: "0.08em",
            }}
          >
            究極の穴子と旬の海鮮を、上質な和空間で味わう贅沢。
          </span>
          <br />
          <span style={{ fontSize: "1.1em", color: "#4c3a1e" }}>
            熟練の職人が手間暇かけて仕上げる逸品料理。木の温もりが感じられる店内で、心地よいひとときをお過ごしください。
          </span>
        </p>
        <div className={styles.gallerySection}>
          {topImages.map((img, idx) => (
            <img
              src={img}
              alt={`店舗写真${idx + 1}`}
              className={styles.galleryImgSmall}
              key={idx}
            />
          ))}
        </div>
        {/* 特徴3つをheroSection風に分割表示 */}
        <div
          className={styles.heroFeatureSection}
          style={{ backgroundImage: `url(${topSeafood})` }}
        >
          <div className={styles.featureFeatureContent}>
            <div className={styles.featureFeatureText}>
              <span className={styles.featureFeatureTitle}>こだわりの海鮮</span>
              <br />
              毎朝豊洲市場で
              <br />
              旬の海産物を厳選し、
              <br />
              鮮度と品質にこだわった逸品。
            </div>
          </div>
        </div>
        <div
          className={styles.heroFeatureSection}
          style={{ backgroundImage: `url(${topAnago})` }}
        >
          <div className={styles.featureFeatureContentAnago}>
            <div className={styles.featureFeatureText}>
              <span className={styles.featureFeatureTitle}>究極の穴子</span>
              <br />
              穴子は刺身から煮穴子、
              <br />
              蒲焼きまで幅広くご用意。
              <br />
              肝吸い付きのお重も人気。
            </div>
          </div>
        </div>
        <div
          className={styles.heroFeatureSection}
          style={{ backgroundImage: `url(${topSpace})` }}
        >
          <div className={styles.featureFeatureContent}>
            <div className={styles.featureFeatureText}>
              <span className={styles.featureFeatureTitle}>上質な和空間</span>
              <br />
              広々とした店内で、
              <br />
              木の温もりを感じながら
              <br />
              ゆったりとお食事を楽しめます。
            </div>
          </div>
        </div>
        <div className={styles.infoBox}>
          <div>
            <strong>住所：</strong>東京都文京区本郷2-4-5 パティオ本郷 102
          </div>
          <div>
            <strong>電話：</strong>050-5385-5209
          </div>
          <div>
            <strong>営業時間：</strong>ランチ 11:00～14:30／ディナー
            17:00～22:00
          </div>
          <div>
            <strong>定休日：</strong>日曜・祝日
          </div>
        </div>
        <div className={styles.snsBoxCustom}>
          <a
            href="https://tabelog.com/tokyo/A1310/A131003/13299086/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.snsLink}
          >
            <img
              src={iconTabelog}
              alt="食べログ"
              className={styles.snsIconCustom}
            />
          </a>
          <a
            href="https://www.instagram.com/kaisen_miyako/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.snsLink}
          >
            <img
              src={iconInstagram}
              alt="Instagram"
              className={styles.snsIconCustom}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
