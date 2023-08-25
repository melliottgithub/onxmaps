interface Props {
  error?: Error | string | null,
}

export default function ErrorMessage({ error }: Props) {
  const errorMessage = error instanceof Error ? error.message : error;
  if (!error) return null;
  return (
    (<div className={`w-full flex flex-row justify-center my-4 gap-2`}>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#F56565">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
        </svg>
      </div>
      <div>{errorMessage ?? 'Something went wrong'}</div>
    </div>)
  );
}
