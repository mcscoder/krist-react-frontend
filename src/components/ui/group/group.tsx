export type GroupProps<T> = {
  title: React.ReactNode;
  items: T[];
  children: (item: T) => React.ReactNode;
  className?: string;
};

export const Group = <T,>({
  title,
  items,
  children,
  className = "",
}: GroupProps<T>) => {
  return (
    <section className={`flex flex-col gap-5 ${className}`}>
      <h4 className="text-base font-bold">{title}</h4>
      <ul className="flex flex-col gap-4">
        {items.map((item, index) => (
          <li key={index}>{children(item)}</li>
        ))}
      </ul>
    </section>
  );
};
