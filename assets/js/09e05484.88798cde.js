"use strict";(self.webpackChunksushi_docs=self.webpackChunksushi_docs||[]).push([[4404],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),d=o,f=c["".concat(l,".").concat(d)]||c[d]||h[d]||s;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8535:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return h}});var n=r(7462),o=r(3366),s=(r(7294),r(3905)),a=["components"],i={},l="Queries",p={unversionedId:"Developers/Subgraphs/MasterChef/Queries",id:"Developers/Subgraphs/MasterChef/Queries",title:"Queries",description:"This page provides some sample query examples to help get you started with the SushiSwap MasterChef subgraph.",source:"@site/docs/Developers/Subgraphs/MasterChef/Queries.md",sourceDirName:"Developers/Subgraphs/MasterChef",slug:"/Developers/Subgraphs/MasterChef/Queries",permalink:"/docs/Developers/Subgraphs/MasterChef/Queries",editUrl:"https://github.com/sushiswap/sushi-docs/edit/master/docs/Developers/Subgraphs/MasterChef/Queries.md",tags:[],version:"current",lastUpdatedBy:"Genghis Goose",lastUpdatedAt:1655325470,formattedLastUpdatedAt:"6/15/2022",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Entities",permalink:"/docs/Developers/Subgraphs/MasterChef/Entities"},next:{title:"Entities",permalink:"/docs/Developers/Subgraphs/BentoBox/Entities"}},u={},h=[{value:"MasterChef",id:"masterchef",level:2},{value:"History",id:"history",level:2},{value:"Pool",id:"pool",level:2},{value:"Pool History",id:"pool-history",level:2}],c={toc:h};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"queries"},"Queries"),(0,s.kt)("p",null,"This page provides some sample query examples to help get you started with the SushiSwap MasterChef subgraph."),(0,s.kt)("p",null,"You can test any of the queries, or write your own, on the ",(0,s.kt)("a",{parentName:"p",href:"https://thegraph.com/hosted-service/subgraph/sushiswap/master-chef"},"SushiSwap MasterChef subgraph"),"."),(0,s.kt)("h2",{id:"masterchef"},"MasterChef"),(0,s.kt)("p",null,"This query gets the first 5 MasterChefs that were deployed and returns their ID, bonus multiplier, end block for the multiplier, and the address of the user who deployed the pool."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"{\n  masterChefs(first: 5) {\n    id\n    bonusMultiplier\n    bonusEndBlock\n    devaddr\n  }\n")),(0,s.kt)("h2",{id:"history"},"History"),(0,s.kt)("p",null,"This query returns the first 100 history instances, with the ID (address of history) and owner ID (deployer address) as well as te SLP balances and age for each."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"{\n  histories(first: 100) {\n    id\n    owner {\n      id\n    }\n    slpBalance\n    slpAge\n  }\n}\n")),(0,s.kt)("h2",{id:"pool"},"Pool"),(0,s.kt)("p",null,"This query gets the first 100 pool instances and returns the ID, allocation point, and users of the pool along with their IDs (user addresses) for each pool."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"{\n  pools(first: 100) {\n    id\n    allocPoint\n    users {\n      id\n    }\n}\n")),(0,s.kt)("h2",{id:"pool-history"},"Pool History"),(0,s.kt)("p",null,"This query returns the pool histories ordered by their SLP balance and returns the history ID (address), the pool's ID and the address of the token pair in the pool, and the block at which the history was created."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"{\n  poolHistories(orderBy: slpBalance) {\n    id\n    pool {\n      id\n      pair\n    }\n    block\n    }\n}\n")))}d.isMDXComponent=!0}}]);