import React from "react";
import faqData from "../fixtures/faq.json";

import { Accordion, OptForm } from "../components";

export function FaqContainer() {
  return (
    <Accordion>
      <Accordion.Title>Questions fréquemment posées</Accordion.Title>
      {faqData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <Accordion.Item />
      <OptForm>
        <OptForm.Input placeholder="Adresse e-mail" />
        <OptForm.Button>Commencer</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous
          abonner ou réactiver votre abonnement.
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
}
