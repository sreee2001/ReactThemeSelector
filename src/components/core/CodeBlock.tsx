const CodeBlock: React.FC<{ code: string }> = ({ code }) => (
  <pre className="code-block">
    <code>{code}</code>
  </pre>
);

export default CodeBlock;
