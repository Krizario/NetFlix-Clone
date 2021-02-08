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

export default function Signin() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const isInvalid = password == "" || email === "";
  const handleSignIn = (event) => {
    event.preventDefault();

    // Firebase Auth
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>S'identifier</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              placeholder="Adresse E-mail"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              placeholder="Mot de passe"
              value={password}
              type="password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              S'identifier
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Première visite sur Netflix ?{" "}
            <Form.Link to="/signup">Inscrivez-vous.</Form.Link>
          </Form.Text>
          <Form.TextSmall>NetFlix Clone By ZaHiD</Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer></FooterContainer>
    </>
  );
}
