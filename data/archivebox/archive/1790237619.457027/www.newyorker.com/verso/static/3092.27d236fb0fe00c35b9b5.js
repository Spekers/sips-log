/*! For license information please see 3092.27d236fb0fe00c35b9b5.js.LICENSE.txt */
(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[793,3092,7728],{31706(e,t,n){"use strict";n.d(t,{A:()=>D});var o=n(13465),i=n(96540),a=n(5556),r=n.n(a),s=n(6442),l=n(53499),d=n(38267),c=n(99906),m=n(26865),p=n(97504),u=n(18608),g=n(73730);const h=d.Ay.input.withConfig({displayName:"AgeGateCheckbox"}).attrs(e=>({hidden:!0,type:"checkbox",...e}))``,y=d.Ay.div.withConfig({displayName:"AgeGateOverlay"})`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  background: ${(0,m.HK)("colors.consumption.lead.inverted.background")};
  padding: 0 1rem;
  width: 100%;
  height: 100%;
  text-align: center;

  ${h}:checked ~ & {
    display: none;
  }

  @media (min-width: ${c.Vh.lg}px) {
    padding: 0 10rem;
  }

  @media (min-width: ${c.Vh.xl}px) {
    padding: 0 20rem;
  }
`,b=(0,d.Ay)(p.Ay.AgeGate).withConfig({displayName:"AgeGateDefaultLogo"})`
  margin: 0 0 ${(0,m.Kq)(3)};
  fill: ${({theme:e})=>(0,m.HK)(e,"colors.consumption.lead.inverted.heading")};
  width: 96px;
  height: 96px;

  path:first-of-type {
    fill: ${({theme:e})=>(0,m.HK)(e,"colors.consumption.lead.inverted.accent")};
  }
`,w=d.Ay.img.withConfig({displayName:"AgeGateLogo"})`
  margin: 0 0 ${(0,m.Kq)(3)};
  width: 96px;
  height: 96px;
`,f=(0,d.Ay)(u.vm).withConfig({displayName:"AgeGateTitle"}).attrs(e=>({colorToken:"colors.consumption.lead.inverted.heading",typeIdentity:"typography.definitions.consumptionEditorial.hed-bulletin",...e}))`
  margin: 0 0 ${(0,m.Kq)(2)};

  & + label,
  & + button {
    margin-top: ${(0,m.Kq)(2)};
  }
`,v=(0,d.Ay)(u.vm).withConfig({displayName:"AgeGateText"}).attrs(e=>({colorToken:"colors.consumption.lead.inverted.heading",typeIdentity:"typography.definitions.consumptionEditorial.description-core",...e}))`
  margin: 0 0 ${(0,m.Kq)(4)};
`,$=(0,d.Ay)(g.A.Primary).withConfig({as:"a",displayName:"AgeGateButton"})`
  margin: 0 0 ${(0,m.Kq)(2)};
`,A="accept",C="ageGate";var x=n(56892);const k=(0,n(72267).YK)({ageGateHedText:{id:"AgeGate.HedText",defaultMessage:"Are you 18 or over?",description:"Age Gate title"},ageGateDekText:{id:"AgeGate.DekText",defaultMessage:"This material is intended for people over the age of 18",description:"Age Gate description"},ageGateAcceptLabel:{id:"AgeGate.AcceptLabel",defaultMessage:"I am 18+",description:"Age Gate accept button label"},ageGateDeclineLabel:{id:"AgeGate.DeclineLabel",defaultMessage:"I'm under 18",description:"Age Gate decline button label"}}),S=(e,t)=>{e(!1),(e=>{document.cookie=(0,x.createCookie)(C,A,{expirationInMs:864e5*(e||28),path:"/"})})(t)},T=({acceptLabel:e,brandContentWarnings:t=["sexual_content","drug_content","death_content","alcohol_content"],configuredComponentRef:n,content:o,cookieExpirationInDays:a,declineLabel:r,dek:d,hed:c,logo:m})=>{i.useEffect(()=>{window.Kendra.TRACK_COMPONENT.broadcast(l.G.RENDER,{name:"AgeGate"})},[]);const{useState:p,useEffect:u}=i,{formatMessage:g}=(0,s.A)(),[T,E]=p(!1);if(u(()=>{const e=!((0,x.getCookie)(C)===A)&&(({content:e,brandContentWarnings:t}={})=>{const{contentWarnings:n}=e||{},o=t?.some(e=>n?.some(t=>t.slug===e));return Boolean(o)})({content:o,brandContentWarnings:t});E(e)},[o,t]),!T)return null;const D=d??g(k.ageGateDekText);return i.createElement("div",{ref:n},i.createElement(h,{id:"age-gate-check"}),i.createElement(y,{id:"age-gate-overlay",role:"dialog","aria-labelledby":"age-gate-title","aria-describedby":"age-gate-description"},m?i.createElement(w,{src:m,alt:c}):i.createElement(b,null),i.createElement(f,{as:"h2",id:"age-gate-title"},c??g(k.ageGateHedText)),D&&i.createElement(v,{id:"age-gate-description"},D),i.createElement("label",{htmlFor:"age-gate-check",key:"age-gate-label-accept"},i.createElement($,{inputKind:"link",onClickHandler:()=>S(E,a),key:"age-gate-button-accept",dataAttrs:{"data-test-id":"age-gate-button-accept"},label:e||g(k.ageGateAcceptLabel)})),i.createElement($,{href:"/",inputKind:"link",key:"age-gate-button-decline",dataAttrs:{"data-test-id":"age-gate-button-decline"},label:r||g(k.ageGateDeclineLabel)})))};T.displayName="AgeGate",T.propTypes={acceptLabel:r().string,brandContentWarnings:r().array,content:r().object.isRequired,configuredComponentRef:r().func,cookieExpirationInDays:r().number,declineLabel:r().string,dek:r().string,hed:r().string,logo:r().string};const E=T,D=(0,o.y)(E,"AgeGate")},87098(e,t,n){"use strict";n.d(t,{j:()=>o.A});var o=n(26022)},49299(e,t,n){"use strict";n.d(t,{OZ:()=>a});var o=n(5556),i=n.n(o);const a=i().shape({variation:i().string,alignment:i().object,controls:i().shape({hideRubric:i().bool,hideHed:i().bool,hideDek:i().bool,hideBylines:i().bool,hidePublishDate:i().bool}),fullBleed:i().bool});i().object,i().shape({timestamp:i().string})},79784(e,t,n){"use strict";n.d(t,{A:()=>c});var o=n(5556),i=n.n(o),a=n(96540),r=n(49741);const s=n(38267).Ay.aside.withConfig({displayName:"PaywallInlineBarrierWrapper"})`
  width: auto;
  height: auto;

  @media print {
    display: none;
  }
`;var l=n(53499);const d=function(e){a.useEffect(()=>{window.Kendra.TRACK_COMPONENT.broadcast(l.G.RENDER,{name:"PaywallInlineBarrier"})},[]);const{position:t="paywall-inline-barrier",className:n}=e;return a.createElement(s,{className:n,"data-testid":"PaywallInlineBarrierWrapper"},a.createElement(r.A,{position:t,aria:{"aria-live":"polite"}}))};d.propTypes={className:i().string,position:i().string};const c=d},60363(e,t,n){"use strict";n.d(t,{A:()=>S});var o=n(5556),i=n.n(o),a=n(96540),r=n(6442),s=n(73730),l=n(94828);const d=(0,n(72267).YK)({viewAllButton:{id:"SummaryCollectionSplitColumns.ViewAllButton",defaultMessage:"View All {location} {recommendedType}",description:"button label for view all button"},guideItemHed:{id:"SummaryCollectionSplitColumns.GuideItemHed",defaultMessage:"{location} Travel Guide",description:"dangerousHed for guideItem"},recommendedTitle:{id:"SummaryCollectionSplitColumns.RecommendedTitle",defaultMessage:"Recommended {recommendedType}",description:"recommended title for recircs"}});var c=n(90090),m=n(3247),p=n(13465),u=n(53499),g=n(38267),h=n(74423),y=n(40653),b=n(86659),w=n(26865),f=n(96472);const v=g.Ay.div.withConfig({displayName:"SummaryCollectionSplitColumnsWrapper"})`
  margin: ${(0,w.Kq)(4)} 0;
  background-color: ${({hasBackgroundColor:e})=>e?(0,w.HK)("colors.discovery.body.light.background"):"transparent"};
`,$=`\n  &:last-child {\n    padding-bottom: 0;\n    \n    ${(0,w.H4)(f.LO.md)}{\n      padding-bottom: ${(0,w.Kq)(2)};\n    }\n  }\n`,A=(0,g.Ay)(({columnAmount:e,variation:t,shouldHideDangerousDek:n,hasExtraRubricSpace:o,hasLessBottomSpace:i,hasTighterBylineSpacing:r,...s})=>{const d=l.A[t];return a.createElement(d,{...s})}).withConfig({displayName:"SummaryCollectionSplitColumnsItem"})`
  ${v} & {
    padding-bottom: ${(0,w.Kq)(2)};

    ${(0,w.H4)(f.LO.md)} {
      border-bottom: 0;
    }

    .summary-item__rubric {
      ${(0,w.Gg)("typography.definitions.globalEditorial.context-primary")}
      display: block;
      color: ${(0,w.HK)("colors.discovery.body.light.context-signature")};

      ${(0,w.H4)(f.LO.md)} {
        margin-bottom: ${({hasExtraRubricSpace:e})=>e?(0,w.Kq)(1):(0,w.Kq)(.5)};
      }
    }

    .summary-item__hed-link {
      color: ${(0,w.HK)("colors.discovery.body.light.heading")};

      &::after {
        display: none;
      }
    }

    .summary-item__hed {
      ${(0,w.Gg)("typography.definitions.discovery.hed-bulletin-primary")}
      margin-bottom: 0;
    }

    .summary-item__dek {
      ${(0,w.Gg)("typography.definitions.discovery.description-page")}
      display: ${({shouldHideDangerousDek:e})=>e?"none":"block"};
      margin: ${(0,w.Kq)(2)} 0 ${(0,w.Kq)(1)};
      color: ${(0,w.HK)("colors.discovery.body.white.description")};
    }

    .summary-item__content {
      padding-bottom: ${({hasLessBottomSpace:e})=>e?(0,w.Kq)(0):""};
    }

    .summary-item__byline {
      margin-top: ${({hasTighterBylineSpacing:e})=>e?(0,w.Kq)(1):(0,w.Kq)(2)};

      ${h.f9},
      ${h.CR},
      ${h.H1},
      ${h.QW} {
        ${(0,w.Gg)("typography.definitions.globalEditorial.accreditation-core")}
        color: ${(0,w.HK)("colors.discovery.body.light.accreditation")};
      }

      ${h.QW}:link {
        color: ${(0,w.HK)("colors.discovery.body.light.accreditation")};
      }
    }

    .summary-item__metadata-secondary {
      margin: ${(0,w.Kq)(2)} 0 0 0;
    }

    ${(0,w.R9)("hasBorder",!1,$)};
  }
`,C=(0,g.Ay)(b.A.ThreeUp).withConfig({displayName:"SummaryCollectionSplitColumnsItems"})`
  ${y.E} {
    grid-column: 1 / -1;
    margin-top: ${(0,w.Kq)(2)};
  }
  ${y.E}:first-of-type {
    margin: ${(0,w.Kq)(3)} 0;
    ${(0,w.H4)(f.LO.md)} {
      grid-column: span 7;
    }
  }
  ${y.E}:last-of-type {
    ${(0,w.H4)(f.LO.md)} {
      grid-column: span 5;
      margin: ${(0,w.Kq)(3)} 0;
    }
  }
`,x=(0,g.Ay)("div").withConfig({displayName:"SummaryCollectionSplitColumnsRecsWrapper"})`
  display: grid;
  grid-column-gap: ${(0,w.Kq)(3)};
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: ${(0,w.Kq)(2)};
  height: 100%;

  ${(0,w.H4)(f.LO.md)} {
    display: grid;
    grid-template-rows: 5% 75% 20%;
    grid-row-gap: ${(0,w.Kq)(1)};
    border-right: 1px solid;
    border-color: ${({theme:e})=>(0,w._o)(e,"border-color","colors.consumption.body.standard.divider")};
    padding-right: ${(0,w.Kq)(3)};
  }

  p {
    grid-column: span 6;
    grid-row: 1 / 1;
    align-self: center;
    margin: 0;
    ${({theme:e})=>(0,w.Gg)(e,"typography.definitions.foundation.link-primary")}
  }

  .summary-item {
    display: grid;
    grid-column-gap: 1rem;
    grid-column: span 6;
    grid-template-columns: 40% 60%;
    align-items: center;

    ${(0,w.H4)(f.LO.sm)} {
      grid-template-columns: 1fr 1fr;
    }

    ${(0,w.H4)(f.LO.md)} {
      display: unset;
      grid-column: span 3;
      grid-row: 2 / 2;
    }
  }

  .button {
    grid-column: span 6;
    max-height: ${(0,w.Kq)(6)};
    ${(0,w.H4)(f.LO.md)} {
      grid-column: 2 / span 4;
      grid-row: 3;
    }
    ${(0,w.H4)(f.LO.lg)} {
      justify-self: center;
      padding: 0 ${(0,w.Kq)(6)};
    }
  }
`,k=({className:e,configuredComponentRef:t,dangerousHed:n,guideItem:o,hasBackgroundColor:i=!0,hasBorderItem:l=!0,hasExtraRubricSpace:p=!1,hasLessBottomSpace:g=!1,hasTighterBylineSpacing:h=!1,itemHedTag:y,location:b,recommendedItems:w,recommendedItemCount:f=2,shouldHideDangerousDek:$=!1,shouldAppendReadMoreLinkForDek:k=!0,shouldHideBylines:S=!0,shouldEnableBundleComponentAnalytics:T,summaryItemRubricVariation:E,trackingNamespace:D})=>{a.useEffect(()=>{window.Kendra.TRACK_COMPONENT.broadcast(u.G.RENDER,{name:"SummaryCollectionSplitColumns"})},[]);const{formatMessage:L}=(0,r.A)(),{items:N,recommendedType:B,recommendedClickout:R}=w,I=y||(n?"h3":"h2"),[M]=(0,m.qe)("trending-ad");return a.createElement(v,{ref:t,className:e,"data-testid":"SummaryCollectionSplitColumnsWrapper",hasBackgroundColor:i},a.createElement(C,{"data-testid":"SummaryCollectionSplitColumnsItems",showTrendingAd:M},a.createElement(x,null,a.createElement("p",null,L(d.recommendedTitle,{recommendedType:B})),N.slice(0,f).map((e,t)=>{const n=(0,c.NY)(T,D?.item,t);return a.createElement(a.Fragment,{key:t},a.createElement(A,{...e,analyticsDataAttribute:n,variation:"TextBelowImageLeftHasRuleWithDek",hasBorder:l,hedTag:I,key:t,rubricVariation:E,"data-testid":"SummaryCollectionSplitColumnsItem",shouldHideDangerousDek:$,shouldAppendReadMoreLinkForDek:k,shouldHideBylines:S,hasLessBottomSpace:g,hasExtraRubricSpace:p}))}),R&&a.createElement(s.A.Utility,{label:L(d.viewAllButton,{location:b,recommendedType:B}),inputKind:"link",href:R})),a.createElement(A,{...o[0],image:o[0].lede,dangerousHed:b?L(d.guideItemHed,{location:b}):n,variation:"TextBelowImageLeftHedAndDek",hasBorder:l,hedTag:I,rubricVariation:E,"data-testid":"SummaryCollectionSplitColumnsItem",shouldHideBylines:S,hasTighterBylineSpacing:h,hasLessBottomSpace:g,hasExtraRubricSpace:p})))};k.propTypes={configuredComponentRef:i().func,className:i().string,dangerousHed:i().string,guideItem:i().arrayOf(i().shape(l.A.propTypes)).isRequired,hasBackgroundColor:i().bool,hasBorderItem:i().bool,hasExtraRubricSpace:i().bool,hasLessBottomSpace:i().bool,hasTighterBylineSpacing:i().bool,itemHedTag:i().string,location:i().string,recommendedItemCount:i().number,recommendedItems:i().shape({items:i().arrayOf(i().shape(l.A.propTypes)),recommendedType:i().string,recommendedClickout:i().string}).isRequired,shouldAppendReadMoreLinkForDek:i().bool,shouldEnableBundleComponentAnalytics:i().bool,shouldHideBylines:i().bool,shouldHideDangerousDek:i().bool,summaryItemRubricVariation:i().string,trackingNamespace:i().object},k.displayName="SummaryCollectionSplitColumns";const S=(0,p.y)(k,"SummaryCollectionSplitColumns")},51257(e,t,n){"use strict";n.d(t,{A:()=>k,W:()=>C});var o=n(96540),i=n(5556),a=n.n(i),r=n(32485),s=n.n(r),l=n(31989),d=n(76399),c=n(73730),m=n(49741),p=n(38080),u=n(31581),g=n(36185),h=n(13465),y=n(34967),b=n(60824);const w=()=>window.Kendra?.ADS??null,f=new URLSearchParams(window.location.search);function v(e){const t=e.replace(/.*\.(.*)$/,"$1");return parseInt(t.split("x")[1],10)}let $=null;function A(){if($)return $;const e=document.querySelector('[class*="StickyHeroAdWrapper"]');if(!e)return null;if(e.closest(".one-nav"))return null;const t=e.querySelector(".ad.should-hold-space"),n=e.querySelector(".ad__slot.ad__slot--hero");if(!t||!n)return null;const o=parseInt(window.getComputedStyle(n).height,10)||60,i=parseInt(window.getComputedStyle(t).minHeight,10)||60;return $={adWrapper:t,wrapper:e,adSlot:n,minHeight:i,height:o},$}function C(e,t){const n=A();if(!n)return e;const{wrapper:o,minHeight:i,height:a,adWrapper:r}=n,s=o.classList.contains("ad-stickyhero-issticky"),l=Math.abs(i-a),d=Math.max(0,i-l);return s&&e&&t>i?(r.style.minHeight=`${a}px`,!1):s&&!e&&t<d?(r.style.minHeight=`${i}px`,!0):e}function x(e){const{className:t,configuredComponentRef:n,defaultCreativeHeightDesktop:i,defaultCreativeHeightMobile:a,holdAdHeightsConfig:{shoulHoldStickyHeroAd:r=!1}={},isNoAds:u,isStickyDisabledMobile:h,navVariation:y="",onFilled:C,setIsHeroAdVisible:x}=e,[k,S]=(0,o.useState)(!1),[T,E]=(0,o.useState)(!1),[D,L]=(0,o.useState)(!1),[N,B]=(0,o.useState)(250),R=(0,o.useRef)(!1),I=(0,o.useRef)([]),M=(0,o.useRef)(null),O=(0,o.useRef)(null),H=(0,o.useRef)(null),_=(0,o.useRef)(null),K=(0,o.useRef)(null),q=(0,o.useRef)(null),F=(0,o.useRef)(null),V=(0,o.useRef)(null),P="sticky-hero"===f?.get("test")||r,W=(0,o.useRef)(!1),G=(0,o.useCallback)(()=>{I.current.forEach(e=>e?.off?.()),I.current=[],M.current?.(),O.current?.(),H.current?.(),_.current?.(),K.current&&(clearTimeout(K.current),K.current=null),q.current&&(clearTimeout(q.current),q.current=null),F.current&&(clearTimeout(F.current),F.current=null),V.current&&(clearTimeout(V.current),V.current=null)},[]),U=(0,o.useCallback)(()=>{G(),E(e=>{if(!e)return e;const t=A();if(t){const{adWrapper:e,minHeight:n}=t;e.style.minHeight=`${n}px`}return B(e=>(window.pageYOffset<e/2?(L(!1),S(!1),x?.(!1)):(x?.(!1),q.current=setTimeout(()=>{L(!1),S(!1),x?.(!1)},1e3)),e)),!1})},[G,x]),j=(0,o.useCallback)(()=>{const e=w();if(P){if(e){const t=e.on(b.c.LIBRARY_SLOT_RENDER_ENDED_EMPTY,e=>{"hero_0"===e.slotElementId&&U()});I.current.push(t)}else window.cnBus&&(H.current=window.cnBus.on("#.hero_0.empty",()=>{U()}));window.cnBus&&(_.current=window.cnBus.on("cnePlayer.stickyVideo.activated",()=>{U()}))}else{K.current=setTimeout(()=>U(),3e4);const t=()=>{V.current=setTimeout(()=>{R.current||U()},2e3)};if(e){const n=e.on(b.c.LIBRARY_STICKY_HERO_IMPRESSION_VIEWABLE,t);I.current.push(n)}else window.cnBus&&(O.current=window.cnBus.on("ads.stickyBanner.hero.impressionViewable",t))}},[P,U]),z=(0,o.useCallback)(e=>{S(!0),B(e),x?.(!0),F.current=setTimeout(()=>{L(!0),E(!0),j()},1e3)},[x,j]),Y=(0,o.useCallback)(e=>{let t,n;if(e?.size)t=e.size[1]??250,n=e.size[0]??0;else{const[[e]]=window.cnBus.history("ads.stickyBanner.hero.slotRenderEnded.#");t=v(e);const o=e.replace(/.*\.(.*)$/,"$1");n=parseInt(o.split("x")[0],10)||0}let o=t;if($?.adWrapper){if(1===t&&n>0){o=$.adWrapper.offsetWidth/n}$.height=Math.round(o)}z(t)},[z]),Z=(0,o.useCallback)(()=>{R.current=!0},[]);(0,o.useEffect)(()=>{if(W.current)return;W.current=!0;const e=w();if(e){const t=e.history().filter(e=>e.channel===b.c.LIBRARY_STICKY_HERO_RENDER_ENDED);if(0===t.length){const t=e.on(b.c.LIBRARY_STICKY_HERO_RENDER_ENDED,Y);I.current.push(t)}else{const e=t[0].value,n=e.size?.[1]??250;B(n),S(!0),E(!0),j(),x?.(!0)}}else if(window.cnBus?.history){const e=window.cnBus.history("ads.stickyBanner.hero.slotRenderEnded.#");if(0===e.length)M.current=window.cnBus.on("ads.stickyBanner.hero.slotRenderEnded.#",Y);else{const t=v(e[0][0]);B(t),S(!0),E(!0),j(),x?.(!0)}}},[Y,j,x]),(0,o.useEffect)(()=>()=>{G(),$=null},[G]);const X=y.toLowerCase().includes("withsearchbar"),Q=(0,o.useMemo)(()=>{if(k)return{"ad-stickyhero-issticky":!0,"ad-stickyhero-sticky-animating":D,[`ad-stickyhero-sticky-${N}`]:!T,"ad-stickyhero-sticky-visible":T}},[k,D,N,T]);return u?null:o.createElement(g.IO,{ref:n,className:s()(t,"ad-stickyhero",h?"ad-stickyhero-disable-mobile":"ad-stickyhero-enable-mobile",{"with-link-banner":y.toLowerCase().includes("linkbanner"),"with-searchbar":X},Q),"data-testid":"sticky-hero-ad",onMouseEnter:Z,onTouchStart:Z,defaultCreativeHeightDesktop:i,defaultCreativeHeightMobile:a},k&&T&&o.createElement(c.A.Utility,{isIconButton:!0,ButtonIcon:d.A,className:"ad-stickyhero-button",label:"Close",onClickHandler:U,role:"button","aria-expanded":d.A}),o.createElement(p.Z,{group:"ads"},o.createElement(l.A,{position:"hero",onFilled:C,shouldHoldSpace:!0})),o.createElement(p.Z,{group:"consumer-marketing"},o.createElement(m.A,{position:"display-hero"})))}x.propTypes={configuredComponentRef:a().func,defaultCreativeHeightDesktop:a().number,defaultCreativeHeightMobile:a().number,className:a().string,isNoAds:a().bool,isStickyDisabledMobile:a().bool,navVariation:a().string,onFilled:a().func,setIsHeroAdVisible:a().func,holdAdHeightsConfig:a().shape({shoulHoldStickyHeroAd:a().bool})},x.displayName="StickyHeroAd";const k=(0,y.A)((0,u.N)((0,h.y)(x,"StickyHeroAd")),{keysToPluck:["isNoAds","holdAdHeightsConfig"]})},72987(e,t,n){"use strict";n.d(t,{A:()=>u});var o=n(96540),i=n(5556),a=n.n(i),r=n(31989),s=n(38080),l=n(13465),d=n(36185),c=n(34967);const m={"300x250":500,"320x100":500,"300x50":500,"320x50":500},p=o.memo(e=>{const{configuredComponentRef:t,isNoAds:n,shouldHoldSpace:i}=e,a=e.config.adsConfig.enableStickyMidContent||!1,[l,c]=(0,o.useState)(),p=(0,o.useCallback)(e=>{c(e)},[]),u=a&&l&&2===l.length?`${l[0]}x${l[1]}`:"0x0";return n?null:o.createElement(d.P4,{ref:t,height:m[u]||null,className:"ad-stickymidcontent"},o.createElement(s.Z,{group:"ads"},o.createElement(r.A,{position:"mid-content",handleAdSizeChange:p,shouldDisplayLabel:!0,shouldHoldSpace:i,...e})))});p.propTypes={configuredComponentRef:a().func,config:a().object,isNoAds:a().bool,shouldHoldSpace:a().bool},p.displayName="StickyMidContent";const u=(0,c.A)((0,l.y)(p,"StickyMidContent"),{keysToPluck:["isNoAds"]})},36185(e,t,n){"use strict";n.d(t,{IO:()=>l,LP:()=>m,P4:()=>d,Vh:()=>c});var o=n(38267),i=n(96472),a=n(26865);const r={mobile:50,desktop:90},s=(e,t,n)=>e?.[t]?.[n]??r[n],l=o.Ay.div.withConfig({displayName:"StickyHeroAdWrapper"})`
  padding-top: ${(0,a.Kq)(1,"px")};
  padding-bottom: ${(0,a.Kq)(1,"px")};
  width: 100%;

  .icon-close {
    padding: 8px;
  }
`,d=o.Ay.div.withConfig({displayName:"StickyMidContentAdWrapper"})`
  /* Only apply height on mobile/tablet where sticky positioning is active */
  ${({height:e})=>e&&`\n    ${(0,a.L7)(i.LO.md)} {\n      height: ${e}px;\n    }\n  `}
`,c=o.Ay.div.withConfig({displayName:"AdWrapper"})`
  &.ad {
    &.should-hold-space {
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: ${({holdAdHeightsConfig:e,position:t})=>s(e,t,"mobile")}px;

      ${(0,a.H4)(i.LO.md)} {
        min-height: ${({holdAdHeightsConfig:e,position:t})=>s(e,t,"desktop")}px;
      }
    }

    ${({collapse:e})=>e&&"\n      &, &.should-hold-space {\n        display: none;\n      }\n    "}
  }
`,m=o.Ay.div.withConfig({displayName:"AdsSpacer"})`
  padding-top: var(--header-height, ${(0,a.Kq)(7,"px")});
`},99407(e,t,n){"use strict";n.d(t,{M:()=>l});var o=n(96540),i=n(5556),a=n.n(i),r=n(53499);const s=({accountId:e})=>(o.useEffect(()=>{window.Kendra.TRACK_COMPONENT.broadcast(r.G.RENDER,{name:"BeopScript"})},[]),o.createElement(o.Fragment,null,o.createElement("script",{id:"beop-script",className:"optanon-category-C0004",type:"text/plain","data-testid":"beop-script",dangerouslySetInnerHTML:{__html:`window.beOpAsyncInit = function () {\n                      window.BeOpSDK.init({\n                        account: '${e}'\n                      });\n                      window.BeOpSDK.watch();\n                  };`}}),o.createElement("script",{id:"beop-sdk",async:!0,src:"https://widget.beop.io/sdk.js"})));s.propTypes={accountId:a().string.isRequired};const l=s},69741(e,t,n){"use strict";n.d(t,{dX:()=>b,tZ:()=>y});var o=n(38267),i=n(26865),a=n(96472),r=n(18730);const{timingButtonDefault:s}=a.L6,l=(0,i.Kq)(3),d=({selectionControlBackgroundColor:e,selectionControlBorderColor:t,selectionControlSize:n})=>o.AH`
    transition-property: background, border;
    transition-duration: ${s};
    transition-timing-function: ease-in;
    position: relative;
    border-width: 1px;
    border-style: solid;
    ${({theme:e})=>(0,i._o)(e,"border-color",t)};
    ${({theme:t})=>(0,i._o)(t,"background-color",e)};
    width: ${n};
    height: ${n};
    pointer-events: none;

    &::before {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transition-property: background, border;
      transition-duration: ${s};
      transition-timing-function: ease-in;
      opacity: 0;
      content: '';
    }
  `,c=o.Ay.div.withConfig({displayName:"DiscoverySelectionControlStyledCheckbox"})`
  ${d({selectionControlBackgroundColor:"colors.interactive.base.white",selectionControlBorderColor:"colors.interactive.base.black",selectionControlSize:l})}

  &::before {
    ${(({checkboxIconBorderWidth:e,checkboxIconColor:t})=>o.AH`
    transform: translate(-50%, -60%) rotate(45deg);
    border-width: 0 ${e} ${e} 0;
    border-style: solid;
    ${({theme:e})=>(0,i._o)(e,"border-color",t)};
    width: 25%;
    height: 75%;
  `)({checkboxIconBorderWidth:"2px",checkboxIconColor:"colors.interactive.base.white"})}
  }
`,m=o.Ay.div.withConfig({displayName:"DiscoverySelectionControlStyledRadio"})`
  ${d({selectionControlBackgroundColor:"colors.interactive.base.white",selectionControlBorderColor:"colors.interactive.base.black",selectionControlSize:l})}

  border-radius: 100%;

  &::before {
    ${({theme:e})=>(({radioIconColor:e,theme:t})=>`\n    border-radius: 100%;\n    transform: translate(-50%, -50%);\n    border-radius: 100%;\n    ${(0,i._o)(t,"border-color",e)};\n    width: 50%;\n    height: 50%;\n  `)({radioIconColor:"colors.interactive.base.black",theme:e})}
  }
`,p=({theme:e})=>o.AH`
    ${(({selectionControlBackgroundColor:e,theme:t})=>`\n    &:checked,\n    &:active {\n      + ${m}::before {\n        opacity: 1;\n      }\n      + ${c} {\n        &::before {\n          opacity: 1;\n        }\n        ${(0,i._o)(t,"border-color","colors.interactive.base.brand-primary")};\n        ${(0,i._o)(t,"background-color",e)};\n      }\n    }\n\n    &:disabled {\n      + ${m},\n        + ${c} {\n        ${(0,i._o)(t,"border-color","colors.interactive.base.light")};\n      }\n    }\n\n    &:disabled:checked {\n      + ${c} {\n        ${(0,i._o)(t,"background-color","colors.interactive.base.light")};\n\n      + ${m}::before {\n        ${(0,i._o)(t,"background-color","colors.interactive.base.light")};\n      }\n    }\n  `)({selectionControlBackgroundColor:"colors.interactive.base.brand-primary",theme:e})}
  `,u=({theme:e})=>o.AH`
    cursor: default;
    pointer-events: none;
    ${(0,i._o)(e,"color","colors.interactive.base.light")};
  `,g=o.Ay.input.withConfig({displayName:"DiscoverySelectionControlNativeRadio"})`
  ${({theme:e})=>p({theme:e})}
`,h=o.Ay.input.withConfig({displayName:"DiscoverySelectionControlNativeCheckbox"})`
  ${({theme:e})=>p({theme:e})}
`,y=o.Ay.label.withConfig({displayName:"DiscoverySelectionControlLabelWrapper"})`
  display: grid;
  position: relative;
  grid-column-gap: ${(0,i.Kq)(2)};
  grid-template-columns: ${l} auto;
  grid-row-gap: ${(0,i.Kq)(.5)};

  @media (min-width: ${a.LO.md}) {
    grid-column-gap: ${(0,i.Kq)(2)};
    grid-row-gap: ${(0,i.Kq)(1)};
  }

  &:hover {
    ${c} {
      ${({theme:e})=>(0,i._o)(e,"border-color","colors.interactive.base.brand-primary")};
    }

    ${m} {
      ${({theme:e})=>(0,i._o)(e,"border-color","colors.interactive.base.brand-primary")};
    }

    ${h}:checked + ${c} {
      ${({theme:e})=>(0,i._o)(e,"background","colors.interactive.base.black")};
      ${({theme:e})=>(0,i._o)(e,"border-color","colors.interactive.base.black")};
    }

    ${g}:checked + ${m} {
      ${({theme:e})=>(0,i._o)(e,"background","colors.interactive.base.white")};
    }
  }

  ${({isDisabled:e,theme:t})=>e&&u({theme:t})};
`,b=((0,o.Ay)(r.v).withConfig({displayName:"DiscoverySelectionControlContext"}).attrs(e=>({as:"div",colorToken:"colors.discovery.body.white.description",typeIdentity:"typography.definitions.globalEditorial.context-primary",...e}))`
  ${({theme:e,typeIdentity:t})=>(0,i.Gg)(e,t)}
  grid-column-start: 2;
  margin-bottom: ${(0,i.Kq)(.5)};
  ${({theme:e,colorToken:t})=>(0,i._o)(e,"color",t)};
  ${({isDisabled:e,theme:t})=>e&&u({theme:t})};
  @media (min-width: ${a.LO.md}) {
    margin-bottom: 0;
  }
`,(0,o.Ay)(r.v).withConfig({displayName:"DiscoverySelectionControlHed"}).attrs(e=>({as:"span",colorToken:"colors.discovery.body.white.heading",typeIdentity:"typography.definitions.discovery.hed-core-secondary",...e}))`
  ${({theme:e,typeIdentity:t})=>(0,i.Gg)(e,t)}
  ${({theme:e,colorToken:t})=>(0,i._o)(e,"color",t)};
  ${({isDisabled:e,theme:t})=>e&&u({theme:t})};
`);(0,o.Ay)(r.v).withConfig({displayName:"DiscoverySelectionControlDek"}).attrs(e=>({as:"span",colorToken:"colors.discovery.body.white.description",typeIdentity:"typography.definitions.discovery.description-core",...e}))`
  ${({theme:e,typeIdentity:t})=>(0,i.Gg)(e,t)}
  ${({theme:e,colorToken:t})=>(0,i._o)(e,"color",t)};
  grid-column-start: 2;
  ${({isDisabled:e,theme:t})=>e&&u({theme:t})};
`},79499(e,t,n){"use strict";n.d(t,{Ay:()=>d});var o=n(29421);const{MultipleSelect:i}=o.A,{MultipleSelectSearchableWithMenuControls:a}=o.A,{MultipleSelectWithMenuControls:r}=o.A,{Searchable:s}=o.A,{Static:l}=o.A,d=o.A},62930(e,t,n){"use strict";n.d(t,{Ay:()=>a,jl:()=>o.A});var o=n(32272),i=n(13644);const a={Circle:o.A,Vogue:i.A}},90713(e,t,n){"use strict";n.d(t,{A:()=>c});var o=n(5556),i=n.n(o),a=n(96540),r=n(7307),s=n(45102),l=n(53499);const d=e=>{a.useEffect(()=>{window.Kendra.TRACK_COMPONENT.broadcast(l.G.RENDER,{name:"PaywallCollaborator"})},[]);const{component:t,name:n,paywall:o,...i}=e,d=r.A[o.strategy],c=o.strategy&&d,m=d&&d.names.includes(n);return c&&m?a.createElement(t,{...s.A.execute(d,e)}):a.createElement(t,{...i})};d.propTypes={component:i().func.isRequired,name:i().string.isRequired,payment:i().object.isRequired,paywall:i().object.isRequired};const c=d},92124(e,t,n){"use strict";n.d(t,{Nb:()=>s,T7:()=>o,rU:()=>a,v9:()=>r});const o={TOP:"top",MIDDLE:"middle",BOTTOM:"bottom",ALL:"all"},i=(e,t)=>e===t||e===o.ALL,a=e=>i(e,o.TOP),r=e=>i(e,o.MIDDLE),s=e=>i(e,o.BOTTOM)},55918(e,t,n){"use strict";n.d(t,{Ze:()=>i.Z});var o=n(57743),i=n(39836);o.u,i.Z},89738(e,t,n){"use strict";n.r(t),n.d(t,{deepPropsComparison:()=>s,getDisplayName:()=>a});var o=n(29132),i=n.n(o);function a(e){let t=e.displayName||e.name;return t||(t=""),t}function r(e,t){if("function"==typeof e&&"function"==typeof t)return!0}const s=(e={},t={})=>i()(e,t,r)},10927(e,t,n){"use strict";n.d(t,{A:()=>r});var o=n(96540),i=n(55364),a=n.n(i);const r=(e,t="browser")=>{const n=e.displayName||e.name;class i extends o.Component{constructor(){super(),this.render=()=>{const n={[t]:{incognitoMode:this.state.incognitoDetected}},i=a()({},this.props,n);return o.createElement(e,{...i})},this.state={incognitoDetected:!1}}componentDidMount(){this.updateIncognitoDetectedState()}componentWillUnmount(){this.unbindChannel&&this.unbindChannel()}listenForIncognitoDetectionEvents(){window.cnBus&&window.cnBus.on&&(this.unbindChannel=window.cnBus.on("ads.environment.incognito.detected.#",()=>{this.setState({incognitoDetected:!0})}))}updateIncognitoDetectedState(){window.cnBus&&window.cnBus.history&&Boolean(window.cnBus.history("ads.environment.incognito.detected.#").length)?this.setState({incognitoDetected:!0}):this.listenForIncognitoDetectionEvents()}}return i.displayName=`withIncognitoDetection(${n})`,i}},45516(e,t,n){"use strict";n.d(t,{A:()=>l});var o=n(96540),i=n(5556),a=n.n(i),r=n(55364),s=n.n(r);const l=(e,t)=>(n,i="mutation")=>{const r=n.displayName||n.name,l={window:t||window};class d extends o.Component{constructor(t){super(t),this.updateMutation=e=>{const t=e.querySelectorAll(":not(div)").length>0;this.setState({hasBeenInjected:t})},this.render=()=>{const e={[i]:{[this.element.name]:this.state.hasBeenInjected}},t=s()({},this.props,e);return o.createElement(n,{...t})},this.state={hasBeenInjected:!1},this.element=t.element||e}componentDidMount(){this.attachObserver()}componentDidUpdate(t){t.element!==this.props.element&&(this.element=this.props.element||e,this.detachObserver(),this.attachObserver())}componentWillUnmount(){this.detachObserver()}attachObserver(){const e=l.window.document.querySelectorAll(`.${this.element.className}, .${this.element.className} .consumer-marketing-unit__slot + div`);if(0===e.length)return void(this.retryTimer=setTimeout(this.attachObserver.bind(this),500));e.forEach(e=>{this.updateMutation(e),this.observer=new l.window.MutationObserver(()=>this.updateMutation(e)),this.observer.observe(e,{childList:!0,subtree:!0})})}detachObserver(){this.retryTimer&&clearTimeout(this.retryTimer),this.observer&&this.observer.disconnect()}}return d.displayName=`withMutationState(${r})`,d.propTypes={element:a().shape({name:a().string,className:a().string})},d}},68545(e,t,n){"use strict";n.d(t,{A:()=>l});var o=n(96540),i=n(5556),a=n.n(i),r=n(55364),s=n.n(r);const l=(e,t)=>(n,i="visibility")=>{const r=n.displayName||n.name,l={window:t||window};class d extends o.Component{constructor(t){super(t),this.updateVisibility=e=>{const[{isIntersecting:t,isVisible:n}]=e,o=t&&(void 0===n||n);this.state.isVisible!==o&&this.setState({isVisible:o})},this.render=()=>{const e={[i]:{[this.element.name]:this.state.isVisible}},t=s()({},this.props,e);return o.createElement(n,{...t})},this.state={isVisible:!1},this.element=t.element||e}componentDidMount(){this.attachObserver()}componentDidUpdate(t){t.element!==this.props.element&&(this.element=this.props.element||e,this.detachObserver(),this.attachObserver())}componentWillUnmount(){this.detachObserver()}attachObserver(){const e=l.window.document.querySelector(`.${this.element.className}`);e?(this.observer=new l.window.IntersectionObserver(this.updateVisibility,{threshold:[.001,.999],trackVisibility:!0,delay:100}),this.observer.observe(e)):this.retryTimer=setTimeout(this.attachObserver.bind(this),500)}detachObserver(){this.retryTimer&&clearTimeout(this.retryTimer),this.observer&&this.observer.disconnect()}}return d.displayName=`withVisibilityState(${r})`,d.propTypes={element:a().shape({name:a().string,className:a().string})},d}},57744(e,t,n){"use strict";n.d(t,{M3:()=>r.A,Tk:()=>o.A,ro:()=>i.A,z5:()=>a.A});var o=n(82407),i=n(26410),a=(n(79810),n(27543)),r=n(34967)},70251(e,t,n){"use strict";n.d(t,{w:()=>r});var o=n(38221),i=n.n(o),a=n(84279);const r=(e,t=300)=>(0,a.G)("resize",e,i(),t)},99623(e,t,n){"use strict";n.d(t,{N:()=>i});var o=n(14307);const i=(e,t,n="",i="click",a=void 0,r=void 0,s=void 0)=>{const l=(e=>{if(!e||void 0===document)return null;const t=document.getElementById(e),n=(t?t.offsetTop:0)/Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);return n<=.33?"top":n<=.66?"middle":"bottom"})(a),d={items:[{content_title:t,content_url:e}],label:t,subject:n,type:i,index:r,placement:l||s};(0,o.kg)(d)}},62997(e,t,n){"use strict";n.d(t,{Ch:()=>a,O3:()=>r,ev:()=>i,pD:()=>o});const o={"airfoil-assets.condenastdigital.com":{sandbox:["allow-same-origin","allow-popups","allow-popups-to-escape-sandbox"]},"assets.pinterest.com":{sandbox:["allow-scripts","allow-popups"]},"audm.herokuapp.com":{consent:!1,sandbox:["allow-same-origin","allow-popups"]},"bandcamp.com":{sandbox:["allow-same-origin","allow-popups"]},"bizzabo.com":{sandbox:["allow-same-origin","allow-popups"]},"blingby.com":{sandbox:["allow-same-origin"]},"codepen.io":{sandbox:["allow-same-origin"]},"conde-nast.msgfocus.com":{sandbox:["allow-forms","allow-same-origin","allow-popups"]},"condenast.jotform.com":{sandbox:["allow-forms","allow-popups","allow-top-navigation"]},"dailymotion.com":{sandbox:["allow-same-origin"]},"datawrapper.dwcdn.net":{sandbox:["allow-same-origin"]},"docs.google.com":{sandbox:["allow-forms"]},"documentcloud.org":{sandbox:["allow-popups"]},"elevenlabs.io":{sandbox:["allow-same-origin"]},"embed.music.apple.com":{sandbox:["allow-scripts","allow-forms","allow-popups","allow-same-origin","allow-storage-access-by-user-activation","allow-top-navigation-by-user-activation"]},"embed.podcasts.apple.com":{sandbox:["allow-scripts","allow-forms","allow-popups","allow-same-origin","allow-storage-access-by-user-activation","allow-top-navigation-by-user-activation"]},"embed.ted.com":{sandbox:["allow-scripts","allow-same-origin"]},"eventbrite.it":{sandbox:["allow-scripts","allow-same-origin"]},"eventbrite.com":{sandbox:["allow-scripts","allow-same-origin"]},"facebook.com":{sandbox:["allow-same-origin"]},"flourish.studio":{sandbox:["allow-same-origin"]},"form.jotform.com":{sandbox:["allow-forms"]},"fw.tv":{sandbox:["allow-same-origin"]},"giphy.com":{sandbox:["allow-same-origin"]},"google.com":{sandbox:["allow-popups"]},"iheart.com":{sandbox:["allow-same-origin"]},"infogram.com":{sandbox:["allow-same-origin"]},"interactives.ap.org":{sandbox:["allow-same-origin","allow-scripts"]},"interactive.vanityfair.com":{sandbox:["allow-scripts","allow-same-origin"]},"interactive-stag.vanityfair.com":{sandbox:["allow-scripts","allow-same-origin"]},"knotch-cdn.com":{sandbox:["allow-same-origin","allow-popups","allow-popups-to-escape-sandbox"]},"labs.vogue.es":{sandbox:["allow-same-origin","allow-popups","allow-popups-to-escape-sandbox","allow-forms","allow-top-navigation"]},"link.gq-magazin.de":{sandbox:["allow-forms","allow-scripts","allow-modals","allow-same-origin"]},"link.vogue.de":{sandbox:["allow-forms","allow-scripts","allow-modals","allow-same-origin"]},"link.glamour.de":{sandbox:["allow-forms","allow-scripts","allow-modals","allow-same-origin"]},"link.ad-magazin.de":{sandbox:["allow-forms","allow-scripts","allow-modals","allow-same-origin"]},"link.gqmagazine.fr":{sandbox:["allow-modals","allow-forms","allow-popups","allow-same-origin"]},"link.admagazine.fr":{sandbox:["allow-modals","allow-forms","allow-popups","allow-same-origin"]},"link.vanityfair.fr":{sandbox:["allow-modals","allow-forms"]},"link.vogue.fr":{sandbox:["allow-forms","allow-scripts","allow-same-origin"]},"link.vogue.it":{sandbox:["allow-forms"]},"livescale.tv":{sandbox:["allow-same-origin"]},"media.mtvnservices.com":{sandbox:["allow-same-origin"]},"megaphone.fm":{sandbox:["allow-popups","allow-same-origin"]},"mixcloud.com":{sandbox:["allow-same-origin"]},"newyorker.com":{sandbox:["allow-same-origin"]},"platform.livex.tv":{sandbox:["allow-scripts","allow-same-origin"]},"player.spokenlayer.net":{sandbox:["allow-same-origin"]},"player.vimeo.com":{sandbox:["allow-popups","allow-same-origin","allow-scripts","allow-top-navigation-by-user-activation"]},"redditmedia.com":{sandbox:["allow-same-origin","allow-popups"]},"sber-zvuk.com":{sandbox:["allow-same-origin","allow-storage-access-by-user-activation"]},"sdqk.me":{sandbox:["allow-same-origin","allow-popups"]},"sketchfab.com":{sandbox:["allow-same-origin"]},"soundcloud.com":{sandbox:["allow-same-origin"]},"spreaker.com":{sandbox:["allow-same-origin"]},"st.avsplow.com":{sandbox:["allow-scripts","allow-same-origin"]},"static.condenast.ru":{sandbox:["allow-popups","allow-same-origin"]},"curiosity.condenast.ru":{sandbox:["allow-scripts","allow-same-origin"]},"curiosity.admagazine.ru":{sandbox:["allow-scripts","allow-same-origin"]},"surveygizmo.com":{sandbox:["allow-same-origin"]},"sutori.com":{sandbox:["allow-same-origin"]},"tableau.com":{sandbox:["allow-same-origin"]},"threedium.co.uk":{consent:!1,sandbox:["allow-same-origin"]},"tiktok.com":{sandbox:["allow-same-origin"]},"top-fwz1.mail.ru":{sandbox:["allow-same-origin"]},"tp.media":{sandbox:["allow-popups"]},"travelpayouts.com":{sandbox:["allow-scripts","allow-popups","allow-forms","allow-same-origin"]},"trinket.io":{sandbox:["allow-same-origin"]},"typeform.com":{sandbox:["allow-same-origin","allow-scripts","allow-top-navigation","allow-popups","allow-top-navigation-by-user-activation"]},"twitch.tv":{sandbox:["allow-popups","allow-same-origin"]},"twitter.com":{sandbox:["allow-same-origin"]},"vero.co":{sandbox:["allow-popups","allow-same-origin"]},"vevo.com":{sandbox:["allow-same-origin"]},"vk.com":{sandbox:["allow-popups","allow-same-origin","allow-storage-access-by-user-activation"]},"voguebusiness.com":{sandbox:["allow-same-origin"]},"wikimedia.org":{sandbox:["allow-same-origin"]},"wnyc.org":{consent:!1,sandbox:["allow-same-origin","allow-scripts"]},"woobox.com":{sandbox:["allow-scripts","allow-forms"]},"yandex.ru":{sandbox:["allow-same-origin"]},"youtu.be":{sandbox:["allow-scripts","allow-popups","allow-same-origin","allow-presentation","allow-popups-to-escape-sandbox"]},"youtube.com":{sandbox:["allow-scripts","allow-popups","allow-same-origin","allow-presentation","allow-popups-to-escape-sandbox"]},"youtube-nocookie.com":{sandbox:["allow-scripts","allow-popups","allow-same-origin","allow-presentation","allow-popups-to-escape-sandbox"]},"zoom.us":{sandbox:["allow-same-origin"]},"condenast.formstack.com":{sandbox:["allow-scripts","allow-forms"]}},i=["spotify.com","wirewax.com"],a=new Set(["strictlyNecessary","performance","functional","targeting","socialMedia"]),r="targeting"},70697(e,t,n){"use strict";n.d(t,{C:()=>l});var o=n(96540),i=n(38267),a=n(62930),r=n(96472),s=n(26865);function l({showExperimentPlaceholder:e,renderHeader:t,isGBReady:n}){return e?n?t():o.createElement(c,null,o.createElement(a.jl,null)):t()}const d=i.Ay.div.withConfig({displayName:"PlaceholderWrapper"})`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  min-height: ${({minHeight:e})=>e}px;
  ${(0,s.H4)(r.LO.lg)} {
    min-height: 90vh;
  }
`,c=({minHeight:e="700",children:t=null})=>o.createElement(d,{minHeight:e},t)},27669(e,t,n){"use strict";n.d(t,{w:()=>G});var o,i,a,r=n(96540),s=n(51054),l=n(38267),d=n(73275),c=n(26865),m=n(96472),p=n(65087),u=n(7228),g=n(15384),h=n(74423);!function(e){e.ASSET_TOP="AssetTop",e.ASSET_BOTTOM="AssetBottom",e.ASSET_LEFT="AssetLeft",e.ASSET_RIGHT="AssetRight",e.ASSET_OVERLAY="AssetOverlay",e.NO_ASSET="NoAsset"}(o||(o={})),function(e){e.LEFT="left",e.CENTER="center",e.RIGHT="right"}(i||(i={})),function(e){e.TOP="start",e.MIDDLE="center",e.BOTTOM="end"}(a||(a={}));const y=e=>{switch(e){case"right":return l.AH`
  text-align: right;

  ${N} {
    text-align: right;

    > * {
      text-align: right;
    }
  }

  ${h.f9} {
    text-align: right;
  }

  ${g.m} {
    text-align: right;
  }

  ${C}, ${S} {
    text-align: right;

    > * {
      text-align: right;
    }
  }
`;case"left":return l.AH`
  text-align: left;

  ${N} {
    > * {
      text-align: left;
    }
  }

  ${h.f9} {
    text-align: left;
  }

  ${g.m} {
    text-align: left;
  }

  ${C}, ${S} {
    text-align: left;
  }
`;case"center":return"text-align: center;";default:return""}},b=e=>"center"===e.textAlign?l.AH`
        ${(0,c.H4)(m.LO.md)} {
          ${x}, ${k}, ${g.m} {
            max-width: calc((100% / 12) * 6);
            margin-left: auto;
            margin-right: auto;
          }
        }
      `:"";const w={AssetTop:e=>l.AH`
  ${T} {
    padding: 3rem;
  }

  ${({fullBleed:e})=>e&&`\n      ${T} {\n        padding: 0;\n      }\n    `}

  ${y(e.alignment.textAlign)}
  ${b(e.alignment)}
  
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'lede-wrapper'
    'caption-wrapper'
    'text-wrapper';

  ${$} {
    padding: 2.5rem 3rem 0 3rem;
    &[class*=' theme-'] {
      padding-bottom: 2.5rem;
    }
  }

  ${T} {
    height: auto;
  }
`,AssetBottom:e=>l.AH`
  ${T} {
    padding: 0 3rem 0 3rem;
  }

  ${({fullBleed:e})=>e&&`\n      ${T} {\n        padding: 0;\n      }\n    `}

  ${y(e.alignment.textAlign)}
  ${b(e.alignment)}

  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'text-wrapper'
    'lede-wrapper'
    'caption-wrapper';

  ${$} {
    padding: 2.5rem 3rem;
  }

  ${A} {
    padding-bottom: 1rem;
  }

  ${T} {
    height: auto;
  }
`,AssetLeft:e=>l.AH`
  ${y(e.alignment.textAlign)}
  ${(0,c.H4)(m.LO.xl)} {
    ${({fullBleed:e})=>!e&&`\n      ${T} {\n        padding: 3rem 0 3rem 3rem;\n      }\n    `}

    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr max-content;
    grid-template-areas:
      'lede-wrapper text-wrapper'
      'caption-wrapper caption-wrapper';

    ${$} {
      justify-content: center;
    }
  }
`,AssetRight:e=>l.AH`
  ${y(e.alignment.textAlign)}
  ${(0,c.H4)(m.LO.xl)} {
    ${({fullBleed:e})=>!e&&`\n      ${T} {\n        padding: 3rem 3rem 3rem 0;\n      }\n    `}

    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr max-content;
    grid-template-areas:
      'text-wrapper lede-wrapper'
      'caption-wrapper caption-wrapper';

    ${$} {
      justify-content: center;
    }
  }
`,AssetOverlay:e=>l.AH`
  ${y(e.alignment.textAlign)}
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: 1fr;

  ${T} {
    height: auto;
    grid-row: 1;
    grid-column: 1;
    text-align: center;
  }

  ${$} {
    background: linear-gradient(
      ${({alignment:e})=>function(e){switch(e){case a.BOTTOM:case a.MIDDLE:return"to top";case a.TOP:return"to bottom";default:return""}}(e.justifyContent)},
      rgba(0, 0, 0, 0.85) 0px,
      transparent 100%
    );
    justify-content: ${e.alignment.justifyContent??a.MIDDLE};
    grid-row: 1;
    grid-column: 1;
    z-index: 1;
  }

  ${A} {
    grid-row: 2;
    grid-column: 1;
  }
`,NoAsset:e=>l.AH`
  ${(0,c.H4)(m.LO.lg)} {
    height: auto;
  }
  ${y(e.alignment.textAlign)}
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas: 'text-wrapper';
  ${$} {
    padding: 2.5rem 3rem 2.5rem 3rem;
  }
`};var f=n(75163);const v=l.Ay.div.withConfig({displayName:"OneCoverWrapper"})`
  a:not(.${f.pT.Component.BylineLink.split(" ").join(".")}) {
    color: var(${f.pT.Color.TextLink});
  }
  a:not(.${f.pT.Component.BylineLink.split(" ").join(".")}):hover {
    color: var(${f.pT.Color.TextAccent});
  }

  text-align: center;

  /* CLS fix: Prevent layout containment */
  contain: layout;

  ${(0,c.H4)(m.LO.xl)} {
    display: grid;
    width: 100%;
  }
  min-height: fit-content;
  max-height: fit-content;

  ${e=>w[e.$variation]({alignment:e.alignment,fullBleed:e.fullBleed})};
`,$=l.Ay.div.withConfig({displayName:"OneCoverTextWrapper"})`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: ${(0,c.Kq)(3)};
  background: var(--color-surface);
  color: var(--color-text);

  grid-area: text-wrapper;

  /* CLS fix: Prevent layout shifts */
  contain: layout;

  ${(0,c.H4)(m.LO.xl)} {
    padding: 3rem;
  }
`,A=l.Ay.div.withConfig({displayName:"OneCoverCaptionWrapper"})`
  grid-area: caption-wrapper;
  text-align: left;
  padding: 1rem 1.5rem 0 1.5rem;
  border-top: 1px solid var(${f.pT.Color.BorderStory});
  background: var(${f.pT.Color.Surface});
  color: var(${f.pT.Color.Text});

  ${(0,c.H4)(m.LO.lg)} {
    padding: 1rem 3rem 0 3rem;
  }
`,C=l.Ay.time.withConfig({displayName:"OneCoverPublishDate"})`
  width: 100%;
  color: var(${f.pT.Color.TextPubdate});
  ${(0,c.Gg)("typography.definitions.globalEditorial.context-tertiary")}
`,x=l.Ay.h1.withConfig({displayName:"OneCoverHed"})`
  padding: 1rem 0;
  margin: 0;
  width: 100%;

  ${(0,c.Gg)("typography.definitions.consumptionEditorial.hed-standard")}

  color: var(${f.pT.Color.TextHeading});
`,k=l.Ay.p.withConfig({displayName:"OneCoverDek"})`
  padding-bottom: 1rem;
  margin: 0;
  width: 100%;

  ${(0,c.Gg)("typography.definitions.consumptionEditorial.description-core")}

  color: var(${f.pT.Color.TextDek});
`,S=l.Ay.span.withConfig({displayName:"OneCoverRubric"})`
  width: 100%;

  ${(0,c.Gg)("typography.definitions.globalEditorial.context-primary")}

  color: var(${f.pT.Color.TextRubric});
`,T=l.Ay.div.withConfig({displayName:"OneCoverLedeWrapper"})`
  grid-area: lede-wrapper;
  background: var(${f.pT.Color.Surface});
  color: var(${f.pT.Color.Text});
`,E=(0,l.Ay)(d.A).withConfig({displayName:"OneCoverLede"})`
  img {
    width: 100%;
  }
  ${(0,c.H4)(m.LO.lg)} {
    height: 100%;
    ${u.BF} {
      height: 100%;
      object-fit: cover;
    }
  }
`,D=l.Ay.div.withConfig({displayName:"OneCoverCaptionText"})`
  ${(0,c.Gg)("typography.definitions.globalEditorial.context-secondary")}
`,L=l.Ay.div.withConfig({displayName:"OneCoverCaptionCredit"})`
  ${(0,c.Gg)("typography.definitions.globalEditorial.context-tertiary")}

  color: var(${f.pT.Color.TextImageCredit});
`,N=(0,l.Ay)(p.A).withConfig({displayName:"OneCoverBylines"})`
  padding-bottom: 0.5rem;
  width: 100%;
`;var B=n(52009),R=n(7350),I=n.n(R),M=n(55058),O=n(82511);var H=n(41598),_=n(90239),K=n(32485),q=n.n(K);const F=({oneCoverContent:e,oneCoverConfig:t,featuredDeal:n})=>{const{dangerousHed:i,dangerousDek:a,lede:l={altText:"",caption:"",credit:"",sources:{}},rubric:d,publishDate:c,contributors:m,theme:p={}}=e,{controls:u,alignment:g={},variation:h=o.ASSET_BOTTOM,fullBleed:y=!1}=t??{},b=l?h:o.NO_ASSET,{hideRubric:w=!1,hideHed:f=!1,hideDek:R=!1,hideBylines:K=!1,hidePublishDate:F=!1}=u??{},V=(0,r.useRef)(null);((e,t)=>{(0,O.A)(()=>{if(!e.current)return()=>{};if(!(window.innerWidth>=M.Vh.xl))return()=>{};if(!["AssetLeft","AssetRight"].includes(t))return()=>{};const n=document.querySelector("header");if(!n)return()=>{};let o=n.getBoundingClientRect().height;const i=()=>{if(e.current){const t=window.innerHeight-o;e.current.style.height=`${t}px`}};i();let a=null;"undefined"!=typeof ResizeObserver&&(a=new ResizeObserver(e=>{o=e[0].contentRect.height,i()}),a.observe(n));const r=I()(()=>{window.innerWidth>=M.Vh.xl&&(a||(o=n.getBoundingClientRect().height),i())},150,{leading:!0,trailing:!0});return window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r),r.cancel(),a&&a.disconnect()}},[t,e])})(V,b);const P=l?.sources?(0,B.I)(l.sources):null,W=Boolean(l&&(l.caption||l.credit)),G=Boolean(l&&b!==o.NO_ASSET),U=(0,r.useMemo)(()=>h===o.ASSET_OVERLAY?{art:"inverted",text:"inverted",caption:null}:null!=p.art||null!=p.text?{...p,caption:p.art}:{},[h,p]),j=(0,r.useMemo)(()=>n?.timestamp?(0,H.EF)(n.timestamp):c,[n?.timestamp,c]);try{return r.createElement(s.A,null,r.createElement(v,{ref:V,$variation:b,alignment:g,fullBleed:y,className:q()({[`theme-${U.text}`]:U.text===U.art&&U.art===U.caption&&null!=U.art})},r.createElement($,{className:q()({[`theme-${U.text}`]:(U.text!==U.art||U.text!==U.caption)&&null!=U.text})},!w&&d&&r.createElement(S,{dangerouslySetInnerHTML:{__html:d.name||""}}),!f&&i&&r.createElement(x,{dangerouslySetInnerHTML:{__html:i}}),!R&&a&&r.createElement(k,{dangerouslySetInnerHTML:{__html:a}}),!K&&r.createElement(N,{contributors:m}),!F&&j&&r.createElement(_.A,null,r.createElement(C,null,j))),G&&l&&r.createElement(r.Fragment,null,r.createElement(T,{className:q()({[`theme-${U.art}`]:(U.text!==U.art||U.art!==U.caption)&&null!=U.art})},r.createElement(E,{segmentedSources:P,...l,shouldHaveTeaser:!0})),W&&r.createElement(A,{className:q()({[`theme-${U.caption}`]:(U.text!==U.art||U.art!==U.caption)&&null!=U.caption})},l.caption&&r.createElement(D,{dangerouslySetInnerHTML:{__html:l.caption}}),l.credit&&r.createElement(L,{dangerouslySetInnerHTML:{__html:l.credit}})))))}catch(e){return r.createElement(r.Fragment,null)}};var V=n(69389);const P="gallery",W="article";function G(e,t){if("OneCover"===e)try{const{header:e,headerProps:n,oneCover:o,featuredDeal:i}=t,a=e||n;return a?.lede?.scriptEmbedUrl&&(a.lede.scriptUrl=a.lede.scriptEmbedUrl),r.createElement(F,{oneCoverContent:a,oneCoverConfig:o,featuredDeal:i})}catch(e){return G("ContentHeader",t)}const{type:n}=t;switch(n){case P:{const{header:e,itemsCount:n,hasNativeShareButton:o,shouldEnableNativeShareOnDesktop:i,isFullBleedVideo:a,metadataVideo:s,showBreadcrumbTrail:l,cneVideoEmbedProps:d}=t;return function(e){const{header:t,itemsCount:n,hasNativeShareButton:o,shouldEnableNativeShareOnDesktop:i,isFullBleedVideo:a,metadataVideo:s,showBreadcrumbTrail:l,cneVideoEmbedProps:d}=e;return r.createElement(V.A,{...t,className:t.className,itemsCount:n,hasNativeShareButton:o,shouldEnableNativeShareOnDesktop:i,isFullBleedVideo:a,metadataVideo:s,showBreadCrumb:l,cneVideoEmbedProps:d})}({header:e,itemsCount:n,hasNativeShareButton:o,shouldEnableNativeShareOnDesktop:i,isFullBleedVideo:a,metadataVideo:s,showBreadcrumbTrail:l,cneVideoEmbedProps:d})}case W:return function(e){const{headerProps:t,additionalHeaderProps:n,enableEnhancedArticleHeader:o,hasNativeShareButton:i,shouldEnableNativeShareOnDesktop:a,isFullBleedVideo:s,hasLightbox:l,interactiveOverride:d,metadataVideo:c,showBreadcrumbTrail:m,featuredDeal:p}=e,u={...t,publishDate:p?.timestamp?(0,H.EF)(p.timestamp):t.publishDate};return r.createElement(V.A,{...u,...n,showFullHeaderViewInMobile:o,hasNativeShareButton:i,shouldEnableNativeShareOnDesktop:a,isFullBleedVideo:s,className:"article__content-header",hasLightbox:l,interactiveOverride:d,metadataVideo:c,showBreadCrumb:m})}(t);default:return r.createElement("div",null,"Unknown header type")}}},60434(e,t,n){"use strict";n.d(t,{HG:()=>$,LZ:()=>b,Mq:()=>v,Nf:()=>d,Q1:()=>k,cn:()=>y,i$:()=>w,tJ:()=>c,tT:()=>f,tw:()=>p,u3:()=>h,vB:()=>x,vT:()=>u});var o=n(38267),i=n(18608),a=n(26865),r=n(88456),s=n(96472),l=n(99906);const d=o.Ay.div.withConfig({displayName:"TextFieldLabelText"})`
  ${(0,a.Gg)("typography.definitions.utility.label")};
  transition: color ${s.L6.timingButtonDefault} ease-in;
`,c=o.Ay.div.withConfig({displayName:"TextFieldIcon"})`
  svg {
    ${({theme:e})=>(0,a.FM)(e,"normal","icon")}
  }

  .icon-search {
    margin-top: 8px;
    margin-left: 9px;
  }

  &:active,
  &:focus {
    svg {
      ${({theme:e})=>(0,a.FM)(e,"active","icon")}
    }
  }
  position: absolute;
  top: -5%;
  transform: translateY(calc(50% + ${(0,a.Kq)(1)}));
  transition: fill ${s.L6.timingButtonDefault} ease-in;
  width: ${(0,a.Kq)(3)};
  height: 1.7rem;

  /* leading */
  ${({LeadingIcon:e})=>e&&`left: ${(0,a.Kq)(1)};`}

  /* trailing */
  ${({TrailingIcon:e})=>e&&`right: ${(0,a.Kq)(1)};`}
`,m=o.AH`
  ${(0,a.Gg)("typography.definitions.utility.input-core")};
  margin-top: ${(0,a.Kq)(1)};
  padding: ${(0,a.Kq)(1)} ${(0,a.Kq)(1.5)};
  width: 100%;
  text-transform: none;
  transition-property: color, background, border;
  transition-duration: ${s.L6.timingButtonDefault};
  transition-timing-function: ease-in;

  ${({theme:e})=>(0,a.FM)(e,"normal","background")}
  ${({theme:e})=>(0,a.FM)(e,"normal","text")}
  ${({theme:e})=>(0,a.FM)(e,"normal","border")}

  &:focus {
    outline: 0;
    + ${c} {
      svg {
        ${({theme:e})=>(0,a.FM)(e,"valid","icon")}
      }
    }
  }

  &:active,
  &:focus {
    ${({theme:e})=>(0,a.FM)(e,"active","background")}
    ${({theme:e})=>(0,a.FM)(e,"active","text")}
    ${({theme:e})=>(0,a.FM)(e,"active","border")}
  }

  &[disabled] {
    ${({theme:e})=>(0,a.FM)(e,"disabled","background")}
    ${({theme:e})=>(0,a.FM)(e,"disabled","text")}
    ${({theme:e})=>(0,a.FM)(e,"disabled","border")}
  }
`,p=(0,o.Ay)(i.aE).withConfig({displayName:"TextFieldControlInput"})`
  ${m}
  border-radius: 0;
  height: ${(0,a.Kq)(6)};
  appearance: none;
  ${(0,a.R9)("hasLeadingIcon",!0,`padding-left: ${(0,a.Kq)(6.25)};`)}

  ${(0,a.R9)("hasTrailingIcon",!0,`padding-right: ${(0,a.Kq)(6)};`)}
`,u=(0,o.Ay)(i.MW).withConfig({displayName:"TextFieldControlTextarea"})`
  ${m}
  max-width: 100%;

  resize: none;
  ${({customHeightMultiplier:e})=>e?`  \n      height:${(0,a.Kq)(e)};\n    `:`\n     height:${(0,a.Kq)(19)};\n    `}
  ${({hasBoxShadow:e})=>e&&"\n    box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.1);\n  "}
   ${({hasRoundedEdges:e})=>e&&"\n    border-radius: 999px;\n  "}
`,g=o.AH`
  ${p}, ${u} {
    ${({theme:e})=>(0,a.FM)(e,"valid","background")}
    ${({theme:e})=>(0,a.FM)(e,"valid","text")}
    ${({theme:e})=>(0,a.FM)(e,"valid","border")}
  }

  ${c} {
    svg {
      ${({theme:e})=>(0,a.FM)(e,"valid","icon")}
    }
  }
`,h=o.Ay.div.withConfig({displayName:"TextFieldAssistiveText"})`
  ${(0,a.Gg)("typography.definitions.utility.assistive-text")}

  grid-column: -1 / 1;
  transition: color ${s.L6.timingButtonDefault} ease-in;
  margin-top: ${(0,a.Kq)(1)};

  ${({theme:e})=>(0,a._o)(e,"color","colors.interactive.base.dark")};
`,y=(0,o.Ay)(i.vm).withConfig({displayName:"TextFieldLabel"}).attrs(e=>({as:"label",...e}))`
  /* disabled */
  ${d}, ${h} {
    ${({isDisabled:e,theme:t})=>e&&(0,a._o)(t,"color","colors.interactive.base.dark")}
  }

  ${c} {
    svg {
      ${({theme:e})=>(0,a.FM)(e,"disabled","icon")}
    }
  }

  /* leading-icon */
  ${p}, ${u} {
    ${(0,a.R9)("hasInlineLabel",!0,o.AH`
        margin-top: 0;
        padding-top: ${(0,a.Kq)(3)};
      `)}
  }

  /* inline */
  ${d} {
    ${(0,a.R9)("hasInlineLabel",!0,o.AH`
        ${(0,a.Gg)("typography.definitions.utility.assistive-text")};
        position: absolute;
        z-index: 1;
        margin-left: 1px; /* to match the 1px left border of the input area */
        padding: ${(0,a.Kq)(1)} ${(0,a.Kq)(1)} 0;
      `)}
  }

  ${(0,a.R9)("isActivated",!0,g)}
`,b=o.Ay.div.withConfig({displayName:"TextFieldInputContainer"})`
  position: relative;
  grid-column: 1;

  input[type='search'] {
    appearance: none;
  }
`,w=o.Ay.datalist.withConfig({displayName:"TextFieldDataList"})``,f=o.Ay.option.withConfig({displayName:"TextFieldDataListOption"})``,v=(0,o.Ay)(r.A).withConfig({displayName:"TextFieldButton"})`
  height: 48px;
  ${(0,a.Xm)(0,s.LO.md)} {
    margin-top: ${(0,a.Kq)(1)};
  }

  /* mobile-hide */
  ${({hideButtonInMobile:e})=>e&&`\n    ${(0,a.Xm)(0,`${l.VS.md}px`)} {\n      position: absolute;\n      visibility: hidden;\n    }\n  `}

  ${({theme:e,isInverted:t})=>t&&`\n      border-radius: 3px;\n      ${(0,a._o)(e,"background-color","colors.interactive.base.brand-secondary")};\n      \n      ${(0,a.H4)(s.LO.md)} {\n        margin-left: ${(0,a.Kq)(1)};\n      }\n\n  `}
`,$=(0,o.Ay)(i.vm).withConfig({displayName:"TextFieldErrorText"}).attrs(e=>({as:"div",colorToken:"colors.interactive.feedback.invalid-primary",topSpacing:1,typeIdentity:"typography.definitions.utility.assistive-text",...e}))`
  grid-column: -1 / 1;
`,A=o.AH`
  ${p}, ${u} {
    ${({theme:e})=>(0,a.FM)(e,"invalid","background")}
    ${({theme:e})=>(0,a.FM)(e,"invalid","text")}
    ${({theme:e})=>(0,a.FM)(e,"invalid","border")}
  }

  ${c} {
    svg {
      ${({theme:e})=>(0,a.FM)(e,"invalid","icon")}
    }
  }

  ${({hasAttachedButton:e,isAlwaysStacked:t})=>e&&!t&&`\n    ${(0,a.H4)(s.LO.md)} {\n      grid-column: 1 / span 2;\n    }\n  `}
`,C=o.AH`
  ${(0,a.Xm)(0,s.LO.md)} {
    grid-template-columns: auto ${(0,a.Kq)(14)};
    align-items: end;
  }

  ${v} {
    margin-top: 0;
    ${(0,a.Xm)(0,s.LO.md)} {
      min-width: unset;
    }
  }
`,x=o.Ay.span.withConfig({displayName:"TextFieldWrapper"})`
  display: grid;
  margin-bottom: ${(0,a.Kq)(2)};

  ${(0,a.H4)(s.LO.md)} {
    ${({shouldUseAlternativeStyle:e})=>e&&`margin-bottom: ${(0,a.Kq)(3)};`}
  }

  /* hasAttachedButton */
  ${({hasAttachedButton:e,isAlwaysStacked:t})=>!t&&e?`\n    ${(0,a.H4)(s.LO.md)} {\n      grid-template-columns: 1fr auto;\n      align-items: end;\n    }\n  `:""}
  ${({hasAttachedButtonForMobile:e})=>e&&`\n    ${(0,a.L7)(s.LO.md)} {\n      grid-template-columns: 1fr auto;\n      align-items: end;\n    }`}

  ::placeholder {
    ${({theme:e})=>(0,a._o)(e,"color","colors.interactive.base.dark")};
  }

  ${({hasAttachedButton:e,isNeverStacked:t})=>e&&t?C:""};

  /* error */
  ${(0,a.R9)("hasErrorState",!0,A)}
  /* alternative-style */

  ${d} {
    ${({hasAttachedButton:e,isAlwaysStacked:t})=>!t&&e?`\n      ${(0,a.H4)(s.LO.md)} {\n          grid-column: span 2;\n      }\n    `:""}
  }

  ${$} {
    ${({hasAttachedButton:e,isAlwaysStacked:t})=>!t&&e?`\n      ${(0,a.H4)(s.LO.md)} {\n        grid-column: 1 / span 2;\n      }\n    `:""}
  }
`,k=(0,o.Ay)(i.sH).withConfig({displayName:"TextFieldErrorSuggestion"}).attrs(e=>({colorToken:"colors.interactive.feedback.invalid-primary",typeIdentity:"typography.definitions.utility.assistive-text",...e}))`
  text-decoration: underline;

  &:hover {
    ${({theme:e})=>(0,a._o)(e,"color","colors.interactive.feedback.invalid-primary")};
  }
`},63761(e,t,n){"use strict";n.d(t,{p:()=>l,z:()=>s});var o=n(96540),i=n(5556),a=n.n(i),r=n(18106);const s=o.createContext({}),l=({lang:e,children:t})=>o.createElement(s.Provider,{value:e||r.xN},t);l.propTypes={children:a().node,lang:a().string},l.displayName="ContentLangProvider"},34549(e,t,n){"use strict";n.d(t,{h:()=>r});var o=n(96540),i=n(63761),a=n(18106);const r=()=>(0,o.useContext)(i.z)||a.xN},9413(e,t,n){"use strict";n.d(t,{Ay:()=>c,Yk:()=>l});var o=n(47655),i=n(7009),a=n(73763);a.A.WithMargins=(0,o.y)(a.A,"WithMargins",{hasMargin:!0}),a.A.MarginsOnly=(0,o.y)(a.A,"MarginsOnly",{hasMargin:!0,isMarginOnly:!0}),a.A.NoMargins=(0,o.y)(a.A,"NoMargins",{hasMargin:!1}),a.A.NoMarginsTwoUp=(0,o.y)(a.A,"NoMarginsTwoUp",{childColumns:[{spanValue:6,columnSpan:i.L.mobile100Desktop50},{spanValue:6,columnSpan:i.L.mobile100Desktop50}],hasMargin:!1}),a.A.ContentWithAdRail=(0,o.y)(a.A,"ContentWithAdRail",{childColumns:[{layoutValue:"content",className:"grid-layout__content",columnSpan:i.L.mobile100Desktop75},{layoutValue:"aside",className:"grid-layout__aside",columnSpan:i.L.mobile100Desktop25}],adRailType:"normal",hasMargin:!0,isAdrail:!0},{className:"grid-layout--adrail"});const r={childColumns:[{layoutValue:"content",className:"grid-layout__content",columnSpan:i.L.mobile100Desktop50},{layoutValue:"aside",className:"grid-layout__aside",columnSpan:i.L.mobile100Desktop25}],adRailType:"narrow",hasMargin:!0,isAdrail:!0};a.A.ContentWithAdRailNarrow=(0,o.y)(a.A,"ContentWithAdRailNarrow",r,{className:"grid-layout--adrail narrow"}),a.A.ContentWithAdRailNarrowNoMargin=(0,o.y)(a.A,"ContentWithAdRailNarrow",{...r,hasMargin:!1,hasMarginMobile:!0},{className:"grid-layout--adrail narrow"}),a.A.ContentRightWithAdRailNarrow=(0,o.y)(a.A,"ContentRightWithAdRailNarrow",{childColumns:[{layoutValue:"aside",className:"grid-layout__aside",columnSpan:i.L.mobile50Desktop20},{layoutValue:"content",className:"grid-layout__content",columnSpan:i.L.mobile100Desktop75}],adRailType:"narrowAdsLeft",hasMargin:!0,isAdrail:!0},{className:"narrow"}),a.A.ContentWithAdRailPersistent=(0,o.y)(a.A,"ContentWithAdRailPersistent",{childColumns:[{layoutValue:"content",className:"grid-layout__content",columnSpan:i.L.mobile100Desktop50},{layoutValue:"aside",className:"grid-layout__aside",columnSpan:i.L.mobile100Desktop25}],adRailType:"persistent",hasMargin:!0,isAdrail:!0},{className:"grid-layout--adrail persistent"}),a.A.NarrowContentWithWideAdRail=(0,o.y)(a.A,"NarrowContentWithWideAdRail",{childColumns:[{layoutValue:"content",className:"grid-layout__content",columnSpan:i.L.mobile100Desktop50},{layoutValue:"aside",className:"grid-layout__aside",columnSpan:i.L.mobile100Desktop25}],adRailType:"narrowWithNarrowContent",hasMargin:!0,isAdrail:!0},{className:"grid-layout--adrail narrow wide-adrail"}),a.A.TwoUp=(0,o.y)(a.A,"TwoUp",{childColumns:[{className:"grid_content_columnOne",spanValue:6,columnSpan:i.L.mobile100Desktop50},{className:"grid_content_columnTwo",spanValue:6,columnSpan:i.L.mobile100Desktop50}],hasMargin:!0},{className:"grid-layout-twoColumns"}),a.A.ThreeUp=(0,o.y)(a.A,"ThreeUp",{childColumns:[{spanValue:4,columnSpan:i.L.mobile100Desktop33},{spanValue:4,columnSpan:i.L.mobile100Desktop33},{spanValue:4,columnSpan:i.L.mobile100Desktop33}],hasMargin:!0}),a.A.EvenAny=(0,o.y)(a.A,"EvenAny",{hasMargin:!1,isEven:!0}),a.A.EvenTwo=(0,o.y)(a.A,"EvenTwo",{childColumns:[{columnSpan:i.L.mobile50Desktop50},{columnSpan:i.L.mobile50Desktop50}],hasMargin:!1,isEven:!0}),a.A.EvenThree=(0,o.y)(a.A,"EvenThree",{childColumns:[{columnSpan:i.L.mobile50Desktop33},{columnSpan:i.L.mobile50Desktop33},{columnSpan:i.L.mobile50Desktop33}],hasMargin:!1,isEven:!0}),a.A.EvenFour=(0,o.y)(a.A,"EvenFour",{childColumns:[{columnSpan:i.L.mobile50Desktop25},{columnSpan:i.L.mobile50Desktop25},{columnSpan:i.L.mobile50Desktop25},{columnSpan:i.L.mobile50Desktop25}],hasMargin:!1,isEven:!0}),a.A.EvenFourMobileUp=(0,o.y)(a.A,"EvenFourMobileUp",{childColumns:[{columnSpan:i.L.mobile100Tablet50Desktop25},{columnSpan:i.L.mobile100Tablet50Desktop25},{columnSpan:i.L.mobile100Tablet50Desktop25},{columnSpan:i.L.mobile100Tablet50Desktop25}],hasMargin:!1,isEven:!0,isMobileUp:!0}),a.A.EvenFive=(0,o.y)(a.A,"EvenFive",{childColumns:[{columnSpan:i.L.mobile50Desktop20},{columnSpan:i.L.mobile50Desktop20},{columnSpan:i.L.mobile50Desktop20},{columnSpan:i.L.mobile50Desktop20},{columnSpan:i.L.mobile50Desktop20}],hasMargin:!1,isEven:!0}),a.A.EvenSix=(0,o.y)(a.A,"EvenSix",{childColumns:[{columnSpan:i.L.mobile50Desktop20},{columnSpan:i.L.mobile50Desktop20},{columnSpan:i.L.mobile50Desktop20},{columnSpan:i.L.mobile50Desktop20},{columnSpan:i.L.mobile50Desktop20},{columnSpan:i.L.mobile50Desktop20}],hasMargin:!1,isEven:!0}),a.A.TwoUpFullBleedNoGap=(0,o.y)(a.A,"TwoUpFullBleedNoGap",{childColumns:[{spanValue:6,columnSpan:i.L.mobile100Desktop50},{spanValue:6,columnSpan:i.L.mobile100Desktop50}],hasMargin:!1,isFullBleed:!0,hasGutters:!1}),a.A.DynamicGrid=({startColumn:e,endColumn:t})=>(0,o.y)(a.A,"DynamicGrid",{hasMargin:!0,gridColumns:{startColumn:e,endColumn:t}}),a.A.WithMarginsFullBleed=(0,o.y)(a.A,"WithMarginsFullBleed",{childColumns:[{spanValue:6,columnSpan:i.L.mobile100Desktop50},{spanValue:6,columnSpan:i.L.mobile100Desktop50}],hasMargin:!0,isFullBleed:!0}),a.A.DynamicGridItemLayout=(0,o.y)(a.A,"DynamicGridItemLayout",{isDynamicGridItemLayout:!0,shouldDisplayDenseGrid:!0,childColumns:[{columnSpan:i.L.mobile50Desktop25},{columnSpan:i.L.mobile50Desktop25},{columnSpan:i.L.mobile50Desktop25},{columnSpan:i.L.mobile50Desktop25}],hasMargin:!1,isEven:!0}),a.A.NoMarginsFullBleed=(0,o.y)(a.A,"NoMarginsFullBleed",{hasMargin:!1,isFullBleed:!0});const{WithMargins:s}=a.A,{MarginsOnly:l}=a.A,{ContentWithAdRail:d}=a.A,c=a.A},89871(e,t,n){"use strict";n.d(t,{A:()=>f});var o=n(32485),i=n.n(o),a=n(38221),r=n.n(a),s=n(5556),l=n.n(s),d=n(96540),c=n(38267),m=n(96472);const p=c.Ay.aside.withConfig({displayName:"PersistentAsideWrapper"})`
  top: 0;
  transition: top 0.2s ease-out;
  z-index: ${({hasStickyBoxIndexPosition:e})=>e?"auto":m.KV.navFixed};
  /*
    it seems like this should be:
    z-index: ${m.KV.persistentAsideLayer}; ?

    however first rule of converting to styled components
    is not to change things like that so, should fix later
  */

  ${({isAlignedToLeft:e,isAlignedLeftLeadAsset:t})=>e?"left: 0;":t?"left: 20px;":""}

  @media print {
    display: none;
  }
`,u=(e,t)=>({top:e=>e.top+window.pageYOffset,bottom:e=>e.top+e.height+window.pageYOffset}[t](e.getBoundingClientRect()));var g=n(11025),h=n(53499),y=n(26865);const b=({align:e,anchorBottom:t,anchorTop:n,attributes:o,children:a,className:s,fullWidthSelector:l,hasStickyBoxIndexPosition:c=!1,shouldRemoveAbsolute:m=!1,style:b})=>{const w=(0,d.useRef)(null),f=(0,d.useRef)(null),v=e=>{let o,i,a;const r="top"===e?n:t,s=Array.isArray(r)?r.slice(0):[r],l=w.current;for(;s.length&&!o;)a=s.shift(),o=document.querySelector(a.selector),i=a.edge||e;return o||(o=l?l.parentElement:document.querySelector("body")),{node:o,edge:i}},$=()=>{const e=v("top"),t=v("bottom"),n=u(e.node,e.edge),o=u(t.node,t.edge);(e=>{f.current||(f.current=new MutationObserver($)),f.current.disconnect();const t=[].slice.call(document.querySelectorAll(".ad, .responsive-image, .clamp"));e.concat(t).forEach(e=>{f.current.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0})})})([e.node,t.node]),w.current&&!m&&(w.current.style.top=`${n}px`,w.current.style.height=`${Math.abs(n-o)}px`)},A=(0,d.useRef)(null);A.current||(A.current=r()($,50));(0,d.useEffect)(()=>(document.addEventListener("DOMContentLoaded",$),window.addEventListener("load",$),window.addEventListener("resize",A.current),window.Kendra.TRACK_COMPONENT.broadcast(h.G.RENDER,{name:"PersistentAside"}),()=>{document.removeEventListener("DOMContentLoaded",$),window.removeEventListener("load",$),window.removeEventListener("resize",A.current);try{f.current&&(f.current.disconnect(),f.current=null)}catch(e){}}),[]),(0,d.useEffect)(()=>{$()},[n,t]);let C={...b,position:"absolute",top:"auto",height:"auto"};return m&&(C={...b,top:(0,y.Kq)(18),marginBottom:(0,y.Kq)(5),position:"sticky",height:"unset !important"}),d.createElement(p,{className:i()("persistent-aside",{[`persistent-aside--align-${e}`]:e}),isAlignedToLeft:"left"===e,isAlignedLeftLeadAsset:"left-lead-asset"===e,hasStickyBoxIndexPosition:c,ref:e=>{e&&(w.current=e,$())},style:C,"data-testid":"PersistentAsideWrapper"},d.createElement(g.A,{...o,tagName:"div",fullWidthSelector:l,hasStickyBoxIndexPosition:c,className:s},a))},w=l().shape({selector:l().string,edge:l().oneOf(["top","bottom"])});b.propTypes={align:l().string,anchorBottom:l().oneOfType([l().arrayOf(w),w]),anchorTop:l().oneOfType([l().arrayOf(w),w]),attributes:l().object,children:l().node,className:l().string,fullWidthSelector:l().string,hasStickyBoxIndexPosition:l().bool,shouldRemoveAbsolute:l().bool,style:l().object},b.displayName="PersistentAside";const f=b},63118(e,t,n){"use strict";n.d(t,{f5:()=>o});const o="lightboxReturnUrl"},78934(e,t,n){"use strict";n.d(t,{DP:()=>a,r2:()=>i,yk:()=>r});const o=e=>{const[t,n,o,i,a]=e.split("/").filter(Boolean);return"discover"===t&&"in"===o&&n&&i&&a?{photoId:n,contentType:i,contentId:a}:null},i=e=>{try{const t=new URL(e.href,window.location.origin).pathname;return o(t)}catch{return null}},a=e=>("function"==typeof e.composedPath?e.composedPath().find(e=>e instanceof HTMLAnchorElement&&e.matches("a[href]"))??null:null)||(e.target instanceof Element?e.target.closest("a[href]"):null),r=e=>{e.preventDefault()}},39311(e,t,n){"use strict";n.d(t,{AA:()=>a,BD:()=>i});var o=n(46017);const i=(e,t)=>{const n=new Date(e);return(i=n)instanceof Date&&!isNaN(i)?(0,o.e)({date:n,formatMessage:t,includeHourAndMin:!1}):e;var i},a=(e,t,n)=>e?e.map((e,o)=>{const{revisionId:a,viewerActionPresence:r,reactionCount:s,replyPageInfo:l,replies:d,role:c,storyURL:m,images:p,coralBadges:u,reviewerCreatedAt:g}=e,h={id:o,revisionId:a,commentId:e._id,viewerActionPresence:r,reactionCount:s,replyPageInfo:l,replies:d,role:c,storyURL:m,images:p,coralBadges:u,reviewerCreatedAt:g};e.isReviewOwnedByViewer&&(h.isReviewOwnedByViewer=e.isReviewOwnedByViewer),e.reviewText&&(h.text=e.reviewText),e.location&&(h.location=e.location);const y=e.isAnonymous?"Anonymous":e.siteUsername||e.reviewerInfo;return y&&(h.username=y),null!=e.rating&&(h.rating=e.rating),e.recipeId&&(h.recipeId=e.recipeId),e.updatedAt&&(h.date=i(e.updatedAt,t)),e.tags&&(h.tags=((e,t)=>e.reduce((e,n)=>{const o=t.find(e=>e.slug===n);return o&&e.push(o.label),e},[]))(e.tags,n)),e.images&&(h.images=e.images),e.coralBadges&&(h.badges=e.coralBadges),e.reviewerCreatedAt&&(h.reviewerCreatedAt=e.reviewerCreatedAt),e.reviewerLocation&&(h.location=e.reviewerLocation),h}):[]},60881(e,t,n){"use strict";n.d(t,{s:()=>l});var o=n(38267),i=n(5556),a=n.n(i),r=n(26865),s=(n(18730),n(45741));const l=o.Ay.a.withConfig({displayName:"BaseLink"})`
  margin: 0;
  ${s.PA}
  ${s.h8}
    ${({align:e})=>e&&s.nK.includes(e)&&`\n      align-self: ${e};\n      justify-self: ${e};\n      ${s.AV[e]};\n   `}
   ${({textAlign:e})=>e&&s.nK.includes(e)&&`text-align: ${e}; `}

     ${({theme:e,typeIdentity:t="typography.definitions.consumptionEditorial.body-core"})=>(0,r.Gg)(e,t)};

  a {
    color: inherit;
  }

  ${({bottomSpacing:e,topSpacing:t})=>e||t?"display: block;":""}

  color: ${({theme:e,colorToken:t="colors.interactive.base.light"})=>(0,r.HK)(e,t)};
  transition-property: color, background, text-shadow;
  transition-duration: 5s;
  transition-timing-function: ease-in-out;
  ${({theme:e,typeToken:t})=>(0,r.Gg)(e,t)}
  ${({theme:e,colorStaticLinkToken:t,colorSecondaryLinkToken:n,linkStyle:o="default"})=>(0,r.pe)(e,t,n,o)}
  ${({hasUnderline:e=!0})=>(e=>e?"":"\n    cursor: pointer;\n    text-decoration: none;\n\n    &:active,\n    &:link,\n    &:visited {\n      text-decoration: none;\n    }\n\n    &:hover,\n    &:focus {\n      text-decoration: underline;\n    }\n  ")(e)}
`;l.propTypes={as:a().string,colorSecondaryLinkToken:a().string,colorStaticLinkToken:a().string,colorToken:a().string,hasUnderline:a().bool,linkStyle:a().oneOf(["global","default","navigation"]),target:a().string,typeToken:a().string}},62265(e,t,n){"use strict";n.d(t,{S:()=>r});var o=n(58156),i=n.n(o),a=n(86659);const r=(e,t)=>{let n=a.A.WithMargins;const{type:o,showAdRail:r,gridColumns:s}=t||{};"gallery"===o&&(n=((e,t,n)=>{if(e)return a.A.ContentWithAdRailNarrow;const{start:o,end:i}=t||{};return o&&i?a.A.DynamicGrid(t):n})(r,s,n)),"article"===o&&(n=((e,t)=>"WithAdRail"===e?a.A.NarrowContentWithWideAdRail:t)(i()(e,"ChunkedArticleContent.variation"),n));const l=i()(e,"ContentWrapper.variation");return n=l?a.A[l]:n,n}},1123(e,t,n){"use strict";n.d(t,{Cy:()=>m,Rn:()=>l,VO:()=>r,aU:()=>s,mO:()=>c,mS:()=>d});var o=n(26865),i=n(75163),a=n(96472);const r=()=>`\n  --grid-gap: ${(0,o.Kq)(2)};\n  --grid-margin: ${(0,o.Kq)(3)};\n\n  @media (min-width: ${a.LO.md}) {\n    --grid-gap: ${(0,o.Kq)(3)};\n    --grid-margin: ${(0,o.Kq)(6)};\n  }\n\n  @media (min-width: ${a.LO.lg}) {\n    --grid-gap: ${(0,o.Kq)(4)};\n  }\n\n  @media (min-width: ${a.LO.xl}) {\n    --grid-margin: ${(0,o.Kq)(8)};\n  }\n  `,s=(e,t=!1)=>{const n=t?-1:1;return`\n    ${e}-right: calc(${n} * var(--grid-margin));\n    ${e}-left: calc(${n} * var(--grid-margin));\n  `},l=e=>`\n      ${i.pT.Color.Surface}:  #${e};\n      ${i.pT.Color.SurfaceAd}:  #${e};\n      background-color: #${e};\n    `,d=e=>`\n      border-color: #${e};\n    `,c=e=>`\n      border-top: 1px solid #${e};\n   `,m=()=>`padding-top: ${(0,o.Kq)(7,"px")};`},18106(e,t,n){"use strict";n.d(t,{YZ:()=>i,xN:()=>o});const o="en-US",i=["ar-AE","de-DE","en-AE","en-GB","en-IN","en-US","es-ES","es-MX","fr-FR","it-IT","ja-JP","zh-CN","zh-Hant-TW"];new Map([["ar","ar-AE"],["de","de-DE"],["en","en-US"],["es","es-ES"],["fr","fr-FR"],["it","it-IT"],["ja","ja-JP"],["zh-Hant","zh-Hant-TW"]])},22914(e,t,n){"use strict";n.d(t,{Hw:()=>i,II:()=>p,KF:()=>l,LD:()=>r,Vl:()=>u,Z7:()=>o,aI:()=>a,bp:()=>d,fC:()=>m,fn:()=>s,nn:()=>c,yV:()=>g});const o="\n  mutation AddReview($input: AddReviewInput!, $coralUserID: ID!) {\n    addReview(input: $input, coralUserID: $coralUserID) {\n      message\n    }\n  }\n",i="\n  query Comments(\n    $after: Cursor\n    $commentLimit: Int = 10\n    $commentsOrderBy: COMMENT_SORT\n    $repliesOrderBy: COMMENT_SORT\n    $replyLimit: Int = 1\n    $storyId: ID!\n    $showPrimaryComments: Boolean\n    $tag: TAG\n    $tags: [TAG!]\n    $excludeTag: TAG\n    $excludeTags: [TAG!]\n    $includeViewerOwnership: Boolean! = false\n  ) {\n    coralcomments(\n      first: $commentLimit\n      after: $after\n      storyID: $storyId\n      orderBy: $commentsOrderBy\n      showPrimaryComments: $showPrimaryComments\n      tag: $tag\n      tags: $tags\n      excludeTag: $excludeTag\n      excludeTags: $excludeTags\n    ) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      nodes {\n        id\n        body\n        isAnonymous\n        meta\n        createdAt\n        rating\n        images {\n          id\n          url\n          status\n        }\n        story {\n          url\n        }\n        author {\n          orgRole\n        }\n        editing @include(if: $includeViewerOwnership) {\n          editableUntil\n        }\n        siteUsername {\n          name\n          location\n          badges {\n            badge\n            startDate\n            endDate\n            isUserSpecific\n          }\n          createdAt\n        }\n        revision {\n          id\n        }\n        reviewTags {\n          code\n        }\n        tags {\n          code\n        }\n        viewerActionPresence {\n          reaction\n        }\n        actionCounts {\n          reaction {\n            total\n          }\n        }\n        replies(orderBy: $repliesOrderBy, flatten: true, first: $replyLimit) {\n          pageInfo {\n            hasNextPage\n            endCursor\n          }\n          nodes {\n            depth\n            id\n            body\n            createdAt\n            images {\n              id\n              url\n              status\n            }\n            author {\n              orgRole\n            }\n            siteUsername {\n              name\n              location\n              badges {\n                badge\n                startDate\n                endDate\n                isUserSpecific\n              }\n              createdAt\n            }\n            revision {\n              id\n            }\n            story {\n              url\n            }\n            viewerActionPresence {\n              reaction\n            }\n            actionCounts {\n              reaction {\n                total\n              }\n            }\n            parent {\n              siteUsername {\n                name\n                location\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n",a="\n  query Story($id: ID!) {\n    story(id: $id) {\n      id\n      url\n    }\n  }\n",r="\n  mutation createStory($inp: CreateStoryInput!) {\n    createStory(input: $inp) {\n      story {\n        id\n      }\n    }\n  }\n",s="\n  mutation updateStory($inp: UpdateStoryInput!) {\n    updateStory(input: $inp) {\n      story {\n        id\n      }\n    }\n  }\n",l="\n  query coralreviews($siteID: String!, $storyID: String!, $userID: String!) {\n    coralreviews(siteID: $siteID, storyID: $storyID, userID: $userID) {\n      rating {\n        rating\n        siteID\n        storyID\n        authorID\n      }\n      comment {\n        body\n      }\n    }\n  }\n",d="\n  mutation CreateCommentReaction($input: CreateCommentReactionInput!) {\n    createCommentReaction(input: $input) {\n      clientMutationId\n      comment {\n        id\n      }\n    }\n  }\n",c="\n  mutation RemoveCommentReaction($input: RemoveCommentReactionInput!) {\n    removeCommentReaction(input: $input) {\n      clientMutationId\n      comment {\n        id\n      }\n    }\n  }\n",m="\n  mutation Mutation($input: CreateCommentReplyInput!) {\n    createCommentReply(input: $input) {\n      clientMutationId\n      edge {\n        cursor\n        node {\n          body\n          id\n          depth\n          parentCount\n          replyCount\n          replies {\n            nodes {\n              depth\n              id\n              replyCount\n            }\n          }\n        }\n      }\n    }\n  }\n",p="\n  query CommentById(\n    $replyLimit: Int = 10\n    $after: Cursor\n    $orderBy: COMMENT_SORT\n    $commentId: ID!\n  ) {\n    coralcomment(id: $commentId) {\n      id\n      replies(\n        first: $replyLimit\n        after: $after\n        orderBy: $orderBy\n        flatten: true\n      ) {\n        pageInfo {\n          hasNextPage\n          endCursor\n        }\n        nodes {\n          id\n          body\n          createdAt\n          images {\n            id\n            url\n            status\n          }\n          author {\n            orgRole\n          }\n          siteUsername {\n            name\n            location\n            badges {\n              badge\n              startDate\n              endDate\n              isUserSpecific\n            }\n            createdAt\n          }\n          revision {\n            id\n          }\n          viewerActionPresence {\n            reaction\n          }\n          actionCounts {\n            reaction {\n              total\n            }\n          }\n          parent {\n            siteUsername {\n              name\n              location\n            }\n          }\n        }\n      }\n    }\n  }\n",u="\n  query Story($id: ID!) {\n    story(id: $id) {\n      totalPrimaryCommentsCount\n      commentTagLabel {\n        FEATURED\n        QA\n      }\n    }\n  }\n",g="\n  query GetUserRating($storyID: ID!) {\n    userStoryRating(storyID: $storyID) {\n      rating\n    }\n  }\n"},41598(e,t,n){"use strict";n.d(t,{EF:()=>o.E,qn:()=>i.q,ti:()=>r});var o=n(82049),i=n(67616);const a=new Set(["commerce-product","contentreference","product"]),r=e=>a.has(e)},82049(e,t,n){"use strict";function o(e){try{if(!e||"string"!=typeof e)return"Recently updated";const t=new Date(e);if(isNaN(t.getTime()))return"Recently updated";const n={year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"};return t.toLocaleString("en-US",n)}catch(e){return"Recently updated"}}n.d(t,{E:()=>o})},68073(e,t,n){"use strict";n.d(t,{A:()=>y});var o=n(58156),i=n.n(o),a=n(44383),r=n.n(a),s=n(18938),l=n.n(s),d=n(44377),c=n.n(d),m=n(15272),p=n(97906),u=n(25053),g=n(98183);const h={clip:e=>i()(e,"renditions.mp4",[]).find(e=>"master"===e.resolution)??{},photo:e=>i()(e,"aspectRatios.master",{})};function y(e,t,n,o,a){const s=m.A.get(n),d=(0,u.A)(e,o);if("clip"===e.modelName&&!e.renditions?.mp4)return{};const y=l()(t).map(([t,n])=>{const o={...n},l=r()(n,["aspectRatio","height","width","sizes"]);let c;"clip"!==e.modelName||o.resolution||function(e,{mp4:t}){if(t.length){const n=t.find(({resolution:e})=>"master"===e),{height:o,width:i}=n,a=`${i}:${o}`,{width:r,height:s,aspectRatio:l}=e,d=l&&"master"!==l?l:a,[c,m]=d.split(":"),p=s||r/(c/m)||n.height,u=t.reduce((e,t)=>t.height>=p&&t.height<e.height?t:e,n);e.resolution=u.resolution}}(o,e.renditions),"clip"===e.modelName&&e.isInlineEmbed?c=e.thumbnails[0]?new URL(e.thumbnails[0]):"":(c=new URL(s.buildUrl(e,o)),"clip"===e.modelName&&"master"!==o.resolution&&function(e,t){const n=e.pathname.split("/"),o=n.pop().split(".");o.length>1&&o.pop(),o.push(t),n.push(o.join(".")),e.pathname=n.join("/")}(c,"mp4"));const m={...l,url:c?.href||"",srcset:void 0},u=i()(m,"aspectRatio","master");if("master"===u){const t=h[e.modelName]??h.photo;!function(e,{height:t,width:n}){if(t>0&&n>0){const o=n/t;e.width?e.height=Math.round(e.width/o):e.height&&(e.width=Math.round(e.height*o))}}(m,t(e))}let y;if("clip"!==e.modelName&&m.width){const t=(0,p.A)(m.width,a);m.srcset=t.map(t=>{const o=new URL(s.buildUrl(e,{...n,width:t}));return d&&(y=(0,g.A)(t,m.height,u),o.searchParams.append("overlay",`${d}-${y}`)),`${o.href} ${t}w`}).join(", ")}else delete m.srcset;if(d){y=(0,g.A)(m.width,m.height,u);const e=new URL(m.url);e.searchParams.append("overlay",`${d}-${y}`),m.url=e.href}return[t,m]});return c()(y)}},86456(e,t,n){"use strict";var o=n(84743);n.n(o)().defineLocale("zh-Hant-TW",{parentLocale:"zh-tw"})},32485(e,t){var n;!function(){"use strict";var o={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var r=i.apply(null,n);r&&e.push(r)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)o.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},72115(e,t,n){var o=n(79920)("isEqual",n(2404));o.placeholder=n(2874),e.exports=o},29132(e,t,n){var o=n(60270);e.exports=function(e,t,n){var i=(n="function"==typeof n?n:void 0)?n(e,t):void 0;return void 0===i?o(e,t,void 0,n):!!i}},7350(e,t,n){var o=n(38221),i=n(23805);e.exports=function(e,t,n){var a=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return i(n)&&(a="leading"in n?!!n.leading:a,r="trailing"in n?!!n.trailing:r),o(e,t,{leading:a,maxWait:t,trailing:r})}}}]);