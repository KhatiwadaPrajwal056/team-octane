import "@radix-ui/themes/styles.css";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Theme } from "@radix-ui/themes";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning data-theme="cupcake">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Theme>{children}</Theme>
            </body>
        </html>
    );
}
