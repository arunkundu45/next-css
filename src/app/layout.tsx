import "./../../src/styles/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import Header from "@/components/header";
import styles from "./Layout.module.scss";
import { Container } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSS Practice",
  description: "Next 13 demo app for practicing css",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container className={styles.headerAndContent}>
          <Header />
          {children}
        </Container>

        <Footer />
      </body>
    </html>
  );
}
