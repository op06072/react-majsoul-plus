import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Index2(){
  return(
    <WebView
      source={{html:`<!DOCTYPE html>
      <html>
        <head>
          <title>WEB1 - Welcome</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1>WEB</h1>
          <!--<input type="button" value="night" onclick="document.querySelector('body').style.backgroundColor='black';document.querySelector('body').style.color='white';document.querySelector('a').style.color='white';document.querySelector('#grid > ol > li:nth-child(2) > a').style.color='white';document.querySelector('#grid > ol > li:nth-child(3) > a').style.color='white';">
          <inpt type="button" value="day" onclick="document.querySelector('body').style.backgroundColor='white';document.querySelector('body').style.color='black';document.querySelector('a').style.color='black';document.querySelector('#grid > ol > li:nth-child(2) > a').style.color='black';document.querySelector('#grid > ol > li:nth-child(3) > a').style.color='black';">-->
          
          <div id="grid">
            <ol>
              <li>HTML</li>
              <li>CSS</a></li>
              <li>JavaScript</li>
            </ol>
            <div id="article">
              <h2>WEB</h2>
              <p>
                The World Wide Web (abbreviated WWW or the Web) is an information space where documents and other web resources are identified by Uniform Resource Locators(URLs), interlinked by hypertext links, and can be accessed via the Internet. English scientist Tim Berners-Lee invented the World Wide Web in 1989. He wrote the first web browser computer program in 1990 while employed at CERN in Switzerland. The Web browser was released outside of CERN in 1991, first to other research institutions starting in January 1991 and to the general public on the Internet in August 1991.
              </p>
            </div>
          </div>
        </body>
      </html>`}}
    />
  );
};
