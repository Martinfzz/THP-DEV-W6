/* eslint-disable react/no-danger */
import React from 'react';
import Showdown from 'showdown';

const converter = new Showdown.Converter();

const Home = () => (
  <>
    <span dangerouslySetInnerHTML={{ __html: converter.makeHtml('### Confiez vos rêves à des experts du Web') }} />
    <span dangerouslySetInnerHTML={{ __html: converter.makeHtml("Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de site internet: étude, UX, conception, design, développement, SEO. Notre agence web est capable de répondre à tous vos besoins et d'élaborer une véritable stratégie digitale.") }} />
  </>
);

export default Home;
