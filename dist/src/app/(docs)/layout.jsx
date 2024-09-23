import Quickmenu from "@components/Quickmenu/Quickmenu";
import SideBar from "@components/Layout/SideBar";
export const metadata = {
    title: "Componique",
    description: "Generated by Next.js",
};
export default function DocsLayout({ children, }) {
    return (<>
      <div>
        <section className="fixed z-0 mt-[80px] hidden h-[calc(100%-120px)] w-[250px] bg-white dark:bg-Dark xl:block">
          <SideBar />
        </section>
        <div className="flex justify-center pt-[90px] md:px-4">{children}</div>
        <div className="hidden xl:block">
          <Quickmenu />
        </div>
      </div>
    </>);
}
//하나남았따
