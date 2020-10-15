import React from 'react';
import Headers from './template/components/Header/index'
import Banner from './template/components/Banner/index'
import Title from './template/components/Title/index'
import PostList from './template/components/List/PostList'
import Footers from './template/components/Footer/index'
/* /index/pic */
export default function Index() {
  return (
    <html lang="en">
    <head>
      <title>
        iCrowdTask
      </title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/css/index.css"/>
        <link rel="stylesheet" href="/css/style.css"/>
        <link rel="stylesheet" href="/css/base.css"/>
        <link rel="stylesheet" href="/css/common.css"/>
    </head>
    <body><Headers></Headers>
      <div id="root">
           
          <Banner></Banner>
          <Title title="Featured Requesters"></Title>
          <PostList></PostList>
          
        </div>
        <Footers></Footers>
    </body>
  </html>
  );
}
