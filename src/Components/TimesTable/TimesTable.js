import React from 'react';

class TimesTable extends React.Component {
   
    
    state = {
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    value: '',
    result: '',
    }

handleSubmit = (e) => {
    e.preventDefault();
    if(parseInt(this.state.value) === this.state.first * this.state.second) {
     this.setState((prevState) => {
         return { 
            result: prevState.value +' 정답',
            first: Math.ceil(Math.random() * 9),
            second: Math.ceil(Math.random() * 9),
            value: '',
         }
     });
    } else {
        this.setState({
         result: '땡',
         value: '',
        })
    }
    this.input.focus();
}

input;
onRefInput = (input) => { this.input = input;}

onChange = (e) => this.setState({ value: e.target.value });


   render() {
       return (
           <>
               <h1 >구구단</h1>
                <p>{this.state.first} 곱하기 {this.state.second} 은?</p>
               <form onSubmit={this.handleSubmit}>
               <input type='number' ref={this.onRefInput} value={this.state.value} onChange={this.onChange} />
               <button>확인</button>               
               </form>
               <p>{this.state.result}</p>
           </>
       );
   }
}

export default TimesTable;