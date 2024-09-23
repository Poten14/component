"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = DocsLayout;
const UserPageLogoText_1 = __importDefault(require("@components/Layout/UserPageLogoText"));
const UserPageLeftSidebar_1 = __importDefault(require("@components/Layout/UserPageLeftSidebar"));
exports.metadata = {
    title: "Componique",
    description: "Generated by Next.js",
};
function DocsLayout({ children, }) {
    return (<>
      <div className="select-none">
        <UserPageLogoText_1.default />
        <div className="flex justify-center pt-[80px]">
          <div className="w-full">
            <section className="fixed left-4 top-26 hidden h-[calc(100%-120px)] w-[230px] rounded-l-2xl bg-[#D8EAF8] shadow-lg dark:bg-[#353F4A] xl:block">
              <UserPageLeftSidebar_1.default />
            </section>
            <div className="w-[calc(100%-350px)] xl:w-full">{children}</div>
          </div>
        </div>
      </div>
    </>);
}
