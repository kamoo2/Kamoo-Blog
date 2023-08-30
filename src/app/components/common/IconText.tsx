export type IconTextProps = {
  // eslint-disable-next-line unused-imports/no-unused-vars
  Icon?: (props: React.ComponentProps<'svg'>) => JSX.Element;
  text?: React.ReactNode;
  subText?: React.ReactNode;
  className?: string;
  textStyle?: string;
  subTextStyle?: string;
};

export default function IconText({
  Icon,
  text,
  subText,
  className,
  textStyle,
  subTextStyle,
}: IconTextProps) {
  return (
    <div className={`flex items-center ${className ?? 'gap-1 text-xs'}`}>
      {Icon && <Icon />}
      <span className={textStyle}>{text}</span>
      <span className={subTextStyle}>{subText}</span>
    </div>
  );
}
