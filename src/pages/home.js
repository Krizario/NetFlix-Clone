import React from "react";
import { OptForm, Feature } from "../components";
import { HeaderContainer } from "../containers/header";
import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { FaqContainer } from "../containers/faq";

function home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Films, séries TV et bien plus en illimité.
          </Feature.Title>
          <Feature.SubTitle>
            Où que vous soyez. Annulez à tout moment.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Adresse e-mail" />
            <OptForm.Button>Commencer</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous
              abonner ou réactiver votre abonnement.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
}

export default home;
