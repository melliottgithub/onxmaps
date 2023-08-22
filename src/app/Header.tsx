
interface Props {
  title: string,
}
export default function Header(props: Props) {
  return (
    <div className="pl-3 text-center text-5xl font-bold text-slate-500">
      {props.title}
    </div>
  );
}