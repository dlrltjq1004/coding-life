import React, { useState, useRef } from 'react';
import { useInput }  from './useInput/useInput';
import { useTabs }  from './useTabs/useTabs';
import { useClick }  from './useClick/useClick';
import { useTitle }  from './useTitle/useTitle';
import { useBeforeLeave }  from './useBeforeLeave/useBeforeLeave';
import { useFadeIn }  from './useFadeIn/useFadeIn';
import { useNetwork }  from './useNetwork/useNetwork';
import { useScroll }  from './useScroll/useScroll';
import { useFullscreen }  from './useFullscreen/useFullscreen';
import { useNotification } from './useNotification/useNotification';
import useAxios  from './useAxios/useAxios';


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
const titleUpdater = useTitle("Loading..."); 
setTimeout(() => titleUpdater("Home"), 5000);

// useRef
const refInput = useRef();

// useClick
const sayHello = () => { console.log("hello") }
const hello = useClick(sayHello);

// useBeforeLeave
const begForLife = () => console.log("Pls dont leave");
useBeforeLeave(begForLife);

// useFadeIn
const fadeInH1 = useFadeIn(1, 5);
const fadeInP = useFadeIn(5, 10);

// useNetwork
const handleNetworkChange = online => {
    console.log(online ? "We just went online" : "We are offline");
}
const onLine = useNetwork(handleNetworkChange);

// useScroll
const { y } = useScroll();

// useFullscreen
const onFullS = isFull => {
  console.log(isFull ? "We are full" : "We are small");
}
const  { element, triggerFull, exitFull } = useFullscreen(onFullS);

// useNotification
const triggerNotif = useNotification("Can I steal your kimchi?");

// useAxios
const { loading, data, error, refetch } = useAxios({
  url: "https://cors-anywhere.herokuapp.com/https://yts.am/api/v2/list_movies.json"
});


return (
    <div style={{ height: "1000vh" }}>
      {/* useState */}
      <section>
      <p><b>useState: </b> 클릭시 count 증가</p>
      <span>count: {count} </span>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      </section>

      {/* useInput */}
      <section>
      <p><b>useInput: </b> input 이벤트 및 유효성 검사 공백 불가, 최대 10자</p>
      <input placeholder="Name" {...name}/> 
      </section>

      {/* useTabs */}
      <section>
      <p><b>useTabs: </b> 클릭 버튼에 따라 다른 내용 표시</p>
      {content.map((section, index) => {
        return <button onClick={() => changeItem(index)}>{section.tab}</button>;
      })}
      <div>{currentItem.content}</div>
      </section>

      {/* useTitle */}
      <section>
      <p><b>useTitle: </b> Page Title: Loading... 5초뒤 Home으로 변경</p>
      </section>

      {/* useRef */}
      <section>
      <p><b>useRef: </b> Click하면 input focus</p>
      <input ref={refInput}/>
      <button onClick={() => refInput.current.focus()}>Click</button>
      </section>

       {/* useClick */}
       <section>
      <p><b>useClick: </b> 클릭하면 console에 Hello</p>
      <p ref={hello}>Click</p>
      </section>

      {/* useBeforeLeave */}
      <section>
      <p><b>useBeforeLeave: </b> 마우스가 브라우저 최상단으로 이동할때 console log 메시지 출력</p>
      </section>

      {/* useFadeIn */}
      <section>
      <p><b>useFadeIn: </b> 엘리먼트에 Style Trasition과 opacity를 사용</p>
      <span {...fadeInH1}><b>첫번째</b> 엘리먼트: 5초 후 나타난다! </span>
      <span {...fadeInP}><b>두번째</b> 엘리먼트: 10초 후 나타난다!</span>
      </section>

      {/* useNetwork */}
      <section>
      <p><b>useNetwork: 인터넷 연결중 Online 인터넷 연결없음 Offline</b></p>
    <p>{onLine ? "Online" : "Offline" }</p>
      </section>

      {/* useScroll */}
      <section>
      <p><b>useScroll: 스크롤 중일때 ScrollText 빨간색으로 변경</b></p>
    <p style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>ScrollText</p>
      </section>

      {/* useFullscreen */}
      <section>
      <p><b>useFullscreen: </b></p>
      <div ref={element}>
      <img src="https://purr.objects-us-east-1.dream.io/i/qdGID.jpg" width="100"/>
      <button onClick={exitFull} >Exit Screen</button>
      </div>
      <button onClick={triggerFull} >Full Screen</button>
      </section>

       {/* useNotificaction */}
       <section>
      <p><b>useNotificaction: </b></p>
      <button onClick={triggerNotif} >NotificationBtn</button>
      </section>

       {/* useAxios */}
       <section>
      <p><b>useAxios: api data 받기, 실패 처리, 상태코드 얻기, Loading  </b></p>
      <p>{data && data.status}</p>
      <p>{loading && "Loading"}</p>
      <button onClick={refetch} >refetch</button>
      </section>

    </div>
  );
}
  
export default Example;
