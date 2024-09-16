"use client";
import { useState } from "react";

const ValidationPWConfirm = () => {
  const [PW, setPW] = useState("");
  const [error, setError] = useState("");
  const [confirmPW, setConfirmPW] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const validatePW = (PW: string) => {
    const PWType = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
    return PWType.test(PW);
  };

  const handleChangePW = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPW(value);
    setError(
      validatePW(value)
        ? ""
        : "대소문자, 숫자, 특수 문자가 포함된 최소 8자 이상",
    );
    setConfirmError("");
  };

  const handleChangeConfirmPW = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPW(value);
    setConfirmError(value === PW ? "" : "비밀번호가 일치하지 않습니다.");
  };

  return (
    <div>
      <div>
        <input
          type="password"
          value={PW}
          onChange={handleChangePW}
          placeholder="비밀번호를 입력하세요."
          className="border-2 border-black text-black dark:border-[#cdcdcd] dark:text-white"
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
      <div>
        <input
          type="password"
          value={confirmPW}
          onChange={handleChangeConfirmPW}
          placeholder="비밀번호를 다시 입력하세요."
          className="mt-2 border-2 border-black text-black dark:border-[#cdcdcd] dark:text-white"
        />
        {/* 비밀번호 확인 오류 메시지 */}
        {confirmError && <p className="text-sm text-red-500">{confirmError}</p>}
      </div>
    </div>
  );
};
export default ValidationPWConfirm;
