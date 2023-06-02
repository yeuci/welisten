import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name: string) {
  const initials = name.split(" ").map((word) => word[0]);
  if (initials.length === 1) {
    const newInitials = name.split("@");
    return newInitials[0].substring(0, 3);
  }
  return initials.slice(0, 3).join("");
}
