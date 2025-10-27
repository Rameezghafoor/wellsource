
import Link from "next/link";
import Image from "next/image";
import s from "./CatalogCTA.module.css";

/**
 * Gold-themed catalogue download bar (compact, with preview floating OUTSIDE the bar).
 * Click anywhere -> goes to your PDF (update the href below later).
 * Place your preview image at /public/catalogpreview.png
 */
export default function CatalogCTA() {
  const pdfHref = "/catalogue.pdf"; // TODO: replace with real path
  return (
    <Link href={pdfHref} className={s.wrapper} aria-label="Download our catalogue PDF">
      <div className={s.inner}>
        <div className={s.left}>
          <span className={s.pdfIcon} aria-hidden />
          <span className={s.text}>
            DOWNLOAD OUR CATALOGUE OF OVER <strong>7000</strong> SURGICAL INSTRUMENTS
          </span>
        </div>

        {/* Absolutely-positioned preview that pops OUTSIDE the bar */}
        <div className={s.preview}>
          <Image
            src="/catalogpreview.png"
            alt="Catalogue preview"
            fill
            priority
            sizes="(max-width: 640px) 60vw, 30vw"
            className={s.previewImg}
          />
        </div>
      </div>
      <div className={s.bottomTrim} />
    </Link>
  );
}
