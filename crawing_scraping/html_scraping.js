// 1. 요청을 보낸다
// 2. 응답을 받는다. (HTML)
// 3. HTML을 뜯어서 원하는 정보를 얻는다

const axios = require('axios');
const { JSDOM } = require('jsdom');

// 구글뉴스
const URL = 'https://news.google.com/home?hl=ko&gl=KR&ceid=KR:ko';

async function scrapingPractice() {
  const response = await axios(URL);

  const data = response.data;

  const dom = new JSDOM(data);

  const document = dom.window.document;

  // article 태그들을 모두 선택
  const articles = document.querySelectorAll('article');

  // article 태그들을 반복을 돌면서
  articles.forEach((article) => {
    // 그 안의 a태그를 찾아서
    const aTags = article.querySelectorAll('a');
    // 그들의 text를 출력하자.
    aTags.forEach((aTag) => console.log(aTag.textContent));
  });
}

scrapingPractice();
