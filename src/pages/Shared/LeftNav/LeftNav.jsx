import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import first from "../../../assets/1.png";
import second from "../../../assets/2.png";
import third from "../../../assets/3.png";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://the-news-dragon-server-bakiabdullah.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h4 className="pt-4">All Category</h4>
      <div className="ps-4">
        {categories.map((category) => (
          <p>
            <Link
              to={`/category/${category.id}`}
              className="text-decoration-none text-secondary fw-semibold"
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
      <div>
        <Row xs={1} md={1} lg={1} className="g-4 mt-3">
          <Col>
            <Card>
              <Card.Img variant="top" src={first} />
              <Card.Body>
                <Card.Title>
                  Bayern Slams Authorities Over Flight Delay to Club World Cup
                </Card.Title>
                <Card.Text className="fw-semibold">Sports</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={second} />
              <Card.Body>
                <Card.Title>
                  Bayern Slams Authorities Over Flight Delay to Club World Cup
                </Card.Title>
                <Card.Text className="fw-semibold">Sports</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={third} />
              <Card.Body>
                <Card.Title>
                  Bayern Slams Authorities Over Flight Delay to Club World Cup
                </Card.Title>
                <Card.Text className="fw-semibold">Sports</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LeftNav;
