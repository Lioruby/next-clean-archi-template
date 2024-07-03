export const Separator = ({ className }: { className: string }) => {
  return (
    <div
      className={`bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1px] w-full ${className}`}
    />
  );
};
