import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMaximize, faMinimize } from '@fortawesome/free-solid-svg-icons';

function Previewer({ text }) {
  const [isMaximized, setIsMaximized] = useState(false);

  return (
    <section
      className={`flex flex-col rounded-2xl w-full border-4 border-y-blue-800 border-x-slate-500 bg-blue-200 shadow-2xl overflow-hidden transition-transform duration-500 
      ${isMaximized ? 'fixed top-0 left-0 right-0 bottom-0 h-full' : 'h-[300px]'}`}
    >
      <div className='flex justify-between items-center bg-gradient-to-b from-blue-300 to-blue-200 px-4 py-2'>
        <h1 className='text-3xl font-bold text-blue-900'>Preview</h1>
        <button type="button" onClick={() => setIsMaximized(prevState => !prevState)}>
          <FontAwesomeIcon icon={isMaximized ? faMinimize : faMaximize} />
        </button>
      </div>
      <hr className='my-4 border-t-2 border-blue-900' />
      
      <main 
        id='preview' 
        dangerouslySetInnerHTML={{ __html: marked(text, { breaks: true }) }} 
        className="m-2 prose overflow-auto max-w-none"  
        style={{ maxHeight: isMaximized ? 'calc(100% - 100px)' : 'calc(100% - 70px)' }} // Adjust height based on header
      ></main>
    </section>
  );
}

export default Previewer;
