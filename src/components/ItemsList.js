import React from "react";
import { Zoom } from "react-awesome-reveal";
import { Card, Col, Row } from "react-bootstrap";

const ItemsList = ({ itemsData }) => {
  return (
    <Row>
      {itemsData.length >= 1 ? (
        itemsData.map((item) => {
          return (
            <Zoom>
              <Col sm="12" className="mb-3" key={item.id}>
                <Card
                  className="d-flex flex-row"
                  style={{ backgroundColor: "#f8f8f8" }}
                >
                  <Card.Img
                    src={item.imgUrl}
                    variant="top"
                    className="img-item"
                  />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                      <div className="item-title">{item.title} </div>
                      <div className="item-price">{item.price} </div>
                    </Card.Title>

                    <Card.Text className="py-2">
                      <div className="item-description">
                        {item.description}{" "}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Zoom>
          );
        })
      ) : (
        <h3> لا يوجد أصناف </h3>
      )}
    </Row>
  );
};

export default ItemsList;
