import { ReactNode } from 'react';

export default function CircleIcon({
  children: IconComponent,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`cursor-pointer rounded-3xl p-2.5 transition-all duration-300 ${className}`}>
      {IconComponent}
    </div>
  );
}
