import axios from "axios";
import React from "react";
import { Row, Col, Card, FormControl, Button } from "react-bootstrap";
import styles from "./Catalog.module.scss";
import { BsSearch } from "react-icons/bs";
import { IForm } from "../../interfaces/IForm";

export const Catalog: React.FC = () => {
  const [devices, setDevices] = React.useState<IForm[]>([]);
  const [searchParam, setSearchParam] = React.useState("");

  const getSearch = async () => {
    try {
      await axios.get(`/api/catalog/${searchParam}`).then((res) => setDevices(res.data));
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    axios.get("/api/catalog").then((res) => setDevices(res.data));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>Catalog: </h1>
        <FormControl
          onChange={(e) => setSearchParam(e.target.value)}
          value={searchParam}
          className={styles.search}
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="basic-addon2"
        />
        <Button onClick={getSearch} variant="outline-secondary" id="button-addon2">
          <BsSearch />
        </Button>
      </div>
      <Row xs={1} md={2} lg={4} xl={6} className="g-4">
        {devices.map((obj, idx) => (
          <Col key={obj._id}>
            <Card className={styles.card}>
              <Card.Img
                className={styles.img}
                variant="top"
                src={
                  obj.imgURL ||
                  "https://lite-mobile.ru/image/cache/catalog/import_files/0f/0f4418b82a9511ec837d00155d851b26_0f4418be2a9511ec837d00155d851b26-630x630.jpg"
                }
              />
              <Card.Body>
                <Card.Title>{obj.title}</Card.Title>
                <Card.Text>{obj.memory}GB</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
