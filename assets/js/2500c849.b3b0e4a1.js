"use strict";(self.webpackChunksushi_docs=self.webpackChunksushi_docs||[]).push([[7872],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=p(t),d=s,f=h["".concat(u,".").concat(d)]||h[d]||l[d]||a;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function d(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=t.length,i=new Array(a);i[0]=h;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},22803:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l}});var n=t(87462),s=t(63366),a=(t(67294),t(3905)),i=["components"],o={},u="Queries",p={unversionedId:"Developers/Subgraphs/SushiBar/Queries",id:"Developers/Subgraphs/SushiBar/Queries",title:"Queries",description:"This page provides some sample query examples to help get you started with the SushiSwap SushiBar subgraph.",source:"@site/docs/Developers/Subgraphs/SushiBar/Queries.md",sourceDirName:"Developers/Subgraphs/SushiBar",slug:"/Developers/Subgraphs/SushiBar/Queries",permalink:"/docs/Developers/Subgraphs/SushiBar/Queries",draft:!1,editUrl:"https://github.com/sushiswap/sushi-docs/edit/master/docs/Developers/Subgraphs/SushiBar/Queries.md",tags:[],version:"current",lastUpdatedBy:"Genghis Goose",lastUpdatedAt:1656183667,formattedLastUpdatedAt:"6/25/2022",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Entities",permalink:"/docs/Developers/Subgraphs/SushiBar/Entities"},next:{title:"Entities",permalink:"/docs/Developers/Subgraphs/MasterChef/Entities"}},c={},l=[{value:"Bar",id:"bar",level:2},{value:"User",id:"user",level:2}],h={toc:l};function d(e){var r=e.components,t=(0,s.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},h,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"queries"},"Queries"),(0,a.kt)("p",null,"This page provides some sample query examples to help get you started with the SushiSwap SushiBar subgraph."),(0,a.kt)("p",null,"You can test any of the queries, or write your own, on the ",(0,a.kt)("a",{parentName:"p",href:"https://thegraph.com/explorer/subgraph?id=9PNQKCFNijybeAXkfSYrrQQ9gtRhLJB8VgmBSov3RkDQ&view=Overview"},"SushiSwap SushiBar subgraph"),"."),(0,a.kt)("h2",{id:"bar"},"Bar"),(0,a.kt)("p",null,"This query returns the ID (contract address), decimal count and name of the SushiBar, as well as the contract address of SUSHI."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n  bars(first: 5) {\n    id\n    decimals\n    name\n    sushi\n  }\n}\n")),(0,a.kt)("h2",{id:"user"},"User"),(0,a.kt)("p",null,"This query grabs the first 15 users of the SushiBar and returns the user ID (user's address), the SushiBar address, the user's total amount of xSUSHI and how much (if any) xSUSHI they deposited."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n  users(first: 5) {\n    id\n    bar {\n      id\n    }\n    xSushi\n    xSushiIn\n  }\n}\n")))}d.isMDXComponent=!0}}]);