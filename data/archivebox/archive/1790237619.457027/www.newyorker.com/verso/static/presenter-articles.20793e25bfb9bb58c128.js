/*! For license information please see presenter-articles.20793e25bfb9bb58c128.js.LICENSE.txt */
(()=>{var e,t,i,n,r,o={22761(e,t,i){"use strict";i.d(t,{AJ:()=>E,G$:()=>w,Gt:()=>x,HL:()=>f,Jq:()=>h,L4:()=>g,M1:()=>d,N:()=>p,OS:()=>y,VV:()=>b,WN:()=>m,XC:()=>v,_E:()=>$,cn:()=>A,ey:()=>s,tL:()=>S,tn:()=>R,ve:()=>C,vw:()=>c,xe:()=>k,yt:()=>u});var n=i(38267),r=i(26865),o=i(18608),a=i(96472),l=i(73730);const s=n.Ay.div.withConfig({displayName:"ReviewListLoaderWrapper"})`
  display: flex;
  justify-content: center;
`,d=n.Ay.div.withConfig({displayName:"CommentMessageWrapper"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${(0,r.Kq)(3)};
  border: 1px solid;
  ${({hideDivider:e})=>e&&n.AH`
      border: none;
    `}
  ${({hasSideBorder:e})=>!e&&n.AH`
      border-right: none;
      border-left: none;
    `}
  ${(0,r._o)("border-color","colors.consumption.body.standard.divider")};
  padding: ${(0,r.Kq)(3)} ${(0,r.Kq)(2)};
  text-align: center;
`,c=(0,n.Ay)(o.vm).withConfig({displayName:"CommentInfoHed"})`
  ${(0,r._o)("color","colors.consumption.lead.standard.heading")};
  ${(0,r.Gg)("typography.definitions.consumptionEditorial.description-feature")}

  &:not(:last-child) {
    padding-bottom: ${(0,r.Kq)(2)};
  }
`,u=(0,n.Ay)(o.vm).withConfig({displayName:"CommentInfoDek"})`
  ${(0,r._o)("color","colors.consumption.lead.standard.context-tertiary")};
  ${(0,r.Gg)("typography.definitions.utility.assistive-text")}

  &:not(:last-child) {
    padding-bottom: ${(0,r.Kq)(2)};
  }
`,h=n.Ay.div.withConfig({displayName:"CommentMessageBannerIconWrapper"})`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(0,r.Kq)(2)};

  svg {
    width: 64px;
    height: 64px;
  }
`,p=(0,n.Ay)("div").withConfig({displayName:"MessageBannerBookmarkWrapper"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  button {
    margin-top: 0;
    margin-bottom: 0;
    ${(0,r.L7)(a.LO.md)} {
      margin-right: 16px;
      margin-left: 16px;
    }
    ${(0,r._o)("background","colors.interactive.base.brand-primary")};

    &:hover,
    &:focus,
    &:active {
      ${(0,r._o)("background-color","colors.interactive.base.brand-primary")};
    }
  }

  span {
    ${(0,r._o)("color","colors.interactive.base.white")};
  }

  svg {
    width: 24px;
    height: 24px;

    path {
      ${(0,r._o)("fill","colors.interactive.base.white")};
    }
  }
`,m=n.Ay.div.withConfig({displayName:"DualCTAContainer"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,g=(0,n.Ay)(o.vm).withConfig({displayName:"SecondarySignInLabel"})`
  margin-top: ${(0,r.Kq)(3)};
  text-align: center;
  ${(0,r.Gg)("typography.definitions.utility.button-core")};
  ${(0,r._o)("color","colors.interactive.base.brand-secondary")};
`,b=(0,n.Ay)(o.sH).withConfig({displayName:"SecondarySignInLink"}).attrs({colorToken:"colors.interactive.base.brand-secondary",typeToken:"typography.definitions.utility.button-core",hasUnderline:!0})`
  margin-left: ${(0,r.Kq)(.5)};
`,y=n.Ay.div.withConfig({displayName:"QaPromptContainer"})`
  display: flex;
  align-items: center;
  gap: ${(0,r.Kq)(2)};
  padding: ${(0,r.Kq)(3)} ${(0,r.Kq)(2)};
`,f=n.Ay.div.withConfig({displayName:"QaTextContent"})`
  flex: 1;
`,v=n.Ay.div.withConfig({displayName:"QaQuestion"})`
  ${(0,r.Gg)("typography.definitions.globalEditorial.accreditation-core")};
  ${({theme:e})=>(0,r._o)(e,"color","colors.consumption.lead.standard.accreditation")};
  margin: 0 0 ${(0,r.Kq)(1)} 0;
`,A=(0,n.Ay)(o.sH).withConfig({displayName:"QaCallToAction"}).attrs(e=>({typeToken:"typography.definitions.utility.button-utility",colorToken:"colors.consumption.lead.standard.accreditation",as:"div",...e}))`
  text-decoration: underline;
`,C=n.Ay.div.withConfig({displayName:"QaBannerIconWrapper"})`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 64px;
    height: 64px;
  }
`,w=n.Ay.div.withConfig({displayName:"CollapsedCommentsPanel"})`
  display: flex;
  flex-direction: column;
  gap: ${(0,r.Kq)(3)};
  padding: ${(0,r.Kq)(3)} 0;
  width: 100%;
`,k=n.Ay.div.withConfig({displayName:"CollapsedCommentsHeader"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${(0,r.Kq)(2)};
  width: 100%;
`,E=(0,n.Ay)(l.A.Utility).withConfig({displayName:"CollapsedCommentsButton"})`
  width: 100%;

  .button__label {
    text-transform: uppercase;
  }
`,x=(0,n.Ay)(o.vm).withConfig({displayName:"CollapsedCommentsTitle"}).attrs(e=>({as:"h2",colorToken:"colors.consumption.body.standard.subhed",typeIdentity:"typography.definitions.consumptionEditorial.subhed-aux-primary",...e}))`
  margin: 0;
`,$=(0,n.Ay)(o.sH).withConfig({displayName:"CollapsedCommentsUtilityLink"}).attrs(e=>({colorToken:"colors.interactive.base.black",typeIdentity:"typography.definitions.utility.button-bulletin",...e}))`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
`,R=n.Ay.span.withConfig({displayName:"CollapsedCommentsCarat"})`
  margin-left: ${(0,r.Kq)(1)};
  border-right: 4px solid transparent;
  border-bottom: 5px solid;
  border-left: 4px solid transparent;
  width: 0;
  height: 0;
  ${(0,r._o)("border-bottom-color","colors.interactive.base.black")};
`,S=n.Ay.div.withConfig({displayName:"CollapsedCommentsWrapper",shouldForwardProp:e=>"isCollapsed"!==e})`
  ${({isCollapsed:e})=>e&&n.AH`
      > .commenting-collapsed-button ~ * {
        display: none;
      }
    `}
`},12501(e,t,i){"use strict";i.d(t,{Ay:()=>E.A,F6:()=>w.A,GO:()=>A.A,IJ:()=>p.A,LF:()=>a.A,LQ:()=>m.A,Pc:()=>h.A,Pe:()=>v.A,RJ:()=>R.A,Rv:()=>S.A,TD:()=>c.A,UT:()=>B.A,Vx:()=>C.A,W3:()=>T.A,YC:()=>f.A,ZJ:()=>b.A,dd:()=>g.A,h1:()=>u.A,lB:()=>d.A,lw:()=>y.A,v0:()=>l.A,vE:()=>k.A,wi:()=>o.A});var n=i(85152),r=i(86936),o=i(73521),a=i(68594),l=i(77455),s=i(80163),d=i(87958),c=i(66412),u=i(78298),h=i(23485),p=i(33808),m=i(54051),g=i(45642),b=i(70185),y=i(77468),f=i(27215),v=i(95846),A=i(15143),C=i(21438),w=i(27859),k=i(50978),E=i(15883),x=i(46511),$=i(76081),R=i(73656),S=i(22297),T=i(92486),N=i(54551),B=i(70574);n.A,r.A,o.A,a.A,l.A,s.A,d.A,T.A,c.A,u.A,h.A,p.A,m.A,g.A,b.A,y.A,f.A,v.A,A.A,C.A,w.A,k.A,E.A,x.A,$.A,R.A,S.A,N.A,B.A},76960(e,t,i){"use strict";i.d(t,{I:()=>n});const n={primary:{normal:{text:"colors.interactive.base.white",background:"colors.interactive.base.brand-primary",border:"colors.interactive.base.brand-primary"},hover:{text:"colors.interactive.base.white",background:"colors.interactive.base.brand-secondary",border:"colors.interactive.base.brand-secondary"},focus:{text:"colors.interactive.base.white",background:"colors.interactive.base.brand-primary",border:"colors.interactive.base.brand-primary"},active:{text:"colors.interactive.base.white",background:"colors.interactive.base.brand-secondary",border:"colors.interactive.base.brand-secondary"},disabled:{text:"colors.interactive.base.white",background:"colors.interactive.base.light",border:"colors.interactive.base.light"}},"primary-pair":{normal:{text:"colors.interactive.base.brand-primary",background:"colors.interactive.base.white",border:"colors.interactive.base.brand-primary"},hover:{text:"colors.interactive.base.white",background:"colors.interactive.base.brand-primary",border:"colors.interactive.base.brand-primary"},focus:{text:"colors.interactive.base.brand-primary",background:"colors.interactive.base.white",border:"colors.interactive.base.brand-primary"},active:{text:"colors.interactive.base.white",background:"colors.interactive.base.brand-primary",border:"colors.interactive.base.brand-primary"},disabled:{text:"colors.interactive.base.light",background:"colors.interactive.base.white",border:"colors.interactive.base.light"}},secondary:{normal:{text:"colors.interactive.base.black"},hover:{text:"colors.interactive.base.brand-primary"},focus:{text:"colors.interactive.base.black"},active:{text:"colors.interactive.base.brand-primary"},disabled:{text:"colors.interactive.base.light"}},utility:{normal:{text:"colors.interactive.base.white",background:"colors.interactive.base.black",border:"colors.interactive.base.black"},hover:{text:"colors.interactive.base.white",background:"colors.interactive.base.brand-primary",border:"colors.interactive.base.brand-primary"},focus:{text:"colors.interactive.base.white",background:"colors.interactive.base.black",border:"colors.interactive.base.black"},active:{text:"colors.interactive.base.white",background:"colors.interactive.base.brand-primary",border:"colors.interactive.base.brand-primary"},disabled:{text:"colors.interactive.base.white",background:"colors.interactive.base.light",border:"colors.interactive.base.light"}},"utility-inverted":{normal:{text:"colors.interactive.base.black",background:"colors.interactive.base.white",border:"colors.interactive.base.white"},hover:{text:"colors.interactive.base.white",background:"colors.interactive.base.brand-primary",border:"colors.interactive.base.brand-primary"},focus:{text:"colors.interactive.base.black",background:"colors.interactive.base.white",border:"colors.interactive.base.white"},active:{text:"colors.interactive.base.white",background:"colors.interactive.base.brand-primary",border:"colors.interactive.base.brand-primary"},disabled:{text:"colors.interactive.base.light",background:"colors.interactive.base.dark",border:"colors.interactive.base.dark"}},"utility-pair":{normal:{text:"colors.interactive.base.black",background:"colors.interactive.base.white",border:"colors.interactive.base.black"},hover:{text:"colors.interactive.base.white",background:"colors.interactive.base.black",border:"colors.interactive.base.black"},focus:{text:"colors.interactive.base.black",background:"colors.interactive.base.white",border:"colors.interactive.base.black"},active:{text:"colors.interactive.base.white",background:"colors.interactive.base.black",border:"colors.interactive.base.black"},disabled:{text:"colors.interactive.base.light",background:"colors.interactive.base.white",border:"colors.interactive.base.light"}},"utility-pair-inverted":{normal:{text:"colors.interactive.base.white",background:null,border:"colors.interactive.base.white"},hover:{text:"colors.interactive.base.black",background:"colors.interactive.base.white",border:"colors.interactive.base.white"},focus:{text:"colors.interactive.base.white",background:"colors.interactive.base.black",border:"colors.interactive.base.white"},active:{text:"colors.interactive.base.black",background:"colors.interactive.base.white",border:"colors.interactive.base.white"},disabled:{text:"colors.interactive.base.dark",background:null,border:"colors.interactive.base.dark"}},"inverted-text":{normal:{text:"colors.interactive.base.white"},hover:{text:"colors.interactive.base.brand-primary"},focus:{text:"colors.interactive.base.white"},active:{text:"colors.interactive.base.brand-primary"},disabled:{text:"colors.interactive.base.dark"}},"utility-pair-secondary":{normal:{text:"colors.interactive.base.brand-primary",background:"colors.interactive.base.white",border:"colors.interactive.base.white"},hover:{text:"colors.interactive.base.brand-secondary",background:"colors.interactive.base.white",border:"colors.interactive.base.white"},focus:{text:"colors.interactive.base.brand-primary",background:"colors.interactive.base.white",border:"colors.interactive.base.white"},active:{text:"colors.interactive.base.brand-secondary",background:"colors.interactive.base.white",border:"colors.interactive.base.white"},disabled:{text:"colors.interactive.base.light",background:"colors.interactive.base.white",border:"colors.interactive.base.white"}}}},91470(e,t,i){"use strict";i.r(t),i.d(t,{Account:()=>n.A,AgeGate:()=>r.A,Arrow:()=>o.A,ArrowOut:()=>a.A,Article:()=>l.A,BadgeArtist:()=>s.A,BadgeDayOne:()=>d.A,BadgeStaff:()=>c.A,BlueSky:()=>m.A,Bookmark:()=>u.A,BookmarkActivated:()=>h.A,BookmarkNew:()=>p.A,CartFilled:()=>g.A,CartOutlined:()=>b.A,Check:()=>y.A,ChevronDown:()=>w.A,ChevronFill:()=>v.A,ChevronLeft:()=>A.A,ChevronRight:()=>f.A,ChevronUp:()=>C.A,Close:()=>k.A,Collapse:()=>E.A,Comment:()=>x.A,Copy:()=>$.A,CopyLink:()=>R.A,Dot:()=>S.A,DownloadCloud:()=>T.A,DownloadWeb:()=>N.A,Email:()=>B.A,EmailFilled:()=>L.A,Enlarge:()=>P.A,Expand:()=>O.A,Facebook:()=>I.A,Filmstrip:()=>M.A,Flipboard:()=>D.A,Gallery:()=>_.A,GoogleNews:()=>H.A,Grid:()=>q.A,Headphone:()=>F.A,Instagram:()=>W.A,LargeChevron:()=>K.A,LeftChevron:()=>j.A,Like:()=>V.A,LikeFilled:()=>G.A,Line:()=>U.A,LinkedIn:()=>z.A,List:()=>Z.A,LocationPin:()=>Q.A,Maximize:()=>ee.A,Menu:()=>te.A,NativeShare:()=>ie.A,Newsletter:()=>ne.A,NewsletterArrow:()=>re.A,OK:()=>Y.A,Paperclip:()=>J.A,Passkey:()=>ce.A,Pause:()=>oe.A,PhotoStack:()=>he.A,Pinterest:()=>ae.A,PitchforkUpvote:()=>le.A,PitchforkUpvoteFilled:()=>se.A,Play:()=>de.A,PlayOutlined:()=>pe.A,Playlist:()=>ue.A,Print:()=>me.A,RatingFilled:()=>ge.A,RatingHalf:()=>be.A,RatingOutlined:()=>ye.A,Replay:()=>fe.A,Rss:()=>ve.A,Search:()=>Ae.A,Share:()=>we.A,Shopping:()=>ke.A,SlimHeadphone:()=>Ce.A,Snapchat:()=>Ee.A,SocialHandle:()=>xe.A,SplitView:()=>$e.A,Spotify:()=>Re.A,Subscribe:()=>Se.A,Telegram:()=>Te.A,Threads:()=>De.A,Tiktok:()=>Be.A,Timestamp:()=>Ne.A,Triangle:()=>Le.A,TriangleDown:()=>Pe.A,TriangleUp:()=>Oe.A,Tumblr:()=>Ie.A,Twitter:()=>Me.A,VK:()=>je.A,VerificationBadge:()=>He.A,Vero:()=>_e.A,Viber:()=>qe.A,Video:()=>Fe.A,VolumeHigh:()=>We.A,VolumeMute:()=>Ke.A,WeChat:()=>Ve.A,WebLink:()=>Ue.A,Weibo:()=>Ge.A,Whatsapp:()=>ze.A,Xing:()=>Qe.A,YandexZen:()=>Xe.A,YouTube:()=>Ye.A,default:()=>Je});var n=i(92237),r=i(86138),o=i(69571),a=i(64607),l=i(90628),s=i(53090),d=i(74695),c=i(93107),u=i(315),h=i(52585),p=i(44584),m=i(81463),g=i(58366),b=i(72172),y=i(9218),f=i(25751),v=i(58180),A=i(18972),C=i(68804),w=i(40589),k=i(80046),E=i(56099),x=i(56807),$=i(4585),R=i(25601),S=i(60261),T=i(66087),N=i(39392),B=i(57942),L=i(62410),O=i(58332),P=i(83476),I=i(69192),M=i(50694),D=i(50907),H=i(24596),_=i(39336),q=i(49776),F=i(53636),W=i(7994),K=i(79350),j=i(65234),V=i(35483),G=i(74771),U=i(8990),z=i(25534),Q=i(42132),X=i(3503),Y=i(22650),J=i(13150),Z=i(61852),ee=i(30110),te=i(15447),ie=i(28828),ne=i(60779),re=i(65102),oe=i(13148),ae=i(24888),le=i(60889),se=i(13901),de=i(11118),ce=i(57946),ue=i(85026),he=i(5232),pe=i(25856),me=i(40641),ge=i(35149),be=i(36928),ye=i(85323),fe=i(81055),ve=i(29454),Ae=i(36652),Ce=i(20855),we=i(69657),ke=i(64964),Ee=i(74170),xe=i(89281),$e=i(12583),Re=i(59596),Se=i(86522),Te=i(46119),Ne=i(92566),Be=i(50610),Le=i(90040),Oe=i(15497),Pe=i(82652),Ie=i(32262),Me=i(33189),De=i(29011),He=i(192),_e=i(34214),qe=i(16576),Fe=i(12037),We=i(29186),Ke=i(3711),je=i(52783),Ve=i(85858),Ge=i(93470),Ue=i(27448),ze=i(90370),Qe=i(36216),Xe=i(51716),Ye=i(92459);const Je={Account:n.A,AgeGate:r.A,Arrow:o.A,ArrowOut:a.A,Article:l.A,BadgeArtist:s.A,BadgeDayOne:d.A,BadgeStaff:c.A,Bookmark:u.A,BookmarkActivated:h.A,BookmarkNew:p.A,BlueSky:m.A,CartFilled:g.A,CartOutlined:b.A,Check:y.A,ChevronRight:f.A,ChevronFill:v.A,ChevronLeft:A.A,ChevronUp:C.A,ChevronDown:w.A,Close:k.A,Collapse:E.A,Comment:x.A,Copy:$.A,CopyLink:R.A,Dot:S.A,DownloadCloud:T.A,DownloadWeb:N.A,Email:B.A,EmailFilled:L.A,Expand:O.A,Enlarge:P.A,Facebook:I.A,Filmstrip:M.A,Flipboard:D.A,GoogleNews:H.A,Gallery:_.A,Grid:q.A,Headphone:F.A,Instagram:W.A,LargeChevron:K.A,LeftChevron:j.A,Like:V.A,LikeFilled:G.A,Line:U.A,LinkedIn:z.A,LocationPin:Q.A,OK:Y.A,List:Z.A,Lock:X.A,Maximize:ee.A,Menu:te.A,NativeShare:ie.A,Newsletter:ne.A,NewsletterArrow:re.A,Paperclip:J.A,Pause:oe.A,Pinterest:ae.A,PitchforkUpvote:le.A,PitchforkUpvoteFilled:se.A,Play:de.A,Passkey:ce.A,Playlist:ue.A,PhotoStack:he.A,PlayOutlined:pe.A,Print:me.A,RatingFilled:ge.A,RatingHalf:be.A,RatingOutlined:ye.A,Replay:fe.A,Rss:ve.A,Search:Ae.A,Share:we.A,Shopping:ke.A,SlimHeadphone:Ce.A,Snapchat:Ee.A,SocialHandle:xe.A,SplitView:$e.A,Spotify:Re.A,Subscribe:Se.A,Telegram:Te.A,Timestamp:Ne.A,Tiktok:Be.A,Threads:De.A,Triangle:Le.A,TriangleUp:Oe.A,TriangleDown:Pe.A,Tumblr:Ie.A,Twitter:Me.A,VerificationBadge:He.A,Vero:_e.A,Viber:qe.A,Video:Fe.A,VolumeHigh:We.A,VolumeMute:Ke.A,VK:je.A,WeChat:Ve.A,Weibo:Ge.A,WebLink:Ue.A,Whatsapp:ze.A,Xing:Qe.A,YandexZen:Xe.A,YouTube:Ye.A}},15609(e,t,i){"use strict";i.d(t,{A:()=>d});var n=i(5556),r=i.n(n),o=i(96540),a=i(63486),l=i(53499);const s=function({url:e,dangerousDek:t}){return o.useEffect(()=>{window.Kendra.TRACK_COMPONENT.broadcast(l.G.RENDER,{name:"InternalLinkEmbed"})},[]),o.createElement(a.M,{href:e,dangerouslySetInnerHTML:{__html:t}})};s.propTypes={dangerousDek:r().string.isRequired,url:r().string.isRequired},s.displayName="InternalLinkEmbed";const d=s},72550(){"use strict"},15316(e,t,i){"use strict";i.d(t,{Kq:()=>l,em:()=>n.A});i(72550),i(85480);var n=i(17130);const r="default",o={index:0},a=()=>{},l=(e,t,i,n)=>{const{strategy:{enabled:l,method:s=r,options:d=(n?{index:n}:o)}={}}=e,c=t[s]||a;return l&&c({length:i,...d})}},17130(e,t,i){"use strict";i.d(t,{A:()=>n});const n={default:({index:e})=>e,disable:()=>null,end:({length:e})=>e-1}},30271(e,t,i){"use strict";i.d(t,{$D:()=>o,I0:()=>l,iA:()=>a,vY:()=>s});var n=i(96472);const r=(e,t)=>Object.keys(e).filter(e=>Object.hasOwnProperty.call(n.Ni,e)).map((i,r)=>{const o=t(i,e[i],r);return`\n      @media (min-width: ${n.Ni[i][0]}) {\n        ${o}\n      }\n     `}),o=({isFirstItem:e,isLastItem:t,itemSpacing:i})=>"string"==typeof i?e?`margin: 0 ${i} 0 0;`:t?`margin: 0 0 0 ${i};`:`margin: 0 ${i};`:r(i,(i,n)=>o({isFirstItem:e,isLastItem:t,itemSpacing:n})).join("\n"),a=({itemWidth:e})=>"string"==typeof e?`width: ${e};`:r(e,(e,t)=>a({itemWidth:t})).join("\n"),l=(e,t)=>!t&&e.scrollLeft<=e.scrollWidth-e.offsetWidth+1&&e.scrollLeft>=e.scrollWidth-e.offsetWidth-1,s=(e,t)=>!t&&0===e.scrollLeft},96461(e,t,i){"use strict";i.d(t,{C:()=>s,c:()=>l});var n=i(5556),r=i.n(n),o=i(96540),a=i(59867);const l=o.createContext(!1),s=({children:e})=>{const[t,i]=(0,o.useState)(!1),n=(0,o.useRef)(null);return(0,o.useEffect)(()=>{{const e=()=>{i(!0),n.current&&n.current.off()};n.current=window.Kendra.WINDOW_EVENT.on(a.m.SCROLL_DEBOUNCE,e)}return()=>{n.current&&n.current.off()}},[]),o.createElement(l.Provider,{value:t},e)};s.propTypes={children:r().node},s.displayName="HasScrolledProvider"},35363(e,t,i){"use strict";i.d(t,{Y:()=>o});var n=i(96540),r=i(96461);const o=()=>(0,n.useContext)(r.c)},45741(e,t,i){"use strict";i.d(t,{AV:()=>c,PA:()=>l,c7:()=>u,h8:()=>s,nK:()=>d});var n=i(38267),r=i(5556),o=i.n(r),a=i(26865);const l=({bottomSpacing:e})=>e&&!isNaN(e)?`margin-bottom: ${(0,a.Kq)(e)};`:"",s=({topSpacing:e})=>e&&!isNaN(e)?`margin-top: ${(0,a.Kq)(e)};`:"",d=["left","center","right"],c={left:"\n  margin-left: 0;\n  margin-right: auto;\n  ",center:"\n  margin-left: auto;\n  margin-right: auto;\n  ",right:"\n  margin-right: 0;\n  margin-left: auto;\n  "},u=n.Ay.div.withConfig({displayName:"BaseWrap-sc"})`
  margin: 0;
  ${l}
  ${s}
  ${({align:e})=>e&&d.includes(e)&&`\n    align-self: ${e};\n    justify-self: ${e};\n    ${c[e]};\n `}
 ${({textAlign:e})=>e&&d.includes(e)&&`text-align: ${e}; `}
`;u.propTypes={align:o().oneOf(d),as:o().string,bottomSpacing:o().number,textAlign:o().oneOf(d),topSpacing:o().number}},26865(e,t,i){"use strict";i.d(t,{C_:()=>N,FM:()=>A,Gg:()=>b,H4:()=>k,HK:()=>m,Kq:()=>h,Kw:()=>f,L7:()=>E,Pp:()=>C,R9:()=>$,Xm:()=>x,_o:()=>g,cr:()=>R,fl:()=>v,iL:()=>u,iq:()=>S,nd:()=>B,nv:()=>p,pe:()=>y,t6:()=>w,ty:()=>T});var n=i(58156),r=i.n(n),o=i(72115),a=i.n(o),l=i(38267),s=i(72462),d=i(96472),c=i(65606);const u=8;function h(e=1,t="rem"){const i=u*e,n="rem"===t?i/16/1+"rem":1*i+"px";return n||null}function p(e,t,i="dev"===c.env.BUILD_ENV){if(!e||0===Object.keys(e).length)return null;if(!t||0===t.length)return null;const n=t.split(".").reduce((e,t)=>e&&e[t],e);if(void 0===n){if(i)throw new Error(`Invalid theme token ${t} provided`);return null}return n}function m(...e){if("string"==typeof e[0])return({theme:t})=>m(t,...e);const[t,i,n={}]=e,r=p(t,i),o=r?p(t,`colors.palette.${r}`):null;return n.rgbOnly&&o?o.slice(5,o.length-3):o}function g(...e){if("string"==typeof e[0])return({theme:t})=>g(t,...e);const[t,i,n]=e;return`\n    ${`--${i}__token-name: "${n}"`};\n    ${`${i}: ${m(t,n)}`}\n  `}function b(...e){if("string"==typeof e[0])return({theme:t})=>b(t,...e);const[t,i]=e;if(!p(t,i))return null;const n=i.split(".").slice(2).map(e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()).join("-");return`\n    font: var(--font-${n});\n    font-feature-settings: var(--variant-${n}, normal);\n    text-transform: var(--text-case-${n}, normal);\n    letter-spacing: var(--tracking-${n}, normal);\n    line-break: var(--line-break-${n}, normal);\n    overflow-wrap: var(--overflow-wrap-${n}, normal);\n  `}function y(...e){if("string"==typeof e[0]||null===e[0])return({theme:t})=>y(t,...e);const[t,i=null,n=null,r="default"]=e,o="global"===r?d.ob:p(t,`interactive.links.${r||"default"}`);if(!o)return"";const{link:a,visited:l,hover:s,active:c,focus:u}=o,h=m(t,i||"colors.consumption.body.standard.body"),g=m(t,n),b=g&&h!==g?g:h;return`\n    color: ${h};\n    cursor: pointer;\n    &:link {\n      text-decoration: ${"null"===a.style?"inherit":a.style};\n      color: ${h};\n    }\n    &:visited {\n      text-decoration: ${"null"===l.style?"inherit":l.style};\n      color: ${h};\n    }\n    &:hover {\n      color: ${b};\n      text-decoration: ${"null"===s.style?"inherit":s.style};\n    }\n    &:active {\n      color: ${b};\n      text-decoration: ${"null"===c.style?"inherit":c.style};\n    }\n    &:focus {\n      color: ${b};\n      text-decoration: ${"null"===u.style?"inherit":u.style};\n    }\n    transition-property: color, background, text-shadow;\n    transition-duration: 0.2s;\n    transition-timing-function: ease-in-out;\n  `}function f(){return"\n    &:hover,\n    &:active {\n      text-decoration: none;\n    }\n  "}function v(e){return d.KV[e]||0}function A(e,t,i){const n=function(e,t){const i=d.SI[e][t];return d.xD[i]}(t,i),r=m(e,n);return`\n${"border"===i?`border-width: 1px;\n      border-style: solid;\n      border-color: ${r};`:""}\n${"background"===i?`background-color: ${r};`:""}\n${"text"===i?`color: ${r};`:""}\n${"icon"===i?`fill: ${r};\n      ${"disabled"===t?"pointer-events: none;":""}`:""}\n  `}function C(e,t){const i=p(e,`decorations.${t}`);if(!i)return null;switch(i.type){case"graphic-border-simple":return(0,s.SS)(i);case"graphic-border-full":return(0,s.$v)(i);case"badge":return(0,s.Xb)(i);case"background":return(0,s.ux)(i);case"none":return null;default:return`${i}px`}}function w(){return"\n    &::after {\n      display: table;\n      clear: both;\n      content: '';\n    }\n  "}function k(e){return`@media (min-width: ${e})`}function E(e){return`@media (max-width: ${e})`}function x(e,t){return`@media (min-width: ${e}) and (max-width: ${t})`}const $=(e,t,i)=>n=>{const o=r()(n,e);return!("function"==typeof t?t:a()(t))(o)?"":i};function R(){return"\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    visibility: initial;\n    opacity: 0;\n    margin: 0;\n    cursor: inherit;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n  "}const S=({palette:e})=>"inverted"===e,T=({palette:e})=>"transparent"===e;function N(e,t){const i=p(e,t?`${t}.family`:"typography.definitions.consumptionEditorial.body-core.family"),n=p(e,`typography.typefaces.${i}`);return n&&n.textBoxTrim?l.AH`
        text-box: trim-both text alphabetic;
      `:""}const B=l.AH`
  picture {
    transition: transform 0.3s ease;

    img {
      transition: filter 0.3s ease;
    }
  }

  &:hover picture,
  &:focus picture {
    transform: scale(1.03);

    img {
      filter: brightness(1.05);
    }
  }
`},32925(e,t,i){"use strict";i.d(t,{W:()=>r,f:()=>n});const n={IMAGES:"/account/saved/images",PRODUCTS:"/account/saved/products",BOARDS:"/account/saved/boards",SAVED:"/account/saved"},r={GO_TO_BOARDS:"Go to boards",VIEW_ALL:"View All"}},73590(e,t,i){"use strict";var n=i(96540),r=i(5556),o=i.n(r),a=i(57744),l=i(32485),s=i.n(l),d=i(63560),c=i.n(d),u=i(58156),h=i.n(u),p=i(38798),m=i(72267);const g=(0,m.YK)({truncatedButtonLabel:{id:"ArticlePage.TruncatedButtonLabel",defaultMessage:"Read Full Story",description:"ArticlePage component truncated button label"},backToArticle:{id:"ArticlePage.Back to article",defaultMessage:"Back to article",description:"Gallery slider back button text"},publishedInThe:{id:"ArticlePage.From the issue of",defaultMessage:"From the issue of",description:"Article page date text"},defaultDisclaimer:{id:"ArticlePage.DefaultDisclaimer",defaultMessage:"All products are independently selected by our editors. If you buy something, we may earn an affiliate commission.",description:"Default disclaimer for Article page"},anchorNavigationLabel:{id:"ArticlePage.AnchorNavigationLabel",defaultMessage:"Anchor navigation",description:"Accessible label for the anchor navigation landmark"}});var b=i(21729),y=i(19582),f=i(47655),v=i(92124),A=i(31706),C=i(91513),w=i(53499);class k extends n.PureComponent{componentDidMount(){window.Kendra.TRACK_COMPONENT.broadcast(w.G.RENDER,{name:"ResourceHint"}),this.props&&this.writeResourceHintLink(this.props)}writeResourceHintLink(e){const{as:t,hint:i,href:n}=e,r=document.createElement("link");r.as=t,r.href=n,r.rel=i,document.head.appendChild(r)}render(){return n.createElement(n.Fragment,null)}}const E=k;var x=i(13465),$=i(86659),R=i(38080),S=i(66657),T=i(79784),N=i(69148),B=i(90239),L=i(2404),O=i.n(L),P=i(1165),I=i(59749),M=i(38267),D=i(96472),H=i(26865);const _=(0,M.Ay)("div").withConfig({displayName:"LiveProductDisplayContainer"})`
  margin: ${(0,H.Kq)(3,"px")} 0;
  border: 1px solid
    ${({theme:e})=>(0,H.HK)(e,"colors.discovery.body.brand.accent")};
  padding: ${(0,H.Kq)(3,"px")};

  ${({theme:e})=>(0,H._o)(e,"background-color","colors.background.white")};

  ${(0,H.L7)(D.LO.md)} {
    padding-left: ${(0,H.Kq)(1.5,"px")};
  }
  ${(0,H.Xm)(D.LO.md,D.LO.lg-1)} {
    padding-right: ${(0,H.Kq)(9,"px")};
  }
  ${(0,H.Xm)(D.LO.lg,D.LO.xl-1)} {
    padding-right: ${(0,H.Kq)(6,"px")};
  }
  ${(0,H.H4)(D.LO.xl)} {
    padding-right: ${(0,H.Kq)(9,"px")};
  }
`,q=(0,M.Ay)("div").withConfig({displayName:"LiveProductDisplayTitle"})`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: ${(0,H.Kq)(1.5,"px")};
  ${({theme:e})=>(0,H.Gg)(e,"typography.definitions.consumptionEditorial.subhed-aux-secondary")};
  ${({theme:e})=>(0,H._o)(e,"color","colors.discovery.body.white.heading")};
`,F=(0,M.Ay)("div").withConfig({displayName:"LiveProductDisplayTimestamp"})`
  margin-bottom: ${(0,H.Kq)(.75,"px")};
  ${({theme:e})=>(0,H.Gg)(e,"typography.definitions.foundation.link-utility")};
  ${({theme:e})=>(0,H._o)(e,"color","colors.consumption.body.standard.adlabel")};
`,W=(0,M.Ay)("div").withConfig({displayName:"LiveSchemaProductConatiner"})`
  display: block;
  margin: 0;
  padding: 0;
`,K=(0,M.Ay)("div").withConfig({displayName:"LiveProductDisplayProductTitle"})`
  display: inline-block;
  margin-bottom: 0;

  &&&&,
  &&&&:link,
  &&&&:visited,
  &&&&:hover,
  &&&&:active {
    text-decoration: underline;
    ${({theme:e})=>(0,H.Gg)(e,"typography.definitions.discovery.hed-core-secondary")};
    ${({theme:e})=>(0,H._o)(e,"color","colors.consumption.body.standard.accent")};
  }

  &&&&:hover {
    text-decoration: none;
  }
`,j=(0,M.Ay)("div").withConfig({displayName:"LiveProductDisplayDescription"})`
  ${({theme:e})=>(0,H.Gg)(e,"typography.definitions.navigation.text-tertiary")};
  ${({theme:e})=>(0,H._o)(e,"color","colors.navigation.standard.item-primary")};
  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-box;
  margin-top: ${(0,H.Kq)(1.5,"px")};
  margin-bottom: 0;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
`;var V=i(60162),G=i(25203),U=i(43428),z=i(41598);const Q=({product:e=null,timestamp:t=(new Date).toISOString(),eventName:i="Deal",className:r="",showOfferUrl:o=!1,enableActionIdForFeaturedDeal:a=!1})=>{if(!e)return null;const l=h()(e,"editorNote",""),s=h()(e,"brand.name",""),d=h()(e,"name",""),c=s+" "+d,u=h()(e,"id",""),p=h()(e,"offers[0]",{}),m=h()(e,"offers",[]),g=h()(D.uM,h()(p,"currency",""),""),b=(e,t)=>h()(e,t,""),y=b(p,"price"),f=b(p,"comparisonPrice"),v=f&&y>f?n.createElement(n.Fragment,null,c," ",n.createElement("span",{style:{textDecoration:"line-through"}},g," ",y)," ",g," ",f):n.createElement(n.Fragment,null,c," ",g," ",y),A=(0,z.EF)(t),C={dangerousHed:d,brand:{name:s},id:u,contentType:"Featured Deal Product",offers:m,component:"featured_deal"},w=(e,t,i)=>{(0,V.g1)({window,product:{...C,component:"featured_deal"},index:e,actionId:i,layout:"ProductEmbed",event:t,layoutTitle:c})};let k=(e=>{if(m&&m.length>0)return e?m[0].purchaseUri:m[0].shortUrl})(o),E="_blank";"#"===k&&(k+=h()(e,"id",""),E="_self");const{isCnastLink:x,enableActionIdMapping:$}=(0,G.Vy)(k,a),R=n.useRef(null);return n.useEffect(()=>{const e=R.current;e&&(0,V.Yp)("ProductEmbed",[e],"",0,!0)},[]),n.createElement(_,{ref:R,className:r,"data-item":JSON.stringify(C)},n.createElement(q,null,i),n.createElement(B.A,null,n.createElement(F,null,"Updated:"," ",A.toLocaleString("en-US",{hour:"numeric",minute:"2-digit",month:"short",day:"numeric",year:"numeric"}).replace(",",""))),n.createElement(W,null,n.createElement(K,{as:"a",href:k,target:E,rel:"noopener noreferrer",className:"link featured-deal-link",onClick:(e,t)=>((e,t)=>{const i=e?.currentTarget?.getAttribute("href"),n=(0,G.hh)();if($&&i){e.preventDefault();const{href:r}=(0,U.P)({event:e,gtmTrackOnClick:w,linkProps:i,position:t,type:"FeaturedDealLiveSchema",component:"featured_deal",queryParams:n});window.open(r,E)}else if(x&&i){e.preventDefault();const{href:r}=(0,G.ry)(i,"featured_deal",n);e.currentTarget.setAttribute("href",r),window.open(r,E),w(t,e)}else w(t,e),window.open(k,E)})(e,t)},v||"Sample Product Title"),l&&n.createElement(j,null,l)))};Q.propTypes={product:o().shape({name:o().string,hed:o().string,description:o().string,editorNote:o().string,id:o().string,offers:o().arrayOf(o().shape({price:o().string,comparisonPrice:o().string,currency:o().string,shortUrl:o().string,purchaseUri:o().string,sellerName:o().string})),currency:o().string,brand:o().string,comparisonPrice:o().string}),timestamp:o().string,eventName:o().string,className:o().string,showOfferUrl:o().bool,enableActionIdForFeaturedDeal:o().bool};const X=Q;var Y=i(19607),J=i(72987),Z=i(49741),ee=i(45135),te=i(4262),ie=i(73275),ne=i(75163),re=i(60881);const oe=M.Ay.div.withConfig({displayName:"InContentRecircWrapper"})`
  display: flex;
  position: relative;
  flex-direction: column;
  background: var(${ne.pT.Color.Surface});
  width: 100%;
  gap: ${(0,H.Kq)(1)};

  ${(0,H.L7)(D.LO.md)} {
    width: ${(0,H.Kq)(44.25)};
    height: ${(0,H.Kq)(24.5)};
  }

  ${(0,H.Xm)(D.LO.md,D.LO.lg)} {
    width: ${(0,H.Kq)(79.25)};
    height: ${(0,H.Kq)(35.75)};
  }

  ${(0,H.H4)(D.LO.lg)} {
    height: ${(0,H.Kq)(29.5)};
  }
`,ae=M.Ay.div.withConfig({displayName:"InContentRecircHeader"})`
  margin: 0;
  border-top: ${(0,H.Kq)(.125)} solid
    ${(0,H.HK)("colors.consumption.lead.standard.divider")};
  padding: ${(0,H.Kq)(1)} 0 0 0;
  text-transform: uppercase;
  color: ${(0,H.HK)("colors.discovery.body.white.heading")};
  ${({theme:e})=>(0,H.Gg)(e,"typography.definitions.foundation.meta-primary")}
`,le=M.Ay.div.withConfig({displayName:"InContentRecircCarousel"})`
  position: relative;
  width: 100%;
  height: auto;
  overflow: visible;

  ${(0,H.Xm)(D.LO.md,D.LO.lg)} {
    height: ${(0,H.Kq)(30)};
    overflow: hidden;
  }

  ${(0,H.H4)(D.LO.lg)} {
    height: ${(0,H.Kq)(30)};
    overflow: hidden;
  }
`,se=M.Ay.div.withConfig({displayName:"InContentRecircCarouselWrapper"})`
  position: relative;
  overflow-x: auto;
  overflow-y: visible;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  width: 100%;
  height: 100%;

  ${(0,H.L7)(D.LO.md)} {
    overflow-y: visible;
  }

  ${(0,H.H4)(D.LO.md)} {
    overflow-y: hidden;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`,de=M.Ay.div.withConfig({displayName:"InContentRecircCarouselContent"})`
  display: flex;
  align-items: flex-start;
  padding: 0 ${(0,H.Kq)(1)} 0 0;
  height: auto;
  gap: ${(0,H.Kq)(1)};
  color: ${(0,H.HK)("colors.discovery.body.white.heading")};
  ${({theme:e})=>(0,H.Gg)(e,"typography.definitions.foundation.meta-primary")}
`,ce=M.Ay.div.withConfig({displayName:"InContentRecircCarouselItem"})`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  flex-shrink: 0;
  cursor: pointer;

  /* Mobile 2 items per row */
  ${(0,H.L7)(D.LO.md)} {
    max-width: calc(50% - ${(0,H.Kq)(.5)});
  }
`,ue=(0,M.Ay)(re.s).withConfig({displayName:"InContentRecircItemLink"}).attrs({as:"a",colorToken:"colors.discovery.body.white.heading",typeToken:"typography.definitions.foundation.meta-primary",hasUnderline:!1})`
  &:hover,
  &:focus {
    opacity: 0.8;
    text-decoration: underline;
  }

  &:active,
  &:link,
  &&:not(.button):not(.text):not(.link):link,
  &:visited {
    text-decoration: none;
  }
`,he=M.Ay.div.withConfig({displayName:"InContentRecircImageWrapper"})`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  aspect-ratio: 3 / 2;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,pe=M.Ay.div.withConfig({displayName:"InContentRecircItemTitleWrapper"})`
  display: flex;
  flex: 1;
  align-items: flex-start;
  cursor: pointer;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  box-sizing: border-box;

  ${(0,H.L7)(D.LO.md)} {
    padding: ${(0,H.Kq)(1)} 0;
  }

  ${(0,H.H4)(D.LO.md)} {
    padding: ${(0,H.Kq)(1)} 0;
    width: ${(0,H.Kq)(23.75)};
  }
`,me=M.Ay.div.withConfig({displayName:"InContentRecircItemTitle"})`
  /* stylelint-disable value-no-vendor-prefix */
  display: -webkit-box;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  /* stylelint-enable value-no-vendor-prefix */
  overflow-wrap: break-word;
`,ge=M.Ay.div.withConfig({displayName:"InContentRecircButtonWrapper"})`
  display: flex;
  flex-direction: row;
  gap: ${(0,H.Kq)(1)};
  margin-right: ${(0,H.Kq)(1)};
  margin-left: auto;

  button {
    height: ${(0,H.Kq)(1.5)};
    min-height: ${(0,H.Kq)(1.5)};
  }
`,be=M.Ay.button.withConfig({displayName:"InContentRecircButton"})`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  width: ${(0,H.Kq)(2)};
  height: ${(0,H.Kq)(6)};

  &:hover:not(:disabled) {
    cursor: pointer;
  }

  svg {
    fill: var(${ne.pT.Color.Icon});
    transition: fill 0.2s;
    cursor: pointer;
  }

  &:hover:not(:disabled) svg {
    fill: var(${ne.pT.Color.IconActive});
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled svg {
    opacity: 0.5;
    cursor: not-allowed;
    fill: var(${ne.pT.Color.IconDisabled});
  }

  ${({direction:e})=>"back"===e&&M.AH`
      svg {
        transform: rotate(180deg);
        transform-origin: center;
      }
    `};

  ${({direction:e})=>"forward"===e&&M.AH`
      svg {
        transform-origin: center;
      }
    `};
`;var ye=i(14307),fe=i(49380);const ve=()=>window.innerWidth<768,Ae=({direction:e,label:t})=>{const i={type:e,label:t,subject:"recirc_unit",placement:"incontent_recirc_mid_content",subject_version:(0,fe.Bh)(ve())};(0,ye.kg)(i)},Ce=(e,t)=>{const i=(0,n.useRef)([]);return(0,n.useEffect)(()=>{i.current=i.current.slice(0,e.length)},[e.length]),(0,n.useEffect)(()=>{const n=new IntersectionObserver(n=>{n.forEach(n=>{if(n.isIntersecting){const r=i.current.indexOf(n.target);-1!==r&&(({item:e,index:t,totalItems:i,label:n})=>{const r={type:"impression",subject:"recirc_unit",label:n,placement:"incontent_recirc_mid_content",index:t,total_index:i,items:[{content_id:e.id,content_title:e.title,content_type:e.contentType,content_url:e.url}],strategy:(0,ye.Cu)(e.url),subject_version:(0,fe.Bh)(ve())};(0,ye.kg)(r)})({item:e[r],index:r,totalItems:e.length,label:t})}})},{threshold:.5,trackVisibility:!0,delay:100});return i.current.forEach(e=>{e&&n.observe(e)}),()=>n.disconnect()},[e,t]),i},we=({children:e,title:t})=>{const i=(0,n.useRef)(null),[r,o]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{const e=i.current;e&&o(e.scrollHeight>e.clientHeight)},[e]),n.createElement(pe,null,n.createElement(me,{ref:i,title:r?t:void 0},e))};we.propTypes={children:o().node,title:o().string};const ke=e=>{const{hed:t,items:i=[]}=e;if(!i||0===i.length)return null;const r=(0,n.useRef)(null),[o,a]=(0,n.useState)(!1),[l,s]=(0,n.useState)(!0),d=Ce(i,t);n.useEffect(()=>{window.Kendra.TRACK_COMPONENT.broadcast(w.G.RENDER,{name:"InContentRecirc"})},[]);const c=(0,n.useCallback)(()=>{if(r.current){const{scrollLeft:e,scrollWidth:t,clientWidth:i}=r.current;a(e>0),s(e<t-i-10)}},[]),u=()=>{if(r.current){const e=r.current.querySelector('[class*="InContentRecircCarouselItem"]');if(e){return e.offsetWidth+H.iL}}return 150+H.iL};return n.useEffect(()=>{c();const e=r.current;if(e)return e.addEventListener("scroll",c),()=>e.removeEventListener("scroll",c)},[i,c]),n.createElement(oe,null,n.createElement(ae,null,t),n.createElement(le,null,n.createElement(se,{ref:r},n.createElement(de,null,i.map((e,r)=>n.createElement(ce,{key:e.url||`item-${r}`,ref:e=>d.current[r]=e,onClick:()=>(({item:e,index:t,totalItems:i,label:n})=>{const r={type:"click",label:n,subject:"recirc_unit",items:[{content_id:e.id,content_title:e.title,content_type:e.contentType,content_url:e.url}],strategy:(0,ye.Cu)(e.url),subject_version:(0,fe.Bh)(ve()),placement:"incontent_recirc_mid_content",index:t,total_index:i};(0,ye.kg)(r)})({item:e,index:r,totalItems:i.length,label:t})},n.createElement(ue,{href:e.url||"#",title:e.title},e.segmentedSources&&n.createElement(he,null,n.createElement(ie.A,{contentType:"photo",segmentedSources:e.segmentedSources,altText:e.title||"Carousel item",isLazy:!1,sizes:`(min-width: ${D.LO.md}) 200px, 50vw`})),e.title&&n.createElement(we,null,e.title))))))),n.createElement(ge,null,n.createElement(be,{onClick:()=>{if(Ae({direction:"back",label:t}),r.current){const e=u();r.current.scrollBy({left:-e,behavior:"smooth"}),setTimeout(c,300)}},direction:"back",disabled:!o,"aria-label":"Scroll left"},n.createElement(te.A,null)),n.createElement(be,{onClick:()=>{if(Ae({direction:"forward",label:t}),r.current){const e=u();r.current.scrollBy({left:e,behavior:"smooth"}),setTimeout(c,300)}},direction:"forward",disabled:!l,"aria-label":"Scroll right"},n.createElement(te.A,null))))};ke.propTypes={hed:o().string,items:o().arrayOf(o().shape({title:o().string,description:o().string,url:o().string,sources:o().objectOf(o().shape({url:o().string,width:o().number,height:o().number})),segmentedSources:o().shape({sm:o().arrayOf(o().shape({url:o().string,width:o().number,height:o().number})),lg:o().arrayOf(o().shape({url:o().string,width:o().number,height:o().number}))})}))};const Ee=ke;var xe=i(36163),$e=i(27287);const Re=(0,ee.Ng)(e=>{const t=(e=>{const t=e.closrRecirc||{},i=(e=>{const t=(e.componentConfig?.RecircList||{}).settings||{};return t?.experimentName})(e);if(i&&t[i]?.length)return t[i];const n=e["head.pageType"];return e[n]?.recircRelated||[]})(e),i=(e.componentConfig?.InContentRecirc||{}).settings||{},{hed:n}=i;return{items:t.slice(0,6).map(e=>{const t=e.image||e.tout||e.promoImage||{},i=e.dangerousHed||e.hed||e.title||"",n=(0,$e.L)((0,xe.A)(i));return{id:e.contentId||e.id,contentType:e.contentType,title:n,url:e.url,segmentedSources:t.segmentedSources||e.segmentedSources,sources:t.sources||e.sources,image:{url:t.url||"",alt:t.altText||n}}}),hed:n}})(Ee);Re.displayName="InContentRecirc";const Se=Re,Te=(0,x.y)(Se,"InContentRecirc");var Ne=i(12501),Be=i(11025),Le=i(26938),Oe=i(24532);function Pe(e){return e&&"p"===e[0]}function Ie({children:e,targetParagraphIndex:t,nodeToInject:i,requireNextParagraph:n=!1}){if(!t||t<1)return e;let r=0,o=!1;const a=[];return e.forEach((l,s)=>{if(a.push(l),Pe(l)&&(r++,r===t&&!o))if(n){Pe(e[s+1])&&(o=!0,a.push(i))}else o=!0,a.push(i)}),a}var Me=i(92920),De=i(89871);const He=(e=[])=>Array.isArray(e)&&e.reduce((e,t,i)=>Array.isArray(t)&&t.length>1?e+He(t):"string"==typeof t&&0!==i?e+t.trim().replace(/\s+/gi," ").split(" ").length:e,0);var _e=i(23618),qe=i(74804),Fe=i(29670),We=i(26641),Ke=i(30543),je=i(30),Ve=i(73730),Ge=i(13099),Ue=i(29912),ze=i(69458),Qe=i(33500),Xe=i(15539),Ye=i(68426),Je=i(16302),Ze=i(77307),et=i(34980),tt=i(77527),it=i(56082),nt=i(41108),rt=i(40653),ot=i(51e3),at=i(1123),lt=i(43152),st=i(18608),dt=i(25423),ct=i(56317);const ut=(0,I.h5)(Ke.A),ht=M.AH`
  ${({pageBackgroundTheme:e})=>e?M.AH`
        &:not([class*='theme-']) {
          ${(0,at.Rn)(e)};
        }
      `:M.AH`
      &:not([class*='theme-']) {
        ${({theme:e})=>(0,je.j)(e,"page-background")};
      }
    `}
  .grid-layout__content {
    ${(0,H.H4)(D.LO.md)} {
      grid-column: 3 / span 8;
    }

    ${(0,H.H4)(D.LO.lg)} {
      grid-column: 2 / span 6;
    }

    ${(0,H.Xm)(D.LO.sm,D.LO.md)} {
      grid-column: 1 / -1;
    }
  }

  .grid-layout--adrail.narrow {
    .container--body-inner {
      ${(0,H.H4)(D.LO.md)} {
        grid-column: 1 / -1;
      }
    }

    ${Je.YX} {
      &:first-child {
        margin-top: 0;

        ${Je.fz} {
          margin-top: 0;
        }
      }
    }
  }

  .container--body {
    grid-gap: 20px;
  }

  inline-embed[name='align-right'] {
    text-align: right;
  }

  inline-embed[name='align-center'] {
    text-align: center;
  }
`,pt=(0,M.Ay)(ut).withConfig({displayName:"ArticlePageBase"})`
  &&& {
    ${ht}
    ${({shouldHideBaseTopPadding:e})=>e&&"padding-top : 0;"}
    ${({hideNav:e,shouldPrioritizeSeriesPagination:t,hasContentHeaderLogo:i})=>!t&&i&&(e=>e?"\n    header.site-navigation {\n      margin-bottom: -7rem;\n      transform: translateY(-150%);\n      transition: all 1000ms ease;\n    }\n    ":"\n    header.site-navigation {\n      margin-bottom: -7rem;\n      transition: all 500ms ease;\n    }\n")(e)}
  }
`,mt=M.DU`
    .channel--body {
      ${ht}
    }
    
    .body__container {
      grid-column: 1/ -1;
    
      ${(0,H.H4)(D.LO.md)} {
        grid-column: 3 / span 8;
      }
    }
  
    /* 1. required to enforce proper alignment when text may be less than a full line
       2. remove extra top spacing added by default paragraph margins */
      .article__body {
        margin-bottom: ${(0,H.Kq)(2)};
        width: 100%; /* 1 */
  
        p:first-child:not(.callout--group-item):not(.upc-brandName) {
          margin-top: 0; /* 2 */
        }
  
        .small {
          font-variant: small-caps;
          text-transform: lowercase;
          font-style: normal;
        }
  
        .underline {
          text-decoration: underline;
          font-style: inherit;
        }

        .italic {
          font-style: italic;
        }

        ${tt.Jp} .underline {
          font-style: inherit;
        }

        ${tt.Jp} .italic {
          font-style: italic;
        }
      }

      .article-white-background {
        background-color: white;
        padding: 1rem;
        ${(0,H.t6)()}
      }
  
      .article__body > .body__inner-container > {
        & {
          ${(0,H.L7)(D.LO.md)} {
            .grid-items-3${Ye.v} {
              ${rt.E}{    
                margin-bottom: ${(0,H.Kq)(2.5)};
              }

              ${rt.E}:last-child:nth-child(odd) {    
                grid-column: 1 / 3;
              } 
            }
          }
          ${({hideSideBySideViewOnMobile:e})=>e&&`\n            ${(0,H.L7)(D.LO.md)} {\n              ${Ye.v} {\n                ${rt.E} {\n                  grid-column: 1 / -1;\n                }\n              }\n            }\n          `}
        }

        ${et.HT}, .cne-video-embed {
          &:first-child {
            margin-top: 0;
          }
        }

        inline-embed:first-child ${et.HT} {
          margin-top: 0;
        }
      }

      .article__body > .body__inner-container > figure.asset-embed {
        padding: 0;
      }


      .article__body--grid-margins {
        grid-column: 1 / -1;
      }

      /**
       1. have ad span more columns from the right panel
       to have a larger right margin
       2. have it span 3 which is intended in a 12 column grid
       */
       .grid-layout__aside {
         display: none;
     
         ${(0,H.H4)(D.LO.lg)} {
           display: block;
           min-width: 300px;
     
           ${Ze.o6} {
             top: 90px;
           }
         }
     
         ${Je.YX} {
           &:first-child {
             margin-top: 0;
     
             ${Je.fz} {
               margin-top: 0;
             }
           }
         }
       }
       ${Ue.q} {
        ${({shouldEnableFullArticleInverted:e,theme:t})=>e&&`color: ${(0,H.HK)(t,"colors.consumption.body.inverted.body")}`}
}

        ${Ue.q} {
          ${({dividerColor:e})=>e&&`\n                .body__inner-container  > hr {\n                    background: #${e};\n                    height: 1px;\n                }\n              `}
       }

  `,gt=(0,M.Ay)("div").withConfig({displayName:"PaywallInlineBarrierWithWrapperGrid"})`
  ${({adRail:e})=>!e&&`\n    > ${rt.E} {\n      grid-column: 1 / -1;\n    }`}
`,bt=(0,M.Ay)("div").withConfig({displayName:"ArticlePageLedeBackground"})`
  ${({theme:e})=>(0,je.j)(e,"lede-background")};
`,yt=(0,M.Ay)("div").withConfig({displayName:"ArticlePageContentBackGround"})`
  ${({theme:e})=>(0,je.j)(e,"lede-background")}
  padding-top: ${(0,H.Kq)(2)};

  @media (min-width: 1208px) {
    padding-top: ${(0,H.Kq)(4)};
  }

  ${({togglePaddingTop:e,hasReducedBackgroundSpacing:t})=>"large"===e&&`padding-top: ${(0,H.Kq)(4)};\n       ${(0,H.H4)(D.LO.md)} { \n        padding-top: ${t?(0,H.Kq)(4):(0,H.Kq)(6)};\n       }\n  `}

  ${({enableActionBar:e})=>e&&`\n    ${(0,H.L7)(D.LO.xxl)}{\n      padding-top: ${(0,H.Kq)(6)};\n    }\n    ${(0,H.H4)(D.LO.lg)} {\n      position: relative;\n    }\n  `}

  ${({togglePaddingTop:e})=>"xlarge"===e&&`${(0,H.H4)(D.LO.lg)} {  padding-top: ${(0,H.Kq)(8)}; }`}
  
    ${({isMobileTruncated:e})=>e&&`\n          position: relative;\n          height: 890px;\n          overflow: hidden;\n  \n          &::before {\n            display: block;\n            position: absolute;\n            bottom: 0;\n            z-index: 1;\n            background: linear-gradient(\n              0deg,\n              rgba(255, 255, 255, 1) 20%,\n              rgba(255, 255, 255, 0) 100%\n            );\n            width: 100%;\n            height: 192px;\n            content: '';\n          }\n  \n          ${(0,H.H4)(D.LO.md)} {\n            height: auto;\n            overflow: visible;\n  \n            &::before {\n              display: none;\n            }\n          }\n        `}

  ${({cartoonVariation:e})=>"card"===e&&M.AH`
      ${tt.SX}::before, ${tt.SX}::after {
        border: none;
      }

      ${tt.SX} {
        ${(0,H._o)("background-color","colors.background.brand")};
        border: none;
        padding: ${(0,H.Kq)(3)} ${(0,H.Kq)(6)};

        ${(0,H.H4)(D.LO.lg)} {
          ${ot.Pq} a {
            width: ${(0,H.Kq)(5)};
          }
        }
      }
    `}
`,ft=(0,M.Ay)("div").withConfig({displayName:"MobileRecircMostPopular"})``,vt=(0,M.Ay)("div").withConfig({displayName:"ArticlePageChunks"})`
  ${({adRail:e})=>e&&`\n    ${dt.qV} {\n      margin-right: auto;\n      margin-left: auto;\n      width: auto;\n    }`}

  .grid:last-child {
    .body__container > .body__inner-container > *:last-child {
      ${it.iq}:last-child {
        display: none;
      }
    }
  }

  ${({horizontalRuleStyle:e})=>"thin"===e&&"\n        .body__container {\n          .callout--has-top-border {\n            border-top-width: 1px;\n          }\n\n          hr {\n            height: 1px;\n          }\n        }\n      "}

  ${({hasTopSpacing:e})=>!e&&`\n        .inset-embedded-lede {\n          @media (min-width: 0px) and (max-width: calc(${D.LO.md} - 1px)) {\n            ${nt.HO} {\n              transform: translateX(-50%);  /* 1 */\n              margin-left: 50%;\n              width: 100vw;\n            }\n          }\n        }\n\n        ${(0,H.H4)(D.LO.md)} {\n          .body__container {\n            p:first-of-type {\n              margin-top: 0;\n            }\n\n            .inset-embedded-lede {\n              margin-top: 0;\n            }\n          }\n        }\n    `}

  @media print {
    ${rt.A} {
      display: block;
    }

    ${rt.A} > p {
      font-size: 17px;
    }
  }

  ${({pageBackgroundTheme:e})=>e&&".ad.ad--mid-content {\n      .ad-label {\n        color: #1A1A1A;\n      }\n    }"}
`,At=(0,M.Ay)(Ve.A.Utility).withConfig({displayName:"ArticlePageBodyMobileTruncatedBtn"})`
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: 2;
  margin-left: -100px;
  width: 200px;

  ${(0,H.H4)(D.LO.md)} {
    display: none;
  }
`,Ct=(0,M.Ay)(Ge.M).withConfig({displayName:"ArticlePageDisclaimer"})`
  ${(0,H.Gg)("typography.definitions.discovery.subhed-section-collection")}
  ${({theme:e})=>(0,H._o)(e,"color","colors.consumption.body.standard.body")};
  ${(0,H.H4)(D.LO.md)} {
    .grid-layout--adrail & {
      grid-column: 1 / -1;
    }
  }

  span {
    font-style: normal;
  }
`,wt=(0,M.Ay)("div").withConfig({displayName:"ArticlePageChunksContent"})`
  ${({isNarrowContentWell:e})=>e&&`\n        .grid > *:first-child,\n        .body__container {\n          grid-column: 1 / -1;\n\n          ${(0,H.H4)(D.LO.lg)} {\n            grid-column: 4 / span 6;\n          }\n        }\n\n        ${tt.SX} {\n          .grid--item {\n            grid-column: 1 / -1;\n          }\n        }\n      `}

  ${({shouldBlurText:e})=>{e&&M.AH`
        .grid:first-of-type .body__container p.has-dropcap::first-letter {
          color: transparent;
        }
        ${Ue.q} {
          * {
            text-shadow: 0 0 20px
              rgba(
                ${(0,H.HK)("colors.consumption.body.standard.body")},
                0.5
              );
            color: transparent;
          }

          a:not(.button) {
            ${({theme:e})=>(0,H.pe)(e,"colors.consumption.body.standard.link","colors.consumption.body.standard.link-hover")};
            text-shadow: 0 0 20px
              rgba(
                ${(0,H.HK)("colors.consumption.body.standard.link")},
                0.5
              );
          }
        }
      `}}
`,kt=((0,M.Ay)("article").withConfig({displayName:"ArticlePageMainContent"})`
  ${({shouldBlurText:e})=>e&&"\n        .grid {\n          .body__container {\n            p.has-dropcap,\n            p.has-dropcap__lead-standard-heading {\n              &::first-letter {\n                color: inherit;\n              }\n            }\n          }\n        }\n      "}
`,(0,M.Ay)(De.A).withConfig({displayName:"ArticlePageSplitAdRail"})`
  ${Ze.o6},
  ${Ze.o6} > ${Ze.RV} {
    height: 100%;
  }

  > aside > ${Ze.o6} {
    position: static;
  }
`),Et=(0,M.Ay)("div").withConfig({displayName:"ArticlePageSplitAdRailContent"})`
  display: flex;
  flex-direction: column;
  height: 100%;

  ${Ze.o6} {
    margin-bottom: 0;
  }

  > div {
    flex: 1;
  }
`,xt=(0,M.Ay)("div").withConfig({displayName:"ArticlePageSplitAdRailTop"})``,$t=(0,M.Ay)("div").withConfig({displayName:"ArticlePageSplitAdRailMiddle"})`
  margin-top: 40px;
`,Rt=(0,M.Ay)("div").withConfig({displayName:"ArticlePageSplitAdRailBottom"})`
  margin-top: 40px;
`,St=(0,M.Ay)("div").withConfig({displayName:"ArticlePageBodyGridContainer"})`
  width: 100%;
`,Tt=M.Ay.div.withConfig({displayName:"ArticlePageChunksGrid"})`
  ${Ue.q} > ${ct.g} {
    padding: 20px 0;
  }
  ${Ue.q} > ${Je.YX} {
    width: unset;

    ul,
    li {
      margin: unset;
    }
    ${(0,H.H4)(D.LO.lg)} {
      display: none;
    }
  }
  ${({adRail:e,wideContent:t})=>!e&&`\n     > ${rt.E} {\n      grid-column: 1/ -1;\n      ${(0,H.H4)(D.LO.md)} {\n        grid-column: ${t?"2 / span 10":"3 / span 8"};\n      }\n    }`}
  > ${rt.E} {
    margin-bottom: ${(0,H.Kq)(2)};
  }

  ${({pageBackgroundTheme:e})=>e&&` .ad.ad--in-content {\n        display: none;\n      }\n      ${lt.j} {\n        margin-top: 2rem;\n      }  \n    `}
`,Nt=M.Ay.div.withConfig({displayName:"ArticlePageContentFooterGrid"})`
  ${rt.E} {
    grid-column: 1 / -1;
    ${(0,H.H4)(D.LO.md)} {
      grid-column: 3 / span 8;
    }
    ${({isNarrow:e})=>e&&`\n         ${(0,H.H4)(D.LO.md)} {\n            grid-column: 4 / span 6;\n          }\n         `}
  }
`,Bt=M.Ay.div.withConfig({displayName:"ArticlePageDisclaimerGrid"})`
  ${({disclaimerPosition:e})=>"bottom"===e&&"\n      .disclaimer {\n        border: none;\n      }\n    "}
  ${({adRail:e})=>!e&&`\n    > ${rt.E} {\n      grid-column: 1/ -1;\n      ${(0,H.H4)(D.LO.md)} {\n        grid-column: 3 / span 8;\n      }\n    }`}
`,Lt=M.Ay.div.withConfig({displayName:"ContentWrapperGrid"})`
  ${({isadRail:e})=>!e&&`\n    > ${rt.E} {\n      grid-column: 1/ -1;\n      ${(0,H.H4)(D.LO.md)} {\n        grid-column: 3 / span 8;\n      }\n    }`}
`,Ot=M.Ay.div.withConfig({displayName:"ArticlePageCommentingGrid"})`
  ${({isAdRail:e,isNarrow:t})=>!e&&`\n    > ${rt.E} {\n      grid-column: 1 / -1;\n      ${t?`\n            ${(0,H.H4)(D.LO.lg)} {\n              grid-column: 4 / span 6;\n            }\n          `:`\n            ${(0,H.H4)(D.LO.md)} {\n              grid-column: 3 / span 8;\n            }\n          `}\n    }`}
`,Pt=(0,M.Ay)(ze.A).withConfig({displayName:"LinkStackArticlePage"})`
  margin: 48px 0;
  padding-bottom: 0;

  ${Qe.bU} {
    margin: 0;
  }

  ${Xe.OE} > ul {
    margin-left: 0;
    padding-left: 0;
  }
`,It=(0,M.Ay)(st.vm).withConfig({displayName:"ArticlePageIssueDate"}).attrs(e=>({as:"span",colorToken:"colors.consumption.body.standard.body-deemphasized",typeIdentity:"typography.definitions.consumptionEditorial.description-feature",...e}))`
  display: flex;
  justify-content: center;
  padding-bottom: ${(0,H.Kq)(4)};
  text-align: center;
`,Mt=M.Ay.div.withConfig({displayName:"InContentCMUWrapper"})`
  ${(0,H.L7)(D.LO.md)} {
    height: ${(0,H.Kq)(24.5)};
  }

  ${(0,H.Xm)(D.LO.md,D.LO.lg)} {
    height: ${(0,H.Kq)(35.75)};
  }

  ${(0,H.H4)(D.LO.lg)} {
    height: ${(0,H.Kq)(29.5)};
  }
`;var Dt=i(46897),Ht=i(74679),_t=i(71886),qt=i(6442),Ft=i(94828),Wt=i(73347),Kt=i(70251),jt=i(68116),Vt=i(36211);const Gt=M.Ay.div.withConfig({displayName:"MidRecircWrapper"})`
  &&& {
    ${jt.Tr} {
      ${jt.hU} {
        text-decoration: none;
      }
      ${jt.IB} {
        display: none;
      }
    }

    ${Vt.Y} {
      ${(0,H.H4)(D.LO.sm)} {
        margin-bottom: ${(0,H.Kq)(1)};
      }
    }
  }
  padding: ${(0,H.Kq)(2)} 0 ${(0,H.Kq)(4)} 0;
  ${(0,H.L7)(D.LO.md)} {
    padding-top: 0;
  }

  ${Vt.Y} {
    ${(0,H.Gg)("typography.definitions.discovery.hed-bulletin-primary")}
    ${({theme:e})=>(0,H._o)(e,"color","colors.discovery.body.white.heading")}
  }
  ${jt.Rp} {
    display: block;
    border-bottom: 1px solid;
    padding-top: ${(0,H.Kq)(2)};
    ${({theme:e})=>(0,H._o)(e,"border-bottom-color","colors.discovery.body.white.border")}
  }

  ${jt.Tr} {
    padding: 0;
  }

  ${jt.tP} {
    width: ${(0,H.Kq)(12)};

    ${(0,H.H4)(D.LO.sm)} {
      display: block;
      float: right;
      margin: 0 0 ${(0,H.Kq)(2)} ${(0,H.Kq)(2)};
    }
  }

  ${Qe.QW} {
    border-top: 1px solid;
    padding-top: ${(0,H.Kq)(2)};
    ${({theme:e})=>(0,H._o)(e,"border-top-color","colors.discovery.body.white.border")}
  }
  ${Qe.bU} {
    margin-top: 0;
    margin-bottom: ${(0,H.Kq)(2)};
    ${(0,H.Gg)("typography.definitions.discovery.subhed-section-tertiary")}

    ${(0,H.H4)(D.LO.lg)} {
      justify-self: start;
    }
  }
`;var Ut=i(4149);const zt=({bylineVariation:e,brandName:t,items:i=[],hideMidRecirc:r=!0,shouldHideRubric:o=!0})=>{const[a,l]=n.useState(!1);(0,Kt.w)(()=>l((0,fe.eD)())),n.useEffect(()=>{l((0,fe.eD)())},[]);const{formatMessage:s}=(0,qt.A)(),d=(0,fe.Bh)(a),c=s(Ut.A.alsoOn,{brandName:t});return r||0===i.length?null:n.createElement(Gt,{"data-test-id":"MidRecirc"},n.createElement(Wt.Ay,{dangerousHed:c}),i.map((t,r)=>{const a={...t,clickHandler:()=>((e,t,i)=>{const n={type:"click",label:c,subject:"recirc_unit",strategy:(0,ye.Cu)(e.url),placement:"mid_article_recirc",subject_version:d,items:[{content_id:e.contentId,content_title:e.dangerousHed,content_type:e.contentType.toLowerCase(),content_url:e.url}],index:t,total_index:i};(0,ye.kg)(n)})(t,r,i.length)};return n.createElement(Ft.A.SideBySideDense,{key:r,...a,bylineVariation:e,hideRubricItemSummary:o,isRecircListItem:!0,recircPlacement:"mid_article_recirc",recircId:r+1,totalItems:i.length,sectionTitleLabel:c,subjectVersion:d})}))};zt.propTypes={brandName:o().string,bylineVariation:o().string,hideMidRecirc:o().bool,items:o().array,shouldHideRubric:o().bool};const Qt=(0,a.M3)(zt,{keysToPluck:["brandName"]}),Xt=(0,x.y)(Qt,"MidRecirc");var Yt=i(87997),Jt=i(16631),Zt=i(22761),ei=i(92867),ti=i(67198),ii=i(85554);const ni=({communityLogo:e,communityExperience:t,shouldUseSoftRoundedEdges:i,shouldUseFullOpacity:r,shouldUseDarkPinnedTheme:o,shouldUseAlternateColorToken:a,configuredComponentRef:l})=>{const{formatMessage:s}=(0,qt.A)(),{questionAnswerIcon:d}=t;return n.createElement(Jt.fm,{shouldUseSoftRoundedEdges:i,className:ii.i7.PINNED_COMMENT,shouldUseFullOpacity:r,shouldUseDarkPinnedTheme:o,ref:l},n.createElement(Jt.W6,{shouldUseSoftRoundedEdges:i,shouldUseFullOpacity:r,shouldUseDarkPinnedTheme:o},n.createElement(Jt.oE,{shouldUseAlternateColorToken:a,shouldUseInvertedColor:o},s(ei.A.qaReviewLabel)),e&&n.createElement(Jt.tG,{...e})),n.createElement(Zt.OS,null,d&&n.createElement(Zt.ve,{className:"qa-banner-icon",dangerouslySetInnerHTML:{__html:d}}),n.createElement(Zt.HL,null,n.createElement(Zt.XC,null,s(ei.A.qaBannerTitle)),n.createElement(Zt.cn,{onClick:()=>(0,ti.A)(`.${ii.i7.COMMENTING_SECTION}`)},s(ei.A.qaBannerDek)))))};ni.propTypes={configuredComponentRef:o().func,communityLogo:o().object,communityExperience:o().object,shouldUseSoftRoundedEdges:o().bool,shouldUseFullOpacity:o().bool,shouldUseDarkPinnedTheme:o().bool,shouldUseAlternateColorToken:o().bool},ni.displayName="QaBanner";const ri=(0,x.y)((0,a.M3)(ni,{keysToPluck:["communityLogo","communityExperience"]}),"QaBanner"),oi=(0,I.sA)(Oe.A),ai=(0,a.z5)("payment"),li=(0,a.z5)("featureFlags");function si({shouldApplyCMUFixedHeight:e,showInContentRecirc:t}){return e?t?n.createElement(Mt,null,n.createElement(Te,null)):n.createElement(n.Fragment,null,n.createElement(Z.A,{position:"article-mid-content",secondPosition:"in-content"}),n.createElement(Ne.lB,{shouldApplyCMUFixedHeight:e})):n.createElement(n.Fragment,null,n.createElement(Z.A,{position:"article-mid-content",secondPosition:"in-content"}),n.createElement(Ne.lB,null))}si.propTypes={shouldApplyCMUFixedHeight:o().bool,showInContentRecirc:o().bool};const di=new P.default({"featured-deal-live-schema":e=>n.createElement(X,{...e,className:"article-page__featured-deal"}),a:qe.Nl,blockquote:({props:e})=>({type:Le.A,props:e}),bluesky:({props:e})=>({type:Ht.A,props:e}),ceros:qe.cg,div:qe.Xb,h2:qe.Zy,reddit:({meta:e,...t})=>({type:_t.A,props:{...t,...JSON.parse(decodeURIComponent(e))}}),tiktok:qe.qW,"cm-unit":e=>({type:si,props:e}),"in-content-recirc":()=>n.createElement(Ne.TD,null),"inline-embed":_e.A,"inline-recirc":e=>n.createElement(oi,{...e,className:"article-inline-recirc-wrapper"}),"native-ad":e=>n.createElement(R.Z,{group:"ads"},n.createElement(Y.A,{...e})),"mid-recirc":e=>n.createElement(Xt,{items:e.midRecircs}),"inline-newsletter":e=>n.createElement("div",null,n.createElement(Me.A,{...e,isArticlePage:!0}),n.createElement(Ne.Pc,null)),"journey-extra-slim":()=>n.createElement(Ne.lw,null),"journey-extra-slim-with-action-sheet":()=>n.createElement(Ne.YC,null),"journey-inline-newsletter":()=>n.createElement("div",null,n.createElement(Ne.Pe,{className:"article-newsletter-slim-wrapper"}),n.createElement(Ne.vE,null),n.createElement(Ne.GO,null),n.createElement(Ne.F6,null)),"qa-banner":()=>n.createElement(ri,null)});function ci(e){return Array.isArray(e)&&"string"==typeof e[0]}function ui(e){return e&&ci(e)?e[1]&&"object"==typeof e[1]&&!Array.isArray(e[1])?e.slice(2):e.slice(1):[]}function hi(e,t){return`${e}-${t}`}class pi{constructor({tagCloud:e,adRail:t,config:i,GeneralContentWrapper:r=()=>null,FullBleedContentWrapper:o=()=>null,interlude:a,isMobileDevice:l,recircMostPopular:s,shouldRenderMidContent:d,shouldShowMostPopular:c,shouldUsePersistentAd:u,singleChunkRailStrategy:h,recircMostPopularVariationOnMobile:p,dividerColor:m,shouldEnableArticleBackground:g,shouldEnableFullArticleInverted:b,pageBackgroundTheme:f,showFirstRailRecirc:v,linkList:A,isLinkStackEnabled:C,responsiveCartoonVariation:w,hasCartoonFullWidth:k,hasBaseAds:E,setCartoonLinkedGalleries:x,articleIssueDateComponent:$,midRecircItems:R,minWordCountForMidRecirc:S,shouldHideInlineRecirc:T,hideNewsletter:B,showDisclaimer:L,visualStoryBanner:O,relatedAudio:P,featuredDeal:I,shouldShowQaBanner:M,enableCommunityExperience:D,qaBannerParagraphIndex:H,wideContent:_,shouldApplyCMUFixedHeight:q,showInContentRecirc:F}={}){this.isMobileDevice=l,this.tagCloud=e,this.isLinkStackEnabled=C,this.linkList=A,this.adRail=t,this.wideContent=_,this.config=i,this.chunkCount=0,this.shouldRenderMidContent=d,this.shouldUsePersistentAd=u,this.shouldEnableArticleBackground=g,this.shouldEnableFullArticleInverted=b,this.GeneralContentWrapper=r,this.FullBleedContentWrapper=o,this.finalAdSet=!1,this.isSingleChunk=!1,this.singleChunkRailStrategy=h,this.pageBackgroundTheme=f,this.interlude=a?.strategy?.enabled&&a.isRailEligible?n.createElement(N.A,{...a,isRightRail:!0}):null,this.interludeSet=!1,this.mostPopular=c&&n.createElement(y.A,{className:"article-recirc-most-popular-wrapper",items:s,dividerColor:m,categoriesMap:e?.tags}),this.mostPopularOnMobile=c&&n.createElement(ft,{className:"article-recirc-most-popular-wrapper",counterSuffix:"",items:s,dividerColor:m,categoriesMap:e?.tags,as:y.A[p]}),this.hasRecircMostPopularOnMobile=!!p,this.showFirstRailRecirc=v,this.responsiveCartoonVariation=w,this.hasCartoonFullWidth=k,this.setCartoonLinkedGalleries=x,this.articleIssueDateComponent=$,this.hasBaseAds=E,this.midRecircItems=R||[],this.minWordCountForMidRecirc=S,this.shouldHideInlineRecirc=T,this.hideNewsletter=B,this.showDisclaimer=L,this.visualStoryBanner=O,this.relatedAudio=P,this.featuredDeal=I,this.shouldShowQaBanner=M,this.enableCommunityExperience=D,this.qaBannerParagraphIndex=H,this.shouldApplyCMUFixedHeight=q,this.showInContentRecirc=F}determineAd(){if(this.shouldUsePersistentAd)return this.interludeSet=!0,this.persistentAd();const e=this.stickyAd(this.showFirstRailRecirc);return this.interludeSet=!0,e}showAds(e){if(1===this.chunkCount)return this.determineAd();if(!this.finalAdSet){const t=this.stickyAd(e);return this.interludeSet=!0,t}return null}getAdSlot(e){return n.createElement(n.Fragment,null,n.createElement(R.Z,{group:"ads"},e,n.createElement(Y.A,{position:"rail"})),n.createElement(R.Z,{group:"consumer-marketing"},n.createElement(Z.A,{position:"display-rail"})))}withStickyBox(e,t={}){return e&&n.createElement(Be.A,{...t},e)}renderSplitAdRail(){const e=this.withStickyBox(this.getAdSlot(null)),t=this.withStickyBox(this.mostPopular),i=this.withStickyBox(this.getAdSlot(null));return n.createElement(kt,{anchorTop:{selector:"[data-testid='ContentHeaderLeadRailAnchor']"},anchorBottom:{selector:".content-bottom-anchor",edge:"bottom"},shouldRemoveAbsolute:!0},n.createElement(Et,{className:"split-ad-rail-content"},n.createElement(xt,null,e),this.showFirstRailRecirc&&n.createElement($t,{className:"split-ad-rail-middle"},t),n.createElement(Rt,{className:"split-ad-rail-bottom"},i)))}renderAdRail(e){return this.isSingleChunk&&"split-in-three"===this.singleChunkRailStrategy?this.renderSplitAdRail():this.showAds(e)}extractNewsletterNodesIfAudioExists(e,t){const i=[];let n=e;const r=["journey-extra-slim","journey-extra-slim-with-action-sheet"];if(t&&this.relatedAudio&&this.relatedAudio.embedUrl){let t=0;for(let n=0;n<e.length;n++){const o=e[n],a=o&&o[0];if("journey-inline-newsletter"===a||"inline-newsletter"===a)break;if(!r.includes(a))break;i.push(o),t++}t>0&&(n=e.slice(t))}return{newsletterNodes:i,remainingSmallGroup:n}}closeSmallGroup(e,t,i,r){if(e.length>0){++this.chunkCount;const o=2===this.chunkCount&&this.hasRecircMostPopularOnMobile,a=this.GeneralContentWrapper,{newsletterNodes:l,remainingSmallGroup:d}=this.extractNewsletterNodesIfAudioExists(e,r);return t.concat([n.createElement(Tt,{adRail:this.adRail,wideContent:this.wideContent,as:a,key:hi("small-group",i),pageBackgroundTheme:this.pageBackgroundTheme},n.createElement(We.A,{className:s()("body__container article__body",{"article-white-background":this.shouldEnableArticleBackground&&this.pageBackgroundTheme&&!this.shouldEnableFullArticleInverted}),shouldEnableFullArticleInverted:this.shouldEnableFullArticleInverted},l.length>0&&l.map((e,t)=>n.createElement(n.Fragment,{key:`newsletter-${t}`},di.convert((0,qe.po)(e)))),r&&this.relatedAudio&&this.relatedAudio.embedUrl&&n.createElement(Yt.A,{scriptUrl:this.relatedAudio.embedUrl,skin:this.config.brand.organizationSlug,target:this.relatedAudio.id,...this.relatedAudio}),o&&this.mostPopularOnMobile,r&&this.articleIssueDateComponent,di.convert((0,qe.po)(["div",{className:"body__inner-container"},...d.map(e=>{if(this.shouldApplyCMUFixedHeight&&Array.isArray(e)&&"cm-unit"===e[0]){const[t,i={},...n]=e;return[t,{...i,shouldApplyCMUFixedHeight:this.shouldApplyCMUFixedHeight,showInContentRecirc:this.showInContentRecirc},...n]}return e})])),r&&n.createElement(Ne.W3,null),r&&n.createElement(Ne.UT,null),"final"===i&&this.visualStoryBanner&&n.createElement(Dt.A,{container:this.visualStoryBanner,className:"articleLayout"}),"final"===i&&this.isLinkStackEnabled&&this.linkList&&n.createElement(Pt,{...this.linkList})),n.createElement(B.A,null,this.adRail&&!this.isMobileDevice&&this.renderAdRail("final"!==i)))])}return t}getChunkAdRailContent(e,t){return n.createElement(n.Fragment,null,this.getAdSlot(e),t&&this.mostPopular)}injectInlineRecirc(e){let t=0,i=0;return e.reduce((n,r,o)=>Pe(r)?(t++,Pe(e[o+1])&&this.shouldInsertRecirc(t,i)?(t=0,n.concat([r,["inline-recirc",{reelId:++i}]])):n.concat([r])):n.concat([r]),[])}getTotalWordCount(e){return e.filter(e=>"p"===e[0]).reduce((e,t)=>e+t.filter(e=>"string"==typeof e).reduce((e,t)=>e+t.split(" ").length,0),0)}injectMidRecirc(e){let t=0,i=!1,n=null;return e.reduce((r,o,a)=>{const l=o[0]||"";if(t<1&&"ad"===l&&t++,t>=1&&!i){const t=a+1<e.length?o[0]:null;"p"===n&&"p"===t&&(i=!0,r.push(["mid-recirc",{midRecircs:this.midRecircItems}]))}return n=l,r.concat([o])},[])}isInlineEmbedCNEAudio(e){if(e){const[t,i={}]=e;return"inline-embed"===t&&"cneaudio"===i?.type}return!1}hasCerosEmbed(e){if(!e||!ci(e))return!1;if("ceros"===e[0])return!0;return ui(e).some(e=>!!Array.isArray(e)&&this.hasCerosEmbed(e))}injectJourneyNewsletter(e,t){return this.hideNewsletter||t||this.isInlineEmbedCNEAudio(e[0])||this.hasCerosEmbed(e[0])?[...e]:[["journey-extra-slim"],["journey-extra-slim-with-action-sheet"],...e]}persistentAd(){return n.createElement(De.A,{anchorTop:{selector:"[data-testid='ContentHeaderLeadRailAnchor']"},anchorBottom:{edge:"bottom"},shouldRemoveAbsolute:!0},this.getChunkAdRailContent(this.interlude,this.showFirstRailRecirc))}shouldInsertRecirc(e,t){return e>=(0===t?5:8)}stickyAd(e){const t=!this.interludeSet&&this.interlude,i=this.getChunkAdRailContent(t,e);return n.createElement(n.Fragment,null,this.withStickyBox(i,{isExpanded:!!t}))}wrapInFullSizeContainer(e,t,i){const r=this.FullBleedContentWrapper;return t.concat([n.createElement(r,{key:hi("full",i)},n.createElement(St,{className:"body__grid-container",as:We.A,shouldDisableMaxWidth:!0,shouldEnableDataJourneyHook:!1,shouldEnableFullArticleInverted:this.shouldEnableFullArticleInverted},di.convert((0,qe.po)(e))))])}injectQaBanner(e){return Ie({children:e,targetParagraphIndex:this.qaBannerParagraphIndex,nodeToInject:["qa-banner"]})}visit(e){let t=(0,qe.po)(ui(e)),i=[],r=[];this.isSingleChunk=!t.some(e=>"ad"===e[0]),this.finalAdSet=!1;const o=t.filter(Pe).length,a=!this.shouldHideInlineRecirc&&o>10;this.enableCommunityExperience&&this.shouldShowQaBanner&&this.qaBannerParagraphIndex&&(t=this.injectQaBanner(t)),a&&(t=this.injectInlineRecirc(t)),this.featuredDeal&&(t=Ie({children:t,targetParagraphIndex:1,nodeToInject:["featured-deal-live-schema",this.featuredDeal]}));if(o>2&&this.midRecircItems&&this.midRecircItems.length>0){const e=this.getTotalWordCount(t);this.minWordCountForMidRecirc&&e>this.minWordCountForMidRecirc&&(t=this.injectMidRecirc(t))}let l=0;const s=t.reduce((e,t=[])=>{const[i,n={},r=[]]=t,{props:{childTypes:o=[],image:{contentType:a=""}={}}={}}=n;return"inline-embed"!==i||!o.includes("cartoon")&&"cartoon"!==a||!t.length&&!r.length?e:e+1},0);let d="";return t=this.injectJourneyNewsletter(t,this.showDisclaimer),t.forEach((e,t)=>{const[o,a,c]=e;if("ad"===o)d=Boolean(""===d),this.shouldRenderMidContent&&(i=this.closeSmallGroup(r,i,t,d),r=[],this.hasBaseAds&&(i=i.concat([n.createElement(B.A,{key:hi("ad",t)},n.createElement(S.A,{className:"full-bleed-ad row-mid-content-ad",key:hi("ad",t)},n.createElement(J.A,{shouldDisplayLabel:!0,shouldHoldSpace:!0})))])));else if(!this.adRail&&function(e){const[t,i={}]=e,n="ceros"===t&&("flex"===i.cerosType||"flex"===i.cerostype||i.manifestUrl||i.manifesturl),r="inline-embed"===t&&"callout:feature-large"===i.type,o="inline-embed"===t&&"callout:feature-medium"===i.type,a="inline-embed"===t&&"callout:masonry"===i.type;return n||r||o||a||"ad"===t}(e))d=Boolean(""===d),i=this.closeSmallGroup(r,i,t,d),r=[],i=this.wrapInFullSizeContainer(e,i,t);else if("inline-embed"===o&&a?.props?.childTypes?.includes("cartoon")&&c?.length){const[,t]=c;t.props.image.responsiveCartoonVariation=this.responsiveCartoonVariation,t.props.image.setCartoonLinkedGalleries=this.setCartoonLinkedGalleries,l+=1,t.props.image.analyticsData={totalNumberOfCartoons:s,cartoonPosition:l,cartoonPlacement:"inline"},r=this.hasCartoonFullWidth?r.concat([c]):r.concat([e])}else if("inline-embed"===o&&"cartoon"===a?.props?.image?.contentType&&e?.length){const[,t]=e;t.props.image.responsiveCartoonVariation=this.responsiveCartoonVariation,t.props.image.setCartoonLinkedGalleries=this.setCartoonLinkedGalleries,l+=1,t.props.image.analyticsData={totalNumberOfCartoons:s,cartoonPosition:l,cartoonPlacement:"inline"},r=r.concat([e])}else r=r.concat([e])}),d=Boolean(""===d),i=this.closeSmallGroup(r,i,"final",d),this.finalAdSet=!0,i}}function mi({tagCloud:e,adRail:t,config:i={adsConfig:{maxMidContentAdsDesktop:0,maxMidContentAdsMobile:0}},FullBleedContentWrapper:r,featureFlags:o,GeneralContentWrapper:a,interlude:l,isMobileDevice:s,jsonml:d,payment:c,recircMostPopular:u,shouldUsePersistentAd:h,hasRecircMostPopularOnMobile:p,recircMostPopularVariationOnMobile:m,hideRecircMostPopular:g,dividerColor:b,shouldEnableArticleBackground:y,shouldEnableFullArticleInverted:f,pageBackgroundTheme:v,showFirstRailRecirc:A,wordsToDisplay:C,linkList:w,isLinkStackEnabled:k,responsiveCartoonVariation:E,setCartoonLinkedGalleries:x,articleIssueDateComponent:$,hasBaseAds:R=!0,hasCartoonFullWidth:S=!1,singleChunkRailStrategy:T="default",midRecircItems:N,minWordCountForMidRecirc:B,shouldHideInlineRecirc:L,hideNewsletter:O=!1,showDisclaimer:P,visualStoryBanner:I,relatedAudio:M,featuredDeal:D,shouldShowQaBanner:H,enableCommunityExperience:_,qaBannerParagraphIndex:q,wideContent:F,shouldApplyCMUFixedHeight:W=!1,showInContentRecirc:K=!1}){n.useEffect(()=>{const e=document.querySelector(".split-ad-rail-content"),t=document.querySelector(".split-ad-rail-middle"),i=document.querySelector(".split-ad-rail-bottom");if(e&&t&&i){const n=new IntersectionObserver((e=>t=>{const[i]=t;i.intersectionRatio<e&&i.target.remove()})(.95),{root:e,threshold:.95});return n.observe(t),n.observe(i),()=>{n.disconnect()}}return()=>{}});const j=!(0,Fe.D)("ads",c,o),V=!g&&((e,t)=>He(e)>(t||200))(d,C);return new pi({tagCloud:e,adRail:t,config:i,FullBleedContentWrapper:r,GeneralContentWrapper:a,interlude:l,isMobileDevice:s,recircMostPopular:u,shouldRenderMidContent:j,linkList:w,isLinkStackEnabled:k,shouldShowMostPopular:V,shouldUsePersistentAd:h,singleChunkRailStrategy:T,hasRecircMostPopularOnMobile:p,recircMostPopularVariationOnMobile:m,pageBackgroundTheme:v,dividerColor:b,shouldEnableArticleBackground:y,shouldEnableFullArticleInverted:f,showFirstRailRecirc:A,responsiveCartoonVariation:E,hasCartoonFullWidth:S,hasBaseAds:R,setCartoonLinkedGalleries:x,articleIssueDateComponent:$,midRecircItems:N,minWordCountForMidRecirc:B,shouldHideInlineRecirc:L,hideNewsletter:O,showDisclaimer:P,visualStoryBanner:I,relatedAudio:M,featuredDeal:D,shouldShowQaBanner:H,enableCommunityExperience:_,qaBannerParagraphIndex:q,wideContent:F,shouldApplyCMUFixedHeight:W,showInContentRecirc:K}).visit(d)}mi.propTypes={adRail:o().bool,config:o().object,dividerColor:o().string,enableCommunityExperience:o().bool,featureFlags:o().object,FullBleedContentWrapper:o().func,GeneralContentWrapper:o().func,hasBaseAds:o().bool,hasCartoonFullWidth:o().bool,hideRecircMostPopular:o().bool,hideNewsletter:o().bool,interlude:o().shape({...N.A.propTypes,isRailEligible:o().boolean}),jsonml:o().array.isRequired,minWordCountForMidRecirc:o().number,pageBackgroundTheme:o().string,payment:o().object,qaBannerParagraphIndex:o().number,recircMostPopular:o().array,recircMostPopularVariationOnMobile:o().oneOf((0,f._)(y.A)),relatedAudio:o().object,responsiveCartoonVariation:o().oneOf((0,f._)(b.A)),shouldApplyCMUFixedHeight:o().bool,shouldHideInlineRecirc:o().bool,shouldShowQaBanner:o().bool,showInContentRecirc:o().bool,shouldUsePersistentAd:o().bool,showDisclaimer:o().bool,showFirstRailRecirc:o().bool,singleChunkRailStrategy:o().oneOf(["default","split-in-three"]),tagCloud:o().shape({tags:o().arrayOf(o().shape({tag:o().string.isRequired,url:o().string}))}),visualStoryBanner:o().object,wordsToDisplay:o().number,wideContent:o().bool};const gi=n.memo(ai(li(mi)),function(e,t){return O()(e,t)});var bi=i(21424);const yi=({body:e,config:t,linkList:i,isLinkStackEnabled:r,hasTopSpacing:o=!0,horizontalRuleStyle:a,interlude:l,isMobileDevice:d,shouldBlurText:c=!1,shouldUsePersistentAd:u,singleChunkRailStrategy:h,variations:p={},recircMostPopularVariationOnMobile:m,hideRecircMostPopular:g,hideNewsletter:b=!1,dividerColor:y,shouldEnableArticleBackground:f=!1,shouldEnableFullArticleInverted:A=!1,pageBackgroundTheme:C,recircMostPopular:w,showFirstRailRecirc:k,tagCloud:E,wordsToDisplay:x,responsiveCartoonVariation:N,hasCartoonFullWidth:B=!1,hasBaseAds:L=!0,setCartoonLinkedGalleries:O,articleIssueDateComponent:P,showDisclaimer:I,disclaimer:M,disclaimerPosition:D,midRecircItems:H,minWordCountForMidRecirc:_,shouldHideInlineRecirc:q,visualStoryBanner:F,relatedAudio:W,featuredDeal:K,shouldShowQaBanner:j,enableCommunityExperience:V,qaBannerParagraphIndex:G,wideContent:U,shouldApplyCMUFixedHeight:z=!1,showInContentRecirc:Q=!1})=>{const X=p&&p.adRail,Y=s()("article__body",{"article__body--grid-margins":!X}),J=X?$.A.NarrowContentWithWideAdRail:S.A,Z=X?$.A.NarrowContentWithWideAdRail:$.A.WithMargins,ee=(0,v.v9)(D),te=!b&&ee&&I&&!W?.results?.length;return n.createElement(bi.Ay,null,n.createElement(wt,{isNarrowContentWell:p.isNarrowContentWell,shouldBlurText:c},((e,t,i,r)=>e?n.createElement(Bt,{adRail:t,as:i,disclaimerPosition:r},n.createElement(Ne.lw,null)):null)(te,X,Z,v.T7.MIDDLE),ee&&I&&n.createElement(Bt,{adRail:X,as:Z,disclaimerPosition:v.T7.MIDDLE},n.createElement(Ct,{disclaimerHtml:M,disclaimerPosition:v.T7.MIDDLE})),n.createElement(vt,{hasTopSpacing:o,horizontalRuleStyle:a,pageBackgroundTheme:C,"data-testid":"ArticlePageChunks",adRail:X},n.createElement(gi,{featuredDeal:K,tagCloud:E,jsonml:e,adRail:X,config:t,isMobileDevice:d,linkList:i,isLinkStackEnabled:r,interlude:l,FullBleedContentWrapper:J,GeneralContentWrapper:Z,recircMostPopular:w,shouldUsePersistentAd:u,singleChunkRailStrategy:h,recircMostPopularVariationOnMobile:m,hideRecircMostPopular:g,hideNewsletter:b,pageBackgroundTheme:C,dividerColor:y,shouldEnableArticleBackground:f,shouldEnableFullArticleInverted:A,showFirstRailRecirc:k,wordsToDisplay:x,responsiveCartoonVariation:N,hasCartoonFullWidth:B,hasBaseAds:L,setCartoonLinkedGalleries:O,articleIssueDateComponent:P,midRecircItems:H,minWordCountForMidRecirc:_,shouldHideInlineRecirc:q,showDisclaimer:I,visualStoryBanner:F,relatedAudio:W,shouldShowQaBanner:j,enableCommunityExperience:V,qaBannerParagraphIndex:G,wideContent:U,shouldApplyCMUFixedHeight:z,showInContentRecirc:Q})),n.createElement(R.Z,{group:"paywall"},n.createElement(e=>n.createElement(gt,{adRail:X,as:Z},n.createElement("div",{className:s()("body","body__inline-barrier",Y)},n.createElement("div",{className:"container container--body"},n.createElement("div",{className:"container--body-inner"},n.createElement(T.A,{...e}))))),null))))};yi.propTypes={articleIssueDateComponent:o().node,body:o().array.isRequired,config:o().object,disclaimer:o().string,disclaimerPosition:o().string,dividerColor:o().string,enableCommunityExperience:o().bool,featuredDeal:o().object,hasBaseAds:o().bool,hasCartoonFullWidth:o().bool,hasTopSpacing:o().bool,hideRecircMostPopular:o().bool,hideNewsletter:o().bool,horizontalRuleStyle:o().oneOf(["thin"]),interlude:o().shape({...N.A.propTypes,isRailEligible:o().boolean}),isLinkStackEnabled:o().bool,isMobileDevice:o().bool,linkList:o().object,midRecircItems:o().array,minWordCountForMidRecirc:o().number,pageBackgroundTheme:o().string,qaBannerParagraphIndex:o().number,recircMostPopular:o().array,recircMostPopularVariationOnMobile:o().oneOf((0,f._)(y.A)),relatedAudio:o().object,responsiveCartoonVariation:o().oneOf((0,f._)(b.A)),setCartoonLinkedGalleries:o().func,shouldApplyCMUFixedHeight:o().bool,shouldBlurText:o().bool,showInContentRecirc:o().bool,shouldEnableArticleBackground:o().bool,shouldEnableFullArticleInverted:o().bool,shouldHideInlineRecirc:o().bool,shouldShowQaBanner:o().bool,shouldUsePersistentAd:o().bool,showDisclaimer:o().bool,showFirstRailRecirc:o().bool,singleChunkRailStrategy:o().oneOf(["split-in-three"]),tagCloud:o().shape({tags:o().arrayOf(o().shape({tag:o().string.isRequired,url:o().string}))}),variations:o().shape({adRail:o().bool,isNarrowContentWell:o().bool}),visualStoryBanner:o().object,wordsToDisplay:o().number,wideContent:o().bool},yi.displayName="ChunkedArticleContent";const fi=yi;fi.WithAdRail=(0,f.y)(fi,"WithAdRail",{adRail:!0}),fi.OneColumn=(0,f.y)(fi,"OneColumn",{adRail:!1}),fi.OneColumnNarrow=(0,f.y)(fi,"OneColumnNarrow",{adRail:!1,isNarrowContentWell:!0});const vi=(0,x.y)(fi,"ChunkedArticleContent");var Ai=i(45799),Ci=i(18805),wi=i(69389),ki=i(70697),Ei=i(27669),xi=i(49299),$i=i(90090),Ri=i(49870),Si=i.n(Ri),Ti=i(90713);const Ni=(e,t)=>{const i=e.displayName||e.name,r=e=>"object"==typeof e&&"p"===e[0],a=(e,t)=>e.filter((i,n)=>((e,t)=>e.slice(0,t).filter(r).length)(e,n)<t),l=i=>{const{[t]:r,shouldTruncate:o,paywall:{gateway:l={},paragraphLimit:s}={}}=i,d=r&&(l.shouldTruncate||o)&&(l.paragraphLimit>=0||s>=0);return n.createElement(e,{...i,[t]:d?a(r,l.paragraphLimit||s):r})};return l.propTypes={[t]:o().array.isRequired,paywall:o().shape({gateway:o().shape({paragraphLimit:o().number,shouldTruncate:o().bool}),paragraphLimit:o().number}),shouldTruncate:o().bool},l.displayName=`withArticleTruncation(${i})`,l};var Bi=i(15356);const Li=(0,a.z5)("user"),Oi=(0,a.z5)("paywall"),Pi=(0,a.z5)("payment"),Ii=Si()([Li,Pi,Oi,Bi.qw])(Ti.A);var Mi=i(80471);const Di=(0,m.YK)({readMoreDefault:{id:"ReadMore.SeriesRecirc",defaultMessage:"Read more",description:"SeriesRecirc component Read more text"},readNext:{id:"ReadNext.SeriesRecirc",defaultMessage:"Read next",description:"SeriesRecirc component Read next text"}}),Hi=M.Ay.div.withConfig({displayName:"SeriesRecircAsset"})`
  grid-column: 1/5;

  @media (max-width: ${D.LO.md}) {
    grid-column: 1/-1;
  }
`,_i=M.Ay.div.withConfig({displayName:"SeriesRecircContainer"})`
  margin-top: ${(0,H.Kq)(4)};
  margin-bottom: ${(0,H.Kq)(5)};
  border-top: 2px solid
    ${({theme:e})=>(0,H.HK)(e,"colors.discovery.body.white.heading")};
  padding-top: ${(0,H.Kq)(2)};
`,qi=M.Ay.figure.withConfig({displayName:"SeriesRecircContent"})`
  margin-right: 0;
  margin-left: 0;

  @media (min-width: ${D.LO.md}) {
    display: grid;
    grid-column-gap: ${(0,H.Kq)(3)};
    grid-template-columns: repeat(10, 1fr);
  }

  @media (max-width: ${D.LO.md}) {
    display: block;
  }
`,Fi=(0,M.Ay)(st.vm).withConfig({displayName:"SeriesRecircDek"}).attrs(e=>({as:"div",typeIdentity:"typography.definitions.consumptionEditorial.description-embed",...e}))`
  @media (min-width: ${D.LO.md}) {
    grid-column: 1/-1;
  }
`;Fi.displayName="SeriesRecircDek";const Wi=(0,M.Ay)(st.vm).withConfig({displayName:"SeriesPromoHed"}).attrs(e=>({as:"h2",bottomSpacing:.625,topSpacing:1,typeIdentity:"typography.definitions.discovery.subhed-section-tertiary",...e}))`
  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: ${D.LO.md}) {
    grid-column: 1/-1;
  }
`,Ki=(0,M.Ay)(st.vm).withConfig({displayName:"SeriesRecircReadMoreCta"}).attrs(e=>({typeIdentity:"typography.definitions.discovery.subhed-section-primary",...e}))`
  @media (max-width: ${D.LO.md}) {
    display: none;
  }
`,ji=(0,M.Ay)(Ki).withConfig({displayName:"SeriesRecircReadMoreCtaMobile"})`
  display: none;

  @media (max-width: ${D.LO.md}) {
    display: block;
    grid-column: 1/-1;
    margin-bottom: 1em;
  }
`,Vi=M.Ay.div.withConfig({displayName:"SeriesRecircTextContainer"})`
  @media (min-width: ${D.LO.md}) {
    grid-column: 5/-1;
  }
`,Gi="Read more",Ui={[Gi]:Di.readMoreDefault,"Read next":Di.readNext},zi=({ContentWrapper:e=$.A.NarrowContentWithWideAdRail,readMoreCTA:t=Gi,seriesData:i=null})=>{const{formatMessage:r}=(0,qt.A)();n.useEffect(()=>{window.Kendra.TRACK_COMPONENT.broadcast(w.G.RENDER,{name:"SeriesRecirc"})},[]);const o=(({links:e})=>{let t;for(let i=0;i<e.length;i++){const{isCurrent:n}=e[i];if(n){for(let n=i+1;n<e.length;n++){const{isExternal:i,isPublished:r}=e[n]||{};if(r&&!i){t=e[n];break}}break}}return t})({links:i?.links||[]}),a=e=>{(0,$i.W8)("seriesrecirc",{title:e})},[l,s]=(0,Mi.Wx)();if(n.useEffect(()=>{s&&(0,$i.zJ)("series-inview",{title:o?.promoHed})},[s]),!i)return null;if(!o)return null;const{dek:d="",hed:c="",image:u=null,promoHed:h="",url:p=""}=o,m=u&&(u.segmentedSources||u.sources)&&{...u};return n.createElement(e,null,o&&n.createElement(_i,{ref:l},n.createElement(qi,null,n.createElement(ji,null,r(Ui[t])),n.createElement(Hi,null,m&&n.createElement("a",{href:p,onClick:()=>a(h||c)},n.createElement(ie.A,{...m,isLazy:!0}))),n.createElement(Vi,null,n.createElement(Ki,null,r(Ui[t])),(c||h)&&n.createElement(Wi,null,n.createElement("a",{href:p,onClick:()=>a(h||c)},n.createElement("span",{dangerouslySetInnerHTML:{__html:h||c}}))),d&&n.createElement(Fi,null,n.createElement("span",{dangerouslySetInnerHTML:{__html:d}}))))))};zi.propTypes={ContentWrapper:o().elementType,readMoreCTA:o().string,seriesData:o().shape({hed:o().string,dek:o().string,image:o().object,links:o().arrayOf(o().shape({hed:o().string,dek:o().string,image:o().object,isCurrent:o().bool,isExternal:o().bool,isPublished:o().bool,promoDek:o().string,promoHed:o().string,url:o().string}))})},zi.displayName="SeriesRecirc";const Qi=(0,a.M3)(zi,{keysToPluck:["seriesData"]}),Xi=(0,x.y)(Qi,"SeriesRecirc");var Yi=i(41338),Ji=i(68898),Zi=i(99407),en=i(62265),tn=i(52590),nn=i(74200),rn=i(14935),on=i(95779),an=i(77498);const ln="\n  display: flex;\n  align-items: center;\n",sn=M.Ay.div.withConfig({displayName:"ChannelCloudContainerWrapper"})``,dn=M.Ay.div.withConfig({displayName:"ChannelCloudHeaderContainer"})`
  ${ln};

  border-width: 0 0 ${(0,H.Kq)(.25)};
  border-style: solid;
  padding: ${(0,H.Kq)(1)} ${(0,H.Kq)(3)} ${(0,H.Kq)(2)}
    0;

  ${({theme:e})=>(0,H._o)(e,"border-color","colors.interactive.base.black")};
`,cn=M.Ay.img.withConfig({displayName:"ChannelCloudHeaderImage"})`
  width: 25px;
  height: 30px;
`,un=(0,M.Ay)(st.sH).withConfig({displayName:"ChannelCloudHeaderLink"}).attrs(e=>({colorToken:"colors.interactive.base.black",typeIdentity:"typography.definitions.discovery.hed-bulletin-secondary",...e}))`
  position: relative;
  top: ${(0,H.Kq)(.3)};
  padding-left: ${({hasLogo:e})=>e?(0,H.Kq)(1.3):0};
`,hn=M.Ay.div.withConfig({displayName:"ChannelCloudContainer"})`
  display: flex;
  flex-wrap: wrap;
  padding: ${(0,H.Kq)(2.4)} ${(0,H.Kq)(6)}
    ${(0,H.Kq)(1)} 0;
`,pn=M.Ay.div.withConfig({displayName:"ChannelCloudSubChannelContainer"})`
  ${ln}
  flex-wrap: wrap;
  margin-bottom: ${(0,H.Kq)(2)};
  padding-right: ${(0,H.Kq)(2)};
`,mn=(0,M.Ay)(st.vm).withConfig({displayName:"ChannelCloudSubChannelText"}).attrs(e=>({colorToken:"colors.interactive.base.black",typeIdentity:"typography.definitions.globalEditorial.context-primary",...e}))`
  padding-right: ${(0,H.Kq)(1)};

  &::after {
    content: ':';
  }
`,gn=(0,M.Ay)(st.sH).withConfig({displayName:"ChannelCloudSubChannelLink"})`
  ${ln}
  padding-right: ${(0,H.Kq)(1)};

  svg {
    ${({theme:e})=>(0,H._o)(e,"fill","colors.consumption.body.standard.body-deemphasized")};

    position: relative;
    top: 2px;
    right: 2px;
    transform: rotate(-45deg);
    width: 12px;
    height: 12px;
    vertical-align: bottom;
  }

  &::after {
    ${({theme:e})=>(0,H._o)(e,"color","colors.consumption.body.standard.body-deemphasized")};

    position: relative;
    right: ${({hasIcon:e})=>e?(0,H.Kq)(.4):0};
    line-height: 0;
    content: ',';
  }

  &:last-child {
    &::after {
      content: '';
    }
  }
`,bn=(0,M.Ay)(st.vm).withConfig({displayName:"ChannelCloudSubChannelLinkText"}).attrs(e=>({colorToken:"colors.consumption.body.standard.body-deemphasized",typeIdentity:"typography.definitions.globalEditorial.context-primary",...e}))`
  line-height: 1.7em;

  &:hover {
    ${({theme:e})=>(0,H._o)(e,"color","colors.consumption.body.standard.link-hover")};
    text-decoration: underline;
    ${({theme:e})=>(0,H._o)(e,"text-decoration-color","colors.consumption.body.standard.link-hover")};
  }
`,yn=({channels:e,configuredComponentRef:t,headerLogo:i,headerLink:r,sectionHeader:o})=>(n.useEffect(()=>{window.Kendra.TRACK_COMPONENT.broadcast(w.G.RENDER,{name:"ChannelCloud"})},[]),n.createElement(sn,{ref:t},o&&n.createElement(dn,null,i&&n.createElement(cn,{src:i,alt:"logo"}),n.createElement(un,{href:r,hasLogo:Boolean(i),dangerouslySetInnerHTML:{__html:o}})),e&&n.createElement(hn,null,e.map(e=>n.createElement(pn,{key:e.id},n.createElement(mn,{dangerouslySetInnerHTML:{__html:e.text}}),e.sub.map(e=>n.createElement(gn,{key:e.id,href:e.url,onClick:()=>(0,$i.W8)("channelCloud",e)},n.createElement(bn,{dangerouslySetInnerHTML:{__html:e.text}}))))))));yn.propTypes={configuredComponentRef:o().func,channels:o().arrayOf(o().shape({id:o().string,text:o().string,originalText:o().string,sub:o().arrayOf(o().shape({id:o().string,text:o().string,url:o().string}))})).isRequired,headerLink:o().string,headerLogo:o().string,sectionHeader:o().string.isRequired},yn.displayName="ChannelCloud";const fn=(0,x.y)(yn,"ChannelCloud");var vn=i(40281);const An=M.DU`
  wired-coupons:not(:defined) {
    display: block;
    background-color: #ffffff;
    min-height: 400px;
  }
`;var Cn=i(22598),wn=i(60363),kn=i(51054),En=i(3138),xn=i(29727),$n=i(60156),Rn=i(67275),Sn=i(68089),Tn=i(20312),Nn=i.n(Tn),Bn=i(59319),Ln=i(97504),On=i(99906),Pn=i(50531);const In=(0,M.Ay)(Ve.A.Utility).withConfig({displayName:"CloseModalButton"})`
  position: absolute;
  color: ${({theme:e})=>(0,H.HK)(e,"colors.interactive.base.dark")};

  svg {
    fill: ${({theme:e})=>(0,H.HK)(e,"colors.interactive.base.dark")};
  }

  &:hover {
    color: ${({theme:e})=>(0,H.HK)(e,"colors.interactive.base.dark")};
  }

  ${Pn.ny} {
    display: flex;
  }
`,Mn=(0,M.Ay)(In).withConfig({displayName:"CloseModalButtonDesktop"})`
  left: 0;

  &:hover {
    text-decoration: underline;
    text-decoration-color: ${(0,H.HK)("colors.interactive.base.primary")};
  }

  ${(0,H.L7)(`${On.VS.lg}px`)} {
    display: none;
  }

  ${Pn.Lj} {
    padding: 0;
  }
`,Dn=(0,M.Ay)(In).withConfig({displayName:"CloseModalButtonRight"})`
  top: ${(0,H.Kq)(2.5)};
  right: ${(0,H.Kq)(3)};
  left: unset;
  z-index: ${(0,H.fl)("skipLink")};
  border: 1px solid ${(0,H.HK)("colors.interactive.base.light")};
  width: ${(0,H.Kq)(5)};
  height: ${(0,H.Kq)(5)};

  &:hover {
    border: 1px solid ${(0,H.HK)("colors.interactive.base.light")};
    background: ${(0,H.HK)("colors.interactive.base.light")};
  }

  svg {
    vertical-align: bottom;
  }

  ${({isWindowed:e,isBottom:t})=>e?M.AH`
        display: flex;
      `:t?M.AH`
        top: ${(0,H.Kq)(1)};
        right: ${(0,H.Kq)(1)};
        border: none;
        width: ${(0,H.Kq)(4)};
        height: ${(0,H.Kq)(4)};

        &:hover {
          border: none;
          background: unset;
        }
      `:M.AH`
      ${(0,H.H4)(D.LO.lg)} {
        display: none;
      }
    `}
`,Hn=M.Ay.div.withConfig({displayName:"ModalContentWrapper"})`
  padding: 0;
  height: 100%;
`,_n=M.DU`

  .genericModalHtmlOpen {
    overflow: hidden;
  }

  .genericModalBodyOpen {
    @media (hover: none) {
      overflow-y: hidden;
    }
  }

  ${({siteHeaderHeight:e,modalTransitionTime:t})=>M.AH`
      .genericModalOverlay {
        position: fixed;
        top: ${e}px;
        left: 0;
        opacity: 0;
        z-index: ${(0,H.fl)("hyperstitialLayer")};
        width: 100%;
        height: calc(100% - ${e}px);

        ${t&&M.AH`
          transition: opacity ${t}ms ease-in-out;
        `};
      }
    `};

  .genericModalOverlayAfterOpen {
    opacity: 1;
  }

  .genericModalOverlayBeforeClose {
    opacity: 0;
  }

  ${({shouldShowOverlay:e})=>e?M.AH`
  .genericModalOverlay {
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color: rgba(
      ${(0,H.HK)("colors.background.dark",{rgbOnly:!0})},
      0.4
    );
    overflow: hidden;
    justify-items: center;
  }

  .genericModal {
    position: relative;
    outline: none;
    ${(0,H._o)("background-color","colors.interactive.base.white")};
  }
`:M.AH`
          .genericModal {
            width: 100%;
            height: 100%;
            overflow-y: auto;

            ${(0,H._o)("background-color","colors.interactive.base.white")};
          }
        `};

  ${({isWindowed:e})=>e&&M.AH`
  .genericModal {
    display: flex;
    border-radius: ${(0,H.Kq)(1)};
    padding: ${(0,H.Kq)(6)} 0;
    width: auto;
    max-height: 100%;

    ${(0,H._o)("background-color","colors.interactive.base.white")};

    ${(0,H.H4)(D.LO.md)} {
      padding: ${(0,H.Kq)(6)} 0;
    }

    svg {
      ${(0,H._o)("fill","colors.interactive.base.deemphasized")};
    }
  }

  ${Hn} {
    display: flex;
    flex: 1;
    height: unset;
  }
`};
  ${({isBottom:e})=>e&&M.AH`
  .genericModalOverlay {
    align-items: end;

    ${(0,H.H4)(D.LO.xl)} {
      align-items: center;
    }
  }

  .genericModal {
    display: flex;
    border-radius: ${(0,H.Kq)(1)};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding-top: ${(0,H.Kq)(5)};
    width: 100%;
    max-height: calc(100% - ${(0,H.Kq)(4)});

    ${(0,H.H4)(D.LO.md)} {
      height: unset;
    }

    ${(0,H.H4)(D.LO.xl)} {
      border-bottom-left-radius: ${(0,H.Kq)(1)};
      border-bottom-right-radius: ${(0,H.Kq)(1)};
      max-width: ${(0,H.Kq)(104.125)};
    }
  }

  ${Hn} {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: unset;
    justify-items: center;
  }
`};
`,qn=({children:e,closeModalText:t="",configuredComponentRef:i,isModalOpen:r,modalTransitionTime:o=300,onAfterOpen:a,onClose:l,openModal:s,showHeader:d=!1,variations:c={isBottom:!1,isWindowed:!1}})=>{const{isWindowed:u,isBottom:h}=c,p=!h&&!u,m=h||u;n.useEffect(()=>{Nn().setAppElement("#app-root")},[]);const g=n.useMemo(()=>{if(!d||!r||!document)return 0;const e=window?.innerWidth,t=document.getElementsByClassName("visual-link-banner--is-scrolled"),i=document.getElementsByClassName("site-navigation");return e<On.Vh.xl&&t.length&&t[0]?t[0].offsetHeight:i&&i.length&&i[0]?.offsetHeight||0},[r,d]),b=()=>{l&&l(),s(!1)};return n.createElement(Nn(),{isOpen:r,className:"genericModal",overlayClassName:{base:"genericModalOverlay",afterOpen:"genericModalOverlayAfterOpen",beforeClose:"genericModalOverlayBeforeClose"},bodyOpenClassName:"genericModalBodyOpen",htmlOpenClassName:"genericModalHtmlOpen",shouldCloseOnEsc:!0,closeTimeoutMS:o,onRequestClose:b,onAfterOpen:()=>{a&&a()}},p&&n.createElement(Mn,{btnStyle:"text",iconPosition:"before",hasEnableIcon:!0,onClickHandler:b,ButtonIcon:Ln.Ay.Close,label:t}),n.createElement(Dn,{ButtonIcon:Ln.Ay.Close,onClickHandler:b,onTouchStart:b,btnStyle:"outlined",isIconButton:!0,hasEnableIcon:!0,cornerRadius:"FullyRoundedCorner",size:"small",label:t,isWindowed:u,isBottom:h}),n.createElement(Hn,{ref:i},e),n.createElement(_n,{siteHeaderHeight:g,modalTransitionTime:o,isWindowed:u,isBottom:h,shouldShowOverlay:m}))};qn.propTypes={configuredComponentRef:o().func,children:o().node.isRequired,closeModalText:o().string,isModalOpen:o().bool.isRequired,modalTransitionTime:o().number,onAfterOpen:o().func,onClose:o().func,openModal:o().func.isRequired,showHeader:o().bool,variations:o().shape({isBottom:o().bool,isWindowed:o().bool})};const Fn=(0,ee.Ng)(e=>({isModalOpen:e.isModalOpen||!1}),e=>{const{openModal:t}=(0,Bn.A)(e);return{openModal:t}})(qn);Fn.Default=(0,f.y)(Fn,"Default",{}),Fn.Windowed=(0,f.y)(Fn,"Windowed",{isWindowed:!0}),Fn.Bottom=(0,f.y)(Fn,"Bottom",{isBottom:!0});const Wn=Fn;const Kn=(0,i(31581).N)((0,x.y)(Wn,"GenericModal"));var jn=i(36276),Vn=i(92729),Gn=i(99263),Un=i(59867);const zn=M.Ay.span.withConfig({displayName:"AnchorNavigationPosition"})`
  display: block;
  height: 0;
  overflow: hidden;
`,Qn=M.Ay.nav.withConfig({displayName:"AnchorNavigationWrapper"})`
  --anchor-navigation-top: var(
    --one-nav-height,
    calc(${(0,H.Kq)(13)} - 1px)
  );

  position: ${({$isVisible:e})=>e?"sticky":"relative"};
  top: var(--anchor-navigation-top);
  z-index: ${(0,H.fl)("stickyLayer")};
  background: var(${ne.pT.Color.Surface});
  border-top: 1px solid var(${ne.pT.Color.BorderNavigation});
  border-bottom: 1px solid var(${ne.pT.Color.BorderNavigation});
  opacity: ${({$isVisible:e})=>e?1:0};
  visibility: ${({$isVisible:e})=>e?"visible":"hidden"};
  pointer-events: ${({$isVisible:e})=>e?"auto":"none"};
  transform: translateY(
    ${({$isVisible:e})=>e?"0":"calc(-100% - var(--anchor-navigation-top) - 2px)"}
  );
  transition:
    opacity 100ms ease,
    transform 200ms ease,
    visibility 0s linear;
`,Xn=M.Ay.ul.withConfig({displayName:"AnchorNavigationList"})`
  box-sizing: border-box;
  display: flex;
  gap: ${(0,H.Kq)(5)};
  width: max-content;
  max-width: 100%;
  margin: 0 auto;
  padding: ${(0,H.Kq)(2)}
    clamp(${(0,H.Kq)(2)}, 3vw, ${(0,H.Kq)(8)});
  overflow-x: auto;
  overflow-y: hidden;
  list-style: none;
  scrollbar-width: none;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }

  ${(0,H.H4)(D.LO.md)} {
    gap: calc(${(0,H.Kq)(5)} + 20px);
  }
`,Yn=M.Ay.li.withConfig({displayName:"AnchorNavigationItem"})`
  flex: 0 0 auto;
`,Jn=M.Ay.a.withConfig({displayName:"AnchorNavigationLink"})`
  ${(0,H.Gg)("typography.definitions.utility.button-core")};
  display: block;
  font-weight: 400;
  color: var(${ne.pT.Color.Text});
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;

  &:hover,
  &:focus {
    color: var(${ne.pT.Color.Text});
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid var(${ne.pT.Color.BorderFocus});
    outline-offset: 2px;
  }
`,Zn=M.Ay.span.withConfig({displayName:"AnchorNavigationTitle"})`
  ${(0,H.Gg)("typography.definitions.utility.button-core")};
  display: block;
  font-weight: bold;
  color: var(${ne.pT.Color.Text});
  text-transform: uppercase;
`,er=()=>window.scrollY||window.pageYOffset||0,tr=({items:e,title:t})=>{const{formatMessage:i}=(0,qt.A)(),[r,o]=(0,n.useState)(!0),a=(0,n.useRef)(null),l=(0,n.useRef)(null),s=(0,n.useRef)(0);return(0,n.useEffect)(()=>{s.current=er();return(e=>{const t=window.Kendra?.WINDOW_EVENT?.on(Un.m.SCROLL_THROTTLE,e);return t?()=>t.off():(window.addEventListener("scroll",e,{passive:!0}),()=>{window.removeEventListener("scroll",e)})})(()=>{const e=er(),t=e-s.current;if(Math.abs(t)<8)return;const i=!(!a.current||!l.current)&&e<((e,t,i)=>{const n=Number.parseFloat(window.getComputedStyle(t).top)||0,r=e.getBoundingClientRect();return Math.max(r.top+i-n,0)})(a.current,l.current,e);o(i||e<=0||t<0),s.current=e})},[]),n.createElement(n.Fragment,null,n.createElement(zn,{"aria-hidden":"true",ref:a}),n.createElement(Qn,{"aria-label":i(g.anchorNavigationLabel),"aria-hidden":!r,ref:l,$isVisible:r},n.createElement(Xn,null,t&&n.createElement(Yn,{key:"anchor-navigation-title"},n.createElement(Zn,null,t,":")),e.map((e,t)=>n.createElement(Yn,{key:`${e.href}-${t}`},n.createElement(Jn,{href:e.href},e.text))))))},ir=({AnchorList:e})=>{const t=(e=>(e?.items||[]).flatMap(e=>{const t=e.href?.trim();return e.text&&(e=>"string"==typeof e&&e.trim().startsWith("#"))(t)?[{href:t,text:e.text}]:[]}))(e);return t.length?n.createElement(tr,{items:t,title:e?.title}):null};var nr=i(60663),rr=i(95768),or=i(46269),ar=i(28423),lr=i(92543),sr=i(16695);const dr=(0,nr.Y)(()=>window.sessionStorage),cr=["TextAboveCenterSmallWithRule","TextAboveCenterFullBleedNoContributor","TextBelowCenterFullBleedNoContributor","InlineImage","SplitScreenImageRightFullBleed","SplitScreenImageRightInset","SplitScreenImageLeftInset","SplitScreenImageLeftFullBleed","TextAboveLeftSmallWithRule"],ur=["TextOverlayContentHeader","TextOverlayContentHeaderWithLogo","TextOverlayCenterFullBleedGradient"],hr=e=>cr.includes(e),pr=(e,t)=>Boolean(t&&ur.includes(e)),mr=(e,t,i,n)=>{let r={};const{showContributorImageOnMobile:o,showEnhancedTextOverlay:a}=n;return e&&(hr(i)&&(r={shouldAlignCenterWhenNoCaption:!0}),"TextBelowCenterFullBleedNoContributor"===i&&(r={...r,isImagePositionBottomInSmallScreen:!0})),t&&(r={...r}),hr(i)?r={...r,showContributorImageOnMobile:o}:pr(i,a)&&(r={...r,showContributorImage:!1,hideShareButtons:!0,showTextOverlayDek:!0,hasDekMarginReduced:!0,shouldLimitContentWidth:!0,showEnhancedPublishDate:!0}),r},gr=(e,t)=>e.issueDate?n.createElement(It,null,t.formatMessage(g.publishedInThe),` ${e.issueDate} `):null,br=(e,t,i)=>(pr(e,t)||hr(e))&&i,yr=({className:e,disclaimerPosition:t,showDisclaimer:i,DisclaimerWrapper:r,disclaimer:o})=>(0,v.rU)(t)&&i&&n.createElement(S.A,{className:e},n.createElement(r,null,n.createElement(Ge.M,{disclaimerHtml:o,hasTopRule:!1,contentAlign:"center"}))),fr=({disclaimerPosition:e,showDisclaimer:t,GeneralContentWrapper:i,disclaimer:r})=>(0,v.Nb)(e)&&t&&n.createElement(Bt,{as:i,disclaimerPosition:v.T7.BOTTOM},n.createElement(Ct,{disclaimerHtml:r,hasTopRule:!1,disclaimerPosition:v.T7.BOTTOM})),vr=({enableActionBar:e,actionBarButtons:t,enableBookmarking:i,actionBarProps:r,headerProps:o})=>e&&t&&n.createElement(Vn.A,{...r,image:o.lede}),Ar=({hasTruncationOnMobile:e,isMobileTruncated:t,intl:i,onTruncationDismiss:r})=>e&&t&&n.createElement(At,{inputKind:"button",label:i.formatMessage(g.truncatedButtonLabel),onClickHandler:r}),Cr=({componentConfig:e,channelCloudData:t})=>((e,t)=>h()(e,"ChannelCloud.settings.shouldShowChannelCloud",!1)&&t?.channels?.length>0)(e,t)&&n.createElement($.A.ContentWithAdRailNarrow,null,n.createElement("div",null,n.createElement(fn,{...t,...h()(e,"ChannelCloud.settings")}))),wr=({shouldHideSeriesNavigation:e,shouldShowSeriesNavigationInFooter:t,pageBackgroundColor:i,borderColorTheme:r})=>!e&&!t&&n.createElement(tn.A,{className:"article__series-navigation",pageBackgroundTheme:i,dividerColor:r}),kr=({productCarousel:e,isUpcEnabled:t,hasAffiliateLinkDisabled:i,id:r})=>Object.keys(e).length>0&&n.createElement(Rn.K1,{key:"articleCarouselProduct",dataJourneyHook:"row-content"},n.createElement($n.A,{isUpcEnabled:t,...e,hasAffiliateLinkDisabled:i,copilotId:r})),Er=({isBeOpEnable:e,ContentWrapper:t})=>e&&n.createElement(t,null,n.createElement("div",{className:"BeOpWidget"})),xr=({showFullBleedBelow:e,variations:t,cneVideoEmbedProps:i})=>e&&n.createElement(n.Fragment,null,n.createElement(wi.A,{variations:t,isFullBleedVideo:e,cneVideoEmbedProps:i})),$r=({hasNewsletterOnPageTop:e,newsletter:t})=>e&&t&&n.createElement(an.A,{...t,position:"article-page-top"}),Rr=({sponsoredContentHeaderProps:e})=>e&&n.createElement(Yi.A,{...e,className:"light-theme"}),Sr=({className:e,showBreadcrumbTrail:t,hierarchy:i,shouldRemoveBackgroundColor:r})=>t&&n.createElement(C.A,{className:e,hierarchy:i,shouldRemoveBackgroundColor:r}),Tr=({shouldHideSeriesRecirc:e,ContentWrapper:t})=>!e&&n.createElement(Xi,{ContentWrapper:t}),Nr=({ContentWrapper:e,contentTitle:t,documentType:i,enableCommunityExperience:r,headerProps:o,image:a,id:l,hideCommentSection:s,shouldHideReviewFeedbackAside:d})=>r&&!s&&n.createElement(lr.u,{ContentWrapper:e,contentTitle:t,hed:o.dangerousHed,documentType:i,image:a,id:l,shouldHideReviewFeedbackAside:d}),Br=({showAgeGate:e,contentWarnings:t})=>e&&n.createElement(A.A,{content:{contentWarnings:t}}),Lr=({user:e})=>(e=>!e.isAuthenticated&&e.hasUserAuthCheck)(e)&&n.createElement(E,{as:"document",hint:"prefetch",href:"/account/sign-in"}),Or=({enableEnhancedCartoonExperience:e,intl:t,sliderData:i,showGalleryCartoonPublishedDate:r})=>e&&n.createElement(Kn,{closeModalText:t.formatMessage(g.backToArticle)},n.createElement(jn.A,{id:i.id,items:i.items,showPublishedDate:r,responsiveCartoonVariation:"SliderCartoon",title:i?.source?.hed,titleLinkURL:i?.url,shouldUseModalStyle:!0,carouselPlacedIn:"modal",showHeadRecirc:!0,showNewsletter:!0})),Pr=(e,t,i)=>e.isAuthenticated?t:i,Ir=(e,t)=>e||!t,Mr=(e,t)=>!e&&t,Dr=(e,t)=>e&&!t,Hr=(e,t)=>e&&t,_r=(e,t)=>{window.cns&&(window.cns.pageContext.content.pageStructure=e,t&&(window.cns.pageContext.content.adCount=t))},qr=e=>{e.current&&e.current.off()},Fr=e=>!!e.lede,Wr=(e,t)=>{e&&(e=>{const t=h()(e,"ContentHeader.settings");c()(e,"ContentHeader.variation","TextOverlayWithLogo"),c()(e,"ContentHeader.settings",{...t,showLogo:!0,hideContributors:!1,hidePublishDate:!0,hideRubric:!1,hideShareButtons:!0})})(t)},Kr=({isBeOpEnable:e,beOpAccountID:t})=>e?n.createElement(Zi.M,{accountId:t}):null,jr=({showBookmark:e})=>e?n.createElement(rn.A,null):null,Vr=({body:e,ContentWrapper:t})=>e?n.createElement(t,null,n.createElement(Ne.h1,null)):null,Gr=(e,t)=>(0,vn.j)(t?.adsConfig?.bytes)?{isMobileDevice:e,brandSlug:t?.brand?.deprecatedSlug,bytesConfig:t?.adsConfig?.bytes}:{},Ur=(e,t,i)=>e?{midRecircItems:t,minWordCountForMidRecirc:i}:{},zr=({shouldOverrideContentHeader:e,interactiveOverride:t,pageContentEl:i,headerRenderProps:r})=>{const o=(0,or.h)();return e?n.createElement("div",{className:"interactive-override-container interactive-override-container--content_header",dangerouslySetInnerHTML:{__html:t.markup}}):n.createElement(bt,{ref:i},(0,ki.C)({showExperimentPlaceholder:r.showExperimentPlaceholder,renderHeader:()=>(0,Ei.w)(r.headerComponent,{oneCover:r.oneCover,headerProps:r.headerProps,type:"article",additionalHeaderProps:r.additionalHeaderProps,enableEnhancedArticleHeader:r.enableEnhancedArticleHeader,hasNativeShareButton:r.hasNativeShareButton,shouldEnableNativeShareOnDesktop:r.shouldEnableNativeShareOnDesktop,isFullBleedVideo:r.isFullBleedVideo,hasLightbox:r.hasLightbox,interactiveOverride:r.interactiveOverride,metadataVideo:r.metadataVideo,showBreadCrumb:r.showBreadcrumbTrail,featuredDeal:r.featuredDeal}),isGBReady:o}))},Qr=e=>s()("article main-content","story",{"article--inherited-dropcaps":e}),Xr=e=>s()("article-body__footer",{"content-footer--mobile-truncated":e}),Yr=({body:e,paywallProps:t})=>e?n.createElement(Ii,{...t}):null,Jr=e=>s()("page--article",e),Zr=e=>!e;yr.propTypes={className:o().string,disclaimerPosition:o().string,showDisclaimer:o().bool,DisclaimerWrapper:o().elementType,disclaimer:o().string},fr.propTypes={disclaimerPosition:o().string,showDisclaimer:o().bool,GeneralContentWrapper:o().elementType,disclaimer:o().string},vr.propTypes={enableActionBar:o().bool,actionBarButtons:o().array,enableBookmarking:o().bool,actionBarProps:o().object,headerProps:o().object},Ar.propTypes={hasTruncationOnMobile:o().bool,isMobileTruncated:o().bool,intl:o().object,onTruncationDismiss:o().func},Cr.propTypes={componentConfig:o().object,channelCloudData:o().object},wr.propTypes={shouldHideSeriesNavigation:o().bool,shouldShowSeriesNavigationInFooter:o().bool,pageBackgroundColor:o().string,borderColorTheme:o().string},kr.propTypes={productCarousel:o().object,isUpcEnabled:o().bool,hasAffiliateLinkDisabled:o().bool,id:o().string},Er.propTypes={isBeOpEnable:o().bool,ContentWrapper:o().elementType},xr.propTypes={showFullBleedBelow:o().bool,variations:o().array,cneVideoEmbedProps:o().object},$r.propTypes={hasNewsletterOnPageTop:o().bool,newsletter:o().object},Rr.propTypes={sponsoredContentHeaderProps:o().object},Sr.propTypes={className:o().string,showBreadcrumbTrail:o().bool,hierarchy:o().array,shouldRemoveBackgroundColor:o().bool},Tr.propTypes={shouldHideSeriesRecirc:o().bool,ContentWrapper:o().elementType},Nr.propTypes={ContentWrapper:o().elementType,contentTitle:o().string,documentType:o().string,enableCommunityExperience:o().bool,headerProps:o().object,image:o().object,id:o().string,hideCommentSection:o().bool,shouldHideReviewFeedbackAside:o().bool},Br.propTypes={showAgeGate:o().bool,contentWarnings:o().array},Lr.propTypes={user:o().object},Or.propTypes={enableEnhancedCartoonExperience:o().bool,intl:o().object,sliderData:o().object,showGalleryCartoonPublishedDate:o().bool},Kr.propTypes={isBeOpEnable:o().bool,beOpAccountID:o().string},jr.propTypes={showBookmark:o().bool},Vr.propTypes={body:o().array,ContentWrapper:o().elementType},zr.propTypes={shouldOverrideContentHeader:o().bool,interactiveOverride:o().object,pageContentEl:o().object,headerRenderProps:o().object},Yr.propTypes={body:o().array,paywallProps:o().object};const eo=e=>{const t=(e=>{const{showWriterBio:t=!1,shouldHideSeriesNavigation:i=!0,shouldHideSeriesRecirc:n=!0,shouldEnableArticleBackground:r=!1,shouldEnableFullArticleInverted:o=!1,shouldInheritDropcapColor:a=!1,showLinkStackInsideContentBody:l=!1,hasLightbox:s=!1,cartoonVariation:d="default",related:c=[],metadataVideo:u={},productCarousel:h={},showGalleryCartoonPublishedDate:p=!0,showContributorImageOnMobile:m=!0,showIssueDateInArticle:g=!1,showExperimentPlaceholder:b=!1,shouldAddToRecentlyViewed:y=!1,enableAnchorNavigation:f=!1,...v}=e;return{...v,showWriterBio:t,shouldHideSeriesNavigation:i,shouldHideSeriesRecirc:n,shouldEnableArticleBackground:r,shouldEnableFullArticleInverted:o,shouldInheritDropcapColor:a,showLinkStackInsideContentBody:l,hasLightbox:s,cartoonVariation:d,related:c,metadataVideo:u,productCarousel:h,showGalleryCartoonPublishedDate:p,showContributorImageOnMobile:m,showIssueDateInArticle:g,showExperimentPlaceholder:b,shouldAddToRecentlyViewed:y,enableAnchorNavigation:f}})(e),i=((e={})=>{const{customHeading:t={},recircs:i=[],cnCoupons:n=[],shouldDisplaySubscribersOnlyBadge:r=!1,...o}=e;return{...o,customHeading:t,recircs:i,cnCoupons:n,shouldDisplaySubscribersOnlyBadge:r}})(t.article),{configuredComponentRef:r}=t,{documentType:o,id:a,body:l,channelCloudData:d,contentWarnings:c,contributorSpotLightProps:u,hasAffiliateLinks:p,hasEventBannerHidden:m,channelMap:b,hasNewsletterInBody:y,hasTruncationOnMobile:f,headerProps:v,hideContributorBio:A,hideRecircList:C,hideRecircMostPopular:k,hierarchy:E,shouldDisplaySubscribersOnlyBadge:R,shouldEnableVMG:S,interactiveOverride:T,isAffiliateLinksDisabled:N,hideCommentSection:B,hideActionBar:L,hideNewsletter:O,lang:P,customHeading:I,recircs:M,recircMostPopular:D,recircRelated:H,commerceRecirc:_,shouldShowCommerceRecirc:q,midRecircItems:F,relatedVideo:W,relatedAudio:K,interlude:j,isHeroAdVisible:V,isMobileDevice:G,licensedPartnerLink:U,magazineDisclaimer:z,paddingTop:Q,tagCloud:X,AnchorList:Y,navigationTheme:J,newsletter:Z,shouldUsePersistentAd:ee,showAgeGate:te,showBookmark:ie,showBreadcrumbTrail:ne,showHotelRecirc:re,signageConfig:oe,isUpcEnabled:ae,isLinkStackEnabled:le,shouldShowFooterNewsletter:se,shouldPrioritizeSeriesPagination:de,cnCoupons:ce,hasAffiliateLinkDisabled:ue,showDisclaimer:he,disclaimerText:pe,disclaimerPosition:me,tripPlannerBanner:ge,newsletterModules:be,pageStructure:ye,adCount:fe,lightboxImages:ve}=i,{article:Ae,communityExperience:Ce,showWriterBio:we,showFirstRailRecirc:ke,attributes:Ee,className:xe,componentConfig:$e,config:Re,shouldHideBaseTopPadding:Se,shouldHideSeriesNavigation:Te,shouldHideSeriesRecirc:Ne,shouldShowSeriesNavigationInFooter:Be,pageBackgroundTheme:Le,dividerColor:Oe,shouldEnableArticleBackground:Pe,shouldEnableFullArticleInverted:Ie,shouldInheritDropcapColor:Me,showLinkStackInsideContentBody:De,enableAnchorNavigation:He,featureFlags:_e,hasLightbox:qe,hasSlideShow:Fe,slideShowVariation:We,hasChannelNavigation:Ke,hideSideBySideViewOnMobile:je,showContributor:Ve,showContributorSpotlight:Ge,showContributorAboveReviews:Ue=!1,cartoonVariation:ze,hasRecircDriver:Qe,recircMostPopularVariationOnMobile:Xe,linkList:Ye,related:Je,metadataVideo:Ze,productCarousel:et,user:tt,userPlatform:it,hasDynamicNewsletterSignup:nt,hasNewsletterForABTest:rt,intl:ot,xlargePaddingTop:at,articleVariationForXlargePaddingTop:lt,beOp:st,hasDynamicDisclaimer:dt,responsiveCartoonVariation:ct,showGalleryCartoonPublishedDate:ut,actionBarLargeScreenVariation:ht,actionBarMobileScreenVariation:gt,isActionBarStickyLargeScreen:bt,actionBarButtons:ft,showContributorImageOnMobile:vt,showIssueDateInArticle:At,hasLinkbannerCrossSlideAnimation:Ct,showEnhancedTextOverlay:wt,minWordCountForMidRecirc:kt,shouldShowMidArticleRecirc:Et,shouldHideInlineRecirc:xt,showExperimentPlaceholder:$t,headerComponent:Rt,oneCover:St,visualStoryBanner:Tt,featuredDeal:Bt,qaBannerParagraphIndex:Pt,puzzlesAndGames:It,contentFooterContributorTypes:Mt,shouldAddToRecentlyViewed:Dt=!1,coreDataLayer:Ht,"head.title":_t}=t,qt=(e=>e??"ContentHeader")(Rt),[Ft,Wt]=(0,n.useState)(0),[Kt,jt]=(0,n.useState)(v.hasContentHeaderLogo),[Vt,Gt]=(0,n.useState)(!1),[Ut,zt]=(0,n.useState)(Z),[Qt,Xt]=(0,n.useState)({}),Yt=Boolean((0,ar.t)({organizationSlug:Re?.brand?.organizationSlug,deprecatedSlug:Re?.brand?.deprecatedSlug,pageType:"article",isMobileDevice:G}).sections.length),Jt=(0,n.useRef)(null),Zt=(0,n.useRef)(null),ei=(0,n.useRef)(null),ti=(0,n.useRef)(null),ii=(0,n.useRef)(null),ni=(0,n.useRef)(Ft);(0,n.useEffect)(()=>{((e,t)=>{e.current=t})(ni,Ft)},[Ft]);const ri=(0,n.useMemo)(()=>((e,t,i,n)=>{const r=e?(0,Ji.A)({Component:vi,slides:t,hasSlideShow:i,slideShowVariation:n}):vi;return Ni(r,"body")})(qe,ve,Fe,We),[qe,ve,Fe,We]),oi=(e=>e?.enableActionBar)(_e),ai=(e=>e?.newsletterId)(Z),li=(0,n.useCallback)(()=>{((e,t,i,n)=>{((e,t,i)=>e&&t?.current?.offsetHeight!==i.current)(e,t,i)&&n((e=>e?.current?.offsetHeight)(t))})(oi,Zt,ni,Wt)},[oi]),si=(0,n.useCallback)(()=>{const e=window.scrollY,t=(e=>e.current?.offsetTop||0)(Jt),i=((e,t)=>e<=t+100)(e,t);jt((e=>t=>((e,t)=>e!==t?e:t)(e,t))(i))},[]),di=(0,n.useCallback)(()=>{li()},[li]),ci=(0,n.useCallback)(()=>{li()},[li]),ui=(0,n.useCallback)(()=>{Gt(Zr),(0,$i.zJ)("article-read-more")},[]),hi=(0,n.useCallback)((e,t)=>{Xt(e),(e=>{e&&e()})(t)},[]),pi=(0,n.useCallback)(e=>(async(e,t,i,n)=>{try{((e,t,i,n)=>{if(200!==e.status)return;const r=t.filter(e=>e.priority).sort((e,t)=>e.priority-t.priority).map(e=>e.newsletterId),o=e.newsletterSubscriptions.data.filter(e=>"SUBSCRIBED"===e.attributes.status).map(e=>e.attributes.newsletterId);if(!o.length)return;const a=r.filter(e=>!o.includes(e)),l=t.find(e=>e.newsletterId===a[0]);o.includes(i)&&n(e=>({...e,...l}))})(await(0,xn.k)(e),t,i,n)}catch(e){}return{}})(e,be,ai,zt),[be,ai]);(0,n.useEffect)(()=>{((e,t,i,n,r)=>{if(((e,t,i)=>e.isAuthenticated&&t&&i?.length)(e,t,i)){const t=((e,t,i)=>{const n=e.map(e=>e.newsletterId).toString();return{amgUUID:t.amguuid,newsletterIds:n,userPlatformProxy:i?.userPlatformProxy,provider:"sailthru",xClientID:i?.xClientID}})(i,e,n);r(t)}})(tt,nt,be,it,pi),Gt(!!f),((e,t,i,n)=>{e&&(t(!0),i.current=window.Kendra.WINDOW_EVENT.on(Un.m.SCROLL_DEBOUNCE,n))})(v.hasContentHeaderLogo,jt,ei,si);const e=((e,t)=>{const i="header"===h()(e,"behavior"),n=h()(t,"BasePage.settings.showNavWithHeaderOverride");return i&&!n})(T,$e);return dr.setItem("nav_invisible",e),_r(ye,fe),ti.current=window.Kendra.WINDOW_EVENT.on(Un.m.SCROLL_DEBOUNCE,ci),ii.current=window.Kendra.WINDOW_EVENT.on(Un.m.RESIZE_DEBOUNCE,di),window.Kendra.TRACK_COMPONENT.broadcast(w.G.RENDER,{name:"ArticlePage"}),((e,t,i)=>()=>{qr(e),qr(t),qr(i),dr.removeItem("nav_invisible")})(ei,ti,ii)},[]),(0,n.useEffect)(()=>{const e=it?.federatedGraphqlUrl,t=Ht?.site?.orgId;(({shouldAddToRecentlyViewed:e,isAuthenticated:t,amguuid:i,federatedGraphqlUrl:n,orgId:r,id:o})=>{e&&t&&i&&n&&r&&(0,En.W)(n,o,r).catch(e=>{})})({shouldAddToRecentlyViewed:Dt,isAuthenticated:tt.isAuthenticated,amguuid:tt.amguuid,federatedGraphqlUrl:e,orgId:t,id:a})},[Dt,tt.isAuthenticated,tt.amguuid,it,Ht,a]);const{enableCommunityExperience:mi,enableArtistQA:gi}=Ce,bi=(e=>e?.account?.bookmark?.enableBookmarkDrawers||!1)(Re),yi=((e,t)=>e||t.formatMessage(g.defaultDisclaimer))(pe,ot),fi=((e,t)=>e?t:void 0)(Pe,Le),wi=((e,t)=>e?t:void 0)(Pe,Oe),ki=((e,t)=>!!e||t)(rt,y),{hasContentHeaderLogo:Ei,isFullBleedVideo:xi}=v;Wr(Ei,$e);const Ri=((e,t)=>e?void 0:t.contributors)(A,v),{hasNativeShareButton:Si,hasNewsletterOnPageTop:Ti,hasNewsletterWithoutWrapper:Bi,shouldEnableNativeShareOnDesktop:Li,shouldRemoveBackgroundColor:Oi,enableEnhancedCartoonExperience:Pi,enableEnhancedArticleHeader:Ii,variations:Mi,showFullBleedBelow:Di,cneVideoEmbedProps:Hi,enableBookmarking:_i}=_e,qi=((e,t)=>e&&!t)(oi,L),Fi=h()($e,"ContentHeader.variation"),Wi=((e,t,i)=>hr(e)||pr(e,t)?{hasReducedBackgroundSpacing:i}:{})(Fi,wt,At),Ki=((e,t,i,n,r)=>(hr(e)||pr(e,t))&&i?{articleIssueDateComponent:gr(n,r)}:{})(Fi,wt,At,v,ot),ji={...mr(Ii,qi,Fi,{showContributorImageOnMobile:vt,showEnhancedTextOverlay:wt}),shouldDisplaySubscribersOnlyBadge:R},Vi=((e,t)=>e?"InlineCartoon":t)(Pi,ct),Gi=(0,en.S)($e,{type:"article"}),Ui=q?$e?.CommerceRecircList:void 0,zi=(e=>"OneColumnNarrow"===h()(e,"ChunkedArticleContent.variation"))($e),Qi=$.A.DynamicGrid({startColumn:2,endColumn:12}),Xi=((e,t,i,r)=>e.map((e,o)=>{const a=(0,x.y)(Cn.A,e.displayName),l=e.heading||"",{results:s,destinationPage:d,location:c,recommendedClickout:u,recommendedType:h}=e;return t&&d?n.createElement(wn.A,{key:`SummaryCollectionSplitColumns${o}`,recommendedItems:{items:s,recommendedType:h,recommendedClickout:u},guideItem:[d],location:c,shouldAppendReadMoreLinkForDek:!0}):n.createElement(kn.A,{key:`ConnectedErrorBoundary${o}`},n.createElement(a,{related:e.related,heading:l,dividerColor:i,shouldEnableFullArticleInverted:r}))}))(M,Qe,wi,Ie),Yi=((e,t,i,n)=>e===t&&i?i:n)(Fi,lt,at,Q),{beOpAccountID:Zi,isBeOpEnable:tn}=(e=>({beOpAccountID:e?.accountID||"",isBeOpEnable:e?.isEnabled||!1}))(st),rn=(e=>e&&n.createElement(nn.A,null))(Ke),an=(e=>"WithAdRail"===h()(e,"ChunkedArticleContent.variation"))($e),ln=(0,n.useMemo)(()=>((e,t)=>({children:i})=>n.createElement(Lt,{isadRail:e,as:t},n.createElement("div",{className:"body body__container"},n.createElement("div",{className:"container container--body"},n.createElement("div",{className:"container--body-inner"},i)))))(an,Gi),[an,Gi]),sn=(0,n.useMemo)(()=>((e,t,i)=>({children:r})=>n.createElement(Ot,{as:i,isAdRail:e,isNarrow:t},r))(an,zi,Gi),[an,zi,Gi]),dn=(e=>"articleheader"===(0,Sn.u)(e))(T),cn=h()(v,"sponsoredContentHeaderProps"),un=h()(It,"wideContent",!1),hn=(e=>s()({[`theme-${e.theme?.text}`]:e.theme?.text&&e.theme?.text===e.theme?.art}))(v);return n.createElement(pt,{configuredComponentRef:r,additionalNavigation:rn,attributes:Ee,shouldEnableFullArticleInverted:Ie,channelMap:b,className:Jr(xe),config:Re,featureFlags:_e,hideNav:Kt,hasContentHeaderLogo:Ei,hasEventBannerHidden:m,hasFooterAdsMargins:!0,interactiveOverride:T,isHeroAdVisible:V,hasBaseAds:!0,user:tt,lang:P,customHeading:I,shouldHideBaseTopPadding:Se,shouldPrioritizeSeriesPagination:de,pageBackgroundTheme:fi,navigationTheme:J,aboveTheFoldClassName:hn,hasLinkbannerCrossSlideAnimation:br(Fi,wt,Ct),tripPlannerBanner:ge},n.createElement(Kr,{isBeOpEnable:tn,beOpAccountID:Zi}),n.createElement(jr,{showBookmark:ie}),n.createElement(yr,{className:hn,disclaimerPosition:me,showDisclaimer:he,DisclaimerWrapper:Qi,disclaimer:yi}),n.createElement(Sr,{className:hn,showBreadcrumbTrail:ne,hierarchy:E,shouldRemoveBackgroundColor:Oi}),n.createElement(rr.A,{isPhotoBookmarkingEnabled:_i,theme:"standard"},n.createElement("article",{className:Qr(Me),lang:P},n.createElement($r,{hasNewsletterOnPageTop:Ti,newsletter:Z}),n.createElement(sr.N,null,n.createElement(Rr,{sponsoredContentHeaderProps:v.sponsoredContentHeaderProps}),n.createElement(zr,{shouldOverrideContentHeader:dn,interactiveOverride:T,pageContentEl:Jt,headerRenderProps:{headerComponent:qt,oneCover:St,headerProps:v,additionalHeaderProps:ji,enableEnhancedArticleHeader:Ii,hasNativeShareButton:Si,shouldEnableNativeShareOnDesktop:Li,isFullBleedVideo:xi,hasLightbox:qe,interactiveOverride:T,metadataVideo:Ze,showBreadcrumbTrail:ne,featuredDeal:Bt,showExperimentPlaceholder:$t}})),n.createElement(wr,{shouldHideSeriesNavigation:Te,shouldShowSeriesNavigationInFooter:Be,pageBackgroundColor:fi,borderColorTheme:wi}),He&&Boolean(Y?.items?.length)&&n.createElement(ir,{AnchorList:Y}),n.createElement(yt,{togglePaddingTop:Yi,isMobileTruncated:Vt,cartoonVariation:ze,"data-attribute-verso-pattern":"article-body",enableActionBar:qi,className:"article-body__content",...Wi,ref:Zt},n.createElement(vr,{enableActionBar:qi,actionBarButtons:ft,enableBookmarking:_i,actionBarProps:{actionBarLargeScreenVariation:ht,actionBarMobileScreenVariation:gt,isActionBarStickyLargeScreen:bt,actionBarButtons:ft,articleLength:Ft,showActionBar:qi,shouldEnableBookmarkDrawers:bi},headerProps:v}),n.createElement(Ar,{hasTruncationOnMobile:f,isMobileTruncated:Vt,intl:ot,onTruncationDismiss:ui}),n.createElement(Cr,{componentConfig:$e,channelCloudData:d}),n.createElement(Yr,{body:l,paywallProps:{featuredDeal:Bt,body:l,linkList:Ye,isLinkStackEnabled:Hr(le,De),isMobileDevice:G,component:ri,contributors:Ri,hasTopSpacing:Fr(v),interlude:j,isAffiliateLinksDisabled:N,name:"chunked-article-content",shouldUsePersistentAd:ee,recircMostPopularVariationOnMobile:Xe,hideRecircMostPopular:k,hideNewsletter:O,shouldEnableArticleBackground:Pe,shouldEnableFullArticleInverted:Ie,pageBackgroundTheme:fi,dividerColor:wi,recircMostPopular:D,showFirstRailRecirc:ke,tagCloud:X,responsiveCartoonVariation:Vi,hasCartoonFullWidth:Pi,setCartoonLinkedGalleries:hi,hasAffiliateLinks:p,...Ki,showDisclaimer:he,disclaimer:yi,disclaimerPosition:me,wideContent:un,shouldHideInlineRecirc:xt,visualStoryBanner:Tt,relatedAudio:K,...Ur(Et,F,kt),shouldShowQaBanner:gi,enableCommunityExperience:mi,qaBannerParagraphIndex:Pt}}),n.createElement(Vr,{body:l,ContentWrapper:ln})),n.createElement(Tr,{shouldHideSeriesRecirc:Ne,ContentWrapper:ln}),Ue&&!Ge&&!1!==Ve&&n.createElement(Ci.A,{componentWrapper:sn,contributorTypes:Mt,contributors:Ri,dividerColor:wi,hideContributorBio:A,showWriterBio:we,tagCloud:X})),n.createElement(Er,{isBeOpEnable:tn,ContentWrapper:ln}),n.createElement(xr,{showFullBleedBelow:Di,variations:Mi,cneVideoEmbedProps:Hi}),n.createElement(fr,{disclaimerPosition:me,showDisclaimer:he,GeneralContentWrapper:Gi,disclaimer:yi}),n.createElement(kr,{productCarousel:et,isUpcEnabled:ae,hasAffiliateLinkDisabled:ue,id:a}),n.createElement(Nr,{ContentWrapper:sn,contentTitle:_t,documentType:o,enableCommunityExperience:mi,headerProps:v,image:v.lede,id:a,hideCommentSection:B,shouldHideReviewFeedbackAside:!an})),n.createElement(Nt,{as:Ai.A,className:Xr(Vt),channelMap:b,consumerMarketing:{position:"article-footer"},shouldEnableFullArticleInverted:Ie,ContentWrapper:Gi,contributors:Ri,contributorSpotlight:u,showWriterBio:we,hideContributorBio:A,showContributorSpotlight:Ge,showContributor:!Ue&&Ve,hideRecircList:C||Yt,shouldHideFooterRecircSections:Yt,hasNewsletterWithoutWrapper:Bi,isLinkStackEnabled:Dr(le,De),isNarrow:zi,isAdRail:an,licensedPartnerLink:U,linkList:Ye,magazineDisclaimer:z,hideNewsletter:O,newsletter:Pr(tt,Ut,Z),recircs:M,recircListElements:Xi,dividerColor:wi,related:Je,commerceRecirc:_,commerceRecircConfig:Ui,recircRelated:H,relatedVideo:W,showNewsletter:Ir(se,ki),showHotelRecirc:re,signageConfig:oe,tagCloud:X,shouldEnableVMG:S,cnCoupons:ce,sponsoredProps:cn,hasDynamicDisclaimer:dt,shouldShowSeriesNavigationInFooter:Mr(Te,Be),pageBackgroundTheme:fi,currentPage:"article",contentFooterContributorTypes:Mt,...Gr(G,Re)}),n.createElement(on.A,{organizationSlug:Re?.brand?.organizationSlug,deprecatedSlug:Re?.brand?.deprecatedSlug,isMobileDevice:G,pageType:"article"}),n.createElement(Br,{showAgeGate:te,contentWarnings:c}),n.createElement(Lr,{user:tt}),n.createElement(Or,{enableEnhancedCartoonExperience:Pi,intl:ot,sliderData:Qt,showGalleryCartoonPublishedDate:ut}),n.createElement(mt,{pageBackgroundTheme:fi,dividerColor:wi,shouldEnableFullArticleInverted:Ie,hideSideBySideViewOnMobile:je,isUpcEnabled:ae}),n.createElement(An,null))};eo.propTypes={actionBarButtons:o().arrayOf(o().oneOf(["audio","bookmark","comments"])),actionBarLargeScreenVariation:o().oneOf((0,f._)(Gn.A)),actionBarMobileScreenVariation:o().oneOf((0,f._)(Gn.A)),article:o().shape({body:o().array,channelCloudData:o().object,cnCoupons:o().array,documentType:o().string,contributorSpotLightProps:o().object,hasAffiliateLinks:o().boolean,channelMap:o().object,contentWarnings:o().array,customHeading:o().object,disclaimerText:o().string,disclaimerPosition:o().string,hasAffiliateLinkDisabled:o().bool,hasEventBannerHidden:o().bool,hasNewsletterInBody:o().bool,hasTruncationOnMobile:o().bool,headerProps:o().object.isRequired,hideContributorBio:o().bool,hideRecircList:o().bool,hideRecircMostPopular:o().bool,hierarchy:o().array,shouldDisplaySubscribersOnlyBadge:o().bool,id:o().string,interactiveOverride:o().shape({markup:o().string,behavior:o().string}),interlude:o().shape({...N.A.propTypes,isRailEligible:o().boolean}),isAffiliateLinksDisabled:o().bool,hideCommentSection:o().bool,hideActionBar:o().bool,hideNewsletter:o().bool,isHeroAdVisible:o().bool.isRequired,isLicensedPartner:o().bool,isLinkStackEnabled:o().bool,isMobileDevice:o().bool,isUpcEnabled:o().bool,lang:o().string,licensedPartnerLink:o().string,lightboxImages:o().array.isRequired,magazineDisclaimer:o().shape({issueDate:o().string.isRequired,issueLink:o().string.isRequired,originalHed:o().string,hasContentDisclaimerTag:o().bool}),midRecircItems:o().array,AnchorList:o().shape({items:o().arrayOf(o().shape({href:o().string,text:o().string})),title:o().string}),navigationTheme:o().string,newsletter:o().object,newsletterModules:o().array,paddingTop:o().oneOf(["large"]),pageStructure:o().array,adCount:o().shape({cm:o().number,native:o().number,mid_content:o().number,interlude:o().number}),recircs:o().array,commerceRecirc:o().array,recircMostPopular:o().array,recircRelated:o().array,relatedVideo:o().shape({brand:o().string,related:o().any,useRelatedVideo:o().bool}),relatedAudio:o().object,shouldPrioritizeSeriesPagination:o().bool,shouldShowCommerceRecirc:o().bool,shouldShowFooterNewsletter:o().bool,shouldUsePersistentAd:o().bool,shouldEnableVMG:o().bool,showAgeGate:o().bool,showBookmark:o().bool,showBreadcrumbTrail:o().bool,showDisclaimer:o().bool,showHotelRecirc:o().bool,signageConfig:o().object,tagCloud:o().shape({tags:o().arrayOf(o().shape({tag:o().string.isRequired,url:o().string}))}),tripPlannerBanner:o().shape({text:o().string,cta:o().shape({text:o().string,url:o().string}),analytics:o().shape({items:o().arrayOf(o().shape({content_id:o().string,content_title:o().string,content_type:o().string,content_url:o().string}))})})}).isRequired,articleVariationForXlargePaddingTop:o().string,attributes:o().object,beOp:o().shape({accountID:o().string,isEnabled:o().boolean}),cartoonVariation:o().oneOf(["default","card"]),className:o().string,configuredComponentRef:o().func,contentFooterContributorTypes:o().arrayOf(o().string),communityExperience:o().shape({enableCommunityExperience:o().bool,enableArtistQA:o().bool}),componentConfig:o().object,config:o().object,coreDataLayer:o().shape({site:o().object}),dividerColor:o().string,enableAnchorNavigation:o().bool,featureFlags:o().object,hasChannelNavigation:o().bool,hasDynamicDisclaimer:o().bool,hasDynamicNewsletterSignup:o().bool,hasLightbox:o().bool,hasLinkbannerCrossSlideAnimation:o().bool,hasNewsletterForABTest:o().bool,hasRecircDriver:o().bool,hasSlideShow:o().bool,headerComponent:o().string,hideNav:o().bool,hideSideBySideViewOnMobile:o().bool,intl:o().object,hideActionBar:o().bool,isActionBarStickyLargeScreen:o().bool,linkList:o().object,metadataVideo:o().shape({isLive:o().bool,premiereDate:o().string,series:o().string,videoLength:o().number,premiereGap:o().number}),minWordCountForMidRecirc:o().number,oneCover:xi.OZ,pageBackgroundTheme:o().string,productCarousel:o().object,qaBannerParagraphIndex:o().number,recircMostPopularVariationOnMobile:o().oneOf((0,f._)(y.A)),related:o().array,responsiveCartoonVariation:o().oneOf((0,f._)(b.A)),reviewerInfoText:o().string,shouldAddToRecentlyViewed:o().bool,shouldEnableArticleBackground:o().bool,shouldEnableFullArticleInverted:o().bool,shouldHideBaseTopPadding:o().bool,shouldHideInlineRecirc:o().bool,shouldHideSeriesNavigation:o().bool,shouldHideSeriesRecirc:o().bool,shouldInheritDropcapColor:o().bool,shouldShowMidArticleRecirc:o().bool,shouldShowSeriesNavigationInFooter:o().bool,showContributor:o().bool,showContributorAboveReviews:o().bool,showContributorImageOnMobile:o().bool,showContributorSpotlight:o().bool,showEnhancedTextOverlay:o().bool,showExperimentPlaceholder:o().string,showFirstRailRecirc:o().bool,showGalleryCartoonPublishedDate:o().bool,showIssueDateInArticle:o().bool,showLinkStackInsideContentBody:o().bool,showWriterBio:o().bool,signInHed:o().string,signInHedSpanTag:o().string,signInMessage:o().string,slideShowVariation:o().string,user:o().object,userPlatform:o().object,visualStoryBanner:o().object,xlargePaddingTop:o().string,featuredDeal:o().shape({product:o().object,timestamp:o().string,eventName:o().string,rotationCount:o().number}),"head.title":o().string,puzzlesAndGames:o().shape({wideContent:o().bool})},eo.displayName="ArticlePage";const to=(0,a.M3)((0,p.Ay)(eo),{keysToPluck:["article","beOp","componentConfig","config","coreDataLayer","featureFlags","linkList","metadataVideo","productCarousel","related","showFirstRailRecirc","user","userPlatform","communityExperience","visualStoryBanner","oneCover","featuredDeal","head.title","puzzlesAndGames"]}),io=(0,x.y)(to,"ArticlePage");var no=i(958);const ro=(0,M.Ay)("div").withConfig({displayName:"PuzzlesAndGamesWrapper"})`
  display: flex;
  position: absolute;
  top: 3.5rem;
  bottom: 0;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1024px) {
    padding-top: 55px;
  }

  .game-container {
    min-height: 400px;
  }

  .puzzles-and-games-game-loader {
    display: flex;
    justify-content: center;
    background: #ffe17d;
    padding-top: 34px;
    height: 100%;
  }

  .puzzles-and-games-progress-wrapper {
    margin: 0 16px;
    border-radius: 100px;
    background: #fffefc;
    width: 100%;
    max-width: 362px;
    height: 8px;
    overflow: hidden;
  }

  .puzzles-and-games-progress-bar {
    transition: width 0.3s ease-in-out;
    animation: shuffalo-loading 6s infinite;
    background: #000;
    width: 1%;
    height: 8px;
  }

  @keyframes shuffalo-loading {
    0% {
      width: 1%;
    }

    50% {
      width: 50%;
    }

    100% {
      width: 100%;
    }
  }

  .page {
    min-height: 100dvh;
  }
`,oo=(0,M.Ay)("div").withConfig({displayName:"GameLoaderWrapper"})`
  display: ${({$isLoading:e})=>e?"none":"contents"};
`;var ao=i(53788),lo=i(56892),so=i(28379);const co=(0,a.z5)("user"),uo=({user:e,puzzlesAndGames:t})=>{const{game:r,gamesCDNURL:o,stateSyncConfig:a}=t,[l,s]=n.useState(null),[d,c]=n.useState(!0),u=n.useCallback(e=>{(0,so.B)(e)},[]);n.useEffect(()=>{i.e(7800).then(i.bind(i,55929)).then(e=>{s(e),c(!1)}).catch(e=>{c(!1)})},[]);const h=(0,n.useMemo)(()=>{if(!r.gameType)return"#ffe17d";const{gameType:e}=r;switch(e){case"shuffalo":default:return"#ffe17d";case"catalogues":return"#58cf81";case"laugh_lines":return"#ece8f8"}},[r]),p=n.useMemo(()=>{if(!e||!e.amguuid||!e.isAuthenticated)return;const t=(0,lo.getCookie)(ao.A.oidcCookies.access)||(0,lo.getCookie)(ao.A.authCookieName);return t?{userId:e.amguuid,authToken:t}:void 0},[e]),[m,g]=n.useState({gameType:void 0,theme:{},isLoading:!0,onGameEvent:u,userContext:p,stateSyncConfig:a,options:{game:r,session:void 0,settings:{}}}),[b,y]=n.useState(!1),f=n.useCallback(e=>{e||y(!0)},[]);n.useEffect(()=>{l&&g(e=>({...e,gameType:l.GameType[r.gameType],isLoading:!1,onGameEvent:u,userContext:p,options:{...e.options,game:r,session:JSON.parse(localStorage.getItem(`shuffaloGameSession-${r.id}`)||"null")}}))},[r,a,p,l,u]);const v=n.createElement("div",{style:{display:"none"},dangerouslySetInnerHTML:{__html:`\x3c!-- #puzzles-and-games-url: ${o}?id=${r.id} --\x3e`}});if(d||!l)return n.createElement(no.A,{hideFooter:!0},n.createElement(ro,null,v,n.createElement("div",{className:"puzzles-and-games-game-loader",style:{background:h}},n.createElement("div",{className:"puzzles-and-games-progress-wrapper"},n.createElement("div",{className:"puzzles-and-games-progress-bar"})))));const{GameLoader:A}=l,C=m.isLoading||!b;return n.createElement(no.A,{hideFooter:!0},n.createElement(ro,null,v,C&&n.createElement("div",{className:"puzzles-and-games-game-loader",style:{background:h}},n.createElement("div",{className:"puzzles-and-games-progress-wrapper"},n.createElement("div",{className:"puzzles-and-games-progress-bar"}))),n.createElement(oo,{$isLoading:C},n.createElement(A,{...m,onLoadingStateChange:f}))))};uo.propTypes={puzzlesAndGames:o().shape({game:o().object.isRequired,gamesCDNURL:o().string.isRequired,seo:o().shape({title:o().string,description:o().string}).isRequired,stateSyncConfig:o().shape({apiBaseUrl:o().string.isRequired,throttleMs:o().number.isRequired}).isRequired}),user:o().shape({isAuthenticated:o().bool,amguuid:o().string})},uo.displayName="PuzzlesAndGames";const ho=co((0,a.M3)(uo,{keysToPluck:["puzzlesAndGames"]})),po=(0,x.y)(ho,"PuzzlesAndGamesPage"),mo=e=>{const{puzzlesAndGames:t}=e;return t?.isPuzzlesAndGamesArticle?n.createElement(po,null):n.createElement(io,null)};mo.propTypes={puzzlesAndGames:o().shape({isPuzzlesAndGamesArticle:o().bool.isRequired})};const go=(0,a.M3)(mo,{keysToPluck:["puzzlesAndGames"]});(0,i(29118).A)(go)},66916(e,t,i){"use strict";i.d(t,{A:()=>o});var n=i(67098),r=i.n(n);const o=e=>r()(e).trim()},6253(e,t,i){"use strict";function n(e,t){var i=t&&t.cache?t.cache:c,n=t&&t.serializer?t.serializer:s;return(t&&t.strategy?t.strategy:l)(e,{cache:i,serializer:n})}function r(e,t,i,n){var r,o=null==(r=n)||"number"==typeof r||"boolean"==typeof r?n:i(n),a=t.get(o);return void 0===a&&(a=e.call(this,n),t.set(o,a)),a}function o(e,t,i){var n=Array.prototype.slice.call(arguments,3),r=i(n),o=t.get(r);return void 0===o&&(o=e.apply(this,n),t.set(r,o)),o}function a(e,t,i,n,r){return i.bind(t,e,n,r)}function l(e,t){return a(e,this,1===e.length?r:o,t.cache.create(),t.serializer)}i.d(t,{B:()=>n,W:()=>u});var s=function(){return JSON.stringify(arguments)};function d(){this.cache=Object.create(null)}d.prototype.get=function(e){return this.cache[e]},d.prototype.set=function(e,t){this.cache[e]=t};var c={create:function(){return new d}},u={variadic:function(e,t){return a(e,this,o,t.cache.create(),t.serializer)},monadic:function(e,t){return a(e,this,r,t.cache.create(),t.serializer)}}},38221(e,t,i){var n=i(23805),r=i(10124),o=i(99374),a=Math.max,l=Math.min;e.exports=function(e,t,i){var s,d,c,u,h,p,m=0,g=!1,b=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var i=s,n=d;return s=d=void 0,m=t,u=e.apply(n,i)}function v(e){var i=e-p;return void 0===p||i>=t||i<0||b&&e-m>=c}function A(){var e=r();if(v(e))return C(e);h=setTimeout(A,function(e){var i=t-(e-p);return b?l(i,c-(e-m)):i}(e))}function C(e){return h=void 0,y&&s?f(e):(s=d=void 0,u)}function w(){var e=r(),i=v(e);if(s=arguments,d=this,p=e,i){if(void 0===h)return function(e){return m=e,h=setTimeout(A,t),g?f(e):u}(p);if(b)return clearTimeout(h),h=setTimeout(A,t),f(p)}return void 0===h&&(h=setTimeout(A,t)),u}return t=o(t)||0,n(i)&&(g=!!i.leading,c=(b="maxWait"in i)?a(o(i.maxWait)||0,t):c,y="trailing"in i?!!i.trailing:y),w.cancel=function(){void 0!==h&&clearTimeout(h),m=0,s=p=d=h=void 0},w.flush=function(){return void 0===h?u:C(r())},w}},21020(e,t,i){"use strict";var n=i(96540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,i){var n,o={},d=null,c=null;for(n in void 0!==i&&(d=""+i),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,n)&&!s.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:r,type:e,key:d,ref:c,props:o,_owner:l.current}}t.Fragment=o,t.jsx=d,t.jsxs=d}},a={};function l(e){var t=a[e];if(void 0!==t)return t.exports;var i=a[e]={id:e,loaded:!1,exports:{}};return o[e].call(i.exports,i,i.exports,l),i.loaded=!0,i.exports}l.m=o,e=[],l.O=(t,i,n,r)=>{if(!i){var o=1/0;for(c=0;c<e.length;c++){for(var[i,n,r]=e[c],a=!0,s=0;s<i.length;s++)(!1&r||o>=r)&&Object.keys(l.O).every(e=>l.O[e](i[s]))?i.splice(s--,1):(a=!1,r<o&&(o=r));if(a){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[i,n,r]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},i=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var r=Object.create(null);l.r(r);var o={};t=t||[null,i({}),i([]),i(i)];for(var a=2&n&&e;("object"==typeof a||"function"==typeof a)&&!~t.indexOf(a);a=i(a))Object.getOwnPropertyNames(a).forEach(t=>o[t]=()=>e[t]);return o.default=()=>e,l.d(r,o),r},l.d=(e,t)=>{for(var i in t)l.o(t,i)&&!l.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce((t,i)=>(l.f[i](e,t),t),[])),l.u=e=>4786===e?"4786.888baa9ab874b60f354a.js":"chunk."+(7800===e?"tny-puzzles-and-games":e)+"."+{6677:"3a3a8ae058c13e56ea5c",6802:"b1ec90245a7649f2536e",7800:"23767aa9df18f755e6a2",7833:"dc2bfd5835272c54b213"}[e]+".js",l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},r="verso:",l.l=(e,t,i,o)=>{if(n[e])n[e].push(t);else{var a,s;if(void 0!==i)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+i){a=u;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",l.nc&&a.setAttribute("nonce",l.nc),a.setAttribute("data-webpack",r+i),a.src=e),n[e]=[t];var h=(t,i)=>{a.onerror=a.onload=null,clearTimeout(p);var r=n[e];if(delete n[e],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach(e=>e(i)),t)return t(i)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),s&&document.head.appendChild(a)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),l.p="/verso/static/",(()=>{var e={8659:0};l.f.j=(t,i)=>{var n=l.o(e,t)?e[t]:void 0;if(0!==n)if(n)i.push(n[2]);else{var r=new Promise((i,r)=>n=e[t]=[i,r]);i.push(n[2]=r);var o=l.p+l.u(t),a=new Error;l.l(o,i=>{if(l.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var r=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;a.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",a.name="ChunkLoadError",a.type=r,a.request=o,n[1](a)}},"chunk-"+t,t)}},l.O.j=t=>0===e[t];var t=(t,i)=>{var n,r,[o,a,s]=i,d=0;if(o.some(t=>0!==e[t])){for(n in a)l.o(a,n)&&(l.m[n]=a[n]);if(s)var c=s(l)}for(t&&t(i);d<o.length;d++)r=o[d],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(c)},i=globalThis.webpackChunkverso=globalThis.webpackChunkverso||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),l.nc=void 0;var s=l.O(void 0,[5590,8879,1956,5135,4046,6916,7270,5441,4223,4595,9537,8828,130,8141,7794,4341,2130,9544,4891,7680,3092],()=>l(73590));s=l.O(s)})();