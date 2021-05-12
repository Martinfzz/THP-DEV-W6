import React from 'react';
import {
  useParams,
} from 'react-router-dom';
import Showdown from 'showdown';

const converter = new Showdown.Converter();

const StudyCase = () => {
  const { worksSlug } = useParams();
  console.log(worksSlug.split("-")[0])
  return (
    <div>
      {clients.map(element => element.name.toLowerCase() === worksSlug.split("-")[0] ? 
      (<><h1>{element.name}</h1>
      <span dangerouslySetInnerHTML={{ __html: converter.makeHtml(element.title) }}/>
      <span dangerouslySetInnerHTML={{ __html: converter.makeHtml(element.text) }}/></>) : null)}
    </div>
  )
}

const clients = [
  {
    name: "Platon",
    title: "## Le challenge",
    text: "Platon a décidé de se lancer à l'époque malgré une crise économique difficile. Nous avons été derrière eux pour leur apporter le meilleur du Web et du digital. Nous sommes vraiment la meilleure agence."
  },
  {
    name: "Solane",
    title: "## Solane est le premier vendeur de fraises du Poitou-Charentes",
    text: "Et c'est grâce à nous. Dans les moments les meilleurs comme les plus durs, nos campagnes de communication sur la place du marché ont fonctionné."
  },
  {
    name: "Sedal",
    title: "## Sedal, l'entreprise qui a commencé tout en bas... Et qui est toujours tout en bas",
    text: "Malgré nos conseils et notre site web créé sur Wix, Sedal semble ne pas vouloir décoller. Mais comme un grand homme et une grande femme l'ont dit, 'les derniers seront les premiers'."
  }
]

export default StudyCase;