"use strict";(self.webpackChunksushi_docs=self.webpackChunksushi_docs||[]).push([[9684],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=d(a),k=r,f=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return a?n.createElement(f,i(i({ref:e},s),{},{components:a})):n.createElement(f,i({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5699:function(t,e,a){a.r(e),a.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={sidebar_position:2},p="MasterChef",d={unversionedId:"Developers/Sushiswap/MasterChef",id:"Developers/Sushiswap/MasterChef",title:"MasterChef",description:"The MasterChef gives out a constant number of SUSHI per block, for liquidity providers that stake",source:"@site/docs/Developers/Sushiswap/MasterChef.md",sourceDirName:"Developers/Sushiswap",slug:"/Developers/Sushiswap/MasterChef",permalink:"/docs/Developers/Sushiswap/MasterChef",editUrl:"https://github.com/sushiswap/sushi-docs/edit/master/docs/Developers/Sushiswap/MasterChef.md",tags:[],version:"current",lastUpdatedBy:"sam bacha",lastUpdatedAt:1653283771,formattedLastUpdatedAt:"5/23/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/Developers/Sushiswap/Overview"},next:{title:"MiniChef",permalink:"/docs/Developers/Sushiswap/MiniChef"}},s={},m=[{value:"Functions",id:"functions",level:2},{value:"poolLength",id:"poollength",level:3},{value:"add",id:"add",level:3},{value:"Parameters",id:"parameters",level:4},{value:"set",id:"set",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"setMigrator",id:"setmigrator",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"migrate",id:"migrate",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"getMultiplier",id:"getmultiplier",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"pendingSushi",id:"pendingsushi",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"massUpdatePools",id:"massupdatepools",level:3},{value:"updatePool",id:"updatepool",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"deposit",id:"deposit",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"withdraw",id:"withdraw",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"emergencyWithdraw",id:"emergencywithdraw",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"safeSushiTransfer",id:"safesushitransfer",level:3},{value:"Parameters",id:"parameters-10",level:4}],u={toc:m};function k(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"masterchef"},"MasterChef"),(0,l.kt)("p",null,"The MasterChef gives out a constant number of SUSHI per block, for liquidity providers that stake\nSLP tokens within contract."),(0,l.kt)("p",null,"New ERC20s or pools are added/updated by the owner of the contract with allocation\npoints that determines the number of SUSHI rewarded to each pool."),(0,l.kt)("p",null,"MasterChef is the only contract with minting rights for the SUSHI token."),(0,l.kt)("p",null,"The full contract can be found ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/sushiswap/sushiswap/blob/canary/contracts/MasterChefV2.sol"},"here"),"."),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"poollength"},"poolLength"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function poolLength(\n) external view returns (uint256)\n")),(0,l.kt)("p",null,"Polls and returns the total number of pools added."),(0,l.kt)("h3",{id:"add"},"add"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function add(\n  uint256 _allocPoint,\n  IERC20 _lpToken,\n  bool _withUpdate\n) public onlyOwner\n")),(0,l.kt)("p",null,"Adds a new SLP/Token to be staked, and can only be called by the owner."),(0,l.kt)("p",null,"Adding duplicate pools can cause problems with the rewards."),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_allocPoint")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"number of allocation points assigned to pool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_lpToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"IERC20"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of ERC20 token that will be staked")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_withUpdate")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool to call massUpdatePools or not")))),(0,l.kt)("h3",{id:"set"},"set"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function set(\n  uint256 _pid,\n  uint256 _allocPoint,\n  bool _withUpdate\n) public onlyOwner\n")),(0,l.kt)("p",null,"Updates the allocation points assigned to an existing pool, and can only be called\nby the owner."),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_pid")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"id for individual pool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_allocPoint")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"number of allocation points assigned to pool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_withUpdate")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool to call massUpdatePools or not")))),(0,l.kt)("h3",{id:"setmigrator"},"setMigrator"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function setMigrator(\n  IMigratorChef _migrator\n) public onlyOwner\n")),(0,l.kt)("p",null,"Sets the contract that is has ability to perform a migration for staked tokens,\nand can only be called by the owner."),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_migrator")),(0,l.kt)("td",{parentName:"tr",align:"left"},"IMigratorChef"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of migrator contract")))),(0,l.kt)("h3",{id:"migrate"},"migrate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function migrate(\n  uint256 _pid\n) public\n")),(0,l.kt)("p",null,"Migrates an lp token/pool to another lp contract. Can be called by anyone, and we trust\nthat migrator contract is good."),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_pid")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"id for individual pool")))),(0,l.kt)("h3",{id:"getmultiplier"},"getMultiplier"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function getMultiplier(\n  uint256 _from,\n  uint256 _to\n) public view returns (uint256)\n")),(0,l.kt)("p",null,"Polls and returns reward multiplier over a given ","_","from to ","_","to block."),(0,l.kt)("h4",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_from")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"start block number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_to")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"end block number")))),(0,l.kt)("h3",{id:"pendingsushi"},"pendingSushi"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function pendingSushi(\n  uint256 _pid,\n  address _user\n) external view returns (uint256)\n")),(0,l.kt)("p",null,"Polls and returns pending SUSHIs to be claimed for a given pool and user."),(0,l.kt)("h4",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_pid")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"id for individual pool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_user")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address for user")))),(0,l.kt)("h3",{id:"massupdatepools"},"massUpdatePools"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function massUpdatePools(\n) public\n")),(0,l.kt)("p",null,"Updates reward variables for all pools."),(0,l.kt)("h3",{id:"updatepool"},"updatePool"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function updatePool(\n  uint256 _pid\n) public\n")),(0,l.kt)("p",null,"Update reward variables for a given pool to be kept up-to-date."),(0,l.kt)("p",null,"Is called on all withdraws, and deposits. So will only be called by itself individually for\npools that aren't as active to keep them up-to-date when updating allocation points."),(0,l.kt)("h4",{id:"parameters-6"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_pid")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"id for individual pool")))),(0,l.kt)("h3",{id:"deposit"},"deposit"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function deposit(\n  uint256 _pid,\n  uint256 _amount\n) public\n")),(0,l.kt)("p",null,"Deposit LP tokens to MasterChef to start accruing SUSHI rewards."),(0,l.kt)("h4",{id:"parameters-7"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_pid")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"id for individual pool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount of tokens to deposit")))),(0,l.kt)("h3",{id:"withdraw"},"withdraw"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function withdraw(\n  uint256 _pid,\n  uint256 _amount\n) public\n")),(0,l.kt)("p",null,"Withdraw LP tokens from MasterChef."),(0,l.kt)("h4",{id:"parameters-8"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_pid")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"id for individual pool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount of tokens to withdraw")))),(0,l.kt)("h3",{id:"emergencywithdraw"},"emergencyWithdraw"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function emergencyWithdraw(\n  uint256 _pid\n) public\n")),(0,l.kt)("p",null,"Withdraw LP tokens from MasterChef without receiving SUSHI rewards.\nTo be only used for emergencies or problems with harvesting rewards."),(0,l.kt)("h4",{id:"parameters-9"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_pid")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"id for individual pool")))),(0,l.kt)("h3",{id:"safesushitransfer"},"safeSushiTransfer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function safeSushiTransfer(\n  address _to,\n  uint256 _amount\n) internal\n")),(0,l.kt)("p",null,"Internal function to be used in case of rounding error that causes pool to\nnot have enough SUSHI."),(0,l.kt)("h4",{id:"parameters-10"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_to")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address to transfer to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount to transfer")))))}k.isMDXComponent=!0}}]);