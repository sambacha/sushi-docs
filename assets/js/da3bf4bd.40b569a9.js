"use strict";(self.webpackChunksushi_docs=self.webpackChunksushi_docs||[]).push([[8023],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=l(a),d=o,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||i;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var l=2;l<i;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},95841:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),r=["components"],c={},s="How to Create a MISO Auction",l={unversionedId:"Tutorials/How to create a Miso auction",id:"Tutorials/How to create a Miso auction",title:"How to Create a MISO Auction",description:"Please note that while the final form of the UI will continue to change, the primary functions, inputs and information can be expected to stay relatively similar. This page will be revised as we adapt our Auction pages.",source:"@site/docs/Tutorials/How to create a Miso auction.md",sourceDirName:"Tutorials",slug:"/Tutorials/How to create a Miso auction",permalink:"/docs/Tutorials/How to create a Miso auction",draft:!1,editUrl:"https://github.com/sushiswap/sushi-docs/edit/master/docs/Tutorials/How to create a Miso auction.md",tags:[],version:"current",lastUpdatedBy:"Genghis Goose",lastUpdatedAt:1656183667,formattedLastUpdatedAt:"6/25/2022",frontMatter:{},sidebar:"docsSidebar",previous:{title:"How to Place a Limit Order",permalink:"/docs/Tutorials/How to Place a Limit Order"},next:{title:"How to Participate in a MISO Auction",permalink:"/docs/Tutorials/How to participate in a Miso auction"}},u={},p=[],h={toc:p};function d(e){var t=e.components,c=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-create-a-miso-auction"},"How to Create a MISO Auction"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Please note that while the final form of the UI will continue to change, the primary functions, inputs and information can be expected to stay relatively similar. This page will be revised as we adapt our Auction pages.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The Auction example used below is for explanatory purposes only. Token price, amount, auction duration, descriptors and the like are not indicative of any real auction.")),(0,i.kt)("p",null,"MISO is currently available on both the Harmony and Ethereum networks. When landing on the MISO home page, you can see all the auctions currently live as well as the finished and upcoming ones. To create an auction, click on ",(0,i.kt)("em",{parentName:"p"},"Create Auction")," in the top right of the page:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(43633).Z,width:"1326",height:"327"})),(0,i.kt)("p",null,"You will then be redirected to the auction creation form where you will first be asked for various details about your token. MISO currently has 3 different token templates, choose the one that matches your needs best and fills 'er out."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(45147).Z,width:"1203",height:"410"})," ",(0,i.kt)("em",{parentName:"p"},"Choose your preferred template")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(45962).Z,width:"1199",height:"530"})," ",(0,i.kt)("em",{parentName:"p"},"Enter the name, symbol, total supply and amount of tokens for sale")),(0,i.kt)("p",null,"In the next step, you will be asked to enter the auction payment currency and the auction dates. The interface proposes $ETH, $DAI, $USDC and $USDT by default, but you can input a custom address of any ERC-20 token as well. Please note that the start date must be greater (later) than the current date."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(31122).Z,width:"1209",height:"475"})," ",(0,i.kt)("em",{parentName:"p"},"Select the payment currency and auction dates")),(0,i.kt)("p",null,"Now, it's time to select the auction type: 3 templates are currently available, with more in the pipeline (soon!). Take your time to understand how each template works, then select the one you want. Afterward, enter the amount you want to raise and the price (start/end depending on the auction type)."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(57381).Z,width:"1200",height:"460"})," ",(0,i.kt)("em",{parentName:"p"},"Choose your fighter")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(62626).Z,width:"1202",height:"311"})," ",(0,i.kt)("em",{parentName:"p"},"Enter the prices and determine the amount to raise")),(0,i.kt)("p",null,"Thanks to Sushi's AMM, MISO allows you to pre-allocate liquidity and lock it for any period of time. This will allow your users to buy and sell your token once the auction has ended."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(45910).Z,width:"1202",height:"548"})," ",(0,i.kt)("em",{parentName:"p"},"Enter the percentage of proceeds to allocate to the initial liquidity")),(0,i.kt)("p",null,"The last and final step is the whitelisting section; indeed, you might want to make a private auction or give a better allocation to some users. This is where you can do that - the MISO interface allows you to upload a simple CSV (address, token amount) as a whitelist!"),(0,i.kt)("p",null,"If you need a more complicated/interactive whitelist, you can leave this empty and create your own whitelist contract that can be added later by editing the auction."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(94729).Z,width:"1203",height:"474"})," ",(0,i.kt)("em",{parentName:"p"},'Toggle on/off "use whitelist"')),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(1113).Z,width:"1196",height:"244"})," ",(0,i.kt)("em",{parentName:"p"},"Example whitelist")),(0,i.kt)("p",null,"Congratulations, your auction is now ready! Click on ",(0,i.kt)("em",{parentName:"p"},"Review")," to validate that all of the information is correct, and once you're sure everything checks out - you can finally create the auction!"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(92075).Z,width:"549",height:"676"})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Review and create the auction")),(0,i.kt)("p",null,"Once the auction has been created, you can find it in the upcoming auction list. You will likely want to give some additional information to users about your project; to do that, on your auction page, click on ",(0,i.kt)("em",{parentName:"p"},"Edit Auction")," in the top right corner of your screen to add a description and links to your project's socials/details."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(73908).Z,width:"1327",height:"735"})),(0,i.kt)("p",null,"On this page you can add a ton of information - it's a good idea to make sure to document your project as much as possible so users will feel confident to participate in your auction!"),(0,i.kt)("p",null,"When done editing, make sure to save the changes at the bottom of the page; since this is an onchain action, you will have to sign a transaction. Once the transaction has gone through, the changes will appear on the auction page for all."))}d.isMDXComponent=!0},43633:function(e,t,a){t.Z=a.p+"assets/images/htcamo1-f0bf7ed97bd43e2be457a3bdca8a05ca.png"},92075:function(e,t,a){t.Z=a.p+"assets/images/htcamo10-4cbaaf052a66c4118cbb3dadd6f4b59a.png"},73908:function(e,t,a){t.Z=a.p+"assets/images/htcamo11-fc47ef00bcd127ad8c9057f816bb0864.png"},45147:function(e,t,a){t.Z=a.p+"assets/images/htcamo2-2f2b9a0431680d1be6c0fde39a070098.png"},45962:function(e,t,a){t.Z=a.p+"assets/images/htcamo3-dd62137d329881f3231a705431b5af6c.png"},31122:function(e,t,a){t.Z=a.p+"assets/images/htcamo4-1e0aaa032c43e8d07b0ab97376282ab7.png"},57381:function(e,t,a){t.Z=a.p+"assets/images/htcamo5-3e4cc17e57e2a8b194acacb3a2d2e445.png"},62626:function(e,t,a){t.Z=a.p+"assets/images/htcamo6-391cc02ebb175a21bdba00a5ae95ce6a.png"},45910:function(e,t,a){t.Z=a.p+"assets/images/htcamo7-6f9c7c7c0447a2054064130526d85058.png"},94729:function(e,t,a){t.Z=a.p+"assets/images/htcamo8-d5d5ba0d8b9075ce14f7d4341f3c82c5.png"},1113:function(e,t,a){t.Z=a.p+"assets/images/htcamo9-5c323ded91fb699afc17071ab8ffef9b.png"}}]);