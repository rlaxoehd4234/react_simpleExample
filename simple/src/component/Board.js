import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';

function Post() {
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

  return (
    <ListGroup>
      {data.map((item, index) => (
        <ListGroup.Item key={index}>{item.item_no} {item.name} {item.regDate}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default Post;
