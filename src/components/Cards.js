import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Cardsdata from "./CardsData";
import { useDispatch } from "react-redux";

const Cards = () => {
  const [data, setData] = useState(Cardsdata);
const dispatch=useDispatch();

const send=(e)=>{
  console.log(e)

}

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to cart Projects</h2>

      <div className="row d-flex justify-content-center align-items-center">
        {data.map((element, id) => {
          return (
            <>
              <Card style={{ width: "22rem", border:'none' }} className="mx-2 mt-4 card_style">
                <Card.Img variant="top" src={element.imgdata} style={{height:'16rem'}} className="mt-3"/>
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>
                    price:{element.price}
                  </Card.Text>
                  <div className="d-flex justify-content-center">
                  <Button variant="primary" style={{width:'100%'}}
                  onClick={()=>send()}
                  >Add to Cart</Button>
                  </div>
                  
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
