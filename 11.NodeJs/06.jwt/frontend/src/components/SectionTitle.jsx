export default function SectionTitle(Props) {
  return (
    <div className="gap-4 flex items-center">
      <div className="h-10 w-5 bg-primary rounded"></div>
      <h2 className="font-semibold text-xl text-primary">{Props.text}</h2>
    </div>
  );
}
