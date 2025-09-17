import Demo from "../core/Demo";

export default function Pagination() {
  return (
    <Demo
      label="Pagination"
      code={`<div className="pagination">
<button disabled>{"<"}</button>
<button className="page-active">1</button>
<button>2</button>
<button>3</button>
<button>{">"}</button>
</div>`}
    >
      <div className="pagination">
        <button disabled>{"<"}</button>
        <button className="page-active">1</button>
        <button>2</button>
        <button>3</button>
        <button>{">"}</button>
      </div>
    </Demo>
  );
}
