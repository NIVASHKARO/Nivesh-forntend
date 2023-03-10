import{Y as g,Z as C,_ as N,$ as H,a0 as I,a1 as z,r as a,a2 as s,a3 as j,a4 as k,a5 as O}from"./index.996e1d78.js";function i(){return i=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])}return t},i.apply(this,arguments)}function h(t,r){if(t==null)return{};var o={},e=Object.keys(t),n,l;for(l=0;l<e.length;l++)n=e[l],!(r.indexOf(n)>=0)&&(o[n]=t[n]);return o}var W=["children","placeholder","className"],D=["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize"],F=["children"],L=g(function(t,r){var o=t.children,e=t.placeholder,n=t.className,l=h(t,W);return a.exports.createElement(s.select,i({},l,{ref:r,className:k("chakra-select",n)}),e&&a.exports.createElement("option",{value:""},e),o)}),A=g(function(t,r){var o=C("Select",t),e=N(t),n=e.rootProps,l=e.placeholder,_=e.icon,c=e.color,x=e.height,d=e.h,m=e.minH,y=e.minHeight,p=e.iconColor,u=e.iconSize,S=h(e,D),f=H(S,O),E=f[0],P=f[1],v=I(P),b={width:"100%",height:"fit-content",position:"relative",color:c},w=z({paddingEnd:"2rem"},o.field,{_focus:{zIndex:"unset"}});return a.exports.createElement(s.div,i({className:"chakra-select__wrapper",__css:b},E,n),a.exports.createElement(L,i({ref:r,height:d!=null?d:x,minH:m!=null?m:y,placeholder:l},v,{__css:w}),t.children),a.exports.createElement(Y,i({"data-disabled":j(v.disabled)},(p||c)&&{color:p||c},{__css:o.icon},u&&{fontSize:u}),_))}),M=function(r){return a.exports.createElement("svg",i({viewBox:"0 0 24 24"},r),a.exports.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))},T=s("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),Y=function(r){var o=r.children,e=o===void 0?a.exports.createElement(M,null):o,n=h(r,F),l=a.exports.cloneElement(e,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return a.exports.createElement(T,i({},n,{className:"chakra-select__icon-wrapper"}),a.exports.isValidElement(e)?l:null)};export{A as S};