import styled from "styled-components/macro";

export const Title = styled.p`
  font-size: 24px;
  color: #e5e5e5;
  font-weight: bold;
  margin-left: 56px;
  margin-right: 56px;
  margin-top: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  box-sizing: border-box;

  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Group = styled.div`
  clear: both;
  display: inline-grid;
  margin-top: 220px;
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection === "row" ? "row" : "column"};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};

  > ${Container}:first-of-type {
    @media (min-width: 1100px) {
      margin-top: -150px;
    }
  }
`;

export const SubTitle = styled.p`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none;
`;

export const Text = styled.p`
  margin-top: 5px;
  font-size: 12px;
  color: #fff;
  margin-bottom: 0;
  user-select: none;
  display: none;
  line-height: normal;
`;

export const Entities = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Meta = styled.div`
  display: none;
  position: absolute;

  padding: 10px;
  margin-top: 45px;
  padding-left: 20px;
  background-color: #000000ad;
`;

export const Image = styled.img`
  border: 0;

  height: 500px;
  max-width: 300px;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.3);
    z-index: 99;
  }

  @media (min-width: 1200px) {
    &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
      display: block;
      z-index: 100;
    }
  }

  &:first-of-type {
    margin-left: 56px;

    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-right: 56px;

    @media (max-width: 1000px) {
      margin-right: 30px;
    }
  }
`;

export const FeatureText = styled.p`
  font-size: 18px;
  color: white;
  font-weight: ${({ fontWeight }) =>
    fontWeight === "bold" ? "bold" : "normal"};
  margin: 0;

  @media (max-width: 600px) {
    line-height: 22px;
  }
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  position: relative;
  height: 760px;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: black;

  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;

    ${Title} {
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 10px;
    }
    ${FeatureText} {
      font-size: 14px;
    }
  }
`;

export const FeatureTitle = styled(Title)`
  margin-left: 0;
`;

export const FeatureActorBio = styled.p`
  color: WHITE;
  font-weight: bold;
  line-height: 2rem;
  text-align: justify;
`;

export const FeatureActorInfo = styled.div`
  display: flex;
  box-shadow: 0 0 10px;
  ul {
    color: WHITE;
    font-weight: bold;
    width: 100%;
    list-style: none;
    line-height: 30px;
    font-size: 20px;

    li {
      font-weight: normal;
      text-align: left;
    }
  }
  img {
    border-radius: 20px;
    -webkit-box-shadow: 2px 2px 5px 0px rgb(114 114 114);
    -moz-box-shadow: 2px 2px 5px 0px rgba(133, 133, 133, 1);
    box-shadow: 2px 2px 5px 0px rgb(133 133 133);
  }

  table {
    margin-top: 30px;
    width: 100%;
    tr {
      width: 100%;
      padding: 30px;
      height: 120px;
      text-align: center;
    }

    td {
      border-right: 1px solid #ccc;
      font-size: 40px;
      font-weight: bold;
      padding: 20px;
      width: 33.33%;
      &:last-of-type {
        border: 0;
      }
      strong {
        font-size: 17px;
        font-weight: normal;
      }
    }
  }
`;

export const FeatureClose = styled.button`
  color: white;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;

export const Content = styled.div`
  padding: 56px;
  z-index: 0;
  background-color: #00000088;
  max-width: 500px;
  line-height: normal;

  @media (max-width: 1000px) {
    margin: 30px;
    max-width: none;
  }
`;

export const Player = styled.div``;
export const PlayerButton = styled.div``;
export const PlayerVideo = styled.div``;

export const Maturity = styled.div`
  background-color: ${({ rating }) => (rating >= 15 ? "red" : "green")};
  border-radius: 15px;
  width: 20px;
  padding: 5px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  font-size: 12px;
`;

export const FeatureActors = styled.div`
  display: flex;
  align-items: center;
`;
export const FeatureActor = styled.div`
  cursor: pointer;
  img {
    height: 120px;
  }
`;

export const FeatureSlider = styled.div`
  max-width: 300px;
  height: 200px;

  /* margin: 20px auto; */
  position: initial;
`;

export const FeatureSliderItem1 = styled.div`
  background: linear-gradient(
      to left,
      rgb(136 136 136 / 30%),
      rgb(0 0 0 / 100%)
    ),
    url(${({ src }) => src}) no-repeat right;
  background-size: contain;
  animation: fade 20s infinite;
  -webkit-animation: fade 20s infinite;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const FeatureSliderItem2 = styled.div`
  background: linear-gradient(
      to left,
      rgb(136 136 136 / 30%),
      rgb(0 0 0 / 100%)
    ),
    url(${({ src }) => src}) no-repeat right;
  background-size: contain;
  animation: fade2 20s infinite;
  -webkit-animation: fade2 20s infinite;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const FeatureSliderItem3 = styled.div`
  background: linear-gradient(
      to left,
      rgb(136 136 136 / 30%),
      rgb(0 0 0 / 100%)
    ),
    url(${({ src }) => src}) no-repeat right;
  background-size: contain;
  animation: fade3 20s infinite;
  -webkit-animation: fade3 20s infinite;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const FeatureSliderItem4 = styled.div`
  background: linear-gradient(
      to left,
      rgb(136 136 136 / 30%),
      rgb(0 0 0 / 100%)
    ),
    url(${({ src }) => src}) no-repeat right;
  background-size: contain;
  animation: fade4 20s infinite;
  -webkit-animation: fade4 20s infinite;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const FeatureSliderItem5 = styled.div`
  background: linear-gradient(
      to left,
      rgb(136 136 136 / 30%),
      rgb(0 0 0 / 100%)
    ),
    url(${({ src }) => src}) no-repeat right;
  background-size: contain;
  animation: fade5 20s infinite;
  -webkit-animation: fade5 20s infinite;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const FeatureSliderItem6 = styled.div`
  background: linear-gradient(
      to left,
      rgb(136 136 136 / 30%),
      rgb(0 0 0 / 100%)
    ),
    url(${({ src }) => src}) no-repeat right;
  background-size: contain;
  animation: fade6 20s infinite;
  -webkit-animation: fade6 20s infinite;
  position: absolute;
  width: 100%;
  height: 100%;
`;
