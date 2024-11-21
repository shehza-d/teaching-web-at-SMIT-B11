export default function Button(Props) {
  return (
    <button
      className={`font-medium rounded bg-primary center text-white ${Props.className}`}
    >
      {Props.children}
    </button>
  );
}
