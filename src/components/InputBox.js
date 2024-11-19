import React from "react";


function InputBox({
    label,
    amount,
    onAmountChange,
    oncurrencyChange,
    currencyOptions = [],
    selectCurreancy = "usd",
}){    

    return(
        <div className="input-box">
            <label >{label}</label>
            <input
                type="number"
                placeholder="amount"
                value={amount}
                onChange={(e) =>{onAmountChange && onAmountChange(Number(e.target.value))}} />
                <select
                value={selectCurreancy}
                onChange={(e)=>{oncurrencyChange && oncurrencyChange(e.target.value)}}>
                    {currencyOptions.map((currencyName) =>(
                        <option key={currencyName}> 
                            {currencyName}
                        </option>
                    ))}
                </select>
        </div>
    )
}

export default InputBox;