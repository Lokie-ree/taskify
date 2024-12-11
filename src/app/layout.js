import "./globals.css";
import { poppins } from "@/components/ui/fonts";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "Taskify",
    description:
      "Taskify: Your go-to app for effortless task management and productivity. Add, edit, and complete tasks securely and with ease. Perfect for planning your day, managing projects, and achieving your goals. Simplify your life with Taskify!",
    url: "http://localhost/3000",
    siteName: "Taskify",
    images: "/opengraph-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taskify",
    description:
      "Taskify: Your go-to app for effortless task management and productivity. Add, edit, and complete tasks securely and with ease. Perfect for planning your day, managing projects, and achieving your goals. Simplify your life with Taskify!",
    creator: "Randall LaPoint, Jr.",
    images: ["/twitter-image.png"],
  },
  title: "Taskify",
  description:
    "Taskify: Your go-to app for effortless task management and productivity. Add, edit, and complete tasks securely and with ease. Perfect for planning your day, managing projects, and achieving your goals. Simplify your life with Taskify!",
  keywords: "task manager, task app, todo, tasks",
  author: "Randall LaPoint, Jr., 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="taskifyTheme">
      <body className={`antialiased ${poppins.className}`}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
