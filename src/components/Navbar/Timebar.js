import Badge from 'react-bootstrap/Badge';
import {Row} from 'react-bootstrap';
import { useEffect, useState } from 'react';

export default function Timebar() {

  const [data, setData] = useState(new Date());
  
  
  useEffect(() => {
    const timer = setInterval(()=>setData(new Date()), 1000)
  
    return function cleanup() {
      clearInterval(timer)
  }
  })
  


  return (
    <div>
    <Row className="justify-content-md-center">
    <Badge pill bg="secondary">{data.toLocaleString("pt-PT") + ""}</Badge>
    </Row>
    <br /></div>
  )
}
