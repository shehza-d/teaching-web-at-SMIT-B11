import { useSelector } from "react-redux";

export default function About() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div className={`h-screen ${darkMode ? "bg-slate-900" : ""}`}>About</div>
  );
}
