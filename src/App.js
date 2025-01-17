import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {

  const[name,setName] = useState('');
  const[datetime, setDatetime] = useState('');
  const[description, setDescription] = useState('');
  const[transactions,setTransactions] = useState([]);

  useEffect(() => {
      getTransactions().then(setTransactions);
      console.log(transactions);    
    },[]);

    
  async function getTransactions() {
    const url = `${process.env.REACT_APP_API_URL}/transactions`;
    const response = await fetch(url);
    const json = await response.json();
    return json;
    
  }



function addNewTransaction(ev) {
  ev.preventDefault();
  
  const url = `${process.env.REACT_APP_API_URL}/transaction`;  // Corrected string interpolation

  const price = parseFloat(name.split(' ')[0]);  // Convert the price to a number

  
  const value = { 
    price: parseFloat(price), // Ensure price is a number
    name: name.substring(price.length + 1),
    description, 
    datetime 
  };
  
  

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(value),  // Corrected JSON.stringify
  })
  .then(response => response.json())  // Ensuring the response is in JSON format
  .then(json => {
    setName('');
    setDatetime('');
    setDescription('');
    getTransactions(); 
    console.log('result', json);  // Log the result
  })
  .catch(error => {
    console.error('Error:', error);  // Catch any errors
  });
}


let balance = 0;
for(const transaction of transactions) {
  balance = balance + transaction.price;
}

balance = balance. toFixed(2);
const fraction = balance.split('.')[1];
balance = balance.split('.')[0];

  return (
    <main>
      <h1>${balance}<span>.{fraction}</span></h1>
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
      {transactions.length > 0 && transactions.map( transaction => (
  <div className='transaction' key={transaction._id}>
    <div className='left'>
      <div className='name'>{transaction.name}</div>
      <div className='description'>{transaction.description}</div>
    </div>
    <div className='right'>
      <div className={"price " + (transaction.price < 0 ? 'red' : 'green')}>
        {transaction.price}
      </div>
      <div className='datetime'>{transaction.datetime}</div>
    </div>   
  </div>
))}



        {/* <div className='transaction'>
          <div className='left'>
            <div className='name'>New Samsung TV</div>
            <div className='description'>it was time for new tv</div>
          </div>
          <div className='right'>
            <div className='price red'>-$500</div>
            <div className='datetime'>2024-01-16</div>
          </div>   
        </div> */}

        {/* <div className='transaction'>
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
        </div> */}

      </div>
    </main>
  );
}

export default App;
