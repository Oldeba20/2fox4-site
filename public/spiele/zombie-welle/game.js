var Wu=0,wl=1,qu=2;var ps=1,Xu=2,ar=3,$n=0,Bt=1,Tn=2,En=0,ki=1,mn=2,Al=3,Rl=4,ju=5;var ms=100,Ku=101,Yu=102,Ju=103,Zu=104,$u=200,Qu=201,ed=202,td=203,Cl=204,Pl=205,nd=206,id=207,sd=208,rd=209,ad=210,od=211,cd=212,ld=213,hd=214,ao=0,oo=1,co=2,Hs=3,lo=4,ho=5,uo=6,fo=7,Do=0,ud=1,dd=2,zn=0,sa=1,ra=2,aa=3,gs=4,oa=5,ca=6,la=7,gl="attached",fd="detached",Il=300,zi=301,bs=302,Fo=303,No=304,ha=306,pn=1e3,yn=1001,Gs=1002,Rt=1003,Uo=1004;var xs=1005;var Ct=1006,or=1007;var Hn=1008;var un=1009,Ll=1010,Dl=1011,cr=1012,Oo=1013,Gn=1014,gn=1015,kt=1016,Bo=1017,ko=1018,lr=1020,Fl=35902,Nl=35899,Ul=1021,Ol=1022,bn=1023,jn=1026,Hi=1027,zo=1028,Ho=1029,Gi=1030,Go=1031;var Vo=1033,ua=33776,da=33777,fa=33778,pa=33779,Wo=35840,qo=35841,Xo=35842,jo=35843,Ko=36196,Yo=37492,Jo=37496,Zo=37488,$o=37489,ma=37490,Qo=37491,ec=37808,tc=37809,nc=37810,ic=37811,sc=37812,rc=37813,ac=37814,oc=37815,cc=37816,lc=37817,hc=37818,uc=37819,dc=37820,fc=37821,pc=36492,mc=36494,gc=36495,bc=36283,xc=36284,ga=36285,_c=36286,_s=2200,pd=2201,md=2202,ns=2300,is=2301,io=2302,bl=2303,Qi=2400,es=2401,Br=2402,vc=2500,gd=2501,Bl=0,ba=1,hr=2,bd=3200;var xa=0,xd=1,yi="",rt="srgb",sn="srgb-linear",kr="linear",st="srgb";var so=7680;var _d=519,vd=512,yd=513,Md=514,yc=515,Sd=516,Td=517,Mc=518,Ed=519,kl=35044,Vi=35048;var zl="300 es",Un=2e3,Vs=2001;function Df(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ff(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ws(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function wd(){let r=Ws("canvas");return r.style.display="block",r}var ru={},qs=null;function zr(...r){let e="THREE."+r.shift();qs?qs("log",e,...r):console.log(e,...r)}function Ad(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ae(...r){r=Ad(r);let e="THREE."+r.shift();if(qs)qs("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Fe(...r){r=Ad(r);let e="THREE."+r.shift();if(qs)qs("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function ts(...r){let e=r.join(" ");e in ru||(ru[e]=!0,Ae(...r))}function Rd(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Cd={[ao]:oo,[co]:uo,[lo]:fo,[Hs]:ho,[oo]:ao,[uo]:co,[fo]:lo,[ho]:Hs},Bn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],au=1234567,Ur=Math.PI/180,ss=180/Math.PI;function On(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[r&255]+Yt[r>>8&255]+Yt[r>>16&255]+Yt[r>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function $e(r,e,t){return Math.max(e,Math.min(t,r))}function Hl(r,e){return(r%e+e)%e}function Nf(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Uf(r,e,t){return r!==e?(t-r)/(e-r):0}function Or(r,e,t){return(1-t)*r+t*e}function Of(r,e,t,n){return Or(r,e,1-Math.exp(-t*n))}function Bf(r,e=1){return e-Math.abs(Hl(r,e*2)-e)}function kf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function zf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Hf(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Gf(r,e){return r+Math.random()*(e-r)}function Vf(r){return r*(.5-Math.random())}function Wf(r){r!==void 0&&(au=r);let e=au+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qf(r){return r*Ur}function Xf(r){return r*ss}function jf(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function Kf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Yf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Jf(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*h,c*u,c*d,o*l);break;case"YZY":r.set(c*d,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*d,o*h,o*l);break;case"XZX":r.set(o*h,c*g,c*f,o*l);break;case"YXY":r.set(c*f,o*h,c*g,o*l);break;case"ZYZ":r.set(c*g,c*f,o*h,o*l);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Nn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ht(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Gl={DEG2RAD:Ur,RAD2DEG:ss,generateUUID:On,clamp:$e,euclideanModulo:Hl,mapLinear:Nf,inverseLerp:Uf,lerp:Or,damp:Of,pingpong:Bf,smoothstep:kf,smootherstep:zf,randInt:Hf,randFloat:Gf,randFloatSpread:Vf,seededRandom:Wf,degToRad:qf,radToDeg:Xf,isPowerOfTwo:jf,ceilPowerOfTwo:Kf,floorPowerOfTwo:Yf,setQuaternionFromProperEuler:Jf,normalize:ht,denormalize:Nn},jl=class jl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jl.prototype.isVector2=!0;var Ee=jl,Ft=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],f=s[a+1],g=s[a+2],b=s[a+3];if(u!==b||c!==d||l!==f||h!==g){let m=c*d+l*f+h*g+u*b;m<0&&(d=-d,f=-f,g=-g,b=-b,m=-m);let p=1-o;if(m<.9995){let v=Math.acos(m),E=Math.sin(v);p=Math.sin(p*v)/E,o=Math.sin(o*v)/E,c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+b*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+b*o;let v=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=v,l*=v,h*=v,u*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),d=c(n/2),f=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(s-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Kl=class Kl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ou.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ou.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xc.copy(this).projectOnVector(e),this.sub(Xc)}reflect(e){return this.sub(Xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kl.prototype.isVector3=!0;var R=Kl,Xc=new R,ou=new Ft,Yl=class Yl{constructor(e,t,n,i,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],b=i[0],m=i[3],p=i[6],v=i[1],E=i[4],x=i[7],M=i[2],S=i[5],A=i[8];return s[0]=a*b+o*v+c*M,s[3]=a*m+o*E+c*S,s[6]=a*p+o*x+c*A,s[1]=l*b+h*v+u*M,s[4]=l*m+h*E+u*S,s[7]=l*p+h*x+u*A,s[2]=d*b+f*v+g*M,s[5]=d*m+f*E+g*S,s[8]=d*p+f*x+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*s,f=l*s-a*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=u*b,e[1]=(i*l-h*n)*b,e[2]=(o*n-i*a)*b,e[3]=d*b,e[4]=(h*t-i*c)*b,e[5]=(i*s-o*t)*b,e[6]=f*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*s)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return ts("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jc.makeScale(e,t)),this}rotate(e){return ts("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jc.makeRotation(-e)),this}translate(e,t){return ts("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Yl.prototype.isMatrix3=!0;var Oe=Yl,jc=new Oe,cu=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lu=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zf(){let r={enabled:!0,workingColorSpace:sn,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===st&&(i.r=hi(i.r),i.g=hi(i.g),i.b=hi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(i.r=zs(i.r),i.g=zs(i.g),i.b=zs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===yi?kr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return ts("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return ts("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[sn]:{primaries:e,whitePoint:n,transfer:kr,toXYZ:cu,fromXYZ:lu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:rt},outputColorSpaceConfig:{drawingBufferColorSpace:rt}},[rt]:{primaries:e,whitePoint:n,transfer:st,toXYZ:cu,fromXYZ:lu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:rt}}}),r}var Ge=Zf();function hi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ws,po=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ws===void 0&&(ws=Ws("canvas")),ws.width=e.width,ws.height=e.height;let i=ws.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ws}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ws("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=hi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hi(t[n]/255)*255):t[n]=hi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},$f=0,Xs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Kc(i[a].image)):s.push(Kc(i[a]))}else s=Kc(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Kc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?po.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}var Qf=0,Yc=new R,Ut=class r extends Bn{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=yn,i=yn,s=Ct,a=Hn,o=bn,c=un,l=r.DEFAULT_ANISOTROPY,h=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=On(),this.name="",this.source=new Xs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yc).x}get height(){return this.source.getSize(Yc).y}get depth(){return this.source.getSize(Yc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ae(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Il)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pn:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case Gs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pn:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case Gs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Il;Ut.DEFAULT_ANISOTROPY=1;var Jl=class Jl{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],b=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,x=(f+1)/2,M=(p+1)/2,S=(h+d)/4,A=(u+b)/4,_=(g+m)/4;return E>x&&E>M?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=S/n,s=A/n):x>M?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=S/i,s=_/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=A/s,i=_/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-b)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jl.prototype.isVector4=!0;var ut=Jl,mo=class extends Bn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},s=new Ut(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Xs(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},wt=class extends mo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Hr=class extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var go=class extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Lo=class Lo{constructor(e,t,n,i,s,a,o,c,l,h,u,d,f,g,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,h,u,d,f,g,b,m)}set(e,t,n,i,s,a,o,c,l,h,u,d,f,g,b,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lo().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/As.setFromMatrixColumn(e,0).length(),s=1/As.setFromMatrixColumn(e,1).length(),a=1/As.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-b*l,t[9]=-o*c,t[2]=b-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,b=l*u;t[0]=d+b*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=b+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,b=l*u;t[0]=d-b*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=b-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+b,t[1]=c*u,t[5]=b*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=b-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-b*u}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+b,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ep,e,tp)}lookAt(e,t,n){let i=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ci.crossVectors(n,dn),Ci.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ci.crossVectors(n,dn)),Ci.normalize(),La.crossVectors(dn,Ci),i[0]=Ci.x,i[4]=La.x,i[8]=dn.x,i[1]=Ci.y,i[5]=La.y,i[9]=dn.y,i[2]=Ci.z,i[6]=La.z,i[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],b=n[6],m=n[10],p=n[14],v=n[3],E=n[7],x=n[11],M=n[15],S=i[0],A=i[4],_=i[8],w=i[12],C=i[1],D=i[5],F=i[9],k=i[13],I=i[2],B=i[6],W=i[10],L=i[14],q=i[3],H=i[7],X=i[11],$=i[15];return s[0]=a*S+o*C+c*I+l*q,s[4]=a*A+o*D+c*B+l*H,s[8]=a*_+o*F+c*W+l*X,s[12]=a*w+o*k+c*L+l*$,s[1]=h*S+u*C+d*I+f*q,s[5]=h*A+u*D+d*B+f*H,s[9]=h*_+u*F+d*W+f*X,s[13]=h*w+u*k+d*L+f*$,s[2]=g*S+b*C+m*I+p*q,s[6]=g*A+b*D+m*B+p*H,s[10]=g*_+b*F+m*W+p*X,s[14]=g*w+b*k+m*L+p*$,s[3]=v*S+E*C+x*I+M*q,s[7]=v*A+E*D+x*B+M*H,s[11]=v*_+E*F+x*W+M*X,s[15]=v*w+E*k+x*L+M*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],b=e[7],m=e[11],p=e[15],v=c*f-l*d,E=o*f-l*u,x=o*d-c*u,M=a*f-l*h,S=a*d-c*h,A=a*u-o*h;return t*(b*v-m*E+p*x)-n*(g*v-m*M+p*S)+i*(g*E-b*M+p*A)-s*(g*x-b*S+m*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(s*h-o*c)+i*(s*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],b=e[13],m=e[14],p=e[15],v=t*o-n*a,E=t*c-i*a,x=t*l-s*a,M=n*c-i*o,S=n*l-s*o,A=i*l-s*c,_=h*b-u*g,w=h*m-d*g,C=h*p-f*g,D=u*m-d*b,F=u*p-f*b,k=d*p-f*m,I=v*k-E*F+x*D+M*C-S*w+A*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/I;return e[0]=(o*k-c*F+l*D)*B,e[1]=(i*F-n*k-s*D)*B,e[2]=(b*A-m*S+p*M)*B,e[3]=(d*S-u*A-f*M)*B,e[4]=(c*C-a*k-l*w)*B,e[5]=(t*k-i*C+s*w)*B,e[6]=(m*x-g*A-p*E)*B,e[7]=(h*A-d*x+f*E)*B,e[8]=(a*F-o*C+l*_)*B,e[9]=(n*C-t*F-s*_)*B,e[10]=(g*S-b*x+p*v)*B,e[11]=(u*x-h*S-f*v)*B,e[12]=(o*w-a*D-c*_)*B,e[13]=(t*D-n*w+i*_)*B,e[14]=(b*E-g*M-m*v)*B,e[15]=(h*M-u*E+d*v)*B,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,d=s*l,f=s*h,g=s*u,b=a*h,m=a*u,p=o*u,v=c*l,E=c*h,x=c*u,M=n.x,S=n.y,A=n.z;return i[0]=(1-(b+p))*M,i[1]=(f+x)*M,i[2]=(g-E)*M,i[3]=0,i[4]=(f-x)*S,i[5]=(1-(d+p))*S,i[6]=(m+v)*S,i[7]=0,i[8]=(g+E)*A,i[9]=(m-v)*A,i[10]=(1-(d+b))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=As.set(i[0],i[1],i[2]).length(),o=As.set(i[4],i[5],i[6]).length(),c=As.set(i[8],i[9],i[10]).length();s<0&&(a=-a),In.copy(this);let l=1/a,h=1/o,u=1/c;return In.elements[0]*=l,In.elements[1]*=l,In.elements[2]*=l,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=u,In.elements[9]*=u,In.elements[10]*=u,t.setFromRotationMatrix(In),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,i,s,a,o=Un,c=!1){let l=this.elements,h=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),g,b;if(c)g=s/(a-s),b=a*s/(a-s);else if(o===Un)g=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(o===Vs)g=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Un,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),g,b;if(c)g=1/(a-s),b=a/(a-s);else if(o===Un)g=-2/(a-s),b=-(a+s)/(a-s);else if(o===Vs)g=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Lo.prototype.isMatrix4=!0;var Ue=Lo,As=new R,In=new Ue,ep=new R(0,0,0),tp=new R(1,1,1),Ci=new R,La=new R,dn=new R,hu=new Ue,uu=new Ft,Zt=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uu.setFromEuler(this),this.setFromQuaternion(uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zt.DEFAULT_ORDER="XYZ";var js=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},np=0,du=new R,Rs=new Ft,si=new Ue,Da=new R,Rr=new R,ip=new R,sp=new Ft,fu=new R(1,0,0),pu=new R(0,1,0),mu=new R(0,0,1),gu={type:"added"},rp={type:"removed"},Cs={type:"childadded",child:null},Jc={type:"childremoved",child:null},dt=class r extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new R,t=new Zt,n=new Ft,i=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Oe}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(fu,e)}rotateY(e){return this.rotateOnAxis(pu,e)}rotateZ(e){return this.rotateOnAxis(mu,e)}translateOnAxis(e,t){return du.copy(e).applyQuaternion(this.quaternion),this.position.add(du.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fu,e)}translateY(e){return this.translateOnAxis(pu,e)}translateZ(e){return this.translateOnAxis(mu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Da.copy(e):Da.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Rr,Da,this.up):si.lookAt(Da,Rr,this.up),this.quaternion.setFromRotationMatrix(si),i&&(si.extractRotation(i.matrixWorld),Rs.setFromRotationMatrix(si),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Fe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gu),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rp),Jc.child=e,this.dispatchEvent(Jc),Jc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gu),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,ip),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,sp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};dt.DEFAULT_UP=new R(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ve=class extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ap={type:"move"},Ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,n),p=this._getHandJoint(l,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ap)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ve;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function Zc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ge.workingColorSpace){if(e=Hl(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Zc(a,s,e+1/3),this.g=Zc(a,s,e),this.b=Zc(a,s,e-1/3)}return Ge.colorSpaceToWorking(this,i),this}setStyle(e,t=rt){function n(s){s!==void 0&&parseFloat(s)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rt){let n=Pd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rt){return Ge.workingToColorSpace(Jt.copy(this),e),Math.round($e(Jt.r*255,0,255))*65536+Math.round($e(Jt.g*255,0,255))*256+Math.round($e(Jt.b*255,0,255))}getHexString(e=rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(Jt.copy(this),t);let n=Jt.r,i=Jt.g,s=Jt.b,a=Math.max(n,i,s),o=Math.min(n,i,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=rt){Ge.workingToColorSpace(Jt.copy(this),e);let t=Jt.r,n=Jt.g,i=Jt.b;return e!==rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(Fa);let n=Or(Pi.h,Fa.h,t),i=Or(Pi.s,Fa.s,t),s=Or(Pi.l,Fa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new pe;pe.NAMES=Pd;var Gr=class r{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new pe(e),this.density=t}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ui=class extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zt,this.environmentIntensity=1,this.environmentRotation=new Zt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ln=new R,ri=new R,$c=new R,ai=new R,Ps=new R,Is=new R,bu=new R,Qc=new R,el=new R,tl=new R,nl=new ut,il=new ut,sl=new ut,Ni=class r{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ln.subVectors(e,t),i.cross(Ln);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ln.subVectors(i,t),ri.subVectors(n,t),$c.subVectors(e,t);let a=Ln.dot(Ln),o=Ln.dot(ri),c=Ln.dot($c),l=ri.dot(ri),h=ri.dot($c),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ai.x),c.addScaledVector(a,ai.y),c.addScaledVector(o,ai.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return nl.setScalar(0),il.setScalar(0),sl.setScalar(0),nl.fromBufferAttribute(e,t),il.fromBufferAttribute(e,n),sl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(nl,s.x),a.addScaledVector(il,s.y),a.addScaledVector(sl,s.z),a}static isFrontFacing(e,t,n,i){return Ln.subVectors(n,t),ri.subVectors(e,t),Ln.cross(ri).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Ln.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Ps.subVectors(i,n),Is.subVectors(s,n),Qc.subVectors(e,n);let c=Ps.dot(Qc),l=Is.dot(Qc);if(c<=0&&l<=0)return t.copy(n);el.subVectors(e,i);let h=Ps.dot(el),u=Is.dot(el);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Ps,a);tl.subVectors(e,s);let f=Ps.dot(tl),g=Is.dot(tl);if(g>=0&&f<=g)return t.copy(s);let b=f*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Is,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return bu.subVectors(s,i),o=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(bu,o);let p=1/(m+b+d);return a=b*p,o=d*p,t.copy(n).addScaledVector(Ps,a).addScaledVector(Is,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},rn=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Dn):Dn.fromBufferAttribute(s,a),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Na.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Na.copy(n.boundingBox)),Na.applyMatrix4(e.matrixWorld),this.union(Na)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),Ua.subVectors(this.max,Cr),Ls.subVectors(e.a,Cr),Ds.subVectors(e.b,Cr),Fs.subVectors(e.c,Cr),Ii.subVectors(Ds,Ls),Li.subVectors(Fs,Ds),Yi.subVectors(Ls,Fs);let t=[0,-Ii.z,Ii.y,0,-Li.z,Li.y,0,-Yi.z,Yi.y,Ii.z,0,-Ii.x,Li.z,0,-Li.x,Yi.z,0,-Yi.x,-Ii.y,Ii.x,0,-Li.y,Li.x,0,-Yi.y,Yi.x,0];return!rl(t,Ls,Ds,Fs,Ua)||(t=[1,0,0,0,1,0,0,0,1],!rl(t,Ls,Ds,Fs,Ua))?!1:(Oa.crossVectors(Ii,Li),t=[Oa.x,Oa.y,Oa.z],rl(t,Ls,Ds,Fs,Ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},oi=[new R,new R,new R,new R,new R,new R,new R,new R],Dn=new R,Na=new rn,Ls=new R,Ds=new R,Fs=new R,Ii=new R,Li=new R,Yi=new R,Cr=new R,Ua=new R,Oa=new R,Ji=new R;function rl(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ji.fromArray(r,s);let o=i.x*Math.abs(Ji.x)+i.y*Math.abs(Ji.y)+i.z*Math.abs(Ji.z),c=e.dot(Ji),l=t.dot(Ji),h=n.dot(Ji);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Dt=new R,Ba=new Ee,op=0,vt=class extends Bn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:op++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=kl,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ba.fromBufferAttribute(this,t),Ba.applyMatrix3(e),this.setXY(t,Ba.x,Ba.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Vr=class extends vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Wr=class extends vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ze=class extends vt{constructor(e,t,n){super(new Float32Array(e),t,n)}},cp=new rn,Pr=new R,al=new R,$t=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):cp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pr.subVectors(e,this.center);let t=Pr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Pr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(al.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pr.copy(e.center).add(al)),this.expandByPoint(Pr.copy(e.center).sub(al))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},lp=0,vn=new Ue,ol=new dt,Ns=new R,fn=new rn,Ir=new rn,Wt=new R,ct=class r extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Df(e)?Wr:Vr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Oe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return ol.lookAt(e),ol.updateMatrix(),this.applyMatrix4(ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ze(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $t);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Ir.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(fn.min,Ir.min),fn.expandByPoint(Wt),Wt.addVectors(fn.max,Ir.max),fn.expandByPoint(Wt)):(fn.expandByPoint(Ir.min),fn.expandByPoint(Ir.max))}fn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Wt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Wt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Wt.fromBufferAttribute(o,l),c&&(Ns.fromBufferAttribute(e,l),Wt.add(Ns)),i=Math.max(i,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new vt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new R,c[_]=new R;let l=new R,h=new R,u=new R,d=new Ee,f=new Ee,g=new Ee,b=new R,m=new R;function p(_,w,C){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,C),d.fromBufferAttribute(s,_),f.fromBufferAttribute(s,w),g.fromBufferAttribute(s,C),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),o[_].add(b),o[w].add(b),o[C].add(b),c[_].add(m),c[w].add(m),c[C].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let _=0,w=v.length;_<w;++_){let C=v[_],D=C.start,F=C.count;for(let k=D,I=D+F;k<I;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let E=new R,x=new R,M=new R,S=new R;function A(_){M.fromBufferAttribute(i,_),S.copy(M);let w=o[_];E.copy(w),E.sub(M.multiplyScalar(M.dot(w))).normalize(),x.crossVectors(S,w);let D=x.dot(c[_])<0?-1:1;a.setXYZW(_,E.x,E.y,E.z,D)}for(let _=0,w=v.length;_<w;++_){let C=v[_],D=C.start,F=C.count;for(let k=D,I=D+F;k<I;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new R,s=new R,a=new R,o=new R,c=new R,l=new R,h=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),b=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new vt(d,h,u)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ys=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=kl,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},nn=new R,Js=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){zr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){zr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},cl=new R,hp=new R,up=new Oe,Fn=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=cl.subVectors(n,t).cross(hp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(cl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||up.getNormalMatrix(e),i=this.coplanarPoint(cl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},dp=0,an=class extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=On(),this.name="",this.type="Material",this.blending=ki,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cl,this.blendDst=Pl,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_d,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=so,this.stencilZFail=so,this.stencilZPass=so,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Fn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ee().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ee().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ci=new R,ll=new R,ka=new R,za=new R,Ui=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ll.copy(e).add(t).multiplyScalar(.5),ka.copy(t).sub(e).normalize(),za.copy(this.origin).sub(ll);let s=e.distanceTo(t)*.5,a=-this.direction.dot(ka),o=za.dot(this.direction),c=-za.dot(ka),l=za.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=s*h,u>=0)if(d>=-g)if(d<=g){let b=1/h;u*=b,d*=b,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ll).addScaledVector(ka,d),f}intersectSphere(e,t){if(e.radius<0)return null;ci.subVectors(e.center,this.origin);let n=ci.dot(this.direction),i=ci.dot(ci)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,i,s){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,b=t.y-a.y,m=t.z-a.z,p=n.x-a.x,v=n.y-a.y,E=n.z-a.z,x=Math.abs(c),M=Math.abs(l),S=Math.abs(h),A,_,w,C,D,F,k,I,B,W,L,q;if(x>=M&&x>=S?(w=c,F=u,B=g,q=p,c>=0?(A=l,_=h,C=d,D=f,k=b,I=m,W=v,L=E):(A=h,_=l,C=f,D=d,k=m,I=b,W=E,L=v)):M>=S?(w=l,F=d,B=b,q=v,l>=0?(A=h,_=c,C=f,D=u,k=m,I=g,W=E,L=p):(A=c,_=h,C=u,D=f,k=g,I=m,W=p,L=E)):(w=h,F=f,B=m,q=E,h>=0?(A=c,_=l,C=u,D=d,k=g,I=b,W=p,L=v):(A=l,_=c,C=d,D=u,k=b,I=g,W=v,L=p)),w===0)return null;let H=A/w,X=_/w,$=1/w,se=C-H*F,ge=D-X*F,et=k-H*B,ke=I-X*B,je=W-H*q,Y=L-X*q,te=je*ke-Y*et,be=se*Y-ge*je,Ne=et*ge-ke*se;if(i){if(te<0||be<0||Ne<0)return null}else if((te<0||be<0||Ne<0)&&(te>0||be>0||Ne>0))return null;let _e=te+be+Ne;if(_e===0)return null;let Ke=$*(te*F+be*B+Ne*q);return(_e>0?Ke<0:Ke>0)?null:this.at(Ke/_e,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},St=class extends an{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=Do,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},xu=new Ue,Zi=new Ui,Ha=new $t,_u=new R,Ga=new R,Va=new R,Wa=new R,hl=new R,qa=new R,vu=new R,Xa=new R,ye=class extends dt{constructor(e=new ct,t=new St){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){qa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(hl.fromBufferAttribute(u,e),a?qa.addScaledVector(hl,h):qa.addScaledVector(hl.sub(t),h))}t.add(qa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(s),Zi.copy(e.ray).recast(e.near),!(Ha.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(Ha,_u)===null||Zi.origin.distanceToSquared(_u)>(e.far-e.near)**2))&&(xu.copy(s).invert(),Zi.copy(e.ray).applyMatrix4(xu),!(n.boundingBox!==null&&Zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,M=E;x<M;x+=3){let S=o.getX(x),A=o.getX(x+1),_=o.getX(x+2);i=ja(this,p,e,n,l,h,u,S,A,_),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let v=o.getX(m),E=o.getX(m+1),x=o.getX(m+2);i=ja(this,a,e,n,l,h,u,v,E,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,M=E;x<M;x+=3){let S=x,A=x+1,_=x+2;i=ja(this,p,e,n,l,h,u,S,A,_),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let v=m,E=m+1,x=m+2;i=ja(this,a,e,n,l,h,u,v,E,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function fp(r,e,t,n,i,s,a,o){let c;if(e.side===Bt?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===$n,o),c===null)return null;Xa.copy(o),Xa.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(Xa);return l<t.near||l>t.far?null:{distance:l,point:Xa.clone(),object:r}}function ja(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,Ga),r.getVertexPosition(c,Va),r.getVertexPosition(l,Wa);let h=fp(r,e,t,n,Ga,Va,Wa,vu);if(h){let u=new R;Ni.getBarycoord(vu,Ga,Va,Wa,u),i&&(h.uv=Ni.getInterpolatedAttribute(i,o,c,l,u,new Ee)),s&&(h.uv1=Ni.getInterpolatedAttribute(s,o,c,l,u,new Ee)),a&&(h.normal=Ni.getInterpolatedAttribute(a,o,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new R,materialIndex:0};Ni.getNormal(Ga,Va,Wa,d.normal),h.face=d,h.barycoord=u}return h}var Lr=new ut,yu=new ut,Mu=new ut,pp=new ut,Su=new Ue,Ka=new R,ul=new $t,Tu=new Ue,dl=new Ui,qr=class extends ye{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=gl,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new rn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ka),this.boundingBox.expandByPoint(Ka)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new $t),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ka),this.boundingSphere.expandByPoint(Ka)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ul.copy(this.boundingSphere),ul.applyMatrix4(i),e.ray.intersectsSphere(ul)!==!1&&(Tu.copy(i).invert(),dl.copy(e.ray).applyMatrix4(Tu),!(this.boundingBox!==null&&dl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,dl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ut,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===gl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===fd?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ae("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;yu.fromBufferAttribute(i.attributes.skinIndex,e),Mu.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Lr.copy(t),t.set(0,0,0,0)):(Lr.set(...t,1),t.set(0,0,0)),Lr.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let a=Mu.getComponent(s);if(a!==0){let o=yu.getComponent(s);Su.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(pp.copy(Lr).applyMatrix4(Su),a)}}return t.isVector4&&(t.w=Lr.w),t.applyMatrix4(this.bindMatrixInverse)}},Zs=class extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}},$s=class extends Ut{constructor(e=null,t=1,n=1,i,s,a,o,c,l=Rt,h=Rt,u,d){super(null,a,o,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Eu=new Ue,mp=new Ue,Xr=class r{constructor(e=[],t=[]){this.uuid=On(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ae("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:mp;Eu.multiplyMatrices(o,t[s]),Eu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new $s(t,e,e,bn,gn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],a=t[s];a===void 0&&(Ae("Skeleton: No bone found with UUID:",s),a=new Zs),this.bones.push(a),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},di=class extends vt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Us=new Ue,wu=new Ue,Ya=[],Au=new rn,gp=new Ue,Dr=new ye,Fr=new $t,Kn=class extends ye{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new di(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,gp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new rn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Us),Au.copy(e.boundingBox).applyMatrix4(Us),this.boundingBox.union(Au)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $t),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Us),Fr.copy(e.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(Fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Dr.geometry=this.geometry,Dr.material=this.material,Dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fr.copy(this.boundingSphere),Fr.applyMatrix4(n),e.ray.intersectsSphere(Fr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Us),wu.multiplyMatrices(n,Us),Dr.matrixWorld=wu,Dr.raycast(e,Ya);for(let a=0,o=Ya.length;a<o;a++){let c=Ya[a];c.instanceId=s,c.object=this,t.push(c)}Ya.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new di(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new $s(new Float32Array(i*this.count),i,this.count,zo,gn));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},$i=new $t,bp=new Ee(.5,.5),Ja=new R,Qs=class{constructor(e=new Fn,t=new Fn,n=new Fn,i=new Fn,s=new Fn,a=new Fn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Un,n=!1){let i=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],d=s[6],f=s[7],g=s[8],b=s[9],m=s[10],p=s[11],v=s[12],E=s[13],x=s[14],M=s[15];if(i[0].setComponents(l-a,f-h,p-g,M-v).normalize(),i[1].setComponents(l+a,f+h,p+g,M+v).normalize(),i[2].setComponents(l+o,f+u,p+b,M+E).normalize(),i[3].setComponents(l-o,f-u,p-b,M-E).normalize(),n)i[4].setComponents(c,d,m,x).normalize(),i[5].setComponents(l-c,f-d,p-m,M-x).normalize();else if(i[4].setComponents(l-c,f-d,p-m,M-x).normalize(),t===Un)i[5].setComponents(l+c,f+d,p+m,M+x).normalize();else if(t===Vs)i[5].setComponents(c,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(e){$i.center.set(0,0,0);let t=bp.distanceTo(e.center);return $i.radius=.7071067811865476+t,$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ja.x=i.normal.x>0?e.max.x:e.min.x,Ja.y=i.normal.y>0?e.max.y:e.min.y,Ja.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ja)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var er=class extends an{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},bo=new R,xo=new R,Ru=new Ue,Nr=new Ui,Za=new $t,fl=new R,Cu=new R,rs=class extends dt{constructor(e=new ct,t=new er){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)bo.fromBufferAttribute(t,i-1),xo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=bo.distanceTo(xo);e.setAttribute("lineDistance",new ze(n,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(i),Za.radius+=s,e.ray.intersectsSphere(Za)===!1)return;Ru.copy(i).invert(),Nr.copy(e.ray).applyMatrix4(Ru);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let b=f,m=g-1;b<m;b+=l){let p=h.getX(b),v=h.getX(b+1),E=$a(this,e,Nr,c,p,v,b);E&&t.push(E)}if(this.isLineLoop){let b=h.getX(g-1),m=h.getX(f),p=$a(this,e,Nr,c,b,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let b=f,m=g-1;b<m;b+=l){let p=$a(this,e,Nr,c,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){let b=$a(this,e,Nr,c,g-1,f,g-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function $a(r,e,t,n,i,s,a){let o=r.geometry.attributes.position;if(bo.fromBufferAttribute(o,i),xo.fromBufferAttribute(o,s),t.distanceSqToSegment(bo,xo,fl,Cu)>n)return;fl.applyMatrix4(r.matrixWorld);let l=e.ray.origin.distanceTo(fl);if(!(l<e.near||l>e.far))return{distance:l,point:Cu.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}var Pu=new R,Iu=new R,jr=class extends rs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Pu.fromBufferAttribute(t,i),Iu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Pu.distanceTo(Iu);e.setAttribute("lineDistance",new ze(n,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Kr=class extends rs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},tr=class extends an{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Lu=new Ue,xl=new Ui,Qa=new $t,eo=new R,as=class extends dt{constructor(e=new ct,t=new tr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(i),Qa.radius+=s,e.ray.intersectsSphere(Qa)===!1)return;Lu.copy(i).invert(),xl.copy(e.ray).applyMatrix4(Lu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,b=f;g<b;g++){let m=l.getX(g);eo.fromBufferAttribute(u,m),Du(eo,m,c,i,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,b=f;g<b;g++)eo.fromBufferAttribute(u,g),Du(eo,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Du(r,e,t,n,i,s,a){let o=xl.distanceSqToPoint(r);if(o<t){let c=new R;xl.closestPointToPoint(r,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Yr=class extends Ut{constructor(e=[],t=zi,n,i,s,a,o,c,l,h){super(e,t,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qt=class extends Ut{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Oi=class extends Ut{constructor(e,t,n=Gn,i,s,a,o=Rt,c=Rt,l,h=jn,u=1){if(h!==jn&&h!==Hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},_o=class extends Oi{constructor(e,t=Gn,n=zi,i,s,a=Rt,o=Rt,c,l=jn){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,s,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Jr=class extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Be=class r extends ct{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new ze(l,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(u,2));function g(b,m,p,v,E,x,M,S,A,_,w){let C=x/A,D=M/_,F=x/2,k=M/2,I=S/2,B=A+1,W=_+1,L=0,q=0,H=new R;for(let X=0;X<W;X++){let $=X*D-k;for(let se=0;se<B;se++){let ge=se*C-F;H[b]=ge*v,H[m]=$*E,H[p]=I,l.push(H.x,H.y,H.z),H[b]=0,H[m]=0,H[p]=S>0?1:-1,h.push(H.x,H.y,H.z),u.push(se/A),u.push(1-X/_),L+=1}}for(let X=0;X<_;X++)for(let $=0;$<A;$++){let se=d+$+B*X,ge=d+$+B*(X+1),et=d+($+1)+B*(X+1),ke=d+($+1)+B*X;c.push(se,ge,ke),c.push(ge,et,ke),q+=6}o.addGroup(f,q,w),f+=q,d+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Mn=class r extends ct{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));let a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,g=n*2+s,b=i+1,m=new R,p=new R;for(let v=0;v<=g;v++){let E=0,x=0,M=0,S=0;if(v<=n){let w=v/n,C=w*Math.PI/2;x=-h-e*Math.cos(C),M=e*Math.sin(C),S=-e*Math.cos(C),E=w*u}else if(v<=n+s){let w=(v-n)/s;x=-h+w*t,M=e,S=0,E=u+w*d}else{let w=(v-n-s)/n,C=w*Math.PI/2;x=h+e*Math.sin(C),M=e*Math.cos(C),S=e*Math.sin(C),E=u+d+w*u}let A=Math.max(0,Math.min(1,E/f)),_=0;v===0?_=.5/i:v===g&&(_=-.5/i);for(let w=0;w<=i;w++){let C=w/i,D=C*Math.PI*2,F=Math.sin(D),k=Math.cos(D);p.x=-M*k,p.y=x,p.z=M*F,o.push(p.x,p.y,p.z),m.set(-M*k,S,M*F),m.normalize(),c.push(m.x,m.y,m.z),l.push(C+_,A)}if(v>0){let w=(v-1)*b;for(let C=0;C<i;C++){let D=w+C,F=w+C+1,k=v*b+C,I=v*b+C+1;a.push(D,F,k),a.push(F,I,k)}}}this.setIndex(a),this.setAttribute("position",new ze(o,3)),this.setAttribute("normal",new ze(c,3)),this.setAttribute("uv",new ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},fi=class r extends ct{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new R,h=new Ee;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ze(a,3)),this.setAttribute("normal",new ze(o,3)),this.setAttribute("uv",new ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},nt=class r extends ct{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],f=[],g=0,b=[],m=n/2,p=0;v(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ze(u,3)),this.setAttribute("normal",new ze(d,3)),this.setAttribute("uv",new ze(f,2));function v(){let x=new R,M=new R,S=0,A=(t-e)/n;for(let _=0;_<=s;_++){let w=[],C=_/s,D=C*(t-e)+e;for(let F=0;F<=i;F++){let k=F/i,I=k*c+o,B=Math.sin(I),W=Math.cos(I);M.x=D*B,M.y=-C*n+m,M.z=D*W,u.push(M.x,M.y,M.z),x.set(B,A,W).normalize(),d.push(x.x,x.y,x.z),f.push(k,1-C),w.push(g++)}b.push(w)}for(let _=0;_<i;_++)for(let w=0;w<s;w++){let C=b[w][_],D=b[w+1][_],F=b[w+1][_+1],k=b[w][_+1];(e>0||w!==0)&&(h.push(C,D,k),S+=3),(t>0||w!==s-1)&&(h.push(D,F,k),S+=3)}l.addGroup(p,S,0),p+=S}function E(x){let M=g,S=new Ee,A=new R,_=0,w=x===!0?e:t,C=x===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*C,0),d.push(0,C,0),f.push(.5,.5),g++;let D=g;for(let F=0;F<=i;F++){let I=F/i*c+o,B=Math.cos(I),W=Math.sin(I);A.x=w*W,A.y=m*C,A.z=w*B,u.push(A.x,A.y,A.z),d.push(0,C,0),S.x=B*.5+.5,S.y=W*.5*C+.5,f.push(S.x,S.y),g++}for(let F=0;F<i;F++){let k=M+F,I=D+F;x===!0?h.push(I,I+1,k):h.push(I+1,I,k),_+=3}l.addGroup(p,_,x===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},pi=class r extends nt{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},vo=class r extends ct{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];o(i),l(n),h(),this.setAttribute("position",new ze(s,3)),this.setAttribute("normal",new ze(s.slice(),3)),this.setAttribute("uv",new ze(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let E=new R,x=new R,M=new R;for(let S=0;S<t.length;S+=3)f(t[S+0],E),f(t[S+1],x),f(t[S+2],M),c(E,x,M,v)}function c(v,E,x,M){let S=M+1,A=[];for(let _=0;_<=S;_++){A[_]=[];let w=v.clone().lerp(x,_/S),C=E.clone().lerp(x,_/S),D=S-_;for(let F=0;F<=D;F++)F===0&&_===S?A[_][F]=w:A[_][F]=w.clone().lerp(C,F/D)}for(let _=0;_<S;_++)for(let w=0;w<2*(S-_)-1;w++){let C=Math.floor(w/2);w%2===0?(d(A[_][C+1]),d(A[_+1][C]),d(A[_][C])):(d(A[_][C+1]),d(A[_+1][C+1]),d(A[_+1][C]))}}function l(v){let E=new R;for(let x=0;x<s.length;x+=3)E.x=s[x+0],E.y=s[x+1],E.z=s[x+2],E.normalize().multiplyScalar(v),s[x+0]=E.x,s[x+1]=E.y,s[x+2]=E.z}function h(){let v=new R;for(let E=0;E<s.length;E+=3){v.x=s[E+0],v.y=s[E+1],v.z=s[E+2];let x=m(v)/2/Math.PI+.5,M=p(v)/Math.PI+.5;a.push(x,1-M)}g(),u()}function u(){for(let v=0;v<a.length;v+=6){let E=a[v+0],x=a[v+2],M=a[v+4],S=Math.max(E,x,M),A=Math.min(E,x,M);S>.9&&A<.1&&(E<.2&&(a[v+0]+=1),x<.2&&(a[v+2]+=1),M<.2&&(a[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function f(v,E){let x=v*3;E.x=e[x+0],E.y=e[x+1],E.z=e[x+2]}function g(){let v=new R,E=new R,x=new R,M=new R,S=new Ee,A=new Ee,_=new Ee;for(let w=0,C=0;w<s.length;w+=9,C+=6){v.set(s[w+0],s[w+1],s[w+2]),E.set(s[w+3],s[w+4],s[w+5]),x.set(s[w+6],s[w+7],s[w+8]),S.set(a[C+0],a[C+1]),A.set(a[C+2],a[C+3]),_.set(a[C+4],a[C+5]),M.copy(v).add(E).add(x).divideScalar(3);let D=m(M);b(S,C+0,v,D),b(A,C+2,E,D),b(_,C+4,x,D)}}function b(v,E,x,M){M<0&&v.x===1&&(a[E]=v.x-1),x.x===0&&x.z===0&&(a[E]=M/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.detail)}},Zr=class r extends vo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}};var Ot=class r extends ct{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],b=[],m=[];for(let p=0;p<h;p++){let v=p*d-a;for(let E=0;E<l;E++){let x=E*u-s;g.push(x,-v,0),b.push(0,0,1),m.push(E/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){let E=v+l*p,x=v+l*(p+1),M=v+1+l*(p+1),S=v+1+l*p;f.push(E,x,S),f.push(x,M,S)}this.setIndex(f),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(b,3)),this.setAttribute("uv",new ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},os=class r extends ct{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/i,f=new R,g=new Ee;for(let b=0;b<=i;b++){for(let m=0;m<=n;m++){let p=s+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let b=0;b<i;b++){let m=b*(n+1);for(let p=0;p<n;p++){let v=p+m,E=v,x=v+n+1,M=v+n+2,S=v+1;o.push(E,x,S),o.push(x,M,S)}}this.setIndex(o),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(l,3)),this.setAttribute("uv",new ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Xt=class r extends ct{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new R,d=new R,f=[],g=[],b=[],m=[];for(let p=0;p<=n;p++){let v=[],E=p/n,x=a+E*o,M=e*Math.cos(x),S=Math.sqrt(e*e-M*M),A=0;p===0&&a===0?A=.5/t:p===n&&c===Math.PI&&(A=-.5/t);for(let _=0;_<=t;_++){let w=_/t,C=i+w*s;u.x=-S*Math.cos(C),u.y=M,u.z=S*Math.sin(C),g.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),m.push(w+A,1-E),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let E=h[p][v+1],x=h[p][v],M=h[p+1][v],S=h[p+1][v+1];(p!==0||a>0)&&f.push(E,x,S),(p!==n-1||c<Math.PI)&&f.push(x,M,S)}this.setIndex(f),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(b,3)),this.setAttribute("uv",new ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var kn=class r extends ct{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],h=[],u=[],d=new R,f=new R,g=new R;for(let b=0;b<=n;b++){let m=a+b/n*o;for(let p=0;p<=i;p++){let v=p/i*s;f.x=(e+t*Math.cos(m))*Math.cos(v),f.y=(e+t*Math.cos(m))*Math.sin(v),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/i),u.push(b/n)}}for(let b=1;b<=n;b++)for(let m=1;m<=i;m++){let p=(i+1)*b+m-1,v=(i+1)*(b-1)+m-1,E=(i+1)*(b-1)+m,x=(i+1)*b+m;c.push(p,v,x),c.push(v,E,x)}this.setIndex(c),this.setAttribute("position",new ze(l,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function vs(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];if(Fu(i))i.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Fu(i[0])){let s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function en(r){let e={};for(let t=0;t<r.length;t++){let n=vs(r[t]);for(let i in n)e[i]=n[i]}return e}function Fu(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function xp(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Vl(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}var Mi={clone:vs,merge:en},_p=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Tt=class extends an{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_p,this.fragmentShader=vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=xp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new pe().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ee().fromArray(i.value);break;case"v3":this.uniforms[n].value=new R().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ut().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Oe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ue().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},nr=class extends Tt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ie=class extends an{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xa,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ln=class extends Ie{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var $r=class extends an{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xa,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=Do,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},yo=class extends an{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Mo=class extends an{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Fi(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function ro(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function yp(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Nu(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function Mp(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}var Yn=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},So=class extends Yn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qi,endingEnd:Qi}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case es:s=e,o=2*t-n;break;case Br:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case es:a=e,c=2*n-t;break;case Br:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),b=g*g,m=b*g,p=-d*m+2*d*b-d*g,v=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,E=(-1-f)*m+(1.5+f)*b+.5*g,x=f*m-f*b;for(let M=0;M!==o;++M)s[M]=p*a[h+M]+v*a[l+M]+E*a[c+M]+x*a[u+M];return s}},Qr=class extends Yn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*u+a[c+d]*h;return s}},To=class extends Yn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Eo=class extends Yn{interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(i-t),b=1-g;for(let m=0;m!==o;++m)s[m]=a[l+m]*b+a[c+m]*g;return s}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let b=a[l+g],m=a[c+g],p=f*d+g*2,v=u[p],E=u[p+1],x=e*d+g*2,M=h[x],S=h[x+1],A=Tp(n,t,v,M,i);s[g]=Id(A,b,E,S,m)}return s}};function Id(r,e,t,n,i){let s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function Sp(r,e,t,n,i){let s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function Tp(r,e,t,n,i){let s=(r-e)/(i-e);for(let a=0;a<8;a++){let o=Id(s,e,t,n,i)-r;if(Math.abs(o)<1e-10)break;let c=Sp(s,e,t,n,i);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var hn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fi(t,this.TimeBufferType),this.values=Fi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fi(e.times,Array),values:Fi(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),ro(e.settings)&&(n.settings={inTangents:Fi(e.settings.inTangents,Array),outTangents:Fi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new To(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new So(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Eo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ns:t=this.InterpolantFactoryMethodDiscrete;break;case is:t=this.InterpolantFactoryMethodLinear;break;case io:t=this.InterpolantFactoryMethodSmooth;break;case bl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ae("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ns;case this.InterpolantFactoryMethodLinear:return is;case this.InterpolantFactoryMethodSmooth:return io;case this.InterpolantFactoryMethodBezier:return bl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;ro(this.settings)&&(Uu(this.settings.inTangents,e),Uu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Fe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Fe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Fe("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Fe("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Ff(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){Fe("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===io,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let b=t[u+g];if(b!==t[d+g]||b!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,ro(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Uu(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=is;var mi=class extends hn{constructor(e,t,n){super(e,t,n)}};mi.prototype.ValueTypeName="bool";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=ns;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var ea=class extends hn{constructor(e,t,n,i){super(e,t,n,i)}};ea.prototype.ValueTypeName="color";var gi=class extends hn{constructor(e,t,n,i){super(e,t,n,i)}};gi.prototype.ValueTypeName="number";var wo=class extends Yn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)Ft.slerpFlat(s,0,a,l-o,a,l,c);return s}},bi=class extends hn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new wo(this.times,this.values,this.getValueSize(),e)}};bi.prototype.ValueTypeName="quaternion";bi.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends hn{constructor(e,t,n){super(e,t,n)}};xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=ns;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends hn{constructor(e,t,n,i){super(e,t,n,i)}};Bi.prototype.ValueTypeName="vector";var cs=class{constructor(e="",t=-1,n=[],i=vc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=On(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(wp(n[a]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(hn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);let h=yp(c);c=Nu(c,1,h),l=Nu(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new gi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(s);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Ep(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return gi;case"vector":case"vector2":case"vector3":case"vector4":return Bi;case"color":return ea;case"quaternion":return bi;case"bool":case"boolean":return mi;case"string":return xi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function wp(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Ep(r.type);if(r.times===void 0){let n=[],i=[];Mp(r.keys,n,i,"value"),r.times=n,r.values=i}let t;return e.parse!==void 0?t=e.parse(r):t=new e(r.name,r.times,r.values,r.interpolation),ro(r.settings)&&(t.settings={inTangents:Fi(r.settings.inTangents,Float32Array),outTangents:Fi(r.settings.outTangents,Float32Array)}),t}var Xn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(Ou(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!Ou(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function Ou(r){try{let e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var ir=class{constructor(e,t,n){let i=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ld=new ir,Jn=class{constructor(e){this.manager=e!==void 0?e:Ld,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Jn.DEFAULT_MATERIAL_NAME="__DEFAULT";var li={},_l=class extends Error{constructor(e,t){super(e),this.response=t}},sr=class extends Jn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Xn.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(li[e]!==void 0){li[e].push({onLoad:t,onProgress:n,onError:i});return}li[e]=[],li[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ae("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=li[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,b=0,m=new ReadableStream({start(p){v();function v(){u.read().then(({done:E,value:x})=>{if(E)p.close();else{b+=x.byteLength;let M=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:f});for(let S=0,A=h.length;S<A;S++){let _=h[S];_.onProgress&&_.onProgress(M)}p.enqueue(x),v()}},E=>{p.error(E)})}}});return new Response(m)}else throw new _l(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Xn.add(`file:${e}`,l);let h=li[e];delete li[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=li[e];if(h===void 0)throw this.manager.itemError(e),l;delete li[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Os=new WeakMap,Ao=class extends Jn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Xn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Os.get(a);u===void 0&&(u=[],Os.set(a,u)),u.push({onLoad:t,onError:i})}return a}let o=Ws("img");function c(){h(),t&&t(this);let u=Os.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Os.delete(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),Xn.remove(`image:${e}`);let d=Os.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}Os.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Xn.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var ls=class extends Jn{constructor(e){super(e)}load(e,t,n,i){let s=new Ut,a=new Ao(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},hs=class extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},us=class extends hs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},pl=new Ue,Bu=new R,ku=new R,rr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qs,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Bu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bu),ku.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ku),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){pl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(pl,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,c=i?i.x/s.x:0,l=i?i.y/s.y:0;e.coordinateSystem===Vs||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(pl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},to=new R,no=new Ft,qn=new R,ta=class extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(to,no,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(to,no,qn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(to,no,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(to,no,qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Di=new R,zu=new Ee,Hu=new Ee,Et=class extends ta{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,t){return this.getViewBounds(e,zu,Hu),t.subVectors(Hu,zu)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ur*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},vl=class extends rr{constructor(){super(new Et(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ss*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},_i=class extends hs{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new vl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},yl=class extends rr{constructor(){super(new Et(90,1,.5,500)),this.isPointLightShadow=!0}},Qt=class extends hs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new yl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Zn=class extends ta{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ml=class extends rr{constructor(){super(new Zn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ds=class extends hs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Ml}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var vi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ml=new WeakMap,na=class extends Jn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ae("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ae("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Xn.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{ml.has(a)===!0?(i&&i(ml.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(l),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Xn.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),ml.set(c,l),Xn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Xn.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Bs=-90,ks=1,Ro=class extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Et(Bs,ks,e,t);i.layers=this.layers,this.add(i);let s=new Et(Bs,ks,e,t);s.layers=this.layers,this.add(s);let a=new Et(Bs,ks,e,t);a.layers=this.layers,this.add(a);let o=new Et(Bs,ks,e,t);o.layers=this.layers,this.add(o);let c=new Et(Bs,ks,e,t);c.layers=this.layers,this.add(c);let l=new Et(Bs,ks,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===Un)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Co=class extends Et{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ia=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ap.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ap(){this._document.hidden===!1&&this.reset()}var Po=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,s=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Ft.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){let a=this._workIndex*s;Ft.multiplyQuaternionsFlat(e,a,e,t,e,n),Ft.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){let a=1-i;for(let o=0;o!==s;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},Wl="\\[\\]\\.:\\/",Rp=new RegExp("["+Wl+"]","g"),ql="[^"+Wl+"]",Cp="[^"+Wl.replace("\\.","")+"]",Pp=/((?:WC+[\/:])*)/.source.replace("WC",ql),Ip=/(WCOD+)?/.source.replace("WCOD",Cp),Lp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ql),Dp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ql),Fp=new RegExp("^"+Pp+Ip+Lp+Dp+"$"),Np=["material","materials","bones","map"],Sl=class{constructor(e,t,n){let i=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},pt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Rp,"")}static parseTrackName(e){let t=Fp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Np.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Fe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;Fe("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pt.Composite=Sl;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Io=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let s=t.tracks,a=s.length,o=new Array(a),c={endingStart:Qi,endingEnd:Qi};for(let l=0;l!==a;++l){let h=s[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=pd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,s=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case gd:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case vc:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,s=this._loopCount,a=n===md;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===_s){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=s,this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=es,i.endingEnd=es):(e?i.endingStart=this.zeroSlopeAtStart?es:Qi:i.endingStart=Br,t?i.endingEnd=this.zeroSlopeAtEnd?es:Qi:i.endingEnd=Br)}_scheduleFading(e,t,n){let i=this._mixer,s=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}},Up=new Float32Array(1),fs=class extends Bn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){let d=i[u],f=d.name,g=h[f];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}let b=t&&t._propertyBindings[u].binding.parsedPath;g=new Po(pt.create(n,f,b),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,s=this._actionsByClip,a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,s=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Qr(new Float32Array(2),new Float32Array(2),1,Up),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let i=t||this._root,s=i.uuid,a=typeof e=="string"?cs.findByName(i,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=vc),c!==void 0){let u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new Io(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,s),h}existingAction(e,t){let n=t||this._root,i=n.uuid,s=typeof e=="string"?cs.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(let a in s){let o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Gu=new Ue,Sn=class{constructor(e,t,n=0,i=1/0){this.ray=new Ui(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Fe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Gu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gu),this}intersectObject(e,t=!0,n=[]){return Tl(e,this,n,t),n.sort(Vu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Tl(e[i],this,n,t);return n.sort(Vu),n}};function Vu(r,e){return r.distance-e.distance}function Tl(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)Tl(s[a],e,t,!0)}}var Zl=class Zl{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};Zl.prototype.isMatrix2=!0;var El=Zl;function Xl(r,e,t,n){let i=Op(n);switch(t){case Ul:return r*e;case zo:return r*e/i.components*i.byteLength;case Ho:return r*e/i.components*i.byteLength;case Gi:return r*e*2/i.components*i.byteLength;case Go:return r*e*2/i.components*i.byteLength;case Ol:return r*e*3/i.components*i.byteLength;case bn:return r*e*4/i.components*i.byteLength;case Vo:return r*e*4/i.components*i.byteLength;case ua:case da:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case fa:case pa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case qo:case jo:return Math.max(r,16)*Math.max(e,8)/4;case Wo:case Xo:return Math.max(r,8)*Math.max(e,8)/2;case Ko:case Yo:case Zo:case $o:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Jo:case ma:case Qo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ec:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case nc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ic:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case sc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case rc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ac:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case oc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case cc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case lc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case hc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case uc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case dc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case fc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case pc:case mc:case gc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case bc:case xc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ga:case _c:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Op(r){switch(r){case un:case Ll:return{byteLength:1,components:1};case cr:case Dl:case kt:return{byteLength:2,components:1};case Bo:case ko:return{byteLength:2,components:4};case Gn:case Oo:case gn:return{byteLength:4,components:1};case Fl:case Nl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function ef(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function kp(r){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(r.bindBuffer(l,o),u.length===0)r.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],b=u[f];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,u[d]=b)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let b=u[f];r.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}var zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Yp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$p=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,em=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,lm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,um=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",bm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,_m=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ym=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Em=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Am=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Im=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Lm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Dm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Um=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Om=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Bm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,km=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Vm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ym=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,i0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,r0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,l0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,h0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,u0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,d0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,f0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,g0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,b0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,v0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,S0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,T0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,E0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,w0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,R0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,P0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,F0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,N0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,k0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,z0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,j0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,K0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Y0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Q0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ng=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ig=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,og=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ug=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_g=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:zp,alphahash_pars_fragment:Hp,alphamap_fragment:Gp,alphamap_pars_fragment:Vp,alphatest_fragment:Wp,alphatest_pars_fragment:qp,aomap_fragment:Xp,aomap_pars_fragment:jp,batching_pars_vertex:Kp,batching_vertex:Yp,begin_vertex:Jp,beginnormal_vertex:Zp,bsdfs:$p,iridescence_fragment:Qp,bumpmap_pars_fragment:em,clipping_planes_fragment:tm,clipping_planes_pars_fragment:nm,clipping_planes_pars_vertex:im,clipping_planes_vertex:sm,color_fragment:rm,color_pars_fragment:am,color_pars_vertex:om,color_vertex:cm,common:lm,cube_uv_reflection_fragment:hm,defaultnormal_vertex:um,displacementmap_pars_vertex:dm,displacementmap_vertex:fm,emissivemap_fragment:pm,emissivemap_pars_fragment:mm,colorspace_fragment:gm,colorspace_pars_fragment:bm,envmap_fragment:xm,envmap_common_pars_fragment:_m,envmap_pars_fragment:vm,envmap_pars_vertex:ym,envmap_physical_pars_fragment:Lm,envmap_vertex:Mm,fog_vertex:Sm,fog_pars_vertex:Tm,fog_fragment:Em,fog_pars_fragment:wm,gradientmap_pars_fragment:Am,lightmap_pars_fragment:Rm,lights_lambert_fragment:Cm,lights_lambert_pars_fragment:Pm,lights_pars_begin:Im,lights_toon_fragment:Dm,lights_toon_pars_fragment:Fm,lights_phong_fragment:Nm,lights_phong_pars_fragment:Um,lights_physical_fragment:Om,lights_physical_pars_fragment:Bm,lights_fragment_begin:km,lights_fragment_maps:zm,lights_fragment_end:Hm,lightprobes_pars_fragment:Gm,logdepthbuf_fragment:Vm,logdepthbuf_pars_fragment:Wm,logdepthbuf_pars_vertex:qm,logdepthbuf_vertex:Xm,map_fragment:jm,map_pars_fragment:Km,map_particle_fragment:Ym,map_particle_pars_fragment:Jm,metalnessmap_fragment:Zm,metalnessmap_pars_fragment:$m,morphinstance_vertex:Qm,morphcolor_vertex:e0,morphnormal_vertex:t0,morphtarget_pars_vertex:n0,morphtarget_vertex:i0,normal_fragment_begin:s0,normal_fragment_maps:r0,normal_pars_fragment:a0,normal_pars_vertex:o0,normal_vertex:c0,normalmap_pars_fragment:l0,clearcoat_normal_fragment_begin:h0,clearcoat_normal_fragment_maps:u0,clearcoat_pars_fragment:d0,iridescence_pars_fragment:f0,opaque_fragment:p0,packing:m0,premultiplied_alpha_fragment:g0,project_vertex:b0,dithering_fragment:x0,dithering_pars_fragment:_0,roughnessmap_fragment:v0,roughnessmap_pars_fragment:y0,shadowmap_pars_fragment:M0,shadowmap_pars_vertex:S0,shadowmap_vertex:T0,shadowmask_pars_fragment:E0,skinbase_vertex:w0,skinning_pars_vertex:A0,skinning_vertex:R0,skinnormal_vertex:C0,specularmap_fragment:P0,specularmap_pars_fragment:I0,tonemapping_fragment:L0,tonemapping_pars_fragment:D0,transmission_fragment:F0,transmission_pars_fragment:N0,uv_pars_fragment:U0,uv_pars_vertex:O0,uv_vertex:B0,worldpos_vertex:k0,background_vert:z0,background_frag:H0,backgroundCube_vert:G0,backgroundCube_frag:V0,cube_vert:W0,cube_frag:q0,depth_vert:X0,depth_frag:j0,distance_vert:K0,distance_frag:Y0,equirect_vert:J0,equirect_frag:Z0,linedashed_vert:$0,linedashed_frag:Q0,meshbasic_vert:eg,meshbasic_frag:tg,meshlambert_vert:ng,meshlambert_frag:ig,meshmatcap_vert:sg,meshmatcap_frag:rg,meshnormal_vert:ag,meshnormal_frag:og,meshphong_vert:cg,meshphong_frag:lg,meshphysical_vert:hg,meshphysical_frag:ug,meshtoon_vert:dg,meshtoon_frag:fg,points_vert:pg,points_frag:mg,shadow_vert:gg,shadow_frag:bg,sprite_vert:xg,sprite_frag:_g},ue={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},ei={basic:{uniforms:en([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:en([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new pe(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:en([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:en([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:en([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new pe(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:en([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:en([ue.points,ue.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:en([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:en([ue.common,ue.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:en([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:en([ue.sprite,ue.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:en([ue.common,ue.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:en([ue.lights,ue.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};ei.physical={uniforms:en([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var Sc={r:0,b:0,g:0},vg=new Ue,tf=new Oe;tf.set(-1,0,0,0,1,0,0,0,1);function yg(r,e,t,n,i,s){let a=new pe(0),o=i===!0?0:1,c,l,h=null,u=0,d=null;function f(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){let x=v.backgroundBlurriness>0;E=e.get(E,x)}return E}function g(v){let E=!1,x=f(v);x===null?m(a,o):x&&x.isColor&&(m(x,1),E=!0);let M=r.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function b(v,E){let x=f(E);x&&(x.isCubeTexture||x.mapping===ha)?(l===void 0&&(l=new ye(new Be(1,1,1),new Tt({name:"BackgroundCubeMaterial",uniforms:vs(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(vg.makeRotationFromEuler(E.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(tf),l.material.toneMapped=Ge.getTransfer(x.colorSpace)!==st,(h!==x||u!==x.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,d=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ye(new Ot(2,2),new Tt({name:"BackgroundMaterial",uniforms:vs(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ge.getTransfer(x.colorSpace)!==st,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,d=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,E){v.getRGB(Sc,Vl(r)),t.buffers.color.setClear(Sc.r,Sc.g,Sc.b,E,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,E=1){a.set(v),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:b,dispose:p}}function Mg(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,a=!1;function o(D,F,k,I,B){let W=!1,L=u(D,I,k,F);s!==L&&(s=L,l(s.object)),W=f(D,I,k,B),W&&g(D,I,k,B),B!==null&&e.update(B,r.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,x(D,F,k,I),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return r.createVertexArray()}function l(D){return r.bindVertexArray(D)}function h(D){return r.deleteVertexArray(D)}function u(D,F,k,I){let B=I.wireframe===!0,W=n[F.id];W===void 0&&(W={},n[F.id]=W);let L=D.isInstancedMesh===!0?D.id:0,q=W[L];q===void 0&&(q={},W[L]=q);let H=q[k.id];H===void 0&&(H={},q[k.id]=H);let X=H[B];return X===void 0&&(X=d(c()),H[B]=X),X}function d(D){let F=[],k=[],I=[];for(let B=0;B<t;B++)F[B]=0,k[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:I,object:D,attributes:{},index:null}}function f(D,F,k,I){let B=s.attributes,W=F.attributes,L=0,q=k.getAttributes();for(let H in q)if(q[H].location>=0){let $=B[H],se=W[H];if(se===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(se=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(se=D.instanceColor)),$===void 0||$.attribute!==se||se&&$.data!==se.data)return!0;L++}return s.attributesNum!==L||s.index!==I}function g(D,F,k,I){let B={},W=F.attributes,L=0,q=k.getAttributes();for(let H in q)if(q[H].location>=0){let $=W[H];$===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&($=D.instanceColor));let se={};se.attribute=$,$&&$.data&&(se.data=$.data),B[H]=se,L++}s.attributes=B,s.attributesNum=L,s.index=I}function b(){let D=s.newAttributes;for(let F=0,k=D.length;F<k;F++)D[F]=0}function m(D){p(D,0)}function p(D,F){let k=s.newAttributes,I=s.enabledAttributes,B=s.attributeDivisors;k[D]=1,I[D]===0&&(r.enableVertexAttribArray(D),I[D]=1),B[D]!==F&&(r.vertexAttribDivisor(D,F),B[D]=F)}function v(){let D=s.newAttributes,F=s.enabledAttributes;for(let k=0,I=F.length;k<I;k++)F[k]!==D[k]&&(r.disableVertexAttribArray(k),F[k]=0)}function E(D,F,k,I,B,W,L){L===!0?r.vertexAttribIPointer(D,F,k,B,W):r.vertexAttribPointer(D,F,k,I,B,W)}function x(D,F,k,I){b();let B=I.attributes,W=k.getAttributes(),L=F.defaultAttributeValues;for(let q in W){let H=W[q];if(H.location>=0){let X=B[q];if(X===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(X=D.instanceColor)),X!==void 0){let $=X.normalized,se=X.itemSize,ge=e.get(X);if(ge===void 0)continue;let et=ge.buffer,ke=ge.type,je=ge.bytesPerElement,Y=ke===r.INT||ke===r.UNSIGNED_INT||X.gpuType===Oo;if(X.isInterleavedBufferAttribute){let te=X.data,be=te.stride,Ne=X.offset;if(te.isInstancedInterleavedBuffer){for(let _e=0;_e<H.locationSize;_e++)p(H.location+_e,te.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let _e=0;_e<H.locationSize;_e++)m(H.location+_e);r.bindBuffer(r.ARRAY_BUFFER,et);for(let _e=0;_e<H.locationSize;_e++)E(H.location+_e,se/H.locationSize,ke,$,be*je,(Ne+se/H.locationSize*_e)*je,Y)}else{if(X.isInstancedBufferAttribute){for(let te=0;te<H.locationSize;te++)p(H.location+te,X.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let te=0;te<H.locationSize;te++)m(H.location+te);r.bindBuffer(r.ARRAY_BUFFER,et);for(let te=0;te<H.locationSize;te++)E(H.location+te,se/H.locationSize,ke,$,se*je,se/H.locationSize*te*je,Y)}}else if(L!==void 0){let $=L[q];if($!==void 0)switch($.length){case 2:r.vertexAttrib2fv(H.location,$);break;case 3:r.vertexAttrib3fv(H.location,$);break;case 4:r.vertexAttrib4fv(H.location,$);break;default:r.vertexAttrib1fv(H.location,$)}}}}v()}function M(){w();for(let D in n){let F=n[D];for(let k in F){let I=F[k];for(let B in I){let W=I[B];for(let L in W)h(W[L].object),delete W[L];delete I[B]}}delete n[D]}}function S(D){if(n[D.id]===void 0)return;let F=n[D.id];for(let k in F){let I=F[k];for(let B in I){let W=I[B];for(let L in W)h(W[L].object),delete W[L];delete I[B]}}delete n[D.id]}function A(D){for(let F in n){let k=n[F];for(let I in k){let B=k[I];if(B[D.id]===void 0)continue;let W=B[D.id];for(let L in W)h(W[L].object),delete W[L];delete B[D.id]}}}function _(D){for(let F in n){let k=n[F],I=D.isInstancedMesh===!0?D.id:0,B=k[I];if(B!==void 0){for(let W in B){let L=B[W];for(let q in L)h(L[q].object),delete L[q];delete B[W]}delete k[I],Object.keys(k).length===0&&delete n[F]}}}function w(){C(),a=!0,s!==i&&(s=i,l(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:b,enableAttribute:m,disableUnusedAttributes:v}}function Sg(r,e,t){let n;function i(c){n=c}function s(c,l){r.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(r.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Tg(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==bn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let _=A===kt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==un&&A!==gn&&!_&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ae("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=r.getParameter(r.MAX_SAMPLES),S=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:x,maxSamples:M,samples:S}}function Eg(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Fn,o=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{let v=s?0:n,E=v*4,x=p.clippingState||null;c.value=x,x=h(g,d,E,f);for(let M=0;M!==E;++M)x[M]=t[M];p.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let b=u!==null?u.length:0,m=null;if(b!==0){if(m=c.value,g!==!0||m===null){let p=f+b*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,x=f;E!==b;++E,x+=4)a.copy(u[E]).applyMatrix4(v,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}var dr=4,wg=6,Ag=20,Rg=256,_a=new Zn,Dd=new pe,$l=null,Ql=0,eh=0,th=!1,Cg=new R,ys=new R,pr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:a=256,position:o=Cg}=s;$l=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($l,Ql,eh),this._renderer.xr.enabled=th,e.scissorTest=!1,ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zi||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$l=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:kt,format:bn,colorSpace:sn,depthBuffer:!1},i=Fd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fd(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Pg(s)),this._blurMaterial=Lg(s,e,t),this._ggxMaterial=Ig(s,e,t)}return i}_compileMaterial(e){let t=new ye(new ct,e);this._renderer.compile(t,_a)}_sceneToCubeUV(e,t,n,i,s){let c=new Et(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Dd),u.toneMapping=zn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ye(new Be,new St({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,m=b.material,p=!1,v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,p=!0):(m.color.copy(Dd),p=!0);for(let E=0;E<6;E++){let x=E%3;x===0?(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[E],s.y,s.z)):x===1?(c.up.set(0,0,l[E]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[E],s.z)):(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[E]));let M=this._cubeSize;ur(i,x*M,E>2?M:0,M,M),u.setRenderTarget(i),p&&u.render(b,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===zi||e.mapping===bs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ud()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nd());let s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;ur(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,_a)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=l*1.25,f=u*d,{_lodMax:g}=this,b=this._sizeLods[n],m=3*b*(n>g-dr?n-g+dr:0),p=4*(this._cubeSize-b);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,ur(s,m,p,3*b,2*b),i.setRenderTarget(s),i.render(o,_a),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,ur(e,m,p,3*b,2*b),i.setRenderTarget(e),i.render(o,_a)}_blur(e,t,n,i){let s=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,i,s){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[i];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],u=3*h*(i>this._lodMax-dr?i-this._lodMax+dr:0),d=4*(this._cubeSize-h);ur(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(c,_a)}};function Pg(r){let e=[],t=[],n=r,i=r-dr+1+wg;for(let s=0;s<i;s++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,d=6,f=3,g=new Float32Array(f*d*u),b=new Float32Array(f*d*u);for(let p=0;p<u;p++){let v=p%3*2/3-1,E=p>2?0:-1,x=[v,E,0,v+2/3,E,0,v+2/3,E+1,0,v,E,0,v+2/3,E+1,0,v,E+1,0];g.set(x,f*d*p);for(let M=0;M<d;M++){let S=h[M*2]*2-1,A=h[M*2+1]*2-1;p===0?ys.set(1,A,S):p===1?ys.set(-S,1,-A):p===2?ys.set(-S,A,1):p===3?ys.set(-1,A,-S):p===4?ys.set(-S,-1,A):ys.set(S,A,-1),ys.toArray(b,(p*d+M)*f)}}let m=new ct;m.setAttribute("position",new vt(g,f)),m.setAttribute("outputDirection",new vt(b,f)),t.push(new ye(m,null)),n>dr&&n--}return{lodMeshes:t,sizeLods:e}}function Fd(r,e,t){let n=new wt(r,e,t);return n.texture.mapping=ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ur(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Ig(r,e,t){return new Tt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Rg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ac(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Lg(r,e,t){return new Tt({name:"SphericalGaussianBlur",defines:{SAMPLES:Ag,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ac(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Nd(){return new Tt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Ud(){return new Tt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Ac(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ec=class extends wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Yr(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Be(5,5,5),s=new Tt({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:En});s.uniforms.tEquirect.value=t;let a=new ye(i,s),o=t.minFilter;return t.minFilter===Hn&&(t.minFilter=Ct),new Ro(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}};function Dg(r){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?a(d):s(d)}function s(d){if(d&&d.isTexture){let f=d.mapping;if(f===Fo||f===No)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let b=new Ec(g.height);return b.fromEquirectangularTexture(r,d),e.set(d,b),d.addEventListener("dispose",l),o(b.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,g=f===Fo||f===No,b=f===zi||f===bs;if(g||b){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new pr(r)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let v=d.image;return g&&v&&v.height>0||b&&v&&c(v)?(n===null&&(n=new pr(r)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===Fo?d.mapping=zi:f===No&&(d.mapping=bs),d}function c(d){let f=0,g=6;for(let b=0;b<g;b++)d[b]!==void 0&&f++;return f===g}function l(d){let f=d.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function Fg(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&ts("WebGLRenderer: "+n+" extension not supported."),i}}}function Ng(r,e,t,n){let i={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],r.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,g=u.attributes.position,b=0;if(g===void 0)return;if(f!==null){let v=f.array;b=f.version;for(let E=0,x=v.length;E<x;E+=3){let M=v[E+0],S=v[E+1],A=v[E+2];d.push(M,S,S,A,A,M)}}else{let v=g.array;b=g.version;for(let E=0,x=v.length/3-1;E<x;E+=3){let M=E+0,S=E+1,A=E+2;d.push(M,S,S,A,A,M)}}let m=new(g.count>=65535?Wr:Vr)(d,1);m.version=b;let p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Ug(r,e,t){let n;function i(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function c(u,d){r.drawElements(n,d,s,u*a),t.update(d,n,1)}function l(u,d,f){f!==0&&(r.drawElementsInstanced(n,d,s,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,u,0,f);let b=0;for(let m=0;m<f;m++)b+=d[m];t.update(b,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Og(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Fe("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Bg(r,e,t){let n=new WeakMap,i=new ut;function s(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let w=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),b===!0&&(E=3);let x=o.attributes.position.count*E,M=1;x>e.maxTextureSize&&(M=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let S=new Float32Array(x*M*4*u),A=new Hr(S,x,M,u);A.type=gn,A.needsUpdate=!0;let _=E*4;for(let C=0;C<u;C++){let D=m[C],F=p[C],k=v[C],I=x*M*4*C;for(let B=0;B<D.count;B++){let W=B*_;f===!0&&(i.fromBufferAttribute(D,B),S[I+W+0]=i.x,S[I+W+1]=i.y,S[I+W+2]=i.z,S[I+W+3]=0),g===!0&&(i.fromBufferAttribute(F,B),S[I+W+4]=i.x,S[I+W+5]=i.y,S[I+W+6]=i.z,S[I+W+7]=0),b===!0&&(i.fromBufferAttribute(k,B),S[I+W+8]=i.x,S[I+W+9]=i.y,S[I+W+10]=i.z,S[I+W+11]=k.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new Ee(x,M)},n.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<l.length;b++)f+=l[b];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function kg(r,e,t,n,i){let s=new WeakMap;function a(l){let h=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return d}function o(){s=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var zg={[sa]:"LINEAR_TONE_MAPPING",[ra]:"REINHARD_TONE_MAPPING",[aa]:"CINEON_TONE_MAPPING",[gs]:"ACES_FILMIC_TONE_MAPPING",[ca]:"AGX_TONE_MAPPING",[la]:"NEUTRAL_TONE_MAPPING",[oa]:"CUSTOM_TONE_MAPPING"};function Hg(r,e,t,n,i,s){let a=new wt(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new ct;l.setAttribute("position",new ze([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ze([0,2,0,0,2,0],2));let h=new nr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ye(l,h),d=new Zn(-1,1,1,-1,0,1),f=null,g=null,b=!1,m,p=null,v=[],E=!1;this.setSize=function(x,M){a.setSize(x,M),o!==null&&o.setSize(x,M),c!==null&&c.setSize(x,M);for(let S=0;S<v.length;S++){let A=v[S];A.setSize&&A.setSize(x,M)}},this.setEffects=function(x){v=x,E=v.length>0&&v[0].isRenderPass===!0;let M=a.width,S=a.height;v.length>0&&o===null&&(o=new wt(M,S,{type:kt,depthBuffer:!1,stencilBuffer:!1}),c=new wt(M,S,{type:kt,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<v.length;A++){let _=v[A];_.setSize&&_.setSize(M,S)}},this.begin=function(x,M){if(b||x.toneMapping===zn&&v.length===0)return!1;if(p=M,M!==null){let S=M.width,A=M.height;(a.width!==S||a.height!==A)&&this.setSize(S,A)}return E===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=zn,!0},this.hasRenderPass=function(){return E},this.end=function(x,M){x.toneMapping=m,b=!0;let S=a,A=o;for(let _=0;_<v.length;_++){let w=v[_];w.enabled!==!1&&(w.render(x,A,S,M),w.needsSwap!==!1&&(S=A,A=A===o?c:o))}if(f!==x.outputColorSpace||g!==x.toneMapping){f=x.outputColorSpace,g=x.toneMapping,h.defines={},Ge.getTransfer(f)===st&&(h.defines.SRGB_TRANSFER="");let _=zg[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,x.setRenderTarget(p),x.render(u,d),p=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var nf=new Ut,sh=new Oi(1,1),sf=new Hr,rf=new go,af=new Yr,Od=[],Bd=[],kd=new Float32Array(16),zd=new Float32Array(9),Hd=new Float32Array(4);function mr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Od[i];if(s===void 0&&(s=new Float32Array(i),Od[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function zt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ht(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Rc(r,e){let t=Bd[e];t===void 0&&(t=new Int32Array(e),Bd[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Gg(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Vg(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;r.uniform2fv(this.addr,e),Ht(t,e)}}function Wg(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;r.uniform3fv(this.addr,e),Ht(t,e)}}function qg(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;r.uniform4fv(this.addr,e),Ht(t,e)}}function Xg(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;Hd.set(n),r.uniformMatrix2fv(this.addr,!1,Hd),Ht(t,n)}}function jg(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;zd.set(n),r.uniformMatrix3fv(this.addr,!1,zd),Ht(t,n)}}function Kg(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;kd.set(n),r.uniformMatrix4fv(this.addr,!1,kd),Ht(t,n)}}function Yg(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Jg(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;r.uniform2iv(this.addr,e),Ht(t,e)}}function Zg(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;r.uniform3iv(this.addr,e),Ht(t,e)}}function $g(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;r.uniform4iv(this.addr,e),Ht(t,e)}}function Qg(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function eb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;r.uniform2uiv(this.addr,e),Ht(t,e)}}function tb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;r.uniform3uiv(this.addr,e),Ht(t,e)}}function nb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;r.uniform4uiv(this.addr,e),Ht(t,e)}}function ib(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(sh.compareFunction=t.isReversedDepthBuffer()?Mc:yc,s=sh):s=nf,t.setTexture2D(e||s,i)}function sb(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||rf,i)}function rb(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||af,i)}function ab(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||sf,i)}function ob(r){switch(r){case 5126:return Gg;case 35664:return Vg;case 35665:return Wg;case 35666:return qg;case 35674:return Xg;case 35675:return jg;case 35676:return Kg;case 5124:case 35670:return Yg;case 35667:case 35671:return Jg;case 35668:case 35672:return Zg;case 35669:case 35673:return $g;case 5125:return Qg;case 36294:return eb;case 36295:return tb;case 36296:return nb;case 35678:case 36198:case 36298:case 36306:case 35682:return ib;case 35679:case 36299:case 36307:return sb;case 35680:case 36300:case 36308:case 36293:return rb;case 36289:case 36303:case 36311:case 36292:return ab}}function cb(r,e){r.uniform1fv(this.addr,e)}function lb(r,e){let t=mr(e,this.size,2);r.uniform2fv(this.addr,t)}function hb(r,e){let t=mr(e,this.size,3);r.uniform3fv(this.addr,t)}function ub(r,e){let t=mr(e,this.size,4);r.uniform4fv(this.addr,t)}function db(r,e){let t=mr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function fb(r,e){let t=mr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function pb(r,e){let t=mr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function mb(r,e){r.uniform1iv(this.addr,e)}function gb(r,e){r.uniform2iv(this.addr,e)}function bb(r,e){r.uniform3iv(this.addr,e)}function xb(r,e){r.uniform4iv(this.addr,e)}function _b(r,e){r.uniform1uiv(this.addr,e)}function vb(r,e){r.uniform2uiv(this.addr,e)}function yb(r,e){r.uniform3uiv(this.addr,e)}function Mb(r,e){r.uniform4uiv(this.addr,e)}function Sb(r,e,t){let n=this.cache,i=e.length,s=Rc(t,i);zt(n,s)||(r.uniform1iv(this.addr,s),Ht(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=sh:a=nf;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function Tb(r,e,t){let n=this.cache,i=e.length,s=Rc(t,i);zt(n,s)||(r.uniform1iv(this.addr,s),Ht(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||rf,s[a])}function Eb(r,e,t){let n=this.cache,i=e.length,s=Rc(t,i);zt(n,s)||(r.uniform1iv(this.addr,s),Ht(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||af,s[a])}function wb(r,e,t){let n=this.cache,i=e.length,s=Rc(t,i);zt(n,s)||(r.uniform1iv(this.addr,s),Ht(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||sf,s[a])}function Ab(r){switch(r){case 5126:return cb;case 35664:return lb;case 35665:return hb;case 35666:return ub;case 35674:return db;case 35675:return fb;case 35676:return pb;case 5124:case 35670:return mb;case 35667:case 35671:return gb;case 35668:case 35672:return bb;case 35669:case 35673:return xb;case 5125:return _b;case 36294:return vb;case 36295:return yb;case 36296:return Mb;case 35678:case 36198:case 36298:case 36306:case 35682:return Sb;case 35679:case 36299:case 36307:return Tb;case 35680:case 36300:case 36308:case 36293:return Eb;case 36289:case 36303:case 36311:case 36292:return wb}}var rh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ob(t.type)}},ah=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ab(t.type)}},oh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},nh=/(\w+)(\])?(\[|\.)?/g;function Gd(r,e){r.seq.push(e),r.map[e.id]=e}function Rb(r,e,t){let n=r.name,i=n.length;for(nh.lastIndex=0;;){let s=nh.exec(n),a=nh.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Gd(t,l===void 0?new rh(o,r,e):new ah(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new oh(o),Gd(t,u)),t=u}}}var fr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Rb(o,c,this)}let i=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Vd(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Cb=37297,Pb=0;function Ib(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Wd=new Oe;function Lb(r){Ge._getMatrix(Wd,Ge.workingColorSpace,r);let e=`mat3( ${Wd.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(r)){case kr:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function qd(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Ib(r.getShaderSource(e),o)}else return s}function Db(r,e){let t=Lb(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Fb={[sa]:"Linear",[ra]:"Reinhard",[aa]:"Cineon",[gs]:"ACESFilmic",[ca]:"AgX",[la]:"Neutral",[oa]:"Custom"};function Nb(r,e){let t=Fb[e];return t===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Tc=new R;function Ub(){Ge.getLuminanceCoefficients(Tc);let r=Tc.x.toFixed(4),e=Tc.y.toFixed(4),t=Tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ob(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ya).join(`
`)}function Bb(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kb(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ya(r){return r!==""}function Xd(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var zb=/^[ \t]*#include +<([\w\d./]+)>/gm;function ch(r){return r.replace(zb,Gb)}var Hb=new Map;function Gb(r,e){let t=Xe[e];if(t===void 0){let n=Hb.get(e);if(n!==void 0)t=Xe[n],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ch(t)}var Vb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kd(r){return r.replace(Vb,Wb)}function Wb(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Yd(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var qb={[ps]:"SHADOWMAP_TYPE_PCF",[ar]:"SHADOWMAP_TYPE_VSM"};function Xb(r){return qb[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var jb={[zi]:"ENVMAP_TYPE_CUBE",[bs]:"ENVMAP_TYPE_CUBE",[ha]:"ENVMAP_TYPE_CUBE_UV"};function Kb(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":jb[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var Yb={[bs]:"ENVMAP_MODE_REFRACTION"};function Jb(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Yb[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Zb={[Do]:"ENVMAP_BLENDING_MULTIPLY",[ud]:"ENVMAP_BLENDING_MIX",[dd]:"ENVMAP_BLENDING_ADD"};function $b(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Zb[r.combine]||"ENVMAP_BLENDING_NONE"}function Qb(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ex(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Xb(t),l=Kb(t),h=Jb(t),u=$b(t),d=Qb(t),f=Ob(t),g=Bb(s),b=i.createProgram(),m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ya).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ya).join(`
`),p.length>0&&(p+=`
`)):(m=[Yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),p=[Yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==zn?Nb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Db("linearToOutputTexel",t.outputColorSpace),Ub(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ya).join(`
`)),a=ch(a),a=Xd(a,t),a=jd(a,t),o=ch(o),o=Xd(o,t),o=jd(o,t),a=Kd(a),o=Kd(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=v+m+a,x=v+p+o,M=Vd(i,i.VERTEX_SHADER,E),S=Vd(i,i.FRAGMENT_SHADER,x);i.attachShader(b,M),i.attachShader(b,S),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function A(D){if(r.debug.checkShaderErrors){let F=i.getProgramInfoLog(b)||"",k=i.getShaderInfoLog(M)||"",I=i.getShaderInfoLog(S)||"",B=F.trim(),W=k.trim(),L=I.trim(),q=!0,H=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,b,M,S);else{let X=qd(i,M,"vertex"),$=qd(i,S,"fragment");Fe("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+X+`
`+$)}else B!==""?Ae("WebGLProgram: Program Info Log:",B):(W===""||L==="")&&(H=!1);H&&(D.diagnostics={runnable:q,programLog:B,vertexShader:{log:W,prefix:m},fragmentShader:{log:L,prefix:p}})}i.deleteShader(M),i.deleteShader(S),_=new fr(i,b),w=kb(i,b)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(b,Cb)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pb++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=M,this.fragmentShader=S,this}var tx=0,lh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new hh(e),t.set(e,n)),n}},hh=class{constructor(e){this.id=tx++,this.code=e,this.usedTimes=0}};function nx(r){return r===Gi||r===ma||r===ga}function ix(r,e,t,n,i,s){let a=new js,o=new lh,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function b(_,w,C,D,F,k){let I=D.fog,B=F.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,L=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,q=e.get(_.envMap||W,L),H=q&&q.mapping===ha?q.image.height:null,X=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Ae("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let $=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,se=$!==void 0?$.length:0,ge=0;B.morphAttributes.position!==void 0&&(ge=1),B.morphAttributes.normal!==void 0&&(ge=2),B.morphAttributes.color!==void 0&&(ge=3);let et,ke,je,Y;if(X){let bt=ei[X];et=bt.vertexShader,ke=bt.fragmentShader}else{et=_.vertexShader,ke=_.fragmentShader;let bt=o.getVertexShaderStage(_),at=o.getFragmentShaderStage(_);o.update(_,bt,at),je=bt.id,Y=at.id}let te=r.getRenderTarget(),be=r.state.buffers.depth.getReversed(),Ne=F.isInstancedMesh===!0,_e=F.isBatchedMesh===!0,Ke=!!_.map,Nt=!!_.matcap,Je=!!q,it=!!_.aoMap,gt=!!_.lightMap,Qe=!!_.bumpMap&&_.wireframe===!1,yt=!!_.normalMap,Vt=!!_.displacementMap,cn=!!_.emissiveMap,Mt=!!_.metalnessMap,It=!!_.roughnessMap,O=_.anisotropy>0,jt=_.clearcoat>0,lt=_.dispersion>0,P=_.retroreflectivity>0,y=_.iridescence>0,z=_.sheen>0,j=_.transmission>0,J=O&&!!_.anisotropyMap,ie=jt&&!!_.clearcoatMap,re=jt&&!!_.clearcoatNormalMap,Z=jt&&!!_.clearcoatRoughnessMap,ee=y&&!!_.iridescenceMap,ae=y&&!!_.iridescenceThicknessMap,Re=z&&!!_.sheenColorMap,he=z&&!!_.sheenRoughnessMap,oe=!!_.specularMap,Ce=!!_.specularColorMap,Le=!!_.specularIntensityMap,He=j&&!!_.transmissionMap,U=j&&!!_.thicknessMap,ce=!!_.gradientMap,Q=!!_.alphaMap,le=_.alphaTest>0,me=!!_.alphaHash,ne=!!_.extensions,Pe=zn;_.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Pe=r.toneMapping);let Te={shaderID:X,shaderType:_.type,shaderName:_.name,vertexShader:et,fragmentShader:ke,defines:_.defines,customVertexShaderID:je,customFragmentShaderID:Y,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:_e,batchingColor:_e&&F._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&F.instanceColor!==null,instancingMorph:Ne&&F.morphTexture!==null,outputColorSpace:te===null?r.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ge.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ke,matcap:Nt,envMap:Je,envMapMode:Je&&q.mapping,envMapCubeUVHeight:H,aoMap:it,lightMap:gt,bumpMap:Qe,normalMap:yt,displacementMap:Vt,emissiveMap:cn,normalMapObjectSpace:yt&&_.normalMapType===xd,normalMapTangentSpace:yt&&_.normalMapType===xa,packedNormalMap:yt&&_.normalMapType===xa&&nx(_.normalMap.format),metalnessMap:Mt,roughnessMap:It,anisotropy:O,anisotropyMap:J,clearcoat:jt,clearcoatMap:ie,clearcoatNormalMap:re,clearcoatRoughnessMap:Z,dispersion:lt,retroreflection:P,iridescence:y,iridescenceMap:ee,iridescenceThicknessMap:ae,sheen:z,sheenColorMap:Re,sheenRoughnessMap:he,specularMap:oe,specularColorMap:Ce,specularIntensityMap:Le,transmission:j,transmissionMap:He,thicknessMap:U,gradientMap:ce,opaque:_.transparent===!1&&_.blending===ki&&_.alphaToCoverage===!1,alphaMap:Q,alphaTest:le,alphaHash:me,combine:_.combine,mapUv:Ke&&g(_.map.channel),aoMapUv:it&&g(_.aoMap.channel),lightMapUv:gt&&g(_.lightMap.channel),bumpMapUv:Qe&&g(_.bumpMap.channel),normalMapUv:yt&&g(_.normalMap.channel),displacementMapUv:Vt&&g(_.displacementMap.channel),emissiveMapUv:cn&&g(_.emissiveMap.channel),metalnessMapUv:Mt&&g(_.metalnessMap.channel),roughnessMapUv:It&&g(_.roughnessMap.channel),anisotropyMapUv:J&&g(_.anisotropyMap.channel),clearcoatMapUv:ie&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:he&&g(_.sheenRoughnessMap.channel),specularMapUv:oe&&g(_.specularMap.channel),specularColorMapUv:Ce&&g(_.specularColorMap.channel),specularIntensityMapUv:Le&&g(_.specularIntensityMap.channel),transmissionMapUv:He&&g(_.transmissionMap.channel),thicknessMapUv:U&&g(_.thicknessMap.channel),alphaMapUv:Q&&g(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(yt||O),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!B.attributes.uv&&(Ke||Q),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&yt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:be,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ge,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Ke&&_.map.isVideoTexture===!0&&Ge.getTransfer(_.map.colorSpace)===st,decodeVideoTextureEmissive:cn&&_.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(_.emissiveMap.colorSpace)===st,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Tn,flipSided:_.side===Bt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ne&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&_.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Te.vertexUv1s=c.has(1),Te.vertexUv2s=c.has(2),Te.vertexUv3s=c.has(3),c.clear(),Te}function m(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)w.push(C),w.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(w,_),v(w,_),w.push(r.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function p(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function v(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function E(_){let w=f[_.type],C;if(w){let D=ei[w];C=Mi.clone(D.uniforms)}else C=_.uniforms;return C}function x(_,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new ex(r,w,_,i),l.push(C),h.set(w,C)),C}function M(_){if(--_.usedTimes===0){let w=l.indexOf(_);l[w]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function S(_){o.remove(_)}function A(){o.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:E,acquireProgram:x,releaseProgram:M,releaseShaderCache:S,programs:l,dispose:A}}function sx(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function rx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Jd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Zd(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,b,m,p){let v=r[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:b,renderOrder:d.renderOrder,z:m,group:p},r[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=g,v.materialVariant=a(d),v.groupOrder=b,v.renderOrder=d.renderOrder,v.z=m,v.group=p),e++,v}function c(d,f,g,b,m,p,v){v.reversedDepth===!0&&(m=-m);let E=o(d,f,g,b,m,p);g.transmission>0?n.push(E):g.transparent===!0?i.push(E):t.push(E)}function l(d,f,g,b,m,p){let v=o(d,f,g,b,m,p);g.transmission>0?n.unshift(v):g.transparent===!0?i.unshift(v):t.unshift(v)}function h(d,f){t.length>1&&t.sort(d||rx),n.length>1&&n.sort(f||Jd),i.length>1&&i.sort(f||Jd)}function u(){for(let d=e,f=r.length;d<f;d++){let g=r[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:u,sort:h}}function ax(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new Zd,r.set(n,[a])):i>=s.length?(a=new Zd,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function ox(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new R,color:new pe};break;case"SpotLight":t={position:new R,direction:new R,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new R,halfWidth:new R,halfHeight:new R};break}return r[e.id]=t,t}}}function cx(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var lx=0;function hx(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ux(r){let e=new ox,t=cx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);let i=new R,s=new Ue,a=new Ue;function o(l){let h=0,u=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,g=0,b=0,m=0,p=0,v=0,E=0,x=0,M=0,S=0,A=0,_=0,w=0,C=0;l.sort(hx);for(let F=0,k=l.length;F<k;F++){let I=l[F],B=I.color,W=I.intensity,L=I.distance,q=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Gi?q=I.shadow.map.texture:q=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=B.r*W,u+=B.g*W,d+=B.b*W;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],W);C++}else if(I.isSunLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let X=I.shadow,$=t.get(I);$.shadowIntensity=X.intensity,$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),n.sunShadow[g]=$,n.sunShadowMap[g]=q;let se=X.getViewportCount();for(let ge=0;ge<se;ge++)n.sunShadowMatrix[b+ge]=X.getMatrix(ge),n.sunShadowCascade[b+ge]=X._cascadeData[ge];b+=se,g++}n.sun[f]=H,f++}else if(I.isDirectionalLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let X=I.shadow,$=t.get(I);$.shadowIntensity=X.intensity,$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,n.directionalShadow[m]=$,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=I.shadow.matrix,M++}n.directional[m]=H,m++}else if(I.isSpotLight){let H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(B).multiplyScalar(W),H.distance=L,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[v]=H;let X=I.shadow;if(I.map&&(n.spotLightMap[_]=I.map,_++,X.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[v]=X.matrix,I.castShadow){let $=t.get(I);$.shadowIntensity=X.intensity,$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,n.spotShadow[v]=$,n.spotShadowMap[v]=q,A++}v++}else if(I.isRectAreaLight){let H=e.get(I);H.color.copy(B).multiplyScalar(W),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[E]=H,E++}else if(I.isPointLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let X=I.shadow,$=t.get(I);$.shadowIntensity=X.intensity,$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,$.shadowCameraNear=X.camera.near,$.shadowCameraFar=X.camera.far,n.pointShadow[p]=$,n.pointShadowMap[p]=q,n.pointShadowMatrix[p]=I.shadow.matrix,S++}n.point[p]=H,p++}else if(I.isHemisphereLight){let H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(W),H.groundColor.copy(I.groundColor).multiplyScalar(W),n.hemi[x]=H,x++}}E>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==v||D.rectAreaLength!==E||D.hemiLength!==x||D.numSunShadows!==g||D.numDirectionalShadows!==M||D.numPointShadows!==S||D.numSpotShadows!==A||D.numSpotMaps!==_||D.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=v,n.rectArea.length=E,n.point.length=p,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+_-w,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=v,D.rectAreaLength=E,D.hemiLength=x,D.numSunShadows=g,D.numDirectionalShadows=M,D.numPointShadows=S,D.numSpotShadows=A,D.numSpotMaps=_,D.numLightProbes=C,n.version=lx++)}function c(l,h){let u=0,d=0,f=0,g=0,b=0,m=0,p=h.matrixWorldInverse;for(let v=0,E=l.length;v<E;v++){let x=l[v];if(x.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),u++}else if(x.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),d++}else if(x.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),g++}else if(x.isRectAreaLight){let M=n.rectArea[b];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),a.identity(),s.copy(x.matrixWorld),s.premultiply(p),a.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),b++}else if(x.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function $d(r){let e=new ux(r),t=[],n=[],i=[];function s(d){u.camera=d,t.length=0,n.length=0,i.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function c(d){i.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function dx(r){let e=new WeakMap;function t(i,s=0){let a=e.get(i),o;return a===void 0?(o=new $d(r),e.set(i,[o])):s>=a.length?(o=new $d(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var fx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,px=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,mx=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],gx=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Qd=new Ue,va=new R,ih=new R;function bx(r,e,t){let n=new Qs,i=new Ee,s=new Ee,a=new ut,o=new yo,c=new Mo,l={},h=t.maxTextureSize,u={[$n]:Bt,[Bt]:$n,[Tn]:Tn},d=new Tt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:fx,fragmentShader:px}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ct;g.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ye(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ps;let p=this.type;this.render=function(S,A,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Xu&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ps);let w=r.getRenderTarget(),C=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),F=r.state;F.setBlending(En),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let k=p!==this.type;k&&A.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(B=>B.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,B=S.length;I<B;I++){let W=S[I],L=W.shadow;if(L===void 0){Ae("WebGLShadowMap:",W,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;i.copy(L.mapSize);let q=L.getFrameExtents();i.multiply(q),s.copy(L.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/q.x),i.x=s.x*q.x,L.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/q.y),i.y=s.y*q.y,L.mapSize.y=s.y));let H=r.state.buffers.depth.getReversed();if(L.camera._reversedDepth=H,L.map===null||k===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===ar){if(W.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new wt(i.x,i.y,{format:Gi,type:kt,minFilter:Ct,magFilter:Ct,generateMipmaps:!1}),L.map.texture.name=W.name+".shadowMap",L.map.depthTexture=new Oi(i.x,i.y,gn),L.map.depthTexture.name=W.name+".shadowMapDepth",L.map.depthTexture.format=jn,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Rt,L.map.depthTexture.magFilter=Rt}else W.isPointLight?(L.map=new Ec(i.x),L.map.depthTexture=new _o(i.x,Gn)):(L.map=new wt(i.x,i.y),L.map.depthTexture=new Oi(i.x,i.y,Gn)),L.map.depthTexture.name=W.name+".shadowMap",L.map.depthTexture.format=jn,this.type===ps?(L.map.depthTexture.compareFunction=H?Mc:yc,L.map.depthTexture.minFilter=Ct,L.map.depthTexture.magFilter=Ct):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Rt,L.map.depthTexture.magFilter=Rt);L.camera.updateProjectionMatrix()}L.map.isWebGLCubeRenderTarget!==!0&&(L.map.width!==i.x||L.map.height!==i.y)&&L.map.setSize(i.x,i.y);let X=L.map.isWebGLCubeRenderTarget?6:L.getViewportCount();W.isPointLight!==!0&&L.updateMatrices(W,_);for(let $=0;$<X;$++){let se=L.getCamera($);if(W.isPointLight){let ge=L.camera,et=L.matrix,ke=W.distance||ge.far;ke!==ge.far&&(ge.far=ke,ge.updateProjectionMatrix()),va.setFromMatrixPosition(W.matrixWorld),ge.position.copy(va),ih.copy(ge.position),ih.add(mx[$]),ge.up.copy(gx[$]),ge.lookAt(ih),ge.updateMatrixWorld(),et.makeTranslation(-va.x,-va.y,-va.z),Qd.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),L._frustum.setFromProjectionMatrix(Qd,ge.coordinateSystem,ge.reversedDepth)}if(L.map.isWebGLCubeRenderTarget)r.setRenderTarget(L.map,$),r.clear();else{$===0&&(r.setRenderTarget(L.map),r.clear());let ge=L.getViewport($);a.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),F.viewport(a)}n=L.getFrustum($),x(A,_,se,W,this.type)}L.isPointLightShadow!==!0&&this.type===ar&&v(L,_),L.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(w,C,D)};function v(S,A){let _=e.update(b);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new wt(i.x,i.y,{format:Gi,type:kt}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(A,null,_,d,b,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(A,null,_,f,b,null)}function E(S,A,_,w){let C=null,D=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(D!==void 0)C=D;else if(C=_.isPointLight===!0?c:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let F=C.uuid,k=A.uuid,I=l[F];I===void 0&&(I={},l[F]=I);let B=I[k];B===void 0&&(B=C.clone(),I[k]=B,A.addEventListener("dispose",M)),C=B}if(C.visible=A.visible,C.wireframe=A.wireframe,w===ar?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:u[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=r.properties.get(C);F.light=_}return C}function x(S,A,_,w,C){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===ar)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);let k=e.update(S),I=S.material;if(Array.isArray(I)){let B=k.groups;for(let W=0,L=B.length;W<L;W++){let q=B[W],H=I[q.materialIndex];if(H&&H.visible){let X=E(S,H,w,C);S.onBeforeShadow(r,S,A,_,k,X,q),r.renderBufferDirect(_,null,k,X,S,q),S.onAfterShadow(r,S,A,_,k,X,q)}}}else if(I.visible){let B=E(S,I,w,C);S.onBeforeShadow(r,S,A,_,k,B,null),r.renderBufferDirect(_,null,k,B,S,null),S.onAfterShadow(r,S,A,_,k,B,null)}}let F=S.children;for(let k=0,I=F.length;k<I;k++)x(F[k],A,_,w,C)}function M(S){S.target.removeEventListener("dispose",M);for(let _ in l){let w=l[_],C=S.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function xx(r,e){function t(){let U=!1,ce=new ut,Q=null,le=new ut(0,0,0,0);return{setMask:function(me){Q!==me&&!U&&(r.colorMask(me,me,me,me),Q=me)},setLocked:function(me){U=me},setClear:function(me,ne,Pe,Te,bt){bt===!0&&(me*=Te,ne*=Te,Pe*=Te),ce.set(me,ne,Pe,Te),le.equals(ce)===!1&&(r.clearColor(me,ne,Pe,Te),le.copy(ce))},reset:function(){U=!1,Q=null,le.set(-1,0,0,0)}}}function n(){let U=!1,ce=!1,Q=null,le=null,me=null;return{setReversed:function(ne){if(ce!==ne){let Pe=e.get("EXT_clip_control");ne?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),ce=ne;let Te=me;me=null,this.setClear(Te)}},getReversed:function(){return ce},setTest:function(ne){ne?te(r.DEPTH_TEST):be(r.DEPTH_TEST)},setMask:function(ne){Q!==ne&&!U&&(r.depthMask(ne),Q=ne)},setFunc:function(ne){if(ce&&(ne=Cd[ne]),le!==ne){switch(ne){case ao:r.depthFunc(r.NEVER);break;case oo:r.depthFunc(r.ALWAYS);break;case co:r.depthFunc(r.LESS);break;case Hs:r.depthFunc(r.LEQUAL);break;case lo:r.depthFunc(r.EQUAL);break;case ho:r.depthFunc(r.GEQUAL);break;case uo:r.depthFunc(r.GREATER);break;case fo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}le=ne}},setLocked:function(ne){U=ne},setClear:function(ne){me!==ne&&(me=ne,ce&&(ne=1-ne),r.clearDepth(ne))},reset:function(){U=!1,Q=null,le=null,me=null,ce=!1}}}function i(){let U=!1,ce=null,Q=null,le=null,me=null,ne=null,Pe=null,Te=null,bt=null;return{setTest:function(at){U||(at?te(r.STENCIL_TEST):be(r.STENCIL_TEST))},setMask:function(at){ce!==at&&!U&&(r.stencilMask(at),ce=at)},setFunc:function(at,Pn,Vn){(Q!==at||le!==Pn||me!==Vn)&&(r.stencilFunc(at,Pn,Vn),Q=at,le=Pn,me=Vn)},setOp:function(at,Pn,Vn){(ne!==at||Pe!==Pn||Te!==Vn)&&(r.stencilOp(at,Pn,Vn),ne=at,Pe=Pn,Te=Vn)},setLocked:function(at){U=at},setClear:function(at){bt!==at&&(r.clearStencil(at),bt=at)},reset:function(){U=!1,ce=null,Q=null,le=null,me=null,ne=null,Pe=null,Te=null,bt=null}}}let s=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],b=null,m=!1,p=null,v=null,E=null,x=null,M=null,S=null,A=null,_=new pe(0,0,0),w=0,C=!1,D=null,F=null,k=null,I=null,B=null,W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,q=0,H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(H)[1]),L=q>=1):H.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),L=q>=2);let X=null,$={},se=r.getParameter(r.SCISSOR_BOX),ge=r.getParameter(r.VIEWPORT),et=new ut().fromArray(se),ke=new ut().fromArray(ge);function je(U,ce,Q,le){let me=new Uint8Array(4),ne=r.createTexture();r.bindTexture(U,ne),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Pe=0;Pe<Q;Pe++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(ce,0,r.RGBA,1,1,le,0,r.RGBA,r.UNSIGNED_BYTE,me):r.texImage2D(ce+Pe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,me);return ne}let Y={};Y[r.TEXTURE_2D]=je(r.TEXTURE_2D,r.TEXTURE_2D,1),Y[r.TEXTURE_CUBE_MAP]=je(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[r.TEXTURE_2D_ARRAY]=je(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Y[r.TEXTURE_3D]=je(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(r.DEPTH_TEST),a.setFunc(Hs),Qe(!1),yt(wl),te(r.CULL_FACE),it(En);function te(U){h[U]!==!0&&(r.enable(U),h[U]=!0)}function be(U){h[U]!==!1&&(r.disable(U),h[U]=!1)}function Ne(U,ce){return d[U]!==ce?(r.bindFramebuffer(U,ce),d[U]=ce,U===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ce),U===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ce),!0):!1}function _e(U,ce){let Q=g,le=!1;if(U){Q=f.get(ce),Q===void 0&&(Q=[],f.set(ce,Q));let me=U.textures;if(Q.length!==me.length||Q[0]!==r.COLOR_ATTACHMENT0){for(let ne=0,Pe=me.length;ne<Pe;ne++)Q[ne]=r.COLOR_ATTACHMENT0+ne;Q.length=me.length,le=!0}}else Q[0]!==r.BACK&&(Q[0]=r.BACK,le=!0);le&&r.drawBuffers(Q)}function Ke(U){return b!==U?(r.useProgram(U),b=U,!0):!1}let Nt={[ms]:r.FUNC_ADD,[Ku]:r.FUNC_SUBTRACT,[Yu]:r.FUNC_REVERSE_SUBTRACT};Nt[Ju]=r.MIN,Nt[Zu]=r.MAX;let Je={[$u]:r.ZERO,[Qu]:r.ONE,[ed]:r.SRC_COLOR,[Cl]:r.SRC_ALPHA,[ad]:r.SRC_ALPHA_SATURATE,[sd]:r.DST_COLOR,[nd]:r.DST_ALPHA,[td]:r.ONE_MINUS_SRC_COLOR,[Pl]:r.ONE_MINUS_SRC_ALPHA,[rd]:r.ONE_MINUS_DST_COLOR,[id]:r.ONE_MINUS_DST_ALPHA,[od]:r.CONSTANT_COLOR,[cd]:r.ONE_MINUS_CONSTANT_COLOR,[ld]:r.CONSTANT_ALPHA,[hd]:r.ONE_MINUS_CONSTANT_ALPHA};function it(U,ce,Q,le,me,ne,Pe,Te,bt,at){if(U===En){m===!0&&(be(r.BLEND),m=!1);return}if(m===!1&&(te(r.BLEND),m=!0),U!==ju){if(U!==p||at!==C){if((v!==ms||M!==ms)&&(r.blendEquation(r.FUNC_ADD),v=ms,M=ms),at)switch(U){case ki:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mn:r.blendFunc(r.ONE,r.ONE);break;case Al:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Rl:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Fe("WebGLState: Invalid blending: ",U);break}else switch(U){case ki:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Al:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rl:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",U);break}E=null,x=null,S=null,A=null,_.set(0,0,0),w=0,p=U,C=at}return}me=me||ce,ne=ne||Q,Pe=Pe||le,(ce!==v||me!==M)&&(r.blendEquationSeparate(Nt[ce],Nt[me]),v=ce,M=me),(Q!==E||le!==x||ne!==S||Pe!==A)&&(r.blendFuncSeparate(Je[Q],Je[le],Je[ne],Je[Pe]),E=Q,x=le,S=ne,A=Pe),(Te.equals(_)===!1||bt!==w)&&(r.blendColor(Te.r,Te.g,Te.b,bt),_.copy(Te),w=bt),p=U,C=!1}function gt(U,ce){U.side===Tn?be(r.CULL_FACE):te(r.CULL_FACE);let Q=U.side===Bt;ce&&(Q=!Q),Qe(Q),U.blending===ki&&U.transparent===!1?it(En):it(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);let le=U.stencilWrite;o.setTest(le),le&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),cn(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?te(r.SAMPLE_ALPHA_TO_COVERAGE):be(r.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(U){D!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),D=U)}function yt(U){U!==Wu?(te(r.CULL_FACE),U!==F&&(U===wl?r.cullFace(r.BACK):U===qu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):be(r.CULL_FACE),F=U}function Vt(U){U!==k&&(L&&r.lineWidth(U),k=U)}function cn(U,ce,Q){U?(te(r.POLYGON_OFFSET_FILL),(I!==ce||B!==Q)&&(I=ce,B=Q,a.getReversed()&&(ce=-ce),r.polygonOffset(ce,Q))):be(r.POLYGON_OFFSET_FILL)}function Mt(U){U?te(r.SCISSOR_TEST):be(r.SCISSOR_TEST)}function It(U){U===void 0&&(U=r.TEXTURE0+W-1),X!==U&&(r.activeTexture(U),X=U)}function O(U,ce,Q){Q===void 0&&(X===null?Q=r.TEXTURE0+W-1:Q=X);let le=$[Q];le===void 0&&(le={type:void 0,texture:void 0},$[Q]=le),(le.type!==U||le.texture!==ce)&&(X!==Q&&(r.activeTexture(Q),X=Q),r.bindTexture(U,ce||Y[U]),le.type=U,le.texture=ce)}function jt(){let U=$[X];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function lt(){try{r.compressedTexImage2D(...arguments)}catch(U){Fe("WebGLState:",U)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(U){Fe("WebGLState:",U)}}function y(){try{r.texSubImage2D(...arguments)}catch(U){Fe("WebGLState:",U)}}function z(){try{r.texSubImage3D(...arguments)}catch(U){Fe("WebGLState:",U)}}function j(){try{r.compressedTexSubImage2D(...arguments)}catch(U){Fe("WebGLState:",U)}}function J(){try{r.compressedTexSubImage3D(...arguments)}catch(U){Fe("WebGLState:",U)}}function ie(){try{r.texStorage2D(...arguments)}catch(U){Fe("WebGLState:",U)}}function re(){try{r.texStorage3D(...arguments)}catch(U){Fe("WebGLState:",U)}}function Z(){try{r.texImage2D(...arguments)}catch(U){Fe("WebGLState:",U)}}function ee(){try{r.texImage3D(...arguments)}catch(U){Fe("WebGLState:",U)}}function ae(U){return u[U]!==void 0?u[U]:r.getParameter(U)}function Re(U,ce){u[U]!==ce&&(r.pixelStorei(U,ce),u[U]=ce)}function he(U){et.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),et.copy(U))}function oe(U){ke.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),ke.copy(U))}function Ce(U,ce){let Q=l.get(ce);Q===void 0&&(Q=new WeakMap,l.set(ce,Q));let le=Q.get(U);le===void 0&&(le=r.getUniformBlockIndex(ce,U.name),Q.set(U,le))}function Le(U,ce){let le=l.get(ce).get(U);c.get(ce)!==le&&(r.uniformBlockBinding(ce,le,U.__bindingPointIndex),c.set(ce,le))}function He(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},u={},X=null,$={},d={},f=new WeakMap,g=[],b=null,m=!1,p=null,v=null,E=null,x=null,M=null,S=null,A=null,_=new pe(0,0,0),w=0,C=!1,D=null,F=null,k=null,I=null,B=null,et.set(0,0,r.canvas.width,r.canvas.height),ke.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:be,bindFramebuffer:Ne,drawBuffers:_e,useProgram:Ke,setBlending:it,setMaterial:gt,setFlipSided:Qe,setCullFace:yt,setLineWidth:Vt,setPolygonOffset:cn,setScissorTest:Mt,activeTexture:It,bindTexture:O,unbindTexture:jt,compressedTexImage2D:lt,compressedTexImage3D:P,texImage2D:Z,texImage3D:ee,pixelStorei:Re,getParameter:ae,updateUBOMapping:Ce,uniformBlockBinding:Le,texStorage2D:ie,texStorage3D:re,texSubImage2D:y,texSubImage3D:z,compressedTexSubImage2D:j,compressedTexSubImage3D:J,scissor:he,viewport:oe,reset:He}}function _x(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ee,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,y){return g?new OffscreenCanvas(P,y):Ws("canvas")}function m(P,y,z){let j=1,J=lt(P);if((J.width>z||J.height>z)&&(j=z/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ie=Math.floor(j*J.width),re=Math.floor(j*J.height);d===void 0&&(d=b(ie,re));let Z=y?b(ie,re):d;return Z.width=ie,Z.height=re,Z.getContext("2d").drawImage(P,0,0,ie,re),Ae("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ie+"x"+re+")."),Z}else return"data"in P&&Ae("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),P;return P}function p(P){return P.generateMipmaps}function v(P){r.generateMipmap(P)}function E(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(P,y,z,j,J,ie=!1){if(P!==null){if(r[P]!==void 0)return r[P];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let re;j&&(re=e.get("EXT_texture_norm16"),re||Ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=y;if(y===r.RED&&(z===r.FLOAT&&(Z=r.R32F),z===r.HALF_FLOAT&&(Z=r.R16F),z===r.UNSIGNED_BYTE&&(Z=r.R8),z===r.UNSIGNED_SHORT&&re&&(Z=re.R16_EXT),z===r.SHORT&&re&&(Z=re.R16_SNORM_EXT)),y===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(Z=r.R8UI),z===r.UNSIGNED_SHORT&&(Z=r.R16UI),z===r.UNSIGNED_INT&&(Z=r.R32UI),z===r.BYTE&&(Z=r.R8I),z===r.SHORT&&(Z=r.R16I),z===r.INT&&(Z=r.R32I)),y===r.RG&&(z===r.FLOAT&&(Z=r.RG32F),z===r.HALF_FLOAT&&(Z=r.RG16F),z===r.UNSIGNED_BYTE&&(Z=r.RG8),z===r.UNSIGNED_SHORT&&re&&(Z=re.RG16_EXT),z===r.SHORT&&re&&(Z=re.RG16_SNORM_EXT)),y===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(Z=r.RG8UI),z===r.UNSIGNED_SHORT&&(Z=r.RG16UI),z===r.UNSIGNED_INT&&(Z=r.RG32UI),z===r.BYTE&&(Z=r.RG8I),z===r.SHORT&&(Z=r.RG16I),z===r.INT&&(Z=r.RG32I)),y===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),z===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),z===r.UNSIGNED_INT&&(Z=r.RGB32UI),z===r.BYTE&&(Z=r.RGB8I),z===r.SHORT&&(Z=r.RGB16I),z===r.INT&&(Z=r.RGB32I)),y===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),z===r.UNSIGNED_INT&&(Z=r.RGBA32UI),z===r.BYTE&&(Z=r.RGBA8I),z===r.SHORT&&(Z=r.RGBA16I),z===r.INT&&(Z=r.RGBA32I)),y===r.RGB&&(z===r.UNSIGNED_SHORT&&re&&(Z=re.RGB16_EXT),z===r.SHORT&&re&&(Z=re.RGB16_SNORM_EXT),z===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),z===r.UNSIGNED_INT_10F_11F_11F_REV&&(Z=r.R11F_G11F_B10F)),y===r.RGBA){let ee=ie?kr:Ge.getTransfer(J);z===r.FLOAT&&(Z=r.RGBA32F),z===r.HALF_FLOAT&&(Z=r.RGBA16F),z===r.UNSIGNED_BYTE&&(Z=ee===st?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT&&re&&(Z=re.RGBA16_EXT),z===r.SHORT&&re&&(Z=re.RGBA16_SNORM_EXT),z===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function M(P,y){let z;return P?y===null||y===Gn||y===lr?z=r.DEPTH24_STENCIL8:y===gn?z=r.DEPTH32F_STENCIL8:y===cr&&(z=r.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Gn||y===lr?z=r.DEPTH_COMPONENT24:y===gn?z=r.DEPTH_COMPONENT32F:y===cr&&(z=r.DEPTH_COMPONENT16),z}function S(P,y){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Rt&&P.minFilter!==Ct?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function A(P){let y=P.target;y.removeEventListener("dispose",A),w(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&u.delete(y)}function _(P){let y=P.target;y.removeEventListener("dispose",_),D(y)}function w(P){let y=n.get(P);if(y.__webglInit===void 0)return;let z=P.source,j=f.get(z);if(j){let J=j[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&C(P),Object.keys(j).length===0&&f.delete(z)}n.remove(P)}function C(P){let y=n.get(P);r.deleteTexture(y.__webglTexture);let z=P.source,j=f.get(z);delete j[y.__cacheKey],a.memory.textures--}function D(P){let y=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let J=0;J<y.__webglFramebuffer[j].length;J++)r.deleteFramebuffer(y.__webglFramebuffer[j][J]);else r.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)r.deleteFramebuffer(y.__webglFramebuffer[j]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let z=P.textures;for(let j=0,J=z.length;j<J;j++){let ie=n.get(z[j]);ie.__webglTexture&&(r.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(z[j])}n.remove(P)}let F=0;function k(){F=0}function I(){return F}function B(P){F=P}function W(){let P=F;return P>=i.maxTextures&&Ae("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),F+=1,P}function L(P){let y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function q(P,y){let z=n.get(P);if(P.isVideoTexture&&O(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&z.__version!==P.version){let j=P.image;if(j===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{be(z,P,y);return}}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+y)}function H(P,y){let z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){be(z,P,y);return}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+y)}function X(P,y){let z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){be(z,P,y);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+y)}function $(P,y){let z=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&z.__version!==P.version){Ne(z,P,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+y)}let se={[pn]:r.REPEAT,[yn]:r.CLAMP_TO_EDGE,[Gs]:r.MIRRORED_REPEAT},ge={[Rt]:r.NEAREST,[Uo]:r.NEAREST_MIPMAP_NEAREST,[xs]:r.NEAREST_MIPMAP_LINEAR,[Ct]:r.LINEAR,[or]:r.LINEAR_MIPMAP_NEAREST,[Hn]:r.LINEAR_MIPMAP_LINEAR},et={[vd]:r.NEVER,[Ed]:r.ALWAYS,[yd]:r.LESS,[yc]:r.LEQUAL,[Md]:r.EQUAL,[Mc]:r.GEQUAL,[Sd]:r.GREATER,[Td]:r.NOTEQUAL};function ke(P,y){if(y.type===gn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ct||y.magFilter===or||y.magFilter===xs||y.magFilter===Hn||y.minFilter===Ct||y.minFilter===or||y.minFilter===xs||y.minFilter===Hn)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,se[y.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,se[y.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,se[y.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,ge[y.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,ge[y.minFilter]),y.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,et[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Rt||y.minFilter!==xs&&y.minFilter!==Hn||y.type===gn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function je(P,y){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",A));let j=y.source,J=f.get(j);J===void 0&&(J={},f.set(j,J));let ie=L(y);if(ie!==P.__cacheKey){J[ie]===void 0&&(J[ie]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[ie].usedTimes++;let re=J[P.__cacheKey];re!==void 0&&(J[P.__cacheKey].usedTimes--,re.usedTimes===0&&C(y)),P.__cacheKey=ie,P.__webglTexture=J[ie].texture}return z}function Y(P,y,z){return Math.floor(Math.floor(P/z)/y)}function te(P,y,z,j){let ie=P.updateRanges;if(ie.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,z,j,y.data);else{ie.sort((Re,he)=>Re.start-he.start);let re=0;for(let Re=1;Re<ie.length;Re++){let he=ie[re],oe=ie[Re],Ce=he.start+he.count,Le=Y(oe.start,y.width,4),He=Y(he.start,y.width,4);oe.start<=Ce+1&&Le===He&&Y(oe.start+oe.count-1,y.width,4)===Le?he.count=Math.max(he.count,oe.start+oe.count-he.start):(++re,ie[re]=oe)}ie.length=re+1;let Z=t.getParameter(r.UNPACK_ROW_LENGTH),ee=t.getParameter(r.UNPACK_SKIP_PIXELS),ae=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let Re=0,he=ie.length;Re<he;Re++){let oe=ie[Re],Ce=Math.floor(oe.start/4),Le=Math.ceil(oe.count/4),He=Ce%y.width,U=Math.floor(Ce/y.width),ce=Le,Q=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,He),t.pixelStorei(r.UNPACK_SKIP_ROWS,U),t.texSubImage2D(r.TEXTURE_2D,0,He,U,ce,Q,z,j,y.data)}P.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,Z),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(r.UNPACK_SKIP_ROWS,ae)}}function be(P,y,z){let j=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=r.TEXTURE_3D);let J=je(P,y),ie=y.source;t.bindTexture(j,P.__webglTexture,r.TEXTURE0+z);let re=n.get(ie);if(ie.version!==re.__version||J===!0){if(t.activeTexture(r.TEXTURE0+z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let Q=Ge.getPrimaries(Ge.workingColorSpace),le=y.colorSpace===yi?null:Ge.getPrimaries(y.colorSpace),me=y.colorSpace===yi||Q===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment);let ee=m(y.image,!1,i.maxTextureSize);ee=jt(y,ee);let ae=s.convert(y.format,y.colorSpace),Re=s.convert(y.type),he=x(y.internalFormat,ae,Re,y.normalized,y.colorSpace,y.isVideoTexture);ke(j,y);let oe,Ce=y.mipmaps,Le=y.isVideoTexture!==!0,He=re.__version===void 0||J===!0,U=ie.dataReady,ce=S(y,ee);if(y.isDepthTexture)he=M(y.format===Hi,y.type),He&&(Le?t.texStorage2D(r.TEXTURE_2D,1,he,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,he,ee.width,ee.height,0,ae,Re,null));else if(y.isDataTexture)if(Ce.length>0){Le&&He&&t.texStorage2D(r.TEXTURE_2D,ce,he,Ce[0].width,Ce[0].height);for(let Q=0,le=Ce.length;Q<le;Q++)oe=Ce[Q],Le?U&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,oe.width,oe.height,ae,Re,oe.data):t.texImage2D(r.TEXTURE_2D,Q,he,oe.width,oe.height,0,ae,Re,oe.data);y.generateMipmaps=!1}else Le?(He&&t.texStorage2D(r.TEXTURE_2D,ce,he,ee.width,ee.height),U&&te(y,ee,ae,Re)):t.texImage2D(r.TEXTURE_2D,0,he,ee.width,ee.height,0,ae,Re,ee.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Le&&He&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,he,Ce[0].width,Ce[0].height,ee.depth);for(let Q=0,le=Ce.length;Q<le;Q++)if(oe=Ce[Q],y.format!==bn)if(ae!==null)if(Le){if(U)if(y.layerUpdates.size>0){let me=Xl(oe.width,oe.height,y.format,y.type);for(let ne of y.layerUpdates){let Pe=oe.data.subarray(ne*me/oe.data.BYTES_PER_ELEMENT,(ne+1)*me/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,ne,oe.width,oe.height,1,ae,Pe)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,oe.width,oe.height,ee.depth,ae,oe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Q,he,oe.width,oe.height,ee.depth,0,oe.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?U&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,oe.width,oe.height,ee.depth,ae,Re,oe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Q,he,oe.width,oe.height,ee.depth,0,ae,Re,oe.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Le&&He&&t.texStorage2D(r.TEXTURE_2D,ce,he,Ce[0].width,Ce[0].height);for(let Q=0,le=Ce.length;Q<le;Q++)oe=Ce[Q],y.format!==bn?ae!==null?Le?U&&t.compressedTexSubImage2D(r.TEXTURE_2D,Q,0,0,oe.width,oe.height,ae,oe.data):t.compressedTexImage2D(r.TEXTURE_2D,Q,he,oe.width,oe.height,0,oe.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?U&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,oe.width,oe.height,ae,Re,oe.data):t.texImage2D(r.TEXTURE_2D,Q,he,oe.width,oe.height,0,ae,Re,oe.data)}else if(y.isDataArrayTexture)if(Le){if(He&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,he,ee.width,ee.height,ee.depth),U)if(y.layerUpdates.size>0){let Q=Xl(ee.width,ee.height,y.format,y.type);for(let le of y.layerUpdates){let me=ee.data.subarray(le*Q/ee.data.BYTES_PER_ELEMENT,(le+1)*Q/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,le,ee.width,ee.height,1,ae,Re,me)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ae,Re,ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,he,ee.width,ee.height,ee.depth,0,ae,Re,ee.data);else if(y.isData3DTexture)Le?(He&&t.texStorage3D(r.TEXTURE_3D,ce,he,ee.width,ee.height,ee.depth),U&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ae,Re,ee.data)):t.texImage3D(r.TEXTURE_3D,0,he,ee.width,ee.height,ee.depth,0,ae,Re,ee.data);else if(y.isFramebufferTexture){if(He)if(Le)t.texStorage2D(r.TEXTURE_2D,ce,he,ee.width,ee.height);else{let Q=ee.width,le=ee.height;for(let me=0;me<ce;me++)t.texImage2D(r.TEXTURE_2D,me,he,Q,le,0,ae,Re,null),Q>>=1,le>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in r){let Q=r.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),ee.parentNode!==Q){Q.appendChild(ee),u.add(y),Q.onpaint=le=>{let me=le.changedElements;for(let ne of u)me.includes(ne.image)&&(ne.needsUpdate=!0)},Q.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ee);else{let me=r.RGBA,ne=r.RGBA,Pe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,me,ne,Pe,ee)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Le&&He){let Q=lt(Ce[0]);t.texStorage2D(r.TEXTURE_2D,ce,he,Q.width,Q.height)}for(let Q=0,le=Ce.length;Q<le;Q++)oe=Ce[Q],Le?U&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,ae,Re,oe):t.texImage2D(r.TEXTURE_2D,Q,he,ae,Re,oe);y.generateMipmaps=!1}else if(Le){if(He){let Q=lt(ee);t.texStorage2D(r.TEXTURE_2D,ce,he,Q.width,Q.height)}U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ae,Re,ee)}else t.texImage2D(r.TEXTURE_2D,0,he,ae,Re,ee);p(y)&&v(j),re.__version=ie.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Ne(P,y,z){if(y.image.length!==6)return;let j=je(P,y),J=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+z);let ie=n.get(J);if(J.version!==ie.__version||j===!0){t.activeTexture(r.TEXTURE0+z);let re=Ge.getPrimaries(Ge.workingColorSpace),Z=y.colorSpace===yi?null:Ge.getPrimaries(y.colorSpace),ee=y.colorSpace===yi||re===Z?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ae=y.isCompressedTexture||y.image[0].isCompressedTexture,Re=y.image[0]&&y.image[0].isDataTexture,he=[];for(let ne=0;ne<6;ne++)!ae&&!Re?he[ne]=m(y.image[ne],!0,i.maxCubemapSize):he[ne]=Re?y.image[ne].image:y.image[ne],he[ne]=jt(y,he[ne]);let oe=he[0],Ce=s.convert(y.format,y.colorSpace),Le=s.convert(y.type),He=x(y.internalFormat,Ce,Le,y.normalized,y.colorSpace),U=y.isVideoTexture!==!0,ce=ie.__version===void 0||j===!0,Q=J.dataReady,le=S(y,oe);ke(r.TEXTURE_CUBE_MAP,y);let me;if(ae){U&&ce&&t.texStorage2D(r.TEXTURE_CUBE_MAP,le,He,oe.width,oe.height);for(let ne=0;ne<6;ne++){me=he[ne].mipmaps;for(let Pe=0;Pe<me.length;Pe++){let Te=me[Pe];y.format!==bn?Ce!==null?U?Q&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,0,0,Te.width,Te.height,Ce,Te.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,He,Te.width,Te.height,0,Te.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,0,0,Te.width,Te.height,Ce,Le,Te.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,He,Te.width,Te.height,0,Ce,Le,Te.data)}}}else{if(me=y.mipmaps,U&&ce){me.length>0&&le++;let ne=lt(he[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,le,He,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Re){U?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,he[ne].width,he[ne].height,Ce,Le,he[ne].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,He,he[ne].width,he[ne].height,0,Ce,Le,he[ne].data);for(let Pe=0;Pe<me.length;Pe++){let bt=me[Pe].image[ne].image;U?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,0,0,bt.width,bt.height,Ce,Le,bt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,He,bt.width,bt.height,0,Ce,Le,bt.data)}}else{U?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ce,Le,he[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,He,Ce,Le,he[ne]);for(let Pe=0;Pe<me.length;Pe++){let Te=me[Pe];U?Q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,0,0,Ce,Le,Te.image[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,He,Ce,Le,Te.image[ne])}}}p(y)&&v(r.TEXTURE_CUBE_MAP),ie.__version=J.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function _e(P,y,z,j,J,ie){let re=s.convert(z.format,z.colorSpace),Z=s.convert(z.type),ee=x(z.internalFormat,re,Z,z.normalized,z.colorSpace),ae=n.get(y),Re=n.get(z);if(Re.__renderTarget=y,!ae.__hasExternalTextures){let he=Math.max(1,y.width>>ie),oe=Math.max(1,y.height>>ie);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,ie,ee,he,oe,y.depth,0,re,Z,null):t.texImage2D(J,ie,ee,he,oe,0,re,Z,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),It(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,J,Re.__webglTexture,0,Mt(y)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,J,Re.__webglTexture,ie),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ke(P,y,z){if(r.bindRenderbuffer(r.RENDERBUFFER,P),y.depthBuffer){let j=y.depthTexture,J=j&&j.isDepthTexture?j.type:null,ie=M(y.stencilBuffer,J),re=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;It(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Mt(y),ie,y.width,y.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Mt(y),ie,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,ie,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,re,r.RENDERBUFFER,P)}else{let j=y.textures;for(let J=0;J<j.length;J++){let ie=j[J],re=s.convert(ie.format,ie.colorSpace),Z=s.convert(ie.type),ee=x(ie.internalFormat,re,Z,ie.normalized,ie.colorSpace);It(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Mt(y),ee,y.width,y.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Mt(y),ee,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,ee,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Nt(P,y,z){let j=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(y.depthTexture);if(J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j){if(J.__webglInit===void 0&&(J.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),J.__webglTexture===void 0){J.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),ke(r.TEXTURE_CUBE_MAP,y.depthTexture);let ae=s.convert(y.depthTexture.format),Re=s.convert(y.depthTexture.type),he;y.depthTexture.format===jn?he=r.DEPTH_COMPONENT24:y.depthTexture.format===Hi&&(he=r.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,he,y.width,y.height,0,ae,Re,null)}}else q(y.depthTexture,0);let ie=J.__webglTexture,re=Mt(y),Z=j?r.TEXTURE_CUBE_MAP_POSITIVE_X+z:r.TEXTURE_2D,ee=y.depthTexture.format===Hi?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===jn)It(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,Z,ie,0,re):r.framebufferTexture2D(r.FRAMEBUFFER,ee,Z,ie,0);else if(y.depthTexture.format===Hi)It(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,Z,ie,0,re):r.framebufferTexture2D(r.FRAMEBUFFER,ee,Z,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Je(P){let y=n.get(P),z=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){let j=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){let J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=j}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let j=0;j<6;j++)Nt(y.__webglFramebuffer[j],P,j);else{let j=P.texture.mipmaps;j&&j.length>0?Nt(y.__webglFramebuffer[0],P,0):Nt(y.__webglFramebuffer,P,0)}else if(z){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=r.createRenderbuffer(),Ke(y.__webglDepthbuffer[j],P,!1);else{let J=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ie=y.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,ie),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,ie)}}else{let j=P.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),Ke(y.__webglDepthbuffer,P,!1);else{let J=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ie=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ie),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,ie)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function it(P,y,z){let j=n.get(P);y!==void 0&&_e(j.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Je(P)}function gt(P){let y=P.texture,z=n.get(P),j=n.get(y);P.addEventListener("dispose",_);let J=P.textures,ie=P.isWebGLCubeRenderTarget===!0,re=J.length>1;if(re||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=y.version,a.memory.textures++),ie){z.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[Z]=[];for(let ee=0;ee<y.mipmaps.length;ee++)z.__webglFramebuffer[Z][ee]=r.createFramebuffer()}else z.__webglFramebuffer[Z]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let Z=0;Z<y.mipmaps.length;Z++)z.__webglFramebuffer[Z]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(re)for(let Z=0,ee=J.length;Z<ee;Z++){let ae=n.get(J[Z]);ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture(),a.memory.textures++)}if(P.samples>0&&It(P)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Z=0;Z<J.length;Z++){let ee=J[Z];z.__webglColorRenderbuffer[Z]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[Z]);let ae=s.convert(ee.format,ee.colorSpace),Re=s.convert(ee.type),he=x(ee.internalFormat,ae,Re,ee.normalized,ee.colorSpace,P.isXRRenderTarget===!0),oe=Mt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,he,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Z,r.RENDERBUFFER,z.__webglColorRenderbuffer[Z])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),Ke(z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ie){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),ke(r.TEXTURE_CUBE_MAP,y);for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0)for(let ee=0;ee<y.mipmaps.length;ee++)_e(z.__webglFramebuffer[Z][ee],P,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ee);else _e(z.__webglFramebuffer[Z],P,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(y)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let Z=0,ee=J.length;Z<ee;Z++){let ae=J[Z],Re=n.get(ae),he=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(he=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(he,Re.__webglTexture),ke(he,ae),_e(z.__webglFramebuffer,P,ae,r.COLOR_ATTACHMENT0+Z,he,0),p(ae)&&v(he)}t.unbindTexture()}else{let Z=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Z=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Z,j.__webglTexture),ke(Z,y),y.mipmaps&&y.mipmaps.length>0)for(let ee=0;ee<y.mipmaps.length;ee++)_e(z.__webglFramebuffer[ee],P,y,r.COLOR_ATTACHMENT0,Z,ee);else _e(z.__webglFramebuffer,P,y,r.COLOR_ATTACHMENT0,Z,0);p(y)&&v(Z),t.unbindTexture()}P.depthBuffer&&Je(P)}function Qe(P){let y=P.textures;for(let z=0,j=y.length;z<j;z++){let J=y[z];if(p(J)){let ie=E(P),re=n.get(J).__webglTexture;t.bindTexture(ie,re),v(ie),t.unbindTexture()}}}let yt=[],Vt=[];function cn(P){if(P.samples>0){if(It(P)===!1){let y=P.textures,z=P.width,j=P.height,J=r.COLOR_BUFFER_BIT,ie=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=n.get(P),Z=y.length>1;if(Z)for(let ae=0;ae<y.length;ae++)t.bindFramebuffer(r.FRAMEBUFFER,re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,re.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);let ee=P.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let ae=0;ae<y.length;ae++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),Z){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,re.__webglColorRenderbuffer[ae]);let Re=n.get(y[ae]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Re,0)}r.blitFramebuffer(0,0,z,j,0,0,z,j,J,r.NEAREST),c===!0&&(yt.length=0,Vt.length=0,yt.push(r.COLOR_ATTACHMENT0+ae),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(yt.push(ie),Vt.push(ie),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Vt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,yt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Z)for(let ae=0;ae<y.length;ae++){t.bindFramebuffer(r.FRAMEBUFFER,re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,re.__webglColorRenderbuffer[ae]);let Re=n.get(y[ae]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,re.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,Re,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){let y=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function Mt(P){return Math.min(i.maxSamples,P.samples)}function It(P){let y=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function O(P){let y=a.render.frame;h.get(P)!==y&&(h.set(P,y),P.update())}function jt(P,y){let z=P.colorSpace,j=P.format,J=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==sn&&z!==yi&&(Ge.getTransfer(z)===st?(j!==bn||J!==un)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",z)),y}function lt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=k,this.getTextureUnits=I,this.setTextureUnits=B,this.setTexture2D=q,this.setTexture2DArray=H,this.setTexture3D=X,this.setTextureCube=$,this.rebindTextures=it,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=cn,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=It,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function vx(r,e){function t(n,i=yi){let s,a=Ge.getTransfer(i);if(n===un)return r.UNSIGNED_BYTE;if(n===Bo)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ko)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Fl)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Nl)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ll)return r.BYTE;if(n===Dl)return r.SHORT;if(n===cr)return r.UNSIGNED_SHORT;if(n===Oo)return r.INT;if(n===Gn)return r.UNSIGNED_INT;if(n===gn)return r.FLOAT;if(n===kt)return r.HALF_FLOAT;if(n===Ul)return r.ALPHA;if(n===Ol)return r.RGB;if(n===bn)return r.RGBA;if(n===jn)return r.DEPTH_COMPONENT;if(n===Hi)return r.DEPTH_STENCIL;if(n===zo)return r.RED;if(n===Ho)return r.RED_INTEGER;if(n===Gi)return r.RG;if(n===Go)return r.RG_INTEGER;if(n===Vo)return r.RGBA_INTEGER;if(n===ua||n===da||n===fa||n===pa)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ua)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ua)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===da)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wo||n===qo||n===Xo||n===jo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Wo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ko||n===Yo||n===Jo||n===Zo||n===$o||n===ma||n===Qo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ko||n===Yo)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Jo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Zo)return s.COMPRESSED_R11_EAC;if(n===$o)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ma)return s.COMPRESSED_RG11_EAC;if(n===Qo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===cc||n===lc||n===hc||n===uc||n===dc||n===fc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ec)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ic)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ac)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fc)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pc||n===mc||n===gc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===pc)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bc||n===xc||n===ga||n===_c)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===bc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===xc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ga)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_c)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===lr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var yx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Jr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Tt({vertexShader:yx,fragmentShader:Mx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ye(new Ot(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},dh=class extends Bn{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,b=typeof XRWebGLBinding<"u",m=new uh,p={},v=t.getContextAttributes(),E=null,x=null,M=[],S=[],A=new Ee,_=null,w=null,C=new Et;C.viewport=new ut;let D=new Et;D.viewport=new ut;let F=[C,D],k=new Co,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=M[Y];return te===void 0&&(te=new Ks,M[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=M[Y];return te===void 0&&(te=new Ks,M[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=M[Y];return te===void 0&&(te=new Ks,M[Y]=te),te.getHandSpace()};function W(Y){let te=S.indexOf(Y.inputSource);if(te===-1)return;let be=M[te];be!==void 0&&(be.update(Y.inputSource,Y.frame,l||a),be.dispatchEvent({type:Y.type,data:Y.inputSource}))}function L(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",q);for(let Y=0;Y<M.length;Y++){let te=S[Y];te!==null&&(S[Y]=null,M[Y].disconnect(te))}I=null,B=null,m.reset();for(let Y in p)delete p[Y];if(e.setRenderTarget(E),f=null,d=null,u=null,i=null,x=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),w!==null){let Y=w.camera;Y.fov=w.fov,Y.zoom=w.zoom,Y.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(E=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",L),i.addEventListener("inputsourceschange",q),v.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Ne=null,_e=null;v.depth&&(_e=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=v.stencil?Hi:jn,Ne=v.stencil?lr:Gn);let Ke={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Ke),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new wt(d.textureWidth,d.textureHeight,{format:bn,type:un,depthTexture:new Oi(d.textureWidth,d.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let be={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,be),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new wt(f.framebufferWidth,f.framebufferHeight,{format:bn,type:un,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),je.setContext(i),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(Y){for(let te=0;te<Y.removed.length;te++){let be=Y.removed[te],Ne=S.indexOf(be);Ne>=0&&(S[Ne]=null,M[Ne].disconnect(be))}for(let te=0;te<Y.added.length;te++){let be=Y.added[te],Ne=S.indexOf(be);if(Ne===-1){for(let Ke=0;Ke<M.length;Ke++)if(Ke>=S.length){S.push(be),Ne=Ke;break}else if(S[Ke]===null){S[Ke]=be,Ne=Ke;break}if(Ne===-1)break}let _e=M[Ne];_e&&_e.connect(be)}}let H=new R,X=new R;function $(Y,te,be){H.setFromMatrixPosition(te.matrixWorld),X.setFromMatrixPosition(be.matrixWorld);let Ne=H.distanceTo(X),_e=te.projectionMatrix.elements,Ke=be.projectionMatrix.elements,Nt=_e[14]/(_e[10]-1),Je=_e[14]/(_e[10]+1),it=(_e[9]+1)/_e[5],gt=(_e[9]-1)/_e[5],Qe=(_e[8]-1)/_e[0],yt=(Ke[8]+1)/Ke[0],Vt=Nt*Qe,cn=Nt*yt,Mt=Ne/(-Qe+yt),It=Mt*-Qe;if(te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(It),Y.translateZ(Mt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),_e[10]===-1)Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let O=Nt+Mt,jt=Je+Mt,lt=Vt-It,P=cn+(Ne-It),y=it*Je/jt*O,z=gt*Je/jt*O;Y.projectionMatrix.makePerspective(lt,P,y,z,O,jt),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function se(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let te=Y.near,be=Y.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(be=m.depthFar)),k.near=D.near=C.near=te,k.far=D.far=C.far=be,(I!==k.near||B!==k.far)&&(i.updateRenderState({depthNear:k.near,depthFar:k.far}),I=k.near,B=k.far),k.layers.mask=Y.layers.mask|6,C.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;let Ne=Y.parent,_e=k.cameras;se(k,Ne);for(let Ke=0;Ke<_e.length;Ke++)se(_e[Ke],Ne);_e.length===2?$(k,C,D):k.projectionMatrix.copy(C.projectionMatrix),w===null&&Y.isPerspectiveCamera&&(w={camera:Y,fov:Y.fov,zoom:Y.zoom}),ge(Y,k,Ne)};function ge(Y,te,be){be===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(be.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ss*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(Y){return p[Y]};let et=null;function ke(Y,te){if(h=te.getViewerPose(l||a),g=te,h!==null){let be=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Ne=!1;be.length!==k.cameras.length&&(k.cameras.length=0,Ne=!0);for(let Je=0;Je<be.length;Je++){let it=be[Je],gt=null;if(f!==null)gt=f.getViewport(it);else{let yt=u.getViewSubImage(d,it);gt=yt.viewport,Je===0&&(e.setRenderTargetTextures(x,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(x))}let Qe=F[Je];Qe===void 0&&(Qe=new Et,Qe.layers.enable(Je),Qe.viewport=new ut,F[Je]=Qe),Qe.matrix.fromArray(it.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(it.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(gt.x,gt.y,gt.width,gt.height),Je===0&&(k.matrix.copy(Qe.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ne===!0&&k.cameras.push(Qe)}let _e=i.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let Je=u.getDepthInformation(be[0]);Je&&Je.isValid&&Je.texture&&m.init(Je,i.renderState)}if(_e&&_e.includes("camera-access")&&b){e.state.unbindTexture(),u=n.getBinding();for(let Je=0;Je<be.length;Je++){let it=be[Je].camera;if(it){let gt=p[it];gt||(gt=new Jr,p[it]=gt);let Qe=u.getCameraImage(it);gt.sourceTexture=Qe}}}}for(let be=0;be<M.length;be++){let Ne=S[be],_e=M[be];Ne!==null&&_e!==void 0&&_e.update(Ne,te,l||a)}et&&et(Y,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}let je=new ef;je.setAnimationLoop(ke),this.setAnimationLoop=function(Y){et=Y},this.dispose=function(){}}},Sx=new Ue,of=new Oe;of.set(-1,0,0,0,1,0,0,0,1);function Tx(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Vl(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,E,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),b(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,v,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Bt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Bt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p),E=v.envMap,x=v.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(Sx.makeRotationFromEuler(x)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(of),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Bt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ex(r,e,t,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){let S=M.program;n.uniformBlockBinding(x,S)}function l(x,M){let S=i[x.id];S===void 0&&(m(x),S=h(x),i[x.id]=S,x.addEventListener("dispose",v));let A=M.program;n.updateUBOMapping(x,A);let _=e.render.frame;s[x.id]!==_&&(d(x),s[x.id]=_)}function h(x){let M=u();x.__bindingPointIndex=M;let S=r.createBuffer(),A=x.__size,_=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,A,_),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,S),S}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let M=i[x.id],S=x.uniforms,A=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let _=0,w=S.length;_<w;_++){let C=S[_];if(Array.isArray(C))for(let D=0,F=C.length;D<F;D++)f(C[D],_,D,A);else f(C,_,0,A)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,M,S,A){if(b(x,M,S,A)===!0){let _=x.__offset,w=x.value;if(Array.isArray(w)){let C=0;for(let D=0;D<w.length;D++){let F=w[D],k=p(F);g(F,x.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,x.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,_,x.__data)}}function g(x,M,S){typeof x=="number"||typeof x=="boolean"?M[0]=x:x.isMatrix3?(M[0]=x.elements[0],M[1]=x.elements[1],M[2]=x.elements[2],M[3]=0,M[4]=x.elements[3],M[5]=x.elements[4],M[6]=x.elements[5],M[7]=0,M[8]=x.elements[6],M[9]=x.elements[7],M[10]=x.elements[8],M[11]=0):ArrayBuffer.isView(x)?M.set(new x.constructor(x.buffer,x.byteOffset,M.length)):x.toArray(M,S)}function b(x,M,S,A){let _=x.value,w=M+"_"+S;if(A[w]===void 0)return typeof _=="number"||typeof _=="boolean"?A[w]=_:ArrayBuffer.isView(_)?A[w]=_.slice():A[w]=_.clone(),!0;{let C=A[w];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return A[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function m(x){let M=x.uniforms,S=0,A=16;for(let w=0,C=M.length;w<C;w++){let D=Array.isArray(M[w])?M[w]:[M[w]];for(let F=0,k=D.length;F<k;F++){let I=D[F],B=Array.isArray(I.value)?I.value:[I.value];for(let W=0,L=B.length;W<L;W++){let q=B[W],H=p(q),X=S%A,$=X%H.boundary,se=X+$;S+=$,se!==0&&A-se<H.storage&&(S+=A-se),I.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=H.storage}}}let _=S%A;return _>0&&(S+=A-_),x.__size=S,x.__cache={},this}function p(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):Ae("WebGLRenderer: Unsupported uniform value type.",x),M}function v(x){let M=x.target;M.removeEventListener("dispose",v);let S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function E(){for(let x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:c,update:l,dispose:E}}var wx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Qn=null;function Ax(){return Qn===null&&(Qn=new $s(wx,16,16,Gi,kt),Qn.name="DFG_LUT",Qn.minFilter=Ct,Qn.magFilter=Ct,Qn.wrapS=yn,Qn.wrapT=yn,Qn.generateMipmaps=!1,Qn.needsUpdate=!0),Qn}var wc=class{constructor(e={}){let{canvas:t=wd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=un}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let b=f,m=new Set([Vo,Go,Ho]),p=new Set([un,Gn,cr,lr,Bo,ko]),v=new Uint32Array(4),E=new Int32Array(4),x=new R,M=null,S=null,A=[],_=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,F=null,k=null,I=null,B=null;this._outputColorSpace=rt;let W=0,L=0,q=null,H=-1,X=null,$=new ut,se=new ut,ge=null,et=new pe(0),ke=0,je=t.width,Y=t.height,te=1,be=null,Ne=null,_e=new ut(0,0,je,Y),Ke=new ut(0,0,je,Y),Nt=!1,Je=new Qs,it=!1,gt=!1,Qe=new Ue,yt=new R,Vt=new ut,cn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Mt=!1;function It(){return q===null?te:1}let O=n;function jt(T,N){return t.getContext(T,N)}let lt,P,y,z,j,J,ie,re,Z,ee,ae,Re,he,oe,Ce,Le,He,U,ce,Q,le,me,ne;try{let T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",Pn,!1),O===null){let N="webgl2";if(O=jt(N,T),O===null)throw jt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pe()}catch(T){throw t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Pn,!1),Fe("WebGLRenderer: "+T.message),T}function Pe(){lt=new Fg(O),lt.init(),le=new vx(O,lt),P=new Tg(O,lt,e,le),y=new xx(O,lt),P.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),k=O.createFramebuffer(),I=O.createFramebuffer(),B=O.createFramebuffer(),z=new Og(O),j=new sx,J=new _x(O,lt,y,j,P,le,z),ie=new Dg(C),re=new kp(O),me=new Mg(O,re),Z=new Ng(O,re,z,me),ee=new kg(O,Z,re,me,z),U=new Bg(O,P,J),Ce=new Eg(j),ae=new ix(C,ie,lt,P,me,Ce),Re=new Tx(C,j),he=new ax,oe=new dx(lt),He=new yg(C,ie,y,ee,g,c),Le=new bx(C,ee,P),ne=new Ex(O,z,P,y),ce=new Sg(O,lt,z),Q=new Ug(O,lt,z),z.programs=ae.programs,C.capabilities=P,C.extensions=lt,C.properties=j,C.renderLists=he,C.shadowMap=Le,C.state=y,C.info=z}b!==un&&(w=new Hg(b,t.width,t.height,o,i,s));let Te=new dh(C,O);this.xr=Te,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let T=lt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=lt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(T){T!==void 0&&(te=T,this.setSize(je,Y,!1))},this.getSize=function(T){return T.set(je,Y)},this.setSize=function(T,N,K=!0){if(Te.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}je=T,Y=N,t.width=Math.floor(T*te),t.height=Math.floor(N*te),K===!0&&(t.style.width=T+"px",t.style.height=N+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(je*te,Y*te).floor()},this.setDrawingBufferSize=function(T,N,K){je=T,Y=N,te=K,t.width=Math.floor(T*K),t.height=Math.floor(N*K),this.setViewport(0,0,T,N)},this.setEffects=function(T){if(b===un){Fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let N=0;N<T.length;N++)if(T[N].isOutputPass===!0){Ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy($)},this.getViewport=function(T){return T.copy(_e)},this.setViewport=function(T,N,K,G){T.isVector4?_e.set(T.x,T.y,T.z,T.w):_e.set(T,N,K,G),y.viewport($.copy(_e).multiplyScalar(te).round())},this.getScissor=function(T){return T.copy(Ke)},this.setScissor=function(T,N,K,G){T.isVector4?Ke.set(T.x,T.y,T.z,T.w):Ke.set(T,N,K,G),y.scissor(se.copy(Ke).multiplyScalar(te).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(T){y.setScissorTest(Nt=T)},this.setOpaqueSort=function(T){be=T},this.setTransparentSort=function(T){Ne=T},this.getClearColor=function(T){return T.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(T=!0,N=!0,K=!0){let G=0;if(T){let V=!1;if(q!==null){let fe=q.texture.format;V=m.has(fe)}if(V){let fe=q.texture.type,ve=p.has(fe),de=He.getClearColor(),Me=He.getClearAlpha(),we=de.r,qe=de.g,Ze=de.b;ve?(v[0]=we,v[1]=qe,v[2]=Ze,v[3]=Me,O.clearBufferuiv(O.COLOR,0,v)):(E[0]=we,E[1]=qe,E[2]=Ze,E[3]=Me,O.clearBufferiv(O.COLOR,0,E))}else G|=O.COLOR_BUFFER_BIT}N&&(G|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),F=T},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Pn,!1),He.dispose(),he.dispose(),oe.dispose(),j.dispose(),ie.dispose(),ee.dispose(),me.dispose(),ne.dispose(),ae.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Jh),Te.removeEventListener("sessionend",Zh),Ki.stop()};function bt(T){T.preventDefault(),zr("WebGLRenderer: Context Lost."),D=!0}function at(){zr("WebGLRenderer: Context Restored."),D=!1;let T=z.autoReset,N=Le.enabled,K=Le.autoUpdate,G=Le.needsUpdate,V=Le.type;Pe(),z.autoReset=T,Le.enabled=N,Le.autoUpdate=K,Le.needsUpdate=G,Le.type=V}function Pn(T){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Vn(T){let N=T.target;N.removeEventListener("dispose",Vn),wf(N)}function wf(T){Af(T),j.remove(T)}function Af(T){let N=j.get(T).programs;N!==void 0&&(N.forEach(function(K){ae.releaseProgram(K)}),T.isShaderMaterial&&ae.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,K,G,V,fe){N===null&&(N=cn);let ve=V.isMesh&&V.matrixWorld.determinantAffine()<0,de=Pf(T,N,K,G,V);y.setMaterial(G,ve);let Me=K.index,we=1;if(G.wireframe===!0){if(Me=Z.getWireframeAttribute(K),Me===void 0)return;we=2}let qe=K.drawRange,Ze=K.attributes.position,Se=qe.start*we,ot=(qe.start+qe.count)*we;fe!==null&&(Se=Math.max(Se,fe.start*we),ot=Math.min(ot,(fe.start+fe.count)*we)),Me!==null?(Se=Math.max(Se,0),ot=Math.min(ot,Me.count)):Ze!=null&&(Se=Math.max(Se,0),ot=Math.min(ot,Ze.count));let Lt=ot-Se;if(Lt<0||Lt===1/0)return;me.setup(V,G,de,K,Me);let _t,mt=ce;if(Me!==null&&(_t=re.get(Me),mt=Q,mt.setIndex(_t)),V.isMesh)G.wireframe===!0?(y.setLineWidth(G.wireframeLinewidth*It()),mt.setMode(O.LINES)):mt.setMode(O.TRIANGLES);else if(V.isLine){let Kt=G.linewidth;Kt===void 0&&(Kt=1),y.setLineWidth(Kt*It()),V.isLineSegments?mt.setMode(O.LINES):V.isLineLoop?mt.setMode(O.LINE_LOOP):mt.setMode(O.LINE_STRIP)}else V.isPoints?mt.setMode(O.POINTS):V.isSprite&&mt.setMode(O.TRIANGLES);if(V.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))mt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Kt=V._multiDrawStarts,xe=V._multiDrawCounts,tn=V._multiDrawCount,tt=Me?re.get(Me).bytesPerElement:1,_n=j.get(G).currentProgram.getUniforms();for(let Wn=0;Wn<tn;Wn++)_n.setValue(O,"_gl_DrawID",Wn),mt.render(Kt[Wn]/tt,xe[Wn])}else if(V.isInstancedMesh)mt.renderInstances(Se,Lt,V.count);else if(K.isInstancedBufferGeometry){let Kt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,xe=Math.min(K.instanceCount,Kt);mt.renderInstances(Se,Lt,xe)}else mt.render(Se,Lt)};function Yh(T,N,K,G){F!==null&&T.isNodeMaterial&&F.setObject(G,T),it===!0&&Ce.setState(T,K,!1),T.transparent===!0&&T.side===Tn&&T.forceSinglePass===!1?(T.side=Bt,T.needsUpdate=!0,Ia(T,N,G),T.side=$n,T.needsUpdate=!0,Ia(T,N,G),T.side=Tn):Ia(T,N,G)}this.compile=function(T,N,K=null){K===null&&(K=T),F!==null&&F.renderStart(T,N,K),S=oe.get(K),S.init(N),_.push(S),K.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(S.pushLight(V),V.castShadow&&S.pushShadow(V))}),T!==K&&T.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(S.pushLight(V),V.castShadow&&S.pushShadow(V))}),S.setupLights(),F!==null&&F.updateLights(S.state.lightsArray),gt=this.localClippingEnabled,it=Ce.init(this.clippingPlanes,gt),it===!0&&Ce.setGlobalState(this.clippingPlanes,N),F!==null&&Le.render(S.state.shadowsArray,K,N);let G=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let fe=V.material;if(fe)if(Array.isArray(fe))for(let ve=0;ve<fe.length;ve++){let de=fe[ve];Yh(de,K,N,V),G.add(de)}else Yh(fe,K,N,V),G.add(fe)}),S=_.pop(),F!==null&&F.renderEnd(),G},this.compileAsync=function(T,N,K=null){let G=this.compile(T,N,K);return new Promise(V=>{function fe(){if(G.forEach(function(ve){let Me=j.get(ve).currentProgram;(Me===void 0||Me.isReady())&&G.delete(ve)}),G.size===0){V(T);return}setTimeout(fe,10)}lt.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Wc=null;function Rf(T){Wc&&Wc(T)}function Jh(){Ki.stop()}function Zh(){Ki.start()}let Ki=new ef;Ki.setAnimationLoop(Rf),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(T){Wc=T,Te.setAnimationLoop(T),T===null?Ki.stop():Ki.start()},Te.addEventListener("sessionstart",Jh),Te.addEventListener("sessionend",Zh),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(T,N);let K=Te.enabled===!0&&Te.isPresenting===!0,G=w!==null&&(q===null||K)&&w.begin(C,q);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(N),N=Te.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,N,q),S=oe.get(T,_.length),S.init(N),S.state.textureUnits=J.getTextureUnits(),_.push(S),Qe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Je.setFromProjectionMatrix(Qe,Un,N.reversedDepth),gt=this.localClippingEnabled,it=Ce.init(this.clippingPlanes,gt),M=he.get(T,A.length),M.init(),A.push(M),Te.enabled===!0&&Te.isPresenting===!0){let ve=C.xr.getDepthSensingMesh();ve!==null&&qc(ve,N,-1/0,C.sortObjects)}qc(T,N,0,C.sortObjects),M.finish(),F!==null&&F.updateLights(S.state.lightsArray),C.sortObjects===!0&&M.sort(be,Ne),Mt=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,Mt&&He.addToRenderList(M,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),it===!0&&Ce.beginShadows();let V=S.state.shadowsArray;if(Le.render(V,T,N),it===!0&&Ce.endShadows(),(G&&w.hasRenderPass())===!1){let ve=M.opaque,de=M.transmissive;if(S.setupLights(),N.isArrayCamera){let Me=N.cameras;if(de.length>0)for(let we=0,qe=Me.length;we<qe;we++){let Ze=Me[we];Qh(ve,de,T,Ze)}Mt&&He.render(T);for(let we=0,qe=Me.length;we<qe;we++){let Ze=Me[we];$h(M,T,Ze,Ze.viewport)}}else de.length>0&&Qh(ve,de,T,N),Mt&&He.render(T),$h(M,T,N)}q!==null&&L===0&&(J.updateMultisampleRenderTarget(q),J.updateRenderTargetMipmap(q)),G&&w.end(C),T.isScene===!0&&T.onAfterRender(C,T,N),me.resetDefaultState(),H=-1,X=null,_.pop(),_.length>0?(S=_[_.length-1],J.setTextureUnits(S.state.textureUnits),it===!0&&Ce.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,F!==null&&F.renderEnd()};function qc(T,N,K,G){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLightProbeGrid)S.pushLightProbeGrid(T);else if(T.isLight)S.pushLight(T),T.castShadow&&S.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(Je)){G&&Vt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Qe);let ve=ee.update(T),de=T.material;de.visible&&M.push(T,ve,de,K,Vt.z,null,N)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(Je))){let ve=ee.update(T),de=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Vt.copy(T.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Vt.copy(ve.boundingSphere.center)),Vt.applyMatrix4(T.matrixWorld).applyMatrix4(Qe)),Array.isArray(de)){let Me=ve.groups;for(let we=0,qe=Me.length;we<qe;we++){let Ze=Me[we],Se=de[Ze.materialIndex];Se&&Se.visible&&M.push(T,ve,Se,K,Vt.z,Ze,N)}}else de.visible&&M.push(T,ve,de,K,Vt.z,null,N)}}let fe=T.children;for(let ve=0,de=fe.length;ve<de;ve++)qc(fe[ve],N,K,G)}function $h(T,N,K,G){let{opaque:V,transmissive:fe,transparent:ve}=T;S.setupLightsView(K),it===!0&&Ce.setGlobalState(C.clippingPlanes,K),G&&y.viewport($.copy(G)),V.length>0&&Pa(V,N,K),fe.length>0&&Pa(fe,N,K),ve.length>0&&Pa(ve,N,K),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Qh(T,N,K,G){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[G.id]===void 0){let Se=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[G.id]=new wt(1,1,{generateMipmaps:!0,type:Se?kt:un,minFilter:Hn,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}let fe=S.state.transmissionRenderTarget[G.id],ve=G.viewport||$;fe.setSize(ve.z*C.transmissionResolutionScale,ve.w*C.transmissionResolutionScale);let de=C.getRenderTarget(),Me=C.getActiveCubeFace(),we=C.getActiveMipmapLevel();C.setRenderTarget(fe),C.getClearColor(et),ke=C.getClearAlpha(),ke<1&&C.setClearColor(16777215,.5),C.clear(),Mt&&He.render(K);let qe=C.toneMapping;C.toneMapping=zn;let Ze=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),S.setupLightsView(G),it===!0&&Ce.setGlobalState(C.clippingPlanes,G),Pa(T,K,G),J.updateMultisampleRenderTarget(fe),J.updateRenderTargetMipmap(fe),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let ot=0,Lt=N.length;ot<Lt;ot++){let _t=N[ot],{object:mt,geometry:Kt,material:xe,group:tn}=_t;if(xe.side===Tn&&mt.layers.test(G.layers)){let tt=xe.side;xe.side=Bt,xe.needsUpdate=!0,eu(mt,K,G,Kt,xe,tn),xe.side=tt,xe.needsUpdate=!0,Se=!0}}Se===!0&&(J.updateMultisampleRenderTarget(fe),J.updateRenderTargetMipmap(fe))}C.setRenderTarget(de,Me,we),C.setClearColor(et,ke),Ze!==void 0&&(G.viewport=Ze),C.toneMapping=qe}function Pa(T,N,K){let G=N.isScene===!0?N.overrideMaterial:null;for(let V=0,fe=T.length;V<fe;V++){let ve=T[V],{object:de,geometry:Me,group:we}=ve,qe=ve.material;qe.allowOverride===!0&&G!==null&&(qe=G),de.layers.test(K.layers)&&eu(de,N,K,Me,qe,we)}}function eu(T,N,K,G,V,fe){F!==null&&V.isNodeMaterial&&F.setObject(T,V),T.onBeforeRender(C,N,K,G,V,fe),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(C,N,K,G,T,fe),V.transparent===!0&&V.side===Tn&&V.forceSinglePass===!1?(V.side=Bt,V.needsUpdate=!0,C.renderBufferDirect(K,N,G,V,T,fe),V.side=$n,V.needsUpdate=!0,C.renderBufferDirect(K,N,G,V,T,fe),V.side=Tn):C.renderBufferDirect(K,N,G,V,T,fe),T.onAfterRender(C,N,K,G,V,fe)}function Ia(T,N,K){N.isScene!==!0&&(N=cn);let G=j.get(T),V=S.state.lights,fe=S.state.shadowsArray,ve=V.state.version,de=ae.getParameters(T,V.state,fe,N,K,S.state.lightProbeGridArray),Me=ae.getProgramCacheKey(de),we=G.programs;G.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?N.environment:null,G.fog=N.fog;let qe=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;G.envMap=ie.get(T.envMap||G.environment,qe),G.envMapRotation=G.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,we===void 0&&(T.addEventListener("dispose",Vn),we=new Map,G.programs=we);let Ze=we.get(Me);if(Ze!==void 0){if(G.currentProgram===Ze&&G.lightsStateVersion===ve)return nu(T,de),Ze}else de.uniforms=ae.getUniforms(T),F!==null&&T.isNodeMaterial&&F.build(T,K,de),T.onBeforeCompile(de,C),Ze=ae.acquireProgram(de,Me),we.set(Me,Ze),G.uniforms=de.uniforms;let Se=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Se.clippingPlanes=Ce.uniform),nu(T,de),G.needsLights=Lf(T),G.lightsStateVersion=ve,G.needsLights&&(Se.ambientLightColor.value=V.state.ambient,Se.lightProbe.value=V.state.probe,Se.sunLights.value=V.state.sun,Se.sunLightShadows.value=V.state.sunShadow,Se.directionalLights.value=V.state.directional,Se.directionalLightShadows.value=V.state.directionalShadow,Se.spotLights.value=V.state.spot,Se.spotLightShadows.value=V.state.spotShadow,Se.rectAreaLights.value=V.state.rectArea,Se.ltc_1.value=V.state.rectAreaLTC1,Se.ltc_2.value=V.state.rectAreaLTC2,Se.pointLights.value=V.state.point,Se.pointLightShadows.value=V.state.pointShadow,Se.hemisphereLights.value=V.state.hemi,Se.sunShadowMatrix.value=V.state.sunShadowMatrix,Se.sunShadowCascade.value=V.state.sunShadowCascade,Se.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Se.spotLightMatrix.value=V.state.spotLightMatrix,Se.spotLightMap.value=V.state.spotLightMap,Se.pointShadowMatrix.value=V.state.pointShadowMatrix),G.lightProbeGrid=S.state.lightProbeGridArray.length>0,G.currentProgram=Ze,G.uniformsList=null,Ze}function tu(T){if(T.uniformsList===null){let N=T.currentProgram.getUniforms();T.uniformsList=fr.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function nu(T,N){let K=j.get(T);K.outputColorSpace=N.outputColorSpace,K.batching=N.batching,K.batchingColor=N.batchingColor,K.instancing=N.instancing,K.instancingColor=N.instancingColor,K.instancingMorph=N.instancingMorph,K.skinning=N.skinning,K.morphTargets=N.morphTargets,K.morphNormals=N.morphNormals,K.morphColors=N.morphColors,K.morphTargetsCount=N.morphTargetsCount,K.numClippingPlanes=N.numClippingPlanes,K.numIntersection=N.numClipIntersection,K.vertexAlphas=N.vertexAlphas,K.vertexTangents=N.vertexTangents,K.toneMapping=N.toneMapping}function Cf(T,N){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;x.setFromMatrixPosition(N.matrixWorld);for(let K=0,G=T.length;K<G;K++){let V=T[K];if(V.texture!==null&&V.boundingBox.containsPoint(x))return V}return null}function Pf(T,N,K,G,V){N.isScene!==!0&&(N=cn),J.resetTextureUnits();let fe=N.fog,ve=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?N.environment:null,de=q===null?C.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Ge.workingColorSpace,Me=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,we=ie.get(G.envMap||ve,Me),qe=G.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ze=!!K.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Se=!!K.morphAttributes.position,ot=!!K.morphAttributes.normal,Lt=!!K.morphAttributes.color,_t=zn;G.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(_t=C.toneMapping);let mt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Kt=mt!==void 0?mt.length:0,xe=j.get(G),tn=S.state.lights;if(it===!0&&(gt===!0||T!==X)){let xt=T===X&&G.id===H;Ce.setState(G,T,xt)}let tt=!1;G.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==tn.state.version||xe.outputColorSpace!==de||V.isBatchedMesh&&xe.batching===!1||!V.isBatchedMesh&&xe.batching===!0||V.isBatchedMesh&&xe.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&xe.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&xe.instancing===!1||!V.isInstancedMesh&&xe.instancing===!0||V.isSkinnedMesh&&xe.skinning===!1||!V.isSkinnedMesh&&xe.skinning===!0||V.isInstancedMesh&&xe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&xe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&xe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&xe.instancingMorph===!1&&V.morphTexture!==null||xe.envMap!==we||G.fog===!0&&xe.fog!==fe||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Ce.numPlanes||xe.numIntersection!==Ce.numIntersection)||xe.vertexAlphas!==qe||xe.vertexTangents!==Ze||xe.morphTargets!==Se||xe.morphNormals!==ot||xe.morphColors!==Lt||xe.toneMapping!==_t||xe.morphTargetsCount!==Kt||!!xe.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(tt=!0):(tt=!0,xe.__version=G.version);let _n=xe.currentProgram;tt===!0&&(_n=Ia(G,N,V),F&&G.isNodeMaterial&&F.onUpdateProgram(G,_n,xe));let Wn=!1,wi=!1,Ts=!1,ft=_n.getUniforms(),At=xe.uniforms;if(y.useProgram(_n.program)&&(Wn=!0,wi=!0,Ts=!0),G.id!==H&&(H=G.id,wi=!0),xe.needsLights){let xt=Cf(S.state.lightProbeGridArray,V);xe.lightProbeGrid!==xt&&(xe.lightProbeGrid=xt,wi=!0)}if(Wn||X!==T){y.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ft.setValue(O,"projectionMatrix",T.projectionMatrix),ft.setValue(O,"viewMatrix",T.matrixWorldInverse);let Ri=ft.map.cameraPosition;Ri!==void 0&&Ri.setValue(O,yt.setFromMatrixPosition(T.matrixWorld)),P.logarithmicDepthBuffer&&ft.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ft.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),X!==T&&(X=T,wi=!0,Ts=!0)}if(xe.needsLights&&(tn.state.sunShadowMap.length>0&&ft.setValue(O,"sunShadowMap",tn.state.sunShadowMap,J),tn.state.directionalShadowMap.length>0&&ft.setValue(O,"directionalShadowMap",tn.state.directionalShadowMap,J),tn.state.spotShadowMap.length>0&&ft.setValue(O,"spotShadowMap",tn.state.spotShadowMap,J),tn.state.pointShadowMap.length>0&&ft.setValue(O,"pointShadowMap",tn.state.pointShadowMap,J)),V.isSkinnedMesh){ft.setOptional(O,V,"bindMatrix"),ft.setOptional(O,V,"bindMatrixInverse");let xt=V.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),ft.setValue(O,"boneTexture",xt.boneTexture,J))}V.isBatchedMesh&&(ft.setOptional(O,V,"batchingTexture"),ft.setValue(O,"batchingTexture",V._matricesTexture,J),ft.setOptional(O,V,"batchingIdTexture"),ft.setValue(O,"batchingIdTexture",V._indirectTexture,J),ft.setOptional(O,V,"batchingColorTexture"),V._colorsTexture!==null&&ft.setValue(O,"batchingColorTexture",V._colorsTexture,J));let Ai=K.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&U.update(V,K,_n),(wi||xe.receiveShadow!==V.receiveShadow)&&(xe.receiveShadow=V.receiveShadow,ft.setValue(O,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&N.environment!==null&&(At.envMapIntensity.value=N.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=Ax()),wi){if(ft.setValue(O,"toneMappingExposure",C.toneMappingExposure),xe.needsLights&&If(At,Ts),fe&&G.fog===!0&&Re.refreshFogUniforms(At,fe),Re.refreshMaterialUniforms(At,G,te,Y,S.state.transmissionRenderTarget[T.id]),xe.needsLights&&xe.lightProbeGrid){let xt=xe.lightProbeGrid;At.probesSH.value=xt.texture,At.probesMin.value.copy(xt.boundingBox.min),At.probesMax.value.copy(xt.boundingBox.max),At.probesResolution.value.copy(xt.resolution)}fr.upload(O,tu(xe),At,J)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(fr.upload(O,tu(xe),At,J),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ft.setValue(O,"center",V.center),ft.setValue(O,"modelViewMatrix",V.modelViewMatrix),ft.setValue(O,"normalMatrix",V.normalMatrix),ft.setValue(O,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){let xt=G.uniformsGroups;for(let Ri=0,Es=xt.length;Ri<Es;Ri++){let su=xt[Ri];ne.update(su,_n),ne.bind(su,_n)}}return _n}function If(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.sunLights.needsUpdate=N,T.sunLightShadows.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function Lf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(T,N,K){let G=j.get(T);G.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),j.get(T.texture).__webglTexture=N,j.get(T.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:K,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,N){let K=j.get(T);K.__webglFramebuffer=N,K.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,K=0){q=T,W=N,L=K;let G=null,V=!1,fe=!1;if(T){let de=j.get(T);if(de.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(O.FRAMEBUFFER,de.__webglFramebuffer),$.copy(T.viewport),se.copy(T.scissor),ge=T.scissorTest,y.viewport($),y.scissor(se),y.setScissorTest(ge),H=-1;return}else if(de.__webglFramebuffer===void 0)J.setupRenderTarget(T);else if(de.__hasExternalTextures)J.rebindTextures(T,j.get(T.texture).__webglTexture,j.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let qe=T.depthTexture;if(de.__boundDepthTexture!==qe){if(qe!==null&&j.has(qe)&&(T.width!==qe.image.width||T.height!==qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(T)}}let Me=T.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(fe=!0);let we=j.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(we[N])?G=we[N][K]:G=we[N],V=!0):T.samples>0&&J.useMultisampledRTT(T)===!1?G=j.get(T).__webglMultisampledFramebuffer:Array.isArray(we)?G=we[K]:G=we,$.copy(T.viewport),se.copy(T.scissor),ge=T.scissorTest}else $.copy(_e).multiplyScalar(te).floor(),se.copy(Ke).multiplyScalar(te).floor(),ge=Nt;if(K!==0&&(G=k),y.bindFramebuffer(O.FRAMEBUFFER,G)&&y.drawBuffers(T,G),y.viewport($),y.scissor(se),y.setScissorTest(ge),V){let de=j.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,de.__webglTexture,K)}else if(fe){let de=N;for(let Me=0;Me<T.textures.length;Me++){let we=j.get(T.textures[Me]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Me,we.__webglTexture,K,de)}}else if(T!==null&&K!==0){let de=j.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,de.__webglTexture,K)}H=-1};function iu(T){let N=j.get(T);return(N.__readFormat!==T.format||N.__readType!==T.type)&&(N.__readFormat=T.format,N.__readType=T.type,N.__formatReadable=P.textureFormatReadable(T.format),N.__typeReadable=P.textureTypeReadable(T.type)),N}this.readRenderTargetPixels=function(T,N,K,G,V,fe,ve,de=0){if(!(T&&T.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=j.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me){y.bindFramebuffer(O.FRAMEBUFFER,Me);try{let we=T.textures[de],qe=we.format,Ze=we.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+de);let Se=iu(we);if(Se.__formatReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-G&&K>=0&&K<=T.height-V&&O.readPixels(N,K,G,V,le.convert(qe),le.convert(Ze),fe)}finally{let we=q!==null?j.get(q).__webglFramebuffer:null;y.bindFramebuffer(O.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(T,N,K,G,V,fe,ve,de=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=j.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me)if(N>=0&&N<=T.width-G&&K>=0&&K<=T.height-V){y.bindFramebuffer(O.FRAMEBUFFER,Me);let we=T.textures[de],qe=we.format,Ze=we.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+de);let Se=iu(we);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ot=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ot),O.bufferData(O.PIXEL_PACK_BUFFER,fe.byteLength,O.STREAM_READ),O.readPixels(N,K,G,V,le.convert(qe),le.convert(Ze),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Lt=q!==null?j.get(q).__webglFramebuffer:null;y.bindFramebuffer(O.FRAMEBUFFER,Lt);let _t=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Rd(O,_t,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ot),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,fe),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ot),O.deleteSync(_t),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,N=null,K=0){let G=Math.pow(2,-K),V=Math.floor(T.image.width*G),fe=Math.floor(T.image.height*G),ve=N!==null?N.x:0,de=N!==null?N.y:0;J.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,K,0,0,ve,de,V,fe),y.unbindTexture()},this.copyTextureToTexture=function(T,N,K=null,G=null,V=0,fe=0){let ve,de,Me,we,qe,Ze,Se,ot,Lt,_t=T.isCompressedTexture?T.mipmaps[fe]:T.image;if(K!==null)ve=K.max.x-K.min.x,de=K.max.y-K.min.y,Me=K.isBox3?K.max.z-K.min.z:1,we=K.min.x,qe=K.min.y,Ze=K.isBox3?K.min.z:0;else{let At=Math.pow(2,-V);ve=Math.floor(_t.width*At),de=Math.floor(_t.height*At),T.isDataArrayTexture?Me=_t.depth:T.isData3DTexture?Me=Math.floor(_t.depth*At):Me=1,we=0,qe=0,Ze=0}G!==null?(Se=G.x,ot=G.y,Lt=G.z):(Se=0,ot=0,Lt=0);let mt=le.convert(N.format),Kt=le.convert(N.type),xe;N.isData3DTexture?(J.setTexture3D(N,0),xe=O.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(J.setTexture2DArray(N,0),xe=O.TEXTURE_2D_ARRAY):(J.setTexture2D(N,0),xe=O.TEXTURE_2D),y.activeTexture(O.TEXTURE0),y.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),y.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),y.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);let tn=y.getParameter(O.UNPACK_ROW_LENGTH),tt=y.getParameter(O.UNPACK_IMAGE_HEIGHT),_n=y.getParameter(O.UNPACK_SKIP_PIXELS),Wn=y.getParameter(O.UNPACK_SKIP_ROWS),wi=y.getParameter(O.UNPACK_SKIP_IMAGES);y.pixelStorei(O.UNPACK_ROW_LENGTH,_t.width),y.pixelStorei(O.UNPACK_IMAGE_HEIGHT,_t.height),y.pixelStorei(O.UNPACK_SKIP_PIXELS,we),y.pixelStorei(O.UNPACK_SKIP_ROWS,qe),y.pixelStorei(O.UNPACK_SKIP_IMAGES,Ze);let Ts=T.isDataArrayTexture||T.isData3DTexture,ft=N.isDataArrayTexture||N.isData3DTexture;if(T.isDepthTexture){let At=j.get(T),Ai=j.get(N),xt=j.get(At.__renderTarget),Ri=j.get(Ai.__renderTarget);y.bindFramebuffer(O.READ_FRAMEBUFFER,xt.__webglFramebuffer),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let Es=0;Es<Me;Es++)Ts&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,j.get(T).__webglTexture,V,Ze+Es),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,j.get(N).__webglTexture,fe,Lt+Es)),O.blitFramebuffer(we,qe,ve,de,Se,ot,ve,de,O.DEPTH_BUFFER_BIT,O.NEAREST);y.bindFramebuffer(O.READ_FRAMEBUFFER,null),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(V!==0||T.isRenderTargetTexture||j.has(T)){let At=j.get(T),Ai=j.get(N);y.bindFramebuffer(O.READ_FRAMEBUFFER,I),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,B);for(let xt=0;xt<Me;xt++)Ts?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,At.__webglTexture,V,Ze+xt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,At.__webglTexture,V),ft?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ai.__webglTexture,fe,Lt+xt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ai.__webglTexture,fe),V!==0?O.blitFramebuffer(we,qe,ve,de,Se,ot,ve,de,O.COLOR_BUFFER_BIT,O.NEAREST):ft?O.copyTexSubImage3D(xe,fe,Se,ot,Lt+xt,we,qe,ve,de):O.copyTexSubImage2D(xe,fe,Se,ot,we,qe,ve,de);y.bindFramebuffer(O.READ_FRAMEBUFFER,null),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ft?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(xe,fe,Se,ot,Lt,ve,de,Me,mt,Kt,_t.data):N.isCompressedArrayTexture?O.compressedTexSubImage3D(xe,fe,Se,ot,Lt,ve,de,Me,mt,_t.data):O.texSubImage3D(xe,fe,Se,ot,Lt,ve,de,Me,mt,Kt,_t):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,fe,Se,ot,ve,de,mt,Kt,_t.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,fe,Se,ot,_t.width,_t.height,mt,_t.data):O.texSubImage2D(O.TEXTURE_2D,fe,Se,ot,ve,de,mt,Kt,_t);y.pixelStorei(O.UNPACK_ROW_LENGTH,tn),y.pixelStorei(O.UNPACK_IMAGE_HEIGHT,tt),y.pixelStorei(O.UNPACK_SKIP_PIXELS,_n),y.pixelStorei(O.UNPACK_SKIP_ROWS,Wn),y.pixelStorei(O.UNPACK_SKIP_IMAGES,wi),fe===0&&N.generateMipmaps&&O.generateMipmap(xe),y.unbindTexture()},this.initRenderTarget=function(T){j.get(T).__webglFramebuffer===void 0&&J.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?J.setTextureCube(T,0):T.isData3DTexture?J.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?J.setTexture2DArray(T,0):J.setTexture2D(T,0),y.unbindTexture()},this.resetState=function(){W=0,L=0,q=null,y.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}};function Wi(r,e=!1){let t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,c=new ct,l=0;for(let h=0;h<r.length;++h){let u=r[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<r.length;++d){let f=r[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=r[d].attributes.position.count}c.setIndex(u)}for(let h in s){let u=cf(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let b=0;b<a[h].length;++b)f.push(a[h][b][d]);let g=cf(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function cf(r){let e,t,n,i=-1,s=0;for(let l=0;l<r.length;++l){let h=r[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let a=new e(s),o=new vt(a,t,n),c=0;for(let l=0;l<r.length;++l){let h=r[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let b=h.getComponent(d,g);o.setComponent(d+u,g,b)}}else a.set(h.array,c);c+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function fh(r,e){if(e===Bl)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===hr||e===ba){let t=r.getIndex();if(t===null){let s=[],a=r.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);r.setIndex(s),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===hr)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function br(r){let e=new Map,t=new Map,n=r.clone();return lf(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,a=e.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function lf(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)lf(r.children[n],e.children[n],t)}var Cc=class extends Jn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new vh(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new Ih(t)}),this.register(function(t){return new Lh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new Ah(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new Ch(t)}),this.register(function(t){return new Rh(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new Pc(t,Ye.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Pc(t,Ye.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Dh(t)})}load(e,t,n,i){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=vi.extractUrlBase(e);a=vi.resolveURL(l,this.path)}else a=vi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new sr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===pf){try{a[Ye.KHR_BINARY_GLTF]=new Fh(e)}catch(u){i&&i(u);return}s=JSON.parse(a[Ye.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Hh(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Ye.KHR_MATERIALS_UNLIT:a[u]=new xh;break;case Ye.KHR_DRACO_MESH_COMPRESSION:a[u]=new Nh(s,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:a[u]=new Uh;break;case Ye.KHR_MESH_QUANTIZATION:a[u]=new Oh;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function Cx(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function Pt(r,e,t){let n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},bh=class{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,h=new pe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],sn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ds(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Qt(h),l.distance=u;break;case"spot":l=new _i(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ti(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},xh=class{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return St}extendParams(e,t,n){let i=[];e.color=new pe(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],sn),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,rt))}return Promise.all(i)}},_h=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},vh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ee(s,s)}return Promise.all(i)}},yh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Mh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Sh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new pe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],sn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,rt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},Th=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Eh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new pe().setRGB(s[0],s[1],s[2],sn),Promise.all(i)}},wh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Ah=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new pe().setRGB(s[0],s[1],s[2],sn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,rt)),Promise.all(i)}},Rh=class{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},Ch=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?ln:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},Ph=class{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},Ih=class{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Lh=class{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Pc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},Dh=class{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==wn.TRIANGLES&&l.mode!==wn.TRIANGLE_STRIP&&l.mode!==wn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let b=new Ue,m=new R,p=new Ft,v=new R(1,1,1),E=new Kn(g.geometry,g.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,M),c.SCALE&&v.fromBufferAttribute(c.SCALE,M),E.setMatrixAt(M,b.compose(m,p,v));let x=null;for(let M in c)if(M==="_COLOR_0"){let S=c[M];E.instanceColor=new di(S.array,S.itemSize,S.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"){if(x===null){let A=E.geometry;x=new ct,x.name=A.name;for(let _ in A.attributes)x.setAttribute(_,A.attributes[_]);for(let _ in A.morphAttributes)x.morphAttributes[_]=A.morphAttributes[_];A.index!==null&&x.setIndex(A.index),x.morphTargetsRelative=A.morphTargetsRelative;for(let _ of A.groups)x.addGroup(_.start,_.count,_.materialIndex);A.boundingBox!==null&&(x.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(x.boundingSphere=A.boundingSphere.clone()),x.drawRange.start=A.drawRange.start,x.drawRange.count=A.drawRange.count,x.userData=Object.assign({},A.userData),E.geometry=x}let S=c[M];x.setAttribute(M,new di(S.array,S.itemSize,S.normalized))}dt.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),f.push(E)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},pf="glTF",Ma=12,hf={JSON:1313821514,BIN:5130562},Fh=class{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ma),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==pf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ma,s=new DataView(e,Ma),a=0;for(;a<i;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===hf.JSON){let l=new Uint8Array(e,Ma+a,o);this.content=n.decode(l)}else if(c===hf.BIN){let l=Ma+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Nh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=kh[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=kh[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=xr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let g in f.attributes){let b=f.attributes[g],m=c[g];m!==void 0&&(b.normalized=m)}u(f)},o,l,sn,d)})})}},Uh=class{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Oh=class{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}},Ic=class extends Yn{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,b=g-l,m=-2*f+3*d,p=f-d,v=1-m,E=p-d+u;for(let x=0;x!==o;x++){let M=a[b+x+o],S=a[b+x+c]*h,A=a[g+x+o],_=a[g+x]*h;s[x]=v*M+E*S+m*A+p*_}return s}},Px=new Ft,Bh=class extends Ic{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return Px.fromArray(s).normalize().toArray(s),s}},wn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},xr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},uf={9728:Rt,9729:Ct,9984:Uo,9985:or,9986:xs,9987:Hn},df={33071:yn,33648:Gs,10497:pn},ph={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},kh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},qi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ix={CUBICSPLINE:void 0,LINEAR:is,STEP:ns},mh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Lx(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ie({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$n})),r.DefaultMaterial}function Ms(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ti(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Dx(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function Fx(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Nx(r){let e,t=r.extensions&&r.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+gh(t.attributes):e=r.indices+":"+gh(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+gh(r.targets[n]);return e}function gh(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function zh(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ux(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Ox=new Ue,Hh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Cx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new ls(this.options.manager):this.textureLoader=new na(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ms(s,o,i),ti(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,a){n.load(vi.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=ph[i.type],o=xr[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new vt(l,a,c))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=ph[i.type],l=xr[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,b,m;if(f&&f!==u){let p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,E=t.cache.get(v);E||(b=new l(o,p*f,i.count*f/h),E=new Ys(b,f/h),t.cache.add(v,E)),m=new Js(E,c,d%f/h,g)}else o===null?b=new l(i.count*c):b=new l(o,d,i.count*c),m=new vt(b,c,g);if(i.sparse!==void 0){let p=ph.SCALAR,v=xr[i.sparse.indices.componentType],E=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,M=new v(a[1],E,i.sparse.count*p),S=new l(a[2],x,i.sparse.count*c);o!==null&&(m=new vt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,_=M.length;A<_;A++){let w=M[A];if(m.setX(w,S[A*c]),c>=2&&m.setY(w,S[A*c+1]),c>=3&&m.setZ(w,S[A*c+2]),c>=4&&m.setW(w,S[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(s.samplers||{})[a.sampler]||{};return h.magFilter=uf[d.magFilter]||Ct,h.minFilter=uf[d.minFilter]||Hn,h.wrapS=df[d.wrapS]||pn,h.wrapT=df[d.wrapT]||pn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Rt&&h.minFilter!==Ct,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(b){let m=new Ut(b);m.needsUpdate=!0,d(m)}),t.load(vi.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),ti(u,a),u.userData.mimeType=a.mimeType||Ux(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Ye.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new tr,an.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new er,an.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ie}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],a,o={},c=s.extensions||{},l=[];if(c[Ye.KHR_MATERIALS_UNLIT]){let u=i[Ye.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,s,t))}else{let u=s.pbrMetallicRoughness||{};if(o.color=new pe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],sn),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,rt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Tn);let h=s.alphaMode||mh.OPAQUE;if(h===mh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===mh.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==St&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ee(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==St&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==St){let u=s.emissiveFactor;o.emissive=new pe().setRGB(u[0],u[1],u[2],sn)}return s.emissiveTexture!==void 0&&a!==St&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,rt)),Promise.all(l).then(function(){let u=new a(o);return s.name&&(u.name=s.name),ti(u,s),t.associations.set(u,{materials:e}),s.extensions&&Ms(i,u,s),u})}createUniqueName(e){let t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return ff(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=Nx(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=ff(new ct,l,t),l.mode===wn.TRIANGLE_STRIP?d=d.then(f=>fh(f,ba)):l.mode===wn.TRIANGLE_FAN&&(d=d.then(f=>fh(f,hr))),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?Lx(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let b=h[f],m=a[f],p,v=l[f];if(m.mode===wn.TRIANGLES||m.mode===wn.TRIANGLE_STRIP||m.mode===wn.TRIANGLE_FAN||m.mode===void 0){let E=s.isSkinnedMesh===!0,x=b.hasAttribute("skinIndex")&&b.hasAttribute("skinWeight");E&&x===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=E&&x?new qr(b,v):new ye(b,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===wn.LINES)p=new jr(b,v);else if(m.mode===wn.LINE_STRIP)p=new rs(b,v);else if(m.mode===wn.LINE_LOOP)p=new Kr(b,v);else if(m.mode===wn.POINTS)p=new as(b,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Fx(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),ti(p,s),m.extensions&&Ms(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&Ms(i,u[0],s),u[0];let d=new Ve;s.extensions&&Ms(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Et(Gl.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Zn(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ti(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new Ue;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Xr(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],g=i.samplers[f.sampler],b=f.target,m=b.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],b=u[3],m=u[4],p=[];for(let E=0,x=d.length;E<x;E++){let M=d[E],S=f[E],A=g[E],_=b[E],w=m[E];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let C=n._createAnimationTracks(M,S,A,_,w);if(C)for(let D=0;D<C.length;D++)p.push(C[D])}let v=new cs(s,void 0,p);return ti(v,i),v})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Ox)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new R().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new Zs:l.length>1?h=new Ve:l.length===1?h=l[0]:h=new dt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=a),ti(h,s),s.extensions&&Ms(n,h,s),s.matrix!==void 0){let u=new Ue;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new Ve;n.name&&(s.name=i.createUniqueName(n.name)),ti(s,n),n.extensions&&Ms(t,s,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?s.add(br(d)):s.add(d)}let l=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof an||d instanceof Ut)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){let a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}qi[s.path]===qi.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(qi[s.path]){case qi.weights:h=gi;break;case qi.rotation:h=bi;break;case qi.translation:case qi.scale:h=Bi;break;default:n.itemSize===1?h=gi:h=Bi;break}let u=i.interpolation!==void 0?Ix[i.interpolation]:is,d=this._getArrayFromAccessor(n);for(let f=0,g=c.length;f<g;f++){let b=new h(c[f]+"."+qi[s.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=zh(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof bi?Bh:Ic;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Bx(r,e,t){let n=e.attributes,i=new rn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new R(c[0],c[1],c[2]),new R(l[0],l[1],l[2])),o.normalized){let h=zh(xr[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new R,c=new R;for(let l=0,h=s.length;l<h;l++){let u=s[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let b=zh(xr[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;let a=new $t;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function ff(r,e,t){let n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(let a in n){let o=kh[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){let a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return Ge.workingColorSpace!==sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ge.workingColorSpace}" not supported.`),ti(r,e),Bx(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Dx(r,e.targets,t):r})}var mf=(function(){var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(r),s,a=WebAssembly.instantiate(i,{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var v=new Uint8Array(p.length),E=0;E<p.length;++E){var x=p.charCodeAt(E);v[E]=x>96?x-97:x>64?x-39:x+4}for(var M=0,E=0;E<p.length;++E)v[M++]=v[E]<60?n[v[E]]:(v[E]-60)*64+v[++E];return v.buffer.slice(0,M)}function c(p,v,E,x,M,S,A){var _=p.exports.sbrk,w=x+3&-4,C=_(w*M),D=_(S.length),F=new Uint8Array(p.exports.memory.buffer);F.set(S,D);var k=v(C,x,M,D,S.length);if(k==0&&A&&A(C,w,M),E.set(F.subarray(C,C+x*M)),_(C-_(0)),k!=0)throw new Error("Malformed buffer data: "+k)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var v={object:new Worker(p),pending:0,requests:{}};return v.object.onmessage=function(E){var x=E.data;v.pending-=x.count,v.requests[x.id][x.action](x.value),delete v.requests[x.id]},v}function g(p){for(var v="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),E=new Blob([v],{type:"text/javascript"}),x=URL.createObjectURL(E),M=u.length;M<p;++M)u[M]=f(x);for(var M=p;M<u.length;++M)u[M].object.postMessage({});u.length=p,URL.revokeObjectURL(x)}function b(p,v,E,x,M){for(var S=u[0],A=1;A<u.length;++A)u[A].pending<S.pending&&(S=u[A]);return new Promise(function(_,w){var C=new Uint8Array(E),D=++d;S.pending+=p,S.requests[D]={resolve:_,reject:w},S.object.postMessage({id:D,count:p,size:v,source:C,mode:x,filter:M},[C.buffer])})}function m(p){var v=p.data;self.ready.then(function(E){if(!v.id)return self.close();try{var x=new Uint8Array(v.count*v.size);c(E,E.exports[v.mode],x,v.count,v.size,v.source,E.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:x},[x.buffer])}catch(M){self.postMessage({id:v.id,count:v.count,action:"reject",value:M})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,v,E,x,M){c(s,s.exports.meshopt_decodeVertexBuffer,p,v,E,x,s.exports[l[M]])},decodeIndexBuffer:function(p,v,E,x){c(s,s.exports.meshopt_decodeIndexBuffer,p,v,E,x)},decodeIndexSequence:function(p,v,E,x){c(s,s.exports.meshopt_decodeIndexSequence,p,v,E,x)},decodeGltfBuffer:function(p,v,E,x,M,S){c(s,s.exports[h[M]],p,v,E,x,s.exports[l[S]])},decodeGltfBufferAsync:function(p,v,E,x,M){return u.length>0?b(p,v,E,h[x],l[M]):a.then(function(){var S=new Uint8Array(p*v);return c(s,s.exports[h[x]],S,p,v,E,s.exports[l[M]]),S})}}})();var Lc=class extends ui{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Be;e.deleteAttribute("uv");let t=new Ie({side:Bt}),n=new Ie,i=new Qt(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new ye(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let a=new Kn(e,n,6),o=new dt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new ye(e,_r(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new ye(e,_r(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new ye(e,_r(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new ye(e,_r(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new ye(e,_r(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new ye(e,_r(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function _r(r){return new $r({color:0,emissive:16777215,emissiveIntensity:r})}var vr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var xn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},kx=new Zn(-1,1,1,-1,0,1),Gh=class extends ct{constructor(){super(),this.setAttribute("position",new ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ze([0,2,0,0,2,0],2))}},zx=new Gh,Xi=class{constructor(e){this._mesh=new ye(zx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,kx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var yr=class extends xn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Tt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Mi.clone(e.uniforms),this.material=new Tt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Xi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Sa=class extends xn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},Dc=class extends xn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Fc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ee);this._width=n.width,this._height=n.height,t=new wt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:kt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new yr(vr),this.copyPass.material.blending=En,this.timer=new ia}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Sa!==void 0&&(a instanceof Sa?n=!0:a instanceof Dc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ta=class extends xn{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new pe}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var gf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new pe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Mr=class r extends xn{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ee(e.x,e.y):new Ee(256,256),this.clearColor=new pe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new wt(s,a,{type:kt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new wt(s,a,{type:kt,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new wt(s,a,{type:kt,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),a=Math.round(a/2)}let o=gf;this.highPassUniforms=Mi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Tt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ee(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Mi.clone(vr.uniforms),this.blendMaterial=new Tt({uniforms:this.copyUniforms,vertexShader:vr.vertexShader,fragmentShader:vr.fragmentShader,premultipliedAlpha:!0,blending:mn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new pe,this._oldClearAlpha=1,this._basic=new St,this._fsQuad=new Xi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Ee(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let i=[],s=[];for(let a=1;a<e;a+=2){let o=t[a],c=a+1<e?t[a+1]:0,l=o+c;i.push((a*o+(a+1)*c)/l),s.push(l)}return new Tt({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ee(.5,.5)},direction:{value:new Ee(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Tt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Mr.BlurDirectionX=new Ee(1,0);Mr.BlurDirectionY=new Ee(0,1);var Ea={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Nc=class extends xn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Mi.clone(Ea.uniforms),this.material=new nr({name:Ea.name,uniforms:this.uniforms,vertexShader:Ea.vertexShader,fragmentShader:Ea.fragmentShader}),this._fsQuad=new Xi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ge.getTransfer(this._outputColorSpace)===st&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===sa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ra?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===aa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===gs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ca?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===la?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===oa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ni=["########################################","########################################","##........######........######........##","##.S...CC.######.....WS.MMMMMM...L..S.##","##......C.MMMMMM..L.....PPPLPP........##","##....L...PPRPPP........MMMMMM.....W..##","##..W.....MMMMMM........######.CC.....##","##.B......########MPPM####MMMM......B.##","##........########MPLM###MPPPP........##","####MPMMMMMMMMMMMMMWPM###MPMMM###MPM####","####MPPPPLPPPPPPRPPPPM###MLM#####MRM####","####MLMMMMMMPMMMMMMPPM###MPPM####MPM####","####MPM#####M#............MPM##.......##","##.......#####....W.R.....MPMMM.CC..C.##","##..C..B.#####..O......O..PPLPP....C..##","##.......MMMMM...K........MMMMM...WC..##","##.S.L...PPRPP......@.K...#####.C...B.##","##.......MMMMM..O......O..MMMMM..C....##","##....W..#####.....W.W....PPLPP...R...##","##.......#####............MMMMM.W...S.##","####MPM#########MPM##MPM#######.......##","####MPM#########MPM##MRM#########MPM####","####MLM#########MLM##MPM#########MLM####","####MPM#########MPM##MPM#########MPM####","##.........###...........###..........##","##..CC...B.###.....K.....MMM..W.......##","##....L....MMM..W.....W..PRP....L.....##","##.........PLP...........MMM..........##","##.S....W..MMM.C...S...B.###..B..CC.S.##","##.........###...........###..........##","########################################","########################################"],We=2,Hx=4.4,bf=new Set(["#","M"]),Gx=new Set(["#","M","C","B","O","W"]),Sr=.9,Vx=1.7,Oc=class{constructor(e){this.tex=e,this.rows=ni.length,this.cols=ni[0].length,this.w=this.cols*We,this.h=this.rows*We,this.group=new Ve,this.colliders=[],this.virtual=[],this.shadowLights=[],this.spawns=[],this.circles=[],this.lampPositions=[],this.playerStart=new R,this.blocked=new Uint8Array(this.rows*this.cols),this.flow=new Float32Array(this.rows*this.cols),this.flowCell=-1,this.barrels=[],this.heap=new Int32Array(this.rows*this.cols*8);for(let t=0;t<this.rows;t++)for(let n=0;n<this.cols;n++){let i=ni[t][n];Gx.has(i)&&(this.blocked[t*this.cols+n]=1)}}cx(e){return Math.floor(e/We)}cz(e){return Math.floor(e/We)}center(e,t){return new R((e+.5)*We,0,(t+.5)*We)}isBlocked(e,t){return e<0||t<0||e>=this.cols||t>=this.rows?!0:this.blocked[t*this.cols+e]===1}isWall(e,t){return e<0||t<0||e>=this.cols||t>=this.rows?!0:bf.has(ni[t][e])}mat(e,t={}){let{normalScale:n,...i}=t,s=this.tex[e],a=new Ie({map:s.c,normalMap:s.n,roughnessMap:s.orm,metalnessMap:s.orm,aoMap:s.orm,roughness:1,metalness:1,aoMapIntensity:1,...i});return n&&a.normalScale.set(n,n),a}build(e){let t=this.group;e.add(t);let n={bricks:this.mat("bricks",{color:10128518,normalScale:1.4}),metal:this.mat("metal",{color:12107976,normalScale:1.2}),concrete:this.mat("concrete",{color:7169374,normalScale:.7}),plate:this.mat("plate",{color:9080982}),ceiling:this.mat("ceiling",{color:3881532}),hazard:this.mat("hazard",{color:13619151}),rust:this.mat("rust",{color:10518640})};this.mats=n;let i={"#":[],M:[]},s=[],a=Hx,o=[[0,-1,"n"],[0,1,"s"],[-1,0,"w"],[1,0,"e"]];for(let I=0;I<this.rows;I++)for(let B=0;B<this.cols;B++){let W=ni[I][B];if(bf.has(W))for(let[L,q,H]of o){if(this.isWall(B+L,I+q))continue;let X=B*We,$=I*We,se,ge;H==="n"&&(se=[X+We,$],ge=[X,$]),H==="s"&&(se=[X,$+We],ge=[X+We,$+We]),H==="w"&&(se=[X,$],ge=[X,$+We]),H==="e"&&(se=[X+We,$+We],ge=[X+We,$]);let et=[L,0,q];i[W].push(xf(se,ge,0,a,et,2.2));let ke=.04,je=[se[0]+L*ke,se[1]+q*ke],Y=[ge[0]+L*ke,ge[1]+q*ke];s.push(xf(je,Y,0,.32,et,1,.32))}}for(let I of Object.keys(i)){if(!i[I].length)continue;let B=new ye(Wi(i[I]),I==="#"?n.bricks:n.metal);B.receiveShadow=!0,B.castShadow=!0,t.add(B),this.colliders.push(B)}let c=new ye(Wi(s),n.hazard);c.receiveShadow=!0,t.add(c);let l=new Ot(this.w,this.h);l.rotateX(-Math.PI/2),l.translate(this.w/2,0,this.h/2),Uc(l,"xz",3.2);let h=new ye(l,n.concrete);h.receiveShadow=!0,t.add(h),this.colliders.push(h),this.floor=h;let u=[];for(let I=0;I<this.rows;I++)for(let B=0;B<this.cols;B++){if(ni[I][B]!=="P")continue;let W=new Ot(We,We);W.rotateX(-Math.PI/2),W.translate((B+.5)*We,.004,(I+.5)*We),Uc(W,"xz",2),u.push(W)}if(u.length){let I=new ye(Wi(u),n.plate);I.receiveShadow=!0,t.add(I)}let d=new Ot(this.w,this.h);d.rotateX(Math.PI/2),d.translate(this.w/2,a,this.h/2),Uc(d,"xz",4);let f=new ye(d,n.ceiling);f.receiveShadow=!0,t.add(f),this.colliders.push(f);let g=[];for(let I=2;I<this.rows;I+=4){let B=new Be(this.w,.35,.3);B.translate(this.w/2,a-.175,I*We),Uc(B,"xy",2),g.push(B)}let b=new ye(Wi(g),n.rust);b.castShadow=!1,t.add(b);let m=[],p=[],v=[],E=[],x=new Ie({color:662021,emissive:8257338,emissiveIntensity:3.2}),M=[],S=[],A=[],_=[],w=[],C=Xx(1337);for(let I=0;I<this.rows;I++)for(let B=0;B<this.cols;B++){let W=ni[I][B],L=(B+.5)*We,q=(I+.5)*We;if(W==="C"){let H=Vx,X=new Be(H,H,H);_f(X,H),X.rotateY((C()-.5)*.12),X.translate(L,H/2,q),m.push(X)}else if(W==="W"){let H=new Be(1.8,Sr,1.8);_f(H,1.8),H.translate(L,Sr/2,q),v.push(H);for(let[X,$,se,ge]of[[1.82,.08,0,.87],[1.82,.08,0,-.87],[.08,1.82,.87,0],[.08,1.82,-.87,0]]){let et=new Be(X,.1,$);et.translate(L+se,Sr-.045,q+ge),E.push(et)}}else if(W==="B"){let H=[],X=[];for(let je=0;je<3;je++){let Y=L+(je===0?-.35:je===1?.4:.05),te=q+(je===2?.5:-.15),be=new nt(.36,.36,1.15,20,1,!1);be.translate(Y,.575,te),H.push(be);let Ne=new fi(.3,20);Ne.rotateX(-Math.PI/2),Ne.translate(Y,1.152,te),X.push(Ne)}let $=new ye(Wi(H),null),se=new ye(Wi(X),x);$.castShadow=!0,$.receiveShadow=!0;let ge={x:L,z:q,r:.9},et=this.addLight(L,1.6,q,7208746,6,7,!1),ke={c:B,r:I,x:L,z:q,mesh:$,top:se,circle:ge,light:et,hp:25,alive:!1};$.userData.barrel=ke,se.userData.barrel=ke,this.barrels.push(ke)}else if(W==="O"){let H=new nt(.7,.8,a,16,1,!0);H.translate(L,a/2,q),qx(H,.7,a),p.push(H);let X=new nt(.81,.81,.08,16,1,!0);X.translate(L,2.2,q),w.push(X),this.circles.push({x:L,z:q,r:.85})}else if(W==="L"||W==="K"){let H=new Be(1.4,.12,.5);H.translate(L,a-.06,q),M.push(H);let X=new Ot(1.25,.36);X.rotateX(Math.PI/2),X.translate(L,a-.125,q),S.push(X),this.addLight(L,a-.5,q,16767400,W==="K"?40:22,16,W==="K",C()<.25),this.lampPositions.push(new R(L,a-.5,q))}else if(W==="R"){let H=new Be(.6,.12,.6);H.translate(L,a-.06,q),M.push(H);let X=new Ot(.5,.5);X.rotateX(Math.PI/2),X.translate(L,a-.125,q),A.push(X),this.addLight(L,a-.6,q,16722450,18,13,!1,!0)}else if(W==="S"){let H=new Ot(1.7,1.7);H.rotateX(-Math.PI/2),H.translate(L,.008,q),_.push(H),this.spawns.push(new R(L,0,q))}else W==="@"&&this.playerStart.set(L,0,q)}for(let I=0;I<this.rows;I++)for(let B=0;B<this.cols;B++)if(ni[I][B]==="M")for(let[W,L]of[[0,-1],[0,1],[-1,0],[1,0]]){if(this.isWall(B+W,I+L))continue;let q=(B+.5)*We+W*(We/2+.02),H=(I+.5)*We+L*(We/2+.02),X=new Be(W?.03:.08,2.6,W?.08:.03);X.translate(q,1.9,H),w.push(X)}let D=(I,B,W=!0,L=!0)=>{if(!I.length)return null;let q=new ye(Wi(I),B);return q.castShadow=W,q.receiveShadow=!0,t.add(q),L&&this.colliders.push(q),q};D(m,this.mat("rust",{color:9404266})),D(v,this.mat("plate",{color:10133670})),D(E,n.hazard,!1,!1);for(let I of this.barrels)I.mesh.material=n.hazard,this.restoreBarrel(I);D(p,n.metal),D(M,new Ie({color:2236962,roughness:.5,metalness:.8}),!1,!1),D(S,new Ie({color:0,emissive:16769720,emissiveIntensity:6}),!1,!1),D(A,new Ie({color:0,emissive:16719888,emissiveIntensity:7}),!1,!1),D(w,new Ie({color:1115392,emissive:16739125,emissiveIntensity:4.5}),!1,!1);let F=new Ie({map:vf(),transparent:!0,depthWrite:!1,roughness:.6,metalness:.7,emissive:16720384,emissiveIntensity:.9,emissiveMap:vf(!0),polygonOffset:!0,polygonOffsetFactor:-2});D(_,F,!1,!1),this.initLightPool(10);let k=new us(9082544,2759960,.55);t.add(k),this.hemi=k}addLight(e,t,n,i,s,a,o=!1,c=!1){if(o){let h=new _i(i,s*9,26,Math.PI/2.6,.6,1.6);return h.position.set(e,t,n),h.target.position.set(e,0,n),this.group.add(h.target),h.castShadow=!0,h.shadow.mapSize.set(1024,1024),h.shadow.camera.near=.5,h.shadow.camera.far=26,h.shadow.bias=-4e-4,h.shadow.normalBias=.02,h.shadow.radius=4,this.group.add(h),this.shadowLights.push(h),this.virtual.push({pos:new R(e,t,n),color:new pe(i),intensity:s,dist:a,flicker:c,seed:Math.random()*100,cur:s,real:h}),h}let l={pos:new R(e,t,n),color:new pe(i),intensity:s,dist:a,flicker:c,seed:Math.random()*100,cur:s};return this.virtual.push(l),l}initLightPool(e=10){this.pool=[];for(let t=0;t<e;t++){let n=new Qt(16777215,0,10,1.6);this.group.add(n),this.pool.push(n)}}update(e,t){for(let s of this.virtual){if(!s.flicker){s.cur=s.intensity;continue}let a=Math.sin(e*13+s.seed)*Math.sin(e*7.3+s.seed*2)+Math.sin(e*31+s.seed),o=Math.sin(e*.7+s.seed)>.93?.08:1;s.cur=s.intensity*o*(.82+.18*a),s.real&&(s.real.intensity=s.cur*9)}if(!t||!this.pool)return;let n=this.virtual.filter(s=>!s.real);for(let s of n)s.d=s.pos.distanceToSquared(t);n.sort((s,a)=>s.d-a.d);let i=1156;for(let s=0;s<this.pool.length;s++){let a=this.pool[s],o=n[s];if(!o){a.intensity=0;continue}a.position.copy(o.pos),a.color.copy(o.color),a.distance=o.dist;let c=Math.max(0,Math.min(1,(i-o.d)/(i*.35))),l=s>=this.pool.length-2?.5:1;a.intensity=o.cur*c*l}}lightAt(e){let t=0;for(let n of this.virtual){let i=n.pos.distanceToSquared(e);t+=n.cur/(1+i*.6)}return t}collide(e,t,n=0){for(let i=0;i<2;i++){let s=this.cx(e.x),a=this.cz(e.z);for(let o=a-1;o<=a+1;o++)for(let c=s-1;c<=s+1;c++){let l=c>=0&&o>=0&&c<this.cols&&o<this.rows?ni[o][c]:"#",h=0;if(l==="#"||l==="M")h=0;else if(l==="C")h=.12;else if(l==="W"){if(n>Sr-.32)continue;h=.1}else continue;let u=c*We+h,d=(c+1)*We-h,f=o*We+h,g=(o+1)*We-h,b=Math.max(u,Math.min(e.x,d)),m=Math.max(f,Math.min(e.z,g)),p=e.x-b,v=e.z-m,E=p*p+v*v;if(E<t*t)if(E<1e-8){let x=[e.x-u,d-e.x,e.z-f,g-e.z],M=Math.min(...x),S=x.indexOf(M);S===0?e.x=u-t:S===1?e.x=d+t:S===2?e.z=f-t:e.z=g+t}else{let x=Math.sqrt(E),M=t-x;e.x+=p/x*M,e.z+=v/x*M}}for(let o of this.circles){let c=e.x-o.x,l=e.z-o.z,h=o.r+t,u=c*c+l*l;if(u<h*h&&u>1e-8){let d=Math.sqrt(u);e.x=o.x+c/d*h,e.z=o.z+l/d*h}}}}groundAt(e,t,n,i){let s=0,a=this.cx(e),o=this.cz(t),c=n*.55;for(let l=o-1;l<=o+1;l++)for(let h=a-1;h<=a+1;h++){if(h<0||l<0||h>=this.cols||l>=this.rows||ni[l][h]!=="W"||i<Sr-.35)continue;let u=h*We+.1,d=(h+1)*We-.1,f=l*We+.1,g=(l+1)*We-.1,b=Math.max(u,Math.min(e,d)),m=Math.max(f,Math.min(t,g));(e-b)**2+(t-m)**2<c*c&&(s=Math.max(s,Sr))}return s}restoreBarrel(e){e.alive||(e.alive=!0,e.hp=25,this.group.add(e.mesh,e.top),this.colliders.push(e.mesh),this.circles.push(e.circle),this.blocked[e.r*this.cols+e.c]=1,this.virtual.includes(e.light)||this.virtual.push(e.light),this.flowCell=-1)}removeBarrel(e){e.alive&&(e.alive=!1,this.group.remove(e.mesh,e.top),this.colliders=this.colliders.filter(t=>t!==e.mesh),this.circles=this.circles.filter(t=>t!==e.circle),this.blocked[e.r*this.cols+e.c]=0,this.virtual=this.virtual.filter(t=>t!==e.light),this.flowCell=-1)}resetBarrels(){for(let e of this.barrels)this.restoreBarrel(e)}los(e,t,n,i,s=!1){let a=e/We,o=t/We,c=n/We,l=i/We,h=Math.floor(a),u=Math.floor(o),d=Math.floor(c),f=Math.floor(l),g=c-a,b=l-o,m=Math.sign(g),p=Math.sign(b),v=g!==0?Math.abs(1/g):1/0,E=b!==0?Math.abs(1/b):1/0,x=g>0?(h+1-a)*v:g<0?(a-h)*v:1/0,M=b>0?(u+1-o)*E:b<0?(o-u)*E:1/0;for(let S=0;S<64;S++){if(h===d&&u===f)return!0;if(x<M?(x+=v,h+=m):(M+=E,u+=p),s?this.isWall(h,u):this.isBlocked(h,u))return!1}return!0}updateFlow(e,t){let n=Math.max(0,Math.min(this.cols-1,this.cx(e))),s=Math.max(0,Math.min(this.rows-1,this.cz(t)))*this.cols+n;if(s===this.flowCell)return;this.flowCell=s;let a=this.flow,o=this.heap,c=this.cols;a.fill(1e9),a[s]=0;let l=0,h=f=>{let g=l++;for(o[g]=f;g>0;){let b=g-1>>1;if(a[o[b]]<=a[o[g]])break;let m=o[b];o[b]=o[g],o[g]=m,g=b}},u=()=>{let f=o[0];o[0]=o[--l];let g=0;for(;;){let b=2*g+1,m=b+1,p=g;if(b<l&&a[o[b]]<a[o[p]]&&(p=b),m<l&&a[o[m]]<a[o[p]]&&(p=m),p===g)break;let v=o[p];o[p]=o[g],o[g]=v,g=p}return f};h(s);let d=Wx;for(;l>0;){let f=u(),g=f%c,b=f/c|0,m=a[f];for(let p=0;p<8;p++){let v=d[p*3],E=d[p*3+1],x=d[p*3+2],M=g+v,S=b+E;if(this.isBlocked(M,S)||v&&E&&(this.isBlocked(g+v,b)||this.isBlocked(g,b+E)))continue;let A=S*c+M,_=m+x;_<a[A]-1e-6&&(a[A]=_,l<o.length&&h(A))}}}flowDir(e,t,n){let i=this.cx(e),s=this.cz(t),a=this.isBlocked(i,s)?1e9:this.flow[s*this.cols+i],o=i,c=s;for(let h=-1;h<=1;h++)for(let u=-1;u<=1;u++){if(!u&&!h)continue;let d=i+u,f=s+h;if(this.isBlocked(d,f)||u&&h&&(this.isBlocked(i+u,s)||this.isBlocked(i,s+h)))continue;let g=this.flow[f*this.cols+d];g<a&&(a=g,o=d,c=f)}n.set((o+.5)*We-e,0,(c+.5)*We-t);let l=n.length();return l>1e-4&&n.multiplyScalar(1/l),a}},Wx=[1,0,1,-1,0,1,0,1,1,0,-1,1,1,1,1.414,1,-1,1.414,-1,1,1.414,-1,-1,1.414];function xf(r,e,t,n,i,s,a){let o=new ct,c=[r[0],t,r[1],e[0],t,e[1],e[0],n,e[1],r[0],n,r[1]],l=Math.hypot(e[0]-r[0],e[1]-r[1]),h=(Math.abs(i[0])>0?r[1]*-i[0]:r[0]*i[2])/s,u=h+l/s,d=t/(a||s),f=n/(a||s),g=[h,d,u,d,u,f,h,f],b=[...i,...i,...i,...i];return o.setAttribute("position",new ze(c,3)),o.setAttribute("normal",new ze(b,3)),o.setAttribute("uv",new ze(g,2)),o.setIndex([0,1,2,0,2,3]),o}function Uc(r,e,t){let n=r.attributes.position,i=r.attributes.uv;for(let s=0;s<n.count;s++){let a=n.getX(s),o=n.getY(s),c=n.getZ(s);e==="xz"?i.setXY(s,a/t,c/t):i.setXY(s,(a+c)/t,o/t)}i.needsUpdate=!0}function _f(r,e){let t=r.attributes.uv;for(let n=0;n<t.count;n++)t.setXY(n,t.getX(n)*e/1.6,t.getY(n)*e/1.6)}function qx(r,e,t){let n=r.attributes.uv;for(let i=0;i<n.count;i++)n.setXY(i,n.getX(i)*(2*Math.PI*e)/2,n.getY(i)*t/2)}function Xx(r){return function(){let e=r+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function vf(r=!1){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");if(t.clearRect(0,0,256,256),r){let i=t.createRadialGradient(128,128,10,128,128,128);i.addColorStop(0,"#ff5020"),i.addColorStop(.7,"#801000"),i.addColorStop(1,"#000"),t.fillStyle=i,t.fillRect(0,0,256,256),t.fillStyle="#000";for(let s=0;s<9;s++)t.fillRect(14+s*26,14,10,228);t.fillRect(0,0,256,14),t.fillRect(0,242,256,14),t.fillRect(0,0,14,256),t.fillRect(242,0,14,256)}else{t.fillStyle="#2a2a2a",t.fillRect(0,0,256,256),t.fillStyle="#0b0807";for(let i=0;i<9;i++)t.fillRect(24+i*26,18,12,220);t.strokeStyle="#555",t.lineWidth=6,t.strokeRect(6,6,244,244)}let n=new qt(e);return n.colorSpace=rt,n}function Tr(r,e=r){let t=document.createElement("canvas");return t.width=r,t.height=e,[t,t.getContext("2d")]}function Vh(r){let e=r>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function wa(r,e="floor"){let[n,i]=Tr(256),s=Vh(r);i.clearRect(0,0,256,256);let a=h=>`rgba(${90+s()*40|0},${s()*6|0},${s()*6|0},${h})`,o=e==="drip"?3:14;for(let h=0;h<o;h++){let u=s()*Math.PI*2,d=s()*(e==="drip"?10:34),f=256/2+Math.cos(u)*d,g=256/2+Math.sin(u)*d,b=(e==="drip"?14:22)+s()*(e==="drip"?14:34),m=i.createRadialGradient(f,g,b*.2,f,g,b);m.addColorStop(0,a(.95)),m.addColorStop(.75,a(.9)),m.addColorStop(1,a(0)),i.fillStyle=m,i.beginPath(),i.arc(f,g,b,0,Math.PI*2),i.fill()}let c=e==="drip"?4:16;for(let h=0;h<c;h++){let u=s()*Math.PI*2,d=40+s()*80,f=256/2,g=256/2;i.strokeStyle=a(.85);for(let b=0;b<6;b++){let m=128+Math.cos(u)*d*(b+1)/6,p=256/2+Math.sin(u)*d*(b+1)/6;i.lineWidth=Math.max(.5,(6-b)*(.6+s())),i.beginPath(),i.moveTo(f,g),i.lineTo(m,p),i.stroke(),f=m,g=p}for(let b=0;b<3;b++){let m=d+6+s()*30;i.fillStyle=a(.9),i.beginPath(),i.arc(256/2+Math.cos(u+(s()-.5)*.2)*m,256/2+Math.sin(u+(s()-.5)*.2)*m,1+s()*4,0,Math.PI*2),i.fill()}}let l=new qt(n);return l.colorSpace=rt,l.anisotropy=4,l}function yf(r){let[t,n]=Tr(256),i=Vh(r),s=o=>`rgba(${95+i()*35|0},${i()*5|0},${i()*5|0},${o})`;for(let o=0;o<10;o++){let c=128+(i()-.5)*60,l=256*.38+(i()-.5)*50,h=12+i()*26,u=n.createRadialGradient(c,l,h*.25,c,l,h);u.addColorStop(0,s(.95)),u.addColorStop(1,s(0)),n.fillStyle=u,n.beginPath(),n.arc(c,l,h,0,Math.PI*2),n.fill()}for(let o=0;o<40;o++){let c=i()*Math.PI*2,l=30+i()*90;n.fillStyle=s(.9),n.beginPath(),n.arc(256/2+Math.cos(c)*l,256*.38+Math.sin(c)*l*.8,1+i()*3.5,0,Math.PI*2),n.fill()}for(let o=0;o<6;o++){let c=128+(i()-.5)*70,l=256*.4,h=40+i()*110,u=2+i()*4,d=n.createLinearGradient(0,l,0,l+h);d.addColorStop(0,s(.9)),d.addColorStop(.85,s(.8)),d.addColorStop(1,s(0)),n.fillStyle=d,n.fillRect(c-u/2,l,u,h),n.beginPath(),n.arc(c,l+h*.95,u*.8,0,Math.PI*2),n.fill()}let a=new qt(t);return a.colorSpace=rt,a}function jx(){let[e,t]=Tr(64),n=t.createRadialGradient(32,32,2,32,32,30);n.addColorStop(0,"rgba(0,0,0,1)"),n.addColorStop(.25,"rgba(10,8,6,0.95)"),n.addColorStop(.45,"rgba(40,34,30,0.6)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,64,64),t.strokeStyle="rgba(0,0,0,0.6)";for(let s=0;s<7;s++){let a=Math.random()*Math.PI*2;t.lineWidth=1,t.beginPath(),t.moveTo(32,32),t.lineTo(32+Math.cos(a)*(10+Math.random()*14),32+Math.sin(a)*(10+Math.random()*14)),t.stroke()}let i=new qt(e);return i.colorSpace=rt,i}function Kx(){let[e,t]=Tr(256),n=Vh(77);for(let s=0;s<40;s++){let a=n()*Math.PI*2,o=n()*70,c=256/2+Math.cos(a)*o,l=256/2+Math.sin(a)*o,h=20+n()*60,u=t.createRadialGradient(c,l,0,c,l,h);u.addColorStop(0,"rgba(5,4,3,0.55)"),u.addColorStop(1,"rgba(5,4,3,0)"),t.fillStyle=u,t.beginPath(),t.arc(c,l,h,0,Math.PI*2),t.fill()}for(let s=0;s<26;s++){let a=n()*Math.PI*2,o=60+n()*60;t.strokeStyle="rgba(0,0,0,0.35)",t.lineWidth=2+n()*5,t.beginPath(),t.moveTo(256/2,256/2),t.lineTo(256/2+Math.cos(a)*o,256/2+Math.sin(a)*o),t.stroke()}let i=new qt(e);return i.colorSpace=rt,i}function Yx(){let[e,t]=Tr(64),n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.4,"rgba(255,255,255,0.6)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64),new qt(e)}function Jx(){let[e,t]=Tr(128);for(let n=0;n<26;n++){let i=64+(Math.random()-.5)*50,s=64+(Math.random()-.5)*50,a=16+Math.random()*26,o=t.createRadialGradient(i,s,0,i,s,a);o.addColorStop(0,"rgba(255,255,255,0.22)"),o.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=o,t.fillRect(0,0,128,128)}return new qt(e)}var Zx=`
attribute float size;
attribute float alpha;
attribute vec3 pcolor;
varying float vAlpha;
varying vec3 vColor;
uniform float uScale;
void main(){
  vAlpha = alpha; vColor = pcolor;
  vec4 mv = modelViewMatrix * vec4(position,1.0);
  gl_PointSize = size * uScale / max(0.05, -mv.z);
  gl_Position = projectionMatrix * mv;
}`,$x=`
uniform sampler2D uMap;
uniform float uLight;
uniform float uOpacity;
varying float vAlpha;
varying vec3 vColor;
void main(){
  vec4 t = texture2D(uMap, gl_PointCoord);
  gl_FragColor = vec4(vColor * uLight, t.a * vAlpha * uOpacity);
  #include <colorspace_fragment>
}`,Ti=class{constructor(e,{texture:t,additive:n=!1,light:i=1,gravity:s=-9.8,drag:a=.4,opacity:o=1}){this.n=e,this.geo=new ct,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.col=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.grow=new Float32Array(e),this.flags=new Uint8Array(e),this.geo.setAttribute("position",new vt(this.pos,3).setUsage(Vi)),this.geo.setAttribute("size",new vt(this.size,1).setUsage(Vi)),this.geo.setAttribute("alpha",new vt(this.alpha,1).setUsage(Vi)),this.geo.setAttribute("pcolor",new vt(this.col,3).setUsage(Vi)),this.geo.boundingSphere=new $t(new R,1e5),this.mat=new Tt({uniforms:{uMap:{value:t},uScale:{value:300},uLight:{value:i},uOpacity:{value:o}},vertexShader:Zx,fragmentShader:$x,transparent:!0,depthWrite:!1,blending:n?mn:ki}),this.points=new as(this.geo,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,this.cursor=0,this.gravity=s,this.drag=a,this.onLand=null,this.live=0}emit(e,t,n,i,s,a=0,o=0){let c=this.cursor;this.cursor=(this.cursor+1)%this.n,this.pos[c*3]=e.x,this.pos[c*3+1]=e.y,this.pos[c*3+2]=e.z,this.vel[c*3]=t.x,this.vel[c*3+1]=t.y,this.vel[c*3+2]=t.z,this.size[c]=n,this.life[c]=i,this.maxLife[c]=i,this.alpha[c]=1,this.grow[c]=a,this.col[c*3]=s.r,this.col[c*3+1]=s.g,this.col[c*3+2]=s.b,this.flags[c]=o,this.live=1}update(e){if(!this.live)return;let t=this.gravity,n=Math.exp(-this.drag*e),i=0;for(let s=0;s<this.n;s++){if(this.life[s]<=0){this.alpha[s]=0;continue}i=1,this.life[s]-=e;let a=s*3;this.vel[a+1]+=t*e,this.vel[a]*=n,this.vel[a+1]*=n,this.vel[a+2]*=n,this.pos[a]+=this.vel[a]*e,this.pos[a+1]+=this.vel[a+1]*e,this.pos[a+2]+=this.vel[a+2]*e,this.size[s]+=this.grow[s]*e,this.pos[a+1]<.01&&this.gravity<0&&(this.pos[a+1]=.01,this.flags[s]&&this.onLand&&this.onLand(this.pos[a],this.pos[a+2],this.size[s]),this.life[s]=0);let o=this.life[s]/this.maxLife[s];this.alpha[s]=Math.min(1,o*3)}this.live=i,this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.size.needsUpdate=!0,this.geo.attributes.alpha.needsUpdate=!0,this.geo.attributes.pcolor.needsUpdate=!0}clear(){this.life.fill(0),this.alpha.fill(0),this.live=1}},Ss=class{constructor(e,t,{color:n=16777215,roughness:i=.25,metalness:s=0,opacity:a=1,wet:o=!0,renderOrder:c=2}={}){this.meshes=e.map(l=>{let h=new Ie({map:l,transparent:!0,depthWrite:!1,color:n,roughness:i,metalness:s,opacity:a,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4});o&&(h.envMapIntensity=1.4);let u=new Ot(1,1),d=new Kn(u,h,t);return d.instanceMatrix.setUsage(Vi),d.count=0,d.frustumCulled=!1,d.renderOrder=c,d.receiveShadow=!0,{im:d,n:0,cursor:0,max:t,grow:[]}}),this._m=new Ue,this._q=new Ft,this._qr=new Ft,this._s=new R}add(e,t,n,i=Math.random()*Math.PI*2,s=-1,a=0){let o=this.meshes[s>=0?s:Math.random()*this.meshes.length|0],c=o.cursor;o.cursor=(o.cursor+1)%o.max,o.n=Math.min(o.n+1,o.max),o.im.count=o.n,this._q.setFromUnitVectors(Mf,t),this._qr.setFromAxisAngle(Mf,i),this._q.multiply(this._qr);let l=a?n*.15:n;return this._s.set(l,l,l),this._m.compose(e,this._q,this._s),o.im.setMatrixAt(c,this._m),o.im.instanceMatrix.needsUpdate=!0,a&&o.grow.push({i:c,pos:e.clone(),q:this._q.clone(),s:l,target:a,speed:a*.18}),o}update(e){for(let t of this.meshes)if(t.grow.length){for(let n=t.grow.length-1;n>=0;n--){let i=t.grow[n];i.s=Math.min(i.target,i.s+i.speed*e),i.speed*=Math.exp(-.35*e),this._s.set(i.s,i.s,i.s),this._m.compose(i.pos,i.q,this._s),t.im.setMatrixAt(i.i,this._m),(i.s>=i.target||i.speed<.002)&&t.grow.splice(n,1)}t.im.instanceMatrix.needsUpdate=!0}}addTo(e){this.meshes.forEach(t=>e.add(t.im))}clear(){this.meshes.forEach(e=>{e.n=0,e.cursor=0,e.im.count=0,e.grow.length=0})}},Si=new R(0,1,0),Mf=new R(0,0,1),Bc=class{constructor(e,t){this.scene=e,this.level=t,this.blood=!0;let n=Yx(),i=Jx();this.drops=new Ti(1800,{texture:n,gravity:-11,drag:.6}),this.mist=new Ti(300,{texture:i,gravity:-.6,drag:2.2,opacity:.55}),this.sparks=new Ti(500,{texture:n,additive:!0,gravity:-9,drag:1.2}),this.dust=new Ti(300,{texture:i,gravity:.15,drag:2.6,opacity:.8}),this.embers=new Ti(400,{texture:n,additive:!0,gravity:.6,drag:1.4}),this.fire=new Ti(400,{texture:i,additive:!0,gravity:1.2,drag:3.2}),this.smoke=new Ti(400,{texture:i,gravity:.5,drag:1.6,opacity:.9}),this.pools=[this.drops,this.mist,this.sparks,this.dust,this.embers,this.fire,this.smoke],this.pools.forEach(a=>e.add(a.points)),this.floorDecals=new Ss([wa(11),wa(23),wa(37)],90,{color:11538448,roughness:.18}),this.dripDecals=new Ss([wa(5,"drip"),wa(9,"drip")],220,{color:10488844,roughness:.2}),this.wallDecals=new Ss([yf(3),yf(8)],70,{color:11538448,roughness:.22}),this.holes=new Ss([jx()],120,{color:16777215,roughness:.9,wet:!1,renderOrder:1}),this.scorch=new Ss([Kx()],40,{color:16777215,roughness:.95,wet:!1,renderOrder:1}),this.decals=[this.floorDecals,this.dripDecals,this.wallDecals,this.holes,this.scorch],this.decals.forEach(a=>a.addTo(e)),this.drops.onLand=(a,o,c)=>{Math.random()<.35&&this.dripDecals.add(new R(a,.012+Math.random()*.004,o),Si,.1+c*.02+Math.random()*.12)},this.gibGeo=new Zr(.05,0),this.gibMat=new Ie({color:16777215,roughness:.3,metalness:0,envMapIntensity:.6}),this.gibs=new Kn(this.gibGeo,this.gibMat,200);let s=new pe;for(let a=0;a<200;a++){let o=Math.random();o<.06?s.setRGB(.5,.44,.36):o<.4?s.setRGB(.36,.06,.05):s.setRGB(.22,.015,.01),this.gibs.setColorAt(a,s)}this.gibs.instanceMatrix.setUsage(Vi),this.gibs.frustumCulled=!1,this.gibs.castShadow=!0,this.gibData=[];for(let a=0;a<200;a++)this.gibData.push({p:new R(0,-10,0),v:new R,r:new Zt,w:new R,s:1,life:0,rest:!1});this.gibCursor=0,e.add(this.gibs),this._v=new R,this._c=new pe,this._m=new Ue,this._q=new Ft,this._sv=new R,this._ray=new Sn,this.lightLevel=1}setLight(e){this.lightLevel=e,this.drops.mat.uniforms.uLight.value=.55+e*.5,this.mist.mat.uniforms.uLight.value=.4+e*.4,this.dust.mat.uniforms.uLight.value=.3+e*.5}setScale(e){for(let t of this.pools)t.mat.uniforms.uScale.value=e*.5}bloodHit(e,t,n=1,i=!1){if(!this.blood){this.puff(e,t,9080696,.6);return}let s=Math.floor((i?90:34)*n),a=this._c;for(let l=0;l<s;l++){let h=Math.random()<.7,u=(h?2.5:1.5)+Math.random()*(i?6:3.5),d=this._v.set((h?t.x:-t.x*.6)*u+(Math.random()-.5)*2.4,(Math.random()*.9+.3)*u*.55+(i?1.5:0),(h?t.z:-t.z*.6)*u+(Math.random()-.5)*2.4);a.setRGB(.42+Math.random()*.2,0,0),this.drops.emit(e,d,.035+Math.random()*(i?.09:.06),1.2+Math.random()*.8,a,0,1)}for(let l=0;l<(i?8:3)*n;l++){let h=this._v.set(t.x*(.5+Math.random())+(Math.random()-.5)*.6,Math.random()*.5,t.z*(.5+Math.random())+(Math.random()-.5)*.6);a.setRGB(.22,.01,.01),this.mist.emit(e,h,.16+Math.random()*.18,.35+Math.random()*.35,a,i?.9:.5)}let o=this._ray;o.set(e,this._sv.copy(t).setY(t.y*.4).normalize()),o.far=i?3.2:2.2;let c=o.intersectObjects(this.level.colliders,!1)[0];if(c&&c.face){let l=c.face.normal.clone().transformDirection(c.object.matrixWorld);if(Math.abs(l.y)<.5){let h=(i?1.4:.8)+Math.random()*.5;this.wallDecals.add(c.point.clone().addScaledVector(l,.01),l,h,(Math.random()-.5)*.4)}else l.y>.5&&this.floorDecals.add(c.point.clone().setY(.013),Si,.8+Math.random()*.6)}i&&this.spawnGibs(e,t,12)}spawnGibs(e,t,n,i=1,s=1){if(this.blood)for(let a=0;a<n;a++){let o=this.gibData[this.gibCursor];this.gibCursor=(this.gibCursor+1)%this.gibData.length,o.p.copy(e),s>1&&o.p.add(this._sv.set((Math.random()-.5)*.5,(Math.random()-.3)*.9,(Math.random()-.5)*.5)),o.v.set(t.x*(2+Math.random()*3)*i+(Math.random()-.5)*3*i,(2+Math.random()*3)*Math.sqrt(i),t.z*(2+Math.random()*3)*i+(Math.random()-.5)*3*i),o.w.set(Math.random()*20,Math.random()*20,Math.random()*20),o.s=(.6+Math.random()*1.2)*(s>1?.8+Math.random()*s:1),o.life=40,o.rest=!1}}wallHit(e,t){this.holes.add(e.clone().addScaledVector(t,.006),t,.08+Math.random()*.04);let n=this._c;for(let i=0;i<14;i++){let s=this._v.copy(t).multiplyScalar(2+Math.random()*4).add(this._sv.set((Math.random()-.5)*4,(Math.random()-.2)*4,(Math.random()-.5)*4));n.setRGB(1,.55+Math.random()*.3,.2),this.sparks.emit(e,s,.02+Math.random()*.03,.15+Math.random()*.25,n)}this.puff(e,t,10130570,.7)}puff(e,t,n,i=1){let s=this._c.set(n),a=new R;for(let o=0;o<6;o++)a.copy(t).multiplyScalar(.4+Math.random()*.9).add(this._sv.set((Math.random()-.5)*.5,Math.random()*.4,(Math.random()-.5)*.5)),this.dust.emit(e,a,(.18+Math.random()*.2)*i,.7+Math.random()*.6,s,.7*i)}pool(e,t,n=1.6){this.blood&&this.floorDecals.add(new R(e,.014+Math.random()*.003,t),Si,.3,Math.random()*6.28,-1,n)}spawnPortal(e){let t=this._c,n=new R;for(let i=0;i<10;i++){let s=this._v.set((Math.random()-.5)*.8,.3+Math.random()*.9,(Math.random()-.5)*.8);t.setRGB(.06,.03,.03),this.dust.emit(n.set(e.x+(Math.random()-.5)*.9,.15,e.z+(Math.random()-.5)*.9),s,.5+Math.random()*.5,1.4+Math.random(),t,.8)}for(let i=0;i<40;i++){let s=this._v.set((Math.random()-.5)*1.5,1.2+Math.random()*2.5,(Math.random()-.5)*1.5);t.setRGB(1,.35+Math.random()*.2,.08),this.embers.emit(n.set(e.x+(Math.random()-.5)*1.1,.05,e.z+(Math.random()-.5)*1.1),s,.025+Math.random()*.03,.8+Math.random(),t)}}explosion(e,t,n=1){let i=this._c,s=this._v,a=new R;for(let l=0;l<46*n;l++){s.set(Math.random()-.5,Math.random()-.3,Math.random()-.5).normalize().multiplyScalar(2+Math.random()*7*n),t&&s.addScaledVector(t,2.5);let h=Math.random();h<.3?i.setRGB(3.2,2.6,1.6):h<.7?i.setRGB(2.6,1.1,.25):i.setRGB(1.6,.35,.05),this.fire.emit(a.copy(e).add(this._sv.set((Math.random()-.5)*.4,(Math.random()-.5)*.4,(Math.random()-.5)*.4)),s,(.5+Math.random()*.7)*n,.25+Math.random()*.4,i,2.4*n)}for(let l=0;l<26*n;l++){s.set(Math.random()-.5,Math.random()*.8,Math.random()-.5).normalize().multiplyScalar(1+Math.random()*3.5*n);let h=.05+Math.random()*.06;i.setRGB(h,h*.95,h*.9),this.smoke.emit(a.copy(e),s,(.7+Math.random()*.8)*n,1.8+Math.random()*1.6,i,1.5*n)}for(let l=0;l<70*n;l++)s.set(Math.random()-.5,Math.random()-.2,Math.random()-.5).normalize().multiplyScalar(5+Math.random()*12),i.setRGB(1,.6+Math.random()*.3,.25),this.sparks.emit(e,s,.03+Math.random()*.04,.4+Math.random()*.7,i);for(let l=0;l<30*n;l++)s.set(Math.random()-.5,Math.random()*.6+.2,Math.random()-.5).normalize().multiplyScalar(1+Math.random()*3),i.setRGB(1,.4,.1),this.embers.emit(a.copy(e),s,.03+Math.random()*.03,1+Math.random()*1.5,i);let o=this._ray;o.set(a.copy(e).addScaledVector(t||Si,.3),this._sv.copy(t||Si).negate()),o.far=1.6;let c=o.intersectObjects(this.level.colliders,!1)[0];if(c&&c.face){let l=c.face.normal.clone().transformDirection(c.object.matrixWorld);this.scorch.add(c.point.clone().addScaledVector(l,.012),l,(2.6+Math.random())*n)}else e.y<1.5&&this.scorch.add(new R(e.x,.011,e.z),Si,(2.6+Math.random())*n)}gibExplode(e,t){if(!this.blood){this.puff(e,Si,9080696,2);return}let n=this._c,i=this._v;for(let a=0;a<220;a++)i.set(Math.random()-.5,Math.random()*.9,Math.random()-.5).normalize().multiplyScalar(2+Math.random()*7).addScaledVector(t,2),n.setRGB(.4+Math.random()*.2,0,0),this.drops.emit(this._sv.copy(e).add(new R((Math.random()-.5)*.4,(Math.random()-.5)*1.2,(Math.random()-.5)*.4)),i,.05+Math.random()*.1,1.3+Math.random(),n,0,1);for(let a=0;a<14;a++)i.set(Math.random()-.5,Math.random()*.6,Math.random()-.5).multiplyScalar(2.5),n.setRGB(.22,.01,.01),this.mist.emit(e,i,.35+Math.random()*.4,.6+Math.random()*.5,n,1.4);this.spawnGibs(e,t,26,1.3,1.5);let s=this._ray;for(let a=0;a<7;a++){let o=Math.random()*Math.PI*2;s.set(e,this._sv.set(Math.cos(o),(Math.random()-.6)*.5,Math.sin(o)).normalize()),s.far=4;let c=s.intersectObjects(this.level.colliders,!1)[0];if(!c||!c.face)continue;let l=c.face.normal.clone().transformDirection(c.object.matrixWorld);Math.abs(l.y)<.5?this.wallDecals.add(c.point.clone().addScaledVector(l,.01),l,1.2+Math.random()*.8,(Math.random()-.5)*.4):l.y>.5&&this.floorDecals.add(c.point.clone().setY(c.point.y+.013),Si,1+Math.random()*.8)}this.pool(e.x,e.z,2.6)}update(e){for(let n of this.pools)n.update(e);this.floorDecals.update(e);let t=!1;for(let n=0;n<this.gibData.length;n++){let i=this.gibData[n];if(i.life<=0){this._m.makeScale(0,0,0),this.gibs.setMatrixAt(n,this._m);continue}t=!0,i.life-=e,i.rest||(i.v.y-=11*e,i.p.addScaledVector(i.v,e),i.r.x+=i.w.x*e,i.r.y+=i.w.y*e,i.r.z+=i.w.z*e,i.p.y<.03&&(i.p.y=.03,Math.abs(i.v.y)<1.2&&(i.rest=!0,Math.random()<.6&&this.dripDecals.add(new R(i.p.x,.012,i.p.z),Si,.18+Math.random()*.15)),i.v.y*=-.3,i.v.x*=.5,i.v.z*=.5,i.w.multiplyScalar(.5)),this.level.collide(i.p,.04));let s=i.s*Math.min(1,i.life/3);this._q.setFromEuler(i.r),this._m.compose(i.p,this._q,this._sv.set(s,s*.7,s)),this.gibs.setMatrixAt(n,this._m)}(t||this._gibsWasAny)&&(this.gibs.instanceMatrix.needsUpdate=!0),this._gibsWasAny=t}reset(){this.decals.forEach(e=>e.clear());for(let e of this.gibData)e.life=0;this._gibsWasAny=!0;for(let e of this.pools)e.clear()}};var Ei="CityDeadOutfit",ji=[["Head","+Head",.125,"head"],["Neck","Head",.075,"head"],["Hips","Spine1",.16,"body"],["Spine1","Spine2",.16,"body"],["Spine2","Neck",.13,"body"],["LeftUpLeg","LeftLeg",.11,"limb"],["RightUpLeg","RightLeg",.11,"limb"],["LeftLeg","LeftFoot",.085,"limb"],["RightLeg","RightFoot",.085,"limb"],["LeftArm","LeftForeArm",.075,"limb"],["RightArm","RightForeArm",.075,"limb"],["LeftForeArm","LeftHand",.065,"limb"],["RightForeArm","RightHand",.065,"limb"]],Er=2.25,kc=class{constructor(e,t){this.scene=e.scene,this.clips={};let n=new rn().setFromObject(this.scene);this.rawHeight=n.max.y-n.min.y,this.scale=1.78/this.rawHeight,this.mats={};let i=(f,g={})=>new Ie({map:f.c,normalMap:f.n,roughnessMap:f.orm,metalnessMap:f.orm,aoMap:f.orm,roughness:1,metalness:1,...g});this.scene.traverse(f=>{if(!f.isMesh)return;let g=f.material.name||"";/Outfit/i.test(g)?f.material=i(t.outfit,{name:"outfit"}):f.material=i(t.body,{name:"body"}),f.castShadow=!0,f.receiveShadow=!0});for(let f of e.animations)this.clips[f.name]=f;let s=Ei+"Hips.position";this.speed={};for(let[f,g]of Object.entries(this.clips)){let b=g.tracks.find(S=>S.name===s);if(!b)continue;let m=b.values,p=m.length/3,v=m[(p-1)*3+2]-m[2],E=m[(p-1)*3]-m[0];if(this.speed[f]=Math.hypot(E,v)*this.scale/g.duration,f==="die")continue;let x=m[0],M=m[2];for(let S=0;S<p;S++)m[S*3]=x,m[S*3+2]=M}{let f=br(this.scene),g=new fs(f),b=f.getObjectByName(Ei+"LeftToeBase")||f.getObjectByName(Ei+"LeftFoot"),m=f.getObjectByName(Ei+"RightToeBase")||f.getObjectByName(Ei+"RightFoot"),p=new R,v=new R,E=new R,x=new R;for(let M of["walk","walk2","run"]){let S=this.clips[M];if(!S||this.speed[M]>.2)continue;let A=g.clipAction(S);A.reset().play();let _=90,w=S.duration/_,C=[];for(let F=0;F<=_;F++){if(g.setTime(F*w),f.updateMatrixWorld(!0),b.getWorldPosition(p),m.getWorldPosition(v),F>0){let k=p.y<v.y?[p,E]:[v,x];C.push(-(k[0].z-k[1].z)/w)}E.copy(p),x.copy(v)}A.stop(),C.sort((F,k)=>F-k);let D=C[C.length*.6|0];this.speed[M]=Math.max(.15,Math.min(3.5,D*this.scale))}}for(let f of Object.values(this.clips))f.tracks=f.tracks.filter(g=>!g.name.startsWith("root."));this.attackHits={};let a=br(this.scene),o=new fs(a),c=a.getObjectByName(Ei+"LeftHand"),l=a.getObjectByName(Ei+"RightHand"),h=a.getObjectByName(Ei+"Hips"),u=new R,d=new R;for(let f of["attack","attack2","attack3"]){let g=this.clips[f];if(!g)continue;let b=o.clipAction(g);b.reset().play();let m=[],p=60;for(let S=0;S<=p;S++){o.setTime(g.duration*S/p),a.updateMatrixWorld(!0),h.getWorldPosition(d);let A=c.getWorldPosition(u).z-d.z,_=l.getWorldPosition(u).z-d.z;m.push(Math.max(A,_))}b.stop();let v=Math.max(...m),E=Math.min(...m),x=E+(v-E)*.78,M=[];for(let S=1;S<p;S++)if(m[S]>=x&&m[S]>=m[S-1]&&m[S]>=m[S+1]){let A=S/p;(!M.length||A-M[M.length-1]>.12)&&M.push(A)}this.attackHits[f]=M.length?M:[.45]}}},Qx=0,Xh=class{constructor(e){this.id=++Qx,this.tpl=e,this.root=new Ve,this.model=br(e.scene),this.model.scale.setScalar(e.scale),this.root.add(this.model),this.meshes=[],this.model.traverse(t=>{t.isMesh&&(t.material=t.material.clone(),t.material.emissive=new pe(0),t.frustumCulled=!1,this.meshes.push(t))}),this.bones={},this.model.traverse(t=>{t.isBone&&(this.bones[t.name.replace(Ei,"")]=t)}),this.mixer=new fs(this.model),this.actions={};for(let[t,n]of Object.entries(e.clips))this.actions[t]=this.mixer.clipAction(n);this.actions.die.setLoop(_s,1),this.actions.die.clampWhenFinished=!0;for(let t of["attack","attack2","attack3","hit","scream"])this.actions[t]&&(this.actions[t].setLoop(_s,1),this.actions[t].clampWhenFinished=!0);this.blob=new ye(n_,Sf),this.blob.rotation.x=-Math.PI/2,this.blob.position.y=.02,this.blob.renderOrder=1,this.root.add(this.blob),this.active=!1,this.cur=null,this._v=new R,this.capsA=ji.map(()=>new R),this.capsB=ji.map(()=>new R)}spawn(e,t){this.active=!0,this.gibbed=!1,this.push=0,this.state="rise",this.dead=!1,this.root.position.copy(e),this.root.rotation.y=Math.random()*Math.PI*2,this.root.visible=!0,this.hp=this.maxHp=t.hp,this.speedMul=t.speed,this.dmg=t.dmg;let n=.92+Math.random()*.16;this.model.scale.setScalar(this.tpl.scale*n),this.height=1.78*n,this.walkClip=Math.random()<.3?"walk":"walk2",this.flinch=0,this.flinchSide=0,this.knock=0,this.knockDir=new R,this.flash=0,this.stagger=0,this.groanT=1+Math.random()*4,this.attackCD=0,this.deadT=0,this.sink=0,this.headless=!1,this.bones.Head.scale.setScalar(1),this.pathT=0,this.blob.visible=!0,this.blob.material=Sf,this.blob.scale.setScalar(1);for(let s of this.meshes)s.material.emissive.setRGB(0,0,0),s.material.color.setHSL(0,0,.85+Math.random()*.2);this.mixer.stopAllAction();let i=this.actions.die;i.reset(),i.setLoop(_s,1),i.clampWhenFinished=!0,i.time=i.getClip().duration,i.timeScale=-1.35,i.play(),this.cur="die",this.mixer.update(0)}play(e,t=.25,n=1){let i=this.actions[e];if(!i)return;if(this.cur===e&&i.isRunning()){i.timeScale=n;return}i.reset(),i.timeScale=n,i.setEffectiveWeight(1),i.play();let s=this.actions[this.cur];s&&s!==i&&s.crossFadeTo(i,t,!1),this.cur=e}updateCapsules(){for(let e=0;e<ji.length;e++){let[t,n]=ji[e];this.bones[t].getWorldPosition(this.capsA[e]),n==="+Head"?(this.bones.Neck.getWorldPosition(this.capsB[e]),this.capsB[e].sub(this.capsA[e]).normalize().multiplyScalar(-.2*(this.height/1.78)).add(this.capsA[e])):this.bones[n].getWorldPosition(this.capsB[e])}}raycast(e,t,n){if(!this.active||this.dead)return null;let i=this._v.copy(this.root.position);i.y+=1;let s=i.sub(e),a=s.dot(t);if(a<0||a-1.4>n||s.lengthSq()-a*a>1.5*1.5)return null;this.updateCapsules();let o=null;for(let c=0;c<ji.length;c++){let l=ji[c][2]*(this.height/1.78),h=e_(e,t,this.capsA[c],this.capsB[c],l);h!==null&&h<n&&(!o||h<o.t)&&(o={t:h,zone:ji[c][3],bone:ji[c][0]})}return o&&(o.point=e.clone().addScaledVector(t,o.t)),o}},wr=new R,Wh=new R,qh=new R;function e_(r,e,t,n,i){wr.subVectors(n,t),Wh.subVectors(r,t);let s=wr.dot(wr),a=wr.dot(e),o=wr.dot(Wh),c=e.dot(Wh),l=s-a*a,h=l>1e-6?(s*-c+a*o)/l:0,u=s>1e-6?(o+h*a)/s:0;u=Math.max(0,Math.min(1,u)),qh.copy(t).addScaledVector(wr,u),h=Math.max(0,qh.clone().sub(r).dot(e));let f=r.clone().addScaledVector(e,h).distanceTo(qh);return f>i?null:Math.max(0,h-Math.sqrt(Math.max(0,i*i-f*f)))}function t_(){let r=document.createElement("canvas");r.width=r.height=64;let e=r.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,32);return t.addColorStop(0,"rgba(0,0,0,0.75)"),t.addColorStop(.5,"rgba(0,0,0,0.4)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new qt(r)}var n_=new Ot(1.3,1.3),Sf=new St({map:t_(),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3}),zc=class{constructor(e,t,n=18){this.game=e,this.tpl=t,this.pool=[];for(let i=0;i<n;i++){let s=new Xh(t);s.root.visible=!1,e.scene.add(s.root),this.pool.push(s)}this._d=new R,this._f=new R,this._s=new R}get alive(){return this.pool.filter(e=>e.active&&!e.dead)}spawn(e,t){let n=this.pool.find(i=>!i.active);if(!n){let i=this.pool.filter(s=>s.dead).sort((s,a)=>a.deadT-s.deadT)[0];if(!i)return null;n=i}return n.spawn(e,t),this.game.fx.spawnPortal(e),this.game.audio.roar(e.clone().setY(1.5)),n}reset(){for(let e of this.pool)e.active=!1,e.root.visible=!1,e.mixer.stopAllAction()}damage(e,t,n,i,s,a=0,o=!1){if(e.dead)return!1;e.hp-=t,e.flash=1;let c=this.game;return e.hp<=0?(this.kill(e,o&&c.fx.blood?"gib":n,i,s,a),!0):(a>0&&(e.knock=a*.6,e.knockDir=s.clone().setY(0).normalize()),e.flinch=Math.min(1.2,e.flinch+(n==="head"?1.1:.7)),e.flinchSide=(Math.random()-.5)*2,e.stagger=n==="limb"?.35:.25,Math.random()<.25&&e.state==="chase"&&(e.state="hit",e.hitT=.55,e.play("hit",.08,1.6)),Math.random()<.5&&c.audio.groan(e.root.position.clone().setY(1.6)),!1)}kill(e,t,n,i,s=0){let a=this.game;if(e.dead=!0,e.state="dead",e.deadT=0,e.flinch=0,e.push=s,e.pushDir=i.clone().setY(0).normalize(),t==="gib"){e.gibbed=!0,e.root.visible=!1,e.pooled=!0,a.fx.gibExplode(e.root.position.clone().setY(.95),e.pushDir),a.audio.headshot(e.root.position.clone().setY(1)),a.onKill(e,t);return}let o=e.actions.die;o.reset(),o.timeScale=1.15,o.setLoop(_s,1),o.clampWhenFinished=!0,o.play();let c=e.actions[e.cur];c&&c!==o&&c.crossFadeTo(o,.12,!1),e.cur="die",e.root.rotation.y=Math.atan2(-i.x,-i.z),t==="head"&&a.fx.blood&&(e.headless=!0,e.bones.Head.scale.setScalar(1e-4)),a.audio.death(e.root.position.clone().setY(1.4)),setTimeout(()=>e.active&&e.dead&&a.audio.thud(e.root.position.clone().setY(.2)),1300),a.onKill(e,t)}update(e,t){let n=this.game,i=n.level,s=t.pos;i.updateFlow(s.x,s.z);let a=this.pool.filter(o=>o.active);for(let o of a){let c=o.root.position;if(o.mixer.update(e),o.flash>0){o.flash=Math.max(0,o.flash-e*9);for(let S of o.meshes)S.material.emissive.setRGB(o.flash*.22,o.flash*.02,0)}if(o.dead){if(o.deadT+=e,o.gibbed){o.deadT>.5&&(o.active=!1,o.gibbed=!1);continue}if(o.push>.05&&(c.addScaledVector(o.pushDir,o.push*e),o.push*=Math.exp(-e*4),i.collide(c,.3)),o.deadT>1.9&&!o.pooled){o.pooled=!0;let S=o.bones.Hips.getWorldPosition(this._d);n.fx.pool(S.x,S.z,o.headless?2.2:1.5)}o.deadT>.4&&(o.blob.material.opacity=1),o.deadT>28&&(o.sink+=e*.25,c.y=-o.sink,o.sink>.6&&(o.active=!1,o.root.visible=!1,o.pooled=!1,c.y=0));continue}o.pooled=!1;let l=s.x-c.x,h=s.z-c.z,u=Math.hypot(l,h);if(o.state==="rise"){o.actions.die.time<=.02&&(o.state=Math.random()<.35?"scream":"chase",o.state==="scream"?(o.play("scream",.25,1.4),o.screamT=1.6,n.audio.roar(c.clone().setY(1.6))):o.play(o.walkClip,.3,o.speedMul*Er)),this.face(o,l,h,e,2);continue}if(o.state==="scream"){o.screamT-=e,this.face(o,l,h,e,3),o.screamT<=0&&(o.state="chase",o.play(o.walkClip,.35,o.speedMul*Er));continue}if(o.state==="hit"){o.hitT-=e,o.hitT<=0&&(o.state="chase",o.play(o.walkClip,.25,o.speedMul*Er));continue}if(o.state==="attack"){this.face(o,l,h,e,5);let S=o.actions[o.attackClip],A=S.time/S.getClip().duration,_=this.tpl.attackHits[o.attackClip];for(;o.nextHit<_.length&&A>=_[o.nextHit];)o.nextHit++,u<1.75+(t.y>.4?.4:0)&&t.y<1.3&&!t.dead&&n.hurtPlayer(o.dmg,c);(!S.isRunning()||A>.97||u>2.6&&A>(_[_.length-1]||.5)+.05)&&(o.state="chase",o.attackCD=.4,o.play(o.walkClip,.3,o.speedMul*Er));continue}if(o.attackCD-=e,u<1.35+(t.y>.4?.45:0)&&o.attackCD<=0&&!t.dead){o.state="attack",o.attackClip=["attack","attack2","attack3"][Math.random()*3|0],o.nextHit=0,o.play(o.attackClip,.15,1.45),n.audio.attackGrunt(c.clone().setY(1.6));continue}let d=this._f,f=.42,g=-h/(u||1),b=l/(u||1);u<24&&i.los(c.x+g*f,c.z+b*f,s.x,s.z)&&i.los(c.x-g*f,c.z-b*f,s.x,s.z)?d.set(l/u,0,h/u):i.flowDir(c.x,c.z,d);let p=this._s.set(0,0,0);for(let S of a){if(S===o||S.dead)continue;let A=c.x-S.root.position.x,_=c.z-S.root.position.z,w=A*A+_*_;if(w<.9*.9&&w>1e-5){let C=Math.sqrt(w);p.x+=A/C*(.9-C)*2.2,p.z+=_/C*(.9-C)*2.2}}d.add(p),d.y=0,d.lengthSq()>1e-6&&d.normalize(),this.face(o,d.x,d.z,e,3.2),o.stagger=Math.max(0,o.stagger-e);let E=(this.tpl.speed[o.walkClip]||.9)*Er*o.speedMul*(o.stagger>0?.25:1)*(u<1.1?0:1);o.knock>.05&&(c.addScaledVector(o.knockDir,o.knock*e),o.knock*=Math.exp(-e*6));let x=o.root.rotation.y;c.x+=Math.sin(x)*E*e,c.z+=Math.cos(x)*E*e,i.collide(c,.38);let M=o.actions[o.walkClip];M&&(M.timeScale=Er*o.speedMul*(o.stagger>0?.4:1)),o.groanT-=e,o.groanT<=0&&(o.groanT=3+Math.random()*6,u<26&&n.audio.groan(c.clone().setY(1.6)))}for(let o of a){if(o.dead||o.flinch<=.001)continue;o.flinch*=Math.exp(-e*7);let c=o.flinch;o.bones.Spine2.rotation.x-=c*.45,o.bones.Spine1.rotation.x-=c*.25,o.bones.Head.rotation.x-=c*.5,o.bones.Spine2.rotation.z+=c*.3*o.flinchSide}}face(e,t,n,i,s){if(Math.abs(t)+Math.abs(n)<1e-5)return;let o=Math.atan2(t,n)-e.root.rotation.y;o=Math.atan2(Math.sin(o),Math.cos(o)),e.root.rotation.y+=o*Math.min(1,s*i)}raycast(e,t,n){let i=null;for(let s of this.pool){if(!s.active||s.dead)continue;let a=s.raycast(e,t,n);a&&(!i||a.t<i.t)&&(i=a,i.z=s)}return i}};var Aa=new R;function An(r,e,t,n,i,s){let a=2*Math.PI*i/4,o=Math.max(s-2*i,0),c=Math.PI/4;Aa.copy(e),Aa[n]=0,Aa.normalize();let l=.5*a/(a+o),h=1-Aa.angleTo(r)/c;return Math.sign(Aa[t])===1?h*l:o/(a+o)+l+l*(1-h)}var Gt=class r extends Be{constructor(e=1,t=1,n=1,i=2,s=.1){let a=i*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:s},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new R,l=new R,h=new R(e,t,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,b=new R,m=.5/a;for(let p=0,v=0;p<u.length;p+=3,v+=2)switch(c.fromArray(u,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),u[p+0]=h.x*Math.sign(c.x)+l.x*s,u[p+1]=h.y*Math.sign(c.y)+l.y*s,u[p+2]=h.z*Math.sign(c.z)+l.z*s,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/g)){case 0:b.set(1,0,0),f[v+0]=An(b,l,"z","y",s,n),f[v+1]=1-An(b,l,"y","z",s,t);break;case 1:b.set(-1,0,0),f[v+0]=1-An(b,l,"z","y",s,n),f[v+1]=1-An(b,l,"y","z",s,t);break;case 2:b.set(0,1,0),f[v+0]=1-An(b,l,"x","z",s,e),f[v+1]=An(b,l,"z","x",s,n);break;case 3:b.set(0,-1,0),f[v+0]=1-An(b,l,"x","z",s,e),f[v+1]=1-An(b,l,"z","x",s,n);break;case 4:b.set(0,0,1),f[v+0]=1-An(b,l,"x","y",s,e),f[v+1]=1-An(b,l,"y","x",s,t);break;case 5:b.set(0,0,-1),f[v+0]=An(b,l,"x","y",s,e),f[v+1]=1-An(b,l,"y","x",s,t);break}}static fromJSON(e){return new r(e.width,e.height,e.depth,e.segments,e.radius)}};function i_(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.translate(128/2,128/2);let n=t.createRadialGradient(0,0,0,0,0,128/2);n.addColorStop(0,"rgba(255,255,240,1)"),n.addColorStop(.15,"rgba(255,230,150,1)"),n.addColorStop(.4,"rgba(255,140,40,0.6)"),n.addColorStop(1,"rgba(255,60,0,0)"),t.fillStyle=n;for(let i=0;i<7;i++)t.rotate(Math.PI*2/7+Math.random()*.3),t.beginPath(),t.moveTo(-6,0),t.lineTo(0,-128/2*(.6+Math.random()*.4)),t.lineTo(6,0),t.fill();return t.beginPath(),t.arc(0,0,128*.2,0,Math.PI*2),t.fill(),new qt(e)}function s_(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.fillStyle="#808080",t.fillRect(0,0,128,128);for(let i=0;i<1400;i++){let s=90+Math.random()*90|0;t.fillStyle=`rgb(${s},${s},${s})`,t.fillRect(Math.random()*128,Math.random()*128,2,2)}let n=new qt(e);return n.wrapS=n.wrapT=pn,n}function r_(){let t=document.createElement("canvas");t.width=256,t.height=64;let n=t.getContext("2d");n.fillStyle="#6b4226",n.fillRect(0,0,256,64);for(let s=0;s<70;s++){let a=Math.random()*64,o=.05+Math.random()*.18;n.strokeStyle=Math.random()<.5?`rgba(40,20,8,${o})`:`rgba(150,95,55,${o})`,n.lineWidth=.5+Math.random()*2,n.beginPath(),n.moveTo(0,a);for(let c=0;c<=256;c+=16)n.lineTo(c,a+Math.sin(c*.03+s)*2.5);n.stroke()}let i=new qt(t);return i.colorSpace=rt,i.wrapS=i.wrapT=pn,i}var on={pistol:{name:"Pistole",slot:1,mag:12,maxReserve:1/0,cooldown:.15,reload:1.25,damage:34,pellets:1,spread:.006,kick:[2.2,26],camKick:.012},shotgun:{name:"Pump-Action",slot:2,mag:6,maxReserve:40,cooldown:.2,pump:.52,shellTime:.42,damage:15,pellets:10,spread:.075,kick:[5.5,70],camKick:.035},rocket:{name:"Raketenwerfer",slot:3,mag:1,maxReserve:12,cooldown:.4,reload:1.5,kick:[5,34],camKick:.03}},Rn=["pistol","shotgun","rocket"],jh=6,Hc=class{constructor(e){this.scene=new ui,this.camera=new Et(52,16/9,.01,10),this.scene.add(this.camera),this.hemi=new us(12109020,3811872,1),this.scene.add(this.hemi),this.key=new ds(16770760,1.4),this.key.position.set(-.5,1,.4),this.scene.add(this.key),this.flashLight=new Qt(16756832,0,1.5,2),this.scene.add(this.flashLight),this.scene.environment=e,this.scene.environmentIntensity=.35,this.rig=new Ve,this.kick=new Ve,this.camera.add(this.rig),this.rig.add(this.kick);let t=this.m={steel:new Ie({color:2500651,metalness:.92,roughness:.32}),steelLight:new Ie({color:5593180,metalness:.95,roughness:.22}),dark:new Ie({color:657930,roughness:.6,metalness:.5}),black:new St({color:0}),poly:new Ie({color:1315860,metalness:.05,roughness:.78}),grip:new Ie({color:1381653,metalness:0,roughness:.9,bumpMap:s_(),bumpScale:1.2}),glove:new Ie({color:1841688,metalness:.05,roughness:.55}),knuckle:new Ie({color:2762532,metalness:.05,roughness:.7}),sleeve:new Ie({color:3093284,metalness:0,roughness:.95}),dot:new Ie({color:0,emissive:9109338,emissiveIntensity:3}),red:new Ie({color:0,emissive:16719888,emissiveIntensity:4}),brass:new Ie({color:13213766,metalness:1,roughness:.3}),shellRed:new Ie({color:10227728,metalness:.1,roughness:.45}),wood:new Ie({map:r_(),color:12618336,roughness:.5,metalness:0}),olive:new Ie({color:4082220,metalness:.35,roughness:.55}),oliveDark:new Ie({color:2436122,metalness:.4,roughness:.5}),orange:new Ie({color:2230528,emissive:16739125,emissiveIntensity:1.2,roughness:.4}),warhead:new Ie({color:5922634,metalness:.6,roughness:.35}),nade:new Ie({color:3819048,metalness:.3,roughness:.55})};this.flashTex=i_(),this.models={pistol:this.buildPistol(),shotgun:this.buildShotgun(),rocket:this.buildLauncher()};for(let s of Rn){let a=this.models[s];a.group.visible=s==="pistol",this.kick.add(a.group),a.group.traverse(o=>{o.isMesh&&(o.castShadow=!1,o.receiveShadow=!1)})}this.buildNadeHand(),this.shells=[];let n=new nt(.0045,.0045,.019,10),i=new nt(.0095,.0095,.05,12);for(let s=0;s<10;s++){let a=s>=5,o=new ye(a?i:n,a?t.shellRed:t.brass);o.visible=!1,this.camera.add(o),this.shells.push({m:o,v:new R,w:new R,life:0,shot:a})}this.reset()}reset(){this.state={pistol:{ammo:12,reserve:1/0},shotgun:{ammo:6,reserve:12},rocket:{ammo:1,reserve:3}},this.grenades=3,this.owned={pistol:!0,shotgun:!0,rocket:!0},this.current="pistol",this.last="shotgun",this.pending=null,this.switchT=0,this.cooldown=0,this.reloadT=0,this.pumpT=0,this.sgReload=null,this.flashT=0,this.slideT=0,this.recoil={z:0,vz:0,rx:0,vrx:0,ry:0,vry:0},this.swayX=0,this.swayY=0,this.raise=1,this.nade.t=-1,this.nade.group.visible=!1;for(let e of Rn)this.models[e].group.visible=e==="pistol";this.applyPose("pistol")}get def(){return on[this.current]}get st(){return this.state[this.current]}get reloading(){return this.reloadT>0||!!this.sgReload}get busy(){return this.switchT>0||this.nade.t>=0||this.raise>.3}applyPose(e){let t=this.models[e];this.rigBase=t.rigBase,this.kick.rotation.set(0,0,0),t.group.rotation.copy(t.rot)}_add(e,t,n,i,s,a){let o=new ye(t,n);return o.position.set(i,s,a),e.add(o),o}rightHand(e){let t=this.m,n=(...u)=>this._add(...u),i=new Ve;e.add(i);let s=n(i,new Gt(.06,.1,.07,3,.02),t.glove,.004,-.088,.085);s.rotation.x=.28;for(let u=0;u<3;u++){let d=new Ve;d.position.set(0,-.058-u*.022,.044-u*.006),d.rotation.x=.28,i.add(d);let f=n(d,new Mn(.0105,.03,4,10),t.glove,-.018,0,-.005);f.rotation.z=Math.PI/2,f.rotation.y=.35;let g=n(d,new Mn(.0098,.018,4,10),t.knuckle,.008,0,-.022);g.rotation.x=Math.PI/2;let b=n(d,new Mn(.0095,.02,4,10),t.glove,.024,0,-.01);b.rotation.z=Math.PI/2,b.rotation.y=-.6}let a=n(i,new Mn(.0095,.04,4,10),t.glove,.017,-.036,.022);a.rotation.x=Math.PI/2-.25,a.rotation.z=-.15;let o=n(i,new Mn(.011,.045,4,10),t.glove,-.02,-.02,.045);o.rotation.x=Math.PI/2+.25,o.rotation.z=.2;let c=n(i,new nt(.03,.033,.06,14),t.glove,.01,-.14,.13);c.rotation.x=1;let l=n(i,new nt(.038,.05,.36,16),t.sleeve,.03,-.2,.32);l.rotation.x=1.05,l.rotation.z=-.12;let h=n(i,new kn(.036,.008,8,18),t.sleeve,.012,-.152,.152);return h.rotation.x=1.05+Math.PI/2,i}supportHand(e,t,n,i,s=.028){let a=this.m,o=(...b)=>this._add(...b),c=new Ve;c.position.set(t,n,i),e.add(c);let l=o(c,new Gt(.05,.035,.085,3,.014),a.glove,-.006,-s-.012,0);l.rotation.z=.25;for(let b=0;b<4;b++){let m=o(c,new Mn(.0095,.034,4,10),a.glove,s*.9+.004,-.004,-.032+b*.021);m.rotation.z=-.35}let h=o(c,new Mn(.0105,.04,4,10),a.knuckle,-s-.006,.004,-.01);h.rotation.x=Math.PI/2,h.rotation.z=.2;let u=new R(-.35,-.55,.75).normalize(),d=.42,f=o(c,new nt(.048,.036,d,16),a.sleeve,0,0,0);f.quaternion.setFromUnitVectors(new R(0,-1,0),u),f.position.set(-.012,-s-.02,.03).addScaledVector(u,d/2+.02);let g=o(c,new Xt(.032,12,10),a.glove,-.012,-s-.022,.035);return c}makeFlash(e,t,n,i,s){let a=new St({map:this.flashTex,transparent:!0,blending:mn,depthWrite:!1,opacity:.85}),o=new Ve;o.position.set(t,n,i),e.add(o);let c=new ye(new Ot(s,s),a),l=new ye(new Ot(s*.46,s*1.55),a);l.rotation.x=Math.PI/2,l.position.z=-s*.58;let h=l.clone();return h.rotation.set(Math.PI/2,0,Math.PI/2),o.add(c,l,h),o.visible=!1,o}buildPistol(){let e=this.m,t=(...g)=>this._add(...g),n=new Ve,i=new Ve;n.add(i),t(i,new Gt(.03,.032,.192,3,.004),e.steel,0,0,0);for(let g=0;g<7;g++)t(i,new Be(.0315,.022,.0025),e.steelLight,0,-.002,.055+g*.0055);t(i,new Be(.004,.012,.034),e.dark,.0135,.007,-.012),t(i,new Be(.0045,.0105,.028),e.steelLight,.0128,.007,-.012),t(i,new Be(.005,.007,.008),e.steel,0,.019,-.085),t(i,new Xt(.0013,8,8),e.dot,0,.0205,-.0805),t(i,new Be(.024,.008,.008),e.steel,0,.0195,.086),t(i,new Be(.006,.0085,.0085),e.black,0,.021,.086),t(i,new Xt(.0012,8,8),e.dot,-.0062,.0215,.0818),t(i,new Xt(.0012,8,8),e.dot,.0062,.0215,.0818);let s=t(i,new nt(.0072,.0072,.012,16),e.steelLight,0,.002,-.097);s.rotation.x=Math.PI/2;let a=t(i,new fi(.0046,16),e.black,0,.002,-.1032);a.rotation.y=Math.PI,t(n,new Gt(.027,.02,.17,2,.003),e.poly,0,-.024,-.008),t(n,new Be(.02,.006,.05),e.poly,0,-.036,-.055);let o=t(n,new kn(.019,.0035,8,20,Math.PI),e.poly,0,-.035,.012);o.rotation.set(Math.PI,Math.PI/2,0),o.scale.set(1,1.15,1);let c=t(n,new Be(.006,.018,.005),e.steel,0,-.04,.012);c.rotation.x=.25;let l=t(n,new Gt(.031,.115,.052,3,.008),e.grip,0,-.082,.07);l.rotation.x=.28;let h=new Ve;n.add(h);let u=t(h,new Gt(.033,.012,.054,2,.003),e.poly,0,-.142,.087);u.rotation.x=.28,t(n,new Be(.008,.012,.01),e.steel,0,.004,.1),this.rightHand(n);let d=this.makeFlash(i,0,.002,-.112,.048),f=new dt;return f.position.set(.016,.01,-.012),i.add(f),{group:n,slide:i,mag:h,flash:d,eject:f,rigBase:new R(.12,-.105,-.36),rot:new Zt(0,.3,-.05)}}buildShotgun(){let e=this.m,t=(...m)=>this._add(...m),n=new Ve;t(n,new Gt(.044,.056,.2,3,.006),e.steel,0,.004,-.03),t(n,new Be(.0045,.02,.06),e.dark,.0222,.012,-.03),t(n,new Be(.03,.006,.18),e.steelLight,0,.034,-.03);let i=t(n,new nt(.0115,.0115,.5,18),e.steel,0,.018,-.38);i.rotation.x=Math.PI/2;let s=t(n,new nt(.0105,.0105,.4,16),e.steel,0,-.008,-.33);s.rotation.x=Math.PI/2;let a=t(n,new fi(.0085,16),e.black,0,.018,-.6305);a.rotation.y=Math.PI;let o=t(n,new nt(.012,.012,.02,16),e.steelLight,0,-.008,-.535);o.rotation.x=Math.PI/2,t(n,new Xt(.003,10,10),e.steelLight,0,.032,-.615);let c=t(n,new Be(.012,.03,.012),e.steel,0,.005,-.5),l=new Ve;l.position.set(0,-.006,-.3),n.add(l),t(l,new Gt(.054,.048,.17,3,.012),e.wood,0,0,0);for(let m=0;m<6;m++)t(l,new Be(.056,.003,.006),e.dark,0,-.012+m%2*.024,-.05+m*.02);this.supportHand(l,0,-.004,0,.03);let h=t(n,new kn(.019,.0035,8,20,Math.PI),e.steel,0,-.03,.012);h.rotation.set(Math.PI,Math.PI/2,0),h.scale.set(1,1.15,1);let u=t(n,new Be(.006,.018,.005),e.steel,0,-.036,.012);u.rotation.x=.25;let d=t(n,new Gt(.034,.115,.054,3,.01),e.wood,0,-.082,.07);d.rotation.x=.28;let f=t(n,new Gt(.04,.075,.32,3,.012),e.wood,0,-.03,.28);f.rotation.x=-.12,this.rightHand(n);let g=this.makeFlash(n,0,.018,-.645,.1),b=new dt;return b.position.set(.024,.014,-.03),n.add(b),{group:n,pump:l,flash:g,eject:b,rigBase:new R(.15,-.14,-.42),rot:new Zt(0,.12,-.04)}}buildLauncher(){let e=this.m,t=(...S)=>this._add(...S),n=new Ve,i=.105,s=t(n,new nt(.058,.058,.92,28,1,!0),e.olive,0,i,-.16);s.rotation.x=Math.PI/2;let a=t(n,new nt(.052,.052,.9,20,1,!0),e.oliveDark,0,i,-.16);a.rotation.x=Math.PI/2,a.material=e.oliveDark.clone(),a.material.side=Bt;let o=t(n,new nt(.067,.067,.06,28,1,!0),e.oliveDark,0,i,-.6);o.rotation.x=Math.PI/2;let c=t(n,new os(.052,.067,28),e.oliveDark,0,i,-.63);c.rotation.y=Math.PI;let l=t(n,new nt(.058,.08,.1,28,1,!0),e.oliveDark,0,i,.33);l.rotation.x=Math.PI/2;let h=t(n,new fi(.05,20),e.black,0,i,.1),u=t(n,new nt(.0595,.0595,.025,28,1,!0),e.orange,0,i,-.46);u.rotation.x=Math.PI/2;for(let S of[-.3,.05]){let A=t(n,new kn(.059,.005,8,28),e.oliveDark,0,i,S)}let d=new Ve;d.position.set(0,i,-.6),n.add(d);let f=t(d,new pi(.044,.12,20),e.warhead,0,0,-.03);f.rotation.x=-Math.PI/2;let g=t(d,new nt(.044,.044,.06,20),e.warhead,0,0,.05);g.rotation.x=Math.PI/2;let b=t(d,new Xt(.008,8,8),e.red,0,0,-.09);t(n,new Gt(.03,.045,.1,2,.005),e.oliveDark,-.07,i+.03,-.08),t(n,new Be(.02,.02,.005),e.dark,-.07,i+.035,-.032),t(n,new Xt(.0025,8,8),e.red,-.07,i+.036,-.029),t(n,new Be(.03,.012,.03),e.oliveDark,-.05,i+.01,-.08),t(n,new Gt(.034,.07,.14,2,.008),e.oliveDark,0,.03,.04);let m=t(n,new kn(.019,.0035,8,20,Math.PI),e.steel,0,-.03,.012);m.rotation.set(Math.PI,Math.PI/2,0),m.scale.set(1,1.15,1);let p=t(n,new Be(.006,.018,.005),e.steel,0,-.036,.012);p.rotation.x=.25;let v=t(n,new Gt(.034,.115,.054,3,.01),e.grip,0,-.082,.07);v.rotation.x=.28,t(n,new Gt(.03,.03,.06,2,.006),e.oliveDark,0,.045,-.3);let E=t(n,new Gt(.03,.1,.035,2,.008),e.grip,0,-.01,-.3);E.rotation.x=.1;let x=new Ve;n.add(x),this.rightHand(x),x.scale.x=-1,x.position.set(0,.072,-.37),this.rightHand(n);let M=this.makeFlash(n,0,i,-.66,.18);return{group:n,warhead:d,flash:M,rigBase:new R(.2,-.2,-.52),rot:new Zt(0,.06,-.02)}}buildNadeHand(){let e=this.m,t=(...h)=>this._add(...h),n=new Ve;this.camera.add(n);let i=new Ve;n.add(i),t(i,new Xt(.032,18,14),e.nade,0,0,0).scale.set(1,1.18,1);for(let h=0;h<3;h++){let u=t(i,new kn(.0325,.0025,6,20),e.oliveDark,0,-.018+h*.018,0);u.rotation.x=Math.PI/2}t(i,new nt(.012,.014,.018,12),e.steelLight,0,.044,0);let a=t(i,new Be(.008,.055,.004),e.steelLight,.022,.03,0);a.rotation.z=-.25;let o=t(i,new kn(.011,.0018,6,16),e.steelLight,-.016,.052,0);o.rotation.y=Math.PI/2;let c=t(n,new Gt(.06,.05,.075,3,.02),e.glove,.012,-.036,.018);for(let h=0;h<4;h++){let u=t(n,new Mn(.0095,.03,4,10),e.glove,.034,-.01,-.03+h*.02);u.rotation.z=.5}t(n,new nt(.038,.05,.4,16),e.sleeve,.02,-.17,.12).rotation.set(.6,0,-.3),n.visible=!1,n.traverse(h=>{h.isMesh&&(h.castShadow=!1)}),this.nade={group:n,ball:i,t:-1,released:!1}}hasAmmo(e){let t=this.state[e];return t.ammo>0||t.reserve>0}select(e){return!on[e]||!this.owned[e]||e===this.current&&!this.pending||!this.hasAmmo(e)||this.nade.t>=0?!1:(this.pending=e,this.switchT<=0&&(this.switchT=.45),this.reloadT=0,this.sgReload=null,!0)}cycle(e){let t=Rn.indexOf(this.pending||this.current);for(let n=0;n<Rn.length;n++)if(t=(t+e+Rn.length)%Rn.length,this.hasAmmo(Rn[t]))return this.select(Rn[t]);return!1}selectLast(){return this.select(this.last)}fire(){let e=this.current,t=on[e],n=this.st;if(this.busy||(e==="shotgun"&&this.sgReload&&n.ammo>0&&(this.sgReload=null),this.cooldown>0||this.reloadT>0||this.pumpT>0||this.sgReload))return"wait";if(n.ammo<=0)return this.cooldown=.25,"empty";n.ammo--,this.cooldown=t.cooldown;let i=this.models[e];this.flashT=e==="rocket"?.08:.055,i.flash.visible=!0,i.flash.rotation.z=Math.random()*Math.PI;let s=.85+Math.random()*.4;i.flash.scale.set(s,s,s);let a=this.recoil;return a.vz+=t.kick[0],a.vrx+=t.kick[1],a.vry+=(Math.random()-.5)*6,e==="pistol"&&(this.slideT=.085,this.eject("pistol")),e==="shotgun"&&(n.ammo>0||n.reserve>0||!0)&&(this.pumpT=t.pump+.18),e==="rocket"&&(i.warhead.visible=!1),"shot"}startReload(){let e=this.current,t=on[e],n=this.st;return this.busy||this.reloading||this.pumpT>0||n.ammo>=t.mag||n.reserve<=0?!1:e==="shotgun"?(this.sgReload={t:0,phase:"in"},"shotgun"):(this.reloadT=t.reload,e)}throwGrenade(){return this.grenades<=0||this.nade.t>=0||this.switchT>0?!1:(this.grenades--,this.nade.t=0,this.nade.released=!1,this.nade.group.visible=!0,this.nade.ball.visible=!0,this.reloadT=0,this.sgReload=null,!0)}eject(e){let t=this.models[e],n=this.shells.filter(a=>a.shot===(e==="shotgun")),i=n.find(a=>a.life<=0)||n[0];i.m.visible=!0;let s=new R;t.eject.getWorldPosition(s),this.camera.worldToLocal(s),i.m.position.copy(s),i.v.set(.9+Math.random()*.4,.9+Math.random()*.5,.15+Math.random()*.2),i.w.set(Math.random()*30,Math.random()*30,20),i.life=.6}update(e,{moving:t=0,sprint:n=!1,bobPhase:i=0,lookDX:s=0,lookDY:a=0,light:o=1,time:c=0},l){let h=this.current,u=on[h],d=this.st,f=this.models[h];this.cooldown=Math.max(0,this.cooldown-e);let g=Math.min(2.4,.6+o*.8);if(this.hemi.intensity=.5*g,this.key.intensity=1.1*g,this.scene.environmentIntensity=.25+.15*g,this.flashT>0&&(this.flashT-=e,this.flashLight.intensity=h==="pistol"?3:6,this.flashLight.position.set(this.rig.position.x,this.rig.position.y+.05,this.rig.position.z-.2),this.flashT<=0)){for(let L of Rn)this.models[L].flash.visible=!1;this.flashLight.intensity=0}let b=0,m=0,p=0;if(h==="pistol"&&(this.slideT>0?(this.slideT-=e,f.slide.position.z=Math.sin(this.slideT/.085*Math.PI)*.03):d.ammo===0&&this.reloadT<=0?f.slide.position.z=.028:this.reloadT<=0&&(f.slide.position.z=0)),h==="shotgun"){if(this.pumpT>0){let L=this.pumpT;this.pumpT-=e;let q=u.pump,H=1-Math.max(0,this.pumpT)/q;if(this.pumpT<q){let X=Math.min(1,Math.max(0,H));f.pump.position.z=-.3+Math.sin(X*Math.PI)*.085,p=Math.sin(X*Math.PI)*.25,L>=q*.62&&this.pumpT<q*.62&&(this.eject("shotgun"),l.push("pumpBack")),L>=q*.2&&this.pumpT<q*.2&&l.push("pumpFwd")}this.pumpT<=0&&(this.pumpT=0,f.pump.position.z=-.3)}if(this.sgReload){let L=this.sgReload;L.t+=e,m=Math.min(1,L.t/.2)*.6,L.phase==="in"&&L.t>.25&&(L.phase="load",L.t=.25,L.next=.25+u.shellTime),L.phase==="load"&&(m=.6+Math.sin((L.t-.25)/u.shellTime*Math.PI*2)*.05,L.t>=L.next&&(d.ammo<u.mag&&d.reserve>0&&(d.ammo++,d.reserve--,l.push("shellIn")),L.next+=u.shellTime,(d.ammo>=u.mag||d.reserve<=0)&&(L.phase="out",L.out=0))),L.phase==="out"&&(L.out+=e,m=.6*(1-L.out/.25),L.out>=.25&&(this.sgReload=null))}}if(this.reloadT>0){this.reloadT-=e;let L=1-this.reloadT/u.reload;if(b=L<.2?L/.2:L>.85?(1-L)/.15:1,m=b,h==="pistol"){if(L>.18&&L<.62){let q=(L-.18)/.44;f.mag.position.y=-Math.min(1,q*2.5)*.25,f.mag.visible=q<.4||q>.75,q>.75&&(f.mag.position.y=-(1-(q-.75)/.25)*.08)}else f.mag.position.y=0,f.mag.visible=!0;L>.72&&L<.86&&(f.slide.position.z=Math.sin((L-.72)/.14*Math.PI)*.032)}if(h==="rocket"&&(f.warhead.visible=L>.45,L>.45&&(f.warhead.position.z=-.6-Math.max(0,.7-L)*.6)),this.reloadT<=0){this.reloadT=0;let q=Math.min(u.mag-d.ammo,d.reserve);d.ammo+=q,d.reserve!==1/0&&(d.reserve-=q),f.mag&&(f.mag.position.y=0,f.mag.visible=!0),f.warhead&&(f.warhead.visible=!0,f.warhead.position.z=-.6)}}h==="rocket"&&this.reloadT<=0&&(f.warhead.visible=d.ammo>0);let v=0;if(this.switchT>0){let L=this.switchT;this.switchT-=e,L>.22&&this.switchT<=.22&&this.pending&&(this.models[this.current].group.visible=!1,this.last=this.current,this.current=this.pending,this.pending=null,this.models[this.current].group.visible=!0,this.applyPose(this.current),this.pumpT=0,l.push("switched")),v=this.switchT>.22?1-(this.switchT-.22)/.23:Math.max(0,this.switchT)/.22,this.switchT<=0&&(this.switchT=0)}let E=0,x=this.nade;if(x.t>=0){x.t+=e;let L=x.t;E=L<.15?L/.15:L>.55?Math.max(0,1-(L-.55)/.2):1;let q=-.17,H=-.3,X=-.3,$=0;if(L<.22){let se=L/.22;H=-.3+se*.2,X=-.3+se*.12,$=-se*.6}else if(L<.36){let se=(L-.22)/.14;H=-.1+se*.07,X=-.18-se*.32,q=-.17+se*.07,$=-.6+se*1.4}else{let se=Math.min(1,(L-.36)/.3);H=-.03-se*.35,X=-.5+se*.1,q=-.1,$=.8}x.group.position.set(q,H,X),x.group.rotation.set($,.3,.2),!x.released&&L>=.31&&(x.released=!0,x.ball.visible=!1,l.push("nadeRelease")),L>.7&&(x.t=-1,x.group.visible=!1)}this.raise=Math.max(0,this.raise-e*2.2);let M=this.recoil,S=220,A=22;M.vz+=(-S*M.z-A*M.vz)*e,M.z+=M.vz*e,M.vrx+=(-S*M.rx-A*M.vrx)*e,M.rx+=M.vrx*e,M.vry+=(-S*M.ry-A*M.vry)*e,M.ry+=M.vry*e,this.kick.position.z=M.z*.03,this.kick.position.y=M.rx*9e-4,this.kick.rotation.x=M.rx*.012,this.kick.rotation.y=M.ry*.01,this.kick.rotation.z=p;let _=t*(n?1.6:1),w=Math.sin(i)*.009*_,C=-Math.abs(Math.cos(i))*.008*_,D=Math.sin(c*1.6)*.0018;this.swayX+=(-s*35e-5-this.swayX)*Math.min(1,e*8),this.swayY+=(a*35e-5-this.swayY)*Math.min(1,e*8),this.swayX=Math.max(-.03,Math.min(.03,this.swayX)),this.swayY=Math.max(-.03,Math.min(.03,this.swayY));let F=n&&t>.3?1:0;this._sd=(this._sd||0)+(F-(this._sd||0))*Math.min(1,e*7);let k=this.raise*this.raise,I=Math.max(v,E*.7),B=this.rigBase;this.rig.position.set(B.x+w+this.swayX+this._sd*.02,B.y+C+D+this.swayY-b*.06-k*.35-this._sd*.035-I*.3,B.z+b*.04);let W=h==="rocket"?-m*.45:m*.55;h==="rocket"&&(this.rig.position.y-=b*.08),this.rig.rotation.set(W+this._sd*-.25+k*.8+I*.5,this.swayX*2+this._sd*.5,m*.6+w*2+this._sd*.35);for(let L of this.shells)L.life<=0||(L.life-=e,L.v.y-=6*e,L.m.position.addScaledVector(L.v,e),L.m.rotation.x+=L.w.x*e,L.m.rotation.y+=L.w.y*e,L.m.rotation.z+=L.w.z*e,L.life<=0&&(L.m.visible=!1))}setAspect(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}};var Gc=class{constructor(e){this.game=e;let t=e.scene;this.ray=new Sn,this._v=new R,this._n=new R,this._c=new pe;let n=new Ie({color:5922634,metalness:.6,roughness:.35}),i=new St({color:16760944,transparent:!0,blending:mn,depthWrite:!1});this.rockets=[];for(let o=0;o<4;o++){let c=new Ve,l=new ye(new nt(.045,.045,.32,14),n);l.rotation.x=Math.PI/2,c.add(l);let h=new ye(new pi(.045,.14,14),n);h.rotation.x=-Math.PI/2,h.position.z=-.23,c.add(h);for(let d=0;d<4;d++){let f=new ye(new Be(.004,.07,.08),n);f.position.set(Math.cos(d*Math.PI/2)*.05,Math.sin(d*Math.PI/2)*.05,.13),f.rotation.z=d*Math.PI/2,c.add(f)}let u=new ye(new Xt(.09,10,8),i);u.position.z=.2,u.scale.set(1,1,2.2),c.add(u),c.visible=!1,c.traverse(d=>{d.isMesh&&(d.castShadow=!1)}),t.add(c),this.rockets.push({g:c,ex:u,active:!1,vel:new R,life:0})}this.rocketLight=new Qt(16751168,0,9,1.6),t.add(this.rocketLight);let s=new Ie({color:3819048,metalness:.3,roughness:.5}),a=new St({color:16723984});this.nades=[];for(let o=0;o<4;o++){let c=new Ve,l=new ye(new Xt(.06,14,10),s);l.scale.set(1,1.2,1),l.castShadow=!0,c.add(l);let h=new ye(new nt(.02,.025,.035,10),s);h.position.y=.08,c.add(h);let u=new ye(new Xt(.012,8,6),a);u.position.y=.1,c.add(u),c.visible=!1,t.add(c),this.nades.push({g:c,led:u,active:!1,vel:new R,spin:new R,fuse:0,bounces:0,rest:!1})}this.timers=[]}reset(){for(let e of this.rockets)e.active=!1,e.g.visible=!1;for(let e of this.nades)e.active=!1,e.g.visible=!1;this.rocketLight.intensity=0,this.timers.length=0}later(e,t){this.timers.push({t:e,fn:t})}fireRocket(e,t){let n=this.rockets.find(i=>!i.active)||this.rockets[0];return n.active=!0,n.life=4,n.g.visible=!0,n.g.position.copy(e),n.vel.copy(t).multiplyScalar(30),n.g.lookAt(this._v.copy(e).sub(t)),n.smokeT=0,n}throwGrenade(e,t){let n=this.nades.find(i=>!i.active)||this.nades[0];return n.active=!0,n.fuse=2.1,n.rest=!1,n.bounces=0,n.g.visible=!0,n.g.position.copy(e),n.vel.copy(t),n.spin.set(Math.random()*12,Math.random()*12,Math.random()*12),n}update(e){let t=this.game,n=t.fx,i=t.level;for(let a=this.timers.length-1;a>=0;a--){let o=this.timers[a];o.t-=e,o.t<=0&&(this.timers.splice(a,1),o.fn())}let s=null;for(let a of this.rockets){if(!a.active)continue;a.life-=e;let o=a.g.position,c=a.vel.length()*e,l=this._v.copy(a.vel).normalize();this.ray.set(o,l),this.ray.far=c+.15;let h=this.ray.intersectObjects(i.colliders,!1)[0],u=t.zombies.raycast(o,l,c+.3);if(u&&(!h||u.t<h.distance)){this.detonateRocket(a,u.point,l.clone().negate());continue}if(h){let f=h.face?h.face.normal.clone().transformDirection(h.object.matrixWorld):l.clone().negate();h.object.userData.barrel&&t.damageBarrel(h.object.userData.barrel,999),this.detonateRocket(a,h.point.clone().addScaledVector(f,.2),f);continue}if(a.life<=0){this.detonateRocket(a,o.clone(),null);continue}o.addScaledVector(a.vel,e),a.ex.scale.set(1+Math.random()*.4,1+Math.random()*.4,2+Math.random()),a.smokeT-=e;let d=this._n.copy(o).addScaledVector(l,-.3);if(a.smokeT<=0){a.smokeT=.012;let f=.25+Math.random()*.15;this._c.setRGB(f,f,f*.95),n.smoke.emit(d,new R((Math.random()-.5)*.4,(Math.random()-.3)*.3,(Math.random()-.5)*.4),.18+Math.random()*.12,1.1+Math.random()*.8,this._c,.9),this._c.setRGB(2.6,1.2,.35),n.fire.emit(d,new R((Math.random()-.5)*.6,(Math.random()-.5)*.6,(Math.random()-.5)*.6).addScaledVector(l,-3),.14,.12,this._c,.6)}s=o}s?(this.rocketLight.position.copy(s),this.rocketLight.intensity=14+Math.random()*4):this.rocketLight.intensity=0;for(let a of this.nades){if(!a.active)continue;a.fuse-=e;let o=a.g.position;if(a.led.visible=Math.sin(a.fuse*(a.fuse<.8?40:14))>0,a.fuse<=0){a.active=!1,a.g.visible=!1,t.explode(o.clone().setY(Math.max(o.y,.25)),{radius:5.2,damage:220,source:"grenade"});continue}if(a.rest)continue;a.vel.y-=16*e;let c=a.vel.length()*e;if(c>1e-5){let l=this._v.copy(a.vel).normalize();this.ray.set(o,l),this.ray.far=c+.07;let h=this.ray.intersectObjects(i.colliders,!1)[0];if(h&&h.face){let u=h.face.normal.clone().transformDirection(h.object.matrixWorld);o.copy(h.point).addScaledVector(u,.07);let d=a.vel.dot(u);a.vel.addScaledVector(u,-1.45*d).multiplyScalar(.62),a.spin.multiplyScalar(.6),Math.abs(d)>1.2&&t.audio.grenadeBounce(o,Math.abs(d)/8),u.y>.6&&a.vel.length()<.8&&(a.rest=!0,a.vel.set(0,0,0))}else o.addScaledVector(a.vel,e)}for(let l of t.zombies.alive){let h=o.x-l.root.position.x,u=o.z-l.root.position.z;h*h+u*u<.25&&o.y<1.8&&(a.vel.x*=-.3,a.vel.z*=-.3)}o.y<.07&&(o.y=.07,Math.abs(a.vel.y)>1.2&&t.audio.grenadeBounce(o,Math.abs(a.vel.y)/8),a.vel.y*=-.38,a.vel.x*=.7,a.vel.z*=.7,a.vel.length()<.6&&(a.rest=!0)),a.g.rotation.x+=a.spin.x*e,a.g.rotation.y+=a.spin.y*e,a.g.rotation.z+=a.spin.z*e}}detonateRocket(e,t,n){e.active=!1,e.g.visible=!1,this.game.explode(t,{radius:5.8,damage:270,source:"rocket",normal:n})}};var Vc=class{constructor(){this.ctx=null,this.enabled=!0,this.ready=!1}init(){if(this.ctx)return;let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=this.enabled?.9:0;let n=t.createDynamicsCompressor();n.threshold.value=-14,n.knee.value=10,n.ratio.value=4,n.attack.value=.003,n.release.value=.2,this.master.connect(n).connect(t.destination),this.reverb=t.createConvolver(),this.reverb.buffer=this._impulse(2.6,2.4),this.reverbSend=t.createGain(),this.reverbSend.gain.value=.55,this.reverbSend.connect(this.reverb).connect(this.master),this.dry=t.createGain(),this.dry.connect(this.master),this.noiseBuf=this._noise(2),this.brownBuf=this._brown(4),this.ready=!0}resume(){this.ctx||this.init(),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setEnabled(e){this.enabled=e,this.master&&this.master.gain.setTargetAtTime(e?.9:0,this.ctx.currentTime,.05)}get t(){return this.ctx.currentTime}_noise(e){let t=this.ctx,n=Math.floor(t.sampleRate*e),i=t.createBuffer(1,n,t.sampleRate),s=i.getChannelData(0);for(let a=0;a<n;a++)s[a]=Math.random()*2-1;return i}_brown(e){let t=this.ctx,n=Math.floor(t.sampleRate*e),i=t.createBuffer(1,n,t.sampleRate),s=i.getChannelData(0),a=0;for(let o=0;o<n;o++)a=(a+.02*(Math.random()*2-1))/1.02,s[o]=a*3.5;return i}_impulse(e,t){let n=this.ctx,i=Math.floor(n.sampleRate*e),s=n.createBuffer(2,i,n.sampleRate);for(let a=0;a<2;a++){let o=s.getChannelData(a);for(let c=0;c<i;c++){let l=c/i,h=c<n.sampleRate*.08&&Math.random()<.004?(Math.random()*2-1)*.8:0;o[c]=((Math.random()*2-1)*Math.pow(1-l,t)+h)*(l<.002?l/.002:1)}}return s}_out(e,t=.3,n=1){let i=this.ctx,s=i.createGain();s.gain.value=n;let a=s;if(e){let o=i.createPanner();o.panningModel="HRTF",o.distanceModel="inverse",o.refDistance=2.5,o.maxDistance=60,o.rolloffFactor=1.3,o.positionX.value=e.x,o.positionY.value=e.y,o.positionZ.value=e.z,s.connect(o),a=o}if(a.connect(this.dry),t>0){let o=i.createGain();o.gain.value=t,a.connect(o).connect(this.reverbSend)}return s}setListener(e,t,n){if(!this.ready)return;let i=this.ctx.listener,s=this.t;i.positionX?(i.positionX.setValueAtTime(e.x,s),i.positionY.setValueAtTime(e.y,s),i.positionZ.setValueAtTime(e.z,s),i.forwardX.setValueAtTime(t.x,s),i.forwardY.setValueAtTime(t.y,s),i.forwardZ.setValueAtTime(t.z,s),i.upX.setValueAtTime(n.x,s),i.upY.setValueAtTime(n.y,s),i.upZ.setValueAtTime(n.z,s)):(i.setPosition(e.x,e.y,e.z),i.setOrientation(t.x,t.y,t.z,n.x,n.y,n.z))}_noiseSrc(e){let t=this.ctx.createBufferSource();return t.buffer=e||this.noiseBuf,t.loopStart=0,t.loop=!0,t}_env(e,t,n,i,s,a=1e-4){e.cancelScheduledValues(t),e.setValueAtTime(1e-4,t),e.exponentialRampToValueAtTime(i,t+n),e.exponentialRampToValueAtTime(a,t+n+s)}pistol(){if(!this.ready)return;let e=this.ctx,t=this.t,n=this._out(null,.5,1),i=this._noiseSrc();i.loopStart=Math.random();let s=e.createBiquadFilter();s.type="highpass",s.frequency.value=900;let a=e.createGain();this._env(a.gain,t,.001,1.1,.09),i.connect(s).connect(a).connect(n),i.start(t,Math.random()),i.stop(t+.15);let o=e.createOscillator();o.type="sine",o.frequency.setValueAtTime(190,t),o.frequency.exponentialRampToValueAtTime(42,t+.16);let c=e.createGain();this._env(c.gain,t,.002,1.3,.18),o.connect(c).connect(n),o.start(t),o.stop(t+.22);let l=this._noiseSrc(),h=e.createBiquadFilter();h.type="bandpass",h.frequency.value=2400,h.Q.value=.8;let u=e.createGain();this._env(u.gain,t,5e-4,.9,.035),l.connect(h).connect(u).connect(n),l.start(t,Math.random()),l.stop(t+.06),this._click(t+.045,3200,.18)}_click(e,t=2500,n=.3,i=null){let s=this.ctx,a=this._out(i,.08,1),o=this._noiseSrc(),c=s.createBiquadFilter();c.type="bandpass",c.frequency.value=t,c.Q.value=6;let l=s.createGain();this._env(l.gain,e,5e-4,n,.03),o.connect(c).connect(l).connect(a),o.start(e,Math.random()),o.stop(e+.05)}dryFire(){this.ready&&this._click(this.t,1800,.35)}reload(e=1.2){if(!this.ready)return;let t=this.t;this._click(t+.12,1500,.35),this._click(t+.16,900,.2),this._click(t+e*.62,1300,.45),this._click(t+e*.66,2600,.25),this._click(t+e*.86,3400,.4),this._click(t+e*.89,2200,.3)}shell(e){if(!this.ready)return;let t=this.t+.35+Math.random()*.1;for(let n=0;n<3;n++)this._ting(t+n*(.07-n*.015),5200+Math.random()*900,.08/(n+1),e)}_ting(e,t,n,i){let s=this.ctx,a=this._out(i,.15,1),o=s.createOscillator();o.type="sine",o.frequency.value=t;let c=s.createOscillator();c.type="sine",c.frequency.value=t*1.51;let l=s.createGain();this._env(l.gain,e,.001,n,.12),o.connect(l),c.connect(l),l.connect(a),o.start(e),c.start(e),o.stop(e+.15),c.stop(e+.15)}impactWall(e){if(!this.ready)return;let t=this.ctx,n=this.t,i=this._out(e,.25,1),s=this._noiseSrc(),a=t.createBiquadFilter();a.type="bandpass",a.frequency.value=1800+Math.random()*1500,a.Q.value=1.5;let o=t.createGain();this._env(o.gain,n,.001,.5,.06),s.connect(a).connect(o).connect(i),s.start(n,Math.random()),s.stop(n+.09),Math.random()<.35&&this._ricochet(e)}_ricochet(e){let t=this.ctx,n=this.t+.01,i=this._out(e,.3,1),s=t.createOscillator();s.type="sine",s.frequency.setValueAtTime(3400+Math.random()*800,n),s.frequency.exponentialRampToValueAtTime(1300,n+.28);let a=t.createGain();this._env(a.gain,n,.005,.07,.3),s.connect(a).connect(i),s.start(n),s.stop(n+.34)}fleshHit(e,t=!1){if(!this.ready)return;let n=this.ctx,i=this.t,s=this._out(e,.15,1),a=this._noiseSrc(),o=n.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(2400,i),o.frequency.exponentialRampToValueAtTime(300,i+.12);let c=n.createGain();this._env(c.gain,i,.002,t?1.1:.75,t?.22:.13),a.connect(o).connect(c).connect(s),a.start(i,Math.random()),a.stop(i+.3);let l=n.createOscillator();l.type="sine",l.frequency.setValueAtTime(120,i),l.frequency.exponentialRampToValueAtTime(45,i+.12);let h=n.createGain();this._env(h.gain,i,.002,t?.9:.5,.14),l.connect(h).connect(s),l.start(i),l.stop(i+.18);let u=this._noiseSrc(),d=n.createBiquadFilter();d.type="bandpass",d.frequency.value=3500,d.Q.value=.7;let f=n.createGain();this._env(f.gain,i+.02,.01,t?.35:.18,t?.35:.18),u.connect(d).connect(f).connect(s),u.start(i,Math.random()),u.stop(i+.45)}headshot(e){if(!this.ready)return;this.fleshHit(e,!0);let t=this.ctx,n=this.t,i=this._out(e,.2,1);for(let o=0;o<4;o++)this._click(n+o*.012+Math.random()*.01,600+Math.random()*900,.5,e);let s=t.createOscillator();s.type="triangle",s.frequency.setValueAtTime(90,n),s.frequency.exponentialRampToValueAtTime(30,n+.3);let a=t.createGain();this._env(a.gain,n,.002,.8,.3),s.connect(a).connect(i),s.start(n),s.stop(n+.35)}_voice(e,{f0:t=90,dur:n=1.2,formants:i=[520,1400,2500],vol:s=.5,bend:a=-.3,rough:o=.5,rev:c=.3,at:l=0}={}){let h=this.ctx,u=this.t+l,d=this._out(e,c,1),f=h.createOscillator();f.type="sawtooth",f.frequency.setValueAtTime(t*(1+Math.random()*.1),u),f.frequency.linearRampToValueAtTime(t*(1+a),u+n);let g=h.createOscillator();g.frequency.value=5+Math.random()*18;let b=h.createGain();b.gain.value=t*.12*o,g.connect(b).connect(f.frequency);let m=h.createGain();m.gain.value=1;let p=h.createOscillator();p.frequency.value=22+Math.random()*20;let v=h.createGain();v.gain.value=.35*o,p.connect(v).connect(m.gain);let E=h.createGain();E.gain.setValueAtTime(1e-4,u),E.gain.exponentialRampToValueAtTime(s,u+n*.2),E.gain.setValueAtTime(s,u+n*.6),E.gain.exponentialRampToValueAtTime(1e-4,u+n);let x=h.createGain();x.gain.value=1,i.forEach((w,C)=>{let D=h.createBiquadFilter();D.type="bandpass",D.frequency.setValueAtTime(w,u),D.frequency.linearRampToValueAtTime(w*(.8+Math.random()*.4),u+n),D.Q.value=5+C*2;let F=h.createGain();F.gain.value=[1,.6,.25][C]||.2,f.connect(D).connect(F).connect(x)});let M=this._noiseSrc(),S=h.createBiquadFilter();S.type="bandpass",S.frequency.value=1100,S.Q.value=1;let A=h.createGain();A.gain.value=.25*o,M.connect(S).connect(A).connect(x),x.connect(m).connect(E).connect(d),f.start(u),g.start(u),p.start(u),M.start(u,Math.random());let _=u+n+.05;f.stop(_),g.stop(_),p.stop(_),M.stop(_)}groan(e){this.ready&&this._voice(e,{f0:70+Math.random()*45,dur:.9+Math.random()*1.1,formants:[400+Math.random()*250,1e3+Math.random()*500,2300],vol:.55,bend:-.25+Math.random()*.2,rough:.6+Math.random()*.4})}roar(e){this.ready&&(this._voice(e,{f0:120,dur:1.4,formants:[700,1500,2700],vol:.8,bend:-.45,rough:1,rev:.45}),this._voice(e,{f0:82,dur:1.5,formants:[500,1200,2400],vol:.5,bend:-.4,rough:1,rev:.45}))}attackGrunt(e){this.ready&&this._voice(e,{f0:110+Math.random()*30,dur:.45,formants:[650,1300,2500],vol:.7,bend:-.35,rough:.9})}death(e){this.ready&&this._voice(e,{f0:95,dur:1.3,formants:[480,1100,2400],vol:.65,bend:-.6,rough:.8,rev:.4})}thud(e){if(!this.ready)return;let t=this.ctx,n=this.t,i=this._out(e,.25,1),s=t.createOscillator();s.type="sine",s.frequency.setValueAtTime(85,n),s.frequency.exponentialRampToValueAtTime(35,n+.25);let a=t.createGain();this._env(a.gain,n,.003,.9,.3),s.connect(a).connect(i),s.start(n),s.stop(n+.35);let o=this._noiseSrc(),c=t.createBiquadFilter();c.type="lowpass",c.frequency.value=500;let l=t.createGain();this._env(l.gain,n,.002,.6,.15),o.connect(c).connect(l).connect(i),o.start(n,Math.random()),o.stop(n+.2)}hurt(){if(!this.ready)return;this._voice(null,{f0:135+Math.random()*20,dur:.32,formants:[700,1200,2600],vol:.55,bend:-.25,rough:.35,rev:.1});let e=this.ctx,t=this.t,n=this._out(null,.05,1),i=this._noiseSrc(),s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=700;let a=e.createGain();this._env(a.gain,t,.002,.8,.12),i.connect(s).connect(a).connect(n),i.start(t,Math.random()),i.stop(t+.16)}step(e=.12){if(!this.ready)return;let t=this.ctx,n=this.t,i=this._out(null,.12,1),s=this._noiseSrc(this.brownBuf),a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=380+Math.random()*200;let o=t.createGain();this._env(o.gain,n,.004,e*3,.09),s.connect(a).connect(o).connect(i),s.start(n,Math.random()*3),s.stop(n+.12),this._click(n+.005,4200+Math.random()*1500,e*.25)}pickup(){if(!this.ready)return;let e=this.ctx,t=this.t,n=this._out(null,.2,1);[660,990,1320].forEach((i,s)=>{let a=e.createOscillator();a.type="triangle",a.frequency.value=i;let o=e.createGain();this._env(o.gain,t+s*.06,.005,.25,.18),a.connect(o).connect(n),a.start(t+s*.06),a.stop(t+s*.06+.25)})}hitmarker(){this.ready&&this._click(this.t,5e3,.12)}waveHorn(){if(!this.ready)return;let e=this.ctx,t=this.t,n=this._out(null,.7,1);[55,55.6,82.5].forEach(i=>{let s=e.createOscillator();s.type="sawtooth",s.frequency.value=i;let a=e.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(150,t),a.frequency.linearRampToValueAtTime(900,t+.8),a.frequency.linearRampToValueAtTime(200,t+2.2);let o=e.createGain();o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(.32,t+.3),o.gain.setValueAtTime(.32,t+1.4),o.gain.exponentialRampToValueAtTime(1e-4,t+2.4),s.connect(a).connect(o).connect(n),s.start(t),s.stop(t+2.5)}),this.thud(null)}waveClear(){if(!this.ready)return;let e=this.ctx,t=this.t,n=this._out(null,.5,1);[196,247,294,392].forEach((i,s)=>{let a=e.createOscillator();a.type="square",a.frequency.value=i;let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=1400;let c=e.createGain();this._env(c.gain,t+s*.09,.01,.09,.5),a.connect(o).connect(c).connect(n),a.start(t+s*.09),a.stop(t+s*.09+.6)})}startAmbience(){if(!this.ready||this.amb)return;let e=this.ctx,t=e.createGain();t.gain.value=1e-4,t.gain.setTargetAtTime(.22,this.t,1.5);let n=this._noiseSrc(this.brownBuf),i=e.createBiquadFilter();i.type="lowpass",i.frequency.value=160,n.connect(i).connect(t);let s=e.createOscillator();s.type="sine",s.frequency.value=50;let a=e.createGain();a.gain.value=.18,s.connect(a).connect(t);let o=e.createOscillator();o.type="sine",o.frequency.value=100.4;let c=e.createGain();c.gain.value=.06,o.connect(c).connect(t);let l=this._out(null,.4,1);t.connect(l),n.start(),s.start(),o.start(),this.amb={g:t,n,hum:s,hum2:o},this._ambTimer=setInterval(()=>this._distant(),5200)}stopAmbience(){if(!this.amb)return;let{g:e,n:t,hum:n,hum2:i}=this.amb;e.gain.setTargetAtTime(1e-4,this.t,.3);let s=this.t+1.5;t.stop(s),n.stop(s),i.stop(s),clearInterval(this._ambTimer),this.amb=null}_distant(){if(!this.ready||Math.random()<.4)return;let e=this.ctx,t=this.t,n={x:(Math.random()-.5)*80,y:3,z:(Math.random()-.5)*80},i=this._out(n,.9,.5),s=e.createOscillator();s.type="square",s.frequency.value=120+Math.random()*200;let a=e.createOscillator();a.type="square",a.frequency.value=s.frequency.value*2.71;let o=e.createBiquadFilter();o.type="bandpass",o.frequency.value=900,o.Q.value=3;let c=e.createGain();this._env(c.gain,t,.002,.18,.9),s.connect(o),a.connect(o),o.connect(c).connect(i),s.start(t),a.start(t),s.stop(t+1),a.stop(t+1)}shotgun(){if(!this.ready)return;let e=this.ctx,t=this.t,n=this._out(null,.65,1),i=this._noiseSrc(),s=e.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(6e3,t),s.frequency.exponentialRampToValueAtTime(400,t+.3);let a=e.createGain();this._env(a.gain,t,.001,1.5,.32),i.connect(s).connect(a).connect(n),i.start(t,Math.random()),i.stop(t+.4);let o=e.createOscillator();o.type="sine",o.frequency.setValueAtTime(120,t),o.frequency.exponentialRampToValueAtTime(32,t+.3);let c=e.createGain();this._env(c.gain,t,.002,1.8,.32),o.connect(c).connect(n),o.start(t),o.stop(t+.36);let l=this._noiseSrc(),h=e.createBiquadFilter();h.type="bandpass",h.frequency.value=1800,h.Q.value=.6;let u=e.createGain();this._env(u.gain,t,5e-4,1.1,.06),l.connect(h).connect(u).connect(n),l.start(t,Math.random()),l.stop(t+.08)}pump(e=!0){if(!this.ready)return;let t=this.ctx,n=this.t,i=this._out(null,.15,1),s=this._noiseSrc(),a=t.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(e?2200:1500,n),a.frequency.linearRampToValueAtTime(e?1300:2400,n+.09),a.Q.value=2;let o=t.createGain();this._env(o.gain,n,.01,.35,.08),s.connect(a).connect(o).connect(i),s.start(n,Math.random()),s.stop(n+.12),this._click(n+.09,e?1200:900,.6),this._click(n+.1,3e3,.3)}shellIn(){if(!this.ready)return;let e=this.t;this._click(e,1700,.35),this._click(e+.05,900,.3)}rocketFire(){if(!this.ready)return;let e=this.ctx,t=this.t,n=this._out(null,.6,1),i=this._noiseSrc(),s=e.createBiquadFilter();s.type="bandpass",s.frequency.setValueAtTime(400,t),s.frequency.exponentialRampToValueAtTime(2600,t+.5),s.Q.value=.7;let a=e.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(1.2,t+.03),a.gain.exponentialRampToValueAtTime(1e-4,t+.9),i.connect(s).connect(a).connect(n),i.start(t,Math.random()),i.stop(t+1);let o=e.createOscillator();o.type="sine",o.frequency.setValueAtTime(90,t),o.frequency.exponentialRampToValueAtTime(40,t+.25);let c=e.createGain();this._env(c.gain,t,.003,1.4,.3),o.connect(c).connect(n),o.start(t),o.stop(t+.35)}rocketLoad(){if(!this.ready)return;let e=this.t;this._click(e+.5,700,.5),this._click(e+.56,1400,.35),this._click(e+1.2,2200,.4)}explosion(e,t=1){if(!this.ready)return;let n=this.ctx,i=this.t,s=this._out(e,.9,1.6*t),a=this._noiseSrc(this.brownBuf),o=n.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(3e3,i),o.frequency.exponentialRampToValueAtTime(180,i+1.2);let c=n.createGain();this._env(c.gain,i,.004,2.2,1.6),a.connect(o).connect(c).connect(s),a.start(i,Math.random()*2),a.stop(i+1.8);let l=this._noiseSrc(),h=n.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(8e3,i),h.frequency.exponentialRampToValueAtTime(600,i+.4);let u=n.createGain();this._env(u.gain,i,.001,1.4,.45),l.connect(h).connect(u).connect(s),l.start(i,Math.random()),l.stop(i+.5);let d=n.createOscillator();d.type="sine",d.frequency.setValueAtTime(70,i),d.frequency.exponentialRampToValueAtTime(22,i+.9);let f=n.createGain();this._env(f.gain,i,.005,2.4,1),d.connect(f).connect(s),d.start(i),d.stop(i+1.1);for(let g=0;g<6;g++)this._click(i+.25+Math.random()*.8,600+Math.random()*2500,.15,e)}grenadeBounce(e,t=1){if(!this.ready)return;let n=this.ctx,i=this.t,s=this._out(e,.2,Math.min(1,t)),a=n.createOscillator();a.type="triangle",a.frequency.value=520+Math.random()*200;let o=n.createGain();this._env(o.gain,i,.001,.35,.09),a.connect(o).connect(s),a.start(i),a.stop(i+.12),this._click(i,1800,.3,e)}pin(){if(!this.ready)return;let e=this.t;this._ting(e,3800,.08,null),this._click(e+.02,2600,.3),this._click(e+.22,1400,.25)}throwWhoosh(){if(!this.ready)return;let e=this.ctx,t=this.t,n=this._out(null,.1,1),i=this._noiseSrc(),s=e.createBiquadFilter();s.type="bandpass",s.frequency.setValueAtTime(500,t),s.frequency.exponentialRampToValueAtTime(1800,t+.15),s.Q.value=1.2;let a=e.createGain();this._env(a.gain,t,.04,.3,.15),i.connect(s).connect(a).connect(n),i.start(t,Math.random()),i.stop(t+.25)}switchWeapon(){if(!this.ready)return;let e=this.t;this._click(e,1100,.3),this._click(e+.07,2400,.25)}jump(){this.ready&&this.step(.1)}land(e=1){if(!this.ready)return;let t=this.ctx,n=this.t,i=this._out(null,.15,1),s=this._noiseSrc(this.brownBuf),a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=300;let o=t.createGain();this._env(o.gain,n,.003,.5*Math.min(1.5,e),.14),s.connect(a).connect(o).connect(i),s.start(n,Math.random()*3),s.stop(n+.2)}ammo(){if(!this.ready)return;let e=this.t;this._click(e,1500,.4),this._click(e+.06,2600,.35),this._click(e+.12,1200,.3)}};var De=r=>document.getElementById(r),Ar={get(r,e){try{let t=localStorage.getItem(r);return t===null?e:JSON.parse(t)}catch{return e}},set(r,e){try{localStorage.setItem(r,JSON.stringify(e))}catch{}}},Ra=/[?&]test/.test(location.search);function Tf(){try{let r=localStorage.getItem("fps_sound_v1");return r===null?!0:r==="1"}catch{return!0}}function Ef(r){try{localStorage.setItem("fps_sound_v1",r?"1":"0")}catch{}}var ii={kill:["Feierabend.","N\xE4chster!","404 \u2013 Zombie nicht gefunden.","Ab in den Papierkorb.","Deine Sitzung ist abgelaufen.","Weiterleitung ins Jenseits.","Gel\xF6scht. Ohne Backup.","Und tsch\xFCss.","Abgemeldet.","Bounce-Rate: hundert Prozent.","Keine R\xFCckerstattung.","Der N\xE4chste bitte.","Cache geleert."],head:["Kopfsache.","Volltreffer im Oberst\xFCbchen.","Hirn? Brauchst du nicht mehr.","Kopf hoch! \u2026 ach nee.","Da war wohl nicht viel drin."],gib:["In Einzelteilen geliefert.","Das kriegt keiner mehr zusammen.","Konfetti!","Zerlegt wie ein schlechter Relaunch.","Bitte nicht wischen."],shotgun:["Hallo, Nachbar.","Aus n\xE4chster N\xE4he.","Schrot und Korn."],multi:["Doppelt h\xE4lt besser!","Zwei auf einen Streich."],streak:["Das ist ein Massaker!","Ich bin warmgelaufen.","Wer will noch mal?"],hurt:["Das gibt Abz\xFCge in der B-Note.","Autsch. Okay. Jetzt bin ich sauer."],wave:["Da kommen noch mehr.","Es wird voller.","Pause vorbei."],barrel:["Vorsicht, Fass!","Das war mal ein Fass."]},Cn=r=>r[Math.random()*r.length|0],Ca={health:{label:"+25 Leben",color:5308272},shells:{label:"+6 Schrot",color:16747056,amount:6},rockets:{label:"+2 Raketen",color:16726570,amount:2},grenade:{label:"+1 Granate",color:16765498,amount:1}},Kh=class{constructor(){this.stage=De("stage"),this.audio=new Vc,this.settings={blood:Ar.get("zw_blood",!0),sound:Tf(),sens:Ar.get("zw_sens",1)},this.best=Ar.get("zw_best_v2",{wave:0,kills:0}),this.state="loading",this.keys={},this.look={dx:0,dy:0},this.time=0,this.dynScale=1,this.frameTimes=[],this.events=[]}async init(){if(matchMedia("(hover: none) and (pointer: coarse)").matches&&!Ra){De("ov-start").hidden=!0,De("ov-mobile").hidden=!1;return}this.setupRenderer(),this.bindUI(),await this.load(),this.setupWorld(),await this.precompile(),this.state="menu",De("loading").hidden=!0,De("ready").hidden=!1,this.showBest(),this.renderer.setAnimationLoop(()=>this.frame()),window.ZW=this}setupRenderer(){let e=this.renderer=new wc({antialias:!1,powerPreference:"high-performance",stencil:!1});e.shadowMap.enabled=!0,e.shadowMap.type=ps,e.toneMapping=gs,e.toneMappingExposure=1.15,e.outputColorSpace=rt,this.stage.appendChild(e.domElement),this.canvas=e.domElement,this.scene=new ui,this.scene.background=new pe(394760),this.scene.fog=new Gr(460553,.032),this.camera=new Et(74,16/9,.05,140),this.scene.add(this.camera);let t=new pr(e);this.envMap=t.fromScene(new Lc,.04).texture,this.scene.environment=this.envMap,this.scene.environmentIntensity=.12;let n=new _i(16773596,26,30,.48,.6,1.3);n.position.set(.25,-.15,.1),this.camera.add(n),n.target.position.set(0,-.2,-6),this.camera.add(n.target),this.flashlight=n,this.muzzleLight=new Qt(16752704,0,7,1.8),this.scene.add(this.muzzleLight),this.boomLights=[0,1].map(()=>{let i=new Qt(16752720,0,16,1.5);return this.scene.add(i),{l:i,t:0}}),window.addEventListener("resize",()=>this.resize())}setupComposer(){let e=this.renderer,t=new wt(4,4,{type:kt,samples:4}),n=this.composer=new Fc(e,t);n.addPass(new Ta(this.scene,this.camera));let i=new Ta(this.arsenal.scene,this.arsenal.camera);i.clear=!1,i.clearDepth=!0,n.addPass(i),this.bloom=new Mr(new Ee(512,512),.55,.55,.92),n.addPass(this.bloom),this.post=new yr({uniforms:{tDiffuse:{value:null},uTime:{value:0},uDamage:{value:0},uLow:{value:0},uAspect:{value:1.7},uFlash:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
        uniform sampler2D tDiffuse; uniform float uTime, uDamage, uLow, uAspect, uFlash; varying vec2 vUv;
        float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
        void main(){
          vec2 d = vUv - 0.5;
          float r2 = dot(d*vec2(uAspect,1.0), d*vec2(uAspect,1.0));
          float ca = 0.0012 + uDamage*0.008 + uFlash*0.006;
          vec3 col;
          col.r = texture2D(tDiffuse, vUv + d*ca).r;
          col.g = texture2D(tDiffuse, vUv).g;
          col.b = texture2D(tDiffuse, vUv - d*ca).b;
          float edge = smoothstep(0.25, 1.1, r2);
          col = mix(col, vec3(0.55,0.0,0.0) * (0.6+col.r), clamp(uDamage*edge*1.6, 0.0, 0.85));
          float lum = dot(col, vec3(0.299,0.587,0.114));
          float pulse = 0.5 + 0.5*sin(uTime*6.0);
          col = mix(col, vec3(lum)*vec3(1.1,0.75,0.75), uLow*0.55);
          col = mix(col, col*vec3(1.6,0.3,0.3), uLow*edge*pulse*0.6);
          col += vec3(1.0,0.6,0.25) * uFlash * 0.35;
          col *= 1.0 - smoothstep(0.35, 1.25, r2) * 0.75;
          col += (h(vUv*vec2(1920.0,1080.0) + fract(uTime)*91.0) - 0.5) * 0.035;
          gl_FragColor = vec4(max(col, 0.0), 1.0);
        }`}),n.addPass(this.post),n.addPass(new Nc),this.resize()}resize(){let e=innerWidth,t=innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.arsenal&&this.arsenal.setAspect(e/t);let n=Math.min(devicePixelRatio||1,1.5)*this.dynScale;this.renderer.setPixelRatio(n),this.renderer.setSize(e,t),this.composer&&(this.composer.setPixelRatio(n),this.composer.setSize(e,t),this.post.uniforms.uAspect.value=e/t),this.fx&&this.fx.setScale(t*n)}async load(){let e=new ir;e.onProgress=(f,g,b)=>{De("loadbar").style.width=Math.round(g/b*100)+"%"};let t=new ls(e),n=this.renderer.capabilities.getMaxAnisotropy(),i=(f,g,b=!0)=>new Promise((m,p)=>t.load(f,v=>{g&&(v.colorSpace=rt),b&&(v.wrapS=v.wrapT=pn),v.anisotropy=Math.min(8,n),m(v)},void 0,p)),s=(f,g=!0)=>Promise.all([i(f+"_c.webp",!0,g),i(f+"_n.webp",!1,g),i(f+"_orm.webp",!1,g)]).then(([b,m,p])=>({c:b,n:m,orm:p})),a=["bricks","metal","concrete","plate","ceiling","hazard","rust"],o=f=>Promise.all([i(`models/${f}_BaseColor.webp`,!0,!1),i(`models/${f}_Normal.webp`,!1,!1),i(`models/${f}_OcclusionRoughnessMetallic.webp`,!1,!1)]).then(([g,b,m])=>({c:g,n:b,orm:m})),c=new Cc(e);c.setMeshoptDecoder(mf);let[l,h,u,d]=await Promise.all([c.loadAsync("models/zombie.glb"),Promise.all(a.map(f=>s("tex/"+f))).then(f=>Object.fromEntries(f.map((g,b)=>[a[b],g]))),o("body"),o("outfit")]);De("loadtxt").textContent="Baue Level \u2026",this.assets={gltf:l,levelTex:h,zTex:{body:u,outfit:d}}}setupWorld(){this.level=new Oc(this.assets.levelTex),this.level.build(this.scene),this.fx=new Bc(this.scene,this.level),this.fx.blood=this.settings.blood,this.ztpl=new kc(this.assets.gltf,this.assets.zTex),this.zombies=new zc(this,this.ztpl,18),this.arsenal=new Hc(this.envMap),this.proj=new Gc(this),this.setupComposer(),this.player={pos:new R().copy(this.level.playerStart),vel:new R,y:0,vy:0,onGround:!0,yaw:Math.PI,pitch:0,hp:100,dead:!1,bob:0,stepAcc:0,shake:0,deadT:0,land:0},this.placeCamera(),this.buildPickups()}buildPickups(){this.pickups=[];let e={health:()=>{let n=new Ve,i=new ye(new Be(.42,.26,.3),new Ie({color:15263976,roughness:.4,metalness:.1,emissive:1122833}));n.add(i);let s=new Ie({color:0,emissive:16719904,emissiveIntensity:3});for(let a of[.152,-.152]){let o=new ye(new Be(.2,.06,.012),s);o.position.z=a;let c=new ye(new Be(.06,.2,.012),s);c.position.z=a,n.add(o,c)}return n},shells:()=>{let n=new Ve;n.add(new ye(new Be(.36,.16,.24),new Ie({color:9049104,roughness:.5})));let i=new Ie({color:13213766,metalness:1,roughness:.3});for(let s=0;s<5;s++){let a=new ye(new nt(.022,.022,.05,10),i);a.position.set(-.13+s*.065,.1,0),n.add(a)}return n},rockets:()=>{let n=new Ve,i=new Ie({color:5922634,metalness:.6,roughness:.35});for(let a of[-.07,.07]){let o=new ye(new nt(.05,.05,.36,14),i);o.rotation.z=Math.PI/2,o.position.set(0,0,a),n.add(o);let c=new ye(new pi(.05,.14,14),i);c.rotation.z=-Math.PI/2,c.position.set(.25,0,a),n.add(c)}let s=new ye(new Be(.06,.12,.26),new Ie({color:2230528,emissive:16739125,emissiveIntensity:1.5}));return n.add(s),n},grenade:()=>{let n=new Ve,i=new Ie({color:3819048,metalness:.3,roughness:.5}),s=new ye(new Xt(.11,16,12),i);s.scale.set(1,1.2,1),n.add(s);let a=new ye(new nt(.035,.04,.06,10),new Ie({color:7829367,metalness:1,roughness:.3}));return a.position.y=.15,n.add(a),n}},t=new os(.3,.42,32);t.rotateX(-Math.PI/2);for(let[n,i]of Object.entries(e)){let s=new St({color:Ca[n].color,transparent:!0,opacity:.5,blending:mn,depthWrite:!1});for(let a=0;a<6;a++){let o=i();o.traverse(h=>{h.isMesh&&(h.castShadow=!0)});let c=new ye(t,s),l=new Ve;l.add(o,c),l.visible=!1,this.scene.add(l),this.pickups.push({type:n,holder:l,item:o,ring:c,active:!1,t:0})}}}async precompile(){let e=this.zombies.pool[0];e.root.visible=!0,e.root.position.copy(this.level.playerStart).add(new R(0,0,-4));for(let n of Object.keys(Ca)){let i=this.pickups.find(s=>s.type===n);i.holder.visible=!0,i.holder.position.copy(e.root.position)}for(let n of Rn)this.arsenal.models[n].group.visible=!0,this.arsenal.models[n].flash.visible=!0;this.arsenal.nade.group.visible=!0;for(let n of this.proj.rockets)n.g.visible=!0;for(let n of this.proj.nades)n.g.visible=!0;let t=new R(this.level.playerStart.x,1,this.level.playerStart.z-3);this.fx.bloodHit(t,new R(0,0,-1),.2),this.fx.explosion(t,null,.3);try{this.renderer.compileAsync&&(await this.renderer.compileAsync(this.scene,this.camera),await this.renderer.compileAsync(this.arsenal.scene,this.arsenal.camera))}catch{}this.composer.render(.016),e.root.visible=!1;for(let n of this.pickups)n.holder.visible=!1;for(let n of Rn)this.arsenal.models[n].flash.visible=!1;this.proj.reset(),this.arsenal.reset(),this.fx.reset()}bindUI(){let e=()=>{for(let t of["","2"])De("opt-blood"+t).checked=this.settings.blood,De("opt-sound"+t).checked=this.settings.sound,De("opt-sens"+t).value=this.settings.sens};e();for(let t of["","2"])De("opt-blood"+t).addEventListener("change",n=>{this.settings.blood=n.target.checked,Ar.set("zw_blood",this.settings.blood),this.fx&&(this.fx.blood=this.settings.blood),e()}),De("opt-sound"+t).addEventListener("change",n=>{this.settings.sound=n.target.checked,Ef(this.settings.sound),this.audio.setEnabled(this.settings.sound),e()}),De("opt-sens"+t).addEventListener("input",n=>{this.settings.sens=parseFloat(n.target.value),Ar.set("zw_sens",this.settings.sens),e()});this.audio.enabled=this.settings.sound,window.addEventListener("storage",t=>{t.key==="fps_sound_v1"&&(this.settings.sound=Tf(),this.audio.setEnabled(this.settings.sound),e())}),De("btn-start").addEventListener("click",()=>this.start()),De("btn-again").addEventListener("click",()=>this.start()),De("btn-resume").addEventListener("click",()=>this.resume()),De("btn-quit").addEventListener("click",()=>this.gameOver()),De("fsbtn").addEventListener("click",()=>this.toggleFullscreen()),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==this.canvas&&this.state==="play"&&!Ra&&this.pause()}),document.addEventListener("pointerlockerror",()=>{this.state==="play"&&this.pause()}),document.addEventListener("mousemove",t=>{if(this.state!=="play"||document.pointerLockElement!==this.canvas&&!Ra)return;let n=.0022*this.settings.sens,i=Math.max(-300,Math.min(300,t.movementX||0)),s=Math.max(-300,Math.min(300,t.movementY||0));this.player.yaw-=i*n,this.player.pitch=Math.max(-1.45,Math.min(1.45,this.player.pitch-s*n)),this.look.dx+=i,this.look.dy+=s}),document.addEventListener("mousedown",t=>{if(this.state==="play"){if(document.pointerLockElement!==this.canvas&&!Ra){this.lock();return}t.button===0&&(this.mouseDown=!0,this.tryFire()),t.button===2&&this.throwGrenade()}}),document.addEventListener("contextmenu",t=>t.preventDefault()),document.addEventListener("mouseup",t=>{t.button===0&&(this.mouseDown=!1)}),document.addEventListener("wheel",t=>{if(this.state!=="play"||Math.abs(t.deltaY)<4)return;let n=performance.now();n-(this._wheelT||0)<140||(this._wheelT=n,this.arsenal.cycle(t.deltaY>0?1:-1)&&this.audio.switchWeapon())},{passive:!0}),document.addEventListener("keydown",t=>{if(this.keys[t.code]=!0,this.state==="play"){t.code==="KeyR"&&this.reload(),t.code==="Space"&&(t.preventDefault(),this.jump()),t.code==="KeyG"&&this.throwGrenade(),t.code==="KeyQ"&&this.arsenal.selectLast()&&this.audio.switchWeapon();let n={Digit1:"pistol",Digit2:"shotgun",Digit3:"rocket",Numpad1:"pistol",Numpad2:"shotgun",Numpad3:"rocket"}[t.code];n&&(this.arsenal.select(n)?this.audio.switchWeapon():this.arsenal.hasAmmo(n)||this.flashSlot(n)),["ArrowUp","ArrowDown"].includes(t.code)&&t.preventDefault()}t.code==="KeyF"&&this.state!=="loading"&&this.toggleFullscreen(),t.code==="Enter"&&(this.state==="menu"||this.state==="over")&&this.start()}),document.addEventListener("keyup",t=>{this.keys[t.code]=!1}),window.addEventListener("blur",()=>{this.keys={},this.mouseDown=!1})}toggleFullscreen(){try{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen({navigationUI:"hide"}).then(()=>this.state==="play"&&this.lock()).catch(()=>{})}catch{}}lock(){if(!Ra)try{let e=this.canvas.requestPointerLock({unadjustedMovement:!0});e&&e.catch&&e.catch(()=>{try{this.canvas.requestPointerLock()}catch{}})}catch{try{this.canvas.requestPointerLock()}catch{}}}showBest(){let e=this.best,t=De("best-start");e.kills>0&&(t.hidden=!1,t.textContent=`Rekord: Welle ${e.wave} \xB7 ${e.kills} Kills`)}start(){Ef(this.settings.sound),this.audio.resume(),this.audio.setEnabled(this.settings.sound),this.resetRun(),this.state="play",document.body.classList.add("playing"),["ov-start","ov-over","ov-pause"].forEach(e=>{De(e).hidden=!0}),this.lock(),this.audio.startAmbience(),this.nextWave()}resetRun(){let e=this.player;e.pos.copy(this.level.playerStart),e.vel.set(0,0,0),e.y=0,e.vy=0,e.onGround=!0,e.yaw=Math.PI,e.pitch=0,e.hp=100,e.dead=!1,e.deadT=0,e.shake=0,this.zombies.reset(),this.fx.reset(),this.proj.reset(),this.level.resetBarrels(),this.pickups.forEach(t=>{t.active=!1,t.holder.visible=!1}),this.arsenal.reset(),this.wave=0,this.kills=0,this.headshots=0,this.damageFx=0,this.flashFx=0,this.quipCD=0,this.lastKillT=-10,this.streak=0,this.waveState="idle",this.updateHUD()}nextWave(){this.wave++;let e=this.wave;if(this.waveCfg={total:6+(e-1)*3,maxAlive:Math.min(4+e,14),hp:100+(e-1)*12,speed:Math.min(1.7,1.1+(e-1)*.07),dmg:11+e,interval:Math.max(.55,2.2-e*.13)},this.spawned=0,this.spawnT=1.6,this.waveState="fight",e>1){let t=this.arsenal,n=t.state;n.shotgun.reserve=Math.min(on.shotgun.maxReserve,n.shotgun.reserve+6),n.rocket.reserve=Math.min(on.rocket.maxReserve,n.rocket.reserve+1),t.grenades=Math.min(jh,t.grenades+1),this.level.resetBarrels()}this.banner(`WELLE ${e}`,e===1?"Sie kommen \u2026":Cn(ii.wave)+" \xB7 Nachschub erhalten"),this.audio.waveHorn(),this.updateHUD()}banner(e,t,n=2.4){De("banner-big").textContent=e,De("banner-small").textContent=t||"";let i=De("banner");i.classList.add("show"),clearTimeout(this._bannerT),this._bannerT=setTimeout(()=>i.classList.remove("show"),n*1e3)}toast(e){let t=De("toast");t.textContent=e,t.classList.remove("show"),t.offsetWidth,t.classList.add("show")}quip(e,t=!1){if(!t&&this.quipCD>0)return;this.quipCD=5.5;let n=De("quip");n.textContent="\u201E"+e+"\u201C",n.classList.add("show"),clearTimeout(this._quipT),this._quipT=setTimeout(()=>n.classList.remove("show"),2200)}pause(){this.state==="play"&&(this.state="pause",De("ov-pause").hidden=!1,this.mouseDown=!1,this.keys={})}resume(){this.state==="pause"&&(De("ov-pause").hidden=!0,this.state="play",this.lock())}gameOver(){this.state="over",document.body.classList.remove("playing"),De("ov-pause").hidden=!0,document.pointerLockElement&&document.exitPointerLock(),this.audio.stopAmbience();let e=this.wave>this.best.wave||this.wave===this.best.wave&&this.kills>this.best.kills;e&&this.kills>0&&(this.best={wave:this.wave,kills:this.kills},Ar.set("zw_best_v2",this.best)),De("go-wave").textContent=this.wave,De("go-kills").textContent=this.kills,De("go-hs").textContent=this.headshots,De("go-newbest").hidden=!(e&&this.kills>0),De("go-best").textContent=this.best.kills>0?`Rekord: Welle ${this.best.wave} \xB7 ${this.best.kills} Kills`:"Noch kein Rekord \u2013 n\xE4chstes Mal!",De("ov-over").hidden=!1;try{parent.postMessage({type:"zombiewelle:best",best:this.best},location.origin)}catch{}}jump(){let e=this.player;e.dead||!e.onGround||(e.vy=6.9,e.onGround=!1,this.audio.jump())}reload(){let e=this.arsenal.startReload();e&&(e==="pistol"&&this.audio.reload(on.pistol.reload),e==="rocket"&&this.audio.rocketLoad())}flashSlot(e){let t=document.querySelector(`.slot[data-w="${e}"]`);t&&(t.classList.remove("nope"),t.offsetWidth,t.classList.add("nope"))}tryFire(){if(this.player.dead)return;let e=this.arsenal,t=e.current,n=e.fire();if(n==="empty"){this.audio.dryFire(),e.st.reserve>0?this.reload():t!=="pistol"&&(e.cycle(-1),this.audio.switchWeapon());return}if(n!=="shot")return;let i=on[t];if(this.player.pitch=Math.min(1.45,this.player.pitch+i.camKick),this.player.yaw+=(Math.random()-.5)*i.camKick*.35,this.player.shake=Math.min(1.2,this.player.shake+(t==="pistol"?.12:.4)),this.muzzleT=t==="pistol"?.06:.09,t==="pistol"&&(this.audio.pistol(),this.shootHitscan(i)),t==="shotgun"&&(this.audio.shotgun(),this.shootHitscan(i)),t==="rocket"){this.audio.rocketFire();let s=this.camera,a=new R(.18,-.12,-.6).applyMatrix4(s.matrixWorld),o=new R(0,0,-1).applyQuaternion(s.quaternion),c=new Sn(s.getWorldPosition(new R),o,0,80),l=c.intersectObjects(this.level.colliders,!1)[0],h=this.zombies.raycast(c.ray.origin,o,l?l.distance:80),u=h?h.point:l?l.point:c.ray.origin.clone().addScaledVector(o,60),d=u.clone().sub(a).normalize();u.distanceTo(a)<1.2&&d.copy(o),this.proj.fireRocket(a,d),this.fx.puff(a.clone().addScaledVector(o,-.6),o.clone().negate(),7829367,1.6)}}shootHitscan(e){let t=this.camera,n=new R;t.getWorldPosition(n);let i=this.player.vel.length()/6+(this.player.onGround?0:.6),s=new Sn,a=new Map,o=0;for(let l=0;l<e.pellets;l++){let h=e.spread*(e.pellets>1?1:1+i*2.5),u=Math.random()*Math.PI*2,d=e.pellets>1?Math.sqrt(Math.random())*h:(Math.random()-.5)*h,f=new R(Math.cos(u)*d,Math.sin(u)*d,-1).normalize().applyQuaternion(t.quaternion);s.set(n,f),s.far=90;let g=s.intersectObjects(this.level.colliders,!1)[0],b=g?g.distance:90,m=this.zombies.raycast(n,f,b);if(m){let p=a.get(m.z)||{dmg:0,n:0,head:!1,point:m.point,rd:f,dist:m.t},v=m.zone==="head"?3.2:m.zone==="body"?1:.7;p.dmg+=e.damage*v*(.9+Math.random()*.2)*(e.pellets>1?Math.max(.35,1-m.t/22):1),p.n++,m.zone==="head"&&(p.head=!0),a.set(m.z,p)}else if(g){g.object.userData.barrel&&this.damageBarrel(g.object.userData.barrel,e.damage);let p=g.face.normal.clone().transformDirection(g.object.matrixWorld);o<4?this.fx.wallHit(g.point,p):this.fx.holes.add(g.point.clone().addScaledVector(p,.006),p,.07),o===0&&this.audio.impactWall(g.point),o++}}let c=!1;for(let[l,h]of a){let u=e.pellets>1,d=u&&h.dist<4.5&&h.n>=6,f=u?Math.max(0,6-h.dist)*.9:0,g=this.zombies.damage(l,h.dmg,h.head?"head":"body",h.point,h.rd,f,d),b=h.head&&!u;this.fx.bloodHit(h.point,h.rd,u?Math.min(2.2,.5+h.n*.18):b?1.2:1,(b||h.head&&u)&&g),g&&h.head?this.audio.headshot(h.point):this.audio.fleshHit(h.point,g||u),g&&(c=!0),g&&u&&!d&&Math.random()<.3&&this.quip(Cn(ii.shotgun))}a.size&&this.hitmarker(c)}throwGrenade(){if(!this.player.dead){if(this.arsenal.grenades<=0){this.flashSlot("nade");return}this.arsenal.throwGrenade()&&this.audio.pin()}}releaseGrenade(){let e=this.camera,t=new R(-.15,-.05,-.5).applyMatrix4(e.matrixWorld),i=new R(0,0,-1).applyQuaternion(e.quaternion).multiplyScalar(14).add(new R(0,3.2,0)).add(new R(this.player.vel.x*.5,0,this.player.vel.z*.5)),s=new Sn(e.getWorldPosition(new R),t.clone().sub(e.position).normalize(),0,e.position.distanceTo(t)+.1),a=s.intersectObjects(this.level.colliders,!1)[0];a&&t.copy(a.point).addScaledVector(s.ray.direction,-.1),this.proj.throwGrenade(t,i),this.audio.throwWhoosh()}explode(e,{radius:t=5,damage:n=150,source:i="rocket",normal:s=null}={}){this.fx.explosion(e,s,i==="barrel"?1.2:1),this.audio.explosion(e,i==="barrel"?1.15:1);let a=this.boomLights.reduce((d,f)=>d.t<f.t?d:f);a.l.position.copy(e).addScaledVector(s||new R(0,1,0),.6),a.t=.45;let o=this.camera.position.distanceTo(e);this.player.shake=Math.min(2.5,this.player.shake+Math.max(0,2.2-o*.12)),this.flashFx=Math.min(1,this.flashFx+Math.max(0,1-o/18));let c=new Sn,l=0;for(let d of this.zombies.alive){let f=d.root.position.clone().setY(1),g=f.distanceTo(e);if(g>t)continue;let b=f.clone().sub(e).setY(0);b.lengthSq()<1e-4&&b.set(Math.random()-.5,0,Math.random()-.5),b.normalize(),c.set(e,f.clone().sub(e).normalize()),c.far=g;let m=c.intersectObjects(this.level.colliders,!1)[0];if(m&&m.distance<g-.4&&!m.object.userData.barrel)continue;let p=Math.pow(1-g/t,.7);this.zombies.damage(d,n*p+10,"body",f,b,8*p+2,g<t*.55)&&l++}l>0&&this.hitmarker(!0),l>=2&&this.quip(Cn(ii.gib),!0);let h=new R(this.player.pos.x,this.player.y+1,this.player.pos.z),u=h.distanceTo(e);if(u<t&&!this.player.dead){let d=1-u/t;this.hurtPlayer(n*.45*d,e,!0);let f=h.clone().sub(e).normalize().multiplyScalar(9*d);this.player.vel.x+=f.x,this.player.vel.z+=f.z,this.player.vy=Math.max(this.player.vy,4*d),this.player.onGround=!1}for(let d of this.level.barrels){if(!d.alive)continue;Math.hypot(d.x-e.x,d.z-e.z)<t+.6&&this.proj.later(.12+Math.random()*.2,()=>this.damageBarrel(d,999))}for(let d of this.proj.nades)d.active&&d.g.position.distanceTo(e)<t*.6&&(d.fuse=Math.min(d.fuse,.15))}damageBarrel(e,t){if(e.alive){if(e.hp-=t,e.hp>0){this.fx.puff(new R(e.x,1,e.z),new R(0,1,0),8978244,.8);return}this.level.removeBarrel(e),Math.random()<.5&&this.quip(Cn(ii.barrel)),this.explode(new R(e.x,.7,e.z),{radius:6.2,damage:270,source:"barrel"})}}hitmarker(e){let t=De("hitmark");t.classList.remove("show","kill"),t.offsetWidth,t.classList.add("show"),e&&t.classList.add("kill"),this.audio.hitmarker()}onKill(e,t){this.kills++;let n=t==="head";n&&this.headshots++;let i=this.time;i-this.lastKillT<1.6?this.streak++:this.streak=1,this.lastKillT=i;let s=De("killfeed"),a=document.createElement("div");for(a.textContent=n?"\u2716 Kopftreffer":t==="gib"?"\u2716 Zerfetzt":"\u2716 Zombie erledigt",(n||t==="gib")&&(a.className="hs"),s.prepend(a),setTimeout(()=>a.remove(),2500);s.children.length>4;)s.lastChild.remove();this.streak===2?this.quip(Cn(ii.multi),!0):this.streak>=3?this.quip(Cn(ii.streak),!0):t==="gib"&&Math.random()<.5?this.quip(Cn(ii.gib)):n&&Math.random()<.6?this.quip(Cn(ii.head)):Math.random()<.35&&this.quip(Cn(ii.kill)),this.maybeDrop(e.root.position),this.updateHUD()}maybeDrop(e){let t=this.arsenal,n=t.state,i=this.player.hp,s=[];if(i<80&&s.push(["health",i<35?4:1.5]),s.push(["shells",n.shotgun.reserve<12?3:1]),s.push(["rockets",n.rocket.reserve<3?2:.6]),s.push(["grenade",t.grenades<2?1.6:.5]),Math.random()>.3)return;let a=s.reduce((h,u)=>h+u[1],0),o=Math.random()*a,c=s[0][0];for(let[h,u]of s)if(o-=u,o<=0){c=h;break}let l=this.pickups.find(h=>!h.active&&h.type===c);l&&(l.active=!0,l.t=0,l.holder.visible=!0,l.holder.position.set(e.x,0,e.z))}updatePickups(e){let t=this.player,n=this.arsenal,i=n.state;for(let s of this.pickups){if(!s.active)continue;if(s.t+=e,s.item.rotation.y+=e*1.6,s.item.position.y=.36+Math.sin(s.t*3)*.06,s.ring.material.opacity=.35+Math.sin(s.t*5)*.15,s.t>35){s.active=!1,s.holder.visible=!1;continue}if(t.y>1.3||Math.hypot(s.holder.position.x-t.pos.x,s.holder.position.z-t.pos.z)>1)continue;let a=!1;s.type==="health"&&t.hp<100&&(t.hp=Math.min(100,t.hp+25),a=!0,this.audio.pickup()),s.type==="shells"&&i.shotgun.reserve<on.shotgun.maxReserve&&(i.shotgun.reserve=Math.min(on.shotgun.maxReserve,i.shotgun.reserve+Ca.shells.amount),a=!0),s.type==="rockets"&&i.rocket.reserve<on.rocket.maxReserve&&(i.rocket.reserve=Math.min(on.rocket.maxReserve,i.rocket.reserve+Ca.rockets.amount),a=!0),s.type==="grenade"&&n.grenades<jh&&(n.grenades++,a=!0),a&&(s.type!=="health"&&this.audio.ammo(),s.active=!1,s.holder.visible=!1,this.toast(Ca[s.type].label),this.updateHUD())}}hurtPlayer(e,t,n=!1){let i=this.player;if(i.dead||this.state!=="play")return;i.hp=Math.max(0,i.hp-e),this.damageFx=Math.min(1,this.damageFx+(n?.8:.55)),i.shake=Math.min(1.5,i.shake+.6),this.audio.hurt();let a=Math.atan2(t.x-i.pos.x,t.z-i.pos.z)-i.yaw+Math.PI,o=De("dmgdir");o.style.transform=`rotate(${-a}rad)`,o.style.transition="none",o.style.opacity=1,requestAnimationFrame(()=>{o.style.transition="opacity .8s",o.style.opacity=0}),i.hp<=0?(i.dead=!0,i.deadT=0,this.quip(Cn(["Das \u2026 war \u2026 unprofessionell.","Ich komme wieder. Als Zombie."]),!0)):i.hp<30&&Math.random()<.3&&this.quip(Cn(ii.hurt)),this.updateHUD()}updateHUD(){let e=this.player,t=this.arsenal;De("h-wave").textContent=this.wave||1,De("h-kills").textContent=this.kills||0;let n=this.waveCfg?Math.max(0,this.waveCfg.total-this.spawned)+this.zombies.alive.length:0;De("h-left").textContent=n,De("h-hp").textContent=Math.ceil(e.hp),De("h-hpbar").style.width=e.hp+"%",De("h-hpbox").classList.toggle("low",e.hp<30);let i=t.pending||t.current,s=t.state[i],a=on[i];De("h-wname").textContent=a.name,De("h-ammo").textContent=t.reloading&&i!=="shotgun"?"\u2026":s.ammo,De("h-reserve").textContent=s.reserve===1/0?"\u221E":s.reserve,De("h-ammobox").classList.toggle("empty",s.ammo===0&&!t.reloading),De("h-ammobox").classList.toggle("lowammo",s.ammo>0&&s.ammo<=Math.ceil(a.mag/4)&&!t.reloading&&a.mag>1),De("h-nades").textContent=t.grenades,document.querySelectorAll(".slot[data-w]").forEach(o=>{let c=o.dataset.w;if(c==="nade"){o.classList.toggle("off",t.grenades<=0);return}o.classList.toggle("on",c===i),o.classList.toggle("off",!t.hasAmmo(c))})}spawnTick(e){let t=this.waveCfg;if(this.waveState==="fight"){this.spawnT-=e;let n=this.zombies.alive.length;if(this.spawnT<=0&&this.spawned<t.total&&n<t.maxAlive){this.spawnT=t.interval*(.7+Math.random()*.6);let i=this.pickSpawn();i&&this.zombies.spawn(i,t)&&(this.spawned++,this.updateHUD())}this.spawned>=t.total&&n===0&&(this.waveState="break",this.breakT=5.5,this.banner(`WELLE ${this.wave} \xDCBERSTANDEN`,"Kurz durchatmen \u2026",3),this.audio.waveClear(),this.player.hp=Math.min(100,this.player.hp+15),this.updateHUD())}else this.waveState==="break"&&(this.breakT-=e,this.breakT<=0&&this.nextWave())}pickSpawn(){let e=this.player.pos,t=this.level.spawns.map(s=>({s,d:s.distanceTo(e)})).filter(s=>s.d>10).sort((s,a)=>s.d-a.d);if(!t.length)return null;let n=t.slice(0,Math.min(4,t.length)),i=Cn(n).s;return new R(i.x+(Math.random()-.5)*.8,0,i.z+(Math.random()-.5)*.8)}updatePlayer(e){let t=this.player;if(t.dead){t.deadT+=e,t.pitch+=(.5-t.pitch)*Math.min(1,e*2),t.deadT>2.4&&this.state==="play"&&this.gameOver();return}let n=this.keys,i=(n.KeyW||n.ArrowUp?1:0)-(n.KeyS||n.ArrowDown?1:0),s=(n.KeyD||n.ArrowRight?1:0)-(n.KeyA||n.ArrowLeft?1:0),a=(n.ShiftLeft||n.ShiftRight)&&i>0,o=a?7.6:5,c=-Math.sin(t.yaw),l=-Math.cos(t.yaw),h=Math.cos(t.yaw),u=-Math.sin(t.yaw),d=c*i+h*s,f=l*i+u*s,g=Math.hypot(d,f);g>0&&(d/=g,f/=g);let b=(g>0?14:10)*(t.onGround?1:.35);if(t.vel.x+=(d*o-t.vel.x)*Math.min(1,b*e),t.vel.z+=(f*o-t.vel.z)*Math.min(1,b*e),t.pos.x+=t.vel.x*e,t.pos.z+=t.vel.z*e,this.level.collide(t.pos,.36,t.y),t.y<1.2)for(let v of this.zombies.alive){let E=t.pos.x-v.root.position.x,x=t.pos.z-v.root.position.z,M=Math.hypot(E,x),S=.75;M<S&&M>1e-4&&(t.pos.x=v.root.position.x+E/M*S,t.pos.z=v.root.position.z+x/M*S)}let m=this.level.groundAt(t.pos.x,t.pos.z,.36,t.y);if(!t.onGround||t.y>m+.01)if(t.vy-=19*e,t.y+=t.vy*e,t.y<=m){let v=-t.vy;t.y=m,t.vy=0,t.onGround||(t.land=Math.min(1,v/9),this.audio.land(v/7)),t.onGround=!0}else t.onGround=!1;else t.y=m,t.vy=0,t.onGround=!0;t.land=Math.max(0,t.land-e*4);let p=Math.hypot(t.vel.x,t.vel.z);this.moving=t.onGround?Math.min(1,p/5):0,this.sprinting=a,t.onGround&&(t.bob+=p*e*1.25,t.stepAcc+=p*e,t.stepAcc>(a?2.1:1.75)&&(t.stepAcc=0,this.audio.step(a?.16:.11))),this.updatePickups(e)}placeCamera(){let e=this.player,t=this.camera,n=Math.abs(Math.sin(e.bob*Math.PI*.5))*.055*(this.moving||0),i=Math.sin(e.bob*Math.PI*.25)*.03*(this.moving||0),s=e.y+1.62-(e.land||0)*.12;e.dead&&(s=Math.max(e.y+.35,e.y+1.62-e.deadT*1.4)),t.position.set(e.pos.x+Math.cos(e.yaw)*i,s+n,e.pos.z-Math.sin(e.yaw)*i);let a=e.shake*e.shake;t.rotation.order="YXZ",t.rotation.y=e.yaw+(Math.random()-.5)*a*.03,t.rotation.x=e.pitch+(Math.random()-.5)*a*.03,t.rotation.z=(e.dead?Math.min(.5,e.deadT*.4):0)+Math.sin(e.bob*Math.PI*.25)*.004*(this.moving||0)}frame(){let e=performance.now()/1e3,t=this._last?e-this._last:.016;this._last=e,t=Math.min(t,.05),!this.frozen&&(this.perf(t),this.update(t),this.composer.render(t))}sim(e,t=1/60){for(let n=0;n<e;n+=t)this.update(t);this.composer.render(t)}update(e){this.time+=e;let t=this.state==="play";if(t){this.updatePlayer(e),this.spawnTick(e),this.zombies.update(e,this.player),this.proj.update(e);let l=this.arsenal;if(this.mouseDown&&l.cooldown<=0&&!l.reloading){this._holdT=(this._holdT||0)+e;let h=l.current==="pistol"?.26:.05;this._holdT>h&&(this._holdT=0,this.tryFire())}else this._holdT=0;l.st.ammo===0&&l.st.reserve>0&&!l.reloading&&l.pumpT<=0&&l.cooldown<=0&&!l.busy&&this.reload(),this.quipCD-=e,this.player.shake=Math.max(0,this.player.shake-e*3),this.damageFx=Math.max(0,this.damageFx-e*1.3),this.flashFx=Math.max(0,this.flashFx-e*3),(this._hudT===void 0||(this._hudT-=e)<0)&&(this._hudT=.1,this.updateHUD())}else this.state==="menu"&&(this.player.yaw+=e*.08,this.player.pitch=-.05);if(this.placeCamera(),this.level.update(this.time,this.camera.position),this.fx.update(t||this.state==="over"?e:e*.3),this.muzzleT>0){this.muzzleT-=e;let l=new R(.25,-.1,-.8).applyMatrix4(this.camera.matrixWorld);this.muzzleLight.position.copy(l),this.muzzleLight.intensity=(this.arsenal.current==="pistol"?9:16)*Math.max(0,this.muzzleT/.06)}else this.muzzleLight.intensity=0;for(let l of this.boomLights)l.t>0?(l.t-=e,l.l.intensity=90*Math.max(0,l.t/.45)**1.5):l.l.intensity=0;let n=this.level.lightAt(this.camera.position)*.06+(this.muzzleT>0?1.5:0)+this.flashFx*2;this.fx.setLight(Math.min(1.5,n));let i=this.events;i.length=0,this.arsenal.update(e,{moving:t&&this.moving||0,sprint:this.sprinting,bobPhase:this.player.bob*Math.PI*.5,lookDX:this.look.dx,lookDY:this.look.dy,light:n,time:this.time},i);for(let l of i)l==="pumpBack"&&this.audio.pump(!0),l==="pumpFwd"&&this.audio.pump(!1),l==="shellIn"&&this.audio.shellIn(),l==="nadeRelease"&&this.releaseGrenade(),l==="switched"&&this.updateHUD();if(this.look.dx=0,this.look.dy=0,this.arsenal.rig.visible=this.state!=="menu"&&!this.player.dead,this.audio.ready){let l=new R(0,0,-1).applyQuaternion(this.camera.quaternion),h=new R(0,1,0).applyQuaternion(this.camera.quaternion);this.audio.setListener(this.camera.position,l,h)}let s=this.arsenal,o=(s.current==="shotgun"?14:s.current==="rocket"?9:5)+(this.moving||0)*6+(s.cooldown>.08?4:0)+(this.player.onGround?0:6);De("crosshair").style.setProperty("--gap",o.toFixed(1)+"px");let c=this.post.uniforms;c.uTime.value=this.time,c.uDamage.value=this.damageFx,c.uFlash.value=this.flashFx||0,c.uLow.value=this.player.hp<35&&!this.player.dead?(35-this.player.hp)/35:this.player.dead?1:0}perf(e){if(this.state!=="play")return;let t=this.frameTimes;if(t.push(e),t.length<90)return;let n=t.reduce((s,a)=>s+a,0)/t.length;t.length=0;let i=this.dynScale;n>1/45?i=Math.max(.55,i-.12):n<1/75&&(i=Math.min(1,i+.06)),i!==this.dynScale&&(this.dynScale=i,this.resize())}},a_=new Kh;a_.init().catch(r=>{console.error(r),De("loadtxt").textContent="Fehler beim Laden \u2013 bitte Seite neu laden."});
