"use strict";(self.webpackChunksushi_docs=self.webpackChunksushi_docs||[]).push([[7774],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),h=p(t),f=i,d=h["".concat(u,".").concat(f)]||h[f]||c[f]||o;return t?n.createElement(d,s(s({ref:r},l),{},{components:t})):n.createElement(d,s({ref:r},l))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=h;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var p=2;p<o;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},9577:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return c}});var n=t(7462),i=t(3366),o=(t(7294),t(3905)),s=["components"],a={},u="Queries",p={unversionedId:"Developers/Subgraphs/MiniChef/Queries",id:"Developers/Subgraphs/MiniChef/Queries",title:"Queries",description:"This page provides some sample query examples to help get you started with the SushiSwap MiniChef subgraph.",source:"@site/docs/Developers/Subgraphs/MiniChef/Queries.md",sourceDirName:"Developers/Subgraphs/MiniChef",slug:"/Developers/Subgraphs/MiniChef/Queries",permalink:"/docs/Developers/Subgraphs/MiniChef/Queries",editUrl:"https://github.com/sushiswap/sushi-docs/edit/master/docs/Developers/Subgraphs/MiniChef/Queries.md",tags:[],version:"current",lastUpdatedBy:"Genghis Goose",lastUpdatedAt:1655325470,formattedLastUpdatedAt:"6/15/2022",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Entities",permalink:"/docs/Developers/Subgraphs/MiniChef/Entities"},next:{title:"Entities",permalink:"/docs/Developers/Subgraphs/Timelock/Entities"}},l={},c=[{value:"MiniChef",id:"minichef",level:2},{value:"Pool",id:"pool",level:2},{value:"Rewarder",id:"rewarder",level:2}],h={toc:c};function f(e){var r=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},h,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"queries"},"Queries"),(0,o.kt)("p",null,"This page provides some sample query examples to help get you started with the SushiSwap MiniChef subgraph."),(0,o.kt)("p",null,"You can test any of the queries, or write your own, on the ",(0,o.kt)("a",{parentName:"p",href:"https://thegraph.com/hosted-service/subgraph/sushiswap/matic-minichef"},"SushiSwap Polygon MiniChef subgraph"),"."),(0,o.kt)("h2",{id:"minichef"},"MiniChef"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{\n  miniChefs(first: 5) {\n    id\n    sushiPerSecond\n    totalAllocPoint\n  }\n}\n")),(0,o.kt)("p",null,"This query grabs the first 5 MiniChefs and returns each of their IDs, their SUSHI per second and the total allocation points."),(0,o.kt)("h2",{id:"pool"},"Pool"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{\n  pools(first: 100) {\n    id\n    pair\n    miniChef {\n      id\n    }\n  }\n}\n")),(0,o.kt)("p",null,"This query grabs the first 100 pools and returns each of their IDs, the token pair associated wiht each, as well as the MiniChef ID of the chefs serving for those pools."),(0,o.kt)("h2",{id:"rewarder"},"Rewarder"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    rewarder(id: "0xa3378ca78633b3b9b2255eaa26748770211163ae") {\n        rewardToken\n        rewardPerSecond\n    }\n  }\n')),(0,o.kt)("p",null,"This query returns the grabs the rewarder with the given ID and returns its reward token and rewards per second."))}f.isMDXComponent=!0}}]);