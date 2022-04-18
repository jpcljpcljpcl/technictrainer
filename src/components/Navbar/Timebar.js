import Badge from 'react-bootstrap/Badge';
import {Row} from 'react-bootstrap';

export default function Timebar() {
  return (
    <div>
    <Row className="justify-content-md-center">
    <Badge pill bg="secondary">{new Date().toLocaleString() + ""}</Badge>
    </Row>
    <br /></div>
  )
}
