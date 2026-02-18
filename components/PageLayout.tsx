import Nav from "./Nav";
import Footer from "./Footer";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: "60px", minHeight: "100vh" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
