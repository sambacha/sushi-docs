"use strict";(self.webpackChunksushi_docs=self.webpackChunksushi_docs||[]).push([[36],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return u}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=d(a),u=r,N=s["".concat(o,".").concat(u)]||s[u]||k[u]||l;return a?n.createElement(N,i(i({ref:e},m),{},{components:a})):n.createElement(N,i({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},81136:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return k}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],p={sidebar_position:2},o="TridentRouter",d={unversionedId:"Developers/Trident/TridentRouter",id:"Developers/Trident/TridentRouter",title:"TridentRouter",description:"The TridentRouter contract is a contract that facilitates in the swapping of assets across Trident pools.",source:"@site/docs/Developers/Trident/TridentRouter.md",sourceDirName:"Developers/Trident",slug:"/Developers/Trident/TridentRouter",permalink:"/docs/Developers/Trident/TridentRouter",draft:!1,editUrl:"https://github.com/sushiswap/sushi-docs/edit/master/docs/Developers/Trident/TridentRouter.md",tags:[],version:"current",lastUpdatedBy:"Genghis Goose",lastUpdatedAt:1656183667,formattedLastUpdatedAt:"6/25/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Interfaces",permalink:"/docs/Developers/Sushiswap/Interfaces"},next:{title:"MasterDeployer",permalink:"/docs/Developers/Trident/MasterDeployer"}},m={},k=[{value:"Functions",id:"functions",level:2},{value:"exactInputSingle",id:"exactinputsingle",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"exactInput",id:"exactinput",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"exactInputSingleWithNativeToken",id:"exactinputsinglewithnativetoken",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"exactInputWithNativeToken",id:"exactinputwithnativetoken",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"complexPath",id:"complexpath",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"addLiquidity",id:"addliquidity",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-4",level:4},{value:"burnLiquidity",id:"burnliquidity",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"burnLiquiditySingle",id:"burnliquiditysingle",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"sweep",id:"sweep",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"unwrapWETH",id:"unwrapweth",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"deployPool",id:"deploypool",level:3},{value:"approveMasterContract",id:"approvemastercontract",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"harvest",id:"harvest",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"_depositToBentoBox",id:"_deposittobentobox",level:3},{value:"Parameters",id:"parameters-12",level:4}],s={toc:k};function u(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tridentrouter"},"TridentRouter"),(0,l.kt)("p",null,"The TridentRouter contract is a contract that facilitates in the swapping of assets across Trident pools."),(0,l.kt)("p",null,"The full contract can be found ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/sushiswap/trident/blob/master/contracts/TridentRouter.sol"},"here"),"."),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"exactinputsingle"},"exactInputSingle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function exactInputSingle(ExactInputSingleParams calldata params) public payable returns (uint256 amountOut)\n")),(0,l.kt)("p",null,"Swaps token A to token B directly; swaps are done on ",(0,l.kt)("inlineCode",{parentName:"p"},"bento")," tokens."),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"params")),(0,l.kt)("td",{parentName:"tr",align:"left"},"ExactInputSingleParams"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of token A, pool, amount of token A to swap, minimum amount of token B after the swap and data required by the pool for the swap")))),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amountOut")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount of token B after swap")))),(0,l.kt)("h3",{id:"exactinput"},"exactInput"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function exactInput(ExactInputParams calldata params) public payable returns (uint256 amountOut)\n")),(0,l.kt)("p",null,"Swaps token A to token B indirectly by using multiple hops."),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"params")),(0,l.kt)("td",{parentName:"tr",align:"left"},"ExactInputSingleParams"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of token A, pool, amount of token A to swap, minimum amount of token B after the swap and data required by the pool for the swap")))),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amountOut")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount of token B after swap")))),(0,l.kt)("h3",{id:"exactinputsinglewithnativetoken"},"exactInputSingleWithNativeToken"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function exactInputSingleWithNativeToken(ExactInputSingleParams calldata params) public payable returns (uint256 amountOut)\n")),(0,l.kt)("p",null,"Swaps token A to token B directly; it is the same as ",(0,l.kt)("inlineCode",{parentName:"p"},"exactInputSingle")," except it takes raw ERC-20 tokens from the users and deposits them into ",(0,l.kt)("inlineCode",{parentName:"p"},"bento"),"."),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"params")),(0,l.kt)("td",{parentName:"tr",align:"left"},"ExactInputSingleParams"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of token A, pool, amount of token A to swap, minimum amount of token B after the swap and data required by the pool for the swap")))),(0,l.kt)("h4",{id:"returns-2"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amountOut")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount of token B after swap")))),(0,l.kt)("h3",{id:"exactinputwithnativetoken"},"exactInputWithNativeToken"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function exactInputWithNativeToken(ExactInputParams calldata params) public payable returns (uint256 amountOut)\n")),(0,l.kt)("p",null,"Swaps token a to token B indirectly by using multiple hops; it is the same as ",(0,l.kt)("inlineCode",{parentName:"p"},"exactInput")," except it takes raw ERC-20 tokens from the users and deposits them into ",(0,l.kt)("inlineCode",{parentName:"p"},"bento"),"."),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"params")),(0,l.kt)("td",{parentName:"tr",align:"left"},"ExactInputSingleParams"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of token A, pool, amount of token A to swap, minimum amount of token B after the swap and data required by the pool for the swap")))),(0,l.kt)("h4",{id:"returns-3"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amountOut")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount of token B after swap")))),(0,l.kt)("h3",{id:"complexpath"},"complexPath"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function complexPath(ComplexPathParams calldata params) public payable\n")),(0,l.kt)("p",null,"Swaps multiple input tokens to multiple output tokens using multiple paths, in different percentages."),(0,l.kt)("h4",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"params")),(0,l.kt)("td",{parentName:"tr",align:"left"},"ComplexPathParams"),(0,l.kt)("td",{parentName:"tr",align:"left"},"includes all info needed for the swap (check ",(0,l.kt)("inlineCode",{parentName:"td"},"ComplexPathParams")," struct for more)")))),(0,l.kt)("h3",{id:"addliquidity"},"addLiquidity"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function addLiquidity(\n        TokenInput[] calldata tokenInput,\n        address pool,\n        uint256 minLiquidity,\n        bytes calldata data\n    ) public payable returns (uint256 liquidity)\n")),(0,l.kt)("p",null,"Adds liquidity to a pool."),(0,l.kt)("h4",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"tokenInput")),(0,l.kt)("td",{parentName:"tr",align:"left"},"TokenInput[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"token address and amount to add as liquidity")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pool")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of pool to add liquidity to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"minLiquidity")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"minimum output liquidity (caps slippage)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"data")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"data required by pool to add liquidity")))),(0,l.kt)("h4",{id:"returns-4"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"liquidity")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount of liquidity added to chosen pool")))),(0,l.kt)("h3",{id:"burnliquidity"},"burnLiquidity"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function burnLiquidity(\n        address pool,\n        uint256 liquidity,\n        bytes calldata data,\n        IPool.TokenAmount[] calldata minWithdrawals\n    ) public payable\n")),(0,l.kt)("p",null,"Burns liquidity tokens to get back ",(0,l.kt)("inlineCode",{parentName:"p"},"bento")," tokens."),(0,l.kt)("h4",{id:"parameters-6"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pool")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of pool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"liquidity")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount of liquidity tokens to burn")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"data")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"data required by pool to burn liquidity")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"minWithdrawals")),(0,l.kt)("td",{parentName:"tr",align:"left"},"IPool.TokenAmount[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"minimum amount of ",(0,l.kt)("inlineCode",{parentName:"td"},"bento")," tokens to be returned")))),(0,l.kt)("h3",{id:"burnliquiditysingle"},"burnLiquiditySingle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function burnLiquiditySingle(\n        address pool,\n        uint256 liquidity,\n        bytes calldata data,\n        uint256 minWithdrawal\n    ) public payable\n")),(0,l.kt)("p",null,"Burns liquidity tokens to get back ",(0,l.kt)("inlineCode",{parentName:"p"},"bento")," tokens; the tokens are swapped automatically and the output is in a single token."),(0,l.kt)("h4",{id:"parameters-7"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pool")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of pool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"liquidity")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount of liquidity tokens to burn")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"data")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"data required by pool to burn liquidity")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"minWithdrawals")),(0,l.kt)("td",{parentName:"tr",align:"left"},"IPool.TokenAmount[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"minimum amount of tokens to be returned")))),(0,l.kt)("h3",{id:"sweep"},"sweep"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function sweep(\n        address token,\n        uint256 amount,\n        address recipient,\n        bool fromBento\n    ) external payable\n")),(0,l.kt)("p",null,"Recovers mistakenly sent tokens."),(0,l.kt)("h4",{id:"parameters-8"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"token")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount to recover")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"recipient")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address to return tokens to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"fromBento")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean to convert from ",(0,l.kt)("inlineCode",{parentName:"td"},"bento")," tokens")))),(0,l.kt)("h3",{id:"unwrapweth"},"unwrapWETH"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function unwrapWETH(address recipient) external payable\n")),(0,l.kt)("p",null,"Helper function to unwrap this contract's wETH into ETH."),(0,l.kt)("h4",{id:"parameters-9"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"recipient")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address to send unwrapped ETH to")))),(0,l.kt)("h3",{id:"deploypool"},"deployPool"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function deployPool(address factory, bytes calldata deployData) external payable returns (address)\n")),(0,l.kt)("p",null,"Wrapper function to allow pool deployment to be batched and returns the address of the deployed pool."),(0,l.kt)("h3",{id:"approvemastercontract"},"approveMasterContract"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function approveMasterContract(\n        uint8 v,\n        bytes32 r,\n        bytes32 s\n    ) external payable\n")),(0,l.kt)("h4",{id:"parameters-10"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"v")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"recovery byte of the signature")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"r")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,l.kt)("td",{parentName:"tr",align:"left"},"half of the ECDSA signature pair")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"s")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,l.kt)("td",{parentName:"tr",align:"left"},"half of the ECDSA signature pair")))),(0,l.kt)("p",null,"Wrapper function to allow Bento set master contract approval to be batched, so that the first trade can happen in a single transaction."),(0,l.kt)("h3",{id:"harvest"},"harvest"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function harvest(address token, uint256 maxChangeAmount) external payable\n")),(0,l.kt)("p",null,"Rebalances a BentoBox token strategy and ensures there are enough tokens available to withdraw a swap amount."),(0,l.kt)("h4",{id:"parameters-11"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"token")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"maxChangeAmount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the max change amount")))),(0,l.kt)("h3",{id:"_deposittobentobox"},"_","depositToBentoBox"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function _depositToBentoBox(\n        address token,\n        address recipient,\n        uint256 amount\n    ) internal\n")),(0,l.kt)("p",null,"Internal function used by others than deposits from the user's wallet into BentoBox."),(0,l.kt)("h4",{id:"parameters-12"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"token")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of token to deposit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"recipient")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of recipient")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount to deposit")))))}u.isMDXComponent=!0}}]);