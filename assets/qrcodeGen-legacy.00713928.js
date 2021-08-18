!function(){var e=document.createElement("style");e.innerHTML=".qrcode-container[data-v-1b323f19]{margin-top:20px}.qrcode-container .info[data-v-1b323f19]{text-align:left;padding-left:20px;margin-bottom:20px;font-size:12px}.qrcode-container .qrcode-wrapper[data-v-1b323f19]{width:100%;display:flex;flex-direction:row;justify-content:space-around;align-items:center}.qrcode-container .qrcode-wrapper .qrcode-config[data-v-1b323f19]{width:70%}",document.head.appendChild(e),System.register(["./vendor-legacy.cbfe9af2.js","./index-legacy.b088b4cd.js"],(function(e){"use strict";var t,r,n,o,i,a,u,s,l,c,f,h;return{setters:[function(e){t=e.d,r=e.aV,n=e.r,o=e.D,i=e.p,a=e.c,u=e.m,s=e.e,l=e.f,c=e.g,f=e.w,h=e.H},function(){}],execute:function(){
/*!
			 * qrcode.vue v3.2.2
			 * A Vue.js component to generate QRCode.
			 * © 2017-2021 @scopewu(https://github.com/scopewu)
			 * MIT License.
			 */
/*! *****************************************************************************
			Copyright (c) Microsoft Corporation.

			Permission to use, copy, modify, and/or distribute this software for any
			purpose with or without fee is hereby granted.

			THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
			REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
			AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
			INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
			LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
			OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
			PERFORMANCE OF THIS SOFTWARE.
			***************************************************************************** */
var g=function(){return(g=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},d=1,m=2,p=4,v=8;function w(e){this.mode=p,this.data=e}w.prototype={getLength:function(e){return this.data.length},write:function(e){for(var t=0;t<this.data.length;t++)e.put(this.data.charCodeAt(t),8)}};var y=w,C=1,P=0,b=3,L=2;function E(e,t){this.totalCount=e,this.dataCount=t}E.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],E.getRSBlocks=function(e,t){var r=E.getRsBlockTable(e,t);if(null==r)throw new Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+t);for(var n=r.length/3,o=new Array,i=0;i<n;i++)for(var a=r[3*i+0],u=r[3*i+1],s=r[3*i+2],l=0;l<a;l++)o.push(new E(u,s));return o},E.getRsBlockTable=function(e,t){switch(t){case C:return E.RS_BLOCK_TABLE[4*(e-1)+0];case P:return E.RS_BLOCK_TABLE[4*(e-1)+1];case b:return E.RS_BLOCK_TABLE[4*(e-1)+2];case L:return E.RS_BLOCK_TABLE[4*(e-1)+3];default:return}};var A=E;function B(){this.buffer=new Array,this.length=0}B.prototype={get:function(e){var t=Math.floor(e/8);return 1==(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(var r=0;r<t;r++)this.putBit(1==(e>>>t-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};for(var T=B,D={glog:function(e){if(e<1)throw new Error("glog("+e+")");return D.LOG_TABLE[e]},gexp:function(e){for(;e<0;)e+=255;for(;e>=256;)e-=255;return D.EXP_TABLE[e]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},k=0;k<8;k++)D.EXP_TABLE[k]=1<<k;for(k=8;k<256;k++)D.EXP_TABLE[k]=D.EXP_TABLE[k-4]^D.EXP_TABLE[k-5]^D.EXP_TABLE[k-6]^D.EXP_TABLE[k-8];for(k=0;k<255;k++)D.LOG_TABLE[D.EXP_TABLE[k]]=k;var x=D;function S(e,t){if(null==e.length)throw new Error(e.length+"/"+t);for(var r=0;r<e.length&&0==e[r];)r++;this.num=new Array(e.length-r+t);for(var n=0;n<e.length-r;n++)this.num[n]=e[n+r]}S.prototype={get:function(e){return this.num[e]},getLength:function(){return this.num.length},multiply:function(e){for(var t=new Array(this.getLength()+e.getLength()-1),r=0;r<this.getLength();r++)for(var n=0;n<e.getLength();n++)t[r+n]^=x.gexp(x.glog(this.get(r))+x.glog(e.get(n)));return new S(t,0)},mod:function(e){if(this.getLength()-e.getLength()<0)return this;for(var t=x.glog(this.get(0))-x.glog(e.get(0)),r=new Array(this.getLength()),n=0;n<this.getLength();n++)r[n]=this.get(n);for(n=0;n<e.getLength();n++)r[n]^=x.gexp(x.glog(e.get(n))+t);return new S(r,0).mod(e)}};var R=S,_=0,M=1,N=2,I=3,H=4,q=5,O=6,U=7,j={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(e){for(var t=e<<10;j.getBCHDigit(t)-j.getBCHDigit(j.G15)>=0;)t^=j.G15<<j.getBCHDigit(t)-j.getBCHDigit(j.G15);return(e<<10|t)^j.G15_MASK},getBCHTypeNumber:function(e){for(var t=e<<12;j.getBCHDigit(t)-j.getBCHDigit(j.G18)>=0;)t^=j.G18<<j.getBCHDigit(t)-j.getBCHDigit(j.G18);return e<<12|t},getBCHDigit:function(e){for(var t=0;0!=e;)t++,e>>>=1;return t},getPatternPosition:function(e){return j.PATTERN_POSITION_TABLE[e-1]},getMask:function(e,t,r){switch(e){case _:return(t+r)%2==0;case M:return t%2==0;case N:return r%3==0;case I:return(t+r)%3==0;case H:return(Math.floor(t/2)+Math.floor(r/3))%2==0;case q:return t*r%2+t*r%3==0;case O:return(t*r%2+t*r%3)%2==0;case U:return(t*r%3+(t+r)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}},getErrorCorrectPolynomial:function(e){for(var t=new R([1],0),r=0;r<e;r++)t=t.multiply(new R([1,x.gexp(r)],0));return t},getLengthInBits:function(e,t){if(1<=t&&t<10)switch(e){case d:return 10;case m:return 9;case p:case v:return 8;default:throw new Error("mode:"+e)}else if(t<27)switch(e){case d:return 12;case m:return 11;case p:return 16;case v:return 10;default:throw new Error("mode:"+e)}else{if(!(t<41))throw new Error("type:"+t);switch(e){case d:return 14;case m:return 13;case p:return 16;case v:return 12;default:throw new Error("mode:"+e)}}},getLostPoint:function(e){for(var t=e.getModuleCount(),r=0,n=0;n<t;n++)for(var o=0;o<t;o++){for(var i=0,a=e.isDark(n,o),u=-1;u<=1;u++)if(!(n+u<0||t<=n+u))for(var s=-1;s<=1;s++)o+s<0||t<=o+s||0==u&&0==s||a==e.isDark(n+u,o+s)&&i++;i>5&&(r+=3+i-5)}for(n=0;n<t-1;n++)for(o=0;o<t-1;o++){var l=0;e.isDark(n,o)&&l++,e.isDark(n+1,o)&&l++,e.isDark(n,o+1)&&l++,e.isDark(n+1,o+1)&&l++,0!=l&&4!=l||(r+=3)}for(n=0;n<t;n++)for(o=0;o<t-6;o++)e.isDark(n,o)&&!e.isDark(n,o+1)&&e.isDark(n,o+2)&&e.isDark(n,o+3)&&e.isDark(n,o+4)&&!e.isDark(n,o+5)&&e.isDark(n,o+6)&&(r+=40);for(o=0;o<t;o++)for(n=0;n<t-6;n++)e.isDark(n,o)&&!e.isDark(n+1,o)&&e.isDark(n+2,o)&&e.isDark(n+3,o)&&e.isDark(n+4,o)&&!e.isDark(n+5,o)&&e.isDark(n+6,o)&&(r+=40);var c=0;for(o=0;o<t;o++)for(n=0;n<t;n++)e.isDark(n,o)&&c++;return r+=10*(Math.abs(100*c/t/t-50)/5)}},G=j;function F(e,t){this.typeNumber=e,this.errorCorrectLevel=t,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var V=F.prototype;V.addData=function(e){var t=new y(e);this.dataList.push(t),this.dataCache=null},V.isDark=function(e,t){if(e<0||this.moduleCount<=e||t<0||this.moduleCount<=t)throw new Error(e+","+t);return this.modules[e][t]},V.getModuleCount=function(){return this.moduleCount},V.make=function(){if(this.typeNumber<1){var e=1;for(e=1;e<40;e++){for(var t=A.getRSBlocks(e,this.errorCorrectLevel),r=new T,n=0,o=0;o<t.length;o++)n+=t[o].dataCount;for(o=0;o<this.dataList.length;o++){var i=this.dataList[o];r.put(i.mode,4),r.put(i.getLength(),G.getLengthInBits(i.mode,e)),i.write(r)}if(r.getLengthInBits()<=8*n)break}this.typeNumber=e}this.makeImpl(!1,this.getBestMaskPattern())},V.makeImpl=function(e,t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++)this.modules[r][n]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(e,t),this.typeNumber>=7&&this.setupTypeNumber(e),null==this.dataCache&&(this.dataCache=F.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,t)},V.setupPositionProbePattern=function(e,t){for(var r=-1;r<=7;r++)if(!(e+r<=-1||this.moduleCount<=e+r))for(var n=-1;n<=7;n++)t+n<=-1||this.moduleCount<=t+n||(this.modules[e+r][t+n]=0<=r&&r<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=n&&n<=4)},V.getBestMaskPattern=function(){for(var e=0,t=0,r=0;r<8;r++){this.makeImpl(!0,r);var n=G.getLostPoint(this);(0==r||e>n)&&(e=n,t=r)}return t},V.createMovieClip=function(e,t,r){var n=e.createEmptyMovieClip(t,r);this.make();for(var o=0;o<this.modules.length;o++)for(var i=1*o,a=0;a<this.modules[o].length;a++){var u=1*a;this.modules[o][a]&&(n.beginFill(0,100),n.moveTo(u,i),n.lineTo(u+1,i),n.lineTo(u+1,i+1),n.lineTo(u,i+1),n.endFill())}return n},V.setupTimingPattern=function(){for(var e=8;e<this.moduleCount-8;e++)null==this.modules[e][6]&&(this.modules[e][6]=e%2==0);for(var t=8;t<this.moduleCount-8;t++)null==this.modules[6][t]&&(this.modules[6][t]=t%2==0)},V.setupPositionAdjustPattern=function(){for(var e=G.getPatternPosition(this.typeNumber),t=0;t<e.length;t++)for(var r=0;r<e.length;r++){var n=e[t],o=e[r];if(null==this.modules[n][o])for(var i=-2;i<=2;i++)for(var a=-2;a<=2;a++)this.modules[n+i][o+a]=-2==i||2==i||-2==a||2==a||0==i&&0==a}},V.setupTypeNumber=function(e){for(var t=G.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var n=!e&&1==(t>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=n}for(r=0;r<18;r++){n=!e&&1==(t>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=n}},V.setupTypeInfo=function(e,t){for(var r=this.errorCorrectLevel<<3|t,n=G.getBCHTypeInfo(r),o=0;o<15;o++){var i=!e&&1==(n>>o&1);o<6?this.modules[o][8]=i:o<8?this.modules[o+1][8]=i:this.modules[this.moduleCount-15+o][8]=i}for(o=0;o<15;o++){i=!e&&1==(n>>o&1);o<8?this.modules[8][this.moduleCount-o-1]=i:o<9?this.modules[8][15-o-1+1]=i:this.modules[8][15-o-1]=i}this.modules[this.moduleCount-8][8]=!e},V.mapData=function(e,t){for(var r=-1,n=this.moduleCount-1,o=7,i=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var u=0;u<2;u++)if(null==this.modules[n][a-u]){var s=!1;i<e.length&&(s=1==(e[i]>>>o&1)),G.getMask(t,n,a-u)&&(s=!s),this.modules[n][a-u]=s,-1==--o&&(i++,o=7)}if((n+=r)<0||this.moduleCount<=n){n-=r,r=-r;break}}},F.PAD0=236,F.PAD1=17,F.createData=function(e,t,r){for(var n=A.getRSBlocks(e,t),o=new T,i=0;i<r.length;i++){var a=r[i];o.put(a.mode,4),o.put(a.getLength(),G.getLengthInBits(a.mode,e)),a.write(o)}var u=0;for(i=0;i<n.length;i++)u+=n[i].dataCount;if(o.getLengthInBits()>8*u)throw new Error("code length overflow. ("+o.getLengthInBits()+">"+8*u+")");for(o.getLengthInBits()+4<=8*u&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*u||(o.put(F.PAD0,8),o.getLengthInBits()>=8*u));)o.put(F.PAD1,8);return F.createBytes(o,n)},F.createBytes=function(e,t){for(var r=0,n=0,o=0,i=new Array(t.length),a=new Array(t.length),u=0;u<t.length;u++){var s=t[u].dataCount,l=t[u].totalCount-s;n=Math.max(n,s),o=Math.max(o,l),i[u]=new Array(s);for(var c=0;c<i[u].length;c++)i[u][c]=255&e.buffer[c+r];r+=s;var f=G.getErrorCorrectPolynomial(l),h=new R(i[u],f.getLength()-1).mod(f);a[u]=new Array(f.getLength()-1);for(c=0;c<a[u].length;c++){var g=c+h.getLength()-a[u].length;a[u][c]=g>=0?h.get(g):0}}var d=0;for(c=0;c<t.length;c++)d+=t[c].totalCount;var m=new Array(d),p=0;for(c=0;c<n;c++)for(u=0;u<t.length;u++)c<i[u].length&&(m[p++]=i[u][c]);for(c=0;c<o;c++)for(u=0;u<t.length;u++)c<a[u].length&&(m[p++]=a[u][c]);return m};var X=F,z={L:1,M:0,Q:3,H:2},K=function(e,t){var r=new X((t=t||{}).typeNumber||-1,t.errorCorrectLevel||z.H);return r.addData(e),r.make(),r};K.ErrorCorrectLevel=z;var $=K,J=function(){try{(new Path2D).addPath(new Path2D)}catch(e){return!1}return!0}();function Q(e,t){return new $(e,{typeNumber:-1,errorCorrectLevel:t})}function W(e){return e in $.ErrorCorrectLevel}function Y(e){for(var t="",r=0;r<e.length;r++){var n=e.charCodeAt(r);n<128?t+=String.fromCharCode(n):n<2048?(t+=String.fromCharCode(192|n>>6),t+=String.fromCharCode(128|63&n)):n<55296||n>=57344?(t+=String.fromCharCode(224|n>>12),t+=String.fromCharCode(128|n>>6&63),t+=String.fromCharCode(128|63&n)):(r++,n=65536+((1023&n)<<10|1023&e.charCodeAt(r)),t+=String.fromCharCode(240|n>>18),t+=String.fromCharCode(128|n>>12&63),t+=String.fromCharCode(128|n>>6&63),t+=String.fromCharCode(128|63&n))}return t}function Z(e,t){void 0===t&&(t=0);var r=[];return e.forEach((function(e,n){var o=null;e.forEach((function(i,a){if(!i&&null!==o)return r.push("M"+(o+t)+" "+(n+t)+"h"+(a-o)+"v1H"+(o+t)+"z"),void(o=null);if(a!==e.length-1)i&&null===o&&(o=a);else{if(!i)return;null===o?r.push("M"+(a+t)+","+(n+t)+" h1v1H"+(a+t)+"z"):r.push("M"+(o+t)+","+(n+t)+" h"+(a+1-o)+"v1H"+(o+t)+"z")}}))})),r.join("")}var ee,te={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:"H",validator:function(e){return W(e)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},re=g(g({},te),{renderAs:{type:String,required:!1,default:"canvas",validator:function(e){return["canvas","svg"].indexOf(e)>-1}}}),ne=t({render:function(){var e=this,t=e.size,n=e.background,o=e.foreground,i=e.numCells,a=e.fgPath;return r("svg",{width:t,height:t,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+i+" "+i},[r("path",{fill:n,d:"M0,0 h"+i+"v"+i+"H0z"}),r("path",{fill:o,d:a})])},props:te,data:function(){return{numCells:0,fgPath:""}},created:function(){this.generate()},updated:function(){this.generate()},methods:{generate:function(){var e=this,t=e.value,r=e.level,n=e.margin,o=Q(Y(t),$.ErrorCorrectLevel[r]).modules;this.numCells=o.length+2*n,this.fgPath=Z(o,n)}}}),oe=t({render:function(){var e=this.size;return r("canvas",{style:{width:e+"px",height:e+"px"}})},props:te,mounted:function(){this.generate()},updated:function(){this.generate()},methods:{generate:function(){var e=this,t=e.value,r=e.level,n=e.size,o=e.margin,i=e.background,a=e.foreground,u=Q(Y(t),$.ErrorCorrectLevel[r]).modules,s=u.length+2*o,l=this.$el;if(l){var c=l.getContext("2d");if(c){var f=window.devicePixelRatio||1,h=n/s*f;l.height=l.width=n*f,c.scale(h,h),c.fillStyle=i,c.fillRect(0,0,s,s),c.fillStyle=a,J?c.fill(new Path2D(Z(u,o))):u.forEach((function(e,t){e.forEach((function(e,r){e&&c.fillRect(r+o,t+o,1,1)}))}))}}}}}),ie=t({render:function(){var e=this.$props,t=e.renderAs,n=e.value,o=e.size,i=e.margin,a=e.level,u=e.background,s=e.foreground,l=o>>>0,c=i>>>0,f=W(a)?a:"H";return r("svg"===t?ne:oe,{value:n,size:l,margin:c,level:f,background:u,foreground:s})},props:re}),ae={exports:{}};ee=ae,function(e){var t=function(){return{escape:function(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:t,mimeType:function(e){var r,n,o=t(e).toLowerCase();return(r="application/font-woff",n="image/jpeg",{woff:r,woff2:r,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:n,jpeg:n,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"})[o]||""},dataAsUrl:function(e,t){return"data:"+t+";base64,"+e},isDataUrl:function(e){return-1!==e.search(/^(data:)/)},canvasToBlob:function(e){return e.toBlob?new Promise((function(t){e.toBlob(t)})):function(e){return new Promise((function(t){for(var r=window.atob(e.toDataURL().split(",")[1]),n=r.length,o=new Uint8Array(n),i=0;i<n;i++)o[i]=r.charCodeAt(i);t(new Blob([o],{type:"image/png"}))}))}(e)},resolveUrl:function(e,t){var r=document.implementation.createHTMLDocument(),n=r.createElement("base");r.head.appendChild(n);var o=r.createElement("a");return r.body.appendChild(o),n.href=t,o.href=e,o.href},getAndEncode:function(e){var t=3e4;return a.impl.options.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime()),new Promise((function(r){var n,o=new XMLHttpRequest;if(o.onreadystatechange=u,o.ontimeout=s,o.responseType="blob",o.timeout=t,o.open("GET",e,!0),o.send(),a.impl.options.imagePlaceholder){var i=a.impl.options.imagePlaceholder.split(/,/);i&&i[1]&&(n=i[1])}function u(){if(4===o.readyState)if(200===o.status){var t=new FileReader;t.onloadend=function(){var e=t.result.split(/,/)[1];r(e)},t.readAsDataURL(o.response)}else n?r(n):l("cannot fetch resource: "+e+", status: "+o.status)}function s(){n?r(n):l("timeout of "+t+"ms occured while fetching resource: "+e)}function l(e){console.error(e),r("")}}))},uid:(e=0,function(){return"u"+t()+e++;function t(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}),delay:function(e){return function(t){return new Promise((function(r){setTimeout((function(){r(t)}),e)}))}},asArray:function(e){for(var t=[],r=e.length,n=0;n<r;n++)t.push(e[n]);return t},escapeXhtml:function(e){return e.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(e){return new Promise((function(t,r){var n=new Image;n.onload=function(){t(n)},n.onerror=r,n.src=e}))},width:function(e){var t=r(e,"border-left-width"),n=r(e,"border-right-width");return e.scrollWidth+t+n},height:function(e){var t=r(e,"border-top-width"),n=r(e,"border-bottom-width");return e.scrollHeight+t+n}};var e;function t(e){var t=/\.([^\.\/]*?)$/g.exec(e);return t?t[1]:""}function r(e,t){var r=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(r.replace("px",""))}}(),r=function(){var e=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(e,t,i){return a()?Promise.resolve(e):Promise.resolve(e).then(n).then((function(r){var n=Promise.resolve(e);return r.forEach((function(e){n=n.then((function(r){return o(r,e,t,i)}))})),n}));function a(){return!r(e)}},shouldProcess:r,impl:{readUrls:n,inline:o}};function r(t){return-1!==t.search(e)}function n(r){for(var n,o=[];null!==(n=e.exec(r));)o.push(n[1]);return o.filter((function(e){return!t.isDataUrl(e)}))}function o(e,r,n,o){return Promise.resolve(r).then((function(e){return n?t.resolveUrl(e,n):e})).then(o||t.getAndEncode).then((function(e){return t.dataAsUrl(e,t.mimeType(r))})).then((function(n){return e.replace(function(e){return new RegExp("(url\\(['\"]?)("+t.escape(e)+")(['\"]?\\))","g")}(r),"$1"+n+"$3")}))}}(),n=function(){return{resolveAll:function(){return e().then((function(e){return Promise.all(e.map((function(e){return e.resolve()})))})).then((function(e){return e.join("\n")}))},impl:{readAll:e}};function e(){return Promise.resolve(t.asArray(document.styleSheets)).then((function(e){var r=[];return e.forEach((function(e){try{t.asArray(e.cssRules||[]).forEach(r.push.bind(r))}catch(n){console.log("Error while reading CSS rules from "+e.href,n.toString())}})),r})).then((function(e){return e.filter((function(e){return e.type===CSSRule.FONT_FACE_RULE})).filter((function(e){return r.shouldProcess(e.style.getPropertyValue("src"))}))})).then((function(t){return t.map(e)}));function e(e){return{resolve:function(){var t=(e.parentStyleSheet||{}).href;return r.inlineAll(e.cssText,t)},src:function(){return e.style.getPropertyValue("src")}}}}}(),o=function(){return{inlineAll:function n(o){return o instanceof Element?i(o).then((function(){return o instanceof HTMLImageElement?e(o).inline():Promise.all(t.asArray(o.childNodes).map((function(e){return n(e)})))})):Promise.resolve(o);function i(e){var t=e.style.getPropertyValue("background");return t?r.inlineAll(t).then((function(t){e.style.setProperty("background",t,e.style.getPropertyPriority("background"))})).then((function(){return e})):Promise.resolve(e)}},impl:{newImage:e}};function e(e){return{inline:function(r){return t.isDataUrl(e.src)?Promise.resolve():Promise.resolve(e.src).then(r||t.getAndEncode).then((function(r){return t.dataAsUrl(r,t.mimeType(e.src))})).then((function(t){return new Promise((function(r,n){e.onload=r,e.onerror=n,e.src=t}))}))}}}}(),i={imagePlaceholder:void 0,cacheBust:!1},a={toSvg:u,toPng:function(e,t){return s(e,t||{}).then((function(e){return e.toDataURL()}))},toJpeg:function(e,t){return s(e,t=t||{}).then((function(e){return e.toDataURL("image/jpeg",t.quality||1)}))},toBlob:function(e,r){return s(e,r||{}).then(t.canvasToBlob)},toPixelData:function(e,r){return s(e,r||{}).then((function(r){return r.getContext("2d").getImageData(0,0,t.width(e),t.height(e)).data}))},impl:{fontFaces:n,images:o,util:t,inliner:r,options:{}}};function u(e,r){return function(e){void 0===e.imagePlaceholder?a.impl.options.imagePlaceholder=i.imagePlaceholder:a.impl.options.imagePlaceholder=e.imagePlaceholder,void 0===e.cacheBust?a.impl.options.cacheBust=i.cacheBust:a.impl.options.cacheBust=e.cacheBust}(r=r||{}),Promise.resolve(e).then((function(e){return l(e,r.filter,!0)})).then(c).then(f).then((function(e){return r.bgcolor&&(e.style.backgroundColor=r.bgcolor),r.width&&(e.style.width=r.width+"px"),r.height&&(e.style.height=r.height+"px"),r.style&&Object.keys(r.style).forEach((function(t){e.style[t]=r.style[t]})),e})).then((function(n){return function(e,r,n){return Promise.resolve(e).then((function(e){return e.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(e)})).then(t.escapeXhtml).then((function(e){return'<foreignObject x="0" y="0" width="100%" height="100%">'+e+"</foreignObject>"})).then((function(e){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+r+'" height="'+n+'">'+e+"</svg>"})).then((function(e){return"data:image/svg+xml;charset=utf-8,"+e}))}(n,r.width||t.width(e),r.height||t.height(e))}))}function s(e,r){return u(e,r).then(t.makeImage).then(t.delay(100)).then((function(n){var o=function(e){var n=document.createElement("canvas");if(n.width=r.width||t.width(e),n.height=r.height||t.height(e),r.bgcolor){var o=n.getContext("2d");o.fillStyle=r.bgcolor,o.fillRect(0,0,n.width,n.height)}return n}(e);return o.getContext("2d").drawImage(n,0,0),o}))}function l(e,r,n){return n||!r||r(e)?Promise.resolve(e).then((function(e){return e instanceof HTMLCanvasElement?t.makeImage(e.toDataURL()):e.cloneNode(!1)})).then((function(n){return function(e,r,n){var o=e.childNodes;return 0===o.length?Promise.resolve(r):i(r,t.asArray(o),n).then((function(){return r}));function i(e,t,r){var n=Promise.resolve();return t.forEach((function(t){n=n.then((function(){return l(t,r)})).then((function(t){t&&e.appendChild(t)}))})),n}}(e,n,r)})).then((function(r){return function(e,r){return r instanceof Element?Promise.resolve().then(n).then(o).then(i).then(a).then((function(){return r})):r;function n(){function n(e,r){function n(e,r){t.asArray(e).forEach((function(t){r.setProperty(t,e.getPropertyValue(t),e.getPropertyPriority(t))}))}e.cssText?r.cssText=e.cssText:n(e,r)}n(window.getComputedStyle(e),r.style)}function o(){function n(n){var o=window.getComputedStyle(e,n),i=o.getPropertyValue("content");if(""!==i&&"none"!==i){var a=t.uid();r.className=r.className+" "+a;var u=document.createElement("style");u.appendChild(s(a,n,o)),r.appendChild(u)}function s(e,r,n){var o="."+e+":"+r,i=n.cssText?a(n):u(n);return document.createTextNode(o+"{"+i+"}");function a(e){var t=e.getPropertyValue("content");return e.cssText+" content: "+t+";"}function u(e){return t.asArray(e).map(r).join("; ")+";";function r(t){return t+": "+e.getPropertyValue(t)+(e.getPropertyPriority(t)?" !important":"")}}}}[":before",":after"].forEach((function(e){n(e)}))}function i(){e instanceof HTMLTextAreaElement&&(r.innerHTML=e.value),e instanceof HTMLInputElement&&r.setAttribute("value",e.value)}function a(){r instanceof SVGElement&&(r.setAttribute("xmlns","http://www.w3.org/2000/svg"),r instanceof SVGRectElement&&["width","height"].forEach((function(e){var t=r.getAttribute(e);t&&r.style.setProperty(e,t)})))}}(e,r)})):Promise.resolve()}function c(e){return n.resolveAll().then((function(t){var r=document.createElement("style");return e.appendChild(r),r.appendChild(document.createTextNode(t)),e}))}function f(e){return o.inlineAll(e).then((function(){return e}))}ee.exports=a}();var ue=ae.exports,se=e("default",t({components:{qrcodeVue:ie},setup:function(){var e=n(),t=n(),r=n(),i=n("https://example.com"),a=n({hostName:"https://example.com"}),u=function(){var t,r,n;t=e.value,r=function(e){var t=document.createElement("a"),r=window.URL.createObjectURL(e);t.href=r,t.download="Download.png",document.body.appendChild(t),t.click(),document.body.removeChild(t)},(n=new XMLHttpRequest).open("get",t,!0),n.responseType="blob",n.onload=function(){200===this.status&&r&&r(this.response)},n.send(),o.success("保存成功！")};return{qrcodeRef:t,value:i,configFormRef:r,configForm:a,configRules:{hostName:[{required:!0,message:"请输入二维码链接",trigger:"blur"}]},generateImg:function(){ue.toBlob(t.value,{cacheBust:!0,width:375,bgcolor:"#fff"}).then((function(t){var r=new FileReader;r.onload=function(t){var r;e.value=null==t||null===(r=t.target)||void 0===r?void 0:r.result,u()},t&&r.readAsDataURL(t)})).catch((function(e){console.error("oops, something went wrong!",e)}))}}}})),le=f();i("data-v-1b323f19");var ce={class:"qrcode-container"},fe={class:"info"},he=h("生成二维码"),ge=c("span",{style:{"text-align":"left"}},"生成二维码通常用来做前台海报生成或者后台活动营销推广码配置",-1),de={class:"grid-content bg-purple-dark"},me={style:{"text-align":"left"}},pe=c("span",null,"后台活动营销配置推广码场景",-1),ve={class:"qrcode-wrapper"},we={ref:"qrcodeRef"},ye={class:"qrcode-config"},Ce=h("保存二维码");a();var Pe=le((function(e,t,r,n,o,i){var a=u("el-divider"),f=u("qrcode-vue"),h=u("el-input"),g=u("el-form-item"),d=u("el-button"),m=u("el-form"),p=u("el-card"),v=u("el-col"),w=u("el-row");return s(),l("div",ce,[c("div",fe,[c(a,{"content-position":"left"},{default:le((function(){return[he]})),_:1}),ge]),c(w,null,{default:le((function(){return[c(v,{offset:1,span:22},{default:le((function(){return[c("div",de,[c(p,{class:"box-card"},{default:le((function(){return[c("div",me,[pe,c(a)]),c("div",ve,[c("div",we,[c(f,{value:e.configForm.hostName},null,8,["value"])],512),c("div",ye,[c(m,{ref:"configFormRef",model:e.configForm,rules:e.configRules,"label-width":"80px"},{default:le((function(){return[c(g,{label:"域名",prop:"hostName"},{default:le((function(){return[c(h,{modelValue:e.configForm.hostName,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.configForm.hostName=t})},null,8,["modelValue"])]})),_:1}),c(d,{onClick:e.generateImg},{default:le((function(){return[Ce]})),_:1},8,["onClick"])]})),_:1},8,["model","rules"])])])]})),_:1})])]})),_:1})]})),_:1})])}));se.render=Pe,se.__scopeId="data-v-1b323f19"}}}))}();