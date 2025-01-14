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
const useServiceStore_1 = require("app/store/useServiceStore");
const Select_1 = __importDefault(require("@components/Select/Select"));
const Input_1 = __importDefault(require("@components/Input/Input"));
const Textarea_1 = __importDefault(require("@components/Textarea/Textarea"));
const Imageupload_1 = __importDefault(require("@components/ImageUpload/Imageupload"));
const Button_1 = __importDefault(require("@components/Button/Button"));
const BasicModal_1 = __importDefault(require("@components/Modal/BasicModal"));
const react_syntax_highlighter_1 = require("react-syntax-highlighter");
const prism_1 = require("react-syntax-highlighter/dist/esm/styles/prism");
const Icon_1 = __importDefault(require("@components/Icon/Icon"));
// 코드 미리보기 함수
const previewCustomerServiceFormCode = (store) => {
    return `
  import React from 'react';
  import DropDownBasic from '@components/DropDown/DropDownBasic';
  import DropDownGrouped from '@components/DropDown/DropDownGrouped';
  import Input from '@components/Input/Input';
  import Textarea from '@components/Textarea/Textarea';
  import Button from '@components/Button/Button';
  import ImageUpload from '@components/ImageUpload/Imageupload';

  const CustomerServiceForm: React.FC = () => {
    return (
      <div className="flex items-center justify-center">
        <div className="w-full max-w-lg rounded-3xl p-10 shadow-lg dark:bg-[#333742] bg-white">
          <h1 className="mb-8 text-center text-2xl font-bold">고객 서비스</h1>
          <form className="space-y-6">
            <div className="flex">
              <DropDownBasic
                option={${JSON.stringify(store.dropDownOption1)}}
                placeholder="번호 유형 선택"
                type="${store.dropDownType1}"
              />
              <Input
                size="${store.inputSize1}"
                variant="${store.inputVariant1}"
                placeholder="전화번호"
                value="${store.phoneNumber}"
              />
            </div>
            <div className="flex w-full">
              <DropDownGrouped
                options={${JSON.stringify(store.dropDownOption2)}}
                defaultOption="서비스 항목 선택"
                type="${store.dropDownType2}"
              />
            </div>
            <Input
              size="${store.inputSize2}"
              variant="${store.inputVariant2}"
              placeholder="제목 입력"
              value="${store.title}"
              width="100%"
            />
            <Textarea
              size="${store.detailSize}"
              color="${store.detailColor}"
              resize="${store.detailResize}"
              placeholder="상세 내용 입력"
              value="${store.details}"
            />
            <ImageUpload
              size="${store.imageUploadSize}"
              color="${store.imageUploadColor}"
              shape="${store.imageUploadShape}"
              variant="${store.imageUploadVariant}"
              text="+ 업로드"
            />
            <div className="mt-6 flex">
              <Button
                color="${store.buttonColor1}"
                size="${store.buttonSize1}"
                variant="${store.buttonVariant1}"
              >
                취소
              </Button>
              <Button
                color="${store.buttonColor2}"
                size="${store.buttonSize2}"
                variant="${store.buttonVariant2}"
              >
                제출
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  export default CustomerServiceForm;
  `;
};
const CustomerServiceRemote = () => {
    const [isDarkMode, setIsDarkMode] = (0, react_1.useState)(false);
    const [isModalOpen, setIsModalOpen] = (0, react_1.useState)(false);
    const [copied, setCopied] = (0, react_1.useState)(false); // 복사 상태
    const serviceStore = (0, useServiceStore_1.useServiceStore)(); // store 가져오기
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
        const code = previewCustomerServiceFormCode(serviceStore);
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    const { numberType, phoneNumber, serviceItem, title, details, attachment, dropDownType1, dropDownType2, inputSize1, inputVariant1, inputSize2, inputVariant2, detailSize, detailColor, detailResize, buttonColor1, buttonSize1, buttonVariant1, buttonColor2, buttonSize2, buttonVariant2, imageUploadSize, imageUploadColor, imageUploadShape, imageUploadVariant, setServiceState, onImageSelect, } = (0, useServiceStore_1.useServiceStore)();
    const controls = [
        {
            label: "Number Type - Style",
            type: "select",
            value: dropDownType1,
            options: ["basic", "rounded", "borderless-rounded", "less-rounded"],
            onChange: (newValue) => setServiceState("dropDownType1", newValue),
        },
        {
            label: "Phone Number",
            type: "input",
            value: phoneNumber,
            size: inputSize1,
            variant: inputVariant1,
            placeholder: "Phone Number",
            onChange: (newValue) => setServiceState("phoneNumber", newValue),
        },
        {
            label: "Phone Number - Size",
            type: "select",
            value: inputSize1,
            options: ["xs", "small", "medium", "large", "xl"],
            onChange: (newValue) => setServiceState("inputSize1", newValue),
        },
        {
            label: "Phone Number - Fill",
            type: "select",
            value: inputVariant1,
            options: ["outlined", "filled"],
            onChange: (newValue) => setServiceState("inputVariant1", newValue),
        },
        {
            label: "Service Item - Style",
            type: "select",
            value: dropDownType2,
            options: ["basic", "rounded", "borderless-rounded", "less-rounded"],
            onChange: (newValue) => setServiceState("dropDownType2", newValue),
        },
        {
            label: "Enter Title",
            type: "input",
            value: title,
            size: inputSize2,
            variant: inputVariant2,
            placeholder: "Title",
            onChange: (newValue) => setServiceState("title", newValue),
        },
        {
            label: "Title - Size",
            type: "select",
            value: inputSize2,
            options: ["xs", "small", "medium", "large", "xl"],
            onChange: (newValue) => setServiceState("inputSize2", newValue),
        },
        {
            label: "Title - Fill",
            type: "select",
            value: inputVariant2,
            options: ["outlined", "filled"],
            onChange: (newValue) => setServiceState("inputVariant2", newValue),
        },
        {
            label: "Enter Detailed Description",
            type: "textarea",
            value: details,
            size: detailSize,
            color: detailColor,
            resize: detailResize,
            placeholder: "Enter Detailed Description",
            onChange: (newValue) => setServiceState("details", newValue),
        },
        {
            label: "Description - Size",
            type: "select",
            value: detailSize,
            options: ["xs", "small", "medium", "large", "xl"],
            onChange: (newValue) => setServiceState("detailSize", newValue),
        },
        {
            label: "Description - Color",
            type: "select",
            value: detailColor,
            options: ["red", "skyblue", "green", "gray"],
            onChange: (newValue) => setServiceState("detailColor", newValue),
        },
        {
            label: "Description - Resize",
            type: "select",
            value: detailResize,
            options: ["none", "both", "horizontal", "vertical"],
            onChange: (newValue) => setServiceState("detailResize", newValue),
        },
        {
            label: "Image Upload",
            type: "imageUpload",
            size: imageUploadSize,
            color: imageUploadColor,
            shape: imageUploadShape,
            variant: imageUploadVariant,
            onImageSelect: onImageSelect,
        },
        {
            label: "Image Upload - Size",
            type: "select",
            value: imageUploadSize,
            options: ["small", "medium", "large"],
            onChange: (newValue) => setServiceState("imageUploadSize", newValue),
        },
        {
            label: "Image Upload - Color",
            type: "select",
            value: imageUploadColor,
            options: [
                "basic",
                "primary",
                "secondary",
                "success",
                "warning",
                "danger",
                "red",
                "orange",
                "yellow",
                "green",
                "blue",
                "purple",
                "pink",
                "white",
                "gray",
                "black",
            ],
            onChange: (newValue) => setServiceState("imageUploadColor", newValue),
        },
        {
            label: "Image Upload - Shape",
            type: "select",
            value: imageUploadShape,
            options: ["rectangle", "circle"],
            onChange: (newValue) => setServiceState("imageUploadShape", newValue),
        },
        {
            label: "Image Upload - Style",
            type: "select",
            value: imageUploadVariant,
            options: ["solid", "border"],
            onChange: (newValue) => setServiceState("imageUploadVariant", newValue),
        },
        {
            label: "Cancel Button - Color",
            type: "select",
            value: buttonColor1,
            options: [
                "primary",
                "secondary",
                "success",
                "warning",
                "danger",
                "red",
                "orange",
                "yellow",
                "green",
                "blue",
                "purple",
                "pink",
                "basic",
            ],
            onChange: (newValue) => setServiceState("buttonColor1", newValue),
        },
        {
            label: "Cancel Button - Size",
            type: "select",
            value: buttonSize1,
            options: ["small", "medium", "large"],
            onChange: (newValue) => setServiceState("buttonSize1", newValue),
        },
        {
            label: "Cancel Button - Style",
            type: "select",
            value: buttonVariant1,
            options: ["solid", "border", "flat", "light"],
            onChange: (newValue) => setServiceState("buttonVariant1", newValue),
        },
        {
            label: "Submit Button - Color",
            type: "select",
            value: buttonColor2,
            options: [
                "primary",
                "secondary",
                "success",
                "warning",
                "danger",
                "red",
                "orange",
                "yellow",
                "green",
                "blue",
                "purple",
                "pink",
                "basic",
            ],
            onChange: (newValue) => setServiceState("buttonColor2", newValue),
        },
        {
            label: "Submit Button - Size",
            type: "select",
            value: buttonSize2,
            options: ["small", "medium", "large"],
            onChange: (newValue) => setServiceState("buttonSize2", newValue),
        },
        {
            label: "Submit Button - Style",
            type: "select",
            value: buttonVariant2,
            options: ["solid", "border", "flat", "light"],
            onChange: (newValue) => setServiceState("buttonVariant2", newValue),
        },
    ];
    return (<div className="relative shadow-xl">
      {/* 코드 미리보기 및 복사 기능 추가 */}
      <div className="absolute left-0 top-2 z-10 m-auto w-[350px] rounded-t-2xl bg-[#D8EAF8] p-5 dark:bg-[#102B3F]">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-[#ffffff] dark:text-[#dfdfdf]">
            Control Panel
          </h2>
          <Button_1.default iconPosition="left" iconSize="large" onClick={() => setIsModalOpen(true)} className="dark:bg-[#2A6490] dark:focus:bg-[#1D4767]">
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
            {previewCustomerServiceFormCode(serviceStore)}
          </react_syntax_highlighter_1.Prism>
          <Button_1.default onClick={handleCopy} icon={copied ? "icon-check" : undefined} className="copyButton m-10 dark:bg-[#2A6490]" iconColor={copied ? "green" : "white"}>
            {copied ? "Copied!" : "Copy Code"}
          </Button_1.default>
          <div className="mb-2 text-right">
            <Button_1.default variant="border" onClick={() => setIsModalOpen(false)} className="dark:text-gray-300 text-sm text-gray dark:border-gray">
              close
            </Button_1.default>
          </div>
        </BasicModal_1.default>
      </div>

      {/* Control 패널 */}
      <div className={`remote-control relative top-26 m-auto mt-10 w-[350px] rounded-xl p-2 shadow-xl ${isDarkMode ? "bg-[#333742] text-[#dfdfdf]" : "bg-white"} max-h-[calc(100vh-220px)] overflow-y-auto`}>
        {/* 맵 함수로 모든 필드 렌더링 */}
        {controls.map((control, index) => (<div key={index} className={`control-item m-3 rounded-lg p-2 shadow-md ${isDarkMode ? "bg-gray-700" : "bg-gray-50"}`}>
            <label className={`mb-2 block font-medium ${isDarkMode ? "text-[#dfdfdf]" : "text-Gray"}`}>
              {control.label}
            </label>
            {control.type === "select" ? (<Select_1.default option={control.options ?? []} // 옵션이 undefined일 경우 빈 배열로 설정
             placeholder={control.value} onChange={(newValue) => control.onChange?.(newValue)} // 함수가 정의된 경우에만 호출
             className="w-full"/>) : control.type === "input" ? (<Input_1.default size={control.size} // 올바른 타입으로 캐스팅
             variant={control.variant} // 올바른 타입으로 캐스팅
             placeholder={control.placeholder} value={control.value} onChange={(e) => control.onChange?.(e.target.value)} // 함수가 정의된 경우에만 호출
            />) : control.type === "textarea" ? (<Textarea_1.default size={control.size} // 올바른 타입으로 캐스팅
             color={control.color} // 올바른 타입으로 캐스팅
             resize={control.resize} placeholder={control.placeholder} value={control.value} onChange={(e) => control.onChange?.(e.target.value)} // 함수가 정의된 경우에만 호출
            />) : control.type === "imageUpload" ? (<Imageupload_1.default size={control.size} // 올바른 타입으로 캐스팅
             color={control.color} // 올바른 타입으로 캐스팅
             shape={control.shape} // 올바른 타입으로 캐스팅
             variant={control.variant} // 올바른 타입으로 캐스팅
             onImageSelect={control.onImageSelect ?? (() => { })} // 함수가 없을 경우 빈 함수로 대체
            />) : null}
          </div>))}
      </div>
    </div>);
};
exports.default = CustomerServiceRemote;
