import { ReactNode } from "react";
import Head from "next/head";
import classnames from "classnames";

import styles from "./Page.module.css";

interface Props {
  children: ReactNode;
  background?: "black" | "blue";
  title?: string;
  padding?: boolean;
}

// For use on pages that define padding = false,
// but need the default padding in some areas
export function Container({ children }: { children: ReactNode }) {
  return <div className={styles.Container}>{children}</div>;
}

export function Page({
  children,
  title,
  background = "black",
  padding = true,
}: Props) {
  const fullTitle = title == null ? "Drew Tekulve" : `Drew Tekulve – ${title}`;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="preload"
          href="/fonts/SuisseIntlMono/SuisseIntlMono-Regular.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/MaxFett/MaxFett-Black.otf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <div
        className={classnames(
          styles.Page,
          background === "blue" && styles["Page-blue"]
        )}
      >
        <div
          className={classnames(
            styles.Container,
            padding === false && styles["Container-noPadding"]
          )}
        >
          {children}
        </div>

        <footer className={styles.Footer}>
          <div>
            Drew Tekulve <br />
            Freelance Colorist
          </div>

          <div className={styles.SocialIconsContainer}>
            <a
              href="https://instagram.com/drewtekulve"
              className={styles.SocialIcon}
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icons/instagram.svg" alt="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/drewtekulve"
              className={styles.SocialIcon}
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icons/linkedin.svg" alt="LinkedIn" />
            </a>
            <a
              href="https://letterboxd.com/drewtekulve"
              className={styles.SocialIcon}
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icons/letterboxd.svg" alt="Letterboxd" />
            </a>
            <a
              href="mailto:drewtekulve@gmail.com"
              className={styles.SocialIcon}
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icons/email.svg" alt="Email" />
            </a>
          </div>

          <div className={styles.CopyrightContainer}>
            &copy;{new Date().getFullYear()} All Rights Reserved <br />
            Tekulve LLC
          </div>
        </footer>
      </div>
    </>
  );
}
