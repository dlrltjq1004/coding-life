import React, { useState, useEffect, useRef } from 'react';
import { useInput }  from './useInput';
import { useTabs }  from './useTabs';

const Example = () => {
  
// useState
  const [count, setCount] = useState(0);
  
// useTabs
const content = [
  {
    tab: "Section 1",
    content: "Section 1의 내용"
  },
  {
    tab: "Section 2",
    content: "Section 2의 내용"
  }
];

  const { currentItem, changeItem } = useTabs(0, content);

// useInput  
  const valiDator = value => value.length <= 10 && !value.includes(" ");
  const name = useInput("Mr.", valiDator);

// useTitle
const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);

  return setTitle;
}
const titleUpdater = useTitle("Loading..."); 
setTimeout(() => titleUpdater("Home"), 5000);

// useRef
const refInput = useRef();


// useClick
const useClick = onClick => {

  const element = useRef();

  useEffect(() => {

    if (typeof onClick !== "function") {
      return;
    }

    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick)
      }
    }
  }, []);

  return element;
}
const sayHello = () => { console.log("hello") }
const hello = useClick(sayHello);


  return (
    <div>
      {/* useState */}
      <section>
      <h4>useState</h4>
      <span>count: {count} </span>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      </section>

      {/* useInput */}
      <section>
      <h4>useInput</h4>
      <input placeholder="Name" {...name}/> 
      </section>

      {/* useTabs */}
      <section>
      <h4>useTabs</h4>
      {content.map((section, index) => {
        return <button onClick={() => changeItem(index)}>{section.tab}</button>;
      })}
      <div>{currentItem.content}</div>
      </section>

      {/* useTitle */}
      <section>
      <h4>useTitle</h4>
      <p>Page Title: Loading... 5초뒤 Home으로 변경</p>
      </section>

      {/* useRef */}
      <section>
      <h4>useRef</h4>
      <input ref={refInput}/>
      <button onClick={() => refInput.current.focus()}>input focus</button>
      </section>

      {/* useClick */}
      <section>
      <h4>useClick</h4>
      <p ref={hello}>Hello</p>

      </section>
    </div>
  );
}
  
export default Example;
