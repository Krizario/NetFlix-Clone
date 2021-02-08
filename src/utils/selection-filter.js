export default function selectionFilter({ series, films }) {
  return {
    series: [
      {
        title: "Documentaries",
        data: series.filter((item) => item.genre === "documentaries"),
      },
      {
        title: "Comedies",
        data: series.filter((item) => item.genre === "comedies"),
      },
      {
        title: "Children",
        data: series.filter((item) => item.genre === "children"),
      },
      {
        title: "Crime",
        data: series.filter((item) => item.genre === "crime"),
      },
      {
        title: "Feel Good",
        data: series.filter((item) => item.genre === "feel-good"),
      },
    ],
    films: [
      {
        title: "Action",
        data: films.filter((item) => item.genre === "action"),
      },
      {
        title: "Animation",
        data: films.filter((item) => item.genre === "animation"),
      },
      {
        title: "Aventure",
        data: films.filter((item) => item.genre === "aventure"),
      },
      {
        title: "Biopic",
        data: films.filter((item) => item.genre === "biopic"),
      },
      {
        title: "Comédie",
        data: films.filter((item) => item.genre === "comédie"),
      },
      {
        title: "Comédie dramatique",
        data: films.filter((item) => item.genre === "comédie dramatique"),
      },
      {
        title: "Documentaire",
        data: films.filter((item) => item.genre === "documentaire"),
      },
      {
        title: "Drame",
        data: films.filter((item) => item.genre === "drame"),
      },
      {
        title: "Epouvante-horreur",
        data: films.filter((item) => item.genre === "epouvante-horreur"),
      },
      {
        title: "Famille",
        data: films.filter((item) => item.genre === "famille"),
      },
      {
        title: "Fantastique",
        data: films.filter((item) => item.genre === "fantastique"),
      },
      {
        title: "Judiciaire",
        data: films.filter((item) => item.genre === "judiciaire"),
      },
      {
        title: "Musical",
        data: films.filter((item) => item.genre === "musical"),
      },
      {
        title: "Policier",
        data: films.filter((item) => item.genre === "policier"),
      },
      {
        title: "Romance",
        data: films.filter((item) => item.genre === "romance"),
      },
      {
        title: "Science fiction",
        data: films.filter((item) => item.genre === "science fiction"),
      },
      {
        title: "Thriller",
        data: films.filter((item) => item.genre === "thriller"),
      },
    ],
  };
}
