import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function Code({ language, value }) {
  return (
    <SyntaxHighlighter showLineNumbers={true} language={language}>
      {value}
    </SyntaxHighlighter>
  );
}
