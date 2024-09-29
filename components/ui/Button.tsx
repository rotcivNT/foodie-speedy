import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { twMerge } from "tailwind-merge";
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva("flex items-center justify-center rounded-md", {
  variants: {
    variant: {
      default:
        "bg-primary-500 rounded-[28px] flex flex-row items-center justify-center space-x-3",
      link: "bg-transparent",
    },
    size: {
      default: "",
      lg: "h-[50px] px-4",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const textVariants = cva("text-sm font-medium", {
  variants: {
    variant: {
      default: "text-white font-bold font-[Roboto] text-[18px]",
      link: "text-neutral-300 font-[Roboto-Medium] text-base leading-[19px] text-right underline",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface ButtonProps
  extends TouchableOpacityProps,
    VariantProps<typeof buttonVariants> {
  title: string;
  leftIcon?: React.ReactNode;
}

const Button = React.forwardRef<TouchableOpacity, ButtonProps>(
  ({ className, title, variant, size, leftIcon, ...props }, ref) => {
    return (
      <TouchableOpacity
        className={twMerge(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {leftIcon}
        <Text className={twMerge(textVariants({ variant }))}>{title}</Text>
      </TouchableOpacity>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
