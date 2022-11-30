import {
  Card,
  Button,
  Segment,
  Modal,
  Input,
  FormField,
  TextArea,
  Label,
} from "semantic-ui-react";
import { useState, useEffect } from "react";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
function Shelves() {
  const deleteBook = async (id) => {
    const bookDoc = doc(db, "books", id);
    await deleteDoc(bookDoc);
  };
  const initValues = {
    book: "",
    fname: "",
    lname: "",
    bnotes: "",
    bdescrip: "",
    release: "",
  };

  const [books, setBooks] = useState([]);
  const [open, setOpen] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [values, setValues] = useState(initValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const [bookErrors, setBooksErrors] = useState({});
  const [curBook, setCurBook] = useState("");

  const addBookCollection = collection(db, "books");
  useEffect(() => {
    const getBooks = async () => {
      const data = await getDocs(addBookCollection);
      setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    if (Object.keys(bookErrors).length === 0 && isSubmit) {
      updateBook(curBook.id);
    }
    getBooks();
  }, [bookErrors]);

  const openEdit = async () => {
    setEditForm(true);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(name, value);
  };

  const handleOnClick = (id) => {
    const b = books.find((book) => {
      return id === book.id;
    });
    setCurBook(b);
  };
  console.log(curBook);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooksErrors(validate(values));
    setIsSubmit(true);
  };

  const updateBook = async (id) => {
    const bookDoc = doc(db, "books", id);

    await updateDoc(bookDoc, values);
    setEditForm(false);
    setOpen(false);
  };
  const validate = (values) => {
    const errors = {};
    if (!values.book) {
      errors.book = "Book Title is Required!";
    }
    if (!values.fname) {
      errors.fname = "Author Name Is Required!";
    }
    if (!values.lname) {
      errors.lname = "Author Name Is Required!";
    }
    if (!values.release) {
      errors.release = "Book Title is Required!";
    }
    if (!values.bdescrip) {
      errors.bdescrip = "Author Name Is Required!";
    }
    if (!values.bnotes) {
      errors.bnotes = "Author Name Is Required!";
    }
    return errors;
  };

  return (
    <div className="shelves">
      <div className="read">
        <Segment padded="very">
          Your Books
          {books.map((book, idx) => {
            return (
              <Card key={idx} color="pink">
                <Card.Content>
                  Title of Book: {book.book}
                  <br></br>
                  Author's First Name: {book.fname}
                  <br></br>
                  Author's Last Name: {book.lname}
                  <br></br>
                  Release Date: {book.release}
                  <br></br>
                  Book Description: {book.bdescrip}
                  <br></br>
                  Notes: {book.bnotes}
                  <Button
                    onClick={() => {
                      deleteBook(book.id);
                    }}
                  >
                    Delete Book
                  </Button>
                  <Modal
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={
                      <Button
                        onClick={() => {
                          handleOnClick(book.id);
                        }}
                      >
                        View/Edit Book
                      </Button>
                    }
                  >
                    <Modal.Header>Book Details</Modal.Header>
                    {!editForm ? (
                      <Modal.Content>
                        <Input
                          disabled
                          type="text"
                          value={curBook.book}
                          label="Book Title"
                        ></Input>
                        <Input
                          disabled
                          type="text"
                          value={curBook.fname}
                          label="Author First Name"
                        ></Input>
                        <Input
                          disabled
                          type="text"
                          value={curBook.lname}
                          label="Author Last Name"
                        ></Input>
                        <Input
                          disabled
                          type="text"
                          value={curBook.release}
                          label="Release Date"
                        ></Input>
                        <Input
                          disabled
                          type="text"
                          value={curBook.bdescrip}
                          label="Book Title"
                        ></Input>
                        <Input
                          disabled
                          type="text"
                          value={curBook.bnotes}
                          label="Notes"
                        ></Input>
                        <Button
                          type="button"
                          onClick={() => {
                            openEdit();
                          }}
                        >
                          Edit
                        </Button>
                      </Modal.Content>
                    ) : (
                      <Modal.Content>
                        {bookErrors.book ? (
                          <Label basic color="red" pointing size="tiny">
                            {bookErrors.book}
                          </Label>
                        ) : null}
                        <Input
                          type="text"
                          value={values.book}
                          label="Book Title"
                          name="book"
                          onChange={handleOnChange}
                        ></Input>
                        {bookErrors.book ? (
                          <Label basic color="red" pointing size="tiny">
                            {bookErrors.fname}
                          </Label>
                        ) : null}
                        <Input
                          type="text"
                          value={values.fname}
                          label="Author First Name"
                          name="fname"
                          onChange={handleOnChange}
                        ></Input>
                        {bookErrors.book ? (
                          <Label basic color="red" pointing size="tiny">
                            {bookErrors.lname}
                          </Label>
                        ) : null}
                        <Input
                          type="text"
                          value={values.lname}
                          label="Author Last Name"
                          name="lname"
                          onChange={handleOnChange}
                        ></Input>
                        {bookErrors.book ? (
                          <Label basic color="red" pointing size="tiny">
                            {bookErrors.release}
                          </Label>
                        ) : null}
                        <Input
                          type="text"
                          value={values.release}
                          label="Release Date"
                          name="release"
                          onChange={handleOnChange}
                        ></Input>
                        {bookErrors.book ? (
                          <Label basic color="red" pointing size="tiny">
                            {bookErrors.bdescrip}
                          </Label>
                        ) : null}
                        <Input
                          type="text"
                          value={values.bdescrip}
                          label="Book Description"
                          name="bdescrip"
                          onChange={handleOnChange}
                        ></Input>
                        {bookErrors.book ? (
                          <Label basic color="red" pointing size="tiny">
                            {bookErrors.bnotes}
                          </Label>
                        ) : null}
                        <Input
                          type="text"
                          value={values.bnotes}
                          label="Notes"
                          name="bnotes"
                          onChange={handleOnChange}
                        ></Input>
                        <Button
                          color="red"
                          type="button"
                          onClick={() => {
                            setEditForm(false);
                          }}
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={handleSubmit}
                          color="green"
                          type="submit"
                        >
                          Update
                        </Button>
                      </Modal.Content>
                    )}
                  </Modal>
                </Card.Content>
              </Card>
            );
          })}
        </Segment>
      </div>
    </div>
  );
}
export default Shelves;
