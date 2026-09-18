"use client";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Button({ children, className }: ButtonProps) {
  return (
    <Link
      href="/"
      className={`bg-honey text-cream px-4 py-2 rounded-pill font-sans font-medium cursor-pointer hover:bg-bark focus-visible:bg-bark transition-colors duration-300 motion-reduce:transition-none ${className}`}
    >
      {children}
    </Link>
  );
}
