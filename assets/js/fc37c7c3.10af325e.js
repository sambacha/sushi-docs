"use strict";(self.webpackChunksushi_docs=self.webpackChunksushi_docs||[]).push([[8466],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(n),p=o,m=h["".concat(d,".").concat(p)]||h[p]||u[p]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5978:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},d="Trident AMM Framework",l={unversionedId:"Products/Trident AMM Framework",id:"Products/Trident AMM Framework",title:"Trident AMM Framework",description:"We\u2019re used to the idea of exchanges releasing new automated market makers (AMMs) with each new version (e.g. Uni v3 or Curve v2). They\u2019re usually hard-coded pools (AMMs) into an interface where users can swap/add liquidity. Instead of yet another AMM, Trident is going to be a new standard that any other AMM can build on top of, and can synergize with. While Trident has the ability to create functionality for users to make swaps and add/remove liquidity, it is much more than just a hard-coded swap environment (AMM).",source:"@site/docs/Products/Trident AMM Framework.md",sourceDirName:"Products",slug:"/Products/Trident AMM Framework",permalink:"/docs/Products/Trident AMM Framework",editUrl:"https://github.com/sushiswap/sushi-docs/edit/master/docs/Products/Trident AMM Framework.md",tags:[],version:"current",lastUpdatedBy:"Genghis Goose",lastUpdatedAt:1655325470,formattedLastUpdatedAt:"6/15/2022",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Liquidity Pools",permalink:"/docs/Products/Sushiswap/Liquidity Pools"},next:{title:"The SushiBar",permalink:"/docs/Products/Yield Farming/The SushiBar"}},c={},u=[{value:"Trident is a Framework",id:"trident-is-a-framework",level:3},{value:"An AMM Production Framework",id:"an-amm-production-framework",level:3},{value:"Programming to an Interface",id:"programming-to-an-interface",level:3},{value:"The Trident Pipeline",id:"the-trident-pipeline",level:3}],h={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"trident-amm-framework"},"Trident AMM Framework"),(0,a.kt)("p",null,"We\u2019re used to the idea of exchanges releasing new automated market makers (AMMs) with each new version (e.g. Uni v3 or Curve v2). They\u2019re usually hard-coded pools (AMMs) into an interface where users can swap/add liquidity. Instead of yet another AMM, Trident is going to be a new standard that any other AMM can build on top of, and can synergize with. While Trident has the ability to create functionality for users to make swaps and add/remove liquidity, it is much more than just a hard-coded swap environment (AMM)."),(0,a.kt)("h3",{id:"trident-is-a-framework"},"Trident is a Framework"),(0,a.kt)("p",null,"In the recent past, it has been customary for exchanges to release a new automated market maker with each new version. Uniswap v3 and Curve v2, for instance, hard-coded pool types (AMMs) into an interface that users can employ to swap or add liquidity. This custom has likely created the misconception that Trident is also an AMM, or a collection of AMMs. While Trident has the ability to host AMMs that allow users to make swaps and add/remove liquidity, it is not itself a specific AMM. As we continue to roll Trident out across more chains, it is imperative to clarify what Trident actually is."),(0,a.kt)("h3",{id:"an-amm-production-framework"},"An AMM Production Framework"),(0,a.kt)("p",null,"Trident is a production framework for building and deploying AMMs, but it is not just an AMM itself. While AMMs can be created using the Trident code, there isn\u2019t a specific AMM at the heart of Trident; instead, there is a framework for creating ",(0,a.kt)("em",{parentName:"p"},"any")," AMM anyone would ever need. The concept behind this framework is that hard-coded swap environments (like those found in Uniswap, Curve and Balancer) all necessitate the same underlying methods, and can therefore, be consolidated into a single interface. By consolidating them into an interface, the development process can occur more rapidly at a community level. For all intents and purposes, this interface, which we are calling the ",(0,a.kt)("em",{parentName:"p"},"IPool")," interface, is also a discovery in the nature of liquidity at the point of execution. There are only so many things you need to do with a pool design, so pool designs will invariably follow the same patterns."),(0,a.kt)("h3",{id:"programming-to-an-interface"},"Programming to an Interface"),(0,a.kt)("p",null,"The aforementioned methods (swap, flashSwap, mint, burn, etc.) are collected in the IPool interface, which is extended in every Trident pool contract. In that sense, IPool is at the crux of the Trident production framework. The value of this framework is that it helps to streamline development. Pool types have reached a point of complete saturation in the Ethereum development environment and beyond, and they would all benefit from consolidation into an interface that allows developers to make advancements rapidly and collectively. Much like the ERC-20 token standard was needed for token types to become efficient, the IPool standard is needed to make pool types more efficient. Any new innovative, inventive, blistering edge pool type can be built using IPool \u2014 a pool for trading decentralized options, a pool for infinitely many stablecoins, a pool for zero coupon bonds, to name but a few; the possibilities are endless!"),(0,a.kt)("p",null,"The framework design pattern used by Trident is known as interface-based programming, which inherently comes with additional advantages in the context of Sushi\u2019s future growth:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Any future AMM that might be competitive in DeFi can be integrated into Trident"),(0,a.kt)("li",{parentName:"ul"},"Dynamic liquidity types can be created and added using the existing framwork, without requiring a new framework to be created and deployed from scratch"),(0,a.kt)("li",{parentName:"ul"},"Counterproductive game theoretics can be prevented in advance by projects preparing their liquidity to go to market - that is, you can prepare pool types to fit your own strategies"),(0,a.kt)("li",{parentName:"ul"},"External developers can engineer high volume pools, and earn from the fees")),(0,a.kt)("h3",{id:"the-trident-pipeline"},"The Trident Pipeline"),(0,a.kt)("p",null,"In addition to the Constant Product Pool that\u2019s currently for preview on Polygon right now, the team has three additional pool types in the pipeline currently: Concentrated, Stable and Index pools. These pools are akin to a starter set for the DAO to prove what is possible using IPool, and will be released in the order that the audits (and available resources) make them available. Because Trident is a framework, if the team decides to add a new pool type themselves, they can do this much more easily, without having to re-deploy a new codebase with each new pool. When new pools are whitelisted and deployed on Trident, they continue to exist within the Trident framework, which means they collect fees for xSUSHI holders. On top of all that, ",(0,a.kt)("em",{parentName:"p"},"any")," outside developer can use Trident to create custom AMMs by extending the IPool interface in their pool contracts, and launch them in the Trident framework. Any pool type that passes an audit and an internal review is eligible to be whitelisted and deployed on Trident."))}p.isMDXComponent=!0}}]);