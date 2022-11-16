import Nav from "../components/Nav";
import Shelves from "../components/Shelves";
import Buttons from "../components/BottomButtons";
import AddBook from "../components/Modal";
import "./Bookshelf.css";

function Bookshelf() {
  return (
    <div className="Books">
      <Nav />
      <Shelves />
      <Buttons />
      <AddBook />
    </div>
  );
}

export default Bookshelf;
