"use strict";(self.webpackChunksushi_docs=self.webpackChunksushi_docs||[]).push([[1046],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return f}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},h=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,p=d["".concat(l,".").concat(f)]||d[f]||c[f]||r;return n?i.createElement(p,a(a({ref:t},h),{},{components:n})):i.createElement(p,a({ref:t},h))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<r;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4543:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),a=["components"],s={},l="BentoBox",u={unversionedId:"Products/Bentobox",id:"Products/Bentobox",title:"BentoBox",description:"What is the BentoBox?",source:"@site/docs/Products/Bentobox.md",sourceDirName:"Products",slug:"/Products/Bentobox",permalink:"/docs/Products/Bentobox",editUrl:"https://github.com/sushiswap/sushi-docs/edit/master/docs/Products/Bentobox.md",tags:[],version:"current",lastUpdatedBy:"sam bacha",lastUpdatedAt:1653283771,formattedLastUpdatedAt:"5/23/2022",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Kashi Lending",permalink:"/docs/Products/Kashi Lending"}},h={},c=[{value:"What is the BentoBox?",id:"what-is-the-bentobox",level:2},{value:"Sushi&#39;s Foundation",id:"sushis-foundation",level:2},{value:"Fractional Reserve",id:"fractional-reserve",level:2},{value:"A Closer Look",id:"a-closer-look",level:2}],d={toc:c};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bentobox"},"BentoBox"),(0,r.kt)("h2",{id:"what-is-the-bentobox"},"What is the BentoBox?"),(0,r.kt)("p",null,"The BentoBox (sometimes referred to as Bento) is a token vault that generates yield for the capital deposited into it. While there are many such yield generating \u201cvaults\u201d in DeFi, the BentoBox is a little different. Bento\u2019s innovation is its ability to track the user\u2019s deposits via artificial balance, which is used to account for their idle funds, while the same funds are simultaneously applied to strategies."),(0,r.kt)("p",null,"The BentoBox creates yield for these funds without incurring any loss. The vault uses low-risk farming strategies, like depositing tokens on Compound for lending yield, or serving up $SUSHI on the SushiBar to earn more $SUSHI. The funds in Bento can also be used in flash loans, which can add more passive value to the user\u2019s underutilized capital. The BentoBox will be the foundation for all of Sushi's financial instruments; therefore, the user can always put their tokens to use while they make moves on Sushi's many different DeFi offerings."),(0,r.kt)("h2",{id:"sushis-foundation"},"Sushi's Foundation"),(0,r.kt)("p",null,"Much like the banking system is the base-layer for financial operations in traditional finance, the BentoBox is the base-layer for all the future financial instruments Sushi intends to offer. Trident, for instance, which is a factory system for producing liquidity pools, will be built on top of Bento, as will Mirin \u2014 a system for whitelisted users where they can interact with each other in good faith and fair dealings. Because they are all built on the BentoBox, pending orders and idle capital that are using these instruments will be eligible to be applied to strategies and flash loans, which generates more yield for the user."),(0,r.kt)("p",null,"Kashi, which is Sushi\u2019s permissionless lending protocol that isolates risk to individual markets, is already built on top of the Bentobox, and in fact, Kashi could not be built without it. Bento is ideal as an infrastructure because its scalar design actually incentivizes cooperation rather than competition. Anyone can build on top of Bento, and with every new project, new channels for composability are formed, and the costliness of the overall network decreases. Bento continues to become more and more capital efficient, as each approval is inherited by the system, making individual transactions within Bento cheaper."),(0,r.kt)("h2",{id:"fractional-reserve"},"Fractional Reserve"),(0,r.kt)("p",null,"In a sense, Bento is like the fractional reserve system. It enables users to record an artificial balance for their tokens while they're in reserve, so they can be actionable in more than one way at the same time. A fractional reserve is the amount of cash banks and other financial institutions have on hand relative to their full purchasing power. If an institution is granted the permission, it can lend and borrow more than they have, and earn yield by taking calculated risks with their borrowed capital."),(0,r.kt)("p",null,"Like the fractional reserve system, the BentoBox retains a reserve of capital that can be used for different purposes simultaneously, without incurring losses to the principle. Both the BentoBox and fractional reserve banking operate on the assumption that individual positions can mutually benefit from shared liquidity, because a bank run is unlikely on a large scale. This leads to higher overall capital efficiency, which is generally the goal of financial instruments. For instance, if you were to create a limit order on SushiSwap on Polygon, the capital used to make your limit order would be utilized by the BentoBox to earn yield while you wait for your order to be filled."),(0,r.kt)("h2",{id:"a-closer-look"},"A Closer Look"),(0,r.kt)("p",null,'One of the things that makes people excited about DeFi, is that it allows users to benefit with the same level of earnings as banks themselves. We are often reminded that central banks are allowed to lend their cash on hand as many times over. In the US, depending on an institution\u2019s holdings, the amount they can leverage is higher or lower. So, if an institution has very large holdings, they can leverage more proportionally to the amount than what they have in reserve. This means that for institutions with greater reserves, essentially the value of a single dollar is greater than for institutions with less in reserve. Similarly for our users, after the completion of Trident, the value of a single dollar is greater in the BentoBox than in any other Automated Market Maker (or AMM, for short). Unlike in the traditional banking system, however, the benefit of this capital efficiency is distributed to the users, i.e. the depositors, and not the banks themselves. This is what people are referring to when they say DeFi "disintermediates" traditional finance.'))}f.isMDXComponent=!0}}]);