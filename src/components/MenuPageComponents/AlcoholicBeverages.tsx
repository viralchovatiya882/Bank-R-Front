"use client";
import React from "react";

import { Col, Container, Row } from "react-bootstrap";
const items = [
    {
      cardHeading: "Baked potato Pizza",
      cardSubtext: "Potato/Bread/Onion",
      cardPrice: "$15",
      isStar: "",
    },
    {
      cardHeading: "Roasted Red Potatoes ",
      cardSubtext: "Potato/Bread/Onion",
      cardPrice: "$12.5",
      isStar: "*",
      isOrder: "order",
    },
    {
      cardHeading: "Baked potato Pizza",
      cardSubtext: "Potato/Bread/Onion",
      cardPrice: "$15",
      isStar: "",
    },
    {
      cardHeading: "Roasted Red Potatoes ",
      cardSubtext: "Potato/Bread/Onion",
      cardPrice: "$12.5",
      isStar: "",
    },
    {
      cardHeading: "Baked potato Pizza",
      cardSubtext: "Potato/Bread/Onion",
      cardPrice: "$15",
      isStar: "",
    },
    {
      cardHeading: "Roasted Red Potatoes ",
      cardSubtext: "Potato/Bread/Onion",
      cardPrice: "$12.5",
      isStar: "",
    },
    {
      cardHeading: "Roasted Red Potatoes ",
      cardSubtext: "Potato/Bread/Onion",
      cardPrice: "$12.5",
      isStar: "",
    },
    {
      cardHeading: "Baked potato Pizza",
      cardSubtext: "Potato/Bread/Onion",
      cardPrice: "$15",
      isStar: "",
    },
    {
      cardHeading: "Roasted Red Potatoes ",
      cardSubtext: "Potato/Bread/Onion",
      cardPrice: "$12.5",
      isStar: "",
    },
  ];
const AlcoholicBeverages = () => {
  return (
    <div className="maincourse-container menupage-alcoholic_container">
    <div className="inner-wrapper">
      <h2>ALCOHOLIC BEVERAGES</h2>
    </div>
    <div className="card-wrapper">
      <Container>
        <Row>
          {items.length > 0
            ? items.map((item, index: any) => {
                return (
                  <Col
                    lg={4}
                    xs={12}
                    style={{ marginTop: "30px" }}
                    key={index}
                  >
                    <div className="inner-cardwrapper">
                      <h4>
                        <span className="cardheading">{item.cardHeading}</span>
                        <span className="currency">{item.cardPrice}</span>
                      </h4>
                      <p >
                        <span className="cardsubtext">{item.cardSubtext}</span>
                        {item.isOrder ? (
                          <span className="order">{item.isOrder}</span>
                        ) : (
                          ""
                        )}
                        {item.isStar ? <span className="star">{item.isStar}</span> : ""}
                      </p>
                    </div>
                  </Col>
                );
              })
            : ""}
        </Row>
      </Container>
    </div>
  </div>
  )
}

export default AlcoholicBeverages