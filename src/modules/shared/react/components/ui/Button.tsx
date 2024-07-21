import ActivityIndicator from "@root/modules/shared/react/components/ui/ActivityIndicator";
import { cn } from "@root/modules/shared/react/libs/cn";
import { ChevronRight } from "lucide-react";

export default function Button({
  children,
  onClick,
  variant = "primary",
  isLoading = false,
}: {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary";
  isLoading?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        // colors
        variant === "primary"
          ? "bg-indigo-600  text-white shadow hover:bg-indigo-600/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
          : "bg-white text-black hover:bg-white/90 dark:bg-black dark:text-white dark:hover:bg-black/90",

        // layout
        "group relative inline-flex h-9 w-full items-center justify-center gap-2 overflow-hidden whitespace-pre rounded-md px-4 py-2 text-base font-semibold tracking-tighter focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 md:flex",

        // animation
        "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
      )}
      disabled={isLoading}
    >
      {children}
      {isLoading && <ActivityIndicator className="size-4" />}
      {!isLoading && (
        <ChevronRight className="size-4 translate-x-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
      )}
    </button>
  );
}
