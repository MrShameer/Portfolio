(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9037:function(e,t,r){Promise.resolve().then(r.t.bind(r,231,23)),Promise.resolve().then(r.t.bind(r,2169,23)),Promise.resolve().then(r.t.bind(r,3054,23)),Promise.resolve().then(r.bind(r,6691)),Promise.resolve().then(r.bind(r,7363)),Promise.resolve().then(r.bind(r,4858)),Promise.resolve().then(r.bind(r,9973)),Promise.resolve().then(r.bind(r,9736))},6691:function(e,t,r){"use strict";r.d(t,{Dock:function(){return f},DockIcon:function(){return m}});var n=r(7437),o=r(9354),i=r(2218),s=r(5282),a=r(6574),d=r(847),l=r(6391),u=r(2265);let c=(0,i.j)("mx-auto w-max h-full p-2 flex items-end rounded-full border"),f=u.forwardRef((e,t)=>{let{className:r,children:i,magnification:d=60,distance:l=140,...f}=e,m=(0,s.c)(1/0);return(0,n.jsx)(a.E.div,{ref:t,onMouseMove:e=>m.set(e.pageX),onMouseLeave:()=>m.set(1/0),...f,className:(0,o.cn)(c({className:r})),children:u.Children.map(i,e=>u.isValidElement(e)?u.cloneElement(e,{mousex:m,magnification:d,distance:l}):e)})});f.displayName="Dock";let m=e=>{let{size:t,magnification:r=60,distance:i=140,mousex:s,className:c,children:f,...m}=e,h=(0,u.useRef)(null),v=(0,d.H)(s,e=>{var t,r;let n=null!==(r=null===(t=h.current)||void 0===t?void 0:t.getBoundingClientRect())&&void 0!==r?r:{x:0,width:0};return e-n.x-n.width/2}),p=(0,d.H)(v,[-i,0,i],[40,r,40]),x=(0,l.q)(p,{mass:.1,stiffness:150,damping:12});return(0,n.jsx)(a.E.div,{ref:h,style:{width:x},className:(0,o.cn)("flex aspect-square cursor-pointer items-center justify-center rounded-full",c),...m,children:f})};m.displayName="DockIcon"},7363:function(e,t,r){"use strict";r.d(t,{ModeToggle:function(){return f}});var n=r(7437),o=r(1538),i=r(2218),s=r(2265),a=r(9354);let d=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9 rounded-full"}},defaultVariants:{variant:"default",size:"default"}}),l=s.forwardRef((e,t)=>{let{className:r,variant:i,size:s,asChild:l=!1,...u}=e,c=l?o.g7:"button";return(0,n.jsx)(c,{className:(0,a.cn)(d({variant:i,size:s,className:r})),ref:t,...u})});l.displayName="Button";var u=r(4867),c=r(9512);function f(){let{theme:e,setTheme:t}=(0,c.F)();return(0,n.jsxs)(l,{variant:"ghost",type:"button",size:"icon",className:"px-2",onClick:()=>t("dark"===e?"light":"dark"),children:[(0,n.jsx)(u.NWY,{className:"h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200"}),(0,n.jsx)(u.kLh,{className:"hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200"})]})}},4858:function(e,t,r){"use strict";r.d(t,{ThemeProvider:function(){return i}});var n=r(7437),o=r(9512);function i(e){let{children:t,...r}=e;return(0,n.jsx)(o.f,{...r,children:t})}},9973:function(e,t,r){"use strict";r.d(t,{Separator:function(){return a}});var n=r(7437),o=r(2265),i=r(8484),s=r(9354);let a=o.forwardRef((e,t)=>{let{className:r,orientation:o="horizontal",decorative:a=!0,...d}=e;return(0,n.jsx)(i.f,{ref:t,decorative:a,orientation:o,className:(0,s.cn)("shrink-0 bg-border","horizontal"===o?"h-[1px] w-full":"h-full w-[1px]",r),...d})});a.displayName=i.f.displayName},9736:function(e,t,r){"use strict";r.r(t),r.d(t,{Tooltip:function(){return d},TooltipContent:function(){return u},TooltipProvider:function(){return a},TooltipTrigger:function(){return l}});var n=r(7437),o=r(3522),i=r(2265),s=r(9354);let a=o.zt,d=o.fC,l=o.xz,u=i.forwardRef((e,t)=>{let{className:r,sideOffset:i=4,...a}=e;return(0,n.jsx)(o.VY,{ref:t,sideOffset:i,className:(0,s.cn)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...a})});u.displayName=o.VY.displayName},9354:function(e,t,r){"use strict";r.d(t,{cn:function(){return i}});var n=r(4839),o=r(6164);function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.m6)((0,n.W)(t))}},3054:function(){}},function(e){e.O(0,[220,310,616,685,553,971,23,744],function(){return e(e.s=9037)}),_N_E=e.O()}]);