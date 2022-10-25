type Size = string | 'sm' | 'md' | 'lg';

interface ButtonProps {
  label: string;
  backgroundColor: string;
  size: Size;
  onClick: () => {};
}

export const Button = ({
  label = 'Button',
  backgroundColor = 'red',
  size = 'md',
  onClick,
}: ButtonProps) => {
  let scale = 1;
  if (size === 'sm') scale = 0.75;
  if (size === 'lg') scale = 1.75;

  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: 'none',
  };

  return (
    <button onClick={onClick} style={style}>
      {label}
    </button>
  );
};
