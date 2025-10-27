import Link from "next/link";
import Image from "next/image";
import s from "./CatalogCTA.module.css";

/**
 * Gold-themed catalogue download bar
 * Click anywhere -> goes to your PDF (update the href below later).
 * The preview image must live in /public as /catalogpreview.png
 */
export default function CatalogCTA() {
  // TODO: replace this with your real PDF path once it’s ready.
  const pdfHref = "/catalogue.pdf";

  return (
    <Link href={pdfHref} className={s.wrapper} aria-label="Download our catalogue PDF">
      <div className={s.inner}>
        <div className={s.left}>
          <span className={s.pdfIcon} aria-hidden />
          <span className={s.text}>
            DOWNLOAD OUR CATALOGUE OF OVER <strong>7000</strong> SURGICAL INSTRUMENTS
          </span>
        </div>

        {/* Preview image on the right, visually inside the bar */}
        <div className={s.preview}>
          <Image
            src="/catalogpreview.png" // Put your file at A:\website\public\catalogpreview.png
            alt="Catalogue preview"
            fill
            priority
            sizes="(max-width: 1024px) 40vw, 28vw"
            className={s.previewImg}
          />
        </div>
      </div>
      <div className={s.bottomTrim} />
    </Link>
  );
}
