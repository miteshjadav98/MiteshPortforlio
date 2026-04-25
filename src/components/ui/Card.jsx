import { forwardRef } from 'react';
import { cn } from './Button';

export const Card = forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("glass-card overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-blue-500/30", className)}
    {...props}
  >
    {children}
  </div>
));
Card.displayName = "Card";

export const Badge = ({ children, className }) => (
  <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20", className)}>
    {children}
  </span>
);
