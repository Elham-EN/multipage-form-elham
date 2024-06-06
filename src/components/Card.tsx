import React from "react";

import { ReactNode } from "react";
import { FaUser, FaTruck, FaBell } from "react-icons/fa";

interface CardProps {
  label: string;
  icon: ReactNode;
  isSelected: boolean;
  onClick: () => void;
}

export default function Card({ label, icon, isSelected, onClick }: CardProps) {
  return (
    <div
      className={` w-[350px] h-[200px] flex flex-col items-center justify-center border-2 rounded-lg p-4 cursor-pointer transition-colors ${
        isSelected ? "bg-green-100 border-green-400" : "bg-white border-gray-200"
      }`}
      onClick={onClick}
    >
      <h3 className="mt-2 text-lg font-semibold">{label}</h3>
      <hr className="w-full border-t-2 border-gray-300 my-2" />
      {icon}
    </div>
  );
}

// Use these icons for the specific card
export const VisitorIcon = <FaUser size={48} />;
export const DeliveryIcon = <FaTruck size={48} />;
export const FunctionIcon = <FaBell size={48} />;
