"use client";

type ButtonProps = {
  label: string;
  onClick: () => void;
};

export default function Button({
  label,
  onClick,
}: ButtonProps) {
  return (
    <button onClick={onClick} className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition-colors hover:bg-red-100">
      {label}
    </button>
  );
}




