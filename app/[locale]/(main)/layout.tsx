import "../globals.css";
import Header from "@/src/widgets/Header";
import Footer from "@/src/shared/ui/Footer";
import WhatsAppButton from "@/src/shared/ui/WhatsAppButton";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <WhatsAppButton />
    </>
  );
}
