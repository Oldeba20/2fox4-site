var yd=0,Xl=1,Md=2;var Ss=1,Sd=2,br=3,$i=0,Ot=1,ai=2,Ai=0,jn=1,Zt=2,jl=3,Kl=4,Ed=5;var Es=100,Td=101,wd=102,Ad=103,Rd=104,Cd=200,Pd=201,Id=202,Hd=203,Yl=204,Jl=205,Ld=206,Dd=207,Fd=208,Nd=209,Ud=210,kd=211,Od=212,Bd=213,zd=214,To=0,wo=1,Ao=2,tr=3,Ro=4,Co=5,Po=6,Io=7,Zo=0,Gd=1,Vd=2,zi=0,ba=1,xa=2,va=3,Ts=4,_a=5,ya=6,Ma=7,Nl="attached",Wd="detached",Zl=300,Kn=301,ws=302,$o=303,Qo=304,Sa=306,$t=1e3,Ei=1001,ir=1002,It=1003,ec=1004;var As=1005;var kt=1006,xr=1007;var Gi=1008;var mi=1009,$l=1010,Ql=1011,vr=1012,tc=1013,Vi=1014,vi=1015,Xt=1016,ic=1017,nc=1018,_r=1020,eh=35902,th=35899,ih=1021,nh=1022,_i=1023,Ki=1026,Yn=1027,sc=1028,rc=1029,Jn=1030,ac=1031;var oc=1033,Ea=33776,Ta=33777,wa=33778,Aa=33779,cc=35840,lc=35841,hc=35842,uc=35843,dc=36196,fc=37492,pc=37496,mc=37488,gc=37489,Ra=37490,bc=37491,xc=37808,vc=37809,_c=37810,yc=37811,Mc=37812,Sc=37813,Ec=37814,Tc=37815,wc=37816,Ac=37817,Rc=37818,Cc=37819,Pc=37820,Ic=37821,Hc=36492,Lc=36494,Dc=36495,Fc=36283,Nc=36284,Ca=36285,Uc=36286,Zn=2200,qd=2201,Xd=2202,ps=2300,ms=2301,Mo=2302,Ul=2303,us=2400,ds=2401,Zr=2402,kc=2500,jd=2501,sh=0,Pa=1,yr=2,Kd=3200;var Ia=0,Yd=1,An="",et="srgb",hi="srgb-linear",$r="linear",lt="srgb";var So=7680;var Jd=519,Zd=512,$d=513,Qd=514,Oc=515,ef=516,tf=517,Bc=518,nf=519,rh=35044,Rn=35048;var ah="300 es",Ui=2e3,nr=2001;function fp(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function pp(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function sr(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function sf(){let a=sr("canvas");return a.style.display="block",a}var Du={},rr=null;function Qr(...a){let e="THREE."+a.shift();rr?rr("log",e,...a):console.log(e,...a)}function rf(a){let e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function Ne(...a){a=rf(a);let e="THREE."+a.shift();if(rr)rr("warn",e,...a);else{let t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function Ge(...a){a=rf(a);let e="THREE."+a.shift();if(rr)rr("error",e,...a);else{let t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function fs(...a){let e=a.join(" ");e in Du||(Du[e]=!0,Ne(...a))}function af(a,e,t){return new Promise(function(i,n){function s(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:n();break;case a.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var of={[To]:wo,[Ao]:Po,[Ro]:Io,[tr]:Co,[wo]:To,[Po]:Ao,[Io]:Ro,[Co]:tr},Oi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let s=0,r=n.length;s<r;s++)n[s].call(this,e);e.target=null}}},ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fu=1234567,Yr=Math.PI/180,gs=180/Math.PI;function ki(){let a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ti[a&255]+ti[a>>8&255]+ti[a>>16&255]+ti[a>>24&255]+"-"+ti[e&255]+ti[e>>8&255]+"-"+ti[e>>16&15|64]+ti[e>>24&255]+"-"+ti[t&63|128]+ti[t>>8&255]+"-"+ti[t>>16&255]+ti[t>>24&255]+ti[i&255]+ti[i>>8&255]+ti[i>>16&255]+ti[i>>24&255]).toLowerCase()}function rt(a,e,t){return Math.max(e,Math.min(t,a))}function oh(a,e){return(a%e+e)%e}function mp(a,e,t,i,n){return i+(a-e)*(n-i)/(t-e)}function gp(a,e,t){return a!==e?(t-a)/(e-a):0}function Jr(a,e,t){return(1-t)*a+t*e}function bp(a,e,t,i){return Jr(a,e,1-Math.exp(-t*i))}function xp(a,e=1){return e-Math.abs(oh(a,e*2)-e)}function vp(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function _p(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function yp(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Mp(a,e){return a+Math.random()*(e-a)}function Sp(a){return a*(.5-Math.random())}function Ep(a){a!==void 0&&(Fu=a);let e=Fu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Tp(a){return a*Yr}function wp(a){return a*gs}function Ap(a){return a>0&&Number.isInteger(a)&&2**Math.round(Math.log2(a))===a}function Rp(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Cp(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Pp(a,e,t,i,n){let s=Math.cos,r=Math.sin,o=s(t/2),l=r(t/2),c=s((e+i)/2),h=r((e+i)/2),u=s((e-i)/2),d=r((e-i)/2),f=s((i-e)/2),m=r((i-e)/2);switch(n){case"XYX":a.set(o*h,l*u,l*d,o*c);break;case"YZY":a.set(l*d,o*h,l*u,o*c);break;case"ZXZ":a.set(l*u,l*d,o*h,o*c);break;case"XZX":a.set(o*h,l*m,l*f,o*c);break;case"YXY":a.set(l*f,o*h,l*m,o*c);break;case"ZYZ":a.set(l*m,l*f,o*h,o*c);break;default:Ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Ni(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:case Uint8ClampedArray:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function gt(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ch={DEG2RAD:Yr,RAD2DEG:gs,generateUUID:ki,clamp:rt,euclideanModulo:oh,mapLinear:mp,inverseLerp:gp,lerp:Jr,damp:bp,pingpong:xp,smoothstep:vp,smootherstep:_p,randInt:yp,randFloat:Mp,randFloatSpread:Sp,seededRandom:Ep,degToRad:Tp,radToDeg:wp,isPowerOfTwo:Ap,ceilPowerOfTwo:Rp,floorPowerOfTwo:Cp,setQuaternionFromProperEuler:Pp,normalize:gt,denormalize:Ni},fh=class fh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*n+e.x,this.y=s*n+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fh.prototype.isVector2=!0;var Ae=fh,Dt=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,r,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=s[r+0],f=s[r+1],m=s[r+2],b=s[r+3];if(u!==b||l!==d||c!==f||h!==m){let g=l*d+c*f+h*m+u*b;g<0&&(d=-d,f=-f,m=-m,b=-b,g=-g);let p=1-o;if(g<.9995){let x=Math.acos(g),E=Math.sin(x);p=Math.sin(p*x)/E,o=Math.sin(o*x)/E,l=l*p+d*o,c=c*p+f*o,h=h*p+m*o,u=u*p+b*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+m*o,u=u*p+b*o;let x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,r){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[r],d=s[r+1],f=s[r+2],m=s[r+3];return e[t]=o*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-o*f,e[t+2]=c*m+h*f+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),f=l(n/2),m=l(s/2);switch(r){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(r-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+r)/f,this._z=(s+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(s-c)/f,this._x=(n+r)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(r-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+r*o+n*c-s*l,this._y=n*h+r*l+s*o-i*c,this._z=s*h+r*c+i*l-n*o,this._w=r*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,s=-s,r=-r,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+s*t,this._w=this._w*l+r*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+s*t,this._w=this._w*l+r*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ph=class ph{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,r=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*r,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*r,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*r,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*n-o*i),h=2*(o*t-s*n),u=2*(s*i-r*t);return this.x=t+l*c+r*u-o*h,this.y=i+l*h+o*c-s*u,this.z=n+l*u+s*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*r-i*l,this.z=i*o-n*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ul.copy(this).projectOnVector(e),this.sub(ul)}reflect(e){return this.sub(ul.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ph.prototype.isVector3=!0;var R=ph,ul=new R,Nu=new Dt,mh=class mh{constructor(e,t,i,n,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,r,o,l,c)}set(e,t,i,n,s,r,o,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],m=i[8],b=n[0],g=n[3],p=n[6],x=n[1],E=n[4],v=n[7],y=n[2],M=n[5],A=n[8];return s[0]=r*b+o*x+l*y,s[3]=r*g+o*E+l*M,s[6]=r*p+o*v+l*A,s[1]=c*b+h*x+u*y,s[4]=c*g+h*E+u*M,s[7]=c*p+h*v+u*A,s[2]=d*b+f*x+m*y,s[5]=d*g+f*E+m*M,s[8]=d*p+f*v+m*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-i*s*h+i*o*l+n*s*c-n*r*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*r-o*c,d=o*l-h*s,f=c*s-r*l,m=t*u+i*d+n*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return e[0]=u*b,e[1]=(n*c-h*i)*b,e[2]=(o*i-n*r)*b,e[3]=d*b,e[4]=(h*t-n*l)*b,e[5]=(n*s-o*t)*b,e[6]=f*b,e[7]=(i*l-c*t)*b,e[8]=(r*t-i*s)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,r,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+e,-n*c,n*l,-n*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(dl.makeScale(e,t)),this}rotate(e){return fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(dl.makeRotation(-e)),this}translate(e,t){return fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(dl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};mh.prototype.isMatrix3=!0;var Xe=mh,dl=new Xe,Uu=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ku=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ip(){let a={enabled:!0,workingColorSpace:hi,spaces:{},convert:function(n,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===lt&&(n.r=dn(n.r),n.g=dn(n.g),n.b=dn(n.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===lt&&(n.r=er(n.r),n.g=er(n.g),n.b=er(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===An?$r:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,r){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(n,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return a.define({[hi]:{primaries:e,whitePoint:i,transfer:$r,toXYZ:Uu,fromXYZ:ku,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:et},outputColorSpaceConfig:{drawingBufferColorSpace:et}},[et]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:Uu,fromXYZ:ku,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:et}}}),a}var Ze=Ip();function dn(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function er(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}var Ns,Ho=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ns===void 0&&(Ns=sr("canvas")),Ns.width=e.width,Ns.height=e.height;let n=Ns.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Ns}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=sr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let r=0;r<s.length;r++)s[r]=dn(s[r]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(dn(t[i]/255)*255):t[i]=dn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Hp=0,ar=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let r=0,o=n.length;r<o;r++)n[r].isDataTexture?s.push(fl(n[r].image)):s.push(fl(n[r]))}else s=fl(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function fl(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Ho.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}var Lp=0,pl=new R,qt=class a extends Oi{constructor(e=a.DEFAULT_IMAGE,t=a.DEFAULT_MAPPING,i=Ei,n=Ei,s=kt,r=Gi,o=_i,l=mi,c=a.DEFAULT_ANISOTROPY,h=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=ki(),this.name="",this.source=new ar(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pl).x}get height(){return this.source.getSize(pl).y}get depth(){return this.source.getSize(pl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $t:e.x=e.x-Math.floor(e.x);break;case Ei:e.x=e.x<0?0:1;break;case ir:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $t:e.y=e.y-Math.floor(e.y);break;case Ei:e.y=e.y<0?0:1;break;case ir:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Zl;qt.DEFAULT_ANISOTROPY=1;var gh=class gh{constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n+r[12]*s,this.y=r[1]*t+r[5]*i+r[9]*n+r[13]*s,this.z=r[2]*t+r[6]*i+r[10]*n+r[14]*s,this.w=r[3]*t+r[7]*i+r[11]*n+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],b=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,v=(f+1)/2,y=(p+1)/2,M=(h+d)/4,A=(u+b)/4,_=(m+g)/4;return E>v&&E>y?E<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(E),n=M/i,s=A/i):v>y?v<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(v),i=M/n,s=_/n):y<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(y),i=A/s,n=_/s),this.set(i,n,s,t),this}let x=Math.sqrt((g-m)*(g-m)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-b)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gh.prototype.isVector4=!0;var bt=gh,Lo=class extends Oi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];let n={width:e,height:t,depth:i.depth},s=new qt(n),r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new ar(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ft=class extends Lo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ea=class extends qt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=It,this.minFilter=It,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Do=class extends qt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=It,this.minFilter=It,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Jo=class Jo{constructor(e,t,i,n,s,r,o,l,c,h,u,d,f,m,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,r,o,l,c,h,u,d,f,m,b,g)}set(e,t,i,n,s,r,o,l,c,h,u,d,f,m,b,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=s,p[5]=r,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jo().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/Us.setFromMatrixColumn(e,0).length(),s=1/Us.setFromMatrixColumn(e,1).length(),r=1/Us.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=r*h,f=r*u,m=o*h,b=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-b*c,t[9]=-o*l,t[2]=b-d*c,t[6]=m+f*c,t[10]=r*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,m=c*h,b=c*u;t[0]=d+b*o,t[4]=m*o-f,t[8]=r*c,t[1]=r*u,t[5]=r*h,t[9]=-o,t[2]=f*o-m,t[6]=b+d*o,t[10]=r*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,m=c*h,b=c*u;t[0]=d-b*o,t[4]=-r*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=r*h,t[9]=b-d*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){let d=r*h,f=r*u,m=o*h,b=o*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+b,t[1]=l*u,t[5]=b*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){let d=r*l,f=r*c,m=o*l,b=o*c;t[0]=l*h,t[4]=b-d*u,t[8]=m*u+f,t[1]=u,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-b*u}else if(e.order==="XZY"){let d=r*l,f=r*c,m=o*l,b=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+b,t[5]=r*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dp,e,Fp)}lookAt(e,t,i){let n=this.elements;return gi.subVectors(e,t),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),Fn.crossVectors(i,gi),Fn.lengthSq()===0&&(Math.abs(i.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),Fn.crossVectors(i,gi)),Fn.normalize(),ja.crossVectors(gi,Fn),n[0]=Fn.x,n[4]=ja.x,n[8]=gi.x,n[1]=Fn.y,n[5]=ja.y,n[9]=gi.y,n[2]=Fn.z,n[6]=ja.z,n[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],m=i[2],b=i[6],g=i[10],p=i[14],x=i[3],E=i[7],v=i[11],y=i[15],M=n[0],A=n[4],_=n[8],T=n[12],C=n[1],I=n[5],L=n[9],D=n[13],H=n[2],N=n[6],j=n[10],Y=n[14],B=n[3],V=n[7],Z=n[11],F=n[15];return s[0]=r*M+o*C+l*H+c*B,s[4]=r*A+o*I+l*N+c*V,s[8]=r*_+o*L+l*j+c*Z,s[12]=r*T+o*D+l*Y+c*F,s[1]=h*M+u*C+d*H+f*B,s[5]=h*A+u*I+d*N+f*V,s[9]=h*_+u*L+d*j+f*Z,s[13]=h*T+u*D+d*Y+f*F,s[2]=m*M+b*C+g*H+p*B,s[6]=m*A+b*I+g*N+p*V,s[10]=m*_+b*L+g*j+p*Z,s[14]=m*T+b*D+g*Y+p*F,s[3]=x*M+E*C+v*H+y*B,s[7]=x*A+E*I+v*N+y*V,s[11]=x*_+E*L+v*j+y*Z,s[15]=x*T+E*D+v*Y+y*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],b=e[7],g=e[11],p=e[15],x=l*f-c*d,E=o*f-c*u,v=o*d-l*u,y=r*f-c*h,M=r*d-l*h,A=r*u-o*h;return t*(b*x-g*E+p*v)-i*(m*x-g*y+p*M)+n*(m*E-b*y+p*A)-s*(m*v-b*M+g*A)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[1],r=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(r*h-o*c)-i*(s*h-o*l)+n*(s*c-r*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],b=e[13],g=e[14],p=e[15],x=t*o-i*r,E=t*l-n*r,v=t*c-s*r,y=i*l-n*o,M=i*c-s*o,A=n*c-s*l,_=h*b-u*m,T=h*g-d*m,C=h*p-f*m,I=u*g-d*b,L=u*p-f*b,D=d*p-f*g,H=x*D-E*L+v*I+y*C-M*T+A*_;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/H;return e[0]=(o*D-l*L+c*I)*N,e[1]=(n*L-i*D-s*I)*N,e[2]=(b*A-g*M+p*y)*N,e[3]=(d*M-u*A-f*y)*N,e[4]=(l*C-r*D-c*T)*N,e[5]=(t*D-n*C+s*T)*N,e[6]=(g*v-m*A-p*E)*N,e[7]=(h*A-d*v+f*E)*N,e[8]=(r*L-o*C+c*_)*N,e[9]=(i*C-t*L-s*_)*N,e[10]=(m*M-b*v+p*x)*N,e[11]=(u*v-h*M-f*x)*N,e[12]=(o*T-r*I-l*_)*N,e[13]=(t*I-i*T+n*_)*N,e[14]=(b*E-m*y-g*x)*N,e[15]=(h*y-u*E+d*x)*N,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,r=e.x,o=e.y,l=e.z,c=s*r,h=s*o;return this.set(c*r+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*r,0,c*l-n*o,h*l+n*r,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,r){return this.set(1,i,s,0,e,1,r,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,c=s+s,h=r+r,u=o+o,d=s*c,f=s*h,m=s*u,b=r*h,g=r*u,p=o*u,x=l*c,E=l*h,v=l*u,y=i.x,M=i.y,A=i.z;return n[0]=(1-(b+p))*y,n[1]=(f+v)*y,n[2]=(m-E)*y,n[3]=0,n[4]=(f-v)*M,n[5]=(1-(d+p))*M,n[6]=(g+x)*M,n[7]=0,n[8]=(m+E)*A,n[9]=(g-x)*A,n[10]=(1-(d+b))*A,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let r=Us.set(n[0],n[1],n[2]).length(),o=Us.set(n[4],n[5],n[6]).length(),l=Us.set(n[8],n[9],n[10]).length();s<0&&(r=-r),Hi.copy(this);let c=1/r,h=1/o,u=1/l;return Hi.elements[0]*=c,Hi.elements[1]*=c,Hi.elements[2]*=c,Hi.elements[4]*=h,Hi.elements[5]*=h,Hi.elements[6]*=h,Hi.elements[8]*=u,Hi.elements[9]*=u,Hi.elements[10]*=u,t.setFromRotationMatrix(Hi),i.x=r,i.y=o,i.z=l,this}makePerspective(e,t,i,n,s,r,o=Ui,l=!1){let c=this.elements,h=2*s/(t-e),u=2*s/(i-n),d=(t+e)/(t-e),f=(i+n)/(i-n),m,b;if(l)m=s/(r-s),b=r*s/(r-s);else if(o===Ui)m=-(r+s)/(r-s),b=-2*r*s/(r-s);else if(o===nr)m=-r/(r-s),b=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,s,r,o=Ui,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-n),d=-(t+e)/(t-e),f=-(i+n)/(i-n),m,b;if(l)m=1/(r-s),b=r/(r-s);else if(o===Ui)m=-2/(r-s),b=-(r+s)/(r-s);else if(o===nr)m=-1/(r-s),b=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Jo.prototype.isMatrix4=!0;var Ve=Jo,Us=new R,Hi=new Ve,Dp=new R(0,0,0),Fp=new R(1,1,1),Fn=new R,ja=new R,gi=new R,Ou=new Ve,Bu=new Dt,Jt=class a{constructor(e=0,t=0,i=0,n=a.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],r=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-rt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ou.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ou,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bu.setFromEuler(this),this.setFromQuaternion(Bu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jt.DEFAULT_ORDER="XYZ";var or=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Np=0,zu=new R,ks=new Dt,rn=new Ve,Ka=new R,kr=new R,Up=new R,kp=new Dt,Gu=new R(1,0,0),Vu=new R(0,1,0),Wu=new R(0,0,1),qu={type:"added"},Op={type:"removed"},Os={type:"childadded",child:null},ml={type:"childremoved",child:null},ht=class a extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=a.DEFAULT_UP.clone();let e=new R,t=new Jt,i=new Dt,n=new R(1,1,1);function s(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Xe}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=a.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=a.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(Gu,e)}rotateY(e){return this.rotateOnAxis(Vu,e)}rotateZ(e){return this.rotateOnAxis(Wu,e)}translateOnAxis(e,t){return zu.copy(e).applyQuaternion(this.quaternion),this.position.add(zu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gu,e)}translateY(e){return this.translateOnAxis(Vu,e)}translateZ(e){return this.translateOnAxis(Wu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ka.copy(e):Ka.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(kr,Ka,this.up):rn.lookAt(Ka,kr,this.up),this.quaternion.setFromRotationMatrix(rn),n&&(rn.extractRotation(n.matrixWorld),ks.setFromRotationMatrix(rn),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qu),Os.child=e,this.dispatchEvent(Os),Os.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Op),ml.child=e,this.dispatchEvent(ml),ml.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qu),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,r=n.length;s<r;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,e,Up),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,kp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*n,s[13]+=i-s[1]*t-s[5]*i-s[9]*n,s[14]+=n-s[2]*t-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){let o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),u=r(e.shapes),d=r(e.skeletons),f=r(e.animations),m=r(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=n,i;function r(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ht.DEFAULT_UP=new R(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qe=class extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bp={type:"move"},cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,i),p=this._getHandJoint(c,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bp)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new qe;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},Ya={h:0,s:0,l:0};function gl(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}var le=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=Ze.workingColorSpace){if(e=oh(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,r=2*i-s;this.r=gl(r,s,e+1/3),this.g=gl(r,s,e),this.b=gl(r,s,e-1/3)}return Ze.colorSpaceToWorking(this,n),this}setStyle(e,t=et){function i(s){s!==void 0&&parseFloat(s)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=et){let i=cf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dn(e.r),this.g=dn(e.g),this.b=dn(e.b),this}copyLinearToSRGB(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=et){return Ze.workingToColorSpace(ii.copy(this),e),Math.round(rt(ii.r*255,0,255))*65536+Math.round(rt(ii.g*255,0,255))*256+Math.round(rt(ii.b*255,0,255))}getHexString(e=et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(ii.copy(this),t);let i=ii.r,n=ii.g,s=ii.b,r=Math.max(i,n,s),o=Math.min(i,n,s),l,c,h=(o+r)/2;if(o===r)l=0,c=0;else{let u=r-o;switch(c=h<=.5?u/(r+o):u/(2-r-o),r){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(ii.copy(this),t),e.r=ii.r,e.g=ii.g,e.b=ii.b,e}getStyle(e=et){Ze.workingToColorSpace(ii.copy(this),e);let t=ii.r,i=ii.g,n=ii.b;return e!==et?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Nn),this.setHSL(Nn.h+e,Nn.s+t,Nn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(Ya);let i=Jr(Nn.h,Ya.h,t),n=Jr(Nn.s,Ya.s,t),s=Jr(Nn.l,Ya.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ii=new le;le.NAMES=cf;var ta=class a{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new le(e),this.density=t}clone(){return new a(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var fn=class extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jt,this.environmentIntensity=1,this.environmentRotation=new Jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Li=new R,an=new R,bl=new R,on=new R,Bs=new R,zs=new R,Xu=new R,xl=new R,vl=new R,_l=new R,yl=new bt,Ml=new bt,Sl=new bt,un=class a{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Li.subVectors(e,t),n.cross(Li);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Li.subVectors(n,t),an.subVectors(i,t),bl.subVectors(e,t);let r=Li.dot(Li),o=Li.dot(an),l=Li.dot(bl),c=an.dot(an),h=an.dot(bl),u=r*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,m=(r*h-o*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getInterpolation(e,t,i,n,s,r,o,l){return this.getBarycoord(e,t,i,n,on)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,on.x),l.addScaledVector(r,on.y),l.addScaledVector(o,on.z),l)}static getInterpolatedAttribute(e,t,i,n,s,r){return yl.setScalar(0),Ml.setScalar(0),Sl.setScalar(0),yl.fromBufferAttribute(e,t),Ml.fromBufferAttribute(e,i),Sl.fromBufferAttribute(e,n),r.setScalar(0),r.addScaledVector(yl,s.x),r.addScaledVector(Ml,s.y),r.addScaledVector(Sl,s.z),r}static isFrontFacing(e,t,i,n){return Li.subVectors(i,t),an.subVectors(e,t),Li.cross(an).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Li.cross(an).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return a.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return a.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return a.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return a.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return a.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,r,o;Bs.subVectors(n,i),zs.subVectors(s,i),xl.subVectors(e,i);let l=Bs.dot(xl),c=zs.dot(xl);if(l<=0&&c<=0)return t.copy(i);vl.subVectors(e,n);let h=Bs.dot(vl),u=zs.dot(vl);if(h>=0&&u<=h)return t.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(i).addScaledVector(Bs,r);_l.subVectors(e,s);let f=Bs.dot(_l),m=zs.dot(_l);if(m>=0&&f<=m)return t.copy(s);let b=f*c-l*m;if(b<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(zs,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Xu.subVectors(s,n),o=(u-h)/(u-h+(f-m)),t.copy(n).addScaledVector(Xu,o);let p=1/(g+b+d);return r=b*p,o=d*p,t.copy(i).addScaledVector(Bs,r).addScaledVector(zs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ui=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Di):Di.fromBufferAttribute(s,r),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ja.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ja.copy(i.boundingBox)),Ja.applyMatrix4(e.matrixWorld),this.union(Ja)}let n=e.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Or),Za.subVectors(this.max,Or),Gs.subVectors(e.a,Or),Vs.subVectors(e.b,Or),Ws.subVectors(e.c,Or),Un.subVectors(Vs,Gs),kn.subVectors(Ws,Vs),os.subVectors(Gs,Ws);let t=[0,-Un.z,Un.y,0,-kn.z,kn.y,0,-os.z,os.y,Un.z,0,-Un.x,kn.z,0,-kn.x,os.z,0,-os.x,-Un.y,Un.x,0,-kn.y,kn.x,0,-os.y,os.x,0];return!El(t,Gs,Vs,Ws,Za)||(t=[1,0,0,0,1,0,0,0,1],!El(t,Gs,Vs,Ws,Za))?!1:($a.crossVectors(Un,kn),t=[$a.x,$a.y,$a.z],El(t,Gs,Vs,Ws,Za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},cn=[new R,new R,new R,new R,new R,new R,new R,new R],Di=new R,Ja=new ui,Gs=new R,Vs=new R,Ws=new R,Un=new R,kn=new R,os=new R,Or=new R,Za=new R,$a=new R,cs=new R;function El(a,e,t,i,n){for(let s=0,r=a.length-3;s<=r;s+=3){cs.fromArray(a,s);let o=n.x*Math.abs(cs.x)+n.y*Math.abs(cs.y)+n.z*Math.abs(cs.z),l=e.dot(cs),c=t.dot(cs),h=i.dot(cs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Vt=new R,Qa=new Ae,zp=0,Rt=class extends Oi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=rh,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Qa.fromBufferAttribute(this,t),Qa.applyMatrix3(e),this.setXY(t,Qa.x,Qa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ia=class extends Rt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var na=class extends Rt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ke=class extends Rt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Gp=new ui,Br=new R,Tl=new R,ni=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Gp.setFromPoints(e).getCenter(i);let n=0;for(let s=0,r=e.length;s<r;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);let t=Br.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Br,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add(Tl)),this.expandByPoint(Br.copy(e.center).sub(Tl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Vp=0,Si=new Ve,wl=new ht,qs=new R,bi=new ui,zr=new ui,Yt=new R,ot=class a extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fp(e)?na:ia)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,t,i){return Si.makeTranslation(e,t,i),this.applyMatrix4(Si),this}scale(e,t,i){return Si.makeScale(e,t,i),this.applyMatrix4(Si),this}lookAt(e){return wl.lookAt(e),wl.updateMatrix(),this.applyMatrix4(wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ke(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];bi.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,bi.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,bi.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(bi.min),this.boundingBox.expandByPoint(bi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let i=this.boundingSphere.center;if(bi.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){let o=t[s];zr.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(bi.min,zr.min),bi.expandByPoint(Yt),Yt.addVectors(bi.max,zr.max),bi.expandByPoint(Yt)):(bi.expandByPoint(zr.min),bi.expandByPoint(zr.max))}bi.getCenter(i);let n=0;for(let s=0,r=e.count;s<r;s++)Yt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Yt));if(t)for(let s=0,r=t.length;s<r;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Yt.fromBufferAttribute(o,c),l&&(qs.fromBufferAttribute(e,c),Yt.add(qs)),n=Math.max(n,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,s=t.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new Rt(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new R,l[_]=new R;let c=new R,h=new R,u=new R,d=new Ae,f=new Ae,m=new Ae,b=new R,g=new R;function p(_,T,C){c.fromBufferAttribute(i,_),h.fromBufferAttribute(i,T),u.fromBufferAttribute(i,C),d.fromBufferAttribute(s,_),f.fromBufferAttribute(s,T),m.fromBufferAttribute(s,C),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(b.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(I),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(I),o[_].add(b),o[T].add(b),o[C].add(b),l[_].add(g),l[T].add(g),l[C].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let _=0,T=x.length;_<T;++_){let C=x[_],I=C.start,L=C.count;for(let D=I,H=I+L;D<H;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let E=new R,v=new R,y=new R,M=new R;function A(_){y.fromBufferAttribute(n,_),M.copy(y);let T=o[_];E.copy(T),E.sub(y.multiplyScalar(y.dot(T))).normalize(),v.crossVectors(M,T);let I=v.dot(l[_])<0?-1:1;r.setXYZW(_,E.x,E.y,E.z,I)}for(let _=0,T=x.length;_<T;++_){let C=x[_],I=C.start,L=C.count;for(let D=I,H=I+L;D<H;D+=3)A(e.getX(D+0)),A(e.getX(D+1)),A(e.getX(D+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Rt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new R,s=new R,r=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),b=e.getX(d+1),g=e.getX(d+2);n.fromBufferAttribute(t,m),s.fromBufferAttribute(t,b),r.fromBufferAttribute(t,g),h.subVectors(r,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?f=l[b]*o.data.stride+o.offset:f=l[b]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new Rt(d,h,u)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new a,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=e(l,i);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let c=0,h=r.length;c<h;c++){let u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},bs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rh,this.updateRanges=[],this.version=0,this.uuid=ki()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},li=new R,zn=class a{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)li.fromBufferAttribute(this,t),li.applyMatrix4(e),this.setXYZ(t,li.x,li.y,li.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)li.fromBufferAttribute(this,t),li.applyNormalMatrix(e),this.setXYZ(t,li.x,li.y,li.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)li.fromBufferAttribute(this,t),li.transformDirection(e),this.setXYZ(t,li.x,li.y,li.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ni(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Qr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new Rt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new a(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Qr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Al=new R,Wp=new R,qp=new Xe,Fi=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=Al.subVectors(i,t).cross(Wp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(Al),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||qp.getNormalMatrix(e),n=this.coplanarPoint(Al).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Xp=0,si=class extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=jn,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yl,this.blendDst=Jl,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=So,this.stencilZFail=So,this.stencilZPass=So,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let r=[];for(let o in s){let l=s[o];delete l.metadata,r.push(l)}return r}if(t){let s=n(e.textures),r=n(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Fi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ae().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ae().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},pn=class extends si{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xs,Gr=new R,js=new R,Ks=new R,Ys=new Ae,Vr=new Ae,lf=new Ve,eo=new R,Wr=new R,to=new R,ju=new Ae,Rl=new Ae,Ku=new Ae,Gn=class extends ht{constructor(e=new pn){if(super(),this.isSprite=!0,this.type="Sprite",Xs===void 0){Xs=new ot;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new bs(t,5);Xs.setIndex([0,1,2,0,2,3]),Xs.setAttribute("position",new zn(i,3,0,!1)),Xs.setAttribute("uv",new zn(i,2,3,!1))}this.geometry=Xs,this.material=e,this.center=new Ae(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ge('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),js.setFromMatrixScale(this.matrixWorld),lf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ks.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&js.multiplyScalar(-Ks.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let r=this.center;io(eo.set(-.5,-.5,0),Ks,r,js,n,s),io(Wr.set(.5,-.5,0),Ks,r,js,n,s),io(to.set(.5,.5,0),Ks,r,js,n,s),ju.set(0,0),Rl.set(1,0),Ku.set(1,1);let o=e.ray.intersectTriangle(eo,Wr,to,!1,Gr);if(o===null&&(io(Wr.set(-.5,.5,0),Ks,r,js,n,s),Rl.set(0,1),o=e.ray.intersectTriangle(eo,to,Wr,!1,Gr),o===null))return;let l=e.ray.origin.distanceTo(Gr);l<e.near||l>e.far||t.push({distance:l,point:Gr.clone(),uv:un.getInterpolation(Gr,eo,Wr,to,ju,Rl,Ku,new Ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function io(a,e,t,i,n,s){Ys.subVectors(a,t).addScalar(.5).multiply(i),n!==void 0?(Vr.x=s*Ys.x-n*Ys.y,Vr.y=n*Ys.x+s*Ys.y):Vr.copy(Ys),a.copy(e),a.x+=Vr.x,a.y+=Vr.y,a.applyMatrix4(lf)}var ln=new R,Cl=new R,no=new R,so=new R,Vn=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ln.copy(this.origin).addScaledVector(this.direction,t),ln.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Cl.copy(e).add(t).multiplyScalar(.5),no.copy(t).sub(e).normalize(),so.copy(this.origin).sub(Cl);let s=e.distanceTo(t)*.5,r=-this.direction.dot(no),o=so.dot(this.direction),l=-so.dot(no),c=so.lengthSq(),h=Math.abs(1-r*r),u,d,f,m;if(h>0)if(u=r*l-o,d=r*o-l,m=s*h,u>=0)if(d>=-m)if(d<=m){let b=1/h;u*=b,d*=b,f=u*(u+r*d+2*o)+d*(r*u+d+2*l)+c}else d=s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-r*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(r*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=r>0?-s:s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Cl).addScaledVector(no,d),f}intersectSphere(e,t){if(e.radius<0)return null;ln.subVectors(e.center,this.origin);let i=ln.dot(this.direction),n=ln.dot(ln)-i*i,s=e.radius*e.radius;if(n>s)return null;let r=Math.sqrt(s-n),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,r,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),i>r||s>n||((s>i||isNaN(i))&&(i=s),(r<n||isNaN(n))&&(n=r),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,ln)!==null}intersectTriangle(e,t,i,n,s){let r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-r.x,d=e.y-r.y,f=e.z-r.z,m=t.x-r.x,b=t.y-r.y,g=t.z-r.z,p=i.x-r.x,x=i.y-r.y,E=i.z-r.z,v=Math.abs(l),y=Math.abs(c),M=Math.abs(h),A,_,T,C,I,L,D,H,N,j,Y,B;if(v>=y&&v>=M?(T=l,L=u,N=m,B=p,l>=0?(A=c,_=h,C=d,I=f,D=b,H=g,j=x,Y=E):(A=h,_=c,C=f,I=d,D=g,H=b,j=E,Y=x)):y>=M?(T=c,L=d,N=b,B=x,c>=0?(A=h,_=l,C=f,I=u,D=g,H=m,j=E,Y=p):(A=l,_=h,C=u,I=f,D=m,H=g,j=p,Y=E)):(T=h,L=f,N=g,B=E,h>=0?(A=l,_=c,C=u,I=d,D=m,H=b,j=p,Y=x):(A=c,_=l,C=d,I=u,D=b,H=m,j=x,Y=p)),T===0)return null;let V=A/T,Z=_/T,F=1/T,G=C-V*L,ee=I-Z*L,Me=D-V*N,fe=H-Z*N,He=j-V*B,W=Y-Z*B,$=He*fe-W*Me,ae=G*W-ee*He,Te=Me*ee-fe*G;if(n){if($<0||ae<0||Te<0)return null}else if(($<0||ae<0||Te<0)&&($>0||ae>0||Te>0))return null;let oe=$+ae+Te;if(oe===0)return null;let We=F*($*L+ae*N+Te*B);return(oe>0?We<0:We>0)?null:this.at(We/oe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ut=class extends si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Yu=new Ve,ls=new Vn,ro=new ni,Ju=new R,ao=new R,oo=new R,co=new R,Pl=new R,lo=new R,Zu=new R,ho=new R,ve=class extends ht{constructor(e=new ot,t=new ut){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(s&&o){lo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Pl.fromBufferAttribute(u,e),r?lo.addScaledVector(Pl,h):lo.addScaledVector(Pl.sub(t),h))}t.add(lo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ro.copy(i.boundingSphere),ro.applyMatrix4(s),ls.copy(e.ray).recast(e.near),!(ro.containsPoint(ls.origin)===!1&&(ls.intersectSphere(ro,Ju)===null||ls.origin.distanceToSquared(Ju)>(e.far-e.near)**2))&&(Yu.copy(s).invert(),ls.copy(e.ray).applyMatrix4(Yu),!(i.boundingBox!==null&&ls.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,i){let n,s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,b=d.length;m<b;m++){let g=d[m],p=r[g.materialIndex],x=Math.max(g.start,f.start),E=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,y=E;v<y;v+=3){let M=o.getX(v),A=o.getX(v+1),_=o.getX(v+2);n=uo(this,p,e,i,c,h,u,M,A,_),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{let m=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let x=o.getX(g),E=o.getX(g+1),v=o.getX(g+2);n=uo(this,r,e,i,c,h,u,x,E,v),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,b=d.length;m<b;m++){let g=d[m],p=r[g.materialIndex],x=Math.max(g.start,f.start),E=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,y=E;v<y;v+=3){let M=v,A=v+1,_=v+2;n=uo(this,p,e,i,c,h,u,M,A,_),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{let m=Math.max(0,f.start),b=Math.min(l.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let x=g,E=g+1,v=g+2;n=uo(this,r,e,i,c,h,u,x,E,v),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}}};function jp(a,e,t,i,n,s,r,o){let l;if(e.side===Ot?l=i.intersectTriangle(r,s,n,!0,o):l=i.intersectTriangle(n,s,r,e.side===$i,o),l===null)return null;ho.copy(o),ho.applyMatrix4(a.matrixWorld);let c=t.ray.origin.distanceTo(ho);return c<t.near||c>t.far?null:{distance:c,point:ho.clone(),object:a}}function uo(a,e,t,i,n,s,r,o,l,c){a.getVertexPosition(o,ao),a.getVertexPosition(l,oo),a.getVertexPosition(c,co);let h=jp(a,e,t,i,ao,oo,co,Zu);if(h){let u=new R;un.getBarycoord(Zu,ao,oo,co,u),n&&(h.uv=un.getInterpolatedAttribute(n,o,l,c,u,new Ae)),s&&(h.uv1=un.getInterpolatedAttribute(s,o,l,c,u,new Ae)),r&&(h.normal=un.getInterpolatedAttribute(r,o,l,c,u,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new R,materialIndex:0};un.getNormal(ao,oo,co,d.normal),h.face=d,h.barycoord=u}return h}var qr=new bt,$u=new bt,Qu=new bt,Kp=new bt,ed=new Ve,fo=new R,Il=new ni,td=new Ve,Hl=new Vn,sa=class extends ve{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Nl,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ui),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,fo),this.boundingBox.expandByPoint(fo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ni),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,fo),this.boundingSphere.expandByPoint(fo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Il.copy(this.boundingSphere),Il.applyMatrix4(n),e.ray.intersectsSphere(Il)!==!1&&(td.copy(n).invert(),Hl.copy(e.ray).applyMatrix4(td),!(this.boundingBox!==null&&Hl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Hl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new bt,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Nl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Wd?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ne("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,n=this.geometry;$u.fromBufferAttribute(n.attributes.skinIndex,e),Qu.fromBufferAttribute(n.attributes.skinWeight,e),t.isVector4?(qr.copy(t),t.set(0,0,0,0)):(qr.set(...t,1),t.set(0,0,0)),qr.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let r=Qu.getComponent(s);if(r!==0){let o=$u.getComponent(s);ed.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Kp.copy(qr).applyMatrix4(ed),r)}}return t.isVector4&&(t.w=qr.w),t.applyMatrix4(this.bindMatrixInverse)}},lr=class extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}},hr=class extends qt{constructor(e=null,t=1,i=1,n,s,r,o,l,c=It,h=It,u,d){super(null,r,o,l,c,h,n,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},id=new Ve,Yp=new Ve,ra=class a{constructor(e=[],t=[]){this.uuid=ki(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ne("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ve;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,r=e.length;s<r;s++){let o=e[s]?e[s].matrixWorld:Yp;id.multiplyMatrices(o,t[s]),id.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new a(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new hr(t,e,e,_i,vi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){let s=e.bones[i],r=t[s];r===void 0&&(Ne("Skeleton: No bone found with UUID:",s),r=new lr),this.bones.push(r),this.boneInverses.push(new Ve().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let n=0,s=t.length;n<s;n++){let r=t[n];e.bones.push(r.uuid);let o=i[n];e.boneInverses.push(o.toArray())}return e}},mn=class extends Rt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Js=new Ve,nd=new Ve,po=[],sd=new ui,Jp=new Ve,Xr=new ve,jr=new ni,Bi=class extends ve{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new mn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Jp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Js),sd.copy(e.boundingBox).applyMatrix4(Js),this.boundingBox.union(sd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Js),jr.copy(e.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(jr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,r=e*s+1;for(let o=0;o<i.length;o++)i[o]=n[r+o]}raycast(e,t){let i=this.matrixWorld,n=this.count;if(Xr.geometry=this.geometry,Xr.material=this.material,Xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jr.copy(this.boundingSphere),jr.applyMatrix4(i),e.ray.intersectsSphere(jr)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Js),nd.multiplyMatrices(i,Js),Xr.matrixWorld=nd,Xr.raycast(e,po);for(let r=0,o=po.length;r<o;r++){let l=po[r];l.instanceId=s,l.object=this,t.push(l)}po.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new mn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new hr(new Float32Array(n*this.count),n,this.count,sc,vi));let s=this.morphTexture.source.data.data,r=0;for(let c=0;c<i.length;c++)r+=i[c];let o=this.geometry.morphTargetsRelative?1:1-r,l=n*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hs=new ni,Zp=new Ae(.5,.5),mo=new R,ur=class{constructor(e=new Fi,t=new Fi,i=new Fi,n=new Fi,s=new Fi,r=new Fi){this.planes=[e,t,i,n,s,r]}set(e,t,i,n,s,r){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(r),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ui,i=!1){let n=this.planes,s=e.elements,r=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],m=s[8],b=s[9],g=s[10],p=s[11],x=s[12],E=s[13],v=s[14],y=s[15];if(n[0].setComponents(c-r,f-h,p-m,y-x).normalize(),n[1].setComponents(c+r,f+h,p+m,y+x).normalize(),n[2].setComponents(c+o,f+u,p+b,y+E).normalize(),n[3].setComponents(c-o,f-u,p-b,y-E).normalize(),i)n[4].setComponents(l,d,g,v).normalize(),n[5].setComponents(c-l,f-d,p-g,y-v).normalize();else if(n[4].setComponents(c-l,f-d,p-g,y-v).normalize(),t===Ui)n[5].setComponents(c+l,f+d,p+g,y+v).normalize();else if(t===nr)n[5].setComponents(l,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){hs.center.set(0,0,0);let t=Zp.distanceTo(e.center);return hs.radius=.7071067811865476+t,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(mo.x=n.normal.x>0?e.max.x:e.min.x,mo.y=n.normal.y>0?e.max.y:e.min.y,mo.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(mo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Wn=class extends si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Fo=new R,No=new R,rd=new Ve,Kr=new Vn,go=new ni,Ll=new R,ad=new R,gn=class extends ht{constructor(e=new ot,t=new Wn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)Fo.fromBufferAttribute(t,n-1),No.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Fo.distanceTo(No);e.setAttribute("lineDistance",new Ke(i,1))}else Ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),go.copy(i.boundingSphere),go.applyMatrix4(n),go.radius+=s,e.ray.intersectsSphere(go)===!1)return;rd.copy(n).invert(),Kr.copy(e.ray).applyMatrix4(rd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let b=f,g=m-1;b<g;b+=c){let p=h.getX(b),x=h.getX(b+1),E=bo(this,e,Kr,l,p,x,b);E&&t.push(E)}if(this.isLineLoop){let b=h.getX(m-1),g=h.getX(f),p=bo(this,e,Kr,l,b,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,r.start),m=Math.min(d.count,r.start+r.count);for(let b=f,g=m-1;b<g;b+=c){let p=bo(this,e,Kr,l,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){let b=bo(this,e,Kr,l,m-1,f,m-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function bo(a,e,t,i,n,s,r){let o=a.geometry.attributes.position;if(Fo.fromBufferAttribute(o,n),No.fromBufferAttribute(o,s),t.distanceSqToSegment(Fo,No,Ll,ad)>i)return;Ll.applyMatrix4(a.matrixWorld);let c=e.ray.origin.distanceTo(Ll);if(!(c<e.near||c>e.far))return{distance:c,point:ad.clone().applyMatrix4(a.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:a}}var od=new R,cd=new R,aa=class extends gn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)od.fromBufferAttribute(t,n),cd.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+od.distanceTo(cd);e.setAttribute("lineDistance",new Ke(i,1))}else Ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},oa=class extends gn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},dr=class extends si{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ld=new Ve,kl=new Vn,xo=new ni,vo=new R,xs=class extends ht{constructor(e=new ot,t=new dr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(n),xo.radius+=s,e.ray.intersectsSphere(xo)===!1)return;ld.copy(n).invert(),kl.copy(e.ray).applyMatrix4(ld);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let m=d,b=f;m<b;m++){let g=c.getX(m);vo.fromBufferAttribute(u,g),hd(vo,g,l,n,e,t,this)}}else{let d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let m=d,b=f;m<b;m++)vo.fromBufferAttribute(u,m),hd(vo,m,l,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function hd(a,e,t,i,n,s,r){let o=kl.distanceSqToPoint(a);if(o<t){let l=new R;kl.closestPointToPoint(a,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}var ca=class extends qt{constructor(e=[],t=Kn,i,n,s,r,o,l,c,h){super(e,t,i,n,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Et=class extends qt{constructor(e,t,i,n,s,r,o,l,c){super(e,t,i,n,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var qn=class extends qt{constructor(e,t,i=Vi,n,s,r,o=It,l=It,c,h=Ki,u=1){if(h!==Ki&&h!==Yn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,n,s,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ar(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Uo=class extends qn{constructor(e,t=Vi,i=Kn,n,s,r=It,o=It,l,c=Ki){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,n,s,r,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},la=class extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ee=class a extends ot{constructor(e=1,t=1,i=1,n=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:r};let o=this;n=Math.floor(n),s=Math.floor(s),r=Math.floor(r);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,i,t,e,r,s,0),m("z","y","x",1,-1,i,t,-e,r,s,1),m("x","z","y",1,1,e,i,t,n,r,2),m("x","z","y",1,-1,e,i,-t,n,r,3),m("x","y","z",1,-1,e,t,i,n,s,4),m("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(u,2));function m(b,g,p,x,E,v,y,M,A,_,T){let C=v/A,I=y/_,L=v/2,D=y/2,H=M/2,N=A+1,j=_+1,Y=0,B=0,V=new R;for(let Z=0;Z<j;Z++){let F=Z*I-D;for(let G=0;G<N;G++){let ee=G*C-L;V[b]=ee*x,V[g]=F*E,V[p]=H,c.push(V.x,V.y,V.z),V[b]=0,V[g]=0,V[p]=M>0?1:-1,h.push(V.x,V.y,V.z),u.push(G/A),u.push(1-Z/_),Y+=1}}for(let Z=0;Z<_;Z++)for(let F=0;F<A;F++){let G=d+F+N*Z,ee=d+F+N*(Z+1),Me=d+(F+1)+N*(Z+1),fe=d+(F+1)+N*Z;l.push(G,ee,fe),l.push(ee,Me,fe),B+=6}o.addGroup(f,B,T),f+=B,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ti=class a extends ot{constructor(e=1,t=1,i=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));let r=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,m=i*2+s,b=n+1,g=new R,p=new R;for(let x=0;x<=m;x++){let E=0,v=0,y=0,M=0;if(x<=i){let T=x/i,C=T*Math.PI/2;v=-h-e*Math.cos(C),y=e*Math.sin(C),M=-e*Math.cos(C),E=T*u}else if(x<=i+s){let T=(x-i)/s;v=-h+T*t,y=e,M=0,E=u+T*d}else{let T=(x-i-s)/i,C=T*Math.PI/2;v=h+e*Math.sin(C),y=e*Math.cos(C),M=e*Math.sin(C),E=u+d+T*u}let A=Math.max(0,Math.min(1,E/f)),_=0;x===0?_=.5/n:x===m&&(_=-.5/n);for(let T=0;T<=n;T++){let C=T/n,I=C*Math.PI*2,L=Math.sin(I),D=Math.cos(I);p.x=-y*D,p.y=v,p.z=y*L,o.push(p.x,p.y,p.z),g.set(-y*D,M,y*L),g.normalize(),l.push(g.x,g.y,g.z),c.push(C+_,A)}if(x>0){let T=(x-1)*b;for(let C=0;C<n;C++){let I=T+C,L=T+C+1,D=x*b+C,H=x*b+C+1;r.push(I,L,D),r.push(L,H,D)}}}this.setIndex(r),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},wi=class a extends ot{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let s=[],r=[],o=[],l=[],c=new R,h=new Ae;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*n;c.x=e*Math.cos(f),c.y=e*Math.sin(f),r.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(r[d]/e+1)/2,h.y=(r[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ke(r,3)),this.setAttribute("normal",new Ke(o,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Be=class a extends ot{constructor(e=1,t=1,i=1,n=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],u=[],d=[],f=[],m=0,b=[],g=i/2,p=0;x(),r===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(d,3)),this.setAttribute("uv",new Ke(f,2));function x(){let v=new R,y=new R,M=0,A=(t-e)/i;for(let _=0;_<=s;_++){let T=[],C=_/s,I=C*(t-e)+e;for(let L=0;L<=n;L++){let D=L/n,H=D*l+o,N=Math.sin(H),j=Math.cos(H);y.x=I*N,y.y=-C*i+g,y.z=I*j,u.push(y.x,y.y,y.z),v.set(N,A,j).normalize(),d.push(v.x,v.y,v.z),f.push(D,1-C),T.push(m++)}b.push(T)}for(let _=0;_<n;_++)for(let T=0;T<s;T++){let C=b[T][_],I=b[T+1][_],L=b[T+1][_+1],D=b[T][_+1];(e>0||T!==0)&&(h.push(C,I,D),M+=3),(t>0||T!==s-1)&&(h.push(I,L,D),M+=3)}c.addGroup(p,M,0),p+=M}function E(v){let y=m,M=new Ae,A=new R,_=0,T=v===!0?e:t,C=v===!0?1:-1;for(let L=1;L<=n;L++)u.push(0,g*C,0),d.push(0,C,0),f.push(.5,.5),m++;let I=m;for(let L=0;L<=n;L++){let H=L/n*l+o,N=Math.cos(H),j=Math.sin(H);A.x=T*j,A.y=g*C,A.z=T*N,u.push(A.x,A.y,A.z),d.push(0,C,0),M.x=N*.5+.5,M.y=j*.5*C+.5,f.push(M.x,M.y),m++}for(let L=0;L<n;L++){let D=y+L,H=I+L;v===!0?h.push(H,H+1,D):h.push(H+1,H,D),_+=3}c.addGroup(p,_,v===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},bn=class a extends Be{constructor(e=1,t=1,i=32,n=1,s=!1,r=0,o=Math.PI*2){super(0,e,t,i,n,s,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(e){return new a(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ko=class a extends ot{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let s=[],r=[];o(n),c(i),h(),this.setAttribute("position",new Ke(s,3)),this.setAttribute("normal",new Ke(s.slice(),3)),this.setAttribute("uv",new Ke(r,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let E=new R,v=new R,y=new R;for(let M=0;M<t.length;M+=3)f(t[M+0],E),f(t[M+1],v),f(t[M+2],y),l(E,v,y,x)}function l(x,E,v,y){let M=y+1,A=[];for(let _=0;_<=M;_++){A[_]=[];let T=x.clone().lerp(v,_/M),C=E.clone().lerp(v,_/M),I=M-_;for(let L=0;L<=I;L++)L===0&&_===M?A[_][L]=T:A[_][L]=T.clone().lerp(C,L/I)}for(let _=0;_<M;_++)for(let T=0;T<2*(M-_)-1;T++){let C=Math.floor(T/2);T%2===0?(d(A[_][C+1]),d(A[_+1][C]),d(A[_][C])):(d(A[_][C+1]),d(A[_+1][C+1]),d(A[_+1][C]))}}function c(x){let E=new R;for(let v=0;v<s.length;v+=3)E.x=s[v+0],E.y=s[v+1],E.z=s[v+2],E.normalize().multiplyScalar(x),s[v+0]=E.x,s[v+1]=E.y,s[v+2]=E.z}function h(){let x=new R;for(let E=0;E<s.length;E+=3){x.x=s[E+0],x.y=s[E+1],x.z=s[E+2];let v=g(x)/2/Math.PI+.5,y=p(x)/Math.PI+.5;r.push(v,1-y)}m(),u()}function u(){for(let x=0;x<r.length;x+=6){let E=r[x+0],v=r[x+2],y=r[x+4],M=Math.max(E,v,y),A=Math.min(E,v,y);M>.9&&A<.1&&(E<.2&&(r[x+0]+=1),v<.2&&(r[x+2]+=1),y<.2&&(r[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function f(x,E){let v=x*3;E.x=e[v+0],E.y=e[v+1],E.z=e[v+2]}function m(){let x=new R,E=new R,v=new R,y=new R,M=new Ae,A=new Ae,_=new Ae;for(let T=0,C=0;T<s.length;T+=9,C+=6){x.set(s[T+0],s[T+1],s[T+2]),E.set(s[T+3],s[T+4],s[T+5]),v.set(s[T+6],s[T+7],s[T+8]),M.set(r[C+0],r[C+1]),A.set(r[C+2],r[C+3]),_.set(r[C+4],r[C+5]),y.copy(x).add(E).add(v).divideScalar(3);let I=g(y);b(M,C+0,x,I),b(A,C+2,E,I),b(_,C+4,v,I)}}function b(x,E,v,y){y<0&&x.x===1&&(r[E]=x.x-1),v.x===0&&v.z===0&&(r[E]=y/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.vertices,e.indices,e.radius,e.detail)}},ha=class a extends ko{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new a(e.radius,e.detail)}};var pt=class a extends ot{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,r=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,d=t/l,f=[],m=[],b=[],g=[];for(let p=0;p<h;p++){let x=p*d-r;for(let E=0;E<c;E++){let v=E*u-s;m.push(v,-x,0),b.push(0,0,1),g.push(E/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){let E=x+c*p,v=x+c*(p+1),y=x+1+c*(p+1),M=x+1+c*p;f.push(E,v,M),f.push(v,y,M)}this.setIndex(f),this.setAttribute("position",new Ke(m,3)),this.setAttribute("normal",new Ke(b,3)),this.setAttribute("uv",new Ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.width,e.height,e.widthSegments,e.heightSegments)}},xn=class a extends ot{constructor(e=.5,t=1,i=32,n=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:r},i=Math.max(3,i),n=Math.max(1,n);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/n,f=new R,m=new Ae;for(let b=0;b<=n;b++){for(let g=0;g<=i;g++){let p=s+g/i*r;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let b=0;b<n;b++){let g=b*(i+1);for(let p=0;p<i;p++){let x=p+g,E=x,v=x+i+1,y=x+i+2,M=x+1;o.push(E,v,M),o.push(v,y,M)}}this.setIndex(o),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Nt=class a extends ot{constructor(e=1,t=32,i=16,n=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(r+o,Math.PI),c=0,h=[],u=new R,d=new R,f=[],m=[],b=[],g=[];for(let p=0;p<=i;p++){let x=[],E=p/i,v=r+E*o,y=e*Math.cos(v),M=Math.sqrt(e*e-y*y),A=0;p===0&&r===0?A=.5/t:p===i&&l===Math.PI&&(A=-.5/t);for(let _=0;_<=t;_++){let T=_/t,C=n+T*s;u.x=-M*Math.cos(C),u.y=y,u.z=M*Math.sin(C),m.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),g.push(T+A,1-E),x.push(c++)}h.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){let E=h[p][x+1],v=h[p][x],y=h[p+1][x],M=h[p+1][x+1];(p!==0||r>0)&&f.push(E,v,M),(p!==i-1||l<Math.PI)&&f.push(v,y,M)}this.setIndex(f),this.setAttribute("position",new Ke(m,3)),this.setAttribute("normal",new Ke(b,3)),this.setAttribute("uv",new Ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var xi=class a extends ot{constructor(e=1,t=.4,i=12,n=48,s=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s,thetaStart:r,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],u=[],d=new R,f=new R,m=new R;for(let b=0;b<=i;b++){let g=r+b/i*o;for(let p=0;p<=n;p++){let x=p/n*s;f.x=(e+t*Math.cos(g))*Math.cos(x),f.y=(e+t*Math.cos(g))*Math.sin(x),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),m.subVectors(f,d).normalize(),h.push(m.x,m.y,m.z),u.push(p/n),u.push(b/i)}}for(let b=1;b<=i;b++)for(let g=1;g<=n;g++){let p=(n+1)*b+g-1,x=(n+1)*(b-1)+g-1,E=(n+1)*(b-1)+g,v=(n+1)*b+g;l.push(p,x,v),l.push(x,E,v)}this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Rs(a){let e={};for(let t in a){e[t]={};for(let i in a[t]){let n=a[t][i];if(ud(n))n.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(ud(n[0])){let s=[];for(let r=0,o=n.length;r<o;r++)s[r]=n[r].clone();e[t][i]=s}else e[t][i]=n.slice();else e[t][i]=n}}return e}function oi(a){let e={};for(let t=0;t<a.length;t++){let i=Rs(a[t]);for(let n in i)e[n]=i[n]}return e}function ud(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function $p(a){let e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function lh(a){let e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var Cn={clone:Rs,merge:oi},Qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ct=class extends si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qp,this.fragmentShader=em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=$p(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:"m4",value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new le().setHex(n.value);break;case"v2":this.uniforms[i].value=new Ae().fromArray(n.value);break;case"v3":this.uniforms[i].value=new R().fromArray(n.value);break;case"v4":this.uniforms[i].value=new bt().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Xe().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Ve().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},fr=class extends Ct{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ue=class extends si{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ia,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},fi=class extends ue{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ua=class extends si{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ia,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.combine=Zo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Oo=class extends si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Bo=class extends si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Bn(a,e){return!a||a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function Eo(a){return a!==void 0&&a.inTangents!==void 0&&a.outTangents!==void 0}function tm(a){function e(n,s){return a[n]-a[s]}let t=a.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function dd(a,e,t){let i=a.length,n=new a.constructor(i);for(let s=0,r=0;r!==i;++s){let o=t[s]*e;for(let l=0;l!==e;++l)n[r++]=a[o+l]}return n}function im(a,e,t,i){let n=1,s=a[0];for(;s!==void 0&&s[i]===void 0;)s=a[n++];if(s===void 0)return;let r=s[i];if(r!==void 0)if(Array.isArray(r))do r=s[i],r!==void 0&&(e.push(s.time),t.push(...r)),s=a[n++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[i],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=a[n++];while(s!==void 0);else do r=s[i],r!==void 0&&(e.push(s.time),t.push(r)),s=a[n++];while(s!==void 0)}var Yi=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];e:{t:{let r;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break t}r=t.length;break i}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break t}r=i,i=0;break i}break e}for(;i<r;){let o=i+r>>>1;e<t[o]?r=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let r=0;r!==n;++r)t[r]=i[s+r];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},zo=class extends Yi{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:us,endingEnd:us}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,r=e+1,o=n[s],l=n[r];if(o===void 0)switch(this.getSettings_().endingStart){case ds:s=e,o=2*t-i;break;case Zr:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ds:r=e,l=2*i-t;break;case Zr:r=1,l=i+n[1]-n[0];break;default:r=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,i,n){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(i-t)/(n-t),b=m*m,g=b*m,p=-d*g+2*d*b-d*m,x=(1+d)*g+(-1.5-2*d)*b+(-.5+d)*m+1,E=(-1-f)*g+(1.5+f)*b+.5*m,v=f*g-f*b;for(let y=0;y!==o;++y)s[y]=p*r[h+y]+x*r[c+y]+E*r[l+y]+v*r[u+y];return s}},da=class extends Yi{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)s[d]=r[c+d]*u+r[l+d]*h;return s}},Go=class extends Yi{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Vo=class extends Yi{interpolate_(e,t,i,n){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(i-t)/(n-t),b=1-m;for(let g=0;g!==o;++g)s[g]=r[c+g]*b+r[l+g]*m;return s}let d=o*2,f=e-1;for(let m=0;m!==o;++m){let b=r[c+m],g=r[l+m],p=f*d+m*2,x=u[p],E=u[p+1],v=e*d+m*2,y=h[v],M=h[v+1],A=sm(i,t,x,y,n);s[m]=hf(A,b,E,M,g)}return s}};function hf(a,e,t,i,n){let s=1-a;return s*s*s*e+3*s*s*a*t+3*s*a*a*i+a*a*a*n}function nm(a,e,t,i,n){let s=1-a;return 3*s*s*(t-e)+6*s*a*(i-t)+3*a*a*(n-i)}function sm(a,e,t,i,n){let s=(a-e)/(n-e);for(let r=0;r<8;r++){let o=hf(s,e,t,i,n)-a;if(Math.abs(o)<1e-10)break;let l=nm(s,e,t,i,n);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var pi=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Bn(t,this.TimeBufferType),this.values=Bn(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Bn(e.times,Array),values:Bn(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n),Eo(e.settings)&&(i.settings={inTangents:Bn(e.settings.inTangents,Array),outTangents:Bn(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Vo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ps:t=this.InterpolantFactoryMethodDiscrete;break;case ms:t=this.InterpolantFactoryMethodLinear;break;case Mo:t=this.InterpolantFactoryMethodSmooth;break;case Ul:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ne("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ps;case this.InterpolantFactoryMethodLinear:return ms;case this.InterpolantFactoryMethodSmooth:return Mo;case this.InterpolantFactoryMethodBezier:return Ul}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;Eo(this.settings)&&(fd(this.settings.inTangents,e),fd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,n=i.length,s=0,r=n-1;for(;s!==n&&i[s]<e;)++s;for(;r!==-1&&i[r]>t;)--r;if(++r,s!==0||r!==n){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=i.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ge("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){Ge("KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(n!==void 0&&pp(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){Ge("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Mo,s=e.length-1,r=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let m=0;m!==i;++m){let b=t[u+m];if(b!==t[d+m]||b!==t[f+m]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];let u=o*i,d=r*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++r}}if(s>0){e[r]=e[s];for(let o=s*i,l=r*i,c=0;c!==i;++c)t[l+c]=t[o+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,Eo(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function fd(a,e){for(let t=0,i=a.length;t!==i;t+=2)a[t]*=e}pi.prototype.ValueTypeName="";pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=ms;var vn=class extends pi{constructor(e,t,i){super(e,t,i)}};vn.prototype.ValueTypeName="bool";vn.prototype.ValueBufferType=Array;vn.prototype.DefaultInterpolation=ps;vn.prototype.InterpolantFactoryMethodLinear=void 0;vn.prototype.InterpolantFactoryMethodSmooth=void 0;var fa=class extends pi{constructor(e,t,i,n){super(e,t,i,n)}};fa.prototype.ValueTypeName="color";var _n=class extends pi{constructor(e,t,i,n){super(e,t,i,n)}};_n.prototype.ValueTypeName="number";var Wo=class extends Yi{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),c=e*o;for(let h=c+o;c!==h;c+=4)Dt.slerpFlat(s,0,r,c-o,r,c,l);return s}},yn=class extends pi{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new Wo(this.times,this.values,this.getValueSize(),e)}};yn.prototype.ValueTypeName="quaternion";yn.prototype.InterpolantFactoryMethodSmooth=void 0;var Mn=class extends pi{constructor(e,t,i){super(e,t,i)}};Mn.prototype.ValueTypeName="string";Mn.prototype.ValueBufferType=Array;Mn.prototype.DefaultInterpolation=ps;Mn.prototype.InterpolantFactoryMethodLinear=void 0;Mn.prototype.InterpolantFactoryMethodSmooth=void 0;var Xn=class extends pi{constructor(e,t,i,n){super(e,t,i,n)}};Xn.prototype.ValueTypeName="vector";var vs=class{constructor(e="",t=-1,i=[],n=kc){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=ki(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,n=1/(e.fps||1);for(let r=0,o=i.length;r!==o;++r)t.push(am(i[r]).scale(n));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,r=i.length;s!==r;++s)t.push(pi.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){let s=t.length,r=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let h=tm(l);l=dd(l,1,h),c=dd(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new _n(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,r)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(s);if(h&&h.length>1){let u=h[1],d=n[u];d||(n[u]=d=[]),d.push(c)}}let r=[];for(let o in n)r.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return r}resetDuration(){let e=this.tracks,t=0;for(let i=0,n=e.length;i!==n;++i){let s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function rm(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _n;case"vector":case"vector2":case"vector3":case"vector4":return Xn;case"color":return fa;case"quaternion":return yn;case"bool":case"boolean":return vn;case"string":return Mn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function am(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=rm(a.type);if(a.times===void 0){let i=[],n=[];im(a.keys,i,n,"value"),a.times=i,a.values=n}let t;return e.parse!==void 0?t=e.parse(a):t=new e(a.name,a.times,a.values,a.interpolation),Eo(a.settings)&&(t.settings={inTangents:Bn(a.settings.inTangents,Float32Array),outTangents:Bn(a.settings.outTangents,Float32Array)}),t}var ji={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(pd(a)||(this.files[a]=e))},get:function(a){if(this.enabled!==!1&&!pd(a))return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};function pd(a){try{let e=a.slice(a.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var pr=class{constructor(e,t,i){let n=this,s=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,n.onProgress!==void 0&&n.onProgress(h,r,o),r===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},uf=new pr,Ji=class{constructor(e){this.manager=e!==void 0?e:uf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ji.DEFAULT_MATERIAL_NAME="__DEFAULT";var hn={},Ol=class extends Error{constructor(e,t){super(e),this.response=t}},mr=class extends Ji{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=ji.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(hn[e]!==void 0){hn[e].push({onLoad:t,onProgress:i,onError:n});return}hn[e]=[],hn[e].push({onLoad:t,onProgress:i,onError:n});let r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ne("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=hn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,b=0,g=new ReadableStream({start(p){x();function x(){u.read().then(({done:E,value:v})=>{if(E)p.close();else{b+=v.byteLength;let y=new ProgressEvent("progress",{lengthComputable:m,loaded:b,total:f});for(let M=0,A=h.length;M<A;M++){let _=h[M];_.onProgress&&_.onProgress(y)}p.enqueue(v),x()}},E=>{p.error(E)})}}});return new Response(g)}else throw new Ol(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{ji.add(`file:${e}`,c);let h=hn[e];delete hn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=hn[e];if(h===void 0)throw this.manager.itemError(e),c;delete hn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Zs=new WeakMap,qo=class extends Ji{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,r=ji.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);else{let u=Zs.get(r);u===void 0&&(u=[],Zs.set(r,u)),u.push({onLoad:t,onError:n})}return r}let o=sr("img");function l(){h(),t&&t(this);let u=Zs.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Zs.delete(this),s.manager.itemEnd(e)}function c(u){h(),n&&n(u),ji.remove(`image:${e}`);let d=Zs.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}Zs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ji.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var _s=class extends Ji{constructor(e){super(e)}load(e,t,i,n){let s=new qt,r=new qo(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}},ys=class extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new le(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Sn=class extends ys{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Dl=new Ve,md=new R,gd=new R,gr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ur,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;md.setFromMatrixPosition(e.matrixWorld),t.position.copy(md),gd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){Dl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Dl,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,r=n?n.z/s.x:1,o=n?n.w/s.y:1,l=n?n.x/s.x:0,c=n?n.y/s.y:0;e.coordinateSystem===nr||e.reversedDepth?t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},_o=new R,yo=new Dt,Xi=new R,pa=class extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_o,yo,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,yo,Xi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(_o,yo,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,yo,Xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},On=new R,bd=new Ae,xd=new Ae,Lt=class extends pa{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){On.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(On.x,On.y).multiplyScalar(-e/On.z),On.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(On.x,On.y).multiplyScalar(-e/On.z)}getViewSize(e,t){return this.getViewBounds(e,bd,xd),t.subVectors(xd,bd)}setViewOffset(e,t,i,n,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Yr*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*n/l,t-=r.offsetY*i/c,n*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Bl=class extends gr{constructor(){super(new Lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=gs*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||n!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},En=class extends ys{constructor(e,t,i=0,n=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=i,this.angle=n,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new Bl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},zl=class extends gr{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0}},ri=class extends ys{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new zl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Zi=class extends pa{constructor(e=-1,t=1,i=1,n=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,r=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Gl=class extends gr{constructor(){super(new Zi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Tn=class extends ys{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new Gl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var wn=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Fl=new WeakMap,ma=class extends Ji{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ne("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ne("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,r=ji.get(`image-bitmap:${e}`);if(r!==void 0){if(s.manager.itemStart(e),r.then){r.then(c=>{Fl.has(r)===!0?(n&&n(Fl.get(r)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return ji.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){n&&n(c),Fl.set(l,c),ji.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});ji.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var $s=-90,Qs=1,Xo=class extends ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Lt($s,Qs,e,t);n.layers=this.layers,this.add(n);let s=new Lt($s,Qs,e,t);s.layers=this.layers,this.add(s);let r=new Lt($s,Qs,e,t);r.layers=this.layers,this.add(r);let o=new Lt($s,Qs,e,t);o.layers=this.layers,this.add(o);let l=new Lt($s,Qs,e,t);l.layers=this.layers,this.add(l);let c=new Lt($s,Qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,r,o,l]=t;for(let c of t)this.remove(c);if(e===Ui)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,r,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,2,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},jo=class extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ga=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=om.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function om(){this._document.hidden===!1&&this.reset()}var Ko=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,s,r;switch(t){case"quaternion":n=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,n=this.valueSize,s=e*n+n,r=this.cumulativeWeight;if(r===0){for(let o=0;o!==n;++o)i[s+o]=i[o];r=t}else{r+=t;let o=t/r;this._mixBufferRegion(i,s,0,o,n)}this.cumulativeWeight=r}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,n=e*t+t,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-s,t)}r>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,n);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let s=i,r=n;s!==r;++s)t[s]=t[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,s){if(n>=.5)for(let r=0;r!==s;++r)e[t+r]=e[i+r]}_slerp(e,t,i,n){Dt.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,s){let r=this._workIndex*s;Dt.multiplyQuaternionsFlat(e,r,e,t,e,i),Dt.slerpFlat(e,t,e,t,e,r,n)}_lerp(e,t,i,n,s){let r=1-n;for(let o=0;o!==s;++o){let l=t+o;e[l]=e[l]*r+e[i+o]*n}}_lerpAdditive(e,t,i,n,s){for(let r=0;r!==s;++r){let o=t+r;e[o]=e[o]+e[i+r]*n}}},hh="\\[\\]\\.:\\/",cm=new RegExp("["+hh+"]","g"),uh="[^"+hh+"]",lm="[^"+hh.replace("\\.","")+"]",hm=/((?:WC+[\/:])*)/.source.replace("WC",uh),um=/(WCOD+)?/.source.replace("WCOD",lm),dm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uh),fm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uh),pm=new RegExp("^"+hm+um+dm+fm+"$"),mm=["material","materials","bones","map"],Vl=class{constructor(e,t,i){let n=i||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},yt=class a{constructor(e,t,i){this.path=t,this.parsedPath=i||a.parseTrackName(t),this.node=a.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new a.Composite(e,t,i):new a(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cm,"")}static parseTrackName(e){let t=pm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);mm.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=a.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let r=e[n];if(r===void 0){let c=t.nodeName;Ge("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=Vl;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Yo=class{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;let s=t.tracks,r=s.length,o=new Array(r),l={endingStart:us,endingEnd:us};for(let c=0;c!==r;++c){let h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=qd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){let n=this._clip.duration,s=e._clip.duration,r=s/n,o=n/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,r,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let n=this._mixer,s=n.time,r=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/r,c[1]=t/r,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);let r=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case jd:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(r),c[h].accumulateAdditive(o);break;case kc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(r),c[h].accumulate(n,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,n=this.time+e,s=this._loopCount,r=i===Xd;if(e===0)return s===-1?n:r&&(s&1)===1?t-n:n;if(i===Zn){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),n>=t||n<0){let o=Math.floor(n/t);n-=t*o,s+=Math.abs(o);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=s,this.time=n;if(r&&(s&1)===1)return t-n}return n}_setEndings(e,t,i){let n=this._interpolantSettings;i?(n.endingStart=ds,n.endingEnd=ds):(e?n.endingStart=this.zeroSlopeAtStart?ds:us:n.endingStart=Zr,t?n.endingEnd=this.zeroSlopeAtEnd?ds:us:n.endingEnd=Zr)}_scheduleFading(e,t,i){let n=this._mixer,s=n.time,r=this._weightInterpolant;r===null&&(r=n._lendControlInterpolant(),this._weightInterpolant=r);let o=r.parameterPositions,l=r.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=i,this}},gm=new Float32Array(1),Ms=class extends Oi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let i=e._localRoot||this._root,n=e._clip.tracks,s=n.length,r=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){let d=n[u],f=d.name,m=h[f];if(m!==void 0)++m.referenceCount,r[u]=m;else{if(m=r[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}let b=t&&t._propertyBindings[u].binding.parsedPath;m=new Ko(yt.create(i,f,b),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),r[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,n=e._clip.uuid,s=this._actionsByClip[n];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,n,i)}let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let n=this._actions,s=this._actionsByClip,r=s[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=r;else{let o=r.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=n.length,n.push(e),r.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,r=this._actionsByClip,o=r[s],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete r[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){let n=this._bindingsByRootAndName,s=this._bindings,r=n[t];r===void 0&&(r={},n[t]=r),r[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,n=i.rootNode.uuid,s=i.path,r=this._bindingsByRootAndName,o=r[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete r[n]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new da(new Float32Array(2),new Float32Array(2),1,gm),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,s=t[n];e.__cacheIndex=n,t[n]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){let n=t||this._root,s=n.uuid,r=typeof e=="string"?vs.findByName(n,e):e,o=r!==null?r.uuid:e,l=this._actionsByClip[o],c=null;if(i===void 0&&(r!==null?i=r.blendMode:i=kc),l!==void 0){let u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],r===null&&(r=c._clip)}if(r===null)return null;let h=new Yo(this,r,t,i);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(e,t){let i=t||this._root,n=i.uuid,s=typeof e=="string"?vs.findByName(i,e):e,r=s?s.uuid:e,o=this._actionsByClip[r];return o!==void 0&&o.actionByRoot[n]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,n=this.time+=e,s=Math.sign(e),r=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,s,r);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){let r=s.knownActions;for(let o=0,l=r.length;o!==l;++o){let c=r[o];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let r in i){let o=i[r].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let n=this._bindingsByRootAndName,s=n[t];if(s!==void 0)for(let r in s){let o=s[r];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}};var vd=new Ve,di=class{constructor(e,t,i=0,n=1/0){this.ray=new Vn(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new or,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ge("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return vd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vd),this}intersectObject(e,t=!0,i=[]){return Wl(e,this,i,t),i.sort(_d),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)Wl(e[n],this,i,t);return i.sort(_d),i}};function _d(a,e){return a.distance-e.distance}function Wl(a,e,t,i){let n=!0;if(a.layers.test(e.layers)&&a.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let s=a.children;for(let r=0,o=s.length;r<o;r++)Wl(s[r],e,t,!0)}}var bh=class bh{constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=n,this}};bh.prototype.isMatrix2=!0;var ql=bh;function dh(a,e,t,i){let n=bm(i);switch(t){case ih:return a*e;case sc:return a*e/n.components*n.byteLength;case rc:return a*e/n.components*n.byteLength;case Jn:return a*e*2/n.components*n.byteLength;case ac:return a*e*2/n.components*n.byteLength;case nh:return a*e*3/n.components*n.byteLength;case _i:return a*e*4/n.components*n.byteLength;case oc:return a*e*4/n.components*n.byteLength;case Ea:case Ta:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case wa:case Aa:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case lc:case uc:return Math.max(a,16)*Math.max(e,8)/4;case cc:case hc:return Math.max(a,8)*Math.max(e,8)/2;case dc:case fc:case mc:case gc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case pc:case Ra:case bc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case xc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case vc:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case _c:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case yc:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case wc:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Cc:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Pc:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Ic:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Hc:case Lc:case Dc:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Fc:case Nc:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Ca:case Uc:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bm(a){switch(a){case mi:case $l:return{byteLength:1,components:1};case vr:case Ql:case Xt:return{byteLength:2,components:1};case ic:case nc:return{byteLength:2,components:4};case Vi:case tc:case vi:return{byteLength:4,components:1};case eh:case th:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Lf(){let a=null,e=!1,t=null,i=null;function n(s,r){i=a.requestAnimationFrame(n),t(s,r)}return{start:function(){e!==!0&&t!==null&&a!==null&&(i=a.requestAnimationFrame(n),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function vm(a){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=a.createBuffer();a.bindBuffer(l,d),a.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=a.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=a.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=a.HALF_FLOAT:f=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=a.SHORT;else if(c instanceof Uint32Array)f=a.UNSIGNED_INT;else if(c instanceof Int32Array)f=a.INT;else if(c instanceof Int8Array)f=a.BYTE;else if(c instanceof Uint8Array)f=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(a.bindBuffer(c,o),u.length===0)a.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],b=u[f];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++d,u[d]=b)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let b=u[f];a.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(a.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:r}}var _m=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ym=`#ifdef USE_ALPHAHASH
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
#endif`,Mm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Em=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wm=`#ifdef USE_AOMAP
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
#endif`,Am=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rm=`#ifdef USE_BATCHING
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
#endif`,Cm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lm=`#ifdef USE_IRIDESCENCE
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
#endif`,Dm=`#ifdef USE_BUMPMAP
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
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Vm=`#define PI 3.141592653589793
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
} // validated`,Wm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qm=`vec3 transformedNormal = objectNormal;
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
#endif`,Xm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Km=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ym=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$m=`#ifdef USE_ENVMAP
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
#endif`,Qm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,e0=`#ifdef USE_ENVMAP
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
#endif`,t0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i0=`#ifdef USE_ENVMAP
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
#endif`,n0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o0=`#ifdef USE_GRADIENTMAP
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
}`,c0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,h0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,d0=`#ifdef USE_ENVMAP
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
#endif`,f0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b0=`PhysicalMaterial material;
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
#endif`,x0=`uniform sampler2D dfgLUT;
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
}`,v0=`
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
#endif`,_0=`#if defined( RE_IndirectDiffuse )
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
#endif`,y0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,S0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,E0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,P0=`#if defined( USE_POINTS_UV )
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
#endif`,I0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,F0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N0=`#ifdef USE_MORPHTARGETS
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
#endif`,U0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,O0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,V0=`#ifdef USE_NORMALMAP
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
#endif`,W0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,q0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,K0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,J0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Z0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ng=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rg=`float getShadowMask() {
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
}`,ag=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,og=`#ifdef USE_SKINNING
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
#endif`,cg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lg=`#ifdef USE_SKINNING
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
#endif`,hg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pg=`#ifdef USE_TRANSMISSION
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
#endif`,mg=`#ifdef USE_TRANSMISSION
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yg=`uniform sampler2D t2D;
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
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`#include <common>
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
}`,Ag=`#if DEPTH_PACKING == 3200
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
}`,Rg=`#define DISTANCE
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
}`,Cg=`#define DISTANCE
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
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ig=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hg=`uniform float scale;
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Dg=`#include <common>
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
}`,Fg=`uniform vec3 diffuse;
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
}`,Ng=`#define LAMBERT
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
}`,Ug=`#define LAMBERT
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
}`,kg=`#define MATCAP
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
}`,Og=`#define MATCAP
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
}`,Bg=`#define NORMAL
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
}`,zg=`#define NORMAL
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
}`,Gg=`#define PHONG
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
}`,Vg=`#define PHONG
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
}`,Wg=`#define STANDARD
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
}`,qg=`#define STANDARD
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
}`,Xg=`#define TOON
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
}`,jg=`#define TOON
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
}`,Kg=`uniform float size;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,Jg=`#include <common>
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
}`,Zg=`uniform vec3 color;
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
}`,$g=`uniform float rotation;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:_m,alphahash_pars_fragment:ym,alphamap_fragment:Mm,alphamap_pars_fragment:Sm,alphatest_fragment:Em,alphatest_pars_fragment:Tm,aomap_fragment:wm,aomap_pars_fragment:Am,batching_pars_vertex:Rm,batching_vertex:Cm,begin_vertex:Pm,beginnormal_vertex:Im,bsdfs:Hm,iridescence_fragment:Lm,bumpmap_pars_fragment:Dm,clipping_planes_fragment:Fm,clipping_planes_pars_fragment:Nm,clipping_planes_pars_vertex:Um,clipping_planes_vertex:km,color_fragment:Om,color_pars_fragment:Bm,color_pars_vertex:zm,color_vertex:Gm,common:Vm,cube_uv_reflection_fragment:Wm,defaultnormal_vertex:qm,displacementmap_pars_vertex:Xm,displacementmap_vertex:jm,emissivemap_fragment:Km,emissivemap_pars_fragment:Ym,colorspace_fragment:Jm,colorspace_pars_fragment:Zm,envmap_fragment:$m,envmap_common_pars_fragment:Qm,envmap_pars_fragment:e0,envmap_pars_vertex:t0,envmap_physical_pars_fragment:d0,envmap_vertex:i0,fog_vertex:n0,fog_pars_vertex:s0,fog_fragment:r0,fog_pars_fragment:a0,gradientmap_pars_fragment:o0,lightmap_pars_fragment:c0,lights_lambert_fragment:l0,lights_lambert_pars_fragment:h0,lights_pars_begin:u0,lights_toon_fragment:f0,lights_toon_pars_fragment:p0,lights_phong_fragment:m0,lights_phong_pars_fragment:g0,lights_physical_fragment:b0,lights_physical_pars_fragment:x0,lights_fragment_begin:v0,lights_fragment_maps:_0,lights_fragment_end:y0,lightprobes_pars_fragment:M0,logdepthbuf_fragment:S0,logdepthbuf_pars_fragment:E0,logdepthbuf_pars_vertex:T0,logdepthbuf_vertex:w0,map_fragment:A0,map_pars_fragment:R0,map_particle_fragment:C0,map_particle_pars_fragment:P0,metalnessmap_fragment:I0,metalnessmap_pars_fragment:H0,morphinstance_vertex:L0,morphcolor_vertex:D0,morphnormal_vertex:F0,morphtarget_pars_vertex:N0,morphtarget_vertex:U0,normal_fragment_begin:k0,normal_fragment_maps:O0,normal_pars_fragment:B0,normal_pars_vertex:z0,normal_vertex:G0,normalmap_pars_fragment:V0,clearcoat_normal_fragment_begin:W0,clearcoat_normal_fragment_maps:q0,clearcoat_pars_fragment:X0,iridescence_pars_fragment:j0,opaque_fragment:K0,packing:Y0,premultiplied_alpha_fragment:J0,project_vertex:Z0,dithering_fragment:$0,dithering_pars_fragment:Q0,roughnessmap_fragment:eg,roughnessmap_pars_fragment:tg,shadowmap_pars_fragment:ig,shadowmap_pars_vertex:ng,shadowmap_vertex:sg,shadowmask_pars_fragment:rg,skinbase_vertex:ag,skinning_pars_vertex:og,skinning_vertex:cg,skinnormal_vertex:lg,specularmap_fragment:hg,specularmap_pars_fragment:ug,tonemapping_fragment:dg,tonemapping_pars_fragment:fg,transmission_fragment:pg,transmission_pars_fragment:mg,uv_pars_fragment:gg,uv_pars_vertex:bg,uv_vertex:xg,worldpos_vertex:vg,background_vert:_g,background_frag:yg,backgroundCube_vert:Mg,backgroundCube_frag:Sg,cube_vert:Eg,cube_frag:Tg,depth_vert:wg,depth_frag:Ag,distance_vert:Rg,distance_frag:Cg,equirect_vert:Pg,equirect_frag:Ig,linedashed_vert:Hg,linedashed_frag:Lg,meshbasic_vert:Dg,meshbasic_frag:Fg,meshlambert_vert:Ng,meshlambert_frag:Ug,meshmatcap_vert:kg,meshmatcap_frag:Og,meshnormal_vert:Bg,meshnormal_frag:zg,meshphong_vert:Gg,meshphong_frag:Vg,meshphysical_vert:Wg,meshphysical_frag:qg,meshtoon_vert:Xg,meshtoon_frag:jg,points_vert:Kg,points_frag:Yg,shadow_vert:Jg,shadow_frag:Zg,sprite_vert:$g,sprite_frag:Qg},_e={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},en={basic:{uniforms:oi([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:oi([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new le(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:oi([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:oi([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:oi([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new le(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:oi([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:oi([_e.points,_e.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:oi([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:oi([_e.common,_e.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:oi([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:oi([_e.sprite,_e.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:oi([_e.common,_e.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:oi([_e.lights,_e.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};en.physical={uniforms:oi([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var zc={r:0,b:0,g:0},eb=new Ve,Df=new Xe;Df.set(-1,0,0,0,1,0,0,0,1);function tb(a,e,t,i,n,s){let r=new le(0),o=n===!0?0:1,l,c,h=null,u=0,d=null;function f(x){let E=x.isScene===!0?x.background:null;if(E&&E.isTexture){let v=x.backgroundBlurriness>0;E=e.get(E,v)}return E}function m(x){let E=!1,v=f(x);v===null?g(r,o):v&&v.isColor&&(g(v,1),E=!0);let y=a.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(a.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function b(x,E){let v=f(E);v&&(v.isCubeTexture||v.mapping===Sa)?(c===void 0&&(c=new ve(new Ee(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:Rs(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,M,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(eb.makeRotationFromEuler(E.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Df),c.material.toneMapped=Ze.getTransfer(v.colorSpace)!==lt,(h!==v||u!==v.version||d!==a.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=a.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ve(new pt(2,2),new Ct({name:"BackgroundMaterial",uniforms:Rs(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(v.colorSpace)!==lt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==a.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=a.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,E){x.getRGB(zc,lh(a)),t.buffers.color.setClear(zc.r,zc.g,zc.b,E,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(x,E=1){r.set(x),o=E,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,g(r,o)},render:m,addToRenderList:b,dispose:p}}function ib(a,e){let t=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},n=d(null),s=n,r=!1;function o(I,L,D,H,N){let j=!1,Y=u(I,H,D,L);s!==Y&&(s=Y,c(s.object)),j=f(I,H,D,N),j&&m(I,H,D,N),N!==null&&e.update(N,a.ELEMENT_ARRAY_BUFFER),(j||r)&&(r=!1,v(I,L,D,H),N!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return a.createVertexArray()}function c(I){return a.bindVertexArray(I)}function h(I){return a.deleteVertexArray(I)}function u(I,L,D,H){let N=H.wireframe===!0,j=i[L.id];j===void 0&&(j={},i[L.id]=j);let Y=I.isInstancedMesh===!0?I.id:0,B=j[Y];B===void 0&&(B={},j[Y]=B);let V=B[D.id];V===void 0&&(V={},B[D.id]=V);let Z=V[N];return Z===void 0&&(Z=d(l()),V[N]=Z),Z}function d(I){let L=[],D=[],H=[];for(let N=0;N<t;N++)L[N]=0,D[N]=0,H[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:D,attributeDivisors:H,object:I,attributes:{},index:null}}function f(I,L,D,H){let N=s.attributes,j=L.attributes,Y=0,B=D.getAttributes();for(let V in B)if(B[V].location>=0){let F=N[V],G=j[V];if(G===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(G=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(G=I.instanceColor)),F===void 0||F.attribute!==G||G&&F.data!==G.data)return!0;Y++}return s.attributesNum!==Y||s.index!==H}function m(I,L,D,H){let N={},j=L.attributes,Y=0,B=D.getAttributes();for(let V in B)if(B[V].location>=0){let F=j[V];F===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(F=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(F=I.instanceColor));let G={};G.attribute=F,F&&F.data&&(G.data=F.data),N[V]=G,Y++}s.attributes=N,s.attributesNum=Y,s.index=H}function b(){let I=s.newAttributes;for(let L=0,D=I.length;L<D;L++)I[L]=0}function g(I){p(I,0)}function p(I,L){let D=s.newAttributes,H=s.enabledAttributes,N=s.attributeDivisors;D[I]=1,H[I]===0&&(a.enableVertexAttribArray(I),H[I]=1),N[I]!==L&&(a.vertexAttribDivisor(I,L),N[I]=L)}function x(){let I=s.newAttributes,L=s.enabledAttributes;for(let D=0,H=L.length;D<H;D++)L[D]!==I[D]&&(a.disableVertexAttribArray(D),L[D]=0)}function E(I,L,D,H,N,j,Y){Y===!0?a.vertexAttribIPointer(I,L,D,N,j):a.vertexAttribPointer(I,L,D,H,N,j)}function v(I,L,D,H){b();let N=H.attributes,j=D.getAttributes(),Y=L.defaultAttributeValues;for(let B in j){let V=j[B];if(V.location>=0){let Z=N[B];if(Z===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor)),Z!==void 0){let F=Z.normalized,G=Z.itemSize,ee=e.get(Z);if(ee===void 0)continue;let Me=ee.buffer,fe=ee.type,He=ee.bytesPerElement,W=fe===a.INT||fe===a.UNSIGNED_INT||Z.gpuType===tc;if(Z.isInterleavedBufferAttribute){let $=Z.data,ae=$.stride,Te=Z.offset;if($.isInstancedInterleavedBuffer){for(let oe=0;oe<V.locationSize;oe++)p(V.location+oe,$.meshPerAttribute);I.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let oe=0;oe<V.locationSize;oe++)g(V.location+oe);a.bindBuffer(a.ARRAY_BUFFER,Me);for(let oe=0;oe<V.locationSize;oe++)E(V.location+oe,G/V.locationSize,fe,F,ae*He,(Te+G/V.locationSize*oe)*He,W)}else{if(Z.isInstancedBufferAttribute){for(let $=0;$<V.locationSize;$++)p(V.location+$,Z.meshPerAttribute);I.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let $=0;$<V.locationSize;$++)g(V.location+$);a.bindBuffer(a.ARRAY_BUFFER,Me);for(let $=0;$<V.locationSize;$++)E(V.location+$,G/V.locationSize,fe,F,G*He,G/V.locationSize*$*He,W)}}else if(Y!==void 0){let F=Y[B];if(F!==void 0)switch(F.length){case 2:a.vertexAttrib2fv(V.location,F);break;case 3:a.vertexAttrib3fv(V.location,F);break;case 4:a.vertexAttrib4fv(V.location,F);break;default:a.vertexAttrib1fv(V.location,F)}}}}x()}function y(){T();for(let I in i){let L=i[I];for(let D in L){let H=L[D];for(let N in H){let j=H[N];for(let Y in j)h(j[Y].object),delete j[Y];delete H[N]}}delete i[I]}}function M(I){if(i[I.id]===void 0)return;let L=i[I.id];for(let D in L){let H=L[D];for(let N in H){let j=H[N];for(let Y in j)h(j[Y].object),delete j[Y];delete H[N]}}delete i[I.id]}function A(I){for(let L in i){let D=i[L];for(let H in D){let N=D[H];if(N[I.id]===void 0)continue;let j=N[I.id];for(let Y in j)h(j[Y].object),delete j[Y];delete N[I.id]}}}function _(I){for(let L in i){let D=i[L],H=I.isInstancedMesh===!0?I.id:0,N=D[H];if(N!==void 0){for(let j in N){let Y=N[j];for(let B in Y)h(Y[B].object),delete Y[B];delete N[j]}delete D[H],Object.keys(D).length===0&&delete i[L]}}}function T(){C(),r=!0,s!==n&&(s=n,c(s.object))}function C(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:y,releaseStatesOfGeometry:M,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:b,enableAttribute:g,disableUnusedAttributes:x}}function nb(a,e,t){let i;function n(l){i=l}function s(l,c){a.drawArrays(i,l,c),t.update(c,i,1)}function r(l,c,h){h!==0&&(a.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,i,1)}this.setMode=n,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function sb(a,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){return!(A!==_i&&i.convert(A)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let _=A===Xt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==mi&&A!==vi&&!_&&i.convert(A)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ne("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),m=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_TEXTURE_SIZE),g=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),p=a.getParameter(a.MAX_VERTEX_ATTRIBS),x=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),E=a.getParameter(a.MAX_VARYING_VECTORS),v=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),y=a.getParameter(a.MAX_SAMPLES),M=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:v,maxSamples:y,samples:M}}function rb(a){let e=this,t=null,i=0,n=!1,s=!1,r=new Fi,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,p=a.get(u);if(!n||m===null||m.length===0||s&&!g)s?h(null):c();else{let x=s?0:i,E=x*4,v=p.clippingState||null;l.value=v,v=h(m,d,E,f);for(let y=0;y!==E;++y)v[y]=t[y];p.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,m){let b=u!==null?u.length:0,g=null;if(b!==0){if(g=l.value,m!==!0||g===null){let p=f+b*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,v=f;E!==b;++E,v+=4)r.copy(u[E]).applyMatrix4(x,o),r.normal.toArray(g,v),g[v+3]=r.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}var Sr=4,ab=6,ob=20,cb=256,Ha=new Zi,df=new le,xh=null,vh=0,_h=0,yh=!1,lb=new R,Cs=new R,Tr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,s={}){let{size:r=256,position:o=lb}=s;xh=this._renderer.getRenderTarget(),vh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(xh,vh,_h),this._renderer.xr.enabled=yh,e.scissorTest=!1,Mr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Kn||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xh=this._renderer.getRenderTarget(),vh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Xt,format:_i,colorSpace:hi,depthBuffer:!1},n=ff(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ff(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=hb(s)),this._blurMaterial=db(s,e,t),this._ggxMaterial=ub(s,e,t)}return n}_compileMaterial(e){let t=new ve(new ot,e);this._renderer.compile(t,Ha)}_sceneToCubeUV(e,t,i,n,s){let l=new Lt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(df),u.toneMapping=zi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(n),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ve(new Ee,new ut({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,g=b.material,p=!1,x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,p=!0):(g.color.copy(df),p=!0);for(let E=0;E<6;E++){let v=E%3;v===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[E],s.y,s.z)):v===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[E]));let y=this._cubeSize;Mr(n,v*y,E>2?y:0,y,y),u.setRenderTarget(n),p&&u.render(b,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=x}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===Kn||e.mapping===ws;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pf());let s=n?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;Mr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(r,Ha)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let n=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:m}=this,b=this._sizeLods[i],g=3*b*(i>m-Sr?i-m+Sr:0),p=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,Mr(s,g,p,3*b,2*b),n.setRenderTarget(s),n.render(o,Ha),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,Mr(e,g,p,3*b,2*b),n.setRenderTarget(e),n.render(o,Ha)}_blur(e,t,i,n){let s=this._pingPongRenderTarget,r=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,r),this._blurPass(s,e,i,i,r)}_blurPass(e,t,i,n,s){let r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[n];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[n],u=3*h*(n>this._lodMax-Sr?n-this._lodMax+Sr:0),d=4*(this._cubeSize-h);Mr(t,u,d,3*h,2*h),r.setRenderTarget(t),r.render(l,Ha)}};function hb(a){let e=[],t=[],i=a,n=a-Sr+1+ab;for(let s=0;s<n;s++){let r=Math.pow(2,i);e.push(r);let o=1/(r-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,m=new Float32Array(f*d*u),b=new Float32Array(f*d*u);for(let p=0;p<u;p++){let x=p%3*2/3-1,E=p>2?0:-1,v=[x,E,0,x+2/3,E,0,x+2/3,E+1,0,x,E,0,x+2/3,E+1,0,x,E+1,0];m.set(v,f*d*p);for(let y=0;y<d;y++){let M=h[y*2]*2-1,A=h[y*2+1]*2-1;p===0?Cs.set(1,A,M):p===1?Cs.set(-M,1,-A):p===2?Cs.set(-M,A,1):p===3?Cs.set(-1,A,-M):p===4?Cs.set(-M,-1,A):Cs.set(M,A,-1),Cs.toArray(b,(p*d+y)*f)}}let g=new ot;g.setAttribute("position",new Rt(m,f)),g.setAttribute("outputDirection",new Rt(b,f)),t.push(new ve(g,null)),i>Sr&&i--}return{lodMeshes:t,sizeLods:e}}function ff(a,e,t){let i=new Ft(a,e,t);return i.texture.mapping=Sa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Mr(a,e,t,i,n){a.viewport.set(e,t,i,n),a.scissor.set(e,t,i,n)}function ub(a,e,t){return new Ct({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qc(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function db(a,e,t){return new Ct({name:"SphericalGaussianBlur",defines:{SAMPLES:ob,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:qc(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function pf(){return new Ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qc(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function mf(){return new Ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function qc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Vc=class extends Ft{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new ca(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Ee(5,5,5),s=new Ct({name:"CubemapFromEquirect",uniforms:Rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ot,blending:Ai});s.uniforms.tEquirect.value=t;let r=new ve(n,s),o=t.minFilter;return t.minFilter===Gi&&(t.minFilter=kt),new Xo(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,n);e.setRenderTarget(s)}};function fb(a){let e=new WeakMap,t=new WeakMap,i=null;function n(d,f=!1){return d==null?null:f?r(d):s(d)}function s(d){if(d&&d.isTexture){let f=d.mapping;if(f===$o||f===Qo)if(e.has(d)){let m=e.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let b=new Vc(m.height);return b.fromEquirectangularTexture(a,d),e.set(d,b),d.addEventListener("dispose",c),o(b.texture,d.mapping)}else return null}}return d}function r(d){if(d&&d.isTexture){let f=d.mapping,m=f===$o||f===Qo,b=f===Kn||f===ws;if(m||b){let g=t.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new Tr(a)),g=m?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let x=d.image;return m&&x&&x.height>0||b&&x&&l(x)?(i===null&&(i=new Tr(a)),g=m?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===$o?d.mapping=Kn:f===Qo&&(d.mapping=ws),d}function l(d){let f=0,m=6;for(let b=0;b<m;b++)d[b]!==void 0&&f++;return f===m}function c(d){let f=d.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:u}}function pb(a){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=a.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&fs("WebGLRenderer: "+i+" extension not supported."),n}}}function mb(a,e,t,i){let n={},s=new WeakMap;function r(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",r),delete n[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",r),n[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],a.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,m=u.attributes.position,b=0;if(m===void 0)return;if(f!==null){let x=f.array;b=f.version;for(let E=0,v=x.length;E<v;E+=3){let y=x[E+0],M=x[E+1],A=x[E+2];d.push(y,M,M,A,A,y)}}else{let x=m.array;b=m.version;for(let E=0,v=x.length/3-1;E<v;E+=3){let y=E+0,M=E+1,A=E+2;d.push(y,M,M,A,A,y)}}let g=new(m.count>=65535?na:ia)(d,1);g.version=b;let p=s.get(u);p&&e.remove(p),s.set(u,g)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function gb(a,e,t){let i;function n(u){i=u}let s,r;function o(u){s=u.type,r=u.bytesPerElement}function l(u,d){a.drawElements(i,d,s,u*r),t.update(d,i,1)}function c(u,d,f){f!==0&&(a.drawElementsInstanced(i,d,s,u*r,f),t.update(d,i,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,u,0,f);let b=0;for(let g=0;g<f;g++)b+=d[g];t.update(b,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function bb(a){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(t.calls++,r){case a.TRIANGLES:t.triangles+=o*(s/3);break;case a.LINES:t.lines+=o*(s/2);break;case a.LINE_STRIP:t.lines+=o*(s-1);break;case a.LINE_LOOP:t.lines+=o*s;break;case a.POINTS:t.points+=o*s;break;default:Ge("WebGLInfo: Unknown draw mode:",r);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function xb(a,e,t){let i=new WeakMap,n=new bt;function s(r,o,l){let c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let T=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],E=0;f===!0&&(E=1),m===!0&&(E=2),b===!0&&(E=3);let v=o.attributes.position.count*E,y=1;v>e.maxTextureSize&&(y=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let M=new Float32Array(v*y*4*u),A=new ea(M,v,y,u);A.type=vi,A.needsUpdate=!0;let _=E*4;for(let C=0;C<u;C++){let I=g[C],L=p[C],D=x[C],H=v*y*4*C;for(let N=0;N<I.count;N++){let j=N*_;f===!0&&(n.fromBufferAttribute(I,N),M[H+j+0]=n.x,M[H+j+1]=n.y,M[H+j+2]=n.z,M[H+j+3]=0),m===!0&&(n.fromBufferAttribute(L,N),M[H+j+4]=n.x,M[H+j+5]=n.y,M[H+j+6]=n.z,M[H+j+7]=0),b===!0&&(n.fromBufferAttribute(D,N),M[H+j+8]=n.x,M[H+j+9]=n.y,M[H+j+10]=n.z,M[H+j+11]=D.itemSize===4?n.w:1)}}d={count:u,texture:A,size:new Ae(v,y)},i.set(o,d),o.addEventListener("dispose",T)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",r.morphTexture,t);else{let f=0;for(let b=0;b<c.length;b++)f+=c[b];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(a,"morphTargetBaseInfluence",m),l.getUniforms().setValue(a,"morphTargetInfluences",c)}l.getUniforms().setValue(a,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(a,"morphTargetsTextureSize",d.size)}return{update:s}}function vb(a,e,t,i,n){let s=new WeakMap;function r(c){let h=n.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,a.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,a.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return d}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}var _b={[ba]:"LINEAR_TONE_MAPPING",[xa]:"REINHARD_TONE_MAPPING",[va]:"CINEON_TONE_MAPPING",[Ts]:"ACES_FILMIC_TONE_MAPPING",[ya]:"AGX_TONE_MAPPING",[Ma]:"NEUTRAL_TONE_MAPPING",[_a]:"CUSTOM_TONE_MAPPING"};function yb(a,e,t,i,n,s){let r=new Ft(e,t,{type:a,depthBuffer:n,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ot;c.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ke([0,2,0,0,2,0],2));let h=new fr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ve(c,h),d=new Zi(-1,1,1,-1,0,1),f=null,m=null,b=!1,g,p=null,x=[],E=!1;this.setSize=function(v,y){r.setSize(v,y),o!==null&&o.setSize(v,y),l!==null&&l.setSize(v,y);for(let M=0;M<x.length;M++){let A=x[M];A.setSize&&A.setSize(v,y)}},this.setEffects=function(v){x=v,E=x.length>0&&x[0].isRenderPass===!0;let y=r.width,M=r.height;x.length>0&&o===null&&(o=new Ft(y,M,{type:Xt,depthBuffer:!1,stencilBuffer:!1}),l=new Ft(y,M,{type:Xt,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<x.length;A++){let _=x[A];_.setSize&&_.setSize(y,M)}},this.begin=function(v,y){if(b||v.toneMapping===zi&&x.length===0)return!1;if(p=y,y!==null){let M=y.width,A=y.height;(r.width!==M||r.height!==A)&&this.setSize(M,A)}return E===!1&&v.setRenderTarget(r),g=v.toneMapping,v.toneMapping=zi,!0},this.hasRenderPass=function(){return E},this.end=function(v,y){v.toneMapping=g,b=!0;let M=r,A=o;for(let _=0;_<x.length;_++){let T=x[_];T.enabled!==!1&&(T.render(v,A,M,y),T.needsSwap!==!1&&(M=A,A=A===o?l:o))}if(f!==v.outputColorSpace||m!==v.toneMapping){f=v.outputColorSpace,m=v.toneMapping,h.defines={},Ze.getTransfer(f)===lt&&(h.defines.SRGB_TRANSFER="");let _=_b[m];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(p),v.render(u,d),p=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Ff=new qt,Eh=new qn(1,1),Nf=new ea,Uf=new Do,kf=new ca,gf=[],bf=[],xf=new Float32Array(16),vf=new Float32Array(9),_f=new Float32Array(4);function wr(a,e,t){let i=a[0];if(i<=0||i>0)return a;let n=e*t,s=gf[n];if(s===void 0&&(s=new Float32Array(n),gf[n]=s),e!==0){i.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,a[r].toArray(s,o)}return s}function jt(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function Kt(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function Xc(a,e){let t=bf[e];t===void 0&&(t=new Int32Array(e),bf[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function Mb(a,e){let t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Sb(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;a.uniform2fv(this.addr,e),Kt(t,e)}}function Eb(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;a.uniform3fv(this.addr,e),Kt(t,e)}}function Tb(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;a.uniform4fv(this.addr,e),Kt(t,e)}}function wb(a,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,i))return;_f.set(i),a.uniformMatrix2fv(this.addr,!1,_f),Kt(t,i)}}function Ab(a,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,i))return;vf.set(i),a.uniformMatrix3fv(this.addr,!1,vf),Kt(t,i)}}function Rb(a,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,i))return;xf.set(i),a.uniformMatrix4fv(this.addr,!1,xf),Kt(t,i)}}function Cb(a,e){let t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Pb(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;a.uniform2iv(this.addr,e),Kt(t,e)}}function Ib(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;a.uniform3iv(this.addr,e),Kt(t,e)}}function Hb(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;a.uniform4iv(this.addr,e),Kt(t,e)}}function Lb(a,e){let t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Db(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;a.uniform2uiv(this.addr,e),Kt(t,e)}}function Fb(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;a.uniform3uiv(this.addr,e),Kt(t,e)}}function Nb(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;a.uniform4uiv(this.addr,e),Kt(t,e)}}function Ub(a,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n);let s;this.type===a.SAMPLER_2D_SHADOW?(Eh.compareFunction=t.isReversedDepthBuffer()?Bc:Oc,s=Eh):s=Ff,t.setTexture2D(e||s,n)}function kb(a,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Uf,n)}function Ob(a,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||kf,n)}function Bb(a,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Nf,n)}function zb(a){switch(a){case 5126:return Mb;case 35664:return Sb;case 35665:return Eb;case 35666:return Tb;case 35674:return wb;case 35675:return Ab;case 35676:return Rb;case 5124:case 35670:return Cb;case 35667:case 35671:return Pb;case 35668:case 35672:return Ib;case 35669:case 35673:return Hb;case 5125:return Lb;case 36294:return Db;case 36295:return Fb;case 36296:return Nb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ub;case 35679:case 36299:case 36307:return kb;case 35680:case 36300:case 36308:case 36293:return Ob;case 36289:case 36303:case 36311:case 36292:return Bb}}function Gb(a,e){a.uniform1fv(this.addr,e)}function Vb(a,e){let t=wr(e,this.size,2);a.uniform2fv(this.addr,t)}function Wb(a,e){let t=wr(e,this.size,3);a.uniform3fv(this.addr,t)}function qb(a,e){let t=wr(e,this.size,4);a.uniform4fv(this.addr,t)}function Xb(a,e){let t=wr(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function jb(a,e){let t=wr(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Kb(a,e){let t=wr(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Yb(a,e){a.uniform1iv(this.addr,e)}function Jb(a,e){a.uniform2iv(this.addr,e)}function Zb(a,e){a.uniform3iv(this.addr,e)}function $b(a,e){a.uniform4iv(this.addr,e)}function Qb(a,e){a.uniform1uiv(this.addr,e)}function ex(a,e){a.uniform2uiv(this.addr,e)}function tx(a,e){a.uniform3uiv(this.addr,e)}function ix(a,e){a.uniform4uiv(this.addr,e)}function nx(a,e,t){let i=this.cache,n=e.length,s=Xc(t,n);jt(i,s)||(a.uniform1iv(this.addr,s),Kt(i,s));let r;this.type===a.SAMPLER_2D_SHADOW?r=Eh:r=Ff;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||r,s[o])}function sx(a,e,t){let i=this.cache,n=e.length,s=Xc(t,n);jt(i,s)||(a.uniform1iv(this.addr,s),Kt(i,s));for(let r=0;r!==n;++r)t.setTexture3D(e[r]||Uf,s[r])}function rx(a,e,t){let i=this.cache,n=e.length,s=Xc(t,n);jt(i,s)||(a.uniform1iv(this.addr,s),Kt(i,s));for(let r=0;r!==n;++r)t.setTextureCube(e[r]||kf,s[r])}function ax(a,e,t){let i=this.cache,n=e.length,s=Xc(t,n);jt(i,s)||(a.uniform1iv(this.addr,s),Kt(i,s));for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||Nf,s[r])}function ox(a){switch(a){case 5126:return Gb;case 35664:return Vb;case 35665:return Wb;case 35666:return qb;case 35674:return Xb;case 35675:return jb;case 35676:return Kb;case 5124:case 35670:return Yb;case 35667:case 35671:return Jb;case 35668:case 35672:return Zb;case 35669:case 35673:return $b;case 5125:return Qb;case 36294:return ex;case 36295:return tx;case 36296:return ix;case 35678:case 36198:case 36298:case 36306:case 35682:return nx;case 35679:case 36299:case 36307:return sx;case 35680:case 36300:case 36308:case 36293:return rx;case 36289:case 36303:case 36311:case 36292:return ax}}var Th=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=zb(t.type)}},wh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ox(t.type)}},Ah=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,r=n.length;s!==r;++s){let o=n[s];o.setValue(e,t[o.id],i)}}},Mh=/(\w+)(\])?(\[|\.)?/g;function yf(a,e){a.seq.push(e),a.map[e.id]=e}function cx(a,e,t){let i=a.name,n=i.length;for(Mh.lastIndex=0;;){let s=Mh.exec(i),r=Mh.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===n){yf(t,c===void 0?new Th(o,a,e):new wh(o,a,e));break}else{let u=t.map[o];u===void 0&&(u=new Ah(o),yf(t,u)),t=u}}}var Er=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);cx(o,l,this)}let n=[],s=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(r):s.push(r);n.length>0&&(this.seq=n.concat(s))}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,r=t.length;s!==r;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let r=e[n];r.id in t&&i.push(r)}return i}};function Mf(a,e,t){let i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}var lx=37297,hx=0;function ux(a,e){let t=a.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=n;r<s;r++){let o=r+1;i.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return i.join(`
`)}var Sf=new Xe;function dx(a){Ze._getMatrix(Sf,Ze.workingColorSpace,a);let e=`mat3( ${Sf.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(a)){case $r:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Ef(a,e,t){let i=a.getShaderParameter(e,a.COMPILE_STATUS),s=(a.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+ux(a.getShaderSource(e),o)}else return s}function fx(a,e){let t=dx(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var px={[ba]:"Linear",[xa]:"Reinhard",[va]:"Cineon",[Ts]:"ACESFilmic",[ya]:"AgX",[Ma]:"Neutral",[_a]:"Custom"};function mx(a,e){let t=px[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Gc=new R;function gx(){Ze.getLuminanceCoefficients(Gc);let a=Gc.x.toFixed(4),e=Gc.y.toFixed(4),t=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bx(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Da).join(`
`)}function xx(a){let e=[];for(let t in a){let i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function vx(a,e){let t={},i=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=a.getActiveAttrib(e,n),r=s.name,o=1;s.type===a.FLOAT_MAT2&&(o=2),s.type===a.FLOAT_MAT3&&(o=3),s.type===a.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:a.getAttribLocation(e,r),locationSize:o}}return t}function Da(a){return a!==""}function Tf(a,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wf(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _x=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(a){return a.replace(_x,Mx)}var yx=new Map;function Mx(a,e){let t=tt[e];if(t===void 0){let i=yx.get(e);if(i!==void 0)t=tt[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Rh(t)}var Sx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Af(a){return a.replace(Sx,Ex)}function Ex(a,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Rf(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Tx={[Ss]:"SHADOWMAP_TYPE_PCF",[br]:"SHADOWMAP_TYPE_VSM"};function wx(a){return Tx[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ax={[Kn]:"ENVMAP_TYPE_CUBE",[ws]:"ENVMAP_TYPE_CUBE",[Sa]:"ENVMAP_TYPE_CUBE_UV"};function Rx(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":Ax[a.envMapMode]||"ENVMAP_TYPE_CUBE"}var Cx={[ws]:"ENVMAP_MODE_REFRACTION"};function Px(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":Cx[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ix={[Zo]:"ENVMAP_BLENDING_MULTIPLY",[Gd]:"ENVMAP_BLENDING_MIX",[Vd]:"ENVMAP_BLENDING_ADD"};function Hx(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":Ix[a.combine]||"ENVMAP_BLENDING_NONE"}function Lx(a){let e=a.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Dx(a,e,t,i){let n=a.getContext(),s=t.defines,r=t.vertexShader,o=t.fragmentShader,l=wx(t),c=Rx(t),h=Px(t),u=Hx(t),d=Lx(t),f=bx(t),m=xx(s),b=n.createProgram(),g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Da).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Da).join(`
`),p.length>0&&(p+=`
`)):(g=[Rf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Da).join(`
`),p=[Rf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?tt.tonemapping_pars_fragment:"",t.toneMapping!==zi?mx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,fx("linearToOutputTexel",t.outputColorSpace),gx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Da).join(`
`)),r=Rh(r),r=Tf(r,t),r=wf(r,t),o=Rh(o),o=Tf(o,t),o=wf(o,t),r=Af(r),o=Af(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=x+g+r,v=x+p+o,y=Mf(n,n.VERTEX_SHADER,E),M=Mf(n,n.FRAGMENT_SHADER,v);n.attachShader(b,y),n.attachShader(b,M),t.index0AttributeName!==void 0?n.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(b,0,"position"),n.linkProgram(b);function A(I){if(a.debug.checkShaderErrors){let L=n.getProgramInfoLog(b)||"",D=n.getShaderInfoLog(y)||"",H=n.getShaderInfoLog(M)||"",N=L.trim(),j=D.trim(),Y=H.trim(),B=!0,V=!0;if(n.getProgramParameter(b,n.LINK_STATUS)===!1)if(B=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(n,b,y,M);else{let Z=Ef(n,y,"vertex"),F=Ef(n,M,"fragment");Ge("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(b,n.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+Z+`
`+F)}else N!==""?Ne("WebGLProgram: Program Info Log:",N):(j===""||Y==="")&&(V=!1);V&&(I.diagnostics={runnable:B,programLog:N,vertexShader:{log:j,prefix:g},fragmentShader:{log:Y,prefix:p}})}n.deleteShader(y),n.deleteShader(M),_=new Er(n,b),T=vx(n,b)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=n.getProgramParameter(b,lx)),C},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hx++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=y,this.fragmentShader=M,this}var Fx=0,Ch=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Ph(e),t.set(e,i)),i}},Ph=class{constructor(e){this.id=Fx++,this.code=e,this.usedTimes=0}};function Nx(a){return a===Jn||a===Ra||a===Ca}function Ux(a,e,t,i,n,s){let r=new or,o=new Ch,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function b(_,T,C,I,L,D){let H=I.fog,N=L.geometry,j=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,B=e.get(_.envMap||j,Y),V=B&&B.mapping===Sa?B.image.height:null,Z=f[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&Ne("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let F=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,G=F!==void 0?F.length:0,ee=0;N.morphAttributes.position!==void 0&&(ee=1),N.morphAttributes.normal!==void 0&&(ee=2),N.morphAttributes.color!==void 0&&(ee=3);let Me,fe,He,W;if(Z){let Tt=en[Z];Me=Tt.vertexShader,fe=Tt.fragmentShader}else{Me=_.vertexShader,fe=_.fragmentShader;let Tt=o.getVertexShaderStage(_),dt=o.getFragmentShaderStage(_);o.update(_,Tt,dt),He=Tt.id,W=dt.id}let $=a.getRenderTarget(),ae=a.state.buffers.depth.getReversed(),Te=L.isInstancedMesh===!0,oe=L.isBatchedMesh===!0,We=!!_.map,$e=!!_.matcap,Le=!!B,Ye=!!_.aoMap,it=!!_.lightMap,je=!!_.bumpMap&&_.wireframe===!1,ct=!!_.normalMap,Mt=!!_.displacementMap,Wt=!!_.emissiveMap,Ht=!!_.metalnessMap,zt=!!_.roughnessMap,O=_.anisotropy>0,Qt=_.clearcoat>0,mt=_.dispersion>0,P=_.retroreflectivity>0,S=_.iridescence>0,z=_.sheen>0,K=_.transmission>0,Q=O&&!!_.anisotropyMap,ce=Qt&&!!_.clearcoatMap,de=Qt&&!!_.clearcoatNormalMap,te=Qt&&!!_.clearcoatRoughnessMap,ne=S&&!!_.iridescenceMap,pe=S&&!!_.iridescenceThicknessMap,Ue=z&&!!_.sheenColorMap,xe=z&&!!_.sheenRoughnessMap,me=!!_.specularMap,ke=!!_.specularColorMap,ze=!!_.specularIntensityMap,Je=K&&!!_.transmissionMap,k=K&&!!_.thicknessMap,ge=!!_.gradientMap,ie=!!_.alphaMap,be=_.alphaTest>0,we=!!_.alphaHash,se=!!_.extensions,Oe=zi;_.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Oe=a.toneMapping);let De={shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:Me,fragmentShader:fe,defines:_.defines,customVertexShaderID:He,customFragmentShaderID:W,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:oe,batchingColor:oe&&L._colorsTexture!==null,instancing:Te,instancingColor:Te&&L.instanceColor!==null,instancingMorph:Te&&L.morphTexture!==null,outputColorSpace:$===null?a.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:We,matcap:$e,envMap:Le,envMapMode:Le&&B.mapping,envMapCubeUVHeight:V,aoMap:Ye,lightMap:it,bumpMap:je,normalMap:ct,displacementMap:Mt,emissiveMap:Wt,normalMapObjectSpace:ct&&_.normalMapType===Yd,normalMapTangentSpace:ct&&_.normalMapType===Ia,packedNormalMap:ct&&_.normalMapType===Ia&&Nx(_.normalMap.format),metalnessMap:Ht,roughnessMap:zt,anisotropy:O,anisotropyMap:Q,clearcoat:Qt,clearcoatMap:ce,clearcoatNormalMap:de,clearcoatRoughnessMap:te,dispersion:mt,retroreflection:P,iridescence:S,iridescenceMap:ne,iridescenceThicknessMap:pe,sheen:z,sheenColorMap:Ue,sheenRoughnessMap:xe,specularMap:me,specularColorMap:ke,specularIntensityMap:ze,transmission:K,transmissionMap:Je,thicknessMap:k,gradientMap:ge,opaque:_.transparent===!1&&_.blending===jn&&_.alphaToCoverage===!1,alphaMap:ie,alphaTest:be,alphaHash:we,combine:_.combine,mapUv:We&&m(_.map.channel),aoMapUv:Ye&&m(_.aoMap.channel),lightMapUv:it&&m(_.lightMap.channel),bumpMapUv:je&&m(_.bumpMap.channel),normalMapUv:ct&&m(_.normalMap.channel),displacementMapUv:Mt&&m(_.displacementMap.channel),emissiveMapUv:Wt&&m(_.emissiveMap.channel),metalnessMapUv:Ht&&m(_.metalnessMap.channel),roughnessMapUv:zt&&m(_.roughnessMap.channel),anisotropyMapUv:Q&&m(_.anisotropyMap.channel),clearcoatMapUv:ce&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:de&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:xe&&m(_.sheenRoughnessMap.channel),specularMapUv:me&&m(_.specularMap.channel),specularColorMapUv:ke&&m(_.specularColorMap.channel),specularIntensityMapUv:ze&&m(_.specularIntensityMap.channel),transmissionMapUv:Je&&m(_.transmissionMap.channel),thicknessMapUv:k&&m(_.thicknessMap.channel),alphaMapUv:ie&&m(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ct||O),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(We||ie),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&ct===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ae,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:ee,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:a.shadowMap.enabled&&C.length>0,shadowMapType:a.shadowMap.type,toneMapping:Oe,decodeVideoTexture:We&&_.map.isVideoTexture===!0&&Ze.getTransfer(_.map.colorSpace)===lt,decodeVideoTextureEmissive:Wt&&_.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(_.emissiveMap.colorSpace)===lt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ai,flipSided:_.side===Ot,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:se&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&_.extensions.multiDraw===!0||oe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return De.vertexUv1s=l.has(1),De.vertexUv2s=l.has(2),De.vertexUv3s=l.has(3),l.clear(),De}function g(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)T.push(C),T.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(T,_),x(T,_),T.push(a.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function x(_,T){r.disableAll(),T.instancing&&r.enable(0),T.instancingColor&&r.enable(1),T.instancingMorph&&r.enable(2),T.matcap&&r.enable(3),T.envMap&&r.enable(4),T.normalMapObjectSpace&&r.enable(5),T.normalMapTangentSpace&&r.enable(6),T.clearcoat&&r.enable(7),T.iridescence&&r.enable(8),T.alphaTest&&r.enable(9),T.vertexColors&&r.enable(10),T.vertexAlphas&&r.enable(11),T.vertexUv1s&&r.enable(12),T.vertexUv2s&&r.enable(13),T.vertexUv3s&&r.enable(14),T.vertexTangents&&r.enable(15),T.anisotropy&&r.enable(16),T.alphaHash&&r.enable(17),T.batching&&r.enable(18),T.dispersion&&r.enable(19),T.retroreflection&&r.enable(24),T.batchingColor&&r.enable(20),T.gradientMap&&r.enable(21),T.packedNormalMap&&r.enable(22),T.vertexNormals&&r.enable(23),_.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.reversedDepthBuffer&&r.enable(4),T.skinning&&r.enable(5),T.morphTargets&&r.enable(6),T.morphNormals&&r.enable(7),T.morphColors&&r.enable(8),T.premultipliedAlpha&&r.enable(9),T.shadowMapEnabled&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.transmission&&r.enable(15),T.sheen&&r.enable(16),T.opaque&&r.enable(17),T.pointsUvs&&r.enable(18),T.decodeVideoTexture&&r.enable(19),T.decodeVideoTextureEmissive&&r.enable(20),T.alphaToCoverage&&r.enable(21),T.numLightProbeGrids>0&&r.enable(22),T.hasPositionAttribute&&r.enable(23),_.push(r.mask)}function E(_){let T=f[_.type],C;if(T){let I=en[T];C=Cn.clone(I.uniforms)}else C=_.uniforms;return C}function v(_,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new Dx(a,T,_,n),c.push(C),h.set(T,C)),C}function y(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function M(_){o.remove(_)}function A(){o.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:E,acquireProgram:v,releaseProgram:y,releaseShaderCache:M,programs:c,dispose:A}}function kx(){let a=new WeakMap;function e(r){return a.has(r)}function t(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function i(r){a.delete(r)}function n(r,o,l){a.get(r)[o]=l}function s(){a=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function Ox(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function Cf(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Pf(){let a=[],e=0,t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function r(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,b,g,p){let x=a[e];return x===void 0?(x={id:d.id,object:d,geometry:f,material:m,materialVariant:r(d),groupOrder:b,renderOrder:d.renderOrder,z:g,group:p},a[e]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=m,x.materialVariant=r(d),x.groupOrder=b,x.renderOrder=d.renderOrder,x.z=g,x.group=p),e++,x}function l(d,f,m,b,g,p,x){x.reversedDepth===!0&&(g=-g);let E=o(d,f,m,b,g,p);m.transmission>0?i.push(E):m.transparent===!0?n.push(E):t.push(E)}function c(d,f,m,b,g,p){let x=o(d,f,m,b,g,p);m.transmission>0?i.unshift(x):m.transparent===!0?n.unshift(x):t.unshift(x)}function h(d,f){t.length>1&&t.sort(d||Ox),i.length>1&&i.sort(f||Cf),n.length>1&&n.sort(f||Cf)}function u(){for(let d=e,f=a.length;d<f;d++){let m=a[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:l,unshift:c,finish:u,sort:h}}function Bx(){let a=new WeakMap;function e(i,n){let s=a.get(i),r;return s===void 0?(r=new Pf,a.set(i,[r])):n>=s.length?(r=new Pf,s.push(r)):r=s[n],r}function t(){a=new WeakMap}return{get:e,dispose:t}}function zx(){let a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new R,color:new le};break;case"SpotLight":t={position:new R,direction:new R,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new le,groundColor:new le};break;case"RectAreaLight":t={color:new le,position:new R,halfWidth:new R,halfHeight:new R};break}return a[e.id]=t,t}}}function Gx(){let a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}var Vx=0;function Wx(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function qx(a){let e=new zx,t=Gx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);let n=new R,s=new Ve,r=new Ve;function o(c){let h=0,u=0,d=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let f=0,m=0,b=0,g=0,p=0,x=0,E=0,v=0,y=0,M=0,A=0,_=0,T=0,C=0;c.sort(Wx);for(let L=0,D=c.length;L<D;L++){let H=c[L],N=H.color,j=H.intensity,Y=H.distance,B=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Jn?B=H.shadow.map.texture:B=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)h+=N.r*j,u+=N.g*j,d+=N.b*j;else if(H.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(H.sh.coefficients[V],j);C++}else if(H.isSunLight){let V=e.get(H);if(V.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){let Z=H.shadow,F=t.get(H);F.shadowIntensity=Z.intensity,F.shadowBias=Z.bias,F.shadowNormalBias=Z.normalBias,F.shadowRadius=Z.radius,F.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),i.sunShadow[m]=F,i.sunShadowMap[m]=B;let G=Z.getViewportCount();for(let ee=0;ee<G;ee++)i.sunShadowMatrix[b+ee]=Z.getMatrix(ee),i.sunShadowCascade[b+ee]=Z._cascadeData[ee];b+=G,m++}i.sun[f]=V,f++}else if(H.isDirectionalLight){let V=e.get(H);if(V.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){let Z=H.shadow,F=t.get(H);F.shadowIntensity=Z.intensity,F.shadowBias=Z.bias,F.shadowNormalBias=Z.normalBias,F.shadowRadius=Z.radius,F.shadowMapSize=Z.mapSize,i.directionalShadow[g]=F,i.directionalShadowMap[g]=B,i.directionalShadowMatrix[g]=H.shadow.matrix,y++}i.directional[g]=V,g++}else if(H.isSpotLight){let V=e.get(H);V.position.setFromMatrixPosition(H.matrixWorld),V.color.copy(N).multiplyScalar(j),V.distance=Y,V.coneCos=Math.cos(H.angle),V.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),V.decay=H.decay,i.spot[x]=V;let Z=H.shadow;if(H.map&&(i.spotLightMap[_]=H.map,_++,Z.updateMatrices(H),H.castShadow&&T++),i.spotLightMatrix[x]=Z.matrix,H.castShadow){let F=t.get(H);F.shadowIntensity=Z.intensity,F.shadowBias=Z.bias,F.shadowNormalBias=Z.normalBias,F.shadowRadius=Z.radius,F.shadowMapSize=Z.mapSize,i.spotShadow[x]=F,i.spotShadowMap[x]=B,A++}x++}else if(H.isRectAreaLight){let V=e.get(H);V.color.copy(N).multiplyScalar(j),V.halfWidth.set(H.width*.5,0,0),V.halfHeight.set(0,H.height*.5,0),i.rectArea[E]=V,E++}else if(H.isPointLight){let V=e.get(H);if(V.color.copy(H.color).multiplyScalar(H.intensity),V.distance=H.distance,V.decay=H.decay,H.castShadow){let Z=H.shadow,F=t.get(H);F.shadowIntensity=Z.intensity,F.shadowBias=Z.bias,F.shadowNormalBias=Z.normalBias,F.shadowRadius=Z.radius,F.shadowMapSize=Z.mapSize,F.shadowCameraNear=Z.camera.near,F.shadowCameraFar=Z.camera.far,i.pointShadow[p]=F,i.pointShadowMap[p]=B,i.pointShadowMatrix[p]=H.shadow.matrix,M++}i.point[p]=V,p++}else if(H.isHemisphereLight){let V=e.get(H);V.skyColor.copy(H.color).multiplyScalar(j),V.groundColor.copy(H.groundColor).multiplyScalar(j),i.hemi[v]=V,v++}}E>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let I=i.hash;(I.sunLength!==f||I.directionalLength!==g||I.pointLength!==p||I.spotLength!==x||I.rectAreaLength!==E||I.hemiLength!==v||I.numSunShadows!==m||I.numDirectionalShadows!==y||I.numPointShadows!==M||I.numSpotShadows!==A||I.numSpotMaps!==_||I.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=g,i.spot.length=x,i.rectArea.length=E,i.point.length=p,i.hemi.length=v,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.directionalShadowMatrix.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+_-T,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,I.sunLength=f,I.directionalLength=g,I.pointLength=p,I.spotLength=x,I.rectAreaLength=E,I.hemiLength=v,I.numSunShadows=m,I.numDirectionalShadows=y,I.numPointShadows=M,I.numSpotShadows=A,I.numSpotMaps=_,I.numLightProbes=C,i.version=Vx++)}function l(c,h){let u=0,d=0,f=0,m=0,b=0,g=0,p=h.matrixWorldInverse;for(let x=0,E=c.length;x<E;x++){let v=c[x];if(v.isSunLight){let y=i.sun[u];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(p),d++}else if(v.isSpotLight){let y=i.spot[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let y=i.rectArea[b];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),r.identity(),s.copy(v.matrixWorld),s.premultiply(p),r.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),b++}else if(v.isPointLight){let y=i.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let y=i.hemi[g];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:i}}function If(a){let e=new qx(a),t=[],i=[],n=[];function s(d){u.camera=d,t.length=0,i.length=0,n.length=0}function r(d){t.push(d)}function o(d){i.push(d)}function l(d){n.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function Xx(a){let e=new WeakMap;function t(n,s=0){let r=e.get(n),o;return r===void 0?(o=new If(a),e.set(n,[o])):s>=r.length?(o=new If(a),r.push(o)):o=r[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var jx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kx=`uniform sampler2D shadow_pass;
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
}`,Yx=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],Jx=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Hf=new Ve,La=new R,Sh=new R;function Zx(a,e,t){let i=new ur,n=new Ae,s=new Ae,r=new bt,o=new Oo,l=new Bo,c={},h=t.maxTextureSize,u={[$i]:Ot,[Ot]:$i,[ai]:ai},d=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:jx,fragmentShader:Kx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new ot;m.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ve(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ss;let p=this.type;this.render=function(M,A,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===Sd&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ss);let T=a.getRenderTarget(),C=a.getActiveCubeFace(),I=a.getActiveMipmapLevel(),L=a.state;L.setBlending(Ai),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let D=p!==this.type;D&&A.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(N=>N.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,N=M.length;H<N;H++){let j=M[H],Y=j.shadow;if(Y===void 0){Ne("WebGLShadowMap:",j,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;n.copy(Y.mapSize);let B=Y.getFrameExtents();n.multiply(B),s.copy(Y.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/B.x),n.x=s.x*B.x,Y.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/B.y),n.y=s.y*B.y,Y.mapSize.y=s.y));let V=a.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=V,Y.map===null||D===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===br){if(j.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Ft(n.x,n.y,{format:Jn,type:Xt,minFilter:kt,magFilter:kt,generateMipmaps:!1}),Y.map.texture.name=j.name+".shadowMap",Y.map.depthTexture=new qn(n.x,n.y,vi),Y.map.depthTexture.name=j.name+".shadowMapDepth",Y.map.depthTexture.format=Ki,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=It,Y.map.depthTexture.magFilter=It}else j.isPointLight?(Y.map=new Vc(n.x),Y.map.depthTexture=new Uo(n.x,Vi)):(Y.map=new Ft(n.x,n.y),Y.map.depthTexture=new qn(n.x,n.y,Vi)),Y.map.depthTexture.name=j.name+".shadowMap",Y.map.depthTexture.format=Ki,this.type===Ss?(Y.map.depthTexture.compareFunction=V?Bc:Oc,Y.map.depthTexture.minFilter=kt,Y.map.depthTexture.magFilter=kt):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=It,Y.map.depthTexture.magFilter=It);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==n.x||Y.map.height!==n.y)&&Y.map.setSize(n.x,n.y);let Z=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();j.isPointLight!==!0&&Y.updateMatrices(j,_);for(let F=0;F<Z;F++){let G=Y.getCamera(F);if(j.isPointLight){let ee=Y.camera,Me=Y.matrix,fe=j.distance||ee.far;fe!==ee.far&&(ee.far=fe,ee.updateProjectionMatrix()),La.setFromMatrixPosition(j.matrixWorld),ee.position.copy(La),Sh.copy(ee.position),Sh.add(Yx[F]),ee.up.copy(Jx[F]),ee.lookAt(Sh),ee.updateMatrixWorld(),Me.makeTranslation(-La.x,-La.y,-La.z),Hf.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Hf,ee.coordinateSystem,ee.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)a.setRenderTarget(Y.map,F),a.clear();else{F===0&&(a.setRenderTarget(Y.map),a.clear());let ee=Y.getViewport(F);r.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),L.viewport(r)}i=Y.getFrustum(F),v(A,_,G,j,this.type)}Y.isPointLightShadow!==!0&&this.type===br&&x(Y,_),Y.needsUpdate=!1}p=this.type,g.needsUpdate=!1,a.setRenderTarget(T,C,I)};function x(M,A){let _=e.update(b);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new Ft(n.x,n.y,{format:Jn,type:Xt}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,a.setRenderTarget(M.mapPass),a.clear(),a.renderBufferDirect(A,null,_,d,b,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,a.setRenderTarget(M.map),a.clear(),a.renderBufferDirect(A,null,_,f,b,null)}function E(M,A,_,T){let C=null,I=_.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(I!==void 0)C=I;else if(C=_.isPointLight===!0?l:o,a.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let L=C.uuid,D=A.uuid,H=c[L];H===void 0&&(H={},c[L]=H);let N=H[D];N===void 0&&(N=C.clone(),H[D]=N,A.addEventListener("dispose",y)),C=N}if(C.visible=A.visible,C.wireframe=A.wireframe,T===br?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:u[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let L=a.properties.get(C);L.light=_}return C}function v(M,A,_,T,C){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&C===br)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,M.matrixWorld);let D=e.update(M),H=M.material;if(Array.isArray(H)){let N=D.groups;for(let j=0,Y=N.length;j<Y;j++){let B=N[j],V=H[B.materialIndex];if(V&&V.visible){let Z=E(M,V,T,C);M.onBeforeShadow(a,M,A,_,D,Z,B),a.renderBufferDirect(_,null,D,Z,M,B),M.onAfterShadow(a,M,A,_,D,Z,B)}}}else if(H.visible){let N=E(M,H,T,C);M.onBeforeShadow(a,M,A,_,D,N,null),a.renderBufferDirect(_,null,D,N,M,null),M.onAfterShadow(a,M,A,_,D,N,null)}}let L=M.children;for(let D=0,H=L.length;D<H;D++)v(L[D],A,_,T,C)}function y(M){M.target.removeEventListener("dispose",y);for(let _ in c){let T=c[_],C=M.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function $x(a,e){function t(){let k=!1,ge=new bt,ie=null,be=new bt(0,0,0,0);return{setMask:function(we){ie!==we&&!k&&(a.colorMask(we,we,we,we),ie=we)},setLocked:function(we){k=we},setClear:function(we,se,Oe,De,Tt){Tt===!0&&(we*=De,se*=De,Oe*=De),ge.set(we,se,Oe,De),be.equals(ge)===!1&&(a.clearColor(we,se,Oe,De),be.copy(ge))},reset:function(){k=!1,ie=null,be.set(-1,0,0,0)}}}function i(){let k=!1,ge=!1,ie=null,be=null,we=null;return{setReversed:function(se){if(ge!==se){let Oe=e.get("EXT_clip_control");se?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),ge=se;let De=we;we=null,this.setClear(De)}},getReversed:function(){return ge},setTest:function(se){se?$(a.DEPTH_TEST):ae(a.DEPTH_TEST)},setMask:function(se){ie!==se&&!k&&(a.depthMask(se),ie=se)},setFunc:function(se){if(ge&&(se=of[se]),be!==se){switch(se){case To:a.depthFunc(a.NEVER);break;case wo:a.depthFunc(a.ALWAYS);break;case Ao:a.depthFunc(a.LESS);break;case tr:a.depthFunc(a.LEQUAL);break;case Ro:a.depthFunc(a.EQUAL);break;case Co:a.depthFunc(a.GEQUAL);break;case Po:a.depthFunc(a.GREATER);break;case Io:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}be=se}},setLocked:function(se){k=se},setClear:function(se){we!==se&&(we=se,ge&&(se=1-se),a.clearDepth(se))},reset:function(){k=!1,ie=null,be=null,we=null,ge=!1}}}function n(){let k=!1,ge=null,ie=null,be=null,we=null,se=null,Oe=null,De=null,Tt=null;return{setTest:function(dt){k||(dt?$(a.STENCIL_TEST):ae(a.STENCIL_TEST))},setMask:function(dt){ge!==dt&&!k&&(a.stencilMask(dt),ge=dt)},setFunc:function(dt,Ii,Wi){(ie!==dt||be!==Ii||we!==Wi)&&(a.stencilFunc(dt,Ii,Wi),ie=dt,be=Ii,we=Wi)},setOp:function(dt,Ii,Wi){(se!==dt||Oe!==Ii||De!==Wi)&&(a.stencilOp(dt,Ii,Wi),se=dt,Oe=Ii,De=Wi)},setLocked:function(dt){k=dt},setClear:function(dt){Tt!==dt&&(a.clearStencil(dt),Tt=dt)},reset:function(){k=!1,ge=null,ie=null,be=null,we=null,se=null,Oe=null,De=null,Tt=null}}}let s=new t,r=new i,o=new n,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],b=null,g=!1,p=null,x=null,E=null,v=null,y=null,M=null,A=null,_=new le(0,0,0),T=0,C=!1,I=null,L=null,D=null,H=null,N=null,j=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,B=0,V=a.getParameter(a.VERSION);V.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(V)[1]),Y=B>=1):V.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Y=B>=2);let Z=null,F={},G=a.getParameter(a.SCISSOR_BOX),ee=a.getParameter(a.VIEWPORT),Me=new bt().fromArray(G),fe=new bt().fromArray(ee);function He(k,ge,ie,be){let we=new Uint8Array(4),se=a.createTexture();a.bindTexture(k,se),a.texParameteri(k,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(k,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Oe=0;Oe<ie;Oe++)k===a.TEXTURE_3D||k===a.TEXTURE_2D_ARRAY?a.texImage3D(ge,0,a.RGBA,1,1,be,0,a.RGBA,a.UNSIGNED_BYTE,we):a.texImage2D(ge+Oe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,we);return se}let W={};W[a.TEXTURE_2D]=He(a.TEXTURE_2D,a.TEXTURE_2D,1),W[a.TEXTURE_CUBE_MAP]=He(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[a.TEXTURE_2D_ARRAY]=He(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),W[a.TEXTURE_3D]=He(a.TEXTURE_3D,a.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),$(a.DEPTH_TEST),r.setFunc(tr),je(!1),ct(Xl),$(a.CULL_FACE),Ye(Ai);function $(k){h[k]!==!0&&(a.enable(k),h[k]=!0)}function ae(k){h[k]!==!1&&(a.disable(k),h[k]=!1)}function Te(k,ge){return d[k]!==ge?(a.bindFramebuffer(k,ge),d[k]=ge,k===a.DRAW_FRAMEBUFFER&&(d[a.FRAMEBUFFER]=ge),k===a.FRAMEBUFFER&&(d[a.DRAW_FRAMEBUFFER]=ge),!0):!1}function oe(k,ge){let ie=m,be=!1;if(k){ie=f.get(ge),ie===void 0&&(ie=[],f.set(ge,ie));let we=k.textures;if(ie.length!==we.length||ie[0]!==a.COLOR_ATTACHMENT0){for(let se=0,Oe=we.length;se<Oe;se++)ie[se]=a.COLOR_ATTACHMENT0+se;ie.length=we.length,be=!0}}else ie[0]!==a.BACK&&(ie[0]=a.BACK,be=!0);be&&a.drawBuffers(ie)}function We(k){return b!==k?(a.useProgram(k),b=k,!0):!1}let $e={[Es]:a.FUNC_ADD,[Td]:a.FUNC_SUBTRACT,[wd]:a.FUNC_REVERSE_SUBTRACT};$e[Ad]=a.MIN,$e[Rd]=a.MAX;let Le={[Cd]:a.ZERO,[Pd]:a.ONE,[Id]:a.SRC_COLOR,[Yl]:a.SRC_ALPHA,[Ud]:a.SRC_ALPHA_SATURATE,[Fd]:a.DST_COLOR,[Ld]:a.DST_ALPHA,[Hd]:a.ONE_MINUS_SRC_COLOR,[Jl]:a.ONE_MINUS_SRC_ALPHA,[Nd]:a.ONE_MINUS_DST_COLOR,[Dd]:a.ONE_MINUS_DST_ALPHA,[kd]:a.CONSTANT_COLOR,[Od]:a.ONE_MINUS_CONSTANT_COLOR,[Bd]:a.CONSTANT_ALPHA,[zd]:a.ONE_MINUS_CONSTANT_ALPHA};function Ye(k,ge,ie,be,we,se,Oe,De,Tt,dt){if(k===Ai){g===!0&&(ae(a.BLEND),g=!1);return}if(g===!1&&($(a.BLEND),g=!0),k!==Ed){if(k!==p||dt!==C){if((x!==Es||y!==Es)&&(a.blendEquation(a.FUNC_ADD),x=Es,y=Es),dt)switch(k){case jn:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Zt:a.blendFunc(a.ONE,a.ONE);break;case jl:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Kl:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Ge("WebGLState: Invalid blending: ",k);break}else switch(k){case jn:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Zt:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case jl:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kl:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",k);break}E=null,v=null,M=null,A=null,_.set(0,0,0),T=0,p=k,C=dt}return}we=we||ge,se=se||ie,Oe=Oe||be,(ge!==x||we!==y)&&(a.blendEquationSeparate($e[ge],$e[we]),x=ge,y=we),(ie!==E||be!==v||se!==M||Oe!==A)&&(a.blendFuncSeparate(Le[ie],Le[be],Le[se],Le[Oe]),E=ie,v=be,M=se,A=Oe),(De.equals(_)===!1||Tt!==T)&&(a.blendColor(De.r,De.g,De.b,Tt),_.copy(De),T=Tt),p=k,C=!1}function it(k,ge){k.side===ai?ae(a.CULL_FACE):$(a.CULL_FACE);let ie=k.side===Ot;ge&&(ie=!ie),je(ie),k.blending===jn&&k.transparent===!1?Ye(Ai):Ye(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),r.setFunc(k.depthFunc),r.setTest(k.depthTest),r.setMask(k.depthWrite),s.setMask(k.colorWrite);let be=k.stencilWrite;o.setTest(be),be&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Wt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?$(a.SAMPLE_ALPHA_TO_COVERAGE):ae(a.SAMPLE_ALPHA_TO_COVERAGE)}function je(k){I!==k&&(k?a.frontFace(a.CW):a.frontFace(a.CCW),I=k)}function ct(k){k!==yd?($(a.CULL_FACE),k!==L&&(k===Xl?a.cullFace(a.BACK):k===Md?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):ae(a.CULL_FACE),L=k}function Mt(k){k!==D&&(Y&&a.lineWidth(k),D=k)}function Wt(k,ge,ie){k?($(a.POLYGON_OFFSET_FILL),(H!==ge||N!==ie)&&(H=ge,N=ie,r.getReversed()&&(ge=-ge),a.polygonOffset(ge,ie))):ae(a.POLYGON_OFFSET_FILL)}function Ht(k){k?$(a.SCISSOR_TEST):ae(a.SCISSOR_TEST)}function zt(k){k===void 0&&(k=a.TEXTURE0+j-1),Z!==k&&(a.activeTexture(k),Z=k)}function O(k,ge,ie){ie===void 0&&(Z===null?ie=a.TEXTURE0+j-1:ie=Z);let be=F[ie];be===void 0&&(be={type:void 0,texture:void 0},F[ie]=be),(be.type!==k||be.texture!==ge)&&(Z!==ie&&(a.activeTexture(ie),Z=ie),a.bindTexture(k,ge||W[k]),be.type=k,be.texture=ge)}function Qt(){let k=F[Z];k!==void 0&&k.type!==void 0&&(a.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function mt(){try{a.compressedTexImage2D(...arguments)}catch(k){Ge("WebGLState:",k)}}function P(){try{a.compressedTexImage3D(...arguments)}catch(k){Ge("WebGLState:",k)}}function S(){try{a.texSubImage2D(...arguments)}catch(k){Ge("WebGLState:",k)}}function z(){try{a.texSubImage3D(...arguments)}catch(k){Ge("WebGLState:",k)}}function K(){try{a.compressedTexSubImage2D(...arguments)}catch(k){Ge("WebGLState:",k)}}function Q(){try{a.compressedTexSubImage3D(...arguments)}catch(k){Ge("WebGLState:",k)}}function ce(){try{a.texStorage2D(...arguments)}catch(k){Ge("WebGLState:",k)}}function de(){try{a.texStorage3D(...arguments)}catch(k){Ge("WebGLState:",k)}}function te(){try{a.texImage2D(...arguments)}catch(k){Ge("WebGLState:",k)}}function ne(){try{a.texImage3D(...arguments)}catch(k){Ge("WebGLState:",k)}}function pe(k){return u[k]!==void 0?u[k]:a.getParameter(k)}function Ue(k,ge){u[k]!==ge&&(a.pixelStorei(k,ge),u[k]=ge)}function xe(k){Me.equals(k)===!1&&(a.scissor(k.x,k.y,k.z,k.w),Me.copy(k))}function me(k){fe.equals(k)===!1&&(a.viewport(k.x,k.y,k.z,k.w),fe.copy(k))}function ke(k,ge){let ie=c.get(ge);ie===void 0&&(ie=new WeakMap,c.set(ge,ie));let be=ie.get(k);be===void 0&&(be=a.getUniformBlockIndex(ge,k.name),ie.set(k,be))}function ze(k,ge){let be=c.get(ge).get(k);l.get(ge)!==be&&(a.uniformBlockBinding(ge,be,k.__bindingPointIndex),l.set(ge,be))}function Je(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),r.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),h={},u={},Z=null,F={},d={},f=new WeakMap,m=[],b=null,g=!1,p=null,x=null,E=null,v=null,y=null,M=null,A=null,_=new le(0,0,0),T=0,C=!1,I=null,L=null,D=null,H=null,N=null,Me.set(0,0,a.canvas.width,a.canvas.height),fe.set(0,0,a.canvas.width,a.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:$,disable:ae,bindFramebuffer:Te,drawBuffers:oe,useProgram:We,setBlending:Ye,setMaterial:it,setFlipSided:je,setCullFace:ct,setLineWidth:Mt,setPolygonOffset:Wt,setScissorTest:Ht,activeTexture:zt,bindTexture:O,unbindTexture:Qt,compressedTexImage2D:mt,compressedTexImage3D:P,texImage2D:te,texImage3D:ne,pixelStorei:Ue,getParameter:pe,updateUBOMapping:ke,uniformBlockBinding:ze,texStorage2D:ce,texStorage3D:de,texSubImage2D:S,texSubImage3D:z,compressedTexSubImage2D:K,compressedTexSubImage3D:Q,scissor:xe,viewport:me,reset:Je}}function Qx(a,e,t,i,n,s,r){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,h=new WeakMap,u=new Set,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,S){return m?new OffscreenCanvas(P,S):sr("canvas")}function g(P,S,z){let K=1,Q=mt(P);if((Q.width>z||Q.height>z)&&(K=z/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ce=Math.floor(K*Q.width),de=Math.floor(K*Q.height);d===void 0&&(d=b(ce,de));let te=S?b(ce,de):d;return te.width=ce,te.height=de,te.getContext("2d").drawImage(P,0,0,ce,de),Ne("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ce+"x"+de+")."),te}else return"data"in P&&Ne("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function p(P){return P.generateMipmaps}function x(P){a.generateMipmap(P)}function E(P){return P.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?a.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function v(P,S,z,K,Q,ce=!1){if(P!==null){if(a[P]!==void 0)return a[P];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let de;K&&(de=e.get("EXT_texture_norm16"),de||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=S;if(S===a.RED&&(z===a.FLOAT&&(te=a.R32F),z===a.HALF_FLOAT&&(te=a.R16F),z===a.UNSIGNED_BYTE&&(te=a.R8),z===a.UNSIGNED_SHORT&&de&&(te=de.R16_EXT),z===a.SHORT&&de&&(te=de.R16_SNORM_EXT)),S===a.RED_INTEGER&&(z===a.UNSIGNED_BYTE&&(te=a.R8UI),z===a.UNSIGNED_SHORT&&(te=a.R16UI),z===a.UNSIGNED_INT&&(te=a.R32UI),z===a.BYTE&&(te=a.R8I),z===a.SHORT&&(te=a.R16I),z===a.INT&&(te=a.R32I)),S===a.RG&&(z===a.FLOAT&&(te=a.RG32F),z===a.HALF_FLOAT&&(te=a.RG16F),z===a.UNSIGNED_BYTE&&(te=a.RG8),z===a.UNSIGNED_SHORT&&de&&(te=de.RG16_EXT),z===a.SHORT&&de&&(te=de.RG16_SNORM_EXT)),S===a.RG_INTEGER&&(z===a.UNSIGNED_BYTE&&(te=a.RG8UI),z===a.UNSIGNED_SHORT&&(te=a.RG16UI),z===a.UNSIGNED_INT&&(te=a.RG32UI),z===a.BYTE&&(te=a.RG8I),z===a.SHORT&&(te=a.RG16I),z===a.INT&&(te=a.RG32I)),S===a.RGB_INTEGER&&(z===a.UNSIGNED_BYTE&&(te=a.RGB8UI),z===a.UNSIGNED_SHORT&&(te=a.RGB16UI),z===a.UNSIGNED_INT&&(te=a.RGB32UI),z===a.BYTE&&(te=a.RGB8I),z===a.SHORT&&(te=a.RGB16I),z===a.INT&&(te=a.RGB32I)),S===a.RGBA_INTEGER&&(z===a.UNSIGNED_BYTE&&(te=a.RGBA8UI),z===a.UNSIGNED_SHORT&&(te=a.RGBA16UI),z===a.UNSIGNED_INT&&(te=a.RGBA32UI),z===a.BYTE&&(te=a.RGBA8I),z===a.SHORT&&(te=a.RGBA16I),z===a.INT&&(te=a.RGBA32I)),S===a.RGB&&(z===a.UNSIGNED_SHORT&&de&&(te=de.RGB16_EXT),z===a.SHORT&&de&&(te=de.RGB16_SNORM_EXT),z===a.UNSIGNED_INT_5_9_9_9_REV&&(te=a.RGB9_E5),z===a.UNSIGNED_INT_10F_11F_11F_REV&&(te=a.R11F_G11F_B10F)),S===a.RGBA){let ne=ce?$r:Ze.getTransfer(Q);z===a.FLOAT&&(te=a.RGBA32F),z===a.HALF_FLOAT&&(te=a.RGBA16F),z===a.UNSIGNED_BYTE&&(te=ne===lt?a.SRGB8_ALPHA8:a.RGBA8),z===a.UNSIGNED_SHORT&&de&&(te=de.RGBA16_EXT),z===a.SHORT&&de&&(te=de.RGBA16_SNORM_EXT),z===a.UNSIGNED_SHORT_4_4_4_4&&(te=a.RGBA4),z===a.UNSIGNED_SHORT_5_5_5_1&&(te=a.RGB5_A1)}return(te===a.R16F||te===a.R32F||te===a.RG16F||te===a.RG32F||te===a.RGBA16F||te===a.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function y(P,S){let z;return P?S===null||S===Vi||S===_r?z=a.DEPTH24_STENCIL8:S===vi?z=a.DEPTH32F_STENCIL8:S===vr&&(z=a.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Vi||S===_r?z=a.DEPTH_COMPONENT24:S===vi?z=a.DEPTH_COMPONENT32F:S===vr&&(z=a.DEPTH_COMPONENT16),z}function M(P,S){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==It&&P.minFilter!==kt?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function A(P){let S=P.target;S.removeEventListener("dispose",A),T(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&u.delete(S)}function _(P){let S=P.target;S.removeEventListener("dispose",_),I(S)}function T(P){let S=i.get(P);if(S.__webglInit===void 0)return;let z=P.source,K=f.get(z);if(K){let Q=K[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&C(P),Object.keys(K).length===0&&f.delete(z)}i.remove(P)}function C(P){let S=i.get(P);a.deleteTexture(S.__webglTexture);let z=P.source,K=f.get(z);delete K[S.__cacheKey],r.memory.textures--}function I(P){let S=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let Q=0;Q<S.__webglFramebuffer[K].length;Q++)a.deleteFramebuffer(S.__webglFramebuffer[K][Q]);else a.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&a.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)a.deleteFramebuffer(S.__webglFramebuffer[K]);else a.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&a.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&a.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&a.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&a.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let z=P.textures;for(let K=0,Q=z.length;K<Q;K++){let ce=i.get(z[K]);ce.__webglTexture&&(a.deleteTexture(ce.__webglTexture),r.memory.textures--),i.remove(z[K])}i.remove(P)}let L=0;function D(){L=0}function H(){return L}function N(P){L=P}function j(){let P=L;return P>=n.maxTextures&&Ne("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+n.maxTextures),L+=1,P}function Y(P){let S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function B(P,S){let z=i.get(P);if(P.isVideoTexture&&O(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&z.__version!==P.version){let K=P.image;if(K===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(z,P,S);return}}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,z.__webglTexture,a.TEXTURE0+S)}function V(P,S){let z=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){ae(z,P,S);return}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,z.__webglTexture,a.TEXTURE0+S)}function Z(P,S){let z=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){ae(z,P,S);return}t.bindTexture(a.TEXTURE_3D,z.__webglTexture,a.TEXTURE0+S)}function F(P,S){let z=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&z.__version!==P.version){Te(z,P,S);return}t.bindTexture(a.TEXTURE_CUBE_MAP,z.__webglTexture,a.TEXTURE0+S)}let G={[$t]:a.REPEAT,[Ei]:a.CLAMP_TO_EDGE,[ir]:a.MIRRORED_REPEAT},ee={[It]:a.NEAREST,[ec]:a.NEAREST_MIPMAP_NEAREST,[As]:a.NEAREST_MIPMAP_LINEAR,[kt]:a.LINEAR,[xr]:a.LINEAR_MIPMAP_NEAREST,[Gi]:a.LINEAR_MIPMAP_LINEAR},Me={[Zd]:a.NEVER,[nf]:a.ALWAYS,[$d]:a.LESS,[Oc]:a.LEQUAL,[Qd]:a.EQUAL,[Bc]:a.GEQUAL,[ef]:a.GREATER,[tf]:a.NOTEQUAL};function fe(P,S){if(S.type===vi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===kt||S.magFilter===xr||S.magFilter===As||S.magFilter===Gi||S.minFilter===kt||S.minFilter===xr||S.minFilter===As||S.minFilter===Gi)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(P,a.TEXTURE_WRAP_S,G[S.wrapS]),a.texParameteri(P,a.TEXTURE_WRAP_T,G[S.wrapT]),(P===a.TEXTURE_3D||P===a.TEXTURE_2D_ARRAY)&&a.texParameteri(P,a.TEXTURE_WRAP_R,G[S.wrapR]),a.texParameteri(P,a.TEXTURE_MAG_FILTER,ee[S.magFilter]),a.texParameteri(P,a.TEXTURE_MIN_FILTER,ee[S.minFilter]),S.compareFunction&&(a.texParameteri(P,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(P,a.TEXTURE_COMPARE_FUNC,Me[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===It||S.minFilter!==As&&S.minFilter!==Gi||S.type===vi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");a.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function He(P,S){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",A));let K=S.source,Q=f.get(K);Q===void 0&&(Q={},f.set(K,Q));let ce=Y(S);if(ce!==P.__cacheKey){Q[ce]===void 0&&(Q[ce]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,z=!0),Q[ce].usedTimes++;let de=Q[P.__cacheKey];de!==void 0&&(Q[P.__cacheKey].usedTimes--,de.usedTimes===0&&C(S)),P.__cacheKey=ce,P.__webglTexture=Q[ce].texture}return z}function W(P,S,z){return Math.floor(Math.floor(P/z)/S)}function $(P,S,z,K){let ce=P.updateRanges;if(ce.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,S.width,S.height,z,K,S.data);else{ce.sort((Ue,xe)=>Ue.start-xe.start);let de=0;for(let Ue=1;Ue<ce.length;Ue++){let xe=ce[de],me=ce[Ue],ke=xe.start+xe.count,ze=W(me.start,S.width,4),Je=W(xe.start,S.width,4);me.start<=ke+1&&ze===Je&&W(me.start+me.count-1,S.width,4)===ze?xe.count=Math.max(xe.count,me.start+me.count-xe.start):(++de,ce[de]=me)}ce.length=de+1;let te=t.getParameter(a.UNPACK_ROW_LENGTH),ne=t.getParameter(a.UNPACK_SKIP_PIXELS),pe=t.getParameter(a.UNPACK_SKIP_ROWS);t.pixelStorei(a.UNPACK_ROW_LENGTH,S.width);for(let Ue=0,xe=ce.length;Ue<xe;Ue++){let me=ce[Ue],ke=Math.floor(me.start/4),ze=Math.ceil(me.count/4),Je=ke%S.width,k=Math.floor(ke/S.width),ge=ze,ie=1;t.pixelStorei(a.UNPACK_SKIP_PIXELS,Je),t.pixelStorei(a.UNPACK_SKIP_ROWS,k),t.texSubImage2D(a.TEXTURE_2D,0,Je,k,ge,ie,z,K,S.data)}P.clearUpdateRanges(),t.pixelStorei(a.UNPACK_ROW_LENGTH,te),t.pixelStorei(a.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(a.UNPACK_SKIP_ROWS,pe)}}function ae(P,S,z){let K=a.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=a.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=a.TEXTURE_3D);let Q=He(P,S),ce=S.source;t.bindTexture(K,P.__webglTexture,a.TEXTURE0+z);let de=i.get(ce);if(ce.version!==de.__version||Q===!0){if(t.activeTexture(a.TEXTURE0+z),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let ie=Ze.getPrimaries(Ze.workingColorSpace),be=S.colorSpace===An?null:Ze.getPrimaries(S.colorSpace),we=S.colorSpace===An||ie===be?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}t.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment);let ne=g(S.image,!1,n.maxTextureSize);ne=Qt(S,ne);let pe=s.convert(S.format,S.colorSpace),Ue=s.convert(S.type),xe=v(S.internalFormat,pe,Ue,S.normalized,S.colorSpace,S.isVideoTexture);fe(K,S);let me,ke=S.mipmaps,ze=S.isVideoTexture!==!0,Je=de.__version===void 0||Q===!0,k=ce.dataReady,ge=M(S,ne);if(S.isDepthTexture)xe=y(S.format===Yn,S.type),Je&&(ze?t.texStorage2D(a.TEXTURE_2D,1,xe,ne.width,ne.height):t.texImage2D(a.TEXTURE_2D,0,xe,ne.width,ne.height,0,pe,Ue,null));else if(S.isDataTexture)if(ke.length>0){ze&&Je&&t.texStorage2D(a.TEXTURE_2D,ge,xe,ke[0].width,ke[0].height);for(let ie=0,be=ke.length;ie<be;ie++)me=ke[ie],ze?k&&t.texSubImage2D(a.TEXTURE_2D,ie,0,0,me.width,me.height,pe,Ue,me.data):t.texImage2D(a.TEXTURE_2D,ie,xe,me.width,me.height,0,pe,Ue,me.data);S.generateMipmaps=!1}else ze?(Je&&t.texStorage2D(a.TEXTURE_2D,ge,xe,ne.width,ne.height),k&&$(S,ne,pe,Ue)):t.texImage2D(a.TEXTURE_2D,0,xe,ne.width,ne.height,0,pe,Ue,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ze&&Je&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ge,xe,ke[0].width,ke[0].height,ne.depth);for(let ie=0,be=ke.length;ie<be;ie++)if(me=ke[ie],S.format!==_i)if(pe!==null)if(ze){if(k)if(S.layerUpdates.size>0){let we=dh(me.width,me.height,S.format,S.type);for(let se of S.layerUpdates){let Oe=me.data.subarray(se*we/me.data.BYTES_PER_ELEMENT,(se+1)*we/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ie,0,0,se,me.width,me.height,1,pe,Oe)}}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ie,0,0,0,me.width,me.height,ne.depth,pe,me.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ie,xe,me.width,me.height,ne.depth,0,me.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?k&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,ie,0,0,0,me.width,me.height,ne.depth,pe,Ue,me.data):t.texImage3D(a.TEXTURE_2D_ARRAY,ie,xe,me.width,me.height,ne.depth,0,pe,Ue,me.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{ze&&Je&&t.texStorage2D(a.TEXTURE_2D,ge,xe,ke[0].width,ke[0].height);for(let ie=0,be=ke.length;ie<be;ie++)me=ke[ie],S.format!==_i?pe!==null?ze?k&&t.compressedTexSubImage2D(a.TEXTURE_2D,ie,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(a.TEXTURE_2D,ie,xe,me.width,me.height,0,me.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?k&&t.texSubImage2D(a.TEXTURE_2D,ie,0,0,me.width,me.height,pe,Ue,me.data):t.texImage2D(a.TEXTURE_2D,ie,xe,me.width,me.height,0,pe,Ue,me.data)}else if(S.isDataArrayTexture)if(ze){if(Je&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ge,xe,ne.width,ne.height,ne.depth),k)if(S.layerUpdates.size>0){let ie=dh(ne.width,ne.height,S.format,S.type);for(let be of S.layerUpdates){let we=ne.data.subarray(be*ie/ne.data.BYTES_PER_ELEMENT,(be+1)*ie/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,be,ne.width,ne.height,1,pe,Ue,we)}S.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,pe,Ue,ne.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,xe,ne.width,ne.height,ne.depth,0,pe,Ue,ne.data);else if(S.isData3DTexture)ze?(Je&&t.texStorage3D(a.TEXTURE_3D,ge,xe,ne.width,ne.height,ne.depth),k&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,pe,Ue,ne.data)):t.texImage3D(a.TEXTURE_3D,0,xe,ne.width,ne.height,ne.depth,0,pe,Ue,ne.data);else if(S.isFramebufferTexture){if(Je)if(ze)t.texStorage2D(a.TEXTURE_2D,ge,xe,ne.width,ne.height);else{let ie=ne.width,be=ne.height;for(let we=0;we<ge;we++)t.texImage2D(a.TEXTURE_2D,we,xe,ie,be,0,pe,Ue,null),ie>>=1,be>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in a){let ie=a.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),ne.parentNode!==ie){ie.appendChild(ne),u.add(S),ie.onpaint=be=>{let we=be.changedElements;for(let se of u)we.includes(se.image)&&(se.needsUpdate=!0)},ie.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,ne);else{let we=a.RGBA,se=a.RGBA,Oe=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,we,se,Oe,ne)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(ke.length>0){if(ze&&Je){let ie=mt(ke[0]);t.texStorage2D(a.TEXTURE_2D,ge,xe,ie.width,ie.height)}for(let ie=0,be=ke.length;ie<be;ie++)me=ke[ie],ze?k&&t.texSubImage2D(a.TEXTURE_2D,ie,0,0,pe,Ue,me):t.texImage2D(a.TEXTURE_2D,ie,xe,pe,Ue,me);S.generateMipmaps=!1}else if(ze){if(Je){let ie=mt(ne);t.texStorage2D(a.TEXTURE_2D,ge,xe,ie.width,ie.height)}k&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,pe,Ue,ne)}else t.texImage2D(a.TEXTURE_2D,0,xe,pe,Ue,ne);p(S)&&x(K),de.__version=ce.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Te(P,S,z){if(S.image.length!==6)return;let K=He(P,S),Q=S.source;t.bindTexture(a.TEXTURE_CUBE_MAP,P.__webglTexture,a.TEXTURE0+z);let ce=i.get(Q);if(Q.version!==ce.__version||K===!0){t.activeTexture(a.TEXTURE0+z);let de=Ze.getPrimaries(Ze.workingColorSpace),te=S.colorSpace===An?null:Ze.getPrimaries(S.colorSpace),ne=S.colorSpace===An||de===te?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let pe=S.isCompressedTexture||S.image[0].isCompressedTexture,Ue=S.image[0]&&S.image[0].isDataTexture,xe=[];for(let se=0;se<6;se++)!pe&&!Ue?xe[se]=g(S.image[se],!0,n.maxCubemapSize):xe[se]=Ue?S.image[se].image:S.image[se],xe[se]=Qt(S,xe[se]);let me=xe[0],ke=s.convert(S.format,S.colorSpace),ze=s.convert(S.type),Je=v(S.internalFormat,ke,ze,S.normalized,S.colorSpace),k=S.isVideoTexture!==!0,ge=ce.__version===void 0||K===!0,ie=Q.dataReady,be=M(S,me);fe(a.TEXTURE_CUBE_MAP,S);let we;if(pe){k&&ge&&t.texStorage2D(a.TEXTURE_CUBE_MAP,be,Je,me.width,me.height);for(let se=0;se<6;se++){we=xe[se].mipmaps;for(let Oe=0;Oe<we.length;Oe++){let De=we[Oe];S.format!==_i?ke!==null?k?ie&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe,0,0,De.width,De.height,ke,De.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe,Je,De.width,De.height,0,De.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ie&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe,0,0,De.width,De.height,ke,ze,De.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe,Je,De.width,De.height,0,ke,ze,De.data)}}}else{if(we=S.mipmaps,k&&ge){we.length>0&&be++;let se=mt(xe[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,be,Je,se.width,se.height)}for(let se=0;se<6;se++)if(Ue){k?ie&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,xe[se].width,xe[se].height,ke,ze,xe[se].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Je,xe[se].width,xe[se].height,0,ke,ze,xe[se].data);for(let Oe=0;Oe<we.length;Oe++){let Tt=we[Oe].image[se].image;k?ie&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe+1,0,0,Tt.width,Tt.height,ke,ze,Tt.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe+1,Je,Tt.width,Tt.height,0,ke,ze,Tt.data)}}else{k?ie&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ke,ze,xe[se]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Je,ke,ze,xe[se]);for(let Oe=0;Oe<we.length;Oe++){let De=we[Oe];k?ie&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe+1,0,0,ke,ze,De.image[se]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe+1,Je,ke,ze,De.image[se])}}}p(S)&&x(a.TEXTURE_CUBE_MAP),ce.__version=Q.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function oe(P,S,z,K,Q,ce){let de=s.convert(z.format,z.colorSpace),te=s.convert(z.type),ne=v(z.internalFormat,de,te,z.normalized,z.colorSpace),pe=i.get(S),Ue=i.get(z);if(Ue.__renderTarget=S,!pe.__hasExternalTextures){let xe=Math.max(1,S.width>>ce),me=Math.max(1,S.height>>ce);Q===a.TEXTURE_3D||Q===a.TEXTURE_2D_ARRAY?t.texImage3D(Q,ce,ne,xe,me,S.depth,0,de,te,null):t.texImage2D(Q,ce,ne,xe,me,0,de,te,null)}t.bindFramebuffer(a.FRAMEBUFFER,P),zt(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,K,Q,Ue.__webglTexture,0,Ht(S)):(Q===a.TEXTURE_2D||Q>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,K,Q,Ue.__webglTexture,ce),t.bindFramebuffer(a.FRAMEBUFFER,null)}function We(P,S,z){if(a.bindRenderbuffer(a.RENDERBUFFER,P),S.depthBuffer){let K=S.depthTexture,Q=K&&K.isDepthTexture?K.type:null,ce=y(S.stencilBuffer,Q),de=S.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;zt(S)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ht(S),ce,S.width,S.height):z?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ht(S),ce,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,ce,S.width,S.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,de,a.RENDERBUFFER,P)}else{let K=S.textures;for(let Q=0;Q<K.length;Q++){let ce=K[Q],de=s.convert(ce.format,ce.colorSpace),te=s.convert(ce.type),ne=v(ce.internalFormat,de,te,ce.normalized,ce.colorSpace);zt(S)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ht(S),ne,S.width,S.height):z?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ht(S),ne,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,ne,S.width,S.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function $e(P,S,z){let K=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=i.get(S.depthTexture);if(Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),Q.__webglTexture===void 0){Q.__webglTexture=a.createTexture(),t.bindTexture(a.TEXTURE_CUBE_MAP,Q.__webglTexture),fe(a.TEXTURE_CUBE_MAP,S.depthTexture);let pe=s.convert(S.depthTexture.format),Ue=s.convert(S.depthTexture.type),xe;S.depthTexture.format===Ki?xe=a.DEPTH_COMPONENT24:S.depthTexture.format===Yn&&(xe=a.DEPTH24_STENCIL8);for(let me=0;me<6;me++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,xe,S.width,S.height,0,pe,Ue,null)}}else B(S.depthTexture,0);let ce=Q.__webglTexture,de=Ht(S),te=K?a.TEXTURE_CUBE_MAP_POSITIVE_X+z:a.TEXTURE_2D,ne=S.depthTexture.format===Yn?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(S.depthTexture.format===Ki)zt(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ne,te,ce,0,de):a.framebufferTexture2D(a.FRAMEBUFFER,ne,te,ce,0);else if(S.depthTexture.format===Yn)zt(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ne,te,ce,0,de):a.framebufferTexture2D(a.FRAMEBUFFER,ne,te,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Le(P){let S=i.get(P),z=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){let K=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){let Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=K}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(z)for(let K=0;K<6;K++)$e(S.__webglFramebuffer[K],P,K);else{let K=P.texture.mipmaps;K&&K.length>0?$e(S.__webglFramebuffer[0],P,0):$e(S.__webglFramebuffer,P,0)}else if(z){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=a.createRenderbuffer(),We(S.__webglDepthbuffer[K],P,!1);else{let Q=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ce=S.__webglDepthbuffer[K];a.bindRenderbuffer(a.RENDERBUFFER,ce),a.framebufferRenderbuffer(a.FRAMEBUFFER,Q,a.RENDERBUFFER,ce)}}else{let K=P.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=a.createRenderbuffer(),We(S.__webglDepthbuffer,P,!1);else{let Q=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ce=S.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,ce),a.framebufferRenderbuffer(a.FRAMEBUFFER,Q,a.RENDERBUFFER,ce)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function Ye(P,S,z){let K=i.get(P);S!==void 0&&oe(K.__webglFramebuffer,P,P.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),z!==void 0&&Le(P)}function it(P){let S=P.texture,z=i.get(P),K=i.get(S);P.addEventListener("dispose",_);let Q=P.textures,ce=P.isWebGLCubeRenderTarget===!0,de=Q.length>1;if(de||(K.__webglTexture===void 0&&(K.__webglTexture=a.createTexture()),K.__version=S.version,r.memory.textures++),ce){z.__webglFramebuffer=[];for(let te=0;te<6;te++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[te]=[];for(let ne=0;ne<S.mipmaps.length;ne++)z.__webglFramebuffer[te][ne]=a.createFramebuffer()}else z.__webglFramebuffer[te]=a.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let te=0;te<S.mipmaps.length;te++)z.__webglFramebuffer[te]=a.createFramebuffer()}else z.__webglFramebuffer=a.createFramebuffer();if(de)for(let te=0,ne=Q.length;te<ne;te++){let pe=i.get(Q[te]);pe.__webglTexture===void 0&&(pe.__webglTexture=a.createTexture(),r.memory.textures++)}if(P.samples>0&&zt(P)===!1){z.__webglMultisampledFramebuffer=a.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let te=0;te<Q.length;te++){let ne=Q[te];z.__webglColorRenderbuffer[te]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,z.__webglColorRenderbuffer[te]);let pe=s.convert(ne.format,ne.colorSpace),Ue=s.convert(ne.type),xe=v(ne.internalFormat,pe,Ue,ne.normalized,ne.colorSpace,P.isXRRenderTarget===!0),me=Ht(P);a.renderbufferStorageMultisample(a.RENDERBUFFER,me,xe,P.width,P.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+te,a.RENDERBUFFER,z.__webglColorRenderbuffer[te])}a.bindRenderbuffer(a.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=a.createRenderbuffer(),We(z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ce){t.bindTexture(a.TEXTURE_CUBE_MAP,K.__webglTexture),fe(a.TEXTURE_CUBE_MAP,S);for(let te=0;te<6;te++)if(S.mipmaps&&S.mipmaps.length>0)for(let ne=0;ne<S.mipmaps.length;ne++)oe(z.__webglFramebuffer[te][ne],P,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+te,ne);else oe(z.__webglFramebuffer[te],P,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);p(S)&&x(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let te=0,ne=Q.length;te<ne;te++){let pe=Q[te],Ue=i.get(pe),xe=a.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(xe=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(xe,Ue.__webglTexture),fe(xe,pe),oe(z.__webglFramebuffer,P,pe,a.COLOR_ATTACHMENT0+te,xe,0),p(pe)&&x(xe)}t.unbindTexture()}else{let te=a.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(te=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(te,K.__webglTexture),fe(te,S),S.mipmaps&&S.mipmaps.length>0)for(let ne=0;ne<S.mipmaps.length;ne++)oe(z.__webglFramebuffer[ne],P,S,a.COLOR_ATTACHMENT0,te,ne);else oe(z.__webglFramebuffer,P,S,a.COLOR_ATTACHMENT0,te,0);p(S)&&x(te),t.unbindTexture()}P.depthBuffer&&Le(P)}function je(P){let S=P.textures;for(let z=0,K=S.length;z<K;z++){let Q=S[z];if(p(Q)){let ce=E(P),de=i.get(Q).__webglTexture;t.bindTexture(ce,de),x(ce),t.unbindTexture()}}}let ct=[],Mt=[];function Wt(P){if(P.samples>0){if(zt(P)===!1){let S=P.textures,z=P.width,K=P.height,Q=a.COLOR_BUFFER_BIT,ce=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,de=i.get(P),te=S.length>1;if(te)for(let pe=0;pe<S.length;pe++)t.bindFramebuffer(a.FRAMEBUFFER,de.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+pe,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,de.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+pe,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);let ne=P.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let pe=0;pe<S.length;pe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=a.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=a.STENCIL_BUFFER_BIT)),te){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,de.__webglColorRenderbuffer[pe]);let Ue=i.get(S[pe]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ue,0)}a.blitFramebuffer(0,0,z,K,0,0,z,K,Q,a.NEAREST),l===!0&&(ct.length=0,Mt.length=0,ct.push(a.COLOR_ATTACHMENT0+pe),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(ct.push(ce),Mt.push(ce),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Mt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),te)for(let pe=0;pe<S.length;pe++){t.bindFramebuffer(a.FRAMEBUFFER,de.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+pe,a.RENDERBUFFER,de.__webglColorRenderbuffer[pe]);let Ue=i.get(S[pe]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,de.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+pe,a.TEXTURE_2D,Ue,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let S=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[S])}}}function Ht(P){return Math.min(n.maxSamples,P.samples)}function zt(P){let S=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function O(P){let S=r.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function Qt(P,S){let z=P.colorSpace,K=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==hi&&z!==An&&(Ze.getTransfer(z)===lt?(K!==_i||Q!==mi)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",z)),S}function mt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=D,this.getTextureUnits=H,this.setTextureUnits=N,this.setTexture2D=B,this.setTexture2DArray=V,this.setTexture3D=Z,this.setTextureCube=F,this.rebindTextures=Ye,this.setupRenderTarget=it,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=zt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ev(a,e){function t(i,n=An){let s,r=Ze.getTransfer(n);if(i===mi)return a.UNSIGNED_BYTE;if(i===ic)return a.UNSIGNED_SHORT_4_4_4_4;if(i===nc)return a.UNSIGNED_SHORT_5_5_5_1;if(i===eh)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===th)return a.UNSIGNED_INT_10F_11F_11F_REV;if(i===$l)return a.BYTE;if(i===Ql)return a.SHORT;if(i===vr)return a.UNSIGNED_SHORT;if(i===tc)return a.INT;if(i===Vi)return a.UNSIGNED_INT;if(i===vi)return a.FLOAT;if(i===Xt)return a.HALF_FLOAT;if(i===ih)return a.ALPHA;if(i===nh)return a.RGB;if(i===_i)return a.RGBA;if(i===Ki)return a.DEPTH_COMPONENT;if(i===Yn)return a.DEPTH_STENCIL;if(i===sc)return a.RED;if(i===rc)return a.RED_INTEGER;if(i===Jn)return a.RG;if(i===ac)return a.RG_INTEGER;if(i===oc)return a.RGBA_INTEGER;if(i===Ea||i===Ta||i===wa||i===Aa)if(r===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ea)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ea)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ta)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Aa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cc||i===lc||i===hc||i===uc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===cc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===lc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===uc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===dc||i===fc||i===pc||i===mc||i===gc||i===Ra||i===bc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===dc||i===fc)return r===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===pc)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===mc)return s.COMPRESSED_R11_EAC;if(i===gc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ra)return s.COMPRESSED_RG11_EAC;if(i===bc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===xc||i===vc||i===_c||i===yc||i===Mc||i===Sc||i===Ec||i===Tc||i===wc||i===Ac||i===Rc||i===Cc||i===Pc||i===Ic)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===xc)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vc)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_c)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yc)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mc)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sc)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ec)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Tc)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wc)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ac)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rc)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cc)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pc)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ic)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hc||i===Lc||i===Dc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Hc)return r===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Lc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Dc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fc||i===Nc||i===Ca||i===Uc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Fc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Nc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ca)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_r?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:t}}var tv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iv=`
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

}`,Ih=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new la(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ct({vertexShader:tv,fragmentShader:iv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ve(new pt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hh=class extends Oi{constructor(e,t){super();let i=this,n=null,s=1,r=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,b=typeof XRWebGLBinding<"u",g=new Ih,p={},x=t.getContextAttributes(),E=null,v=null,y=[],M=[],A=new Ae,_=null,T=null,C=new Lt;C.viewport=new bt;let I=new Lt;I.viewport=new bt;let L=[C,I],D=new jo,H=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let $=y[W];return $===void 0&&($=new cr,y[W]=$),$.getTargetRaySpace()},this.getControllerGrip=function(W){let $=y[W];return $===void 0&&($=new cr,y[W]=$),$.getGripSpace()},this.getHand=function(W){let $=y[W];return $===void 0&&($=new cr,y[W]=$),$.getHandSpace()};function j(W){let $=M.indexOf(W.inputSource);if($===-1)return;let ae=y[$];ae!==void 0&&(ae.update(W.inputSource,W.frame,c||r),ae.dispatchEvent({type:W.type,data:W.inputSource}))}function Y(){n.removeEventListener("select",j),n.removeEventListener("selectstart",j),n.removeEventListener("selectend",j),n.removeEventListener("squeeze",j),n.removeEventListener("squeezestart",j),n.removeEventListener("squeezeend",j),n.removeEventListener("end",Y),n.removeEventListener("inputsourceschange",B);for(let W=0;W<y.length;W++){let $=M[W];$!==null&&(M[W]=null,y[W].disconnect($))}H=null,N=null,g.reset();for(let W in p)delete p[W];if(e.setRenderTarget(E),f=null,d=null,u=null,n=null,v=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),T!==null){let W=T.camera;W.fov=T.fov,W.zoom=T.zoom,W.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(n,t)),u},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(W){if(n=W,n!==null){if(E=e.getRenderTarget(),n.addEventListener("select",j),n.addEventListener("selectstart",j),n.addEventListener("selectend",j),n.addEventListener("squeeze",j),n.addEventListener("squeezestart",j),n.addEventListener("squeezeend",j),n.addEventListener("end",Y),n.addEventListener("inputsourceschange",B),x.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Te=null,oe=null;x.depth&&(oe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=x.stencil?Yn:Ki,Te=x.stencil?_r:Vi);let We={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(We),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Ft(d.textureWidth,d.textureHeight,{format:_i,type:mi,depthTexture:new qn(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ae={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,t,ae),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Ft(f.framebufferWidth,f.framebufferHeight,{format:_i,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await n.requestReferenceSpace(o),He.setContext(n),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B(W){for(let $=0;$<W.removed.length;$++){let ae=W.removed[$],Te=M.indexOf(ae);Te>=0&&(M[Te]=null,y[Te].disconnect(ae))}for(let $=0;$<W.added.length;$++){let ae=W.added[$],Te=M.indexOf(ae);if(Te===-1){for(let We=0;We<y.length;We++)if(We>=M.length){M.push(ae),Te=We;break}else if(M[We]===null){M[We]=ae,Te=We;break}if(Te===-1)break}let oe=y[Te];oe&&oe.connect(ae)}}let V=new R,Z=new R;function F(W,$,ae){V.setFromMatrixPosition($.matrixWorld),Z.setFromMatrixPosition(ae.matrixWorld);let Te=V.distanceTo(Z),oe=$.projectionMatrix.elements,We=ae.projectionMatrix.elements,$e=oe[14]/(oe[10]-1),Le=oe[14]/(oe[10]+1),Ye=(oe[9]+1)/oe[5],it=(oe[9]-1)/oe[5],je=(oe[8]-1)/oe[0],ct=(We[8]+1)/We[0],Mt=$e*je,Wt=$e*ct,Ht=Te/(-je+ct),zt=Ht*-je;if($.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(zt),W.translateZ(Ht),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),oe[10]===-1)W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let O=$e+Ht,Qt=Le+Ht,mt=Mt-zt,P=Wt+(Te-zt),S=Ye*Le/Qt*O,z=it*Le/Qt*O;W.projectionMatrix.makePerspective(mt,P,S,z,O,Qt),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function G(W,$){$===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices($.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(n===null)return;let $=W.near,ae=W.far;g.texture!==null&&(g.depthNear>0&&($=g.depthNear),g.depthFar>0&&(ae=g.depthFar)),D.near=I.near=C.near=$,D.far=I.far=C.far=ae,(H!==D.near||N!==D.far)&&(n.updateRenderState({depthNear:D.near,depthFar:D.far}),H=D.near,N=D.far),D.layers.mask=W.layers.mask|6,C.layers.mask=D.layers.mask&-5,I.layers.mask=D.layers.mask&-3;let Te=W.parent,oe=D.cameras;G(D,Te);for(let We=0;We<oe.length;We++)G(oe[We],Te);oe.length===2?F(D,C,I):D.projectionMatrix.copy(C.projectionMatrix),T===null&&W.isPerspectiveCamera&&(T={camera:W,fov:W.fov,zoom:W.zoom}),ee(W,D,Te)};function ee(W,$,ae){ae===null?W.matrix.copy($.matrixWorld):(W.matrix.copy(ae.matrixWorld),W.matrix.invert(),W.matrix.multiply($.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=gs*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(W){return p[W]};let Me=null;function fe(W,$){if(h=$.getViewerPose(c||r),m=$,h!==null){let ae=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Te=!1;ae.length!==D.cameras.length&&(D.cameras.length=0,Te=!0);for(let Le=0;Le<ae.length;Le++){let Ye=ae[Le],it=null;if(f!==null)it=f.getViewport(Ye);else{let ct=u.getViewSubImage(d,Ye);it=ct.viewport,Le===0&&(e.setRenderTargetTextures(v,ct.colorTexture,ct.depthStencilTexture),e.setRenderTarget(v))}let je=L[Le];je===void 0&&(je=new Lt,je.layers.enable(Le),je.viewport=new bt,L[Le]=je),je.matrix.fromArray(Ye.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Ye.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(it.x,it.y,it.width,it.height),Le===0&&(D.matrix.copy(je.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Te===!0&&D.cameras.push(je)}let oe=n.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&b){u=i.getBinding();let Le=u.getDepthInformation(ae[0]);Le&&Le.isValid&&Le.texture&&g.init(Le,n.renderState)}if(oe&&oe.includes("camera-access")&&b){e.state.unbindTexture(),u=i.getBinding();for(let Le=0;Le<ae.length;Le++){let Ye=ae[Le].camera;if(Ye){let it=p[Ye];it||(it=new la,p[Ye]=it);let je=u.getCameraImage(Ye);it.sourceTexture=je}}}}for(let ae=0;ae<y.length;ae++){let Te=M[ae],oe=y[ae];Te!==null&&oe!==void 0&&oe.update(Te,$,c||r)}Me&&Me(W,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),m=null}let He=new Lf;He.setAnimationLoop(fe),this.setAnimationLoop=function(W){Me=W},this.dispose=function(){}}},nv=new Ve,Of=new Xe;Of.set(-1,0,0,0,1,0,0,0,1);function sv(a,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,lh(a)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function n(g,p,x,E,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),b(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,x,E):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ot&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ot&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let x=e.get(p),E=x.envMap,v=x.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(nv.makeRotationFromEuler(v)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Of),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=E*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ot&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){let x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function rv(a,e,t,i){let n={},s={},r=[],o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){let M=y.program;i.uniformBlockBinding(v,M)}function c(v,y){let M=n[v.id];M===void 0&&(g(v),M=h(v),n[v.id]=M,v.addEventListener("dispose",x));let A=y.program;i.updateUBOMapping(v,A);let _=e.render.frame;s[v.id]!==_&&(d(v),s[v.id]=_)}function h(v){let y=u();v.__bindingPointIndex=y;let M=a.createBuffer(),A=v.__size,_=v.usage;return a.bindBuffer(a.UNIFORM_BUFFER,M),a.bufferData(a.UNIFORM_BUFFER,A,_),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,y,M),M}function u(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return Ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let y=n[v.id],M=v.uniforms,A=v.__cache;a.bindBuffer(a.UNIFORM_BUFFER,y);for(let _=0,T=M.length;_<T;_++){let C=M[_];if(Array.isArray(C))for(let I=0,L=C.length;I<L;I++)f(C[I],_,I,A);else f(C,_,0,A)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function f(v,y,M,A){if(b(v,y,M,A)===!0){let _=v.__offset,T=v.value;if(Array.isArray(T)){let C=0;for(let I=0;I<T.length;I++){let L=T[I],D=p(L);m(L,v.__data,C),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(C+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,v.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,_,v.__data)}}function m(v,y,M){typeof v=="number"||typeof v=="boolean"?y[0]=v:v.isMatrix3?(y[0]=v.elements[0],y[1]=v.elements[1],y[2]=v.elements[2],y[3]=0,y[4]=v.elements[3],y[5]=v.elements[4],y[6]=v.elements[5],y[7]=0,y[8]=v.elements[6],y[9]=v.elements[7],y[10]=v.elements[8],y[11]=0):ArrayBuffer.isView(v)?y.set(new v.constructor(v.buffer,v.byteOffset,y.length)):v.toArray(y,M)}function b(v,y,M,A){let _=v.value,T=y+"_"+M;if(A[T]===void 0)return typeof _=="number"||typeof _=="boolean"?A[T]=_:ArrayBuffer.isView(_)?A[T]=_.slice():A[T]=_.clone(),!0;{let C=A[T];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return A[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function g(v){let y=v.uniforms,M=0,A=16;for(let T=0,C=y.length;T<C;T++){let I=Array.isArray(y[T])?y[T]:[y[T]];for(let L=0,D=I.length;L<D;L++){let H=I[L],N=Array.isArray(H.value)?H.value:[H.value];for(let j=0,Y=N.length;j<Y;j++){let B=N[j],V=p(B),Z=M%A,F=Z%V.boundary,G=Z+F;M+=F,G!==0&&A-G<V.storage&&(M+=A-G),H.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=V.storage}}}let _=M%A;return _>0&&(M+=A-_),v.__size=M,v.__cache={},this}function p(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",v),y}function x(v){let y=v.target;y.removeEventListener("dispose",x);let M=r.indexOf(y.__bindingPointIndex);r.splice(M,1),a.deleteBuffer(n[y.id]),delete n[y.id],delete s[y.id]}function E(){for(let v in n)a.deleteBuffer(n[v]);r=[],n={},s={}}return{bind:l,update:c,dispose:E}}var av=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Qi=null;function ov(){return Qi===null&&(Qi=new hr(av,16,16,Jn,Xt),Qi.name="DFG_LUT",Qi.minFilter=kt,Qi.magFilter=kt,Qi.wrapS=Ei,Qi.wrapT=Ei,Qi.generateMipmaps=!1,Qi.needsUpdate=!0),Qi}var Wc=class{constructor(e={}){let{canvas:t=sf(),context:i=null,depth:n=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=mi}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=r;let b=f,g=new Set([oc,ac,rc]),p=new Set([mi,Vi,vr,_r,ic,nc]),x=new Uint32Array(4),E=new Int32Array(4),v=new R,y=null,M=null,A=[],_=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,L=null,D=null,H=null,N=null;this._outputColorSpace=et;let j=0,Y=0,B=null,V=-1,Z=null,F=new bt,G=new bt,ee=null,Me=new le(0),fe=0,He=t.width,W=t.height,$=1,ae=null,Te=null,oe=new bt(0,0,He,W),We=new bt(0,0,He,W),$e=!1,Le=new ur,Ye=!1,it=!1,je=new Ve,ct=new R,Mt=new bt,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ht=!1;function zt(){return B===null?$:1}let O=i;function Qt(w,U){return t.getContext(w,U)}let mt,P,S,z,K,Q,ce,de,te,ne,pe,Ue,xe,me,ke,ze,Je,k,ge,ie,be,we,se;try{let w={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Tt,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",Ii,!1),O===null){let U="webgl2";if(O=Qt(U,w),O===null)throw Qt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(w){throw t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",Ii,!1),Ge("WebGLRenderer: "+w.message),w}function Oe(){mt=new pb(O),mt.init(),be=new ev(O,mt),P=new sb(O,mt,e,be),S=new $x(O,mt),P.reversedDepthBuffer&&d&&S.buffers.depth.setReversed(!0),D=O.createFramebuffer(),H=O.createFramebuffer(),N=O.createFramebuffer(),z=new bb(O),K=new kx,Q=new Qx(O,mt,S,K,P,be,z),ce=new fb(C),de=new vm(O),we=new ib(O,de),te=new mb(O,de,z,we),ne=new vb(O,te,de,we,z),k=new xb(O,P,Q),ke=new rb(K),pe=new Ux(C,ce,mt,P,we,ke),Ue=new sv(C,K),xe=new Bx,me=new Xx(mt),Je=new tb(C,ce,S,ne,m,l),ze=new Zx(C,ne,P),se=new rv(O,z,P,S),ge=new nb(O,mt,z),ie=new gb(O,mt,z),z.programs=pe.programs,C.capabilities=P,C.extensions=mt,C.properties=K,C.renderLists=xe,C.shadowMap=ze,C.state=S,C.info=z}b!==mi&&(T=new yb(b,t.width,t.height,o,n,s));let De=new Hh(C,O);this.xr=De,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let w=mt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=mt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(He,W,!1))},this.getSize=function(w){return w.set(He,W)},this.setSize=function(w,U,J=!0){if(De.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}He=w,W=U,t.width=Math.floor(w*$),t.height=Math.floor(U*$),J===!0&&(t.style.width=w+"px",t.style.height=U+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(He*$,W*$).floor()},this.setDrawingBufferSize=function(w,U,J){He=w,W=U,$=J,t.width=Math.floor(w*J),t.height=Math.floor(U*J),this.setViewport(0,0,w,U)},this.setEffects=function(w){if(b===mi){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let U=0;U<w.length;U++)if(w[U].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(F)},this.getViewport=function(w){return w.copy(oe)},this.setViewport=function(w,U,J,q){w.isVector4?oe.set(w.x,w.y,w.z,w.w):oe.set(w,U,J,q),S.viewport(F.copy(oe).multiplyScalar($).round())},this.getScissor=function(w){return w.copy(We)},this.setScissor=function(w,U,J,q){w.isVector4?We.set(w.x,w.y,w.z,w.w):We.set(w,U,J,q),S.scissor(G.copy(We).multiplyScalar($).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(w){S.setScissorTest($e=w)},this.setOpaqueSort=function(w){ae=w},this.setTransparentSort=function(w){Te=w},this.getClearColor=function(w){return w.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,J=!0){let q=0;if(w){let X=!1;if(B!==null){let Se=B.texture.format;X=g.has(Se)}if(X){let Se=B.texture.type,Ce=p.has(Se),ye=Je.getClearColor(),Pe=Je.getClearAlpha(),Fe=ye.r,Qe=ye.g,st=ye.b;Ce?(x[0]=Fe,x[1]=Qe,x[2]=st,x[3]=Pe,O.clearBufferuiv(O.COLOR,0,x)):(E[0]=Fe,E[1]=Qe,E[2]=st,E[3]=Pe,O.clearBufferiv(O.COLOR,0,E))}else q|=O.COLOR_BUFFER_BIT}U&&(q|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),L=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",Ii,!1),Je.dispose(),xe.dispose(),me.dispose(),K.dispose(),ce.dispose(),ne.dispose(),we.dispose(),se.dispose(),pe.dispose(),De.dispose(),De.removeEventListener("sessionstart",Tu),De.removeEventListener("sessionend",wu),as.stop()};function Tt(w){w.preventDefault(),Qr("WebGLRenderer: Context Lost."),I=!0}function dt(){Qr("WebGLRenderer: Context Restored."),I=!1;let w=z.autoReset,U=ze.enabled,J=ze.autoUpdate,q=ze.needsUpdate,X=ze.type;Oe(),z.autoReset=w,ze.enabled=U,ze.autoUpdate=J,ze.needsUpdate=q,ze.type=X}function Ii(w){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Wi(w){let U=w.target;U.removeEventListener("dispose",Wi),ap(U)}function ap(w){op(w),K.remove(w)}function op(w){let U=K.get(w).programs;U!==void 0&&(U.forEach(function(J){pe.releaseProgram(J)}),w.isShaderMaterial&&pe.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,J,q,X,Se){U===null&&(U=Wt);let Ce=X.isMesh&&X.matrixWorld.determinantAffine()<0,ye=hp(w,U,J,q,X);S.setMaterial(q,Ce);let Pe=J.index,Fe=1;if(q.wireframe===!0){if(Pe=te.getWireframeAttribute(J),Pe===void 0)return;Fe=2}let Qe=J.drawRange,st=J.attributes.position,Ie=Qe.start*Fe,ft=(Qe.start+Qe.count)*Fe;Se!==null&&(Ie=Math.max(Ie,Se.start*Fe),ft=Math.min(ft,(Se.start+Se.count)*Fe)),Pe!==null?(Ie=Math.max(Ie,0),ft=Math.min(ft,Pe.count)):st!=null&&(Ie=Math.max(Ie,0),ft=Math.min(ft,st.count));let Gt=ft-Ie;if(Gt<0||Gt===1/0)return;we.setup(X,q,ye,J,Pe);let At,St=ge;if(Pe!==null&&(At=de.get(Pe),St=ie,St.setIndex(At)),X.isMesh)q.wireframe===!0?(S.setLineWidth(q.wireframeLinewidth*zt()),St.setMode(O.LINES)):St.setMode(O.TRIANGLES);else if(X.isLine){let ei=q.linewidth;ei===void 0&&(ei=1),S.setLineWidth(ei*zt()),X.isLineSegments?St.setMode(O.LINES):X.isLineLoop?St.setMode(O.LINE_LOOP):St.setMode(O.LINE_STRIP)}else X.isPoints?St.setMode(O.POINTS):X.isSprite&&St.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))St.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let ei=X._multiDrawStarts,Re=X._multiDrawCounts,ci=X._multiDrawCount,at=Pe?de.get(Pe).bytesPerElement:1,Mi=K.get(q).currentProgram.getUniforms();for(let qi=0;qi<ci;qi++)Mi.setValue(O,"_gl_DrawID",qi),St.render(ei[qi]/at,Re[qi])}else if(X.isInstancedMesh)St.renderInstances(Ie,Gt,X.count);else if(J.isInstancedBufferGeometry){let ei=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Re=Math.min(J.instanceCount,ei);St.renderInstances(Ie,Gt,Re)}else St.render(Ie,Gt)};function Eu(w,U,J,q){L!==null&&w.isNodeMaterial&&L.setObject(q,w),Ye===!0&&ke.setState(w,J,!1),w.transparent===!0&&w.side===ai&&w.forceSinglePass===!1?(w.side=Ot,w.needsUpdate=!0,Xa(w,U,q),w.side=$i,w.needsUpdate=!0,Xa(w,U,q),w.side=ai):Xa(w,U,q)}this.compile=function(w,U,J=null){J===null&&(J=w),L!==null&&L.renderStart(w,U,J),M=me.get(J),M.init(U),_.push(M),J.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(M.pushLight(X),X.castShadow&&M.pushShadow(X))}),w!==J&&w.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(M.pushLight(X),X.castShadow&&M.pushShadow(X))}),M.setupLights(),L!==null&&L.updateLights(M.state.lightsArray),it=this.localClippingEnabled,Ye=ke.init(this.clippingPlanes,it),Ye===!0&&ke.setGlobalState(this.clippingPlanes,U),L!==null&&ze.render(M.state.shadowsArray,J,U);let q=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Se=X.material;if(Se)if(Array.isArray(Se))for(let Ce=0;Ce<Se.length;Ce++){let ye=Se[Ce];Eu(ye,J,U,X),q.add(ye)}else Eu(Se,J,U,X),q.add(Se)}),M=_.pop(),L!==null&&L.renderEnd(),q},this.compileAsync=function(w,U,J=null){let q=this.compile(w,U,J);return new Promise(X=>{function Se(){if(q.forEach(function(Ce){let Pe=K.get(Ce).currentProgram;(Pe===void 0||Pe.isReady())&&q.delete(Ce)}),q.size===0){X(w);return}setTimeout(Se,10)}mt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let ll=null;function cp(w){ll&&ll(w)}function Tu(){as.stop()}function wu(){as.start()}let as=new Lf;as.setAnimationLoop(cp),typeof self<"u"&&as.setContext(self),this.setAnimationLoop=function(w){ll=w,De.setAnimationLoop(w),w===null?as.stop():as.start()},De.addEventListener("sessionstart",Tu),De.addEventListener("sessionend",wu),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L!==null&&L.renderStart(w,U);let J=De.enabled===!0&&De.isPresenting===!0,q=T!==null&&(B===null||J)&&T.begin(C,B);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(U),U=De.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,U,B),M=me.get(w,_.length),M.init(U),M.state.textureUnits=Q.getTextureUnits(),_.push(M),je.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Le.setFromProjectionMatrix(je,Ui,U.reversedDepth),it=this.localClippingEnabled,Ye=ke.init(this.clippingPlanes,it),y=xe.get(w,A.length),y.init(),A.push(y),De.enabled===!0&&De.isPresenting===!0){let Ce=C.xr.getDepthSensingMesh();Ce!==null&&hl(Ce,U,-1/0,C.sortObjects)}hl(w,U,0,C.sortObjects),y.finish(),L!==null&&L.updateLights(M.state.lightsArray),C.sortObjects===!0&&y.sort(ae,Te),Ht=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,Ht&&Je.addToRenderList(y,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ye===!0&&ke.beginShadows();let X=M.state.shadowsArray;if(ze.render(X,w,U),Ye===!0&&ke.endShadows(),(q&&T.hasRenderPass())===!1){let Ce=y.opaque,ye=y.transmissive;if(M.setupLights(),U.isArrayCamera){let Pe=U.cameras;if(ye.length>0)for(let Fe=0,Qe=Pe.length;Fe<Qe;Fe++){let st=Pe[Fe];Ru(Ce,ye,w,st)}Ht&&Je.render(w);for(let Fe=0,Qe=Pe.length;Fe<Qe;Fe++){let st=Pe[Fe];Au(y,w,st,st.viewport)}}else ye.length>0&&Ru(Ce,ye,w,U),Ht&&Je.render(w),Au(y,w,U)}B!==null&&Y===0&&(Q.updateMultisampleRenderTarget(B),Q.updateRenderTargetMipmap(B)),q&&T.end(C),w.isScene===!0&&w.onAfterRender(C,w,U),we.resetDefaultState(),V=-1,Z=null,_.pop(),_.length>0?(M=_[_.length-1],Q.setTextureUnits(M.state.textureUnits),Ye===!0&&ke.setGlobalState(C.clippingPlanes,M.state.camera)):M=null,A.pop(),A.length>0?y=A[A.length-1]:y=null,L!==null&&L.renderEnd()};function hl(w,U,J,q){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLightProbeGrid)M.pushLightProbeGrid(w);else if(w.isLight)M.pushLight(w),w.castShadow&&M.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(Le)){q&&Mt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(je);let Ce=ne.update(w),ye=w.material;ye.visible&&y.push(w,Ce,ye,J,Mt.z,null,U)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(Le))){let Ce=ne.update(w),ye=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Mt.copy(w.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Mt.copy(Ce.boundingSphere.center)),Mt.applyMatrix4(w.matrixWorld).applyMatrix4(je)),Array.isArray(ye)){let Pe=Ce.groups;for(let Fe=0,Qe=Pe.length;Fe<Qe;Fe++){let st=Pe[Fe],Ie=ye[st.materialIndex];Ie&&Ie.visible&&y.push(w,Ce,Ie,J,Mt.z,st,U)}}else ye.visible&&y.push(w,Ce,ye,J,Mt.z,null,U)}}let Se=w.children;for(let Ce=0,ye=Se.length;Ce<ye;Ce++)hl(Se[Ce],U,J,q)}function Au(w,U,J,q){let{opaque:X,transmissive:Se,transparent:Ce}=w;M.setupLightsView(J),Ye===!0&&ke.setGlobalState(C.clippingPlanes,J),q&&S.viewport(F.copy(q)),X.length>0&&qa(X,U,J),Se.length>0&&qa(Se,U,J),Ce.length>0&&qa(Ce,U,J),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Ru(w,U,J,q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[q.id]===void 0){let Ie=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[q.id]=new Ft(1,1,{generateMipmaps:!0,type:Ie?Xt:mi,minFilter:Gi,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}let Se=M.state.transmissionRenderTarget[q.id],Ce=q.viewport||F;Se.setSize(Ce.z*C.transmissionResolutionScale,Ce.w*C.transmissionResolutionScale);let ye=C.getRenderTarget(),Pe=C.getActiveCubeFace(),Fe=C.getActiveMipmapLevel();C.setRenderTarget(Se),C.getClearColor(Me),fe=C.getClearAlpha(),fe<1&&C.setClearColor(16777215,.5),C.clear(),Ht&&Je.render(J);let Qe=C.toneMapping;C.toneMapping=zi;let st=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),M.setupLightsView(q),Ye===!0&&ke.setGlobalState(C.clippingPlanes,q),qa(w,J,q),Q.updateMultisampleRenderTarget(Se),Q.updateRenderTargetMipmap(Se),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let ft=0,Gt=U.length;ft<Gt;ft++){let At=U[ft],{object:St,geometry:ei,material:Re,group:ci}=At;if(Re.side===ai&&St.layers.test(q.layers)){let at=Re.side;Re.side=Ot,Re.needsUpdate=!0,Cu(St,J,q,ei,Re,ci),Re.side=at,Re.needsUpdate=!0,Ie=!0}}Ie===!0&&(Q.updateMultisampleRenderTarget(Se),Q.updateRenderTargetMipmap(Se))}C.setRenderTarget(ye,Pe,Fe),C.setClearColor(Me,fe),st!==void 0&&(q.viewport=st),C.toneMapping=Qe}function qa(w,U,J){let q=U.isScene===!0?U.overrideMaterial:null;for(let X=0,Se=w.length;X<Se;X++){let Ce=w[X],{object:ye,geometry:Pe,group:Fe}=Ce,Qe=Ce.material;Qe.allowOverride===!0&&q!==null&&(Qe=q),ye.layers.test(J.layers)&&Cu(ye,U,J,Pe,Qe,Fe)}}function Cu(w,U,J,q,X,Se){L!==null&&X.isNodeMaterial&&L.setObject(w,X),w.onBeforeRender(C,U,J,q,X,Se),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(C,U,J,q,w,Se),X.transparent===!0&&X.side===ai&&X.forceSinglePass===!1?(X.side=Ot,X.needsUpdate=!0,C.renderBufferDirect(J,U,q,X,w,Se),X.side=$i,X.needsUpdate=!0,C.renderBufferDirect(J,U,q,X,w,Se),X.side=ai):C.renderBufferDirect(J,U,q,X,w,Se),w.onAfterRender(C,U,J,q,X,Se)}function Xa(w,U,J){U.isScene!==!0&&(U=Wt);let q=K.get(w),X=M.state.lights,Se=M.state.shadowsArray,Ce=X.state.version,ye=pe.getParameters(w,X.state,Se,U,J,M.state.lightProbeGridArray),Pe=pe.getProgramCacheKey(ye),Fe=q.programs;q.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?U.environment:null,q.fog=U.fog;let Qe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;q.envMap=ce.get(w.envMap||q.environment,Qe),q.envMapRotation=q.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Fe===void 0&&(w.addEventListener("dispose",Wi),Fe=new Map,q.programs=Fe);let st=Fe.get(Pe);if(st!==void 0){if(q.currentProgram===st&&q.lightsStateVersion===Ce)return Iu(w,ye),st}else ye.uniforms=pe.getUniforms(w),L!==null&&w.isNodeMaterial&&L.build(w,J,ye),w.onBeforeCompile(ye,C),st=pe.acquireProgram(ye,Pe),Fe.set(Pe,st),q.uniforms=ye.uniforms;let Ie=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ie.clippingPlanes=ke.uniform),Iu(w,ye),q.needsLights=dp(w),q.lightsStateVersion=Ce,q.needsLights&&(Ie.ambientLightColor.value=X.state.ambient,Ie.lightProbe.value=X.state.probe,Ie.sunLights.value=X.state.sun,Ie.sunLightShadows.value=X.state.sunShadow,Ie.directionalLights.value=X.state.directional,Ie.directionalLightShadows.value=X.state.directionalShadow,Ie.spotLights.value=X.state.spot,Ie.spotLightShadows.value=X.state.spotShadow,Ie.rectAreaLights.value=X.state.rectArea,Ie.ltc_1.value=X.state.rectAreaLTC1,Ie.ltc_2.value=X.state.rectAreaLTC2,Ie.pointLights.value=X.state.point,Ie.pointLightShadows.value=X.state.pointShadow,Ie.hemisphereLights.value=X.state.hemi,Ie.sunShadowMatrix.value=X.state.sunShadowMatrix,Ie.sunShadowCascade.value=X.state.sunShadowCascade,Ie.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ie.spotLightMatrix.value=X.state.spotLightMatrix,Ie.spotLightMap.value=X.state.spotLightMap,Ie.pointShadowMatrix.value=X.state.pointShadowMatrix),q.lightProbeGrid=M.state.lightProbeGridArray.length>0,q.currentProgram=st,q.uniformsList=null,st}function Pu(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=Er.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Iu(w,U){let J=K.get(w);J.outputColorSpace=U.outputColorSpace,J.batching=U.batching,J.batchingColor=U.batchingColor,J.instancing=U.instancing,J.instancingColor=U.instancingColor,J.instancingMorph=U.instancingMorph,J.skinning=U.skinning,J.morphTargets=U.morphTargets,J.morphNormals=U.morphNormals,J.morphColors=U.morphColors,J.morphTargetsCount=U.morphTargetsCount,J.numClippingPlanes=U.numClippingPlanes,J.numIntersection=U.numClipIntersection,J.vertexAlphas=U.vertexAlphas,J.vertexTangents=U.vertexTangents,J.toneMapping=U.toneMapping}function lp(w,U){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;v.setFromMatrixPosition(U.matrixWorld);for(let J=0,q=w.length;J<q;J++){let X=w[J];if(X.texture!==null&&X.boundingBox.containsPoint(v))return X}return null}function hp(w,U,J,q,X){U.isScene!==!0&&(U=Wt),Q.resetTextureUnits();let Se=U.fog,Ce=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?U.environment:null,ye=B===null?C.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ze.workingColorSpace,Pe=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Fe=ce.get(q.envMap||Ce,Pe),Qe=q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,st=!!J.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ie=!!J.morphAttributes.position,ft=!!J.morphAttributes.normal,Gt=!!J.morphAttributes.color,At=zi;q.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(At=C.toneMapping);let St=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ei=St!==void 0?St.length:0,Re=K.get(q),ci=M.state.lights;if(Ye===!0&&(it===!0||w!==Z)){let wt=w===Z&&q.id===V;ke.setState(q,w,wt)}let at=!1;q.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==ci.state.version||Re.outputColorSpace!==ye||X.isBatchedMesh&&Re.batching===!1||!X.isBatchedMesh&&Re.batching===!0||X.isBatchedMesh&&Re.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Re.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Re.instancing===!1||!X.isInstancedMesh&&Re.instancing===!0||X.isSkinnedMesh&&Re.skinning===!1||!X.isSkinnedMesh&&Re.skinning===!0||X.isInstancedMesh&&Re.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Re.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Re.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Re.instancingMorph===!1&&X.morphTexture!==null||Re.envMap!==Fe||q.fog===!0&&Re.fog!==Se||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ke.numPlanes||Re.numIntersection!==ke.numIntersection)||Re.vertexAlphas!==Qe||Re.vertexTangents!==st||Re.morphTargets!==Ie||Re.morphNormals!==ft||Re.morphColors!==Gt||Re.toneMapping!==At||Re.morphTargetsCount!==ei||!!Re.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,Re.__version=q.version);let Mi=Re.currentProgram;at===!0&&(Mi=Xa(q,U,X),L&&q.isNodeMaterial&&L.onUpdateProgram(q,Mi,Re));let qi=!1,Hn=!1,Ds=!1,_t=Mi.getUniforms(),Ut=Re.uniforms;if(S.useProgram(Mi.program)&&(qi=!0,Hn=!0,Ds=!0),q.id!==V&&(V=q.id,Hn=!0),Re.needsLights){let wt=lp(M.state.lightProbeGridArray,X);Re.lightProbeGrid!==wt&&(Re.lightProbeGrid=wt,Hn=!0)}if(qi||Z!==w){S.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),_t.setValue(O,"projectionMatrix",w.projectionMatrix),_t.setValue(O,"viewMatrix",w.matrixWorldInverse);let Dn=_t.map.cameraPosition;Dn!==void 0&&Dn.setValue(O,ct.setFromMatrixPosition(w.matrixWorld)),P.logarithmicDepthBuffer&&_t.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&_t.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),Z!==w&&(Z=w,Hn=!0,Ds=!0)}if(Re.needsLights&&(ci.state.sunShadowMap.length>0&&_t.setValue(O,"sunShadowMap",ci.state.sunShadowMap,Q),ci.state.directionalShadowMap.length>0&&_t.setValue(O,"directionalShadowMap",ci.state.directionalShadowMap,Q),ci.state.spotShadowMap.length>0&&_t.setValue(O,"spotShadowMap",ci.state.spotShadowMap,Q),ci.state.pointShadowMap.length>0&&_t.setValue(O,"pointShadowMap",ci.state.pointShadowMap,Q)),X.isSkinnedMesh){_t.setOptional(O,X,"bindMatrix"),_t.setOptional(O,X,"bindMatrixInverse");let wt=X.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),_t.setValue(O,"boneTexture",wt.boneTexture,Q))}X.isBatchedMesh&&(_t.setOptional(O,X,"batchingTexture"),_t.setValue(O,"batchingTexture",X._matricesTexture,Q),_t.setOptional(O,X,"batchingIdTexture"),_t.setValue(O,"batchingIdTexture",X._indirectTexture,Q),_t.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&_t.setValue(O,"batchingColorTexture",X._colorsTexture,Q));let Ln=J.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&k.update(X,J,Mi),(Hn||Re.receiveShadow!==X.receiveShadow)&&(Re.receiveShadow=X.receiveShadow,_t.setValue(O,"receiveShadow",X.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&U.environment!==null&&(Ut.envMapIntensity.value=U.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=ov()),Hn){if(_t.setValue(O,"toneMappingExposure",C.toneMappingExposure),Re.needsLights&&up(Ut,Ds),Se&&q.fog===!0&&Ue.refreshFogUniforms(Ut,Se),Ue.refreshMaterialUniforms(Ut,q,$,W,M.state.transmissionRenderTarget[w.id]),Re.needsLights&&Re.lightProbeGrid){let wt=Re.lightProbeGrid;Ut.probesSH.value=wt.texture,Ut.probesMin.value.copy(wt.boundingBox.min),Ut.probesMax.value.copy(wt.boundingBox.max),Ut.probesResolution.value.copy(wt.resolution)}Er.upload(O,Pu(Re),Ut,Q)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Er.upload(O,Pu(Re),Ut,Q),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&_t.setValue(O,"center",X.center),_t.setValue(O,"modelViewMatrix",X.modelViewMatrix),_t.setValue(O,"normalMatrix",X.normalMatrix),_t.setValue(O,"modelMatrix",X.matrixWorld),q.uniformsGroups!==void 0){let wt=q.uniformsGroups;for(let Dn=0,Fs=wt.length;Dn<Fs;Dn++){let Lu=wt[Dn];se.update(Lu,Mi),se.bind(Lu,Mi)}}return Mi}function up(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.sunLights.needsUpdate=U,w.sunLightShadows.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function dp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(w,U,J){let q=K.get(w);q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),K.get(w.texture).__webglTexture=U,K.get(w.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:J,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){let J=K.get(w);J.__webglFramebuffer=U,J.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,J=0){B=w,j=U,Y=J;let q=null,X=!1,Se=!1;if(w){let ye=K.get(w);if(ye.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(O.FRAMEBUFFER,ye.__webglFramebuffer),F.copy(w.viewport),G.copy(w.scissor),ee=w.scissorTest,S.viewport(F),S.scissor(G),S.setScissorTest(ee),V=-1;return}else if(ye.__webglFramebuffer===void 0)Q.setupRenderTarget(w);else if(ye.__hasExternalTextures)Q.rebindTextures(w,K.get(w.texture).__webglTexture,K.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Qe=w.depthTexture;if(ye.__boundDepthTexture!==Qe){if(Qe!==null&&K.has(Qe)&&(w.width!==Qe.image.width||w.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(w)}}let Pe=w.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Se=!0);let Fe=K.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Fe[U])?q=Fe[U][J]:q=Fe[U],X=!0):w.samples>0&&Q.useMultisampledRTT(w)===!1?q=K.get(w).__webglMultisampledFramebuffer:Array.isArray(Fe)?q=Fe[J]:q=Fe,F.copy(w.viewport),G.copy(w.scissor),ee=w.scissorTest}else F.copy(oe).multiplyScalar($).floor(),G.copy(We).multiplyScalar($).floor(),ee=$e;if(J!==0&&(q=D),S.bindFramebuffer(O.FRAMEBUFFER,q)&&S.drawBuffers(w,q),S.viewport(F),S.scissor(G),S.setScissorTest(ee),X){let ye=K.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye.__webglTexture,J)}else if(Se){let ye=U;for(let Pe=0;Pe<w.textures.length;Pe++){let Fe=K.get(w.textures[Pe]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Pe,Fe.__webglTexture,J,ye)}}else if(w!==null&&J!==0){let ye=K.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ye.__webglTexture,J)}V=-1};function Hu(w){let U=K.get(w);return(U.__readFormat!==w.format||U.__readType!==w.type)&&(U.__readFormat=w.format,U.__readType=w.type,U.__formatReadable=P.textureFormatReadable(w.format),U.__typeReadable=P.textureTypeReadable(w.type)),U}this.readRenderTargetPixels=function(w,U,J,q,X,Se,Ce,ye=0){if(!(w&&w.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=K.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ce!==void 0&&(Pe=Pe[Ce]),Pe){S.bindFramebuffer(O.FRAMEBUFFER,Pe);try{let Fe=w.textures[ye],Qe=Fe.format,st=Fe.type;w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ye);let Ie=Hu(Fe);if(Ie.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ie.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-q&&J>=0&&J<=w.height-X&&O.readPixels(U,J,q,X,be.convert(Qe),be.convert(st),Se)}finally{let Fe=B!==null?K.get(B).__webglFramebuffer:null;S.bindFramebuffer(O.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(w,U,J,q,X,Se,Ce,ye=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=K.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ce!==void 0&&(Pe=Pe[Ce]),Pe)if(U>=0&&U<=w.width-q&&J>=0&&J<=w.height-X){S.bindFramebuffer(O.FRAMEBUFFER,Pe);let Fe=w.textures[ye],Qe=Fe.format,st=Fe.type;w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ye);let Ie=Hu(Fe);if(Ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ft=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ft),O.bufferData(O.PIXEL_PACK_BUFFER,Se.byteLength,O.STREAM_READ),O.readPixels(U,J,q,X,be.convert(Qe),be.convert(st),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Gt=B!==null?K.get(B).__webglFramebuffer:null;S.bindFramebuffer(O.FRAMEBUFFER,Gt);let At=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await af(O,At,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ft),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Se),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ft),O.deleteSync(At),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,J=0){let q=Math.pow(2,-J),X=Math.floor(w.image.width*q),Se=Math.floor(w.image.height*q),Ce=U!==null?U.x:0,ye=U!==null?U.y:0;Q.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,J,0,0,Ce,ye,X,Se),S.unbindTexture()},this.copyTextureToTexture=function(w,U,J=null,q=null,X=0,Se=0){let Ce,ye,Pe,Fe,Qe,st,Ie,ft,Gt,At=w.isCompressedTexture?w.mipmaps[Se]:w.image;if(J!==null)Ce=J.max.x-J.min.x,ye=J.max.y-J.min.y,Pe=J.isBox3?J.max.z-J.min.z:1,Fe=J.min.x,Qe=J.min.y,st=J.isBox3?J.min.z:0;else{let Ut=Math.pow(2,-X);Ce=Math.floor(At.width*Ut),ye=Math.floor(At.height*Ut),w.isDataArrayTexture?Pe=At.depth:w.isData3DTexture?Pe=Math.floor(At.depth*Ut):Pe=1,Fe=0,Qe=0,st=0}q!==null?(Ie=q.x,ft=q.y,Gt=q.z):(Ie=0,ft=0,Gt=0);let St=be.convert(U.format),ei=be.convert(U.type),Re;U.isData3DTexture?(Q.setTexture3D(U,0),Re=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Q.setTexture2DArray(U,0),Re=O.TEXTURE_2D_ARRAY):(Q.setTexture2D(U,0),Re=O.TEXTURE_2D),S.activeTexture(O.TEXTURE0),S.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),S.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),S.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let ci=S.getParameter(O.UNPACK_ROW_LENGTH),at=S.getParameter(O.UNPACK_IMAGE_HEIGHT),Mi=S.getParameter(O.UNPACK_SKIP_PIXELS),qi=S.getParameter(O.UNPACK_SKIP_ROWS),Hn=S.getParameter(O.UNPACK_SKIP_IMAGES);S.pixelStorei(O.UNPACK_ROW_LENGTH,At.width),S.pixelStorei(O.UNPACK_IMAGE_HEIGHT,At.height),S.pixelStorei(O.UNPACK_SKIP_PIXELS,Fe),S.pixelStorei(O.UNPACK_SKIP_ROWS,Qe),S.pixelStorei(O.UNPACK_SKIP_IMAGES,st);let Ds=w.isDataArrayTexture||w.isData3DTexture,_t=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){let Ut=K.get(w),Ln=K.get(U),wt=K.get(Ut.__renderTarget),Dn=K.get(Ln.__renderTarget);S.bindFramebuffer(O.READ_FRAMEBUFFER,wt.__webglFramebuffer),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let Fs=0;Fs<Pe;Fs++)Ds&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,K.get(w).__webglTexture,X,st+Fs),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,K.get(U).__webglTexture,Se,Gt+Fs)),O.blitFramebuffer(Fe,Qe,Ce,ye,Ie,ft,Ce,ye,O.DEPTH_BUFFER_BIT,O.NEAREST);S.bindFramebuffer(O.READ_FRAMEBUFFER,null),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||K.has(w)){let Ut=K.get(w),Ln=K.get(U);S.bindFramebuffer(O.READ_FRAMEBUFFER,H),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,N);for(let wt=0;wt<Pe;wt++)Ds?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ut.__webglTexture,X,st+wt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ut.__webglTexture,X),_t?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ln.__webglTexture,Se,Gt+wt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ln.__webglTexture,Se),X!==0?O.blitFramebuffer(Fe,Qe,Ce,ye,Ie,ft,Ce,ye,O.COLOR_BUFFER_BIT,O.NEAREST):_t?O.copyTexSubImage3D(Re,Se,Ie,ft,Gt+wt,Fe,Qe,Ce,ye):O.copyTexSubImage2D(Re,Se,Ie,ft,Fe,Qe,Ce,ye);S.bindFramebuffer(O.READ_FRAMEBUFFER,null),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else _t?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(Re,Se,Ie,ft,Gt,Ce,ye,Pe,St,ei,At.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(Re,Se,Ie,ft,Gt,Ce,ye,Pe,St,At.data):O.texSubImage3D(Re,Se,Ie,ft,Gt,Ce,ye,Pe,St,ei,At):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Se,Ie,ft,Ce,ye,St,ei,At.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Se,Ie,ft,At.width,At.height,St,At.data):O.texSubImage2D(O.TEXTURE_2D,Se,Ie,ft,Ce,ye,St,ei,At);S.pixelStorei(O.UNPACK_ROW_LENGTH,ci),S.pixelStorei(O.UNPACK_IMAGE_HEIGHT,at),S.pixelStorei(O.UNPACK_SKIP_PIXELS,Mi),S.pixelStorei(O.UNPACK_SKIP_ROWS,qi),S.pixelStorei(O.UNPACK_SKIP_IMAGES,Hn),Se===0&&U.generateMipmaps&&O.generateMipmap(Re),S.unbindTexture()},this.initRenderTarget=function(w){K.get(w).__webglFramebuffer===void 0&&Q.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Q.setTextureCube(w,0):w.isData3DTexture?Q.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Q.setTexture2DArray(w,0):Q.setTexture2D(w,0),S.unbindTexture()},this.resetState=function(){j=0,Y=0,B=null,S.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};function $n(a,e=!1){let t=a[0].index!==null,i=new Set(Object.keys(a[0].attributes)),n=new Set(Object.keys(a[0].morphAttributes)),s={},r={},o=a[0].morphTargetsRelative,l=new ot,c=0;for(let h=0;h<a.length;++h){let u=a[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<a.length;++d){let f=a[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=a[d].attributes.position.count}l.setIndex(u)}for(let h in s){let u=Bf(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in r){let u=r[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let b=0;b<r[h].length;++b)f.push(r[h][b][d]);let m=Bf(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Bf(a){let e,t,i,n=-1,s=0;for(let c=0;c<a.length;++c){let h=a[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let r=new e(s),o=new Rt(r,t,i),l=0;for(let c=0;c<a.length;++c){let h=a[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){let b=h.getComponent(d,m);o.setComponent(d+u,m,b)}}else r.set(h.array,l);l+=h.count*t}return n!==void 0&&(o.gpuType=n),o}function Lh(a,e){if(e===sh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===yr||e===Pa){let t=a.getIndex();if(t===null){let s=[],r=a.getAttribute("position");if(r!==void 0){for(let o=0;o<r.count;o++)s.push(o);a.setIndex(s),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}let i=t.count-2,n=[];if(e===yr)for(let s=1;s<=i;s++)n.push(t.getX(0)),n.push(t.getX(s)),n.push(t.getX(s+1));else for(let s=0;s<i;s++)s%2===0?(n.push(t.getX(s)),n.push(t.getX(s+1)),n.push(t.getX(s+2))):(n.push(t.getX(s+2)),n.push(t.getX(s+1)),n.push(t.getX(s)));return n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),a.setIndex(n),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}function Rr(a){let e=new Map,t=new Map,i=a.clone();return zf(a,i,function(n,s){e.set(s,n),t.set(n,s)}),i.traverse(function(n){if(!n.isSkinnedMesh)return;let s=n,r=e.get(n),o=r.skeleton.bones;s.skeleton=r.skeleton.clone(),s.bindMatrix.copy(r.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),i}function zf(a,e,t){t(a,e);for(let i=0;i<a.children.length;i++)zf(a.children[i],e.children[i],t)}var jc=class extends Ji{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Bh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Uh(t)}),this.register(function(t){return new Kc(t,nt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Kc(t,nt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Qh(t)})}load(e,t,i,n){let s=this,r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){let c=wn.extractUrlBase(e);r=wn.resolveURL(c,this.path)}else r=wn.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){n?n(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new mr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,r,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let s,r={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Xf){try{r[nt.KHR_BINARY_GLTF]=new eu(e)}catch(u){n&&n(u);return}s=JSON.parse(r[nt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new ou(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,r[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case nt.KHR_MATERIALS_UNLIT:r[u]=new kh;break;case nt.KHR_DRACO_MESH_COMPRESSION:r[u]=new tu(s,this.dracoLoader);break;case nt.KHR_TEXTURE_TRANSFORM:r[u]=new iu;break;case nt.KHR_MESH_QUANTIZATION:r[u]=new nu;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(r),c.setPlugins(o),c.parse(i,n)}parseAsync(e,t){let i=this;return new Promise(function(n,s){i.parse(e,t,n,s)})}};function lv(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}function Bt(a,e,t){let i=a.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Uh=class{constructor(e){this.parser=e,this.name=nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){let s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,n=t.cache.get(i);if(n)return n;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,h=new le(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],hi);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Tn(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ri(h),c.distance=u;break;case"spot":c=new En(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),tn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,s=i.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}},kh=class{constructor(){this.name=nt.KHR_MATERIALS_UNLIT}getMaterialType(){return ut}extendParams(e,t,i){let n=[];e.color=new le(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let r=s.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],hi),e.opacity=r[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",s.baseColorTexture,et))}return Promise.all(n)}},Oh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=Bt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},Bh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){let i=Bt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(n.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let s=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ae(s,s)}return Promise.all(n)}},zh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){let i=Bt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},Gh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){let i=Bt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(n)}},Vh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){let i=Bt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.sheenColor=new le(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let s=i.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],hi)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,et)),i.sheenRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(n)}},Wh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){let i=Bt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&n.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(n)}},qh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){let i=Bt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let s=i.attenuationColor||[1,1,1];return t.attenuationColor=new le().setRGB(s[0],s[1],s[2],hi),Promise.all(n)}},Xh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IOR}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){let i=Bt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},jh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){let i=Bt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let s=i.specularColorFactor||[1,1,1];return t.specularColor=new le().setRGB(s[0],s[1],s[2],hi),i.specularColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,et)),Promise.all(n)}},Kh=class{constructor(e){this.parser=e,this.name=nt.EXT_MATERIALS_BUMP}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){let i=Bt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&n.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(n)}},Yh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?fi:null}extendMaterialParams(e,t){let i=Bt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&n.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(n)}},Jh=class{constructor(e){this.parser=e,this.name=nt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;let s=n.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}},Zh=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;let r=s.extensions[t],o=n.images[r.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,r.source,l)}},$h=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;let r=s.extensions[t],o=n.images[r.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,r.source,l)}},Kc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let l=n.byteOffset||0,c=n.byteLength||0,h=n.count,u=n.byteStride,d=new Uint8Array(o,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,u,d,n.mode,n.filter).then(function(f){return f.buffer}):r.ready.then(function(){let f=new ArrayBuffer(h*u);return r.decodeGltfBuffer(new Uint8Array(f),h,u,d,n.mode,n.filter),f})})}else return null}},Qh=class{constructor(e){this.name=nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let n=t.meshes[i.mesh];for(let c of n.primitives)if(c.mode!==Ri.TRIANGLES&&c.mode!==Ri.TRIANGLE_STRIP&&c.mode!==Ri.TRIANGLE_FAN&&c.mode!==void 0)return null;let r=i.extensions[this.name].attributes,o=[],l={};for(let c in r)o.push(this.parser.getDependency("accessor",r[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let m of u){let b=new Ve,g=new R,p=new Dt,x=new R(1,1,1),E=new Bi(m.geometry,m.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&x.fromBufferAttribute(l.SCALE,y),E.setMatrixAt(y,b.compose(g,p,x));let v=null;for(let y in l)if(y==="_COLOR_0"){let M=l[y];E.instanceColor=new mn(M.array,M.itemSize,M.normalized)}else if(y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"){if(v===null){let A=E.geometry;v=new ot,v.name=A.name;for(let _ in A.attributes)v.setAttribute(_,A.attributes[_]);for(let _ in A.morphAttributes)v.morphAttributes[_]=A.morphAttributes[_];A.index!==null&&v.setIndex(A.index),v.morphTargetsRelative=A.morphTargetsRelative;for(let _ of A.groups)v.addGroup(_.start,_.count,_.materialIndex);A.boundingBox!==null&&(v.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(v.boundingSphere=A.boundingSphere.clone()),v.drawRange.start=A.drawRange.start,v.drawRange.count=A.drawRange.count,v.userData=Object.assign({},A.userData),E.geometry=v}let M=l[y];v.setAttribute(y,new mn(M.array,M.itemSize,M.normalized))}ht.prototype.copy.call(E,m),this.parser.assignFinalMaterial(E),f.push(E)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Xf="glTF",Fa=12,Gf={JSON:1313821514,BIN:5130562},eu=class{constructor(e){this.name=nt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Fa),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Xf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-Fa,s=new DataView(e,Fa),r=0;for(;r<n;){let o=s.getUint32(r,!0);r+=4;let l=s.getUint32(r,!0);if(r+=4,l===Gf.JSON){let c=new Uint8Array(e,Fa+r,o);this.content=i.decode(c)}else if(l===Gf.BIN){let c=Fa+r;this.body=e.slice(c,c+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},tu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,n=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},l={},c={};for(let h in r){let u=ru[h]||h.toLowerCase();o[u]=r[h]}for(let h in e.attributes){let u=ru[h]||h.toLowerCase();if(r[h]!==void 0){let d=i.accessors[e.attributes[h]],f=Cr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){n.decodeDracoFile(h,function(f){for(let m in f.attributes){let b=f.attributes[m],g=l[m];g!==void 0&&(b.normalized=g)}u(f)},o,c,hi,d)})})}},iu=class{constructor(){this.name=nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),n=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*n,e.offset.x,-e.repeat.x*n,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},nu=class{constructor(){this.name=nt.KHR_MESH_QUANTIZATION}},Yc=class extends Yi{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n*3+n;for(let r=0;r!==n;r++)t[r]=i[s+r];return t}interpolate_(e,t,i,n){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=n-t,u=(i-t)/h,d=u*u,f=d*u,m=e*c,b=m-c,g=-2*f+3*d,p=f-d,x=1-g,E=p-d+u;for(let v=0;v!==o;v++){let y=r[b+v+o],M=r[b+v+l]*h,A=r[m+v+o],_=r[m+v]*h;s[v]=x*y+E*M+g*A+p*_}return s}},hv=new Dt,su=class extends Yc{interpolate_(e,t,i,n){let s=super.interpolate_(e,t,i,n);return hv.fromArray(s).normalize().toArray(s),s}},Ri={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Cr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vf={9728:It,9729:kt,9984:ec,9985:xr,9986:As,9987:Gi},Wf={33071:Ei,33648:ir,10497:$t},Dh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ru={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Qn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},uv={CUBICSPLINE:void 0,LINEAR:ms,STEP:ps},Fh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function dv(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new ue({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$i})),a.DefaultMaterial}function Ps(a,e,t){for(let i in t.extensions)a[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function tn(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function fv(a,e,t){let i=!1,n=!1,s=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(a);let r=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(i){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):a.attributes.position;r.push(d)}if(n){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):a.attributes.normal;o.push(d)}if(s){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):a.attributes.color;l.push(d)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return i&&(a.morphAttributes.position=h),n&&(a.morphAttributes.normal=u),s&&(a.morphAttributes.color=d),a.morphTargetsRelative=!0,a})}function pv(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)a.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function mv(a){let e,t=a.extensions&&a.extensions[nt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Nh(t.attributes):e=a.indices+":"+Nh(a.attributes)+":"+a.mode,a.targets!==void 0)for(let i=0,n=a.targets.length;i<n;i++)e+=":"+Nh(a.targets[i]);return e}function Nh(a){let e="",t=Object.keys(a).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+a[t[i]]+";";return e}function au(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function gv(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":a.search(/\.ktx2($|\?)/i)>0||a.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var bv=new Ve,ou=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new lv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,s=!1,r=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,r=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||s&&r<98?this.textureLoader=new _s(this.options.manager):this.textureLoader=new ma(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new mr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(r){let o={scene:r[0][n.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:n.asset,parser:i,userData:{}};return Ps(s,o,n),tn(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n].joints;for(let o=0,l=r.length;o<l;o++)e[r[o]].isBone=!0}for(let n=0,s=e.length;n<s;n++){let r=e[n];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(i[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let n=i.clone(),s=(r,o)=>{let l=this.associations.get(r);l!=null&&this.associations.set(o,l);for(let[c,h]of r.children.entries())s(h,o.children[c])};return s(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let n=e(t[i]);if(n)return n}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let n=0;n<t.length;n++){let s=e(t[n]);s&&i.push(s)}return i}getDependency(e,t){let i=e+":"+t,n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(s,r){return i.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[nt.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(s,r){i.load(wn.resolveURL(t.uri,n.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let n=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(e){let t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){let r=Dh[n.type],o=Cr[n.componentType],l=n.normalized===!0,c=new o(n.count*r);return Promise.resolve(new Rt(c,r,l))}let s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(r){let o=r[0],l=Dh[n.type],c=Cr[n.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,m=n.normalized===!0,b,g;if(f&&f!==u){let p=Math.floor(d/f),x="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+p+":"+n.count,E=t.cache.get(x);E||(b=new c(o,p*f,n.count*f/h),E=new bs(b,f/h),t.cache.add(x,E)),g=new zn(E,l,d%f/h,m)}else o===null?b=new c(n.count*l):b=new c(o,d,n.count*l),g=new Rt(b,l,m);if(n.sparse!==void 0){let p=Dh.SCALAR,x=Cr[n.sparse.indices.componentType],E=n.sparse.indices.byteOffset||0,v=n.sparse.values.byteOffset||0,y=new x(r[1],E,n.sparse.count*p),M=new c(r[2],v,n.sparse.count*l);o!==null&&(g=new Rt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let A=0,_=y.length;A<_;A++){let T=y[A];if(g.setX(T,M[A*l]),l>=2&&g.setY(T,M[A*l+1]),l>=3&&g.setZ(T,M[A*l+2]),l>=4&&g.setW(T,M[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,i=this.options,s=t.textures[e].source,r=t.images[s],o=this.textureLoader;if(r.uri){let l=i.manager.getHandler(r.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,i){let n=this,s=this.json,r=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=r.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(s.samplers||{})[r.sampler]||{};return h.magFilter=Vf[d.magFilter]||kt,h.minFilter=Vf[d.minFilter]||Gi,h.wrapS=Wf[d.wrapS]||$t,h.wrapT=Wf[d.wrapT]||$t,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==It&&h.minFilter!==kt,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,n=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let r=n.images[e],o=self.URL||self.webkitURL,l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=i.getDependency("bufferView",r.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:r.mimeType});return l=o.createObjectURL(d),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(b){let g=new qt(b);g.needsUpdate=!0,d(g)}),t.load(wn.resolveURL(u,s.path),m,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),tn(u,r),u.userData.mimeType=r.mimeType||gv(r.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,n){let s=this;return this.getDependency("texture",i.index).then(function(r){if(!r)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(r=r.clone(),r.channel=i.texCoord),s.extensions[nt.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[nt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=s.associations.get(r);r=s.extensions[nt.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,l)}}return n!==void 0&&(r.colorSpace=n),e[t]=r,r})}assignFinalMaterial(e){let t=e.geometry,i=e.material,n=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new dr,si.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new Wn,si.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||s||r){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return ue}loadMaterial(e){let t=this,i=this.json,n=this.extensions,s=i.materials[e],r,o={},l=s.extensions||{},c=[];if(l[nt.KHR_MATERIALS_UNLIT]){let u=n[nt.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{let u=s.pbrMetallicRoughness||{};if(o.color=new le(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],hi),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,et)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=ai);let h=s.alphaMode||Fh.OPAQUE;if(h===Fh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Fh.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==ut&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ae(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&r!==ut&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==ut){let u=s.emissiveFactor;o.emissive=new le().setRGB(u[0],u[1],u[2],hi)}return s.emissiveTexture!==void 0&&r!==ut&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,et)),Promise.all(c).then(function(){let u=new r(o);return s.name&&(u.name=s.name),tn(u,s),t.associations.set(u,{materials:e}),s.extensions&&Ps(n,u,s),u})}createUniqueName(e){let t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,n=this.primitiveCache;function s(o){return i[nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return qf(l,o,t)})}let r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=mv(c),u=n[h];if(u)r.push(u.promise);else{let d;c.extensions&&c.extensions[nt.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=qf(new ot,c,t),c.mode===Ri.TRIANGLE_STRIP?d=d.then(f=>Lh(f,Pa)):c.mode===Ri.TRIANGLE_FAN&&(d=d.then(f=>Lh(f,yr))),n[h]={primitive:c,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){let t=this,i=this.json,n=this.extensions,s=i.meshes[e],r=s.primitives,o=[];for(let l=0,c=r.length;l<c;l++){let h=r[l].material===void 0?dv(this.cache):this.getDependency("material",r[l].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let b=h[f],g=r[f],p,x=c[f];if(g.mode===Ri.TRIANGLES||g.mode===Ri.TRIANGLE_STRIP||g.mode===Ri.TRIANGLE_FAN||g.mode===void 0){let E=s.isSkinnedMesh===!0,v=b.hasAttribute("skinIndex")&&b.hasAttribute("skinWeight");E&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=E&&v?new sa(b,x):new ve(b,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===Ri.LINES)p=new aa(b,x);else if(g.mode===Ri.LINE_STRIP)p=new gn(b,x);else if(g.mode===Ri.LINE_LOOP)p=new oa(b,x);else if(g.mode===Ri.POINTS)p=new xs(b,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&pv(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),tn(p,s),g.extensions&&Ps(n,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&Ps(n,u[0],s),u[0];let d=new qe;s.extensions&&Ps(n,d,s),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Lt(ch.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new Zi(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),tn(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let n=0,s=t.joints.length;n<s;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){let s=n.pop(),r=n,o=[],l=[];for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u){o.push(u);let d=new Ve;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ra(o,l)})}loadAnimation(e){let t=this.json,i=this,n=t.animations[e],s=n.name?n.name:"animation_"+e,r=[],o=[],l=[],c=[],h=[];for(let u=0,d=n.channels.length;u<d;u++){let f=n.channels[u],m=n.samplers[f.sampler],b=f.target,g=b.node,p=n.parameters!==void 0?n.parameters[m.input]:m.input,x=n.parameters!==void 0?n.parameters[m.output]:m.output;b.node!==void 0&&(r.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),c.push(m),h.push(b))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],b=u[3],g=u[4],p=[];for(let E=0,v=d.length;E<v;E++){let y=d[E],M=f[E],A=m[E],_=b[E],T=g[E];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let C=i._createAnimationTracks(y,M,A,_,T);if(C)for(let I=0;I<C.length;I++)p.push(C[I])}let x=new vs(s,void 0,p);return tn(x,n),x})}createNodeMesh(e){let t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){let r=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]}),r})}loadNode(e){let t=this.json,i=this,n=t.nodes[e],s=i._loadNodeShallow(e),r=[],o=n.children||[];for(let c=0,h=o.length;c<h;c++)r.push(i.getDependency("node",o[c]));let l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(r),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,bv)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,m=u[0];h.pivot=new R().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],r=s.name?n.createUniqueName(s.name):"",o=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(n.getDependency("camera",s.camera).then(function(c){return n._getNodeRef(n.cameraCache,s.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new lr:c.length>1?h=new qe:c.length===1?h=c[0]:h=new ht,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=r),tn(h,s),s.extensions&&Ps(i,h,s),s.matrix!==void 0){let u=new Ve;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!n.associations.has(h))n.associations.set(h,{});else if(s.mesh!==void 0&&n.meshCache.refs[s.mesh]>1){let u=n.associations.get(h);n.associations.set(h,{...u})}return n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],n=this,s=new qe;i.name&&(s.name=n.createUniqueName(i.name)),tn(s,i),i.extensions&&Ps(t,s,i);let r=i.nodes||[],o=[];for(let l=0,c=r.length;l<c;l++)o.push(n.getDependency("node",r[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?s.add(Rr(d)):s.add(d)}let c=h=>{let u=new Map;for(let[d,f]of n.associations)(d instanceof si||d instanceof qt)&&u.set(d,f);return h.traverse(d=>{let f=n.associations.get(d);f!=null&&u.set(d,f)}),u};return n.associations=c(s),s})}_createAnimationTracks(e,t,i,n,s){let r=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Qn[s.path]===Qn.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(Qn[s.path]){case Qn.weights:h=_n;break;case Qn.rotation:h=yn;break;case Qn.translation:case Qn.scale:h=Xn;break;default:i.itemSize===1?h=_n:h=Xn;break}let u=n.interpolation!==void 0?uv[n.interpolation]:ms,d=this._getArrayFromAccessor(i);for(let f=0,m=l.length;f<m;f++){let b=new h(l[f]+"."+Qn[s.path],t.array,d,u);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),r.push(b)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=au(t.constructor),n=new Float32Array(t.length);for(let s=0,r=t.length;s<r;s++)n[s]=t[s]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let n=this instanceof yn?su:Yc;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function xv(a,e,t){let i=e.attributes,n=new ui;if(i.POSITION!==void 0){let o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(n.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),o.normalized){let h=au(Cr[o.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new R,l=new R;for(let c=0,h=s.length;c<h;c++){let u=s[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let b=au(Cr[d.componentType]);l.multiplyScalar(b)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}a.boundingBox=n;let r=new ni;n.getCenter(r.center),r.radius=n.min.distanceTo(n.max)/2,a.boundingSphere=r}function qf(a,e,t){let i=e.attributes,n=[];function s(r,o){return t.getDependency("accessor",r).then(function(l){a.setAttribute(o,l)})}for(let r in i){let o=ru[r]||r.toLowerCase();o in a.attributes||n.push(s(i[r],o))}if(e.indices!==void 0&&!a.index){let r=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});n.push(r)}return Ze.workingColorSpace!==hi&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),tn(a,e),xv(a,e,t),Promise.all(n).then(function(){return e.targets!==void 0?fv(a,e.targets,t):a})}var jf=(function(){var a="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),i=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var n=WebAssembly.validate(t)?o(e):o(a),s,r=WebAssembly.instantiate(n,{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),E=0;E<p.length;++E){var v=p.charCodeAt(E);x[E]=v>96?v-97:v>64?v-39:v+4}for(var y=0,E=0;E<p.length;++E)x[y++]=x[E]<60?i[x[E]]:(x[E]-60)*64+x[++E];return x.buffer.slice(0,y)}function l(p,x,E,v,y,M,A){var _=p.exports.sbrk,T=v+3&-4,C=_(T*y),I=_(M.length),L=new Uint8Array(p.exports.memory.buffer);L.set(M,I);var D=x(C,v,y,I,M.length);if(D==0&&A&&A(C,T,y),E.set(L.subarray(C,C+v*y)),_(C-_(0)),D!=0)throw new Error("Malformed buffer data: "+D)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(E){var v=E.data;x.pending-=v.count,x.requests[v.id][v.action](v.value),delete x.requests[v.id]},x}function m(p){for(var x="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(n)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+l.toString()+g.toString(),E=new Blob([x],{type:"text/javascript"}),v=URL.createObjectURL(E),y=u.length;y<p;++y)u[y]=f(v);for(var y=p;y<u.length;++y)u[y].object.postMessage({});u.length=p,URL.revokeObjectURL(v)}function b(p,x,E,v,y){for(var M=u[0],A=1;A<u.length;++A)u[A].pending<M.pending&&(M=u[A]);return new Promise(function(_,T){var C=new Uint8Array(E),I=++d;M.pending+=p,M.requests[I]={resolve:_,reject:T},M.object.postMessage({id:I,count:p,size:x,source:C,mode:v,filter:y},[C.buffer])})}function g(p){var x=p.data;self.ready.then(function(E){if(!x.id)return self.close();try{var v=new Uint8Array(x.count*x.size);l(E,E.exports[x.mode],v,x.count,x.size,x.source,E.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:v},[v.buffer])}catch(y){self.postMessage({id:x.id,count:x.count,action:"reject",value:y})}})}return{ready:r,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,x,E,v,y){l(s,s.exports.meshopt_decodeVertexBuffer,p,x,E,v,s.exports[c[y]])},decodeIndexBuffer:function(p,x,E,v){l(s,s.exports.meshopt_decodeIndexBuffer,p,x,E,v)},decodeIndexSequence:function(p,x,E,v){l(s,s.exports.meshopt_decodeIndexSequence,p,x,E,v)},decodeGltfBuffer:function(p,x,E,v,y,M){l(s,s.exports[h[y]],p,x,E,v,s.exports[c[M]])},decodeGltfBufferAsync:function(p,x,E,v,y){return u.length>0?b(p,x,E,h[v],c[y]):r.then(function(){var M=new Uint8Array(p*x);return l(s,s.exports[h[v]],M,p,x,E,s.exports[c[y]]),M})}}})();var Jc=class extends fn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Ee;e.deleteAttribute("uv");let t=new ue({side:Ot}),i=new ue,n=new ri(16777215,900,28,2);n.position.set(.418,16.199,.3),this.add(n);let s=new ve(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let r=new Bi(e,i,6),o=new ht;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),r.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),r.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),r.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),r.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),r.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),r.setMatrixAt(5,o.matrix),this.add(r);let l=new ve(e,Pr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ve(e,Pr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new ve(e,Pr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new ve(e,Pr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new ve(e,Pr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new ve(e,Pr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Pr(a){return new ua({color:0,emissive:16777215,emissiveIntensity:a})}var Ir={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var yi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},vv=new Zi(-1,1,1,-1,0,1),cu=class extends ot{constructor(){super(),this.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ke([0,2,0,0,2,0],2))}},_v=new cu,es=class{constructor(e){this._mesh=new ve(_v,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,vv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Hr=class extends yi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ct?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Cn.clone(e.uniforms),this.material=new Ct({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new es(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Na=class extends yi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,r,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}},Zc=class extends yi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var $c=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new Ae);this._width=i.width,this._height=i.height,t=new Ft(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hr(Ir),this.copyPass.material.blending=Ai,this.timer=new ga}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let n=0,s=this.passes.length;n<s;n++){let r=this.passes[n];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),r.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Na!==void 0&&(r instanceof Na?i=!0:r instanceof Zc&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ua=class extends yi{constructor(e,t,i=null,n=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new le}render(e,t,i){let n=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=n}};var Kf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new le(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Lr=class a extends yi{constructor(e,t=1,i,n){super(),this.strength=t,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new Ae(e.x,e.y):new Ae(256,256),this.clearColor=new le(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Ft(s,r,{type:Xt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Ft(s,r,{type:Xt,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Ft(s,r,{type:Xt,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),r=Math.round(r/2)}let o=Kf;this.highPassUniforms=Cn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ct({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ae(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Cn.clone(Ir.uniforms),this.blendMaterial=new Ct({uniforms:this.copyUniforms,vertexShader:Ir.vertexShader,fragmentShader:Ir.fragmentShader,premultipliedAlpha:!0,blending:Zt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new le,this._oldClearAlpha=1,this._basic=new ut,this._fsQuad=new es(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new Ae(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=a.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=a.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=r}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(i*i))/i);let n=[],s=[];for(let r=1;r<e;r+=2){let o=t[r],l=r+1<e?t[r+1]:0,c=o+l;n.push((r*o+(r+1)*l)/c),s.push(c)}return new Ct({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ae(.5,.5)},direction:{value:new Ae(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:n},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Ct({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Lr.BlurDirectionX=new Ae(1,0);Lr.BlurDirectionY=new Ae(0,1);var ka={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Qc=class extends yi{constructor(){super(),this.isOutputPass=!0,this.uniforms=Cn.clone(ka.uniforms),this.material=new fr({name:ka.name,uniforms:this.uniforms,vertexShader:ka.vertexShader,fragmentShader:ka.fragmentShader}),this._fsQuad=new es(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ze.getTransfer(this._outputColorSpace)===lt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ba?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===xa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===va?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ts?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ya?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ma?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===_a&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var yv=["########################################","########################################","##........######........######........##","##.S...CC.######.....WS.MMMMMM...L..S.##","##......C.MMMMMM..L.....PPPLPP........##","##....L...PPRPPP........MMMMMM.....W..##","##..W.....MMMMMM........######.CC.....##","##.B......########MPPM####MMMM......B.##","##........########MPLM###MPPPP........##","####MPMMMMMMMMMMMMMWPM###MPMMM###MPM####","####MPPPPLPPPPPPRPPPPM###MLM#####MRM####","####MLMMMMMMPMMMMMMPPM###MPPM####MPM####","####MPM#####M#............MPM##.......##","##.......#####....W.R.....MPMMM.CC..C.##","##..C..B.#####..O......O..PPLPP....C..##","##.......MMMMM...K........MMMMM...WC..##","##.S.L...PPRPP......@.K...#####.C...B.##","##.......MMMMM..O......O..MMMMM..C....##","##....W..#####.....W.W....PPLPP...R...##","##.......#####............MMMMM.W...S.##","####MPM#########MPM##MPM#######.......##","####MPM#########MPM##MRM#########MPM####","####MLM#########MLM##MPM#########MLM####","####MPM#########MPM##MPM#########MPM####","##.........###...........###..........##","##..CC...B.###.....K.....MMM..W.......##","##....L....MMM..W.....W..PRP....L.....##","##.........PLP...........MMM..........##","##.S....W..MMM.C...S...B.###..B..CC.S.##","##.........###...........###..........##","########################################","########################################"],Mv=yv.map((a,e)=>e===4?a.slice(0,33)+"E"+a.slice(34):a);var Sv=["#####################################GG#########","#####################################GG#########","##............................................##","##....S................S.................S....##","##............................................##","##.............CC.............................##","##..........Y..............B.......Y..........##","##............................XXXX............##","##.......XXX..................................##","##...B....................C...................##","##................W.....................C.....##","##....................X.......................##","##..Y.......C........................B.....Y..##","##.S........................................S.##","##......................Y........X............##","##.............X.................X............##","##.............X....B...W.....................##","##....C.......................................##","##...........................CC...............##","##.......B......Y...............Y.......B.....##","##....................XXX.....................##","##.S........................................S.##","##............W..................W............##","##....................................X.......##","##......X.............................X.......##","##......X.............B.......................##","##...Y........C...............C...........Y...##","##......................W.....................##","##............................................##","##.................TTTTTTTTTT.................##","##.................TTTTTTTTTT.................##","##..........1234567TTTT@TTTTT7654321..........##","##..........1234567TTTTTTTTTT7654321..........##","##.................TTTTTTTTTT.................##","##.................TTTTTTTTTT.................##","##.................##########.................##","##.................##########.................##","##.................##########.................##","################################################","################################################"],Ev=["HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH","HHHHHHHHHHHH,.|.,HHHHHHHHHHHHHHHHH,.|.,HHHHHHHHHHHHH","HHHHHHHHHHHH,VS.,HHHHHHHHHHHHHHHHH,.SE,HHHHHHHHHHHHH","HHHHiciciHHH,V|.,HHicciiciHHciicHH,.|.,HHiciiciHHHHH","HHHHiiliiHHH,...YHHiiiliiiHHiliiHHYV..,HHiiliiiHHHHH","HHHHiiiiiHHH,.|.,HHciiiiiiHHiiiiHH,V|.,HHiiiiicHHHHH","HHHHHiiiHHHH,...,HHHHiiiHHHHHiiHHH,...,HHHiiiHHHHHHH","HH,U,,Y,,,U,,.|.,,U,,,,,,Y,,,,,,U,,.|.B,,,,,Y,,U,,HH","HH...AA....................AA...........AA........HH","HH-S-.-.-.-.-...-.-.-.-.-S-.-.-.-.-...-.-.-.-.-.S.HH","HH..................AA......................AA....HH","HH,,U,,,,,C,,.|.Y,,,B,,,,,,,,,U,,,,.N.,,Y,,,,,,U,,HH","HHHHHiiiiHHH,...,HHHHHHHHHHHHHHHHH,...,HHHHiiHHHHHHH","HHHHiiiiiiHH,V|.,HHiiiiiiiiiiiicHH,.|.,HHciiiiiHHHHH","HHHHiiciliHH,V..,HHiccliccciliiiHH,..V,HHiiliiiHHHHH","HHHHiiiiiiHH,.|.,HHicciiiiiiiiciii,.|V,HHiiiiicHHHHH","HHHHciiiicHHY..V,HHiiiiiiliiicciHH,...YHHHHHHHHHHHHH","HHHHHHHHHHHH,.|V,HHiiiiiiiiiiiiiHH,.|.,HHHHHHHHHHHHH","HHHHHHHHHHHH,...,HHHHHHiiiiHHHHHHH,...,HHHHHHHHHHHHH","HH,,,,Y,,,U,,NN.,,,,,,,,,,Y,,,,,C,,.|.,,,,,,,U,,,,HH","HH.....AA....................AA...................HH","HH-S-.-.-.-.-...-.-.-.-.-S-.-.-.-.-...-.-.AA-.-.S.HH","HH................AA..........................AA..HH","HH,,U,,,,,,,,.|.,,,,Y,,,,B,,,,U,,,,.NN,,,,,,Y,,,,,HH","HHHHHHHHHHHHU...,,,,,,,,,,,,,,,,,,,...,HHHHHHHHHHHHH","HHHHHHHHHHHH,.|.,,C,,,,,,,AA,,,B,,,.|.,HHHHHHHHHHHHH","HHHHHHHHHHHH,V..,,C,AA,,,,,,,,,,,,,...,HHHHHHHHHHHHH","HHHHHHiciiiH,V|.,,,,,,,,,,,,,,S,,,,.|.,HHHHHHHHHHHHH","HHHHHHiiliii,...,,,,,,,,,,,,,,,,,,BV..,HHHHHHHHHHHHH","HHHHHHiiiiiiY.|.,,,,,,,,,,,,,,,,,,,V|.YHiiiiciHHHHHH","HHHHHHiciiiH,...,,,V,,,,,O,,,,,,,,,...,iiiliiiHHHHHH","HHHHHHHHHHHH,.|.,,,V,,,,,,,,,,,,,,,.|.,iiiiiiiHHHHHH","HHHHHHHHHHHH,...,,S,,,,,,,,,,,,,,,U...,HiiiiciHHHHHH","HHHHHHHHHHHH,.|.,,,,,,Y,,,,,,AA,,,,.|.,HHHHHHHHHHHHH","HHHHHHHHHHHH,..V,,,,,,,,,,,,,,,,C,,...,HHHHHHHHHHHHH","HHHHHHHHHHHH,.|VU,B,,,,,,,XX,,,C,,,.|.,HHHHHHHHHHHHH","HHHHHHHHHHHH,...,,,,,,,,,,,,,,,,,,,...,HHHHHHHHHHHHH","HHHHHHHHHHHH,.|.,HHHHHHHkgHHHHHHHH,.|V,HHHHHHHHHHHHH","HHHHHHHHHHHH,...,HHHHHHHggHHHHHHHH,..V,HHHHHHHHHHHHH","HHHHHHHHHHHH,V|.YHHHHHHHggHHHHHHHHY.|.,HHHHHHHHHHHHH","HHHHHHHHHHHH,V..,HHHHHHHgkHHHHHHHH,...,HHHHHHHHHHHHH","HHHHHHHHHHHH,.S.,HHHHHHHggHHHHHHHH,.S.,HHHHHHHHHHHHH","HHHHHHHHHHHH,...,HHHHHHHagHHHHHHHH,...,HHHHHHHHHHHHH","HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH","HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH"],Tv=[{r0:7,c0:5,r1:7,c1:7,face:"s",name:"B\xC4CKEREI KORN"},{r0:7,c0:21,r1:7,c1:23,face:"s",name:"ELEKTRO FUNKE"},{r0:7,c0:29,r1:7,c1:30,face:"s",name:"KIOSK 24"},{r0:7,c0:42,r1:7,c1:44,face:"s",name:"APOTHEKE"},{r0:13,c0:5,r1:13,c1:8,face:"n",name:"BLUMEN ROSE"},{r0:19,c0:23,r1:19,c1:26,face:"s",name:"SUPERMARKT"},{r0:29,c0:11,r1:30,c1:11,face:"e",name:"IMBISS"},{r0:31,c0:39,r1:32,c1:39,face:"w",name:"FRISEUR"},{r0:13,c0:43,r1:13,c1:44,face:"n",name:"PFANDHAUS"}],el=4,za={halle:{key:"halle",name:"Die Halle",map:Mv,outdoor:!1,wallH:4.4,fog:.032,fogColor:460553,startYaw:Math.PI,ambient:0,exitLabel:"AUSGANG",next:"hof"},hof:{key:"hof",name:"Der Hof",map:Sv,outdoor:!0,wallH:7.5,fog:.0095,fogColor:725016,startYaw:0,ambient:.55,roofStart:!0,sky:"night",exitLabel:"ZUR STADT",exitR:1.7,beamH:14,next:"stadt"},stadt:{key:"stadt",name:"Die Stadt",map:Ev,outdoor:!0,city:!0,wallH:3.4,fog:.0105,fogColor:9338758,startYaw:0,ambient:1,sky:"dawn",envI:.32,flash:5,lampI:26,exitLabel:"ZUR HALLE",next:"halle",shops:Tv}},re=2,Yf=4.4,Jf=new Set(["#","M"]),wv=new Set(["#","M","C","B","O","W","X","Y","H","A","V","N","G"]),Zf={i:".",g:".",l:"L",k:"L",c:"C",a:"@"},Av=1.45,Rv=1.05,lu=2.8,Is=.9,$f=1.7,Dr=class{constructor(e,t=za.halle){this.tex=e,this.def=t,this.interior=new Uint8Array(t.map.length*t.map[0].length),this.map=t.map.map((i,n)=>i.split("").map((s,r)=>Zf[s]?(this.interior[n*i.length+r]=s==="g"||s==="a"||s==="k"?2:1,Zf[s]):s).join("")),this.outdoor=!!t.outdoor,this.rows=this.map.length,this.cols=this.map[0].length,this.w=this.cols*re,this.h=this.rows*re,this.group=new qe,this.colliders=[],this.virtual=[],this.shadowLights=[],this.spawns=[],this.circles=[],this.lampPositions=[],this.playerStart=new R,this.blocked=new Uint8Array(this.rows*this.cols),this.flow=new Float32Array(this.rows*this.cols),this.flowCell=-1,this.barrels=[],this.heap=new Int32Array(this.rows*this.cols*8);for(let i=0;i<this.rows;i++)for(let n=0;n<this.cols;n++){let s=this.map[i][n];wv.has(s)&&(this.blocked[i*this.cols+n]=1)}this.heights=new Float32Array(this.rows*this.cols);for(let i=0;i<this.rows;i++)for(let n=0;n<this.cols;n++)this.heights[i*this.cols+n]=this.cellH(this.map[i][n])}cellH(e){return e==="T"||this.def.roofStart&&e==="@"?el:e>="1"&&e<="9"?(e.charCodeAt(0)-48)*.5:0}hAt(e,t){return e<0||t<0||e>=this.cols||t>=this.rows?0:this.heights[t*this.cols+e]}stepOk(e,t,i,n){return Math.abs(this.hAt(i,n)-this.hAt(e,t))<.6}cx(e){return Math.floor(e/re)}cz(e){return Math.floor(e/re)}center(e,t){return new R((e+.5)*re,0,(t+.5)*re)}isBlocked(e,t){return e<0||t<0||e>=this.cols||t>=this.rows?!0:this.blocked[t*this.cols+e]===1}isWall(e,t){if(e<0||t<0||e>=this.cols||t>=this.rows)return!0;let i=this.map[t][e];return Jf.has(i)||i==="H"||i==="G"&&!this.gateOpen()}gateOpen(){return!!(this.gate&&this.gate.open>.85)}isInterior(e,t){return e<0||t<0||e>=this.cols||t>=this.rows?0:this.interior[t*this.cols+e]}faceWall(e,t){if(e<0||t<0||e>=this.cols||t>=this.rows)return!0;let i=this.map[t][e];return i==="#"||i==="M"||i==="H"}mat(e,t={}){let{normalScale:i,...n}=t,s=this.tex[e],r=new ue({map:s.c,normalMap:s.n,roughnessMap:s.orm,metalnessMap:s.orm,aoMap:s.orm,roughness:1,metalness:1,aoMapIntensity:1,...n});return i&&r.normalScale.set(i,i),r}build(e){let t=this.group;e.add(t);let i={bricks:this.mat("bricks",{color:10128518,normalScale:1.4}),metal:this.mat("metal",{color:12107976,normalScale:1.2}),concrete:this.mat("concrete",{color:7169374,normalScale:.7}),plate:this.mat("plate",{color:9080982}),ceiling:this.mat("ceiling",{color:3881532}),hazard:this.mat("hazard",{color:13619151}),rust:this.mat("rust",{color:10518640})};this.mats=i;let n={"#":[],M:[]},s=[],r=this.def.wallH||Yf,o=[[0,-1,"n"],[0,1,"s"],[-1,0,"w"],[1,0,"e"]];for(let T=0;T<this.rows;T++)for(let C=0;C<this.cols;C++){let I=this.map[T][C];if(Jf.has(I))for(let[L,D,H]of o){if(this.faceWall(C+L,T+D))continue;let N=C*re,j=T*re,Y,B;H==="n"&&(Y=[N+re,j],B=[N,j]),H==="s"&&(Y=[N,j+re],B=[N+re,j+re]),H==="w"&&(Y=[N,j],B=[N,j+re]),H==="e"&&(Y=[N+re,j+re],B=[N+re,j]);let V=[L,0,D];n[I].push(ts(Y,B,0,r,V,2.2));let Z=.04,F=[Y[0]+L*Z,Y[1]+D*Z],G=[B[0]+L*Z,B[1]+D*Z];s.push(ts(F,G,0,.32,V,1,.32))}}for(let T of Object.keys(n)){if(!n[T].length)continue;let C=new ve($n(n[T]),T==="#"?i.bricks:i.metal);C.receiveShadow=!0,C.castShadow=!0,t.add(C),this.colliders.push(C)}if(s.length){let T=new ve($n(s),i.hazard);T.receiveShadow=!0,t.add(T)}let l=new pt(this.w,this.h);l.rotateX(-Math.PI/2),l.translate(this.w/2,0,this.h/2),nn(l,"xz",3.2),this.def.city&&nn(l,"xz",9);let c=new ve(l,this.def.city?this.cityMat("asphalt"):i.concrete);c.receiveShadow=!0,t.add(c),this.colliders.push(c),this.floor=c;let h=[];for(let T=0;T<this.rows;T++)for(let C=0;C<this.cols;C++){if(this.map[T][C]!=="P")continue;let I=new pt(re,re);I.rotateX(-Math.PI/2),I.translate((C+.5)*re,.004,(T+.5)*re),nn(I,"xz",2),h.push(I)}if(h.length){let T=new ve($n(h),i.plate);T.receiveShadow=!0,t.add(T)}if(!this.outdoor){let T=new pt(this.w,this.h);T.rotateX(Math.PI/2),T.translate(this.w/2,r,this.h/2),nn(T,"xz",4);let C=new ve(T,i.ceiling);C.receiveShadow=!0,t.add(C),this.colliders.push(C);let I=[];for(let D=2;D<this.rows;D+=4){let H=new Ee(this.w,.35,.3);H.translate(this.w/2,r-.175,D*re),nn(H,"xy",2),I.push(H)}let L=new ve($n(I),i.rust);L.castShadow=!1,t.add(L)}let u=[],d=[],f=[],m=[],b=new ue({color:662021,emissive:8257338,emissiveIntensity:3.2}),g=[],p=[],x=[],E=[],v=[],y=hu(1337);for(let T=0;T<this.rows;T++)for(let C=0;C<this.cols;C++){let I=this.map[T][C],L=(C+.5)*re,D=(T+.5)*re;if(I==="C"&&this.def.city&&this.isInterior(C,T))(this._shelves||(this._shelves=[])).push({x:L,z:D,c:C,r:T});else if(I==="C"){let H=$f,N=new Ee(H,H,H);is(N,H),N.rotateY((y()-.5)*.12),N.translate(L,H/2,D),(this.def.city?this._ccrates||(this._ccrates=[]):u).push(N)}else if(I==="W"){let H=new Ee(1.8,Is,1.8);is(H,1.8),H.translate(L,Is/2,D),f.push(H);for(let[N,j,Y,B]of[[1.82,.08,0,.87],[1.82,.08,0,-.87],[.08,1.82,.87,0],[.08,1.82,-.87,0]]){let V=new Ee(N,.1,j);V.translate(L+Y,Is-.045,D+B),m.push(V)}}else if(I==="B"){let H=[],N=[];for(let F=0;F<3;F++){let G=L+(F===0?-.35:F===1?.4:.05),ee=D+(F===2?.5:-.15),Me=new Be(.36,.36,1.15,20,1,!1);Me.translate(G,.575,ee),H.push(Me);let fe=new wi(.3,20);fe.rotateX(-Math.PI/2),fe.translate(G,1.152,ee),N.push(fe)}let j=new ve($n(H),null),Y=new ve($n(N),b);j.castShadow=!0,j.receiveShadow=!0;let B={x:L,z:D,r:.9},V=this.addLight(L,1.6,D,7208746,6,7,!1),Z={c:C,r:T,x:L,z:D,mesh:j,top:Y,circle:B,light:V,hp:25,alive:!1};j.userData.barrel=Z,Y.userData.barrel=Z,this.barrels.push(Z)}else if(I==="O"&&this.def.city)(this._litfass||(this._litfass=[])).push({x:L,z:D}),this.circles.push({x:L,z:D,r:.78});else if(I==="O"){let H=new Be(.7,.8,r,16,1,!0);H.translate(L,r/2,D),Pv(H,.7,r),d.push(H);let N=new Be(.81,.81,.08,16,1,!0);N.translate(L,2.2,D),v.push(N),this.circles.push({x:L,z:D,r:.85})}else if(I==="L"||I==="K"){let H=new Ee(1.4,.12,.5);H.translate(L,r-.06,D),g.push(H);let N=new pt(1.25,.36);N.rotateX(Math.PI/2),N.translate(L,r-.125,D),p.push(N),this.addLight(L,r-.5,D,16767400,I==="K"?40:this.def.city?14:22,this.def.city?9:16,I==="K",y()<(this.def.city?.6:.25)),this.lampPositions.push(new R(L,r-.5,D))}else if(I==="R"){let H=new Ee(.6,.12,.6);H.translate(L,r-.06,D),g.push(H);let N=new pt(.5,.5);N.rotateX(Math.PI/2),N.translate(L,r-.125,D),x.push(N),this.addLight(L,r-.6,D,16722450,18,13,!1,!0)}else if(I==="S"){let H=new pt(1.7,1.7);H.rotateX(-Math.PI/2),H.translate(L,.008,D),E.push(H),this.spawns.push(new R(L,0,D))}else if(I==="@")this.playerStart.set(L,this.cellH(I),D);else if(I==="E")this.exitPos=new R(L,this.cellH(I),D);else if(I==="X"){let H=new Ee(re,lu,re);is(H,2.4),H.translate(L,lu/2,D),(this._containers||(this._containers=[])).push(H)}else if(I==="Y"){let H=new Be(.09,.13,7,10);H.translate(L,3.5,D),(this._poles||(this._poles=[])).push(H);let N=new Ee(.9,.18,.5);N.translate(L,7.05,D),g.push(N);let j=new pt(.8,.4);j.rotateX(Math.PI/2),j.translate(L,6.95,D),p.push(j),(!this.def.city||y()<.45)&&this.addLight(L,6.6,D,this.def.city?16765600:13623551,this.def.lampI||110,this.def.city?18:30,!1,y()<(this.def.city?.5:.2)),this.circles.push({x:L,z:D,r:.2})}}for(let T=0;T<this.rows;T++)for(let C=0;C<this.cols;C++)if(this.map[T][C]==="M")for(let[I,L]of[[0,-1],[0,1],[-1,0],[1,0]]){if(this.isWall(C+I,T+L))continue;let D=(C+.5)*re+I*(re/2+.02),H=(T+.5)*re+L*(re/2+.02),N=new Ee(I?.03:.08,2.6,I?.08:.03);N.translate(D,1.9,H),v.push(N)}let M=(T,C,I=!0,L=!0)=>{if(!T.length)return null;let D=new ve($n(T),C);return D.castShadow=I,D.receiveShadow=!0,t.add(D),L&&this.colliders.push(D),D};M(u,this.mat("rust",{color:9404266})),M(f,this.mat("plate",{color:10133670})),M(m,i.hazard,!1,!1);for(let T of this.barrels)T.mesh.material=i.hazard,this.restoreBarrel(T);M(d,i.metal),M(g,new ue({color:2236962,roughness:.5,metalness:.8}),!1,!1),M(p,new ue({color:0,emissive:16769720,emissiveIntensity:6}),!1,!1),M(x,new ue({color:0,emissive:16719888,emissiveIntensity:7}),!1,!1),M(v,new ue({color:1115392,emissive:16739125,emissiveIntensity:4.5}),!1,!1);let A=new ue({map:Qf(),transparent:!0,depthWrite:!1,roughness:.6,metalness:.7,emissive:16720384,emissiveIntensity:.9,emissiveMap:Qf(!0),polygonOffset:!0,polygonOffsetFactor:-2});M(E,A,!1,!1),this.def.city?this.buildCity(t,i,M,y):this.outdoor&&this.buildOutdoor(t,i,M),this.outdoor&&this.buildSky(t),this.map.some(T=>T.includes("G"))&&this.buildGate(t,i,M),this.buildExit(t),this.initLightPool(10);let _=this.def.sky==="dawn"?new Sn(11122396,6967874,1.35):this.outdoor?new Sn(7375032,2761756,1.5):new Sn(9082544,2759960,.55);t.add(_),this.hemi=_}buildOutdoor(e,t,i){let n=[],s=[],r=[],o=[];for(let l=0;l<this.rows;l++)for(let c=0;c<this.cols;c++){let h=this.hAt(c,l);if(h<=0)continue;let u=(c+.5)*re,d=(l+.5)*re,f=h<el-.01,m=new Ee(re,h,re);if(is(m,2),m.translate(u,h/2,d),(f?r:n).push(m),!f){let b=new pt(re,re);b.rotateX(-Math.PI/2),b.translate(u,h+.004,d),nn(b,"xz",2),s.push(b);for(let[g,p]of[[0,-1],[0,1],[-1,0],[1,0]]){let x=this.hAt(c+g,l+p),E=this.map[l+p]&&this.map[l+p][c+g];if(x>0||E==="#")continue;let v=g?.25:re,y=g?re:.25,M=new Ee(v,1,y);is(M,1),M.translate(u+g*(re/2-.125),h+.5,d+p*(re/2-.125)),o.push(M)}}}i(n,t.bricks),i(s,t.plate),i(r,t.concrete),i(o,t.metal),this._containers&&i(this._containers,this.mat("rust",{color:7309978})),this._poles&&i(this._poles,t.metal,!0,!1)}buildSky(e){let t=new R(this.w/2,0,this.h/2),i=this.def.sky==="dawn",n=i?new R(.78,.3,-.55).normalize():new R(-.45,.55,-.7).normalize(),s=new ve(new Nt(190,32,16),new Ct({side:Ot,depthWrite:!1,fog:!1,uniforms:{uSun:{value:n.clone()}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:i?`varying vec3 vP; uniform vec3 uSun;
          float h(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
          void main(){
            float y = max(vP.y, 0.0);
            float s = max(dot(normalize(vP), uSun), 0.0);
            // Morgend\xE4mmerung: oben noch Nachtblau, am Horizont rosa, zur Sonne hin orange-gold
            vec3 zen = vec3(0.13, 0.17, 0.33);
            vec3 hor = mix(vec3(0.62, 0.48, 0.55), vec3(1.0, 0.56, 0.3), pow(s, 3.0));
            vec3 col = mix(hor, zen, pow(y, 0.55));
            col += vec3(1.0, 0.62, 0.32) * pow(s, 24.0) * 0.9;
            col += vec3(1.0, 0.85, 0.6) * pow(s, 400.0) * 3.0;
            // letzte Sterne ganz oben, gegen\xFCber der Sonne
            vec3 q = floor(vP * 260.0);
            float st = step(0.9985, h(q)) * smoothstep(0.55, 0.9, y) * (1.0 - s);
            col += vec3(st) * 0.5;
            // d\xFCnne Wolkenstreifen, von unten angestrahlt
            float band = sin(vP.x * 9.0 + sin(vP.z * 7.0) * 1.5) * 0.5 + 0.5;
            float cl = smoothstep(0.62, 0.95, band) * smoothstep(0.04, 0.12, y) * (1.0 - smoothstep(0.2, 0.42, y));
            col = mix(col, mix(vec3(0.42, 0.33, 0.42), vec3(1.0, 0.62, 0.42), pow(s, 2.0)), cl * 0.55);
            gl_FragColor = vec4(col, 1.0);
          }`:`varying vec3 vP;
          float h(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
          void main(){
            float y = max(vP.y, 0.0);
            vec3 col = mix(vec3(0.05, 0.07, 0.11), vec3(0.008, 0.012, 0.03), pow(y, 0.6));
            vec3 q = floor(vP * 260.0);
            float s = step(0.9975, h(q)) * smoothstep(0.05, 0.3, y);
            col += vec3(s) * 0.9;
            gl_FragColor = vec4(col, 1.0);
          }`}));if(s.position.copy(t),s.renderOrder=-10,e.add(s),i){let c=new ve(new wi(6,32),new ut({color:16773328,fog:!1,toneMapped:!1}));c.position.copy(n).multiplyScalar(180).add(t),c.lookAt(t),e.add(c);let h=document.createElement("canvas");h.width=h.height=128;let u=h.getContext("2d"),d=u.createRadialGradient(64,64,4,64,64,64);d.addColorStop(0,"rgba(255,220,170,0.9)"),d.addColorStop(.35,"rgba(255,150,80,0.35)"),d.addColorStop(1,"rgba(255,120,60,0)"),u.fillStyle=d,u.fillRect(0,0,128,128);let f=new Et(h);f.colorSpace=et;let m=new Gn(new pn({map:f,transparent:!0,depthWrite:!1,fog:!1,blending:Zt,toneMapped:!1}));m.scale.set(70,70,1),m.position.copy(n).multiplyScalar(175).add(t),e.add(m)}else{let c=new ve(new wi(7,32),new ut({color:15921120,fog:!1}));c.position.copy(n).multiplyScalar(180).add(t),c.lookAt(t),e.add(c)}let r=new Tn(i?16760198:11123936,i?3.4:3.2);r.position.copy(n).multiplyScalar(90).add(t),r.target.position.copy(t),e.add(r.target),r.castShadow=!0,r.shadow.mapSize.set(globalThis.ZW_LOW?1024:2048,globalThis.ZW_LOW?1024:2048);let o=r.shadow.camera,l=i?72:62;o.left=-l,o.right=l,o.top=l,o.bottom=-l,o.near=10,o.far=200,r.shadow.bias=-6e-4,r.shadow.normalBias=.04,e.add(r),this.moon=r}buildGate(e,t,i){let n=1e9,s=-1,r=-1;for(let I=0;I<this.rows;I++)for(let L=0;L<this.cols;L++)this.map[I][L]==="G"&&(n=Math.min(n,L),s=Math.max(s,L),r=Math.max(r,I));let o=n*re,l=(s+1)*re,c=(r+1)*re,h=l-o,u=(o+l)/2,d=this.def.wallH||Yf,f=4.6,m=new Ee(h,d-f,c);is(m,2.2),m.translate(u,f+(d-f)/2,c/2),i([m],t.bricks);let b=new pt(h,c);b.rotateX(Math.PI/2),b.translate(u,f-.01,c/2),i([b],t.ceiling,!1);let g=[];for(let I of[o+.09,l-.09]){let L=new Ee(.18,f,.25);L.translate(I,f/2,c+.05),g.push(L)}let p=new Ee(h,.3,.25);p.translate(u,f-.15,c+.05),g.push(p),i(g,t.hazard,!0,!1);let x=document.createElement("canvas");x.width=128,x.height=128;let E=x.getContext("2d"),v=E.createLinearGradient(0,0,0,128);v.addColorStop(0,"#3a3048"),v.addColorStop(.5,"#c86a40"),v.addColorStop(1,"#f0a070"),E.fillStyle=v,E.fillRect(0,0,128,128);let y=E.createRadialGradient(64,90,10,64,80,80);y.addColorStop(0,"rgba(0,0,0,0)"),y.addColorStop(1,"rgba(8,6,10,0.92)"),E.fillStyle=y,E.fillRect(0,0,128,128);let M=new Et(x);M.colorSpace=et;let A=new pt(h-.1,f),_=new ve(A,new ut({map:M,toneMapped:!1,fog:!1}));_.position.set(u,f/2,.03),e.add(_),this.addLight(u,3.2,1.2,16754792,16,9);let T=new Ee(h-.3,f,.1);is(T,1.4);let C=new ve(T,this.mat("metal",{color:9082012,normalScale:1.6}));C.position.set(u,f/2,c-.16),C.castShadow=!0,C.receiveShadow=!0,e.add(C),this.colliders.push(C),this.gate={door:C,open:0,opening:!1,baseY:f/2,cx:u,zf:c},this.exitPos=new R(u,0,c/2),this.exitMarkPos=new R(u,0,c+1.6)}cityMat(e){if(this._cm=this._cm||{},this._cm[e])return this._cm[e];let t;if(e==="asphalt"){let i=Oa(512,(n,s)=>{n.fillStyle="#3b3a3c",n.fillRect(0,0,s,s),Ba(n,s,9e3,.05,["#2a292b","#4a4846","#535050"]),n.strokeStyle="rgba(20,18,18,0.7)",n.lineWidth=2;for(let r=0;r<9;r++){n.beginPath();let o=Math.random()*s,l=Math.random()*s;n.moveTo(o,l);for(let c=0;c<7;c++)o+=(Math.random()-.5)*70,l+=(Math.random()-.5)*70,n.lineTo(o,l);n.stroke()}for(let r=0;r<5;r++){let o=n.createRadialGradient(0,0,0,0,0,40);o.addColorStop(0,"rgba(10,10,14,0.45)"),o.addColorStop(1,"rgba(10,10,14,0)"),n.save(),n.translate(Math.random()*s,Math.random()*s),n.scale(1.6,1),n.fillStyle=o,n.fillRect(-60,-60,120,120),n.restore()}});t=new ue({map:i,roughness:.92,metalness:0,color:12103860})}else if(e==="walk"){let i=Oa(256,(n,s)=>{n.fillStyle="#8a8682",n.fillRect(0,0,s,s),Ba(n,s,2500,.08,["#7a7672","#9a9692","#6e6a66"]),n.strokeStyle="#55524f",n.lineWidth=3;for(let r=0;r<=4;r++)n.beginPath(),n.moveTo(r*s/4,0),n.lineTo(r*s/4,s),n.stroke(),n.beginPath(),n.moveTo(0,r*s/4),n.lineTo(s,r*s/4),n.stroke()});t=new ue({map:i,roughness:.95,metalness:0,color:12630196})}else if(e==="tiles"){let i=Oa(256,(n,s)=>{for(let r=0;r<8;r++)for(let o=0;o<8;o++)n.fillStyle=(r+o)%2?"#8f887c":"#5f584e",n.fillRect(r*32,o*32,32,32);Ba(n,s,3e3,.12,["#4a4440","#d0c8bc"]),n.strokeStyle="#3a3430",n.lineWidth=1.5;for(let r=0;r<6;r++)n.beginPath(),n.moveTo(Math.random()*s,Math.random()*s),n.lineTo(Math.random()*s,Math.random()*s),n.stroke()});t=new ue({map:i,roughness:.55,metalness:.05})}else e==="lane"&&(t=new ue({color:14209728,roughness:.85,polygonOffset:!0,polygonOffsetFactor:-2}));return this._cm[e]=t,t}buildCity(e,t,i,n){let s=this.def.wallH,r=(F,G)=>F>=0&&G>=0&&F<this.cols&&G<this.rows&&(this.map[G][F]==="H"||this.isInterior(F,G)>0),o=new Int32Array(this.rows*this.cols).fill(-1),l=[];for(let F=0;F<this.rows;F++)for(let G=0;G<this.cols;G++){if(!r(G,F)||o[F*this.cols+G]>=0)continue;let ee=l.length,Me=[[G,F]];o[F*this.cols+G]=ee;let fe=0;for(;Me.length;){let[He,W]=Me.pop();fe++;for(let[$,ae]of[[1,0],[-1,0],[0,1],[0,-1]]){let Te=He+$,oe=W+ae;!r(Te,oe)||o[oe*this.cols+Te]>=0||(o[oe*this.cols+Te]=ee,Me.push([Te,oe]))}}l.push(ee)}let c=new Float32Array(this.rows*this.cols),h=hu(77),u={};for(let F=0;F<this.rows;F++)for(let G=0;G<this.cols;G++){let ee=F*this.cols+G;if(o[ee]<0)continue;let Me=o[ee]+":"+Math.floor(G/6)+":"+Math.floor(F/6);Me in u||(u[Me]=[7+Math.floor(h()*4)*3+(h()<.25?6:0),Math.floor(h()*4)]),c[ee]=u[Me][0]}let d=(F,G)=>{let ee=G*this.cols+F,Me=o[ee]+":"+Math.floor(F/6)+":"+Math.floor(G/6);return u[Me][1]},f=(F,G)=>F<0||G<0||F>=this.cols||G>=this.rows?0:c[G*this.cols+F],m=[[],[],[],[]],b=[],g=[],p=[],x=[],E=[],v=[[0,-1,"n"],[0,1,"s"],[-1,0,"w"],[1,0,"e"]],y=(F,G,ee)=>{let Me=F*re,fe=G*re;return ee==="n"?[[Me+re,fe],[Me,fe]]:ee==="s"?[[Me,fe+re],[Me+re,fe+re]]:ee==="w"?[[Me,fe],[Me,fe+re]]:[[Me+re,fe+re],[Me+re,fe]]};for(let F=0;F<this.rows;F++)for(let G=0;G<this.cols;G++){if(!r(G,F))continue;let ee=f(G,F),Me=this.isInterior(G,F)>0,fe=d(G,F),He=(G+.5)*re,W=(F+.5)*re;for(let[ae,Te,oe]of v){let We=G+ae,$e=F+Te;if(We<0||$e<0||We>=this.cols||$e>=this.rows)continue;let[Le,Ye]=y(G,F,oe),it=[ae,0,Te],je=r(We,$e),ct=this.isInterior(We,$e)>0,Mt=f(We,$e);if(Me)je?!ct&&Mt<ee&&m[fe].push(ts(Le,Ye,Mt,ee,it,16,15)):m[fe].push(ts(Le,Ye,s,ee,it,16,15));else{if(je&&!ct){Mt<ee&&m[fe].push(ts(Le,Ye,Mt,ee,it,16,15));continue}if(ct){b.push(ts(Le,Ye,0,s,it,2.4)),Mt<ee&&m[fe].push(ts(Le,Ye,Math.max(s,Mt),ee,it,16,15));continue}m[fe].push(ts(Le,Ye,0,ee,it,16,15))}}let $=new pt(re,re);if($.rotateX(-Math.PI/2),$.translate(He,ee,W),nn($,"xz",4),p.push($),Me){let ae=new pt(re,re);ae.rotateX(Math.PI/2),ae.translate(He,s,W),nn(ae,"xz",4),g.push(ae);let Te=new pt(re,re);Te.rotateX(-Math.PI/2),Te.translate(He,.006,W),nn(Te,"xz",4),(this.isInterior(G,F)===2?E:x).push(Te)}}let M=[0,1,2,3].map(F=>Hv(F));m.forEach((F,G)=>i(F,M[G])),i(b,this.mat("concrete",{color:10262158,normalScale:.6})),i(g,t.ceiling,!1),i(p,this.mat("concrete",{color:4999238}),!1,!1),i(x,this.cityMat("tiles"),!1,!1),i(E,t.concrete,!1,!1);let A=[],_=[];for(let F=0;F<this.rows;F++)for(let G=0;G<this.cols;G++){let ee=this.map[F][G],Me=(G+.5)*re,fe=(F+.5)*re;if(ee===","||this.outdoorWalk(G,F)){let He=new pt(re,re);He.rotateX(-Math.PI/2),He.translate(Me,.005,fe),nn(He,"xz",2),A.push(He)}if(ee==="-"||ee==="|"){let He=new pt(ee==="-"?1.3:.16,ee==="-"?.16:1.3);He.rotateX(-Math.PI/2),He.translate(Me,.008,fe),_.push(He)}}i(A,this.cityMat("walk"),!1,!1),i(_,this.cityMat("lane"),!1,!1);for(let F of this.def.shops||[])this.addShopSign(e,F,s);let T=[8003098,2375774,12104874,3099186,7038304,9071146].map(F=>new ue({color:F,roughness:.45,metalness:.55,envMapIntensity:.8})),C=this.mat("rust",{color:5917250}),I={glass:[],black:[],chrome:[],head:[],tail:[]},L=T.map(()=>[]),D=[],H=new Set;for(let F=0;F<this.rows;F++)for(let G=0;G<this.cols;G++){let ee=this.map[F][G];if(ee!=="A"&&ee!=="V"||H.has(F*this.cols+G))continue;let Me=ee==="A"?[G+1,F]:[G,F+1];H.add(F*this.cols+G),H.add(Me[1]*this.cols+Me[0]);let fe=ee==="A"?(G+1)*re:(G+.5)*re,He=ee==="A"?(F+.5)*re:(F+1)*re,W=n()<.28,$=(ee==="A"?0:Math.PI/2)+(n()<.5?Math.PI:0)+(n()-.5)*.22,ae=new Ve().makeRotationY($).setPosition(fe,0,He),Te=Math.floor(n()*T.length);Dv(ae,W?D:L[Te],I,W,n)}L.forEach((F,G)=>i(F,T[G])),i(D,C),i(I.glass,new ue({color:790550,roughness:.08,metalness:.9,envMapIntensity:1.4}),!1),i(I.black,new ue({color:1118481,roughness:.8,metalness:.1})),i(I.chrome,new ue({color:11184810,roughness:.25,metalness:1}),!1,!1),i(I.head,new ue({color:7829350,emissive:16773832,emissiveIntensity:.25}),!1,!1),i(I.tail,new ue({color:4194304,emissive:16718346,emissiveIntensity:.4}),!1,!1);let N=[],j=[],Y=[],B=[],V=[],Z=[];for(let F=0;F<this.rows;F++)for(let G=0;G<this.cols;G++){let ee=this.map[F][G],Me=(G+.5)*re+(n()-.5)*.5,fe=(F+.5)*re+(n()-.5)*.5;if(ee==="U"){let W=n()<.2,$=new Ee(.62,1,.7);if(is($,.8),W&&($.translate(0,.35,0),$.rotateZ(Math.PI/2),$.translate(0,0,0)),$.rotateY(n()*6.28),$.translate(Me,W?.31:.5,fe),N.push($),!W){let ae=new Ee(.68,.06,.76);ae.rotateY(n()*.4),ae.translate(Me,1.03,fe),j.push(ae)}this.circles.push({x:Me,z:fe,r:.42})}else if(ee==="N"){let W=this.map[F][G-1]==="N"||this.map[F][G+1]==="N",$=(G+.5)*re,ae=(F+.5)*re;for(let Te of[.62,.92]){let oe=new Ee(W?1.9:.1,.2,W?.1:1.9);oe.translate($,Te,ae),Y.push(oe)}for(let Te of[-.8,.8]){let oe=new Ee(.08,1,.5);W||oe.rotateY(Math.PI/2),oe.translate($+(W?Te:0),.5,ae+(W?0:Te)),B.push(oe)}}let He=r(G-1,F)||r(G+1,F)||r(G,F-1)||r(G,F+1);if((ee===","||ee===".")&&n()<(He?.22:.05))for(let W=0,$=1+Math.floor(n()*4);W<$;W++){let ae=.1+n()*.35,Te=new Ee(ae*(.8+n()),ae*.6,ae);Te.rotateY(n()*6.28),Te.rotateX((n()-.5)*.6),Te.translate((G+n())*re,ae*.25,(F+n())*re),V.push(Te)}if((ee===","||ee==="."||ee==="-"||ee==="|")&&n()<.08){let W=new pt(.22+n()*.15,.3);W.rotateX(-Math.PI/2),W.rotateY(n()*6.28),W.translate((G+n())*re,.012,(F+n())*re),Z.push(W)}}if(i(N,this.mat("plate",{color:4876872})),i(j,new ue({color:2767400,roughness:.7}),!1,!1),i(Y,Lv()),i(B,new ue({color:2763306,roughness:.6}),!1,!1),i(V,this.mat("concrete",{color:8024170}),!0,!1),i(Z,new ue({color:14209216,roughness:.9,side:ai}),!1,!1),this._containers&&i(this._containers,this.mat("rust",{color:11569722})),this._poles&&i(this._poles,t.metal,!0,!1),this._ccrates&&i(this._ccrates,this.mat("rust",{color:13150338,normalScale:.8})),this._shelves){let F=[],G=[],ee=[[],[],[],[]];for(let Me of this._shelves){let $=($e,Le)=>this.isInterior(Me.c+$e,Me.r+Le)>0,ae=$(0,-1)?$(0,1)?$(-1,0)?$(1,0)?0:-Math.PI/2:Math.PI/2:Math.PI:0,Te=new Ve().makeRotationY(ae+(n()-.5)*.06).setPosition(Me.x,0,Me.z),oe=($e,Le)=>{Le.applyMatrix4(Te),$e.push(Le)};for(let $e of[-1.8/2+.03,1.8/2-.03]){let Le=new Ee(.05,1.9,.7);Le.translate($e,1.9/2,0),oe(F,Le)}let We=new Ee(1.8,1.9,.03);We.translate(0,1.9/2,-.7/2+.02),oe(F,We);for(let $e=0;$e<4;$e++){let Le=.12+$e*.55,Ye=new Ee(1.8-.06,.035,.7);if(Ye.translate(0,Le,0),oe(G,Ye),$e===3)continue;let it=-1.8/2+.12;for(;it<1.8/2-.2;){let je=.12+n()*.22,ct=.14+n()*.3,Mt=.18+n()*.3;if(n()<.72){let Wt=new Ee(je,ct,Mt);n()<.15?(Wt.rotateZ(Math.PI/2),Wt.translate(it+ct/2,Le+.02+je/2,(n()-.5)*.15)):Wt.translate(it+je/2,Le+.02+ct/2,(n()-.5)*.2),oe(ee[Math.floor(n()*4)],Wt)}it+=je+.03}}for(let $e=0;$e<3;$e++){let Le=new Ee(.2,.15,.25);Le.rotateY(n()*6),Le.translate((n()-.5)*1.8,.075,.7/2+.2+n()*.6),oe(ee[$e%4],Le)}}i(F,new ue({color:9080982,roughness:.45,metalness:.7})),i(G,new ue({color:6975606,roughness:.5,metalness:.6}),!0,!1),[10107440,12098120,3828366,13157044].forEach((Me,fe)=>i(ee[fe],new ue({color:Me,roughness:.7}),!1,!1))}if(this._litfass){let F=Oa(512,(G,ee)=>{G.fillStyle="#d8d0c0",G.fillRect(0,0,ee,ee);let Me=["#ff6b35","#2e86c1","#e8c040","#5a3a6a","#2a7a4a","#c0392b"];for(let fe=0;fe<6;fe++){let He=fe%3*170+4,W=Math.floor(fe/3)*256+6;G.fillStyle=Me[fe],G.fillRect(He,W,162,244),G.fillStyle="rgba(255,255,255,0.85)",G.font="900 34px Impact, Arial, sans-serif",G.textAlign="center",G.fillText(["ZIRKUS","KONZERT","FLOHMARKT","KINO","STADTFEST","GESUCHT"][fe],He+81,W+60),G.fillStyle="rgba(0,0,0,0.25)",G.fillRect(He+20,W+90,122,100),G.fillStyle="#b8b0a0",G.beginPath(),G.moveTo(He+162,W+244),G.lineTo(He+100,W+244),G.lineTo(He+162,W+170),G.closePath(),G.fill()}Ba(G,ee,6e3,.08,["#000","#fff"])});for(let G of this._litfass){let ee=new Be(.62,.62,2.7,24,1,!0);ee.translate(G.x,.25+1.35,G.z),i([ee],new ue({map:F,roughness:.85}));let Me=new Be(.72,.75,.25,24);Me.translate(G.x,.125,G.z);let fe=new Be(.2,.75,.45,24);fe.translate(G.x,2.95+.225,G.z);let He=new Nt(.12,12,8);He.translate(G.x,3.45,G.z),i([Me,fe,He],new ue({color:3099194,roughness:.5,metalness:.5}))}}}outdoorWalk(e,t){let i=this.map[t][e];if(!"YUBCNX".includes(i))return!1;let n=0;for(let[s,r]of[[1,0],[-1,0],[0,1],[0,-1]])(this.map[t+r]&&this.map[t+r][e+s])===","&&n++;return n>=2}addShopSign(e,t,i){let n=t.face==="s"||t.face==="n"?t.c1-t.c0+1:t.r1-t.r0+1,s=Math.max(3.2,n*re-.3),r=document.createElement("canvas");r.width=512,r.height=96;let o=r.getContext("2d");o.fillStyle="#16161a",o.fillRect(0,0,512,96),o.strokeStyle="#555",o.lineWidth=6,o.strokeRect(3,3,506,90);let l=["#ff6b35","#ffd23a","#35e0ff","#e8e2d0","#ff4a6a"],c=l[(t.name.length+t.r0)%l.length];o.font='900 58px Impact, "Arial Black", Arial, sans-serif',o.textAlign="center",o.textBaseline="middle";let h=t.name,d=256-o.measureText(h).width/2;for(let p=0;p<h.length;p++){let x=h[p],E=o.measureText(x).width;o.fillStyle=(p*7+t.c0)%5===2&&x!==" "?"#3a3632":c,o.textAlign="left",o.fillText(x,d,50),d+=E}o.fillStyle="rgba(0,0,0,0.35)";for(let p=0;p<40;p++)o.fillRect(Math.random()*512,Math.random()*96,2+Math.random()*20,2+Math.random()*6);let f=new Et(r);f.colorSpace=et,f.anisotropy=4;let m=new ue({map:f,emissive:16777215,emissiveMap:f,emissiveIntensity:.55,roughness:.6}),b=new ve(new pt(s,s*96/512*1.3),m),g=i+.62;t.face==="s"&&b.position.set((t.c0+t.c1+1)/2*re,g,(t.r1+1)*re+.07),t.face==="n"&&(b.position.set((t.c0+t.c1+1)/2*re,g,t.r0*re-.07),b.rotation.y=Math.PI),t.face==="e"&&(b.position.set((t.c1+1)*re+.07,g,(t.r0+t.r1+1)/2*re),b.rotation.y=Math.PI/2),t.face==="w"&&(b.position.set(t.c0*re-.07,g,(t.r0+t.r1+1)/2*re),b.rotation.y=-Math.PI/2),e.add(b)}buildExit(e){if(!this.exitPos)return;let t=new qe;t.position.copy(this.exitMarkPos||this.exitPos);let i=new ut({color:3531007,transparent:!0,opacity:.9,blending:Zt,depthWrite:!1,side:ai,toneMapped:!1}),n=new ve(new xn(.75,.95,40),i);n.rotation.x=-Math.PI/2,n.position.y=.03;let s=new ut({color:3531007,transparent:!0,opacity:.22,blending:Zt,depthWrite:!1,side:ai,toneMapped:!1}),r=this.def.beamH||6,o=new ve(new Be(.85,.85,r,32,1,!0),s);o.position.y=r/2;let l=document.createElement("canvas");l.width=256,l.height=64;let c=l.getContext("2d");c.fillStyle="#35e0ff",c.font="900 44px Impact, Arial, sans-serif",c.textAlign="center",c.textBaseline="middle",c.fillText(this.def.exitLabel||"AUSGANG",128,34);let h=new Et(l);h.colorSpace=et;let u=new Gn(new pn({map:h,transparent:!0,depthWrite:!1,toneMapped:!1}));u.scale.set(2.4,.6,1),u.position.y=2.6,this.signY=2.6,t.add(n,o,u),t.visible=!1,e.add(t),this.exit={group:t,ring:n,beam:o,sign:u,active:!1}}setExit(e){this.exit&&(this.exit.active=e,this.exit.group.visible=e,this.gate&&(this.gate.opening=e,e||(this.gate.open=0,this.gate.door.position.y=this.gate.baseY,this.gate.door.scale.y=1),this.flowCell=-1))}addLight(e,t,i,n,s,r,o=!1,l=!1){if(o){let h=new En(n,s*9,26,Math.PI/2.6,.6,1.6);return h.position.set(e,t,i),h.target.position.set(e,0,i),this.group.add(h.target),h.castShadow=!0,h.shadow.mapSize.set(globalThis.ZW_LOW?512:1024,globalThis.ZW_LOW?512:1024),h.shadow.camera.near=.5,h.shadow.camera.far=26,h.shadow.bias=-4e-4,h.shadow.normalBias=.02,h.shadow.radius=4,this.group.add(h),this.shadowLights.push(h),this.virtual.push({pos:new R(e,t,i),color:new le(n),intensity:s,dist:r,flicker:l,seed:Math.random()*100,cur:s,real:h}),h}let c={pos:new R(e,t,i),color:new le(n),intensity:s,dist:r,flicker:l,seed:Math.random()*100,cur:s};return this.virtual.push(c),c}initLightPool(e=10){this.pool=[];for(let t=0;t<e;t++){let i=new ri(16777215,0,10,1.6);this.group.add(i),this.pool.push(i)}}update(e,t){let i=this._lt===void 0?0:Math.min(.05,Math.max(0,e-this._lt));if(this._lt=e,this.gate&&this.gate.opening&&this.gate.open<1){this.gate.open=Math.min(1,this.gate.open+i/2.6);let r=this.gate.open,o=Math.max(.04,1-r);this.gate.door.scale.y=o,this.gate.door.position.y=this.gate.baseY*2-this.gate.baseY*o+(r<.15?Math.sin(e*60)*.015:0)}if(this.exit&&this.exit.active){let r=.5+.5*Math.sin(e*4);this.exit.beam.material.opacity=.14+.12*r,this.exit.ring.scale.setScalar(1+.08*r),this.exit.sign.position.y=2.6+Math.sin(e*2)*.08}for(let r of this.virtual){if(!r.flicker){r.cur=r.intensity;continue}let o=Math.sin(e*13+r.seed)*Math.sin(e*7.3+r.seed*2)+Math.sin(e*31+r.seed),l=Math.sin(e*.7+r.seed)>.93?.08:1;r.cur=r.intensity*l*(.82+.18*o),r.real&&(r.real.intensity=r.cur*9)}if(!t||!this.pool)return;let n=this.virtual.filter(r=>!r.real);for(let r of n)r.d=r.pos.distanceToSquared(t);n.sort((r,o)=>r.d-o.d);let s=this.outdoor?8100:1156;for(let r=0;r<this.pool.length;r++){let o=this.pool[r],l=n[r];if(!l){o.intensity=0;continue}o.position.copy(l.pos),o.color.copy(l.color),o.distance=l.dist;let c=Math.max(0,Math.min(1,(s-l.d)/(s*.35))),h=r>=this.pool.length-2?.5:1;o.intensity=l.cur*c*h}}lightAt(e){let t=0;for(let i of this.virtual){let n=i.pos.distanceToSquared(e);t+=i.cur/(1+n*.6)}return t}solidTop(e,t,i){if(e==="#"||e==="M")return 1/0;if(e==="C")return $f;if(e==="X")return lu;if(e==="W")return t>Is-.32?-1:Is;if(e==="H")return 1/0;if(e==="G")return this.gateOpen()?-1:1/0;if(e==="A"||e==="V")return Av;if(e==="N")return Rv;let n=this.cellH(e);return n>0?t>n-.6?-1:n:i>=el-.05&&t>el-.6?1/0:-1}collide(e,t,i=0){for(let n=0;n<2;n++){let s=this.cx(e.x),r=this.cz(e.z),o=this.hAt(s,r);for(let l=r-1;l<=r+1;l++)for(let c=s-1;c<=s+1;c++){let h=c>=0&&l>=0&&c<this.cols&&l<this.rows?this.map[l][c]:"#";if(this.solidTop(h,i,o)<0)continue;let d=h==="C"?.12:h==="W"?.1:h==="N"?.35:0,f=c*re+d,m=(c+1)*re-d,b=l*re+d,g=(l+1)*re-d,p=Math.max(f,Math.min(e.x,m)),x=Math.max(b,Math.min(e.z,g)),E=e.x-p,v=e.z-x,y=E*E+v*v;if(y<t*t)if(y<1e-8){let M=[e.x-f,m-e.x,e.z-b,g-e.z],A=Math.min(...M),_=M.indexOf(A);_===0?e.x=f-t:_===1?e.x=m+t:_===2?e.z=b-t:e.z=g+t}else{let M=Math.sqrt(y),A=t-M;e.x+=E/M*A,e.z+=v/M*A}}for(let l of this.circles){if(l.top!==void 0&&i>l.top)continue;let c=e.x-l.x,h=e.z-l.z,u=l.r+t,d=c*c+h*h;if(d<u*u&&d>1e-8){let f=Math.sqrt(d);e.x=l.x+c/f*u,e.z=l.z+h/f*u}}}}groundAt(e,t,i,n){let s=0,r=this.cx(e),o=this.cz(t),l=i*.55;for(let c=o-1;c<=o+1;c++)for(let h=r-1;h<=r+1;h++){if(h<0||c<0||h>=this.cols||c>=this.rows)continue;let u=this.map[c][h],d=0;if(u==="W"){if(n<Is-.35)continue;d=Is}else if(d=this.heights[c*this.cols+h],d<=0||n<d-.6)continue;let f=h*re+.1,m=(h+1)*re-.1,b=c*re+.1,g=(c+1)*re-.1,p=Math.max(f,Math.min(e,m)),x=Math.max(b,Math.min(t,g));((e-p)**2+(t-x)**2<l*l||h===r&&c===o)&&(s=Math.max(s,d))}return s}restoreBarrel(e){e.alive||(e.alive=!0,e.hp=25,this.group.add(e.mesh,e.top),this.colliders.push(e.mesh),this.circles.push(e.circle),this.blocked[e.r*this.cols+e.c]=1,this.virtual.includes(e.light)||this.virtual.push(e.light),this.flowCell=-1)}removeBarrel(e){e.alive&&(e.alive=!1,this.group.remove(e.mesh,e.top),this.colliders=this.colliders.filter(t=>t!==e.mesh),this.circles=this.circles.filter(t=>t!==e.circle),this.blocked[e.r*this.cols+e.c]=0,this.virtual=this.virtual.filter(t=>t!==e.light),this.flowCell=-1)}resetBarrels(){for(let e of this.barrels)this.restoreBarrel(e)}los(e,t,i,n,s=!1,r=null){let o=e/re,l=t/re,c=i/re,h=n/re,u=Math.floor(o),d=Math.floor(l),f=Math.floor(c),m=Math.floor(h),b=c-o,g=h-l,p=Math.sign(b),x=Math.sign(g),E=b!==0?Math.abs(1/b):1/0,v=g!==0?Math.abs(1/g):1/0,y=b>0?(u+1-o)*E:b<0?(o-u)*E:1/0,M=g>0?(d+1-l)*v:g<0?(l-d)*v:1/0;for(let A=0;A<64;A++){if(u===f&&d===m)return!0;if(y<M?(y+=E,u+=p):(M+=v,d+=x),(s?this.isWall(u,d):this.isBlocked(u,d))||r!==null&&Math.abs(this.hAt(u,d)-r)>.6)return!1}return!0}updateFlow(e,t){let i=Math.max(0,Math.min(this.cols-1,this.cx(e))),s=Math.max(0,Math.min(this.rows-1,this.cz(t)))*this.cols+i;if(s===this.flowCell)return;this.flowCell=s;let r=this.flow,o=this.heap,l=this.cols;r.fill(1e9),r[s]=0;let c=0,h=f=>{let m=c++;for(o[m]=f;m>0;){let b=m-1>>1;if(r[o[b]]<=r[o[m]])break;let g=o[b];o[b]=o[m],o[m]=g,m=b}},u=()=>{let f=o[0];o[0]=o[--c];let m=0;for(;;){let b=2*m+1,g=b+1,p=m;if(b<c&&r[o[b]]<r[o[p]]&&(p=b),g<c&&r[o[g]]<r[o[p]]&&(p=g),p===m)break;let x=o[p];o[p]=o[m],o[m]=x,m=p}return f};h(s);let d=Cv;for(;c>0;){let f=u(),m=f%l,b=f/l|0,g=r[f];for(let p=0;p<8;p++){let x=d[p*3],E=d[p*3+1],v=d[p*3+2],y=m+x,M=b+E;if(this.isBlocked(y,M)||!this.stepOk(m,b,y,M)||x&&E&&(this.isBlocked(m+x,b)||this.isBlocked(m,b+E)||!this.stepOk(m,b,m+x,b)||!this.stepOk(m,b,m,b+E)))continue;let A=M*l+y,_=g+v;_<r[A]-1e-6&&(r[A]=_,c<o.length&&h(A))}}}flowDir(e,t,i){let n=this.cx(e),s=this.cz(t),r=this.isBlocked(n,s)?1e9:this.flow[s*this.cols+n],o=n,l=s;for(let h=-1;h<=1;h++)for(let u=-1;u<=1;u++){if(!u&&!h)continue;let d=n+u,f=s+h;if(this.isBlocked(d,f)||!this.stepOk(n,s,d,f)||u&&h&&(this.isBlocked(n+u,s)||this.isBlocked(n,s+h)||!this.stepOk(n,s,n+u,s)||!this.stepOk(n,s,n,s+h)))continue;let m=this.flow[f*this.cols+d];m<r&&(r=m,o=d,l=f)}i.set((o+.5)*re-e,0,(l+.5)*re-t);let c=i.length();return c>1e-4&&i.multiplyScalar(1/c),r}},Cv=[1,0,1,-1,0,1,0,1,1,0,-1,1,1,1,1.414,1,-1,1.414,-1,1,1.414,-1,-1,1.414];function ts(a,e,t,i,n,s,r){let o=new ot,l=[a[0],t,a[1],e[0],t,e[1],e[0],i,e[1],a[0],i,a[1]],c=Math.hypot(e[0]-a[0],e[1]-a[1]),h=(Math.abs(n[0])>0?a[1]*-n[0]:a[0]*n[2])/s,u=h+c/s,d=t/(r||s),f=i/(r||s),m=[h,d,u,d,u,f,h,f],b=[...n,...n,...n,...n];return o.setAttribute("position",new Ke(l,3)),o.setAttribute("normal",new Ke(b,3)),o.setAttribute("uv",new Ke(m,2)),o.setIndex([0,1,2,0,2,3]),o}function nn(a,e,t){let i=a.attributes.position,n=a.attributes.uv;for(let s=0;s<i.count;s++){let r=i.getX(s),o=i.getY(s),l=i.getZ(s);e==="xz"?n.setXY(s,r/t,l/t):n.setXY(s,(r+l)/t,o/t)}n.needsUpdate=!0}function is(a,e){let t=a.attributes.uv;for(let i=0;i<t.count;i++)t.setXY(i,t.getX(i)*e/1.6,t.getY(i)*e/1.6)}function Pv(a,e,t){let i=a.attributes.uv;for(let n=0;n<i.count;n++)i.setXY(n,i.getX(n)*(2*Math.PI*e)/2,i.getY(n)*t/2)}function hu(a){return function(){let e=a+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Qf(a=!1){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");if(t.clearRect(0,0,256,256),a){let n=t.createRadialGradient(128,128,10,128,128,128);n.addColorStop(0,"#ff5020"),n.addColorStop(.7,"#801000"),n.addColorStop(1,"#000"),t.fillStyle=n,t.fillRect(0,0,256,256),t.fillStyle="#000";for(let s=0;s<9;s++)t.fillRect(14+s*26,14,10,228);t.fillRect(0,0,256,14),t.fillRect(0,242,256,14),t.fillRect(0,0,14,256),t.fillRect(242,0,14,256)}else{t.fillStyle="#2a2a2a",t.fillRect(0,0,256,256),t.fillStyle="#0b0807";for(let n=0;n<9;n++)t.fillRect(24+n*26,18,12,220);t.strokeStyle="#555",t.lineWidth=6,t.strokeRect(6,6,244,244)}let i=new Et(e);return i.colorSpace=et,i}function Oa(a,e,t=!0){let i=document.createElement("canvas");i.width=i.height=a;let n=i.getContext("2d");e(n,a);let s=new Et(i);return s.colorSpace=et,t&&(s.wrapS=s.wrapT=$t),s.anisotropy=8,s}function Ba(a,e,t,i,n){a.globalAlpha=i;for(let s=0;s<t;s++){a.fillStyle=n[s%n.length];let r=1+Math.random()*3;a.fillRect(Math.random()*e,Math.random()*e,r,r)}a.globalAlpha=1}var Iv=[{base:"#b5ab9c",dirt:"#6e665c",frame:"#e8e2d6"},{base:"#85878a",dirt:"#4a4c50",frame:"#b8bcc0"},{base:"#8a4a38",dirt:"#4a2a20",frame:"#d8d0c0",brick:!0},{base:"#b88a52",dirt:"#6a4a2a",frame:"#efe6d2"}];function Hv(a){let e=Iv[a],t=512,i=480,n=document.createElement("canvas");n.width=t,n.height=i;let s=document.createElement("canvas");s.width=t,s.height=i;let r=n.getContext("2d"),o=s.getContext("2d"),l=hu(900+a*31);if(r.fillStyle=e.base,r.fillRect(0,0,t,i),o.fillStyle="#000",o.fillRect(0,0,t,i),e.brick)for(let u=0;u<i;u+=8)for(let d=u/8%2*12;d<t;d+=24)r.fillStyle=`rgba(${110+l()*40},${55+l()*25},${40+l()*15},1)`,r.fillRect(d,u,22,6);Ba(r,t,14e3,.06,["#000","#fff",e.dirt]);for(let u=0;u<5;u++)r.fillStyle="rgba(0,0,0,0.12)",r.fillRect(0,u*96,t,5);for(let u=0;u<14;u++){let d=l()*t,f=r.createLinearGradient(0,0,0,i);f.addColorStop(0,"rgba(0,0,0,0)"),f.addColorStop(1,"rgba(20,16,12,0.25)"),r.fillStyle=f,r.fillRect(d,l()*i*.5,6+l()*18,i)}for(let u=0;u<5;u++)for(let d=0;d<8;d++){let f=d*64+14,m=u*96+22,b=36,g=50;r.fillStyle=e.frame,r.fillRect(f-3,m-3,b+6,g+6),r.fillStyle="rgba(0,0,0,0.25)",r.fillRect(f-4,m+g+3,b+8,5);let p=l();if(p<.07)r.fillStyle="#e8b070",r.fillRect(f,m,b,g),o.fillStyle="#ffb060",o.fillRect(f,m,b,g);else if(p<.22)r.fillStyle="#050506",r.fillRect(f,m,b,g),r.fillStyle="rgba(120,140,170,0.5)",r.beginPath(),r.moveTo(f,m),r.lineTo(f+b*.4,m),r.lineTo(f+6,m+g*.5),r.closePath(),r.fill(),r.beginPath(),r.moveTo(f+b,m+g),r.lineTo(f+b*.5,m+g),r.lineTo(f+b,m+g*.6),r.closePath(),r.fill();else if(p<.3){r.fillStyle="#1a1612",r.fillRect(f,m,b,g);for(let x=0;x<3;x++)r.save(),r.translate(f+b/2,m+10+x*15),r.rotate((l()-.5)*.4),r.fillStyle=["#7a5a3a","#8a6a44","#6a4a2e"][x],r.fillRect(-b/2-4,-5,b+8,10),r.restore()}else{let x=r.createLinearGradient(0,m,0,m+g);x.addColorStop(0,"#6a6a88"),x.addColorStop(.45,"#2a3040"),x.addColorStop(1,"#141820"),r.fillStyle=x,r.fillRect(f,m,b,g),r.fillStyle="rgba(255,190,150,0.18)",r.fillRect(f+3,m+3,b*.35,g*.4),l()<.4&&(r.fillStyle="rgba(30,26,22,0.85)",r.fillRect(f,m,b,g*(.2+l()*.5)))}r.fillStyle=e.frame,r.fillRect(f+b/2-1.5,m,3,g),r.fillRect(f,m+g*.38,b,3)}let c=new Et(n);c.colorSpace=et,c.wrapS=c.wrapT=$t,c.anisotropy=8;let h=new Et(s);return h.colorSpace=et,h.wrapS=h.wrapT=$t,new ue({map:c,emissiveMap:h,emissive:16777215,emissiveIntensity:.9,roughness:.88,metalness:.02})}function Lv(){let a=Oa(128,(e,t)=>{for(let i=-2;i<6;i++)e.fillStyle=i%2?"#e8e4dc":"#c8201a",e.beginPath(),e.moveTo(i*32,0),e.lineTo(i*32+32,0),e.lineTo(i*32+64,t),e.lineTo(i*32+32,t),e.closePath(),e.fill()});return new ue({map:a,roughness:.5,emissive:2228224})}function Dv(a,e,t,i,n){let s=(l,c)=>{c.applyMatrix4(a),l.push(c)},r=(l,c,h,u,d,f)=>{let m=new Ee(l,c,h);return m.translate(u,d,f),m},o=i?-.12:0;s(e,r(4.1,.6,1.76,0,.6+o,0)),s(e,r(1.2,.18,1.7,1.35,.97+o,0)),s(e,r(2.1,.62,1.6,-.25,1.18+o,0)),i?s(t.black,r(2.14,.34,1.62,-.25,1.05,0)):s(t.glass,r(2.16,.36,1.64,-.25,1.17,0));for(let l of[-1.3,1.3])for(let c of[-.82,.82]){let h=new Be(.34,.34,.24,14);if(h.rotateX(Math.PI/2),h.translate(l,i?.22:.34,c),s(t.black,h),!i){let u=new Be(.18,.18,.25,10);u.rotateX(Math.PI/2),u.translate(l,.34,c),s(t.chrome,u)}}if(s(t.black,r(.14,.22,1.74,2.08,.42+o,0)),s(t.black,r(.14,.22,1.74,-2.08,.42+o,0)),!i){for(let l of[-.6,.6])s(t.head,r(.05,.13,.34,2.06,.72,l)),s(t.tail,r(.05,.13,.3,-2.06,.72,l));n()<.35&&s(e,r(.9,.55,.06,.25,.9,.95+(n()<.5?0:-1.9)))}}function Ls(a,e=a){let t=document.createElement("canvas");return t.width=a,t.height=e,[t,t.getContext("2d")]}function uu(a){let e=a>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Ga(a,e="floor"){let[i,n]=Ls(256),s=uu(a);n.clearRect(0,0,256,256);let r=h=>`rgba(${90+s()*40|0},${s()*6|0},${s()*6|0},${h})`,o=e==="drip"?3:14;for(let h=0;h<o;h++){let u=s()*Math.PI*2,d=s()*(e==="drip"?10:34),f=256/2+Math.cos(u)*d,m=256/2+Math.sin(u)*d,b=(e==="drip"?14:22)+s()*(e==="drip"?14:34),g=n.createRadialGradient(f,m,b*.2,f,m,b);g.addColorStop(0,r(.95)),g.addColorStop(.75,r(.9)),g.addColorStop(1,r(0)),n.fillStyle=g,n.beginPath(),n.arc(f,m,b,0,Math.PI*2),n.fill()}let l=e==="drip"?4:16;for(let h=0;h<l;h++){let u=s()*Math.PI*2,d=40+s()*80,f=256/2,m=256/2;n.strokeStyle=r(.85);for(let b=0;b<6;b++){let g=128+Math.cos(u)*d*(b+1)/6,p=256/2+Math.sin(u)*d*(b+1)/6;n.lineWidth=Math.max(.5,(6-b)*(.6+s())),n.beginPath(),n.moveTo(f,m),n.lineTo(g,p),n.stroke(),f=g,m=p}for(let b=0;b<3;b++){let g=d+6+s()*30;n.fillStyle=r(.9),n.beginPath(),n.arc(256/2+Math.cos(u+(s()-.5)*.2)*g,256/2+Math.sin(u+(s()-.5)*.2)*g,1+s()*4,0,Math.PI*2),n.fill()}}let c=new Et(i);return c.colorSpace=et,c.anisotropy=4,c}function ep(a){let[t,i]=Ls(256),n=uu(a),s=o=>`rgba(${95+n()*35|0},${n()*5|0},${n()*5|0},${o})`;for(let o=0;o<10;o++){let l=128+(n()-.5)*60,c=256*.38+(n()-.5)*50,h=12+n()*26,u=i.createRadialGradient(l,c,h*.25,l,c,h);u.addColorStop(0,s(.95)),u.addColorStop(1,s(0)),i.fillStyle=u,i.beginPath(),i.arc(l,c,h,0,Math.PI*2),i.fill()}for(let o=0;o<40;o++){let l=n()*Math.PI*2,c=30+n()*90;i.fillStyle=s(.9),i.beginPath(),i.arc(256/2+Math.cos(l)*c,256*.38+Math.sin(l)*c*.8,1+n()*3.5,0,Math.PI*2),i.fill()}for(let o=0;o<6;o++){let l=128+(n()-.5)*70,c=256*.4,h=40+n()*110,u=2+n()*4,d=i.createLinearGradient(0,c,0,c+h);d.addColorStop(0,s(.9)),d.addColorStop(.85,s(.8)),d.addColorStop(1,s(0)),i.fillStyle=d,i.fillRect(l-u/2,c,u,h),i.beginPath(),i.arc(l,c+h*.95,u*.8,0,Math.PI*2),i.fill()}let r=new Et(t);return r.colorSpace=et,r}function Fv(){let[e,t]=Ls(64),i=t.createRadialGradient(32,32,2,32,32,30);i.addColorStop(0,"rgba(0,0,0,1)"),i.addColorStop(.25,"rgba(10,8,6,0.95)"),i.addColorStop(.45,"rgba(40,34,30,0.6)"),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.fillRect(0,0,64,64),t.strokeStyle="rgba(0,0,0,0.6)";for(let s=0;s<7;s++){let r=Math.random()*Math.PI*2;t.lineWidth=1,t.beginPath(),t.moveTo(32,32),t.lineTo(32+Math.cos(r)*(10+Math.random()*14),32+Math.sin(r)*(10+Math.random()*14)),t.stroke()}let n=new Et(e);return n.colorSpace=et,n}function Nv(){let[e,t]=Ls(256),i=uu(77);for(let s=0;s<40;s++){let r=i()*Math.PI*2,o=i()*70,l=256/2+Math.cos(r)*o,c=256/2+Math.sin(r)*o,h=20+i()*60,u=t.createRadialGradient(l,c,0,l,c,h);u.addColorStop(0,"rgba(5,4,3,0.55)"),u.addColorStop(1,"rgba(5,4,3,0)"),t.fillStyle=u,t.beginPath(),t.arc(l,c,h,0,Math.PI*2),t.fill()}for(let s=0;s<26;s++){let r=i()*Math.PI*2,o=60+i()*60;t.strokeStyle="rgba(0,0,0,0.35)",t.lineWidth=2+i()*5,t.beginPath(),t.moveTo(256/2,256/2),t.lineTo(256/2+Math.cos(r)*o,256/2+Math.sin(r)*o),t.stroke()}let n=new Et(e);return n.colorSpace=et,n}function Uv(){let[e,t]=Ls(64),i=t.createRadialGradient(32,32,0,32,32,32);return i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.4,"rgba(255,255,255,0.6)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,64,64),new Et(e)}function kv(){let[e,t]=Ls(16);t.fillStyle="#fff",t.fillRect(3,3,10,10);let i=new Et(e);return i.magFilter=It,i.minFilter=It,i.generateMipmaps=!1,i}function Ov(){let[e,t]=Ls(128);for(let i=0;i<26;i++){let n=64+(Math.random()-.5)*50,s=64+(Math.random()-.5)*50,r=16+Math.random()*26,o=t.createRadialGradient(n,s,0,n,s,r);o.addColorStop(0,"rgba(255,255,255,0.22)"),o.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=o,t.fillRect(0,0,128,128)}return new Et(e)}var Bv=`
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
}`,zv=`
uniform sampler2D uMap;
uniform float uLight;
uniform float uOpacity;
varying float vAlpha;
varying vec3 vColor;
void main(){
  vec4 t = texture2D(uMap, gl_PointCoord);
  gl_FragColor = vec4(vColor * uLight, t.a * vAlpha * uOpacity);
  #include <colorspace_fragment>
}`,sn=class{constructor(e,{texture:t,additive:i=!1,light:n=1,gravity:s=-9.8,drag:r=.4,opacity:o=1}){this.n=e,this.geo=new ot,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.col=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.grow=new Float32Array(e),this.flags=new Uint8Array(e),this.geo.setAttribute("position",new Rt(this.pos,3).setUsage(Rn)),this.geo.setAttribute("size",new Rt(this.size,1).setUsage(Rn)),this.geo.setAttribute("alpha",new Rt(this.alpha,1).setUsage(Rn)),this.geo.setAttribute("pcolor",new Rt(this.col,3).setUsage(Rn)),this.geo.boundingSphere=new ni(new R,1e5),this.mat=new Ct({uniforms:{uMap:{value:t},uScale:{value:300},uLight:{value:n},uOpacity:{value:o}},vertexShader:Bv,fragmentShader:zv,transparent:!0,depthWrite:!1,blending:i?Zt:jn}),this.points=new xs(this.geo,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,this.cursor=0,this.gravity=s,this.drag=r,this.onLand=null,this.live=0}emit(e,t,i,n,s,r=0,o=0){let l=this.cursor;this.cursor=(this.cursor+1)%this.n,this.pos[l*3]=e.x,this.pos[l*3+1]=e.y,this.pos[l*3+2]=e.z,this.vel[l*3]=t.x,this.vel[l*3+1]=t.y,this.vel[l*3+2]=t.z,this.size[l]=i,this.life[l]=n,this.maxLife[l]=n,this.alpha[l]=1,this.grow[l]=r,this.col[l*3]=s.r,this.col[l*3+1]=s.g,this.col[l*3+2]=s.b,this.flags[l]=o,this.live=1}update(e){if(!this.live)return;let t=this.gravity,i=Math.exp(-this.drag*e),n=0;for(let s=0;s<this.n;s++){if(this.life[s]<=0){this.alpha[s]=0;continue}n=1,this.life[s]-=e;let r=s*3;this.vel[r+1]+=t*e,this.vel[r]*=i,this.vel[r+1]*=i,this.vel[r+2]*=i,this.pos[r]+=this.vel[r]*e,this.pos[r+1]+=this.vel[r+1]*e,this.pos[r+2]+=this.vel[r+2]*e,this.size[s]+=this.grow[s]*e,this.pos[r+1]<.01&&this.gravity<0&&(this.pos[r+1]=.01,this.flags[s]&&this.onLand&&this.onLand(this.pos[r],this.pos[r+2],this.size[s]),this.life[s]=0);let o=this.life[s]/this.maxLife[s];this.alpha[s]=Math.min(1,o*3)}this.live=n,this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.size.needsUpdate=!0,this.geo.attributes.alpha.needsUpdate=!0,this.geo.attributes.pcolor.needsUpdate=!0}clear(){this.life.fill(0),this.alpha.fill(0),this.live=1}},Hs=class{constructor(e,t,{color:i=16777215,roughness:n=.25,metalness:s=0,opacity:r=1,wet:o=!0,renderOrder:l=2}={}){this.meshes=e.map(c=>{let h=new ue({map:c,transparent:!0,depthWrite:!1,color:i,roughness:n,metalness:s,opacity:r,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4});o&&(h.envMapIntensity=1.4);let u=new pt(1,1),d=new Bi(u,h,t);return d.instanceMatrix.setUsage(Rn),d.count=0,d.frustumCulled=!1,d.renderOrder=l,d.receiveShadow=!0,{im:d,n:0,cursor:0,max:t,grow:[]}}),this._m=new Ve,this._q=new Dt,this._qr=new Dt,this._s=new R}add(e,t,i,n=Math.random()*Math.PI*2,s=-1,r=0){let o=this.meshes[s>=0?s:Math.random()*this.meshes.length|0],l=o.cursor;o.cursor=(o.cursor+1)%o.max,o.n=Math.min(o.n+1,o.max),o.im.count=o.n,this._q.setFromUnitVectors(tp,t),this._qr.setFromAxisAngle(tp,n),this._q.multiply(this._qr);let c=r?i*.15:i;return this._s.set(c,c,c),this._m.compose(e,this._q,this._s),o.im.setMatrixAt(l,this._m),o.im.instanceMatrix.needsUpdate=!0,r&&o.grow.push({i:l,pos:e.clone(),q:this._q.clone(),s:c,target:r,speed:r*.18}),o}update(e){for(let t of this.meshes)if(t.grow.length){for(let i=t.grow.length-1;i>=0;i--){let n=t.grow[i];n.s=Math.min(n.target,n.s+n.speed*e),n.speed*=Math.exp(-.35*e),this._s.set(n.s,n.s,n.s),this._m.compose(n.pos,n.q,this._s),t.im.setMatrixAt(n.i,this._m),(n.s>=n.target||n.speed<.002)&&t.grow.splice(i,1)}t.im.instanceMatrix.needsUpdate=!0}}addTo(e){this.meshes.forEach(t=>e.add(t.im))}clear(){this.meshes.forEach(e=>{e.n=0,e.cursor=0,e.im.count=0,e.grow.length=0})}},Pn=new R(0,1,0),tp=new R(0,0,1),tl=class{constructor(e,t){this.scene=e,this.level=t,this.blood=!0;let i=Uv(),n=Ov();this.drops=new sn(1800,{texture:i,gravity:-11,drag:.6}),this.mist=new sn(300,{texture:n,gravity:-.6,drag:2.2,opacity:.55}),this.sparks=new sn(500,{texture:i,additive:!0,gravity:-9,drag:1.2}),this.dust=new sn(300,{texture:n,gravity:.15,drag:2.6,opacity:.8}),this.embers=new sn(400,{texture:i,additive:!0,gravity:.6,drag:1.4}),this.fire=new sn(400,{texture:n,additive:!0,gravity:1.2,drag:3.2}),this.smoke=new sn(400,{texture:n,gravity:.5,drag:1.6,opacity:.9}),this.pixels=new sn(900,{texture:kv(),additive:!0,gravity:-5,drag:1.6}),this.pools=[this.drops,this.mist,this.sparks,this.dust,this.embers,this.fire,this.smoke,this.pixels],this.pools.forEach(o=>e.add(o.points)),this.floorDecals=new Hs([Ga(11),Ga(23),Ga(37)],90,{color:11538448,roughness:.18}),this.dripDecals=new Hs([Ga(5,"drip"),Ga(9,"drip")],220,{color:10488844,roughness:.2}),this.wallDecals=new Hs([ep(3),ep(8)],70,{color:11538448,roughness:.22}),this.holes=new Hs([Fv()],120,{color:16777215,roughness:.9,wet:!1,renderOrder:1}),this.scorch=new Hs([Nv()],40,{color:16777215,roughness:.95,wet:!1,renderOrder:1}),this.decals=[this.floorDecals,this.dripDecals,this.wallDecals,this.holes,this.scorch],this.decals.forEach(o=>o.addTo(e)),this.drops.onLand=(o,l,c)=>{Math.random()<.35&&this.dripDecals.add(new R(o,.012+Math.random()*.004,l),Pn,.1+c*.02+Math.random()*.12)},this.gibGeo=new ha(.05,0),this.gibMat=new ue({color:16777215,roughness:.3,metalness:0,envMapIntensity:.6}),this.gibs=new Bi(this.gibGeo,this.gibMat,200);let s=new le;for(let o=0;o<200;o++){let l=Math.random();l<.06?s.setRGB(.5,.44,.36):l<.4?s.setRGB(.36,.06,.05):s.setRGB(.22,.015,.01),this.gibs.setColorAt(o,s)}this.gibs.instanceMatrix.setUsage(Rn),this.gibs.frustumCulled=!1,this.gibs.castShadow=!0,this.gibData=[];for(let o=0;o<200;o++)this.gibData.push({p:new R(0,-10,0),v:new R,r:new Jt,w:new R,s:1,life:0,rest:!1});this.gibCursor=0,e.add(this.gibs),this.cubeMat=new ut({color:16777215,toneMapped:!1}),this.cubes=new Bi(new Ee(.07,.07,.07),this.cubeMat,260),this.cubes.instanceMatrix.setUsage(Rn),this.cubes.frustumCulled=!1,this.cubeData=[];let r=new le;for(let o=0;o<260;o++)this.cubes.setColorAt(o,r.setRGB(1,1,1)),this.cubeData.push({p:new R,v:new R,r:new Jt,w:new R,s:1,life:0,max:1});this.cubeCursor=0,this._cubesWasAny=!0,e.add(this.cubes),this._v=new R,this._c=new le,this._m=new Ve,this._q=new Dt,this._sv=new R,this._ray=new di,this.lightLevel=1}setLight(e){this.lightLevel=e,this.drops.mat.uniforms.uLight.value=.55+e*.5,this.mist.mat.uniforms.uLight.value=.4+e*.4,this.dust.mat.uniforms.uLight.value=.3+e*.5}setScale(e){for(let t of this.pools)t.mat.uniforms.uScale.value=e*.5}bloodHit(e,t,i=1,n=!1){if(!this.blood){this.puff(e,t,9080696,.6);return}let s=Math.floor((n?90:34)*i),r=this._c;for(let c=0;c<s;c++){let h=Math.random()<.7,u=(h?2.5:1.5)+Math.random()*(n?6:3.5),d=this._v.set((h?t.x:-t.x*.6)*u+(Math.random()-.5)*2.4,(Math.random()*.9+.3)*u*.55+(n?1.5:0),(h?t.z:-t.z*.6)*u+(Math.random()-.5)*2.4);r.setRGB(.42+Math.random()*.2,0,0),this.drops.emit(e,d,.035+Math.random()*(n?.09:.06),1.2+Math.random()*.8,r,0,1)}for(let c=0;c<(n?8:3)*i;c++){let h=this._v.set(t.x*(.5+Math.random())+(Math.random()-.5)*.6,Math.random()*.5,t.z*(.5+Math.random())+(Math.random()-.5)*.6);r.setRGB(.22,.01,.01),this.mist.emit(e,h,.16+Math.random()*.18,.35+Math.random()*.35,r,n?.9:.5)}let o=this._ray;o.set(e,this._sv.copy(t).setY(t.y*.4).normalize()),o.far=n?3.2:2.2;let l=o.intersectObjects(this.level.colliders,!1)[0];if(l&&l.face){let c=l.face.normal.clone().transformDirection(l.object.matrixWorld);if(Math.abs(c.y)<.5){let h=(n?1.4:.8)+Math.random()*.5;this.wallDecals.add(l.point.clone().addScaledVector(c,.01),c,h,(Math.random()-.5)*.4)}else c.y>.5&&this.floorDecals.add(l.point.clone().setY(.013),Pn,.8+Math.random()*.6)}n&&this.spawnGibs(e,t,12)}spawnGibs(e,t,i,n=1,s=1){if(this.blood)for(let r=0;r<i;r++){let o=this.gibData[this.gibCursor];this.gibCursor=(this.gibCursor+1)%this.gibData.length,o.p.copy(e),s>1&&o.p.add(this._sv.set((Math.random()-.5)*.5,(Math.random()-.3)*.9,(Math.random()-.5)*.5)),o.v.set(t.x*(2+Math.random()*3)*n+(Math.random()-.5)*3*n,(2+Math.random()*3)*Math.sqrt(n),t.z*(2+Math.random()*3)*n+(Math.random()-.5)*3*n),o.w.set(Math.random()*20,Math.random()*20,Math.random()*20),o.s=(.6+Math.random()*1.2)*(s>1?.8+Math.random()*s:1),o.life=40,o.rest=!1}}glitchHit(e,t,i=1,n=16739125,s=!1){let r=this._c,o=this._v,l=new le(n),c=Math.floor((s?46:20)*i);for(let h=0;h<c;h++){let u=Math.random()<.6,d=1.5+Math.random()*(s?5:3);o.set((u?t.x:-t.x*.5)*d+(Math.random()-.5)*2.5,(Math.random()*.9+.2)*d*.6,(u?t.z:-t.z*.5)*d+(Math.random()-.5)*2.5),Math.random()<.3?r.setRGB(1.6,1.6,1.6):r.copy(l).multiplyScalar(1.6),this.pixels.emit(e,o,.035+Math.random()*.05,.35+Math.random()*.4,r)}s&&this.spawnCubes(e,t,10,n,.8)}spawnCubes(e,t,i,n,s=1,r=.4){let o=new le(n),l=this._c;for(let c=0;c<i;c++){let h=this.cubeData[this.cubeCursor],u=this.cubeCursor;this.cubeCursor=(this.cubeCursor+1)%this.cubeData.length,h.p.copy(e).add(this._sv.set((Math.random()-.5)*r,(Math.random()-.5)*r*2.2,(Math.random()-.5)*r)),h.v.set(t.x*2*s+(Math.random()-.5)*4*s,(1+Math.random()*3.5)*s,t.z*2*s+(Math.random()-.5)*4*s),h.w.set(Math.random()*12,Math.random()*12,Math.random()*12),h.s=.6+Math.random()*1.4,h.life=h.max=.7+Math.random()*.7;let d=Math.random();d<.25?l.setRGB(1,1,1):d<.4?l.setRGB(.2,.9,1):l.copy(o),this.cubes.setColorAt(u,l.multiplyScalar(1.4))}this.cubes.instanceColor.needsUpdate=!0}derez(e,t,i=16739125,n=1){let s=this._c,r=this._v,o=new le(i);for(let l=0;l<90*n;l++)r.set(Math.random()-.5,Math.random()*.8+.1,Math.random()-.5).normalize().multiplyScalar(1+Math.random()*4).addScaledVector(t,1.2),Math.random()<.3?s.setRGB(1.5,1.5,1.5):s.copy(o).multiplyScalar(1.5),this.pixels.emit(this._sv.copy(e).add(new R((Math.random()-.5)*.5,(Math.random()-.5)*1.4*n,(Math.random()-.5)*.5)),r,.04+Math.random()*.06,.5+Math.random()*.6,s);this.spawnCubes(e,t,Math.round(34*n),i,1,.5*n)}wallHit(e,t){this.holes.add(e.clone().addScaledVector(t,.006),t,.08+Math.random()*.04);let i=this._c;for(let n=0;n<14;n++){let s=this._v.copy(t).multiplyScalar(2+Math.random()*4).add(this._sv.set((Math.random()-.5)*4,(Math.random()-.2)*4,(Math.random()-.5)*4));i.setRGB(1,.55+Math.random()*.3,.2),this.sparks.emit(e,s,.02+Math.random()*.03,.15+Math.random()*.25,i)}this.puff(e,t,10130570,.7)}puff(e,t,i,n=1){let s=this._c.set(i),r=new R;for(let o=0;o<6;o++)r.copy(t).multiplyScalar(.4+Math.random()*.9).add(this._sv.set((Math.random()-.5)*.5,Math.random()*.4,(Math.random()-.5)*.5)),this.dust.emit(e,r,(.18+Math.random()*.2)*n,.7+Math.random()*.6,s,.7*n)}pool(e,t,i=1.6){this.blood&&this.floorDecals.add(new R(e,.014+Math.random()*.003,t),Pn,.3,Math.random()*6.28,-1,i)}spawnPortal(e,t=null){let i=this._c;if(t!==null){let s=new le(t);for(let r=0;r<50;r++){let o=this._v.set((Math.random()-.5)*.6,1+Math.random()*2.5,(Math.random()-.5)*.6);i.copy(s).multiplyScalar(1.5),this.pixels.emit(new R(e.x+(Math.random()-.5)*1,.05+Math.random()*1.6,e.z+(Math.random()-.5)*1),o,.03+Math.random()*.04,.6+Math.random()*.6,i)}return}let n=new R;for(let s=0;s<10;s++){let r=this._v.set((Math.random()-.5)*.8,.3+Math.random()*.9,(Math.random()-.5)*.8);i.setRGB(.06,.03,.03),this.dust.emit(n.set(e.x+(Math.random()-.5)*.9,.15,e.z+(Math.random()-.5)*.9),r,.5+Math.random()*.5,1.4+Math.random(),i,.8)}for(let s=0;s<40;s++){let r=this._v.set((Math.random()-.5)*1.5,1.2+Math.random()*2.5,(Math.random()-.5)*1.5);i.setRGB(1,.35+Math.random()*.2,.08),this.embers.emit(n.set(e.x+(Math.random()-.5)*1.1,.05,e.z+(Math.random()-.5)*1.1),r,.025+Math.random()*.03,.8+Math.random(),i)}}explosion(e,t,i=1){let n=this._c,s=this._v,r=new R;for(let c=0;c<46*i;c++){s.set(Math.random()-.5,Math.random()-.3,Math.random()-.5).normalize().multiplyScalar(2+Math.random()*7*i),t&&s.addScaledVector(t,2.5);let h=Math.random();h<.3?n.setRGB(3.2,2.6,1.6):h<.7?n.setRGB(2.6,1.1,.25):n.setRGB(1.6,.35,.05),this.fire.emit(r.copy(e).add(this._sv.set((Math.random()-.5)*.4,(Math.random()-.5)*.4,(Math.random()-.5)*.4)),s,(.5+Math.random()*.7)*i,.25+Math.random()*.4,n,2.4*i)}for(let c=0;c<26*i;c++){s.set(Math.random()-.5,Math.random()*.8,Math.random()-.5).normalize().multiplyScalar(1+Math.random()*3.5*i);let h=.05+Math.random()*.06;n.setRGB(h,h*.95,h*.9),this.smoke.emit(r.copy(e),s,(.7+Math.random()*.8)*i,1.8+Math.random()*1.6,n,1.5*i)}for(let c=0;c<70*i;c++)s.set(Math.random()-.5,Math.random()-.2,Math.random()-.5).normalize().multiplyScalar(5+Math.random()*12),n.setRGB(1,.6+Math.random()*.3,.25),this.sparks.emit(e,s,.03+Math.random()*.04,.4+Math.random()*.7,n);for(let c=0;c<30*i;c++)s.set(Math.random()-.5,Math.random()*.6+.2,Math.random()-.5).normalize().multiplyScalar(1+Math.random()*3),n.setRGB(1,.4,.1),this.embers.emit(r.copy(e),s,.03+Math.random()*.03,1+Math.random()*1.5,n);let o=this._ray;o.set(r.copy(e).addScaledVector(t||Pn,.3),this._sv.copy(t||Pn).negate()),o.far=1.6;let l=o.intersectObjects(this.level.colliders,!1)[0];if(l&&l.face){let c=l.face.normal.clone().transformDirection(l.object.matrixWorld);this.scorch.add(l.point.clone().addScaledVector(c,.012),c,(2.6+Math.random())*i)}else e.y<1.5&&this.scorch.add(new R(e.x,.011,e.z),Pn,(2.6+Math.random())*i)}gibExplode(e,t){if(!this.blood){this.puff(e,Pn,9080696,2);return}let i=this._c,n=this._v;for(let r=0;r<220;r++)n.set(Math.random()-.5,Math.random()*.9,Math.random()-.5).normalize().multiplyScalar(2+Math.random()*7).addScaledVector(t,2),i.setRGB(.4+Math.random()*.2,0,0),this.drops.emit(this._sv.copy(e).add(new R((Math.random()-.5)*.4,(Math.random()-.5)*1.2,(Math.random()-.5)*.4)),n,.05+Math.random()*.1,1.3+Math.random(),i,0,1);for(let r=0;r<14;r++)n.set(Math.random()-.5,Math.random()*.6,Math.random()-.5).multiplyScalar(2.5),i.setRGB(.22,.01,.01),this.mist.emit(e,n,.35+Math.random()*.4,.6+Math.random()*.5,i,1.4);this.spawnGibs(e,t,26,1.3,1.5);let s=this._ray;for(let r=0;r<7;r++){let o=Math.random()*Math.PI*2;s.set(e,this._sv.set(Math.cos(o),(Math.random()-.6)*.5,Math.sin(o)).normalize()),s.far=4;let l=s.intersectObjects(this.level.colliders,!1)[0];if(!l||!l.face)continue;let c=l.face.normal.clone().transformDirection(l.object.matrixWorld);Math.abs(c.y)<.5?this.wallDecals.add(l.point.clone().addScaledVector(c,.01),c,1.2+Math.random()*.8,(Math.random()-.5)*.4):c.y>.5&&this.floorDecals.add(l.point.clone().setY(l.point.y+.013),Pn,1+Math.random()*.8)}this.pool(e.x,e.z,2.6)}update(e){for(let n of this.pools)n.update(e);this.floorDecals.update(e);let t=!1;for(let n=0;n<this.gibData.length;n++){let s=this.gibData[n];if(s.life<=0){this._m.makeScale(0,0,0),this.gibs.setMatrixAt(n,this._m);continue}t=!0,s.life-=e,s.rest||(s.v.y-=11*e,s.p.addScaledVector(s.v,e),s.r.x+=s.w.x*e,s.r.y+=s.w.y*e,s.r.z+=s.w.z*e,s.p.y<.03&&(s.p.y=.03,Math.abs(s.v.y)<1.2&&(s.rest=!0,Math.random()<.6&&this.dripDecals.add(new R(s.p.x,.012,s.p.z),Pn,.18+Math.random()*.15)),s.v.y*=-.3,s.v.x*=.5,s.v.z*=.5,s.w.multiplyScalar(.5)),this.level.collide(s.p,.04));let r=s.s*Math.min(1,s.life/3);this._q.setFromEuler(s.r),this._m.compose(s.p,this._q,this._sv.set(r,r*.7,r)),this.gibs.setMatrixAt(n,this._m)}(t||this._gibsWasAny)&&(this.gibs.instanceMatrix.needsUpdate=!0),this._gibsWasAny=t;let i=!1;for(let n=0;n<this.cubeData.length;n++){let s=this.cubeData[n];if(s.life<=0){this._cubesWasAny&&(this._m.makeScale(0,0,0),this.cubes.setMatrixAt(n,this._m));continue}i=!0,s.life-=e,s.v.y-=7*e,s.v.multiplyScalar(Math.exp(-1.2*e)),s.p.addScaledVector(s.v,e),s.p.y<.04&&(s.p.y=.04,s.v.y*=-.4),s.r.x+=s.w.x*e,s.r.y+=s.w.y*e;let r=Math.sin(s.life*40+n)>-.6?1:0,o=s.s*Math.min(1,s.life/s.max*2.2)*r;this._q.setFromEuler(s.r),this._m.compose(s.p,this._q,this._sv.set(o,o,o)),this.cubes.setMatrixAt(n,this._m)}(i||this._cubesWasAny)&&(this.cubes.instanceMatrix.needsUpdate=!0),this._cubesWasAny=i}reset(){this.decals.forEach(e=>e.clear());for(let e of this.gibData)e.life=0;for(let e of this.cubeData)e.life=0;this._gibsWasAny=!0,this._cubesWasAny=!0;for(let e of this.pools)e.clear()}};var In="CityDeadOutfit",Gv=["Spine1","Spine2","Neck","Head"],Vv={Spine1:.45,Spine2:.7,Neck:.9,Head:1},ns=[["Head","+Head",.125,"head"],["Neck","Head",.075,"head"],["Hips","Spine1",.16,"body"],["Spine1","Spine2",.16,"body"],["Spine2","Neck",.13,"body"],["LeftUpLeg","LeftLeg",.11,"limb"],["RightUpLeg","RightLeg",.11,"limb"],["LeftLeg","LeftFoot",.085,"limb"],["RightLeg","RightFoot",.085,"limb"],["LeftArm","LeftForeArm",.075,"limb"],["RightArm","RightForeArm",.075,"limb"],["LeftForeArm","LeftHand",.065,"limb"],["RightForeArm","RightHand",.065,"limb"]],Va={normal:{name:"Zombie",glitchName:"Glitch",hp:1,speed:1,dmg:1,scale:1,radius:.38,reach:1.35,glow:16739125,tint:[1,1,1]},runner:{name:"Sprinter",glitchName:"Sprinter",hp:.55,speed:1,dmg:.7,scale:.88,radius:.34,reach:1.3,glow:3531007,tint:[1.15,1.12,1.05],clip:"run"},bomber:{name:"Bl\xE4hbauch",glitchName:"Bit-Bombe",hp:.7,speed:1.15,dmg:0,scale:1.05,radius:.4,reach:2,glow:16765498,tint:[.85,1.05,.55],fat:1.22},brute:{name:"Brocken",glitchName:"Firewall",hp:3.6,speed:.6,dmg:1.8,scale:1.34,radius:.52,reach:1.75,glow:16723311,tint:[.75,.62,.6]}};function Wv(a,e){let t=a.clone();return t.name=a.name+"-glitch",t.normalScale=new Ae(.6,.6),t.onBeforeCompile=i=>{Object.assign(i.uniforms,e),i.vertexShader=`uniform float uTime; uniform float uGlitch;
`+i.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
      {
        float sy = gl_Position.y / gl_Position.w;
        float band = floor(sy * 22.0) + floor(uTime * 11.0) * 13.0;
        float h = fract(sin(band * 12.9898) * 43758.5453);
        // nur bei Treffern kurz versetzen \u2013 im Ruhezustand steht die Figur still (Kopfschuss soll machbar sein)
        gl_Position.x += step(0.97 - uGlitch * 0.3, h) * step(0.2, uGlitch) * (h - 0.5) * 0.045 * gl_Position.w * uGlitch;
      }`),i.fragmentShader=`uniform vec3 uRim; uniform float uTime; uniform float uDissolve; uniform float uPulse; uniform float uGlitch;
float zwh(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
`+i.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        float zwCell = zwh(floor(gl_FragCoord.xy / 5.0));
        if (uDissolve > 0.0 && zwCell < uDissolve) discard;`).replace("#include <map_fragment>",`#include <map_fragment>
        float zwLum = dot(diffuseColor.rgb, vec3(0.3, 0.59, 0.11));
        diffuseColor.rgb = vec3(zwLum) * vec3(0.16, 0.17, 0.22);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        {
          vec3 zvd = normalize(vViewPosition);
          float rim = pow(1.0 - clamp(abs(dot(normal, zvd)), 0.0, 1.0), 2.0);
          float scan = 0.55 + 0.45 * step(0.5, fract(gl_FragCoord.y * 0.22 - uTime * 2.0));
          float flick = 0.8 + 0.2 * step(0.35, fract(sin(floor(uTime * 18.0)) * 437.585));
          float edge = (uDissolve > 0.0 && zwCell < uDissolve + 0.12) ? 3.0 : 0.0;
          totalEmissiveRadiance += uRim * (rim * 2.6 * scan * flick + 0.035 + uPulse * 1.6 + uGlitch * 0.35 + edge);
        }`)},t.customProgramCacheKey=()=>"zw-glitch",t}var qv=2.25,Xv=.62,il=class{constructor(e,t){this.scene=e.scene,this.clips={};let i=new ui().setFromObject(this.scene);this.rawHeight=i.max.y-i.min.y,this.scale=1.78/this.rawHeight,this.mats={};let n=(f,m={})=>new ue({map:f.c,normalMap:f.n,roughnessMap:f.orm,metalnessMap:f.orm,aoMap:f.orm,roughness:1,metalness:1,...m});this.scene.traverse(f=>{if(!f.isMesh)return;let m=f.material.name||"";/Outfit/i.test(m)?f.material=n(t.outfit,{name:"outfit"}):f.material=n(t.body,{name:"body"}),f.castShadow=!0,f.receiveShadow=!0});for(let f of e.animations)this.clips[f.name]=f;let s=In+"Hips.position";this.speed={};for(let[f,m]of Object.entries(this.clips)){let b=m.tracks.find(M=>M.name===s);if(!b)continue;let g=b.values,p=g.length/3,x=g[(p-1)*3+2]-g[2],E=g[(p-1)*3]-g[0];if(this.speed[f]=Math.hypot(E,x)*this.scale/m.duration,f==="die")continue;let v=g[0],y=g[2];for(let M=0;M<p;M++)g[M*3]=v,g[M*3+2]=y}{let f=Rr(this.scene),m=new Ms(f),b=f.getObjectByName(In+"LeftToeBase")||f.getObjectByName(In+"LeftFoot"),g=f.getObjectByName(In+"RightToeBase")||f.getObjectByName(In+"RightFoot"),p=new R,x=new R,E=new R,v=new R;for(let y of["walk","walk2","run"]){let M=this.clips[y];if(!M||this.speed[y]>.2)continue;let A=m.clipAction(M);A.reset().play();let _=90,T=M.duration/_,C=[];for(let L=0;L<=_;L++){if(m.setTime(L*T),f.updateMatrixWorld(!0),b.getWorldPosition(p),g.getWorldPosition(x),L>0){let D=p.y<x.y?[p,E]:[x,v];C.push(-(D[0].z-D[1].z)/T)}E.copy(p),v.copy(x)}A.stop(),C.sort((L,D)=>L-D);let I=C[C.length*.6|0];this.speed[y]=Math.max(.15,Math.min(3.5,I*this.scale))}}for(let f of Object.values(this.clips))f.tracks=f.tracks.filter(m=>!m.name.startsWith("root."));this.attackHits={};let r=Rr(this.scene),o=new Ms(r),l=r.getObjectByName(In+"LeftHand"),c=r.getObjectByName(In+"RightHand"),h=r.getObjectByName(In+"Hips"),u=new R,d=new R;for(let f of["attack","attack2","attack3"]){let m=this.clips[f];if(!m)continue;let b=o.clipAction(m);b.reset().play();let g=[],p=60;for(let M=0;M<=p;M++){o.setTime(m.duration*M/p),r.updateMatrixWorld(!0),h.getWorldPosition(d);let A=l.getWorldPosition(u).z-d.z,_=c.getWorldPosition(u).z-d.z;g.push(Math.max(A,_))}b.stop();let x=Math.max(...g),E=Math.min(...g),v=E+(x-E)*.78,y=[];for(let M=1;M<p;M++)if(g[M]>=v&&g[M]>=g[M-1]&&g[M]>=g[M+1]){let A=M/p;(!y.length||A-y[y.length-1]>.12)&&y.push(A)}this.attackHits[f]=y.length?y:[.45]}}},jv=0,mu=class{constructor(e){this.id=++jv,this.tpl=e,this.root=new qe,this.model=Rr(e.scene),this.model.scale.setScalar(e.scale),this.root.add(this.model),this.meshes=[],this.U={uTime:{value:0},uRim:{value:new le(16739125)},uDissolve:{value:0},uPulse:{value:0},uGlitch:{value:0}},this.style="hard",this.model.traverse(t=>{t.isMesh&&(t.material=t.material.clone(),t.material.emissive=new le(0),t.userData.real=t.material,t.userData.glitch=Wv(t.material,this.U),t.userData.glitch.emissive=new le(0),t.frustumCulled=!1,this.meshes.push(t))}),this.type=Va.normal,this.typeKey="normal",this.bones={},this.model.traverse(t=>{t.isBone&&(this.bones[t.name.replace(In,"")]=t)}),this.mixer=new Ms(this.model),this.actions={};for(let[t,i]of Object.entries(e.clips))this.actions[t]=this.mixer.clipAction(i);this.actions.die.setLoop(Zn,1),this.actions.die.clampWhenFinished=!0;for(let t of["attack","attack2","attack3","hit","scream"])this.actions[t]&&(this.actions[t].setLoop(Zn,1),this.actions[t].clampWhenFinished=!0);this.blob=new ve(Zv,ip),this.blob.rotation.x=-Math.PI/2,this.blob.position.y=.02,this.blob.renderOrder=1,this.root.add(this.blob),pu||(pu=new pn({map:Yv(),depthTest:!1,depthWrite:!1,transparent:!0,toneMapped:!1})),this.marker=new Gn(pu),this.marker.scale.set(.42,.42,1),this.marker.renderOrder=20,this.marker.visible=!1,this.root.add(this.marker),this.marked=!1,this.active=!1,this.cur=null,this._v=new R,this.capsA=ns.map(()=>new R),this.capsB=ns.map(()=>new R)}spawn(e,t){this.active=!0,this.gibbed=!1,this.push=0,this.state="rise",this.dead=!1,this.root.position.copy(e),this.root.scale.set(1,1,1),this.root.rotation.y=Math.random()*Math.PI*2,this.root.visible=!0;let i=this.type=Va[t.type]||Va.normal;this.typeKey=t.type||"normal",this.hp=this.maxHp=t.hp*i.hp,this.speedMul=t.speed*i.speed,this.dmg=t.dmg*i.dmg,this.radius=i.radius,this.fuse=-1,this.marked=!1,this.markT=0,this.marker.visible=!1;let n=(.92+Math.random()*.16)*i.scale;this.model.scale.setScalar(this.tpl.scale*n),i.fat&&(this.model.scale.x*=i.fat,this.model.scale.z*=i.fat),this.height=1.78*n,this.marker.position.y=this.height+.45,this.walkClip=i.clip||(Math.random()<.3?"walk":"walk2"),this.U.uRim.value.set(i.glow),this.U.uDissolve.value=this.style==="glitch"?1:0,this.U.uPulse.value=0,this.U.uGlitch.value=.6,this.dissolveDir=-1,this.flinch=0,this.flinchSide=0,this._calmReset=!0,this.knock=0,this.knockDir=new R,this.flash=0,this.stagger=0,this.groanT=1+Math.random()*4,this.attackCD=0,this.deadT=0,this.sink=0,this.headless=!1,this.bones.Head.scale.setScalar(1),this.pathT=0,this.blob.visible=!0,this.blob.material=ip,this.blob.scale.setScalar(1);let s=.85+Math.random()*.2;for(let o of this.meshes)for(let l of[o.userData.real,o.userData.glitch])l.emissive.setRGB(0,0,0),l.color.setRGB(s*i.tint[0],s*i.tint[1],s*i.tint[2]);this.mixer.stopAllAction();let r=this.actions.die;r.reset(),r.setLoop(Zn,1),r.clampWhenFinished=!0,r.time=r.getClip().duration,r.timeScale=-1.35,r.play(),this.cur="die",this.mixer.update(0)}play(e,t=.25,i=1){let n=this.actions[e];if(!n)return;if(this.cur===e&&n.isRunning()){n.timeScale=i;return}n.reset(),n.timeScale=i,n.setEffectiveWeight(1),n.play();let s=this.actions[this.cur];s&&s!==n&&s.crossFadeTo(n,t,!1),this.cur=e}setStyle(e){this.style=e;for(let t of this.meshes)t.material=e==="glitch"?t.userData.glitch:t.userData.real;e!=="glitch"&&(this.U.uDissolve.value=0)}setEmissive(e,t,i){for(let n of this.meshes)n.material.emissive.setRGB(e,t,i)}updateCapsules(){for(let e=0;e<ns.length;e++){let[t,i]=ns[e];this.bones[t].getWorldPosition(this.capsA[e]),i==="+Head"?(this.bones.Neck.getWorldPosition(this.capsB[e]),this.capsB[e].sub(this.capsA[e]).normalize().multiplyScalar(-.2*(this.height/1.78)).add(this.capsA[e])):this.bones[i].getWorldPosition(this.capsB[e])}}raycast(e,t,i){if(!this.active||this.dead)return null;let n=this._v.copy(this.root.position);n.y+=1;let s=n.sub(e),r=s.dot(t);if(r<0||r-1.4>i||s.lengthSq()-r*r>1.5*1.5)return null;this.updateCapsules();let o=null;for(let l=0;l<ns.length;l++){let c=ns[l][2]*(this.height/1.78),h=Kv(e,t,this.capsA[l],this.capsB[l],c);h!==null&&h<i&&(!o||h<o.t)&&(o={t:h,zone:ns[l][3],bone:ns[l][0]})}return o&&(o.point=e.clone().addScaledVector(t,o.t)),o}},Fr=new R,du=new R,fu=new R;function Kv(a,e,t,i,n){Fr.subVectors(i,t),du.subVectors(a,t);let s=Fr.dot(Fr),r=Fr.dot(e),o=Fr.dot(du),l=e.dot(du),c=s-r*r,h=c>1e-6?(s*-l+r*o)/c:0,u=s>1e-6?(o+h*r)/s:0;u=Math.max(0,Math.min(1,u)),fu.copy(t).addScaledVector(Fr,u),h=Math.max(0,fu.clone().sub(a).dot(e));let f=a.clone().addScaledVector(e,h).distanceTo(fu);return f>n?null:Math.max(0,h-Math.sqrt(Math.max(0,n*n-f*f)))}function Yv(){let a=document.createElement("canvas");a.width=a.height=64;let e=a.getContext("2d");e.translate(32,32),e.rotate(Math.PI/4),e.strokeStyle="#ffffff",e.lineWidth=6,e.strokeRect(-14,-14,28,28),e.fillStyle="#ff6b35",e.fillRect(-8,-8,16,16);let t=new Et(a);return t.colorSpace=et,t}var pu=null;function Jv(){let a=document.createElement("canvas");a.width=a.height=64;let e=a.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,32);return t.addColorStop(0,"rgba(0,0,0,0.75)"),t.addColorStop(.5,"rgba(0,0,0,0.4)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Et(a)}var Zv=new pt(1.3,1.3),ip=new ut({map:Jv(),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3}),nl=class{constructor(e,t,i=18){this.game=e,this.tpl=t,this.pool=[],this.style="hard";for(let n=0;n<i;n++){let s=new mu(t);s.root.visible=!1,e.scene.add(s.root),this.pool.push(s)}this._d=new R,this._f=new R,this._s=new R}get alive(){return this.pool.filter(e=>e.active&&!e.dead)}setStyle(e){this.style=e;for(let t of this.pool)t.setStyle(e),t.active&&t.dead&&(t.active=!1,t.root.visible=!1)}spawn(e,t){let i=this.pool.find(n=>!n.active);if(!i){let n=this.pool.filter(s=>s.dead).sort((s,r)=>r.deadT-s.deadT)[0];if(!n)return null;i=n}return i.setStyle(this.style),i.spawn(e,t),this.game.fx.spawnPortal(e,this.style==="glitch"?i.type.glow:null),this.game.audio.roar(e.clone().setY(1.5)),i}reset(){for(let e of this.pool)e.active=!1,e.root.visible=!1,e.mixer.stopAllAction()}damage(e,t,i,n,s,r=0,o=!1){if(e.dead)return!1;e.marked&&(t*=1.3),e.hp-=t,e.flash=1;let l=this.game;if(e.hp<=0)return this.kill(e,o&&l.fx.blood?"gib":i,n,s,r),!0;let c=e.typeKey==="brute";return r>0&&(e.knock=r*(c?.15:.6),e.knockDir=s.clone().setY(0).normalize()),e.flinch=Math.min(1,e.flinch+(i==="head"?.6:.5)*(c?.4:1)),e.flinchSide=(Math.random()-.5)*2,e.stagger=(i==="limb"?.35:.25)*(c?.3:1),e.style==="glitch"&&(e.U.uGlitch.value=1),Math.random()<(c?.06:.25)&&e.state==="chase"&&(e.state="hit",e.hitT=.55,e.play("hit",.08,1.6)),Math.random()<.5&&l.audio.groan(e.root.position.clone().setY(1.6)),!1}kill(e,t,i,n,s=0){let r=this.game;if(e.dead=!0,e.marker.visible=!1,e.deathY=e.root.position.y,e.state="dead",e.deadT=0,e.flinch=0,e.fuse=-1,e.push=s,e.pushDir=n.clone().setY(0).normalize(),e.style==="glitch"){e.dissolveDir=1,e.U.uDissolve.value=.02,e.U.uGlitch.value=1,e.setEmissive(0,0,0);let c=e.actions.die;c.reset(),c.timeScale=1.6,c.setLoop(Zn,1),c.clampWhenFinished=!0,c.play();let h=e.actions[e.cur];h&&h!==c&&h.crossFadeTo(c,.1,!1),e.cur="die",e.root.rotation.y=Math.atan2(-n.x,-n.z),r.fx.derez(e.root.position.clone().setY(e.height*.55),e.pushDir,e.type.glow,e.type.scale),r.audio.derez(e.root.position.clone().setY(1.2),e.typeKey==="brute"),r.onKill(e,t==="gib"?"body":t);return}if(t==="gib"||e.typeKey==="bomber"){e.gibbed=!0,e.root.visible=!1,e.pooled=!0,r.fx.gibExplode(e.root.position.clone().setY(.95),e.pushDir),r.audio.headshot(e.root.position.clone().setY(1)),r.onKill(e,t==="self"?"self":"gib");return}let o=e.actions.die;o.reset(),o.timeScale=1.15,o.setLoop(Zn,1),o.clampWhenFinished=!0,o.play();let l=e.actions[e.cur];l&&l!==o&&l.crossFadeTo(o,.12,!1),e.cur="die",e.setEmissive(0,0,0),e.root.rotation.y=Math.atan2(-n.x,-n.z),t==="head"&&r.fx.blood&&(e.headless=!0,e.bones.Head.scale.setScalar(1e-4)),r.audio.death(e.root.position.clone().setY(1.4)),setTimeout(()=>e.active&&e.dead&&r.audio.thud(e.root.position.clone().setY(.2)),1300),r.onKill(e,t)}update(e,t){let i=this.game,n=i.level,s=t.pos;n.updateFlow(s.x,s.z);let r=this.pool.filter(c=>c.active),o=i.time;for(let c of r){let h=c.root.position;c.mixer.update(e),c.U.uTime.value=o+c.id*1.7,c.style==="glitch"&&(c.dissolveDir<0&&c.U.uDissolve.value>0&&(c.U.uDissolve.value=Math.max(0,c.U.uDissolve.value-e*1.1)),c.U.uGlitch.value=Math.max(0,c.U.uGlitch.value-e*3));let u=0;if(c.typeKey==="bomber"&&!c.dead){let D=c.fuse>=0;if(u=(.5+.5*Math.sin(o*(D?28:5)+c.id))*(D?1:.35),D){let H=1+(.7-Math.max(0,c.fuse))*.25;c.root.scale.set(H,1+(H-1)*.4,H)}}if((c.flash>0||u>0||c._emis)&&(c.flash=Math.max(0,c.flash-e*9),c.style==="glitch"?(c.U.uPulse.value=u,c.setEmissive(c.flash*.6,c.flash*.6,c.flash*.6)):c.setEmissive(c.flash*.22+u*.35,c.flash*.02+u*.3,u*.02),c._emis=c.flash>0||u>0),c.dead){if(c.deadT+=e,c.style==="glitch"){c.deadT>.12&&(c.U.uDissolve.value=Math.min(1.05,c.U.uDissolve.value+e*1.9)),c.deadT>.7&&(c.active=!1,c.root.visible=!1,c.root.scale.set(1,1,1));continue}if(c.gibbed){c.deadT>.5&&(c.active=!1,c.gibbed=!1,c.root.scale.set(1,1,1));continue}if(c.push>.05){h.addScaledVector(c.pushDir,c.push*e),c.push*=Math.exp(-e*4),n.collide(h,.3,h.y);let D=n.groundAt(h.x,h.z,.3,h.y);h.y>D&&(h.y=Math.max(D,h.y-e*8),c.deathY=h.y)}if(c.deadT>1.9&&!c.pooled){c.pooled=!0;let D=c.bones.Hips.getWorldPosition(this._d);h.y<.05&&i.fx.pool(D.x,D.z,c.headless?2.2:1.5)}c.deadT>.4&&(c.blob.material.opacity=1),c.deadT>28&&(c.sink+=e*.25,h.y=(c.deathY||0)-c.sink,c.sink>.6&&(c.active=!1,c.root.visible=!1,c.pooled=!1,h.y=0,c.root.scale.set(1,1,1)));continue}c.pooled=!1;let d=s.x-h.x,f=s.z-h.z,m=Math.hypot(d,f),b=Math.abs(t.y-h.y);c.marker.visible=c.marked;let g=c.typeKey==="runner"?1.05*c.speedMul:c.speedMul*qv,p=g*(c.typeKey==="runner"?.85:Xv);if(c.state==="rise"){c.actions.die.time<=.02&&(c.state=Math.random()<(c.typeKey==="runner"?.15:.35)?"scream":"chase",c.state==="scream"?(c.play("scream",.25,1.4),c.screamT=1.6,i.audio.roar(h.clone().setY(1.6))):c.play(c.walkClip,.3,p)),this.face(c,d,f,e,2);continue}if(c.state==="scream"){c.screamT-=e,this.face(c,d,f,e,3),c.screamT<=0&&(c.state="chase",c.play(c.walkClip,.35,p));continue}if(c.state==="hit"){c.hitT-=e,c.hitT<=0&&(c.state="chase",c.play(c.walkClip,.25,p));continue}if(c.state==="fuse"){if(c.fuse-=e,this.face(c,d,f,e,4),c.fuse<=0){c.hp=0;let D=h.clone().setY(1);this.kill(c,"self",D,this._d.set(d,0,f).normalize().clone(),0)}continue}if(c.state==="attack"){this.face(c,d,f,e,5);let D=c.actions[c.attackClip],H=D.time/D.getClip().duration,N=this.tpl.attackHits[c.attackClip];for(;c.nextHit<N.length&&H>=N[c.nextHit];)c.nextHit++,m<c.type.reach+.4+(t.y-h.y>.4?.4:0)&&b<1.3*c.type.scale&&!t.dead&&i.hurtPlayer(c.dmg,h);(!D.isRunning()||H>.97||m>c.type.reach+1.25&&H>(N[N.length-1]||.5)+.05)&&(c.state="chase",c.attackCD=c.typeKey==="brute"?.8:.4,c.play(c.walkClip,.3,p));continue}if(c.attackCD-=e,m<c.type.reach+(t.y-h.y>.4?.45:0)&&b<1.3*c.type.scale&&c.attackCD<=0&&!t.dead){if(c.typeKey==="bomber"){c.state="fuse",c.fuse=.7,c.play("scream",.1,1.8),i.audio.fuse(h.clone().setY(1.2));continue}c.state="attack",c.attackClip=["attack","attack2","attack3"][Math.random()*3|0],c.nextHit=0,c.play(c.attackClip,.15,c.typeKey==="brute"?1.05:1.45),i.audio.attackGrunt(h.clone().setY(1.6));continue}let x=this._f,E=.42,v=-f/(m||1),y=d/(m||1);m<24&&b<.6&&n.los(h.x+v*E,h.z+y*E,s.x,s.z,!1,h.y)&&n.los(h.x-v*E,h.z-y*E,s.x,s.z,!1,h.y)?x.set(d/m,0,f/m):n.flowDir(h.x,h.z,x);let A=this._s.set(0,0,0);for(let D of r){if(D===c||D.dead||Math.abs(D.root.position.y-h.y)>1)continue;let H=h.x-D.root.position.x,N=h.z-D.root.position.z,j=(c.radius+D.radius)*1.15,Y=H*H+N*N;if(Y<j*j&&Y>1e-5){let B=Math.sqrt(Y);A.x+=H/B*(j-B)*2.2,A.z+=N/B*(j-B)*2.2}}x.add(A),x.y=0,x.lengthSq()>1e-6&&x.normalize(),this.face(c,x.x,x.z,e,c.typeKey==="runner"?4.5:3.2),c.stagger=Math.max(0,c.stagger-e);let _=this.tpl.speed[c.walkClip]||.9,T=(c.typeKey==="runner"?3.2*c.speedMul:_*g*c.type.scale)*(c.stagger>0?.25:1)*(m<c.radius+.7?0:1);c.knock>.05&&(h.addScaledVector(c.knockDir,c.knock*e),c.knock*=Math.exp(-e*6));let C=c.root.rotation.y;h.x+=Math.sin(C)*T*e,h.z+=Math.cos(C)*T*e,n.collide(h,c.radius,h.y);let I=n.groundAt(h.x,h.z,c.radius,h.y);I>h.y?h.y=Math.min(I,h.y+e*3.2):I<h.y&&(h.y=Math.max(I,h.y-e*9));let L=c.actions[c.walkClip];L&&(L.timeScale=p*(c.stagger>0?.4:1)),c.groanT-=e,c.groanT<=0&&(c.groanT=3+Math.random()*6,m<26&&i.audio.groan(h.clone().setY(1.6)))}let l=1-Math.exp(-e*2);for(let c of r){if(c.dead||!c.bones.Head)continue;if(c.state==="rise"){c._calmReset=!0;continue}let h=c.state==="attack"?.45:.92;c._calm||(c._calm={});for(let u of Gv){let d=c.bones[u];if(!d)continue;let f=c._calm[u];(!f||c._calmReset)&&(f=c._calm[u]=(f||new Dt).copy(d.quaternion)),f.slerp(d.quaternion,l),d.quaternion.slerp(f,h*Vv[u])}c._calmReset=!1}for(let c of r){if(c.dead||c.flinch<=.001)continue;c.flinch*=Math.exp(-e*9);let h=c.flinch;c.bones.Spine2.rotation.x-=h*.3,c.bones.Spine1.rotation.x-=h*.18,c.bones.Head.rotation.x-=h*.18,c.bones.Spine2.rotation.z+=h*.18*c.flinchSide}}face(e,t,i,n,s){if(Math.abs(t)+Math.abs(i)<1e-5)return;let o=Math.atan2(t,i)-e.root.rotation.y;o=Math.atan2(Math.sin(o),Math.cos(o)),e.root.rotation.y+=o*Math.min(1,s*n)}raycast(e,t,i,n=null){let s=null;for(let r of this.pool){if(!r.active||r.dead||n&&n.has(r))continue;let o=r.raycast(e,t,i);o&&(!s||o.t<s.t)&&(s=o,s.z=r)}return s}};var $v=17,Pt=6,Qv=a=>"#"+a.toString(16).padStart(6,"0"),sl=class{constructor(e,t){this.c=e,this.g=e.getContext("2d"),this.cache=new Map,this.t=0,this.setLevel(t)}setLevel(e){this.level=e,this.cache.has(e)||this.cache.set(e,this.renderMap(e)),this.bg=this.cache.get(e)}renderMap(e){let t=e.map,i=t.length,n=t[0].length,s=document.createElement("canvas");s.width=n*Pt,s.height=i*Pt;let r=s.getContext("2d"),o=new Set(["#","M","H","G"]),l=new Set(["C","W","O","X","A","V","N"]);for(let c=0;c<i;c++)for(let h=0;h<n;h++){let u=t[c][h],d=e.hAt(h,c);if(d>=3.9)r.fillStyle="rgba(255,190,140,0.32)";else if(d>0)r.fillStyle=`rgba(255,190,140,${.12+d*.05})`;else{if(o.has(u))continue;l.has(u)?r.fillStyle="rgba(255,255,255,0.3)":e.isInterior&&e.isInterior(h,c)?r.fillStyle="rgba(255,214,150,0.2)":r.fillStyle=u===","?"rgba(255,255,255,0.17)":"rgba(255,255,255,0.13)"}r.fillRect(h*Pt,c*Pt,Pt,Pt),u==="S"&&(r.fillStyle="rgba(227,36,27,0.55)",r.fillRect(h*Pt+1,c*Pt+1,Pt-2,Pt-2))}r.fillStyle="rgba(255,107,53,0.35)";for(let c=1;c<i-1;c++)for(let h=1;h<n-1;h++){let u=(d,f)=>o.has(t[d][f]);u(c,h)&&(u(c-1,h)||r.fillRect(h*Pt,c*Pt,Pt,1),u(c+1,h)||r.fillRect(h*Pt,c*Pt+Pt-1,Pt,1),u(c,h-1)||r.fillRect(h*Pt,c*Pt,1,Pt),u(c,h+1)||r.fillRect(h*Pt+Pt-1,c*Pt,1,Pt))}return s}fit(){let e=Math.min(2,devicePixelRatio||1),t=Math.round(this.c.clientWidth*e);return t&&this.c.width!==t&&(this.c.width=t,this.c.height=t),this.c.width}draw(e){let t=this.fit();if(!t)return;let i=this.g,n=t/2,s=e.player,r=n/$v;this.t+=.016,i.clearRect(0,0,t,t),i.save(),i.beginPath(),i.arc(n,n,n-1,0,Math.PI*2),i.clip(),i.fillStyle="rgba(6,6,10,0.72)",i.fillRect(0,0,t,t),i.translate(n,n),i.rotate(s.yaw),i.imageSmoothingEnabled=!1;let o=r*re/Pt;i.drawImage(this.bg,-s.pos.x*r,-s.pos.z*r,this.bg.width*o,this.bg.height*o);let l=(m,b)=>[(m-s.pos.x)*r,(b-s.pos.z)*r];for(let m of e.pickups){if(!m.active)continue;let[b,g]=l(m.holder.position.x,m.holder.position.z);i.fillStyle=m.type==="health"?"#50ff70":"#ffffff";let p=Math.max(2,t*.018);i.fillRect(b-p/2,g-p/2,p,p)}let c=this.level.exit;if(c&&c.active){let[m,b]=l(this.level.exitPos.x,this.level.exitPos.z),g=Math.hypot(m,b),p=n-t*.06;g>p&&(m*=p/g,b*=p/g);let x=t*(.045+.012*Math.sin(this.t*6));i.strokeStyle="#35e0ff",i.lineWidth=Math.max(2,t*.014),i.beginPath(),i.arc(m,b,x,0,Math.PI*2),i.stroke(),i.fillStyle="#35e0ff",i.beginPath(),i.arc(m,b,x*.35,0,Math.PI*2),i.fill()}i.globalCompositeOperation="lighter";let h=.75+.25*Math.sin(this.t*7);for(let m of e.zombies.pool){if(!m.active||m.dead)continue;let[b,g]=l(m.root.position.x,m.root.position.z),p=Math.hypot(b,g),x=!1,E=n-t*.04;p>E&&(b*=E/p,g*=E/p,x=!0);let v=Qv(m.type.glow),y=t*(m.typeKey==="brute"?.034:.024)*(x?.7:1),M=i.createRadialGradient(b,g,0,b,g,y*3.2);M.addColorStop(0,v+"cc"),M.addColorStop(1,v+"00"),i.globalAlpha=(x?.55:1)*h,i.fillStyle=M,i.beginPath(),i.arc(b,g,y*3.2,0,Math.PI*2),i.fill(),i.globalAlpha=x?.7:1,i.fillStyle=m.typeKey==="bomber"&&m.fuse>=0?"#ffffff":v,i.beginPath(),i.arc(b,g,y,0,Math.PI*2),i.fill(),m.marked&&(i.strokeStyle="#ffffff",i.lineWidth=Math.max(1,t*.008),i.beginPath(),i.arc(b,g,y*2,0,Math.PI*2),i.stroke())}i.globalAlpha=1,i.globalCompositeOperation="source-over";let u=-Math.PI/2;i.fillStyle="rgba(244,239,232,0.7)",i.font=`800 ${Math.round(t*.075)}px system-ui, sans-serif`,i.textAlign="center",i.textBaseline="middle",i.save(),i.translate(Math.cos(u)*(n-t*.07),Math.sin(u)*(n-t*.07)),i.rotate(-s.yaw),i.fillText("N",0,0),i.restore(),i.restore(),i.save(),i.translate(n,n);let d=i.createRadialGradient(0,0,0,0,0,n*.7);d.addColorStop(0,"rgba(255,241,220,0.22)"),d.addColorStop(1,"rgba(255,241,220,0)"),i.fillStyle=d,i.beginPath(),i.moveTo(0,0),i.arc(0,0,n*.7,-Math.PI/2-.55,-Math.PI/2+.55),i.closePath(),i.fill();let f=t*.045;i.fillStyle="#ff6b35",i.strokeStyle="#000",i.lineWidth=Math.max(1,t*.008),i.beginPath(),i.moveTo(0,-f*1.2),i.lineTo(f*.8,f*.9),i.lineTo(0,f*.45),i.lineTo(-f*.8,f*.9),i.closePath(),i.fill(),i.stroke(),i.restore(),i.strokeStyle="rgba(255,255,255,0.22)",i.lineWidth=Math.max(1,t*.01),i.beginPath(),i.arc(n,n,n-i.lineWidth,0,Math.PI*2),i.stroke()}};var Wa=new R;function Ci(a,e,t,i,n,s){let r=2*Math.PI*n/4,o=Math.max(s-2*n,0),l=Math.PI/4;Wa.copy(e),Wa[i]=0,Wa.normalize();let c=.5*r/(r+o),h=1-Wa.angleTo(a)/l;return Math.sign(Wa[t])===1?h*c:o/(r+o)+c+c*(1-h)}var xt=class a extends Ee{constructor(e=1,t=1,i=1,n=2,s=.1){let r=n*2+1;if(s=Math.min(e/2,t/2,i/2,s),super(1,1,1,r,r,r),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:n,radius:s},r===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new R,c=new R,h=new R(e,t,i).divideScalar(2).subScalar(s),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,m=u.length/6,b=new R,g=.5/r;for(let p=0,x=0;p<u.length;p+=3,x+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*s,u[p+1]=h.y*Math.sign(l.y)+c.y*s,u[p+2]=h.z*Math.sign(l.z)+c.z*s,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/m)){case 0:b.set(1,0,0),f[x+0]=Ci(b,c,"z","y",s,i),f[x+1]=1-Ci(b,c,"y","z",s,t);break;case 1:b.set(-1,0,0),f[x+0]=1-Ci(b,c,"z","y",s,i),f[x+1]=1-Ci(b,c,"y","z",s,t);break;case 2:b.set(0,1,0),f[x+0]=1-Ci(b,c,"x","z",s,e),f[x+1]=Ci(b,c,"z","x",s,i);break;case 3:b.set(0,-1,0),f[x+0]=1-Ci(b,c,"x","z",s,e),f[x+1]=1-Ci(b,c,"z","x",s,i);break;case 4:b.set(0,0,1),f[x+0]=1-Ci(b,c,"x","y",s,e),f[x+1]=1-Ci(b,c,"y","x",s,t);break;case 5:b.set(0,0,-1),f[x+0]=Ci(b,c,"x","y",s,e),f[x+1]=1-Ci(b,c,"y","x",s,t);break}}static fromJSON(e){return new a(e.width,e.height,e.depth,e.segments,e.radius)}};function e_(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.translate(128/2,128/2);let i=t.createRadialGradient(0,0,0,0,0,128/2);i.addColorStop(0,"rgba(255,255,240,1)"),i.addColorStop(.15,"rgba(255,230,150,1)"),i.addColorStop(.4,"rgba(255,140,40,0.6)"),i.addColorStop(1,"rgba(255,60,0,0)"),t.fillStyle=i;for(let n=0;n<7;n++)t.rotate(Math.PI*2/7+Math.random()*.3),t.beginPath(),t.moveTo(-6,0),t.lineTo(0,-128/2*(.6+Math.random()*.4)),t.lineTo(6,0),t.fill();return t.beginPath(),t.arc(0,0,128*.2,0,Math.PI*2),t.fill(),new Et(e)}function t_(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.fillStyle="#808080",t.fillRect(0,0,128,128);for(let n=0;n<1400;n++){let s=90+Math.random()*90|0;t.fillStyle=`rgb(${s},${s},${s})`,t.fillRect(Math.random()*128,Math.random()*128,2,2)}let i=new Et(e);return i.wrapS=i.wrapT=$t,i}function i_(){let t=document.createElement("canvas");t.width=256,t.height=64;let i=t.getContext("2d");i.fillStyle="#6b4226",i.fillRect(0,0,256,64);for(let s=0;s<70;s++){let r=Math.random()*64,o=.05+Math.random()*.18;i.strokeStyle=Math.random()<.5?`rgba(40,20,8,${o})`:`rgba(150,95,55,${o})`,i.lineWidth=.5+Math.random()*2,i.beginPath(),i.moveTo(0,r);for(let l=0;l<=256;l+=16)i.lineTo(l,r+Math.sin(l*.03+s)*2.5);i.stroke()}let n=new Et(t);return n.colorSpace=et,n.wrapS=n.wrapT=$t,n}var vt={pistol:{name:"Pistole",slot:1,mag:12,maxReserve:1/0,cooldown:.15,reload:1.25,damage:34,pellets:1,spread:.006,kick:[2.2,16],camKick:.012},shotgun:{name:"Pump-Action",slot:2,mag:6,maxReserve:40,cooldown:.2,pump:.52,shellTime:.42,damage:22,pellets:10,spread:.068,kick:[5.5,48],camKick:.035},rocket:{name:"Raketenwerfer",slot:3,mag:1,maxReserve:12,cooldown:.4,reload:1.5,kick:[5,34],camKick:.03},sniper:{name:"Scharfsch\xFCtzengewehr",slot:4,mag:5,maxReserve:30,cooldown:.2,bolt:.95,reload:2.3,damage:240,pellets:1,spread:7e-4,hipSpread:.05,pierce:2,kick:[7,30],camKick:.045}},Pi=["pistol","shotgun","rocket","sniper"],gu=6,rl=class{constructor(e){this.scene=new fn,this.camera=new Lt(52,16/9,.01,10),this.scene.add(this.camera),this.hemi=new Sn(12109020,3811872,1),this.scene.add(this.hemi),this.key=new Tn(16770760,1.4),this.key.position.set(-.5,1,.4),this.scene.add(this.key),this.flashLight=new ri(16756832,0,1.5,2),this.scene.add(this.flashLight),this.scene.environment=e,this.scene.environmentIntensity=.35,this.rig=new qe,this.kick=new qe,this.camera.add(this.rig),this.rig.add(this.kick);let t=this.m={steel:new ue({color:2500651,metalness:.92,roughness:.32}),steelLight:new ue({color:5593180,metalness:.95,roughness:.22}),dark:new ue({color:657930,roughness:.6,metalness:.5}),black:new ut({color:0}),poly:new ue({color:1315860,metalness:.05,roughness:.78}),grip:new ue({color:1381653,metalness:0,roughness:.9,bumpMap:t_(),bumpScale:1.2}),glove:new ue({color:1841688,metalness:.05,roughness:.55}),knuckle:new ue({color:2762532,metalness:.05,roughness:.7}),sleeve:new ue({color:3093284,metalness:0,roughness:.95}),dot:new ue({color:0,emissive:9109338,emissiveIntensity:3}),red:new ue({color:0,emissive:16719888,emissiveIntensity:4}),brass:new ue({color:13213766,metalness:1,roughness:.3}),shellRed:new ue({color:10227728,metalness:.1,roughness:.45}),wood:new ue({map:i_(),color:12618336,roughness:.5,metalness:0}),olive:new ue({color:4082220,metalness:.35,roughness:.55}),oliveDark:new ue({color:2436122,metalness:.4,roughness:.5}),orange:new ue({color:2230528,emissive:16739125,emissiveIntensity:1.2,roughness:.4}),warhead:new ue({color:5922634,metalness:.6,roughness:.35}),nade:new ue({color:3819048,metalness:.3,roughness:.55})};this.flashTex=e_(),this.models={pistol:this.buildPistol(),shotgun:this.buildShotgun(),rocket:this.buildLauncher(),sniper:this.buildSniper()};for(let s of Pi){let r=this.models[s];r.group.visible=s==="pistol",this.kick.add(r.group),r.group.traverse(o=>{o.isMesh&&(o.castShadow=!1,o.receiveShadow=!1)})}this.buildNadeHand(),this.shells=[];let i=new Be(.0045,.0045,.019,10),n=new Be(.0115,.0115,.065,12);for(let s=0;s<10;s++){let r=s>=5,o=new ve(r?n:i,r?t.shellRed:t.brass);o.visible=!1,this.camera.add(o),this.shells.push({m:o,v:new R,w:new R,life:0,shot:r})}this.reset()}reset(){this.state={pistol:{ammo:12,reserve:1/0},shotgun:{ammo:6,reserve:12},rocket:{ammo:1,reserve:3},sniper:{ammo:5,reserve:10}},this.grenades=3,this.owned={pistol:!0,shotgun:!0,rocket:!0,sniper:!1},this.boltT=0,this.current="pistol",this.last="shotgun",this.pending=null,this.switchT=0,this.cooldown=0,this.reloadT=0,this.pumpT=0,this.sgReload=null,this.flashT=0,this.slideT=0,this.recoil={z:0,vz:0,rx:0,vrx:0,ry:0,vry:0},this.swayX=0,this.swayY=0,this.raise=1,this.nade.t=-1,this.nade.group.visible=!1;for(let e of Pi)this.models[e].group.visible=e==="pistol";this.applyPose("pistol")}get def(){return vt[this.current]}get st(){return this.state[this.current]}get reloading(){return this.reloadT>0||!!this.sgReload}get busy(){return this.switchT>0||this.nade.t>=0||this.raise>.3}applyPose(e){let t=this.models[e];this.rigBase=t.rigBase,this.kick.rotation.set(0,0,0),t.group.rotation.copy(t.rot)}_add(e,t,i,n,s,r){let o=new ve(t,i);return o.position.set(n,s,r),e.add(o),o}rightHand(e){let t=this.m,i=(...u)=>this._add(...u),n=new qe;e.add(n);let s=i(n,new xt(.06,.1,.07,3,.02),t.glove,.004,-.088,.085);s.rotation.x=.28;for(let u=0;u<3;u++){let d=new qe;d.position.set(0,-.058-u*.022,.044-u*.006),d.rotation.x=.28,n.add(d);let f=i(d,new Ti(.0105,.03,4,10),t.glove,-.018,0,-.005);f.rotation.z=Math.PI/2,f.rotation.y=.35;let m=i(d,new Ti(.0098,.018,4,10),t.knuckle,.008,0,-.022);m.rotation.x=Math.PI/2;let b=i(d,new Ti(.0095,.02,4,10),t.glove,.024,0,-.01);b.rotation.z=Math.PI/2,b.rotation.y=-.6}let r=i(n,new Ti(.0095,.04,4,10),t.glove,.017,-.036,.022);r.rotation.x=Math.PI/2-.25,r.rotation.z=-.15;let o=i(n,new Ti(.011,.045,4,10),t.glove,-.02,-.02,.045);o.rotation.x=Math.PI/2+.25,o.rotation.z=.2;let l=i(n,new Be(.03,.033,.06,14),t.glove,.01,-.14,.13);l.rotation.x=1;let c=i(n,new Be(.038,.05,.36,16),t.sleeve,.03,-.2,.32);c.rotation.x=1.05,c.rotation.z=-.12;let h=i(n,new xi(.036,.008,8,18),t.sleeve,.012,-.152,.152);return h.rotation.x=1.05+Math.PI/2,n}supportHand(e,t,i,n,s=.028){let r=this.m,o=(...b)=>this._add(...b),l=new qe;l.position.set(t,i,n),e.add(l);let c=o(l,new xt(.05,.035,.085,3,.014),r.glove,-.006,-s-.012,0);c.rotation.z=.25;for(let b=0;b<4;b++){let g=o(l,new Ti(.0095,.034,4,10),r.glove,s*.9+.004,-.004,-.032+b*.021);g.rotation.z=-.35}let h=o(l,new Ti(.0105,.04,4,10),r.knuckle,-s-.006,.004,-.01);h.rotation.x=Math.PI/2,h.rotation.z=.2;let u=new R(-.35,-.55,.75).normalize(),d=.42,f=o(l,new Be(.048,.036,d,16),r.sleeve,0,0,0);f.quaternion.setFromUnitVectors(new R(0,-1,0),u),f.position.set(-.012,-s-.02,.03).addScaledVector(u,d/2+.02);let m=o(l,new Nt(.032,12,10),r.glove,-.012,-s-.022,.035);return l}makeFlash(e,t,i,n,s){let r=new ut({map:this.flashTex,transparent:!0,blending:Zt,depthWrite:!1,opacity:.85}),o=new qe;o.position.set(t,i,n),e.add(o);let l=new ve(new pt(s,s),r),c=new ve(new pt(s*.46,s*1.55),r);c.rotation.x=Math.PI/2,c.position.z=-s*.58;let h=c.clone();return h.rotation.set(Math.PI/2,0,Math.PI/2),o.add(l,c,h),o.visible=!1,o}buildPistol(){let e=this.m,t=(...m)=>this._add(...m),i=new qe,n=new qe;i.add(n),t(n,new xt(.03,.032,.192,3,.004),e.steel,0,0,0);for(let m=0;m<7;m++)t(n,new Ee(.0315,.022,.0025),e.steelLight,0,-.002,.055+m*.0055);t(n,new Ee(.004,.012,.034),e.dark,.0135,.007,-.012),t(n,new Ee(.0045,.0105,.028),e.steelLight,.0128,.007,-.012),t(n,new Ee(.005,.007,.008),e.steel,0,.019,-.085),t(n,new Nt(.0013,8,8),e.dot,0,.0205,-.0805),t(n,new Ee(.024,.008,.008),e.steel,0,.0195,.086),t(n,new Ee(.006,.0085,.0085),e.black,0,.021,.086),t(n,new Nt(.0012,8,8),e.dot,-.0062,.0215,.0818),t(n,new Nt(.0012,8,8),e.dot,.0062,.0215,.0818);let s=t(n,new Be(.0072,.0072,.012,16),e.steelLight,0,.002,-.097);s.rotation.x=Math.PI/2;let r=t(n,new wi(.0046,16),e.black,0,.002,-.1032);r.rotation.y=Math.PI,t(i,new xt(.027,.02,.17,2,.003),e.poly,0,-.024,-.008),t(i,new Ee(.02,.006,.05),e.poly,0,-.036,-.055);let o=t(i,new xi(.019,.0035,8,20,Math.PI),e.poly,0,-.035,.012);o.rotation.set(Math.PI,Math.PI/2,0),o.scale.set(1,1.15,1);let l=t(i,new Ee(.006,.018,.005),e.steel,0,-.04,.012);l.rotation.x=.25;let c=t(i,new xt(.031,.115,.052,3,.008),e.grip,0,-.082,.07);c.rotation.x=.28;let h=new qe;i.add(h);let u=t(h,new xt(.033,.012,.054,2,.003),e.poly,0,-.142,.087);u.rotation.x=.28,t(i,new Ee(.008,.012,.01),e.steel,0,.004,.1),this.rightHand(i);let d=this.makeFlash(n,0,.002,-.112,.048),f=new ht;return f.position.set(.016,.01,-.012),n.add(f),{group:i,slide:n,mag:h,flash:d,eject:f,rigBase:new R(.12,-.105,-.36),rot:new Jt(0,.3,-.05)}}buildShotgun(){let e=this.m,t=(...x)=>this._add(...x),i=new qe,n=e.poly;t(i,new xt(.066,.088,.27,4,.01),e.steel,0,.012,-.045),t(i,new xt(.068,.05,.2,2,.006),e.steelLight,0,0,-.045).scale.set(1,1,1),t(i,new Ee(.004,.034,.09),e.dark,.0335,.022,-.05),t(i,new Ee(.004,.024,.07),e.steelLight,.0325,.022,-.05),t(i,new xt(.012,.06,.12,2,.004),n,-.039,.01,-.06);for(let x=0;x<4;x++){let E=t(i,new Be(.0115,.0115,.07,14),e.shellRed,-.05,.01,-.105+x*.03),v=t(i,new Be(.0118,.0118,.016,14),e.brass,-.05,.047,-.105+x*.03)}let s=t(i,new Be(.021,.021,.56,24),e.steel,0,.038,-.45);s.rotation.x=Math.PI/2;let r=t(i,new Be(.025,.025,.045,24),e.steelLight,0,.038,-.71);r.rotation.x=Math.PI/2;let o=t(i,new wi(.016,20),e.black,0,.038,-.7326);o.rotation.y=Math.PI,t(i,new xt(.05,.026,.4,2,.006),n,0,.062,-.39);for(let x=0;x<8;x++)t(i,new Ee(.052,.01,.022),e.dark,0,.062,-.24-x*.042);for(let x of[-.016,.016])t(i,new Ee(.008,.03,.02),e.steel,x,.07,.06);let l=t(i,new xi(.011,.0035,8,18),e.steel,0,.083,.06);t(i,new Ee(.006,.024,.018),e.steel,0,.083,-.66),t(i,new Nt(.0035,8,8),e.red,0,.096,-.66);let c=t(i,new Be(.019,.019,.5,20),e.steel,0,-.012,-.42);c.rotation.x=Math.PI/2;let h=t(i,new Be(.022,.022,.03,20),e.steelLight,0,-.012,-.675);h.rotation.x=Math.PI/2,t(i,new xt(.05,.085,.03,2,.008),e.steel,0,.013,-.63);let u=new qe;u.position.set(0,-.01,-.38),i.add(u),t(u,new xt(.08,.072,.25,4,.02),e.wood,0,0,0);for(let x=0;x<8;x++)t(u,new Ee(.082,.074,.007),e.dark,0,0,-.1+x*.028).scale.set(1,.92,1);this.supportHand(u,0,-.004,.01,.042);let d=t(i,new xi(.024,.005,8,20,Math.PI),e.steel,0,-.034,.016);d.rotation.set(Math.PI,Math.PI/2,0),d.scale.set(1,1.15,1);let f=t(i,new Ee(.008,.022,.006),e.steel,0,-.042,.016);f.rotation.x=.25;let m=t(i,new xt(.04,.125,.062,3,.012),e.grip,0,-.085,.072);m.rotation.x=.28;let b=t(i,new xt(.052,.1,.34,3,.016),n,0,-.025,.3);b.rotation.x=-.12,t(i,new xt(.056,.11,.03,2,.01),e.knuckle,0,-.045,.47),this.rightHand(i);let g=this.makeFlash(i,0,.038,-.76,.14),p=new ht;return p.position.set(.036,.022,-.05),i.add(p),{group:i,pump:u,pumpZ:-.38,pumpTravel:.1,flash:g,eject:p,rigBase:new R(.17,-.15,-.56),rot:new Jt(0,.12,-.04)}}buildLauncher(){let e=this.m,t=(...M)=>this._add(...M),i=new qe,n=.105,s=t(i,new Be(.058,.058,.92,28,1,!0),e.olive,0,n,-.16);s.rotation.x=Math.PI/2;let r=t(i,new Be(.052,.052,.9,20,1,!0),e.oliveDark,0,n,-.16);r.rotation.x=Math.PI/2,r.material=e.oliveDark.clone(),r.material.side=Ot;let o=t(i,new Be(.067,.067,.06,28,1,!0),e.oliveDark,0,n,-.6);o.rotation.x=Math.PI/2;let l=t(i,new xn(.052,.067,28),e.oliveDark,0,n,-.63);l.rotation.y=Math.PI;let c=t(i,new Be(.058,.08,.1,28,1,!0),e.oliveDark,0,n,.33);c.rotation.x=Math.PI/2;let h=t(i,new wi(.05,20),e.black,0,n,.1),u=t(i,new Be(.0595,.0595,.025,28,1,!0),e.orange,0,n,-.46);u.rotation.x=Math.PI/2;for(let M of[-.3,.05]){let A=t(i,new xi(.059,.005,8,28),e.oliveDark,0,n,M)}let d=new qe;d.position.set(0,n,-.6),i.add(d);let f=t(d,new bn(.044,.12,20),e.warhead,0,0,-.03);f.rotation.x=-Math.PI/2;let m=t(d,new Be(.044,.044,.06,20),e.warhead,0,0,.05);m.rotation.x=Math.PI/2;let b=t(d,new Nt(.008,8,8),e.red,0,0,-.09);t(i,new xt(.03,.045,.1,2,.005),e.oliveDark,-.07,n+.03,-.08),t(i,new Ee(.02,.02,.005),e.dark,-.07,n+.035,-.032),t(i,new Nt(.0025,8,8),e.red,-.07,n+.036,-.029),t(i,new Ee(.03,.012,.03),e.oliveDark,-.05,n+.01,-.08),t(i,new xt(.034,.07,.14,2,.008),e.oliveDark,0,.03,.04);let g=t(i,new xi(.019,.0035,8,20,Math.PI),e.steel,0,-.03,.012);g.rotation.set(Math.PI,Math.PI/2,0),g.scale.set(1,1.15,1);let p=t(i,new Ee(.006,.018,.005),e.steel,0,-.036,.012);p.rotation.x=.25;let x=t(i,new xt(.034,.115,.054,3,.01),e.grip,0,-.082,.07);x.rotation.x=.28,t(i,new xt(.03,.03,.06,2,.006),e.oliveDark,0,.045,-.3);let E=t(i,new xt(.03,.1,.035,2,.008),e.grip,0,-.01,-.3);E.rotation.x=.1;let v=new qe;i.add(v),this.rightHand(v),v.scale.x=-1,v.position.set(0,.072,-.37),this.rightHand(i);let y=this.makeFlash(i,0,n,-.66,.18);return{group:i,warhead:d,flash:y,rigBase:new R(.2,-.2,-.52),rot:new Jt(0,.06,-.02)}}buildSniper(){let e=this.m,t=(...v)=>this._add(...v),i=new qe,n=t(i,new xt(.042,.075,.42,3,.012),e.wood,0,-.012,.12);t(i,new xt(.045,.11,.16,3,.02),e.wood,0,-.035,.36),t(i,new xt(.05,.12,.02,2,.008),e.dark,0,-.035,.445);let s=t(i,new xt(.034,.1,.05,3,.012),e.wood,0,-.075,.075);s.rotation.x=.35,t(i,new xt(.04,.05,.36,3,.01),e.wood,0,-.004,-.2);let r=t(i,new Be(.019,.019,.2,18),e.steel,0,.03,-.01);r.rotation.x=Math.PI/2;let o=t(i,new Be(.011,.014,.62,16),e.steel,0,.032,-.42);o.rotation.x=Math.PI/2;let l=t(i,new Be(.017,.017,.06,14),e.steelLight,0,.032,-.75);l.rotation.x=Math.PI/2;for(let v of[-.74,-.76])t(i,new Ee(.036,.006,.012),e.black,0,.032,v);t(i,new xi(.018,.0035,8,20,Math.PI),e.steel,0,-.03,.03).rotation.set(Math.PI,Math.PI/2,0);let h=new qe;h.position.set(.02,.035,.05),i.add(h);let u=t(h,new Be(.004,.004,.05,8),e.steelLight,.022,0,0);u.rotation.z=Math.PI/2,t(h,new Nt(.01,12,10),e.steelLight,.048,0,0);let d=.085,f=t(i,new Be(.016,.016,.24,20),e.dark,0,d,-.03);f.rotation.x=Math.PI/2;let m=t(i,new Be(.026,.017,.07,20),e.dark,0,d+.004,-.18);m.rotation.x=Math.PI/2;let b=t(i,new Be(.021,.016,.05,20),e.dark,0,d,.11);b.rotation.x=Math.PI/2;let g=t(i,new wi(.023,20),new ue({color:662058,metalness:1,roughness:.05,emissive:666176,emissiveIntensity:.6}),0,d+.004,-.216);g.rotation.y=Math.PI,t(i,new Be(.009,.009,.03,12),e.dark,0,d+.022,-.03),t(i,new Be(.009,.009,.03,12),e.dark,.022,d,-.03).rotation.z=Math.PI/2;for(let v of[-.09,.04])t(i,new Ee(.02,.04,.018),e.steel,0,.058,v);let p=t(i,new Be(.0165,.0165,.012,20,1,!0),e.orange,0,d,.07);p.rotation.x=Math.PI/2,this.rightHand(i),this.supportHand(i,0,-.02,-.26,.026);let x=this.makeFlash(i,0,.032,-.8,.16),E=new ht;return E.position.set(.025,.035,0),i.add(E),{group:i,bolt:h,boltZ:.05,flash:x,eject:E,rigBase:new R(.15,-.14,-.42),rot:new Jt(0,.08,-.03)}}buildNadeHand(){let e=this.m,t=(...h)=>this._add(...h),i=new qe;this.camera.add(i);let n=new qe;i.add(n),t(n,new Nt(.032,18,14),e.nade,0,0,0).scale.set(1,1.18,1);for(let h=0;h<3;h++){let u=t(n,new xi(.0325,.0025,6,20),e.oliveDark,0,-.018+h*.018,0);u.rotation.x=Math.PI/2}t(n,new Be(.012,.014,.018,12),e.steelLight,0,.044,0);let r=t(n,new Ee(.008,.055,.004),e.steelLight,.022,.03,0);r.rotation.z=-.25;let o=t(n,new xi(.011,.0018,6,16),e.steelLight,-.016,.052,0);o.rotation.y=Math.PI/2;let l=t(i,new xt(.06,.05,.075,3,.02),e.glove,.012,-.036,.018);for(let h=0;h<4;h++){let u=t(i,new Ti(.0095,.03,4,10),e.glove,.034,-.01,-.03+h*.02);u.rotation.z=.5}t(i,new Be(.038,.05,.4,16),e.sleeve,.02,-.17,.12).rotation.set(.6,0,-.3),i.visible=!1,i.traverse(h=>{h.isMesh&&(h.castShadow=!1)}),this.nade={group:i,ball:n,t:-1,released:!1}}hasAmmo(e){let t=this.state[e];return!!this.owned[e]&&(t.ammo>0||t.reserve>0)}select(e){return!vt[e]||!this.owned[e]||e===this.current&&!this.pending||!this.hasAmmo(e)||this.nade.t>=0?!1:(this.pending=e,this.switchT<=0&&(this.switchT=.45),this.reloadT=0,this.sgReload=null,!0)}cycle(e){let t=Pi.indexOf(this.pending||this.current);for(let i=0;i<Pi.length;i++)if(t=(t+e+Pi.length)%Pi.length,this.hasAmmo(Pi[t]))return this.select(Pi[t]);return!1}selectLast(){return this.select(this.last)}fire(){let e=this.current,t=vt[e],i=this.st;if(this.busy||(e==="shotgun"&&this.sgReload&&i.ammo>0&&(this.sgReload=null),this.cooldown>0||this.reloadT>0||this.pumpT>0||e==="sniper"&&this.boltT>0||this.sgReload))return"wait";if(i.ammo<=0)return this.cooldown=.25,"empty";i.ammo--,this.cooldown=t.cooldown;let n=this.models[e];this.flashT=e==="rocket"?.08:.055,n.flash.visible=!0,n.flash.rotation.z=Math.random()*Math.PI;let s=.85+Math.random()*.4;n.flash.scale.set(s,s,s);let r=this.recoil;return r.vz+=t.kick[0],r.vrx+=t.kick[1],r.vry+=(Math.random()-.5)*6,e==="pistol"&&(this.slideT=.085,this.eject("pistol")),e==="shotgun"&&(i.ammo>0||i.reserve>0||!0)&&(this.pumpT=t.pump+.18),e==="rocket"&&(n.warhead.visible=!1),e==="sniper"&&i.ammo>0&&(this.boltT=t.bolt),"shot"}startReload(){let e=this.current,t=vt[e],i=this.st;return this.busy||this.reloading||this.pumpT>0||e==="sniper"&&this.boltT>0||i.ammo>=t.mag||i.reserve<=0?!1:e==="shotgun"?(this.sgReload={t:0,phase:"in"},"shotgun"):(this.reloadT=t.reload,e)}throwGrenade(){return this.grenades<=0||this.nade.t>=0||this.switchT>0?!1:(this.grenades--,this.nade.t=0,this.nade.released=!1,this.nade.group.visible=!0,this.nade.ball.visible=!0,this.reloadT=0,this.sgReload=null,!0)}eject(e){let t=this.models[e],i=this.shells.filter(r=>r.shot===(e==="shotgun"));e==="sniper"?i.forEach(r=>r.m.scale.set(1.5,2.6,1.5)):e==="pistol"&&i.forEach(r=>r.m.scale.set(1,1,1));let n=i.find(r=>r.life<=0)||i[0];n.m.visible=!0;let s=new R;t.eject.getWorldPosition(s),this.camera.worldToLocal(s),n.m.position.copy(s),n.v.set(.9+Math.random()*.4,.9+Math.random()*.5,.15+Math.random()*.2),n.w.set(Math.random()*30,Math.random()*30,20),n.life=.6}update(e,{moving:t=0,sprint:i=!1,bobPhase:n=0,lookDX:s=0,lookDY:r=0,light:o=1,time:l=0},c){let h=this.current,u=vt[h],d=this.st,f=this.models[h];this.cooldown=Math.max(0,this.cooldown-e);let m=e*(this.reloadSpeed||1),b=Math.min(2.4,.6+o*.8);if(this.hemi.intensity=.5*b,this.key.intensity=1.1*b,this.scene.environmentIntensity=.25+.15*b,this.flashT>0&&(this.flashT-=e,this.flashLight.intensity=h==="pistol"?3:6,this.flashLight.position.set(this.rig.position.x,this.rig.position.y+.05,this.rig.position.z-.2),this.flashT<=0)){for(let B of Pi)this.models[B].flash.visible=!1;this.flashLight.intensity=0}let g=0,p=0,x=0;if(h==="pistol"&&(this.slideT>0?(this.slideT-=e,f.slide.position.z=Math.sin(this.slideT/.085*Math.PI)*.03):d.ammo===0&&this.reloadT<=0?f.slide.position.z=.028:this.reloadT<=0&&(f.slide.position.z=0)),h==="shotgun"){if(this.pumpT>0){let B=this.pumpT;this.pumpT-=m;let V=u.pump,Z=1-Math.max(0,this.pumpT)/V;if(this.pumpT<V){let F=Math.min(1,Math.max(0,Z));f.pump.position.z=f.pumpZ+Math.sin(F*Math.PI)*f.pumpTravel,x=Math.sin(F*Math.PI)*.25,B>=V*.62&&this.pumpT<V*.62&&(this.eject("shotgun"),c.push("pumpBack")),B>=V*.2&&this.pumpT<V*.2&&c.push("pumpFwd")}this.pumpT<=0&&(this.pumpT=0,f.pump.position.z=f.pumpZ)}if(this.sgReload){let B=this.sgReload;B.t+=m,p=Math.min(1,B.t/.2)*.6,B.phase==="in"&&B.t>.25&&(B.phase="load",B.t=.25,B.next=.25+u.shellTime),B.phase==="load"&&(p=.6+Math.sin((B.t-.25)/u.shellTime*Math.PI*2)*.05,B.t>=B.next&&(d.ammo<u.mag&&d.reserve>0&&(d.ammo++,d.reserve--,c.push("shellIn")),B.next+=u.shellTime,(d.ammo>=u.mag||d.reserve<=0)&&(B.phase="out",B.out=0))),B.phase==="out"&&(B.out+=m,p=.6*(1-B.out/.25),B.out>=.25&&(this.sgReload=null))}}if(h==="sniper"&&this.boltT>0){let B=this.boltT,V=u.bolt;this.boltT-=m;let Z=1-Math.max(0,this.boltT)/V,F=Z<.25?Z/.25:Z<.75?1:1-(Z-.75)/.25,G=Z<.25?0:Z<.5?(Z-.25)/.25:Z<.75?1-(Z-.5)/.25:0;f.bolt.rotation.z=F*1.2,f.bolt.position.z=f.boltZ+G*.075,x=F*.12,B/V>.55&&this.boltT/V<=.55&&(this.eject("sniper"),c.push("boltBack")),B/V>.2&&this.boltT/V<=.2&&c.push("boltFwd"),this.boltT<=0&&(this.boltT=0,f.bolt.rotation.z=0,f.bolt.position.z=f.boltZ)}if(this.reloadT>0){this.reloadT-=m;let B=1-this.reloadT/u.reload;if(g=B<.2?B/.2:B>.85?(1-B)/.15:1,p=g,h==="pistol"){if(B>.18&&B<.62){let V=(B-.18)/.44;f.mag.position.y=-Math.min(1,V*2.5)*.25,f.mag.visible=V<.4||V>.75,V>.75&&(f.mag.position.y=-(1-(V-.75)/.25)*.08)}else f.mag.position.y=0,f.mag.visible=!0;B>.72&&B<.86&&(f.slide.position.z=Math.sin((B-.72)/.14*Math.PI)*.032)}if(h==="rocket"&&(f.warhead.visible=B>.45,B>.45&&(f.warhead.position.z=-.6-Math.max(0,.7-B)*.6)),this.reloadT<=0){this.reloadT=0;let V=Math.min(u.mag-d.ammo,d.reserve);d.ammo+=V,d.reserve!==1/0&&(d.reserve-=V),f.mag&&(f.mag.position.y=0,f.mag.visible=!0),f.warhead&&(f.warhead.visible=!0,f.warhead.position.z=-.6)}}h==="rocket"&&this.reloadT<=0&&(f.warhead.visible=d.ammo>0);let E=0;if(this.switchT>0){let B=this.switchT;this.switchT-=e,B>.22&&this.switchT<=.22&&this.pending&&(this.models[this.current].group.visible=!1,this.last=this.current,this.current=this.pending,this.pending=null,this.models[this.current].group.visible=!0,this.applyPose(this.current),this.pumpT=0,c.push("switched")),E=this.switchT>.22?1-(this.switchT-.22)/.23:Math.max(0,this.switchT)/.22,this.switchT<=0&&(this.switchT=0)}let v=0,y=this.nade;if(y.t>=0){y.t+=e;let B=y.t;v=B<.15?B/.15:B>.55?Math.max(0,1-(B-.55)/.2):1;let V=-.17,Z=-.3,F=-.3,G=0;if(B<.22){let ee=B/.22;Z=-.3+ee*.2,F=-.3+ee*.12,G=-ee*.6}else if(B<.36){let ee=(B-.22)/.14;Z=-.1+ee*.07,F=-.18-ee*.32,V=-.17+ee*.07,G=-.6+ee*1.4}else{let ee=Math.min(1,(B-.36)/.3);Z=-.03-ee*.35,F=-.5+ee*.1,V=-.1,G=.8}y.group.position.set(V,Z,F),y.group.rotation.set(G,.3,.2),!y.released&&B>=.31&&(y.released=!0,y.ball.visible=!1,c.push("nadeRelease")),B>.7&&(y.t=-1,y.group.visible=!1)}this.raise=Math.max(0,this.raise-e*2.2);let M=this.recoil,A=220,_=22;M.vz+=(-A*M.z-_*M.vz)*e,M.z+=M.vz*e,M.vrx+=(-A*M.rx-_*M.vrx)*e,M.rx+=M.vrx*e,M.vry+=(-A*M.ry-_*M.vry)*e,M.ry+=M.vry*e,this.kick.position.z=M.z*.03,this.kick.position.y=M.rx*9e-4,this.kick.rotation.x=M.rx*.012,this.kick.rotation.y=M.ry*.01,this.kick.rotation.z=x;let T=t*(i?1.6:1),C=Math.sin(n)*.009*T,I=-Math.abs(Math.cos(n))*.008*T,L=Math.sin(l*1.6)*.0018;this.swayX+=(-s*35e-5-this.swayX)*Math.min(1,e*8),this.swayY+=(r*35e-5-this.swayY)*Math.min(1,e*8),this.swayX=Math.max(-.03,Math.min(.03,this.swayX)),this.swayY=Math.max(-.03,Math.min(.03,this.swayY));let D=i&&t>.3?1:0;this._sd=(this._sd||0)+(D-(this._sd||0))*Math.min(1,e*7);let H=this.raise*this.raise,N=Math.max(E,v*.7),j=this.rigBase;this.rig.position.set(j.x+C+this.swayX+this._sd*.02,j.y+I+L+this.swayY-g*.06-H*.35-this._sd*.035-N*.3,j.z+g*.04);let Y=h==="rocket"?-p*.45:p*.55;h==="rocket"&&(this.rig.position.y-=g*.08),this.rig.rotation.set(Y+this._sd*-.25+H*.8+N*.5,this.swayX*2+this._sd*.5,p*.6+C*2+this._sd*.35);for(let B of this.shells)B.life<=0||(B.life-=e,B.v.y-=6*e,B.m.position.addScaledVector(B.v,e),B.m.rotation.x+=B.w.x*e,B.m.rotation.y+=B.w.y*e,B.m.rotation.z+=B.w.z*e,B.life<=0&&(B.m.visible=!1))}setAspect(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}};var al=class{constructor(e){this.game=e;let t=e.scene;this.ray=new di,this._v=new R,this._n=new R,this._c=new le;let i=new ue({color:5922634,metalness:.6,roughness:.35}),n=new ut({color:16760944,transparent:!0,blending:Zt,depthWrite:!1});this.rockets=[];for(let o=0;o<4;o++){let l=new qe,c=new ve(new Be(.045,.045,.32,14),i);c.rotation.x=Math.PI/2,l.add(c);let h=new ve(new bn(.045,.14,14),i);h.rotation.x=-Math.PI/2,h.position.z=-.23,l.add(h);for(let d=0;d<4;d++){let f=new ve(new Ee(.004,.07,.08),i);f.position.set(Math.cos(d*Math.PI/2)*.05,Math.sin(d*Math.PI/2)*.05,.13),f.rotation.z=d*Math.PI/2,l.add(f)}let u=new ve(new Nt(.09,10,8),n);u.position.z=.2,u.scale.set(1,1,2.2),l.add(u),l.visible=!1,l.traverse(d=>{d.isMesh&&(d.castShadow=!1)}),t.add(l),this.rockets.push({g:l,ex:u,active:!1,vel:new R,life:0})}this.rocketLight=new ri(16751168,0,9,1.6),t.add(this.rocketLight);let s=new ue({color:3819048,metalness:.3,roughness:.5}),r=new ut({color:16723984});this.nades=[];for(let o=0;o<4;o++){let l=new qe,c=new ve(new Nt(.06,14,10),s);c.scale.set(1,1.2,1),c.castShadow=!0,l.add(c);let h=new ve(new Be(.02,.025,.035,10),s);h.position.y=.08,l.add(h);let u=new ve(new Nt(.012,8,6),r);u.position.y=.1,l.add(u),l.visible=!1,t.add(l),this.nades.push({g:l,led:u,active:!1,vel:new R,spin:new R,fuse:0,bounces:0,rest:!1})}this.timers=[]}reset(){for(let e of this.rockets)e.active=!1,e.g.visible=!1;for(let e of this.nades)e.active=!1,e.g.visible=!1;this.rocketLight.intensity=0,this.timers.length=0}later(e,t){this.timers.push({t:e,fn:t})}fireRocket(e,t){let i=this.rockets.find(n=>!n.active)||this.rockets[0];return i.active=!0,i.life=4,i.g.visible=!0,i.g.position.copy(e),i.vel.copy(t).multiplyScalar(30),i.g.lookAt(this._v.copy(e).sub(t)),i.smokeT=0,i}throwGrenade(e,t){let i=this.nades.find(n=>!n.active)||this.nades[0];return i.active=!0,i.fuse=2.1,i.rest=!1,i.bounces=0,i.g.visible=!0,i.g.position.copy(e),i.vel.copy(t),i.spin.set(Math.random()*12,Math.random()*12,Math.random()*12),i}update(e){let t=this.game,i=t.fx,n=t.level;for(let r=this.timers.length-1;r>=0;r--){let o=this.timers[r];o.t-=e,o.t<=0&&(this.timers.splice(r,1),o.fn())}let s=null;for(let r of this.rockets){if(!r.active)continue;r.life-=e;let o=r.g.position,l=r.vel.length()*e,c=this._v.copy(r.vel).normalize();this.ray.set(o,c),this.ray.far=l+.15;let h=this.ray.intersectObjects(n.colliders,!1)[0],u=t.zombies.raycast(o,c,l+.3);if(u&&(!h||u.t<h.distance)){this.detonateRocket(r,u.point,c.clone().negate());continue}if(h){let f=h.face?h.face.normal.clone().transformDirection(h.object.matrixWorld):c.clone().negate();h.object.userData.barrel&&t.damageBarrel(h.object.userData.barrel,999),this.detonateRocket(r,h.point.clone().addScaledVector(f,.2),f);continue}if(r.life<=0){this.detonateRocket(r,o.clone(),null);continue}o.addScaledVector(r.vel,e),r.ex.scale.set(1+Math.random()*.4,1+Math.random()*.4,2+Math.random()),r.smokeT-=e;let d=this._n.copy(o).addScaledVector(c,-.3);if(r.smokeT<=0){r.smokeT=.012;let f=.25+Math.random()*.15;this._c.setRGB(f,f,f*.95),i.smoke.emit(d,new R((Math.random()-.5)*.4,(Math.random()-.3)*.3,(Math.random()-.5)*.4),.18+Math.random()*.12,1.1+Math.random()*.8,this._c,.9),this._c.setRGB(2.6,1.2,.35),i.fire.emit(d,new R((Math.random()-.5)*.6,(Math.random()-.5)*.6,(Math.random()-.5)*.6).addScaledVector(c,-3),.14,.12,this._c,.6)}s=o}s?(this.rocketLight.position.copy(s),this.rocketLight.intensity=14+Math.random()*4):this.rocketLight.intensity=0;for(let r of this.nades){if(!r.active)continue;r.fuse-=e;let o=r.g.position;if(r.led.visible=Math.sin(r.fuse*(r.fuse<.8?40:14))>0,r.fuse<=0){r.active=!1,r.g.visible=!1,t.explode(o.clone().setY(Math.max(o.y,.25)),{radius:5.2,damage:220,source:"grenade"});continue}if(r.rest)continue;r.vel.y-=16*e;let l=r.vel.length()*e;if(l>1e-5){let c=this._v.copy(r.vel).normalize();this.ray.set(o,c),this.ray.far=l+.07;let h=this.ray.intersectObjects(n.colliders,!1)[0];if(h&&h.face){let u=h.face.normal.clone().transformDirection(h.object.matrixWorld);o.copy(h.point).addScaledVector(u,.07);let d=r.vel.dot(u);r.vel.addScaledVector(u,-1.45*d).multiplyScalar(.62),r.spin.multiplyScalar(.6),Math.abs(d)>1.2&&t.audio.grenadeBounce(o,Math.abs(d)/8),u.y>.6&&r.vel.length()<.8&&(r.rest=!0,r.vel.set(0,0,0))}else o.addScaledVector(r.vel,e)}for(let c of t.zombies.alive){let h=o.x-c.root.position.x,u=o.z-c.root.position.z;h*h+u*u<.25&&o.y<1.8&&(r.vel.x*=-.3,r.vel.z*=-.3)}o.y<.07&&(o.y=.07,Math.abs(r.vel.y)>1.2&&t.audio.grenadeBounce(o,Math.abs(r.vel.y)/8),r.vel.y*=-.38,r.vel.x*=.7,r.vel.z*=.7,r.vel.length()<.6&&(r.rest=!0)),r.g.rotation.x+=r.spin.x*e,r.g.rotation.y+=r.spin.y*e,r.g.rotation.z+=r.spin.z*e}}detonateRocket(e,t,i){e.active=!1,e.g.visible=!1,this.game.explode(t,{radius:5.8,damage:270,source:"rocket",normal:i})}};var ol=class{constructor(){this.ctx=null,this.enabled=!0,this.ready=!1}init(){if(this.ctx)return;let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=this.enabled?.9:0;let i=t.createDynamicsCompressor();i.threshold.value=-14,i.knee.value=10,i.ratio.value=4,i.attack.value=.003,i.release.value=.2,this.master.connect(i).connect(t.destination),this.reverb=t.createConvolver(),this.reverb.buffer=this._impulse(2.6,2.4),this.reverbSend=t.createGain(),this.reverbSend.gain.value=.55,this.duck=t.createGain(),this.duck.connect(this.master),this.reverbSend.connect(this.reverb).connect(this.duck),this.dry=t.createGain(),this.dry.connect(this.duck),this.noiseBuf=this._noise(2),this.brownBuf=this._brown(4),this.ready=!0}resume(){this.ctx||this.init(),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setEnabled(e){this.enabled=e,this.master&&this.master.gain.setTargetAtTime(e?.9:0,this.ctx.currentTime,.05)}get t(){return this.ctx.currentTime}_noise(e){let t=this.ctx,i=Math.floor(t.sampleRate*e),n=t.createBuffer(1,i,t.sampleRate),s=n.getChannelData(0);for(let r=0;r<i;r++)s[r]=Math.random()*2-1;return n}_brown(e){let t=this.ctx,i=Math.floor(t.sampleRate*e),n=t.createBuffer(1,i,t.sampleRate),s=n.getChannelData(0),r=0;for(let o=0;o<i;o++)r=(r+.02*(Math.random()*2-1))/1.02,s[o]=r*3.5;return n}_impulse(e,t){let i=this.ctx,n=Math.floor(i.sampleRate*e),s=i.createBuffer(2,n,i.sampleRate);for(let r=0;r<2;r++){let o=s.getChannelData(r);for(let l=0;l<n;l++){let c=l/n,h=l<i.sampleRate*.08&&Math.random()<.004?(Math.random()*2-1)*.8:0;o[l]=((Math.random()*2-1)*Math.pow(1-c,t)+h)*(c<.002?c/.002:1)}}return s}_out(e,t=.3,i=1){let n=this.ctx,s=n.createGain();s.gain.value=i;let r=s;if(e){let o=n.createPanner();o.panningModel="HRTF",o.distanceModel="inverse",o.refDistance=2.5,o.maxDistance=60,o.rolloffFactor=1.3,o.positionX.value=e.x,o.positionY.value=e.y,o.positionZ.value=e.z,s.connect(o),r=o}if(r.connect(this.dry),t>0){let o=n.createGain();o.gain.value=t,r.connect(o).connect(this.reverbSend)}return s}setListener(e,t,i){if(!this.ready)return;let n=this.ctx.listener,s=this.t;n.positionX?(n.positionX.setValueAtTime(e.x,s),n.positionY.setValueAtTime(e.y,s),n.positionZ.setValueAtTime(e.z,s),n.forwardX.setValueAtTime(t.x,s),n.forwardY.setValueAtTime(t.y,s),n.forwardZ.setValueAtTime(t.z,s),n.upX.setValueAtTime(i.x,s),n.upY.setValueAtTime(i.y,s),n.upZ.setValueAtTime(i.z,s)):(n.setPosition(e.x,e.y,e.z),n.setOrientation(t.x,t.y,t.z,i.x,i.y,i.z))}_noiseSrc(e){let t=this.ctx.createBufferSource();return t.buffer=e||this.noiseBuf,t.loopStart=0,t.loop=!0,t}_env(e,t,i,n,s,r=1e-4){e.cancelScheduledValues(t),e.setValueAtTime(1e-4,t),e.exponentialRampToValueAtTime(n,t+i),e.exponentialRampToValueAtTime(r,t+i+s)}pistol(){if(!this.ready)return;let e=this.ctx,t=this.t,i=this._out(null,.5,1),n=this._noiseSrc();n.loopStart=Math.random();let s=e.createBiquadFilter();s.type="highpass",s.frequency.value=900;let r=e.createGain();this._env(r.gain,t,.001,1.1,.09),n.connect(s).connect(r).connect(i),n.start(t,Math.random()),n.stop(t+.15);let o=e.createOscillator();o.type="sine",o.frequency.setValueAtTime(190,t),o.frequency.exponentialRampToValueAtTime(42,t+.16);let l=e.createGain();this._env(l.gain,t,.002,1.3,.18),o.connect(l).connect(i),o.start(t),o.stop(t+.22);let c=this._noiseSrc(),h=e.createBiquadFilter();h.type="bandpass",h.frequency.value=2400,h.Q.value=.8;let u=e.createGain();this._env(u.gain,t,5e-4,.9,.035),c.connect(h).connect(u).connect(i),c.start(t,Math.random()),c.stop(t+.06),this._click(t+.045,3200,.18)}_click(e,t=2500,i=.3,n=null){let s=this.ctx,r=this._out(n,.08,1),o=this._noiseSrc(),l=s.createBiquadFilter();l.type="bandpass",l.frequency.value=t,l.Q.value=6;let c=s.createGain();this._env(c.gain,e,5e-4,i,.03),o.connect(l).connect(c).connect(r),o.start(e,Math.random()),o.stop(e+.05)}dryFire(){this.ready&&this._click(this.t,1800,.35)}reload(e=1.2){if(!this.ready)return;let t=this.t;this._click(t+.12,1500,.35),this._click(t+.16,900,.2),this._click(t+e*.62,1300,.45),this._click(t+e*.66,2600,.25),this._click(t+e*.86,3400,.4),this._click(t+e*.89,2200,.3)}shell(e){if(!this.ready)return;let t=this.t+.35+Math.random()*.1;for(let i=0;i<3;i++)this._ting(t+i*(.07-i*.015),5200+Math.random()*900,.08/(i+1),e)}_ting(e,t,i,n){let s=this.ctx,r=this._out(n,.15,1),o=s.createOscillator();o.type="sine",o.frequency.value=t;let l=s.createOscillator();l.type="sine",l.frequency.value=t*1.51;let c=s.createGain();this._env(c.gain,e,.001,i,.12),o.connect(c),l.connect(c),c.connect(r),o.start(e),l.start(e),o.stop(e+.15),l.stop(e+.15)}impactWall(e){if(!this.ready)return;let t=this.ctx,i=this.t,n=this._out(e,.25,1),s=this._noiseSrc(),r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=1800+Math.random()*1500,r.Q.value=1.5;let o=t.createGain();this._env(o.gain,i,.001,.5,.06),s.connect(r).connect(o).connect(n),s.start(i,Math.random()),s.stop(i+.09),Math.random()<.35&&this._ricochet(e)}_ricochet(e){let t=this.ctx,i=this.t+.01,n=this._out(e,.3,1),s=t.createOscillator();s.type="sine",s.frequency.setValueAtTime(3400+Math.random()*800,i),s.frequency.exponentialRampToValueAtTime(1300,i+.28);let r=t.createGain();this._env(r.gain,i,.005,.07,.3),s.connect(r).connect(n),s.start(i),s.stop(i+.34)}fleshHit(e,t=!1){if(!this.ready)return;let i=this.ctx,n=this.t,s=this._out(e,.15,1),r=this._noiseSrc(),o=i.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(2400,n),o.frequency.exponentialRampToValueAtTime(300,n+.12);let l=i.createGain();this._env(l.gain,n,.002,t?1.1:.75,t?.22:.13),r.connect(o).connect(l).connect(s),r.start(n,Math.random()),r.stop(n+.3);let c=i.createOscillator();c.type="sine",c.frequency.setValueAtTime(120,n),c.frequency.exponentialRampToValueAtTime(45,n+.12);let h=i.createGain();this._env(h.gain,n,.002,t?.9:.5,.14),c.connect(h).connect(s),c.start(n),c.stop(n+.18);let u=this._noiseSrc(),d=i.createBiquadFilter();d.type="bandpass",d.frequency.value=3500,d.Q.value=.7;let f=i.createGain();this._env(f.gain,n+.02,.01,t?.35:.18,t?.35:.18),u.connect(d).connect(f).connect(s),u.start(n,Math.random()),u.stop(n+.45)}glitchHit(e,t=!1){if(!this.ready)return;let i=this.ctx,n=this.t,s=this._out(e,.15,1),r=i.createOscillator();r.type="square";let o=t?6:4;for(let f=0;f<o;f++)r.frequency.setValueAtTime(300+Math.random()*1400,n+f*.018);let l=i.createGain();this._env(l.gain,n,.002,t?.32:.22,o*.02);let c=i.createBiquadFilter();c.type="lowpass",c.frequency.value=3200,r.connect(c).connect(l).connect(s),r.start(n),r.stop(n+o*.02+.05);let h=this._noiseSrc(),u=i.createBiquadFilter();u.type="bandpass",u.frequency.value=900,u.Q.value=1.2;let d=i.createGain();this._env(d.gain,n,.002,t?.9:.6,.08),h.connect(u).connect(d).connect(s),h.start(n,Math.random()),h.stop(n+.12)}derez(e,t=!1){if(!this.ready)return;let i=this.ctx,n=this.t,s=this._out(e,.35,1),r=i.createOscillator();r.type="square";let o=t?520:880;[1,.75,.6,.5,.375,.3,.25].forEach((m,b)=>r.frequency.setValueAtTime(o*m*(1+(Math.random()-.5)*.04),n+b*.035));let c=i.createGain();this._env(c.gain,n,.003,t?.3:.22,.28);let h=i.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(5e3,n),h.frequency.exponentialRampToValueAtTime(600,n+.3),r.connect(h).connect(c).connect(s),r.start(n),r.stop(n+.32);let u=this._noiseSrc(),d=i.createBiquadFilter();d.type="highpass",d.frequency.setValueAtTime(6e3,n),d.frequency.exponentialRampToValueAtTime(800,n+.35);let f=i.createGain();this._env(f.gain,n,.01,t?.5:.35,.35),u.connect(d).connect(f).connect(s),u.start(n,Math.random()),u.stop(n+.4)}fuse(e){if(!this.ready)return;let t=this.ctx,i=this.t,n=this._out(e,.2,1);for(let s=0;s<6;s++){let r=i+s*.11-s*s*.004,o=t.createOscillator();o.type="square",o.frequency.value=900+s*180;let l=t.createGain();this._env(l.gain,r,.002,.25,.05),o.connect(l).connect(n),o.start(r),o.stop(r+.07)}}sniper(){if(!this.ready)return;let e=this.ctx,t=this.t,i=this._out(null,.9,1),n=this._noiseSrc(),s=e.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(9e3,t),s.frequency.exponentialRampToValueAtTime(500,t+.35);let r=e.createGain();this._env(r.gain,t,.001,1.4,.4),n.connect(s).connect(r).connect(i),n.start(t,Math.random()),n.stop(t+.5);let o=e.createOscillator();o.type="sine",o.frequency.setValueAtTime(140,t),o.frequency.exponentialRampToValueAtTime(38,t+.3);let l=e.createGain();this._env(l.gain,t,.002,1.2,.35),o.connect(l).connect(i),o.start(t),o.stop(t+.4);let c=this._noiseSrc(),h=e.createBiquadFilter();h.type="lowpass",h.frequency.value=900;let u=e.createGain();this._env(u.gain,t+.28,.02,.22,.9),c.connect(h).connect(u).connect(i),c.start(t+.28,Math.random()),c.stop(t+1.3)}bolt(e=!0){if(!this.ready)return;let t=this.t;this._click(t,e?1500:1900,.4),this._click(t+.05,e?900:2400,.35)}mark(){if(!this.ready)return;let e=this.ctx,t=this.t,i=this._out(null,.1,1);[1320,1760].forEach((n,s)=>{let r=e.createOscillator();r.type="sine",r.frequency.value=n;let o=e.createGain();this._env(o.gain,t+s*.07,.003,.18,.12),r.connect(o).connect(i),r.start(t+s*.07),r.stop(t+s*.07+.16)})}zoom(e=!0){this.ready&&this._click(this.t,e?700:500,.18)}whoosh(){if(!this.ready)return;let e=this.ctx,t=this.t,i=this._out(null,.4,1),n=this._noiseSrc(),s=e.createBiquadFilter();s.type="bandpass",s.Q.value=.8,s.frequency.setValueAtTime(300,t),s.frequency.exponentialRampToValueAtTime(2500,t+.6);let r=e.createGain();this._env(r.gain,t,.3,.6,.6),n.connect(s).connect(r).connect(i),n.start(t,Math.random()),n.stop(t+1)}gate(){if(!this.ready)return;let e=this.ctx,t=this.t,i=this._out(null,.55,1),n=this._noiseSrc(),s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=260;let r=e.createGain();r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(.9,t+.25),r.gain.setValueAtTime(.9,t+2.3),r.gain.linearRampToValueAtTime(0,t+2.8),n.connect(s).connect(r).connect(i),n.start(t,Math.random()),n.stop(t+2.9);for(let h=0;h<22;h++)this._click(t+.1+h*.115+Math.random()*.03,500+Math.random()*400,.12);let o=e.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(48,t),o.frequency.linearRampToValueAtTime(62,t+2.6);let l=e.createGain();l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(.08,t+.3),l.gain.linearRampToValueAtTime(0,t+2.8);let c=e.createBiquadFilter();c.type="lowpass",c.frequency.value=180,o.connect(c).connect(l).connect(i),o.start(t),o.stop(t+2.9)}upgrade(){if(!this.ready)return;let e=this.ctx,t=this.t,i=this._out(null,.3,1);[523,659,784,1047].forEach((n,s)=>{let r=e.createOscillator();r.type="triangle",r.frequency.value=n;let o=e.createGain();this._env(o.gain,t+s*.06,.005,.28,.35),r.connect(o).connect(i),r.start(t+s*.06),r.stop(t+s*.06+.42)})}headshot(e){if(!this.ready)return;this.fleshHit(e,!0);let t=this.ctx,i=this.t,n=this._out(e,.2,1);for(let o=0;o<4;o++)this._click(i+o*.012+Math.random()*.01,600+Math.random()*900,.5,e);let s=t.createOscillator();s.type="triangle",s.frequency.setValueAtTime(90,i),s.frequency.exponentialRampToValueAtTime(30,i+.3);let r=t.createGain();this._env(r.gain,i,.002,.8,.3),s.connect(r).connect(n),s.start(i),s.stop(i+.35)}_voice(e,{f0:t=90,dur:i=1.2,formants:n=[520,1400,2500],vol:s=.5,bend:r=-.3,rough:o=.5,rev:l=.3,at:c=0}={}){let h=this.ctx,u=this.t+c,d=this._out(e,l,1),f=h.createOscillator();f.type="sawtooth",f.frequency.setValueAtTime(t*(1+Math.random()*.1),u),f.frequency.linearRampToValueAtTime(t*(1+r),u+i);let m=h.createOscillator();m.frequency.value=5+Math.random()*18;let b=h.createGain();b.gain.value=t*.12*o,m.connect(b).connect(f.frequency);let g=h.createGain();g.gain.value=1;let p=h.createOscillator();p.frequency.value=22+Math.random()*20;let x=h.createGain();x.gain.value=.35*o,p.connect(x).connect(g.gain);let E=h.createGain();E.gain.setValueAtTime(1e-4,u),E.gain.exponentialRampToValueAtTime(s,u+i*.2),E.gain.setValueAtTime(s,u+i*.6),E.gain.exponentialRampToValueAtTime(1e-4,u+i);let v=h.createGain();v.gain.value=1,n.forEach((T,C)=>{let I=h.createBiquadFilter();I.type="bandpass",I.frequency.setValueAtTime(T,u),I.frequency.linearRampToValueAtTime(T*(.8+Math.random()*.4),u+i),I.Q.value=5+C*2;let L=h.createGain();L.gain.value=[1,.6,.25][C]||.2,f.connect(I).connect(L).connect(v)});let y=this._noiseSrc(),M=h.createBiquadFilter();M.type="bandpass",M.frequency.value=1100,M.Q.value=1;let A=h.createGain();A.gain.value=.25*o,y.connect(M).connect(A).connect(v),v.connect(g).connect(E).connect(d),f.start(u),m.start(u),p.start(u),y.start(u,Math.random());let _=u+i+.05;f.stop(_),m.stop(_),p.stop(_),y.stop(_)}groan(e){this.ready&&this._voice(e,{f0:70+Math.random()*45,dur:.9+Math.random()*1.1,formants:[400+Math.random()*250,1e3+Math.random()*500,2300],vol:.55,bend:-.25+Math.random()*.2,rough:.6+Math.random()*.4})}roar(e){this.ready&&(this._voice(e,{f0:120,dur:1.4,formants:[700,1500,2700],vol:.8,bend:-.45,rough:1,rev:.45}),this._voice(e,{f0:82,dur:1.5,formants:[500,1200,2400],vol:.5,bend:-.4,rough:1,rev:.45}))}attackGrunt(e){this.ready&&this._voice(e,{f0:110+Math.random()*30,dur:.45,formants:[650,1300,2500],vol:.7,bend:-.35,rough:.9})}death(e){this.ready&&this._voice(e,{f0:95,dur:1.3,formants:[480,1100,2400],vol:.65,bend:-.6,rough:.8,rev:.4})}thud(e){if(!this.ready)return;let t=this.ctx,i=this.t,n=this._out(e,.25,1),s=t.createOscillator();s.type="sine",s.frequency.setValueAtTime(85,i),s.frequency.exponentialRampToValueAtTime(35,i+.25);let r=t.createGain();this._env(r.gain,i,.003,.9,.3),s.connect(r).connect(n),s.start(i),s.stop(i+.35);let o=this._noiseSrc(),l=t.createBiquadFilter();l.type="lowpass",l.frequency.value=500;let c=t.createGain();this._env(c.gain,i,.002,.6,.15),o.connect(l).connect(c).connect(n),o.start(i,Math.random()),o.stop(i+.2)}hurt(){if(!this.ready)return;this._voice(null,{f0:135+Math.random()*20,dur:.32,formants:[700,1200,2600],vol:.55,bend:-.25,rough:.35,rev:.1});let e=this.ctx,t=this.t,i=this._out(null,.05,1),n=this._noiseSrc(),s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=700;let r=e.createGain();this._env(r.gain,t,.002,.8,.12),n.connect(s).connect(r).connect(i),n.start(t,Math.random()),n.stop(t+.16)}step(e=.12){if(!this.ready)return;let t=this.ctx,i=this.t,n=this._out(null,.12,1),s=this._noiseSrc(this.brownBuf),r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=380+Math.random()*200;let o=t.createGain();this._env(o.gain,i,.004,e*3,.09),s.connect(r).connect(o).connect(n),s.start(i,Math.random()*3),s.stop(i+.12),this._click(i+.005,4200+Math.random()*1500,e*.25)}pickup(){if(!this.ready)return;let e=this.ctx,t=this.t,i=this._out(null,.2,1);[660,990,1320].forEach((n,s)=>{let r=e.createOscillator();r.type="triangle",r.frequency.value=n;let o=e.createGain();this._env(o.gain,t+s*.06,.005,.25,.18),r.connect(o).connect(i),r.start(t+s*.06),r.stop(t+s*.06+.25)})}hitmarker(){this.ready&&this._click(this.t,5e3,.12)}waveHorn(){if(!this.ready)return;let e=this.ctx,t=this.t,i=this._out(null,.7,1);[55,55.6,82.5].forEach(n=>{let s=e.createOscillator();s.type="sawtooth",s.frequency.value=n;let r=e.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(150,t),r.frequency.linearRampToValueAtTime(900,t+.8),r.frequency.linearRampToValueAtTime(200,t+2.2);let o=e.createGain();o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(.32,t+.3),o.gain.setValueAtTime(.32,t+1.4),o.gain.exponentialRampToValueAtTime(1e-4,t+2.4),s.connect(r).connect(o).connect(i),s.start(t),s.stop(t+2.5)}),this.thud(null)}waveClear(){if(!this.ready)return;let e=this.ctx,t=this.t,i=this._out(null,.5,1);[196,247,294,392].forEach((n,s)=>{let r=e.createOscillator();r.type="square",r.frequency.value=n;let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=1400;let l=e.createGain();this._env(l.gain,t+s*.09,.01,.09,.5),r.connect(o).connect(l).connect(i),r.start(t+s*.09),r.stop(t+s*.09+.6)})}startAmbience(){if(!this.ready||this.amb)return;let e=this.ctx,t=e.createGain();t.gain.value=1e-4,t.gain.setTargetAtTime(.22,this.t,1.5);let i=this._noiseSrc(this.brownBuf),n=e.createBiquadFilter();n.type="lowpass",n.frequency.value=160,i.connect(n).connect(t);let s=e.createOscillator();s.type="sine",s.frequency.value=50;let r=e.createGain();r.gain.value=.18,s.connect(r).connect(t);let o=e.createOscillator();o.type="sine",o.frequency.value=100.4;let l=e.createGain();l.gain.value=.06,o.connect(l).connect(t);let c=this._out(null,.4,1);t.connect(c),i.start(),s.start(),o.start(),this.amb={g:t,n:i,hum:s,hum2:o},this._ambTimer=setInterval(()=>this._distant(),5200)}stopAmbience(){if(!this.amb)return;let{g:e,n:t,hum:i,hum2:n}=this.amb;e.gain.setTargetAtTime(1e-4,this.t,.3);let s=this.t+1.5;t.stop(s),i.stop(s),n.stop(s),clearInterval(this._ambTimer),this.amb=null}_distant(){if(!this.ready||Math.random()<.4)return;let e=this.ctx,t=this.t,i={x:(Math.random()-.5)*80,y:3,z:(Math.random()-.5)*80},n=this._out(i,.9,.5),s=e.createOscillator();s.type="square",s.frequency.value=120+Math.random()*200;let r=e.createOscillator();r.type="square",r.frequency.value=s.frequency.value*2.71;let o=e.createBiquadFilter();o.type="bandpass",o.frequency.value=900,o.Q.value=3;let l=e.createGain();this._env(l.gain,t,.002,.18,.9),s.connect(o),r.connect(o),o.connect(l).connect(n),s.start(t),r.start(t),s.stop(t+1),r.stop(t+1)}shotgun(){if(!this.ready)return;let e=this.ctx,t=this.t,i=this._out(null,.65,1),n=this._noiseSrc(),s=e.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(6e3,t),s.frequency.exponentialRampToValueAtTime(400,t+.3);let r=e.createGain();this._env(r.gain,t,.001,1.5,.32),n.connect(s).connect(r).connect(i),n.start(t,Math.random()),n.stop(t+.4);let o=e.createOscillator();o.type="sine",o.frequency.setValueAtTime(120,t),o.frequency.exponentialRampToValueAtTime(32,t+.3);let l=e.createGain();this._env(l.gain,t,.002,1.8,.32),o.connect(l).connect(i),o.start(t),o.stop(t+.36);let c=this._noiseSrc(),h=e.createBiquadFilter();h.type="bandpass",h.frequency.value=1800,h.Q.value=.6;let u=e.createGain();this._env(u.gain,t,5e-4,1.1,.06),c.connect(h).connect(u).connect(i),c.start(t,Math.random()),c.stop(t+.08)}pump(e=!0){if(!this.ready)return;let t=this.ctx,i=this.t,n=this._out(null,.15,1),s=this._noiseSrc(),r=t.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(e?2200:1500,i),r.frequency.linearRampToValueAtTime(e?1300:2400,i+.09),r.Q.value=2;let o=t.createGain();this._env(o.gain,i,.01,.35,.08),s.connect(r).connect(o).connect(n),s.start(i,Math.random()),s.stop(i+.12),this._click(i+.09,e?1200:900,.6),this._click(i+.1,3e3,.3)}shellIn(){if(!this.ready)return;let e=this.t;this._click(e,1700,.35),this._click(e+.05,900,.3)}rocketFire(){if(!this.ready)return;let e=this.ctx,t=this.t,i=this._out(null,.6,1),n=this._noiseSrc(),s=e.createBiquadFilter();s.type="bandpass",s.frequency.setValueAtTime(400,t),s.frequency.exponentialRampToValueAtTime(2600,t+.5),s.Q.value=.7;let r=e.createGain();r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(1.2,t+.03),r.gain.exponentialRampToValueAtTime(1e-4,t+.9),n.connect(s).connect(r).connect(i),n.start(t,Math.random()),n.stop(t+1);let o=e.createOscillator();o.type="sine",o.frequency.setValueAtTime(90,t),o.frequency.exponentialRampToValueAtTime(40,t+.25);let l=e.createGain();this._env(l.gain,t,.003,1.4,.3),o.connect(l).connect(i),o.start(t),o.stop(t+.35)}rocketLoad(){if(!this.ready)return;let e=this.t;this._click(e+.5,700,.5),this._click(e+.56,1400,.35),this._click(e+1.2,2200,.4)}explosion(e,t=1){if(!this.ready)return;let i=this.ctx,n=this.t,s=this._out(e,.9,1.6*t),r=this._noiseSrc(this.brownBuf),o=i.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(3e3,n),o.frequency.exponentialRampToValueAtTime(180,n+1.2);let l=i.createGain();this._env(l.gain,n,.004,2.2,1.6),r.connect(o).connect(l).connect(s),r.start(n,Math.random()*2),r.stop(n+1.8);let c=this._noiseSrc(),h=i.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(8e3,n),h.frequency.exponentialRampToValueAtTime(600,n+.4);let u=i.createGain();this._env(u.gain,n,.001,1.4,.45),c.connect(h).connect(u).connect(s),c.start(n,Math.random()),c.stop(n+.5);let d=i.createOscillator();d.type="sine",d.frequency.setValueAtTime(70,n),d.frequency.exponentialRampToValueAtTime(22,n+.9);let f=i.createGain();this._env(f.gain,n,.005,2.4,1),d.connect(f).connect(s),d.start(n),d.stop(n+1.1);for(let m=0;m<6;m++)this._click(n+.25+Math.random()*.8,600+Math.random()*2500,.15,e)}grenadeBounce(e,t=1){if(!this.ready)return;let i=this.ctx,n=this.t,s=this._out(e,.2,Math.min(1,t)),r=i.createOscillator();r.type="triangle",r.frequency.value=520+Math.random()*200;let o=i.createGain();this._env(o.gain,n,.001,.35,.09),r.connect(o).connect(s),r.start(n),r.stop(n+.12),this._click(n,1800,.3,e)}pin(){if(!this.ready)return;let e=this.t;this._ting(e,3800,.08,null),this._click(e+.02,2600,.3),this._click(e+.22,1400,.25)}throwWhoosh(){if(!this.ready)return;let e=this.ctx,t=this.t,i=this._out(null,.1,1),n=this._noiseSrc(),s=e.createBiquadFilter();s.type="bandpass",s.frequency.setValueAtTime(500,t),s.frequency.exponentialRampToValueAtTime(1800,t+.15),s.Q.value=1.2;let r=e.createGain();this._env(r.gain,t,.04,.3,.15),n.connect(s).connect(r).connect(i),n.start(t,Math.random()),n.stop(t+.25)}switchWeapon(){if(!this.ready)return;let e=this.t;this._click(e,1100,.3),this._click(e+.07,2400,.25)}jump(){this.ready&&this.step(.1)}land(e=1){if(!this.ready)return;let t=this.ctx,i=this.t,n=this._out(null,.15,1),s=this._noiseSrc(this.brownBuf),r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=300;let o=t.createGain();this._env(o.gain,i,.003,.5*Math.min(1.5,e),.14),s.connect(r).connect(o).connect(n),s.start(i,Math.random()*3),s.stop(i+.2)}ammo(){if(!this.ready)return;let e=this.t;this._click(e,1500,.4),this._click(e+.06,2600,.35),this._click(e+.12,1200,.3)}async loadVoices(e,t){!this.ready||this.voices||(this.voices={},await Promise.all(t.map(async i=>{try{let n=await fetch(`${e}${i}.mp3`);if(!n.ok)return;let s=await n.arrayBuffer();this.voices[i]=await new Promise((r,o)=>this.ctx.decodeAudioData(s,r,o))}catch{}})))}voice(e){if(!this.ready||!this.voices||!this.voices[e])return!1;let t=this.ctx,i=this.t;if(this.voiceSrc)try{this.voiceSrc.stop()}catch{}let n=t.createBufferSource();n.buffer=this.voices[e];let s=t.createBiquadFilter();s.type="lowshelf",s.frequency.value=180,s.gain.value=3;let r=t.createGain();return r.gain.value=1.25,n.connect(s).connect(r).connect(this.master),n.start(i+.05),this.voiceSrc=n,this.duck&&(this.duck.gain.cancelScheduledValues(i),this.duck.gain.setTargetAtTime(.55,i,.05),this.duck.gain.setTargetAtTime(1,i+n.buffer.duration,.25)),!0}};var bu={kill:[["k01","Feierabend.","Feierabend."],["k02","N\xE4chster!","N\xE4chster!"],["k03","404 \u2013 Zombie nicht gefunden.","Vier null vier. Zombie nicht gefunden."],["k04","Ab in den Papierkorb.","Ab in den Papierkorb."],["k05","Deine Sitzung ist abgelaufen.","Deine Sitzung ist abgelaufen."],["k06","Weiterleitung ins Jenseits.","Weiterleitung ins Jenseits."],["k07","Gel\xF6scht. Ohne Backup.","Gel\xF6scht. Ohne Backup."],["k08","Und tsch\xFCss.","Und tsch\xFCss."],["k09","Abgemeldet.","Abgemeldet."],["k10","Absprungrate: hundert Prozent.","Absprungrate: hundert Prozent."],["k11","Keine R\xFCckerstattung.","Keine R\xFCckerstattung."],["k12","Der N\xE4chste bitte.","Der N\xE4chste, bitte."],["k13","Zwischenspeicher geleert.","Zwischenspeicher geleert."],["k14","Seite nicht gefunden \u2013 du auch nicht mehr.","Seite nicht gefunden. Du auch nicht mehr."]],head:[["h01","Kopfsache.","Kopfsache."],["h02","Volltreffer im Oberst\xFCbchen.","Volltreffer im Oberst\xFCbchen."],["h03","Oberst\xFCbchen ger\xE4umt.","Oberst\xFCbchen ger\xE4umt."],["h04","Kopf hoch! \u2026 ach nee.","Kopf hoch! ... Ach, nee."],["h05","Da war wohl nicht viel drin.","Da war wohl nicht viel drin."]],gib:[["g01","In Einzelteilen geliefert.","In Einzelteilen geliefert."],["g02","Das kriegt keiner mehr zusammen.","Das kriegt keiner mehr zusammen."],["g03","Konfetti!","Konfetti!"],["g04","Bitte nicht wischen.","Bitte nicht wischen."],["g05","Das gibt \xC4rger mit der Putzkolonne.","Das gibt \xC4rger mit der Putzkolonne."]],shotgun:[["s01","Hallo, Nachbar.","Hallo, Nachbar."],["s02","Aus n\xE4chster N\xE4he.","Aus n\xE4chster N\xE4he."],["s03","Schrot und Korn.","Schrot und Korn."]],multi:[["m01","Doppelt h\xE4lt besser!","Doppelt h\xE4lt besser!"],["m02","Zwei auf einen Streich.","Zwei auf einen Streich!"]],streak:[["r01","Das ist ein Massaker!","Das ist ein Massaker!"],["r02","Ich bin warmgelaufen.","Ich bin warmgelaufen."],["r03","Wer will noch mal?","Wer will noch mal?"]],hurt:[["u01","Das gibt Abz\xFCge in der B-Note.","Das gibt Abz\xFCge in der B-Note."],["u02","Autsch. Okay. Jetzt bin ich sauer.","Autsch. Okay. Jetzt bin ich sauer."]],wave:[["w01","Da kommen noch mehr.","Da kommen noch mehr."],["w02","Es wird voller.","Es wird voller."],["w03","Pause vorbei.","Pause vorbei."]],start:[["a01","Sie kommen \u2026","Sie kommen."]],barrel:[["b01","Vorsicht, Fass!","Vorsicht, Fass!"],["b02","Das war mal ein Fass.","Das war mal ein Fass."]],nade:[["n01","Fang!","Fang!"],["n02","Kleines Geschenk!","Kleines Geschenk!"],["n03","Granate!","Granate!"]],rocket:[["x01","Post f\xFCr dich.","Post f\xFCr dich."],["x02","Express-Lieferung.","Express-Lieferung."]],death:[["d01","Das \u2026 war \u2026 unprofessionell.","Das ... war ... unprofessionell."],["d02","Ich komme wieder. Als Zombie.","Ich komme wieder. Als Zombie."]],clear:[["c01","Welle \xFCberstanden. Wer ist der N\xE4chste?","Welle \xFCberstanden. Wer ist der N\xE4chste?"],["c02","Durchatmen. Nachladen. Weiter.","Durchatmen. Nachladen. Weiter."]]};var cl=class{constructor(e){this.g=e,this.move={x:0,y:0,mag:0},this.sprint=!1,this.hold=!1,this.stickId=null,this.lookIds=new Map,this.fireId=null,this.build(),this.bind()}build(){let e=this.layer=document.createElement("div");e.id="touch",e.innerHTML=`
      <div class="t-stick" id="t-stick"><i></i></div>
      <div class="t-stickhint"><span>laufen</span></div>
      <div class="t-lookhint"><span>wischen = umsehen</span></div>`,document.body.insertBefore(e,document.getElementById("hud"));let t=this.ctl=document.createElement("div");t.id="tctl",t.innerHTML=`
      <button type="button" class="tb t-fire" data-t="fire" aria-label="Feuer"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 2v6M12 16v6M2 12h6M16 12h6" stroke="currentColor" stroke-width="2"/></svg></button>
      <button type="button" class="tb t-jump" data-t="jump" aria-label="Springen"><svg viewBox="0 0 24 24"><path d="M5 14l7-7 7 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 19h8" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg></button>
      <button type="button" class="tb t-nade" data-t="nade" aria-label="Granate"><svg viewBox="0 0 24 24"><circle cx="11" cy="14" r="6.5" fill="currentColor"/><path d="M9 6.5h5v2.5H9z" fill="currentColor"/><path d="M14 6.5c2-2.5 4.5-2 5.5 0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg><i id="t-nades">3</i></button>
      <button type="button" class="tb t-reload" data-t="reload" aria-label="Nachladen"><svg viewBox="0 0 24 24"><path d="M19 12a7 7 0 1 1-2.05-4.95" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path d="M19 4v4.5h-4.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
      <button type="button" class="tb t-scope" data-t="scope" aria-label="Zielfernrohr"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M12 4v16M4 12h16" stroke="currentColor" stroke-width="1.4"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/></svg></button>
      <button type="button" class="tb t-breath" data-t="breath" aria-label="Luft anhalten"><span>LUFT<br>HALTEN</span></button>
      <button type="button" class="tb t-pause" data-t="pause" aria-label="Pause"><svg viewBox="0 0 24 24"><path d="M8 5v14M16 5v14" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/></svg></button>`,document.body.appendChild(t),this.stickEl=e.querySelector("#t-stick"),this.knob=this.stickEl.querySelector("i")}bind(){let e=this.g,t={passive:!1};this.layer.addEventListener("touchstart",s=>{if(s.preventDefault(),e.state==="play")for(let r of s.changedTouches){let o=this.layer.clientWidth;r.clientX<o*.42&&this.stickId===null?(this.stickId=r.identifier,this.ox=r.clientX,this.oy=r.clientY,this.stickEl.style.left=this.ox+"px",this.stickEl.style.top=this.oy+"px",this.stickEl.classList.add("on"),this.layer.classList.add("used-stick"),this.setStick(r.clientX,r.clientY)):(this.lookIds.set(r.identifier,{x:r.clientX,y:r.clientY}),this.layer.classList.add("used-look"))}},t);let i=s=>{s.preventDefault();for(let r of s.changedTouches){r.identifier===this.stickId&&this.setStick(r.clientX,r.clientY);let o=this.lookIds.get(r.identifier);o&&(this.look(r.clientX-o.x,r.clientY-o.y),o.x=r.clientX,o.y=r.clientY)}},n=s=>{for(let r of s.changedTouches)r.identifier===this.stickId&&this.releaseStick(),this.lookIds.delete(r.identifier),r.identifier===this.fireId&&(this.fireId=null,e.mouseDown=!1,this.ctl.querySelector(".t-fire").classList.remove("down")),r.identifier===this.breathId&&(this.breathId=null,this.hold=!1,this.ctl.querySelector(".t-breath").classList.remove("down"))};document.addEventListener("touchmove",i,t),document.addEventListener("touchend",n),document.addEventListener("touchcancel",n),this.ctl.querySelectorAll(".tb").forEach(s=>{s.addEventListener("touchstart",r=>{r.preventDefault(),r.stopPropagation();let o=r.changedTouches[0];this.press(s.dataset.t,o,s)},t),s.addEventListener("mousedown",r=>{r.preventDefault(),r.stopPropagation(),this.press(s.dataset.t,null,s)}),s.addEventListener("mouseup",()=>{s.dataset.t==="fire"&&(e.mouseDown=!1),s.dataset.t==="breath"&&(this.hold=!1),s.classList.remove("down")})}),document.querySelectorAll(".slot[data-w]").forEach(s=>{let r=o=>{if(o.preventDefault(),o.stopPropagation(),e.state!=="play")return;let l=s.dataset.w;if(l==="nade"){e.throwGrenade();return}if(l==="binoc"){e.hasBinoc&&(e.binoc=!e.binoc,e.audio.zoom(e.binoc));return}e.arsenal.select(l)?e.audio.switchWeapon():e.arsenal.hasAmmo(l)||e.flashSlot(l)};s.addEventListener("touchstart",r,t)}),document.getElementById("up-cards").addEventListener("touchstart",s=>{let r=s.target.closest(".upcard");if(!r)return;s.preventDefault();let o=[...r.parentNode.children].indexOf(r);e.chooseUpgrade(o)},t),document.addEventListener("gesturestart",s=>s.preventDefault()),document.addEventListener("dblclick",s=>s.preventDefault())}press(e,t,i){let n=this.g;if(e==="pause"){n.state==="play"&&n.pause();return}n.state==="play"&&(i.classList.add("down"),e!=="fire"&&e!=="breath"&&setTimeout(()=>i.classList.remove("down"),140),e==="fire"&&(n.mouseDown=!0,n.tryFire(),t&&(this.fireId=t.identifier,this.lookIds.set(t.identifier,{x:t.clientX,y:t.clientY}))),e==="jump"&&n.jump(),e==="nade"&&n.throwGrenade(),e==="reload"&&n.reload(),e==="scope"&&n.arsenal.current==="sniper"&&(n.rmb=!n.rmb,n.rmb&&(n.binoc=!1),n.audio.zoom(n.rmb)),e==="breath"&&(this.hold=!0,t&&(this.breathId=t.identifier)))}setStick(e,t){let i=e-this.ox,n=t-this.oy,s=Math.hypot(i,n);if(s>54*1.6){let u=(s-86.4)/s;this.ox+=i*u,this.oy+=n*u,this.stickEl.style.left=this.ox+"px",this.stickEl.style.top=this.oy+"px",i=e-this.ox,n=t-this.oy}let r=Math.hypot(i,n),o=Math.min(r,54),l=r>0?i/r:0,c=r>0?n/r:0;this.knob.style.transform=`translate(${l*o}px, ${c*o}px)`;let h=Math.min(1,r/54);h=h<.12?0:(h-.12)/.88,this.move.x=l*h,this.move.y=-c*h,this.move.mag=h,this.sprint=r>54*1.05&&-c>.55,this.stickEl.classList.toggle("run",this.sprint)}releaseStick(){this.stickId=null,this.move.x=this.move.y=this.move.mag=0,this.sprint=!1,this.knob.style.transform="",this.stickEl.classList.remove("on","run")}look(e,t){let i=this.g;if(i.state!=="play"||i.player.dead)return;let n=.0062*i.settings.sens*(i.camera.fov/74);e=Math.max(-120,Math.min(120,e)),t=Math.max(-120,Math.min(120,t)),i.player.yaw-=e*n,i.player.pitch=Math.max(-1.45,Math.min(1.45,i.player.pitch-t*n*.85)),i.look.dx+=e*1.6,i.look.dy+=t*1.6}reset(){this.releaseStick(),this.lookIds.clear(),this.fireId=null,this.hold=!1,this.g.mouseDown=!1,this.ctl.querySelectorAll(".down").forEach(e=>e.classList.remove("down"))}update(){let e=this.g,t=e.arsenal,i=e.state==="play"&&!e.player.dead,n=(e.scopeAmt||0)>.5,s=this.ctl.classList;s.toggle("show",i),this.layer.classList.toggle("show",i),s.toggle("sniper",t.current==="sniper"&&!t.pending),s.toggle("scoped",n),s.toggle("binoc",!!e.binoc),this.ctl.querySelector(".t-scope").classList.toggle("active",!!e.rmb);let o=document.getElementById("t-nades");o.textContent!==String(t.grenades)&&(o.textContent=t.grenades),this.ctl.querySelector(".t-nade").classList.toggle("off",t.grenades<=0),!i&&(this.stickId!==null||this.lookIds.size||this.fireId!==null)&&this.reset()}};var he=a=>document.getElementById(a),ss={get(a,e){try{let t=localStorage.getItem(a);return t===null?e:JSON.parse(t)}catch{return e}},set(a,e){try{localStorage.setItem(a,JSON.stringify(e))}catch{}}},Ur=/[?&]test/.test(location.search),rs=/[?&]touch/.test(location.search)||matchMedia("(hover: none) and (pointer: coarse)").matches&&!Ur;globalThis.ZW_LOW=rs;function np(){try{let a=localStorage.getItem("fps_sound_v1");return a===null?!0:a==="1"}catch{return!0}}function sp(a){try{localStorage.setItem("fps_sound_v1",a?"1":"0")}catch{}}var xu=Object.fromEntries(Object.entries(bu).map(([a,e])=>[a,e.map(([t,i])=>({id:t,t:i}))])),s_=Object.values(bu).flat().map(a=>a[0]),vu=a=>a[Math.random()*a.length|0],_u=document.body.dataset.hardmode!=="off",r_=new Set(["g04","g05","r01","h05"]),yu={pistolMag:vt.pistol.mag,shotgunMag:vt.shotgun.mag,pellets:vt.shotgun.pellets},Mu=[{id:"dmg",icon:"\u2726",name:"Feuerkraft",desc:"+15 % Schaden mit allen Waffen",max:5},{id:"reload",icon:"\u21BB",name:"Schnellladen",desc:"+30 % Nachlade- und Repetiertempo",max:3},{id:"armor",icon:"\u26E8",name:"Firewall",desc:"\u221212 % erlittener Schaden",max:3},{id:"maxhp",icon:"\u271A",name:"Mehr Leben",desc:"+25 maximales Leben, sofort voll geheilt",max:3},{id:"leech",icon:"\u2665",name:"Selbstreparatur",desc:"+3 Leben pro erledigtem Gegner",max:3},{id:"mag",icon:"\u25A4",name:"Gro\xDFes Magazin",desc:"Pistole +6, Pump-Action +3 Schuss pro Magazin",max:2},{id:"speed",icon:"\xBB",name:"Flinke F\xFC\xDFe",desc:"+10 % Laufgeschwindigkeit",max:3},{id:"nades",icon:"\u25CF",name:"Granatengurt",desc:"+2 Granaten und +2 Platz im Gurt",max:3},{id:"blast",icon:"\u273A",name:"Sprengmeister",desc:"Explosionen +20 % Radius und +25 % Schaden",max:3},{id:"head",icon:"\u25CE",name:"Kopfj\xE4ger",desc:"Kopftreffer machen deutlich mehr Schaden",max:3},{id:"pierce",icon:"\u27B6",name:"Durchschlag",desc:"Pistolenkugeln durchdringen einen weiteren Gegner",max:2},{id:"magnet",icon:"\u2295",name:"Magnet",desc:"Mehr Beute, die aus der Entfernung angezogen wird",max:3},{id:"pellets",icon:"\u2058",name:"Schrot-Kaliber",desc:"+3 Schrotkugeln pro Schuss",max:2}],rp={runner:{wave:2,hint:"schnell, aber schwach"},bomber:{wave:3,hint:"platzt in deiner N\xE4he \u2013 auf Abstand halten!"},brute:{wave:4,hint:"z\xE4h und hart im Nehmen \u2013 Raketen helfen"}},a_={halle:2,hof:3,stadt:3},Nr={health:{label:"+25 Leben",color:5308272},shells:{label:"+6 Schrot",color:16747056,amount:6},rockets:{label:"+2 Raketen",color:16726570,amount:2},grenade:{label:"+1 Granate",color:16765498,amount:1},rounds:{label:"+5 Gewehrpatronen",color:3531007,amount:5}},Su=class{constructor(){this.stage=he("stage"),this.audio=new ol,this.settings={mode:_u&&ss.get("zw_mode","glitch")==="hard"?"hard":"glitch",sound:np(),sens:ss.get("zw_sens",1)},this.best=ss.get("zw_best_v2",{wave:0,kills:0}),this.state="loading",this.keys={},this.look={dx:0,dy:0},this.time=0,this.dynScale=1,this.frameTimes=[],this.events=[]}async init(){rs&&(document.body.classList.add("touch"),this.dynScale=.85),this.setupRenderer(),this.bindUI(),rs&&(this.touch=new cl(this)),await this.load(),this.setupWorld(),await this.precompile(),this.state="menu",he("loading").hidden=!0,he("ready").hidden=!1,this.showBest(),this.renderer.setAnimationLoop(()=>this.frame()),window.ZW=this,Ur&&(window.__RC=di)}setupRenderer(){let e=this.renderer=new Wc({antialias:!1,powerPreference:"high-performance",stencil:!1});e.shadowMap.enabled=!0,e.shadowMap.type=Ss,e.toneMapping=Ts,e.toneMappingExposure=1.15,e.outputColorSpace=et,this.stage.appendChild(e.domElement),this.canvas=e.domElement,this.scene=new fn,this.scene.background=new le(394760),this.scene.fog=new ta(460553,.032),this.camera=new Lt(74,16/9,.05,140),this.scene.add(this.camera);let t=new Tr(e);this.envMap=t.fromScene(new Jc,.04).texture,this.scene.environment=this.envMap,this.scene.environmentIntensity=.12;let i=new En(16773596,26,30,.48,.6,1.3);i.position.set(.25,-.15,.1),this.camera.add(i),i.target.position.set(0,-.2,-6),this.camera.add(i.target),this.flashlight=i,this.muzzleLight=new ri(16752704,0,7,1.8),this.scene.add(this.muzzleLight),this.boomLights=[0,1].map(()=>{let n=new ri(16752720,0,16,1.5);return this.scene.add(n),{l:n,t:0}}),window.addEventListener("resize",()=>this.resize())}setupComposer(){let e=this.renderer,t=new Ft(4,4,{type:Xt,samples:rs?0:4}),i=this.composer=new $c(e,t);i.addPass(new Ua(this.scene,this.camera));let n=new Ua(this.arsenal.scene,this.arsenal.camera);n.clear=!1,n.clearDepth=!0,i.addPass(n),this.bloom=new Lr(new Ae(512,512),.55,.55,.92),i.addPass(this.bloom),this.post=new Hr({uniforms:{tDiffuse:{value:null},uTime:{value:0},uDamage:{value:0},uLow:{value:0},uAspect:{value:1.7},uFlash:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
        }`}),i.addPass(this.post),i.addPass(new Qc),this.resize()}resize(){let e=innerWidth,t=innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.arsenal&&this.arsenal.setAspect(e/t);let i=Math.min(devicePixelRatio||1,rs?1.3:1.5)*this.dynScale;this.renderer.setPixelRatio(i),this.renderer.setSize(e,t),this.composer&&(this.composer.setPixelRatio(i),this.composer.setSize(e,t),this.post.uniforms.uAspect.value=e/t),this.fx&&this.fx.setScale(t*i)}async load(){let e=new pr;e.onProgress=(f,m,b)=>{he("loadbar").style.width=Math.round(m/b*100)+"%"};let t=new _s(e),i=this.renderer.capabilities.getMaxAnisotropy(),n=(f,m,b=!0)=>new Promise((g,p)=>t.load(f,x=>{m&&(x.colorSpace=et),b&&(x.wrapS=x.wrapT=$t),x.anisotropy=Math.min(8,i),g(x)},void 0,p)),s=(f,m=!0)=>Promise.all([n(f+"_c.webp",!0,m),n(f+"_n.webp",!1,m),n(f+"_orm.webp",!1,m)]).then(([b,g,p])=>({c:b,n:g,orm:p})),r=["bricks","metal","concrete","plate","ceiling","hazard","rust"],o=f=>Promise.all([n(`models/${f}_BaseColor.webp`,!0,!1),n(`models/${f}_Normal.webp`,!1,!1),n(`models/${f}_OcclusionRoughnessMetallic.webp`,!1,!1)]).then(([m,b,g])=>({c:m,n:b,orm:g})),l=new jc(e);l.setMeshoptDecoder(jf);let[c,h,u,d]=await Promise.all([l.loadAsync("models/zombie.glb"),Promise.all(r.map(f=>s("tex/"+f))).then(f=>Object.fromEntries(f.map((m,b)=>[r[b],m]))),o("body"),o("outfit")]);he("loadtxt").textContent="Baue Level \u2026",this.assets={gltf:c,levelTex:h,zTex:{body:u,outfit:d}}}setupWorld(){this.levels={halle:new Dr(this.assets.levelTex,za.halle),hof:new Dr(this.assets.levelTex,za.hof),stadt:new Dr(this.assets.levelTex,za.stadt)};for(let e of Object.values(this.levels))e.build(this.scene);this.levels.hof.group.visible=!1,this.levels.stadt.group.visible=!1,this.level=this.levels.halle,this.levelKey="halle",this.fx=new tl(this.scene,this.level),this.fx.blood=this.settings.mode==="hard",this.ztpl=new il(this.assets.gltf,this.assets.zTex),this.zombies=new nl(this,this.ztpl,18),this.zombies.setStyle(this.settings.mode),this.arsenal=new rl(this.envMap),this.proj=new al(this),this.setupComposer(),this.player={pos:new R().copy(this.level.playerStart),vel:new R,y:0,vy:0,onGround:!0,yaw:Math.PI,pitch:0,hp:100,maxHp:100,dead:!1,bob:0,stepAcc:0,shake:0,deadT:0,land:0},this.placeCamera(),this.buildPickups(),this.minimap=new sl(he("minimap"),this.level),this.up={},this.maxNades=gu}buildPickups(){this.pickups=[];let e={health:()=>{let i=new qe,n=new ve(new Ee(.42,.26,.3),new ue({color:15263976,roughness:.4,metalness:.1,emissive:1122833}));i.add(n);let s=new ue({color:0,emissive:16719904,emissiveIntensity:3});for(let r of[.152,-.152]){let o=new ve(new Ee(.2,.06,.012),s);o.position.z=r;let l=new ve(new Ee(.06,.2,.012),s);l.position.z=r,i.add(o,l)}return i},shells:()=>{let i=new qe;i.add(new ve(new Ee(.36,.16,.24),new ue({color:9049104,roughness:.5})));let n=new ue({color:13213766,metalness:1,roughness:.3});for(let s=0;s<5;s++){let r=new ve(new Be(.022,.022,.05,10),n);r.position.set(-.13+s*.065,.1,0),i.add(r)}return i},rounds:()=>{let i=new qe;i.add(new ve(new Ee(.3,.12,.2),new ue({color:2306106,roughness:.5,metalness:.4})));let n=new ue({color:13213766,metalness:1,roughness:.3});for(let r=0;r<5;r++){let o=new ve(new Be(.012,.012,.11,8),n);o.position.set(-.1+r*.05,.11,0),i.add(o)}let s=new ve(new Ee(.31,.03,.21),new ue({color:4120,emissive:3531007,emissiveIntensity:1.5}));return i.add(s),i},rockets:()=>{let i=new qe,n=new ue({color:5922634,metalness:.6,roughness:.35});for(let r of[-.07,.07]){let o=new ve(new Be(.05,.05,.36,14),n);o.rotation.z=Math.PI/2,o.position.set(0,0,r),i.add(o);let l=new ve(new bn(.05,.14,14),n);l.rotation.z=-Math.PI/2,l.position.set(.25,0,r),i.add(l)}let s=new ve(new Ee(.06,.12,.26),new ue({color:2230528,emissive:16739125,emissiveIntensity:1.5}));return i.add(s),i},grenade:()=>{let i=new qe,n=new ue({color:3819048,metalness:.3,roughness:.5}),s=new ve(new Nt(.11,16,12),n);s.scale.set(1,1.2,1),i.add(s);let r=new ve(new Be(.035,.04,.06,10),new ue({color:7829367,metalness:1,roughness:.3}));return r.position.y=.15,i.add(r),i}},t=new xn(.3,.42,32);t.rotateX(-Math.PI/2);for(let[i,n]of Object.entries(e)){let s=new ut({color:Nr[i].color,transparent:!0,opacity:.5,blending:Zt,depthWrite:!1});for(let r=0;r<6;r++){let o=n();o.traverse(h=>{h.isMesh&&(h.castShadow=!0)});let l=new ve(t,s),c=new qe;c.add(o,l),c.visible=!1,this.scene.add(c),this.pickups.push({type:i,holder:c,item:o,ring:l,active:!1,t:0})}}}async precompile(){let e=this.zombies.pool[0];e.root.visible=!0,e.root.position.copy(this.level.playerStart).add(new R(0,0,-4));let t=this.zombies.pool[1];e.setStyle("glitch"),t.setStyle("hard"),t.root.visible=!0,t.root.position.copy(e.root.position).add(new R(1,0,0)),this.fx.glitchHit(e.root.position.clone().setY(1),new R(0,0,1),1,16739125,!0);for(let n of Object.keys(Nr)){let s=this.pickups.find(r=>r.type===n);s.holder.visible=!0,s.holder.position.copy(e.root.position)}for(let n of Pi)this.arsenal.models[n].group.visible=!0,this.arsenal.models[n].flash.visible=!0;this.arsenal.nade.group.visible=!0;for(let n of this.proj.rockets)n.g.visible=!0;for(let n of this.proj.nades)n.g.visible=!0;let i=new R(this.level.playerStart.x,1,this.level.playerStart.z-3);this.fx.bloodHit(i,new R(0,0,-1),.2),this.fx.explosion(i,null,.3);try{this.renderer.compileAsync&&(await this.renderer.compileAsync(this.scene,this.camera),await this.renderer.compileAsync(this.arsenal.scene,this.arsenal.camera),this.levels.halle.group.visible=!1,this.levels.hof.group.visible=!0,await this.renderer.compileAsync(this.scene,this.camera),this.composer.render(.016),this.levels.halle.group.visible=!0,this.levels.hof.group.visible=!1)}catch{this.levels.halle.group.visible=!0,this.levels.hof.group.visible=!1}this.composer.render(.016),e.root.visible=!1,t.root.visible=!1,this.zombies.setStyle(this.settings.mode);for(let n of this.pickups)n.holder.visible=!1;for(let n of Pi)this.arsenal.models[n].flash.visible=!1;this.proj.reset(),this.arsenal.reset(),this.fx.reset()}bindUI(){let e=()=>{for(let t of["","2"])he("opt-hard"+t).checked=this.settings.mode==="hard",he("opt-sound"+t).checked=this.settings.sound,he("opt-sens"+t).value=this.settings.sens};e();for(let t of["","2"])he("opt-hard"+t).addEventListener("change",i=>{if(i.target.checked&&!ss.get("zw_adult",!1)){i.target.checked=!1,he("ov-age").hidden=!1;return}this.applyMode(i.target.checked?"hard":"glitch"),e()}),he("opt-sound"+t).addEventListener("change",i=>{this.settings.sound=i.target.checked,sp(this.settings.sound),this.audio.setEnabled(this.settings.sound),e()}),he("opt-sens"+t).addEventListener("input",i=>{this.settings.sens=parseFloat(i.target.value),ss.set("zw_sens",this.settings.sens),e()});this.audio.enabled=this.settings.sound,this.syncOpts=e,_u||document.querySelectorAll(".opt-hard").forEach(t=>{t.hidden=!0}),he("btn-age-yes").addEventListener("click",()=>{ss.set("zw_adult",!0),he("ov-age").hidden=!0,this.applyMode("hard"),e()}),he("btn-age-no").addEventListener("click",()=>{he("ov-age").hidden=!0,e()}),this.applyModeUI(),window.addEventListener("storage",t=>{t.key==="fps_sound_v1"&&(this.settings.sound=np(),this.audio.setEnabled(this.settings.sound),e())}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="play"&&this.pause()}),he("btn-start").addEventListener("click",()=>this.start()),he("btn-again").addEventListener("click",()=>this.start()),he("btn-resume").addEventListener("click",()=>this.resume()),he("btn-quit").addEventListener("click",()=>this.gameOver()),he("fsbtn").addEventListener("click",()=>this.toggleFullscreen()),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==this.canvas&&this.state==="play"&&!Ur&&this.pause()}),document.addEventListener("pointerlockerror",()=>{this.state==="play"&&this.pause()}),document.addEventListener("mousemove",t=>{if(this.state!=="play"||document.pointerLockElement!==this.canvas&&!Ur)return;let i=.0022*this.settings.sens*(this.camera.fov/74),n=Math.max(-300,Math.min(300,t.movementX||0)),s=Math.max(-300,Math.min(300,t.movementY||0));this.player.yaw-=n*i,this.player.pitch=Math.max(-1.45,Math.min(1.45,this.player.pitch-s*i)),this.look.dx+=n,this.look.dy+=s}),document.addEventListener("mousedown",t=>{if(this.state==="play"){if(document.pointerLockElement!==this.canvas&&!Ur){this.lock();return}t.button===0&&(this.mouseDown=!0,this.tryFire()),t.button===2&&(this.arsenal.current==="sniper"?(this.rmb=!0,this.audio.zoom(!0)):this.throwGrenade())}}),document.addEventListener("contextmenu",t=>t.preventDefault()),document.addEventListener("mouseup",t=>{t.button===0&&(this.mouseDown=!1),t.button===2&&this.rmb&&(this.rmb=!1,this.audio.zoom(!1))}),document.addEventListener("wheel",t=>{if(this.state!=="play"||Math.abs(t.deltaY)<4)return;let i=performance.now();i-(this._wheelT||0)<140||(this._wheelT=i,this.arsenal.cycle(t.deltaY>0?1:-1)&&this.audio.switchWeapon())},{passive:!0}),document.addEventListener("keydown",t=>{if(this.keys[t.code]=!0,this.state==="play"){t.code==="KeyR"&&this.reload(),t.code==="Space"&&(t.preventDefault(),this.jump()),t.code==="KeyG"&&this.throwGrenade(),t.code==="KeyQ"&&this.arsenal.selectLast()&&this.audio.switchWeapon();let i={Digit1:0,Digit2:1,Digit3:2,Numpad1:0,Numpad2:1,Numpad3:2}[t.code];if(this.waveState==="choose"&&i!==void 0){this.chooseUpgrade(i);return}t.code==="KeyB"&&this.hasBinoc&&!t.repeat&&(this.binoc=!this.binoc,this.audio.zoom(this.binoc));let n={Digit1:"pistol",Digit2:"shotgun",Digit3:"rocket",Digit4:"sniper",Numpad1:"pistol",Numpad2:"shotgun",Numpad3:"rocket",Numpad4:"sniper"}[t.code];n&&(this.arsenal.select(n)?this.audio.switchWeapon():this.arsenal.hasAmmo(n)||this.flashSlot(n)),["ArrowUp","ArrowDown"].includes(t.code)&&t.preventDefault()}t.code==="KeyF"&&this.state!=="loading"&&this.toggleFullscreen(),t.code==="Enter"&&(this.state==="menu"||this.state==="over")&&this.start()}),document.addEventListener("keyup",t=>{this.keys[t.code]=!1}),window.addEventListener("blur",()=>{this.keys={},this.mouseDown=!1,this.rmb=!1})}applyMode(e){if(e==="hard"&&!_u&&(e="glitch"),!(e===this.settings.mode&&this._modeApplied)){if(this._modeApplied=!0,this.settings.mode=e,ss.set("zw_mode",e),this.fx&&(this.fx.blood=e==="hard",e==="glitch")){this.fx.floorDecals.clear(),this.fx.dripDecals.clear(),this.fx.wallDecals.clear();for(let t of this.fx.gibData)t.life=0;this.fx._gibsWasAny=!0}this.zombies&&this.zombies.setStyle(e),this.applyModeUI()}}applyModeUI(){let e=this.settings.mode==="hard";document.body.classList.toggle("mode-hard",e),document.body.classList.toggle("mode-glitch",!e),he("sub-start").innerHTML=e?"Die Seite gibt es nicht. Die Zombies leider schon.<br>Halte so viele Wellen durch, wie du kannst.":"Die Seite gibt es nicht \u2013 daf\xFCr jede Menge Glitch-Zombies.<br>L\xF6sch so viele Wellen, wie du kannst."}q(e){let t=xu[e]||[];if(this.settings.mode==="hard")return vu(t);let i=t.filter(n=>!r_.has(n.id));return vu(i.length?i:xu.kill)}toggleFullscreen(){try{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen({navigationUI:"hide"}).then(()=>this.state==="play"&&this.lock()).catch(()=>{})}catch{}}lock(){if(!(Ur||rs))try{let e=this.canvas.requestPointerLock({unadjustedMovement:!0});e&&e.catch&&e.catch(()=>{try{this.canvas.requestPointerLock()}catch{}})}catch{try{this.canvas.requestPointerLock()}catch{}}}showBest(){let e=this.best,t=he("best-start");e.kills>0&&(t.hidden=!1,t.textContent=`Rekord: Welle ${e.wave} \xB7 ${e.kills} Kills`)}start(){sp(this.settings.sound),this.audio.resume(),this.audio.setEnabled(this.settings.sound),this.resetRun(),this.state="play",document.body.classList.add("playing"),["ov-start","ov-over","ov-pause"].forEach(e=>{he(e).hidden=!0}),this.lock(),this.audio.startAmbience(),this.audio.loadVoices("voice/",s_),this.nextWave()}resetRun(){this.levelKey!=="halle"&&this.switchLevel("halle");for(let t of Object.values(this.levels))t.setExit(!1);this.wavesHere=0,this.hasBinoc=!1,this.binoc=!1,this.rmb=!1,this.scopeAmt=0,this.binocAmt=0,this.breath=1,he("fade").classList.remove("on");let e=this.player;e.pos.set(this.level.playerStart.x,0,this.level.playerStart.z),e.vel.set(0,0,0),e.y=this.level.playerStart.y,e.vy=0,e.onGround=!0,e.yaw=Math.PI,e.pitch=0,e.kick=0,e.kickV=0,e.hp=100,e.maxHp=100,e.dead=!1,e.deadT=0,e.shake=0,this.up={},this.maxNades=gu,vt.pistol.mag=yu.pistolMag,vt.shotgun.mag=yu.shotgunMag,vt.shotgun.pellets=yu.pellets,this.arsenal.reloadSpeed=1,this.seenTypes=new Set(["normal"]),he("upgrades").classList.remove("show"),this.zombies.reset(),this.fx.reset(),this.proj.reset(),this.level.resetBarrels(),this.pickups.forEach(t=>{t.active=!1,t.holder.visible=!1}),this.arsenal.reset(),this.wave=0,this.kills=0,this.headshots=0,this.damageFx=0,this.flashFx=0,this.quipCD=0,this.lastKillT=-10,this.streak=0,this.waveState="idle",this.updateHUD()}buildQueue(e,t){let i=[],n={runner:e>=2?Math.min(.3,.1+.03*e):0,bomber:e>=3?Math.min(.16,.07+.015*e):0,brute:e>=4?Math.min(.14,.04+.015*e):0};for(let[r,o]of Object.entries(rp))if(e===o.wave)for(let l=0;l<(r==="brute"?1:2);l++)i.push(r);for(;i.length<t;){let r=Math.random(),o=0,l="normal";for(let[c,h]of Object.entries(n))if(o+=h,r<o){l=c;break}i.push(l)}for(let r=i.length-1;r>0;r--){let o=Math.random()*(r+1)|0;[i[r],i[o]]=[i[o],i[r]]}let s=i.findIndex(r=>r==="normal");return s>0&&([i[0],i[s]]=[i[s],i[0]]),i}nextWave(){this.wave++,this.wavesHere=(this.wavesHere||0)+1;let e=this.wave;if(this.waveCfg={total:6+(e-1)*3,maxAlive:Math.min(4+e,14),hp:100+Math.min(e-1,8)*10+Math.max(0,e-9)*4,speed:Math.min(1.55,1.1+(e-1)*.06),dmg:11+e,interval:Math.max(.55,2.2-e*.13)},this.level.outdoor&&(this.waveCfg.speed*=1.3,this.waveCfg.maxAlive=Math.min(16,this.waveCfg.maxAlive+2)),this.queue=this.buildQueue(e,this.waveCfg.total),this.spawned=0,this.spawnT=1.6,this.waveState="fight",e>1){let n=this.arsenal,s=n.state;s.shotgun.reserve=Math.min(vt.shotgun.maxReserve,s.shotgun.reserve+6),s.rocket.reserve=Math.min(vt.rocket.maxReserve,s.rocket.reserve+1),n.grenades=Math.min(this.maxNades,n.grenades+1),n.owned.sniper&&(s.sniper.reserve=Math.min(vt.sniper.maxReserve,s.sniper.reserve+5)),this.level.resetBarrels()}let t=e===1?xu.start[0]:this.q("wave"),i=Object.entries(rp).find(([n,s])=>s.wave===e);if(i){let n=Va[i[0]],s=this.settings.mode==="hard"?n.name:n.glitchName;this.banner(`WELLE ${e}`,`Neu: ${s} \u2013 ${i[1].hint}`,3.6)}else this.banner(`WELLE ${e}`,e===1?t.t:t.t+" \xB7 Nachschub erhalten");setTimeout(()=>this.state==="play"&&this.quip(t,!0),900),this.audio.waveHorn(),this.updateHUD()}banner(e,t,i=2.4){he("banner-big").textContent=e,he("banner-small").textContent=t||"";let n=he("banner");n.classList.add("show"),clearTimeout(this._bannerT),this._bannerT=setTimeout(()=>n.classList.remove("show"),i*1e3)}toast(e){let t=he("toast");t.textContent=e,t.classList.remove("show"),t.offsetWidth,t.classList.add("show")}quip(e,t=!1){if(!t&&this.quipCD>0)return;this.quipCD=5.5,this.audio.voice(e.id);let i=he("quip");i.textContent="\u201E"+e.t+"\u201C",i.classList.add("show"),clearTimeout(this._quipT),this._quipT=setTimeout(()=>i.classList.remove("show"),2200)}pause(){if(this.state!=="play")return;this.state="pause";let e=Mu.filter(t=>this.up[t.id]).map(t=>`${t.icon} ${t.name}${this.up[t.id]>1?" "+"I".repeat(this.up[t.id]):""}`);he("pause-ups").textContent=e.length?"Deine Upgrades: "+e.join(" \xB7 "):"",he("ov-pause").hidden=!1,this.mouseDown=!1,this.keys={},this.touch&&this.touch.reset()}resume(){this.state==="pause"&&(he("ov-pause").hidden=!0,this.state="play",this.lock())}gameOver(){this.state="over",document.body.classList.remove("playing"),he("ov-pause").hidden=!0,document.pointerLockElement&&document.exitPointerLock(),this.audio.stopAmbience();let e=this.wave>this.best.wave||this.wave===this.best.wave&&this.kills>this.best.kills;e&&this.kills>0&&(this.best={wave:this.wave,kills:this.kills},ss.set("zw_best_v2",this.best)),he("go-title").innerHTML=this.settings.mode==="hard"?"GEFRESSEN<span>.</span>":"ABGEST\xDCRZT<span>.</span>";let t=Mu.filter(i=>this.up[i.id]).map(i=>`${i.icon} ${i.name}${this.up[i.id]>1?" "+"I".repeat(this.up[i.id]):""}`);he("go-ups").textContent=t.length?"Upgrades: "+t.join(" \xB7 "):"",he("upgrades").classList.remove("show"),he("nextwave").classList.remove("show"),he("go-wave").textContent=this.wave,he("go-kills").textContent=this.kills,he("go-hs").textContent=this.headshots,he("go-newbest").hidden=!(e&&this.kills>0),he("go-best").textContent=this.best.kills>0?`Rekord: Welle ${this.best.wave} \xB7 ${this.best.kills} Kills`:"Noch kein Rekord \u2013 n\xE4chstes Mal!",he("ov-over").hidden=!1;try{parent.postMessage({type:"zombiewelle:best",best:this.best},location.origin)}catch{}}jump(){let e=this.player;e.dead||!e.onGround||(e.vy=6.9,e.onGround=!1,this.audio.jump())}reload(){let e=this.arsenal.startReload();e&&(e==="pistol"&&this.audio.reload(vt.pistol.reload),e==="rocket"&&this.audio.rocketLoad())}flashSlot(e){let t=document.querySelector(`.slot[data-w="${e}"]`);t&&(t.classList.remove("nope"),t.offsetWidth,t.classList.add("nope"))}tryFire(){if(this.player.dead)return;if(this.binoc){this.binoc=!1,this.audio.zoom(!1);return}let e=this.arsenal,t=e.current;rs&&e.cooldown<=0&&!e.reloading&&e.st.ammo>0&&this.aimAssist();let i=e.fire();if(i==="empty"){this.audio.dryFire(),e.st.reserve>0?this.reload():t!=="pistol"&&(e.cycle(-1),this.audio.switchWeapon());return}if(i!=="shot")return;let n=vt[t],s=(this.scopeAmt||0)>.5;if(this.player.kickV=(this.player.kickV||0)+n.camKick*(s?9:22),this.player.pitch=Math.min(1.45,this.player.pitch+n.camKick*.06),this.player.yaw+=(Math.random()-.5)*n.camKick*(s?.02:.08),this.player.shake=Math.min(1.2,this.player.shake+(t==="pistol"?.1:s?.06:.25)),this.muzzleT=t==="pistol"?.06:.09,t==="sniper"&&(this.audio.sniper(),this.shootHitscan(n)),t==="pistol"&&(this.audio.pistol(),this.shootHitscan(n)),t==="shotgun"&&(this.audio.shotgun(),this.shootHitscan(n)),t==="rocket"){this.audio.rocketFire(),Math.random()<.3&&this.quip(this.q("rocket"));let r=this.camera,o=new R(.18,-.12,-.6).applyMatrix4(r.matrixWorld),l=new R(0,0,-1).applyQuaternion(r.quaternion),c=new di(r.getWorldPosition(new R),l,0,80),h=c.intersectObjects(this.level.colliders,!1)[0],u=this.zombies.raycast(c.ray.origin,l,h?h.distance:80),d=u?u.point:h?h.point:c.ray.origin.clone().addScaledVector(l,60),f=d.clone().sub(o).normalize();d.distanceTo(o)<1.2&&f.copy(l),this.proj.fireRocket(o,f),this.fx.puff(o.clone().addScaledVector(l,-.6),l.clone().negate(),7829367,1.6)}}aimAssist(){if((this.scopeAmt||0)>.3)return;let e=this.camera,t=e.getWorldPosition(new R),i=new R(0,0,-1).applyQuaternion(e.quaternion),n=null,s=.075,r=new R;for(let h of this.zombies.alive){if(h.dying||h.dead)continue;r.copy(h.root.position),r.y+=h.height*.72,r.sub(t);let u=r.length();if(u>38)continue;r.divideScalar(u);let d=Math.acos(Math.min(1,r.dot(i)));if(d<s){if(new di(t,r.clone(),0,u-.4).intersectObjects(this.level.colliders,!1).length)continue;s=d,n=r.clone()}}if(!n)return;let o=Math.atan2(-n.x,-n.z),l=Math.asin(Math.max(-1,Math.min(1,n.y))),c=o-this.player.yaw;c=Math.atan2(Math.sin(c),Math.cos(c)),this.player.yaw+=c*.7,this.player.pitch+=(l-this.player.pitch)*.7,this.placeCamera(),e.updateMatrixWorld()}shootHitscan(e){let t=this.camera,i=new R;t.getWorldPosition(i);let n=this.player.vel.length()/6+(this.player.onGround?0:.6),s=new di,r=new Map,o=0,l=1+.15*(this.up.dmg||0),c=3.2+.9*(this.up.head||0),h=e.pellets===1?(this.up.pierce||0)+(e.pierce||0):0,u=e===vt.sniper,d=null;for(let m=0;m<e.pellets;m++){let b=u?this.scopeAmt>.9?e.spread*(1+n*4):e.hipSpread:e.spread*(e.pellets>1?1:1+n*2.5),g=Math.random()*Math.PI*2,p=e.pellets>1?Math.sqrt(Math.random())*b:(Math.random()-.5)*b,x=new R(Math.cos(g)*p,Math.sin(g)*p,-1).normalize().applyQuaternion(t.quaternion);s.set(i,x),s.far=u?260:90;let E=s.intersectObjects(this.level.colliders,!1)[0],v=E?E.distance:s.far;u&&(d=i.clone().addScaledVector(x,v));let y=this.zombies.raycast(i,x,v);if(y){let M=new Set,A=1;for(let _=0;y&&_<=h;_++){let T=r.get(y.z)||{dmg:0,n:0,head:!1,point:y.point,rd:x,dist:y.t},C=y.zone==="head"?c:y.zone==="body"?1:.7;T.dmg+=e.damage*l*A*C*(.9+Math.random()*.2)*(e.pellets>1?Math.max(.35,1-y.t/22):1),T.n++,y.zone==="head"&&(T.head=!0),r.set(y.z,T),M.add(y.z),A*=.8,y=_<h?this.zombies.raycast(i,x,v,M):null}}else if(E){E.object.userData.barrel&&this.damageBarrel(E.object.userData.barrel,e.damage);let M=E.face.normal.clone().transformDirection(E.object.matrixWorld);o<4?this.fx.wallHit(E.point,M):this.fx.holes.add(E.point.clone().addScaledVector(M,.006),M,.07),o===0&&this.audio.impactWall(E.point),o++}}let f=!1;for(let[m,b]of r){let g=e.pellets>1,p=g&&b.dist<4.5&&b.n>=6,x=g?Math.max(0,6-b.dist)*.9:0,E=this.zombies.damage(m,b.dmg,b.head?"head":"body",b.point,b.rd,x,p),v=b.head&&!g,y=g?Math.min(2.2,.5+b.n*.18):v?1.2:1;this.settings.mode==="hard"?(this.fx.bloodHit(b.point,b.rd,y,(v||b.head&&g)&&E),E&&b.head?this.audio.headshot(b.point):this.audio.fleshHit(b.point,E||g)):(this.fx.glitchHit(b.point,b.rd,y,m.type.glow,b.head),this.audio.glitchHit(b.point,E||g||b.head)),E&&(f=!0),E&&g&&!p&&Math.random()<.3&&this.quip(this.q("shotgun"))}if(r.size&&this.hitmarker(f),u&&d){let m=new R(.12,-.08,-.5).applyMatrix4(this.camera.matrixWorld);this.tracer(this.scopeAmt>.5?m.lerp(i,.7):m,d)}}tracer(e,t){this.tracers||(this.tracers=[0,1,2].map(()=>{let s=new ot().setFromPoints([new R,new R(0,0,-1)]),r=new Wn({color:16767136,transparent:!0,opacity:0,blending:Zt,depthWrite:!1,toneMapped:!1}),o=new gn(s,r);return o.frustumCulled=!1,this.scene.add(o),{l:o,t:0}}));let i=this.tracers.reduce((s,r)=>s.t<r.t?s:r),n=i.l.geometry.attributes.position;n.setXYZ(0,e.x,e.y,e.z),n.setXYZ(1,t.x,t.y,t.z),n.needsUpdate=!0,i.t=.18}throwGrenade(){if(!this.player.dead){if(this.arsenal.grenades<=0){this.flashSlot("nade");return}this.arsenal.throwGrenade()&&(this.audio.pin(),Math.random()<.45&&this.quip(this.q("nade")))}}releaseGrenade(){let e=this.camera,t=new R(-.15,-.05,-.5).applyMatrix4(e.matrixWorld),n=new R(0,0,-1).applyQuaternion(e.quaternion).multiplyScalar(14).add(new R(0,3.2,0)).add(new R(this.player.vel.x*.5,0,this.player.vel.z*.5)),s=new di(e.getWorldPosition(new R),t.clone().sub(e.position).normalize(),0,e.position.distanceTo(t)+.1),r=s.intersectObjects(this.level.colliders,!1)[0];r&&t.copy(r.point).addScaledVector(s.ray.direction,-.1),this.proj.throwGrenade(t,n),this.audio.throwWhoosh()}explode(e,{radius:t=5,damage:i=150,source:n="rocket",normal:s=null}={}){let r=i;if(n!=="bomber"){let f=this.up.blast||0;t*=1+.2*f,i*=(1+.25*f)*(1+.15*(this.up.dmg||0))}this.fx.explosion(e,s,n==="barrel"?1.2:n==="bomber"?.85:1),this.audio.explosion(e,n==="barrel"?1.15:1);let o=this.boomLights.reduce((f,m)=>f.t<m.t?f:m);o.l.position.copy(e).addScaledVector(s||new R(0,1,0),.6),o.t=.45;let l=this.camera.position.distanceTo(e);this.player.shake=Math.min(2.5,this.player.shake+Math.max(0,2.2-l*.12)),this.flashFx=Math.min(1,this.flashFx+Math.max(0,1-l/18));let c=new di,h=0;for(let f of this.zombies.alive){let m=f.root.position.clone();m.y+=1;let b=m.distanceTo(e);if(b>t)continue;let g=m.clone().sub(e).setY(0);g.lengthSq()<1e-4&&g.set(Math.random()-.5,0,Math.random()-.5),g.normalize(),c.set(e,m.clone().sub(e).normalize()),c.far=b;let p=c.intersectObjects(this.level.colliders,!1)[0];if(p&&p.distance<b-.4&&!p.object.userData.barrel)continue;let x=Math.pow(1-b/t,.7),E=this.zombies.damage(f,i*x+10,"body",m,g,8*x+2,b<t*.55);!E&&this.settings.mode!=="hard"&&this.fx.glitchHit(m,g,.8,f.type.glow),E&&h++}h>0&&this.hitmarker(!0),h>=2&&this.quip(this.q("gib"),!0);let u=new R(this.player.pos.x,this.player.y+1,this.player.pos.z),d=u.distanceTo(e);if(d<t&&!this.player.dead){let f=1-d/t;this.hurtPlayer(r*(n==="bomber"?.5:.45)*f,e,!0);let m=u.clone().sub(e).normalize().multiplyScalar(9*f);this.player.vel.x+=m.x,this.player.vel.z+=m.z,this.player.vy=Math.max(this.player.vy,4*f),this.player.onGround=!1}for(let f of this.level.barrels){if(!f.alive)continue;Math.hypot(f.x-e.x,f.z-e.z)<t+.6&&this.proj.later(.12+Math.random()*.2,()=>this.damageBarrel(f,999))}for(let f of this.proj.nades)f.active&&f.g.position.distanceTo(e)<t*.6&&(f.fuse=Math.min(f.fuse,.15))}damageBarrel(e,t){if(e.alive){if(e.hp-=t,e.hp>0){this.fx.puff(new R(e.x,1,e.z),new R(0,1,0),8978244,.8);return}this.level.removeBarrel(e),Math.random()<.5&&this.quip(this.q("barrel")),this.explode(new R(e.x,.7,e.z),{radius:6.2,damage:270,source:"barrel"})}}hitmarker(e){let t=he("hitmark");t.classList.remove("show","kill"),t.offsetWidth,t.classList.add("show"),e&&t.classList.add("kill"),this.audio.hitmarker()}onKill(e,t){if(e.typeKey==="bomber"){let c=e.root.position.clone().setY(.9);this.proj.later(t==="self"?0:.12,()=>this.explode(c,{radius:4.2,damage:150,source:"bomber"}))}if(t==="self")return;this.kills++,this.up.leech&&(this.player.hp=Math.min(this.player.maxHp,this.player.hp+3*this.up.leech));let i=t==="head";i&&this.headshots++;let n=this.time;n-this.lastKillT<1.6?this.streak++:this.streak=1,this.lastKillT=n;let s=he("killfeed"),r=document.createElement("div"),o=this.settings.mode==="hard",l=o?e.type.name:e.type.glitchName;for(r.textContent=i?`\u2716 ${l} \u2013 Kopftreffer`:t==="gib"?`\u2716 ${l} zerfetzt`:o?`\u2716 ${l} erledigt`:`\u2716 ${l} gel\xF6scht`,(i||t==="gib")&&(r.className="hs"),s.prepend(r),setTimeout(()=>r.remove(),2500);s.children.length>4;)s.lastChild.remove();this.streak===2?this.quip(this.q("multi"),!0):this.streak>=3?this.quip(this.q("streak"),!0):t==="gib"&&Math.random()<.5?this.quip(this.q("gib")):i&&Math.random()<.6?this.quip(this.q("head")):Math.random()<.35&&this.quip(this.q("kill")),this.maybeDrop(e.root.position,e.typeKey==="brute"?2:1),this.updateHUD()}maybeDrop(e,t=1){for(let i=0;i<t;i++)this.dropOnce(e,i)}dropOnce(e,t=0){let i=this.arsenal,n=i.state,s=this.player.hp,r=[];if(s<this.player.maxHp*.8&&r.push(["health",s<35?4:1.5]),r.push(["shells",n.shotgun.reserve<12?3:1]),r.push(["rockets",n.rocket.reserve<3?2:.6]),r.push(["grenade",i.grenades<2?1.6:.5]),i.owned.sniper&&r.push(["rounds",n.sniper.reserve<8?3:1]),Math.random()>.3+.1*(this.up.magnet||0)&&t===0)return;let o=r.reduce((u,d)=>u+d[1],0),l=Math.random()*o,c=r[0][0];for(let[u,d]of r)if(l-=d,l<=0){c=u;break}let h=this.pickups.find(u=>!u.active&&u.type===c);h&&(h.active=!0,h.t=0,h.holder.visible=!0,h.holder.position.set(e.x+(t?(Math.random()-.5)*1.2:0),0,e.z+(t?(Math.random()-.5)*1.2:0)),h.holder.position.y=this.level.groundAt(h.holder.position.x,h.holder.position.z,.2,e.y+.1))}updatePickups(e){let t=this.player,i=this.arsenal,n=i.state;for(let s of this.pickups){if(!s.active)continue;if(s.t+=e,s.item.rotation.y+=e*1.6,s.item.position.y=.36+Math.sin(s.t*3)*.06,s.ring.material.opacity=.35+Math.sin(s.t*5)*.15,s.t>35){s.active=!1,s.holder.visible=!1;continue}let r=t.pos.x-s.holder.position.x,o=t.pos.z-s.holder.position.z,l=Math.hypot(r,o),c=1+1.8*(this.up.magnet||0);if(this.up.magnet&&l<c&&l>.3){let u=Math.min(l,e*(5+3*this.up.magnet));s.holder.position.x+=r/l*u,s.holder.position.z+=o/l*u}if(Math.abs(t.y-s.holder.position.y)>1.3||l>1)continue;let h=!1;s.type==="health"&&t.hp<t.maxHp&&(t.hp=Math.min(t.maxHp,t.hp+25),h=!0,this.audio.pickup()),s.type==="shells"&&n.shotgun.reserve<vt.shotgun.maxReserve&&(n.shotgun.reserve=Math.min(vt.shotgun.maxReserve,n.shotgun.reserve+Nr.shells.amount),h=!0),s.type==="rockets"&&n.rocket.reserve<vt.rocket.maxReserve&&(n.rocket.reserve=Math.min(vt.rocket.maxReserve,n.rocket.reserve+Nr.rockets.amount),h=!0),s.type==="grenade"&&i.grenades<this.maxNades&&(i.grenades++,h=!0),s.type==="rounds"&&n.sniper.reserve<vt.sniper.maxReserve&&(n.sniper.reserve=Math.min(vt.sniper.maxReserve,n.sniper.reserve+Nr.rounds.amount),h=!0),h&&(s.type!=="health"&&this.audio.ammo(),s.active=!1,s.holder.visible=!1,this.toast(Nr[s.type].label),this.updateHUD())}}hurtPlayer(e,t,i=!1){let n=this.player;if(n.dead||this.state!=="play")return;e*=1-.12*(this.up.armor||0),n.hp=Math.max(0,n.hp-e),this.damageFx=Math.min(1,this.damageFx+(i?.8:.55)),n.shake=Math.min(1.5,n.shake+.6),this.audio.hurt();let r=Math.atan2(t.x-n.pos.x,t.z-n.pos.z)-n.yaw+Math.PI,o=he("dmgdir");o.style.transform=`rotate(${-r}rad)`,o.style.transition="none",o.style.opacity=1,requestAnimationFrame(()=>{o.style.transition="opacity .8s",o.style.opacity=0}),n.hp<=0?(n.dead=!0,n.deadT=0,this.quip(this.q("death"),!0)):n.hp<30&&Math.random()<.3&&this.quip(this.q("hurt")),this.updateHUD()}updateHUD(){let e=this.player,t=this.arsenal;he("h-wave").textContent=this.wave||1,he("h-kills").textContent=this.kills||0;let i=this.waveCfg?Math.max(0,this.waveCfg.total-this.spawned)+this.zombies.alive.length:0;he("h-left").textContent=i,he("h-hp").textContent=Math.ceil(e.hp),he("h-hpbar").style.width=e.hp/e.maxHp*100+"%",he("h-hpbox").classList.toggle("low",e.hp<30);let n=t.pending||t.current,s=t.state[n],r=vt[n];he("h-wname").textContent=r.name,he("h-ammo").textContent=t.reloading&&n!=="shotgun"?"\u2026":s.ammo,he("h-reserve").textContent=s.reserve===1/0?"\u221E":s.reserve,he("h-ammobox").classList.toggle("empty",s.ammo===0&&!t.reloading),he("h-ammobox").classList.toggle("lowammo",s.ammo>0&&s.ammo<=Math.ceil(r.mag/4)&&!t.reloading&&r.mag>1),he("h-nades").textContent=t.grenades,document.querySelectorAll(".slot[data-w]").forEach(o=>{let l=o.dataset.w;if(l==="nade"){o.classList.toggle("off",t.grenades<=0);return}if(l==="binoc"){o.hidden=!this.hasBinoc,o.classList.toggle("on",!!this.binoc);return}l==="sniper"&&(o.hidden=!t.owned.sniper),o.classList.toggle("on",l===n),o.classList.toggle("off",!t.hasAmmo(l))})}spawnTick(e){let t=this.waveCfg;if(this.waveState==="fight"){this.spawnT-=e;let i=this.zombies.alive.length;if(this.spawnT<=0&&this.spawned<t.total&&i<t.maxAlive){this.spawnT=t.interval*(.7+Math.random()*.6);let n=this.pickSpawn();n&&this.zombies.spawn(n,{...t,type:this.queue[this.spawned]||"normal"})&&(this.spawned++,this.updateHUD())}this.spawned>=t.total&&i===0&&(this.banner(`WELLE ${this.wave} \xDCBERSTANDEN`,"",1.7),setTimeout(()=>this.state==="play"&&this.quip(this.q("clear"),!0),1200),this.audio.waveClear(),this.player.hp=Math.min(this.player.maxHp,this.player.hp+15),this.updateHUD(),this.waveState="pre",this.breakT=2)}else if(this.waveState==="pre")this.breakT-=e,this.breakT<=0&&this.offerUpgrades();else if(this.waveState==="exit"){let i=this.level.exitPos,n=this.player,s=Math.hypot(n.pos.x-i.x,n.pos.z-i.z),r=he("nextwave");r.textContent=`Ausgang: ${Math.round(s)} m \u2013 folge der blauen Markierung`,r.classList.add("show"),s<(this.level.def.exitR||1.1)&&Math.abs(n.y-i.y)<1&&this.travel()}else if(this.waveState==="travel")this.updateTravel(e);else if(this.waveState==="break"){this.breakT-=e;let i=he("nextwave");i.textContent=`N\xE4chste Welle in ${Math.ceil(Math.max(0,this.breakT))} \u2026`,i.classList.toggle("show",this.breakT>.1),this.breakT<=0&&(i.classList.remove("show"),this.nextWave())}}offerUpgrades(){let e=Mu.filter(i=>(this.up[i.id]||0)<i.max);for(let i=e.length-1;i>0;i--){let n=Math.random()*(i+1)|0;[e[i],e[n]]=[e[n],e[i]]}if(this.offer=e.slice(0,3),!this.offer.length){this.afterUpgrade();return}let t=he("up-cards");t.innerHTML="",this.offer.forEach((i,n)=>{let s=this.up[i.id]||0,r=document.createElement("div");r.className="upcard",r.innerHTML=`<kbd>${n+1}</kbd><div class="ic">${i.icon}</div><b>${i.name}</b><p>${i.desc}</p><div class="pips">${'<i class="on"></i>'.repeat(s)}<i class="next"></i>${"<i></i>".repeat(i.max-s-1)}</div>`,r.addEventListener("click",()=>this.chooseUpgrade(n)),t.appendChild(r)}),he("upgrades").classList.add("show"),this.waveState="choose",this.chooseT=0}chooseUpgrade(e){if(this.waveState!=="choose"||!this.offer||!this.offer[e])return;let t=this.offer[e];this.up[t.id]=(this.up[t.id]||0)+1;let i=this.player,n=this.arsenal;t.id==="maxhp"&&(i.maxHp+=25,i.hp=i.maxHp),t.id==="reload"&&(n.reloadSpeed=1+.3*this.up.reload),t.id==="mag"&&(vt.pistol.mag+=6,vt.shotgun.mag+=3),t.id==="nades"&&(this.maxNades+=2,n.grenades=Math.min(this.maxNades,n.grenades+2)),t.id==="pellets"&&(vt.shotgun.pellets+=3),document.querySelectorAll(".upcard").forEach((r,o)=>r.classList.add(o===e?"picked":"gone")),setTimeout(()=>he("upgrades").classList.remove("show"),450),this.toast(`${t.name}${this.up[t.id]>1?" "+"I".repeat(this.up[t.id]):""}`),this.audio.upgrade(),this.offer=null,this.afterUpgrade(),this.updateHUD()}afterUpgrade(){if((this.wavesHere||0)>=a_[this.levelKey]){this.waveState="exit",this.level.setExit(!0),this.level.gate&&this.audio.gate();let e={halle:["AUSGANG OFFEN","Raus auf den Hof! Folge der blauen Markierung."],hof:["DAS TOR GEHT AUF","In der Nordmauer \u2013 durch den Gang geht es in die Stadt."],stadt:["AUSGANG OFFEN","Ganz im Norden geht es zur\xFCck in die Halle. Folge der blauen Markierung."]}[this.levelKey];setTimeout(()=>this.state==="play"&&this.waveState==="exit"&&this.banner(e[0],e[1],3.6),500);return}this.waveState="break",this.breakT=3.5}applyLevelEnv(){let e=this.level.def;this.scene.fog.density=e.fog,this.scene.fog.color.set(e.fogColor),this.scene.background.set(e.fogColor),this.camera.far=e.outdoor?400:140,this.camera.updateProjectionMatrix(),this.flashlight.intensity=e.flash||(e.outdoor?14:26),this.scene.environmentIntensity=e.envI||.12}switchLevel(e){let t=this.level;t.setExit(!1),t.group.visible=!1,this.level=this.levels[e],this.levelKey=e,this.level.group.visible=!0,this.level.flowCell=-1,this.level.resetBarrels(),this.fx.level=this.level,this.fx.reset(),this.zombies.reset(),this.proj.reset(),this.pickups.forEach(n=>{n.active=!1,n.holder.visible=!1}),this.minimap.setLevel(this.level),this.applyLevelEnv();let i=this.player;i.pos.set(this.level.playerStart.x,0,this.level.playerStart.z),i.y=this.level.playerStart.y,i.vel.set(0,0,0),i.vy=0,i.onGround=!0,i.yaw=this.level.def.startYaw,i.pitch=0,this.wavesHere=0}travel(){this.waveState="travel",this.travelT=0,this.binoc=!1,this.rmb=!1,he("fade").classList.add("on"),he("nextwave").classList.remove("show"),this.audio.whoosh()}updateTravel(e){if(this.travelT+=e,this.travelT>=.7&&!this._switched){this._switched=!0;let t=this.level.def.next||"halle";if(this.switchLevel(t),t==="hof"){let i=this.arsenal,n=!i.owned.sniper;i.owned.sniper=!0,this.hasBinoc=!0,n&&(i.state.sniper.ammo=vt.sniper.mag,i.state.sniper.reserve=10,i.select("sniper")),this.banner("DER HOF",n?rs?"Neu: Gewehr (unten in der Leiste, \u25CE = Zielfernrohr) \xB7 Fernglas":"Neu: Scharfsch\xFCtzengewehr (4, rechte Maustaste = Zielfernrohr) \xB7 Fernglas (B)":"Vom Dach aus hast du den \xDCberblick",4.5)}else t==="stadt"?this.banner("DIE STADT","Es d\xE4mmert. Die Nacht ist vorbei, die Zombies sind es nicht.",4.5):this.banner("DIE HALLE","Wieder drinnen \u2013 eng und laut",3)}this.travelT>=1&&(he("fade").classList.remove("on"),this._switched=!1,this.waveState="break",this.breakT=4.5,this.updateHUD())}pickSpawn(){let e=this.player.pos,t=this.level.spawns.map(s=>({s,d:s.distanceTo(e)})).filter(s=>s.d>(this.level.outdoor?22:10)).sort((s,r)=>s.d-r.d);if(!t.length)return null;let i=this.level.outdoor?t:t.slice(0,Math.min(4,t.length)),n=vu(i).s;return new R(n.x+(Math.random()-.5)*.8,0,n.z+(Math.random()-.5)*.8)}updatePlayer(e){let t=this.player;if(t.dead){t.deadT+=e,t.pitch+=(.5-t.pitch)*Math.min(1,e*2),t.deadT>2.4&&this.state==="play"&&this.gameOver();return}let i=this.keys,n=(i.KeyW||i.ArrowUp?1:0)-(i.KeyS||i.ArrowDown?1:0),s=(i.KeyD||i.ArrowRight?1:0)-(i.KeyA||i.ArrowLeft?1:0),r=1,o=this.touch;o&&o.move.mag>0&&!n&&!s&&(n=o.move.y,s=o.move.x,r=Math.max(.35,o.move.mag));let l=(this.scopeAmt||0)>.3||(this.binocAmt||0)>.3,c=(i.ShiftLeft||i.ShiftRight||o&&o.sprint)&&n>0&&!l,h=(c?7.6:5)*(1+.1*(this.up.speed||0))*(l?.45:1)*(c?1:r),u=-Math.sin(t.yaw),d=-Math.cos(t.yaw),f=Math.cos(t.yaw),m=-Math.sin(t.yaw),b=u*n+f*s,g=d*n+m*s,p=Math.hypot(b,g);p>0&&(b/=p,g/=p);let x=(p>0?14:10)*(t.onGround?1:.35);t.vel.x+=(b*h-t.vel.x)*Math.min(1,x*e),t.vel.z+=(g*h-t.vel.z)*Math.min(1,x*e),t.pos.x+=t.vel.x*e,t.pos.z+=t.vel.z*e,this.level.collide(t.pos,.36,t.y);for(let y of this.zombies.alive){if(Math.abs(t.y-y.root.position.y)>1.2)continue;let M=t.pos.x-y.root.position.x,A=t.pos.z-y.root.position.z,_=Math.hypot(M,A),T=.37+y.radius;_<T&&_>1e-4&&(t.pos.x=y.root.position.x+M/_*T,t.pos.z=y.root.position.z+A/_*T)}this.level.collide(t.pos,.36,t.y);let E=this.level.groundAt(t.pos.x,t.pos.z,.36,t.y);if(t.onGround&&E>t.y+.01&&E-t.y<.65)t.y=Math.min(E,t.y+e*7);else if(!t.onGround||t.y>E+.01)if(t.vy-=19*e,t.y+=t.vy*e,t.y<=E){let y=-t.vy;t.y=E,t.vy=0,t.onGround||(t.land=Math.min(1,y/9),this.audio.land(y/7)),t.onGround=!0}else t.onGround=!1;else t.y=E,t.vy=0,t.onGround=!0;t.land=Math.max(0,t.land-e*4);let v=Math.hypot(t.vel.x,t.vel.z);this.moving=t.onGround?Math.min(1,v/5):0,this.sprinting=c,t.onGround&&(t.bob+=v*e*1.25,t.stepAcc+=v*e,t.stepAcc>(c?2.1:1.75)&&(t.stepAcc=0,this.audio.step(c?.16:.11))),this.updatePickups(e)}updateZoom(e){let t=this.arsenal,i=this.state==="play"&&!this.player.dead;(t.current!=="sniper"||t.pending)&&(this.rmb=!1),i||(this.rmb=!1,this.binoc=!1);let n=this.rmb&&!this.binoc&&t.current==="sniper"&&!t.reloading&&!t.busy?1:0,s=this.binoc?1:0;this.scopeAmt=(this.scopeAmt||0)+(n-(this.scopeAmt||0))*Math.min(1,e*12),this.binocAmt=(this.binocAmt||0)+(s-(this.binocAmt||0))*Math.min(1,e*10),this.scopeAmt<.01&&(this.scopeAmt=0),this.binocAmt<.01&&(this.binocAmt=0);let r=74+(8.5-74)*this.scopeAmt+-58*this.binocAmt*(1-this.scopeAmt);Math.abs(this.camera.fov-r)>.01&&(this.camera.fov=r,this.camera.updateProjectionMatrix()),this.renderer.toneMappingExposure=1.15+.9*this.scopeAmt+.6*this.binocAmt*(1-this.scopeAmt);let o=this.keys.ShiftLeft||this.keys.ShiftRight||this.touch&&this.touch.hold;this.outOfBreath&&(this.breath=Math.min(1,(this.breath||0)+e*.35),this.breath>=1&&(this.outOfBreath=!1)),this.steady=!1,this.scopeAmt>.5&&o&&!this.outOfBreath?(this.steady=!0,this.breath=Math.max(0,(this.breath??1)-e/3.5),this.breath<=0&&(this.outOfBreath=!0)):this.outOfBreath||(this.breath=Math.min(1,(this.breath??1)+e*.5));let l=he("scope"),c=he("binoc");if(l.classList.toggle("on",this.scopeAmt>.85),c.classList.toggle("on",this.binocAmt>.85&&this.scopeAmt<.5),he("crosshair").style.opacity=this.scopeAmt>.3||this.binocAmt>.3?0:1,this.scopeAmt>.85||this.binocAmt>.85){let h=this.camera,u=h.getWorldPosition(new R),d=new R(0,0,-1).applyQuaternion(h.quaternion),m=new di(u,d,0,260).intersectObjects(this.level.colliders,!1)[0],b=m?m.distance:260,g=this.zombies.raycast(u,d,b),p=g?g.t:m?m.distance:null,x=p?`${Math.round(p)} m`:"\u2013 m";if(he("scope-range").textContent=x,he("binoc-range").textContent=x,he("scope-breath").style.width=Math.round((this.breath??1)*100)+"%",he("scope-breath").parentNode.classList.toggle("low",!!this.outOfBreath),this.binocAmt>.85&&this.scopeAmt<.5){let E=g?g.z:null;if(!E){let v=.035;for(let y of this.zombies.alive){let M=y.root.position.clone();M.y+=y.height*.6;let A=M.sub(u),_=A.length();A.normalize();let T=Math.acos(Math.min(1,A.dot(d)));T<v&&_<b+2&&(v=T,E=y)}}E&&!E.marked?(this._markTarget!==E&&(this._markTarget=E,this._markT=0),this._markT+=e,he("binoc-mark").textContent="Markiere \u2026",this._markT>.3&&(E.marked=!0,this.audio.mark(),this._markTarget=null)):(this._markTarget=null,he("binoc-mark").textContent=E&&E.marked?"Markiert: +30 % Schaden":"")}}}placeCamera(){let e=this.player,t=this.camera,i=Math.abs(Math.sin(e.bob*Math.PI*.5))*.055*(this.moving||0),n=Math.sin(e.bob*Math.PI*.25)*.03*(this.moving||0),s=e.y+1.62-(e.land||0)*.12;e.dead&&(s=Math.max(e.y+.35,e.y+1.62-e.deadT*1.4)),t.position.set(e.pos.x+Math.cos(e.yaw)*n,s+i,e.pos.z-Math.sin(e.yaw)*n);let r=e.shake*e.shake;t.rotation.order="YXZ";let o=(this.scopeAmt||0)*(this.steady?.12:this.outOfBreath?1.8:1),l=this.time||0,c=(Math.sin(l*.9)*.0035+Math.sin(l*2.3+1)*.0014)*o,h=(Math.sin(l*1.3+2)*.0028+Math.sin(l*3.1)*.001)*o;t.rotation.y=e.yaw+c+(Math.random()-.5)*r*.03,t.rotation.x=e.pitch+(e.kick||0)+h+(Math.random()-.5)*r*.03*(1-.8*(this.scopeAmt||0)),t.rotation.z=(e.dead?Math.min(.5,e.deadT*.4):0)+Math.sin(e.bob*Math.PI*.25)*.004*(this.moving||0)}frame(){let e=performance.now()/1e3,t=this._last?e-this._last:.016;this._last=e,t=Math.min(t,.05),!this.frozen&&(this.perf(t),this.update(t),this.composer.render(t))}sim(e,t=1/60){for(let i=0;i<e;i+=t)this.update(t);this.composer.render(t)}update(e){this.time+=e;let t=this.state==="play";if(t){this.updatePlayer(e),this.spawnTick(e),this.zombies.update(e,this.player),this.proj.update(e);let c=this.arsenal;if(this.mouseDown&&c.cooldown<=0&&!c.reloading){this._holdT=(this._holdT||0)+e;let h=c.current==="pistol"?.26:.05;this._holdT>h&&(this._holdT=0,this.tryFire())}else this._holdT=0;c.st.ammo===0&&c.st.reserve>0&&!c.reloading&&c.pumpT<=0&&c.cooldown<=0&&!c.busy&&this.reload(),this.quipCD-=e,this.player.shake=Math.max(0,this.player.shake-e*3);{let h=this.player;h.kick=h.kick||0,h.kickV=h.kickV||0,h.kickV+=(-160*h.kick-25*h.kickV)*e,h.kick+=h.kickV*e,Math.abs(h.kick)<1e-5&&Math.abs(h.kickV)<1e-4&&(h.kick=0,h.kickV=0)}this.damageFx=Math.max(0,this.damageFx-e*1.3),this.flashFx=Math.max(0,this.flashFx-e*3),(this._hudT===void 0||(this._hudT-=e)<0)&&(this._hudT=.1,this.updateHUD()),this.minimap.draw(this)}else this.state==="menu"&&(this.player.yaw+=e*.08,this.player.pitch=-.05);if(this.placeCamera(),this.level.update(this.time,this.camera.position),this.fx.update(t||this.state==="over"?e:e*.3),this.muzzleT>0){this.muzzleT-=e;let c=new R(.25,-.1,-.8).applyMatrix4(this.camera.matrixWorld);this.muzzleLight.position.copy(c),this.muzzleLight.intensity=(this.arsenal.current==="pistol"?9:16)*Math.max(0,this.muzzleT/.06)}else this.muzzleLight.intensity=0;for(let c of this.boomLights)c.t>0?(c.t-=e,c.l.intensity=90*Math.max(0,c.t/.45)**1.5):c.l.intensity=0;let i=this.level.lightAt(this.camera.position)*.06+(this.level.def.ambient||0)+(this.muzzleT>0?1.5:0)+this.flashFx*2;this.fx.setLight(Math.min(1.5,i));let n=this.events;n.length=0,this.arsenal.update(e,{moving:t&&this.moving||0,sprint:this.sprinting,bobPhase:this.player.bob*Math.PI*.5,lookDX:this.look.dx,lookDY:this.look.dy,light:i,time:this.time},n);for(let c of n)c==="pumpBack"&&this.audio.pump(!0),c==="boltBack"&&this.audio.bolt(!0),c==="boltFwd"&&this.audio.bolt(!1),c==="pumpFwd"&&this.audio.pump(!1),c==="shellIn"&&this.audio.shellIn(),c==="nadeRelease"&&this.releaseGrenade(),c==="switched"&&this.updateHUD();if(this.look.dx=0,this.look.dy=0,this.updateZoom(e),this.touch&&this.touch.update(),this.arsenal.rig.visible=this.state!=="menu"&&!this.player.dead&&this.scopeAmt<.6&&this.binocAmt<.4,this.tracers)for(let c of this.tracers)c.t=Math.max(0,c.t-e),c.l.material.opacity=c.t/.18*.9;if(this.audio.ready){let c=new R(0,0,-1).applyQuaternion(this.camera.quaternion),h=new R(0,1,0).applyQuaternion(this.camera.quaternion);this.audio.setListener(this.camera.position,c,h)}let s=this.arsenal,o=(s.current==="shotgun"?14:s.current==="rocket"?9:5)+(this.moving||0)*6+(s.cooldown>.08?4:0)+(this.player.onGround?0:6);he("crosshair").style.setProperty("--gap",o.toFixed(1)+"px");let l=this.post.uniforms;l.uTime.value=this.time,l.uDamage.value=this.damageFx,l.uFlash.value=this.flashFx||0,l.uLow.value=this.player.hp<35&&!this.player.dead?(35-this.player.hp)/35:this.player.dead?1:0}perf(e){if(this.state!=="play")return;let t=this.frameTimes;if(t.push(e),t.length<90)return;let i=t.reduce((s,r)=>s+r,0)/t.length;t.length=0;let n=this.dynScale;i>1/45?n=Math.max(.55,n-.12):i<1/75&&(n=Math.min(1,n+.06)),n!==this.dynScale&&(this.dynScale=n,this.resize())}},o_=new Su;o_.init().catch(a=>{console.error(a),he("loadtxt").textContent="Fehler beim Laden \u2013 bitte Seite neu laden."});
