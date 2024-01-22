"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[726],{5969:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>o,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var s=c(5893),i=c(1151);const t={sidebar_label:"disk_cache",title:"cache.disk_cache"},r=void 0,l={id:"reference/cache/disk_cache",title:"cache.disk_cache",description:"DiskCache Objects",source:"@site/docs/reference/cache/disk_cache.md",sourceDirName:"reference/cache",slug:"/reference/cache/disk_cache",permalink:"/autogen/docs/reference/cache/disk_cache",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/cache/disk_cache.md",tags:[],version:"current",frontMatter:{sidebar_label:"disk_cache",title:"cache.disk_cache"},sidebar:"referenceSideBar",previous:{title:"cache_factory",permalink:"/autogen/docs/reference/cache/cache_factory"},next:{title:"redis_cache",permalink:"/autogen/docs/reference/cache/redis_cache"}},h={},a=[{value:"DiskCache Objects",id:"diskcache-objects",level:2},{value:"__init__",id:"__init__",level:4},{value:"get",id:"get",level:4},{value:"set",id:"set",level:4},{value:"close",id:"close",level:4},{value:"__enter__",id:"__enter__",level:4},{value:"__exit__",id:"__exit__",level:4}];function d(e){const n={code:"code",em:"em",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"diskcache-objects",children:"DiskCache Objects"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class DiskCache(AbstractCache)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Implementation of AbstractCache using the DiskCache library."}),"\n",(0,s.jsx)(n.p,{children:"This class provides a concrete implementation of the AbstractCache\ninterface using the diskcache library for caching data on disk."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Attributes"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cache"})," ",(0,s.jsx)(n.em,{children:"diskcache.Cache"})," - The DiskCache instance used for caching."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Methods"}),":"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"init"}),"(self, seed): Initializes the DiskCache with the given seed.\nget(self, key, default=None): Retrieves an item from the cache.\nset(self, key, value): Sets an item in the cache."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"close(self)"})," - Closes the cache."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"__enter__(self)"})," - Context management entry.\n",(0,s.jsx)(n.strong,{children:"exit"}),"(self, exc_type, exc_value, traceback): Context management exit."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"__init__",children:"__init__"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def __init__(seed)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Initialize the DiskCache instance."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"seed"})," ",(0,s.jsx)(n.em,{children:"str"})," - A seed or namespace for the cache. This is used to create\na unique storage location for the cache data."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"get",children:"get"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def get(key, default=None)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Retrieve an item from the cache."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"key"})," ",(0,s.jsx)(n.em,{children:"str"})," - The key identifying the item in the cache."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"default"})," ",(0,s.jsx)(n.em,{children:"optional"})," - The default value to return if the key is not found.\nDefaults to None."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"The value associated with the key if found, else the default value."}),"\n",(0,s.jsx)(n.h4,{id:"set",children:"set"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def set(key, value)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Set an item in the cache."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"key"})," ",(0,s.jsx)(n.em,{children:"str"})," - The key under which the item is to be stored."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"value"})," - The value to be stored in the cache."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"close",children:"close"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def close()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Close the cache."}),"\n",(0,s.jsx)(n.p,{children:"Perform any necessary cleanup, such as closing file handles or\nreleasing resources."}),"\n",(0,s.jsx)(n.h4,{id:"__enter__",children:"__enter__"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def __enter__()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Enter the runtime context related to the object."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"self"})," - The instance itself."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"__exit__",children:"__exit__"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def __exit__(exc_type, exc_value, traceback)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Exit the runtime context related to the object."}),"\n",(0,s.jsx)(n.p,{children:"Perform cleanup actions such as closing the cache."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"exc_type"})," - The exception type if an exception was raised in the context."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"exc_value"})," - The exception value if an exception was raised in the context."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"traceback"})," - The traceback if an exception was raised in the context."]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,c)=>{c.d(n,{Z:()=>l,a:()=>r});var s=c(7294);const i={},t=s.createContext(i);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);