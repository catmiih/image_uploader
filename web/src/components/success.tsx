import { useState, useEffect } from 'react';
import copy from "copy-to-clipboard"; 
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { FiCopy } from 'react-icons/fi';
import { api } from '../lib/axios';

interface SuccessProps {
  url: string;
}

export function Success(props: SuccessProps) {
  const [imageURL, setImageURL] = useState('');
  const filename = window.location.pathname.replace('/exporting/file-', '');

  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await api.get(`${filename}`, { responseType: 'blob' });
        setImageURL(URL.createObjectURL(response.data));
      } catch (error) {
        console.error(error);
      }
    }
    fetchImage();
  }, [props.url]);

  const [copyText, setCopyText] = useState('');
  
  const handleCopyText = (e : any) => {
    setCopyText(e.target.value);
  } 
    
  const copyToClipboard = () => {
    copy(window.location.href);
    alert(`You have copied "${window.location.href}"`);
  }

  return (
    <div className="flex justify-center text-center py-2 shadow-xl rounded-xl bg-white" style={{ width: '30rem' }}>
      <div className="w-full mx-14">
        <BsFillPatchCheckFill className="text-center text-5xl w-full my-3 mt-2 text-green-600 animate-pulse" />

        <h1 className="font-semibold text-2xl text-zinc-700 m-3">Uploaded Successfully!</h1>

        <div className="flex items-center justify-center h-48 lg:w-full overflow-hidden rounded-lg">
            <img src={imageURL} className="w-full h-full" alt="" />
        </div>

        <br />

        <div className="flex border-2 rounded-xl mb-5 justify-between border-gray-300 p-1">
          <input
            type="text"
            name=""
            value={window.location.href}
            disabled
            id="urlInput"
            className="w-full px-3 text-gray-400"
            onChange={handleCopyText}
          />
          <button 
            className="bg-blue-500 opacity-40 hover:opacity-100 transition-opacity duration-200 px-3 py-2 rounded-md text-white" 
            onClick={copyToClipboard}
          >
            <FiCopy />
          </button>
        </div>
      </div>
    </div>
  );
}
