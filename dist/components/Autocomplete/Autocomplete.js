"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const variantClasses = {
    outlined: "border border-gray border-2 focus:border-none",
    filled: "bg-gray text-white focus:bg-transparent",
    borderless: "border-none bg-transparent",
};
const radiusClasses = {
    small: "rounded-md",
    medium: "rounded-lg",
    large: "rounded-xl",
    full: "rounded-full",
    none: "rounded-none",
};
const Autocomplete = ({ options, placeholder = "Search...", variant = "outlined", radius = "medium", width = "300px", height = "auto", noOptionsMessage = "No results found", onSelect, }) => {
    const [inputValue, setInputValue] = (0, react_1.useState)("");
    const [filteredOptions, setFilteredOptions] = (0, react_1.useState)([]);
    const [isDropdownOpen, setIsDropdownOpen] = (0, react_1.useState)(false);
    const [isDarkMode, setIsDarkMode] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const checkDarkMode = () => {
            const darkMode = document.documentElement.classList.contains("dark");
            setIsDarkMode(darkMode);
        };
        checkDarkMode(); // 초기 다크 모드 상태 체크
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
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        setFilteredOptions(options.filter((option) => option.toLowerCase().includes(value.toLowerCase())));
        setIsDropdownOpen(true);
    };
    const handleOptionClick = (option) => {
        setInputValue(option);
        onSelect(option);
        setIsDropdownOpen(false);
    };
    const handleBlur = () => {
        setTimeout(() => setIsDropdownOpen(false), 100);
    };
    const handleFocus = () => {
        setIsDropdownOpen(true);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "relative", style: { width }, children: [(0, jsx_runtime_1.jsx)("input", { type: "text", value: inputValue, onChange: handleInputChange, onFocus: handleFocus, onBlur: handleBlur, placeholder: placeholder, className: `w-full ${height} p-3 ${variantClasses[variant]} ${radiusClasses[radius]} focus:outline-none focus:ring-1 ${variant === "filled" && isDarkMode
                    ? "bg-[#2A6490] text-white"
                    : variant === "filled"
                        ? "bg-gray-900 text-white"
                        : isDarkMode
                            ? "bg-[#2A2E39] text-white"
                            : "border-gray bg-white text-black"}`, style: { height } }), isDropdownOpen && ((0, jsx_runtime_1.jsx)("ul", { className: `absolute left-0 right-0 z-10 mt-0 max-h-40 overflow-y-auto rounded-md shadow-lg ${isDarkMode ? "bg-[#2A2E39] text-white" : "bg-white text-black"}`, children: filteredOptions.length > 0 ? (filteredOptions.map((option, index) => ((0, jsx_runtime_1.jsx)("li", { tabIndex: 0, className: `hover:bg-[#2A6490]focus:bg-blue-600 m-3 cursor-pointer p-2 ${isDarkMode
                        ? "border-[#2A6490] hover:bg-[#2A6490] focus:bg-[#2A6490]"
                        : ""}`, onClick: () => handleOptionClick(option), children: option }, index)))) : ((0, jsx_runtime_1.jsx)("li", { className: `m-3 p-2 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`, children: noOptionsMessage })) }))] }));
};
exports.default = Autocomplete;