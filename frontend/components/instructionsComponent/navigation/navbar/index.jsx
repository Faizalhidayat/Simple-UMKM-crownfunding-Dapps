import React from 'react';
import { ConnectKitButton } from 'connectkit'; // Pastikan Anda telah mengimpor ConnectKitButton dari lokasi yang benar
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="https://sepolia.etherscan.io/" target="_blank" rel="noopener noreferrer">
        Etherscan
      </a>
      <div className={styles.menuRight}>
        {/* Menu lain yang ditambahkan */}
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">About Us</a>
        {/* Anda dapat menambahkan menu lain sesuai kebutuhan */}
        <ConnectKitButton />
      </div>
    </nav>
  );
}
