import { Button, ButtonGroup, Grid } from "semantic-ui-react";
import { auth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Buttons = () => {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {}
  };
  onAuthStateChanged(auth, (user) => {
    if (user != null) {
    } else {
    }
  });
  return (
    <div className="buttons">
      <Grid verticalAlign="middle">
        <Grid.Row>
          <Grid.Column>
            <ButtonGroup>
              <Button onClick={logout}>Sign Out</Button>
            </ButtonGroup>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
export default Buttons;
