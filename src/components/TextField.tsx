import { excludeProps } from "./utils";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    fullWidth?: boolean
}

export default function TextField(props: Props) {
    const className = props.className ?? '';
    const width = props.fullWidth || props.fullWidth == undefined ? 'w-full' : '';
    const inputProps = excludeProps(props as unknown as Record<string, unknown>, ["fullWidth"]);
    return (
      <input 
        {...inputProps}
        type="text"
        className={`rounded-lg bg-slate-200/40 border outline-none border-black/10 active:border-amber-400 focus:border-amber-400 transition-all text-gray-500 ${width} py-3 px-4 ${className}`}
      />
  );
}
