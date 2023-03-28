"use strict";function AnimCube3(t){var e,r,n,o,a,l,i,f,u,c,s,h,v,d,g,m,b,M,p,k,L,y,w,T,S,A,R,F,D,x,E,B,I,U,P,C,X,W,Y,z,q,O,Q,Z,N,H,G,K,j=[],J=[],V=[],$=[],_=[],tt=[],et=[[0,-1,0],[0,1,0],[0,0,-1],[0,0,1],[-1,0,0],[1,0,0]],rt=[[-1,-1,-1],[1,-1,-1],[1,-1,1],[-1,-1,1],[-1,1,-1],[1,1,-1],[1,1,1],[-1,1,1]],nt=[[0,1,2,3],[4,7,6,5],[0,4,5,1],[2,6,7,3],[0,3,7,4],[1,5,6,2]],ot=[[0,3,2,1],[0,3,2,1],[3,2,1,0],[3,2,1,0],[0,3,2,1],[0,3,2,1]],at=[[2,5,3,4],[4,3,5,2],[4,1,5,0],[5,1,4,0],[0,3,1,2],[2,1,3,0]],lt=[1,1,-1,-1,-1,-1],it=[0,0,-1],ft=[1,0,0],ut=[],ct=[],st=[],ht=[],vt=!0,dt=[],gt=[],mt=[],bt=[],Mt=[],pt=!0,kt=-1,Lt=6,yt=12,wt=!0,Tt=!1,St=!1,At=!1,Rt=0,Ft=0,Dt=0,xt=0,Et=[3,2,0,5,1,4],Bt=[[6,3,0,7,4,1,8,5,2],[2,5,8,1,4,7,0,3,6],[0,1,2,3,4,5,6,7,8],[0,1,2,3,4,5,6,7,8],[6,3,0,7,4,1,8,5,2],[0,1,2,3,4,5,6,7,8]];function It(){var t=Pt("config");null!=t?function(t){var e=new XMLHttpRequest;e.onreadystatechange=function(){4==e.readyState&&(200==e.status?function(t){for(var e=t.split("\n"),r=0;r<e.length;r++){var n=e[r].split("=");void 0!==n[1]&&(j[n[0]]=n[1].trim())}}(e.responseText):console.log("Error loading config file: "+t),Ut())},e.open("GET",t,!0),e.send()}(t):Ut()}function Ut(){J[0]=Wr(255,128,64),J[1]=Wr(255,0,0),J[2]=Wr(0,255,0),J[3]=Wr(0,0,255),J[4]=Wr(153,153,153),J[5]=Wr(170,170,68),J[6]=Wr(187,119,68),J[7]=Wr(153,68,68),J[8]=Wr(68,119,68),J[9]=Wr(0,68,119),J[10]=Wr(255,255,255),J[11]=Wr(255,255,0),J[12]=Wr(255,96,32),J[13]=Wr(208,0,0),J[14]=Wr(0,144,0),J[15]=Wr(32,64,208),J[16]=Wr(176,176,176),J[17]=Wr(80,80,80),J[18]=Wr(255,0,255),J[19]=Wr(0,255,255),J[20]=Wr(255,160,192),J[21]=Wr(32,255,16),J[22]=Wr(0,0,0),J[23]=Wr(128,128,128);var t=Pt("bgcolor");if(e=null!=t&&6==t.length&&zr(t)?"#"+t:"gray",t=Pt("butbgcolor"),o=null!=t&&6==t.length&&zr(t)?"#"+t:e,null!=(t=Pt("colors")))for(var u=0;u<10&&u<t.length/6;u++)zr(t.substring(6*u,6*u+6))&&(J[u]="#"+t.substring(6*u,6*u+6));for(u=0;u<6;u++)for(var c=0;c<9;c++)V[u][c]=u+10;if(null!=(t=Pt("supercube"))&&"1"==t){St=!0,Ct(.06);for(u=0;u<9;u++)V[0][u]=22;null!=(t=Pt("scw"))&&("1"==t?Dt=1:"2"==t&&(Dt=2)),1==Dt&&(J[10]="#000000")}if(null!=(t=Pt("gabbacolors"))&&"1"==t&&(1==St?(J[11]="#fdcf00",J[12]="#fd4e0a",J[13]="#93000d",J[14]="#00702d",J[15]="#00347a"):(Ct(.06),J[11]="#ffd90a",J[12]="#ff4f0b",J[13]="#9e0b19",J[14]="#0b7d39",J[15]="#0b4186")),null!=(t=Pt("borderwidth"))){for(u=0;u<t.length;u++)t.charAt(u)>="0"&&t.charAt(u)<="9"&&(xt=10*xt+parseInt(t[u]));xt>=0&&xt<=20&&Ct(xt/100)}if(St)for(u=0;u<6;u++)for(c=0;c<9;c++)$[u][c]=0;var s="lluu";if(null!=(t=Pt("colorscheme"))&&6==t.length)for(u=0;u<6;u++){var h=23;for(c=0;c<23;c++)if(t[u].toLowerCase()=="0123456789wyorgbldmcpnk".charAt(c)){h=c;break}for(c=0;c<9;c++)V[u][c]=h}if("1"==(t=Pt("scramble"))?Rt=1:"2"==t&&(Rt=2),0==Rt){if(null!=(t=Pt("pos"))&&54==t.length){s="uuuuff","gray"==e&&(e="white");for(u=0;u<6;u++){var g=Et[u];for(c=0;c<9;c++){var m=Bt[u][c];V[g][m]=23;for(var b=0;b<14;b++)if(t.charAt(9*u+c)=="DFECABdfecabgh".charAt(b)){V[g][m]=b+4;break}}}}if(null!=(t=Pt("facelets"))&&54==t.length)for(u=0;u<6;u++)for(c=0;c<9;c++){V[u][c]=23;for(b=0;b<23;b++)if(t[9*u+c].toLowerCase()=="0123456789wyorgbldmcpnk".charAt(b)){V[u][c]=b;break}}if(null!=(t=Pt("superfacelets"))&&54==t.length)for(u=0;u<6;u++)for(c=0;c<9;c++)for(b=0;b<4;b++)if(t[9*u+c].toLowerCase()=="0123".charAt(b)){$[u][c]=b;break}}if(H=0,K=!1,!1,null!=(t=Pt("sign"))&&"1"==t&&(!0,H=5,K=!0),null!=(t=Pt("yz"))&&("0"==t?K=!1:"1"==t&&(K=!0)),null!=(t=Pt("randmoves"))){var M=0;for(u=0;u<t.length;u++)t.charAt(u)>="0"&&t.charAt(u)<="9"&&(M=10*M+parseInt(t[u]));M>0&&(Ft=M)}("random"==(t=Pt("move"))||Rt>0)&&(t=Fn(3,Ft)),dt=null==t?[]:Yt(t,!0),X=0,O=-1,0==Rt&&(null!=(t=Pt("initmove"))&&("random"==t&&(t=Fn(3,Ft)),mt="#"==t?dt:Yt(t,!1)),null!=(t=Pt("initrevmove"))&&("random"==t&&(t=Fn(3,Ft)),bt="#"==t?dt:Yt(t,!1)),null!=(t=Pt("demo"))&&("random"==t&&(t=Fn(3,Ft)),(gt="#"==t?dt:Yt(t,!0)).length>0&&gt[0].length>0&&(A=!0))),t=Pt("position"),Dr(Ur(ut,it,ft)),null==t&&(t=s);var y=Math.PI/12;for(u=0;u<t.length;u++){var w=y;switch(t[u].toLowerCase()){case"d":w=-w;case"u":Cr(it,w),Cr(ft,w);break;case"f":w=-w;case"b":Xr(it,w),Xr(ft,w);break;case"l":w=-w;case"r":Pr(it,w),Pr(ft,w)}}if(Dr(Ur(ut,it,ft)),v=0,d=0,null!=(t=Pt("speed")))for(u=0;u<t.length;u++)t.charAt(u)>="0"&&t.charAt(u)<="9"&&(v=10*v+parseInt(t[u]));if(null!=(t=Pt("doublespeed")))for(u=0;u<t.length;u++)t.charAt(u)>="0"&&t.charAt(u)<="9"&&(d=10*d+parseInt(t[u]));if(0==v&&(v=10),0==d&&(d=3*v/2),R=0,null==(t=Pt("perspective")))R=2;else for(u=0;u<t.length;u++)t.charAt(u)>="0"&&t.charAt(u)<="9"&&(R=10*R+parseInt(t[u]));var T,S=0;if(null!=(t=Pt("scale")))for(u=0;u<t.length;u++)t.charAt(u)>="0"&&t.charAt(u)<="9"&&(S=10*S+parseInt(t[u]));if(F=1/(1+S/10),x=!1,null!=(t=Pt("hint"))){x=!0,E=0;for(u=0;u<t.length;u++)t.charAt(u)>="0"&&t.charAt(u)<="9"&&(E=10*E+parseInt(t[u]));E<1?x=!1:E/=10}(B=3.7,null!=(t=Pt("hinthoriz")))&&((T=parseFloat(t))>0&&(B=T));(I=3.7,null!=(t=Pt("hintvert")))&&((T=parseFloat(t))>0&&(I=T));(U=0,null!=(t=Pt("hintborder"))&&"1"==t&&(U=1),Z=13,null!=(t=Pt("buttonheight")))&&((T=parseInt(t))>=9&T<=25&&(Z=T));(Lt=0==dt.length?0:6,Q=1,"0"==(t=Pt("buttonbar"))?(Q=0,Z=0,Lt=0):"1"==t?Q=1:"2"!=t&&0!=dt.length||(Q=2,Lt=0),t=Pt("edit"),p="0"!=t,t=Pt("repeat"),k="0"!=t,t=Pt("clickprogress"),L="0"!=t,(t=Pt("movetext"))>=1&&t<=5&&(H=parseInt(t)),G=1,"0"==(t=Pt("movetextspace"))&&(G=0),null!=(t=Pt("textsize")))&&((T=parseInt(t))>=5&T<=40&&(yt=T));(t=Pt("fonttype"),wt=null==t||"1"==t,q=0,null!=(t=Pt("metric"))&&("1"==t?q=1:"2"==t?q=2:"3"==t&&(q=3)),D=1,null!=(t=Pt("align")))&&((T=parseInt(t))>=0&T<=3&&(D=T),T>=3&T<=99&&(D=T/100));null!=(t=Pt("snap"))&&"1"==t&&(Tt=!0);for(u=0;u<6;u++)for(c=0;c<9;c++)_[u][c]=V[u][c],tt[u][c]=$[u][c];mt.length>0&&$t(V,mt[0],0,mt[0].length,!1),bt.length>0&&$t(V,bt[0],0,bt[0].length,!0),2==Rt&&$t(V,dt[0],0,dt[0].length,!0);for(u=0;u<3;u++)ct[u]=it[u],st[u]=ft[u],ht[u]=ut[u];tn(e)<128?(n="white",r=function(t){"#"!=t.substring(0,1)&&(t=_r(t));var e=parseInt(t.substring(1,3),16),r=parseInt(t.substring(3,5),16),n=parseInt(t.substring(5,7),16);return e=Math.floor(1.3*e),r=Math.floor(1.3*r),n=Math.floor(1.3*n),Wr(e>255?255:e,r>255?255:r,n>255?255:n)}(e)):(n="black",r=en(e)),i=tn(o)<128?"white":"black",a=n,null!=(t=Pt("slidercolor"))&&6==t.length&&zr(t)&&(a="#"+t),l=en(e),null!=(t=Pt("sliderbgcolor"))&&6==t.length&&zr(t)&&(l="#"+t),null!=(t=Pt("troughcolor"))&&6==t.length&&zr(t)&&(l="#"+t),f="black",null!=(t=Pt("cubecolor"))&&6==t.length&&zr(t)&&(f="#"+t),P=1,"0"==(t=Pt("counter"))&&(P=0),O=dt.length>0&&dt[0][0]>=1e3?0:-1,dn=vn.getContext("2d"),Mn=Z,pn=Lt,kn=yt,Rn(),Ln.appendChild(vn),cr(),A&&ee(-1)}function Pt(t){var e=Dn[t];return void 0===e?j[t]:e}function Ct(t){Mr[0][0]=Mr[0][1]=Mr[1][1]=Mr[3][0]=t,Mr[1][0]=Mr[2][0]=Mr[2][1]=Mr[3][1]=1-t}var Xt=[0,0,0,0,0,0,1,1,1,3,3,3,3,3,3,2,2,2,2,2,2],Wt=[0,1,2,3,4,5,1,2,4,5,2,0,5,2,0,0,1,2,3,4,5];function Yt(t,e){if(e){for(var r=t.indexOf("{");-1!=r;)0,r=t.indexOf("{",r+1);if(null==Mt)O=0,Mt=[];else{for(var n=[],o=0;o<Mt.length;o++)n[o]=Mt[o];O=Mt.length,Mt=n}}var a=1;for(r=t.indexOf(";");-1!=r;)a++,r=t.indexOf(";",r+1);var l=[],i=0;for(r=t.indexOf(";"),a=0;-1!=r;)l[a]=qt(t.substring(i,r),e,a++),i=r+1,r=t.indexOf(";",i);return l[a]=qt(t.substring(i),e,a),l}var zt=["m","t","c","s","a"];function qt(t,e,r){if("#"==t.trim()&&void 0!==dt[r])return dt[r];var n=0,o=[],a="UDFBLRESMXYZxyzudfblr";1==K&&(a="UDFBLRESMXZYxzyudfblr");for(var l=0;l<t.length;l++)if("."==t.charAt(l))o[n]=-1,n++;else if("{"==t.charAt(l)){l++;for(var i="";l<t.length&&"}"!=t.charAt(l);)e&&(i+=t.charAt(l)),l++;e&&(Mt[O]=i,o[n]=1e3+O,O++,n++)}else for(var f=0;f<21;f++)if(t.charAt(l)==a.charAt(f)){l++;var u=Xt[f];if(o[n]=24*Wt[f],l<t.length&&0==Xt[f])for(var c=0;c<zt.length;c++)if(t.charAt(l)==zt[c]){u=c+1,l++;break}o[n]+=4*u,l<t.length&&("1"==t.charAt(l)?l++:"'"==t.charAt(l)||"3"==t.charAt(l)?(o[n]+=2,l++):"2"==t.charAt(l)&&(++l<t.length&&"'"==t.charAt(l)?(o[n]+=3,l++):o[n]+=1)),n++,l--;break}return o}function Ot(t,e,r){if(e>=t.length)return"";for(var n="",o=e;o<r;o++){var a=Nt(t,o);""!=a&&(n+=a+(G?" ":""))}return n}var Qt=[[["U","D","F","B","L","R"],["Um","Dm","Fm","Bm","Lm","Rm"],["Ut","Dt","Ft","Bt","Lt","Rt"],["Uc","Dc","Fc","Bc","Lc","Rc"],["Us","Ds","Fs","Bs","Ls","Rs"],["Ua","Da","Fa","Ba","La","Ra"]],[["U","D","F","B","L","R"],["~E","E","S","~S","M","~M"],["u","d","f","b","l","r"],["Z","~Z","Y","~Y","~X","X"],["Us","Ds","Fs","Bs","Ls","Rs"],["Ua","Da","Fa","Ba","La","Ra"]],[["U","D","F","B","L","R"],["~E","E","S","~S","M","~M"],["u","d","f","b","l","r"],["Y","~Y","Z","~Z","~X","X"],["Us","Ds","Fs","Bs","Ls","Rs"],["Ua","Da","Fa","Ba","La","Ra"]],[["U","D","F","B","L","R"],["u","d","f","b","l","r"],["Uu","Dd","Ff","Bb","Ll","Rr"],["QU","QD","QF","QB","QL","QR"],["UD'","DU'","FB'","BF'","LR'","RL'"],["UD","DU","FB","BF","LR","RL"]],[["U","D","F","B","L","R"],["~E","E","S","~S","M","~M"],["u","d","f","b","l","r"],["y","~y","z","~z","~x","x"],["Us","Ds","Fs","Bs","Ls","Rs"],["Ua","Da","Fa","Ba","La","Ra"]]],Zt=["","2","'","2'"];function Nt(t,e){if(e>=t.length)return"";if(t[e]>=1e3)return"";if(-1==t[e])return".";var r=Qt[H-1][Math.floor(t[e]/4)%6][Math.floor(t[e]/24)];return"~"==r.charAt(0)?r.substring(1)+Zt[(t[e]+2)%4]:r+Zt[t[e]%4]}var Ht=["","q","h","s"];function Gt(t){for(var e=0,r=0;r<t.length;r++)t[r]<1e3&&e++;return e}function Kt(t,e){for(var r=0,n=0;;){for(;r<t.length&&t[r]>=1e3;)r++;if(n==e)break;r<t.length&&(n++,r++)}return r}function jt(t,e){for(var r=0,n=0;n<t.length&&(n<e||e<0);n++)r+=Jt(t[n]);return r}function Jt(t){if(t<0||t>=1e3)return 0;var e=t%4,r=Math.floor(t/4)%6,n=1;switch(q){case 1:1!=e&&3!=e||(n*=2);case 2:1!=r&&4!=r&&5!=r||(n*=2);case 3:3==r&&(n=0),3!=q||4!=r&&5!=r||(n*=2)}return n}function Vt(t){O=t.length>0&&t[0]>=1e3?t[0]-1e3:-1}function $t(t,e,r,n,o){for(var a=o?r+n:r;;){if(o){if(a<=r)break;a--}if(e[a]>=1e3)O=o?-1:e[a]-1e3;else if(e[a]>=0){var l=e[a]%4+1,i=Math.floor(e[a]/4)%6;4==l&&(l=2),o&&(l=4-l),de(t,Math.floor(e[a]/24),l,i)}if(!o&&++a>=r+n)break}}var _t=0,te=0;function ee(t){if(re(),(A||0!=dt.length&&0!=dt[C].length)&&(!A||0!=gt.length&&0!=gt[0].length)){switch(W=1,Y=!1,z=!0,t){case 0:break;case 1:W=-1;break;case 2:Y=!0;break;case 3:W=-1,Y=!0;break;case 4:z=!1}rn(_t++,W)}}function re(){1==T&&(b=!0)}function ne(){X=0,vt=!0,M=!1;for(var t=0;t<6;t++)for(var e=0;e<9;e++)V[t][e]=_[t][e],$[t][e]=tt[t][e];mt.length>0&&void 0!==mt[C]&&$t(V,mt[C],0,mt[C].length,!1),bt.length>0&&void 0!==bt[C]&&$t(V,bt[C],0,bt[C].length,!0),dt.length>0&&Vt(dt[C]),Rt>0&&(dt=Yt(Fn(3,Ft),!1)),2==Rt&&$t(V,dt[0],0,dt[0].length,!0);for(t=0;t<3;t++)it[t]=ct[t],ft[t]=st[t],ut[t]=ht[t];setTimeout(cr,0)}var oe=[[[0,3],[0,3]],[[0,3],[0,3]],[[0,3],[0,3]],[[0,3],[0,3]],[[0,3],[0,3]],[[0,3],[0,3]]],ae=[],le=[],ie=[],fe=[[[0,0],[0,0]],[[0,3],[0,3]],[[0,3],[0,1]],[[0,1],[0,3]],[[0,3],[2,3]],[[2,3],[0,3]]],ue=[[[0,0],[0,0]],[[0,3],[1,2]],[[1,2],[0,3]]],ce=[[1,0,3,3,2,3],[0,1,5,5,4,5],[2,3,1,0,3,2],[4,5,0,1,5,4],[3,2,2,4,1,0],[5,4,4,2,0,1]],se=[[0,0,2,2,1,2],[0,0,2,2,1,2],[1,2,0,0,2,1],[1,2,0,0,2,1],[2,1,1,1,0,0],[2,1,1,1,0,0]],he=[[0,1,5,5,4,5],[1,0,3,3,2,3],[4,5,0,1,5,4],[2,3,1,0,3,2],[5,4,4,2,0,1],[3,2,2,4,1,0]];function ve(t){for(var e=0;e<6;e++)ae[e]=fe[ce[t][e]],ie[e]=fe[he[t][e]],le[e]=ue[se[t][e]];vt=!1}function de(t,e,r,n){switch(n){case 3:Le(t,1^e,r,!1);case 2:Le(t,e,4-r,!1);case 1:Le(t,e,4-r,!0);break;case 5:Le(t,1^e,4-r,!1),Le(t,e,4-r,!1);break;case 4:Le(t,1^e,r,!1);default:Le(t,e,4-r,!1)}}var ge=[0,1,2,5,8,7,6,3],me=[1,3,-1,-3,1,3,-1,-3],be=[0,2,8,6,3,1,5,7],Me=[[3,3,3,0],[2,1,1,1],[3,3,0,0],[2,1,1,2],[3,2,0,0],[2,2,0,1]],pe=[[7,7,7,4],[6,5,5,5],[7,7,4,4],[6,5,5,6],[7,6,4,4],[6,6,4,5]],ke=[];function Le(t,e,r,n){ye(t,e,r,n),1==St&&r>0&&r<4&&(ye($,e,r,n),function(t,e,r){if(0==r)for(var n=0;n<9;n++)$[t][n]=($[t][n]+4-e)%4;4==t&&(0==r&&(Ee(6,1,3),1==e?Ee(0,1,1):2==e?Ee(0,1,2):3==e&&Ee(0,3,0)),1==r&&(Ee(3,1,3),1==e?Ee(3,1,1):2==e?Ee(3,1,2):3==e&&Ee(1,3,0)));5==t&&(0==r&&(Ee(0,1,3),1==e?Ee(2,3,0):2==e?Ee(6,1,2):3==e&&Ee(6,1,1)),1==r&&(Ee(3,1,3),1==e?Ee(1,3,0):2==e?Ee(3,1,2):3==e&&Ee(3,1,1)));0==r&&(2==t&&Be(0,4-e),3==t&&Be(1,e));1==r&&(2==t&&Be(2,4-e),3==t&&Be(2,e))}(e,r,n))}function ye(t,e,r,n){if(!n){for(var o=0;o<8;o++)ke[(o+2*r)%8]=t[e][ge[o]];for(o=0;o<8;o++)t[e][ge[o]]=ke[o]}var a=3*r;for(o=0;o<4;o++)for(var l=at[e][o],i=n?pe[e][o]:Me[e][o],f=me[i],u=be[i],c=0;c<3;c++,a++)ke[a%12]=t[l][c*f+u];for(o=0,a=0;o<4;o++)for(l=at[e][o],i=n?pe[e][o]:Me[e][o],f=me[i],u=be[i],c=0;c<3;c++,a++)t[l][c*f+u]=ke[a]}var we,Te,Se,Ae,Re,Fe,De,xe=[[[0,1,0],[0,3,1],[0,3,4],[0,1,5]],[[6,1,0],[2,3,1],[2,3,4],[6,1,5]],[[3,1,0],[1,3,1],[1,3,4],[3,1,5]]];function Ee(t,e,r){for(var n=t,o=0;o<3;n+=e,o++)$[r][n]=($[r][n]+2)%4}function Be(t,e){for(var r=0;r<4;r++)for(var n=xe[t][r],o=n[0],a=0;a<3;o+=n[1],a++)$[n[2]][o]=($[n[2]][o]+e)%4}var Ie,Ue,Pe=[],Ce=[],Xe=[],We=[],Ye=[[[0,0],[3,0],[3,1],[0,1]],[[3,0],[3,3],[2,3],[2,0]],[[3,3],[0,3],[0,2],[3,2]],[[0,3],[0,0],[1,0],[1,3]],[[0,1],[3,1],[3,2],[0,2]],[[2,0],[2,3],[1,3],[1,0]]],ze=[[1,0],[0,1],[-1,0],[0,-1],[1,0],[0,1]],qe=[[1,1,1,1,1,-1],[1,1,1,1,1,-1],[1,-1,1,-1,1,1],[1,-1,1,-1,-1,1],[-1,1,-1,1,-1,-1],[1,-1,1,-1,1,1]],Oe=[],Qe=[],Ze=[[[1,0,0],[0,0,0],[0,0,1]],[[1,0,0],[0,1,0],[0,0,0]],[[0,0,0],[0,1,0],[0,0,1]]],Ne=[[[0,0,1],[0,0,0],[-1,0,0]],[[0,1,0],[-1,0,0],[0,0,0]],[[0,0,0],[0,0,1],[0,-1,0]]],He=[[[0,0,0],[0,1,0],[0,0,0]],[[0,0,0],[0,0,0],[0,0,1]],[[1,0,0],[0,0,0],[0,0,0]]],Ge=[1,-1,1,-1,1,-1],Ke=[],je=[],Je=[],Ve=[],$e=[],_e=[],tr=[],er=[],rr=[],nr=[],or=[],ar=[],lr=[[1,0,0],[0,1,0],[1,1,0],[1,1,1],[1,0,1],[1,0,2]],ir=[],fr=[[0,2,2],[2,1,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2]],ur=[[0,1,2],[2,1,0],[0,2,1]];function cr(){if(dn.save(),dn.fillStyle=e,1!=Q||0!=Lt&&!A&&0!=dt[C].length?(qr(dn,0,0,we,Te),dn.fillRect(0,0,we,Te)):(qr(dn,0,0,we,Te-gn),dn.fillRect(0,0,we,Te-gn)),De=0,vt)Lr(it,ft,ut,oe,3);else{for(var t=Math.cos(h+s),n=Math.sin(h+s)*Ge[u],f=0;f<3;f++){Ke[f]=0,je[f]=0;for(var v=0;v<3;v++){var d=Math.floor(u/2);Ke[f]+=it[v]*(He[d][f][v]+Ze[d][f][v]*t+Ne[d][f][v]*n),je[f]+=ft[v]*(He[d][f][v]+Ze[d][f][v]*t+Ne[d][f][v]*n)}}Ur(Je,Ke,je);var g=Math.cos(h-s),m=Math.sin(h-s)*Ge[u];for(f=0;f<3;f++){Ve[f]=0,$e[f]=0;for(v=0;v<3;v++){d=Math.floor(u/2);Ve[f]+=it[v]*(He[d][f][v]+Ze[d][f][v]*g+Ne[d][f][v]*m),$e[f]+=ft[v]*(He[d][f][v]+Ze[d][f][v]*g+Ne[d][f][v]*m)}}Ur(_e,Ve,$e),nr[0]=it,or[0]=ft,ar[0]=ut,nr[1]=Ke,or[1]=je,ar[1]=Je,nr[2]=Ve,or[2]=$e,ar[2]=_e,ir[0]=ae,ir[1]=le,ir[2]=ie,Ir(xr(Fr(tr,it),5+R),xr(Fr(rr,et[u]),1/3)),Ir(xr(Fr(er,it),5+R),xr(Fr(rr,et[1^u]),1/3));var b,M=Er(tr,et[u]),p=Er(er,et[1^u]);b=M<0&&p>0?0:M>0&&p<0?1:2;for(f=0;f<3;f++){v=ur[b][f];var k=lr[c][v];Lr(nr[k],or[k],ar[k],ir[v],fr[c][v])}}if(N||T||(kt=-1),!(Rt>0&&2==Q)){if(!A&&dt.length>0){if(dt[C].length>0){if(Lt>0){dn.lineWidth=bn,dn.strokeStyle=i;var L=(we-2)*function(t,e){for(var r=0,n=0;n<e;n++)t[n]<1e3&&r++;return r}(dt[C],X)/Gt(dt[C]);dn.fillStyle=l,dn.fillRect(mn,Te-Lt-mn,we-gn,Lt),dn.fillStyle=a,dn.fillRect(mn,Te-Lt-mn,L,Lt),dn.beginPath(),dn.rect(mn,Te-Lt-mn,we-gn,Lt),dn.stroke()}dn.font="bold "+yt+"px helvetica";var y=jt(dt[C],X)+"/"+jt(dt[C],-1)+Ht[q],w=dn.measureText(y).width,S=we-w-2,F=Te-Lt-Math.floor(4*gn);H>0?(P&&Sr(dn,y,wt?S-gn:S,F-yt),function(t,e){var n=0==X?Kt(dt[C],X):X,o=Ot(dt[C],0,n),a=Nt(dt[C],n),l=Ot(dt[C],n+1,dt[C].length);G&&(""==a&&(o=o.substr(0,o.length-1)),""!=l&&(l=" "+l.substr(0,l.length-1)));var i=t.measureText(o).width,f=t.measureText(a).width,u=t.measureText(l).width,c=1;c+i+f+u>we&&(c=Math.min(1,we/2-i-f/2),c=Math.max(c,we-i-f-u-2));f>0&&(t.fillStyle=r,t.lineWidth=2,t.strokeStyle="black",t.beginPath(),kn<=14?t.fillRect(c+i-1,Te-Lt-yt-Math.floor(4*gn),f+2,yt+Math.floor(3*gn)):t.fillRect(c+i-1,Te-Lt-yt-Math.floor(2*gn),f+2,yt+Math.floor(gn)));i>0&&Sr(t,o,c,e);f>0&&Sr(t,a,c+i,e);u>0&&Sr(t,l,c+i+f,e)}(dn,F)):P&&Sr(dn,y,wt?S-gn:S,F)}if(dt.length>1){dn.font="bold "+yt+"px helvetica";y=C+1+"/"+dt.length,w=dn.measureText(y).width,S=we-w-2*Z-Math.floor(5*gn);Sr(dn,y,S,sr()),Qr(dn,7,we-2*Z,0),Qr(dn,8,we-Z,0)}}O>=0&&(dn.font="bold "+yt+"px helvetica",Sr(dn,Mt[O],wt?gn:0,sr()))}dn.restore(),pt&&0!=Q&&function(t){var e=Z%2==0?1:0;if(e+=Math.floor(gn+.5)-1,2==Q)return t.fillStyle=0==kt||Rt>0&&6==kt?en(o):o,t.fillRect(mn,Te-Z,Z,Z),t.lineWidth=bn,t.strokeStyle=i,t.beginPath(),t.rect(mn,Te-Z-mn,Z,Z),t.stroke(),void Qr(t,0,Z/2,Te-(Z+1)/2-e);if(1==Q){for(var r=0,n=0;n<7;n++){var a=Math.floor((we-r)/(7-n));t.fillStyle=kt==n?en(o):o,t.fillRect(r,Te,a,Z),t.lineWidth=bn,t.strokeStyle=i,t.beginPath(),0==n?t.rect(r+mn,Te-mn,a-gn,Z):t.rect(r-mn,Te-mn,a,Z),t.stroke(),t.strokeStyle="black",Qr(t,n,r+a/2,Te+Z/2-e),r+=a}pt=!1}}(dn)}function sr(){return kn<10?Math.floor(10*gn):kn<12?Math.floor(12*gn):kn<14?Math.floor(14*gn):yt}var hr=[],vr=[],dr=[],gr=[],mr=[[],[],[],[],[],[]],br=[[],[],[],[],[],[]],Mr=[[.1,.1],[.9,.1],[.9,.9],[.1,.9]],pr=[[0,0],[0,1],[1,1],[1,0]],kr=[];function Lr(t,e,r,n,o){for(var a=0;a<8;a++){var l=(s=we<Te?we:Te-Lt)/3.7*Er(rt[a],e)*F,i=s/3.7*Er(rt[a],r)*F;l/=1-(h=s/(5+R)*Er(rt[a],t)*F)/s,i/=1-h/s,dr[a]=we/2+l,gr[a]=0==D?(Te-Lt)/2*F-i:1==D?(Te-Lt)/2-i:2==D?Te-Lt-(Te-Lt)/2*F-i:(Te-Lt)*(D*(1-F)+F/2)-i}for(a=0;a<6;a++)for(var c=0;c<4;c++)mr[a][c]=dr[nt[a][c]],br[a][c]=gr[nt[a][c]];if(x)for(a=0;a<6;a++)if(Ir(xr(Fr(tr,t),5+R),et[a]),Er(tr,et[a])<0){xr(Fr(kr,et[a]),E);var s,h;l=(s=we<Te?we:Te-Lt)/B*Er(kr,e),i=s/I*Er(kr,r);l/=1-(h=s/(5+R)*Er(kr,t))/s,i/=1-h/s;var v=n[a][0][1]-n[a][0][0],d=n[a][1][1]-n[a][1][0];if(v>0&&d>0)for(var g=0,m=n[a][1][0];g<d;g++,m++)for(var b=0,k=n[a][0][0];b<v;b++,k++){for(c=0;c<4;c++)yr(a,c,hr,vr,k+Mr[c][0],m+Mr[c][1],M),hr[c]=Math.floor(hr[c]+(M?-l:l)),vr[c]=Math.floor(vr[c]-i);1==St?(Kr(dn,hr,vr,"#fdfdfd"),Gr(dn,hr,vr,U?en("#fdfdfd"):"#fdfdfd"),$r(dn,hr,vr,a,$[a][3*m+k],J[V[a][3*m+k]])):(Kr(dn,hr,vr,J[V[a][3*m+k]]),Gr(dn,hr,vr,U?en(J[V[a][3*m+k]]):J[V[a][3*m+k]]))}}for(a=0;a<6;a++){v=n[a][0][1]-n[a][0][0],d=n[a][1][1]-n[a][1][0];if(v<=0||d<=0){for(c=0;c<4;c++){var L=ot[a][c];hr[c]=Math.floor(mr[a][c]+2*(mr[1^a][L]-mr[a][c])/3),vr[c]=Math.floor(br[a][c]+2*(br[1^a][L]-br[a][c])/3),M&&(hr[c]=we-hr[c])}Kr(dn,hr,vr,f)}else{for(c=0;c<4;c++)yr(a,c,hr,vr,n[a][0][pr[c][0]],n[a][1][pr[c][1]],M);Kr(dn,hr,vr,f)}}for(a=0;a<6;a++)if(Ir(xr(Fr(tr,t),5+R),et[a]),Er(tr,et[a])>0){v=n[a][0][1]-n[a][0][0],d=n[a][1][1]-n[a][1][0];if(v>0&&d>0)for(g=0,m=n[a][1][0];g<d;g++,m++)for(b=0,k=n[a][0][0];b<v;b++,k++){for(c=0;c<4;c++)yr(a,c,hr,vr,k+Mr[c][0],m+Mr[c][1],M);1==St?(Gr(dn,hr,vr,"#fdfdfd"),Kr(dn,hr,vr,"#fdfdfd"),$r(dn,hr,vr,a,$[a][3*m+k],J[V[a][3*m+k]])):(Gr(dn,hr,vr,J[V[a][3*m+k]]),Kr(dn,hr,vr,J[V[a][3*m+k]]))}if(!p||T)continue;var y=(mr[a][1]-mr[a][0]+mr[a][2]-mr[a][3])/6,w=(mr[a][3]-mr[a][0]+mr[a][2]-mr[a][1])/6,S=(br[a][1]-br[a][0]+br[a][2]-br[a][3])/6,A=(br[a][3]-br[a][0]+br[a][2]-br[a][1])/6;if(3==o)for(c=0;c<6;c++){for(L=0;L<4;L++)yr(a,L,Pe[De],Ce[De],Ye[c][L][0],Ye[c][L][1],!1);if(Xe[De]=(y*ze[c][0]+S*ze[c][1])*qe[a][c],We[De]=(w*ze[c][0]+A*ze[c][1])*qe[a][c],Oe[De]=at[a][c%4],c>=4&&(Oe[De]&=-2),Qe[De]=Math.floor(c/4),18==++De)break}else if(0==o){if(a!=u&&v>0&&d>0){for(c=3==v?0==n[a][1][0]?0:2:0==n[a][0][0]?3:1,L=0;L<4;L++)yr(a,L,Pe[De],Ce[De],Ye[c][L][0],Ye[c][L][1],!1);Xe[De]=(y*ze[c][0]+S*ze[c][1])*qe[a][c],We[De]=(w*ze[c][0]+A*ze[c][1])*qe[a][c],Oe[De]=u,Qe[De]=0,De++}}else if(1==o&&a!=u&&v>0&&d>0){for(c=3==v?4:5,L=0;L<4;L++)yr(a,L,Pe[De],Ce[De],Ye[c][L][0],Ye[c][L][1],!1);Xe[De]=(y*ze[c][0]+S*ze[c][1])*qe[a][c],We[De]=(w*ze[c][0]+A*ze[c][1])*qe[a][c],Oe[De]=u,Qe[De]=1,De++}}}function yr(t,e,r,n,o,a,l){o/=3,a/=3;var i=mr[t][0]+(mr[t][1]-mr[t][0])*o,f=br[t][0]+(br[t][1]-br[t][0])*o,u=mr[t][3]+(mr[t][2]-mr[t][3])*o,c=br[t][3]+(br[t][2]-br[t][3])*o;r[e]=Math.floor(.5+i+(u-i)*a),n[e]=Math.floor(.5+f+(c-f)*a),l&&(r[e]=we-r[e])}var wr=[1,1,-1,-1,-1,1,1,-1,-1,0,1,0,0,1,0,-1],Tr=[];function Sr(t,e,r,o){if(wt){t.fillStyle="black";for(var a=0;a<Tr.length;a+=2)t.fillText(e,r+Tr[a],o+Tr[a+1]);t.fillStyle="white"}else t.fillStyle=n;t.fillText(e,r,o)}var Ar=[-1,3,1,-1,0,2,4,-1],Rr=[];function Fr(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function Dr(t){var e=Math.sqrt(Er(t,t));return t[0]/=e,t[1]/=e,t[2]/=e,t}function xr(t,e){return t[0]*=e,t[1]*=e,t[2]*=e,t}function Er(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function Br(t,e){return t[0]+=e[0],t[1]+=e[1],t[2]+=e[2],t}function Ir(t,e){return t[0]-=e[0],t[1]-=e[1],t[2]-=e[2],t}function Ur(t,e,r){return t[0]=e[1]*r[2]-e[2]*r[1],t[1]=e[2]*r[0]-e[0]*r[2],t[2]=e[0]*r[1]-e[1]*r[0],t}function Pr(t,e){var r=Math.sin(e),n=Math.cos(e),o=t[1]*n-t[2]*r,a=t[1]*r+t[2]*n;return t[1]=o,t[2]=a,t}function Cr(t,e){var r=Math.sin(e),n=Math.cos(e),o=t[0]*n-t[2]*r,a=t[0]*r+t[2]*n;return t[0]=o,t[2]=a,t}function Xr(t,e){var r=Math.sin(e),n=Math.cos(e),o=t[0]*n-t[1]*r,a=t[0]*r+t[1]*n;return t[0]=o,t[1]=a,t}function Wr(t,e,r){return"#"+Yr(t.toString(16))+Yr(e.toString(16))+Yr(r.toString(16))}function Yr(t){return("00"+t).substring(t.length)}function zr(t){for(var e=0,r=0;r<6;r++)for(var n=0;n<16;n++)if(t[r].toLowerCase()=="0123456789abcdef".charAt(n)){e++;break}return 6==e}function qr(t,e,r,n,o){t.beginPath(),t.moveTo(e,r),t.lineTo(e+n,r),t.lineTo(e+n,r+o),t.lineTo(e,r+o),t.lineTo(e,r),t.closePath(),t.clip()}var Or=[];function Qr(t,e,r,n){switch(r=Math.floor(r),n=Math.floor(n),e){case 0:Nr(t,r-Or[5],n-Or[5],Or[3],2.05*Or[5]),Zr(t,r+Or[5],n,-1);break;case 1:Nr(t,r+Or[1],n-Or[5],Or[3],2.05*Or[5]),Zr(t,r-Or[1],n,-1);break;case 2:Zr(t,r+Or[1],n,-1);break;case 3:T?Nr(t,r-Or[5],n-Or[5],2.05*Or[5],2.05*Or[5]):(Nr(t,r-Or[9]/2,n-Or[7]/2,Or[8],1.5*Or[5]),Nr(t,r-Or[2],n-Or[5],Or[3],2.05*Or[5]));break;case 4:Zr(t,r-Or[2],n,1);break;case 5:Nr(t,r-Or[6],n-Or[5],Or[3],2.05*Or[5]),Zr(t,r-1.5*Or[1],n,1);break;case 6:Nr(t,r+Or[1],n-Or[5],Or[3],2.05*Or[5]),Zr(t,r-Or[6],n,1);break;case 7:var a=7==kt?en(o):o;Hr(t,r-2*gn,n+gn,Z,n+Z,a),Zr(t,r+2*gn+Z/2-3*gn,n+Z/2+mn,-1);break;case 8:a=8==kt?en(o):o;Hr(t,r-2*gn,n+gn,Z,n+Z,a),Zr(t,r-gn+Z/2-3*gn,n+Z/2+mn,1)}}function Zr(t,e,r,n){var o=4.5*gn,a=[],l=[];a[0]=e,a[1]=e+n,a[2]=e+5*gn*n,a[3]=e+n,a[4]=e,l[0]=r-o,l[1]=r-o,l[2]=r,l[3]=r+o,l[4]=r+o,function(t,e,r){t.beginPath(),t.moveTo(e[0]+mn,r[0]+mn);for(var n=1;n<5;n++)t.lineTo(e[n]+mn,r[n]+mn);t.closePath(),t.fillStyle="white",t.strokeStyle="black",t.fill(),t.lineWidth=bn,t.stroke()}(t,a,l)}function Nr(t,e,r,n,o){t.lineWidth=bn,t.beginPath(),t.rect(e+mn,r+mn,n-1,o-1),t.fillStyle="white",t.fill(),t.strokeStyle="black",t.stroke()}function Hr(t,e,r,n,o,a){t.lineWidth=bn,t.beginPath(),t.rect(e+mn,r+mn,n-1,o-1),t.fillStyle=a,t.fill(),t.strokeStyle="black",t.stroke()}function Gr(t,e,r,n){t.beginPath(),t.moveTo(e[0],r[0]),t.lineTo(e[1],r[1]),t.lineTo(e[2],r[2]),t.lineTo(e[3],r[3]),t.closePath(),t.strokeStyle=n,t.lineWidth=.7*gn,t.stroke()}function Kr(t,e,r,n){t.beginPath(),t.moveTo(e[0],r[0]),t.lineTo(e[1],r[1]),t.lineTo(e[2],r[2]),t.lineTo(e[3],r[3]),t.closePath(),t.fillStyle=n,t.fill()}var jr,Jr,Vr=[[0,1,2,3],[3,0,1,2],[2,3,0,1],[1,2,3,0]];function $r(t,e,r,n,o,a){var l=[],i=[];if(2!=Dt||"#ffffff"!=a){for(var f=0;f<4;f++)l[f]=Math.floor(e[f]+.05*(e[Vr[2][f]]-e[f])),i[f]=Math.floor(r[f]+.05*(r[Vr[2][f]]-r[f]));0==n&&(o=(o+1)%4),4==n&&(o=(o+3)%4);var u=Vr[o][0],c=Vr[o][1],s=Vr[o][2],h=Vr[o][3],v=.26*(l[s]-l[c]),d=.26*(i[s]-i[c]),g=(l[u]-l[c])/2,m=i[c]+(i[u]-i[c])/2,b=i[s]+(i[h]-i[s])/2,M=(l[h]-l[s])/2,p=1^o;t.fillStyle=a,t.beginPath(),t.moveTo(l[u]+(l[h]-l[u])/2,i[u]+(i[h]-i[u])/2),t.lineTo(l[p]+g,m),t.lineTo(l[p]+v+g,m+d),t.lineTo(l[p]+v,i[p]+d),p=(p+1)%4,t.lineTo(l[p]-v,i[p]-d),t.lineTo(l[p]-v+M,b-d),t.lineTo(l[p]+M,b),t.closePath(),t.fill(),t.lineWidth=.6*gn,t.strokeStyle="black",t.stroke()}}function _r(t){return"white"==t?"#FFFFFF":"black"==t?"#000000":"#808080"}function tn(t){return"#"!=t.substring(0,1)&&(t=_r(t)),(299*parseInt(t.substring(1,3),16)+587*parseInt(t.substring(3,5),16)+114*parseInt(t.substring(5,7),16))/1e3}function en(t){"#"!=t.substring(0,1)&&(t=_r(t));var e=parseInt(t.substring(1,3),16),r=parseInt(t.substring(3,5),16),n=parseInt(t.substring(5,7),16);return Wr(e=Math.floor(.7*e),r=Math.floor(.7*r),n=Math.floor(.7*n))}function rn(t,e){if(t>te)setTimeout(rn,0,t,e);else{if(!A&&(0==dt.length||0==dt[C].length))return T=!1,pt=!0,void cr();if(!z){for(var r=dt[C];X<r.length;){if(r[X]>=1e3)O=r[X]-1e3;else if(-1!=r[X]){var n=r[X]%4+1,o=Math.floor(r[X]/4)%6,a=Math.floor(r[X]/24);de(V,a,4==n?2:n,o)}X++}return T=!1,pt=!0,cr(),void te++}var l,i,f,g,M,p,L=e;m=!1,requestAnimationFrame(function t(){if(R){if(R=!1,p=!1,k)L>0?X>=r.length&&(X=0,Vt(r)):(O=-1,0==X&&(X=r.length));else if(L>0&&X>=r.length||L<0&&0==X)return b=!1,T=!1,te++,pt=!0,void cr();T=!0,pt=!0}if(F&&(F=!1,L<0&&(E=!1,0==X?(E=!0,x=!0):X--),!E)){if(S=!1,-1==r[X]){if(cr(),!Y)for(l=Date.now();Date.now()-l<1e3;);}else r[X]>=1e3?O=L>0?r[X]-1e3:-1:S=!0;if(S){n=r[X]%4+1,o=Math.floor(r[X]/4)%6;var e=n<3;if(4==n&&(n=2),L<0&&(e=!e,n=4-n),a=Math.floor(r[X]/24),y=!1,vt=!0,w=!0,h=0,lt[a]>0&&(e=!e),z){M=Math.PI/2,g=e?1:-1;var B=67*v;2==n&&(M=Math.PI,B=67*d),y=!0,u=a,c=o,ve(a),l=Date.now(),i=l,f=g*M/B,s=0}}else D=!0}E||(S&&(z&&s*g<M?(cr(),(m||b)&&(D=!0),i=Date.now(),s=f*(i-l)):D=!0),D&&(D=!1,F=!0,S&&(s=0,y=!1,vt=!0,de(V,a,n,o),w=!1,z&&cr(),Y&&(p=!0)),L>0?(++X<r.length&&r[X]>=1e3&&(O=r[X]-1e3,X++),X==r.length&&(A?function(t){X=0;for(var e=0;e<6;e++)for(var r=0;r<9;r++)V[e][r]=_[e][r],$[e][r]=tt[e][r];mt.length>0&&void 0!==mt[C]&&$t(V,mt[C],0,mt[C].length,!1);bt.length>0&&void 0!==bt[C]&&$t(V,bt[C],0,bt[C].length,!0);Vt(t)}(r):x=!0)):O=-1,(m||b||p)&&(x=!0)));if(x)return x=!1,R=!0,_t<=te+1&&(T=!1),pt=!0,0==kt&&ne(),cr(),A&&(ne(),A=!1),b=!1,te++,void(1==X&&r[0]>=1e3&&X--);requestAnimationFrame(t)});var S=!1,R=!0,F=!0,D=!1,x=!1,E=!1;r=A?gt[0]:dt[C]}}document.addEventListener("touchstart",cn),document.addEventListener("touchmove",yn,{passive:!1}),document.addEventListener("touchend",un),document.addEventListener("mousedown",cn),document.addEventListener("mousemove",yn),document.addEventListener("mouseup",un),document.addEventListener("contextmenu",Sn);var nn=!1,on=!0,an=document.getElementsByTagName("div"),ln=an.length>0&&"wrap"==an[0].className;function fn(t){ln?an[0].style.overflow=t:document.body.style.overflow=t}function un(t){if(nn&&void 0!==t.touches&&(t.preventDefault(),fn("auto")),nn?setTimeout(function(){on=!0},100):on=!0,nn=!1,S=!1,N)N=!1,pt=!0,cr();else if(y&&!w){y=!1,h+=s,s=0;for(var e=h;e<0;)e+=32*Math.PI;var r=Math.floor(8*e/Math.PI)%16;(Tt||r%4==0||r%4==3)&&(r=Math.floor((r+2)/4),lt[u]>0&&(r=(4-r)%4),h=0,vt=!0,de(V,u,r,c)),cr()}}function cn(t){var e=vn.getBoundingClientRect(),r=Math.floor(e.left),n=Math.floor(e.top);if(void 0===t.touches)var o=t.clientX,a=t.clientY;else o=t.touches[0].clientX,a=t.touches[0].clientY;o<r||o>r+we/gn||a<n||a>n+(Te+(1==Q?Z:0))/gn||(t.preventDefault(),nn=!0,on=!1,void 0!==t.touches&&fn("hidden"),jr=r,Jr=n,Re=Se=wn(t),Fe=Ae=Tn(t),g=!1,(kt=function(t,e){if(0==Q)return-1;if(dt.length>1&&t>=we-2*Z&&t<we-Z&&e>=0&&e<Z)return 7;if(dt.length>1&&t>=we-Z&&t<we&&e>=0&&e<Z)return 8;if(2==Q)return t>=0&&t<Z&&e>=Te-Z&&e<Te?0:-1;if(e<Te)return-1;for(var r=0,n=0;n<7;n++){var o=(we-r)/(7-n);if(t>=r&&t<r+o&&e>=Te&&e<Te+Z)return n;r+=o}return-1}(Se,Ae))>=0?(N=!0,3==kt?T?re():M=!M:0==kt?Rt>0&&2==Q?1==At?(At=!1,re(),ne()):(At=!0,ee(Ar[kt=6])):(re(),ne()):7==kt||8==kt?(re(),setTimeout(ne,20),C=7==kt?C>0?C-1:dt.length-1:C<dt.length-1?C+1:0):ee(Ar[kt]),pt=!0,cr()):Lt>0&&dt.length>0&&dt[C].length>0&&Ae>Te-Lt&&Ae<=Te?L&&(re(),sn(_t++)):(M&&(Re=Se=we-Se),void 0===t.touches?!p||T||0!=t.button||t.shiftKey||(g=!0):p&&!T&&(g=!0)))}function sn(t){if(t>te)setTimeout(sn,0,t);else{var e=Gt(dt[C]),r=Math.floor(((Se-1)*e*2/(we-2)+1)/2);(r=Math.max(0,Math.min(e,r)))>0&&(r=Kt(dt[C],r)),r>X&&$t(V,dt[C],X,r-X,!1),r<X&&$t(V,dt[C],r,X-r,!0),X=r,S=!0,cr(),T=!1,te++}}var hn,vn,dn,gn,mn,bn,Mn,pn,kn,Ln;Rr=[];function yn(t){if(nn&&!N){if(void 0!==t.touches&&t.preventDefault(),S){re();var e=Gt(dt[C]),r=Math.floor(((wn(t)-1)*e*2/(we-2)+1)/2);return(r=Math.max(0,Math.min(e,r)))>0&&(r=Kt(dt[C],r)),r>X&&$t(V,dt[C],X,r-X,!1),r<X&&$t(V,dt[C],r,X-r,!0),X=r,void cr()}var n=M?we-wn(t):wn(t),o=Tn(t),a=n-Se,l=o-Ae;if(p&&g&&!y&&!T){Re=n,Fe=o;for(var i=0;i<De;i++){var f=Pe[i][0],h=Pe[i][1]-f,v=Pe[i][3]-f,d=Ce[i][0],m=Ce[i][1]-d,b=Ce[i][3]-d,k=(b*(Se-f)-v*(Ae-d))/(h*b-v*m),L=(-m*(Se-f)+h*(Ae-d))/(h*b-v*m);if(k>0&&k<1&&L>0&&L<1){if(a*a+l*l<144)return;if(Ie=Xe[i],Ue=We[i],Math.abs(Ie*a+Ue*l)/Math.sqrt((Ie*Ie+Ue*Ue)*(a*a+l*l))>.75){y=!0,u=Oe[i],c=Qe[i];break}}}g=!1,Se=Re,Ae=Fe}a=(n-Se)/gn,l=(o-Ae)/gn,!y||T?(Dr(Br(it,xr(Fr(Rr,ft),-.016*a))),Dr(Ur(ft,ut,it)),Dr(Br(it,xr(Fr(Rr,ut),.016*l))),Dr(Ur(ut,it,ft)),Se=n,Ae=o):(vt&&ve(u),s=.03*(Ie*a+Ue*l)/Math.sqrt(Ie*Ie+Ue*Ue)),cr()}}function wn(t){return void 0===t.touches?(t.clientX-jr)*gn:(t.touches[0].clientX-jr)*gn}function Tn(t){return void 0===t.touches?(t.clientY-Jr)*gn:(t.touches[0].clientY-Jr)*gn}function Sn(t){on||t.preventDefault()}function An(){clearTimeout(hn),hn=setTimeout(function(){Rn(),pt=!0,cr()},20)}function Rn(){Te=Ln.clientHeight-1,we=Ln.clientWidth-1,vn.style.width=we+"px",vn.style.height=Te+"px",gn=devicePixelRatio,mn=gn/2,Te=Math.floor(Te*gn),we=Math.floor(we*gn),vn.width=we,vn.height=Te,bn=gn,Z=Math.floor(Mn*gn),Lt=Math.floor(pn*gn),yt=Math.floor(kn*gn);for(var t=1;t<10;t++)Or[t]=t*gn;for(t=0;t<wr.length;t++)Tr[t]=wr[t]*gn;1==Q&&(Te-=Z)}function Fn(t,e){var r,n,o=["R","L","F","B","U","D"],a=["","m","n"],l=["","2","'"],i=-1,f=-1,u=-1,c="";0==e&&(e=10*t);for(var s=0;s<e;s++){for(;i==f||Math.floor(i/2)==Math.floor(f/2)&&i==u;)i=Math.floor(6*Math.random());u=f,f=i,r=Math.floor(3*Math.random()),t<=3?c+=""+o[i]+l[r]+" ":(n=Math.floor(Math.random()*(t>4?3:2)),5==t&&1==n&&(n=0),c+=""+o[i]+a[n]+l[r]+" ")}return c}window.addEventListener("resize",An);var Dn=[];function xn(){re(),document.removeEventListener("touchstart",cn),document.removeEventListener("touchmove",yn),document.removeEventListener("touchend",un),document.removeEventListener("mousedown",cn),document.removeEventListener("mousemove",yn),document.removeEventListener("mouseup",un),document.removeEventListener("contextmenu",Sn),window.removeEventListener("resize",An)}!function(){vn=document.createElement("canvas"),void 0!==t&&function(){for(var e=t.split("&"),r=0;r<e.length;r++){var n=e[r].split("=");void 0!==n[1]&&(Dn[n[0]]=decodeURIComponent(n[1].trim()))}}();var e=Pt("id");if(null!=e)(Ln=document.getElementById(e)).innerHTML="";else if(null!=document.currentScript)Ln=document.currentScript.parentNode;else{var r=document.getElementsByTagName("script"),n=r[r.length-1];Ln=n.parentNode}null!=Ln.id&&"undefined"!=typeof removeListeners&&(removeListeners[Ln.id]=xn);for(var o=0;o<6;o++)V[o]=[],$[o]=[],_[o]=[],tt[o]=[];for(o=0;o<18;o++)Pe[o]=[],Ce[o]=[];C=0,h=0,It()}()}