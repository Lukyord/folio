import type { Metadata } from "next";
import "@/styles/theme.css";
import "@/styles/theme-rwd.css";
import localFont from "next/font/local";

const NeueBit = localFont({
    src: "./fonts/NeueBit/NeueBit-Regular.woff2",
    weight: "400",
    style: "normal",
    variable: "--font-bit",
});

const NeueMontreal = localFont({
    src: [
        {
            path: "./fonts/NeueMontreal/NeueMontreal-Light.woff2",
            weight: "300",
            style: "light",
        },
        {
            path: "./fonts/NeueMontreal/NeueMontreal-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/NeueMontreal/NeueMontreal-Medium.woff2",
            weight: "500",
            style: "medium",
        },
        {
            path: "./fonts/NeueMontreal/NeueMontreal-Bold.woff2",
            weight: "700",
            style: "bold",
        },
    ],
    variable: "--font-body",
});

export const metadata: Metadata = {
    title: "Tanabordee Tansiri - FreelanceCreative Developer",
    description:
        "Tanabordee Tansiri is a freelance creative developer based in Bangkok, Thailand.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${NeueBit.variable} ${NeueMontreal.variable}`}>
                {children}
            </body>
        </html>
    );
}
