import { useState } from "react";
import "./App.css";
import "./styles/theme.css";

import STWaterColorLeaves from "../public/STWaterColorLeaves.svg";
import ThemeSwitcher from "./themes/ThemeSwitcher";
import PageContainer from "./themes/PageContainer";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { UseTheme } from "./themes/ThemeProvider";
import UIShowcase from "./pages/UIShowcase";

function App() {
  const [count, setCount] = useState(0);
  const { theme } = UseTheme();

  return (
    <PageContainer id="root">
      <StyledThemeProvider theme={theme}>
        <ThemeSwitcher />
        <span className="inline-flex">
          <img
            src={STWaterColorLeaves}
            className="logo react"
            alt="React logo"
          />
          <h1>Welcome to the React Theme Selector</h1>
        </span>
        <span className="inline-flex">
          <p>
            Select a theme from the dropdown above and see below on how the
            elements look!
          </p>
        </span>
        <UIShowcase />
        <div className="theme-demo-container">
          {/* Typography Section */}
          <section className="theme-section">
            <h2 className="section-title">Typography</h2>
            <span className="inline-flex">
              <span>
                <h1 className="primary">Heading 1</h1>
                <h2 className="secondary">Heading 2</h2>
                <h3>Heading 3</h3>
              </span>
              <span>
                <p className="text">This is a paragraph styled by theme.</p>
                <blockquote className="blockquote">
                  This is a blockquote.
                </blockquote>
                <pre className="pre">Preformatted text</pre>
                <code className="code">Inline code</code>
                <strong>Strong</strong>, <em>Emphasis</em>, <mark>Mark</mark>
              </span>
            </span>
          </section>

          {/* Media Section */}
          <section className="theme-section">
            <h2 className="section-title">Media</h2>
            <img src="/logo192.png" alt="Logo" className="image" />
            <svg width="64" height="64" className="svg">
              <circle cx="32" cy="32" r="30" fill="var(--primary-color)" />
            </svg>
            <video controls width="250" className="video">
              <source src="/sample.mp4" type="video/mp4" />
            </video>
            <audio controls className="audio">
              <source src="/sample.mp3" type="audio/mp3" />
            </audio>
            <canvas width="100" height="50" className="canvas"></canvas>
          </section>

          {/* Forms Section */}
          <section className="theme-section">
            <h2 className="section-title">Forms</h2>
            <form>
              <label htmlFor="input1" className="label">
                Text Input:
              </label>
              <input id="input1" type="text" className="input" />
              <label htmlFor="select1" className="label">
                Select:
              </label>
              <select id="select1" className="select">
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <label className="label">
                <input type="checkbox" className="checkbox" /> Checkbox
              </label>
              <label className="label">
                <input type="radio" name="radio" className="radio" /> Radio
              </label>
              <textarea className="textarea" rows={3} />
              <button type="submit" className="button">
                Submit
              </button>
            </form>
          </section>

          {/* Lists Section */}
          <section className="theme-section">
            <h2 className="section-title">Lists</h2>
            <ul className="list">
              <li>Unordered List Item 1</li>
              <li>Unordered List Item 2</li>
            </ul>
            <ol className="list">
              <li>Ordered List Item 1</li>
              <li>Ordered List Item 2</li>
            </ol>
            <dl className="list">
              <dt>Term 1</dt>
              <dd>Description 1</dd>
            </dl>
          </section>

          {/* Tables Section */}
          <section className="theme-section">
            <h2 className="section-title">Tables</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Header 1</th>
                  <th>Header 2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cell 1</td>
                  <td>Cell 2</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Navigation Section */}
          <section className="theme-section">
            <h2 className="section-title">Navigation</h2>
            <nav className="nav">
              <a href="#" className="link">
                Home
              </a>
              <a href="#" className="link">
                About
              </a>
            </nav>
            <button className="button">Nav Button</button>
          </section>

          {/* Layout Section */}
          <section className="theme-section">
            <h2 className="section-title">Layout</h2>
            <div className="div">Div</div>
            <section className="section">Section</section>
            <article className="article">Article</article>
            <aside className="aside">Aside</aside>
            <header className="header">Header</header>
            <footer className="footer">Footer</footer>
            <main className="main">Main</main>
          </section>

          {/* Other Section */}
          <section className="theme-section">
            <h2 className="section-title">Other Elements</h2>
            <hr className="hr" />
            <br />
            <progress value="50" max="100" className="progress"></progress>
            <meter value="0.6" className="meter"></meter>
            <output className="output">Output</output>
          </section>
        </div>{" "}
        <div className="card">
          <button
            onClick={() => {
              setCount((count) => count + 1);
            }}
          >
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </StyledThemeProvider>
    </PageContainer>
  );
}

export default App;
