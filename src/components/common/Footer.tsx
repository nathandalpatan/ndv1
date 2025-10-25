export default function Footer() {
  return (
    <footer className="footer p-5 bg-foreground w-full">
      <div className="text-background text-center font-bold text-4xl lg:text-7xl flex flex-col md:flex-row gap-4 md:gap-0 justify-center md:justify-between">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/nathandalpatan/"
          className="link"
        >
          LINKEDIN
        </a>
        <a
          target="_blank"
          href="https://github.com/nathandalpatan"
          className="link"
        >
          GITHUB
        </a>
        <a
          target="_blank"
          href="https://open.spotify.com/user/v8wi4sxvl4ammrwj7yd0a2wm3?si=5b223c1894db42fe"
          className="link"
        >
          SPOTIFY
        </a>
      </div>
    </footer>
  );
}
