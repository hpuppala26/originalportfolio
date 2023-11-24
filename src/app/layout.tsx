import "./globals.css";
import { Rubik } from "next/font/google";

const montserrat = Rubik({
    weight: ['300', '400', '500', '600', '700'],
    style: ['normal'],
    subsets: ['latin']
});

export const metadata = {
  title: "Shiva Sai Charan Portfolio.",
  description: "All about shiva sai charan software development career.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Shiva Sai Charan</title>
        <meta name="description" content="Shiva Sai Charan's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/app-favicon.ico" /> */}
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
