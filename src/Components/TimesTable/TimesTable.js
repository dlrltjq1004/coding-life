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

 componentDidMount() {
     console.log("DidMount: 컴포넌트 렌더링 완료 후 1번만 실행 / 새로고침되면 다시 실행됨 어떤 경우 사용하는게 좋을까? 1.타이머(알림, 팝업, 전광판 회전 등)");
 }

 componentWillUnmount() {
    console.log("WillUnmount: 컴포넌트가 DOM 상에서 제거될 때에 호출됩니다.");

 }

componentDidUpdate() {
    console.log("DidUpdate: 컴포넌트가 업데이트 될때 마다 실행");

}

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