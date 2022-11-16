import { Grid, Segment } from "semantic-ui-react";
function Shelves() {
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
    </div>
  );
}
export default Shelves;
