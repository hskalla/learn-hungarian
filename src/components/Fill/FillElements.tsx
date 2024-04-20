import React from "react";
import { useState, useEffect } from 'react';
import styled from "styled-components";
import "./Fill.css";

export function NameForm() {
    const [value, setValue] = useState('');

    const handleSubmit = (event:any) => {
      event.preventDefault();
      alert(`The name you entered was ${value}`);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
}

export function Fill({questions,answers,description,size}:any) {
  const [show, setShow] = useState(false);

  let initialCorrect:boolean[] = [];
  let arr:number[] = [];
  for(let i:number=1;i<=size;i++) {
    arr.push(i);
    initialCorrect.push(false);
  }
  let initialState = {};

  arr.forEach((element:number) => {
    (initialState as any)[element] = "";
  });

  const [correct, setCorrect] = useState(initialCorrect);
  const [inputs, setInputs] = useState(initialState);
  let inputName = 0;

  const handleChange = (event:any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log(inputs);

    let nextCorrect = correct.map((c, i) => {
      if((inputs as any)[i+1]===answers[i]) {
        console.log(i +" is true");
        return true;
      } else {
        console.log(i +" is false");
        return false;
      }
    });
    setCorrect(nextCorrect);
    setShow(true);
  }

  const fills = arr.map((num) => {
    inputName++;
    return (
      <div key={num}>
        <label>
          {inputName}. {questions[inputName-1]} <br/>
          <Indicator correct={correct[inputName-1]} show={show}/>
          <input
            autoComplete="off"
            type="text"
            value={(inputs as any)[inputName]}
            name={String(inputName)}
            onChange={handleChange}
          ></input>
          <br/> <br/>
        </label>
      </div>
    );
  })

  return (
    <div className="Fill">
      <h3> Check your understanding. </h3>
      <p> {description} </p>
      <form onSubmit={handleSubmit}>
        {fills}
        <input type="submit" />
      </form>
    </div>
  );
}

function Indicator({correct,show}:any) {
  if(show==false) {
    return(<></>);
  }
  if(correct) {
    return(<>✅ </>);
  } else {
    return(<>❌ </>);
  }
}