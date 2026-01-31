import type { ReactNode } from "react";

interface CardProps {
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}

/**
 * Base Card component.
 * Provides consistent styling and layout.
 * Contains no business logic.
 */
const Card = ({ header, children, footer }: CardProps) => {
  return (
    <article className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]">
      {header && <div className="mb-4">{header}</div>}
      <div className="mb-6">{children}</div>
      {footer && <div>{footer}</div>}
    </article>
  );
};

export default Card;
