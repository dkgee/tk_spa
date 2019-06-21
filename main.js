// const fs = require('fs');
const puppeteer = require('puppeteer');
var request = require("request");

(async () => {
  const browser = await (puppeteer.launch({ executablePath: 'C:/Users/jht/Downloads/chrome-win/chrome.exe', headless: true }));
  const page = await browser.newPage();

  // 进入页面
  await page.goto('https://www.guazi.com/hz/buy/');

  // 获取页面标题
  let title = await page.title();
  console.log(title);

  // 获取汽车品牌
  const BRANDS_INFO_SELECTOR = '.dd-all.clearfix.js-brand.js-option-hid-info';
  const brands = await page.evaluate(sel => {
    const ulList = Array.from($(sel).find('ul li p a'));
    const ctn = ulList.map(v => {
      return v.innerText.replace(/\s/g, '');
    });
    return ctn;
  }, BRANDS_INFO_SELECTOR);
  console.log('汽车品牌: ', JSON.stringify(brands));
  // let writerStream = fs.createWriteStream('D:/car_brands.json');
  // writerStream.write(JSON.stringify(brands, undefined, 2), 'UTF8');
  // writerStream.end();	
  // await bodyHandle.dispose();
	request({
	    url: "http://127.0.0.1:8081/test/data",
	    method: "post",//如果是post就涉及到跨域的问题了
	    json: true,
	    headers: {
	        "content-type": "application/json",
	    },
	    body: JSON.stringify(brands)
	}, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        console.log(body);
	    }
	});

  // 获取车源列表
  const CAR_LIST_SELECTOR = 'ul.carlist';
  const carList = await page.evaluate((sel) => {
    const catBoxs = Array.from($(sel).find('li a'));
    const ctn = catBoxs.map(v => {
      const title = $(v).find('h2.t').text();
      const subTitle = $(v).find('div.t-i').text().split('|');
      return {
        title: title,
        year: subTitle[0],
        milemeter: subTitle[1]
      };
    });
    return ctn;
  }, CAR_LIST_SELECTOR);
	
	request({
	    url: "http://127.0.0.1:8081/test/data",
	    method: "post",//如果是post就涉及到跨域的问题了
	    json: true,
	    headers: {
	        "content-type": "application/json",
	    },
	    body: JSON.stringify(carList)
	}, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        console.log(body);
	    }
	});

  // console.log(`总共${carList.length}辆汽车数据: `, JSON.stringify(carList, undefined, 2));

  // 将车辆信息写入文件
  // writerStream = fs.createWriteStream('D:/car_info_list.json');
  // writerStream.write(JSON.stringify(carList, undefined, 2), 'UTF8');
  // writerStream.end();

  browser.close();
})();