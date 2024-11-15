const axios = require('axios');
const { JSDOM } = require('jsdom');
const { default: puppeteer } = require('puppeteer');

async function scrapingPractice() {
  const URL = 'https://comic.naver.com/webtoon?tab=mon';

  const browser = await puppeteer.launch({
    headless: false,
  });

  const page = await browser.newPage();

  await page.goto(URL);

  const text = await page.$eval('h1', (el) => el.textContent);
  // document.querySelector('h1').textContent
  console.log(text);

  const imgUrls = await page.$$eval(
    '#content > div:nth-child(1) > ul img',
    (imgs) => {
      console.log(imgs);
      imgs.map((img) => img.src);
    }
  );
  console.log(imgUrls);
}

scrapingPractice();
