import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export const metadata = {
  title: "Todo App",
  description: "My Todo App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.png" />
      <body className="">
        <div className="bg-white dark:bg-slate-950 p-2 min-h-dvh">
          <div className="font-poppins select-none scroll-smooth px-2 container mx-auto w-full dark:text-white">
            <Navbar />
            <main className="w-[99%] mx-auto block">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
