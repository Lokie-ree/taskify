import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Taskify",
  description:
    "Taskify: Your go-to app for effortless task management and productivity. Add, edit, and complete tasks securely and with ease. Perfect for planning your day, managing projects, and achieving your goals. Simplify your life with Taskify!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
