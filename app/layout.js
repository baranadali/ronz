import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  metadataBase: new URL("https://ronz.app"),
  title: {
    default: "ronz - Fueling brand evolution.",
    template: "%s | ronz",
	},
  description: "Fueling brand evolution.",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon.png",
    },
],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}