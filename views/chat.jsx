import React from 'react';
import Chat from './template/chat/chat';
import Headers from './template/components/Header/index'
import  Footers from './template/components/Footer/index'
/* /index/pic */
export default function Index() {
  return (
    <html lang="en">
    <head>
      <title>
        Demo
      </title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/css/index.css"/>
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/base.css"/>
        <link rel="stylesheet" href="/css/common.css"/>
    </head>
    <body>
    <Headers></Headers>
        <div id="root">
         
          <Chat />
          
        </div>
        <Footers></Footers>
        <script src="/scripts/socket.io.js"></script>
        <script type="text/javascript" src="/scripts/chat.js"></script>
        <script type="text/javascript" src="/scripts/link.js"></script>
    </body>
  </html>
  );
}
