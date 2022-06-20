"use strict";(self.webpackChunksushi_docs=self.webpackChunksushi_docs||[]).push([[7070],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,f=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9406:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={sidebar_position:4},c="Kashi SDK",l={unversionedId:"Developers/Packages/Kashi SDK",id:"Developers/Packages/Kashi SDK",title:"Kashi SDK",description:"The Kashi SDK contains helper functions, entities, interfaces and constants for interacting with Kashi on top of BentoBox. We use the assets in the SDK extensively when interacting with Kashi from our end, and we've designed it for users to just as easily work with Kashi too!",source:"@site/docs/Developers/Packages/Kashi SDK.md",sourceDirName:"Developers/Packages",slug:"/Developers/Packages/Kashi SDK",permalink:"/docs/Developers/Packages/Kashi SDK",editUrl:"https://github.com/sushiswap/sushi-docs/edit/master/docs/Developers/Packages/Kashi SDK.md",tags:[],version:"current",lastUpdatedBy:"Genghis Goose",lastUpdatedAt:1655325470,formattedLastUpdatedAt:"6/15/2022",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"BentoBox SDK",permalink:"/docs/Developers/Packages/BentoBox SDK"},next:{title:"Limit Order SDK",permalink:"/docs/Developers/Packages/Limit Order SDK"}},p={},u=[{value:"Computing a Pair Address",id:"computing-a-pair-address",level:2}],d={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kashi-sdk"},"Kashi SDK"),(0,o.kt)("p",null,"The Kashi SDK contains helper functions, entities, interfaces and constants for interacting with Kashi on top of BentoBox. We use the assets in the SDK extensively when interacting with Kashi from our end, and we've designed it for users to just as easily work with Kashi too!"),(0,o.kt)("h2",{id:"computing-a-pair-address"},"Computing a Pair Address"),(0,o.kt)("p",null,"One of the functions in the Kashi SDK involves computing a pair address from the given collateral and asset using the ",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE2")," opcode, known as ",(0,o.kt)("inlineCode",{parentName:"p"},"computePairAddress()"),"."),(0,o.kt)("p",null,"First, we need to import the function using ",(0,o.kt)("inlineCode",{parentName:"p"},"import { computePairAddress } from '@sushiswap/kashi-sdk'")),(0,o.kt)("p",null,"Next, let's use it to compute a new pair address (using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Token")," entity from the Core SDK):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const collateral = new Token(ChainId.ETHEREUM, WETH9_ADDRESS[ChainId.ETHEREUM], 18, 'WETH', 'Wrapped Ether')\nconst asset = new Token(ChainId.ETHEREUM, USDC_ADDRESS[ChainId.ETHEREUM], 6, 'USDC', 'USD Coin')\n\nconst address = computePairAddress({\n    collateral,\n    asset,\n    oracle: CHAINLINK_ORACLE_ADDRESS[ChainId.ETHEREUM],\n    oracleData:\n        '0x000000000000000000000000986b5e1e1755e3c2440e960477f25201b0a8bbd4000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000d3c21bcecceda1000000',\n    })\n\n    console.log({\n      collateral: collateral.address,\n      asset: asset.address,\n      address,\n    })\n")),(0,o.kt)("p",null,"Above, we are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Token")," entity from the Core SDK to create new instances of an asset and a collateral token. We then pass all the necessary data (including the Chainlink oracle address - also stored in the Core SDK!) to compute the pair address, then logging it out to ensure everything worked correctly. Easy!"),(0,o.kt)("h1",{id:"use-it"},"Use it"),(0,o.kt)("p",null,"These is but one of the many powerful and helpful things the Kashi SDK can provide. We encourage you to look through the package yourself and leverage it to build your own quality dapps!"),(0,o.kt)("p",null,"The source code can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sushiswap/sdk/tree/canary/packages/kashi-sdk"},"here"),"."))}h.isMDXComponent=!0}}]);