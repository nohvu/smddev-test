import axios from "axios";
import React from "react";
import { Form, Button } from "react-bootstrap";
import styles from "./Form.module.scss";
import { IForm } from "../../interfaces/IForm";

export const CreateForm: React.FC = () => {
  const [device, setDevice] = React.useState<IForm>({} as IForm);
  const [changeStatus, setChangeStatus] = React.useState<IForm>({} as IForm);

  const createDevice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setChangeStatus({ ...changeStatus, [name]: value });
    setDevice({ ...device, [name]: value });
  };

  const addDevice = async () => {
    try {
      await axios.post(
        "/api/creater",
        { device },
        {
          headers: { "Content-Type": "application/json" },
        },
      );
      setChangeStatus({ title: "", description: "", memory: "", imgURL: "" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <Form className={styles.form}>
        <h1>Create your device:</h1>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label className={styles.label}>Enter Title:</Form.Label>
          <Form.Control
            onChange={createDevice}
            value={changeStatus.title}
            name="title"
            type="textarea"
            placeholder="Title"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label className={styles.label}>Enter Description:</Form.Label>
          <Form.Control
            onChange={createDevice}
            value={changeStatus.description}
            name="description"
            type="textarea"
            min="1"
            placeholder="Description"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
          <Form.Label className={styles.label}>Enter Memory Size:</Form.Label>
          <Form.Control
            onChange={createDevice}
            value={changeStatus.memory}
            name="memory"
            type="number"
            min="1"
            max="1024"
            placeholder="Memory, GB"
          />
        </Form.Group>
        <Form.Group className="mb-5" controlId="exampleForm.ControlInput4">
          <Form.Label className={styles.label}>Enter Image URL:</Form.Label>
          <Form.Control
            onChange={createDevice}
            value={changeStatus.imgURL}
            name="imgURL"
            type="textarea"
            placeholder="URL"
          />
        </Form.Group>
        <Button onClick={addDevice} type="submit">
          Create
        </Button>
      </Form>
    </div>
  );
};
