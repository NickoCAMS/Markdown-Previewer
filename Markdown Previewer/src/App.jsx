import { useState } from 'react';
import './index.css';
import Previewer from './Previewer';
import Editor from './Editor';

function App() {
  const defaultMarkdown = `
  # This is a Heading 1

  ## This is a Heading 2

  Here is a [link](https://www.example.com) to an example website.

  Here is some inline code: \`console.log("Hello, World!");\`

  \`\`\`
  function example() {
    console.log("This is a code block.");
  }
  \`\`\`

  - This is a list item
  - This is another list item

  > This is a blockquote.

  ![Alt text for an image](https://via.placeholder.com/150)

  **This text is bold.**
  
  __This text is strong.__
  `;

  const [text, setText] = useState(defaultMarkdown);

  return (
    <div className="h-screen flex flex-col bg-[#F5F5F5] p-2">
      <Editor text={text} onChange={setText} />
      <Previewer text={text} />
    </div>
  );
}

export default App;
