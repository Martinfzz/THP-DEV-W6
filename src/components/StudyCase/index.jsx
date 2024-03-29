/* eslint-disable react/no-danger */
import React from 'react';
import {
  useParams,
} from 'react-router-dom';
import Showdown from 'showdown';

const converter = new Showdown.Converter();

// Clients informations
const clients = [
  {
    name: 'Platon',
    title: '## Le challenge',
    text: "Platon a décidé de se lancer à l'époque malgré une crise économique difficile. Nous avons été derrière eux pour leur apporter le meilleur du Web et du digital. Nous sommes vraiment la meilleure agence.",
  },
  {
    name: 'Solane',
    title: '## Solane est le premier vendeur de fraises du Poitou-Charentes',
    text: "Et c'est grâce à nous. Dans les moments les meilleurs comme les plus durs, nos campagnes de communication sur la place du marché ont fonctionné.",
  },
  {
    name: 'Sedal',
    title: "## Sedal, l'entreprise qui a commencé tout en bas... Et qui est toujours tout en bas",
    text: "Malgré nos conseils et notre site web créé sur Wix, Sedal semble ne pas vouloir décoller. Mais comme un grand homme et une grande femme l'ont dit, 'les derniers seront les premiers'.",
  },
];

const StudyCase = () => {
  // We will use the slug as params
  const { worksSlug } = useParams();

  // We compare each elements with the slug to see witch one we need to display
  return (
    <div>
      {clients.map((element) => (element.name.toLowerCase() === worksSlug.split('-')[0]
        ? (
          <>
            <h1>{element.name}</h1>
            <span dangerouslySetInnerHTML={{ __html: converter.makeHtml(element.title) }} />
            <span dangerouslySetInnerHTML={{ __html: converter.makeHtml(element.text) }} />
          </>
        ) : null))}
    </div>
  );
};

export default StudyCase;
