import Logo from "@components/Layout/Logo";
import "./globals.css";
import UserPage from "@components/Layout/UserPage";
export const metadata = {
  title: "Componique",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-[url(/background.svg)] bg-cover bg-fixed bg-no-repeat">
        <header className="fixed z-10 flex h-[90px] w-full items-center justify-between bg-transparent">
          <Logo />
          <UserPage />
        </header>
        <section className="fixed z-0 mt-[90px] h-[calc(100%-90px)] w-[250px] bg-blue-200">
          menu
        </section>
        <div className="ml-[300px] flex justify-center pt-[90px]">
          <div className="w-[1000px]">{children}</div>
        </div>
      </body>
    </html>
  );
}
