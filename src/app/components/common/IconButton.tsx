import React from 'react';

export type IconButtonProps = {
  // eslint-disable-next-line unused-imports/no-unused-vars
  Icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
  className?: string;
  onClick?: () => void;
};

export default function IconButton({ Icon, className, onClick }: IconButtonProps) {
  return (
    <button onClick={onClick} className={`flex items-center justify-center ${className}`}>
      <Icon />
    </button>
  );
}
