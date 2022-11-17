import { Modal, Button, Form, Grid } from "semantic-ui-react";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  getDocs,
  addDoc,
  collection,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const AddBook = () => {
  const [bookName, setBookName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [open, setOpen] = useState(false);
  const addBookCollection = collection(db, "books");
  const createBook = async () => {
    await addDoc(addBookCollection, {
      book: bookName,
      fname: firstName,
      lname: lastName,
    });
  };
  /*   useEffect(() => {
    const getBooks = async () => {
      const booksData = await getDocs(addBookCollection);
      setBooks(
        booksData.docs.map((doc) => ({ ...doc.booksData(), id: doc.id }))
      );
    };
    getBooks();
  }, []); */
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
                  <input
                    placeholder="Name of book..."
                    onChange={(event) => {
                      setBookName(event.target.value);
                    }}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Author's First Name:</label>
                  <input
                    placeholder="Author's First Name..."
                    onChange={(event) => {
                      setFirstName(event.target.value);
                    }}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Author's Last Name:</label>
                  <input
                    placeholder="Author's Last Name..."
                    onChange={(event) => {
                      setLastName(event.target.value);
                    }}
                  />
                </Form.Field>
                <Button type="submit" onClick={createBook}>
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
