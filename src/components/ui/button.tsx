"use client";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <Link href="/">
      <button
        type="button"
        className="bg-honey text-cream px-4 py-2 rounded-pill hover:bg-honey-light cursor-pointer hover:text-honey focus:visible:bg-honey-light focus:visible:text-honey transition-all duration-300
      "
      >
        {children}
      </button>
    </Link>
  );
}
