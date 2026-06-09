import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "gold" | "goldOutline";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      default: "bg-navy text-white hover:bg-navy-light",
      outline: "border border-navy bg-transparent hover:bg-navy hover:text-white",
      ghost: "hover:bg-gray-medium hover:text-navy text-navy",
      gold: "bg-gold text-white hover:bg-gold-dark",
      goldOutline: "border border-gold text-gold hover:bg-gold hover:text-white"
    };

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 px-3",
      lg: "h-12 px-8 text-base",
      icon: "h-10 w-10",
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
