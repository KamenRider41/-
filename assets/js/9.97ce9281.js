(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{411:function(t,i,n){},443:function(t,i,n){"use strict";n(411)},455:function(t,i,n){"use strict";n.r(i);var a=n(30),s=n(31),e=function(){function t(i,n,s,e,r,h,o){Object(a.a)(this,t),this.x=i,this.y=n,this.s=s,this.r=e,this.fn=r,this.that=h,this.img=o}return Object(s.a)(t,[{key:"draw",value:function(t){t.save();this.s;t.translate(this.x,this.y),t.rotate(this.r),t.drawImage(this.img,0,0,40*this.s,40*this.s),t.restore()}},{key:"update",value:function(){this.x=this.fn.x(this.x,this.y),this.y=this.fn.y(this.y,this.y),this.r=this.fn.r(this.r),(this.x>window.innerWidth||this.x<0||this.y>window.innerHeight||this.y<0)&&(this.r=this.that.getRandom("fnr"),Math.random()>.4?(this.x=this.that.getRandom("x"),this.y=0,this.s=this.that.getRandom("s"),this.r=this.that.getRandom("r")):(this.x=window.innerWidth,this.y=this.that.getRandom("y"),this.s=this.that.getRandom("s"),this.r=this.that.getRandom("r")))}}]),t}(),r=function(){function t(){Object(a.a)(this,t),this.list=[]}return Object(s.a)(t,[{key:"push",value:function(t){this.list.push(t)}},{key:"update",value:function(){for(var t=0,i=this.list.length;t<i;t++)this.list[t].update()}},{key:"draw",value:function(t){for(var i=0,n=this.list.length;i<n;i++)this.list[i].draw(t)}},{key:"get",value:function(t){return this.list[t]}},{key:"size",value:function(){return this.list.length}}]),t}(),h={name:"Sakura",data:function(){return{staticx:!1,stop:null,num:50,show:!0,zIndex:0}},mounted:function(){var t=this;this.$nextTick((function(){t.show&&t.startSakura()}))},methods:{getRandom:function(t){var i,n;switch(t){case"x":i=Math.random()*window.innerWidth;break;case"y":i=Math.random()*window.innerHeight;break;case"s":i=Math.random();break;case"r":i=6*Math.random();break;case"fnx":n=1*Math.random()-.5,i=function(t,i){return t+.15*n-.51};break;case"fny":n=1.5+.7*Math.random(),i=function(t,i){return i+.3*n};break;case"fnr":n=.03*Math.random(),i=function(t){return t+n}}return i},startSakura:function(){var t=this;requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame;var i=document.getElementById("canvas_sakura");this.staticx=!0,this.$refs.canvas_sakura.width=window.innerWidth,this.$refs.canvas_sakura.height=window.innerHeight;var n=this.$refs.canvas_sakura.getContext("2d"),a=new r,s=new Image;s.src="/Hundred-refining-into-Immortals/sakura.png";for(var h=0;h<t.num;h++){var o,u,d,c,m,f,w,l=void 0;o=this.getRandom("x"),u=this.getRandom("y"),c=this.getRandom("r"),d=this.getRandom("s"),m=this.getRandom("fnx"),f=this.getRandom("fny"),w=this.getRandom("fnr"),(l=new e(o,u,d,c,{x:m,y:f,r:w},this,s)).draw(n),a.push(l)}this.stop=requestAnimationFrame((function s(){n.clearRect(0,0,i.width,i.height),a.update(),a.draw(n),t.stop=requestAnimationFrame(s)}))},stopp:function(){if(this.staticx){var t=document.getElementById("canvas_sakura");t.parentNode.removeChild(t),window.cancelAnimationFrame(this.stop),this.staticx=!1}else this.startSakura()}}},o=(n(443),n(38)),u=Object(o.a)(h,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"Sakura"},[i("canvas",{ref:"canvas_sakura",style:{zIndex:this.zIndex},attrs:{id:"canvas_sakura"}})])}),[],!1,null,"0a695c27",null);i.default=u.exports}}]);