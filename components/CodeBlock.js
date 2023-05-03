import { solarizedLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import SyntaxHighlighter from 'react-syntax-highlighter'
import Image from 'next/image'

const CopyButton = ({ target }) => {
  const handleCopy = async () => {
    if (target) {
      try {
        await navigator.clipboard.writeText(target)
        alert('copied')
      } catch (error) {
        alert(`copy failed ${error}`)
      }
    }
  }
  return (
    <button
      onClick={handleCopy}
      className="absolute right-0.5 top-0.5 rounded-sm px-2 dark:text-gray-800"
    >
      <Image src={`/copy.svg`} alt="copy" width={30} height={30} />
    </button>
  )
}

export default function CodeBlock({ children }) {
  return (
    <div className="relative">
      <CopyButton target={children} />
      <SyntaxHighlighter showLineNumbers style={solarizedLight}>
        {children}
      </SyntaxHighlighter>
    </div>
  )
}
