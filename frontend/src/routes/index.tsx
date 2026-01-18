import iconTabelog from "../imgs/icon/taberogu.png";
import iconInstagram from "../imgs/icon/instagram.png";
import { createFileRoute } from "@tanstack/react-router";
import { useTheme, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

import styles from "./index.module.scss";

import topMain from "../imgs/top/NZ6_6451 2.JPG";
import topSeafood from "../imgs/top/NZ6_6492.JPG";
import topAnago from "../imgs/top/menu_11.jpg";
import topSpace from "../imgs/top/NZ6_6465.JPG";
import topSub1 from "../imgs/top/NZ6_6447.JPG";
import topSub2 from "../imgs/top/NZ6_6477.JPG";
import topSub3 from "../imgs/top/NZ6_6487.JPG";
import topSub4 from "../imgs/top/NZ6_6489.JPG";
import topSub5 from "../imgs/top/NZ6_6515 2.JPG";
const topImages = [topSub1, topSub2, topSub3, topSub4, topSub5];
const heroImages = [topMain, ...topImages];

import wholebackground from "../imgs/wholebackground.png";

function RouteComponent() {
  const theme = useTheme();
  const isPc = useMediaQuery(theme.breakpoints.up("md"));
  const [overlayAIndex, setOverlayAIndex] = useState(0);
  const [overlayBIndex, setOverlayBIndex] = useState(1);
  const [isAVisible, setIsAVisible] = useState(true);
  const transitionMs = 1000; // crossfade duration
  const intervalMs = 10000; // swap every 3s

  useEffect(() => {
    const interval = setInterval(() => {
      const next =
        ((isAVisible ? overlayAIndex : overlayBIndex) + 1) % heroImages.length;
      if (isAVisible) {
        setOverlayBIndex(next);
      } else {
        setOverlayAIndex(next);
      }
      // toggle visibility to crossfade
      setIsAVisible((v) => !v);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [isAVisible, overlayAIndex, overlayBIndex]);

  // サムネイルクリックでヒーローを切り替える
  const setHeroTo = (heroIdx: number) => {
    const idx = heroIdx % heroImages.length;
    if (isAVisible) {
      setOverlayBIndex(idx);
      setIsAVisible(false);
    } else {
      setOverlayAIndex(idx);
      setIsAVisible(true);
    }
  };

  // 要素が画面に入ったときにアニメーションを付与する
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll('[data-animate="feature"]')
    ) as HTMLElement[];
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add(styles.visible);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.topContainer}>
      <div className={styles.heroSection} style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${heroImages[overlayAIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: `opacity ${transitionMs}ms ease`,
            opacity: isAVisible ? 1 : 0,
            zIndex: isAVisible ? 1 : 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${heroImages[overlayBIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: `opacity ${transitionMs}ms ease`,
            opacity: isAVisible ? 0 : 1,
            zIndex: isAVisible ? 0 : 1,
          }}
        />
        <h1
          className={styles.title}
          style={{
            position: "relative",
            zIndex: 2,
            whiteSpace: "nowrap",
            fontSize: isPc ? undefined : "35px",
            letterSpacing: isPc ? undefined : "0.08em",
            padding: isPc ? undefined : "6px 8px",
            bottom: isPc ? undefined : "-80px",
          }}
        >
          海鮮みやこ
        </h1>
      </div>
      {/* heroSection以下に背景画像を適用 */}
      <div className={styles.rotatedBg}>
        <img src={wholebackground} alt="背景" />
      </div>
      <div className={styles.introBox}>
        <p className={styles.introText}>
          <span
            style={{
              fontSize: isPc ? "1.25em" : "1.05em",
              fontWeight: "bold",
              color: "#bfa76f",
              letterSpacing: "0.08em",
            }}
          >
            究極の穴子と旬の海鮮を、上質な和空間で味わう贅沢。
          </span>
          <br />
          <span
            style={{ fontSize: isPc ? "1.1em" : "0.85em", color: "#4c3a1e" }}
          >
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
              onClick={() => setHeroTo(idx + 1)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>

        {/* 特徴1 */}
        <div className={styles.heroFeatureSection}>
          <div
            className={`${isPc ? styles.featureFeatureContent : styles.featureFeatureContentMobile} ${styles.featureAnimate}`}
            data-animate="feature"
          >
            <img
              src={topSeafood}
              alt="こだわりの海鮮"
              className={
                isPc ? styles.featureFeatureImg : styles.featureFeatureImgMobile
              }
            />
            <div
              className={
                isPc
                  ? styles.featureFeatureText
                  : styles.featureFeatureTextMobile
              }
            >
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
        <div className={styles.heroFeatureSection}>
          <div
            className={`${isPc ? styles.featureFeatureContentAnago : styles.featureFeatureContentAnagoMobile} ${styles.featureAnimate}`}
            data-animate="feature"
          >
            <img
              src={topAnago}
              alt="究極の穴子"
              className={
                isPc ? styles.featureFeatureImg : styles.featureFeatureImgMobile
              }
            />
            <div
              className={
                isPc
                  ? styles.featureFeatureText
                  : styles.featureFeatureTextMobile
              }
            >
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
        <div className={styles.heroFeatureSection}>
          <div
            className={`${isPc ? styles.featureFeatureContent : styles.featureFeatureContentMobile} ${styles.featureAnimate}`}
            data-animate="feature"
          >
            <img
              src={topSpace}
              alt="上質な和空間"
              className={
                isPc ? styles.featureFeatureImg : styles.featureFeatureImgMobile
              }
            />
            <div
              className={
                isPc
                  ? styles.featureFeatureText
                  : styles.featureFeatureTextMobile
              }
            >
              <span className={styles.featureFeatureTitle}>上質な和空間</span>
              <br />
              幅々とした店内で、
              <br />
              木の温もりを感じながら
              <br />
              ゆったりとお食事を楽しめます。
            </div>
          </div>
        </div>
        <div className={styles.infoBox}>
          <div style={{ color: "#222" }}>
            <strong>住所：</strong>東京都文京区本郷2-4-5 パティオ本郷 102
          </div>
          <div style={{ color: "#222" }}>
            <strong>電話：</strong>050-5385-5209
          </div>
          <div style={{ color: "#222" }}>
            <strong>営業時間：</strong>ランチ 11:00～14:30／ディナー
            17:00～22:00
          </div>
          <div style={{ color: "#222" }}>
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
