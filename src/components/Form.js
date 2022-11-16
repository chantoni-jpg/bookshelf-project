import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { Button, Form, Grid, GridColumn, Header } from "semantic-ui-react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function FormForHome() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();
  onAuthStateChanged(auth, (user) => {
    if (user != null) {
    } else {
      console.log("no user");
    }
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      navigate("/bookshelf");
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      navigate("/bookshelf");
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Grid centered padded="vertically">
      <Form>
        <GridColumn floated="left">
          <Header>Login</Header>
          <Form.Field style={{ width: "200px" }}>
            <label>Email</label>
            <input
              placeholder="Email..."
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            />
          </Form.Field>

          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            />
          </Form.Field>
          <Button onClick={login} type="submit">
            Log In
          </Button>
        </GridColumn>
      </Form>
      <Form>
        <GridColumn floated="right">
          <Header>Sign Up</Header>
          <Form.Field style={{ width: "200px" }}>
            <label>Email</label>
            <input
              placeholder="Email..."
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
            />
          </Form.Field>

          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            />
          </Form.Field>
          <Button onClick={register} type="submit">
            Register Account
          </Button>
        </GridColumn>
      </Form>
    </Grid>
  );
}

export default FormForHome;
