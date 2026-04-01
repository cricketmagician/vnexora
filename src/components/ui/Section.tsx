import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  container?: boolean;
  spacing?: 'sm' | 'md' | 'lg' | 'none';
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(({ 
  children, 
  className, 
  container = true, 
  spacing = 'md',
  ...props 
}, ref) => {
  return (
    <section 
      ref={ref}
      className={cn(
        "relative w-full overflow-hidden",
        {
          "py-12 md:py-16": spacing === 'sm',
          "py-20 md:py-32": spacing === 'md',
          "py-32 md:py-48": spacing === 'lg',
          "py-0": spacing === 'none',
        },
        className
      )}
      {...props}
    >
      {container ? (
        <div className="container mx-auto px-6 md:px-8 max-w-[1280px]">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
});

Section.displayName = "Section";

export const SectionHeader = ({
  title,
  subtitle,
  description,
  align = 'center',
  className
}: {
  title?: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}) => {
  return (
    <div className={cn(
      "max-w-3xl mb-12 md:mb-20",
      align === 'center' ? "mx-auto text-center" : "text-left",
      className
    )}>
      {subtitle && (
        <span className="text-gold-gradient font-sans text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4 block animate-fade-in">
          {subtitle}
        </span>
      )}
      {title && (
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-muted text-lg md:text-xl font-sans leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
