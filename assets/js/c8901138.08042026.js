"use strict";(self.webpackChunksushi_docs=self.webpackChunksushi_docs||[]).push([[9050],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return p}});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=i.createContext({}),h=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=h(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=n(e,["components","mdxType","originalType","parentName"]),u=h(r),p=a,m=u["".concat(l,".").concat(p)]||u[p]||c[p]||o;return r?i.createElement(m,s(s({ref:t},d),{},{components:r})):i.createElement(m,s({ref:t},d))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n.mdxType="string"==typeof e?e:a,s[1]=n;for(var h=2;h<o;h++)s[h]=r[h];return i.createElement.apply(null,s)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6519:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return n},metadata:function(){return h},toc:function(){return c}});var i=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],n={},l="Limit Order V2",h={unversionedId:"Products/Limit Order V2",id:"Products/Limit Order V2",title:"Limit Order V2",description:"Limit Order V1 \u2192 Limit Order V2",source:"@site/docs/Products/Limit Order V2.md",sourceDirName:"Products",slug:"/Products/Limit Order V2",permalink:"/docs/Products/Limit Order V2",editUrl:"https://github.com/sushiswap/sushi-docs/edit/master/docs/Products/Limit Order V2.md",tags:[],version:"current",lastUpdatedBy:"Genghis Goose",lastUpdatedAt:1655325470,formattedLastUpdatedAt:"6/15/2022",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Kashi Lending",permalink:"/docs/Products/Kashi Lending"},next:{title:"MasterChef V2",permalink:"/docs/Products/Masterchef V2"}},d={},c=[{value:"Limit Order V1 \u2192 Limit Order V2",id:"limit-order-v1--limit-order-v2",level:2},{value:"What is a limit order?",id:"what-is-a-limit-order",level:3},{value:"How do Sushi&#39;s decentralized limit orders improve on centralized limit orders?",id:"how-do-sushis-decentralized-limit-orders-improve-on-centralized-limit-orders",level:3},{value:"What about the gas fees, slippage and price impact?",id:"what-about-the-gas-fees-slippage-and-price-impact",level:3},{value:"How does limit order V2 work under the hood?",id:"how-does-limit-order-v2-work-under-the-hood",level:2},{value:"Filler Bots",id:"filler-bots",level:3},{value:"Public Key Cryptography",id:"public-key-cryptography",level:3}],u={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"limit-order-v2"},"Limit Order V2"),(0,o.kt)("h2",{id:"limit-order-v1--limit-order-v2"},"Limit Order V1 \u2192 Limit Order V2"),(0,o.kt)("p",null,"SushiSwap decided to upgrade the system with Limit Order v2. Limit Order v2 improves on legacy limit order functionality by increasing capital efficiency, reducing the need for trust, and enhancing the overall effectiveness of the limit order function. Most users have experience placing limit orders on centralized exchanges such as Binance and Kraken, or on traditional finance exchanges like Forex and Robinhood. When a limit order is placed on a centralized platform, such agencies determine how they would like to fill the limit orders by themselves, and to a degree, users have to trust them to do it in good faith. Sushi\u2019s limit order function is decentralized and trustless, which means there isn\u2019t necessarily a specific agency filling limit orders, but rather many different and autonomous entities, all following the parameters set by the users."),(0,o.kt)("h3",{id:"what-is-a-limit-order"},"What is a limit order?"),(0,o.kt)("p",null,"A limit order is a request to buy or sell an asset at a predetermined price. As distinct from a market order, which executes immediately after an order is placed, a limit order will not execute unless the asset reaches the price set by the user. If the asset reaches this price, the order may be partially or completely filled, depending on market conditions. Limit orders are used to anticipate future price action, so they usually have an expiration that can be adjusted by the user. The user can set the expiration so that the order will either expire or be filled in the specific amount of time they expect the price to reach the limit. It is also possible to place orders with no expiration, and simply cancel them as needed."),(0,o.kt)("h3",{id:"how-do-sushis-decentralized-limit-orders-improve-on-centralized-limit-orders"},"How do Sushi's decentralized limit orders improve on centralized limit orders?"),(0,o.kt)("p",null,"In short, SushiSwap\u2019s limit order function offers more robust and impartial limit orders than traditional finance, as well as centralized blockchain agencies like Binance or Kraken. There are ",(0,o.kt)("em",{parentName:"p"},"three")," big ways that SushiSwap\u2019s limit orders improve on legacy versions:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Capital Efficiency:")," On legacy exchanges, users are not typically allowed to set many limit orders with the same capital. Legacy institutions have to collateralize these orders, so allowing users to set many limit orders with the same capital would be too risky for them. While using SushiSwap\u2019s limit order feature, the user can place many different limit orders for many different tokens, all using the same underlying capital. The providers for decentralized limit orders like Sushi\u2019s don\u2019t have to take any risk, because every order that fills generates profit for the filler bots. This means that the user can more efficiently use their funds to predict swings and earn from the volatility of the market."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Impartial Counterparty:")," In crypto markets, it often happens that suddenly a vast percentage of liquidity on exchanges is selling rather than buying, or buying rather than selling. This level of volatility is what makes crypto unique, but it can also make it difficult to find a counterparty at the most opportune moments. The counterparty for Sushi\u2019s limit orders is a constant product market maker, which makes orders more likely to go through during single-sided selling events. With Sushi\u2019s limit order model, if there is liquidity available on SushiSwap, or on another decentralized AMM, the filler bots can execute the limit order in question for a profit, so there will always be an opportunity to buy and sell."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Yield Bearing:")," Since Sushi\u2019s limit orders are stored in the BentoBox, the orders are actually yield bearing. The BentoBox is a token vault that provides extra yield on deposits with flash lending, strategies, and fixed, low-gas transfers among integrated dapps, like Kashi markets. When you create a limit order, the capital used is stored in the BentoBox, so these funds are eligible for added yield."),(0,o.kt)("h3",{id:"what-about-the-gas-fees-slippage-and-price-impact"},"What about the gas fees, slippage and price impact?"),(0,o.kt)("p",null,"If you\u2019ve used an AMM before, you probably know that gas fees, slippage and price impact are the biggest costs of transacting. Fortunately, limit orders on SushiSwap take some of the guesswork out of hedging these costs by packaging them into the limit order itself."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Gas:")," From the user\u2019s perspective, the swapping operation will appear to be gasless, because filler bots pay the user\u2019s gas fee on their behalf, and the filler bots will only fill the order if the price including gas and fees is less than the limit order created by the user. Instead, there is a gasless signing operation via Metamask, or your preferred digital wallet. When the user signs the transaction, they agree to send their order to the filler bots to fill; the user can also cancel the transaction at any time, if they wish."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Slippage and price impact:")," If the user sets a limit order to buy a token at a certain price, they are setting the price with all the fees included. This means that if a user signs a transaction to sell XYZ token for X price, then the filler bots will fill that order only if the price plus slippage and fees is less than the price specified by the user. If buying the token affects the price to such a degree that it moves past the limit set by the user, then the filler bot may only fill the order partially.\u200c"),(0,o.kt)("h2",{id:"how-does-limit-order-v2-work-under-the-hood"},"How does limit order V2 work under the hood?"),(0,o.kt)("h3",{id:"filler-bots"},"Filler Bots"),(0,o.kt)("p",null,"When the user creates a limit order for a purchase or a sale on SushiSwap, the order is sent to an AWS server, which is connected to a Websocket. The Websocket distributes the order to filler bots, which are programmed entities capable of \u201clistening\u201d for events and responding via the Websocket URL. Websocket is a unidirectional communication channel that allows the AWS server to communicate with autonomous filler bots. Filler bots can be operated by anyone with the technical expertise to listen for limit orders via the Websocket URL, and if they connect to the URL, they will be able to fill any limit order set by the users on SushiSwap. The filler bots themselves are entities that either use the limit order SDK created by SushiSwap, or develop their own software that routes purchases and calculates gas fees. These bots have complete autonomy to fill the orders as they wish, as long as the order meets the specifications set by the limit order. The unidirectional communication of Websocket allows for the filler bots to communicate simultaneously with the web server as the web server communicates back, which allows for both channels to be aware of buying and selling orders having been filled, and lowers overhead accounting."),(0,o.kt)("h3",{id:"public-key-cryptography"},"Public Key Cryptography"),(0,o.kt)("p",null,"Filler bots are incentivized to listen for events and fill orders because they earn profit whenever they fill an order. These filler bots have wallet addresses with private keys and public keys, just like the user and SushiSwap. In order to execute the swap itself, the filler bots call the smart contract for the pair requested by the user only if/when the price reaches the value set in the limit order. The smart contract will then fill the order by sending funds to the user's wallet, and in the process it sends the limit order fee to the filler bot as profit. This exchange of funds is essentially an exchange of balances that is communicated via an encryption. The magic of public key cryptography allows for these messages between the users\u2019 wallets, the filler bot's wallet, and SushiSwap's smart contracts to pass securely, as the private keys of these entities are obscured by cryptographic algorithms that can only be solved in one direction. The messages passed between them can only fill the order to the parameters initialized by the user, since decrypting them requires having access to a private key, which is only visible to the entity who initialized the order (the user)."))}p.isMDXComponent=!0}}]);