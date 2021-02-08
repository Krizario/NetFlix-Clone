import React from "react";

import {
  Container,
  Title,
  SubTitle,
  Actors,
  ActorInfo,
} from "./styles/feature";

export default function Feature({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Feature.ActorBio = function FeatureActorBio({ children, ...restProps }) {
  return <p {...restProps}>{children}</p>;
};

Feature.ActorInfo = function FeatureActorInfo({ children, ...restProps }) {
  return <ActorInfo {...restProps}>{children}</ActorInfo>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Feature.Actors = function FeatureActors({ children, ...restProps }) {
  return <Actors {...restProps}>{children}</Actors>;
};
