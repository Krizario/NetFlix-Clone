export function seedDatabase(firebase) {
  function getUUID() {
    // eslint gets funny about bitwise
    /* eslint-disable */
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const piece = (Math.random() * 16) | 0;
      const elem = c === "x" ? piece : (piece & 0x3) | 0x8;
      return elem.toString(16);
    });
    /* eslint-enable */
  }

  /* Series
      ============================================ */
  // Documentaries
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Tiger King",
    description:
      "An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.",
    genre: "documentaries",
    maturity: "18",
    slug: "tiger-king",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Amanda Knox",
    description:
      "Amanda Marie Knox is an American woman who spent almost four years in an Italian prison.",
    genre: "documentaries",
    maturity: "12",
    slug: "amanda-knox",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Citizenfour",
    description:
      "Citizenfour is a 2014 documentary film directed by Laura Poitras, concerning Edward Snowden and the NSA spying scandal.",
    genre: "documentaries",
    maturity: "12",
    slug: "citizenfour",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Super Size Me",
    description:
      "Director Morgan Spurlock's social experiment in fast-food gastronomy sees him attempting to subsist uniquely on food from the McDonalds",
    genre: "documentaries",
    maturity: "12",
    slug: "super-size-me",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Man on Wire",
    description:
      "Filmmaker James Marsh masterfully recreates high-wire daredevil Philippe Petit's 1974 stunt walking on a wire across the Twin Towers.",
    genre: "documentaries",
    maturity: "12",
    slug: "man-on-wire",
  });

  // Comedies
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "The Office",
    description:
      "A motley group of office workers go through hilarious misadventures at the Scranton, Pennsylvania, branch of the Dunder Mifflin Paper Company.",
    genre: "comedies",
    maturity: "15",
    slug: "the-office",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Arrested Development",
    description:
      "The Bluth family, once a prominent name in the business, loses everything after the head patriarch gets convicted for fraud.",
    genre: "comedies",
    maturity: "15",
    slug: "arrested-development",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Curb Your Enthusiasm",
    description:
      "Larry David, a famous television writer and producer, gets into various misadventures with his friends and celebrity colleagues in Los Angeles.",
    genre: "comedies",
    maturity: "15",
    slug: "curb-your-enthusiasm",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Family Guy",
    description:
      "Peter Griffin and his family of two teenagers, a smart dog, a devilish baby and his wife find themselves in some of the most hilarious scenarios.",
    genre: "comedies",
    maturity: "15",
    slug: "family-guy",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "South Park",
    description:
      "Four young, schoolgoing boys, Stan Marsh, Kyle Broflovski, Eric Cartman and Kenny McCormick, who live in South Park set out on various adventures.",
    genre: "comedies",
    maturity: "15",
    slug: "south-park",
  });

  // Children
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Peppa Pig",
    description:
      "Peppa, an outgoing preschool pig, participates in many energetic activities. She learns something new every day and has a lot of fun with her family and friends.",
    genre: "children",
    maturity: "0",
    slug: "peppa-pig",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Dora The Explorer",
    description:
      "Dora, a seven-year-old girl of Latin American descent, embarks upon numerous adventures in the wilderness with her friend Boots, a monkey, and a variety of fun and useful tools.",
    genre: "children",
    maturity: "0",
    slug: "dora-the-explorer",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "PAW Patrol",
    description:
      "Six brave puppies, captained by a tech-savvy ten-year-old boy, Ryder, work together to accomplish high-stakes rescue missions to safeguard the residents of the Adventure Bay community.",
    genre: "children",
    maturity: "0",
    slug: "paw-patrol",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Arthur",
    description:
      "Bespectacled aardvark Arthur Read demonstrates to kids how to deal with such childhood traumas and challenges as homework, teachers and bullies.",
    genre: "children",
    maturity: "0",
    slug: "arthur",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "SpongeBob",
    description:
      "A yellow sea sponge named SpongeBob SquarePants lives in the city of Bikini Bottom deep in the Pacific Ocean. ",
    genre: "children",
    maturity: "0",
    slug: "spongebob",
  });

  // Crime
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Making a Murderer",
    description:
      "Exonerated after spending nearly two decades in prison for a crime he did not commit, Steven Avery filed suit against Manitowoc County, Wis., and several individuals involved with his arrest.",
    genre: "crime",
    maturity: "18",
    slug: "making-a-murderer",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Long Shot",
    description:
      "An innocent man is accused of murder, leading his attorney on a wild chase to confirm his alibi using raw footage from a television show.",
    genre: "crime",
    maturity: "18",
    slug: "long-shot",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "The Confession Killer",
    description:
      "Henry Lee Lucas was an American convicted serial killer whose crimes spanned from 1960 to 1983. He was convicted of murdering eleven people and condemned to death for the murder of Debra Jackson, although his sentence would be commuted to life in prison in 1998.",
    genre: "crime",
    maturity: "18",
    slug: "the-confession-killer",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "The Innocent Man",
    description:
      "Henry Lee Lucas was an American convicted serial killer whose crimes spanned from 1960 to 1983. He was convicted of murdering eleven people and condemned to death for the murder of Debra Jackson.",
    genre: "crime",
    maturity: "18",
    slug: "the-innocent-man",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "The Staircase",
    description:
      "In 2001 novelist Michael Peterson's wife died, and he claimed she perished after falling down stairs at their home. The medical examiner, however, determined that she had been beaten with a weapon",
    genre: "crime",
    maturity: "18",
    slug: "the-staircase",
  });

  // Feel-good
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Good Will Hunting",
    description:
      "Will Hunting, a genius in mathematics, solves all the difficult mathematical problems. When he faces an emotional crisis, he takes help from psychiatrist Dr Sean Maguireto, who helps him recover.",
    genre: "feel-good",
    maturity: "12",
    slug: "good-will-hunting",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Forrest Gump",
    description:
      "Forrest Gump, a man with a low IQ, joins the army for service where he meets Dan and Bubba. However, he cannot stop thinking about his childhood sweetheart Jenny Curran, whose life is messed up.",
    genre: "feel-good",
    maturity: "12",
    slug: "forrest-gump",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Juno",
    description:
      "Social misfit Juno protects herself with a caustic wit, but her unplanned pregnancy has the teen getting more involved in the lives of her baby's adoptive parents than she expected.",
    genre: "feel-good",
    maturity: "12",
    slug: "juno",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Midnight In Paris",
    description:
      "Gil arrives with his fiancee and her family in Paris for a vacation, even as he tries to finish his debut novel. He is beguiled by the city, which takes him to a time past, away from his fiancee.",
    genre: "feel-good",
    maturity: "12",
    slug: "midnight-in-paris",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "School of Rock",
    description:
      "Dewey Finn, an amateur rock enthusiast, slyly takes up his friend's substitute teacher's job. Bearing no qualifications for it, he instead starts training the students to form a band.",
    genre: "feel-good",
    maturity: "12",
    slug: "school-of-rock",
  });

  /* Films
      ============================================ */

  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Les Choses qu’on dit, les choses qu’on fait",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/19/16//19588818_sd_013.mp4",
      sortie: "16 septembre 2020",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/20/09/16/12/34/0353850.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/07/20/09/46/3052265.jpg",
      sortie: "16 septembre 2020",
      description:
        "Daphné, enceinte de trois mois, est en vacances à la campagne avec son compagnon François. Il doit s’absenter pour son travail et elle se retrouve seule pour accueillir Maxime, son cousin qu’elle n’avait jamais rencontré.",
      genre: "drame",
      maturity: "15",
      slug: "les-choses-qu’on-dit,-les-choses-qu’on-fait",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Tenet",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/07/30/17//19588680_sd_013.mp4",
      sortie: "26 août 2020",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/20/08/03/12/15/2118693.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/07/30/16/40/2066772.jpg",
      sortie: "26 août 2020",
      description:
        "Muni d'un seul mot – Tenet – et décidé à se battre pour sauver le monde, notre protagoniste sillonne l'univers crépusculaire de l'espionnage international. Sa mission le projettera dans une dimension qui dépasse le temps. Pourtant, il ne s'agit pas d'un voyage dans le temps, mais d'un renversement temporel…",
      genre: "action",
      maturity: "15",
      slug: "tenet",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Antoinette dans les Cévennes",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/17/16//19589280_sd_013.mp4",
      sortie: "16 septembre 2020",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/20/07/22/16/44/0532010.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/09/21/11/51/0325645.jpg",
      sortie: "16 septembre 2020",
      description:
        "Des mois qu’Antoinette attend l’été et la promesse d’une semaine avec son amant. Alors quand celui-ci annule leurs vacances pour partir dans les Cévennes avec sa femme et sa fille, Antoinette ne réfléchit pas longtemps : elle part sur ses traces !",
      genre: "comédie",
      maturity: "15",
      slug: "antoinette-dans-les-cévennes",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Blackbird",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/28/13//19588983_sd_013.mp4",
      sortie: "23 septembre 2020",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/20/08/19/17/00/1390750.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/08/19/17/00/1390750.jpg",
      sortie: "23 septembre 2020",
      description:
        "Lily et son mari Paul décident de réunir enfants et petits-enfants pour un week-end dans leur maison de campagne. Trois générations d’une même famille se retrouvent, avec Jennifer, l’aînée, son mari Michael et leur fils de 15 ans, Jonathan, mais aussi Anna, la cadette, venue avec Chris, sa compagne. En fait, cette réunion de famille a un but bien particulier : atteinte d'une maladie dégénérative incurable, Lily refuse de subir une fin de vie avilissante et décide de prendre son destin en main.",
      genre: "drame",
      maturity: "15",
      slug: "blackbird",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Le Bonheur des uns...",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/07/27/12//19587803_sd_013.mp4",
      sortie: "9 septembre 2020",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/20/07/01/13/38/0785313.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/09/08/15/28/4393917.jpg",
      sortie: "9 septembre 2020",
      description:
        "Léa, Marc, Karine et Francis sont deux couples d’amis de longue date. Le mari macho, la copine un peu grande-gueule, chacun occupe sa place dans le groupe. Mais, l’harmonie vole en éclat le jour où Léa, la plus discrète d’entre eux, leur apprend qu’elle écrit un roman, qui devient un best-seller. ",
      genre: "comédie",
      maturity: "15",
      slug: "le-bonheur-des-uns...",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "La Daronne",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/10/12//19585579_sd_013.mp4",
      sortie: "9 septembre 2020",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/19/12/11/09/17/0499690.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/06/03/10/11/2983836.jpg",
      sortie: "9 septembre 2020",
      description:
        "Patience Portefeux est interprète judiciaire franco-arabe, spécialisée dans les écoutes téléphoniques pour la brigade des Stups. Lors d'une enquête, elle découvre que l'un des trafiquants n'est autre que le fils de l'infirmière dévouée qui s’occupe de sa mère. Elle décide alors de le couvrir et se retrouve à la tête d'un immense trafic ; cette nouvelle venue dans le milieu du deal est surnommée par ses collègues policiers \"La Daronne\".",
      genre: "policier",
      maturity: "15",
      slug: "la-daronne",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Enola Holmes",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/25/15//19589648_sd_013.mp4",
      sortie: "23 septembre 2020",
      logo:
        "http://fr.web.img6.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/20/09/23/11/08/43583",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/09/21/10/10/3910411.jpg",
      sortie: "23 septembre 2020",
      description:
        "Enola, la jeune sœur de Sherlock Holmes, met ses talents de détective à l'épreuve pour tenter de retrouver sa mère disparue et déjouer une dangereuse conspiration.",
      genre: "policier",
      maturity: "15",
      slug: "enola-holmes",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Antebellum",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/05/09//19589452_sd_013.mp4",
      sortie: "9 septembre 2020",
      logo:
        "http://fr.web.img5.acsta.net/c_215_290/pictures/20/08/05/09/21/0019416.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/09/04/14/21/4592886.jpg",
      sortie: "9 septembre 2020",
      description:
        "L'auteure à succès, Veronica Henley, se retrouve piégée dans un monde effroyable dont elle doit percer le mystère avant qu'il ne soit trop tard.",
      genre: "thriller",
      maturity: "15",
      slug: "antebellum",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "J’irai mourir dans les Carpates",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/07/07/10//19589134_sd_013.mp4",
      sortie: "16 septembre 2020",
      logo:
        "http://fr.web.img5.acsta.net/c_215_290/pictures/20/07/02/16/55/3219386.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/08/31/09/38/4915789.jpg",
      sortie: "16 septembre 2020",
      description:
        "L’histoire commence par un banal accident de voiture sur une route montagneuse des Carpates. La voiture d'Antoine de Maximy, le présentateur de la série \"J'irai dormir chez vous\" a été emportée par une rivière et son corps n’a pas été retrouvé. Le matériel et les images du globe-squatteur sont rapatriés à Paris. Agnès, la monteuse de la série, décide de terminer ce dernier épisode.",
      genre: "comédie",
      maturity: "15",
      slug: "j’irai-mourir-dans-les-carpates",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Éléonore",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/07/02/12//19589105_sd_013.mp4",
      sortie: "23 septembre 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/09/16/09/29/4349366.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/06/30/15/08/1842625.jpg",
      sortie: "23 septembre 2020",
      description:
        "Sous la pression de sa mère et de sa sœur, Eléonore, apprentie écrivain, change de vie et devient l’assistante d’un éditeur spécialisé dans les romances érotiques.",
      genre: "comédie",
      maturity: "15",
      slug: "Éléonore",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Ondine",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/17/10//19587787_sd_013.mp4",
      sortie: "23 septembre 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/09/17/15/00/2728651.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/03/05/16/32/0781540.jpg",
      sortie: "23 septembre 2020",
      description:
        "Ondine vit à Berlin, elle est historienne et donne des conférences sur la ville. Quand l’homme qu’elle aime la quitte, le mythe ancien la rattrape : Ondine doit tuer celui qui la trahit et retourner sous les eaux…",
      genre: "drame",
      maturity: "15",
      slug: "ondine",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Police",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/16/15//19585567_sd_013.mp4",
      sortie: "2 septembre 2020",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/20/08/18/08/26/5562385.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/02/06/12/08/1822001.jpg",
      sortie: "2 septembre 2020",
      description:
        "Virginie, Erik et Aristide, trois flics parisiens, se voient obligés d’accepter une mission inhabituelle : reconduire un étranger à la frontière.",
      genre: "thriller",
      maturity: "15",
      slug: "police",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Effacer l’historique",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/07/01/18//19587258_sd_013.mp4",
      sortie: "26 août 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/02/21/09/29/4989689.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/07/03/15/29/2948700.jpg",
      sortie: "26 août 2020",
      description:
        "Dans un lotissement en province, trois voisins sont en prise avec les nouvelles technologies et les réseaux sociaux. Il y a Marie, victime de chantage avec une sextape, Bertrand, dont la fille est harcelée au lycée, et Christine, chauffeur VTC dépitée de voir que les notes de ses clients refusent de décoller.Ensemble, ils décident de partir en guerre contre les géants d’internet. Une bataille foutue d'avance, quoique...",
      genre: "comédie",
      maturity: "15",
      slug: "effacer-l’historique",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Adieu Les Cons",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/28/12//19589536_sd_013.mp4",
      sortie: "21 octobre 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/07/21/14/05/2680092.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/08/13/14/24/1277560.jpg",
      sortie: "21 octobre 2020",
      description:
        "Lorsque Suze Trappet apprend à 43 ans qu’elle est sérieusement malade, elle décide de partir à la recherche de l'enfant qu’elle a été forcée d'abandonner quand elle avait 15 ans.Sa quête administrative va lui faire croiser JB, quinquagénaire en plein burn out, et M. Blin, archiviste aveugle d’un enthousiasme impressionnant. À eux trois, ils se lancent dans une quête aussi spectaculaire qu’improbable.",
      genre: "comédie",
      maturity: "15",
      slug: "adieu-les-cons",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Adieu Les Cons",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/28/12//19589536_sd_013.mp4",
      sortie: "21 octobre 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/07/21/14/05/2680092.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/08/13/14/24/1277560.jpg",
      sortie: "21 octobre 2020",
      description:
        "Lorsque Suze Trappet apprend à 43 ans qu’elle est sérieusement malade, elle décide de partir à la recherche de l'enfant qu’elle a été forcée d'abandonner quand elle avait 15 ans.Sa quête administrative va lui faire croiser JB, quinquagénaire en plein burn out, et M. Blin, archiviste aveugle d’un enthousiasme impressionnant. À eux trois, ils se lancent dans une quête aussi spectaculaire qu’improbable.",
      genre: "comédie",
      maturity: "15",
      slug: "adieu-les-cons",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Un pays qui se tient sage",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/02/16//19589747_sd_013.mp4",
      sortie: "30 septembre 2020",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/20/07/07/11/06/1957131.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/09/02/16/27/0529635.jpg",
      sortie: "30 septembre 2020",
      description:
        "Alors que s'accroissent la colère et le mécontentement devant les injustices sociales, de nombreuses manifestations citoyennes sont l'objet d'une répression de plus en plus violente.",
      genre: "documentaire",
      maturity: "15",
      slug: "un-pays-qui-se-tient-sage",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Le Diable, tout le temps",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/13/15//19589520_sd_013.mp4",
      sortie: "16 septembre 2020",
      logo:
        "http://fr.web.img6.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/20/09/02/17/18/50863",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/05/28/02/38/5814056.jpg",
      sortie: "16 septembre 2020",
      description:
        "Knockemstiff, Ohio. Face à sa femme mourante, un homme désespéré, Willard Russell, tente le tout pour le tout. Il se tourne vers la religion. Ses prières vont petit à petit s'apparenter à des sacrifices dont Arvin, le fils du couple, pourrait être l'offrande ultime...",
      genre: "thriller",
      maturity: "15",
      slug: "le-diable,-tout-le-temps",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Mon grand-père et moi",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/04/09//19588825_sd_013.mp4",
      sortie: "7 octobre 2020",
      logo:
        "http://fr.web.img5.acsta.net/c_215_290/pictures/20/09/10/13/26/4562652.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "7 octobre 2020",
      description:
        "Peter, 10 ans, doit, à la demande de ses parents, libérer sa chambre pour son grand-père et s'installer, à contrecœur, au grenier. Avec l'aide de ses amis, il va tout faire pour récupérer sa chambre et n'hésitera pas à employer les grands moyens.",
      genre: "comédie",
      maturity: "15",
      slug: "mon-grand-père-et-moi",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Peninsula",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/08/15//19588961_sd_013.mp4",
      sortie: "21 octobre 2020",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/20/06/25/11/24/2159732.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/06/29/10/00/0427725.jpg",
      sortie: "21 octobre 2020",
      description:
        "Quatre ans après Dernier train pour Busan, il ne reste que des zombies dans la péninsule. Un groupe de soldats forcés d’y retourner découvrent que des survivants non contaminés se sont regroupés dans une bande bien plus dangereuse que les zombies...",
      genre: "action",
      maturity: "15",
      slug: "peninsula",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Aline",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "18 novembre 2020",
      logo:
        "http://fr.web.img5.acsta.net/c_215_290/pictures/20/08/31/13/51/5192304.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/09/18/15/58/4225685.jpg",
      sortie: "18 novembre 2020",
      description:
        "Québec, fin des années 60, Sylvette et Anglomard accueillent leur 14ème enfant : Aline. Dans la famille Dieu, la musique est reine et quand Aline grandit on lui découvre un don, elle a une voix en or. Lorsqu’il entend cette voix, le producteur de musique Guy-Claude n’a plus qu’une idée en tête… faire d’Aline la plus grande chanteuse au monde. Epaulée par sa famille et guidée par l’expérience puis l’amour naissant de Guy-Claude, ils vont ensemble écrire les pages d’un destin hors du commun.",
      genre: "comédie dramatique",
      maturity: "15",
      slug: "aline",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Les Trolls 2 - Tournée mondiale",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/16/17//19586321_sd_013.mp4",
      sortie: "14 octobre 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/04/27/17/43/5071321.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/02/27/15/15/3696958.jpg",
      sortie: "14 octobre 2020",
      description:
        "Reine Barb, membre de la royauté hard-rock, aidée de son père Roi Thrash, veut détruire tous les autres genres de musique pour laisser le rock régner en maître. Le destin du monde en jeu, Poppy et Branch, accompagnés de leurs amis – Biggie, Chenille, Satin, Cooper  et Guy Diamond – partent visiter tous les autres territoires pour unifier les Trolls contre Barb, qui cherche à tous les reléguer au second-plan.",
      genre: "animation",
      maturity: "15",
      slug: "les-trolls-2---tournée-mondiale",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Petites danseuses",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/02/12/16//19586765_sd_013.mp4",
      sortie: "4 novembre 2020",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/20/01/16/16/16/3871929.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "4 novembre 2020",
      description:
        "À quoi ressemble la vie de petites filles qui rêvent de devenir danseuses étoiles à l'Opéra de Paris ? Elles ont entre 6 et 10 ans. A la maison, à l’école ou dans la rue, elles vivent avec passion la danse au quotidien. Mais comment grandir dans un monde de travail intensif, d'exigence et de compétitions quand on est si petite ?",
      genre: "documentaire",
      maturity: "15",
      slug: "petites-danseuses",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Les Nouveaux mutants",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/07/14//19589478_sd_013.mp4",
      sortie: "26 août 2020",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/20/08/12/15/17/5486144.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/08/12/15/17/5486144.jpg",
      sortie: "26 août 2020",
      description:
        "Rahne Sinclair, Illyana Rasputin, Sam Guthrie et Roberto da Costa sont quatre jeunes mutants retenus dans un hôpital isolé pour suivi psychiatrique. Le Dr Cecilia Reyes, qui estime ces adolescents dangereux pour eux-mêmes comme pour la société, les surveille attentivement et s'efforce de leur apprendre à maîtriser leurs pouvoirs.",
      genre: "epouvante-horreur",
      maturity: "15",
      slug: "les-nouveaux-mutants",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Parents d'élèves",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/03/17//19589315_sd_013.mp4",
      sortie: "7 octobre 2020",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/20/09/04/12/18/2797156.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/07/29/11/01/1491687.jpg",
      sortie: "7 octobre 2020",
      description:
        "Vincent, trentenaire sans enfant, infiltre une tribu aux codes et au langage mystérieux : les parents d’élèves. Mais voilà, Vincent a une très bonne raison de faire ceci et finit même par se sentir bien dans cette communauté un peu spéciale…",
      genre: "comédie",
      maturity: "15",
      slug: "parents-d'élèves",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Enragé",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/25/17//19587801_sd_013.mp4",
      sortie: "19 août 2020",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/20/06/17/13/34/4725610.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/06/24/11/41/1503056.jpg",
      sortie: "19 août 2020",
      description:
        "Mauvaise journée pour Rachel : en retard pour conduire son fils à l’école, elle se retrouve coincée au feu derrière une voiture qui ne redémarre pas. Perdant patience, elle klaxonne et passe devant. Quelques mètres plus loin, le même pick up s’arrête à son niveau. Son conducteur la somme de s’excuser, mais elle refuse. Furieux, il commence à la suivre... La journée de Rachel se transforme en véritable cauchemar.",
      genre: "thriller",
      maturity: "15",
      slug: "enragé",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "ADN",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/03/14//19588984_sd_013.mp4",
      sortie: "28 octobre 2020",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/20/09/14/10/51/0519080.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "28 octobre 2020",
      description:
        "Neige, divorcée et mère de trois enfants, rend régulièrement visite à Émir, son grand-père algérien qui vit désormais en maison de retraite. Elle adore et admire ce pilier de la famille, qui l’a élevée et surtout protégée de la toxicité de ses parents. Les rapports entre les nombreux membres de la famille sont compliqués et les rancœurs nombreuses...",
      genre: "drame",
      maturity: "15",
      slug: "adn",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Mourir peut attendre",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/03/14//19586864_sd_013.mp4",
      sortie: "11 novembre 2020",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/20/09/02/11/19/3750789.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/09/21/09/30/1186977.jpg",
      sortie: "11 novembre 2020",
      description:
        "James Bond a quitté les services secrets et coule des jours heureux en Jamaïque. Mais son vieil ami Felix Leiter de la CIA débarque pour solliciter son aide : il s'agit de sauver un scientifique qui vient d'être kidnappé. Mais la mission se révèle bien plus dangereuse que prévu !",
      genre: "action",
      maturity: "15",
      slug: "mourir-peut-attendre",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "After - Chapitre 2",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/07/28/10//19587709_sd_013.mp4",
      sortie: "",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/20/08/04/09/15/4581047.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/08/24/15/47/1948934.jpg",
      sortie: "",
      description:
        "Alors que Tessa et Hardin tentent de recoller les morceaux de leur relation, de nouveaux obstacles viennent se mettre en travers de leur histoire d'amour et de nouveaux secrets sont dévoilés.Suite d'After - Chapitre 1",
      genre: "romance",
      maturity: "15",
      slug: "after---chapitre-2",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Balades sous les étoiles",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/30/09//19589064_sd_013.mp4",
      sortie: "23 septembre 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/06/30/11/07/4838462.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/06/04/12/12/5017196.jpg",
      sortie: "23 septembre 2020",
      description:
        "La nuit, rien n’est tout à fait pareil…Six films courts autour de la nuit, des rêves, de la peur de l'obscurité et de rencontres entre les animaux et les hommes… Cinq jeunes réalisateurs et réalisatrices à l’imagination fertile pour une promenade poétique nocturne.",
      genre: "animation",
      maturity: "15",
      slug: "balades-sous-les-étoiles",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "L'Enfant rêvé",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/07/23/10//19589297_sd_013.mp4",
      sortie: "7 octobre 2020",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/20/08/24/15/06/5256313.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/08/24/15/06/5256313.jpg",
      sortie: "7 octobre 2020",
      description:
        "Depuis l’enfance, François a consacré sa vie au bois. Celui des arbres des forêts du Jura, qu’il connait mieux que personne. Il dirige la scierie familiale avec sa femme Noémie, et tous deux rêvent d’avoir un enfant sans y parvenir. C’est alors que François rencontre Patricia, qui vient de s’installer dans la région. Commence une liaison passionnelle. Très vite, Patricia tombe enceinte. François vacille...",
      genre: "romance",
      maturity: "15",
      slug: "l'enfant-rêvé",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Mulan",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/02/16//19587548_sd_013.mp4",
      sortie: "4 décembre 2020",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/19/12/05/17/24/2034927.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/08/26/09/45/0902918.jpg",
      sortie: "4 décembre 2020",
      description:
        "Lorsque l’Empereur de Chine publie un décret stipulant qu’un homme de chaque famille du pays doit intégrer l’armée impériale pour combattre des envahisseurs venus du nord, Hua Mulan, fille ainée d’un vénérable guerrier désormais atteint par la maladie, décide de prendre sa place au combat...",
      genre: "aventure",
      maturity: "15",
      slug: "mulan",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Sous les étoiles de Paris",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/15/17//19586267_sd_013.mp4",
      sortie: "28 octobre 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/02/27/10/33/0452990.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/02/13/15/35/4274497.jpg",
      sortie: "28 octobre 2020",
      description:
        "Depuis de nombreuses années, Christine vit sous un pont, isolée de toute famille et amis. Par une nuit comme il n’en existe que dans les contes, un jeune garçon de 8 ans fait irruption devant son abri. Suli ne parle pas français, il est perdu, séparé de sa mère… Ensemble, ils partent à sa recherche. A travers les rues de Paris, Christine et Suli vont apprendre à se connaître et à s’apprivoiser. Et Christine à retrouver une humanité qu’elle croyait disparue.",
      genre: "drame",
      maturity: "15",
      slug: "sous-les-étoiles-de-paris",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Greenland - Le dernier refuge",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/07/10/18//19589003_sd_013.mp4",
      sortie: "5 août 2020",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/20/06/25/16/30/0065268.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/07/22/16/07/2153519.jpg",
      sortie: "5 août 2020",
      description:
        "Une comète est sur le point de s’écraser sur la Terre et de provoquer un cataclysme sans précédent. John Garrity décide de se lancer dans un périlleux voyage avec son ex-épouse Allison et leur fils Nathan pour rejoindre le dernier refuge sur Terre à l’abri du désastre.",
      genre: "science fiction",
      maturity: "15",
      slug: "greenland---le-dernier-refuge",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Société Secrète de la Royauté",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/07/08/09//19589184_sd_013.mp4",
      sortie: "25 septembre 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/05/28/09/25/3947092.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "25 septembre 2020",
      description:
        "Une adolescente rebelle possède sans le savoir des superpouvoirs comme tous les enfants royaux placés au second rang dans l’ordre de succession. Fille des souverains d’Illyrie, elle a du mal à se plier au protocole, préférant tracer sa propre voie.",
      genre: "comédie",
      maturity: "15",
      slug: "société-secrète-de-la-royauté",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Dune",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/10/10//19588383_sd_013.mp4",
      sortie: "23 décembre 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/04/15/09/53/3283826.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/09/10/09/30/1304948.jpg",
      sortie: "23 décembre 2020",
      description:
        "L'histoire de Paul Atreides, jeune homme aussi doué que brillant, voué à connaître un destin hors du commun qui le dépasse totalement. Car s'il veut préserver l'avenir de sa famille et de son peuple, il devra se rendre sur la planète la plus dangereuse de l'univers – la seule à même de fournir la ressource la plus précieuse au monde, capable de décupler la puissance de l'humanité.",
      genre: "science fiction",
      maturity: "15",
      slug: "dune",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Miraculous New York : les héros unis",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/22/10//19589955_sd_013.mp4",
      sortie: "26 septembre 2020",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/20/09/23/11/31/3955586.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "26 septembre 2020",
      description:
        "La classe de Marinette doit se rendre à New York, pour célébrer la semaine de l'amitié franco-américaine. Toute la classe y participe… sauf Adrien, car son père refuse de le laisser partir. En prévision de son départ, Ladybug demande à Chat Noir de veiller sur Paris.",
      genre: "animation",
      maturity: "15",
      slug: "miraculous-new-york-:-les-héros-unis",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Bac Nord",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "23 décembre 2020",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/20/07/06/14/42/1574385.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/07/06/14/42/1574385.jpg",
      sortie: "23 décembre 2020",
      description:
        "2012. Les quartiers Nord de Marseille détiennent un triste record : la zone au taux de criminalité le plus élevé de France. Poussée par sa hiérarchie, la BAC Nord, brigade de terrain, cherche sans cesse à améliorer ses résultats. Dans un secteur à haut risque, les flics adaptent leurs méthodes, franchissant parfois la ligne jaune. Jusqu'au jour où le système judiciaire se retourne contre eux…",
      genre: "thriller",
      maturity: "15",
      slug: "bac-nord",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Drunk",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/08/12//19588821_sd_013.mp4",
      sortie: "14 octobre 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/09/07/11/14/1816992.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/09/22/09/21/4492043.jpg",
      sortie: "14 octobre 2020",
      description:
        "Quatre amis décident de mettre en pratique la théorie d’un psychologue norvégien selon laquelle l’homme aurait dès la naissance un déficit d’alcool dans le sang. Avec une rigueur scientifique, chacun relève le défi en espérant tous que leur vie n’en sera que meilleure ! Si dans un premier temps les résultats sont encourageants, la situation devient rapidement hors de contrôle.",
      genre: "drame",
      maturity: "15",
      slug: "drunk",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "L'Origine Du Monde",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "4 novembre 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/09/03/11/40/1820741.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "4 novembre 2020",
      description:
        "Jean-Louis réalise en rentrant chez lui que son coeur s'est arrêté. Plus un seul battement dans sa poitrine, aucun pouls, rien. Pourtant, il est conscient, il parle, se déplace. Est-il encore vivant ? Est-il déjà mort ? Ni son ami vétérinaire Michel, ni sa femme Valérie ne trouvent d'explication à cet étrange phénomène.",
      genre: "comédie",
      maturity: "15",
      slug: "l'origine-du-monde",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "365 Dni",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/09/18//19588842_sd_013.mp4",
      sortie: "9 juin 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/03/02/09/29/5096195.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/06/12/11/35/4866497.jpg",
      sortie: "9 juin 2020",
      description:
        "Massimo est membre de la mafia sicilienne et Laura est directrice des ventes. Cette dernière ne se doute pas de ce qui l'attend lors d'un voyage en Sicile destiné à sauver son couple : Massimo la kidnappe et lui donne 365 jours pour qu'elle tombe amoureuse de lui.",
      genre: "drame",
      maturity: "15",
      slug: "365-dni",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Une nuit au Louvre: Léonard de Vinci",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/07/20/18//19589294_sd_013.mp4",
      sortie: "16 septembre 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/09/23/14/44/3780239.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/09/16/17/25/3880454.jpg",
      sortie: "16 septembre 2020",
      description:
        "Filmée spécialement pour le cinéma, cette visite privée nocturne de l’exposition LÉONARD DE VINCI, conçue et organisée par le Musée du Louvre, est l’occasion unique de contempler les plus belles œuvres du peintre au plus près.",
      genre: "documentaire",
      maturity: "15",
      slug: "une-nuit-au-louvre:-léonard-de-vinci",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Derrière nos écrans de fumée",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/28/14//19589690_sd_013.mp4",
      sortie: "9 septembre 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/08/28/09/44/1001140.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "9 septembre 2020",
      description:
        "Des experts en technologie et des militants sonnent l'alarme concernant certaines de leurs inventions qui provoquent des addictions et déstabilisent les démocraties.",
      genre: "documentaire",
      maturity: "15",
      slug: "derrière-nos-écrans-de-fumée",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Transformers 7",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/commons/v9/common/empty/empty_portrait.png",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "",
      description: "Septième aventure des Transformers sur grand écran.",
      genre: "action",
      maturity: "15",
      slug: "transformers-7",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Relic",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/04/16//19589443_sd_013.mp4",
      sortie: "7 octobre 2020",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/20/09/07/12/22/5906291.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/08/20/13/48/5840479.jpg",
      sortie: "7 octobre 2020",
      description:
        "Lorsqu'Edna disparaît, sa fille et sa petite-fille Sam se rendent dans leur maison familiale isolée pour la retrouver. Peu après le retour d'Edna, les deux femmes commencent à sentir qu'une présence insidieuse dans la maison.",
      genre: "epouvante-horreur",
      maturity: "15",
      slug: "relic",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Wonder Woman 1984",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/22/19//19589594_sd_013.mp4",
      sortie: "30 décembre 2020",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/20/06/19/17/23/5724493.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/06/19/17/23/5724493.jpg",
      sortie: "30 décembre 2020",
      description:
        "Suite des aventures de Diana Prince, alias Wonder Woman, Amazone devenue une super-héroïne dans notre monde. Après la Première guerre mondiale, direction les années 80 ! Cette fois, Wonder Woman doit affronter deux nouveaux ennemis, particulièrement redoutables : Max Lord et Cheetah",
      genre: "action",
      maturity: "15",
      slug: "wonder-woman-1984",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Black Widow",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/03/09/14//19587436_sd_013.mp4",
      sortie: "mai 2021",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/03/09/14/46/0710391.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/02/03/09/30/0554062.jpg",
      sortie: "mai 2021",
      description:
        "Natasha Romanoff, alias Black Widow, voit resurgir la part la plus sombre de son passé pour faire face à une redoutable conspiration liée à sa vie d’autrefois. Poursuivie par une force qui ne reculera devant rien pour l’abattre, Natasha doit renouer avec ses activités d’espionne et avec des liens qui furent brisés, bien avant qu’elle ne rejoigne les Avengers.",
      genre: "action",
      maturity: "15",
      slug: "black-widow",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Fast & Furious 9",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/01/31/22//19585936_sd_013.mp4",
      sortie: "31 mars 2021",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/20/01/31/09/46/1825827.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/02/03/07/33/0819087.jpg",
      sortie: "31 mars 2021",
      description: 'Le neuvième volet de la saga "Fast & Furious"...',
      genre: "action",
      maturity: "15",
      slug: "fast-&-furious-9",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Tout Simplement Noir",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/05/29/09//19588036_sd_013.mp4",
      sortie: "8 juillet 2020",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/20/03/03/12/19/2773827.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/06/12/17/34/2496297.jpg",
      sortie: "8 juillet 2020",
      description:
        "JP, un acteur raté de 40 ans, décide d’organiser la première grosse marche de contestation noire en France, mais ses rencontres, souvent burlesques, avec des personnalités influentes de la communauté et le soutien intéressé qu’il reçoit de Fary, le font osciller entre envie d’être sur le devant de la scène et véritable engagement militant...",
      genre: "comédie",
      maturity: "15",
      slug: "tout-simplement-noir",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Les Mal-aimés",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/24/16//19589016_sd_013.mp4",
      sortie: "16 septembre 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/06/05/15/01/0883022.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/06/05/15/03/3024406.jpg",
      sortie: "16 septembre 2020",
      description:
        "Notre planète regorge de vie, et il nous appartient de la sauvegarder. Mais cette protection peut-elle exister ou être efficace alors même que nous ignorons le rôle et le fonctionnement de la plupart des espèces, ou pire, que certaines nous font peur ? Ce programme de 4 courts métrages montre avec douceur et tendresse l’univers de certains de ces « mal-aimés » auxquels les contes et légendes ou simplement les préjugés ont malheureusement donné une mauvaise réputation.",
      genre: "animation",
      maturity: "15",
      slug: "les-mal-aimés",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Je veux juste en finir",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/06/15//19589471_sd_013.mp4",
      sortie: "4 septembre 2020",
      logo:
        "http://fr.web.img6.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/20/08/06/09/31/18895",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/09/10/16/59/5912027.jpg",
      sortie: "4 septembre 2020",
      description:
        "Un road trip dans lequel Jake emmène sa petite amie pour lui présenter ses parents, qui vivent dans une ferme reculée. Mais après un détour surprise au cours duquel Jake abandonne son amie, la tension et la fragilité psychologique se mêlent à la terreur pure. ",
      genre: "thriller",
      maturity: "15",
      slug: "je-veux-juste-en-finir",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Scooby !",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/18/11//19586539_sd_013.mp4",
      sortie: "8 juillet 2020",
      logo:
        "http://fr.web.img5.acsta.net/c_215_290/pictures/20/06/24/14/34/3337477.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/03/06/11/28/4084680.jpg",
      sortie: "8 juillet 2020",
      description:
        "Après avoir résolu des centaines d'affaires et vécu d'innombrables aventures, Scooby et sa bande doivent désormais s'attaquer à leur énigme la plus redoutable : un complot destiné à déchaîner les forces du chien-fantôme Cerberus.",
      genre: "comédie",
      maturity: "15",
      slug: "scooby-!",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Le Seul et unique Ivan",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/04/12//19586704_sd_013.mp4",
      sortie: "11 septembre 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/08/14/09/47/0275511.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/08/07/10/58/1187641.jpg",
      sortie: "11 septembre 2020",
      description:
        "Ivan est un gorille qui vit dans le centre commercial d’une banlieue américaine. L’arrivée d’une toute jeune éléphante arrachée à sa famille et à la vie sauvage va profondément le remuer et remettre en cause ses convictions...",
      genre: "comédie",
      maturity: "15",
      slug: "le-seul-et-unique-ivan",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Belle-Fille",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/07/17/17//19585924_sd_013.mp4",
      sortie: "19 août 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/07/01/09/37/0173630.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/06/25/16/40/5932668.jpg",
      sortie: "19 août 2020",
      description:
        "Découvrant que son mari la trompe, Louise décide de penser enfin à elle et part décompresser en Corse le temps d’un week-end. Elle passe une folle nuit avec un bel inconnu... Une seule puisque, au petit matin, il ne se réveille pas. Andréa, la mère de celui-ci,  débarque sur les lieux et prend immédiatement Louise pour la belle-fille dont elle a toujours rêvé!",
      genre: "comédie",
      maturity: "15",
      slug: "belle-fille",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Candyman",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/03/17/17//19586100_sd_013.mp4",
      sortie: "",
      logo:
        "http://fr.web.img5.acsta.net/c_215_290/pictures/20/07/09/16/47/0596433.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "",
      description:
        "Les habitants de Cabrini Green, une des cités les plus insalubres en plein cœur de Chicago, ont toujours fait circuler une effroyable légende. Celle d’un tueur tout droit sorti de l’enfer, avec un crochet en guise de main, qui pourrait apparemment être convoqué très facilement par qui l’oserait : Il suffit de répéter son nom 5 fois devant un miroir...",
      genre: "epouvante-horreur",
      maturity: "15",
      slug: "candyman",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "The Batman",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/23/06//19589599_sd_013.mp4",
      sortie: "29 septembre 2021",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/20/08/21/09/18/0274759.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/08/21/09/18/0274759.jpg",
      sortie: "29 septembre 2021",
      description:
        "Le prochain film consacré à l'homme chauve-souris de DC Comics.",
      genre: "action",
      maturity: "15",
      slug: "the-batman",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Black Panther 2",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "4 mai 2022",
      logo:
        "http://fr.web.img5.acsta.net/c_215_290/pictures/18/03/09/17/10/0318945.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "4 mai 2022",
      description:
        "La suite des aventures du Roi du Wakanda, alias Black Panther.",
      genre: "action",
      maturity: "15",
      slug: "black-panther-2",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "The Gentlemen",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/19/10/29/09//19585902_sd_013.mp4",
      sortie: "5 février 2020",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/19/12/16/17/08/1716990.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/19/10/28/16/52/5972151.jpg",
      sortie: "5 février 2020",
      description:
        "Quand Mickey Pearson, baron de la drogue à Londres, laisse entendre qu’il pourrait se retirer du marché, il déclenche une guerre explosive : la capitale anglaise devient le théâtre de tous les chantages, complots, trahisons, corruptions et enlèvements… Dans cette jungle où l’on ne distingue plus ses alliés de ses ennemis, il n’y a de la place que pour un seul roi !",
      genre: "policier",
      maturity: "15",
      slug: "the-gentlemen",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Les Croods 2 : une nouvelle ère",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/21/15//19589142_sd_013.mp4",
      sortie: "2 décembre 2020",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/20/09/21/17/12/3414671.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "2 décembre 2020",
      description:
        "Les Croods ont besoin d'un nouvel endroit où habiter. La famille préhistorique part alors en quête d'un endroit plus sûr. Quand ils découvrent un paradis idyllique entouré de murs, ils pensent que tous leurs problèmes sont résolus... Mais une famille y vit déjà : les Bettermans. Avec leur cabane dans les arbres, leurs inventions étonnantes et leurs hectares irrigués de produits frais, Les Bettermans sont bien au-dessus des Croods sur l'échelle de l'évolution.",
      genre: "animation",
      maturity: "15",
      slug: "les-croods-2-:-une-nouvelle-ère",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Mort sur le Nil",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/19/15//19587955_sd_013.mp4",
      sortie: "décembre 2020",
      logo:
        "http://fr.web.img5.acsta.net/c_215_290/pictures/20/08/19/15/28/4281186.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/09/10/11/31/3318974.jpg",
      sortie: "décembre 2020",
      description:
        "Au cours d’une luxueuse croisière sur le Nil, ce qui devait être une lune de miel idyllique se conclut par la mort brutale de la jeune mariée. Ce crime sonne la fin des vacances pour le détective Hercule Poirot. A bord en tant que passager, il se voit confier l’enquête par le capitaine du bateau.",
      genre: "judiciaire",
      maturity: "15",
      slug: "mort-sur-le-nil",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Eté 85",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/16/16//19588854_sd_013.mp4",
      sortie: "14 juillet 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/06/17/10/50/0315921.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "14 juillet 2020",
      description:
        "L’été de ses 16 ans, Alexis, lors d’une sortie en mer sur la côte normande, est sauvé héroïquement du naufrage par David, 18 ans. Alexis vient de rencontrer l’ami de ses rêves. Mais le rêve durera-t-il plus qu'un été ? L’été 85...",
      genre: "drame",
      maturity: "15",
      slug: "eté-85",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Avatar 2",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "14 décembre 2022",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/commons/v9/common/empty/empty_portrait.png",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "14 décembre 2022",
      description: 'Retour sur Pandora avec la suite d\'"Avatar".',
      genre: "science fiction",
      maturity: "15",
      slug: "avatar-2",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Falling",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/13/14//19589496_sd_013.mp4",
      sortie: "4 novembre 2020",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/20/09/17/13/18/0957549.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/09/17/13/18/0957549.jpg",
      sortie: "4 novembre 2020",
      description:
        "John vit en Californie avec son compagnon Eric et leur fille adoptive Mónica, loin de la vie rurale conservatrice qu’il a quittée voilà des années. Son père, Willis, un homme obstiné issu d’une époque révolue, vit désormais seul dans la ferme isolée où a grandi John.L’esprit de Willis déclinant, John l’emmène avec lui dans l’Ouest, dans l’espoir que sa soeur Sarah et lui pourront trouver au vieil homme un foyer plus proche de chez eux...",
      genre: "drame",
      maturity: "15",
      slug: "falling",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Israël, le voyage interdit - Partie IV : Pessah",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/22/14//19588030_sd_013.mp4",
      sortie: "28 octobre 2020",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/20/03/09/17/05/2068216.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "28 octobre 2020",
      description:
        "Et si mon hostilité à Israël n’avait été qu’une tentative pour échapper à ce mot si court et si difficile à prononcer : Juif… Et s’il en était de même pour l’humanité ? Pourtant, la société multiethnique dont j’avais rêvé en Algérie, n’est-elle pas là ? Ce peuple-monde, en définitive, qui est-il ? Notre voyage se poursuit… Voyage de tous les dangers… Délesté de narratifs qui m’avaient constitué, n’allais-je pas me perdre ? Et ma fille Naouel, de cette transmission tardive, qu’allait-elle en faire ? Une fois retrouvée toute notre famille, le fantôme de l’Oncle cessera-t-il de me hanter ?",
      genre: "documentaire",
      maturity: "15",
      slug: "israël,-le-voyage-interdit---partie-iv-:-pessah",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Billie",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/07/30/12//19588940_sd_013.mp4",
      sortie: "30 septembre 2020",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/20/07/16/17/14/5875027.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/06/19/16/49/2610435.jpg",
      sortie: "30 septembre 2020",
      description:
        "BILLIE HOLIDAY est l'une des plus grandes voix de tous les temps. Elle fut la première icône de la protestation contre le racisme ce qui lui a valu de puissants ennemis. A la fin des années 1960, la journaliste Linda Lipnack Kuehl commence une biographie officielle de l'artiste.",
      genre: "documentaire",
      maturity: "15",
      slug: "billie",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "En avant",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/19/11/26/10//19585566_sd_013.mp4",
      sortie: "4 mars 2020",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/20/01/06/14/00/1992182.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/01/16/17/16/1612657.jpg",
      sortie: "4 mars 2020",
      description:
        "Dans la banlieue d'un univers imaginaire, deux frères elfes se lancent dans une quête extraordinaire pour découvrir s'il reste encore un peu de magie dans le monde.",
      genre: "animation",
      maturity: "15",
      slug: "en-avant",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Ava",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/24/15//19589631_sd_013.mp4",
      sortie: "",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/20/07/08/17/43/1461793.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/06/24/16/41/2043042.jpg",
      sortie: "",
      description:
        "Une femme assassin du nom de Ava travaille pour une importante organisation secrète. Elle parcourt le monde. Une de ses missions se passe mal, elle va être contrainte de lutter pour sa propre survie.",
      genre: "action",
      maturity: "15",
      slug: "ava",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Top Gun: Maverick",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/19/12/16/14//19584961_sd_013.mp4",
      sortie: "14 juillet 2021",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/07/01/16/48/2529989.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "14 juillet 2021",
      description:
        "Après avoir été l’un des meilleurs pilotes de chasse de la Marine américaine pendant plus de trente ans, Pete “Maverick\" Mitchell continue à repousser ses limites en tant que pilote d'essai. Il refuse de monter en grade, car cela l’obligerait à renoncer à voler. Il est chargé de former un détachement de jeunes diplômés de l’école Top Gun pour une mission spéciale qu’aucun pilote n'aurait jamais imaginée. Lors de cette mission, Maverick rencontre le lieutenant Bradley “Rooster” Bradshaw, le fils de son défunt ami, le navigateur Nick “Goose” Bradshaw. Face à un avenir incertain, hanté par ses fantômes, Maverick va devoir affronter ses pires cauchemars au cours d’une mission qui exigera les plus grands des sacrifices.",
      genre: "action",
      maturity: "15",
      slug: "top-gun:-maverick",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Escape from Pretoria",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/01/24/17//19587386_sd_013.mp4",
      sortie: "9 septembre 2020",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/20/02/24/08/57/5600792.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/02/24/08/57/5600792.jpg",
      sortie: "9 septembre 2020",
      description:
        "L'histoire vraie de l'incarcération et de l'évasion de deux activistes anti-Apartheid, Tim Jenkin et Stephen Lee, en Afrique du Sud en 1978. Incarcérés dans la prison de sécurité maximale de Pretoria, ils décident d'envoyer un message clair au gouvernement et de s'échapper !",
      genre: "biopic",
      maturity: "15",
      slug: "escape-from-pretoria",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "The King's Man : Première Mission",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/22/09//19588899_sd_013.mp4",
      sortie: "février 2021",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/20/07/17/10/14/3233553.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/07/28/14/42/1920230.jpg",
      sortie: "février 2021",
      description:
        "Lorsque les pires tyrans et génies criminels de l’Histoire se réunissent pour planifier l’élimination de millions d’innocents, un homme se lance dans une course contre la montre pour contrecarrer leurs plans. Découvrez les origines de la toute première agence de renseignement indépendante.",
      genre: "action",
      maturity: "15",
      slug: "the-king's-man-:-première-mission",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Transformers 6",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/17/03/10/12/46/225516.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "",
      description:
        "Sixième volet de la saga Transformers, et un spin-off à l'Autobot Bumblebee.",
      genre: "action",
      maturity: "15",
      slug: "transformers-6",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "The Tax Collector",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/07/02/10//19589102_sd_013.mp4",
      sortie: "",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/20/07/01/09/19/0482017.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/18/08/13/17/41/4138603.jpg",
      sortie: "",
      description:
        "David et Creeper travaillent comme \"percepteurs d'impôts\" pour un seigneur du crime nommé Wizard, en récupérant sa part des profits auprès des gangs locaux. Mais lorsque l'ancien rival de Wizard revient du Mexique, toute son entreprise est chamboulée, et David se retrouve à devoir protéger ce qui compte le plus pour lui - sa famille.",
      genre: "action",
      maturity: "15",
      slug: "the-tax-collector",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Jurassic World: Le Monde d'après",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "9 juin 2021",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/20/08/17/09/37/0389229.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/08/17/09/37/1964422.jpg",
      sortie: "9 juin 2021",
      description: 'Le troisième volet de la saga "Jurassic World".',
      genre: "action",
      maturity: "15",
      slug: "jurassic-world:-le-monde-d'après",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "L'Ordre moral",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/03/14//19589434_sd_013.mp4",
      sortie: "30 septembre 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/07/27/15/50/4579671.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "30 septembre 2020",
      description:
        "En 1918, Maria Adelaide Coelho da Cunha, héritière et propriétaire du journal Diário de Notícias, abandonne le luxe social et culturel familial dans lequel elle vit, pour s'enfuir avec un insignifiant chauffeur de 22 ans plus jeune qu’elle. Les conséquences de cette décision vont être douloureuses et moralement dévastatrices.",
      genre: "drame",
      maturity: "15",
      slug: "l'ordre-moral",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Project Power",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/07/15/16//19589247_sd_013.mp4",
      sortie: "14 août 2020",
      logo:
        "http://fr.web.img6.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/20/07/15/17/25/02961",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "14 août 2020",
      description:
        "Dans les rues de La Nouvelle-Orléans, la rumeur commence à circuler à propos d'une pilule mystérieuse qui libère des super-pouvoirs différents selon chaque personne. Le problème ? Impossible de savoir ce qui va se passer avant de l'avaler. Si certains se voient armés d'une peau à l'épreuve des balles, deviennent invisibles ou reçoivent une force surhumaine, d'autres subissent une réaction mortelle.",
      genre: "science fiction",
      maturity: "15",
      slug: "project-power",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Kajillionaire",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/31/10//19589126_sd_013.mp4",
      sortie: "30 septembre 2020",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/20/08/03/13/35/5418342.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/09/28/13/35/1075685.jpg",
      sortie: "30 septembre 2020",
      description:
        "Theresa et Robert  ont passé 26 ans à former leur fille unique, Old Dolio, à escroquer, arnaquer et voler à chaque occasion. Au cours d'un cambriolage conçu à la hâte, ils proposent à une jolie inconnue, Mélanie, de les rejoindre, bouleversant complètement la routine d'Old Dolio.",
      genre: "comédie",
      maturity: "15",
      slug: "kajillionaire",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Invisible Man",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/19/11/07/17//19586001_sd_013.mp4",
      sortie: "26 février 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/02/10/13/26/1423227.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/02/24/09/21/2936902.jpg",
      sortie: "26 février 2020",
      description:
        "Cecilia Kass est en couple avec un brillant et riche scientifique. Ne supportant plus son comportement violent et tyrannique, elle prend la fuite une nuit et se réfugie auprès de sa sœur, leur ami d'enfance et sa fille adolescente. Mais quand l'homme se suicide en laissant à Cecilia une part importante de son immense fortune, celle-ci commence à se demander s'il est réellement mort...",
      genre: "fantastique",
      maturity: "15",
      slug: "invisible-man",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Seize Printemps",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/17/17//19589063_sd_013.mp4",
      sortie: "9 décembre 2020",
      logo:
        "http://fr.web.img5.acsta.net/c_215_290/pictures/20/06/04/09/27/4225065.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "9 décembre 2020",
      description:
        "Suzanne a seize ans. Elle s’ennuie avec les gens de son âge. Tous les jours pour aller au lycée, elle passe devant un théâtre. Elle y rencontre un homme plus vieux qu’elle qui devient son obsession. Grâce à leur différence d’âge, ils pensent ne plus s’ennuyer ensemble et tombent amoureux. Mais Suzanne sent qu’elle risque de passer à côté de sa vie, celle de ses seize ans qu’elle avait tant de mal à vivre comme les autres.",
      genre: "drame",
      maturity: "15",
      slug: "seize-printemps",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "The Old Guard",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/07/02/15//19589116_sd_013.mp4",
      sortie: "10 juillet 2020",
      logo:
        "http://fr.web.img4.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/20/05/26/09/44/59888",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/06/29/12/02/3081203.jpg",
      sortie: "10 juillet 2020",
      description:
        "Une petite bande soudée de mercenaires immortels, dirigée par la redoutable Andy, se bat depuis des siècles pour protéger les humains.",
      genre: "action",
      maturity: "15",
      slug: "the-old-guard",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "L'Appel de la forêt",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/19/11/20/16//19586629_sd_013.mp4",
      sortie: "19 février 2020",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/20/01/31/11/16/5333556.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/02/10/09/12/3135336.jpg",
      sortie: "19 février 2020",
      description:
        "La paisible vie domestique de Buck, un chien au grand cœur, bascule lorsqu’il est brusquement arraché à sa maison en Californie et se retrouve enrôlé comme chien de traîneau dans les étendues sauvages du Yukon canadien pendant la ruée vers l’or des années 1890. Buck va devoir s’adapter et lutter pour survivre, jusqu’à finalement trouver sa véritable place dans le monde en devenant son propre maître…",
      genre: "aventure",
      maturity: "15",
      slug: "l'appel-de-la-forêt",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Conjuring 3 : sous l'emprise du diable",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "2 juin 2021",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/19/04/23/09/20/4681847.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "2 juin 2021",
      description:
        "Dans cette affaire issue de leurs dossiers secrets – l'une des plus spectaculaires – , Ed et Lorrain commencent par se battre pour protéger l'âme d'un petit garçon, puis basculent dans un monde radicalement inconnu. Ce sera la première fois dans l'histoire des États-Unis qu'un homme soupçonné de meurtre plaide la possession démoniaque comme ligne de défense.",
      genre: "epouvante-horreur",
      maturity: "15",
      slug: "conjuring-3-:-sous-l'emprise-du-diable",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Venom: Let There Be Carnage",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "23 juin 2021",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/20/01/14/10/12/3234976.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "23 juin 2021",
      description: "La suite de Venom avec Tom Hardy.",
      genre: "action",
      maturity: "15",
      slug: "venom:-let-there-be-carnage",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Waiting For The Barbarians",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/07/22/16//19589198_sd_013.mp4",
      sortie: "31 août 2020",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/20/07/21/10/48/4318628.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/07/24/10/33/4218868.jpg",
      sortie: "31 août 2020",
      description:
        "Un magistrat bon et juste gère un fort d'une ville frontalière de l'Empire. Le pouvoir central s’inquiète d’une invasion barbare et dépêche sur les lieux le colonel Joll, un tortionnaire de la pire espèce. Son arrivée marque le début de l'oppression du peuple indigène. Une jeune fille blessée attire l'attention du magistrat qui décide de la prendre sous son aile.",
      genre: "drame",
      maturity: "15",
      slug: "waiting-for-the-barbarians",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Le Corbeau et un drôle de moineau",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/08/17//18747290_sd_013.mp4",
      sortie: "10 octobre 2017",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/20/03/06/14/21/5215512.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "10 octobre 2017",
      description:
        "C’est un programme de Trois courts métrages produits par le Studio Kanoon et composé par les Films du Wippet. Les films ont été restaurés et numérisés (initialement les films ont été tournés en 35 mm).",
      genre: "animation",
      maturity: "15",
      slug: "le-corbeau-et-un-drôle-de-moineau",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "La Baleine et l'escargote",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/09/15//19589801_sd_013.mp4",
      sortie: "21 octobre 2020",
      logo:
        "http://fr.web.img5.acsta.net/c_215_290/pictures/20/07/28/17/09/2082147.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "21 octobre 2020",
      description:
        "Une petite escargote de mer s’ennuie sur le rocher d’un vieux port et rêve de parcourir le monde. Un jour, une grande baleine à bosse lui propose de l’emmener en voyage à travers les océans du globe. Cette amitié insolite nous plonge dans une odyssée fabuleuse au cœur de la nature, de l’infiniment petit à l’infiniment grand.",
      genre: "animation",
      maturity: "15",
      slug: "la-baleine-et-l'escargote",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Le Discours",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "16 décembre 2020",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/20/07/28/09/10/3049677.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/07/28/09/10/3049677.jpg",
      sortie: "16 décembre 2020",
      description:
        "Coincé à un repas de famille qui lui donne des envies de meurtre, Adrien attend. Il attend que Sonia réponde à son sms et mette fin à la « pause » qu’elle lui fait subir depuis un mois. Et voilà que Ludo, son futur beau-frère, lui demande de faire un « petit » discours pour le mariage ! Adrien panique. Mais si ce discours était finalement la meilleure chose qui puisse lui arriver ?",
      genre: "comédie",
      maturity: "15",
      slug: "le-discours",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Demon Slayer : Le train de l'infini",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/04/18/11//19588443_sd_013.mp4",
      sortie: "",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/08/03/10/14/5958342.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "",
      description:
        "Enmu, la première Lune Inférieure, a été chargé de tuer Kamado Tanjirô pour devenir une Lune Supérieure et avoir plus sang de Muzan. Pendant ce temps, Tanjirô, Zen'itsu et Inosuke décident d'acheter des billets pour monter à bord du train de l'infini et ainsi rejoindre Rengoku Kyôjurô, le Pilier de la flamme, dans l'espoir d'en apprendre davantage sur la danse du dieu du feu.",
      genre: "animation",
      maturity: "15",
      slug: "demon-slayer-:-le-train-de-l'infini",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Comment je suis devenu super-héros",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/19/10/25/16//19586239_sd_013.mp4",
      sortie: "16 décembre 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/08/18/10/26/4836199.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/08/18/10/27/2747745.jpg",
      sortie: "16 décembre 2020",
      description:
        "Paris 2020. Dans une société où les surhommes sont banalisés et parfaitement intégrés, une mystérieuse substance procurant des super-pouvoirs à ceux qui n’en ont pas se répand. Face aux incidents qui se multiplient, les lieutenants Moreau et Schaltzmann sont chargés de l’enquête.",
      genre: "policier",
      maturity: "15",
      slug: "comment-je-suis-devenu-super-héros",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "#Alive",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/15/12//19589893_sd_013.mp4",
      sortie: "8 septembre 2020",
      logo:
        "http://fr.web.img4.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/20/05/27/08/29/47888",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "8 septembre 2020",
      description:
        "Comme un terrifiant virus ravage sa ville, un homme seul se retrouve coincé dans son appartement, sans aucun moyen d’appeler à l’aide, mais prêt à tout pour s’en sortir.",
      genre: "drame",
      maturity: "15",
      slug: "#alive",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Le Cas Richard Jewell",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/19/12/11/15//19585923_sd_013.mp4",
      sortie: "19 février 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/01/09/14/26/2410363.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/06/17/11/03/2852465.jpg",
      sortie: "19 février 2020",
      description:
        "En 1996, Richard Jewell fait partie de l'équipe chargée de la sécurité des Jeux d'Atlanta. Il est l'un des premiers à alerter de la présence d'une bombe et à sauver des vies. Mais il se retrouve bientôt suspecté... de terrorisme.",
      genre: "drame",
      maturity: "15",
      slug: "le-cas-richard-jewell",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "La Voie de la justice",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/19/12/02/18//19585010_sd_013.mp4",
      sortie: "29 janvier 2020",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/20/01/14/09/12/0418204.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/19/12/10/11/10/1495173.jpg",
      sortie: "29 janvier 2020",
      description:
        "Le combat historique du jeune avocat Bryan Stevenson.  Après ses études à l’université de Harvard, Bryan Stevenson aurait pu se lancer dans une carrière des plus lucratives. Il décide pourtant de se rendre en Alabama pour défendre ceux qui ont été condamnés à tort, avec le soutien d’une militante locale, Eva Ansley.",
      genre: "biopic",
      maturity: "15",
      slug: "la-voie-de-la-justice",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "The Suicide Squad",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "4 août 2021",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/08/24/09/32/3435505.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/08/24/09/32/3463586.jpg",
      sortie: "4 août 2021",
      description: "Le nouveau film DC Comics centré sur la Suicide Squad.",
      genre: "fantastique",
      maturity: "15",
      slug: "the-suicide-squad",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "La Chouette en toque",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/31/12//19589709_sd_013.mp4",
      sortie: "14 octobre 2020",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/20/06/05/15/08/3999365.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/06/05/15/08/3999365.jpg",
      sortie: "14 octobre 2020",
      description:
        "Dans ce programme, la Chouette du cinéma aborde avec humour la chaîne alimentaire, invite les enfants à la pâtisserie et évoque la valeur affective de notre nourriture. Elle présente l’adaptation d’un conte japonais burlesque et enchante une chanson populaire vieille de cent cinquante ans ! En plus des cinq fruits et légumes par jour, voici cinq contes gourmands que la Chouette « en toque » a mitonnés avec la magie du cinéma d’animation.",
      genre: "animation",
      maturity: "15",
      slug: "la-chouette-en-toque",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "USS Greyhound - La bataille de l'Atlantique",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/03/05/18//19587931_sd_013.mp4",
      sortie: "10 juillet 2020",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/20/06/15/09/53/3697568.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/06/12/10/45/1345517.jpg",
      sortie: "10 juillet 2020",
      description:
        "Durant la Seconde Guerre mondiale, un militaire de la Navy commande le Greyhound.",
      genre: "drame",
      maturity: "15",
      slug: "uss-greyhound---la-bataille-de-l'atlantique",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Eternals",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "novembre 2021",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/19/07/22/12/41/1985226.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "novembre 2021",
      description:
        "Appartenant à une ancienne race d'êtres humains, les Eternels, qui peuvent manipuler l'énergie cosmique, ont été créés par les Célestes afin de protéger la Terre contre leurs homologues, les Déviants.",
      genre: "science fiction",
      maturity: "15",
      slug: "eternals",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Birds of Prey et la fantabuleuse histoire de Harley Quinn",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/01/13/16//19585484_sd_013.mp4",
      sortie: "5 février 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/19/12/12/17/09/3732824.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/19/12/06/09/24/0359653.jpg",
      sortie: "5 février 2020",
      description:
        "Lorsque Roman Sionis, l'ennemi le plus abominable – et le plus narcissique – de Gotham, et son fidèle acolyte Zsasz décident de s'en prendre à une certaine Cass, la ville est passée au peigne fin pour retrouver la trace de la jeune fille. Les parcours de Harley, de la Chasseuse, de Black Canary et de Renee Montoya se télescopent et ce quatuor improbable n'a d'autre choix que de faire équipe pour éliminer Roman…",
      genre: "action",
      maturity: "15",
      slug: "birds-of-prey-et-la-fantabuleuse-histoire-de-harley-quinn",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "La Femme qui s’est enfuie",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/09/18//19588936_sd_013.mp4",
      sortie: "30 septembre 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/08/26/17/43/3451037.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/02/04/15/42/4070745.jpg",
      sortie: "30 septembre 2020",
      description:
        "Pendant que son mari est en voyage d’affaires, Gamhee rend visite à trois de ses anciennes amies. A trois reprises, un homme surgit de manière inattendue et interrompt le fil tranquille de leurs conversations…",
      genre: "drame",
      maturity: "15",
      slug: "la-femme-qui-s’est-enfuie",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Apprendre à t'aimer",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/28/17//19589694_sd_013.mp4",
      sortie: "8 septembre 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/08/19/11/11/3211739.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/08/19/11/26/2454695.jpg",
      sortie: "8 septembre 2020",
      description:
        "Frank est un père dont les rêves vont être bousculés par la naissance de sa fille porteuse de trisomie 21. Comment va-t-il affronter les petits et grands sacrifices que cette nouvelle vie lui impose ?",
      genre: "drame",
      maturity: "15",
      slug: "apprendre-à-t'aimer",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Les Animaux anonymes",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/24/15//19589993_sd_013.mp4",
      sortie: "20 janvier 2021",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/09/24/15/32/5671984.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "20 janvier 2021",
      description:
        "Le rapport de force entre l'homme et l'animal a changé. Dans une campagne reculée, toute rencontre avec le dominant peut devenir hostile.",
      genre: "fantastique",
      maturity: "15",
      slug: "les-animaux-anonymes",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Sans un bruit 2",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/02/25/11//19587467_sd_013.mp4",
      sortie: "21 avril 2021",
      logo:
        "http://fr.web.img5.acsta.net/c_215_290/pictures/20/03/05/08/59/1658491.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/02/25/16/53/5551188.jpg",
      sortie: "21 avril 2021",
      description:
        "Après les événements mortels survenus dans sa maison, la famille Abbot doit faire face au danger du monde extérieur. Pour survivre, ils doivent se battre en silence. Forcés à s’aventurer en terrain inconnu, ils réalisent que les créatures qui attaquent au moindre son ne sont pas la seule menace qui se dresse sur leur chemin.",
      genre: "thriller",
      maturity: "15",
      slug: "sans-un-bruit-2",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Chien Pourri, la vie à Paris !",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/07/21/14//19588197_sd_013.mp4",
      sortie: "7 octobre 2020",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/20/07/21/12/30/2277362.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/07/21/12/30/2277362.jpg",
      sortie: "7 octobre 2020",
      description:
        "Il était une fois un chien parisien, naïf et passionné appelé Chien Pourri. Avec Chaplapla, son fidèle compagnon de gouttière, Chien Pourri arpente les rues de Paris la truffe au vent. Peu importe les catastrophes qu’il provoque, Chien Pourri retombe toujours sur ses pattes ! Tant et si bien que les autres chiens commencent à trouver ça louche. La folle aventure de Chien Pourri et ses amis pour faire découvrir la poésie de Paris aux tout-petits !",
      genre: "animation",
      maturity: "15",
      slug: "chien-pourri,-la-vie-à-paris-!",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "The Good criminal",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/26/16//19587804_sd_013.mp4",
      sortie: "14 octobre 2020",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/20/08/21/11/22/0413561.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/07/06/11/03/2736348.jpg",
      sortie: "14 octobre 2020",
      description:
        "Tom, un légendaire voleur de banque décide de se ranger et passe un deal, contre son immunité, avec le FBI qui n’a jamais réussi à lui mettre la main dessus. Il réalise vite que les Fédéraux ont un autre plan en tête : partager son butin et le faire accuser d’un meurtre. Pris au piège, pourchassé par la police et le FBI, il décide de reprendre les choses en main et se lance dans une vengeance explosive.",
      genre: "action",
      maturity: "15",
      slug: "the-good-criminal",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Coup de foudre garanti",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/11/09//19589842_sd_013.mp4",
      sortie: "3 septembre 2020",
      logo:
        "http://fr.web.img3.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/20/08/21/09/21/48184",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/08/21/09/21/4818463.jpg",
      sortie: "3 septembre 2020",
      description:
        "Quand une avocate engagée mais fauchée accepte d'aider un charmant client à poursuivre un site de rencontre qui garantit de trouver l'amour, gare aux étincelles !",
      genre: "comédie",
      maturity: "15",
      slug: "coup-de-foudre-garanti",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "The Babysitter: Killer Queen",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/28/13//19589688_sd_013.mp4",
      sortie: "10 septembre 2020",
      logo:
        "http://fr.web.img4.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/20/08/28/09/43/26329",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/08/12/23/07/1047433.jpg",
      sortie: "10 septembre 2020",
      description:
        "Deux après avoir vaincu un culte satanique dirigé par sa babysitter, Bee, Cole tente d'oublier son passé et se concentre sur sa vie de lycéen. Bientôt de vieux démons refont surface et Cole devra à nouveau se montrer plus malin que les forces du mal.",
      genre: "comédie",
      maturity: "15",
      slug: "the-babysitter:-killer-queen",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Mortal",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/07/16/14//19589252_sd_013.mp4",
      sortie: "27 août 2020",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/20/08/19/15/38/5129087.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "27 août 2020",
      description:
        "Eric, un jeune américano-norvégien, s'est réfugié, seul, au cœur de la forêt, après avoir causé l'incendie d'une ferme, tuant 5 personnes, puis provoqué la mort accidentelle d’une sixième personne. Arrêté par la police, il rencontre une psychologue, Christine, qui semble pouvoir l'aider. Ensemble, ils découvrent vite qu’Eric a en réalité des pouvoirs surnaturels, qu'il ne maîtrise pas…",
      genre: "action",
      maturity: "15",
      slug: "mortal",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "The King Of Staten Island",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/26/15//19587476_sd_013.mp4",
      sortie: "22 juillet 2020",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/20/06/24/13/27/4350158.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/06/24/13/27/4350158.jpg",
      sortie: "22 juillet 2020",
      description:
        "Il semblerait que le développement de Scott ait largement été freiné depuis le décès de son père pompier, quand il avait 7 ans. Il en a aujourd’hui 24 et entretient le doux rêve d’ouvrir un restaurant/salon de tatouage. Sa vie est chamboulée quand sa mère, au crochet de laquelle il vit toujours, se met à fréquenter Ray, lui aussi pompier.",
      genre: "comédie",
      maturity: "15",
      slug: "the-king-of-staten-island",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Terrible Jungle",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/07/09/09//19589193_sd_013.mp4",
      sortie: "29 juillet 2020",
      logo:
        "http://fr.web.img5.acsta.net/c_215_290/pictures/20/07/08/12/33/5415700.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "29 juillet 2020",
      description:
        "Eliott, jeune chercheur naïf, part étudier les Otopis, un peuple mystérieux d’Amazonie. C’est aussi l’occasion pour lui de s’éloigner de l’emprise de sa mère, la possessive Chantal de Bellabre. Mais celle-ci, inquiète pour lui, décide de partir à sa recherche en s’aventurant dans l’étrange forêt amazonienne.",
      genre: "aventure",
      maturity: "15",
      slug: "terrible-jungle",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Bad Boys For Life",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/19/11/05/16//19586405_sd_013.mp4",
      sortie: "22 janvier 2020",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/19/11/22/09/44/3027567.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/01/16/09/47/5984654.jpg",
      sortie: "22 janvier 2020",
      description:
        "Les Bad Boys Mike Lowrey et Marcus Burnett se retrouvent pour résoudre une ultime affaire.",
      genre: "action",
      maturity: "15",
      slug: "bad-boys-for-life",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Gagarine",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/18/15//19589592_sd_013.mp4",
      sortie: "18 novembre 2020",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/20/06/22/08/46/2536282.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/09/18/15/45/3878970.jpg",
      sortie: "18 novembre 2020",
      description:
        'Youri, 16 ans, a grandi à Gagarine, immense cité de briques rouges d’Ivry-sur-Seine, où il rêve de devenir cosmonaute. Quand il apprend qu’elle est menacée de démolition, Youri décide de rentrer en résistance. Avec la complicité de Diana, Houssam et des habitants, il se donne pour mission de sauver la cité, devenue son " vaisseau spatial ".',
      genre: "drame",
      maturity: "15",
      slug: "gagarine",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Pourquoi je vis",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/24/09//19589609_sd_013.mp4",
      sortie: "7 septembre 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/08/18/16/22/5529172.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/08/18/16/27/3801453.jpg",
      sortie: "7 septembre 2020",
      description:
        "Un téléfilm consacré au parcours tragique du jeune chanteur Grégory Lemarchal et son combat contre la mucoviscidose.",
      genre: "biopic",
      maturity: "15",
      slug: "pourquoi-je-vis",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Aquaman 2",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "14 décembre 2022",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/19/02/01/21/02/1004291.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/19/02/01/21/02/1004291.jpg",
      sortie: "14 décembre 2022",
      description: "Suite des aventures d'Aquaman.",
      genre: "action",
      maturity: "15",
      slug: "aquaman-2",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Irréversible - Inversion Intégrale",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/10/13//19589505_sd_013.mp4",
      sortie: "26 août 2020",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/19/07/26/10/19/5367017.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/19/07/26/10/19/5367017.jpg",
      sortie: "26 août 2020",
      description: "Irréversible... dans l'ordre chronologique",
      genre: "drame",
      maturity: "15",
      slug: "irréversible---inversion-intégrale",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Tyler Rake",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/04/07/13//19588261_sd_013.mp4",
      sortie: "24 avril 2020",
      logo:
        "http://fr.web.img6.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/20/03/31/09/22/02592",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/03/24/11/14/0720152.jpg",
      sortie: "24 avril 2020",
      description:
        "Tyler Rake est un mercenaire intrépide chargé par un caïd incarcéré de sauver son fils enlevé, une mission ultra-périlleuse qui frôle l'impossible.",
      genre: "action",
      maturity: "15",
      slug: "tyler-rake",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Nightmare Island",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/02/04/17//19587512_sd_013.mp4",
      sortie: "12 février 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/19/12/04/15/26/0979818.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/02/13/11/15/0776263.jpg",
      sortie: "12 février 2020",
      description:
        "L’énigmatique M. Roarke donne vie aux rêves de ses chanceux invités dans un complexe hôtelier luxurieux et isolé. Mais quand leurs fantasmes les plus fous se transforment en véritables cauchemars, les invités n’ont d’autre choix que de résoudre les mystères de cette île pour en sortir vivants.",
      genre: "epouvante-horreur",
      maturity: "15",
      slug: "nightmare-island",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "The Hunt",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/09/12//19587835_sd_013.mp4",
      sortie: "22 juin 2020",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/20/08/19/21/23/3419224.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/08/19/21/23/3419224.jpg",
      sortie: "22 juin 2020",
      description:
        "Sur fond d’obscure théorie du complot sur internet, un groupe de dirigeants se rassemble pour la première fois dans un manoir retiré, afin de se divertir en chassant de simples citoyens américains. Mais leurs sombres desseins vont être mis en péril par Crystal, une de leurs proies, capable de les battre à leur propre jeu. ",
      genre: "action",
      maturity: "15",
      slug: "the-hunt",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Les Phénomènes",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/07/14//19589787_sd_013.mp4",
      sortie: "2 septembre 2020",
      logo:
        "http://fr.web.img5.acsta.net/c_215_290/pictures/20/08/18/08/33/4064289.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "2 septembre 2020",
      description:
        "Informée par un mystérieux vagabond, une jeune employée de fast-food se découvre des super-pouvoirs... et met au jour une conspiration écœurante.",
      genre: "drame",
      maturity: "15",
      slug: "les-phénomènes",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Irresistible",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/19/16//19588801_sd_013.mp4",
      sortie: "1 juillet 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/06/18/10/56/4695206.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "1 juillet 2020",
      description:
        "Un consultant politique démocrate aide un ancien colonel de la Marine dans son élection à la mairie d'une ville du Wisconsin.",
      genre: "comédie",
      maturity: "15",
      slug: "irresistible",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Thor: Love And Thunder",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "9 février 2022",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/19/07/22/12/35/1807628.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "9 février 2022",
      description: "Jane Foster devient Thor !",
      genre: "aventure",
      maturity: "15",
      slug: "thor:-love-and-thunder",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Artemis Fowl",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/12/16//19588889_sd_013.mp4",
      sortie: "12 juin 2020",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/20/04/17/15/29/2446287.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/06/15/11/13/0800373.jpg",
      sortie: "12 juin 2020",
      description:
        "Artemis Fowl, un génie de 12 ans, descendant d'une longue lignée de malfaiteurs, cherche désespérément à sauver son père pris en otage. Afin de payer la rançon, il doit infiltrer une ancienne civilisation souterraine : le monde des fées, éblouissant et technologiquement avancé.",
      genre: "aventure",
      maturity: "15",
      slug: "artemis-fowl",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Soul",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/03/12/14//19587791_sd_013.mp4",
      sortie: "25 novembre 2020",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/20/04/15/10/07/3174930.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/04/15/10/07/3174930.jpg",
      sortie: "25 novembre 2020",
      description:
        "Au moment où Joe pense que son rêve est désormais à portée de main, un pas malencontreux l’expédie dans un endroit fantastique où il est obligé de réfléchir à nouveau à la signification d’avoir une âme. C’est là qu’il se lie d’amitié avec 22, une âme qui ne pense pas que la vie sur Terre soit aussi bien que ce qu’on veut bien lui faire croire...",
      genre: "animation",
      maturity: "15",
      slug: "soul",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Never Rarely Sometimes Always",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/25/12//19588800_sd_013.mp4",
      sortie: "19 août 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/06/04/17/33/2559795.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/02/19/18/37/4431431.jpg",
      sortie: "19 août 2020",
      description:
        "Deux adolescentes, Autumn et sa cousine Skylar, résident au sein d'une zone rurale de Pennsylvanie. Autumn doit faire face à une grossesse non désirée. Ne bénéficiant d'aucun soutien de la part de sa famille, les deux jeunes femmes se lancent dans un périple semé d'embûches jusqu'à New York.",
      genre: "drame",
      maturity: "15",
      slug: "never-rarely-sometimes-always",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Calamity, une enfance de Martha Jane Cannary",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/10/11//19588866_sd_013.mp4",
      sortie: "14 octobre 2020",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/20/07/29/12/21/0169162.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/08/13/14/40/5631027.jpg",
      sortie: "14 octobre 2020",
      description:
        "1863, dans un convoi qui progresse vers l’Ouest avec l’espoir d’une vie meilleure, le père de Martha Jane se blesse. C’est elle qui doit conduire le chariot familial et soigner les chevaux. L’apprentissage est rude et pourtant Martha Jane ne s’est jamais sentie aussi libre.",
      genre: "animation",
      maturity: "15",
      slug: "calamity,-une-enfance-de-martha-jane-cannary",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Le Jardin secret",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/03/11/17//19587643_sd_013.mp4",
      sortie: "23 octobre 2020",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/20/03/12/09/14/0919024.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/03/12/09/14/0919024.jpg",
      sortie: "23 octobre 2020",
      description:
        "A la mort de ses parents, la jeune Mary Lennox, enfant solitaire à l’imagination débordante, quitte l’Inde pour rejoindre la campagne Britannique. Exilée dans le manoir de son oncle, elle fera la rencontre de son cousin Colin, d’un jeune garçon nommé Dickon, de l'adorable chien Fozzie et d’un ingénieux rouge-gorge. Ensemble, ils partageront la découverte d’un jardin magique et merveilleux qui marquera le début d’une aventure et d’une amitié hors du commun…",
      genre: "fantastique",
      maturity: "15",
      slug: "le-jardin-secret",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "The Nest",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/15/10//19589888_sd_013.mp4",
      sortie: "18 novembre 2020",
      logo:
        "http://fr.web.img5.acsta.net/c_215_290/pictures/20/08/20/09/36/2341686.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "18 novembre 2020",
      description:
        "Dans les années 1980 , Rory, un ancien courtier devenu un ambitieux entrepreneur, convainc Allison, son épouse américaine, et leurs deux enfants de quitter le confort d’une banlieue cossue des États-Unis pour s’installer en Angleterre, son pays de naissance...",
      genre: "drame",
      maturity: "15",
      slug: "the-nest",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Balle perdue",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/08/17//19588834_sd_013.mp4",
      sortie: "19 juin 2020",
      logo:
        "http://fr.web.img5.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/20/06/08/09/46/52259",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/06/03/12/05/5153071.jpg",
      sortie: "19 juin 2020",
      description:
        "Lino, un génie de la mécanique est accusé à tort d'un homicide. Seule preuve de son innocence : la balle du crime, coincée dans une voiture disparue.",
      genre: "thriller",
      maturity: "15",
      slug: "balle-perdue",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Le Voyage du Dr Dolittle",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/19/10/14/09//19586091_sd_013.mp4",
      sortie: "5 février 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/19/12/23/15/16/5585346.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/19/12/16/12/22/4621478.jpg",
      sortie: "5 février 2020",
      description:
        "Après la perte de sa femme sept ans plus tôt, l’excentrique Dr. John Dolittle, célèbre docteur et vétérinaire de l’Angleterre de la Reine Victoria s’isole derrière les murs de son manoir, avec pour seule compagnie sa ménagerie d’animaux exotiques.",
      genre: "comédie",
      maturity: "15",
      slug: "le-voyage-du-dr-dolittle",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "The French Dispatch",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/02/12/17//19587473_sd_013.mp4",
      sortie: "",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/02/12/07/16/1854098.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/02/12/17/21/3448916.jpg",
      sortie: "",
      description:
        "The French Dispatch met en scène un recueil d’histoires tirées du dernier numéro d’un magazine américain publié dans une ville française fictive du 20e siècle.",
      genre: "comédie",
      maturity: "15",
      slug: "the-french-dispatch",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Les Joueuses #paslàpourdanser",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/07/20/17//19589293_sd_013.mp4",
      sortie: "9 septembre 2020",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/20/07/10/17/01/0386377.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/07/10/17/01/0386377.jpg",
      sortie: "9 septembre 2020",
      description:
        "L’équipe féminine de L’Olympique Lyonnais s’est imposée au fil des années comme une des meilleures équipes de football au monde. D'entraînements en compétitions, de doutes en victoires, ce film plonge pour la première fois au coeur du quotidien de ces joueuses d’exception.",
      genre: "documentaire",
      maturity: "15",
      slug: "les-joueuses-#paslàpourdanser",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Doctor Strange in the Multiverse of Madness",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "23 mars 2022",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/19/07/22/12/37/4302940.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "23 mars 2022",
      description: "Doctor Strange revient au cinéma.",
      genre: "fantastique",
      maturity: "15",
      slug: "doctor-strange-in-the-multiverse-of-madness",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Lucky Strike",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/15/11//19588208_sd_013.mp4",
      sortie: "8 juillet 2020",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/20/06/15/10/57/2331896.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/06/15/10/57/2331896.jpg",
      sortie: "8 juillet 2020",
      description:
        "Un corps retrouvé sur une plage, un employé de sauna, un douanier peu scrupuleux, un prêteur sur gage et une hôtesse de bar qui n’auraient jamais dû se croiser. Mais le sort en a décidé autrement en plaçant sur leur route un sac rempli de billets, qui bouleversera leur destin. Arnaques, trahisons et meurtres : tous les coups sont permis pour qui rêve de nouveaux départs…",
      genre: "thriller",
      maturity: "15",
      slug: "lucky-strike",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Free Guy",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/03/12/11//19586164_sd_013.mp4",
      sortie: "9 décembre 2020",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/20/03/12/11/36/4874079.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/07/21/11/08/2132881.jpg",
      sortie: "9 décembre 2020",
      description:
        "Un employé de banque, découvrant un jour qu’il n’est en fait qu’un personnage d’arrière-plan dans un jeu vidéo en ligne, décide de devenir le héros de sa propre histoire, quitte à la réécrire. Evoluant désormais dans un monde qui ne connaît pas de limites, il va tout mettre en œuvre pour le sauver à sa manière, avant qu’il ne soit trop tard…",
      genre: "comédie",
      maturity: "15",
      slug: "free-guy",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Les Graines que l'on sème",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "janvier 2021",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/09/07/14/13/3850973.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "janvier 2021",
      description:
        "Accusée d’avoir tagué « MACRON DÉMISSION » sur un mur de son lycée, Chiara n’est pas sortie vivante de sa garde à vue. Bouleversés, ses camarades de classe décident alors de prendre la parole...",
      genre: "drame",
      maturity: "15",
      slug: "les-graines-que-l'on-sème",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Waves",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/01/06/15//19585503_sd_013.mp4",
      sortie: "29 janvier 2020",
      logo:
        "http://fr.web.img5.acsta.net/c_215_290/pictures/20/01/06/16/06/1879658.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/19/12/02/11/03/3688602.jpg",
      sortie: "29 janvier 2020",
      description:
        "Le parcours des membres d’une famille afro-américaine, menée par un patriarche protecteur, mais très exigeant, sur les eaux troubles du malheur et du deuil. Un chemin douloureux qui finira par les rassembler sur les rives de l’amour et du pardon, si tant est qu’ils parviennent à accepter de lâcher prise.",
      genre: "drame",
      maturity: "15",
      slug: "waves",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Sonic le film",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/19/11/12/12//19584971_sd_013.mp4",
      sortie: "12 février 2020",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/20/02/10/17/16/0746079.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/02/18/09/28/1966065.jpg",
      sortie: "12 février 2020",
      description:
        "L'histoire du hérisson bleu le plus rapide du monde qui arrive sur Terre, sa nouvelle maison. Sonic et son nouveau meilleur ami Tom font équipe pour sauver la planète du diabolique Dr. Robotnik, bien déterminé à régner sur le monde entier.",
      genre: "aventure",
      maturity: "15",
      slug: "sonic-le-film",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Bloodshot",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/01/14/14//19586327_sd_013.mp4",
      sortie: "26 mars 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/01/23/09/02/1428612.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/02/17/11/20/0488005.jpg",
      sortie: "26 mars 2020",
      description:
        "Ray Garrison est un soldat tué en mission, et ramené à la vie par RST Corporations, l'entreprise qui l’a transformé en super-humain. Des nanotechnologies coulent désormais dans ses veines, ce qui le rend invincible. Il est plus fort que jamais et capable de guérir instantanément de ses blessures.",
      genre: "action",
      maturity: "15",
      slug: "bloodshot",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Garçon Chiffon",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/25/17//19589541_sd_013.mp4",
      sortie: "28 octobre 2020",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/20/09/01/13/50/1926020.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/09/01/13/50/1926020.jpg",
      sortie: "28 octobre 2020",
      description:
        "Jérémie, la trentaine, peine à faire décoller sa carrière de comédien. Sa vie sentimentale est mise à mal par ses crises de jalousie à répétition et son couple bat de l’aile. Il décide alors de quitter Paris et de se rendre sur sa terre d’origine, le Limousin, où il va tenter de se réparer auprès de sa mère...",
      genre: "comédie",
      maturity: "15",
      slug: "garçon-chiffon",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Gretel And Hansel",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/01/03/15//19587130_sd_013.mp4",
      sortie: "29 mai 2020",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/19/09/04/09/18/1757816.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/06/02/14/22/1349821.jpg",
      sortie: "29 mai 2020",
      description:
        "Une jeune fille conduit son petit frère dans une forêt sombre à la recherche de nourriture et d'un travail. Ils vont rencontrer une sorcière terrifiante.",
      genre: "epouvante-horreur",
      maturity: "15",
      slug: "gretel-and-hansel",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Minions 2 : Il était une fois Gru",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/02/05/18//19586202_sd_013.mp4",
      sortie: "7 juillet 2021",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/02/03/09/30/4865530.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/02/06/08/48/4399877.jpg",
      sortie: "7 juillet 2021",
      description:
        "Alors que les années 70 battent leur plein, Gru qui grandit en banlieue au milieu des jeans à pattes d’éléphants et des chevelures en fleur, met sur pied un plan machiavélique à souhait pour réussir à intégrer un groupe célèbre de super méchants, connu sous le nom de Vicious 6, dont il est le plus grand fan.",
      genre: "animation",
      maturity: "15",
      slug: "minions-2-:-il-était-une-fois-gru",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "J'irai décrocher la lune",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/03/02/12//19586298_sd_013.mp4",
      sortie: "22 juin 2020",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/20/02/20/16/57/4258608.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "22 juin 2020",
      description:
        "Quand on a la trentaine, être indépendant semble tout à fait normal. Mais quand on a un chromosome en plus, ce n'est pas une évidence ! Stéphanie, Robin, Elise, Gilles-Emmanuel, Eléonore et Mario rêvent d'une vie ordinaire. Avec humour et sensibilité, ils nous racontent leur volonté et leur capacité à s'insérer dans la société et le marché du travail.",
      genre: "documentaire",
      maturity: "15",
      slug: "j'irai-décrocher-la-lune",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Un soupçon d'amour",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/20/17//19588965_sd_013.mp4",
      sortie: "9 septembre 2020",
      logo:
        "http://fr.web.img5.acsta.net/c_215_290/pictures/20/09/09/10/28/2539655.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/09/14/16/09/1219703.png",
      sortie: "9 septembre 2020",
      description:
        "Geneviève Garland, une célèbre comédienne, répète « Andromaque » de Racine, avec pour partenaire, son mari André. Elle ressent un malaise profond à interpréter ce personnage et cède son rôle à son amie Isabelle qui est aussi la maîtresse de son époux. Geneviève s’en va avec son fils malade dans son village natal. Elle semble fuir certaines réalités difficiles à admettre.",
      genre: "drame",
      maturity: "15",
      slug: "un-soupçon-d'amour",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Matrix 4",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "30 mars 2022",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/commons/v9/common/empty/empty_portrait.png",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "30 mars 2022",
      description: 'Quatrième volet de la saga "Matrix", lancée en 1999.',
      genre: "science fiction",
      maturity: "15",
      slug: "matrix-4",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Vivante !",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/05/18/09//19588661_sd_013.mp4",
      sortie: "28 octobre 2020",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/20/05/18/09/31/3752322.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/05/18/09/31/3752322.jpg",
      sortie: "28 octobre 2020",
      description:
        "“Vivante !” propose des éléments de réponses inédits à travers des témoignages très émouvants de personnes ayant vécu une régénération physique et psychique.",
      genre: "documentaire",
      maturity: "15",
      slug: "vivante-!",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "S.O.S. Fantômes : L'Héritage",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/19/12/09/15//19586887_sd_013.mp4",
      sortie: "14 avril 2021",
      logo:
        "http://fr.web.img5.acsta.net/c_215_290/pictures/20/07/06/12/06/1436316.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "14 avril 2021",
      description:
        "Une mère célibataire et ses deux enfants s'installent dans une petite ville et découvrent peu à peu leur relation avec les chasseurs de fantômes et l'héritage légué par leur grand-père.",
      genre: "aventure",
      maturity: "15",
      slug: "s.o.s.-fantômes-:-l'héritage",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Madre",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/25/10//19585396_sd_013.mp4",
      sortie: "22 juillet 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/07/23/15/36/3376214.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/19/09/05/11/06/2376234.jpg",
      sortie: "22 juillet 2020",
      description:
        "Dix ans se sont écoulés depuis que le fils d’Elena, alors âgé de 6 ans, a disparu. Dix ans depuis ce coup de téléphone où seul et perdu sur une plage des Landes, il lui disait qu’il ne trouvait plus son père. Dévastée depuis ce tragique épisode, sa vie suit son cours tant bien que mal...",
      genre: "drame",
      maturity: "15",
      slug: "madre",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Love and Monsters",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/17/14//19585573_sd_013.mp4",
      sortie: "16 octobre 2020",
      logo:
        "http://fr.web.img5.acsta.net/c_215_290/pictures/19/12/19/10/28/4462457.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "16 octobre 2020",
      description:
        "Un jeune homme tente de survivre dans un monde post-apocalyptique envahi par des monstres. Un expert lui enseigne comment les combattre...",
      genre: "science fiction",
      maturity: "15",
      slug: "love-and-monsters",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Marvel Sony Untitled Spider-Man: Far From Home Sequel",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "15 décembre 2021",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/19/10/02/21/34/5281471.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "15 décembre 2021",
      description: "La troisième aventure solo de Spider-Man.",
      genre: "action",
      maturity: "15",
      slug: "marvel-sony-untitled-spider-man:-far-from-home-sequel",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "The Rental",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/07/20/11//19589061_sd_013.mp4",
      sortie: "19 août 2020",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/20/07/20/11/16/0576775.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/07/20/12/01/2195357.jpg",
      sortie: "19 août 2020",
      description:
        "Deux couples louent une sublime maison face à l’océan pour un week-end de fête. Les quatre amis comprennent très vite que derrière la beauté de l’endroit, un danger les guette : une présence mystérieuse semble les espionner et révèle des secrets inavouables sur chacun d’eux. La tension monte et le week-end de rêve va virer au cauchemar absolu…",
      genre: "epouvante-horreur",
      maturity: "15",
      slug: "the-rental",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Morbius",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/01/14/09//19586315_sd_013.mp4",
      sortie: "17 mars 2021",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/20/04/03/10/08/0023895.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "17 mars 2021",
      description:
        "Gravement atteint d’une rare maladie sanguine, et déterminé à sauver toutes les victimes de cette pathologie, le Dr Morbius tente un pari désespéré. Mais ce qui semble à première vue être un succès se révèle rapidement comme un remède potentiellement plus grave que la maladie…",
      genre: "drame",
      maturity: "15",
      slug: "morbius",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Zack Snyder's Justice League",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/23/10//19589601_sd_013.mp4",
      sortie: "",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/20/05/26/11/58/0870792.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "",
      description:
        "La version de \"Justice League\" telle que Zack Snyder l'avait imaginée avant d'être remplacé par Joss Whedon.",
      genre: "fantastique",
      maturity: "15",
      slug: "zack-snyder's-justice-league",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Black Adam",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "22 décembre 2021",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/08/24/09/27/5820559.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "22 décembre 2021",
      description:
        "Long métrage adapté de DC Comics et consacré à Black Adam, l'ennemi de Shazam.",
      genre: "action",
      maturity: "15",
      slug: "black-adam",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Les Crimes qui nous lient",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/20/14//19589574_sd_013.mp4",
      sortie: "19 août 2020",
      logo:
        "http://fr.web.img3.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/20/07/21/18/39/53473",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/07/21/18/39/5347328.jpg",
      sortie: "19 août 2020",
      description:
        "Au désespoir, Alicia est prête à tout pour éviter la prison à son fils, accusé d'avoir tenté de tuer son ex-femme.",
      genre: "policier",
      maturity: "15",
      slug: "les-crimes-qui-nous-lient",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Mission: Impossible 7",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "17 novembre 2021",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/19/03/05/17/34/0744728.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/19/03/05/17/34/0744728.jpg",
      sortie: "17 novembre 2021",
      description: "Suite des aventures de l'espion Ethan Hunt.",
      genre: "action",
      maturity: "15",
      slug: "mission:-impossible-7",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Indiana Jones 5",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "27 juillet 2022",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/commons/v9/common/empty/empty_portrait.png",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "27 juillet 2022",
      description: "Le retour du célèbre aventurier Indiana Jones.",
      genre: "action",
      maturity: "15",
      slug: "indiana-jones-5",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Mandibules",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/04/11//19587703_sd_013.mp4",
      sortie: "2 décembre 2020",
      logo:
        "http://fr.web.img5.acsta.net/c_215_290/pictures/20/07/15/11/08/4448533.png",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/09/09/16/37/0382654.jpg",
      sortie: "2 décembre 2020",
      description:
        "Jean-Gab et Manu, deux amis simples d'esprit, trouvent une mouche géante coincée dans le coffre d'une voiture et se mettent en tête de la dresser pour gagner de l'argent avec.",
      genre: "comédie",
      maturity: "15",
      slug: "mandibules",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Spirale : L'Héritage de Saw",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/02/05/14//19586136_sd_013.mp4",
      sortie: "19 mai 2021",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/20/05/25/12/29/5831765.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/02/05/23/12/1102235.png",
      sortie: "19 mai 2021",
      description:
        'Travaillant dans l\'ombre d’une légende locale de la police, le lieutenant Ezekiel " Zeke " Banks et son nouveau partenaire enquêtent sur une série de meurtres macabres dont le mode opératoire rappelle étrangement celui d’un tueur en série qui sévissait jadis dans la ville. Pris au piège sans le savoir, Zeke se retrouve au centre d’un stratagème terrifiant dont le tueur tire les ficelles.',
      genre: "epouvante-horreur",
      maturity: "15",
      slug: "spirale-:-l'héritage-de-saw",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Deep Blue Sea 3",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/18/11//19588939_sd_013.mp4",
      sortie: "29 juillet 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/07/17/14/02/1884703.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "29 juillet 2020",
      description:
        "Emma Collins, une éminente biologiste marine, et son équipage ont installé un laboratoire au milieur de l'océan, au-dessus d'une ville insulaire qui a été engloutie, afin d'observer l'accouplement des grands requins blancs. Malheureusement, les requins-taureaux améliorés sont également là avec leur propre objectif d'évolution : se croiser avec les grands requins blancs, plus imposants et plus rapides, afin d'engendrer une nouvelle race de squales..",
      genre: "action",
      maturity: "15",
      slug: "deep-blue-sea-3",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "The Turning",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/19/10/10/16//19579964_sd_013.mp4",
      sortie: "30 juin 2020",
      logo:
        "http://fr.web.img5.acsta.net/c_215_290/pictures/19/10/10/08/57/1238590.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "30 juin 2020",
      description:
        "Une jeune femme, engagée comme nounou de deux orphelins, est convaincue que le manoir dans lequel ils vivent est hanté.",
      genre: "epouvante-horreur",
      maturity: "15",
      slug: "the-turning",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Chez moi",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/03/31/13//19588189_sd_013.mp4",
      sortie: "25 mars 2020",
      logo:
        "http://fr.web.img2.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/20/03/31/11/21/38797",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/18/11/28/13/47/2187818.jpg",
      sortie: "25 mars 2020",
      description:
        "Quand un publicitaire au chômage décide d'espionner les nouveaux occupants de son ancien domicile, la situation tourne vite au cauchemar.",
      genre: "thriller",
      maturity: "15",
      slug: "chez-moi",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Les Sept de Chicago",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/14/16//19589869_sd_013.mp4",
      sortie: "16 octobre 2020",
      logo:
        "http://fr.web.img6.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/20/09/14/07/20/32340",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/07/23/10/32/1072986.jpg",
      sortie: "16 octobre 2020",
      description:
        "Lorsque la manifestation en marge de la convention démocrate de 1968 tourne à l'affrontement, ses organisateurs sont accusés de conspiration et d'incitation à la révolte.",
      genre: "drame",
      maturity: "15",
      slug: "les-sept-de-chicago",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Affamés",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/02/21/12//19585293_sd_013.mp4",
      sortie: "10 mars 2021",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/03/13/16/53/5578997.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/02/26/01/51/5907298.jpg",
      sortie: "10 mars 2021",
      description:
        "Dans une petite ville minière de l’Oregon, une institutrice et son frère policier enquêtent sur un jeune écolier. Les secrets de ce dernier vont entraîner d’effrayantes conséquences.",
      genre: "epouvante-horreur",
      maturity: "15",
      slug: "affamés",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Force Of Nature",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/05/20/10//19588675_sd_013.mp4",
      sortie: "",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/05/20/09/38/0279555.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/09/03/16/18/3060275.jpg",
      sortie: "",
      description:
        "Un policier est chargé de protéger les résidents d'un immeuble pris au piège après le passage d'un ouragan. Parmi eux, un détective à la retraite refuse d'être évacué. En parallèle de la catastrophe météorologique, un groupe de criminels tente de réaliser un vol mystérieux au sein du bâtiment.",
      genre: "action",
      maturity: "15",
      slug: "force-of-nature",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "J’y crois encore",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/01/31/09//19585330_sd_013.mp4",
      sortie: "4 juin 2020",
      logo:
        "http://fr.web.img5.acsta.net/c_215_290/pictures/20/04/01/14/59/3113149.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/06/10/11/13/5226371.jpg",
      sortie: "4 juin 2020",
      description:
        "Jeremy et Melissa filent le parfait amour lorsqu’ils apprennent qu'elle est atteinte d’une maladie incurable. Malgré l'incompréhension de leurs proches, ils décident de se marier et de lutter ensemble pour affronter cette terrible épreuve… Tiré de l'histoire vraie du chanteur américain Jeremy Camp et son amour de jeunesse Melissa.",
      genre: "drame",
      maturity: "15",
      slug: "j’y-crois-encore",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Les Animaux fantastiques - 3e partie",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/commons/v9/common/empty/empty_portrait.png",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "",
      description:
        "Troisième partie de la saga inspirée de l'oeuvre de J.K. Rowling.",
      genre: "fantastique",
      maturity: "15",
      slug: "les-animaux-fantastiques---3e-partie",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Sa dernière volonté",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/01/23/15//19587368_sd_013.mp4",
      sortie: "21 février 2020",
      logo:
        "http://fr.web.img3.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/20/01/27/10/28/27191",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/01/29/15/01/4057136.jpg",
      sortie: "21 février 2020",
      description:
        "Une journaliste quitte son travail pour négocier un contrat d'armement en Amérique centrale.",
      genre: "drame",
      maturity: "15",
      slug: "sa-dernière-volonté",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "The Last Days of American Crime",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/05/20/09//19588672_sd_013.mp4",
      sortie: "5 juin 2020",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/20/06/01/09/48/3788546.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/06/01/09/48/3788546.jpg",
      sortie: "5 juin 2020",
      description:
        "Un braqueur de banques décide de monter le casse du siècle avant que le gouvernement américain n'enclenche un signal anti-criminalité contrôlant les cerveaux des gens.",
      genre: "action",
      maturity: "15",
      slug: "the-last-days-of-american-crime",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Trop jeune pour moi",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/28/11//19589684_sd_013.mp4",
      sortie: "31 août 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/08/12/08/57/0811463.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/08/19/13/34/0855619.jpg",
      sortie: "31 août 2020",
      description:
        "Doria, la quarantaine, sent sa vie lui échapper. Son mari la trompe, sa fille prend son indépendance et au travail rien de va plus. Sur un coup de tête, elle décide de partir pour quelques jours chez sa mère qui vit à l'Ile Maurice. Là-bas, elle rencontre Théo... qui a 20 ans de moins qu’elle.",
      genre: "comédie",
      maturity: "15",
      slug: "trop-jeune-pour-moi",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "The Kissing Booth 3",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/commons/v9/common/empty/empty_portrait.png",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "",
      description: "",
      genre: "romance",
      maturity: "15",
      slug: "the-kissing-booth-3",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Uncharted",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "14 juillet 2021",
      logo:
        "http://fr.web.img5.acsta.net/c_215_290/pictures/15/08/27/10/42/452313.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "14 juillet 2021",
      description:
        "Un prequel des aventures de Nathan Drake. L'adaptation du célèbre jeu vidéo de Naughty Dog.",
      genre: "aventure",
      maturity: "15",
      slug: "uncharted",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "The Grudge",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/19/11/05/09//19586335_sd_013.mp4",
      sortie: "15 janvier 2020",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/19/12/12/12/07/5438128.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/19/12/20/14/06/0750711.jpg",
      sortie: "15 janvier 2020",
      description:
        "Une nouvelle version tortueuse de ce classique du genre, de cette histoire horrifique, inspirée du film JU-ON : THE GRUDGE de Takashi Shimizu.",
      genre: "epouvante-horreur",
      maturity: "15",
      slug: "the-grudge",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Les Désaccords du cœur",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/26/10//19589548_sd_013.mp4",
      sortie: "21 août 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/07/24/09/21/4858612.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/08/14/14/34/0176288.jpg",
      sortie: "21 août 2020",
      description:
        "Henry Page, 17 ans, rédacteur en chef du journal de son lycée, n'a jamais été amoureux. L'histoire d'amour dont il rêve ne s'est pas encore produite jusqu'à l'arrivée d'une nouvelle dans son lycée, Grace Town. Tout est sur le point de changer pour Henry.",
      genre: "romance",
      maturity: "15",
      slug: "les-désaccords-du-cœur",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Les Gardiens de la Galaxie 3",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "",
      logo:
        "http://fr.web.img5.acsta.net/c_215_290/pictures/19/08/24/20/41/5572826.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/19/08/20/15/19/2548868.jpg",
      sortie: "",
      description:
        "Le troisième opus des aventures des Gardiens de la Galaxie.",
      genre: "action",
      maturity: "15",
      slug: "les-gardiens-de-la-galaxie-3",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "The Expendables 4",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/commons/v9/common/empty/empty_portrait.png",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "",
      description: "",
      genre: "action",
      maturity: "15",
      slug: "the-expendables-4",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Spenser Confidential",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/01/21/09//19587340_sd_013.mp4",
      sortie: "6 mars 2020",
      logo:
        "http://fr.web.img3.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/20/01/21/07/49/35031",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/03/10/15/51/5296157.jpg",
      sortie: "6 mars 2020",
      description:
        "Spenser, un ancien flic, replonge dans les bas-fonds de Boston lorsqu'il découvre la vérité sur un complot retors et un meurtre qui a défrayé la chronique. Malgré des menaces répétées, Spenser décide de prendre l'affaire en main pour prouver que personne n'est au-dessus des lois.",
      genre: "action",
      maturity: "15",
      slug: "spenser-confidential",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Intuition",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/01/12//19588780_sd_013.mp4",
      sortie: "28 mai 2020",
      logo:
        "http://fr.web.img5.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/20/05/14/14/28/51152",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/05/27/16/36/3279402.jpg",
      sortie: "28 mai 2020",
      description:
        "Pina, inspectrice de police, travaille sur sa première grosse affaire tout en enquêtant sur son chef soupçonné de meurtre.",
      genre: "policier",
      maturity: "15",
      slug: "intuition",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Given",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/20/16//19589577_sd_013.mp4",
      sortie: "",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/20/08/20/11/47/0169887.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/08/25/10/06/2283608.jpg",
      sortie: "",
      description:
        "Quatre étudiants, membres d'un groupe de rock amateur, préparent leur premier festival de musique. Mais les choses se compliquent entre Haruki, le bassiste, et Akihiko, le batteur. Le premier, amoureux du deuxième, déchante lorsqu'il réalise que celui-ci est déjà en couple ...",
      genre: "animation",
      maturity: "15",
      slug: "given",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Scream",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "12 janvier 2022",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/09/07/12/23/1447062.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "12 janvier 2022",
      description:
        "Suite de la saga initiée par Wes Craven, dans laquelle des ados sont assassinés par un tueur affublé d'un masque blanc.",
      genre: "epouvante-horreur",
      maturity: "15",
      slug: "scream",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "The Flash",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "1 juin 2022",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/16/07/25/18/04/156624.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "1 juin 2022",
      description:
        "Les aventures fantastiques de Barry Allen, jeune policier scientifique qui devient Flash, l'homme le plus rapide du monde, après avoir été frappé par la foudre.",
      genre: "action",
      maturity: "15",
      slug: "the-flash",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Les Cobayes",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "25 novembre 2020",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/20/07/10/18/24/0118633.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/07/10/18/24/0118633.jpg",
      sortie: "25 novembre 2020",
      description:
        "En couple depuis le lycée, Charlotte et Adam viennent d’avoir leur premier enfant. Pourtant, ils ne sont pas heureux et les habitudes remplacent peu à peu l’enthousiasme, au risque de les séparer... Espérant retrouver l’élan des débuts, ils décident de devenir les cobayes d’un traitement révolutionnaire supposé renforcer le lien et le désir.",
      genre: "comédie",
      maturity: "15",
      slug: "les-cobayes",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Rebecca",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/08/15//19589799_sd_013.mp4",
      sortie: "21 octobre 2020",
      logo:
        "http://fr.web.img6.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/20/09/09/09/06/33284",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/09/07/10/42/2627560.jpg",
      sortie: "21 octobre 2020",
      description:
        "En Angleterre, une jeune mariée s'installe dans le domaine familial de son époux, où elle est poursuivie par l'ombre obsédante de la première femme défunte de son mari.",
      genre: "drame",
      maturity: "15",
      slug: "rebecca",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Déconnectés",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/03/03/15//19587895_sd_013.mp4",
      sortie: "",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/20/02/26/10/38/2456122.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/02/26/09/39/0672920.jpg",
      sortie: "",
      description:
        "Katie Michell, jeune fille passionnée à la créativité débordante, est acceptée dans l'université de ses rêves. Alors qu’elle avait prévu de prendre l’avion pour s’installer à l’université, son père Rick, décide que toute la famille devrait l’accompagner en voiture pour faire un road- trip et profiter d’un moment tous ensemble.",
      genre: "animation",
      maturity: "15",
      slug: "déconnectés",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Le Soleil reviendra",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/19/11/08/13//19586480_sd_013.mp4",
      sortie: "6 octobre 2020",
      logo:
        "http://fr.web.img5.acsta.net/c_215_290/pictures/19/11/08/08/56/5823236.png",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "6 octobre 2020",
      description:
        "Emma, 26 ans, est fiancée de Laurent, militaire envoyé en Afghanistan. En attendant son retour, Emma, enceinte, prépare leur future vie de famille : mais Laurent tarde à revenir de mission. Grâce à la force de leur relation, et à la complicité d’autres femmes de soldats, Emma tient le coup jusqu'à ce qu'une nouvelle épreuve vienne tout remettre en question...",
      genre: "drame",
      maturity: "15",
      slug: "le-soleil-reviendra",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Justice League 2",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/16/03/31/17/01/281504.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "",
      description: "Suite des aventures de la Justice League sur grand écran.",
      genre: "action",
      maturity: "15",
      slug: "justice-league-2",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Jungle Cruise",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/03/10/14//19586252_sd_013.mp4",
      sortie: "28 juillet 2021",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/03/10/15/07/5131857.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/03/12/10/17/5792085.jpg",
      sortie: "28 juillet 2021",
      description:
        "Chercheuse intrépide, la doctoresse Lily Houghton quitte Londres pour explorer la jungle amazonienne à la recherche d’un remède miraculeux. Pour descendre le fleuve, elle engage Frank Wolff, un capitaine roublard aussi douteux que son vieux rafiot délabré. Bien décidée à découvrir l’arbre séculaire dont les extraordinaires pouvoirs de guérison pourraient changer l'avenir de la médecine, Lily se lance dans une quête épique. ",
      genre: "aventure",
      maturity: "15",
      slug: "jungle-cruise",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Felicità",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/22/17//19588062_sd_013.mp4",
      sortie: "15 juillet 2020",
      logo:
        "http://fr.web.img5.acsta.net/c_215_290/pictures/20/06/24/13/34/3304838.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/05/28/16/29/5078163.jpg",
      sortie: "15 juillet 2020",
      description:
        "Pour Tim et Chloé, le bonheur c'est au jour le jour et sans attache.Mais demain l'été s'achève. Leur fille, Tommy, rentre au collège et cette année, c'est promis, elle ne manquera pas ce grand rendez vous. C'était avant que Chloé disparaisse, que Tim vole une voiture et qu'un cosmonaute débarque dans l'histoire.",
      genre: "comédie",
      maturity: "15",
      slug: "felicità",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Benjamin Gates 3",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/16/01/15/17/36/173472.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "",
      description:
        "Reparti à l'aventure, le chasseur de trésor Ben Gates se rend depuis la mystérieuse Île de Pâques jusqu'à la mythique cité d'Atlantide engloutie sous la mer où se trouverait une étrange source d'énergie.",
      genre: "aventure",
      maturity: "15",
      slug: "benjamin-gates-3",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Pierre Lapin 2 : Panique en ville",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/01/15/15//19587252_sd_013.mp4",
      sortie: "10 février 2021",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/03/02/17/28/0241704.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/02/19/08/41/3402104.jpg",
      sortie: "10 février 2021",
      description:
        "Béa, Thomas et les lapins forment désormais une famille recomposée, mais Pierre a beau faire tout son possible, il ne semble parvenir à se débarrasser de la réputation de voyou qui lui colle à la peau (de lapin).S'aventurant hors du potager, Pierre découvre un monde dans lequel ses menus délits sont appréciés, mais quand sa famille risque tout pour partir à sa recherche, Pierre doit choisir quel genre de lapin il veut être.",
      genre: "comédie",
      maturity: "15",
      slug: "pierre-lapin-2-:-panique-en-ville",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Da 5 Bloods",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/05/18/15//19588666_sd_013.mp4",
      sortie: "12 juin 2020",
      logo:
        "http://fr.web.img3.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/20/06/12/10/46/00945",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/06/12/10/46/0094534.jpg",
      sortie: "12 juin 2020",
      description:
        "Le récit d'un groupe de vétérans afro-américains de la guerre du Viêtnam revenant dans la jungle afin d'aller chercher le corps de leur chef mort au combat ainsi qu'un trésor enfoui.",
      genre: "drame",
      maturity: "15",
      slug: "da-5-bloods",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "L'un des nôtres",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/21/17//19587882_sd_013.mp4",
      sortie: "9 décembre 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/08/21/09/19/5647232.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "9 décembre 2020",
      description:
        "Après la perte de leur fils, le shérif à la retraite George Blackledge et son épouse, Margaret quittent leur ranch du Montana pour sauver leur jeune petit-fils des griffes d'une dangereuse famille tenue d'une main de fer par la matriarche Blanche Weboy.",
      genre: "thriller",
      maturity: "15",
      slug: "l'un-des-nôtres",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Loin de moi, près de toi",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/17/09//19588920_sd_013.mp4",
      sortie: "18 juin 2020",
      logo:
        "http://fr.web.img2.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/20/06/03/11/01/52245",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/05/28/14/57/4960819.jpg",
      sortie: "18 juin 2020",
      description:
        "Miyo Sasaki est une collégienne amoureuse de son camarade de classe nommé Kento Hinode. Un jour, elle découvre un étrange masque lui permettant de se transformer en un chat nommé Tarō. Grâce à cet objet, elle peut se rapprocher de celui qu'elle aime.",
      genre: "animation",
      maturity: "15",
      slug: "loin-de-moi,-près-de-toi",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Bill & Ted Face The Music",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/10/12//19588851_sd_013.mp4",
      sortie: "",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/20/07/23/16/30/5930996.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/07/23/16/30/5930996.jpg",
      sortie: "",
      description:
        "Bill S. Preston et Ted “Theodore” Logan sont désormais quarantenaires et pères de famille. Cependant, ils n'ont pas concrétisé leur rêve d'être des stars du rock. Un messager du futur vient les avertir qu'une chanson peut modifier leur destinée à jamais !",
      genre: "comédie",
      maturity: "15",
      slug: "bill-&-ted-face-the-music",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Shang-Chi and the Legend of the Ten Rings",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "juillet 2021",
      logo:
        "http://fr.web.img5.acsta.net/c_215_290/pictures/19/07/22/12/39/4943565.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "juillet 2021",
      description:
        'Film basé sur le super-héros asiatique de l\'univers Marvel : Shang-Chi alias "Le Maître du Kung Fu".',
      genre: "action",
      maturity: "15",
      slug: "shang-chi-and-the-legend-of-the-ten-rings",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "The Secret: Dare to Dream",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/02/17/11//19587689_sd_013.mp4",
      sortie: "",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/20/02/17/09/38/2229769.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/06/24/11/45/3576094.jpg",
      sortie: "",
      description:
        "Miranda Wells est une jeune veuve devant élever seule ses 3 enfants. Mais l'arrivée de Bray Johnson, un homme mystérieux va redonner de l'élan à cette famille.",
      genre: "drame",
      maturity: "15",
      slug: "the-secret:-dare-to-dream",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Eurovision Song Contest: The Story Of Fire Saga",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/11/15//19588867_sd_013.mp4",
      sortie: "26 juin 2020",
      logo:
        "http://fr.web.img6.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/20/06/11/17/20/32548",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/06/30/09/29/5642650.jpg",
      sortie: "26 juin 2020",
      description:
        "Deux musiciens en herbe, Lars Erickssong et Sigrit Ericksdottir, ont l'opportunité de représenter leur pays, l'Islande, à l'Eurovision.",
      genre: "comédie",
      maturity: "15",
      slug: "eurovision-song-contest:-the-story-of-fire-saga",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "On The Rocks",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/19/15//19589561_sd_013.mp4",
      sortie: "23 octobre 2020",
      logo:
        "http://fr.web.img5.acsta.net/c_215_290/pictures/20/08/19/16/49/4295141.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/09/22/09/54/5541566.jpg",
      sortie: "23 octobre 2020",
      description:
        "Une jeune mère de famille reprend contact avec son extravagant playboy de père pour une aventure à travers New York.",
      genre: "comédie",
      maturity: "15",
      slug: "on-the-rocks",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "The Boy : la malédiction de Brahms",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/01/08/15//19584034_sd_013.mp4",
      sortie: "26 février 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/01/23/16/45/4653965.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/02/17/10/13/0614715.jpg",
      sortie: "26 février 2020",
      description:
        "Recherchant un environnement calme pour leur fils et ignorant tout de son funeste passé, un couple s'installe dans le Manoir Heelshire. Bientôt le jeune garçon se lie d’une troublante amitié avec une poupée étrangement réaliste qu'il appelle Brahms…",
      genre: "epouvante-horreur",
      maturity: "15",
      slug: "the-boy-:-la-malédiction-de-brahms",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "La Nuit où on a sauvé Maman",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/05/16//19589465_sd_013.mp4",
      sortie: "21 août 2020",
      logo:
        "http://fr.web.img6.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/20/08/07/09/24/41214",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/07/17/13/21/1254980.jpg",
      sortie: "21 août 2020",
      description:
        "Deux frères et soeurs découvrent avec stupeur que leur mère est une ancienne cambrioleuse placée sous la protection des témoins. Contrainte de trouver un nouvel emploi, la mère de famille et ses enfants vont faire équipe au cours d'une nuit mouvementée...",
      genre: "comédie",
      maturity: "15",
      slug: "la-nuit-où-on-a-sauvé-maman",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Survivre",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/17/10//19588921_sd_013.mp4",
      sortie: "1 juillet 2020",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/20/06/17/09/51/0581813.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "1 juillet 2020",
      description:
        "Deux criminels font irruption dans la maison d’un médecin disgracié afin de se faire soigner après que l’un d’entre eux se soit fait tirer dessus lors d’un vol. Sachant qu'il n'a pas l'expertise nécessaire pour soigner l'intrus blessé, le médecin doit protéger sa famille à tout prix...",
      genre: "action",
      maturity: "15",
      slug: "survivre",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Una Promessa",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/24/17//19589996_sd_013.mp4",
      sortie: "14 octobre 2020",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/20/09/18/15/08/5475655.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/09/18/15/08/5475655.jpg",
      sortie: "14 octobre 2020",
      description:
        "Sous un soleil de plomb, au sud de l’Italie, Angela part avec d’autres travailleurs clandestins dans les champs, d’où elle ne reviendra pas. Face à cette disparition tragique et mystérieuse, lancés dans une quête de vérité, son mari Giuseppe fait la promesse à leur fils Antò de lui rendre sa mère.",
      genre: "drame",
      maturity: "15",
      slug: "una-promessa",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "No Escape",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/14/16//19589526_sd_013.mp4",
      sortie: "",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/20/07/10/08/19/0979272.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/08/03/11/23/3160830.jpg",
      sortie: "",
      description:
        "Un influenceur se rend avec ses amis à Moscou pour réaliser de nouveaux contenus pour sa chaîne. Ils participent alors à un escape game particulièrement dangereux. Sa communauté semble vouloir de plus en plus de vidéos sanglantes...",
      genre: "thriller",
      maturity: "15",
      slug: "no-escape",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "The Kissing Booth 2",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/07/06/15//19589137_sd_013.mp4",
      sortie: "24 juillet 2020",
      logo:
        "http://fr.web.img6.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/20/05/22/09/26/05275",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/07/27/14/50/5188063.jpg",
      sortie: "24 juillet 2020",
      description:
        "Elle jongle avec sa relation longue distance avec son petit ami parfait, les inscriptions à l’université avec son meilleur ami, et sa nouvelle amitié avec un camarade de classe canon qui pourrait tout changer.",
      genre: "romance",
      maturity: "15",
      slug: "the-kissing-booth-2",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Freaky",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/10/16//19589711_sd_013.mp4",
      sortie: "23 décembre 2020",
      logo:
        "http://fr.web.img5.acsta.net/c_215_290/pictures/20/09/22/11/54/5765737.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/09/10/15/54/2928089.jpg",
      sortie: "23 décembre 2020",
      description:
        "Millie Kessler, une adolescente de 17 ans, occupée à faire bonne figure dans son très élitiste lycée, Blissfield High, devient la nouvelle cible du Boucher, un tueur en série tristement notoire. Son année de Terminale va alors devenir le cadet de ses soucis.",
      genre: "thriller",
      maturity: "15",
      slug: "freaky",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Deadpool 3",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/20/01/10/15/42/1604813.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "",
      description:
        "L'introduction de l'équipe X-Force dans l'univers Marvel/Fox.",
      genre: "comédie",
      maturity: "15",
      slug: "deadpool-3",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Jumbo",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/09/10//19587641_sd_013.mp4",
      sortie: "1 juillet 2020",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/20/02/25/15/53/5705746.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/02/25/15/53/5705746.jpg",
      sortie: "1 juillet 2020",
      description:
        "Jeanne, une jeune femme timide, travaille comme gardienne de nuit dans un parc d’attraction. Elle vit une relation fusionnelle avec sa mère, l’extravertie Margarette. Jeanne développe d’étranges sentiments envers Jumbo, l’attraction phare du parc.",
      genre: "drame",
      maturity: "15",
      slug: "jumbo",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Resistance",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/03/16//19587586_sd_013.mp4",
      sortie: "",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/03/03/09/07/2234276.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/06/30/11/23/2321276.jpg",
      sortie: "",
      description:
        "Durant la Seconde Guerre mondiale, en 1942, Marcel Mangel s'engage, sous le nom de Marcel Marceau, dans la Résistance française, sous l'influence de son frère Simon et de son cousin, Georges Loinger. En partie par le mime, il aidera de nombreux enfants orphelins, dont les parents ont été tués par les nazis.",
      genre: "drame",
      maturity: "15",
      slug: "resistance",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Halloween Kills",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "20 octobre 2021",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/19/08/21/20/34/3634885.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "20 octobre 2021",
      description: "Une nouvelle suite de la franchise Halloween.",
      genre: "epouvante-horreur",
      maturity: "15",
      slug: "halloween-kills",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "La Nuée",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "4 novembre 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/06/04/09/21/3696716.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "4 novembre 2020",
      description:
        "Pour sauver sa ferme de la faillite, une mère de famille célibataire élève des sauterelles comestibles et développe avec elles un étrange lien obsessionnel. Elle doit faire face à l’hostilité des paysans de la région et de ses enfants qui ne la reconnaissent plus.",
      genre: "drame",
      maturity: "15",
      slug: "la-nuée",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Feel the Beat",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/15/10//19588880_sd_013.mp4",
      sortie: "19 juin 2020",
      logo:
        "http://fr.web.img3.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/20/06/22/23/24/45706",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/06/22/23/24/4570668.jpg",
      sortie: "19 juin 2020",
      description:
        "Une jeune danseuse, qui n'est pas parvenue à percer sur la scène de Broadway, est contrainte de retourner vivre dans sa petite ville natale. Elle est recrutée afin d'apprendre à danser à un groupe d'adolescents difficiles pour une compétition.",
      genre: "famille",
      maturity: "15",
      slug: "feel-the-beat",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "The Banker",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/19/11/05/16//19586425_sd_013.mp4",
      sortie: "20 mars 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/19/11/04/16/36/2916263.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/19/10/30/14/28/2837439.jpg",
      sortie: "20 mars 2020",
      description:
        "Deux entrepreneurs afro-américains, Bernard Garrett et Joe Morris, défient les lois raciales, en vigueur dans les années 50 aux Etats-Unis, en recrutant un ouvrier blanc, Matt Steiner. Ils décident de l'installer à la tête de leur entreprise.",
      genre: "drame",
      maturity: "15",
      slug: "the-banker",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Lost Girls",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/03/11/11//19588026_sd_013.mp4",
      sortie: "13 mars 2020",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/20/01/17/09/06/4110848.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/03/13/16/12/1484791.jpg",
      sortie: "13 mars 2020",
      description:
        "Une mère de famille à la recherche de sa fille récemment disparue fait une horrible découverte dans un bois de Long Island où les corps de quatre jeunes filles ont été dissimulés.",
      genre: "thriller",
      maturity: "15",
      slug: "lost-girls",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Mortal Kombat",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "17 février 2021",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/20/01/08/14/59/4960135.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "17 février 2021",
      description:
        'Une nouvelle variation de l\'univers de la saga vidéoludique "Mortal Kombat".',
      genre: "action",
      maturity: "15",
      slug: "mortal-kombat",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "The Photograph",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/01/30/11//19585921_sd_013.mp4",
      sortie: "1 septembre 2020",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/20/01/16/13/05/1313840.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/04/20/12/24/0448161.jpg",
      sortie: "1 septembre 2020",
      description:
        "Des histoires d'amour s'entremêlent entre le passé et le présent.",
      genre: "romance",
      maturity: "15",
      slug: "the-photograph",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Goodbye",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/01/17/10//19587305_sd_013.mp4",
      sortie: "6 janvier 2021",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/19/07/24/17/14/1135832.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/19/07/24/17/14/1135832.jpg",
      sortie: "6 janvier 2021",
      description:
        "Mariés depuis trente ans, Grace et Edward coulent des jours paisibles dans leur cottage sur la côte anglaise. Elle, exubérante et volubile, administre la maison ; lui, discret et effacé, achève une carrière d’enseignant. Mais ce matin-là, cette vie bien réglée s’apprête à voler en éclat. A l’occasion de la visite de leur fils Jamie, Edward trouve le courage d’annoncer à sa femme sa décision: dans une heure, il quittera la maison pour une nouvelle vie. Sans elle.",
      genre: "drame",
      maturity: "15",
      slug: "goodbye",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "La Voix du succès",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/19/16//19585918_sd_013.mp4",
      sortie: "14 juillet 2020",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/20/06/19/09/23/1563449.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/06/09/16/59/1526328.jpg",
      sortie: "14 juillet 2020",
      description:
        "Grace Davis est une superstar de la musique à l’ego surdimensionné mais proportionnel à son talent. Son assistante personnelle, Maggie, s'affaire à des tâches ingrates alors qu’elle rêve depuis qu’elle est enfant de devenir productrice de musique. Lorsque le manager de Grace lui fait une proposition qui pourrait transformer sa carrière, elle et Grace élaborent un plan qui pourrait changer leur vie pour toujours.",
      genre: "musical",
      maturity: "15",
      slug: "la-voix-du-succès",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Mensonges et trahisons",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/04/14/10//19588371_sd_013.mp4",
      sortie: "30 avril 2020",
      logo:
        "http://fr.web.img3.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/20/04/15/09/39/18575",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/04/15/09/39/1857500.jpg",
      sortie: "30 avril 2020",
      description:
        "Un jeune couple, Katie et Adam, mettent tout en oeuvre afin de réussir leur vie. Mais ils se retrouvent mêlés à une enquête criminelle liée à la mort d'un vieil homme riche...",
      genre: "thriller",
      maturity: "15",
      slug: "mensonges-et-trahisons",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Bob l'éponge - Le film : Éponge en eaux troubles",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/08/12//19588830_sd_013.mp4",
      sortie: "",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/19/11/14/15/38/1980119.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "",
      description:
        "Suite à l’escargotnapping de Gary, son compagnon de toujours, Bob entraîne Patrick dans une folle aventure vers la Cité Perdue d’Atlantic City afin de le retrouver. A travers cette mission sauvetage pleine de surprises, de merveilles et de dangers, Bob l’Éponge et ses acolytes vont réaliser que rien n’est plus fort que le pouvoir de l’amitié.",
      genre: "animation",
      maturity: "15",
      slug: "bob-l'éponge---le-film-:-Éponge-en-eaux-troubles",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Cruella",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "26 mai 2021",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/19/08/26/09/33/2152286.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "26 mai 2021",
      description: "Les aventures de Cruella, la méchante des 101 Dalmatiens.",
      genre: "comédie",
      maturity: "15",
      slug: "cruella",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Capone",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/17/12//19588400_sd_013.mp4",
      sortie: "15 octobre 2020",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/20/05/04/09/34/3888054.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/07/03/13/36/1685437.jpg",
      sortie: "15 octobre 2020",
      description:
        "Autrefois maître de Chicago, le redoutable Al Capone est assigné à résidence après 10 ans passés derrière les barreaux. Pour protéger sa fortune, il aurait dissimulé des millions de dollars avant son arrestation dans un lieu connu de lui seul et tous veulent s’en emparer. Même affaibli par la maladie, Al Capone est prêt à tout pour protéger les siens… et son argent.",
      genre: "drame",
      maturity: "15",
      slug: "capone",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Dreamkatcher",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/07/28/13//19589396_sd_013.mp4",
      sortie: "10 août 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/09/09/10/49/5356195.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "10 août 2020",
      description:
        "Gail est psychothérapeute à Manhattan. Elle part s’installer quelques temps au calme dans les montagnes avec son beau-fils Josh qui souffre de terribles cauchemars. Ils ne tardent pas à rencontrer leur étrange voisine Ruth qui collectionne les attrape-rêves. Quand Josh lui dérobe l’un d’entre eux, ses cauchemars disparaissent mais son comportement en est profondément modifié...",
      genre: "epouvante-horreur",
      maturity: "15",
      slug: "dreamkatcher",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "The Division",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "1 septembre 2020",
      logo:
        "http://fr.web.img5.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/19/06/11/15/38/10688",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "1 septembre 2020",
      description: "L'adaptation du jeu vidéo Tom Clancy's The Division.",
      genre: "action",
      maturity: "15",
      slug: "the-division",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Tous nos jours parfaits",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/02/06/16//19587553_sd_013.mp4",
      sortie: "28 février 2020",
      logo:
        "http://fr.web.img5.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/20/02/07/09/27/19874",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/19/07/31/17/36/1714974.jpg",
      sortie: "28 février 2020",
      description:
        "Deux adolescents suicidaires se rencontrent et réapprennent à aimer la vie.",
      genre: "romance",
      maturity: "15",
      slug: "tous-nos-jours-parfaits",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Grand frère",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/22/12//19588861_sd_013.mp4",
      sortie: "26 août 2020",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/20/05/25/14/46/4093373.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/05/25/14/47/1372493.jpg",
      sortie: "26 août 2020",
      description:
        "Gu Xi est sur le point de perdre son emploi à cause de problèmes de papiers d’identité. Tout en utilisant ses relations pour obtenir des papiers en règle,elle fait également face à un autre défi : s’entendre avec la nouvelle petite amie de son frère, Qingchang. Alors que l’hiver s’installe et que les températures plongent, la relation entre Gu Xi, son frère Gu Liang et sa petite amie devient de plus en plus floue… ",
      genre: "drame",
      maturity: "15",
      slug: "grand-frère",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Les Sept vies de Madeleine Riffaud",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/28/14//19589691_sd_013.mp4",
      sortie: "7 octobre 2020",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/20/08/24/11/42/0535628.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/08/24/11/42/0535628.jpg",
      sortie: "7 octobre 2020",
      description:
        "En 1944 Madeleine Riffaud jeune résistante exécute un allemand, emprisonnée, torturée par la Gestapo à 20 ans, elle échappe au peloton d’exécution ainsi qu’au train qui aurait du l’emmener au camp d’extermination...",
      genre: "documentaire",
      maturity: "15",
      slug: "les-sept-vies-de-madeleine-riffaud",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Palm Springs",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/17/16//19588933_sd_013.mp4",
      sortie: "",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/20/07/02/09/35/5520469.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/07/02/09/35/5520469.jpg",
      sortie: "",
      description:
        "L'insouciant Nyles rencontre la demoiselle d'honneur Sarah lors d'un mariage à Palm Springs. Dès lors, ils commencent une idylle qui ne sera pas de tout repos pour l'un comme pour l'autre.",
      genre: "comédie",
      maturity: "15",
      slug: "palm-springs",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Man of Steel 2 Or A New Superman Solo Movie",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "",
      logo:
        "http://fr.web.img5.acsta.net/c_215_290/pictures/14/11/17/09/26/143752.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "",
      description:
        'Suite des aventures de Clark Kent, alias Superman, initiées dans "Man of Steel".',
      genre: "action",
      maturity: "15",
      slug: "man-of-steel-2-or-a-new-superman-solo-movie",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "The Last Full Measure",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/19/11/26/14//19586716_sd_013.mp4",
      sortie: "23 avril 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/19/11/25/19/25/1276087.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/16/08/31/16/51/273342.jpg",
      sortie: "23 avril 2020",
      description:
        "L'histoire vraie d'un homme infiltré dans les cercles de pouvoir de Washington, risquant jusqu'à son futur pour s'assurer qu'on décerne bien une médaille d'honneur à un aviateur oublié.",
      genre: "drame",
      maturity: "15",
      slug: "the-last-full-measure",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "The Quarry",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/04/26/22//19588521_sd_013.mp4",
      sortie: "",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/20/03/13/09/05/4068510.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "",
      description:
        "Un mystérieux pasteur s'installe dans une église d'une ville désolée du Texas. Malgré les soupçons grandissants des villageois - le chef de police local endurci, les frères trafiquants de drogue, et la veuve qui maintient l’église à flot - sa congrégation grandit. Mais combien de temps le pasteur va-t-il pouvoir garder ses secrets ? Basé sur le roman acclamé de Damon Galgut.",
      genre: "thriller",
      maturity: "15",
      slug: "the-quarry",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Rupture fatale",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/01/06/11//19587148_sd_013.mp4",
      sortie: "17 janvier 2020",
      logo:
        "http://fr.web.img4.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/20/01/06/08/08/37179",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "17 janvier 2020",
      description:
        "Une femme divorcée entame une nouvelle relation amoureuse. L'euphorie ne dure pas très longtemps car rapidement elle découvre des sombres secrets sur son compagnon...",
      genre: "thriller",
      maturity: "15",
      slug: "rupture-fatale",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "A ma place",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/08/26/11//19589659_sd_013.mp4",
      sortie: "9 septembre 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/09/08/13/18/3028395.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/09/08/13/23/4376827.jpg",
      sortie: "9 septembre 2020",
      description:
        "Savannah cherche sa place. Actrice d’une révolution qui n’a pas eu lieu, elle est une fille de la classe ouvrière et réinvente la politique. De Nuit Debout à l’Ecole Normale Supérieure, Savannah doute, rêve, lutte et apprend. Elle se cherche un avenir.",
      genre: "documentaire",
      maturity: "15",
      slug: "a-ma-place",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Il Mio Corpo",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/07/13//19589148_sd_013.mp4",
      sortie: "11 novembre 2020",
      logo:
        "http://fr.web.img6.acsta.net/c_215_290/pictures/20/08/04/14/42/4207917.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/06/04/14/11/1401673.jpg",
      sortie: "11 novembre 2020",
      description:
        "Sous le soleil de Sicile, Oscar récupère de la ferraille avec son père. A l’autre bout de la ville, Stanley le Nigérian vivote grâce aux petits travaux donnés par le prêtre de la paroisse.Tous deux ont le même désir, celui d’une vie meilleure…",
      genre: "documentaire",
      maturity: "15",
      slug: "il-mio-corpo",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Si tu savais...",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/04/09/17//19588345_sd_013.mp4",
      sortie: "1 mai 2020",
      logo:
        "http://fr.web.img5.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/20/04/09/09/43/10813",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/04/29/16/08/3071208.jpg",
      sortie: "1 mai 2020",
      description:
        "Timide et intello, Ellie aide un jeune footballeur maladroit à courtiser la fille qu'elle aime également en secret.",
      genre: "comédie",
      maturity: "15",
      slug: "si-tu-savais...",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Edge Of Tomorrow 2",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/commons/v9/common/empty/empty_portrait.png",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "",
      description: "Suite de Edge of Tomorrow.",
      genre: "action",
      maturity: "15",
      slug: "edge-of-tomorrow-2",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Nomadland",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/25/12//19585947_sd_013.mp4",
      sortie: "30 décembre 2020",
      logo:
        "http://fr.web.img3.acsta.net/c_215_290/pictures/20/08/19/21/05/1514931.jpg",
      photo: "http://fr.web.img3.acsta.net/c_300_300/pictures/",
      sortie: "30 décembre 2020",
      description:
        "Après avoir tout perdu pendant la Grande Récession, une sexagénaire se lance dans un voyage à travers l'Ouest américain, vivant comme un nomade des temps modernes.",
      genre: "drame",
      maturity: "15",
      slug: "nomadland",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Israël, le voyage interdit - Partie I : Kippour",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/22/14//19588030_sd_013.mp4",
      sortie: "7 octobre 2020",
      logo:
        "http://fr.web.img4.acsta.net/c_215_290/pictures/20/03/09/17/03/1055359.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/03/09/17/03/1055359.jpg",
      sortie: "7 octobre 2020",
      description:
        'Une famille oubliée, les Juifs d’Algérie, eux aussi perdus de vue, n’avoir rien transmis à mes enfants, m’être complu dans l’ignorance… Arriverai-je à me débarrasser de toutes mes fautes ? Car d’Israël, je dus vite l’admettre, je ne savais rien. Ni de son passé, ni de son présent. Un mot mystérieux et oublié que ma mère utilisait souvent, m’en ouvre soudain les portes, "Tcharbeb "…',
      genre: "documentaire",
      maturity: "15",
      slug: "israël,-le-voyage-interdit---partie-i-:-kippour",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Rencontre fatale",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/07/02/09//19589100_sd_013.mp4",
      sortie: "16 juillet 2020",
      logo:
        "http://fr.web.img6.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/20/07/02/09/35/07539",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/06/15/11/49/2096052.jpg",
      sortie: "16 juillet 2020",
      description:
        "Après une infidélité, une femme essaie de donner une seconde chance à son mariage mais l'amant d'une nuit est plus dangereux et instable qu’elle ne le pensait.",
      genre: "drame",
      maturity: "15",
      slug: "rencontre-fatale",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Respect",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/29/09//19589024_sd_013.mp4",
      sortie: "20 janvier 2021",
      logo:
        "http://fr.web.img2.acsta.net/c_215_290/pictures/20/07/21/10/38/1488093.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/07/01/12/48/5833399.jpg",
      sortie: "20 janvier 2021",
      description:
        "Le film suit l’ascension de la carrière d’Aretha Franklin, de ses débuts d’enfant de chœur dans l’église de son père à sa renommée internationale. RESPECT est la remarquable réelle histoire retraçant le parcours de cette icône de la musique.",
      genre: "biopic",
      maturity: "15",
      slug: "respect",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Save the moonlight project",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/09/24/10//19589988_sd_013.mp4",
      sortie: "25 novembre 2020",
      logo:
        "http://fr.web.img5.acsta.net/c_215_290/pictures/20/09/24/09/15/4972732.jpg",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/09/24/15/37/1593062.jpg",
      sortie: "25 novembre 2020",
      description:
        "Manifeste poétique destiné à défendre la lune contre les nombreux projets d’exploitation. Différents personnages s’expriment afin de convaincre tous les humains de voter en faveur de la sauvegarde de l’astre lors du premier referendum universel lunaire.",
      genre: "comédie",
      maturity: "15",
      slug: "save-the-moonlight-project",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "Desperados",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/06/18/09//19588938_sd_013.mp4",
      sortie: "3 juillet 2020",
      logo:
        "http://fr.web.img5.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/20/06/18/09/37/09790",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/05/19/17/23/2102312.jpg",
      sortie: "3 juillet 2020",
      description:
        "Après avoir envoyé un e-mail insultant par mégarde, une éternelle romantique se rend au Mexique pour effacer le message avant que son destinataire ne le découvre.",
      genre: "romance",
      maturity: "15",
      slug: "desperados",
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      id: getUUID(),
      title: "La Terre et le sang",
      video:
        "//fr.vid.web.acsta.net/nmedia/33/20/03/25/17//19588160_sd_013.mp4",
      sortie: "17 avril 2020",
      logo:
        "http://fr.web.img5.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/20/04/03/15/26/20504",
      photo:
        "http://fr.web.img3.acsta.net/c_300_300/pictures/20/03/02/12/30/3670369.jpg",
      sortie: "17 avril 2020",
      description:
        "Après sa fille de 18 ans Sarah, sa scierie familiale représente toute la vie de Said. Pendant des années, il a difficilement maintenu à flot son entreprise, principalement pour ses employés ; jusqu'au jour où l'un d'eux se sert de la scierie pour cacher une voiture bourrée de drogue.",
      genre: "action",
      maturity: "15",
      slug: "la-terre-et-le-sang",
    });
}
