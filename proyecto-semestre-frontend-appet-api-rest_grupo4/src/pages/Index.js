import React from 'react';
//import ArticleList from '../components/ServicesList';
//import { useArticleList } from '../data/useServicesList';
//import ShowError from '../components/ShowError';
import ServicesList from "../components/ServicesList";

const HomePage = () => {

  return (
    <>
      <h1 className='page-title'>
        <a href='https://es.reactjs.org/'>React</a> boilerplate
        con <a href='https://ant.design/docs/react/introduce'>Antd</a>
      </h1>

      <p>Este es el contenido de la página principal.</p>

      <h2>Lista de Servicios APPET</h2>
      <ServicesList />
    </>
  );
};


export default HomePage;
