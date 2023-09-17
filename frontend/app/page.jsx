'use client'
import Homepage from "../components/instructionsComponent/Homepage"
import InstructionsComponent from "../components/instructionsComponent";
import styles from "./page.module.css";
import "./globals.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Homepage></Homepage>
      <InstructionsComponent></InstructionsComponent>
    </main>
  );
}
