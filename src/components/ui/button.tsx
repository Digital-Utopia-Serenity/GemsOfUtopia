import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-[opacity,transform,background-color,box-shadow] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-40 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg min-h-11",
  {
    variants: {
      variant: {
        primary:
          "bg-blush text-bg hover:opacity-90 shadow-[0_0_0_1px_rgb(230_138_184_/_0.4)]",
        secondary:
          "bg-transparent text-fg shadow-[0_0_0_1px_rgb(102_178_178_/_0.55)] hover:bg-teal/10",
        ghost: "bg-transparent text-muted hover:text-fg hover:bg-fg/5",
      },
      size: {
        md: "px-5 text-sm tracking-wide rounded-md",
        lg: "px-6 text-base tracking-wide rounded-lg h-12",
        sm: "px-3 text-xs tracking-wide rounded-sm h-9 min-h-9",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export function Button({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
