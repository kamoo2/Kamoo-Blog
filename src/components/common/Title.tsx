export default function Title({ className, ...props }: React.ComponentProps<'h1'>) {
  return <h1 {...props} className={`${className} mb-2 mt-8 text-4xl font-bold tracking-tight`} />;
}
