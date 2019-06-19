const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch({
		executablePath: 'C:/Users/jht/Downloads/chrome-win/chrome.exe',
		timeout: 15000,  
		ignoreHTTPSErrors: true,
		devtools: false,
		headless:true,
	});
	const page = await browser.newPage();
	await page.goto('https://jr.dayi35.com');
	await page.setViewport({width: 1920, height: 1080});
	const documentSize = await page.evaluate(() => {
		return {
			width: document.documentElement.clientWidth,
			height: document.body.clientHeight,
		}
	});
	await page.screenshot({ path: "data/example.png", clip:{ x:0, y:0, width:1920, height: documentSize.height}});
	await browser.close();
})();