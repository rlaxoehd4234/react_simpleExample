import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Container() {
  const [data, setData] = useState([]); // 데이터를 저장할 상태 초기화

  useEffect(() => {
    // Axios를 사용하여 데이터를 가져와서 상태에 저장
    axios.get('http://localhost:8080/api/item/findAll')
      .then(function (response) {
        setData(response.data); // 데이터를 상태에 저장
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

  // 데이터를 사용하여 UI를 생성
  return (
    <div className="container">
      <div className="row">
        {data.map((item) => (
          <div className="col-md-4 grid" key={item.id}>
            <img src='jpa.jpeg' alt="이미지 들어갈 예정" />
            <h5>{item.name}</h5>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Container;
