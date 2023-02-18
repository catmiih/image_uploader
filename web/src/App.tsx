import { useState } from 'react';
import './App.css';
import { Exporting } from './components/exporting';
import { Form } from './components/form';
import { Success } from './components/success';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  
  const [filename, setFilename] = useState("");

  const handleFileUpload = (newFilename: string) => {
    setFilename(newFilename);
  };

  return (
    <BrowserRouter>
      <div className="App flex flex-wrap justify-center items-center h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Form onFileUpload={handleFileUpload} />} />
          <Route path={"/exporting/:filename"} element={<Exporting />} />
          <Route path={"/uploads/:filename"} element={<Success url='file-1676740563019.jpg' />} />
        </Routes>
        <p className='w-full text-center absolute bottom-5'>created by <a href='https://github.com/catmiih' className='font-bold underline opacity-75 hover:opacity-100'>catmiih</a> - devChallenges.io </p>
      </div>
    </BrowserRouter>
  );
}

export default App;
