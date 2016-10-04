/*
* Class LOL
* With developer mode and Konami
*/
import url from 'fast-url-parser';
url.queryString = require('querystringparser');
import Konami from 'konami-js';

window.Hi = () => {
  console.log('Hello there nice to meet you ^^');
  console.log('More options for developers: add ?devMode=true in params and reload the page');
};

class LOL {
  constructor() {
    new Konami(this.konami.bind(this));
    window.DEVMODE = false;
    this.parseQuery();

  }
  parseQuery() {
    const parsed = url.parse(window.location.search, true);
    if (parsed.query.devMode) {
      window.DEVMODE = true;
      console.log('code: https://github.com/JordanMachado/particles-attraction');
      console.log('starter: https://github.com/JordanMachado/threejs-starter');
      console.log('twitter: https://twitter.com/xvi_jojo');
    } else {
      console.log('Say Hi()  ¯\\_(ツ)_/¯ !');
    }
  }
  konami() {
    console.log('konami');
  }
}
export default new LOL();
