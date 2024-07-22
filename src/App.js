import './App.css'

import Answer from './components/Answer';
import AnswerGroup from './components/AnswerGroup';

function App() {
  return (
    <div className='App'>
      Teste
      <Answer value='A' label='Teste1'></Answer>
      <Answer value='B' label='Teste2'></Answer>
      <Answer value='C' label='Teste3'></Answer>
      <Answer value='D' label='Teste4'></Answer>
      <AnswerGroup />
    </div>
  );
}

export default App;
