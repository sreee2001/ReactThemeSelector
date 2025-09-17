import CodeBlock from "./CodeBlock";

type DemoProps = {
  label: string;
  children: React.ReactNode;
  code: string;
};

const Demo: React.FC<DemoProps> = ({ label, children, code }) => (
  <div className="demo-block">
    <div className="demo-label">{label}</div>
    <div className="demo-content">{children}</div>
    <CodeBlock code={code} />
  </div>
);

export default Demo;
