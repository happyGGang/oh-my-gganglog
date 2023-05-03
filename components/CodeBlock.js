import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const CopyButton = ({ target }) => {
  const handleCopy = async () => {
    if (target) {
      try {
        await navigator.clipboard.writeText(target)
        alert('copied!')
      } catch (error) {
        alert('failed!')
      }
    }
  }
  return (
    <button
      onClick={handleCopy}
      className="absolute right-0.5 top-0.5 rounded-lg px-2 bg-white dark: text-gray-800"
    >
      copy
    </button>
  )
}

export default function CodeBlock({ children }) {
  return (
    <div className="relative">
      <CopyButton target={children} />
      <SyntaxHighlighter showLineNumbers style={dracula}>
        {children}
      </SyntaxHighlighter>
    </div>
  )
}
