"use strict";(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[8141],{24578(o,r,t){t.d(r,{o:()=>a});const a=(0,t(96540).createContext)(null)},16840(o,r,t){t.d(r,{Ay:()=>f,L6:()=>u,VP:()=>k,hb:()=>y,nV:()=>p,zf:()=>m});var a=t(62193),e=t.n(a),n=t(5736),l=t(56822),s=t(60154),i=t(1804),d=t(50643),c=t(96445);async function k({copilotID:o,contentType:r,federatedGraphqlUrl:t,organizationID:a,meta:k}){(0,l.N9)((0,l.hK)(`${c.QG}${c.rb}${c.c1}`,c.eq));const u={organizationId:a,bookmarkName:"",documentType:r,copilotId:o,meta:e()(k)?null:JSON.stringify(k)};try{const o=await(0,n.j)({federatedGraphqlUrl:t,query:d.fG,variables:u,queryLabelForError:"CreateBookmark"}),{status:r,data:a}=o,e={status:r,statusCode:201,data:a?.createBookmark};return(0,s.perfMeasureEnd)(`${c.rb}${c.c1}`,e),e}catch(o){const{message:r,statusCode:t}=o;if(r?.includes(i.D1.RECORD_ALREADY_EXISTS)){const r={status:201,statusCode:t,data:{id:null,error:o}};return(0,s.perfMeasureEnd)(`${c.rb}${c.c1}`,r),r}return(0,s.handleError)(o,`${c.rb}${c.c1}`)}}async function u({bookmarkId:o,copilotId:r=null,federatedGraphqlUrl:t}){(0,l.N9)((0,l.hK)(`${c.QG}${c.vl}${c.c1}`,c.eq));const a={bulkIds:o?[o]:null,copilotId:r};try{const o=await(0,n.j)({federatedGraphqlUrl:t,query:d.h9,variables:a,queryLabelForError:"DeleteBookmark"}),{data:r}=o,e={status:204,data:r?.deleteBookmark};return(0,s.perfMeasureEnd)(`${c.vl}${c.c1}`,e),e}catch(o){return(0,s.handleError)(o,`${c.vl}${c.c1}`)}}async function m({copilotID:o,organizationID:r,federatedGraphqlUrl:t}){const a={organizationId:r,limit:1,offset:0,copilotIds:o};try{const o=await(0,n.j)({federatedGraphqlUrl:t,query:d.TL,variables:a,queryLabelForError:"AllBookmarks"}),{data:r}=o,e=r?.allBookmarks?.bookmarks;if(e&&e.length)return{bookmarkId:e[0].id,isUrlBookmark:!1}}catch(o){}return{bookmarkId:null,isUrlBookmark:null}}const p=async({federatedGraphqlUrl:o,organizationID:r,copilotIds:t=[]})=>{const a={organizationId:r,limit:t.length,offset:0,copilotIds:t};try{const r=await(0,n.j)({federatedGraphqlUrl:o,query:d.TL,variables:a,queryLabelForError:"AllBookmarks"}),{data:t}=r,e=t?.allBookmarks?.bookmarks||[],l=new Set(e.map(o=>o.copilotId));return{productIds:l,bookmarkMap:new Map(e.map(o=>[o.copilotId,{bookmarkId:o.id,bookmarkName:o.bookmarkName,documentType:"Product"}])),totalCount:t?.allBookmarks?.allBookmarkCount||e.length}}catch(o){return{productIds:new Set,bookmarkMap:new Map,totalCount:0}}};async function y({copilotID:o,organizationID:r,federatedGraphqlUrl:t}){const a={organizationId:r,copilotID:o};try{const o=await(0,n.j)({federatedGraphqlUrl:t,query:d.Yg,variables:a,queryLabelForError:"isPhotoBookmarked"}),{data:r={}}=o||{};if(r.getPhoto)return r.getPhoto.isBookmarked;throw new Error("GraphQL could not resolve isPhotoBookmarked for error: Invalid copilot ID")}catch(o){}return!1}const f={proxyCreateBookmark:k,proxyGetBookmarks:async function({federatedGraphqlUrl:o,params:r={},parseJson:t=!0,organizationID:a,filterBookmarkTypes:e=[]}){const i={limit:12,offset:0,organizationId:a,sortBy:"createdAt",sortOrder:"DESC"};(0,l.N9)((0,l.hK)(`${c.QG}${c.wR}${c.c1}`,c.eq));for(const[o,t]of Object.entries(r))"size"===o&&(i.limit=t),"start"===o&&(i.offset=t),"sort"===o&&(i.sortBy=t);i.limit??(i.limit=10),e.length>0&&(i.filter={documentType:e});try{const r=await(0,n.j)({allowPartialData:!0,federatedGraphqlUrl:o,query:(0,d.GK)(),variables:i,queryLabelForError:"AllBookmarks"}),{data:a,status:e}=r,l={status:e,data:a?.allBookmarks?.bookmarks,meta:{count:a?.allBookmarks?.allBookmarkCount}};t||(l.json=()=>({...l}));return(()=>(0,s.perfMeasureEnd)(`${c.wR}${c.c1}`,l))(),l}catch(o){return(0,s.handleError)(o,`${c.wR}${c.c1}`)}},proxyRemoveBookmark:u,getBookmarkStatus:m,getBookmarkedProducts:async({federatedGraphqlUrl:o,organizationId:r,limit:t=100,offset:a=0})=>{const e={organizationId:r,limit:t,offset:a,documentType:"Product"};try{const r=await(0,n.j)({federatedGraphqlUrl:o,query:d.AQ,variables:e,queryLabelForError:"BookmarkedProducts"}),{data:t}=r,a=t?.allBookmarks?.bookmarks||[],l=new Set(a.map(o=>o.copilotId));return{productIds:l,bookmarkMap:new Map(a.map(o=>[o.copilotId,{bookmarkId:o.id,bookmarkName:o.bookmarkName,documentType:o.documentType}])),totalCount:t?.allBookmarks?.allBookmarkCount||0}}catch(o){return{productIds:new Set,bookmarkMap:new Map,totalCount:0}}},getBookmarkedByCopilotIds:p,isPhotoBookmarked:y}},70462(o,r,t){t.d(r,{qk:()=>d});var a=t(38267),e=t(1123),n=t(26865),l=t(96472),s=t(18608);const i=(o={})=>"grid"===o.display&&(0,e.aU)(),d=a.Ay.div.withConfig({displayName:"SlotContainer"})`
  ${({stylesConfig:o={}})=>{const{mobile:r={},tablet:t={},desktop:e={}}=o;return a.AH`
      ${r}
      ${i(r)}

      // childStylesConfig are required in here to
      // put up styles for direct slot component
      & > :first-child {
        ${r.childStylesConfig??{}}
      }

      ${(0,n.H4)(l.LO.md)} {
        ${t}
        ${i(t)}

        & > :first-child {
          ${t.childStylesConfig??{}}
        }
      }

      ${(0,n.H4)(l.LO.lg)} {
        ${e}
        ${i(e)}

        & > :first-child {
          ${e.childStylesConfig??{}}
        }
      }
    `}};
`;(0,a.Ay)(s.c7).withConfig({displayName:"FallbackWrapper"})`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 0.5px dotted;
  padding: 0.5rem;
  height: 100vh;
`,(0,a.Ay)(s.vm).withConfig({displayName:"MessageText"})``,a.Ay.div.withConfig({displayName:"Slot"})``},64325(o,r,t){t.d(r,{e1:()=>l,fx:()=>s,kn:()=>i});const a="upc-product",e="uvc",n="rental-product",l=o=>o?.renderAs===a||o?.renderAs===e,s=o=>o?.renderAs===e,i=o=>s(o)&&o?.sourceType===n},57819(o,r,t){t.d(r,{h:()=>s});var a=t(96540),e=t(5556),n=t.n(e);const l=(0,a.createContext)({instance:void 0}),s=({children:o,instance:r})=>a.createElement(l.Provider,{value:{instance:r}},o);s.propTypes={children:n().node.isRequired,instance:n().any},s.displayName="DynamicLayoutConfigProvider"}}]);