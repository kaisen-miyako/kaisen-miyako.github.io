import wholebackground from "../../imgs/wholebackground.png";
import styles from "../index.module.scss";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/access/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className={styles.topContainer}>
      <div className={styles.rotatedBg}>
        <img src={wholebackground} alt="背景" />
      </div>
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: 24,
          fontFamily: "Shippori Mincho, Noto Serif JP, serif",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: 32,
            color: "#bfa76f",
            fontWeight: "bold",
            letterSpacing: "0.08em",
          }}
        >
          アクセス
        </h1>
        <p style={{ marginBottom: 24, fontSize: "1.1em", color: "#4c3a1e" }}>
          <strong>海鮮みやこ</strong>は、東京都文京区本郷にある、
          <br />
          豊洲市場直送の新鮮な海鮮料理が自慢の和食店です。
          <br />
          落ち着いた雰囲気の店内で、接待や記念日、ご宴会にもご利用いただけます。
        </p>
        <div style={{ marginBottom: 24 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.9451289050694!2d139.75585847633468!3d35.70296787258021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d761e9089c7%3A0xdcd9271c2f3591c8!2z5rW36a6u44G_44KE44GT!5e0!3m2!1sja!2sjp!4v1754974471395!5m2!1sja!2sjp"
            width="100%"
            height="300"
            loading="lazy"
            style={{ border: 0, borderRadius: 8 }}
          ></iframe>
        </div>
        <div style={{ fontSize: "1.05em", lineHeight: 1.7, color: "#4c3a1e" }}>
          <strong>住所：</strong>東京都文京区本郷2-4-5
          <br />
          <strong>アクセス：</strong>都営三田線水道橋駅A1出口より徒歩約6分
          <br />
          東京メトロ丸ノ内線本郷三丁目駅1出口より徒歩約10分
          <br />
          <strong>電話番号：</strong>03-6801-8360
          <br />
          <strong>営業時間：</strong>月～土 11:00～14:30 / 17:00～22:00
          <br />
          <strong>定休日：</strong>日・祝日
          <br />
          <strong>席数：</strong>21席（個室・座敷・カウンターあり）
          <br />
          <strong>備考：</strong>ご宴会・接待・記念日などに最適です。
          <br />
        </div>
        <div style={{ marginTop: 32, textAlign: "center" }}>
          <a
            href="https://kaisenmiyako.owst.jp/map"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#bfa76f", fontWeight: "bold" }}
          >
            詳しい地図・アクセス情報はこちら
          </a>
        </div>
      </div>
    </div>
  );
}
