import words from "@/constant/index";

export default function HeroSection() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="hero-text">
        <div className="slide">
          <div className="wrapper">
            {words.map((word, index) => (
              <span key={index}>
                <span className="">{word.text}</span>
              </span>
            ))}
          </div>
        </div>
      </h1>
    </div>
  );
}
