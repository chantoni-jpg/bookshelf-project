import { Modal, Button, Form, Grid } from "semantic-ui-react";
import { useState } from "react";
import { db } from "../firebase";
import {
  getDoc,
  addDoc,
  collection,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const AddBook = () => {
  const [open, setOpen] = useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Add Book</Button>}
    >
      <Modal.Header>Add A Book To Your Shelf</Modal.Header>
      <Modal.Content>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Form>
                <Form.Field>
                  <label>Name of Book:</label>
                  <input placeholder="Name of book..." />
                </Form.Field>
                <Form.Field>
                  <label>Author's First Name:</label>
                  <input placeholder="Author's First Name..." />
                </Form.Field>
                <Form.Field>
                  <label>Author's Last Name:</label>
                  <input placeholder="Author's Last Name..." />
                </Form.Field>
                <Button type="submit">Add Book</Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Modal.Content>
    </Modal>
  );
};

export default AddBook;
