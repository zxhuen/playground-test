"use client";

type ButtonProps = {
  label: string;
};

export default function Test({
  label
}: ButtonProps) {
    
    function handleClick(): void {
    console.log("Button was clicked!");
  }

  return (
    <button onClick={handleClick} className="rounded-lg bg-red-600 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-700">
      {label}
    </button>
  );
}




