import "./globals.css";
import { Navbar } from "@/components/Navbar";
import styles from "./Layout.module.css";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: `49rem`,
          padding: `0px 1.3125rem`,
        }}
        className={merriweather.className}
      >
        <Navbar />
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <hr />
          <small>
            © {new Date().getFullYear()} Ken Bi. Powered by{" "}
            <a
              href="https://github.com/bpceee/isblog"
              rel="noopener noreferrer"
              target="_blank"
            >
              isBlog
            </a>
          </small>
        </footer>
      </body>
    </html>
  );
}
