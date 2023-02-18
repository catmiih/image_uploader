import { useState } from 'react';
import './App.css';
import { Exporting } from './components/exporting';
import { Form } from './components/form';
import { Success } from './components/success';

function App() {

  const [filename, setFilename] = useState("");

  const handleFileUpload = (newFilename: string) => {
    setFilename(newFilename);
  };

  return (
    <div className="App flex flex-wrap justify-center items-center h-screen bg-gray-50">
      {/*<Form onFileUpload={handleFileUpload} />*/}
      
      {/* <Exporting/> */}
      <Success url="file-1676739274990.jpg"/>
      <p className='w-full text-center absolute bottom-5'>created by <a href='https://github.com/catmiih' className='font-bold underline opacity-75 hover:opacity-100'>catmiih</a> - devChallenges.io </p>
    </div>
  );
}

export function Image({ filename }: { filename: string }) {
  return <img src={`/uploads/${filename}`} alt={filename} />;
}

export default App;
