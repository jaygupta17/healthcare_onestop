import "../styles/global.css";

import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import Web3Provider from "@/context/Web3Wrapper";
import Header from "@/components/Header/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: {
    default: "Healthcare One Stop",
    template: "%s | Healthcare One Stop",
  },
  description: "",
  icons: [{ rel: "icon", url: "./logo.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${inter.variable}`}>
<Web3Provider>
          <Header />
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              >
              {children}
            </ThemeProvider>  
            </Web3Provider>
          </body>
      </html>
    </ClerkProvider>
  );
}