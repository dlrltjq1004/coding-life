import React, { useState, useRef } from 'react';

const TimesTable = () => {

   const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
   const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
   const [value, setValue] = useState("");
   const [result, setResult] = useState("");
   const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(parseInt(value) === first * second) {
        setResult((prevResult) => { return prevResult.value + " 정답"; });
        setFirst(Math.ceil(Math.random() * 9));
        setSecond(Math.ceil(Math.random() * 9));
        setValue("");
        inputRef.current.focus();
    } else {
        setResult("땡");
        setValue("");
        inputRef.current.focus();
    }
}

const onChange = (e) => { setValue(e.target.value); };

    return (
        <>
        <h1 >구구단</h1>
         <p>{first} 곱하기 {second} 은?</p>
        <form onSubmit={handleSubmit}>
        <input type='number' ref={inputRef} value={value} onChange={onChange} />
        <button>확인</button>               
        </form>
        <p>{result}</p>
    </>
    );
}

export default TimesTable;