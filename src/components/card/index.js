import React, { useState, useContext, createContext } from "react";
import ReactDOM from "react-dom";
import {
  Button,
  Overlay,
  Inner,
  Close,
  ContainerPlayer,
} from "../../components/player/styles/player";

import {
  Group,
  Title,
  SubTitle,
  Text,
  Image,
  Item,
  Player,
  Meta,
  Entities,
  Content,
  Maturity,
  PlayerButton,
  PlayerVideo,
  Feature,
  FeatureTitle,
  FeatureActors,
  FeatureActor,
  FeatureActorBio,
  FeatureActorInfo,
  FeatureClose,
  FeatureText,
  Container,
  FeatureSlider,
  FeatureSliderItem1,
  FeatureSliderItem2,
  FeatureSliderItem3,
  FeatureSliderItem4,
  FeatureSliderItem5,
  FeatureSliderItem6,
} from "./styles/card";

export const PlayerContext = createContext();
var parse = require("html-react-parser");
export const FeatureContext = createContext();
function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});
  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}

Card.Feature = function CardFeature({ children, category, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);
  const [showActor, setShowActor] = useState(false);
  // const [actorData, setActorData] = useState({});
  const [infoData, setInfoData] = useState({
    actor: {
      name: "",
      age: "",
      sex: "",
      bio: "",
      photo: "",
      nationalite: "",
      birthDay: "",
      prices: "",
      career: "",
      nominations: "",
      palmares: "",
    },

    director: {
      id: 4,
      collegeRegion: "south",
    },
  });

  const { showFeature, itemFeature, setShowFeature } = useContext(
    FeatureContext
  );

  //   const { showPlayer, setShowPlayer } = useContext(PlayerContext);
  //   const photo = ;
  return showFeature ? (
    <Feature {...restProps}>
      {itemFeature.galerie != null ? (
        <FeatureSlider>
          <FeatureSliderItem1 src={itemFeature.galerie[0]["photo"]} />
          <FeatureSliderItem2 src={itemFeature.galerie[1]["photo"]} />
          <FeatureSliderItem3 src={itemFeature.galerie[2]["photo"]} />
          <FeatureSliderItem4 src={itemFeature.galerie[3]["photo"]} />
          <FeatureSliderItem5 src={itemFeature.galerie[4]["photo"]} />
          <FeatureSliderItem6 src={itemFeature.galerie[5]["photo"]} />
        </FeatureSlider>
      ) : null}
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>

        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? "PG" : itemFeature.maturity}
          </Maturity>

          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() +
              itemFeature.genre.slice(1)}
          </FeatureText>

          {/* <Player>
            <Player.Button>sss</Player.Button>
            <PlayerVideo src="//fr.vid.web.acsta.net/nmedia/33/19/10/29/09//19585902_sd_013.mp4" />
          </Player> */}

          <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
            <ContainerPlayer {...restProps}>
              <Button
                onClick={() => setShowPlayer((showPlayer) => !showPlayer)}
              >
                Lire
              </Button>
              {showPlayer
                ? ReactDOM.createPortal(
                    <Overlay
                      onClick={() => setShowPlayer(false)}
                      {...restProps}
                    >
                      <Inner>
                        <video id="netflix-player" controls autoPlay>
                          <source src={itemFeature.video} type="video/mp4" />
                        </video>
                        <Close />
                      </Inner>
                    </Overlay>,
                    document.body
                  )
                : null}
            </ContainerPlayer>
          </PlayerContext.Provider>
        </Group>

        <Group margin="90px 0" flexDirection="row" alignItems="center">
          <FeatureActors>
            <p>Avec : </p>
            {itemFeature.actors.map((actor) => (
              <>
                <FeatureActor>
                  <FeatureText fontWeight="bold">
                    {actor.name}
                    <img
                      src={actor.photo}
                      alt={actor.name}
                      onClick={() => {
                        setShowActor((showActor) => !showActor);

                        setInfoData((prevState) => ({
                          ...prevState,
                          actor: {
                            ...prevState.actor,
                            name: actor.name,
                            photo: actor.photo,
                            bio: actor.bio,
                            age: actor.age,
                            birthDay: actor.birthDay,
                            nationalite: actor.nationalite,
                            palmares: actor.palmares,
                            career: actor.career,
                            nominations: actor.nominations,
                            prices: actor.prices,
                          },
                        }));
                      }}
                    />
                  </FeatureText>
                </FeatureActor>
              </>
            ))}
          </FeatureActors>
        </Group>
        {showActor
          ? ReactDOM.createPortal(
              <Overlay onClick={() => setShowActor(false)} {...restProps}>
                <Inner overflowAuto="auto" setPadding="10" setBorder="1">
                  <FeatureTitle>{infoData["actor"]["name"]}</FeatureTitle>
                  <FeatureActorInfo>
                    <img src={infoData["actor"]["photo"]} height="300px" />
                    <ul>
                      <li>
                        Nationalité:
                        <strong>{infoData["actor"]["nationalite"]}</strong>
                      </li>
                      <li>
                        Date de Naissance:
                        <strong>{infoData["actor"]["birthDay"]}</strong>
                      </li>
                      <li>
                        Age: <strong>{infoData["actor"]["age"]}</strong>
                      </li>
                      <table>
                        <tr>
                          {infoData["actor"]["career"] != 0 ? (
                            <td>
                              {parse(
                                infoData["actor"]["career"] +
                                  "<br /><strong>ans de carrière</strong>"
                              )}
                            </td>
                          ) : null}
                          {infoData["actor"]["palmares"] != 0 ? (
                            <td>
                              {parse(
                                infoData["actor"]["palmares"] +
                                  "<br /><strong> films et séries tournés</strong>"
                              )}
                            </td>
                          ) : null}
                          {infoData["actor"]["prices"] != 0 ? (
                            <td>
                              {parse(
                                infoData["actor"]["prices"] +
                                  "<br /><strong>Prix</strong>"
                              )}
                            </td>
                          ) : null}
                          {infoData["actor"]["nominations"] != 0 ? (
                            <td>
                              {parse(
                                infoData["actor"]["nominations"] +
                                  "<br /><strong>Nominations</strong>"
                              )}
                            </td>
                          ) : null}
                        </tr>
                      </table>
                    </ul>
                  </FeatureActorInfo>
                  <FeatureActorBio>
                    {parse(infoData["actor"]["bio"])}
                  </FeatureActorBio>
                  <Close />
                </Inner>
              </Overlay>,
              document.body
            )
          : null}
        {children}
      </Content>
    </Feature>
  ) : null;
};

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.Item = function CardItem({ item, children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);

  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};

Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};

export default Card;
