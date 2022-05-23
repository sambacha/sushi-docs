"use strict";(self.webpackChunksushi_docs=self.webpackChunksushi_docs||[]).push([[2789],{3905:function(e,t,r){r.d(t,{Zo:function(){return h},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,p=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(p,i(i({ref:t},h),{},{components:r})):n.createElement(p,i({ref:t},h))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8605:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={},c="MasterChef V2",l={unversionedId:"Products/Masterchef V2",id:"Products/Masterchef V2",title:"MasterChef V2",description:"MasterChef V1 \u27f6 MasterChef V2",source:"@site/docs/Products/Masterchef V2.md",sourceDirName:"Products",slug:"/Products/Masterchef V2",permalink:"/docs/Products/Masterchef V2",editUrl:"https://github.com/sushiswap/sushi-docs/edit/master/docs/Products/Masterchef V2.md",tags:[],version:"current",lastUpdatedBy:"sam bacha",lastUpdatedAt:1653283771,formattedLastUpdatedAt:"5/23/2022",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Limit Order V2",permalink:"/docs/Products/Limit Order V2"},next:{title:"Ingredients",permalink:"/docs/Products/Miso/Ingredients"}},h={},d=[{value:"MasterChef V1 \u27f6 MasterChef V2",id:"masterchef-v1--masterchef-v2",level:2},{value:"Cheaper Gas",id:"cheaper-gas",level:3},{value:"Double Rewards",id:"double-rewards",level:3},{value:"Claiming On-Demand",id:"claiming-on-demand",level:3}],u={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"masterchef-v2"},"MasterChef V2"),(0,o.kt)("h2",{id:"masterchef-v1--masterchef-v2"},"MasterChef V1 \u27f6 MasterChef V2"),(0,o.kt)("p",null,"As you may know, SushiSwap's MasterChef V1 was originally designed to give incentives to users for providing liquidity on SushiSwap. This version of MasterChef actually works fairly well, containing roughly 1.3 billion dollars in it at the time of writing. The allocation distribution in MasterChef V1 is quite precise and dependable; it enables the SushiOps wallet to give allocations to different liquidity pools, which in turn represent the amount of SUSHI this liquidity pool will receive in relation to the total liquidity in MasterChef. The distribution is also quite manageable; the pools to be rewarded are cyclically reassessed by the DAO and the core team, and a new rewards distribution is created for the liquidity pairs that have garnered confidence and positive sentiment. All that being said, after taking feedback from users and the DAO, Sushi has determined there are a few ways that this contract can be improved, and has endeavored to make those improvements in MasterChef V2."),(0,o.kt)("h3",{id:"cheaper-gas"},"Cheaper Gas"),(0,o.kt)("p",null,"In the past when users interacted with the MasterChef V1 contract, three functions were called, each of which used a single storage slot. Storage slots on Ethereum are quite expensive, so the cost of gas for using MasterChef V1 was somewhat high. Reducing the cost of contract interactions is quite important since lower gas fees enable users to interact more often, and of course save money. Hence, in MasterChef V2, these units of storage have been optimized and the total number of storage slots has been reduced from three to one. Transactions on MasterChef V2 are much cheaper now than in MasterChef V1, especially when withdrawing and depositing SLP tokens."),(0,o.kt)("h3",{id:"double-rewards"},"Double Rewards"),(0,o.kt)("p",null,"The second improvement of the MasterChef contract has to do with allowing other projects to add incentives from their own treasuries on top of the $SUSHI rewards. In the original version of MasterChef, adding incentives from another project was technically difficult, and not necessarily intuitive for other projects. In this sense, giving developers more tools to add their own rewards was clearly advantageous, as higher rewards promise increased liquidity, which would in turn lower slippage, and increase the overall profitability of the network. Thus, in MasterChef V2, the rewards contract can be used to easily add in rewards from other projects. These rewards can either be configured as a multiple of the $SUSHI rewards, or they can be configured to another standard, such as block hash and block timestamp. Projects who would like to add their own incentives will need to be whitelisted to guarantee that our contracts are used correctly. We\u2019ll have more specific guidance on the application process very soon, as well as a high-level overview to help developers implement double rewards."),(0,o.kt)("h3",{id:"claiming-on-demand"},"Claiming On-Demand"),(0,o.kt)("p",null,"The final major improvement has to do with the way users claim rewards. In the original MasterChef contract, whenever you would deposit a token into into it, the $SUSHI you accumulated beforehand would automatically be sent out to you. Since ERC-20 transfers are expensive, this is not necessarily behavior that the user wants, especially if the user is just depositing LP tokens. Therefore, in MasterChef V2, the user can choose when and how to harvest their rewards. The contract does not automatically harvest their $SUSHI rewards when the user deposits SLP tokens, and the user is able to harvest their rewards independent of withdrawing. In combination with the improvement of gas efficiency, users may now choose to claim more often, and they can always do it when they choose!"))}f.isMDXComponent=!0}}]);