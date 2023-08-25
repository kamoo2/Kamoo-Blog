import React from 'react';

export type IconTextProps = {
  Icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
  text?: React.ReactNode;
  className?: string;
};

export default function IconText({ Icon, text, className }: IconTextProps) {
  return (
    <div className={`flex items-center ${className ?? 'gap-1 text-xs'}`}>
      <Icon />
      <span>{text}</span>
    </div>
  );
}
