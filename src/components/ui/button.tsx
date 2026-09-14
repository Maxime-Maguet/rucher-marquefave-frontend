"use client";

type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button type="button" className="bg-black text-white px-4 py-2 rounded-md">
      {children}
    </button>
  );
}
