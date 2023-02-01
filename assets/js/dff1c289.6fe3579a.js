"use strict";(self.webpackChunkpasswick_docs=self.webpackChunkpasswick_docs||[]).push([[792],{89:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var o=t(7462),s=(t(7294),t(3905));t(828);const a={sidebar_position:1},i="Manage Docs Versions",r={unversionedId:"tutorial-extras/manage-docs-versions",id:"tutorial-extras/manage-docs-versions",title:"Manage Docs Versions",description:"Docusaurus can manage multiple versions of your docs.",source:"@site/docs/tutorial-extras/manage-docs-versions.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/manage-docs-versions",permalink:"/tutorial-extras/manage-docs-versions",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Extras",permalink:"/category/tutorial---extras"},next:{title:"Translate your site",permalink:"/tutorial-extras/translate-your-site"}},l={},d=[{value:"Create a docs version",id:"create-a-docs-version",level:2},{value:"Add a Version Dropdown",id:"add-a-version-dropdown",level:2},{value:"Update an existing version",id:"update-an-existing-version",level:2}],p={toc:d};function c(e){let{components:n,...a}=e;return(0,s.kt)("wrapper",(0,o.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"manage-docs-versions"},"Manage Docs Versions"),(0,s.kt)("p",null,"Docusaurus can manage multiple versions of your docs."),(0,s.kt)("h2",{id:"create-a-docs-version"},"Create a docs version"),(0,s.kt)("p",null,"Release a version 1.0 of your project:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm run docusaurus docs:version 1.0\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"docs")," folder is copied into ",(0,s.kt)("inlineCode",{parentName:"p"},"versioned_docs/version-1.0")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"versions.json")," is created."),(0,s.kt)("p",null,"Your docs now have 2 versions:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1.0")," at ",(0,s.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/")," for the version 1.0 docs"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"current")," at ",(0,s.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/")," for the ",(0,s.kt)("strong",{parentName:"li"},"upcoming, unreleased docs"))),(0,s.kt)("h2",{id:"add-a-version-dropdown"},"Add a Version Dropdown"),(0,s.kt)("p",null,"To navigate seamlessly across versions, add a version dropdown."),(0,s.kt)("p",null,"Modify the ",(0,s.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'docsVersionDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,s.kt)("p",null,"The docs version dropdown appears in your navbar:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Docs Version Dropdown",src:t(6935).Z,width:"370",height:"302"})),(0,s.kt)("h2",{id:"update-an-existing-version"},"Update an existing version"),(0,s.kt)("p",null,"It is possible to edit versioned docs in their respective folder:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"versioned_docs/version-1.0/hello.md")," updates ",(0,s.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/hello")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"docs/hello.md")," updates ",(0,s.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/hello"))))}c.isMDXComponent=!0},6935:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/docsVersionDropdown-35e13cbe46c9923327f30a76a90bff3b.png"}}]);