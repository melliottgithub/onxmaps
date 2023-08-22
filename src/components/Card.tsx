interface Props extends React.HTMLAttributes<HTMLDivElement> {
  fullWidth?: boolean
}

export default function Card(props: Props) {
  const className = props.className ?? '';
  return (
    <div className={`px-8 py-6 mx-4 my-6 ${className}`}>
      {props.children}
    </div>
  );
}
