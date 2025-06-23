/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [logo, setLogo] = useState('ReactBlog');
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);

  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color : 'red', fontSize : '16px'}}>{ logo }</h4>
      </div>

      <button onClick={ function() {
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy)} }>여자로 변경</button>

      <button onClick={ function() {
        let copy = [...글제목]
        copy.sort();
        글제목변경(copy)
      }}>가나다순 정렬</button>

      {/* <div className='list'>
        <h4>{ 글제목[0] } 
          <span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span> {따봉} 
        </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <button onClick={ function() { setModal(!modal) }}>창 열기</button>
        <p>2월 17일 발행</p>
        { // false : 기본값, 안보임
        modal == true ? <Modal/> : null
      }
        
      </div>
      <div className='list'>
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function(a, i) {
          return (
            <div className='list'>
              <h4 onClick={()=>{setModal(true)}}>{ 글제목[i] } 
                <span onClick={()=>{ // state가 array자료일땐 복사부터 하고 그거 수정
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1
                  따봉변경(copy)
                  }}>👍</span> {따봉[i]} </h4>
              <p>2월 17일 발행</p>
            </div>

          )
        })
      }

{ // false : 기본값, 안보임
        modal == true ? <Modal/> : null
}
        
    </div>
  );
}



function Modal() {
  return (
    <>
      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div> 
    </>   
  )
}

export default App;
