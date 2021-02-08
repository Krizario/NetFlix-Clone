import React, { useState, useContext } from "react";
import * as ROUTES from "../constants/routes";
import { useHistory } from "react-router-dom";
// Firebase
import { FirebaseContext } from "../context/firebase";
// Containers
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";

// Components
import { Form } from "../components";

function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const isInvalid = firstName === "" || email === "" || password === "";
  const handleSignup = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          });
      })
      .catch((error) => {
        setFirstName("");
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Inscription</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base method="POST" onSubmit={handleSignup}>
            <Form.Input
              placeholder="Pseudo"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />

            <Form.Input
              placeholder="Email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />

            <Form.Submit type="submit" disbaled={isInvalid}>
              Valider
            </Form.Submit>

            <Form.Text>
              Déjà Client NETFLIX ?{" "}
              <Form.Link to="/signin">Connectez-vous</Form.Link>
            </Form.Text>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer></FooterContainer>
    </>
  );
}

export default Signup;
