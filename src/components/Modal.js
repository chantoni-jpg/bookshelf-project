import { Modal, Button, Form, Grid, TextArea } from "semantic-ui-react";
import { useState } from "react";
import { db } from "../firebase";
import {
  getDocs,
  addDoc,
  collection,
  updateDoc,
  doc,
} from "firebase/firestore";

const AddBook = () => {
  const [bookName, setBookName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [notes, setNotes] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);
  const addBookCollection = collection(db, "books");
  const createBook = async () => {
    await addDoc(addBookCollection, {
      book: bookName,
      fname: firstName,
      lname: lastName,
      bnotes: notes,
      bdescrip: description,
      release: releaseDate,
    });
  };

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
                  <label>Book Title:</label>
                  <input
                    placeholder="Name of book..."
                    onChange={(event) => {
                      setBookName(event.target.value);
                    }}
                  />
                  <label>Author's First Name:</label>
                  <input
                    placeholder="Author's First Name..."
                    onChange={(event) => {
                      setFirstName(event.target.value);
                    }}
                  />
                  <label>Author's Last Name:</label>
                  <input
                    placeholder="Author's Last Name..."
                    onChange={(event) => {
                      setLastName(event.target.value);
                    }}
                  />
                  <label>Book Description:</label>
                  <input
                    placeholder="Description..."
                    onChange={(event) => {
                      setDescription(event.target.value);
                    }}
                  />
                  <label>Release Date:</label>
                  <input
                    placeholder="Release Date..."
                    onChange={(event) => {
                      setReleaseDate(event.target.value);
                    }}
                  />
                  <label>Notes:</label>
                  <TextArea
                    placeholder="Notes..."
                    onChange={(event) => {
                      setNotes(event.target.value);
                    }}
                  />
                  <Button.Group>
                    <Button>Currently Reading</Button>
                    <Button>Finished</Button>
                  </Button.Group>
                </Form.Field>
                <Button
                  type="submit"
                  onClick={() => {
                    createBook();
                  }}
                >
                  Add Book
                </Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Modal.Content>
    </Modal>
  );
};

export default AddBook;
