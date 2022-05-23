"use strict";(self.webpackChunksushi_docs=self.webpackChunksushi_docs||[]).push([[7],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||l;return a?r.createElement(k,o(o({ref:t},c),{},{components:a})):r.createElement(k,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5310:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return s}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),o=["components"],i={sidebar_position:4},p="PeggedOracleV1",d={unversionedId:"Developers/Bentobox/PeggedOracleV1",id:"Developers/Bentobox/PeggedOracleV1",title:"PeggedOracleV1",description:"This is the contract for the oracle used for pegged prices that don't change.",source:"@site/docs/Developers/Bentobox/PeggedOracleV1.md",sourceDirName:"Developers/Bentobox",slug:"/Developers/Bentobox/PeggedOracleV1",permalink:"/docs/Developers/Bentobox/PeggedOracleV1",editUrl:"https://github.com/sushiswap/sushi-docs/edit/master/docs/Developers/Bentobox/PeggedOracleV1.md",tags:[],version:"current",lastUpdatedBy:"sam bacha",lastUpdatedAt:1653283771,formattedLastUpdatedAt:"5/23/2022",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"KashiPairMediumRiskV2",permalink:"/docs/Developers/Bentobox/KashiPairMediumRiskV1"},next:{title:"MasterContractManager",permalink:"/docs/Developers/Bentobox/MasterContractManager"}},c={},s=[{value:"Functions",id:"functions",level:2},{value:"getDataParameter",id:"getdataparameter",level:3},{value:"Parameters",id:"parameters",level:4},{value:"get",id:"get",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"peek",id:"peek",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"peekSpot",id:"peekspot",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns",level:4}],u={toc:s};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"peggedoraclev1"},"PeggedOracleV1"),(0,l.kt)("p",null,"This is the contract for the oracle used for pegged prices that ",(0,l.kt)("em",{parentName:"p"},"don't change.")),(0,l.kt)("p",null,"You can find the full contract ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/sushiswap/sushiswap/blob/canary/contracts/bentobox/PeggedOracleV1.sol"},"here"),"."),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"getdataparameter"},"getDataParameter"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function getDataParameter(uint256 rate) public pure returns (bytes memory)\n")),(0,l.kt)("p",null,"Returns the abi-encoded fixed exchange rate."),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"rate")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the fixed exchange rate")))),(0,l.kt)("h3",{id:"get"},"get"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function get(bytes calldata data) public override returns (bool, uint256)\n")),(0,l.kt)("p",null,"Gets the fixed exchange rate."),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"data")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"abi-encoded fixed exchange rate")))),(0,l.kt)("h3",{id:"peek"},"peek"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function peek(bytes calldata data) public view override returns (bool, uint256)\n")),(0,l.kt)("p",null,"Check the current exchange rate without any state changes."),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"data")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"abi-encoded exchange rate")))),(0,l.kt)("h3",{id:"peekspot"},"peekSpot"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function peekSpot(bytes calldata data) external view override returns (uint256 rate)\n")),(0,l.kt)("p",null,"Check the current spot exchange rate without any state changes."),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"data")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"abi-encoded exchange rate")))),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"rate")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"current spot exchange rate")))))}m.isMDXComponent=!0}}]);