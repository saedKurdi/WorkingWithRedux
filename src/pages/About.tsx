import { aboutText } from "../data/abouttext";

export default function About() {
  return (
    <h2
      style={{
        textAlign: "center",
        fontSize: "1.5rem",
        fontFamily: "sans-serif",
        lineHeight: "44px",
      }}
    >
      {aboutText}
    </h2>
  );
}
