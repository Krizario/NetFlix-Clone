import React, { useState, useContext, useEffect } from "react";
import Fuse from "fuse.js";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carousel.css";

import { Loading, Header, Card, Player } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

import { SelectProfileContainer } from "./profiles";
import { FooterContainer } from "./footer";
import { FirebaseContext } from "../context/firebase";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 6,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export function BrowseContainer({ slides }) {
  const [category, setCategory] = useState("films");
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [slideRows, setSlideRows] = useState([]);
  const [slideCols, setSlideCols] = useState([]);

  const [results, setResults] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    setSlideCols(slides[category][0]["data"]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideCols, {
      keys: ["title"],
    });
    // const results = fuse.search(searchTerm).map(({ item }) => item);
    const res = fuse.search(searchTerm);
    console.log("llll" + res);
    if (searchTerm.length > 3 && res.length > 0) {
      console.log("results", res);
      // setSlideRows(results);

      // setResults(slideCols);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="007" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="NetFlix" />
            <Header.TextLink
              active={category === "films" ? "true" : "false"}
              onClick={() => setCategory("films")}
            >
              Films
            </Header.TextLink>
            <Header.TextLink
              active={category === "series" ? "true" : "false"}
              onClick={() => setCategory("series")}
            >
              Series
            </Header.TextLink>
          </Header.Group>

          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            ></Header.Search>
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Se déconnecter
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>
            Regarder 007 - No Time To Die maintenant
          </Header.FeatureCallOut>

          <Header.Text>
            James Bond n'est plus en service et profite d'une vie tranquille en
            Jamaïque. Mais son répit est de courte durée car l'agent de la CIA
            Felix Leiter fait son retour pour lui demander son aide. Sa mission,
            qui est de secourir un scientifique kidnappé, va se révéler plus
            traître que prévu, et mener 007 sur la piste d'un méchant possédant
            une nouvelle technologie particulièrement dangereuse
          </Header.Text>
          <Header.PlayButton>Lecture</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {results.map((result) => (
          <>
            <Card>{result.title}</Card>
          </>
        ))}
        {slideRows.map((slideItem) => (
          <>
            <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
              <Card.Title>{slideItem.title}</Card.Title>

              <Carousel responsive={responsive} minimumTouchDrag={100}>
                {slideItem.data.map((item) => (
                  <Card.Item key={item.docId} item={item}>
                    <Card.Image
                      src={`${item.logo}`.replace("c_215_290", "r_1920_1080")}
                    />
                    <Card.Meta>
                      <Card.SubTitle>{item.title}</Card.SubTitle>
                      <Card.Text>{item.description}</Card.Text>
                    </Card.Meta>
                  </Card.Item>
                ))}
              </Carousel>

              <Card.Feature category={category}>
                {/* <Player>
                <Player.Button />
                <Player.Video src="//ssfr.vid.web.acsta.net/nmedia/33/19/10/29/09//19585902_sd_013.mp4" />
              </Player> */}
              </Card.Feature>
            </Card>
          </>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
