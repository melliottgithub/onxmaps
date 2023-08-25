import Spinner from "./Spinner";

interface Props {
  isLoading?: boolean
}

export default function Loading({ isLoading }: Props) {
  return (
    <div className={`w-full flex flex-row justify-center`}>
      {isLoading && <Spinner className="w-14 h-14 text-white" />}
    </div>
  );
}
