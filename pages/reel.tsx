import Head from "next/head";

import { Page } from "components/Page";
import { SEOImage } from "components/SEOImage";
import { Stack } from "components/Stack";
import { VideoEmbed } from "components/VideoEmbed";
import { globalProps } from "lib/data/globalProps";
import { reelPage } from "lib/data/reelPage";
import { StaticProps } from "types";

import styles from "styles/Reel.module.css";

export const getStaticProps = async () => {
  const global = await globalProps();

  const { reel_url, reel_cover_image, description, title } = await reelPage();

  return {
    props: {
      global,
      reelUrl: reel_url,
      reelCoverImage: reel_cover_image,
      description,
      title,
    },
  };
};

export default function Reel({
  reelUrl,
  reelCoverImage,
  description,
  title,
}: StaticProps<typeof getStaticProps>) {
  return (
    <Page>
      <Head>
        <meta
          property="og:description"
          content={description}
          key="og:description"
        />
        <meta
          property="twitter:description"
          content={description}
          key="twitter:description"
        />
      </Head>
      <SEOImage src={reelCoverImage} />

      <div className={styles.HeroContainer}>
        <VideoEmbed coverImageUrl={reelCoverImage} videoUrl={reelUrl} />
      </div>

      <div className={styles.DetailsContainer}>
        <Stack spacing="extraLoose" direction="column" align="center">
          <Stack spacing="extraTight" direction="column">
            <h2 className={styles.Title}>{title}</h2>
          </Stack>

          <p className={styles.Description}>{description}</p>
        </Stack>
      </div>
    </Page>
  );
}
