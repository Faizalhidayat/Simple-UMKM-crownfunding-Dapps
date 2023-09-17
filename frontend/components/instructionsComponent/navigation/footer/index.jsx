import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  const crowdfundingInfo = {
    projectName: "Crowdfunding DApps",
    company: "UMKM.COM",
    year: new Date().getFullYear(),
  };

  return (
    <div className={styles.footer}>
      <div className={styles.crowdfunding_info}>
        <h2>About {crowdfundingInfo.projectName}</h2>
        <p>
          {crowdfundingInfo.projectName} We believe in the power
          of the community to bring meaningful ideas to life.
        </p>
        <p>
          Developed by {crowdfundingInfo.company}, {crowdfundingInfo.year}
        </p>
      </div>
      <div className={styles.icons_container}>
        <div>
          <a
            href="https://github.com/Faizalhidayat"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
        <div>
          <a
            href="https://twitter.com/ichalh7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow us on Twitter
          </a>
        </div>
      </div>
    </div>
  );
}
