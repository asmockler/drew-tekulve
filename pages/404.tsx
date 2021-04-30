import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Page } from "../components/Page";
import { Stack } from "../components/Stack";
import { globalProps } from "../lib/data/globalProps";

import styles from "../styles/404.module.css";

export const getStaticProps = async () => {
  const global = await globalProps();
  return { props: { global } };
};

export default function About() {
  return (
    <Page title="404">
      <Navbar />

      <div className={styles.Container}>
        <h1>404</h1>
      </div>
    </Page>
  );
}
