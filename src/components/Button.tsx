import Spinner from "./Spinner";
import { excludeProps } from "./utils";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean
    label: string
    buttonStyle?: "primary" | "secondary"
}

export default function Button(props: Props) {
    const { isLoading, label } = props
    const style = props.buttonStyle ?? "primary";
    const styleClasses = {
        primary: "text-white font-bold bg-amber-400 hover:bg-amber-300 shadow-amber-300/60 hover:shadow-amber-300",
        secondary: "bg-slat-400 hover:bg-slat-300 shadow-slat-300/60 hover:shadow-slat-300"
    };
    const buttonProps = excludeProps(props as unknown as Record<string, unknown>, ["isLoading", "label", "buttonStyle"]);
    return (
      <button
        {...buttonProps}
          disabled={props.disabled ?? isLoading}
          className={`block rounded-lg border border-black/10  transition-all p-3 shadow-lg ${styleClasses[style]} ${props.className}`}
      >
          <span className="flex space-x-3 items-center justify-center">
              {isLoading ? (<Spinner className="w-5 h-5 text-white" />) : undefined}
              <span>{label}</span>
          </span>
      </button>
  );
}
