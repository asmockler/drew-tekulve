import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { Stack } from "../Stack";
import styles from "./Navbar.module.css";

interface Props {
  backgroundColor?: "black" | "blue";
  hideLogo?: boolean;
}

export function Navbar({ hideLogo, backgroundColor }: Props) {
  const router = useRouter();

  return (
    <nav className={styles.Container}>
      <div
        className={styles.Content}
        style={{
          background:
            backgroundColor === "black"
              ? "var(--color-black)"
              : backgroundColor === "blue"
              ? "var(--color-blue)"
              : "transparent",
        }}
      >
        <div>
          <h2 className={styles.Title}>Freelance Colorist</h2>
        </div>

        <div>
          {hideLogo ? null : (
            <Link href="/">
              <a>
                <img src="/images/logo.svg" className={styles.Logo} />
              </a>
            </Link>
          )}
        </div>

        <Stack justify="end">
          <Link href="/">
            <a
              className={classNames(
                styles.Link,
                (router.asPath === "/" ||
                  router.route === "/projects/[slug]") &&
                  styles["Link-active"]
              )}
            >
              Work
            </a>
          </Link>
          <Link href="/about">
            <a
              className={classNames(
                styles.Link,
                router.asPath === "/about" && styles["Link-active"]
              )}
            >
              About
            </a>
          </Link>
        </Stack>
      </div>
    </nav>
  );
}
