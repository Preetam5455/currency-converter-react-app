import { useState } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import useCurrencyInfo from './Hooks/useCurrencyInfo';

function App() {

  const [amount,setAmount] = useState(0)
  const [from,setFrom] = useState("usd");
  const [to,setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState()

  const currencyInfo = useCurrencyInfo(from);  
  const options = Object.keys(currencyInfo)
  

  
  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount);
    setAmount(convertedAmount)
  }

  const convert = ()=> {setConvertedAmount(amount * currencyInfo[to])}

  return (
    <div style={{width:"100%",height:"100vh", backgroundImage:`URL("https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}>
    <h1>Hello React App</h1>
    <form onSubmit={(event)=>{
      event.preventDefault();
      convert()
    }}>

    <InputBox label="from" amount={amount} onAmountChange={(amount)=>setAmount(amount)}  currencyOptions={options} oncurrencyChange={(currancy)=>setFrom(currancy)} selectCurreancy={from}/>
    <button onClick={swap}>swap</button>
    <InputBox label="to" amount={convertedAmount} currencyOptions={options} oncurrencyChange={(currency)=> setTo(currency)} selectCurreancy={to}/>
    <button type='submit'>{from} convert {to}</button>
    </form>
    </div>
  );
}

export default App;
