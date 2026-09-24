"use strict";(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[7794],{9481(e,t,i){i.d(t,{$W:()=>U,HW:()=>Y,Hz:()=>G,Kz:()=>K,L5:()=>B,Mr:()=>W,RL:()=>T,Ui:()=>j,Uk:()=>D,VM:()=>O,Vt:()=>A,XI:()=>R,YR:()=>ge,Z1:()=>P,ZR:()=>$e,Zj:()=>_,_k:()=>V,ax:()=>L,cR:()=>se,cd:()=>z,ci:()=>q,de:()=>pe,gU:()=>Q,iD:()=>M,jL:()=>N,ld:()=>k,oF:()=>X,s8:()=>F,vp:()=>Z,yN:()=>E,yR:()=>le});var n=i(38267),o=i(18608),a=i(96472),r=i(99906),d=i(1123),l=i(26865),p=i(52027),s=i(65087),c=i(15384),g=i(74423),$=i(20388),m=i(38860),h=i(62096),f=i(86659),y=i(21093),x=i(86157),u=i(18224),b=i(10642),w=i(6613),v=i(91783),S=i(7228),C=i(40653),H=i(75163);const K=(0,n.Ay)(o.vm).withConfig({displayName:"SplitScreenContentHeaderHed"}).attrs(e=>({as:"h1",typeIdentity:"typography.definitions.consumptionEditorial.hed-standard",...e}))`
  margin: 0;
  padding: 0;
  color: var(${H.pT.Color.TextHeading});

  /* TODO: Remove this override once type theming is available, this is a specific theme for GQ */
  .theme-vintage & {
    ${(0,l.Gg)("typography.definitions.consumptionEditorial.hed-feature")};
  }

  ${({isMusicReview:e})=>e&&`\n        ${(0,l.Xm)(a.LO.sm,"767px")} {\n          padding: ${(0,l.Kq)(0)};\n        }\n        `}
`,q=(0,n.Ay)(o.vm).withConfig({displayName:"SplitScreenContentHeaderArtist"}).attrs(e=>({as:"div",typeIdentity:"typography.definitions.consumptionEditorial.description-core",...e}))`
  margin: 0;
  color: var(${H.pT.Color.TextHeading});
  font-size: ${({isSplitScreenArtistLarge:e})=>e?"28px":"inherit"};
`,A=n.Ay.span.withConfig({displayName:"SplitScreenContentHeaderArtistSlash"}).attrs(e=>({typeIdentity:"typography.definitions.consumptionEditorial.description-core",...e}))`
  color: var(${H.pT.Color.TextHeading});
  font-size: ${({isSplitScreenArtistLarge:e})=>e?"28px":"inherit"};
`,L=(0,n.Ay)(o.sH).withConfig({displayName:"SplitScreenContentHeaderArtistLink"})`
  display: inline-block;
  vertical-align: middle;
  text-decoration: none;
`;L.displayName="SplitScreenContentHeaderArtistLink";const O=n.Ay.ul.withConfig({displayName:"SplitScreenContentHeaderArtistWrapper"})`
  padding-left: ${(0,l.Kq)(0)};
  ${({isMusicReview:e})=>e&&`\n  ${(0,l.Xm)(a.LO.sm,"767px")} {\n    margin-top: ${(0,l.Kq)(0)};\n    padding-top: ${(0,l.Kq)(0)};\n  }\n  `}
`,T=(0,n.Ay)(o.vm).withConfig({displayName:"SplitScreenContentHeaderDek"}).attrs(e=>({as:"div",typeIdentity:"typography.definitions.consumptionEditorial.description-core",...e}))`
  margin: 0;
  color: var(${H.pT.Color.TextDek});

  .small {
    text-transform: lowercase;
    font-style: inherit;
    font-variant: small-caps;
  }
`,k=(0,n.Ay)(o.vm).withConfig({displayName:"SplitScreenContentHeaderDekDown"}).attrs(e=>({as:"div",typeIdentity:"typography.definitions.consumptionEditorial.description-core",...e}))`
  padding-top: ${(0,l.Kq)(1)};
  padding-bottom: ${(0,l.Kq)(3)};
  text-align: center;
`,B=n.Ay.div.withConfig({displayName:"SplitScreenContentHeaderInfoSlice"})`
  align-items: center;
  padding-top: ${(0,l.Kq)(0)};
`,N=n.Ay.div.withConfig({displayName:"SplitScreenContentHeaderNativeShareButton"})`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: transparent;
  padding: ${(0,l.Kq)(4)} 0;
  /* Reserve the 48px button and 32px padding on each side before hydration. */
  min-height: ${(0,l.Kq)(14)};

  ${({$shouldEnableNativeShareOnDesktop:e})=>!e&&`\n      ${(0,l.H4)(a.LO.md)} {\n        display: none;\n      }\n    `}
`,j=n.Ay.div.withConfig({displayName:"SplitScreenContentHeaderScoreBox"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: justify;
  ${(0,l.H4)(a.LO.sm)} {
    margin-bottom: ${(0,l.Kq)(4)};
    padding-left: ${(0,l.Kq)(2)};
  }
  ${(0,l.H4)(a.LO.md)} {
    margin-bottom: ${(0,l.Kq)(0)};
    padding-left: ${(0,l.Kq)(4)};
  }
`,F=(0,n.Ay)(s.A).withConfig({displayName:"SplitScreenContentHeaderByline"})`
  ${(0,l.Gg)("typography.definitions.globalEditorial.accreditation-feature")}
  padding-bottom: ${(0,l.Kq)(1)};
  color: var(${H.pT.Color.TextByline});

  ${({isMusicReview:e})=>e&&`${(0,l.H4)(a.LO.sm)} {\n      margin-top: ${(0,l.Kq)(2)};\n      justify-content: center;\n      display: flex;\n    }\n    `}

  ${({contributorsPosition:e})=>"top"===e&&"\n      display: inline-block;\n      margin: 0;\n    "}

  ${g.f9} {
    margin-top: 0;
  }

  ${g.f9}:first-child {
    margin-top: 0;
  }

  & span {
    text-align: ${({contentAlign:e})=>e};
  }
`,R=n.Ay.div.withConfig({displayName:"SplitScreenContentHeaderRubricWrapper"})`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;
  gap: ${(0,l.Kq)(2)};

  *,
  .card {
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 0;
    margin-left: 0;
  }

  ${F} {
    padding-bottom: 0;
  }
`,E=n.Ay.div.withConfig({displayName:"SplitScreenContentHeaderTitleBlock"})`
  ${`\n  padding-right: ${(0,l.Kq)(3)};\n  padding-left: ${(0,l.Kq)(3)};\n\n  ${(0,l.H4)(a.LO.xl)} {\n    padding-right: 0;\n    padding-left: 0;\n  }\n`};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: ${(0,l.Kq)(5)};
  padding-bottom: ${(0,l.Kq)(5)};
  width: 100%;
  height: 100%;
  text-align: center;

  &[class*='theme-'] {
    background: var(${H.pT.Color.Surface});
  }

  .content-header-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .accreditation-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  ${c.m} {
    padding-bottom: 0;
  }

  ${R} {
    justify-content: center;
  }

  ${(0,l.H4)(`calc(${a.LO.md})`)} {
    > * {
      max-width: 500px;
    }
  }

  ${({contentAlign:e})=>"left"===e&&`\n      .content-header-text {\n        align-items: flex-start;\n        margin-left: ${(0,l.Kq)(4.5)};\n        text-align: start;\n\n        ${(0,l.L7)(`calc(${a.LO.md} - 1px)`)} {\n          margin-left: 0px;\n        }\n\n        ${R} {\n          justify-content: start;\n        }\n\n        .accreditation-info {\n          align-items: flex-start;\n        }\n      }\n    `};

  ${({textAlign:e})=>"left"===e&&`\n    .content-header-text {\n      text-align: start;\n\n      > * {\n        margin: 0 auto;\n        width: 100%;\n      }\n\n      ${R},\n      ${$e} {\n        justify-content: start;\n      }\n\n      .accreditation-info {\n        align-items: flex-start;\n      }\n    }\n    `};
  ${(0,l.L7)(`calc(${a.LO.md} - 1px)`)} {
    padding-bottom: ${(0,l.Kq)(2)};

    &[class*=' theme-'] {
      padding-bottom: ${(0,l.Kq)(5)};
    }

    .fullbleed &:not([class*=' theme-']) {
      padding-bottom: ${(0,l.Kq)(5)};
    }
  }

  ${({shouldUseViewportBasedScoreBox:e})=>e&&`\n    /* Hide ScoreBox in title block on mobile */\n    ${j} {\n      ${(0,l.L7)(`calc(${a.LO.md} - 1px)`)} {\n        display: none;\n      }\n    }\n\n    ${(0,l.H4)(a.LO.md)} {\n      flex-direction: row;\n      align-items: center;\n      gap: ${(0,l.Kq)(3)};\n      padding-left: 0;\n\n      > * { max-width: none; }\n      > *:first-child { flex-shrink: 0; align-self: center; padding-left: ${(0,l.Kq)(5)}; }\n      > *:not(:first-child) {\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        text-align: start;\n        min-width: 0;\n      }\n\n      ${(0,l.H4)(a.LO.lg)} {\n        > *:first-child { padding-left: 0; }\n      }\n\n      ${h.dk} { width: ${(0,l.Kq)(15.625)}; }\n      ${h.vX} { width: ${(0,l.Kq)(15.625)}; height: ${(0,l.Kq)(15.625)}; border-width: ${(0,l.Kq)(1.125)}; }\n      ${h.M4} {\n        position: absolute;\n        top: 0;\n        left: 50%;\n        margin: 0;\n        margin-top: ${(0,l.Kq)(-3.875)};\n        width: ${(0,l.Kq)(6.5)};\n        height: ${(0,l.Kq)(3.375)};\n        transform: translateX(-50%);\n      }\n    }\n  `};
`,M=n.Ay.div.withConfig({displayName:"SplitScreenContentHeaderLedeBlock"})``,V=(0,n.Ay)(f.A.TwoUpFullBleedNoGap).withConfig({displayName:"SplitScreenContentHeaderMain"})`
  background: var(${H.pT.Color.Surface});
  color: var(${H.pT.Color.Text});

  ${(0,l.L7)(`${r.VS.md}px`)} {
    &.with-divider-mobile {
      border-bottom: 1px solid var(${H.pT.Color.BorderStory});
    }
  }
  ${(0,l.H4)(`${r.VS.md}px`)} {
    &.with-divider-desktop {
      border-bottom: 1px solid var(${H.pT.Color.BorderStory});
    }
  }

  &.grid-full-bleed {
    ${(0,l.H4)(a.LO.md)} {
      grid-template-rows: auto 1fr;

      /* Make the content header full bleed for all viewport height and remove the stacked nav size so the content header occupies all the visible space. */
      ${M} {
        height: calc(100vh - 108px);
        ${({shouldFitToViewport:e})=>e&&"height: 100%;\n          min-height:calc(100vh - 108px);\n          "}
      }
    }
    ${(0,l.L7)(a.LO.lg)} {
      ${M} {
        height: 100%;
        ${({shouldFitToViewport:e})=>e&&"min-height: 100%;\n          "}
      }
    }
  }
`,D=n.Ay.div.withConfig({displayName:"SplitScreenContentHeaderLeadWrapper"})`
  ${({isMusicReview:e})=>e&&"\n    display: flex;\n    flex-direction: row;\n  "}
  align-items: ${({isMusicReview:e})=>e?"center":"start"};
  justify-content: center;
  height: 100%;
  text-align: center;

  &[class*='theme-'] {
    background: var(${H.pT.Color.Surface});
  }

  /* Apply same margins as title block and right-align image on desktop */
  ${({shouldUseViewportBasedScoreBox:e})=>e&&`\n    ${(0,l.H4)(a.LO.md)} {\n      ${(0,d.aU)("padding")}\n      justify-content: flex-end;\n      text-align: end;\n    }\n\n    ${j} {\n      ${(0,l.H4)(a.LO.md)} {\n        display: none;\n      }\n\n      /* Show ScoreBox in lead wrapper on mobile only with enhanced styles */\n      ${(0,l.L7)(`calc(${a.LO.md} - 1px)`)} {\n        display: flex;\n\n        ${h.dk} { width: ${(0,l.Kq)(15.625)}; }\n        ${h.vX} { width: ${(0,l.Kq)(15.625)}; height: ${(0,l.Kq)(15.625)}; border-width: ${(0,l.Kq)(1.125)}; }\n        ${h.M4} {\n          position: absolute;\n          top: 0;\n          left: 50%;\n          margin: 0;\n          margin-top: ${(0,l.Kq)(-3.875)};\n          width: ${(0,l.Kq)(6.5)};\n          height: ${(0,l.Kq)(3.375)};\n          transform: translateX(-50%);\n        }\n      }\n    }\n  `}

  ${v.WE} {
    display: block;
  }
`,I=n.AH`
  display: inline-block;
  border-radius: 50%;
  background-color: #f5f5f5;
  overflow: hidden;
`,U=(0,n.Ay)(x.A).withConfig({displayName:"SplitScreenContentHeaderContributorImage"})`
  ${(0,p.P)("100%","60px","66px")};
  margin-right: auto;
  margin-bottom: ${(0,l.Kq)(2)};
  margin-left: auto;

  img {
    width: 100%;
  }

  ${({hasContributorImageBackground:e})=>e&&I}
`,W=n.Ay.time.withConfig({displayName:"SplitScreenContentHeaderPublishDate"}).attrs(({datetime:e})=>({dateTime:e}))`
  display: inline-flex;
  color: var(${H.pT.Color.TextPubdate});
  ${(0,l.Gg)("typography.definitions.globalEditorial.context-tertiary")};
`,P=n.Ay.time.withConfig({displayName:"SplitScreenContentHeaderReleaseYear"})`
  ${(0,l.Gg)("typography.definitions.globalEditorial.context-tertiary")};
`,X=(0,n.Ay)(y.A).withConfig({displayName:"SplitScreenContentHeaderRating"})`
  max-width: none;

  ${(0,l.L7)(a.LO.md)} {
    margin-top: ${(0,l.Kq)(2)};
    padding-bottom: 0;
  }

  ${(0,l.H4)(a.LO.md)} {
    padding-top: ${(0,l.Kq)(1)};
    padding-bottom: 0;
  }
`,G=(0,n.Ay)($.A).withConfig({displayName:"SplitScreenContentHeaderCaption"})`
  padding-top: ${(0,l.Kq)(1)};

  &${m.Gk} {
    margin: 0;
  }
`,z=n.Ay.div.withConfig({displayName:"SplitScreenContentHeaderRubric"})`
  ${({theme:e})=>(0,l.Gg)(e,"typography.definitions.globalEditorial.context-primary")}
  display: inline-flex;
  color: var(${H.pT.Color.TextRubric});

  ${w.as} {
    vertical-align: baseline;
  }
`,Z=(0,n.Ay)(x.A).withConfig({displayName:"SplitScreenContentHeaderLede"})`
  height: 100%;

  &.responsive-asset {
    ${(0,l.H4)(a.LO.md)} {
      padding-bottom: 0;
      height: 100%;

      ${v.hh} {
        .responsive-clip__video {
          height: 100%;
        }
        position: relative;
        margin: 0 auto;
        width: 100%;
        max-width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    ${(0,l.L7)(a.LO.md)} {
      ${v.hh} {
        padding: 0 1.5rem 1.5rem;
      }

      ${S.BF} {
        img {
          padding-bottom: 1.5rem;
        }
      }
    }

    ${v.Pu} {
      display: none;
    }
  }

  .responsive-image {
    width: 100%;
    height: 100%;
  }

  ${S.BF} {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,_=(0,n.Ay)(f.A.EvenAny).withConfig({displayName:"SplitScreenContentHeaderForMusicReview"})`
  border-bottom: ${({showHeaderDivider:e,shouldUseViewportBasedScoreBox:t})=>e&&!t?(0,l.Kq)(.125):"0px"}
    solid var(${H.pT.Color.BorderStory});
  color: var(${H.pT.Color.Text});

  &[class*='theme-'] {
    background: var(${H.pT.Color.Surface});
  }

  ${({shouldUseViewportBasedScoreBox:e})=>e&&`\n        position: relative;\n        &::after {\n          content: '';\n          position: absolute;\n          bottom: 0;\n          left: calc(var(--grid-margin) + ${(0,l.Kq)(14)});\n          right: calc(var(--grid-margin) + ${(0,l.Kq)(14)});\n          height: ${(0,l.Kq)(.125)};\n          background: var(${H.pT.Color.BorderStory});\n      }\n      `}

  ${({shouldUseViewportBasedScoreBox:e})=>e&&`\n    ${(0,l.H4)(a.LO.lg)} {\n      ${(0,d.aU)("padding")}\n      padding-left: calc(var(--grid-margin) + ${(0,l.Kq)(6.5)});\n      padding-right: calc(var(--grid-margin) + ${(0,l.Kq)(6.5)});\n    }\n  `}

  &.grid-even-any {
    ${(0,l.H4)(a.LO.sm)} {
      ${Z} {
        ${S.BF} {
          margin-bottom: ${(0,l.Kq)(4)};
          max-width: 204px;
          height: 204px;
          object-fit: contain;
        }
      }
    }

    ${(0,l.H4)(a.LO.md)} {
      ${({shouldFitToViewport:e})=>e?"max-width: 1600px;":"max-width: none;"}
      grid-template-columns: 37% auto;
      ${Z} {
        ${S.BF} {
          margin-top: ${(0,l.Kq)(4)};
          max-width: 312px;
          height: 312px;
          object-fit: contain;
        }
      }
    }

    ${({shouldUseViewportBasedScoreBox:e})=>e&&`\n      ${(0,l.Xm)(a.LO.md,a.LO.lg)} {\n        grid-template-columns: 50% auto;\n      }\n    `}
    ${(0,l.H4)("980px")} {
      grid-template-columns: 50% auto;
    }
  }
`,Y=n.Ay.div.withConfig({displayName:"SplitScreenContentHeaderRubricIssueDate"})`
  display: inline-flex;
  margin: 0 ${(0,l.Kq)(.5)};
  color: var(${H.pT.Color.TextPubdate});
  ${(0,l.H4)(a.LO.md)} {
    margin: 0;
  }

  && .rubric.link {
    color: var(${H.pT.Color.TextPubdate});
    ${(0,l.Gg)("typography.definitions.globalEditorial.context-primary")}

    &:hover,
    &:active {
      color: var(${H.pT.Color.TextPubdate});
    }
  }
`,Q=(0,n.Ay)(b.A.Card).withConfig({displayName:"SplitScreenContentHeaderSignageRubric"})``,J=n.AH`
  ${C.E}:first-child {
    ${(0,l.H4)(a.LO.md)} {
      order: 2;
    }
  }
`,ee=n.AH`
  padding: ${(0,l.Kq)(0)};
  object-fit: fill;
`,te=n.AH`
  ${(0,l.L7)(a.LO.md)} {
    &:not(.with-divider-mobile, [class*=' theme-'])
      ${D}:not([class*=" theme-"])
      picture {
      padding-bottom: 0;
    }
  }

  & ${D} {
    picture {
      padding: var(--grid-margin);
    }
    ${(0,l.H4)(a.LO.md)} {
      picture {
        padding: ${(0,l.Kq)(4)};
      }
    }

    ${S.BF}, ${v.hh} {
      padding: 0;
      ${({isMusicReview:e})=>e&&`${(0,d.aU)("padding",!0)};`}
      ${(0,l.H4)(a.LO.md)} {
        object-fit: contain;
        ${({isMusicReview:e})=>e&&ee};
      }
    }
  }

  ${({shouldFitToViewport:e,imgAspectRatioForDesktop:t,viewportWidth:i})=>{if(e&&t&&i){const e=2,[n,o]=t,r=(0,l.Kq)(4);return`&& ${M} {\n        ${(0,l.H4)(a.LO.md)} {\n          height: calc((((${i} / ${e}) * ${o})/${n}) - ${r});\n        }\n      }`}return""}}

  ${({isFullWidth:e,isTextRight:t})=>e||t?!e&&t?`${E}:not([class*=" theme-"]) {\n          ${(0,l.H4)(a.LO.md)} {\n            padding-left: 0;\n          }\n        }`:"":`${E}:not([class*=" theme-"]) {\n          ${(0,l.H4)(a.LO.md)} {\n            padding-right: 0;\n          }\n        }`}
`,ie=n.AH`
  ${Z} {
    ${S.BF} {
      object-position: top;
    }
  }
`,ne=n.AH`
  ${Z} {
    ${S.BF} {
      object-position: right;
    }
  }
`,oe=n.AH`
  ${Z} {
    ${S.BF} {
      object-position: left;
    }
  }
`,ae=n.AH`
  ${Z} {
    ${S.BF} {
      object-position: bottom;
    }
  }
`,re=n.AH`
  ${G} {
    text-align: start;
  }
`,de=n.AH`
  ${G} {
    text-align: center;
  }
`,le=n.Ay.hr.withConfig({displayName:"SplitScreenContentHeaderDivider"})`
  && {
    display: flex;
    grid-column: 1 / -1;
    align-self: center;
    margin-top: ${(0,l.Kq)(1)};
    margin-bottom: ${(0,l.Kq)(1.5)};
    border: 0;
    border-bottom: 2px;
    border-bottom-style: solid;
    border-bottom-color: var(${H.pT.Color.BorderAccent});
    width: 100px;
    justify-self: center;
  }

  ${({ledeContentAlign:e})=>"center"===e&&"justify-self: center;"}

  ${(0,l.L7)(`${r.VS.md}px`)} {
    ${({hasLedeTextAlignCenterForMobile:e})=>e&&"justify-self: center;"}
  }
`,pe=(0,n.Ay)(f.A.WithMargins).withConfig({displayName:"SplitScreenContentHeaderGrid"})`
  > ${C.E} {
    grid-column: 1 / -1;
    ${(0,l.H4)(a.LO.md)} {
      grid-column: 2 / -2;
    }
  }

  ${(0,l.H4)(`${r.VS.md}px`)} {
    &.below-image {
      padding: 0;
    }

    &.below-image.align-start > ${C.E} {
      grid-column: 1 / 6;
      padding-inline-start: ${(0,l.Kq)(2)};
    }

    &.below-image.align-end > ${C.E} {
      grid-column: 7 / -1;
      padding-inline-end: ${(0,l.Kq)(2)};
    }
  }
`,se=(0,n.Ay)(u.A).withConfig({displayName:"ContentHeaderOffersData"})`
  margin-right: ${(0,l.Kq)(6)};

  &&.disclaimer-container {
    display: block;
    grid-column: main;

    @media (min-width: ${a.LO.lg}) {
      display: none;
    }
  }

  &&.offer-data {
    grid-column: main;
    margin-top: ${(0,l.Kq)(4)};
    width: 100%;
    max-width: 300px;
  }
`,ce=()=>n.AH`
  ${n.AH`
  ${v.WE} {
    display: flex;
    justify-content: center;
    padding: ${(0,l.Kq)(4)};

    ${v.hh} {
      display: flex;
      position: inherit;
      align-items: center;

      video {
        width: 100%;
        height: 100%;
      }
    }
  }

  ${(0,l.L7)(`calc(${a.LO.md} - 1px)`)} {
    ${v.WE} {
      padding: 0 calc(1 * var(--grid-margin));

      ${v.hh} {
        justify-content: center;
        width: 100%;
        overflow: hidden;

        video {
          width: auto;
        }
      }
    }
  }
`}

  ${(0,l.H4)(`${a.LO.md}`)} {
    ${V} {
      grid-template-rows: 100%;
    }

    ${V} {
      > div:nth-child(2) {
        > div:nth-child(1) {
          display: grid;
          align-items: center;
          height: 100%;

          ${({mediaContentType:e})=>"clip"===e&&"display: block;"}
        }
      }
    }
  }

  ${(0,l.L7)(`calc(${a.LO.lg} - 1px)`)} {
    ${V} {
      height: calc(100vh - 56px);
    }
  }

  ${(0,l.L7)(`calc(${a.LO.md} - 1px)`)} {
    ${V} {
      display: flex;
      flex-direction: column;
      justify-content: center;

      > div:nth-child(2) {
        flex: 1;
        overflow: hidden;

        ${D} {
          height: 100%;
        }

        ${M} {
          height: 100%;
        }

        ${Z} {
          ${S.BF} {
            object-fit: scale-down;
          }
        }
      }
    }
  }

  /* exceptional case to fit image as per screen specially height iphone X to 13 pro max */
  /* It should not impact other devices that why using height width combination */
  ${(0,l.Xm)("375px","428px")} and (min-height: 737px) and (max-height: 926px) {
    ${V} {
      > div:nth-child(2) {
        ${Z} {
          ${S.BF} {
            object-fit: cover;
          }
        }
      }
    }
  }

  ${F} {
    p {
      margin-top: 0;
    }
  }

  /* Iphone 4 changes - START */
  ${(0,l.L7)(a.LO.sm)} {
    ${K} {
      line-height: ${(0,l.Kq)(3)};
      /* font changes required for small screens as per figma */
      font-size: ${(0,l.Kq)(2.5)};
    }
  }
  /* Iphone 4 changes - END */

  ${M} {
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${(0,l.H4)(a.LO.md)} {
      /* image span */
      span${Z} {
        align-self: center;
        ${({mediaContentType:e})=>"clip"===e&&"width: 100%;"}

        ${(0,l.H4)(a.LO.xl)} {
          max-width: ${(0,l.Kq)(75)};
          max-height: ${(0,l.Kq)(99.75)};
        }

        ${(0,l.Xm)(a.LO.md,`calc(${a.LO.xl} - 1px)`)} {
          max-width: ${(0,l.Kq)(45.25)};
          max-height: ${(0,l.Kq)(60.25)};
        }

        ${S.BF} {
          object-fit: scale-down;
          padding: 0;
        }
      }
    }

    /* caption/credit block changes */
    ${G} {
      padding-top: ${(0,l.Kq)(2)};
      padding-bottom: ${(0,l.Kq)(2)};
    }
  }
`,ge=n.Ay.header.withConfig({displayName:"SplitScreenContentHeaderWrapper"})`
  ${V}, ${_} {
    ${({hideHeaderDividerInMobile:e})=>e&&`\n        ${(0,l.L7)(`${r.VS.md}px`)} {\n          border-bottom: 0;\n        }\n        `}
  }

  ${Q} {
    margin-bottom: ${(0,l.Kq)(1)};

    ${(0,l.H4)(a.LO.sm)} {
      margin-top: ${(0,l.Kq)(2)};
    }
  }

  ${({hasMargin:e})=>e&&`margin: ${(0,l.Kq)(4)} 0;`}

  ${({isTextRight:e})=>e&&J};

  ${({isFullWidth:e,shouldFitToViewport:t})=>e&&(e=>`\n  ${V}, ${_} {\n    &.grid-full-bleed {\n      ${M} {\n        grid-column: 1/-1;\n        height: auto;\n      }\n      ${e&&"min-height: auto;"};\n    }\n  }\n   \n  ${E} {\n    padding-top: ${(0,l.Kq)(4,"px")};\n    padding-bottom: ${(0,l.Kq)(2,"px")};\n\n    ${(0,l.H4)(a.LO.md)} {\n      padding-bottom: ${(0,l.Kq)(4,"px")};\n    }\n  }\n`)(t)}

  ${({imageAlignment:e})=>"top"===e?ie:"right"===e?ne:"left"===e?oe:"bottom"===e?ae:""}

  ${V}.inset {
    ${te}
  }

  ${({ledeContentAlign:e})=>"left"===e?re:de}

  ${(0,l.L7)(`${r.VS.md}px`)} {
    ${({hasLedeTextAlignCenterForMobile:e})=>e&&n.AH`
        ${de}
      `}
  }

  @media print {
    display: block;

    ${V}, ${_} {
      grid-template-columns: none;
      border-bottom: none;
      ${C.E}:first-child {
        order: 0;
      }

      ${C.A}.grid-full-bleed {
        ${M} {
          height: auto;
          max-height: ${(0,l.Kq)(69)};

          ${S.BF} {
            object-fit: contain;
            padding: ${(0,l.Kq)(4)};
            max-height: ${(0,l.Kq)(69)};
          }
        }
      }
    }
  }

  ${({shouldHeaderFitToViewport:e})=>e&&ce()}
`,$e=n.Ay.div.withConfig({displayName:"SplitScreenContentHeaderLeadOverride"})`
  display: flex;
  justify-content: center;
`},72362(e,t,i){i.d(t,{Zm:()=>o,ox:()=>n});const n=()=>{const e=/(iPhone|iPad|iPod)/i;try{return e.test(window.navigator.userAgent)}catch(e){return!1}},o=()=>{try{return!/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(window.navigator.userAgent)&&!/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(window.navigator.userAgent)}catch(e){return!1}}}}]);