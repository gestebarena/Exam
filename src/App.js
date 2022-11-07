import React, { useState } from 'react';
import './App.css';



function App() {

// Properties

  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [done, setDone] = useState([]);
  const [starting, setStarting] = useState(true);
  const [sort, setSort] = useState(false);



  const questions = [
    {
      text: "Miten kasvit saavat vettä?",
      image: "question.jpeg",
      options: [
        { id: 0, text: "Kasveja on kasteltava", isCorrect: false },
        { id: 1, text: "Kasvit ottavat vettä maasta juurillaan", isCorrect: true },
        { id: 2, text: "Kasvit ottavat vettä sateesta lehtineen", isCorrect: false },
        { id: 3, text: "Kasvit eivät tarvitse vettä, ne ruokkivat auringosta", isCorrect: false },
      ],
    },

    {
      text: "Miksi ihmiset tarvitsevat vettä?",
      image: "question.jpeg",
      options: [
        { id: 0, text: "Ihminen tarvitsee vettä hengittääkseen", isCorrect: false },
        { id: 1, text: "Ihmisten täytyy juoda vettä, jotta he eivät jano ja voivat juosta nopeammin", isCorrect: false },
        { id: 2, text: "Ihminen tarvitsee vettä syödessään hedelmiä ja vihanneksia voidakseen kasvaa vahvoiksi", isCorrect: false },
        { id: 3, text: "Ihminen tarvitsee vettä elääkseen, ja vesi jättää ihmiseen koko ajan virtsaa, hikeä ja hengitystä", isCorrect: true },
      ],
    },

    {
      text: "Nico painaa 30 kg.  Laske kuinka paljon Nicossa on vettä.",
      image: "question.jpeg",
      options: [
        { id: 0, text: "15 kg", isCorrect: false },
        { id: 1, text: "20 kg", isCorrect: true },
        { id: 2, text: "25 kg", isCorrect: false },
        { id: 3, text: "30 kg", isCorrect: false },
      ],
    },

    {
      text: "Isä painaa 80 kg.  Laske kuinka paljon Isä on vettä.",
      image: "question.jpeg",
      options: [
        { id: 0, text: "30 kg", isCorrect: false },
        { id: 1, text: "40 kg", isCorrect: false },
        { id: 2, text: "50 kg", isCorrect: true },
        { id: 3, text: "60 kg", isCorrect: false },
      ],
    },


    {
      text: "Miten ihmiset menettävät vettä?",
      image: "question.jpeg",
      options: [
        { id: 0, text: "Hengittäminen, virtsaaminen ja syöminen", isCorrect: false },
        { id: 1, text: "Syö hedelmiä, juo vettä ja maitoa", isCorrect: false },
        { id: 2, text: "Virtsaaminen, hengitys ja hikoilu", isCorrect: true },
        { id: 3, text: "Virtsaaminen, syöminen ja hikoilu", isCorrect: false },
      ],
    },


    {
      text: "Miten ihminen saa vettä?",
      image: "question.jpeg",
      options: [
        { id: 0, text: "Hengittäminen, virtsaaminen ja syöminen", isCorrect: false },
        { id: 1, text: "Syö hedelmiä, juo vettä ja maitoa", isCorrect: true },
        { id: 2, text: "Juominen, hedelmien syöminen ja nukkuminen", isCorrect: false },
        { id: 3, text: "Virtsaaminen, syöminen ja hikoilu", isCorrect: false },
      ],
    },


    {
      text: "Voiko merivettä juoda? Miksi?",
      image: "question.jpeg",
      options: [
        { id: 0, text: "Ei, merivesi on suolaista", isCorrect: true },
        { id: 1, text: "Ei, meiltä loppuisi vesi", isCorrect: false },
        { id: 2, text: "Kyllä merivettä riittää", isCorrect: false },
        { id: 3, text: "Kyllä, se on terveellistä, koska se on puhdasta ja tuoretta", isCorrect: false },
      ],
    },

    {
      text: "What is 1?",
      image: "11-0.jpg",
      options: [
        { id: 0, text: "lumme", isCorrect: false },
        { id: 1, text: "ulpukka", isCorrect: false },
        { id: 2, text: "paju", isCorrect: true },
        { id: 3, text: "järviruoko", isCorrect: false },
      ],
    },
    {
      text: "What is 2?",
      image: "11-0.jpg",
      options: [
        { id: 0, text: "tervaleppä", isCorrect: true },
        { id: 1, text: "ulpukka", isCorrect: false },
        { id: 2, text: "paju", isCorrect: false },
        { id: 3, text: "järviruoko", isCorrect: false },
      ],
    },
    {
      text: "What is 3?",
      image: "11-0.jpg",
      options: [
        { id: 0, text: "tervaleppä", isCorrect: false },
        { id: 1, text: "ulpukka", isCorrect: false },
        { id: 2, text: "paju", isCorrect: false },
        { id: 3, text: "osmankäämi", isCorrect: true },
      ],
    },
    {
      text: "What is 4?",
      image: "11-0.jpg",
      options: [
        { id: 0, text: "tervaleppä", isCorrect: false },
        { id: 1, text: "ulpukka", isCorrect: false },
        { id: 2, text: "paju", isCorrect: false },
        { id: 3, text: "järviruoko", isCorrect: true },
      ],
    },
    {
      text: "What is 5?",
      image: "11-0.jpg",
      options: [
        { id: 0, text: "kurjenmiekka", isCorrect: true },
        { id: 1, text: "ulpukka", isCorrect: false },
        { id: 2, text: "paju", isCorrect: false },
        { id: 3, text: "järviruoko", isCorrect: false },
      ],
    },
    {
      text: "What is 6?",
      image: "11-0.jpg",
      options: [
        { id: 0, text: "lumme", isCorrect: true },
        { id: 1, text: "ulpukka", isCorrect: false },
        { id: 2, text: "paju", isCorrect: false },
        { id: 3, text: "järviruoko", isCorrect: false },
      ],
    },
    {
      text: "What is 7?",
      image: "11-0.jpg",
      options: [
        { id: 0, text: "lumme", isCorrect: false },
        { id: 1, text: "ulpukka", isCorrect: true },
        { id: 2, text: "paju", isCorrect: false },
        { id: 3, text: "järviruoko", isCorrect: false },
      ],
    },

    {
      text: "What is 8?",
      image: "11-0.jpg",
      options: [
        { id: 0, text: "tervaleppä", isCorrect: false },
        { id: 1, text: "ahvenvita", isCorrect: true },
        { id: 2, text: "paju", isCorrect: false },
        { id: 3, text: "järviruoko", isCorrect: false },
      ],
    },

    {
      text: "What is A?",
      image: "kala.jpg",
      options: [
        { id: 0, text: "selkäevät", isCorrect: false },
        { id: 1, text: "uimarakko", isCorrect: false },
        { id: 2, text: "selkäranka", isCorrect: true },
        { id: 3, text: "kidukset", isCorrect: false },
      ],
    },

    {
      text: "What is B?",
      image: "kala.jpg",
      options: [
        { id: 0, text: "selkäevät", isCorrect: true },
        { id: 1, text: "pyrstöevä", isCorrect: false },
        { id: 2, text: "selkäranka", isCorrect: false },
        { id: 3, text: "peräevä", isCorrect: false },
      ],
    },

    {
      text: "What is C?",
      image: "kala.jpg",
      options: [
        { id: 0, text: "selkäevät", isCorrect: false },
        { id: 1, text: "pyrstöevä", isCorrect: true },
        { id: 2, text: "selkäranka", isCorrect: false },
        { id: 3, text: "peräevä", isCorrect: false },
      ],
    },

    {
      text: "What is D?",
      image: "kala.jpg",
      options: [
        { id: 0, text: "selkäevät", isCorrect: false },
        { id: 1, text: "pyrstöviiva", isCorrect: false },
        { id: 2, text: "kylkiviiva", isCorrect: true },
        { id: 3, text: "peräevä", isCorrect: false },
      ],
    },

    {
      text: "What is E?",
      image: "kala.jpg",
      options: [
        { id: 0, text: "selkäevät", isCorrect: false },
        { id: 1, text: "pyrstöevä", isCorrect: false },
        { id: 2, text: "uimaevä", isCorrect: false },
        { id: 3, text: "peräevä", isCorrect: true },
      ],
    },

    {
      text: "What is F?",
      image: "kala.jpg",
      options: [
        { id: 0, text: "selkäevät", isCorrect: false },
        { id: 1, text: "uimarakko", isCorrect: true },
        { id: 2, text: "mätipussi", isCorrect: false },
        { id: 3, text: "peräevä", isCorrect: false },
      ],
    },

    {
      text: "What is G?",
      image: "kala.jpg",
      options: [
        { id: 0, text: "mätipussi", isCorrect: true },
        { id: 1, text: "pyrstöevä", isCorrect: false },
        { id: 2, text: "selkäranka", isCorrect: false },
        { id: 3, text: "peräevä", isCorrect: false },
      ],
    },

    {
      text: "What is H?",
      image: "kala.jpg",
      options: [
        { id: 0, text: "vatsaevä", isCorrect: true },
        { id: 1, text: "pyrstöevä", isCorrect: false },
        { id: 2, text: "uimaevä", isCorrect: false },
        { id: 3, text: "peräevä", isCorrect: false },
      ],
    },

    {
      text: "What is I?",
      image: "kala.jpg",
      options: [
        { id: 0, text: "sydän", isCorrect: false },
        { id: 1, text: "suoli", isCorrect: true },
        { id: 2, text: "silma", isCorrect: false },
        { id: 3, text: "suomuja", isCorrect: false },
      ],
    },

    {
      text: "What is J?",
      image: "kala.jpg",
      options: [
        { id: 0, text: "sydän", isCorrect: false },
        { id: 1, text: "suoli", isCorrect: false },
        { id: 2, text: "maha", isCorrect: true },
        { id: 3, text: "suomuja", isCorrect: false },
      ],
    },

    {
      text: "What is K?",
      image: "kala.jpg",
      options: [
        { id: 0, text: "sydän", isCorrect: true },
        { id: 1, text: "suoli", isCorrect: false },
        { id: 2, text: "silma", isCorrect: false },
        { id: 3, text: "suomuja", isCorrect: false },
      ],
    },

    {
      text: "What is L?",
      image: "kala.jpg",
      options: [
        { id: 0, text: "sydän", isCorrect: false },
        { id: 1, text: "suoli", isCorrect: false },
        { id: 2, text: "silma", isCorrect: true },
        { id: 3, text: "suomuja", isCorrect: false },
      ],
    },

    {
      text: "What is M?",
      image: "kala.jpg",
      options: [
        { id: 0, text: "selkäevät", isCorrect: false },
        { id: 1, text: "uimarakko", isCorrect: false },
        { id: 2, text: "selkäranka", isCorrect: false },
        { id: 3, text: "kidukset", isCorrect: true },
      ],
    },

    {
      text: "What is N?",
      image: "kala.jpg",
      options: [
        { id: 0, text: "sydän", isCorrect: false },
        { id: 1, text: "suoli", isCorrect: false },
        { id: 2, text: "silma", isCorrect: false },
        { id: 3, text: "suomuja", isCorrect: true },
      ],
    },

    {
      text: "Which plant is this?",
      image: "11-1.jpeg",
      options: [
        { id: 0, text: "tervaleppä", isCorrect: true },
        { id: 1, text: "ulpukka", isCorrect: false },
        { id: 2, text: "paju", isCorrect: false },
        { id: 3, text: "osmankäämi", isCorrect: false },
      ],
    },

    {
      text: "Which plant is this?",
      image: "11-2.jpeg",
      options: [
        { id: 0, text: "tervaleppä", isCorrect: false },
        { id: 1, text: "ulpukka", isCorrect: false },
        { id: 2, text: "paju", isCorrect: true },
        { id: 3, text: "osmankäämi", isCorrect: false },
      ],
    },

    {
      text: "Which plant is this?",
      image: "11-3.jpeg",
      options: [
        { id: 0, text: "järviruoko", isCorrect: true },
        { id: 1, text: "ulpukka", isCorrect: false },
        { id: 2, text: "paju", isCorrect: false },
        { id: 3, text: "järvirutto", isCorrect: false },
      ],
    },

    {
      text: "Which plant is this?",
      image: "11-4.jpeg",
      options: [
        { id: 0, text: "tervaleppä", isCorrect: false },
        { id: 1, text: "ulpukka", isCorrect: false },
        { id: 2, text: "paju", isCorrect: false },
        { id: 3, text: "osmankäämi", isCorrect: true },
      ],
    },

    {
      text: "Which plant is this?",
      image: "11-5.jpeg",
      options: [
        { id: 0, text: "lumme", isCorrect: true },
        { id: 1, text: "ulpukka", isCorrect: false },
        { id: 2, text: "paju", isCorrect: false },
        { id: 3, text: "järviruoko", isCorrect: false },
      ],
    },

    {
      text: "Which plant is this?",
      image: "11-6.jpeg",
      options: [
        { id: 0, text: "lumme", isCorrect: false },
        { id: 1, text: "ulpukka", isCorrect: true },
        { id: 2, text: "paju", isCorrect: false },
        { id: 3, text: "järviruoko", isCorrect: false },
      ],
    },

    {
      text: "Which plant is this?",
      image: "11-7.jpeg",
      options: [
        { id: 0, text: "tervaleppä", isCorrect: false },
        { id: 1, text: "ahvenvita", isCorrect: true },
        { id: 2, text: "vesirutto", isCorrect: false },
        { id: 3, text: "vesiruoko", isCorrect: false },
      ],
    },

    {
      text: "Which plant is this?",
      image: "11-8.jpeg",
      options: [
        { id: 0, text: "tervaleppä", isCorrect: false },
        { id: 1, text: "ahvenvita", isCorrect: false },
        { id: 2, text: "vesirutto", isCorrect: true },
        { id: 3, text: "vesiruoko", isCorrect: false },
      ],
    },

    {
      text: "Which fish is this?",
      image: "12-1.jpeg",
      options: [
        { id: 0, text: "hauki", isCorrect: true },
        { id: 1, text: "muikku", isCorrect: false },
        { id: 2, text: "silakka", isCorrect: false },
        { id: 3, text: "siika", isCorrect: false },
      ],
    },

    {
      text: "Which fish is this?",
      image: "12-2.jpeg",
      options: [
        { id: 0, text: "made", isCorrect: false },
        { id: 1, text: "lohi", isCorrect: false },
        { id: 2, text: "särki", isCorrect: false },
        { id: 3, text: "ahven", isCorrect: true },
      ],
    },

    {
      text: "Which fish is this?",
      image: "12-3.jpeg",
      options: [
        { id: 0, text: "made", isCorrect: false },
        { id: 1, text: "lohi", isCorrect: false },
        { id: 2, text: "särki", isCorrect: true },
        { id: 3, text: "ahven", isCorrect: false },
      ],
    },

    {
      text: "Which fish is this?",
      image: "12-4.jpeg",
      options: [
        { id: 0, text: "made", isCorrect: false },
        { id: 1, text: "lohi", isCorrect: true },
        { id: 2, text: "särki", isCorrect: false },
        { id: 3, text: "ahven", isCorrect: false },
      ],
    },

    {
      text: "Which fish is this?",
      image: "12-5.jpeg",
      options: [
        { id: 0, text: "hauki", isCorrect: false },
        { id: 1, text: "muikku", isCorrect: true },
        { id: 2, text: "silakka", isCorrect: false },
        { id: 3, text: "siika", isCorrect: false },
      ],
    },

    {
      text: "Which fish is this?",
      image: "12-6.jpeg",
      options: [
        { id: 0, text: "siika", isCorrect: true },
        { id: 1, text: "muikku", isCorrect: false },
        { id: 2, text: "silakka", isCorrect: false },
        { id: 3, text: "särki", isCorrect: false },
      ],
    },

    {
      text: "Which fish is this?",
      image: "12-7.jpeg",
      options: [
        { id: 0, text: "hauki", isCorrect: false },
        { id: 1, text: "muikku", isCorrect: false },
        { id: 2, text: "silakka", isCorrect: true },
        { id: 3, text: "siika", isCorrect: false },
      ],
    },

    {
      text: "Which fish is this?",
      image: "12-8.jpeg",
      options: [
        { id: 0, text: "made", isCorrect: true },
        { id: 1, text: "lohi", isCorrect: false },
        { id: 2, text: "särki", isCorrect: false },
        { id: 3, text: "ahven", isCorrect: false },
      ],
    },

    {
      text: "Which bird is this?",
      image: "13-1.jpeg",
      options: [
        { id: 0, text: "sinisorsa", isCorrect: true },
        { id: 1, text: "haahka", isCorrect: false },
        { id: 2, text: "telkkä", isCorrect: false },
        { id: 3, text: "naurulokki", isCorrect: false },
      ],
    },

    {
      text: "Which bird is this?",
      image: "13-2.jpeg",
      options: [
        { id: 0, text: "sinisorsa", isCorrect: false },
        { id: 1, text: "haahka", isCorrect: false },
        { id: 2, text: "laulujuotsen", isCorrect: true },
        { id: 3, text: "naurulokki", isCorrect: false },
      ],
    },

    {
      text: "Which bird is this?",
      image: "13-3.jpeg",
      options: [
        { id: 0, text: "laulujuotsen", isCorrect: false },
        { id: 1, text: "telkkä", isCorrect: false },
        { id: 2, text: "kuovi", isCorrect: false },
        { id: 3, text: "silkkiuikku", isCorrect: true },
      ],
    },

    {
      text: "Which bird is this?",
      image: "13-4.jpeg",
      options: [
        { id: 0, text: "sinisorsa", isCorrect: false },
        { id: 1, text: "haahka", isCorrect: false },
        { id: 2, text: "telkkä", isCorrect: true },
        { id: 3, text: "naurulokki", isCorrect: false },
      ],
    },

    {
      text: "Which bird is this?",
      image: "13-5.jpeg",
      options: [
        { id: 0, text: "sinisorsa", isCorrect: false },
        { id: 1, text: "haahka", isCorrect: true },
        { id: 2, text: "telkkä", isCorrect: false },
        { id: 3, text: "naurulokki", isCorrect: false },
      ],
    },

    {
      text: "Which bird is this?",
      image: "13-6.jpeg",
      options: [
        { id: 0, text: "naurulokki", isCorrect: true },
        { id: 1, text: "kurki", isCorrect: false },
        { id: 2, text: "kuovi", isCorrect: false },
        { id: 3, text: "silkkiuikku", isCorrect: false },
      ],
    },

    {
      text: "Which bird is this?",
      image: "13-7.jpeg",
      options: [
        { id: 0, text: "naurulokki", isCorrect: false },
        { id: 1, text: "kurki", isCorrect: false },
        { id: 2, text: "kuovi", isCorrect: true },
        { id: 3, text: "silkkiuikku", isCorrect: false },
      ],
    },

    {
      text: "Which bird is this?",
      image: "13-8.jpeg",
      options: [
        { id: 0, text: "naurulokki", isCorrect: false },
        { id: 1, text: "kurki", isCorrect: true },
        { id: 2, text: "kuovi", isCorrect: false },
        { id: 3, text: "silkkiuikku", isCorrect: false },
      ],
    },

    {
      text: "Which animal is this?",
      image: "14-1.jpeg",
      options: [
        { id: 0, text: "majava", isCorrect: true },
        { id: 1, text: "saukko", isCorrect: false },
        { id: 2, text: "piisami", isCorrect: false },
        { id: 3, text: "vesimyyrä", isCorrect: false },
      ],
    },

    {
      text: "Which animal is this?",
      image: "14-2.jpeg",
      options: [
        { id: 0, text: "majava", isCorrect: false },
        { id: 1, text: "saukko", isCorrect: false },
        { id: 2, text: "piisami", isCorrect: false },
        { id: 3, text: "vesimyyrä", isCorrect: true },
      ],
    },

    {
      text: "Which animal is this?",
      image: "14-3.jpeg",
      options: [
        { id: 0, text: "saimaannorppa", isCorrect: true },
        { id: 1, text: "harmaahylje", isCorrect: false },
        { id: 2, text: "piisami", isCorrect: false },
        { id: 3, text: "vesimyyrä", isCorrect: false },
      ],
    },

    {
      text: "Which animal is this?",
      image: "14-4.jpeg",
      options: [
        { id: 0, text: "majava", isCorrect: false },
        { id: 1, text: "saukko", isCorrect: false },
        { id: 2, text: "piisami", isCorrect: true },
        { id: 3, text: "vesimyyrä", isCorrect: false },
      ],
    },

    {
      text: "Which animal is this?",
      image: "14-5.jpeg",
      options: [
        { id: 0, text: "majava", isCorrect: false },
        { id: 1, text: "saukko", isCorrect: true },
        { id: 2, text: "piisami", isCorrect: false },
        { id: 3, text: "vesimyyrä", isCorrect: false },
      ],
    },

    {
      text: "Which animal is this?",
      image: "14-6.jpeg",
      options: [
        { id: 0, text: "saimaannorppa", isCorrect: false },
        { id: 1, text: "harmaahylje", isCorrect: true },
        { id: 2, text: "piisami", isCorrect: false },
        { id: 3, text: "vesimyyrä", isCorrect: false },
      ],
    },

    {
      text: "Which animal is this?",
      image: "15-1.jpeg",
      options: [
        { id: 0, text: "hevosjuotikas", isCorrect: false },
        { id: 1, text: "sinisimpukka", isCorrect: false },
        { id: 2, text: "rapu", isCorrect: true },
        { id: 3, text: "järvisimpukka", isCorrect: false },
      ],
    },

    {
      text: "Which animal is this?",
      image: "15-2.jpeg",
      options: [
        { id: 0, text: "hevosjuotikas", isCorrect: false },
        { id: 1, text: "sinisimpukka", isCorrect: false },
        { id: 2, text: "sudenkorento", isCorrect: false },
        { id: 3, text: "järvisimpukka", isCorrect: true },
      ],
    },

    {
      text: "Which animal is this?",
      image: "15-3.jpeg",
      options: [
        { id: 0, text: "hevosjuotikas", isCorrect: false },
        { id: 1, text: "sinisimpukka", isCorrect: true },
        { id: 2, text: "sudenkorento", isCorrect: false },
        { id: 3, text: "järvisimpukka", isCorrect: false },
      ],
    },

    {
      text: "Which animal is this?",
      image: "15-4.jpeg",
      options: [
        { id: 0, text: "hevosjuotikas", isCorrect: false },
        { id: 1, text: "sudenkorento", isCorrect: false },
        { id: 2, text: "rantahämähäkki", isCorrect: false },
        { id: 3, text: "liejukotilo", isCorrect: true },
      ],
    },

    {
      text: "Which animal is this?",
      image: "15-5.jpeg",
      options: [
        { id: 0, text: "hevosjuotikas", isCorrect: false },
        { id: 1, text: "sudenkorento", isCorrect: false },
        { id: 2, text: "rantahämähäkki", isCorrect: true },
        { id: 3, text: "vesimittari", isCorrect: false },,
      ],
    },

    {
      text: "Which animal is this?",
      image: "15-6.jpeg",
      options: [
        { id: 0, text: "hevosjuotikas", isCorrect: true },
        { id: 1, text: "sudenkorento", isCorrect: false },
        { id: 2, text: "rantahämähäkki", isCorrect: false },
        { id: 3, text: "vesimittari", isCorrect: false },
      ],
    },

    {
      text: "Which animal is this?",
      image: "15-7.jpeg",
      options: [
        { id: 0, text: "hevosjuotikas", isCorrect: false },
        { id: 1, text: "sudenkorento", isCorrect: true },
        { id: 2, text: "rantahämähäkki", isCorrect: false },
        { id: 3, text: "vesimittari", isCorrect: false },
      ],
    },

    {
      text: "Which animal is this?",
      image: "15-8.jpeg",
      options: [
        { id: 0, text: "hevosjuotikas", isCorrect: false },
        { id: 1, text: "sudenkorento", isCorrect: false },
        { id: 2, text: "rantahämähäkki", isCorrect: false },
        { id: 3, text: "vesimittari", isCorrect: true },
      ],
    }

  ];
    

// Helper functions

  const optionClicked = (isCorrect) => {
    if(!answered){
      setAnswered(true)
      if (isCorrect) {
        setScore(score+1);
      }
    } else 
    {

      if (totalAnswered + 1 < questions.length){

        let randomIndex;
        
        do
        {
          randomIndex= Math.floor(Math.random() * questions.length);
        }  
        while(done.includes(randomIndex));

        done.push(randomIndex);
        if (sort){
          setCurrentQuestion(randomIndex);
        }
        else
          setCurrentQuestion(currentQuestion+1);

        setTotalAnswered(totalAnswered+1)
        setAnswered(false);
      } else {
        setFinalResults(true);
      }
    }
  }

  const restartGame = () =>{
    setScore(0);
    setDone([]);
    if (sort){
      setCurrentQuestion(Math.floor(Math.random() * questions.length));
    }
    else
      setCurrentQuestion(0);
    setAnswered(false);
    setFinalResults(false);
    setTotalAnswered(0);
  }

  function shuffleArray(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  if (starting)
  {
    setStarting(false);
    restartGame();
  }
  
  return (
    <div className="App">

      {/* 3. Show results or show the question game  */}
      {showFinalResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {Math.round((score / questions.length) * 100)}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2></h2>
         <h2>
           {totalAnswered + 1} of {questions.length}   --   {score} / {totalAnswered} ({totalAnswered > 0 ? (Math.round(score / totalAnswered * 100)) : 0}%)
          </h2>
          <img className='picture' src= {questions[currentQuestion].image}></img>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li 
                  className = {answered && option.isCorrect? 'li_right' : answered ? 'li_wrong' : 'li'}
                  onClick={() => optionClicked(option.isCorrect)}
                  key={option.id}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
