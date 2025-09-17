import Demo from "../core/Demo";

export default function Breadcrumbs() {
  return (
    <Demo
      label="Breadcrumbs"
      code={`<nav className="breadcrumbs">
<span>Home</span> &gt; <span>Section</span> &gt; <span>Page</span>
</nav>`}
    >
      <nav className="breadcrumbs">
        <span>Home</span> &gt; <span>Section</span> &gt; <span>Page</span>
      </nav>
    </Demo>
  );
}
