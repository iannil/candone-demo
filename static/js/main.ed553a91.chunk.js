(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){e.exports=a(195)},113:function(e,t,a){},184:function(e,t,a){},195:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(9),i=a.n(c),s=(a(113),a(47)),l=a(48),o=a(53),m=a(49),u=a(54),p=a(201),h=a(203),g=a(199),E=a(202),d=a(204),y=a(197),f=a(196),v=a(198),b=a(200),j=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.content;return r.a.createElement(v.a,{title:this.props.title},e?r.a.createElement("div",{style:{flexDirection:"column",display:"inline-flex"}},r.a.createElement("img",{alt:"up",src:"/candone-demo"+this.props.content[0]}),r.a.createElement("img",{alt:"down",src:"/candone-demo"+this.props.content[1],style:{marginTop:"10px"}})):r.a.createElement("p",null,"\u65e0"))}}]),t}(n.Component),k=a(15),w=a.n(k),x=a(51),O=a.n(x),C=(a(183),a(184),{width:"100%",textAlign:"center"}),D=p.a.Header,z=p.a.Content,T=p.a.Footer;O.a.locale("zh-cn");var A=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={changeUp:!1,gua2num:{1:[1,1,1],2:[0,1,1],3:[1,0,1],4:[0,0,1],5:[1,1,0],6:[0,1,0],7:[1,0,0],8:[0,0,0]},num2gua:{111:"./imgs/\u4e7e.jpg","011":"./imgs/\u5151.jpg",101:"./imgs/\u79bb.jpg","001":"./imgs/\u9707.jpg",110:"./imgs/\u5dfd.jpg","010":"./imgs/\u574e.jpg",100:"./imgs/\u826e.jpg","000":"./imgs/\u5764.jpg"},num2type:{111:"\u91d1","011":"\u91d1",101:"\u706b","001":"\u6728",110:"\u6728","010":"\u6c34",100:"\u571f","000":"\u571f"}},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"trans2pic",value:function(e){var t=this;return w.a.map(w.a.chunk(e,3),function(e){var a=w.a.join(e,"");return t.state.num2gua[a]})}},{key:"trans2type",value:function(e){var t=this;return w.a.map(w.a.chunk(e,3),function(e){var a=w.a.join(e,"");return t.state.num2type[a]})}},{key:"compareType",value:function(e){var t=e[0],a=e[1];return t===a?r.a.createElement(h.a,{count:"\u80fd\u6210"}):("\u91d1"!==t||"\u6c34"!==a&&"\u706b"!==a)&&("\u6728"!==t||"\u706b"!==a&&"\u91d1"!==a)&&("\u6c34"!==t||"\u6728"!==a&&"\u571f"!==a)&&("\u706b"!==t||"\u571f"!==a&&"\u6c34"!==a)&&("\u571f"!==t||"\u91d1"!==a&&"\u6728"!==a)?r.a.createElement(h.a,{count:"\u80fd\u6210"}):r.a.createElement(h.a,{count:"\u6ca1\u620f",style:{backgroundColor:"#52c41a"}})}},{key:"checkDone",value:function(){var e=O()(),t=e.minutes(),a=e.seconds(),n=e.milliseconds(),r=t%8===0?8:t%8,c=a%8===0?8:a%8,i=n%6===0?6:n%6,s=!((i=6-i)>3),l=w.a.concat([],this.state.gua2num[r],this.state.gua2num[c]),o=w.a.map([1,2,3,2,3,4],function(e){return l[e]}),m=w.a.map(l,function(e){return 0===e?1:0}),u=w.a.map([3,4,5,0,1,2],function(e){return l[e]}),p=w.a.clone(l);p[i]=0===w.a.nth(p,i)?1:0,this.setState({changeUp:s,ben:this.trans2pic(l),hu:this.trans2pic(o),bian:this.trans2pic(p),cuo:this.trans2pic(m),zong:this.trans2pic(u),resultNow:this.compareType(this.trans2type(l)),resultFuture:this.compareType(this.trans2type(p))})}},{key:"render",value:function(){var e=this.state.changeUp;return r.a.createElement(p.a,{className:"layout"},r.a.createElement(D,null,r.a.createElement("div",{className:"logo"}),r.a.createElement(g.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],style:{lineHeight:"64px"}},r.a.createElement(g.a.Item,{key:"1"},"\u9996\u9875"))),r.a.createElement(z,{style:{padding:"0 50px"}},r.a.createElement(E.a,{style:{margin:"16px 0"}},r.a.createElement(E.a.Item,null,"\u9996\u9875"),r.a.createElement(E.a.Item,null,"\u5f00\u59cb\u6d4b\u7b97")),r.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:280}},r.a.createElement(d.a,{style:{marginBottom:"15px"},message:"\u8fd9\u4e8b\u513f\u80fd\u6210\u5417 \xb7 Demo\u5b9e\u9a8c\u7248\u3002\u5fc3\u91cc\u9ed8\u60f3\u63d0\u95ee\u7684\u95ee\u9898\uff0c\u7136\u540e\u70b9\u5f00\u59cb\u5373\u53ef\u3002",type:"success"}),r.a.createElement(y.a,{gutter:16},r.a.createElement(f.a,{span:2},r.a.createElement(j,{title:"\u672c\u5366",content:this.state.ben})),r.a.createElement(f.a,{span:2},r.a.createElement(j,{title:"\u4e92\u5366",content:this.state.hu})),r.a.createElement(f.a,{span:2},r.a.createElement(j,{title:"\u9519\u5366",content:this.state.cuo})),r.a.createElement(f.a,{span:2},r.a.createElement(j,{title:"\u7efc\u5366",content:this.state.zong})),r.a.createElement(f.a,{span:2},r.a.createElement(j,{title:"\u53d8\u5366",content:this.state.bian})),r.a.createElement(f.a,{span:4},r.a.createElement(v.a,{title:"\u6d4b\u7b97\u7ed3\u679c"},e?r.a.createElement(v.a.Grid,{style:C},"\u53d8\u723b\u5728\u4e0a"):r.a.createElement(v.a.Grid,{style:C},"\u53d8\u723b\u5728\u4e0b"),r.a.createElement(v.a.Grid,{style:C},"\u5f53\u524d\u72b6\u6001\uff1a",this.state.resultNow),r.a.createElement(v.a.Grid,{style:C},"\u6700\u7ec8\u7ed3\u679c\uff1a",this.state.resultFuture)))),r.a.createElement(y.a,{gutter:16,style:{marginTop:"20px"}},r.a.createElement(f.a,{span:2},r.a.createElement(b.a,{type:"primary",icon:"check-circle",size:"large",onClick:this.checkDone.bind(this)},"\u5f00\u59cb"))))),r.a.createElement(T,{style:{textAlign:"center"}},"Ant Design \xa92018 Created by Ant UED"))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[108,2,1]]]);
//# sourceMappingURL=main.ed553a91.chunk.js.map