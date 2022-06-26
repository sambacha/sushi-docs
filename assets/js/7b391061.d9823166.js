"use strict";(self.webpackChunksushi_docs=self.webpackChunksushi_docs||[]).push([[5704],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),m=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=m(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),k=m(a),u=n,c=k["".concat(d,".").concat(u)]||k[u]||s[u]||l;return a?r.createElement(c,i(i({ref:t},o),{},{components:a})):r.createElement(c,i({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},56521:function(e,t,a){a.r(t),a.d(t,{assets:function(){return o},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return s}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],p={sidebar_position:5},d="MISOMarket",m={unversionedId:"Developers/Miso/MISOMarket",id:"Developers/Miso/MISOMarket",title:"MISOMarket",description:"MISOMarket is a factory contract to help you conveniently deploy your own source code verified auctions.",source:"@site/docs/Developers/Miso/MISOMarket.md",sourceDirName:"Developers/Miso",slug:"/Developers/Miso/MISOMarket",permalink:"/docs/Developers/Miso/MISOMarket",draft:!1,editUrl:"https://github.com/sushiswap/sushi-docs/edit/master/docs/Developers/Miso/MISOMarket.md",tags:[],version:"current",lastUpdatedBy:"Genghis Goose",lastUpdatedAt:1656183667,formattedLastUpdatedAt:"6/25/2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"MISOLauncher",permalink:"/docs/Developers/Miso/MISOLauncher"},next:{title:"MISOMasterChef",permalink:"/docs/Developers/Miso/MISOMasterChef"}},o={},s=[{value:"Functions",id:"functions",level:2},{value:"initMISOMarket",id:"initmisomarket",level:3},{value:"Parameters",id:"parameters",level:4},{value:"setMinimumFee",id:"setminimumfee",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"setIntegratorFeePct",id:"setintegratorfeepct",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"setDividends",id:"setdividends",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"setLocked",id:"setlocked",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"setCurrentTemplateId",id:"setcurrenttemplateid",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"hasMarketMinterRole",id:"hasmarketminterrole",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"deployMarket",id:"deploymarket",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns",level:4},{value:"createMarket",id:"createmarket",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-1",level:4},{value:"addAuctionTemplate",id:"addauctiontemplate",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"_addAuctionTemplate",id:"_addauctiontemplate",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"removeAuctionTemplate",id:"removeauctiontemplate",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"getAuctionTemplate",id:"getauctiontemplate",level:3},{value:"Parameters",id:"parameters-12",level:4},{value:"getTemplateId",id:"gettemplateid",level:3},{value:"Parameters",id:"parameters-13",level:4},{value:"numberOfAuctions",id:"numberofauctions",level:3},{value:"minimumFee",id:"minimumfee",level:3},{value:"getMarkets",id:"getmarkets",level:3},{value:"getMarketTemplateId",id:"getmarkettemplateid",level:3},{value:"Parameters",id:"parameters-14",level:4}],k={toc:s};function u(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"misomarket"},"MISOMarket"),(0,l.kt)("p",null,"MISOMarket is a factory contract to help you conveniently deploy your own source code verified auctions."),(0,l.kt)("p",null,"The full contract can be found ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/sushiswap/miso/blob/canary/contracts/MISOMarket.sol"},"here"),"."),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"initmisomarket"},"initMISOMarket"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function initMISOMarket(address _accessControls, address _bentoBox, address[] memory _templates) external\n")),(0,l.kt)("p",null,"Initializes the market with a list of auction templates. Can only be initialized once."),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"accessControls")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address to get the access controls from")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_bentoBox")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"BentoBox address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_templates")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"initial array of MISOMarket templates")))),(0,l.kt)("h3",{id:"setminimumfee"},"setMinimumFee"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function setMinimumFee(uint256 _amount) external\n")),(0,l.kt)("p",null,"Sets the minimum fee. Must have operator access."),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"fee amount to set")))),(0,l.kt)("h3",{id:"setintegratorfeepct"},"setIntegratorFeePct"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function setIntegratorFeePct(uint256 _amount) external\n")),(0,l.kt)("p",null,"Sets the integrator fee percentage. Must have operator access."),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"fee percentage to set")))),(0,l.kt)("h3",{id:"setdividends"},"setDividends"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function setDividends(address payable _divaddr) external\n")),(0,l.kt)("p",null,"Sets the dividend address. Must have operator access."),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_divaddr")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address payable"),(0,l.kt)("td",{parentName:"tr",align:"left"},"dividend address to set")))),(0,l.kt)("h3",{id:"setlocked"},"setLocked"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function setLocked(bool _locked) external\n")),(0,l.kt)("p",null,"Sets the factory to be locked or unlocked."),(0,l.kt)("h4",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_locked")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true if locked, false if unlocked")))),(0,l.kt)("h3",{id:"setcurrenttemplateid"},"setCurrentTemplateId"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function setCurrentTemplateId(uint256 _templateType, uint256 _templateId) external\n")),(0,l.kt)("p",null,"Sets the current template ID for any type. Must have operator access."),(0,l.kt)("h4",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_templateType")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"type of template")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_templateId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ID of the current template for that type")))),(0,l.kt)("h3",{id:"hasmarketminterrole"},"hasMarketMinterRole"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function hasMarketMinterRole(address _address) public view returns (bool)\n")),(0,l.kt)("p",null,"Used to check whether an address has the minter role, returns a boolean."),(0,l.kt)("h4",{id:"parameters-6"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_address")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of account or contract being checked")))),(0,l.kt)("h3",{id:"deploymarket"},"deployMarket"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function deployMarket(\n        uint256 _templateId,\n        address payable _integratorFeeAccount\n    )\n        public payable returns (address newMarket)\n")),(0,l.kt)("p",null,"Creates a new MISOMarket from ",(0,l.kt)("inlineCode",{parentName:"p"},"_templateId")," and transfers fees."),(0,l.kt)("h4",{id:"parameters-7"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_templateId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"template ID of the crowdsale template to create")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_integratorFeeAccount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address payable"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address to pay the fee to")))),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"newMarket")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"new market address")))),(0,l.kt)("h3",{id:"createmarket"},"createMarket"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function createMarket(\n        uint256 _templateId,\n        address _token,\n        uint256 _tokenSupply,\n        address payable _integratorFeeAccount,\n        bytes calldata _data\n    )\n        external payable returns (address newMarket)\n")),(0,l.kt)("p",null,"Creates a new MISOMarket from ",(0,l.kt)("inlineCode",{parentName:"p"},"_templateId"),"."),(0,l.kt)("h4",{id:"parameters-8"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_templateId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"template ID of the auction template to create")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_token")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of the token to be sold")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_tokenSupply")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount of tokens to be sold at market")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_integratorFeeAccount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address payable"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address to send referral bonus to, if set")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_data")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"data passed to the template for init")))),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"newMarket")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"new market address")))),(0,l.kt)("h3",{id:"addauctiontemplate"},"addAuctionTemplate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function addAuctionTemplate(address _template) external\n")),(0,l.kt)("p",null,"Calls ",(0,l.kt)("inlineCode",{parentName:"p"},"_addAuctionTemplate"),", which adds an auction template to create through factory. Must have operator access."),(0,l.kt)("h4",{id:"parameters-9"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_template")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"auction template address")))),(0,l.kt)("h3",{id:"_addauctiontemplate"},"_","addAuctionTemplate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function _addAuctionTemplate(address _template) internal\n")),(0,l.kt)("p",null,"Internal function called by ",(0,l.kt)("inlineCode",{parentName:"p"},"addAuctionTemplate"),", it adds an auction template to create through factory. Must have operator access."),(0,l.kt)("h4",{id:"parameters-10"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_template")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"auction template address")))),(0,l.kt)("h3",{id:"removeauctiontemplate"},"removeAuctionTemplate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function removeAuctionTemplate(uint256 _templateId) external\n")),(0,l.kt)("p",null,"Removes an auction template. Must have operator access."),(0,l.kt)("h4",{id:"parameters-11"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_templateId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ID of template to be deleted")))),(0,l.kt)("h3",{id:"getauctiontemplate"},"getAuctionTemplate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function getAuctionTemplate(uint256 _templateId) external view returns (address)\n")),(0,l.kt)("p",null,"View function that returns a template address based on the ID."),(0,l.kt)("h4",{id:"parameters-12"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_templateId")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ID of template to get address of")))),(0,l.kt)("h3",{id:"gettemplateid"},"getTemplateId"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function getTemplateId(address _auctionTemplate) external view returns (uint256)\n")),(0,l.kt)("p",null,"View function that returns a template ID based on the address."),(0,l.kt)("h4",{id:"parameters-13"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_auctionTemplate")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of template to get ID of")))),(0,l.kt)("h3",{id:"numberofauctions"},"numberOfAuctions"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function numberOfAuctions() external view returns (uint)\n")),(0,l.kt)("p",null,"View function that returns the total number of auctions in the factory."),(0,l.kt)("h3",{id:"minimumfee"},"minimumFee"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function minimumFee() external view returns(uint128)\n")),(0,l.kt)("p",null,"View function that returns the minimumFee of the auctions in the contract."),(0,l.kt)("h3",{id:"getmarkets"},"getMarkets"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function getMarkets() external view returns(address[] memory)\n")),(0,l.kt)("p",null,"View function that returns an array of all the addresses of all the auctions in the contract."),(0,l.kt)("h3",{id:"getmarkettemplateid"},"getMarketTemplateId"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function getMarketTemplateId(address _auction) external view returns(uint64)\n")),(0,l.kt)("p",null,"View function that returns the Market Template ID for a given auction address."),(0,l.kt)("h4",{id:"parameters-14"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_auction")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of auction to get ID of")))))}u.isMDXComponent=!0}}]);