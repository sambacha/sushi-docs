"use strict";(self.webpackChunksushi_docs=self.webpackChunksushi_docs||[]).push([[5552],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=i,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},88349:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],s={sidebar_position:5},c="Limit Order SDK",l={unversionedId:"Developers/Packages/Limit Order SDK",id:"Developers/Packages/Limit Order SDK",title:"Limit Order SDK",description:"The Limit Order SDK is an exciting one - it not only contains all of the constants, types and enums needed for interacting with the limit order function of SushiSwap, but it also contains the code for the limit orders themselves!",source:"@site/docs/Developers/Packages/Limit Order SDK.md",sourceDirName:"Developers/Packages",slug:"/Developers/Packages/Limit Order SDK",permalink:"/docs/Developers/Packages/Limit Order SDK",draft:!1,editUrl:"https://github.com/sushiswap/sushi-docs/edit/master/docs/Developers/Packages/Limit Order SDK.md",tags:[],version:"current",lastUpdatedBy:"Genghis Goose",lastUpdatedAt:1656183667,formattedLastUpdatedAt:"6/25/2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Kashi SDK",permalink:"/docs/Developers/Packages/Kashi SDK"},next:{title:"MISO SDK",permalink:"/docs/Developers/Packages/MISO SDK"}},d={},u=[{value:"Creating a Limit Order",id:"creating-a-limit-order",level:4}],p={toc:u};function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"limit-order-sdk"},"Limit Order SDK"),(0,o.kt)("p",null,"The Limit Order SDK is an exciting one - it not only contains all of the constants, types and enums needed for interacting with the limit order function of SushiSwap, but it also contains the code for the limit orders themselves!"),(0,o.kt)("p",null,"Let's dive into creating a new limit order:"),(0,o.kt)("h4",{id:"creating-a-limit-order"},"Creating a Limit Order"),(0,o.kt)("p",null,"First, we need to import the class from the SDK using ",(0,o.kt)("inlineCode",{parentName:"p"},"import { LimitOrder } from '@sushiswap/limit-order-sdk'")),(0,o.kt)("p",null,"Next, let's create a new Limit Order using some help from the Core SDK as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"let tokenA = new Token(ChainId.MATIC, '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9', 18, 'DAI')\nlet tokenB = new Token(ChainId.MATIC, '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9', 18, 'SUSHI')\n\nconst amountIn = CurrencyAmount.fromRawAmount(tokenA, '9000000000000000000')\nconst amountOut = CurrencyAmount.fromRawAmount(tokenB, '8000000000000000000')\nconst stopPrice = '100000000000000000'\n\nconst limitOrder = new LimitOrder(\n    '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',\n    amountIn,\n    amountOut,\n    '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',\n    '0',\n    '4078384250',\n    stopPrice,\n    '0x0165878A594ca255338adfa4d48449f69242Eb8F',\n    '0x00000000000000000000000000000000000000000000000000000000000000'\n)\n\nconst carol = '0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a'\nconst { v, r, s } = limitOrder.signdOrderWithPrivatekey(ChainId.MATIC, carol)\n")),(0,o.kt)("p",null,"Above, we start by creating two instances of a token with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Token")," entity from the Core SDK. We then create variables to hold some data (arbitrary in this example) that we will need to create a limit order. Once we have all of the pieces together, we can instantiate a new limit order from the ",(0,o.kt)("inlineCode",{parentName:"p"},"LimitOrder")," class in the SDK. Congratulations, you've just created a limit order! From here, we can do whatever we need to do with the order (if anything at all) - above, we showcase how a user named Carol could then sign her limit order (calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"signdOrderWithPrivateKey")," method on ",(0,o.kt)("inlineCode",{parentName:"p"},"LimitOrder"),") and pull out the pieces needed from the signature for verification elsewhere."),(0,o.kt)("h1",{id:"use-it"},"Use it"),(0,o.kt)("p",null,"This is but one of the powerful and helpful things the Limit Order SDK can provide developers. We encourage you to look through the package yourself and leverage it to build your own quality dapps!"),(0,o.kt)("p",null,"The source code can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sushiswap/sdk/tree/canary/packages/limit-order-sdk"},"here"),"."))}m.isMDXComponent=!0}}]);