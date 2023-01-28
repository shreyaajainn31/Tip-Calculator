import React, {useState, useEffect} from 'react';
import './TipCalculator.css';

export default function TipCalculator() {
  // Write your code here.
  const[bill,setBill] = useState(50);
  const[tipPercent, setTipPercent] = useState(18);
  const[people, setPeople]= useState(1);
  const[totalTip, setTotalTip] = useState(9);
  const[tipPerPerson, setTipPerPerson] = useState(9);
  
  const handleBillChange = e => {
    e.preventDefault();
    setBill(e.target.value);
  }
  const handleTipPercentChange = e => {
    e.preventDefault();
    setTipPercent(e.target.value);
  }
  
  const handlePeopleChange = e => {
    e.preventDefault();
    setPeople(e.target.value);
  }

  useEffect(()=>{
    setTotalTip(((tipPercent * bill)/100).toFixed(2));
    setTipPerPerson((((tipPercent * bill)/100)/people).toFixed(2))  
  })

  return (
    <div>

      <form>
      <label for="bill">Bill</label>
        <input type="number" id= "bill" defaultValue = {bill} onChange= {handleBillChange}></input>
        <label for = "tipPercent">Tip Percentage</label>
        <input type="number" id = "tipPercent" defaultValue = {tipPercent} onChange = {handleTipPercentChange}></input>
        <label for = "numPeople"> Number of People</label>
        <input type ="number" id = "numPeople" defaultValue = {people} onChange= {handlePeopleChange}></input>
        <p>
         Total Tip: {totalTip > 0 ? `$${totalTip}` : '-'} </p>
        <p>
         Tip Per Person: {tipPerPerson > 0 ? `$${tipPerPerson}` : '-'}
        </p>
      </form>
    
    </div>
  );
}