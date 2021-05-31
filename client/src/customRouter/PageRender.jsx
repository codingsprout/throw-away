import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { NotFound } from '../components';

const generatePage = (pageName) => {
  const component = () => require(`../pages/${pageName}`).default;

  try {
    return React.createElement(component());
  } catch (err) {
    return <NotFound />;
  }
};

const PageRender = () => {
  // PageRender is inside of App.jsx and Route is /:page which is const {page}
  // Route is /:page/:id which is const {id}

  const { page, id } = useParams();
  const { auth } = useSelector((renderState) => renderState);
  let pageName = '';

  if (auth.token) {
    if (id) {
      pageName = `${page}/[id]`;
    } else {
      pageName = `${page}`;
    }
  }
  return generatePage(pageName);
};

export default PageRender;
