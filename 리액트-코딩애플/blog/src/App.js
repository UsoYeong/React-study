/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [logo, setLogo] = useState('ReactBlog');
  let [글제목, 글제목변경] = useState(['남자 코트 추천 ', '강남 우동 맛집 ', '파이썬 독학 ']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color : 'red', fontSize : '16px'}}>{ logo }</h4>
      </div>

      <button onClick={ function() {
        let copy = [...글제목]
        copy.sort();
        글제목변경(copy)
      }}>가나다순 정렬</button>

      {
        글제목.map(function(e, i) {
          return (
            <div className='list'>
              <h4 onClick={()=>{setModal(true); setTitle(i)}}>
                { 글제목[i] } 
                <button onClick={()=>{ // state가 array자료일땐 복사부터 하고 그거 수정
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1
                  따봉변경(copy)
                  }}>👍</button> {따봉[i]} </h4>
              <p>2월 17일 발행</p>
              <button onClick={()=>{
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy)
              }}>삭제</button>
            </div>
          )
        })
      }

<input onChange={(e)=>{ 
  입력값변경(e.target.value) 
  }}/>
<button onClick={()=>{
  let copy = [...글제목];
  copy.unshift(입력값);
  글제목변경(copy)
}}>글발행</button>

{ // false : 기본값, 안보임
  modal == true 
  ? <Modal title={title} 글제목변경={글제목변경} 글제목={글제목}/>
  : null
}
    </div>
  );
}

function Modal(props) {
  return (
      <div className='modal'>
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>    
  )
}

export default App;
