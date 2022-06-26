"use strict";(self.webpackChunksushi_docs=self.webpackChunksushi_docs||[]).push([[8278],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return u}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),d=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=d(a),u=n,f=k["".concat(p,".").concat(u)]||k[u]||s[u]||l;return a?r.createElement(f,i(i({ref:e},m),{},{components:a})):r.createElement(f,i({ref:e},m))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5959:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return s}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],o={sidebar_position:3},p="MiniChef",d={unversionedId:"Developers/Sushiswap/MiniChef",id:"Developers/Sushiswap/MiniChef",title:"MiniChef",description:"The MiniChef contract plays the same role as the MasterChef contract does, with the main exception being that they are deployed across L2's, whereas MasterChef is deployed on the Ethereum mainnet.",source:"@site/docs/Developers/Sushiswap/MiniChef.md",sourceDirName:"Developers/Sushiswap",slug:"/Developers/Sushiswap/MiniChef",permalink:"/docs/Developers/Sushiswap/MiniChef",draft:!1,editUrl:"https://github.com/sushiswap/sushi-docs/edit/master/docs/Developers/Sushiswap/MiniChef.md",tags:[],version:"current",lastUpdatedBy:"Genghis Goose",lastUpdatedAt:1656183667,formattedLastUpdatedAt:"6/25/2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"MasterChef",permalink:"/docs/Developers/Sushiswap/MasterChef"},next:{title:"SushiBar",permalink:"/docs/Developers/Sushiswap/SushiBar"}},m={},s=[{value:"Functions",id:"functions",level:2},{value:"poolLength",id:"poollength",level:3},{value:"add",id:"add",level:3},{value:"Parameters",id:"parameters",level:4},{value:"set",id:"set",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"setSushiPerSecond",id:"setsushipersecond",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"setMigrator",id:"setmigrator",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"migrate",id:"migrate",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"pendingSushi",id:"pendingsushi",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns",level:4},{value:"massUpdatePools",id:"massupdatepools",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"updatePool",id:"updatepool",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-1",level:4},{value:"deposit",id:"deposit",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"withdraw",id:"withdraw",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"harvest",id:"harvest",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"withdrawAndHarvest",id:"withdrawandharvest",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"emergencyWithdraw",id:"emergencywithdraw",level:3},{value:"Parameters",id:"parameters-12",level:4}],k={toc:s};function u(t){var e=t.components,a=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"minichef"},"MiniChef"),(0,l.kt)("p",null,"The MiniChef contract plays the same role as the MasterChef contract does, with the main exception being that they are deployed across L2's, whereas MasterChef is deployed on the Ethereum mainnet."),(0,l.kt)("p",null,"The full contract can be found ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/sushiswap/sushiswap/blob/archieve/canary/contracts/MiniChefV2.sol"},"here"),"."),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"poollength"},"poolLength"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function poolLength() public view returns (uint256 pools)\n")),(0,l.kt)("p",null,"View function that returns the number of MiniChef pools."),(0,l.kt)("h3",{id:"add"},"add"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function add(uint256 allocPoint, IERC20 _lpToken, IRewarder _rewarder) public onlyOwner\n")),(0,l.kt)("p",null,"Adds a new LP to the pool. Can only be called by the owner of the contract."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," ",(0,l.kt)("em",{parentName:"p"},"Do ",(0,l.kt)("strong",{parentName:"em"},"NOT")," add the same LP token more than once. Rewards will be messed up if you do!")),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_allocPoint")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"number of allocation points assigned to pool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_lpToken")),(0,l.kt)("td",{parentName:"tr",align:"left"},"IERC20"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of ERC20 token that will be staked")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_rewarder")),(0,l.kt)("td",{parentName:"tr",align:"left"},"IRewarder"),(0,l.kt)("td",{parentName:"tr",align:"left"},"implementation of rewarder contract")))),(0,l.kt)("h3",{id:"set"},"set"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function set(uint256 _pid, uint256 _allocPoint, IRewarder _rewarder, bool overwrite) public onlyOwner\n")),(0,l.kt)("p",null,"Updates the given pool's SUSHI allocation point and ",(0,l.kt)("inlineCode",{parentName:"p"},"IRewarder")," contract. Can only be called by the owner of the contract."),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_pid")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"pool ID of pool to update")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_allocPoint")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"number of allocation points assigned to pool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_rewarder")),(0,l.kt)("td",{parentName:"tr",align:"left"},"IRewarder"),(0,l.kt)("td",{parentName:"tr",align:"left"},"implementation of rewarder contract")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"overwrite")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true if ",(0,l.kt)("inlineCode",{parentName:"td"},"_rewarder")," should be set, otherwise false")))),(0,l.kt)("h3",{id:"setsushipersecond"},"setSushiPerSecond"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function setSushiPerSecond(uint256 _sushiPerSecond) public onlyOwner\n")),(0,l.kt)("p",null,"Sets the SUSHI per second to be distributed. Can only be called by the owner of the contract."),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_sushiPerSecond")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount of SUSHI to distribute per second")))),(0,l.kt)("h3",{id:"setmigrator"},"setMigrator"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function setMigrator(IMigratorChef _migrator) public onlyOwner\n")),(0,l.kt)("p",null,"Sets the ",(0,l.kt)("inlineCode",{parentName:"p"},"migrator")," contract. Can only be called by the owner of the contract."),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_migrator")),(0,l.kt)("td",{parentName:"tr",align:"left"},"IMigratorChef"),(0,l.kt)("td",{parentName:"tr",align:"left"},"contract address of migrator to set")))),(0,l.kt)("h3",{id:"migrate"},"migrate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function migrate(uint256 _pid) public\n")),(0,l.kt)("p",null,"Migrates an LP token to another LP contract through the ",(0,l.kt)("inlineCode",{parentName:"p"},"migrator")," contract."),(0,l.kt)("h4",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_pid")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"pool ID to migrate an LP to")))),(0,l.kt)("h3",{id:"pendingsushi"},"pendingSushi"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function pendingSushi(uint256 _pid, address _user) external view returns (uint256 pending)\n")),(0,l.kt)("p",null,"View function to see pending SUSHI on the frontend and returns the pending SUSHI rewards for a given user."),(0,l.kt)("h4",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_pid")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"pool ID of pool to check")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_user")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of user to check pending rewards for")))),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pending")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount of pending SUSHI rewards the given user has")))),(0,l.kt)("h3",{id:"massupdatepools"},"massUpdatePools"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function massUpdatePools(uint256[] calldata pids) external\n")),(0,l.kt)("p",null,"Updates the reward variables for ",(0,l.kt)("em",{parentName:"p"},"all")," of the pools. Be careful of gas spending!"),(0,l.kt)("h4",{id:"parameters-6"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pids")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"pool IDs of pools to update")))),(0,l.kt)("h3",{id:"updatepool"},"updatePool"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function updatePool(uint256 pid) public returns (PoolInfo memory pool)\n")),(0,l.kt)("p",null,"Updates rewards variables for the given pool and returns the pool that was updated."),(0,l.kt)("h4",{id:"parameters-7"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pid")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"pool ID of pool to update")))),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pool")),(0,l.kt)("td",{parentName:"tr",align:"left"},"PoolInfo"),(0,l.kt)("td",{parentName:"tr",align:"left"},"pool that was updated")))),(0,l.kt)("h3",{id:"deposit"},"deposit"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function deposit(uint256 pid, uint256 amount, address to) public\n")),(0,l.kt)("p",null,"Deposits LP tokens to the MiniChef for SUSHI allocation. !!"),(0,l.kt)("h4",{id:"parameters-8"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pid")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"pool ID of pool to to deposit LP tokens from")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount of LP tokens to deposit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"to")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of the receiver of the LP tokens")))),(0,l.kt)("h3",{id:"withdraw"},"withdraw"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function withdraw(uint256 pid, uint256 amount, address to) public\n")),(0,l.kt)("p",null,"Withdraws LP tokens from the MiniChef. !!"),(0,l.kt)("h4",{id:"parameters-9"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pid")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"pool ID of pool to to withdraw LP tokens from")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount of LP tokens to withdraw")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"to")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of the receiver of the LP tokens")))),(0,l.kt)("h3",{id:"harvest"},"harvest"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function harvest(uint256 pid, address to) public\n")),(0,l.kt)("p",null,"Harvests SUSHI rewards for transaction sender to ",(0,l.kt)("inlineCode",{parentName:"p"},"to"),"."),(0,l.kt)("h4",{id:"parameters-10"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pid")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"pool ID of pool to harvest from")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"to")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of the receiver of the harvested SUSHI rewards")))),(0,l.kt)("h3",{id:"withdrawandharvest"},"withdrawAndHarvest"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function withdrawAndHarvest(uint256 pid, uint256 amount, address to) public\n")),(0,l.kt)("p",null,"Withdraws LP tokens from the MiniChef ",(0,l.kt)("em",{parentName:"p"},"and")," harvests SUSHI rewards for transaction sender to ",(0,l.kt)("inlineCode",{parentName:"p"},"to"),"."),(0,l.kt)("h4",{id:"parameters-11"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pid")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"pool ID of pool to to withdraw LP tokens from")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount of LP tokens to withdraw")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"to")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of the receiver of the LP tokens and SUSHI rewards")))),(0,l.kt)("h3",{id:"emergencywithdraw"},"emergencyWithdraw"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function emergencyWithdraw(uint256 pid, address to) public\n")),(0,l.kt)("p",null,"Withdraws LP tokens without caring about rewards. To be used in emergencies only."),(0,l.kt)("h4",{id:"parameters-12"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pid")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"pool ID of pool to withdraw LP tokens from")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"to")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address of the receiver of the LP tokens")))))}u.isMDXComponent=!0}}]);