import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMaximize, faMinimize } from '@fortawesome/free-solid-svg-icons';

function Editor({ text, onChange }) {
  const [isMaximized, setIsMaximized] = useState(false);

  return (
    <section className={`flex flex-col rounded-2xl w-1/4 border-4 border-y-blue-800 border-x-slate-500 bg-blue-200 shadow-2xl mx-auto overflow-hidden
    transition-all duration-500 ${isMaximized ? 'h-screen' : 'h-[300px]'} font-light mb-2`}>
      <div className='flex justify-between items-center bg-gradient-to-b from-blue-300 to-blue-200 px-4 py-2'>
        <h1 className='text-3xl font-bold text-blue-900'>Editor</h1>
        <button type="button" onClick={() => setIsMaximized(prevState => !prevState)}>
          <FontAwesomeIcon icon={isMaximized ? faMinimize : faMaximize} />
        </button>
      </div>
      <hr className='my-4 border-t-2 border-blue-900 mb-0' />
      <textarea
        name="editor"
        id="editor"
        value={text}
        onChange={(e) => onChange(e.target.value)}
        placeholder='Write your markdown here'
        className='bg-blue-200 resize-none focus:outline-8 focus:outline-blue-800 focus:-outline-offset-0 h-full w-full p-2 mt-0' 
        style={{ boxSizing: 'border-box' }}
      ></textarea>
    </section>
  );
}

export default Editor;
