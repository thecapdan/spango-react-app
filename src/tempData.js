// temp substitute for pulling data from a DB

const tempData = [
  {
    Lesson: 1,
    Description: "Verbs",
    Pairs: [
      {
        base: "I want",
        target: "quiero",
      },
      {
        base: "I need",
        target: "necesito",
      },
      {
        base: "to eat",
        target: "comer",
      },
      {
        base: "to go",
        target: "ir",
      },
      {
        base: "to see",
        target: "ver",
      },
      {
        base: "to speak",
        target: "hablar",
      },
    ],
    Exercises: [
      {
        base: "I want to eat something different",
        target: "Quiero comer algo diferente",
      },
      {
        base: "I need to see the doctor please",
        target: "Necesito ver al doctor por favor",
      },
      {
        base: "I want to speak spanish on my holidays",
        target: "Quiero hablar español en mis vacaciones",
      },
      {
        base: "I need to speak Spanish in my company",
        target: "Necesito hablar español en la compañia",
      },
      {
        base: "I don't need to go until tomorrow",
        target: "No necesito ir hasta mañana",
      },
      {
        base: "I want to eat a burrito in the market",
        target: "Quiero comer un burrito en el mercado",
      },
      {
        base: "I want to see the menu please",
        target: " Quiero ver el meñu por favor",
      },
      {
        base: "I want to go to the party",
        target: "Quiero ir a la fiesta",
      },
      {
        base: "I need to go to Spain in June",
        target: "Necesito ir a España en junio",
      },
      {
        base: "I don't want to go in June, I want to go in September",
        target: "No quiero ir en junio, quiero ir en septiembre",
      },
    ],
    Hints: [
      {
        base: "a restaurant",
        target: "un restaurante",
      },
      {
        base: "your house",
        target: "su casa",
      },
      {
        base: "to (a place)",
        target: "a",
      },
      {
        base: "to the",
        target: "al",
      },
      {
        base: "thank you",
        target: "gracias",
      },
    ],
  },
  {
    Lesson: 2,
    Description: "Verbs 2",
    Pairs: [
      {
        base: "with you",
        target: "con usted",
      },
      {
        base: "now",
        target: "ahora",
      },
      {
        base: "soon",
        target: "pronto",
      },
      {
        base: "in order to",
        target: "para",
      },
      {
        base: "more",
        target: "más",
      },
      {
        base: "tonight",
        target: "esta noche",
      },
    ],
    Exercises: [
      {
        base: "I need to see your visa now",
        target: "Necesito ver su visa ahora",
      },
      {
        base: "I want to speak with you",
        target: "Quiero hablar con usted",
      },
      {
        base: "I need to go to the doctor now",
        target: "Necesito ir al doctor ahora",
      },
      {
        base: "There's a problem, I need to see him",
        target: "Hay un problema, necesito verlo",
      },
      {
        base: "I want to go to Spain in order to study and practice Spanish",
        target: "Quiero ir a Espanna para estudiar y practicar el espaæol",
      },
      {
        base: "I need to go to the hotel soon",
        target: "Necesito ir al hotel pronto",
      },
      {
        base: "In order to see Venus I need a telescope",
        target: "Para ver Venus necesito un telescopio",
      },
      {
        base: "I want to invite him to the party",
        target: "Quiero invitarlo a la fiesta",
      },
      {
        base: "I don't want to eat in the restaurant tonight",
        target: "No quiero comer en el restaurante esta noche",
      },
      {
        base: "I want to go to Madrid tonight",
        target: "No quiero ir a Madrid esta noche",
      },
      {
        base: "",
        target: "Esta noche quiero ir al teatro",
      },
      {
        base: "",
        target: "Quiero comer algo diferente esta noche",
      },
      {
        base: "",
        target: "Quiero ver mÆs partes de MØxico",
      },
      {
        base: "",
        target: "Necesito ir al hotel ahora",
      },
      {
        base: "",
        target:
          "No quiero comer comida mexicana esta noche, preferira comida americana",
      },
      {
        base: "",
        target: "Quiero ir a la fiesta esta noche",
      },
      {
        base: "",
        target: "Necesito ir a Argentina pronto",
      },
      {
        base: "",
        target: "Necesito ir a MØxico en junio para visitar la planta",
      },
      {
        base: "",
        target: "Quiero visitarla en diciembre",
      },
      {
        base: "",
        target: "Quiero ver los mariachis en Madrid esta noche",
      },
      {
        base: "",
        target: "Necesito ver los pasaportes",
      },
    ],
    Hints: [
      {
        base: "and",
        target: "y",
      },
      {
        base: "there is/are",
        target: "hay",
      },
      {
        base: "please",
        target: "por favor",
      },
      {
        base: "to the",
        target: "al",
      },
      {
        base: "something",
        target: "algo",
      },
    ],
  },
  {
    Lesson: 3,
    Description: "Verbs 3",
    Pairs: [
      {
        base: "I am going to",
        target: "voy a",
      },
      {
        base: "I would like",
        target: "me gustaria",
      },
      {
        base: "to visit",
        target: "visitar",
      },
      {
        base: "to invite",
        target: "invitar",
      },
      {
        base: "to help",
        target: "ayudar",
      },
      {
        base: "to call",
        target: "llamar",
      },
    ],
    Exercises: [
      {
        base: "I am going to the doctor now",
        target: "Voy a ir al doctor ahora",
      },
      {
        base: "There is a problem, I need to help my father",
        target: "Hay un problema, necesito ayudar a mi papá",
      },
      {
        base: "I would like to go to Spain in order to study more Spanish",
        target: "Me gustaría ir a Costa Rica para estudiar más espanól",
      },
      {
        base: "I am going to go to the hotel soon",
        target: "Voy a ir al hotel pronto",
      },
      {
        base: "In order to speak with you sooner I am going to study a lot",
        target: "Para hablar con usted más pronto voy a estudiar mucho",
      },
      {
        base: "I am going to visit her in November",
        target: "Voy a visitarla en noviembre",
      },
      {
        base: "I am going to visit my friends tonight",
        target: "Voy a visitar a mis amigos esta noche",
      },
      {
        base: "I would like to invite Pedro",
        target: "Me gustariá invitar a Pedro",
      },
      {
        base: "There is a problem; I need to call the police",
        target: "Hay un problema, necesito llamar a la policía",
      },
      {
        base: "I am not going to eat in the restaurant tonight",
        target: " No voy a comer en el restaurante esta noche",
      },
    ],
    Hints: [
      {
        base: "wife",
        target: "esposa",
      },
      {
        base: "my friend",
        target: "mi amigo",
      },
      {
        base: "my family",
        target: "mi familia",
      },
      {
        base: "my dad",
        target: "mi papá",
      },
      {
        base: "to the party",
        target: "a la fiesta",
      },
    ],
  },
  {
    Lesson: 4,
    Description: "mortar",
    Pairs: [
      {
        base: "again",
        target: "otra vez",
      },
      {
        base: "with",
        target: "con",
      },
      {
        base: "the next",
        target: "la próxima",
      },
      {
        base: "this",
        target: "esta",
      },
      {
        base: "week",
        target: "semana",
      },
      {
        base: "tomorrow",
        target: "mañana",
      },
    ],
    Exercises: [
      {
        base: "Tonight I would like to go to the cinema with my friends",
        target: "Esta noche me gustaría ir al cine con mis amigos",
      },
      {
        base: "I need to speak with my wife by telephone again",
        target: "Necesito hablar con mi esposa por teleeefono otra vez",
      },
      {
        base: "I am going to visit her again in may",
        target: "Voy a visitarla otra vez en mayo",
      },
      {
        base: "This week and the next I need to study a lot",
        target: "Esta semana y la proooxima necesito estudiar mucho",
      },
      {
        base: "I need to go to the dentist this week",
        target: "Necesito ir al dentista esta semana",
      },
      {
        base: "I want to help him with the study of Spanish",
        target: "Quiero ayudarlo con el estudio del espannnol",
      },
      {
        base: "I need to help my friend tomorrow",
        target: "Necesito ayudar a mi amigo mannnana",
      },
      {
        base: "I need to go to the dentist this week",
        target: "Necesito ir al dentista esta semana",
      },
      {
        base: "I am going to speak with Maria in Spanish soon",
        target: "Voy a hablar con María en espannnol pronto",
      },
      {
        base: "I want to visit my family this week",
        target: "Quiero visitar a mi familia esta semana",
      },
    ],
    Hints: [
      {
        base: "dentist",
        target: "dentista",
      },
      {
        base: "cinema",
        target: "el cine",
      },
      {
        base: "telephone",
        target: "el telefono",
      },
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
    ],
  },
  {
    Lesson: 5,
    Description: "Verbs X",
    Pairs: [
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
    ],
    Exercises: [
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
    ],
    Hints: [
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
    ],
  },
  {
    Lesson: 6,
    Description: "Verbs X",
    Pairs: [
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
    ],
    Exercises: [
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
    ],
    Hints: [
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
    ],
  },
  {
    Lesson: 7,
    Description: "Verbs X",
    Pairs: [
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
    ],
    Exercises: [
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
    ],
    Hints: [
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
    ],
  },
  {
    Lesson: 8,
    Description: "Verbs X",
    Pairs: [
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
    ],
    Exercises: [
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
    ],
    Hints: [
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
      {
        base: "",
        target: "",
      },
    ],
  },
];

export default tempData;
