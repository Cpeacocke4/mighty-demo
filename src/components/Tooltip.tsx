import { ReactNode } from "react";

type TooltipProps = {
  children: ReactNode;
  text: string;
};

const Tooltip = (props: TooltipProps) => {
  const { children, text } = props;
  return (
    <div className="group relative flex justify-left">
      {children}
      <span className="absolute z-10 top-10 scale-0 w-max transition-all rounded bg-purple p-2 text-container font-light text-sm group-hover:scale-100">
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
