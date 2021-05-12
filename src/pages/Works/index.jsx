/* eslint-disable react/no-danger */
import React from 'react';
import {
  Link,
} from 'react-router-dom';
import Showdown from 'showdown';

const converter = new Showdown.Converter();

const Works = () => {
  const clientName = ['Platon', 'Solane', 'Sedal'];

  return (
    <div className="mt-5">
      <>
        <span dangerouslySetInnerHTML={{ __html: converter.makeHtml('### Au fil des années, nous avons pu accompagner les meilleurs.') }} />
        <span dangerouslySetInnerHTML={{ __html: converter.makeHtml('Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.') }} />
        <ul>
          {clientName.map((element) => (
            <li>
              <Link to={{ pathname: `/works/${element.toLowerCase()}-study-case` }}>{element}</Link>
            </li>
          ))}
        </ul>
      </>
    </div>
  );
};

export default Works;
