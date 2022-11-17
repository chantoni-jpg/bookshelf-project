import { Card, Button, Segment } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
function Shelves() {
  const deleteBook = async (id) => {
    const bookDoc = doc(db, "books", id);
    await deleteDoc(bookDoc);
  };

  const [books, setBooks] = useState([]);
  const addBookCollection = collection(db, "books");
  useEffect(() => {
    const getBooks = async () => {
      const data = await getDocs(addBookCollection);
      setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
    };
    getBooks();
  });
  return (
    <div className="shelves">
      <Segment inverted color="grey" padded="very">
        Read
      </Segment>
      <Segment inverted color="grey" padded="very">
        Currently Reading
      </Segment>
      <Segment inverted color="grey" padded="very">
        Finished
      </Segment>
      <div>
        {books.map((book) => {
          return (
            <Card>
              <Card.Content>
                Title of Book: {book.book}
                <br></br>
                Author's First Name: {book.fname}
                <br></br>
                Author's Last Name: {book.lname}
                <Button>Edit Card</Button>
                <Button
                  onClick={() => {
                    deleteBook(book.id);
                  }}
                >
                  Delete Card
                </Button>
              </Card.Content>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
export default Shelves;
