import React from 'react';

class MultiplicationTable extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    value: '',
    result: '',
    }
   }

// 문제 출제 => 
// x곱하기 y는?
// x, y 1 ~ 9 랜덤 값

// input 이벤트 => 
// input 값 제출 -> 결과 계산 -> 결과 출력
// 출제 문제 계산 후 input 값 과 비교
// 정답 결과 출력

handleSubmit = (e) => {
    e.preventDefault();
    if(parseInt(this.state.value) === this.state.first * this.state.second) {
     this.setState({
         result: this.state.value +' 정답',
         first: Math.ceil(Math.random() * 9),
         second: Math.ceil(Math.random() * 9),
         value: '',
     });
    } else {
        this.setState({
         result: '땡',
         value: '',
        })
    }
}

onChange = (e) => this.setState({ value: e.target.value });

   render() {
       return (
           <div>
               <h1 >구구단</h1>
                <p>{this.state.first} 곱하기 {this.state.second} 은?</p>
               <form onSubmit={this.handleSubmit}>
               <input type='number' value={this.state.value} onChange={this.onChange} />
               <button>확인</button>               
               </form>
               <p>{this.state.result}</p>
           </div>
       );
   }
}

export default MultiplicationTable;