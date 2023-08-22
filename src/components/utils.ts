export function excludeProps(props: Record<string, unknown>, exclusions: string[]) {
  const filtered: Record<string, unknown> = { ...props };
  exclusions.forEach((key) => {
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    if (key in props) delete filtered[key];
  });
  return filtered;
}