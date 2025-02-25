"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const useSnsStore_1 = require("app/store/useSnsStore");
const Select_1 = __importDefault(require("@components/Select/Select"));
const Button_1 = __importDefault(require("@components/Button/Button"));
const BasicModal_1 = __importDefault(require("@components/Modal/BasicModal"));
const react_syntax_highlighter_1 = require("react-syntax-highlighter"); //@
const prism_1 = require("react-syntax-highlighter/dist/esm/styles/prism"); //@
const Icon_1 = __importDefault(require("@components/Icon/Icon"));
const previewSnsFormCode = (store) => {
    return `
  import React from 'react';
  import CarouselDots from '@components/Carousel/CarouselDots';
  import Icon from '@components/Icon/Icon';
  import AvatarBasic from '@components/Avatar/AvatarBasic';

  const SnsPage = () => {
    return (
      <div className="h-[670px] overflow-y-scroll">
        <div className="m-auto w-[450px] rounded-lg border border-gray bg-white pb-5 shadow-md dark:bg-[#333742] dark:text-white">
          <div className="flex w-full items-center p-2">
            <AvatarBasic size="${store.size}" />
            <span className="ml-2 font-bold">${store.nickname}</span>
          </div>
          <CarouselDots
            images={["${store.imageSrc1}", "${store.imageSrc2}", "${store.imageSrc3}"]}
            autoplay={${store.autoplay}}
            showDots={${store.showDots}}
            interval={${store.interval}}
          />
          <div className="w-full px-3 py-1">
            <span className="mr-1 font-bold">${store.nickname}</span>
            ${store.content}
          </div>
        </div>
      </div>
    );
  };

  export default SnsPage;
  `;
};
const SnsRemote = () => {
    const [isDarkMode, setIsDarkMode] = (0, react_1.useState)(false);
    const [copied, setCopied] = (0, react_1.useState)(false);
    const [isModalOpen, setIsModalOpen] = (0, react_1.useState)(false);
    const SnsStore = (0, useSnsStore_1.useSnsStore)();
    (0, react_1.useEffect)(() => {
        const checkDarkMode = () => {
            const darkMode = document.documentElement.classList.contains("dark");
            setIsDarkMode(darkMode);
        };
        checkDarkMode();
        window.addEventListener("storage", checkDarkMode);
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });
        return () => {
            window.removeEventListener("storage", checkDarkMode);
            observer.disconnect();
        };
    }, []);
    const handleCopy = () => {
        const code = previewSnsFormCode(SnsStore);
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    const { nickname, size, imageSrc1, imageSrc2, imageSrc3, content, showDots, autoplay, interval, setSnsState, } = (0, useSnsStore_1.useSnsStore)();
    const controls = [
        {
            label: "Username",
            type: "text",
            value: nickname,
            onChange: (newValue) => setSnsState("nickname", newValue),
        },
        {
            label: "Write Content",
            type: "text",
            value: content,
            onChange: (newValue) => setSnsState("content", newValue),
        },
        {
            label: "Avatar-Size",
            type: "select",
            value: size,
            options: ["small", "medium", "large"],
            onChange: (newValue) => setSnsState("size", newValue),
        },
        {
            label: "Slide Image 1",
            type: "text",
            value: imageSrc1,
            onChange: (newValue) => setSnsState("imageSrc1", newValue),
        },
        {
            label: "Slide Image 2",
            type: "text",
            value: imageSrc2,
            onChange: (newValue) => setSnsState("imageSrc2", newValue),
        },
        {
            label: "Slide Image 3",
            type: "text",
            value: imageSrc3,
            onChange: (newValue) => setSnsState("imageSrc3", newValue),
        },
        {
            label: "Autoplay",
            type: "select",
            value: autoplay ? "true" : "false",
            options: ["true", "false"],
            onChange: (newValue) => setSnsState("autoplay", JSON.parse(newValue)),
        },
        {
            label: "Dots Display",
            type: "select",
            value: showDots ? "true" : "false",
            options: ["true", "false"],
            onChange: (newValue) => setSnsState("showDots", JSON.parse(newValue)),
        },
        {
            label: "Slide Transition Time",
            type: "string",
            value: interval,
            onChange: (newValue) => setSnsState("interval", newValue),
        },
    ];
    return (<div className="relative shadow-xl">
      {/* 하늘색 배경 박스 추가 */}
      <div className={`absolute left-0 top-2 z-10 m-auto w-[350px] rounded-t-2xl bg-[#D8EAF8] p-5 dark:bg-[#102B3F]`}>
        <div className="flex">
          <h2 className="text-2xl font-bold text-[#ffffff] dark:text-[#dfdfdf]">
            Control Panel
          </h2>

          <Button_1.default iconPosition="left" iconSize="large" onClick={() => setIsModalOpen(true)} className="ml-20 dark:bg-[#2A6490] dark:focus:bg-[#1D4767]">
            <Icon_1.default name="icon-docs" color="white"/>
            Code
          </Button_1.default>
        </div>
        <input type="text" className="mt-2 w-full rounded bg-[#BBD9F0] dark:bg-[#2B4456] dark:text-[#ffffff]" placeholder="   customizing your template" disabled/>
        <BasicModal_1.default open={isModalOpen} onClose={() => setIsModalOpen(false)} showCloseIcon={true} className="custom-modal">
          <react_syntax_highlighter_1.Prism language="tsx" style={isDarkMode ? prism_1.vscDarkPlus : undefined} customStyle={{
            backgroundColor: isDarkMode ? "#2A2E39" : "#F8F8F8",
            padding: "0.5rem",
            borderRadius: "0.5rem",
            fontSize: "0.7rem",
            maxHeight: "570px",
            overflowY: "auto",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            overflowWrap: "break-word",
        }}>
            {previewSnsFormCode(SnsStore)}
          </react_syntax_highlighter_1.Prism>
          <Button_1.default onClick={handleCopy} icon={copied ? "icon-check" : undefined} className="copyButton m-10 dark:bg-[#2A6490]" iconColor={copied ? "green" : "white"}>
            {copied ? "Copied!" : "Copy Code"}
          </Button_1.default>
          {/* 닫기 버튼 */}
          <div className="mb-2 text-right">
            <Button_1.default variant="border" onClick={() => setIsModalOpen(false)} className="dark:text-gray-300 text-sm text-gray dark:border-gray">
              close
            </Button_1.default>
          </div>
        </BasicModal_1.default>
      </div>

      {/* Control 패널 */}
      <div className={`remote-control relative top-26 m-auto mt-10 w-[350px] rounded-xl p-2 shadow-xl ${isDarkMode ? "bg-[#333742] text-[#dfdfdf]" : "bg-white"} max-h-[calc(100vh-220px)] overflow-y-auto`}>
        {controls.map((control, index) => (<div key={index} className={`control-item m-3 rounded-lg p-2 shadow-md ${isDarkMode ? "bg-gray-700" : "bg-gray-50"}`}>
            <label className={`mb-2 block font-medium ${isDarkMode ? "text-[#dfdfdf]" : "text-Gray"}`}>
              {control.label}
            </label>
            {control.type === "select" ? (<Select_1.default option={control.options || []} placeholder={String(control.value)} onChange={(newValue) => control.onChange(newValue)} className="w-full"/>) : (<input type="text" value={control.value} onChange={(e) => control.onChange(e.target.value)} className={`w-full rounded-lg border p-2 focus:outline-none focus:ring-1 focus:ring-Basic ${isDarkMode
                    ? "border-gray-500 bg-[#2A2E39] text-[#dfdfdf]"
                    : "border-gray bg-white"}`}/>)}
          </div>))}
      </div>
    </div>);
};
exports.default = SnsRemote;
