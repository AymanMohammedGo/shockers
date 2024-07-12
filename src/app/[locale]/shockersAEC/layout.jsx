import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default async function RootLayout({ children }) {
  return (
    <div className="bg-primary min-h-screen flex flex-col justify-between ">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
