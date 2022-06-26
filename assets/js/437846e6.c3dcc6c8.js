"use strict";(self.webpackChunksushi_docs=self.webpackChunksushi_docs||[]).push([[8895],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return f}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=p(a),f=r,u=k["".concat(d,".").concat(f)]||k[f]||s[f]||l;return a?n.createElement(u,i(i({ref:e},m),{},{components:a})):n.createElement(u,i({ref:e},m))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},79999:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={sidebar_position:3},d="FuroVesting",p={unversionedId:"Developers/Furo/FuroVesting",id:"Developers/Furo/FuroVesting",title:"FuroVesting",description:"FuroVesting is the contract for vesting tokens.",source:"@site/docs/Developers/Furo/FuroVesting.md",sourceDirName:"Developers/Furo",slug:"/Developers/Furo/FuroVesting",permalink:"/docs/Developers/Furo/FuroVesting",draft:!1,editUrl:"https://github.com/sushiswap/sushi-docs/edit/master/docs/Developers/Furo/FuroVesting.md",tags:[],version:"current",lastUpdatedBy:"Genghis Goose",lastUpdatedAt:1656183667,formattedLastUpdatedAt:"6/25/2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"FuroStream",permalink:"/docs/Developers/Furo/FuroStream"},next:{title:"Interfaces",permalink:"/docs/Developers/Furo/Interfaces"}},m={},s=[{value:"Functions",id:"functions",level:2},{value:"createVesting",id:"createvesting",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"withdraw",id:"withdraw",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"stopVesting",id:"stopvesting",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"vestBalance",id:"vestbalance",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"_balanceOf",id:"_balanceof",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-1",level:4},{value:"updateOwner",id:"updateowner",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"_depositToken",id:"_deposittoken",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-2",level:4},{value:"_transferToken",id:"_transfertoken",level:3},{value:"Parameters",id:"parameters-7",level:4}],k={toc:s};function f(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"furovesting"},"FuroVesting"),(0,l.kt)("p",null,"FuroVesting is the contract for vesting tokens."),(0,l.kt)("p",null,"The full contract can be found ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/sushiswap/furo/blob/master/contracts/base/FuroVesting.sol"},"here"),"."),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"createvesting"},"createVesting"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function createVesting(\n        IERC20 token,\n        address recipient,\n        uint32 start,\n        uint32 cliffDuration,\n        uint32 stepDuration,\n        uint32 steps,\n        uint128 cliffAmount,\n        uint128 stepAmount,\n        bool fromBentoBox\n    )\n        external\n        payable\n        override\n        returns (uint256 depositedShares, uint256 vestId)\n")),(0,l.kt)("p",null,"Creates a vesting schedule for the token stream."),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"token")),(0,l.kt)("td",{parentName:"tr",align:"left"},"IERC20"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the token to vest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"recipient")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of recipient")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"start")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint32"),(0,l.kt)("td",{parentName:"tr",align:"left"},"when vesting starts")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"cliffDuration")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint32"),(0,l.kt)("td",{parentName:"tr",align:"left"},"length of vesting cliff")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"stepDuration")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint32"),(0,l.kt)("td",{parentName:"tr",align:"left"},"length of steps")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"steps")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint32"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount of steps")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"cliffAmount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount to set for cliff")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"stepAmount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount to set for each step")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"fromBentoBox")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean for if coming from BentoBox or not")))),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"depositedShares")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount of shares deposited")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"vestId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"new vesting ID")))),(0,l.kt)("h3",{id:"withdraw"},"withdraw"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," function withdraw(\n        uint256 vestId,\n        bytes calldata taskData,\n        bool toBentoBox\n    ) external override\n")),(0,l.kt)("p",null,"Withdraws from the vesting."),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"vestId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the ID of the vestment to withdraw from")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"taskData")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"data tasks")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"toBentoBox")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean for if coming from BentoBox or not")))),(0,l.kt)("h3",{id:"stopvesting"},"stopVesting"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function stopVesting(uint256 vestId, bool toBentoBox) external override\n")),(0,l.kt)("p",null,"Stops a vesting."),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"vestId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"vesting ID to stop")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"toBentoBox")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean for if coming from BentoBox or not")))),(0,l.kt)("h3",{id:"vestbalance"},"vestBalance"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function vestBalance(uint256 vestId)\n        external\n        view\n        override\n        returns (uint256)\n")),(0,l.kt)("p",null,"View function that returns the current balance of the vesting."),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"vestId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"vesting ID to check balance of")))),(0,l.kt)("h3",{id:"_balanceof"},"_","balanceOf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function _balanceOf(Vest memory vest)\n        internal\n        view\n        returns (uint256 claimable)\n")),(0,l.kt)("p",null,"Internal function that returns the amount of claimable tokens from a vesting, given the specific vestment object."),(0,l.kt)("h4",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"vest")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Vest"),(0,l.kt)("td",{parentName:"tr",align:"left"},"vesting object to check balance of")))),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"claimable")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount of claimable tokens from vesting")))),(0,l.kt)("h3",{id:"updateowner"},"updateOwner"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function updateOwner(uint256 vestId, address newOwner) external override\n")),(0,l.kt)("p",null,"Sets the new owner of a vesting. Must be current owner to set."),(0,l.kt)("h4",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"vestId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"vesting ID to change owner of")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"newOwner")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of new owner to set")))),(0,l.kt)("h3",{id:"_deposittoken"},"_","depositToken"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function _depositToken(\n        address token,\n        address from,\n        address to,\n        uint256 amount,\n        bool fromBentoBox\n    ) internal returns (uint256 depositedShares)\n")),(0,l.kt)("p",null,"Internal function that deposits a token into a stream."),(0,l.kt)("h4",{id:"parameters-6"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"token")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of token to deposit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"from")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of user depositing tokens")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"to")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of token recipient")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount of tokens to deposit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"fromBentoBox")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean of whether update is coming from BentoBox or not")))),(0,l.kt)("h4",{id:"returns-2"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"depositedShares")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount of shares deposited in stream")))),(0,l.kt)("h3",{id:"_transfertoken"},"_","transferToken"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function _transferToken(\n        address token,\n        address from,\n        address to,\n        uint256 amount,\n        bool toBentoBox\n    ) internal\n")),(0,l.kt)("p",null,"Internal function used by others in the contract, it safely transfers tokens."),(0,l.kt)("h4",{id:"parameters-7"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"token")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of token to send")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"from")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of user sending the tokens")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"to")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of token recipient")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount of tokens to send")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"toBentoBox")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean of whether the transfer is going to BentoBox or not")))))}f.isMDXComponent=!0}}]);