interface ISectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: ISectionTitleProps) {
  return (
    <div className="pt-5 pb-5 text-center">
      <div className="uppercase text-3xl font-bold tracking-wider text-zinc-800 pb-1">
        {title}
      </div>
      <hr className="border-sky-600 w-1/4 m-auto" />
    </div>
  );
}
