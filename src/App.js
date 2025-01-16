import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const[name,setName] = useState('');
  const[datetime, setDatetime] = useState('');
  const[description, setDescription] = useState('');

function addNewTransaction(ev) {
  ev.preventDefault();
  
  const url = `${process.env.REACT_APP_API_URL}/transaction`;  // Corrected string interpolation
  
  const value = { name, description, datetime };  // Creating the value object

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(value),  // Corrected JSON.stringify
  })
  .then(response => response.json())  // Ensuring the response is in JSON format
  .then(json => {
    console.log('result', json);  // Log the result
  })
  .catch(error => {
    console.error('Error:', error);  // Catch any errors
  });
}



  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className="basic">
        <input type="text"
              value={name}
              onChange={ev => setName(ev.target.value)}
               placeholder={'+200 new samsung tv'}/>
        <input type="datetime-local"
                value={datetime}
                onChange={ev => setDatetime(ev.target.value)}/>
        </div>
        
        <div>
        <input type="text" 
                value={description}
                onChange={ev => setDescription(ev.target.value)}
                placeholder={'description'}/>
        </div>

        <button type='submit'>Add new transaction</button>
      </form>
      <div className='transactions'>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>New Samsung TV</div>
            <div className='description'>it was time for new tv</div>
          </div>
          <div className='right'>
            <div className='price red'>-$500</div>
            <div className='datetime'>2024-01-16</div>
          </div>   
        </div>

        <div className='transaction'>
          <div className='left'>
            <div className='name'>Gig job new website</div>
            <div className='description'>it was time for new tv</div>
          </div>
          <div className='right'>
            <div className='price green'>+$400</div>
            <div className='datetime'>2024-01-16</div>
          </div>   
        </div>

        <div className='transaction'>
          <div className='left'>
            <div className='name'>Iphone</div>
            <div className='description'>it was time for new tv</div>
          </div>
          <div className='right'>
            <div className='price red'>-$900</div>
            <div className='datetime'>2024-01-16</div>
          </div>   
        </div>

      </div>
    </main>
  );
}

export default App;
