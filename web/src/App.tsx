import './App.css';
import { Exporting } from './components/exporting';
import { Form } from './components/form';
import { Success } from './components/success';

function App() {
  return (
    <div className="App flex flex-wrap justify-center items-center h-screen bg-gray-50">
      {/* <Form/> */}
      {/* <Exporting/> */}
      <Success/>
      <p className='w-full text-center absolute bottom-5'>created by <a href='https://github.com/catmiih' className='font-bold underline opacity-75 hover:opacity-100'>catmiih</a> - devChallenges.io </p>
    </div>
  );
}

export default App;
