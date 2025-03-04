interface SvgIconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

export const SvgIcon = ({
  name, size = 24, color = 'currentColor', className = '', onClick,
}: SvgIconProps) => {
  return (
    <svg width={size} height={size} fill={color} className={className} onClick={(e) => onClick?.(e)}>
      <use xlinkHref={`/sprite.svg#${name}`} />
    </svg>
  );
};
