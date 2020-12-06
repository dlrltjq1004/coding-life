import React, { useState } from 'react';

class Example_class extends React.Component {

  state = {
      
    count: 0,

  }

  render() {

      return (
      <div>
      <p>class: You clicked {this.state.count} times is</p>
      <button onClick={() =>this.setState({ count: this.state.count +1})}>
        Click me
      </button>
      </div>
      );
  }

}

const Example = () => {
    
  const [count, setCount] = useState(0);


  const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
      const {
        target: { value }
      } = event;

      let willUpdate = true;
      if (typeof validator === "function") {
        willUpdate = validator(value);
      }
      if (willUpdate) {
        setValue(value);
      }
    }
    return { value, onChange };
  }

  const valiDator = value => value.length <= 10 && !value.includes(" ");
  const name = useInput("Mr.", valiDator);

  return (
    <div>
      <p>hooks: You clicked {count} times is</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <input placeholder="Name" {...name}/>
    </div>
  );
    }
  
// export default Example_hooks;
export default Example;
