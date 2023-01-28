import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by{" "}
            <a
              href="https://www.shecodes.io/graduates/52615-olha-bondarenko"
              title="SheCodes Profile"
              rel="noreferer"
            >
              Olha Bondarenko
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/Olha1990/dictionary-project"
              title="Github Profile"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://astounding-brigadeiros-60efe1.netlify.app"
              title="Netlify link"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
