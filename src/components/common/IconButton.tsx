import React from 'react';

export type IconButtonProps = {
  // eslint-disable-next-line unused-imports/no-unused-vars
  Icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export default function IconButton({
  Icon,
  className,
  onClick,
  disabled = false,
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center ${className} ${disabled && 'text-disabled'}`}
    >
      <Icon />
    </button>
  );
}
