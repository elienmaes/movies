import fetch from 'node-fetch';

const PROXY_SEO_URL = 'https://nodejs-nmd-crawler.herokuapp.com/proxy/seo?url=';

class Proxy {
  static async getSEOFromUrl(url) {
    const response = await fetch(`${PROXY_SEO_URL}${url}`);
    const jsonData = await response.json();
    return jsonData;
  };
  static async fetchDataFromApi(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  };
};

export default Proxy;

