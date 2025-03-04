interface SvgIconProps {
  name: string;
  size?: number;
  color?: string;
}

export const SvgIcon = ({ name, size = 24, color = "currentColor" }: SvgIconProps) => {
  return (
    <svg width={size} height={size} fill={color}>
      <use xlinkHref={`/sprite.svg#${name}`} />
    </svg>
  );
};
