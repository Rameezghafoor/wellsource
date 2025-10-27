import Link from 'next/link';
import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons
import ContactLink from './ContactLink';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Logo Section */}
      <div className={styles.logoSection}>
        <div className={styles.logoContainer}>
          <Image
            src="/logo.png"
            alt="Well Source Industries"
            width={120}
            height={120}
            className={styles.logo}
            priority
          />
          <div className={styles.logoText}>
            <span className={styles.logoMain}>WELL SOURCE</span>
            <span className={styles.logoSub}>INDUSTRIES</span>
          </div>
        </div>
        <div className={styles.separator}></div>
      </div>

      <div className={styles.container}>
        {/* Home Section */}
        <div className={styles.column}>
          <h4 className={styles.bold}>
            <Link href="/">HOME</Link>
          </h4>
          <ul>
            <li><Link href="/#products-we-manufacture">Products we manufacture</Link></li>
            <li><Link href="/#repair-refurbishment">Repair and refurbishment</Link></li>
            <li><Link href="/#download-catalog">Instrument Catalog</Link></li>
          </ul>
        </div>


        {/* Ranges Section */}
        <div className={styles.column}>
          <h4 className={styles.bold}>
            <Link href="/ranges">RANGES</Link>
          </h4>
          <ul>
            <li><Link href="/ranges#surgical-instruments">Surgical Instruments</Link></li>
            <li><Link href="/ranges#container-systems">Container Systems</Link></li>
            <li><Link href="/ranges#download-catalog">Product Ranges</Link></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className={styles.column}>
          <h4 className={styles.bold}>
            <Link href="/contact">CONTACT US</Link>
          </h4>
          <ul>
        <li><ContactLink type="phone" value="+92 318 1466779" className="footer" /></li>
        <li><ContactLink type="email" value="support@wellsourceindustries.com" className="footer" /></li>
            <li><FaMapMarkerAlt /> East Kourpur Union Council Street, Post Office Gohadpur, Sialkot, Pakistan</li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.rightFooter}>
          <p>Well Source Industries | Laboratory Equipment, Surgical Instruments & Packaging Products</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
