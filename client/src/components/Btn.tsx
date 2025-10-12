"use client";

import React from "react";

const Btn = ({
  children,
  size = "medium",
  onClick,
  className = "",
  disabled = false,
  ...props
}: {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}) => {
  const baseClass =
    "bg-[#792727] text-white hover:brightness-90 active:bg-white active:text-black active:border active:border-black disabled:opacity-60 inline-flex items-center justify-center rounded-md font-medium transition-all duration-200";

  const sizeClass = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-2 text-base",
    large: "px-8 py-3 text-base",
  };

  const cls = [
    baseClass,
    sizeClass[size] || sizeClass.medium,
    className,
    disabled ? "cursor-not-allowed" : "cursor-pointer",
  ].join(" ");

  return (
    <button className={cls} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Btn;
