import React  from 'react'
import {useState}   from 'react'
import {Form,Button,Card,Row, Col} from 'react-bootstrap'
import data from '../store/data'
// import logo from '../logo.svg';

export default function FormAdd() {
  const [newComment,setNewComment]=useState("")
  const [newImage,setNewImage]=useState("")
  const [newData,setNewData]=useState(data)

  const handleSubmitForm= (e)=>{
    const comment={
      fullName:newComment,
      img: newImage,
    }
    data.name.push(comment)
    setNewData(data)
}
const handleChange = event => {
  setNewComment(event.target.value);

};
const onChangeNewImage  = event => {
  setNewImage(event.target.value);

};
  return (
    <>
      <Form.Label htmlFor="inputPassword5" >Nhập tên</Form.Label>
      <Form.Control
         type='text'
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        value={newComment}
        onChange={handleChange}
      />
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Multiple files input example</Form.Label>
        <Form.Control type="file" onChange={onChangeNewImage} multiple />
      </Form.Group>
      <div style={{textAlign: 'center'}}>
      <Button onClick={handleSubmitForm}>OKE</Button>
      </div>
      <Row xs={1} md={4} className="g-4">
      {newData.name.map((product, index) =>(
        <Col key={index}>
          <Card>
            <Card.Img variant="top" style={{ maxHeight :"500px"}}  src={product.img} />
            <Card.Body style={{color: 'black'}}>
              <Card.Title>{product.fullName}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
      
    </>

  )
}

