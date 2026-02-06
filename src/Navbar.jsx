import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "upload", "analysis"];

    function onScroll() {
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = id;
          }
        }
      });

      setActive(current);
    }

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkStyle = (id) => ({
    fontWeight: active === id ? "700" : "500",
    borderBottom: active === id ? "2px solid white" : "none",
    paddingBottom: "4px",
  });

  return (
    <nav>
      <strong>PlantVision AI</strong>
      <div>
        <a href="#home" style={linkStyle("home")}>Home</a>
        <a href="#about" style={linkStyle("about")}>About</a>
        <a href="#upload" style={linkStyle("upload")}>Prompt</a>
        <a href="#analysis" style={linkStyle("analysis")}>Analysis</a>
      </div>
    </nav>
  );
}
