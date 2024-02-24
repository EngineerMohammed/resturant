import React from "react";
import { Roll } from "react-awesome-reveal";
import { Col, Row } from "react-bootstrap";

// to filter by category
const Catogery = ({ filterbyCategory, allCtegory }) => {
  const onFilter = (cat) => {
    filterbyCategory(cat);
  };

  return (
    <Row className="my-2 mb-5">

      <Col sm="12" className="d-flex justify-content-center">
      <Roll>    {allCtegory.length>=1?(allCtegory.map((cat)=>{
        return (
          <div>
            <button
              onClick={() => onFilter(cat)}
              className="btn-primary mx-2"
              style={{ border: "1px solid #b45b35" }}
            >
              {cat}
            </button>



          </div>
        );

      })):(<h4> لا يوجد تصنيفات</h4>)}
</Roll>
  
      </Col>
    </Row>
  );
};

export default Catogery;
