
# Puppeteer实践
	主要应用场景：爬虫、UI自动化测试、页面性能检测

## NPM命令
	1、npm init --yes	初始化目录，执行后当前目录会出现package.json
	2、npm install xxx	安装依赖模块
	3、npm i --save puppeteer --ignore-scripts -g # 全局安装，i=install

## 依赖模块说明
	1、puppeteer：Chrome的无界面版本及对其进行操控的js接口套装
	2、crypto：js加密模块

## 环境搭建说明
### Windows
	1、查看全局环境配置
		> npm config ls   #或者 npm config list
	2、修改全局配置
		npm config set prefix "E:\FRONT\nodejs\node_gobal" 		# 模块安装库
		npm config set cache "E:\FRONT\nodejs\node_cache"		# 缓存
	3、设置环境变量
		环境变量 > 系统变量下添加 NODE_PATH=[系统模块所在路径，如C:\Users\xxx\AppData\Roaming\npm\node_modules]
    4、全局模块安装及卸载
		npm install -g 模块名 	# 如 npm install -g cordova
		npm uninstall -g 模块名	# 如 npm uninstall -g cordova
	5、检查是否安装成功
		在cmd中输入node，进入编辑模式，输入 require('express')，没报错，说明全局设置成功。若报错，请检查环境变量NODE_PATH是否配置正确！
		输入 .exit 退出node环境

## 基础参考地址
	1、Axios使用说明	https://www.kancloud.cn/yunye/axios/234845
	2、ES6之Array.from()使用方法	https://www.cnblogs.com/jf-67/p/8440758.html
	3、asyncjs的API	https://www.npmjs.com/package/asyncjs

## 实践参考地址	
	1、Puppeteer初始入门  http://www.r9it.com/20171106/puppeteer.html
	2、Puppeteer初探之前端自动化测试	https://cloud.tencent.com/developer/article/1006000
	3、Puppeteer-autotest	https://cnodejs.org/topic/5a041412ad77fa2004549183

## 截图效果
![Screenshot](data/example.png)
    