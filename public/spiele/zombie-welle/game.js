var bd=0,Vl=1,xd=2;var _s=1,vd=2,pr=3,Qn=0,Ut=1,un=2,An=0,qi=1,Jt=2,Wl=3,ql=4,_d=5;var ys=100,yd=101,Md=102,Sd=103,Td=104,Ed=200,wd=201,Ad=202,Rd=203,Xl=204,jl=205,Cd=206,Pd=207,Id=208,Ld=209,Dd=210,Fd=211,Nd=212,Ud=213,kd=214,yo=0,Mo=1,So=2,$s=3,To=4,Eo=5,wo=6,Ao=7,jo=0,Od=1,Bd=2,Gn=0,fa=1,pa=2,ma=3,Ms=4,ga=5,ba=6,xa=7,Dl="attached",Hd="detached",Kl=300,Xi=301,Ss=302,Ko=303,Yo=304,va=306,xn=1e3,En=1001,Qs=1002,At=1003,Jo=1004;var Ts=1005;var Lt=1006,mr=1007;var Vn=1008;var mn=1009,Yl=1010,Jl=1011,gr=1012,Zo=1013,Wn=1014,_n=1015,Wt=1016,$o=1017,Qo=1018,br=1020,Zl=35902,$l=35899,Ql=1021,eh=1022,yn=1023,Yn=1026,ji=1027,ec=1028,tc=1029,Ki=1030,nc=1031;var ic=1033,_a=33776,ya=33777,Ma=33778,Sa=33779,sc=35840,rc=35841,ac=35842,oc=35843,cc=36196,lc=37492,hc=37496,uc=37488,dc=37489,Ta=37490,fc=37491,pc=37808,mc=37809,gc=37810,bc=37811,xc=37812,vc=37813,_c=37814,yc=37815,Mc=37816,Sc=37817,Tc=37818,Ec=37819,wc=37820,Ac=37821,Rc=36492,Cc=36494,Pc=36495,Ic=36283,Lc=36284,Ea=36285,Dc=36286,Yi=2200,zd=2201,Gd=2202,hs=2300,us=2301,xo=2302,Fl=2303,os=2400,cs=2401,jr=2402,Fc=2500,Vd=2501,th=0,wa=1,xr=2,Wd=3200;var Aa=0,qd=1,Ti="",tt="srgb",cn="srgb-linear",Kr="linear",rt="srgb";var vo=7680;var Xd=519,jd=512,Kd=513,Yd=514,Nc=515,Jd=516,Zd=517,Uc=518,$d=519,nh=35044,Ei=35048;var ih="300 es",kn=2e3,er=2001;function cp(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function lp(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function tr(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Qd(){let a=tr("canvas");return a.style.display="block",a}var Pu={},nr=null;function Yr(...a){let e="THREE."+a.shift();nr?nr("log",e,...a):console.log(e,...a)}function ef(a){let e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function Re(...a){a=ef(a);let e="THREE."+a.shift();if(nr)nr("warn",e,...a);else{let t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function Ue(...a){a=ef(a);let e="THREE."+a.shift();if(nr)nr("error",e,...a);else{let t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function ls(...a){let e=a.join(" ");e in Pu||(Pu[e]=!0,Re(...a))}function tf(a,e,t){return new Promise(function(n,i){function s(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:i();break;case a.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var nf={[yo]:Mo,[So]:wo,[To]:Ao,[$s]:Eo,[Mo]:yo,[wo]:So,[Ao]:To,[Eo]:$s},Bn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Iu=1234567,qr=Math.PI/180,ds=180/Math.PI;function On(){let a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[a&255]+Qt[a>>8&255]+Qt[a>>16&255]+Qt[a>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function $e(a,e,t){return Math.max(e,Math.min(t,a))}function sh(a,e){return(a%e+e)%e}function hp(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function up(a,e,t){return a!==e?(t-a)/(e-a):0}function Xr(a,e,t){return(1-t)*a+t*e}function dp(a,e,t,n){return Xr(a,e,1-Math.exp(-t*n))}function fp(a,e=1){return e-Math.abs(sh(a,e*2)-e)}function pp(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function mp(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function gp(a,e){return a+Math.floor(Math.random()*(e-a+1))}function bp(a,e){return a+Math.random()*(e-a)}function xp(a){return a*(.5-Math.random())}function vp(a){a!==void 0&&(Iu=a);let e=Iu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _p(a){return a*qr}function yp(a){return a*ds}function Mp(a){return a>0&&Number.isInteger(a)&&2**Math.round(Math.log2(a))===a}function Sp(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Tp(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Ep(a,e,t,n,i){let s=Math.cos,r=Math.sin,o=s(t/2),c=r(t/2),l=s((e+n)/2),h=r((e+n)/2),u=s((e-n)/2),d=r((e-n)/2),f=s((n-e)/2),m=r((n-e)/2);switch(i){case"XYX":a.set(o*h,c*u,c*d,o*l);break;case"YZY":a.set(c*d,o*h,c*u,o*l);break;case"ZXZ":a.set(c*u,c*d,o*h,o*l);break;case"XZX":a.set(o*h,c*m,c*f,o*l);break;case"YXY":a.set(c*f,o*h,c*m,o*l);break;case"ZYZ":a.set(c*m,c*f,o*h,o*l);break;default:Re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Un(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:case Uint8ClampedArray:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ut(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var rh={DEG2RAD:qr,RAD2DEG:ds,generateUUID:On,clamp:$e,euclideanModulo:sh,mapLinear:hp,inverseLerp:up,lerp:Xr,damp:dp,pingpong:fp,smoothstep:pp,smootherstep:mp,randInt:gp,randFloat:bp,randFloatSpread:xp,seededRandom:vp,degToRad:_p,radToDeg:yp,isPowerOfTwo:Mp,ceilPowerOfTwo:Sp,floorPowerOfTwo:Tp,setQuaternionFromProperEuler:Ep,normalize:ut,denormalize:Un},hh=class hh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hh.prototype.isVector2=!0;var xe=hh,zt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=s[r+0],f=s[r+1],m=s[r+2],b=s[r+3];if(u!==b||c!==d||l!==f||h!==m){let g=c*d+l*f+h*m+u*b;g<0&&(d=-d,f=-f,m=-m,b=-b,g=-g);let p=1-o;if(g<.9995){let x=Math.acos(g),T=Math.sin(x);p=Math.sin(p*x)/T,o=Math.sin(o*x)/T,c=c*p+d*o,l=l*p+f*o,h=h*p+m*o,u=u*p+b*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+m*o,u=u*p+b*o;let x=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=x,l*=x,h*=x,u*=x}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,r){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[r],d=s[r+1],f=s[r+2],m=s[r+3];return e[t]=o*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-o*f,e[t+2]=l*m+h*f+o*d-c*u,e[t+3]=h*m-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),d=c(n/2),f=c(i/2),m=c(s/2);switch(r){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(r-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(s-l)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(r-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,r=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+r*o+i*l-s*c,this._y=i*h+r*c+s*o-n*l,this._z=s*h+r*l+n*c-i*o,this._w=r*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,r=-r,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+r*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},uh=class uh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,c=e.w,l=2*(r*i-o*n),h=2*(o*t-s*i),u=2*(s*n-r*t);return this.x=t+c*l+r*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,r=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*r-n*c,this.z=n*o-i*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return cl.copy(this).projectOnVector(e),this.sub(cl)}reflect(e){return this.sub(cl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uh.prototype.isVector3=!0;var R=uh,cl=new R,Lu=new zt,dh=class dh{constructor(e,t,n,i,s,r,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,o,c,l)}set(e,t,n,i,s,r,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],b=i[0],g=i[3],p=i[6],x=i[1],T=i[4],v=i[7],y=i[2],S=i[5],A=i[8];return s[0]=r*b+o*x+c*y,s[3]=r*g+o*T+c*S,s[6]=r*p+o*v+c*A,s[1]=l*b+h*x+u*y,s[4]=l*g+h*T+u*S,s[7]=l*p+h*v+u*A,s[2]=d*b+f*x+m*y,s[5]=d*g+f*T+m*S,s[8]=d*p+f*v+m*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*r*h-t*o*l-n*s*h+n*o*c+i*s*l-i*r*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*r-o*l,d=o*c-h*s,f=l*s-r*c,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return e[0]=u*b,e[1]=(i*l-h*n)*b,e[2]=(o*n-i*r)*b,e[3]=d*b,e[4]=(h*t-i*c)*b,e[5]=(i*s-o*t)*b,e[6]=f*b,e[7]=(n*c-l*t)*b,e[8]=(r*t-n*s)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*r+l*o)+r+e,-i*l,i*c,-i*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ll.makeScale(e,t)),this}rotate(e){return ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ll.makeRotation(-e)),this}translate(e,t){return ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ll.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};dh.prototype.isMatrix3=!0;var He=dh,ll=new He,Du=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fu=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wp(){let a={enabled:!0,workingColorSpace:cn,spaces:{},convert:function(i,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===rt&&(i.r=ui(i.r),i.g=ui(i.g),i.b=ui(i.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===rt&&(i.r=Zs(i.r),i.g=Zs(i.g),i.b=Zs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ti?Kr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,r){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return ls("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return ls("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return a.define({[cn]:{primaries:e,whitePoint:n,transfer:Kr,toXYZ:Du,fromXYZ:Fu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:tt},outputColorSpaceConfig:{drawingBufferColorSpace:tt}},[tt]:{primaries:e,whitePoint:n,transfer:rt,toXYZ:Du,fromXYZ:Fu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:tt}}}),a}var We=wp();function ui(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Zs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}var Ds,Ro=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ds===void 0&&(Ds=tr("canvas")),Ds.width=e.width,Ds.height=e.height;let i=Ds.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ds}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=tr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=ui(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ui(t[n]/255)*255):t[n]=ui(t[n]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ap=0,ir=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(hl(i[r].image)):s.push(hl(i[r]))}else s=hl(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function hl(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Ro.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}var Rp=0,ul=new R,Vt=class a extends Bn{constructor(e=a.DEFAULT_IMAGE,t=a.DEFAULT_MAPPING,n=En,i=En,s=Lt,r=Vn,o=yn,c=mn,l=a.DEFAULT_ANISOTROPY,h=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=On(),this.name="",this.source=new ir(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ul).x}get height(){return this.source.getSize(ul).y}get depth(){return this.source.getSize(ul).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xn:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case Qs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xn:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case Qs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Kl;Vt.DEFAULT_ANISOTROPY=1;var fh=class fh{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],b=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,v=(f+1)/2,y=(p+1)/2,S=(h+d)/4,A=(u+b)/4,_=(m+g)/4;return T>v&&T>y?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=S/n,s=A/n):v>y?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=S/i,s=_/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=A/s,i=_/s),this.set(n,i,s,t),this}let x=Math.sqrt((g-m)*(g-m)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-b)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fh.prototype.isVector4=!0;var dt=fh,Co=class extends Bn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},s=new Vt(i),r=n.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new ir(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pt=class extends Co{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Jr=class extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Po=class extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Xo=class Xo{constructor(e,t,n,i,s,r,o,c,l,h,u,d,f,m,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,o,c,l,h,u,d,f,m,b,g)}set(e,t,n,i,s,r,o,c,l,h,u,d,f,m,b,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xo().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Fs.setFromMatrixColumn(e,0).length(),s=1/Fs.setFromMatrixColumn(e,1).length(),r=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=r*h,f=r*u,m=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-b*l,t[9]=-o*c,t[2]=b-d*l,t[6]=m+f*l,t[10]=r*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,m=l*h,b=l*u;t[0]=d+b*o,t[4]=m*o-f,t[8]=r*l,t[1]=r*u,t[5]=r*h,t[9]=-o,t[2]=f*o-m,t[6]=b+d*o,t[10]=r*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,m=l*h,b=l*u;t[0]=d-b*o,t[4]=-r*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=r*h,t[9]=b-d*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){let d=r*h,f=r*u,m=o*h,b=o*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+b,t[1]=c*u,t[5]=b*l+d,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){let d=r*c,f=r*l,m=o*c,b=o*l;t[0]=c*h,t[4]=b-d*u,t[8]=m*u+f,t[1]=u,t[5]=r*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-b*u}else if(e.order==="XZY"){let d=r*c,f=r*l,m=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+b,t[5]=r*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cp,e,Pp)}lookAt(e,t,n){let i=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Li.crossVectors(n,gn),Li.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Li.crossVectors(n,gn)),Li.normalize(),Va.crossVectors(gn,Li),i[0]=Li.x,i[4]=Va.x,i[8]=gn.x,i[1]=Li.y,i[5]=Va.y,i[9]=gn.y,i[2]=Li.z,i[6]=Va.z,i[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],b=n[6],g=n[10],p=n[14],x=n[3],T=n[7],v=n[11],y=n[15],S=i[0],A=i[4],_=i[8],w=i[12],C=i[1],P=i[5],D=i[9],F=i[13],L=i[2],N=i[6],H=i[10],X=i[14],B=i[3],G=i[7],K=i[11],$=i[15];return s[0]=r*S+o*C+c*L+l*B,s[4]=r*A+o*P+c*N+l*G,s[8]=r*_+o*D+c*H+l*K,s[12]=r*w+o*F+c*X+l*$,s[1]=h*S+u*C+d*L+f*B,s[5]=h*A+u*P+d*N+f*G,s[9]=h*_+u*D+d*H+f*K,s[13]=h*w+u*F+d*X+f*$,s[2]=m*S+b*C+g*L+p*B,s[6]=m*A+b*P+g*N+p*G,s[10]=m*_+b*D+g*H+p*K,s[14]=m*w+b*F+g*X+p*$,s[3]=x*S+T*C+v*L+y*B,s[7]=x*A+T*P+v*N+y*G,s[11]=x*_+T*D+v*H+y*K,s[15]=x*w+T*F+v*X+y*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],b=e[7],g=e[11],p=e[15],x=c*f-l*d,T=o*f-l*u,v=o*d-c*u,y=r*f-l*h,S=r*d-c*h,A=r*u-o*h;return t*(b*x-g*T+p*v)-n*(m*x-g*y+p*S)+i*(m*T-b*y+p*A)-s*(m*v-b*S+g*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],r=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(r*h-o*l)-n*(s*h-o*c)+i*(s*l-r*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],b=e[13],g=e[14],p=e[15],x=t*o-n*r,T=t*c-i*r,v=t*l-s*r,y=n*c-i*o,S=n*l-s*o,A=i*l-s*c,_=h*b-u*m,w=h*g-d*m,C=h*p-f*m,P=u*g-d*b,D=u*p-f*b,F=d*p-f*g,L=x*F-T*D+v*P+y*C-S*w+A*_;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/L;return e[0]=(o*F-c*D+l*P)*N,e[1]=(i*D-n*F-s*P)*N,e[2]=(b*A-g*S+p*y)*N,e[3]=(d*S-u*A-f*y)*N,e[4]=(c*C-r*F-l*w)*N,e[5]=(t*F-i*C+s*w)*N,e[6]=(g*v-m*A-p*T)*N,e[7]=(h*A-d*v+f*T)*N,e[8]=(r*D-o*C+l*_)*N,e[9]=(n*C-t*D-s*_)*N,e[10]=(m*S-b*v+p*x)*N,e[11]=(u*v-h*S-f*x)*N,e[12]=(o*w-r*P-c*_)*N,e[13]=(t*P-n*w+i*_)*N,e[14]=(b*T-m*y-g*x)*N,e[15]=(h*y-u*T+d*x)*N,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,o=e.y,c=e.z,l=s*r,h=s*o;return this.set(l*r+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*r,0,l*c-i*o,h*c+i*r,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,r=t._y,o=t._z,c=t._w,l=s+s,h=r+r,u=o+o,d=s*l,f=s*h,m=s*u,b=r*h,g=r*u,p=o*u,x=c*l,T=c*h,v=c*u,y=n.x,S=n.y,A=n.z;return i[0]=(1-(b+p))*y,i[1]=(f+v)*y,i[2]=(m-T)*y,i[3]=0,i[4]=(f-v)*S,i[5]=(1-(d+p))*S,i[6]=(g+x)*S,i[7]=0,i[8]=(m+T)*A,i[9]=(g-x)*A,i[10]=(1-(d+b))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let r=Fs.set(i[0],i[1],i[2]).length(),o=Fs.set(i[4],i[5],i[6]).length(),c=Fs.set(i[8],i[9],i[10]).length();s<0&&(r=-r),Ln.copy(this);let l=1/r,h=1/o,u=1/c;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,t.setFromRotationMatrix(Ln),n.x=r,n.y=o,n.z=c,this}makePerspective(e,t,n,i,s,r,o=kn,c=!1){let l=this.elements,h=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),m,b;if(c)m=s/(r-s),b=r*s/(r-s);else if(o===kn)m=-(r+s)/(r-s),b=-2*r*s/(r-s);else if(o===er)m=-r/(r-s),b=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,r,o=kn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),m,b;if(c)m=1/(r-s),b=r/(r-s);else if(o===kn)m=-2/(r-s),b=-(r+s)/(r-s);else if(o===er)m=-1/(r-s),b=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Xo.prototype.isMatrix4=!0;var Oe=Xo,Fs=new R,Ln=new Oe,Cp=new R(0,0,0),Pp=new R(1,1,1),Li=new R,Va=new R,gn=new R,Nu=new Oe,Uu=new zt,Yt=class a{constructor(e=0,t=0,n=0,i=a.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],r=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$e(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Nu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uu.setFromEuler(this),this.setFromQuaternion(Uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yt.DEFAULT_ORDER="XYZ";var sr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ip=0,ku=new R,Ns=new zt,si=new Oe,Wa=new R,Fr=new R,Lp=new R,Dp=new zt,Ou=new R(1,0,0),Bu=new R(0,1,0),Hu=new R(0,0,1),zu={type:"added"},Fp={type:"removed"},Us={type:"childadded",child:null},dl={type:"childremoved",child:null},at=class a extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=a.DEFAULT_UP.clone();let e=new R,t=new Yt,n=new zt,i=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Oe},normalMatrix:{value:new He}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=a.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=a.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(Ou,e)}rotateY(e){return this.rotateOnAxis(Bu,e)}rotateZ(e){return this.rotateOnAxis(Hu,e)}translateOnAxis(e,t){return ku.copy(e).applyQuaternion(this.quaternion),this.position.add(ku.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ou,e)}translateY(e){return this.translateOnAxis(Bu,e)}translateZ(e){return this.translateOnAxis(Hu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wa.copy(e):Wa.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Fr,Wa,this.up):si.lookAt(Wa,Fr,this.up),this.quaternion.setFromRotationMatrix(si),i&&(si.extractRotation(i.matrixWorld),Ns.setFromRotationMatrix(si),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ue("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zu),Us.child=e,this.dispatchEvent(Us),Us.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fp),dl.child=e,this.dispatchEvent(dl),dl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zu),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,e,Lp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,Dp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){let o=r(e.geometries),c=r(e.materials),l=r(e.textures),h=r(e.images),u=r(e.shapes),d=r(e.skeletons),f=r(e.animations),m=r(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function r(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};at.DEFAULT_UP=new R(0,1,0);at.DEFAULT_MATRIX_AUTO_UPDATE=!0;at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Be=class extends at{constructor(){super(),this.isGroup=!0,this.type="Group"}},Np={type:"move"},rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,n),p=this._getHandJoint(l,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Np)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Be;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},qa={h:0,s:0,l:0};function fl(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}var se=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=We.workingColorSpace){if(e=sh(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=fl(r,s,e+1/3),this.g=fl(r,s,e),this.b=fl(r,s,e-1/3)}return We.colorSpaceToWorking(this,i),this}setStyle(e,t=tt){function n(s){s!==void 0&&parseFloat(s)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tt){let n=sf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tt){return We.workingToColorSpace(en.copy(this),e),Math.round($e(en.r*255,0,255))*65536+Math.round($e(en.g*255,0,255))*256+Math.round($e(en.b*255,0,255))}getHexString(e=tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(en.copy(this),t);let n=en.r,i=en.g,s=en.b,r=Math.max(n,i,s),o=Math.min(n,i,s),c,l,h=(o+r)/2;if(o===r)c=0,l=0;else{let u=r-o;switch(l=h<=.5?u/(r+o):u/(2-r-o),r){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=tt){We.workingToColorSpace(en.copy(this),e);let t=en.r,n=en.g,i=en.b;return e!==tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(qa);let n=Xr(Di.h,qa.h,t),i=Xr(Di.s,qa.s,t),s=Xr(Di.l,qa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new se;se.NAMES=sf;var Zr=class a{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new se(e),this.density=t}clone(){return new a(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var di=class extends at{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yt,this.environmentIntensity=1,this.environmentRotation=new Yt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Dn=new R,ri=new R,pl=new R,ai=new R,ks=new R,Os=new R,Gu=new R,ml=new R,gl=new R,bl=new R,xl=new dt,vl=new dt,_l=new dt,hi=class a{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Dn.subVectors(e,t),i.cross(Dn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Dn.subVectors(i,t),ri.subVectors(n,t),pl.subVectors(e,t);let r=Dn.dot(Dn),o=Dn.dot(ri),c=Dn.dot(pl),l=ri.dot(ri),h=ri.dot(pl),u=r*l-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,m=(r*h-o*c)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,n,i,s,r,o,c){return this.getBarycoord(e,t,n,i,ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ai.x),c.addScaledVector(r,ai.y),c.addScaledVector(o,ai.z),c)}static getInterpolatedAttribute(e,t,n,i,s,r){return xl.setScalar(0),vl.setScalar(0),_l.setScalar(0),xl.fromBufferAttribute(e,t),vl.fromBufferAttribute(e,n),_l.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(xl,s.x),r.addScaledVector(vl,s.y),r.addScaledVector(_l,s.z),r}static isFrontFacing(e,t,n,i){return Dn.subVectors(n,t),ri.subVectors(e,t),Dn.cross(ri).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Dn.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return a.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return a.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return a.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return a.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return a.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,r,o;ks.subVectors(i,n),Os.subVectors(s,n),ml.subVectors(e,n);let c=ks.dot(ml),l=Os.dot(ml);if(c<=0&&l<=0)return t.copy(n);gl.subVectors(e,i);let h=ks.dot(gl),u=Os.dot(gl);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),t.copy(n).addScaledVector(ks,r);bl.subVectors(e,s);let f=ks.dot(bl),m=Os.dot(bl);if(m>=0&&f<=m)return t.copy(s);let b=f*l-c*m;if(b<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(Os,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Gu.subVectors(s,i),o=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(Gu,o);let p=1/(g+b+d);return r=b*p,o=d*p,t.copy(n).addScaledVector(ks,r).addScaledVector(Os,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ln=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Fn):Fn.fromBufferAttribute(s,r),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xa.copy(n.boundingBox)),Xa.applyMatrix4(e.matrixWorld),this.union(Xa)}let i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),ja.subVectors(this.max,Nr),Bs.subVectors(e.a,Nr),Hs.subVectors(e.b,Nr),zs.subVectors(e.c,Nr),Fi.subVectors(Hs,Bs),Ni.subVectors(zs,Hs),is.subVectors(Bs,zs);let t=[0,-Fi.z,Fi.y,0,-Ni.z,Ni.y,0,-is.z,is.y,Fi.z,0,-Fi.x,Ni.z,0,-Ni.x,is.z,0,-is.x,-Fi.y,Fi.x,0,-Ni.y,Ni.x,0,-is.y,is.x,0];return!yl(t,Bs,Hs,zs,ja)||(t=[1,0,0,0,1,0,0,0,1],!yl(t,Bs,Hs,zs,ja))?!1:(Ka.crossVectors(Fi,Ni),t=[Ka.x,Ka.y,Ka.z],yl(t,Bs,Hs,zs,ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},oi=[new R,new R,new R,new R,new R,new R,new R,new R],Fn=new R,Xa=new ln,Bs=new R,Hs=new R,zs=new R,Fi=new R,Ni=new R,is=new R,Nr=new R,ja=new R,Ka=new R,ss=new R;function yl(a,e,t,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){ss.fromArray(a,s);let o=i.x*Math.abs(ss.x)+i.y*Math.abs(ss.y)+i.z*Math.abs(ss.z),c=e.dot(ss),l=t.dot(ss),h=n.dot(ss);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Ht=new R,Ya=new xe,Up=0,St=class extends Bn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Up++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nh,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ya.fromBufferAttribute(this,t),Ya.applyMatrix3(e),this.setXY(t,Ya.x,Ya.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var $r=class extends St{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Qr=class extends St{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ge=class extends St{constructor(e,t,n){super(new Float32Array(e),t,n)}},kp=new ln,Ur=new R,Ml=new R,tn=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):kp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);let t=Ur.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ur,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ml.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(Ml)),this.expandByPoint(Ur.copy(e.center).sub(Ml))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Op=0,Tn=new Oe,Sl=new at,Gs=new R,bn=new ln,kr=new ln,Kt=new R,it=class a extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cp(e)?Qr:$r)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return Sl.lookAt(e),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ge(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){let o=t[s];kr.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(bn.min,kr.min),bn.expandByPoint(Kt),Kt.addVectors(bn.max,kr.max),bn.expandByPoint(Kt)):(bn.expandByPoint(kr.min),bn.expandByPoint(kr.max))}bn.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)Kt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Kt));if(t)for(let s=0,r=t.length;s<r;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Kt.fromBufferAttribute(o,l),c&&(Gs.fromBufferAttribute(e,l),Kt.add(Gs)),i=Math.max(i,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new St(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));let o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new R,c[_]=new R;let l=new R,h=new R,u=new R,d=new xe,f=new xe,m=new xe,b=new R,g=new R;function p(_,w,C){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,C),d.fromBufferAttribute(s,_),f.fromBufferAttribute(s,w),m.fromBufferAttribute(s,C),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(b.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(P),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),o[_].add(b),o[w].add(b),o[C].add(b),c[_].add(g),c[w].add(g),c[C].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let _=0,w=x.length;_<w;++_){let C=x[_],P=C.start,D=C.count;for(let F=P,L=P+D;F<L;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let T=new R,v=new R,y=new R,S=new R;function A(_){y.fromBufferAttribute(i,_),S.copy(y);let w=o[_];T.copy(w),T.sub(y.multiplyScalar(y.dot(w))).normalize(),v.crossVectors(S,w);let P=v.dot(c[_])<0?-1:1;r.setXYZW(_,T.x,T.y,T.z,P)}for(let _=0,w=x.length;_<w;++_){let C=x[_],P=C.start,D=C.count;for(let F=P,L=P+D;F<L;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new R,s=new R,r=new R,o=new R,c=new R,l=new R,h=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),b=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,b),r.fromBufferAttribute(t,g),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let b=0,g=c.length;b<g;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new St(d,h,u)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new a,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,c=r.length;o<c;o++){let l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let l=0,h=r.length;l<h;l++){let u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},fs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nh,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},on=new R,Oi=class a{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Yr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new St(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new a(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Yr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Tl=new R,Bp=new R,Hp=new He,Nn=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Tl.subVectors(n,t).cross(Bp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Tl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Hp.getNormalMatrix(e),i=this.coplanarPoint(Tl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},zp=0,nn=class extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=On(),this.name="",this.type="Material",this.blending=qi,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xl,this.blendDst=jl,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vo,this.stencilZFail=vo,this.stencilZPass=vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let r=[];for(let o in s){let c=s[o];delete c.metadata,r.push(c)}return r}if(t){let s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new se().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Nn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new xe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Bi=class extends nn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vs,Or=new R,Ws=new R,qs=new R,Xs=new xe,Br=new xe,rf=new Oe,Ja=new R,Hr=new R,Za=new R,Vu=new xe,El=new xe,Wu=new xe,ps=class extends at{constructor(e=new Bi){if(super(),this.isSprite=!0,this.type="Sprite",Vs===void 0){Vs=new it;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new fs(t,5);Vs.setIndex([0,1,2,0,2,3]),Vs.setAttribute("position",new Oi(n,3,0,!1)),Vs.setAttribute("uv",new Oi(n,2,3,!1))}this.geometry=Vs,this.material=e,this.center=new xe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ws.setFromMatrixScale(this.matrixWorld),rf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ws.multiplyScalar(-qs.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let r=this.center;$a(Ja.set(-.5,-.5,0),qs,r,Ws,i,s),$a(Hr.set(.5,-.5,0),qs,r,Ws,i,s),$a(Za.set(.5,.5,0),qs,r,Ws,i,s),Vu.set(0,0),El.set(1,0),Wu.set(1,1);let o=e.ray.intersectTriangle(Ja,Hr,Za,!1,Or);if(o===null&&($a(Hr.set(-.5,.5,0),qs,r,Ws,i,s),El.set(0,1),o=e.ray.intersectTriangle(Ja,Za,Hr,!1,Or),o===null))return;let c=e.ray.origin.distanceTo(Or);c<e.near||c>e.far||t.push({distance:c,point:Or.clone(),uv:hi.getInterpolation(Or,Ja,Hr,Za,Vu,El,Wu,new xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function $a(a,e,t,n,i,s){Xs.subVectors(a,t).addScalar(.5).multiply(n),i!==void 0?(Br.x=s*Xs.x-i*Xs.y,Br.y=i*Xs.x+s*Xs.y):Br.copy(Xs),a.copy(e),a.x+=Br.x,a.y+=Br.y,a.applyMatrix4(rf)}var ci=new R,wl=new R,Qa=new R,eo=new R,Hi=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){wl.copy(e).add(t).multiplyScalar(.5),Qa.copy(t).sub(e).normalize(),eo.copy(this.origin).sub(wl);let s=e.distanceTo(t)*.5,r=-this.direction.dot(Qa),o=eo.dot(this.direction),c=-eo.dot(Qa),l=eo.lengthSq(),h=Math.abs(1-r*r),u,d,f,m;if(h>0)if(u=r*c-o,d=r*o-c,m=s*h,u>=0)if(d>=-m)if(d<=m){let b=1/h;u*=b,d*=b,f=u*(u+r*d+2*o)+d*(r*u+d+2*c)+l}else d=s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-r*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(r*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=r>0?-s:s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(wl).addScaledVector(Qa,d),f}intersectSphere(e,t){if(e.radius<0)return null;ci.subVectors(e.center,this.origin);let n=ci.dot(this.direction),i=ci.dot(ci)-n*n,s=e.radius*e.radius;if(i>s)return null;let r=Math.sqrt(s-i),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,i,s){let r=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-r.x,d=e.y-r.y,f=e.z-r.z,m=t.x-r.x,b=t.y-r.y,g=t.z-r.z,p=n.x-r.x,x=n.y-r.y,T=n.z-r.z,v=Math.abs(c),y=Math.abs(l),S=Math.abs(h),A,_,w,C,P,D,F,L,N,H,X,B;if(v>=y&&v>=S?(w=c,D=u,N=m,B=p,c>=0?(A=l,_=h,C=d,P=f,F=b,L=g,H=x,X=T):(A=h,_=l,C=f,P=d,F=g,L=b,H=T,X=x)):y>=S?(w=l,D=d,N=b,B=x,l>=0?(A=h,_=c,C=f,P=u,F=g,L=m,H=T,X=p):(A=c,_=h,C=u,P=f,F=m,L=g,H=p,X=T)):(w=h,D=f,N=g,B=T,h>=0?(A=c,_=l,C=u,P=d,F=m,L=b,H=p,X=x):(A=l,_=c,C=d,P=u,F=b,L=m,H=x,X=p)),w===0)return null;let G=A/w,K=_/w,$=1/w,ve=C-G*D,pe=P-K*D,lt=F-G*N,Ye=L-K*N,et=H-G*B,J=X-K*B,te=et*Ye-J*lt,Se=ve*J-pe*et,ze=lt*pe-Ye*ve;if(i){if(te<0||Se<0||ze<0)return null}else if((te<0||Se<0||ze<0)&&(te>0||Se>0||ze>0))return null;let ye=te+Se+ze;if(ye===0)return null;let je=$*(te*D+Se*N+ze*B);return(ye>0?je<0:je>0)?null:this.at(je/ye,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ft=class extends nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},qu=new Oe,rs=new Hi,to=new tn,Xu=new R,no=new R,io=new R,so=new R,Al=new R,ro=new R,ju=new R,ao=new R,be=class extends at{constructor(e=new it,t=new ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){ro.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(Al.fromBufferAttribute(u,e),r?ro.addScaledVector(Al,h):ro.addScaledVector(Al.sub(t),h))}t.add(ro)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(s),rs.copy(e.ray).recast(e.near),!(to.containsPoint(rs.origin)===!1&&(rs.intersectSphere(to,Xu)===null||rs.origin.distanceToSquared(Xu)>(e.far-e.near)**2))&&(qu.copy(s).invert(),rs.copy(e.ray).applyMatrix4(qu),!(n.boundingBox!==null&&rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,n){let i,s=this.geometry,r=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,b=d.length;m<b;m++){let g=d[m],p=r[g.materialIndex],x=Math.max(g.start,f.start),T=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,y=T;v<y;v+=3){let S=o.getX(v),A=o.getX(v+1),_=o.getX(v+2);i=oo(this,p,e,n,l,h,u,S,A,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let x=o.getX(g),T=o.getX(g+1),v=o.getX(g+2);i=oo(this,r,e,n,l,h,u,x,T,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,b=d.length;m<b;m++){let g=d[m],p=r[g.materialIndex],x=Math.max(g.start,f.start),T=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,y=T;v<y;v+=3){let S=v,A=v+1,_=v+2;i=oo(this,p,e,n,l,h,u,S,A,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let x=g,T=g+1,v=g+2;i=oo(this,r,e,n,l,h,u,x,T,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function Gp(a,e,t,n,i,s,r,o){let c;if(e.side===Ut?c=n.intersectTriangle(r,s,i,!0,o):c=n.intersectTriangle(i,s,r,e.side===Qn,o),c===null)return null;ao.copy(o),ao.applyMatrix4(a.matrixWorld);let l=t.ray.origin.distanceTo(ao);return l<t.near||l>t.far?null:{distance:l,point:ao.clone(),object:a}}function oo(a,e,t,n,i,s,r,o,c,l){a.getVertexPosition(o,no),a.getVertexPosition(c,io),a.getVertexPosition(l,so);let h=Gp(a,e,t,n,no,io,so,ju);if(h){let u=new R;hi.getBarycoord(ju,no,io,so,u),i&&(h.uv=hi.getInterpolatedAttribute(i,o,c,l,u,new xe)),s&&(h.uv1=hi.getInterpolatedAttribute(s,o,c,l,u,new xe)),r&&(h.normal=hi.getInterpolatedAttribute(r,o,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new R,materialIndex:0};hi.getNormal(no,io,so,d.normal),h.face=d,h.barycoord=u}return h}var zr=new dt,Ku=new dt,Yu=new dt,Vp=new dt,Ju=new Oe,co=new R,Rl=new tn,Zu=new Oe,Cl=new Hi,ea=class extends be{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Dl,this.bindMatrix=new Oe,this.bindMatrixInverse=new Oe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ln),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,co),this.boundingBox.expandByPoint(co)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new tn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,co),this.boundingSphere.expandByPoint(co)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rl.copy(this.boundingSphere),Rl.applyMatrix4(i),e.ray.intersectsSphere(Rl)!==!1&&(Zu.copy(i).invert(),Cl.copy(e.ray).applyMatrix4(Zu),!(this.boundingBox!==null&&Cl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Cl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new dt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Dl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Hd?this.bindMatrixInverse.copy(this.bindMatrix).invert():Re("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Ku.fromBufferAttribute(i.attributes.skinIndex,e),Yu.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(zr.copy(t),t.set(0,0,0,0)):(zr.set(...t,1),t.set(0,0,0)),zr.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let r=Yu.getComponent(s);if(r!==0){let o=Ku.getComponent(s);Ju.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Vp.copy(zr).applyMatrix4(Ju),r)}}return t.isVector4&&(t.w=zr.w),t.applyMatrix4(this.bindMatrixInverse)}},ar=class extends at{constructor(){super(),this.isBone=!0,this.type="Bone"}},or=class extends Vt{constructor(e=null,t=1,n=1,i,s,r,o,c,l=At,h=At,u,d){super(null,r,o,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},$u=new Oe,Wp=new Oe,ta=class a{constructor(e=[],t=[]){this.uuid=On(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Re("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Oe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Oe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){let o=e[s]?e[s].matrixWorld:Wp;$u.multiplyMatrices(o,t[s]),$u.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new a(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new or(t,e,e,yn,_n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],r=t[s];r===void 0&&(Re("Skeleton: No bone found with UUID:",s),r=new ar),this.bones.push(r),this.boneInverses.push(new Oe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let r=t[i];e.bones.push(r.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},fi=class extends St{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},js=new Oe,Qu=new Oe,lo=[],ed=new ln,qp=new Oe,Gr=new be,Vr=new tn,Hn=class extends be{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,qp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),ed.copy(e.boundingBox).applyMatrix4(js),this.boundingBox.union(ed)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new tn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),Vr.copy(e.boundingSphere).applyMatrix4(js),this.boundingSphere.union(Vr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Gr.geometry=this.geometry,Gr.material=this.material,Gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vr.copy(this.boundingSphere),Vr.applyMatrix4(n),e.ray.intersectsSphere(Vr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,js),Qu.multiplyMatrices(n,js),Gr.matrixWorld=Qu,Gr.raycast(e,lo);for(let r=0,o=lo.length;r<o;r++){let c=lo[r];c.instanceId=s,c.object=this,t.push(c)}lo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new fi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new or(new Float32Array(i*this.count),i,this.count,ec,_n));let s=this.morphTexture.source.data.data,r=0;for(let l=0;l<n.length;l++)r+=n[l];let o=this.geometry.morphTargetsRelative?1:1-r,c=i*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},as=new tn,Xp=new xe(.5,.5),ho=new R,cr=class{constructor(e=new Nn,t=new Nn,n=new Nn,i=new Nn,s=new Nn,r=new Nn){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=kn,n=!1){let i=this.planes,s=e.elements,r=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],d=s[6],f=s[7],m=s[8],b=s[9],g=s[10],p=s[11],x=s[12],T=s[13],v=s[14],y=s[15];if(i[0].setComponents(l-r,f-h,p-m,y-x).normalize(),i[1].setComponents(l+r,f+h,p+m,y+x).normalize(),i[2].setComponents(l+o,f+u,p+b,y+T).normalize(),i[3].setComponents(l-o,f-u,p-b,y-T).normalize(),n)i[4].setComponents(c,d,g,v).normalize(),i[5].setComponents(l-c,f-d,p-g,y-v).normalize();else if(i[4].setComponents(l-c,f-d,p-g,y-v).normalize(),t===kn)i[5].setComponents(l+c,f+d,p+g,y+v).normalize();else if(t===er)i[5].setComponents(c,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){as.center.set(0,0,0);let t=Xp.distanceTo(e.center);return as.radius=.7071067811865476+t,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ho.x=i.normal.x>0?e.max.x:e.min.x,ho.y=i.normal.y>0?e.max.y:e.min.y,ho.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var zi=class extends nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Io=new R,Lo=new R,td=new Oe,Wr=new Hi,uo=new tn,Pl=new R,nd=new R,pi=class extends at{constructor(e=new it,t=new zi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Io.fromBufferAttribute(t,i-1),Lo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Io.distanceTo(Lo);e.setAttribute("lineDistance",new Ge(n,1))}else Re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(i),uo.radius+=s,e.ray.intersectsSphere(uo)===!1)return;td.copy(i).invert(),Wr.copy(e.ray).applyMatrix4(td);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let b=f,g=m-1;b<g;b+=l){let p=h.getX(b),x=h.getX(b+1),T=fo(this,e,Wr,c,p,x,b);T&&t.push(T)}if(this.isLineLoop){let b=h.getX(m-1),g=h.getX(f),p=fo(this,e,Wr,c,b,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,r.start),m=Math.min(d.count,r.start+r.count);for(let b=f,g=m-1;b<g;b+=l){let p=fo(this,e,Wr,c,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){let b=fo(this,e,Wr,c,m-1,f,m-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function fo(a,e,t,n,i,s,r){let o=a.geometry.attributes.position;if(Io.fromBufferAttribute(o,i),Lo.fromBufferAttribute(o,s),t.distanceSqToSegment(Io,Lo,Pl,nd)>n)return;Pl.applyMatrix4(a.matrixWorld);let l=e.ray.origin.distanceTo(Pl);if(!(l<e.near||l>e.far))return{distance:l,point:nd.clone().applyMatrix4(a.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:a}}var id=new R,sd=new R,na=class extends pi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)id.fromBufferAttribute(t,i),sd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+id.distanceTo(sd);e.setAttribute("lineDistance",new Ge(n,1))}else Re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ia=class extends pi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},lr=class extends nn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},rd=new Oe,Nl=new Hi,po=new tn,mo=new R,ms=class extends at{constructor(e=new it,t=new lr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(i),po.radius+=s,e.ray.intersectsSphere(po)===!1)return;rd.copy(i).invert(),Nl.copy(e.ray).applyMatrix4(rd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let m=d,b=f;m<b;m++){let g=l.getX(m);mo.fromBufferAttribute(u,g),ad(mo,g,c,i,e,t,this)}}else{let d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let m=d,b=f;m<b;m++)mo.fromBufferAttribute(u,m),ad(mo,m,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function ad(a,e,t,n,i,s,r){let o=Nl.distanceSqToPoint(a);if(o<t){let c=new R;Nl.closestPointToPoint(a,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}var sa=class extends Vt{constructor(e=[],t=Xi,n,i,s,r,o,c,l,h){super(e,t,n,i,s,r,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Dt=class extends Vt{constructor(e,t,n,i,s,r,o,c,l){super(e,t,n,i,s,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Gi=class extends Vt{constructor(e,t,n=Wn,i,s,r,o=At,c=At,l,h=Yn,u=1){if(h!==Yn&&h!==ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,i,s,r,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ir(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Do=class extends Gi{constructor(e,t=Wn,n=Xi,i,s,r=At,o=At,c,l=Yn){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,s,r,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ra=class extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Le=class a extends it{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,r,s,0),m("z","y","x",1,-1,n,t,-e,r,s,1),m("x","z","y",1,1,e,n,t,i,r,2),m("x","z","y",1,-1,e,n,-t,i,r,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(u,2));function m(b,g,p,x,T,v,y,S,A,_,w){let C=v/A,P=y/_,D=v/2,F=y/2,L=S/2,N=A+1,H=_+1,X=0,B=0,G=new R;for(let K=0;K<H;K++){let $=K*P-F;for(let ve=0;ve<N;ve++){let pe=ve*C-D;G[b]=pe*x,G[g]=$*T,G[p]=L,l.push(G.x,G.y,G.z),G[b]=0,G[g]=0,G[p]=S>0?1:-1,h.push(G.x,G.y,G.z),u.push(ve/A),u.push(1-K/_),X+=1}}for(let K=0;K<_;K++)for(let $=0;$<A;$++){let ve=d+$+N*K,pe=d+$+N*(K+1),lt=d+($+1)+N*(K+1),Ye=d+($+1)+N*K;c.push(ve,pe,Ye),c.push(pe,lt,Ye),B+=6}o.addGroup(f,B,w),f+=B,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},wn=class a extends it{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));let r=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,m=n*2+s,b=i+1,g=new R,p=new R;for(let x=0;x<=m;x++){let T=0,v=0,y=0,S=0;if(x<=n){let w=x/n,C=w*Math.PI/2;v=-h-e*Math.cos(C),y=e*Math.sin(C),S=-e*Math.cos(C),T=w*u}else if(x<=n+s){let w=(x-n)/s;v=-h+w*t,y=e,S=0,T=u+w*d}else{let w=(x-n-s)/n,C=w*Math.PI/2;v=h+e*Math.sin(C),y=e*Math.cos(C),S=e*Math.sin(C),T=u+d+w*u}let A=Math.max(0,Math.min(1,T/f)),_=0;x===0?_=.5/i:x===m&&(_=-.5/i);for(let w=0;w<=i;w++){let C=w/i,P=C*Math.PI*2,D=Math.sin(P),F=Math.cos(P);p.x=-y*F,p.y=v,p.z=y*D,o.push(p.x,p.y,p.z),g.set(-y*F,S,y*D),g.normalize(),c.push(g.x,g.y,g.z),l.push(C+_,A)}if(x>0){let w=(x-1)*b;for(let C=0;C<i;C++){let P=w+C,D=w+C+1,F=x*b+C,L=x*b+C+1;r.push(P,D,F),r.push(D,L,F)}}}this.setIndex(r),this.setAttribute("position",new Ge(o,3)),this.setAttribute("normal",new Ge(c,3)),this.setAttribute("uv",new Ge(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},zn=class a extends it{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],r=[],o=[],c=[],l=new R,h=new xe;r.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),r.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(r[d]/e+1)/2,h.y=(r[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ge(r,3)),this.setAttribute("normal",new Ge(o,3)),this.setAttribute("uv",new Ge(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ke=class a extends it{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],f=[],m=0,b=[],g=n/2,p=0;x(),r===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Ge(u,3)),this.setAttribute("normal",new Ge(d,3)),this.setAttribute("uv",new Ge(f,2));function x(){let v=new R,y=new R,S=0,A=(t-e)/n;for(let _=0;_<=s;_++){let w=[],C=_/s,P=C*(t-e)+e;for(let D=0;D<=i;D++){let F=D/i,L=F*c+o,N=Math.sin(L),H=Math.cos(L);y.x=P*N,y.y=-C*n+g,y.z=P*H,u.push(y.x,y.y,y.z),v.set(N,A,H).normalize(),d.push(v.x,v.y,v.z),f.push(F,1-C),w.push(m++)}b.push(w)}for(let _=0;_<i;_++)for(let w=0;w<s;w++){let C=b[w][_],P=b[w+1][_],D=b[w+1][_+1],F=b[w][_+1];(e>0||w!==0)&&(h.push(C,P,F),S+=3),(t>0||w!==s-1)&&(h.push(P,D,F),S+=3)}l.addGroup(p,S,0),p+=S}function T(v){let y=m,S=new xe,A=new R,_=0,w=v===!0?e:t,C=v===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,g*C,0),d.push(0,C,0),f.push(.5,.5),m++;let P=m;for(let D=0;D<=i;D++){let L=D/i*c+o,N=Math.cos(L),H=Math.sin(L);A.x=w*H,A.y=g*C,A.z=w*N,u.push(A.x,A.y,A.z),d.push(0,C,0),S.x=N*.5+.5,S.y=H*.5*C+.5,f.push(S.x,S.y),m++}for(let D=0;D<i;D++){let F=y+D,L=P+D;v===!0?h.push(L,L+1,F):h.push(L+1,L,F),_+=3}l.addGroup(p,_,v===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},mi=class a extends ke{constructor(e=1,t=1,n=32,i=1,s=!1,r=0,o=Math.PI*2){super(0,e,t,n,i,s,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(e){return new a(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fo=class a extends it{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],r=[];o(i),l(n),h(),this.setAttribute("position",new Ge(s,3)),this.setAttribute("normal",new Ge(s.slice(),3)),this.setAttribute("uv",new Ge(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let T=new R,v=new R,y=new R;for(let S=0;S<t.length;S+=3)f(t[S+0],T),f(t[S+1],v),f(t[S+2],y),c(T,v,y,x)}function c(x,T,v,y){let S=y+1,A=[];for(let _=0;_<=S;_++){A[_]=[];let w=x.clone().lerp(v,_/S),C=T.clone().lerp(v,_/S),P=S-_;for(let D=0;D<=P;D++)D===0&&_===S?A[_][D]=w:A[_][D]=w.clone().lerp(C,D/P)}for(let _=0;_<S;_++)for(let w=0;w<2*(S-_)-1;w++){let C=Math.floor(w/2);w%2===0?(d(A[_][C+1]),d(A[_+1][C]),d(A[_][C])):(d(A[_][C+1]),d(A[_+1][C+1]),d(A[_+1][C]))}}function l(x){let T=new R;for(let v=0;v<s.length;v+=3)T.x=s[v+0],T.y=s[v+1],T.z=s[v+2],T.normalize().multiplyScalar(x),s[v+0]=T.x,s[v+1]=T.y,s[v+2]=T.z}function h(){let x=new R;for(let T=0;T<s.length;T+=3){x.x=s[T+0],x.y=s[T+1],x.z=s[T+2];let v=g(x)/2/Math.PI+.5,y=p(x)/Math.PI+.5;r.push(v,1-y)}m(),u()}function u(){for(let x=0;x<r.length;x+=6){let T=r[x+0],v=r[x+2],y=r[x+4],S=Math.max(T,v,y),A=Math.min(T,v,y);S>.9&&A<.1&&(T<.2&&(r[x+0]+=1),v<.2&&(r[x+2]+=1),y<.2&&(r[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function f(x,T){let v=x*3;T.x=e[v+0],T.y=e[v+1],T.z=e[v+2]}function m(){let x=new R,T=new R,v=new R,y=new R,S=new xe,A=new xe,_=new xe;for(let w=0,C=0;w<s.length;w+=9,C+=6){x.set(s[w+0],s[w+1],s[w+2]),T.set(s[w+3],s[w+4],s[w+5]),v.set(s[w+6],s[w+7],s[w+8]),S.set(r[C+0],r[C+1]),A.set(r[C+2],r[C+3]),_.set(r[C+4],r[C+5]),y.copy(x).add(T).add(v).divideScalar(3);let P=g(y);b(S,C+0,x,P),b(A,C+2,T,P),b(_,C+4,v,P)}}function b(x,T,v,y){y<0&&x.x===1&&(r[T]=x.x-1),v.x===0&&v.z===0&&(r[T]=y/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.vertices,e.indices,e.radius,e.detail)}},aa=class a extends Fo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new a(e.radius,e.detail)}};var Ft=class a extends it{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,r=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],m=[],b=[],g=[];for(let p=0;p<h;p++){let x=p*d-r;for(let T=0;T<l;T++){let v=T*u-s;m.push(v,-x,0),b.push(0,0,1),g.push(T/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){let T=x+l*p,v=x+l*(p+1),y=x+1+l*(p+1),S=x+1+l*p;f.push(T,v,S),f.push(v,y,S)}this.setIndex(f),this.setAttribute("position",new Ge(m,3)),this.setAttribute("normal",new Ge(b,3)),this.setAttribute("uv",new Ge(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.width,e.height,e.widthSegments,e.heightSegments)}},gi=class a extends it{constructor(e=.5,t=1,n=32,i=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/i,f=new R,m=new xe;for(let b=0;b<=i;b++){for(let g=0;g<=n;g++){let p=s+g/n*r;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let b=0;b<i;b++){let g=b*(n+1);for(let p=0;p<n;p++){let x=p+g,T=x,v=x+n+1,y=x+n+2,S=x+1;o.push(T,v,S),o.push(v,y,S)}}this.setIndex(o),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(l,3)),this.setAttribute("uv",new Ge(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Nt=class a extends it{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(r+o,Math.PI),l=0,h=[],u=new R,d=new R,f=[],m=[],b=[],g=[];for(let p=0;p<=n;p++){let x=[],T=p/n,v=r+T*o,y=e*Math.cos(v),S=Math.sqrt(e*e-y*y),A=0;p===0&&r===0?A=.5/t:p===n&&c===Math.PI&&(A=-.5/t);for(let _=0;_<=t;_++){let w=_/t,C=i+w*s;u.x=-S*Math.cos(C),u.y=y,u.z=S*Math.sin(C),m.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),g.push(w+A,1-T),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){let T=h[p][x+1],v=h[p][x],y=h[p+1][x],S=h[p+1][x+1];(p!==0||r>0)&&f.push(T,v,S),(p!==n-1||c<Math.PI)&&f.push(v,y,S)}this.setIndex(f),this.setAttribute("position",new Ge(m,3)),this.setAttribute("normal",new Ge(b,3)),this.setAttribute("uv",new Ge(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var vn=class a extends it{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:r,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],h=[],u=[],d=new R,f=new R,m=new R;for(let b=0;b<=n;b++){let g=r+b/n*o;for(let p=0;p<=i;p++){let x=p/i*s;f.x=(e+t*Math.cos(g))*Math.cos(x),f.y=(e+t*Math.cos(g))*Math.sin(x),f.z=t*Math.sin(g),l.push(f.x,f.y,f.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),m.subVectors(f,d).normalize(),h.push(m.x,m.y,m.z),u.push(p/i),u.push(b/n)}}for(let b=1;b<=n;b++)for(let g=1;g<=i;g++){let p=(i+1)*b+g-1,x=(i+1)*(b-1)+g-1,T=(i+1)*(b-1)+g,v=(i+1)*b+g;c.push(p,x,v),c.push(x,T,v)}this.setIndex(c),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Es(a){let e={};for(let t in a){e[t]={};for(let n in a[t]){let i=a[t][n];if(od(i))i.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(od(i[0])){let s=[];for(let r=0,o=i.length;r<o;r++)s[r]=i[r].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function rn(a){let e={};for(let t=0;t<a.length;t++){let n=Es(a[t]);for(let i in n)e[i]=n[i]}return e}function od(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function jp(a){let e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function ah(a){let e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}var wi={clone:Es,merge:rn},Kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Tt=class extends nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kp,this.fragmentShader=Yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=jp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new se().setHex(i.value);break;case"v2":this.uniforms[n].value=new xe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new R().fromArray(i.value);break;case"v4":this.uniforms[n].value=new dt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new He().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Oe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},hr=class extends Tt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ce=class extends nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},fn=class extends Ce{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var oa=class extends nn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.combine=jo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},No=class extends nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Uo=class extends nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ki(a,e){return!a||a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function _o(a){return a!==void 0&&a.inTangents!==void 0&&a.outTangents!==void 0}function Jp(a){function e(i,s){return a[i]-a[s]}let t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function cd(a,e,t){let n=a.length,i=new a.constructor(n);for(let s=0,r=0;r!==n;++s){let o=t[s]*e;for(let c=0;c!==e;++c)i[r++]=a[o+c]}return i}function Zp(a,e,t,n){let i=1,s=a[0];for(;s!==void 0&&s[n]===void 0;)s=a[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push(...r)),s=a[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=a[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=a[i++];while(s!==void 0)}var Jn=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let r;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}r=t.length;break n}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}r=n,n=0;break n}break e}for(;n<r;){let o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ko=class extends Jn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:os,endingEnd:os}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,r=e+1,o=i[s],c=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case cs:s=e,o=2*t-n;break;case jr:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case cs:r=e,c=2*n-t;break;case jr:r=1,c=n+i[1]-i[0];break;default:r=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),b=m*m,g=b*m,p=-d*g+2*d*b-d*m,x=(1+d)*g+(-1.5-2*d)*b+(-.5+d)*m+1,T=(-1-f)*g+(1.5+f)*b+.5*m,v=f*g-f*b;for(let y=0;y!==o;++y)s[y]=p*r[h+y]+x*r[l+y]+T*r[c+y]+v*r[u+y];return s}},ca=class extends Jn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=r[l+d]*u+r[c+d]*h;return s}},Oo=class extends Jn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Bo=class extends Jn{interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-t)/(i-t),b=1-m;for(let g=0;g!==o;++g)s[g]=r[l+g]*b+r[c+g]*m;return s}let d=o*2,f=e-1;for(let m=0;m!==o;++m){let b=r[l+m],g=r[c+m],p=f*d+m*2,x=u[p],T=u[p+1],v=e*d+m*2,y=h[v],S=h[v+1],A=Qp(n,t,x,y,i);s[m]=af(A,b,T,S,g)}return s}};function af(a,e,t,n,i){let s=1-a;return s*s*s*e+3*s*s*a*t+3*s*a*a*n+a*a*a*i}function $p(a,e,t,n,i){let s=1-a;return 3*s*s*(t-e)+6*s*a*(n-t)+3*a*a*(i-n)}function Qp(a,e,t,n,i){let s=(a-e)/(i-e);for(let r=0;r<8;r++){let o=af(s,e,t,n,i)-a;if(Math.abs(o)<1e-10)break;let c=$p(s,e,t,n,i);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var pn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ki(t,this.TimeBufferType),this.values=ki(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ki(e.times,Array),values:ki(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),_o(e.settings)&&(n.settings={inTangents:ki(e.settings.inTangents,Array),outTangents:ki(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ca(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ko(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Bo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case hs:t=this.InterpolantFactoryMethodDiscrete;break;case us:t=this.InterpolantFactoryMethodLinear;break;case xo:t=this.InterpolantFactoryMethodSmooth;break;case Fl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Re("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hs;case this.InterpolantFactoryMethodLinear:return us;case this.InterpolantFactoryMethodSmooth:return xo;case this.InterpolantFactoryMethodBezier:return Fl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;_o(this.settings)&&(ld(this.settings.inTangents,e),ld(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ue("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Ue("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ue("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(r!==null&&r>c){Ue("KeyframeTrack: Out of order keys.",this,o,c,r),e=!1;break}r=c}if(i!==void 0&&lp(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){Ue("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===xo,s=e.length-1,r=1;for(let o=1;o<s;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let b=t[u+m];if(b!==t[d+m]||b!==t[f+m]){c=!0;break}}}if(c){if(o!==r){e[r]=e[o];let u=o*n,d=r*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,c=r*n,l=0;l!==n;++l)t[c+l]=t[o+l];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,_o(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function ld(a,e){for(let t=0,n=a.length;t!==n;t+=2)a[t]*=e}pn.prototype.ValueTypeName="";pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=us;var bi=class extends pn{constructor(e,t,n){super(e,t,n)}};bi.prototype.ValueTypeName="bool";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=hs;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var la=class extends pn{constructor(e,t,n,i){super(e,t,n,i)}};la.prototype.ValueTypeName="color";var xi=class extends pn{constructor(e,t,n,i){super(e,t,n,i)}};xi.prototype.ValueTypeName="number";var Ho=class extends Jn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)zt.slerpFlat(s,0,r,l-o,r,l,c);return s}},vi=class extends pn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Ho(this.times,this.values,this.getValueSize(),e)}};vi.prototype.ValueTypeName="quaternion";vi.prototype.InterpolantFactoryMethodSmooth=void 0;var _i=class extends pn{constructor(e,t,n){super(e,t,n)}};_i.prototype.ValueTypeName="string";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=hs;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var Vi=class extends pn{constructor(e,t,n,i){super(e,t,n,i)}};Vi.prototype.ValueTypeName="vector";var gs=class{constructor(e="",t=-1,n=[],i=Fc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=On(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(tm(n[r]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,r=n.length;s!==r;++s)t.push(pn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,r=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);let h=Jp(c);c=cd(c,1,h),l=cd(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),r.push(new xi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(s);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let r=[];for(let o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function em(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xi;case"vector":case"vector2":case"vector3":case"vector4":return Vi;case"color":return la;case"quaternion":return vi;case"bool":case"boolean":return bi;case"string":return _i}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function tm(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=em(a.type);if(a.times===void 0){let n=[],i=[];Zp(a.keys,n,i,"value"),a.times=n,a.values=i}let t;return e.parse!==void 0?t=e.parse(a):t=new e(a.name,a.times,a.values,a.interpolation),_o(a.settings)&&(t.settings={inTangents:ki(a.settings.inTangents,Float32Array),outTangents:ki(a.settings.outTangents,Float32Array)}),t}var Kn={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(hd(a)||(this.files[a]=e))},get:function(a){if(this.enabled!==!1&&!hd(a))return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};function hd(a){try{let e=a.slice(a.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var ur=class{constructor(e,t,n){let i=this,s=!1,r=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},of=new ur,Zn=class{constructor(e){this.manager=e!==void 0?e:of,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Zn.DEFAULT_MATERIAL_NAME="__DEFAULT";var li={},Ul=class extends Error{constructor(e,t){super(e),this.response=t}},dr=class extends Zn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Kn.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(li[e]!==void 0){li[e].push({onLoad:t,onProgress:n,onError:i});return}li[e]=[],li[e].push({onLoad:t,onProgress:n,onError:i});let r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Re("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=li[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,b=0,g=new ReadableStream({start(p){x();function x(){u.read().then(({done:T,value:v})=>{if(T)p.close();else{b+=v.byteLength;let y=new ProgressEvent("progress",{lengthComputable:m,loaded:b,total:f});for(let S=0,A=h.length;S<A;S++){let _=h[S];_.onProgress&&_.onProgress(y)}p.enqueue(v),x()}},T=>{p.error(T)})}}});return new Response(g)}else throw new Ul(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Kn.add(`file:${e}`,l);let h=li[e];delete li[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=li[e];if(h===void 0)throw this.manager.itemError(e),l;delete li[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ks=new WeakMap,zo=class extends Zn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,r=Kn.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);else{let u=Ks.get(r);u===void 0&&(u=[],Ks.set(r,u)),u.push({onLoad:t,onError:i})}return r}let o=tr("img");function c(){h(),t&&t(this);let u=Ks.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Ks.delete(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),Kn.remove(`image:${e}`);let d=Ks.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}Ks.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Kn.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var bs=class extends Zn{constructor(e){super(e)}load(e,t,n,i){let s=new Vt,r=new zo(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},xs=class extends at{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new se(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Wi=class extends xs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Il=new Oe,ud=new R,dd=new R,fr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cr,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ud.setFromMatrixPosition(e.matrixWorld),t.position.copy(ud),dd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Il.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Il,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,r=i?i.z/s.x:1,o=i?i.w/s.y:1,c=i?i.x/s.x:0,l=i?i.y/s.y:0;e.coordinateSystem===er||e.reversedDepth?t.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Il)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},go=new R,bo=new zt,jn=new R,ha=class extends at{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(go,bo,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(go,bo,jn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(go,bo,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(go,bo,jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ui=new R,fd=new xe,pd=new xe,Ct=class extends ha{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,fd,pd),t.subVectors(pd,fd)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(qr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let c=r.fullWidth,l=r.fullHeight;s+=r.offsetX*i/c,t-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},kl=class extends fr{constructor(){super(new Ct(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ds*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},yi=class extends xs{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new kl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Ol=class extends fr{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0}},sn=class extends xs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ol}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},$n=class extends ha{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,r=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bl=class extends fr{constructor(){super(new $n(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Mi=class extends xs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.shadow=new Bl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Si=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ll=new WeakMap,ua=class extends Zn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Re("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Re("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,r=Kn.get(`image-bitmap:${e}`);if(r!==void 0){if(s.manager.itemStart(e),r.then){r.then(l=>{Ll.has(r)===!0?(i&&i(Ll.get(r)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(l),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Kn.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Ll.set(c,l),Kn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Kn.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ys=-90,Js=1,Go=class extends at{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ct(Ys,Js,e,t);i.layers=this.layers,this.add(i);let s=new Ct(Ys,Js,e,t);s.layers=this.layers,this.add(s);let r=new Ct(Ys,Js,e,t);r.layers=this.layers,this.add(r);let o=new Ct(Ys,Js,e,t);o.layers=this.layers,this.add(o);let c=new Ct(Ys,Js,e,t);c.layers=this.layers,this.add(c);let l=new Ct(Ys,Js,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,o,c]=t;for(let l of t)this.remove(l);if(e===kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===er)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,r,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Vo=class extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},da=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=nm.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function nm(){this._document.hidden===!1&&this.reset()}var Wo=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,r;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,s=e*i+i,r=this.cumulativeWeight;if(r===0){for(let o=0;o!==i;++o)n[s+o]=n[o];r=t}else{r+=t;let o=t/r;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=r}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}r>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,r=i;s!==r;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let r=0;r!==s;++r)e[t+r]=e[n+r]}_slerp(e,t,n,i){zt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){let r=this._workIndex*s;zt.multiplyQuaternionsFlat(e,r,e,t,e,n),zt.slerpFlat(e,t,e,t,e,r,i)}_lerp(e,t,n,i,s){let r=1-i;for(let o=0;o!==s;++o){let c=t+o;e[c]=e[c]*r+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let r=0;r!==s;++r){let o=t+r;e[o]=e[o]+e[n+r]*i}}},oh="\\[\\]\\.:\\/",im=new RegExp("["+oh+"]","g"),ch="[^"+oh+"]",sm="[^"+oh.replace("\\.","")+"]",rm=/((?:WC+[\/:])*)/.source.replace("WC",ch),am=/(WCOD+)?/.source.replace("WCOD",sm),om=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ch),cm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ch),lm=new RegExp("^"+rm+am+om+cm+"$"),hm=["material","materials","bones","map"],Hl=class{constructor(e,t,n){let i=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},bt=class a{constructor(e,t,n){this.path=t,this.parsedPath=n||a.parseTrackName(t),this.node=a.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new a.Composite(e,t,n):new a(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(im,"")}static parseTrackName(e){let t=lm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);hm.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=a.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Re("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let r=e[i];if(r===void 0){let l=t.nodeName;Ue("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bt.Composite=Hl;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qo=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let s=t.tracks,r=s.length,o=new Array(r),c={endingStart:os,endingEnd:os};for(let l=0;l!==r;++l){let h=s[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=zd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,s=e._clip.duration,r=s/i,o=i/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,r,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,s=i.time,r=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/r,l[1]=t/r,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let r=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Vd:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(r),l[h].accumulateAdditive(o);break;case Fc:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(r),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,s=this._loopCount,r=n===Gd;if(e===0)return s===-1?i:r&&(s&1)===1?t-i:i;if(n===Yi){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=s,this.time=i;if(r&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=cs,i.endingEnd=cs):(e?i.endingStart=this.zeroSlopeAtStart?cs:os:i.endingStart=jr,t?i.endingEnd=this.zeroSlopeAtEnd?cs:os:i.endingEnd=jr)}_scheduleFading(e,t,n){let i=this._mixer,s=i.time,r=this._weightInterpolant;r===null&&(r=i._lendControlInterpolant(),this._weightInterpolant=r);let o=r.parameterPositions,c=r.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}},um=new Float32Array(1),vs=class extends Bn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,r=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){let d=i[u],f=d.name,m=h[f];if(m!==void 0)++m.referenceCount,r[u]=m;else{if(m=r[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}let b=t&&t._propertyBindings[u].binding.parsedPath;m=new Wo(bt.create(n,f,b),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),r[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,s=this._actionsByClip,r=s[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=r;else{let o=r.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),r.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,r=this._actionsByClip,o=r[s],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete r[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,s=this._bindings,r=i[t];r===void 0&&(r={},i[t]=r),r[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,r=this._bindingsByRootAndName,o=r[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete r[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ca(new Float32Array(2),new Float32Array(2),1,um),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let i=t||this._root,s=i.uuid,r=typeof e=="string"?gs.findByName(i,e):e,o=r!==null?r.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(r!==null?n=r.blendMode:n=Fc),c!==void 0){let u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],r===null&&(r=l._clip)}if(r===null)return null;let h=new qo(this,r,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,s),h}existingAction(e,t){let n=t||this._root,i=n.uuid,s=typeof e=="string"?gs.findByName(n,e):e,r=s?s.uuid:e,o=this._actionsByClip[r];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),r=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,r);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let r=s.knownActions;for(let o=0,c=r.length;o!==c;++o){let l=r[o];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let r in n){let o=n[r].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(let r in s){let o=s[r];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var md=new Oe,hn=class{constructor(e,t,n=0,i=1/0){this.ray=new Hi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new sr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ue("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return md.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(md),this}intersectObject(e,t=!0,n=[]){return zl(e,this,n,t),n.sort(gd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)zl(e[i],this,n,t);return n.sort(gd),n}};function gd(a,e){return a.distance-e.distance}function zl(a,e,t,n){let i=!0;if(a.layers.test(e.layers)&&a.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=a.children;for(let r=0,o=s.length;r<o;r++)zl(s[r],e,t,!0)}}var ph=class ph{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};ph.prototype.isMatrix2=!0;var Gl=ph;function lh(a,e,t,n){let i=dm(n);switch(t){case Ql:return a*e;case ec:return a*e/i.components*i.byteLength;case tc:return a*e/i.components*i.byteLength;case Ki:return a*e*2/i.components*i.byteLength;case nc:return a*e*2/i.components*i.byteLength;case eh:return a*e*3/i.components*i.byteLength;case yn:return a*e*4/i.components*i.byteLength;case ic:return a*e*4/i.components*i.byteLength;case _a:case ya:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Ma:case Sa:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case rc:case oc:return Math.max(a,16)*Math.max(e,8)/4;case sc:case ac:return Math.max(a,8)*Math.max(e,8)/2;case cc:case lc:case uc:case dc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case hc:case Ta:case fc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case pc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case mc:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case gc:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case bc:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case xc:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case vc:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case _c:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case yc:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Mc:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Ec:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case wc:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Ac:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Rc:case Cc:case Pc:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Ic:case Lc:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Ea:case Dc:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dm(a){switch(a){case mn:case Yl:return{byteLength:1,components:1};case gr:case Jl:case Wt:return{byteLength:2,components:1};case $o:case Qo:return{byteLength:2,components:4};case Wn:case Zo:case _n:return{byteLength:4,components:1};case Zl:case $l:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Cf(){let a=null,e=!1,t=null,n=null;function i(s,r){n=a.requestAnimationFrame(i),t(s,r)}return{start:function(){e!==!0&&t!==null&&a!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function pm(a){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=a.createBuffer();a.bindBuffer(c,d),a.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=a.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=a.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=a.HALF_FLOAT:f=a.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=a.SHORT;else if(l instanceof Uint32Array)f=a.UNSIGNED_INT;else if(l instanceof Int32Array)f=a.INT;else if(l instanceof Int8Array)f=a.BYTE;else if(l instanceof Uint8Array)f=a.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(a.bindBuffer(l,o),u.length===0)a.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],b=u[f];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++d,u[d]=b)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let b=u[f];a.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(a.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:r}}var mm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gm=`#ifdef USE_ALPHAHASH
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
#endif`,bm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_m=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ym=`#ifdef USE_AOMAP
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
#endif`,Mm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sm=`#ifdef USE_BATCHING
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
#endif`,Tm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Em=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Am=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rm=`#ifdef USE_IRIDESCENCE
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
#endif`,Cm=`#ifdef USE_BUMPMAP
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
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Nm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,km=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Om=`#define PI 3.141592653589793
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
} // validated`,Bm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hm=`vec3 transformedNormal = objectNormal;
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
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jm=`#ifdef USE_ENVMAP
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
#endif`,Km=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ym=`#ifdef USE_ENVMAP
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
#endif`,Jm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zm=`#ifdef USE_ENVMAP
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
#endif`,$m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n0=`#ifdef USE_GRADIENTMAP
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
}`,i0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,o0=`#ifdef USE_ENVMAP
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
#endif`,c0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,d0=`PhysicalMaterial material;
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
#endif`,f0=`uniform sampler2D dfgLUT;
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
}`,p0=`
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
#endif`,m0=`#if defined( RE_IndirectDiffuse )
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
#endif`,g0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,x0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,v0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,M0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,E0=`#if defined( USE_POINTS_UV )
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
#endif`,w0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,P0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I0=`#ifdef USE_MORPHTARGETS
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
#endif`,L0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,F0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,N0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,O0=`#ifdef USE_NORMALMAP
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
#endif`,B0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,H0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,V0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,q0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,eg=`float getShadowMask() {
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
}`,tg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ng=`#ifdef USE_SKINNING
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
#endif`,ig=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sg=`#ifdef USE_SKINNING
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
#endif`,rg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ag=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,og=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lg=`#ifdef USE_TRANSMISSION
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
#endif`,hg=`#ifdef USE_TRANSMISSION
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
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gg=`uniform sampler2D t2D;
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
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`#include <common>
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
}`,Mg=`#if DEPTH_PACKING == 3200
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
}`,Sg=`#define DISTANCE
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
}`,Tg=`#define DISTANCE
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
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`uniform float scale;
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Cg=`#include <common>
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Ig=`#define LAMBERT
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
}`,Lg=`#define LAMBERT
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
}`,Dg=`#define MATCAP
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
}`,Fg=`#define MATCAP
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
}`,Ng=`#define NORMAL
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
}`,Ug=`#define NORMAL
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
}`,kg=`#define PHONG
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
}`,Og=`#define PHONG
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
}`,Bg=`#define STANDARD
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
}`,Hg=`#define STANDARD
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
}`,zg=`#define TOON
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
}`,Gg=`#define TOON
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
}`,Vg=`uniform float size;
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
}`,Wg=`uniform vec3 diffuse;
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
}`,qg=`#include <common>
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
}`,Xg=`uniform vec3 color;
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
}`,jg=`uniform float rotation;
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
}`,Kg=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:mm,alphahash_pars_fragment:gm,alphamap_fragment:bm,alphamap_pars_fragment:xm,alphatest_fragment:vm,alphatest_pars_fragment:_m,aomap_fragment:ym,aomap_pars_fragment:Mm,batching_pars_vertex:Sm,batching_vertex:Tm,begin_vertex:Em,beginnormal_vertex:wm,bsdfs:Am,iridescence_fragment:Rm,bumpmap_pars_fragment:Cm,clipping_planes_fragment:Pm,clipping_planes_pars_fragment:Im,clipping_planes_pars_vertex:Lm,clipping_planes_vertex:Dm,color_fragment:Fm,color_pars_fragment:Nm,color_pars_vertex:Um,color_vertex:km,common:Om,cube_uv_reflection_fragment:Bm,defaultnormal_vertex:Hm,displacementmap_pars_vertex:zm,displacementmap_vertex:Gm,emissivemap_fragment:Vm,emissivemap_pars_fragment:Wm,colorspace_fragment:qm,colorspace_pars_fragment:Xm,envmap_fragment:jm,envmap_common_pars_fragment:Km,envmap_pars_fragment:Ym,envmap_pars_vertex:Jm,envmap_physical_pars_fragment:o0,envmap_vertex:Zm,fog_vertex:$m,fog_pars_vertex:Qm,fog_fragment:e0,fog_pars_fragment:t0,gradientmap_pars_fragment:n0,lightmap_pars_fragment:i0,lights_lambert_fragment:s0,lights_lambert_pars_fragment:r0,lights_pars_begin:a0,lights_toon_fragment:c0,lights_toon_pars_fragment:l0,lights_phong_fragment:h0,lights_phong_pars_fragment:u0,lights_physical_fragment:d0,lights_physical_pars_fragment:f0,lights_fragment_begin:p0,lights_fragment_maps:m0,lights_fragment_end:g0,lightprobes_pars_fragment:b0,logdepthbuf_fragment:x0,logdepthbuf_pars_fragment:v0,logdepthbuf_pars_vertex:_0,logdepthbuf_vertex:y0,map_fragment:M0,map_pars_fragment:S0,map_particle_fragment:T0,map_particle_pars_fragment:E0,metalnessmap_fragment:w0,metalnessmap_pars_fragment:A0,morphinstance_vertex:R0,morphcolor_vertex:C0,morphnormal_vertex:P0,morphtarget_pars_vertex:I0,morphtarget_vertex:L0,normal_fragment_begin:D0,normal_fragment_maps:F0,normal_pars_fragment:N0,normal_pars_vertex:U0,normal_vertex:k0,normalmap_pars_fragment:O0,clearcoat_normal_fragment_begin:B0,clearcoat_normal_fragment_maps:H0,clearcoat_pars_fragment:z0,iridescence_pars_fragment:G0,opaque_fragment:V0,packing:W0,premultiplied_alpha_fragment:q0,project_vertex:X0,dithering_fragment:j0,dithering_pars_fragment:K0,roughnessmap_fragment:Y0,roughnessmap_pars_fragment:J0,shadowmap_pars_fragment:Z0,shadowmap_pars_vertex:$0,shadowmap_vertex:Q0,shadowmask_pars_fragment:eg,skinbase_vertex:tg,skinning_pars_vertex:ng,skinning_vertex:ig,skinnormal_vertex:sg,specularmap_fragment:rg,specularmap_pars_fragment:ag,tonemapping_fragment:og,tonemapping_pars_fragment:cg,transmission_fragment:lg,transmission_pars_fragment:hg,uv_pars_fragment:ug,uv_pars_vertex:dg,uv_vertex:fg,worldpos_vertex:pg,background_vert:mg,background_frag:gg,backgroundCube_vert:bg,backgroundCube_frag:xg,cube_vert:vg,cube_frag:_g,depth_vert:yg,depth_frag:Mg,distance_vert:Sg,distance_frag:Tg,equirect_vert:Eg,equirect_frag:wg,linedashed_vert:Ag,linedashed_frag:Rg,meshbasic_vert:Cg,meshbasic_frag:Pg,meshlambert_vert:Ig,meshlambert_frag:Lg,meshmatcap_vert:Dg,meshmatcap_frag:Fg,meshnormal_vert:Ng,meshnormal_frag:Ug,meshphong_vert:kg,meshphong_frag:Og,meshphysical_vert:Bg,meshphysical_frag:Hg,meshtoon_vert:zg,meshtoon_frag:Gg,points_vert:Vg,points_frag:Wg,shadow_vert:qg,shadow_frag:Xg,sprite_vert:jg,sprite_frag:Kg},de={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},ti={basic:{uniforms:rn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:rn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new se(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:rn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:rn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:rn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new se(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:rn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:rn([de.points,de.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:rn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:rn([de.common,de.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:rn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:rn([de.sprite,de.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:rn([de.common,de.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:rn([de.lights,de.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};ti.physical={uniforms:rn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var kc={r:0,b:0,g:0},Yg=new Oe,Pf=new He;Pf.set(-1,0,0,0,1,0,0,0,1);function Jg(a,e,t,n,i,s){let r=new se(0),o=i===!0?0:1,c,l,h=null,u=0,d=null;function f(x){let T=x.isScene===!0?x.background:null;if(T&&T.isTexture){let v=x.backgroundBlurriness>0;T=e.get(T,v)}return T}function m(x){let T=!1,v=f(x);v===null?g(r,o):v&&v.isColor&&(g(v,1),T=!0);let y=a.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(a.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function b(x,T){let v=f(T);v&&(v.isCubeTexture||v.mapping===va)?(l===void 0&&(l=new be(new Le(1,1,1),new Tt({name:"BackgroundCubeMaterial",uniforms:Es(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Yg.makeRotationFromEuler(T.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Pf),l.material.toneMapped=We.getTransfer(v.colorSpace)!==rt,(h!==v||u!==v.version||d!==a.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=a.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new be(new Ft(2,2),new Tt({name:"BackgroundMaterial",uniforms:Es(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=We.getTransfer(v.colorSpace)!==rt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==a.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=a.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,T){x.getRGB(kc,ah(a)),t.buffers.color.setClear(kc.r,kc.g,kc.b,T,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(x,T=1){r.set(x),o=T,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,g(r,o)},render:m,addToRenderList:b,dispose:p}}function Zg(a,e){let t=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,r=!1;function o(P,D,F,L,N){let H=!1,X=u(P,L,F,D);s!==X&&(s=X,l(s.object)),H=f(P,L,F,N),H&&m(P,L,F,N),N!==null&&e.update(N,a.ELEMENT_ARRAY_BUFFER),(H||r)&&(r=!1,v(P,D,F,L),N!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return a.createVertexArray()}function l(P){return a.bindVertexArray(P)}function h(P){return a.deleteVertexArray(P)}function u(P,D,F,L){let N=L.wireframe===!0,H=n[D.id];H===void 0&&(H={},n[D.id]=H);let X=P.isInstancedMesh===!0?P.id:0,B=H[X];B===void 0&&(B={},H[X]=B);let G=B[F.id];G===void 0&&(G={},B[F.id]=G);let K=G[N];return K===void 0&&(K=d(c()),G[N]=K),K}function d(P){let D=[],F=[],L=[];for(let N=0;N<t;N++)D[N]=0,F[N]=0,L[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:L,object:P,attributes:{},index:null}}function f(P,D,F,L){let N=s.attributes,H=D.attributes,X=0,B=F.getAttributes();for(let G in B)if(B[G].location>=0){let $=N[G],ve=H[G];if(ve===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(ve=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(ve=P.instanceColor)),$===void 0||$.attribute!==ve||ve&&$.data!==ve.data)return!0;X++}return s.attributesNum!==X||s.index!==L}function m(P,D,F,L){let N={},H=D.attributes,X=0,B=F.getAttributes();for(let G in B)if(B[G].location>=0){let $=H[G];$===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&($=P.instanceColor));let ve={};ve.attribute=$,$&&$.data&&(ve.data=$.data),N[G]=ve,X++}s.attributes=N,s.attributesNum=X,s.index=L}function b(){let P=s.newAttributes;for(let D=0,F=P.length;D<F;D++)P[D]=0}function g(P){p(P,0)}function p(P,D){let F=s.newAttributes,L=s.enabledAttributes,N=s.attributeDivisors;F[P]=1,L[P]===0&&(a.enableVertexAttribArray(P),L[P]=1),N[P]!==D&&(a.vertexAttribDivisor(P,D),N[P]=D)}function x(){let P=s.newAttributes,D=s.enabledAttributes;for(let F=0,L=D.length;F<L;F++)D[F]!==P[F]&&(a.disableVertexAttribArray(F),D[F]=0)}function T(P,D,F,L,N,H,X){X===!0?a.vertexAttribIPointer(P,D,F,N,H):a.vertexAttribPointer(P,D,F,L,N,H)}function v(P,D,F,L){b();let N=L.attributes,H=F.getAttributes(),X=D.defaultAttributeValues;for(let B in H){let G=H[B];if(G.location>=0){let K=N[B];if(K===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(K=P.instanceColor)),K!==void 0){let $=K.normalized,ve=K.itemSize,pe=e.get(K);if(pe===void 0)continue;let lt=pe.buffer,Ye=pe.type,et=pe.bytesPerElement,J=Ye===a.INT||Ye===a.UNSIGNED_INT||K.gpuType===Zo;if(K.isInterleavedBufferAttribute){let te=K.data,Se=te.stride,ze=K.offset;if(te.isInstancedInterleavedBuffer){for(let ye=0;ye<G.locationSize;ye++)p(G.location+ye,te.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ye=0;ye<G.locationSize;ye++)g(G.location+ye);a.bindBuffer(a.ARRAY_BUFFER,lt);for(let ye=0;ye<G.locationSize;ye++)T(G.location+ye,ve/G.locationSize,Ye,$,Se*et,(ze+ve/G.locationSize*ye)*et,J)}else{if(K.isInstancedBufferAttribute){for(let te=0;te<G.locationSize;te++)p(G.location+te,K.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let te=0;te<G.locationSize;te++)g(G.location+te);a.bindBuffer(a.ARRAY_BUFFER,lt);for(let te=0;te<G.locationSize;te++)T(G.location+te,ve/G.locationSize,Ye,$,ve*et,ve/G.locationSize*te*et,J)}}else if(X!==void 0){let $=X[B];if($!==void 0)switch($.length){case 2:a.vertexAttrib2fv(G.location,$);break;case 3:a.vertexAttrib3fv(G.location,$);break;case 4:a.vertexAttrib4fv(G.location,$);break;default:a.vertexAttrib1fv(G.location,$)}}}}x()}function y(){w();for(let P in n){let D=n[P];for(let F in D){let L=D[F];for(let N in L){let H=L[N];for(let X in H)h(H[X].object),delete H[X];delete L[N]}}delete n[P]}}function S(P){if(n[P.id]===void 0)return;let D=n[P.id];for(let F in D){let L=D[F];for(let N in L){let H=L[N];for(let X in H)h(H[X].object),delete H[X];delete L[N]}}delete n[P.id]}function A(P){for(let D in n){let F=n[D];for(let L in F){let N=F[L];if(N[P.id]===void 0)continue;let H=N[P.id];for(let X in H)h(H[X].object),delete H[X];delete N[P.id]}}}function _(P){for(let D in n){let F=n[D],L=P.isInstancedMesh===!0?P.id:0,N=F[L];if(N!==void 0){for(let H in N){let X=N[H];for(let B in X)h(X[B].object),delete X[B];delete N[H]}delete F[L],Object.keys(F).length===0&&delete n[D]}}}function w(){C(),r=!0,s!==i&&(s=i,l(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:C,dispose:y,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:b,enableAttribute:g,disableUnusedAttributes:x}}function $g(a,e,t){let n;function i(c){n=c}function s(c,l){a.drawArrays(n,c,l),t.update(l,n,1)}function r(c,l,h){h!==0&&(a.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function Qg(a,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){return!(A!==yn&&n.convert(A)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let _=A===Wt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==mn&&A!==_n&&!_&&n.convert(A)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Re("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),m=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_TEXTURE_SIZE),g=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),p=a.getParameter(a.MAX_VERTEX_ATTRIBS),x=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),T=a.getParameter(a.MAX_VARYING_VECTORS),v=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),y=a.getParameter(a.MAX_SAMPLES),S=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:T,maxFragmentUniforms:v,maxSamples:y,samples:S}}function eb(a){let e=this,t=null,n=0,i=!1,s=!1,r=new Nn,o=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,p=a.get(u);if(!i||m===null||m.length===0||s&&!g)s?h(null):l();else{let x=s?0:n,T=x*4,v=p.clippingState||null;c.value=v,v=h(m,d,T,f);for(let y=0;y!==T;++y)v[y]=t[y];p.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let b=u!==null?u.length:0,g=null;if(b!==0){if(g=c.value,m!==!0||g===null){let p=f+b*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,v=f;T!==b;++T,v+=4)r.copy(u[T]).applyMatrix4(x,o),r.normal.toArray(g,v),g[v+3]=r.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}var _r=4,tb=6,nb=20,ib=256,Ra=new $n,cf=new se,mh=null,gh=0,bh=0,xh=!1,sb=new R,ws=new R,Mr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:r=256,position:o=sb}=s;mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(mh,gh,bh),this._renderer.xr.enabled=xh,e.scissorTest=!1,vr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xi||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:Wt,format:yn,colorSpace:cn,depthBuffer:!1},i=lf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lf(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=rb(s)),this._blurMaterial=ob(s,e,t),this._ggxMaterial=ab(s,e,t)}return i}_compileMaterial(e){let t=new be(new it,e);this._renderer.compile(t,Ra)}_sceneToCubeUV(e,t,n,i,s){let c=new Ct(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(cf),u.toneMapping=Gn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new be(new Le,new ft({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,g=b.material,p=!1,x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,p=!0):(g.color.copy(cf),p=!0);for(let T=0;T<6;T++){let v=T%3;v===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[T],s.y,s.z)):v===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[T]));let y=this._cubeSize;vr(i,v*y,T>2?y:0,y,y),u.setRenderTarget(i),p&&u.render(b,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Xi||e.mapping===Ss;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=uf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hf());let s=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;vr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,Ra)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[n];o.material=r;let c=r.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=l*1.25,f=u*d,{_lodMax:m}=this,b=this._sizeLods[n],g=3*b*(n>m-_r?n-m+_r:0),p=4*(this._cubeSize-b);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=m-t,vr(s,g,p,3*b,2*b),i.setRenderTarget(s),i.render(o,Ra),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=m-n,vr(e,g,p,3*b,2*b),i.setRenderTarget(e),i.render(o,Ra)}_blur(e,t,n,i){let s=this._pingPongRenderTarget,r=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,r),this._blurPass(s,e,n,n,r)}_blurPass(e,t,n,i,s){let r=this._renderer,o=this._blurMaterial,c=this._lodMeshes[i];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],u=3*h*(i>this._lodMax-_r?i-this._lodMax+_r:0),d=4*(this._cubeSize-h);vr(t,u,d,3*h,2*h),r.setRenderTarget(t),r.render(c,Ra)}};function rb(a){let e=[],t=[],n=a,i=a-_r+1+tb;for(let s=0;s<i;s++){let r=Math.pow(2,n);e.push(r);let o=1/(r-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,d=6,f=3,m=new Float32Array(f*d*u),b=new Float32Array(f*d*u);for(let p=0;p<u;p++){let x=p%3*2/3-1,T=p>2?0:-1,v=[x,T,0,x+2/3,T,0,x+2/3,T+1,0,x,T,0,x+2/3,T+1,0,x,T+1,0];m.set(v,f*d*p);for(let y=0;y<d;y++){let S=h[y*2]*2-1,A=h[y*2+1]*2-1;p===0?ws.set(1,A,S):p===1?ws.set(-S,1,-A):p===2?ws.set(-S,A,1):p===3?ws.set(-1,A,-S):p===4?ws.set(-S,-1,A):ws.set(S,A,-1),ws.toArray(b,(p*d+y)*f)}}let g=new it;g.setAttribute("position",new St(m,f)),g.setAttribute("outputDirection",new St(b,f)),t.push(new be(g,null)),n>_r&&n--}return{lodMeshes:t,sizeLods:e}}function lf(a,e,t){let n=new Pt(a,e,t);return n.texture.mapping=va,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vr(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function ab(a,e,t){return new Tt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ib,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zc(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function ob(a,e,t){return new Tt({name:"SphericalGaussianBlur",defines:{SAMPLES:nb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:zc(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function hf(){return new Tt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zc(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function uf(){return new Tt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function zc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Bc=class extends Pt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new sa(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Le(5,5,5),s=new Tt({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:An});s.uniforms.tEquirect.value=t;let r=new be(i,s),o=t.minFilter;return t.minFilter===Vn&&(t.minFilter=Lt),new Go(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}};function cb(a){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?r(d):s(d)}function s(d){if(d&&d.isTexture){let f=d.mapping;if(f===Ko||f===Yo)if(e.has(d)){let m=e.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let b=new Bc(m.height);return b.fromEquirectangularTexture(a,d),e.set(d,b),d.addEventListener("dispose",l),o(b.texture,d.mapping)}else return null}}return d}function r(d){if(d&&d.isTexture){let f=d.mapping,m=f===Ko||f===Yo,b=f===Xi||f===Ss;if(m||b){let g=t.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Mr(a)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let x=d.image;return m&&x&&x.height>0||b&&x&&c(x)?(n===null&&(n=new Mr(a)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===Ko?d.mapping=Xi:f===Yo&&(d.mapping=Ss),d}function c(d){let f=0,m=6;for(let b=0;b<m;b++)d[b]!==void 0&&f++;return f===m}function l(d){let f=d.target;f.removeEventListener("dispose",l);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function lb(a){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=a.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&ls("WebGLRenderer: "+n+" extension not supported."),i}}}function hb(a,e,t,n){let i={},s=new WeakMap;function r(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",r),delete i[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],a.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,m=u.attributes.position,b=0;if(m===void 0)return;if(f!==null){let x=f.array;b=f.version;for(let T=0,v=x.length;T<v;T+=3){let y=x[T+0],S=x[T+1],A=x[T+2];d.push(y,S,S,A,A,y)}}else{let x=m.array;b=m.version;for(let T=0,v=x.length/3-1;T<v;T+=3){let y=T+0,S=T+1,A=T+2;d.push(y,S,S,A,A,y)}}let g=new(m.count>=65535?Qr:$r)(d,1);g.version=b;let p=s.get(u);p&&e.remove(p),s.set(u,g)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function ub(a,e,t){let n;function i(u){n=u}let s,r;function o(u){s=u.type,r=u.bytesPerElement}function c(u,d){a.drawElements(n,d,s,u*r),t.update(d,n,1)}function l(u,d,f){f!==0&&(a.drawElementsInstanced(n,d,s,u*r,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,u,0,f);let b=0;for(let g=0;g<f;g++)b+=d[g];t.update(b,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function db(a){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case a.TRIANGLES:t.triangles+=o*(s/3);break;case a.LINES:t.lines+=o*(s/2);break;case a.LINE_STRIP:t.lines+=o*(s-1);break;case a.LINE_LOOP:t.lines+=o*s;break;case a.POINTS:t.points+=o*s;break;default:Ue("WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function fb(a,e,t){let n=new WeakMap,i=new dt;function s(r,o,c){let l=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let w=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],T=0;f===!0&&(T=1),m===!0&&(T=2),b===!0&&(T=3);let v=o.attributes.position.count*T,y=1;v>e.maxTextureSize&&(y=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let S=new Float32Array(v*y*4*u),A=new Jr(S,v,y,u);A.type=_n,A.needsUpdate=!0;let _=T*4;for(let C=0;C<u;C++){let P=g[C],D=p[C],F=x[C],L=v*y*4*C;for(let N=0;N<P.count;N++){let H=N*_;f===!0&&(i.fromBufferAttribute(P,N),S[L+H+0]=i.x,S[L+H+1]=i.y,S[L+H+2]=i.z,S[L+H+3]=0),m===!0&&(i.fromBufferAttribute(D,N),S[L+H+4]=i.x,S[L+H+5]=i.y,S[L+H+6]=i.z,S[L+H+7]=0),b===!0&&(i.fromBufferAttribute(F,N),S[L+H+8]=i.x,S[L+H+9]=i.y,S[L+H+10]=i.z,S[L+H+11]=F.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new xe(v,y)},n.set(o,d),o.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(a,"morphTexture",r.morphTexture,t);else{let f=0;for(let b=0;b<l.length;b++)f+=l[b];let m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(a,"morphTargetBaseInfluence",m),c.getUniforms().setValue(a,"morphTargetInfluences",l)}c.getUniforms().setValue(a,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(a,"morphTargetsTextureSize",d.size)}return{update:s}}function pb(a,e,t,n,i){let s=new WeakMap;function r(l){let h=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return d}function o(){s=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}var mb={[fa]:"LINEAR_TONE_MAPPING",[pa]:"REINHARD_TONE_MAPPING",[ma]:"CINEON_TONE_MAPPING",[Ms]:"ACES_FILMIC_TONE_MAPPING",[ba]:"AGX_TONE_MAPPING",[xa]:"NEUTRAL_TONE_MAPPING",[ga]:"CUSTOM_TONE_MAPPING"};function gb(a,e,t,n,i,s){let r=new Pt(e,t,{type:a,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new it;l.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ge([0,2,0,0,2,0],2));let h=new hr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new be(l,h),d=new $n(-1,1,1,-1,0,1),f=null,m=null,b=!1,g,p=null,x=[],T=!1;this.setSize=function(v,y){r.setSize(v,y),o!==null&&o.setSize(v,y),c!==null&&c.setSize(v,y);for(let S=0;S<x.length;S++){let A=x[S];A.setSize&&A.setSize(v,y)}},this.setEffects=function(v){x=v,T=x.length>0&&x[0].isRenderPass===!0;let y=r.width,S=r.height;x.length>0&&o===null&&(o=new Pt(y,S,{type:Wt,depthBuffer:!1,stencilBuffer:!1}),c=new Pt(y,S,{type:Wt,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<x.length;A++){let _=x[A];_.setSize&&_.setSize(y,S)}},this.begin=function(v,y){if(b||v.toneMapping===Gn&&x.length===0)return!1;if(p=y,y!==null){let S=y.width,A=y.height;(r.width!==S||r.height!==A)&&this.setSize(S,A)}return T===!1&&v.setRenderTarget(r),g=v.toneMapping,v.toneMapping=Gn,!0},this.hasRenderPass=function(){return T},this.end=function(v,y){v.toneMapping=g,b=!0;let S=r,A=o;for(let _=0;_<x.length;_++){let w=x[_];w.enabled!==!1&&(w.render(v,A,S,y),w.needsSwap!==!1&&(S=A,A=A===o?c:o))}if(f!==v.outputColorSpace||m!==v.toneMapping){f=v.outputColorSpace,m=v.toneMapping,h.defines={},We.getTransfer(f)===rt&&(h.defines.SRGB_TRANSFER="");let _=mb[m];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(p),v.render(u,d),p=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var If=new Vt,yh=new Gi(1,1),Lf=new Jr,Df=new Po,Ff=new sa,df=[],ff=[],pf=new Float32Array(16),mf=new Float32Array(9),gf=new Float32Array(4);function Sr(a,e,t){let n=a[0];if(n<=0||n>0)return a;let i=e*t,s=df[i];if(s===void 0&&(s=new Float32Array(i),df[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,a[r].toArray(s,o)}return s}function qt(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Xt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Gc(a,e){let t=ff[e];t===void 0&&(t=new Int32Array(e),ff[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function bb(a,e){let t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function xb(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;a.uniform2fv(this.addr,e),Xt(t,e)}}function vb(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;a.uniform3fv(this.addr,e),Xt(t,e)}}function _b(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;a.uniform4fv(this.addr,e),Xt(t,e)}}function yb(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,n))return;gf.set(n),a.uniformMatrix2fv(this.addr,!1,gf),Xt(t,n)}}function Mb(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,n))return;mf.set(n),a.uniformMatrix3fv(this.addr,!1,mf),Xt(t,n)}}function Sb(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,n))return;pf.set(n),a.uniformMatrix4fv(this.addr,!1,pf),Xt(t,n)}}function Tb(a,e){let t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Eb(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;a.uniform2iv(this.addr,e),Xt(t,e)}}function wb(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;a.uniform3iv(this.addr,e),Xt(t,e)}}function Ab(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;a.uniform4iv(this.addr,e),Xt(t,e)}}function Rb(a,e){let t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Cb(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;a.uniform2uiv(this.addr,e),Xt(t,e)}}function Pb(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;a.uniform3uiv(this.addr,e),Xt(t,e)}}function Ib(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;a.uniform4uiv(this.addr,e),Xt(t,e)}}function Lb(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);let s;this.type===a.SAMPLER_2D_SHADOW?(yh.compareFunction=t.isReversedDepthBuffer()?Uc:Nc,s=yh):s=If,t.setTexture2D(e||s,i)}function Db(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Df,i)}function Fb(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ff,i)}function Nb(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Lf,i)}function Ub(a){switch(a){case 5126:return bb;case 35664:return xb;case 35665:return vb;case 35666:return _b;case 35674:return yb;case 35675:return Mb;case 35676:return Sb;case 5124:case 35670:return Tb;case 35667:case 35671:return Eb;case 35668:case 35672:return wb;case 35669:case 35673:return Ab;case 5125:return Rb;case 36294:return Cb;case 36295:return Pb;case 36296:return Ib;case 35678:case 36198:case 36298:case 36306:case 35682:return Lb;case 35679:case 36299:case 36307:return Db;case 35680:case 36300:case 36308:case 36293:return Fb;case 36289:case 36303:case 36311:case 36292:return Nb}}function kb(a,e){a.uniform1fv(this.addr,e)}function Ob(a,e){let t=Sr(e,this.size,2);a.uniform2fv(this.addr,t)}function Bb(a,e){let t=Sr(e,this.size,3);a.uniform3fv(this.addr,t)}function Hb(a,e){let t=Sr(e,this.size,4);a.uniform4fv(this.addr,t)}function zb(a,e){let t=Sr(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Gb(a,e){let t=Sr(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Vb(a,e){let t=Sr(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Wb(a,e){a.uniform1iv(this.addr,e)}function qb(a,e){a.uniform2iv(this.addr,e)}function Xb(a,e){a.uniform3iv(this.addr,e)}function jb(a,e){a.uniform4iv(this.addr,e)}function Kb(a,e){a.uniform1uiv(this.addr,e)}function Yb(a,e){a.uniform2uiv(this.addr,e)}function Jb(a,e){a.uniform3uiv(this.addr,e)}function Zb(a,e){a.uniform4uiv(this.addr,e)}function $b(a,e,t){let n=this.cache,i=e.length,s=Gc(t,i);qt(n,s)||(a.uniform1iv(this.addr,s),Xt(n,s));let r;this.type===a.SAMPLER_2D_SHADOW?r=yh:r=If;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||r,s[o])}function Qb(a,e,t){let n=this.cache,i=e.length,s=Gc(t,i);qt(n,s)||(a.uniform1iv(this.addr,s),Xt(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Df,s[r])}function ex(a,e,t){let n=this.cache,i=e.length,s=Gc(t,i);qt(n,s)||(a.uniform1iv(this.addr,s),Xt(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Ff,s[r])}function tx(a,e,t){let n=this.cache,i=e.length,s=Gc(t,i);qt(n,s)||(a.uniform1iv(this.addr,s),Xt(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Lf,s[r])}function nx(a){switch(a){case 5126:return kb;case 35664:return Ob;case 35665:return Bb;case 35666:return Hb;case 35674:return zb;case 35675:return Gb;case 35676:return Vb;case 5124:case 35670:return Wb;case 35667:case 35671:return qb;case 35668:case 35672:return Xb;case 35669:case 35673:return jb;case 5125:return Kb;case 36294:return Yb;case 36295:return Jb;case 36296:return Zb;case 35678:case 36198:case 36298:case 36306:case 35682:return $b;case 35679:case 36299:case 36307:return Qb;case 35680:case 36300:case 36308:case 36293:return ex;case 36289:case 36303:case 36311:case 36292:return tx}}var Mh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ub(t.type)}},Sh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nx(t.type)}},Th=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},vh=/(\w+)(\])?(\[|\.)?/g;function bf(a,e){a.seq.push(e),a.map[e.id]=e}function ix(a,e,t){let n=a.name,i=n.length;for(vh.lastIndex=0;;){let s=vh.exec(n),r=vh.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===i){bf(t,l===void 0?new Mh(o,a,e):new Sh(o,a,e));break}else{let u=t.map[o];u===void 0&&(u=new Th(o),bf(t,u)),t=u}}}var yr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let o=e.getActiveUniform(t,r),c=e.getUniformLocation(t,o.name);ix(o,c,this)}let i=[],s=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(r):s.push(r);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let r=e[i];r.id in t&&n.push(r)}return n}};function xf(a,e,t){let n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}var sx=37297,rx=0;function ax(a,e){let t=a.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){let o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}var vf=new He;function ox(a){We._getMatrix(vf,We.workingColorSpace,a);let e=`mat3( ${vf.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(a)){case Kr:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function _f(a,e,t){let n=a.getShaderParameter(e,a.COMPILE_STATUS),s=(a.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+ax(a.getShaderSource(e),o)}else return s}function cx(a,e){let t=ox(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var lx={[fa]:"Linear",[pa]:"Reinhard",[ma]:"Cineon",[Ms]:"ACESFilmic",[ba]:"AgX",[xa]:"Neutral",[ga]:"Custom"};function hx(a,e){let t=lx[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Oc=new R;function ux(){We.getLuminanceCoefficients(Oc);let a=Oc.x.toFixed(4),e=Oc.y.toFixed(4),t=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dx(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pa).join(`
`)}function fx(a){let e=[];for(let t in a){let n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function px(a,e){let t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=a.getActiveAttrib(e,i),r=s.name,o=1;s.type===a.FLOAT_MAT2&&(o=2),s.type===a.FLOAT_MAT3&&(o=3),s.type===a.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:a.getAttribLocation(e,r),locationSize:o}}return t}function Pa(a){return a!==""}function yf(a,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mf(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var mx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eh(a){return a.replace(mx,bx)}var gx=new Map;function bx(a,e){let t=Xe[e];if(t===void 0){let n=gx.get(e);if(n!==void 0)t=Xe[n],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Eh(t)}var xx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sf(a){return a.replace(xx,vx)}function vx(a,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Tf(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}var _x={[_s]:"SHADOWMAP_TYPE_PCF",[pr]:"SHADOWMAP_TYPE_VSM"};function yx(a){return _x[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Mx={[Xi]:"ENVMAP_TYPE_CUBE",[Ss]:"ENVMAP_TYPE_CUBE",[va]:"ENVMAP_TYPE_CUBE_UV"};function Sx(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":Mx[a.envMapMode]||"ENVMAP_TYPE_CUBE"}var Tx={[Ss]:"ENVMAP_MODE_REFRACTION"};function Ex(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":Tx[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}var wx={[jo]:"ENVMAP_BLENDING_MULTIPLY",[Od]:"ENVMAP_BLENDING_MIX",[Bd]:"ENVMAP_BLENDING_ADD"};function Ax(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":wx[a.combine]||"ENVMAP_BLENDING_NONE"}function Rx(a){let e=a.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Cx(a,e,t,n){let i=a.getContext(),s=t.defines,r=t.vertexShader,o=t.fragmentShader,c=yx(t),l=Sx(t),h=Ex(t),u=Ax(t),d=Rx(t),f=dx(t),m=fx(s),b=i.createProgram(),g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Pa).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Pa).join(`
`),p.length>0&&(p+=`
`)):(g=[Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pa).join(`
`),p=[Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Gn?hx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,cx("linearToOutputTexel",t.outputColorSpace),ux(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pa).join(`
`)),r=Eh(r),r=yf(r,t),r=Mf(r,t),o=Eh(o),o=yf(o,t),o=Mf(o,t),r=Sf(r),o=Sf(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=x+g+r,v=x+p+o,y=xf(i,i.VERTEX_SHADER,T),S=xf(i,i.FRAGMENT_SHADER,v);i.attachShader(b,y),i.attachShader(b,S),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function A(P){if(a.debug.checkShaderErrors){let D=i.getProgramInfoLog(b)||"",F=i.getShaderInfoLog(y)||"",L=i.getShaderInfoLog(S)||"",N=D.trim(),H=F.trim(),X=L.trim(),B=!0,G=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(B=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,b,y,S);else{let K=_f(i,y,"vertex"),$=_f(i,S,"fragment");Ue("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+K+`
`+$)}else N!==""?Re("WebGLProgram: Program Info Log:",N):(H===""||X==="")&&(G=!1);G&&(P.diagnostics={runnable:B,programLog:N,vertexShader:{log:H,prefix:g},fragmentShader:{log:X,prefix:p}})}i.deleteShader(y),i.deleteShader(S),_=new yr(i,b),w=px(i,b)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(b,sx)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rx++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=y,this.fragmentShader=S,this}var Px=0,wh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ah(e),t.set(e,n)),n}},Ah=class{constructor(e){this.id=Px++,this.code=e,this.usedTimes=0}};function Ix(a){return a===Ki||a===Ta||a===Ea}function Lx(a,e,t,n,i,s){let r=new sr,o=new wh,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function b(_,w,C,P,D,F){let L=P.fog,N=D.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,B=e.get(_.envMap||H,X),G=B&&B.mapping===va?B.image.height:null,K=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Re("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let $=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ve=$!==void 0?$.length:0,pe=0;N.morphAttributes.position!==void 0&&(pe=1),N.morphAttributes.normal!==void 0&&(pe=2),N.morphAttributes.color!==void 0&&(pe=3);let lt,Ye,et,J;if(K){let _t=ti[K];lt=_t.vertexShader,Ye=_t.fragmentShader}else{lt=_.vertexShader,Ye=_.fragmentShader;let _t=o.getVertexShaderStage(_),ot=o.getFragmentShaderStage(_);o.update(_,_t,ot),et=_t.id,J=ot.id}let te=a.getRenderTarget(),Se=a.state.buffers.depth.getReversed(),ze=D.isInstancedMesh===!0,ye=D.isBatchedMesh===!0,je=!!_.map,Gt=!!_.matcap,Je=!!B,st=!!_.aoMap,vt=!!_.lightMap,Qe=!!_.bumpMap&&_.wireframe===!1,wt=!!_.normalMap,jt=!!_.displacementMap,dn=!!_.emissiveMap,Rt=!!_.metalnessMap,Ot=!!_.roughnessMap,O=_.anisotropy>0,Zt=_.clearcoat>0,ht=_.dispersion>0,I=_.retroreflectivity>0,M=_.iridescence>0,z=_.sheen>0,q=_.transmission>0,Y=O&&!!_.anisotropyMap,ie=Zt&&!!_.clearcoatMap,ae=Zt&&!!_.clearcoatNormalMap,Z=Zt&&!!_.clearcoatRoughnessMap,ee=M&&!!_.iridescenceMap,oe=M&&!!_.iridescenceThicknessMap,Pe=z&&!!_.sheenColorMap,ue=z&&!!_.sheenRoughnessMap,ce=!!_.specularMap,Ie=!!_.specularColorMap,Ne=!!_.specularIntensityMap,Ve=q&&!!_.transmissionMap,k=q&&!!_.thicknessMap,le=!!_.gradientMap,Q=!!_.alphaMap,he=_.alphaTest>0,ge=!!_.alphaHash,ne=!!_.extensions,De=Gn;_.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(De=a.toneMapping);let we={shaderID:K,shaderType:_.type,shaderName:_.name,vertexShader:lt,fragmentShader:Ye,defines:_.defines,customVertexShaderID:et,customFragmentShaderID:J,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:ye,batchingColor:ye&&D._colorsTexture!==null,instancing:ze,instancingColor:ze&&D.instanceColor!==null,instancingMorph:ze&&D.morphTexture!==null,outputColorSpace:te===null?a.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:je,matcap:Gt,envMap:Je,envMapMode:Je&&B.mapping,envMapCubeUVHeight:G,aoMap:st,lightMap:vt,bumpMap:Qe,normalMap:wt,displacementMap:jt,emissiveMap:dn,normalMapObjectSpace:wt&&_.normalMapType===qd,normalMapTangentSpace:wt&&_.normalMapType===Aa,packedNormalMap:wt&&_.normalMapType===Aa&&Ix(_.normalMap.format),metalnessMap:Rt,roughnessMap:Ot,anisotropy:O,anisotropyMap:Y,clearcoat:Zt,clearcoatMap:ie,clearcoatNormalMap:ae,clearcoatRoughnessMap:Z,dispersion:ht,retroreflection:I,iridescence:M,iridescenceMap:ee,iridescenceThicknessMap:oe,sheen:z,sheenColorMap:Pe,sheenRoughnessMap:ue,specularMap:ce,specularColorMap:Ie,specularIntensityMap:Ne,transmission:q,transmissionMap:Ve,thicknessMap:k,gradientMap:le,opaque:_.transparent===!1&&_.blending===qi&&_.alphaToCoverage===!1,alphaMap:Q,alphaTest:he,alphaHash:ge,combine:_.combine,mapUv:je&&m(_.map.channel),aoMapUv:st&&m(_.aoMap.channel),lightMapUv:vt&&m(_.lightMap.channel),bumpMapUv:Qe&&m(_.bumpMap.channel),normalMapUv:wt&&m(_.normalMap.channel),displacementMapUv:jt&&m(_.displacementMap.channel),emissiveMapUv:dn&&m(_.emissiveMap.channel),metalnessMapUv:Rt&&m(_.metalnessMap.channel),roughnessMapUv:Ot&&m(_.roughnessMap.channel),anisotropyMapUv:Y&&m(_.anisotropyMap.channel),clearcoatMapUv:ie&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:ae&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:ue&&m(_.sheenRoughnessMap.channel),specularMapUv:ce&&m(_.specularMap.channel),specularColorMapUv:Ie&&m(_.specularColorMap.channel),specularIntensityMapUv:Ne&&m(_.specularIntensityMap.channel),transmissionMapUv:Ve&&m(_.transmissionMap.channel),thicknessMapUv:k&&m(_.thicknessMap.channel),alphaMapUv:Q&&m(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(wt||O),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!N.attributes.uv&&(je||Q),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&wt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Se,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:pe,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:a.shadowMap.enabled&&C.length>0,shadowMapType:a.shadowMap.type,toneMapping:De,decodeVideoTexture:je&&_.map.isVideoTexture===!0&&We.getTransfer(_.map.colorSpace)===rt,decodeVideoTextureEmissive:dn&&_.emissiveMap.isVideoTexture===!0&&We.getTransfer(_.emissiveMap.colorSpace)===rt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===un,flipSided:_.side===Ut,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ne&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&_.extensions.multiDraw===!0||ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return we.vertexUv1s=c.has(1),we.vertexUv2s=c.has(2),we.vertexUv3s=c.has(3),c.clear(),we}function g(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)w.push(C),w.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(w,_),x(w,_),w.push(a.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function p(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function x(_,w){r.disableAll(),w.instancing&&r.enable(0),w.instancingColor&&r.enable(1),w.instancingMorph&&r.enable(2),w.matcap&&r.enable(3),w.envMap&&r.enable(4),w.normalMapObjectSpace&&r.enable(5),w.normalMapTangentSpace&&r.enable(6),w.clearcoat&&r.enable(7),w.iridescence&&r.enable(8),w.alphaTest&&r.enable(9),w.vertexColors&&r.enable(10),w.vertexAlphas&&r.enable(11),w.vertexUv1s&&r.enable(12),w.vertexUv2s&&r.enable(13),w.vertexUv3s&&r.enable(14),w.vertexTangents&&r.enable(15),w.anisotropy&&r.enable(16),w.alphaHash&&r.enable(17),w.batching&&r.enable(18),w.dispersion&&r.enable(19),w.retroreflection&&r.enable(24),w.batchingColor&&r.enable(20),w.gradientMap&&r.enable(21),w.packedNormalMap&&r.enable(22),w.vertexNormals&&r.enable(23),_.push(r.mask),r.disableAll(),w.fog&&r.enable(0),w.useFog&&r.enable(1),w.flatShading&&r.enable(2),w.logarithmicDepthBuffer&&r.enable(3),w.reversedDepthBuffer&&r.enable(4),w.skinning&&r.enable(5),w.morphTargets&&r.enable(6),w.morphNormals&&r.enable(7),w.morphColors&&r.enable(8),w.premultipliedAlpha&&r.enable(9),w.shadowMapEnabled&&r.enable(10),w.doubleSided&&r.enable(11),w.flipSided&&r.enable(12),w.useDepthPacking&&r.enable(13),w.dithering&&r.enable(14),w.transmission&&r.enable(15),w.sheen&&r.enable(16),w.opaque&&r.enable(17),w.pointsUvs&&r.enable(18),w.decodeVideoTexture&&r.enable(19),w.decodeVideoTextureEmissive&&r.enable(20),w.alphaToCoverage&&r.enable(21),w.numLightProbeGrids>0&&r.enable(22),w.hasPositionAttribute&&r.enable(23),_.push(r.mask)}function T(_){let w=f[_.type],C;if(w){let P=ti[w];C=wi.clone(P.uniforms)}else C=_.uniforms;return C}function v(_,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new Cx(a,w,_,i),l.push(C),h.set(w,C)),C}function y(_){if(--_.usedTimes===0){let w=l.indexOf(_);l[w]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function S(_){o.remove(_)}function A(){o.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:T,acquireProgram:v,releaseProgram:y,releaseShaderCache:S,programs:l,dispose:A}}function Dx(){let a=new WeakMap;function e(r){return a.has(r)}function t(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function n(r){a.delete(r)}function i(r,o,c){a.get(r)[o]=c}function s(){a=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Fx(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function Ef(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function wf(){let a=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,b,g,p){let x=a[e];return x===void 0?(x={id:d.id,object:d,geometry:f,material:m,materialVariant:r(d),groupOrder:b,renderOrder:d.renderOrder,z:g,group:p},a[e]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=m,x.materialVariant=r(d),x.groupOrder=b,x.renderOrder=d.renderOrder,x.z=g,x.group=p),e++,x}function c(d,f,m,b,g,p,x){x.reversedDepth===!0&&(g=-g);let T=o(d,f,m,b,g,p);m.transmission>0?n.push(T):m.transparent===!0?i.push(T):t.push(T)}function l(d,f,m,b,g,p){let x=o(d,f,m,b,g,p);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):t.unshift(x)}function h(d,f){t.length>1&&t.sort(d||Fx),n.length>1&&n.sort(f||Ef),i.length>1&&i.sort(f||Ef)}function u(){for(let d=e,f=a.length;d<f;d++){let m=a[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:u,sort:h}}function Nx(){let a=new WeakMap;function e(n,i){let s=a.get(n),r;return s===void 0?(r=new wf,a.set(n,[r])):i>=s.length?(r=new wf,s.push(r)):r=s[i],r}function t(){a=new WeakMap}return{get:e,dispose:t}}function Ux(){let a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new R,color:new se};break;case"SpotLight":t={position:new R,direction:new R,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new se,groundColor:new se};break;case"RectAreaLight":t={color:new se,position:new R,halfWidth:new R,halfHeight:new R};break}return a[e.id]=t,t}}}function kx(){let a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}var Ox=0;function Bx(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Hx(a){let e=new Ux,t=kx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);let i=new R,s=new Oe,r=new Oe;function o(l){let h=0,u=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,m=0,b=0,g=0,p=0,x=0,T=0,v=0,y=0,S=0,A=0,_=0,w=0,C=0;l.sort(Bx);for(let D=0,F=l.length;D<F;D++){let L=l[D],N=L.color,H=L.intensity,X=L.distance,B=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ki?B=L.shadow.map.texture:B=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=N.r*H,u+=N.g*H,d+=N.b*H;else if(L.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(L.sh.coefficients[G],H);C++}else if(L.isSunLight){let G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let K=L.shadow,$=t.get(L);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[m]=$,n.sunShadowMap[m]=B;let ve=K.getViewportCount();for(let pe=0;pe<ve;pe++)n.sunShadowMatrix[b+pe]=K.getMatrix(pe),n.sunShadowCascade[b+pe]=K._cascadeData[pe];b+=ve,m++}n.sun[f]=G,f++}else if(L.isDirectionalLight){let G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let K=L.shadow,$=t.get(L);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,n.directionalShadow[g]=$,n.directionalShadowMap[g]=B,n.directionalShadowMatrix[g]=L.shadow.matrix,y++}n.directional[g]=G,g++}else if(L.isSpotLight){let G=e.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(N).multiplyScalar(H),G.distance=X,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,n.spot[x]=G;let K=L.shadow;if(L.map&&(n.spotLightMap[_]=L.map,_++,K.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[x]=K.matrix,L.castShadow){let $=t.get(L);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,n.spotShadow[x]=$,n.spotShadowMap[x]=B,A++}x++}else if(L.isRectAreaLight){let G=e.get(L);G.color.copy(N).multiplyScalar(H),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),n.rectArea[T]=G,T++}else if(L.isPointLight){let G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){let K=L.shadow,$=t.get(L);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,$.shadowCameraNear=K.camera.near,$.shadowCameraFar=K.camera.far,n.pointShadow[p]=$,n.pointShadowMap[p]=B,n.pointShadowMatrix[p]=L.shadow.matrix,S++}n.point[p]=G,p++}else if(L.isHemisphereLight){let G=e.get(L);G.skyColor.copy(L.color).multiplyScalar(H),G.groundColor.copy(L.groundColor).multiplyScalar(H),n.hemi[v]=G,v++}}T>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.sunLength!==f||P.directionalLength!==g||P.pointLength!==p||P.spotLength!==x||P.rectAreaLength!==T||P.hemiLength!==v||P.numSunShadows!==m||P.numDirectionalShadows!==y||P.numPointShadows!==S||P.numSpotShadows!==A||P.numSpotMaps!==_||P.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=g,n.spot.length=x,n.rectArea.length=T,n.point.length=p,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+_-w,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,P.sunLength=f,P.directionalLength=g,P.pointLength=p,P.spotLength=x,P.rectAreaLength=T,P.hemiLength=v,P.numSunShadows=m,P.numDirectionalShadows=y,P.numPointShadows=S,P.numSpotShadows=A,P.numSpotMaps=_,P.numLightProbes=C,n.version=Ox++)}function c(l,h){let u=0,d=0,f=0,m=0,b=0,g=0,p=h.matrixWorldInverse;for(let x=0,T=l.length;x<T;x++){let v=l[x];if(v.isSunLight){let y=n.sun[u];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let y=n.directional[d];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),d++}else if(v.isSpotLight){let y=n.spot[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let y=n.rectArea[b];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),r.identity(),s.copy(v.matrixWorld),s.premultiply(p),r.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),b++}else if(v.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let y=n.hemi[g];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function Af(a){let e=new Hx(a),t=[],n=[],i=[];function s(d){u.camera=d,t.length=0,n.length=0,i.length=0}function r(d){t.push(d)}function o(d){n.push(d)}function c(d){i.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:c}}function zx(a){let e=new WeakMap;function t(i,s=0){let r=e.get(i),o;return r===void 0?(o=new Af(a),e.set(i,[o])):s>=r.length?(o=new Af(a),r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Gx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vx=`uniform sampler2D shadow_pass;
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
}`,Wx=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],qx=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Rf=new Oe,Ca=new R,_h=new R;function Xx(a,e,t){let n=new cr,i=new xe,s=new xe,r=new dt,o=new No,c=new Uo,l={},h=t.maxTextureSize,u={[Qn]:Ut,[Ut]:Qn,[un]:un},d=new Tt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:Gx,fragmentShader:Vx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new it;m.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new be(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_s;let p=this.type;this.render=function(S,A,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===vd&&(Re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_s);let w=a.getRenderTarget(),C=a.getActiveCubeFace(),P=a.getActiveMipmapLevel(),D=a.state;D.setBlending(An),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let F=p!==this.type;F&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(N=>N.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,N=S.length;L<N;L++){let H=S[L],X=H.shadow;if(X===void 0){Re("WebGLShadowMap:",H,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);let B=X.getFrameExtents();i.multiply(B),s.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/B.x),i.x=s.x*B.x,X.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/B.y),i.y=s.y*B.y,X.mapSize.y=s.y));let G=a.state.buffers.depth.getReversed();if(X.camera._reversedDepth=G,X.map===null||F===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===pr){if(H.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Pt(i.x,i.y,{format:Ki,type:Wt,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),X.map.texture.name=H.name+".shadowMap",X.map.depthTexture=new Gi(i.x,i.y,_n),X.map.depthTexture.name=H.name+".shadowMapDepth",X.map.depthTexture.format=Yn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=At,X.map.depthTexture.magFilter=At}else H.isPointLight?(X.map=new Bc(i.x),X.map.depthTexture=new Do(i.x,Wn)):(X.map=new Pt(i.x,i.y),X.map.depthTexture=new Gi(i.x,i.y,Wn)),X.map.depthTexture.name=H.name+".shadowMap",X.map.depthTexture.format=Yn,this.type===_s?(X.map.depthTexture.compareFunction=G?Uc:Nc,X.map.depthTexture.minFilter=Lt,X.map.depthTexture.magFilter=Lt):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=At,X.map.depthTexture.magFilter=At);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==i.x||X.map.height!==i.y)&&X.map.setSize(i.x,i.y);let K=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();H.isPointLight!==!0&&X.updateMatrices(H,_);for(let $=0;$<K;$++){let ve=X.getCamera($);if(H.isPointLight){let pe=X.camera,lt=X.matrix,Ye=H.distance||pe.far;Ye!==pe.far&&(pe.far=Ye,pe.updateProjectionMatrix()),Ca.setFromMatrixPosition(H.matrixWorld),pe.position.copy(Ca),_h.copy(pe.position),_h.add(Wx[$]),pe.up.copy(qx[$]),pe.lookAt(_h),pe.updateMatrixWorld(),lt.makeTranslation(-Ca.x,-Ca.y,-Ca.z),Rf.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Rf,pe.coordinateSystem,pe.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)a.setRenderTarget(X.map,$),a.clear();else{$===0&&(a.setRenderTarget(X.map),a.clear());let pe=X.getViewport($);r.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),D.viewport(r)}n=X.getFrustum($),v(A,_,ve,H,this.type)}X.isPointLightShadow!==!0&&this.type===pr&&x(X,_),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,a.setRenderTarget(w,C,P)};function x(S,A){let _=e.update(b);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new Pt(i.x,i.y,{format:Ki,type:Wt}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,a.setRenderTarget(S.mapPass),a.clear(),a.renderBufferDirect(A,null,_,d,b,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,a.setRenderTarget(S.map),a.clear(),a.renderBufferDirect(A,null,_,f,b,null)}function T(S,A,_,w){let C=null,P=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)C=P;else if(C=_.isPointLight===!0?c:o,a.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let D=C.uuid,F=A.uuid,L=l[D];L===void 0&&(L={},l[D]=L);let N=L[F];N===void 0&&(N=C.clone(),L[F]=N,A.addEventListener("dispose",y)),C=N}if(C.visible=A.visible,C.wireframe=A.wireframe,w===pr?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:u[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let D=a.properties.get(C);D.light=_}return C}function v(S,A,_,w,C){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===pr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);let F=e.update(S),L=S.material;if(Array.isArray(L)){let N=F.groups;for(let H=0,X=N.length;H<X;H++){let B=N[H],G=L[B.materialIndex];if(G&&G.visible){let K=T(S,G,w,C);S.onBeforeShadow(a,S,A,_,F,K,B),a.renderBufferDirect(_,null,F,K,S,B),S.onAfterShadow(a,S,A,_,F,K,B)}}}else if(L.visible){let N=T(S,L,w,C);S.onBeforeShadow(a,S,A,_,F,N,null),a.renderBufferDirect(_,null,F,N,S,null),S.onAfterShadow(a,S,A,_,F,N,null)}}let D=S.children;for(let F=0,L=D.length;F<L;F++)v(D[F],A,_,w,C)}function y(S){S.target.removeEventListener("dispose",y);for(let _ in l){let w=l[_],C=S.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function jx(a,e){function t(){let k=!1,le=new dt,Q=null,he=new dt(0,0,0,0);return{setMask:function(ge){Q!==ge&&!k&&(a.colorMask(ge,ge,ge,ge),Q=ge)},setLocked:function(ge){k=ge},setClear:function(ge,ne,De,we,_t){_t===!0&&(ge*=we,ne*=we,De*=we),le.set(ge,ne,De,we),he.equals(le)===!1&&(a.clearColor(ge,ne,De,we),he.copy(le))},reset:function(){k=!1,Q=null,he.set(-1,0,0,0)}}}function n(){let k=!1,le=!1,Q=null,he=null,ge=null;return{setReversed:function(ne){if(le!==ne){let De=e.get("EXT_clip_control");ne?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),le=ne;let we=ge;ge=null,this.setClear(we)}},getReversed:function(){return le},setTest:function(ne){ne?te(a.DEPTH_TEST):Se(a.DEPTH_TEST)},setMask:function(ne){Q!==ne&&!k&&(a.depthMask(ne),Q=ne)},setFunc:function(ne){if(le&&(ne=nf[ne]),he!==ne){switch(ne){case yo:a.depthFunc(a.NEVER);break;case Mo:a.depthFunc(a.ALWAYS);break;case So:a.depthFunc(a.LESS);break;case $s:a.depthFunc(a.LEQUAL);break;case To:a.depthFunc(a.EQUAL);break;case Eo:a.depthFunc(a.GEQUAL);break;case wo:a.depthFunc(a.GREATER);break;case Ao:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}he=ne}},setLocked:function(ne){k=ne},setClear:function(ne){ge!==ne&&(ge=ne,le&&(ne=1-ne),a.clearDepth(ne))},reset:function(){k=!1,Q=null,he=null,ge=null,le=!1}}}function i(){let k=!1,le=null,Q=null,he=null,ge=null,ne=null,De=null,we=null,_t=null;return{setTest:function(ot){k||(ot?te(a.STENCIL_TEST):Se(a.STENCIL_TEST))},setMask:function(ot){le!==ot&&!k&&(a.stencilMask(ot),le=ot)},setFunc:function(ot,In,qn){(Q!==ot||he!==In||ge!==qn)&&(a.stencilFunc(ot,In,qn),Q=ot,he=In,ge=qn)},setOp:function(ot,In,qn){(ne!==ot||De!==In||we!==qn)&&(a.stencilOp(ot,In,qn),ne=ot,De=In,we=qn)},setLocked:function(ot){k=ot},setClear:function(ot){_t!==ot&&(a.clearStencil(ot),_t=ot)},reset:function(){k=!1,le=null,Q=null,he=null,ge=null,ne=null,De=null,we=null,_t=null}}}let s=new t,r=new n,o=new i,c=new WeakMap,l=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],b=null,g=!1,p=null,x=null,T=null,v=null,y=null,S=null,A=null,_=new se(0,0,0),w=0,C=!1,P=null,D=null,F=null,L=null,N=null,H=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,B=0,G=a.getParameter(a.VERSION);G.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=B>=1):G.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=B>=2);let K=null,$={},ve=a.getParameter(a.SCISSOR_BOX),pe=a.getParameter(a.VIEWPORT),lt=new dt().fromArray(ve),Ye=new dt().fromArray(pe);function et(k,le,Q,he){let ge=new Uint8Array(4),ne=a.createTexture();a.bindTexture(k,ne),a.texParameteri(k,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(k,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let De=0;De<Q;De++)k===a.TEXTURE_3D||k===a.TEXTURE_2D_ARRAY?a.texImage3D(le,0,a.RGBA,1,1,he,0,a.RGBA,a.UNSIGNED_BYTE,ge):a.texImage2D(le+De,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ge);return ne}let J={};J[a.TEXTURE_2D]=et(a.TEXTURE_2D,a.TEXTURE_2D,1),J[a.TEXTURE_CUBE_MAP]=et(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[a.TEXTURE_2D_ARRAY]=et(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),J[a.TEXTURE_3D]=et(a.TEXTURE_3D,a.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),te(a.DEPTH_TEST),r.setFunc($s),Qe(!1),wt(Vl),te(a.CULL_FACE),st(An);function te(k){h[k]!==!0&&(a.enable(k),h[k]=!0)}function Se(k){h[k]!==!1&&(a.disable(k),h[k]=!1)}function ze(k,le){return d[k]!==le?(a.bindFramebuffer(k,le),d[k]=le,k===a.DRAW_FRAMEBUFFER&&(d[a.FRAMEBUFFER]=le),k===a.FRAMEBUFFER&&(d[a.DRAW_FRAMEBUFFER]=le),!0):!1}function ye(k,le){let Q=m,he=!1;if(k){Q=f.get(le),Q===void 0&&(Q=[],f.set(le,Q));let ge=k.textures;if(Q.length!==ge.length||Q[0]!==a.COLOR_ATTACHMENT0){for(let ne=0,De=ge.length;ne<De;ne++)Q[ne]=a.COLOR_ATTACHMENT0+ne;Q.length=ge.length,he=!0}}else Q[0]!==a.BACK&&(Q[0]=a.BACK,he=!0);he&&a.drawBuffers(Q)}function je(k){return b!==k?(a.useProgram(k),b=k,!0):!1}let Gt={[ys]:a.FUNC_ADD,[yd]:a.FUNC_SUBTRACT,[Md]:a.FUNC_REVERSE_SUBTRACT};Gt[Sd]=a.MIN,Gt[Td]=a.MAX;let Je={[Ed]:a.ZERO,[wd]:a.ONE,[Ad]:a.SRC_COLOR,[Xl]:a.SRC_ALPHA,[Dd]:a.SRC_ALPHA_SATURATE,[Id]:a.DST_COLOR,[Cd]:a.DST_ALPHA,[Rd]:a.ONE_MINUS_SRC_COLOR,[jl]:a.ONE_MINUS_SRC_ALPHA,[Ld]:a.ONE_MINUS_DST_COLOR,[Pd]:a.ONE_MINUS_DST_ALPHA,[Fd]:a.CONSTANT_COLOR,[Nd]:a.ONE_MINUS_CONSTANT_COLOR,[Ud]:a.CONSTANT_ALPHA,[kd]:a.ONE_MINUS_CONSTANT_ALPHA};function st(k,le,Q,he,ge,ne,De,we,_t,ot){if(k===An){g===!0&&(Se(a.BLEND),g=!1);return}if(g===!1&&(te(a.BLEND),g=!0),k!==_d){if(k!==p||ot!==C){if((x!==ys||y!==ys)&&(a.blendEquation(a.FUNC_ADD),x=ys,y=ys),ot)switch(k){case qi:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Jt:a.blendFunc(a.ONE,a.ONE);break;case Wl:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case ql:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Ue("WebGLState: Invalid blending: ",k);break}else switch(k){case qi:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Jt:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case Wl:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ql:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",k);break}T=null,v=null,S=null,A=null,_.set(0,0,0),w=0,p=k,C=ot}return}ge=ge||le,ne=ne||Q,De=De||he,(le!==x||ge!==y)&&(a.blendEquationSeparate(Gt[le],Gt[ge]),x=le,y=ge),(Q!==T||he!==v||ne!==S||De!==A)&&(a.blendFuncSeparate(Je[Q],Je[he],Je[ne],Je[De]),T=Q,v=he,S=ne,A=De),(we.equals(_)===!1||_t!==w)&&(a.blendColor(we.r,we.g,we.b,_t),_.copy(we),w=_t),p=k,C=!1}function vt(k,le){k.side===un?Se(a.CULL_FACE):te(a.CULL_FACE);let Q=k.side===Ut;le&&(Q=!Q),Qe(Q),k.blending===qi&&k.transparent===!1?st(An):st(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),r.setFunc(k.depthFunc),r.setTest(k.depthTest),r.setMask(k.depthWrite),s.setMask(k.colorWrite);let he=k.stencilWrite;o.setTest(he),he&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),dn(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?te(a.SAMPLE_ALPHA_TO_COVERAGE):Se(a.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(k){P!==k&&(k?a.frontFace(a.CW):a.frontFace(a.CCW),P=k)}function wt(k){k!==bd?(te(a.CULL_FACE),k!==D&&(k===Vl?a.cullFace(a.BACK):k===xd?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Se(a.CULL_FACE),D=k}function jt(k){k!==F&&(X&&a.lineWidth(k),F=k)}function dn(k,le,Q){k?(te(a.POLYGON_OFFSET_FILL),(L!==le||N!==Q)&&(L=le,N=Q,r.getReversed()&&(le=-le),a.polygonOffset(le,Q))):Se(a.POLYGON_OFFSET_FILL)}function Rt(k){k?te(a.SCISSOR_TEST):Se(a.SCISSOR_TEST)}function Ot(k){k===void 0&&(k=a.TEXTURE0+H-1),K!==k&&(a.activeTexture(k),K=k)}function O(k,le,Q){Q===void 0&&(K===null?Q=a.TEXTURE0+H-1:Q=K);let he=$[Q];he===void 0&&(he={type:void 0,texture:void 0},$[Q]=he),(he.type!==k||he.texture!==le)&&(K!==Q&&(a.activeTexture(Q),K=Q),a.bindTexture(k,le||J[k]),he.type=k,he.texture=le)}function Zt(){let k=$[K];k!==void 0&&k.type!==void 0&&(a.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ht(){try{a.compressedTexImage2D(...arguments)}catch(k){Ue("WebGLState:",k)}}function I(){try{a.compressedTexImage3D(...arguments)}catch(k){Ue("WebGLState:",k)}}function M(){try{a.texSubImage2D(...arguments)}catch(k){Ue("WebGLState:",k)}}function z(){try{a.texSubImage3D(...arguments)}catch(k){Ue("WebGLState:",k)}}function q(){try{a.compressedTexSubImage2D(...arguments)}catch(k){Ue("WebGLState:",k)}}function Y(){try{a.compressedTexSubImage3D(...arguments)}catch(k){Ue("WebGLState:",k)}}function ie(){try{a.texStorage2D(...arguments)}catch(k){Ue("WebGLState:",k)}}function ae(){try{a.texStorage3D(...arguments)}catch(k){Ue("WebGLState:",k)}}function Z(){try{a.texImage2D(...arguments)}catch(k){Ue("WebGLState:",k)}}function ee(){try{a.texImage3D(...arguments)}catch(k){Ue("WebGLState:",k)}}function oe(k){return u[k]!==void 0?u[k]:a.getParameter(k)}function Pe(k,le){u[k]!==le&&(a.pixelStorei(k,le),u[k]=le)}function ue(k){lt.equals(k)===!1&&(a.scissor(k.x,k.y,k.z,k.w),lt.copy(k))}function ce(k){Ye.equals(k)===!1&&(a.viewport(k.x,k.y,k.z,k.w),Ye.copy(k))}function Ie(k,le){let Q=l.get(le);Q===void 0&&(Q=new WeakMap,l.set(le,Q));let he=Q.get(k);he===void 0&&(he=a.getUniformBlockIndex(le,k.name),Q.set(k,he))}function Ne(k,le){let he=l.get(le).get(k);c.get(le)!==he&&(a.uniformBlockBinding(le,he,k.__bindingPointIndex),c.set(le,he))}function Ve(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),r.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),h={},u={},K=null,$={},d={},f=new WeakMap,m=[],b=null,g=!1,p=null,x=null,T=null,v=null,y=null,S=null,A=null,_=new se(0,0,0),w=0,C=!1,P=null,D=null,F=null,L=null,N=null,lt.set(0,0,a.canvas.width,a.canvas.height),Ye.set(0,0,a.canvas.width,a.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:te,disable:Se,bindFramebuffer:ze,drawBuffers:ye,useProgram:je,setBlending:st,setMaterial:vt,setFlipSided:Qe,setCullFace:wt,setLineWidth:jt,setPolygonOffset:dn,setScissorTest:Rt,activeTexture:Ot,bindTexture:O,unbindTexture:Zt,compressedTexImage2D:ht,compressedTexImage3D:I,texImage2D:Z,texImage3D:ee,pixelStorei:Pe,getParameter:oe,updateUBOMapping:Ie,uniformBlockBinding:Ne,texStorage2D:ie,texStorage3D:ae,texSubImage2D:M,texSubImage3D:z,compressedTexSubImage2D:q,compressedTexSubImage3D:Y,scissor:ue,viewport:ce,reset:Ve}}function Kx(a,e,t,n,i,s,r){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xe,h=new WeakMap,u=new Set,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(I,M){return m?new OffscreenCanvas(I,M):tr("canvas")}function g(I,M,z){let q=1,Y=ht(I);if((Y.width>z||Y.height>z)&&(q=z/Math.max(Y.width,Y.height)),q<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ie=Math.floor(q*Y.width),ae=Math.floor(q*Y.height);d===void 0&&(d=b(ie,ae));let Z=M?b(ie,ae):d;return Z.width=ie,Z.height=ae,Z.getContext("2d").drawImage(I,0,0,ie,ae),Re("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+ie+"x"+ae+")."),Z}else return"data"in I&&Re("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),I;return I}function p(I){return I.generateMipmaps}function x(I){a.generateMipmap(I)}function T(I){return I.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?a.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function v(I,M,z,q,Y,ie=!1){if(I!==null){if(a[I]!==void 0)return a[I];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ae;q&&(ae=e.get("EXT_texture_norm16"),ae||Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=M;if(M===a.RED&&(z===a.FLOAT&&(Z=a.R32F),z===a.HALF_FLOAT&&(Z=a.R16F),z===a.UNSIGNED_BYTE&&(Z=a.R8),z===a.UNSIGNED_SHORT&&ae&&(Z=ae.R16_EXT),z===a.SHORT&&ae&&(Z=ae.R16_SNORM_EXT)),M===a.RED_INTEGER&&(z===a.UNSIGNED_BYTE&&(Z=a.R8UI),z===a.UNSIGNED_SHORT&&(Z=a.R16UI),z===a.UNSIGNED_INT&&(Z=a.R32UI),z===a.BYTE&&(Z=a.R8I),z===a.SHORT&&(Z=a.R16I),z===a.INT&&(Z=a.R32I)),M===a.RG&&(z===a.FLOAT&&(Z=a.RG32F),z===a.HALF_FLOAT&&(Z=a.RG16F),z===a.UNSIGNED_BYTE&&(Z=a.RG8),z===a.UNSIGNED_SHORT&&ae&&(Z=ae.RG16_EXT),z===a.SHORT&&ae&&(Z=ae.RG16_SNORM_EXT)),M===a.RG_INTEGER&&(z===a.UNSIGNED_BYTE&&(Z=a.RG8UI),z===a.UNSIGNED_SHORT&&(Z=a.RG16UI),z===a.UNSIGNED_INT&&(Z=a.RG32UI),z===a.BYTE&&(Z=a.RG8I),z===a.SHORT&&(Z=a.RG16I),z===a.INT&&(Z=a.RG32I)),M===a.RGB_INTEGER&&(z===a.UNSIGNED_BYTE&&(Z=a.RGB8UI),z===a.UNSIGNED_SHORT&&(Z=a.RGB16UI),z===a.UNSIGNED_INT&&(Z=a.RGB32UI),z===a.BYTE&&(Z=a.RGB8I),z===a.SHORT&&(Z=a.RGB16I),z===a.INT&&(Z=a.RGB32I)),M===a.RGBA_INTEGER&&(z===a.UNSIGNED_BYTE&&(Z=a.RGBA8UI),z===a.UNSIGNED_SHORT&&(Z=a.RGBA16UI),z===a.UNSIGNED_INT&&(Z=a.RGBA32UI),z===a.BYTE&&(Z=a.RGBA8I),z===a.SHORT&&(Z=a.RGBA16I),z===a.INT&&(Z=a.RGBA32I)),M===a.RGB&&(z===a.UNSIGNED_SHORT&&ae&&(Z=ae.RGB16_EXT),z===a.SHORT&&ae&&(Z=ae.RGB16_SNORM_EXT),z===a.UNSIGNED_INT_5_9_9_9_REV&&(Z=a.RGB9_E5),z===a.UNSIGNED_INT_10F_11F_11F_REV&&(Z=a.R11F_G11F_B10F)),M===a.RGBA){let ee=ie?Kr:We.getTransfer(Y);z===a.FLOAT&&(Z=a.RGBA32F),z===a.HALF_FLOAT&&(Z=a.RGBA16F),z===a.UNSIGNED_BYTE&&(Z=ee===rt?a.SRGB8_ALPHA8:a.RGBA8),z===a.UNSIGNED_SHORT&&ae&&(Z=ae.RGBA16_EXT),z===a.SHORT&&ae&&(Z=ae.RGBA16_SNORM_EXT),z===a.UNSIGNED_SHORT_4_4_4_4&&(Z=a.RGBA4),z===a.UNSIGNED_SHORT_5_5_5_1&&(Z=a.RGB5_A1)}return(Z===a.R16F||Z===a.R32F||Z===a.RG16F||Z===a.RG32F||Z===a.RGBA16F||Z===a.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function y(I,M){let z;return I?M===null||M===Wn||M===br?z=a.DEPTH24_STENCIL8:M===_n?z=a.DEPTH32F_STENCIL8:M===gr&&(z=a.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Wn||M===br?z=a.DEPTH_COMPONENT24:M===_n?z=a.DEPTH_COMPONENT32F:M===gr&&(z=a.DEPTH_COMPONENT16),z}function S(I,M){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==At&&I.minFilter!==Lt?Math.log2(Math.max(M.width,M.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?M.mipmaps.length:1}function A(I){let M=I.target;M.removeEventListener("dispose",A),w(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&u.delete(M)}function _(I){let M=I.target;M.removeEventListener("dispose",_),P(M)}function w(I){let M=n.get(I);if(M.__webglInit===void 0)return;let z=I.source,q=f.get(z);if(q){let Y=q[M.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&C(I),Object.keys(q).length===0&&f.delete(z)}n.remove(I)}function C(I){let M=n.get(I);a.deleteTexture(M.__webglTexture);let z=I.source,q=f.get(z);delete q[M.__cacheKey],r.memory.textures--}function P(I){let M=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let Y=0;Y<M.__webglFramebuffer[q].length;Y++)a.deleteFramebuffer(M.__webglFramebuffer[q][Y]);else a.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&a.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)a.deleteFramebuffer(M.__webglFramebuffer[q]);else a.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&a.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&a.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&a.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&a.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let z=I.textures;for(let q=0,Y=z.length;q<Y;q++){let ie=n.get(z[q]);ie.__webglTexture&&(a.deleteTexture(ie.__webglTexture),r.memory.textures--),n.remove(z[q])}n.remove(I)}let D=0;function F(){D=0}function L(){return D}function N(I){D=I}function H(){let I=D;return I>=i.maxTextures&&Re("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+i.maxTextures),D+=1,I}function X(I){let M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function B(I,M){let z=n.get(I);if(I.isVideoTexture&&O(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&z.__version!==I.version){let q=I.image;if(q===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(z,I,M);return}}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,z.__webglTexture,a.TEXTURE0+M)}function G(I,M){let z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){Se(z,I,M);return}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,z.__webglTexture,a.TEXTURE0+M)}function K(I,M){let z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){Se(z,I,M);return}t.bindTexture(a.TEXTURE_3D,z.__webglTexture,a.TEXTURE0+M)}function $(I,M){let z=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&z.__version!==I.version){ze(z,I,M);return}t.bindTexture(a.TEXTURE_CUBE_MAP,z.__webglTexture,a.TEXTURE0+M)}let ve={[xn]:a.REPEAT,[En]:a.CLAMP_TO_EDGE,[Qs]:a.MIRRORED_REPEAT},pe={[At]:a.NEAREST,[Jo]:a.NEAREST_MIPMAP_NEAREST,[Ts]:a.NEAREST_MIPMAP_LINEAR,[Lt]:a.LINEAR,[mr]:a.LINEAR_MIPMAP_NEAREST,[Vn]:a.LINEAR_MIPMAP_LINEAR},lt={[jd]:a.NEVER,[$d]:a.ALWAYS,[Kd]:a.LESS,[Nc]:a.LEQUAL,[Yd]:a.EQUAL,[Uc]:a.GEQUAL,[Jd]:a.GREATER,[Zd]:a.NOTEQUAL};function Ye(I,M){if(M.type===_n&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Lt||M.magFilter===mr||M.magFilter===Ts||M.magFilter===Vn||M.minFilter===Lt||M.minFilter===mr||M.minFilter===Ts||M.minFilter===Vn)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(I,a.TEXTURE_WRAP_S,ve[M.wrapS]),a.texParameteri(I,a.TEXTURE_WRAP_T,ve[M.wrapT]),(I===a.TEXTURE_3D||I===a.TEXTURE_2D_ARRAY)&&a.texParameteri(I,a.TEXTURE_WRAP_R,ve[M.wrapR]),a.texParameteri(I,a.TEXTURE_MAG_FILTER,pe[M.magFilter]),a.texParameteri(I,a.TEXTURE_MIN_FILTER,pe[M.minFilter]),M.compareFunction&&(a.texParameteri(I,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(I,a.TEXTURE_COMPARE_FUNC,lt[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===At||M.minFilter!==Ts&&M.minFilter!==Vn||M.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");a.texParameterf(I,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function et(I,M){let z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,M.addEventListener("dispose",A));let q=M.source,Y=f.get(q);Y===void 0&&(Y={},f.set(q,Y));let ie=X(M);if(ie!==I.__cacheKey){Y[ie]===void 0&&(Y[ie]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,z=!0),Y[ie].usedTimes++;let ae=Y[I.__cacheKey];ae!==void 0&&(Y[I.__cacheKey].usedTimes--,ae.usedTimes===0&&C(M)),I.__cacheKey=ie,I.__webglTexture=Y[ie].texture}return z}function J(I,M,z){return Math.floor(Math.floor(I/z)/M)}function te(I,M,z,q){let ie=I.updateRanges;if(ie.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,M.width,M.height,z,q,M.data);else{ie.sort((Pe,ue)=>Pe.start-ue.start);let ae=0;for(let Pe=1;Pe<ie.length;Pe++){let ue=ie[ae],ce=ie[Pe],Ie=ue.start+ue.count,Ne=J(ce.start,M.width,4),Ve=J(ue.start,M.width,4);ce.start<=Ie+1&&Ne===Ve&&J(ce.start+ce.count-1,M.width,4)===Ne?ue.count=Math.max(ue.count,ce.start+ce.count-ue.start):(++ae,ie[ae]=ce)}ie.length=ae+1;let Z=t.getParameter(a.UNPACK_ROW_LENGTH),ee=t.getParameter(a.UNPACK_SKIP_PIXELS),oe=t.getParameter(a.UNPACK_SKIP_ROWS);t.pixelStorei(a.UNPACK_ROW_LENGTH,M.width);for(let Pe=0,ue=ie.length;Pe<ue;Pe++){let ce=ie[Pe],Ie=Math.floor(ce.start/4),Ne=Math.ceil(ce.count/4),Ve=Ie%M.width,k=Math.floor(Ie/M.width),le=Ne,Q=1;t.pixelStorei(a.UNPACK_SKIP_PIXELS,Ve),t.pixelStorei(a.UNPACK_SKIP_ROWS,k),t.texSubImage2D(a.TEXTURE_2D,0,Ve,k,le,Q,z,q,M.data)}I.clearUpdateRanges(),t.pixelStorei(a.UNPACK_ROW_LENGTH,Z),t.pixelStorei(a.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(a.UNPACK_SKIP_ROWS,oe)}}function Se(I,M,z){let q=a.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=a.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=a.TEXTURE_3D);let Y=et(I,M),ie=M.source;t.bindTexture(q,I.__webglTexture,a.TEXTURE0+z);let ae=n.get(ie);if(ie.version!==ae.__version||Y===!0){if(t.activeTexture(a.TEXTURE0+z),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let Q=We.getPrimaries(We.workingColorSpace),he=M.colorSpace===Ti?null:We.getPrimaries(M.colorSpace),ge=M.colorSpace===Ti||Q===he?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(a.UNPACK_ALIGNMENT,M.unpackAlignment);let ee=g(M.image,!1,i.maxTextureSize);ee=Zt(M,ee);let oe=s.convert(M.format,M.colorSpace),Pe=s.convert(M.type),ue=v(M.internalFormat,oe,Pe,M.normalized,M.colorSpace,M.isVideoTexture);Ye(q,M);let ce,Ie=M.mipmaps,Ne=M.isVideoTexture!==!0,Ve=ae.__version===void 0||Y===!0,k=ie.dataReady,le=S(M,ee);if(M.isDepthTexture)ue=y(M.format===ji,M.type),Ve&&(Ne?t.texStorage2D(a.TEXTURE_2D,1,ue,ee.width,ee.height):t.texImage2D(a.TEXTURE_2D,0,ue,ee.width,ee.height,0,oe,Pe,null));else if(M.isDataTexture)if(Ie.length>0){Ne&&Ve&&t.texStorage2D(a.TEXTURE_2D,le,ue,Ie[0].width,Ie[0].height);for(let Q=0,he=Ie.length;Q<he;Q++)ce=Ie[Q],Ne?k&&t.texSubImage2D(a.TEXTURE_2D,Q,0,0,ce.width,ce.height,oe,Pe,ce.data):t.texImage2D(a.TEXTURE_2D,Q,ue,ce.width,ce.height,0,oe,Pe,ce.data);M.generateMipmaps=!1}else Ne?(Ve&&t.texStorage2D(a.TEXTURE_2D,le,ue,ee.width,ee.height),k&&te(M,ee,oe,Pe)):t.texImage2D(a.TEXTURE_2D,0,ue,ee.width,ee.height,0,oe,Pe,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ne&&Ve&&t.texStorage3D(a.TEXTURE_2D_ARRAY,le,ue,Ie[0].width,Ie[0].height,ee.depth);for(let Q=0,he=Ie.length;Q<he;Q++)if(ce=Ie[Q],M.format!==yn)if(oe!==null)if(Ne){if(k)if(M.layerUpdates.size>0){let ge=lh(ce.width,ce.height,M.format,M.type);for(let ne of M.layerUpdates){let De=ce.data.subarray(ne*ge/ce.data.BYTES_PER_ELEMENT,(ne+1)*ge/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Q,0,0,ne,ce.width,ce.height,1,oe,De)}}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Q,0,0,0,ce.width,ce.height,ee.depth,oe,ce.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Q,ue,ce.width,ce.height,ee.depth,0,ce.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?k&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,Q,0,0,0,ce.width,ce.height,ee.depth,oe,Pe,ce.data):t.texImage3D(a.TEXTURE_2D_ARRAY,Q,ue,ce.width,ce.height,ee.depth,0,oe,Pe,ce.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Ne&&Ve&&t.texStorage2D(a.TEXTURE_2D,le,ue,Ie[0].width,Ie[0].height);for(let Q=0,he=Ie.length;Q<he;Q++)ce=Ie[Q],M.format!==yn?oe!==null?Ne?k&&t.compressedTexSubImage2D(a.TEXTURE_2D,Q,0,0,ce.width,ce.height,oe,ce.data):t.compressedTexImage2D(a.TEXTURE_2D,Q,ue,ce.width,ce.height,0,ce.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?k&&t.texSubImage2D(a.TEXTURE_2D,Q,0,0,ce.width,ce.height,oe,Pe,ce.data):t.texImage2D(a.TEXTURE_2D,Q,ue,ce.width,ce.height,0,oe,Pe,ce.data)}else if(M.isDataArrayTexture)if(Ne){if(Ve&&t.texStorage3D(a.TEXTURE_2D_ARRAY,le,ue,ee.width,ee.height,ee.depth),k)if(M.layerUpdates.size>0){let Q=lh(ee.width,ee.height,M.format,M.type);for(let he of M.layerUpdates){let ge=ee.data.subarray(he*Q/ee.data.BYTES_PER_ELEMENT,(he+1)*Q/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,he,ee.width,ee.height,1,oe,Pe,ge)}M.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,oe,Pe,ee.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,ue,ee.width,ee.height,ee.depth,0,oe,Pe,ee.data);else if(M.isData3DTexture)Ne?(Ve&&t.texStorage3D(a.TEXTURE_3D,le,ue,ee.width,ee.height,ee.depth),k&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,oe,Pe,ee.data)):t.texImage3D(a.TEXTURE_3D,0,ue,ee.width,ee.height,ee.depth,0,oe,Pe,ee.data);else if(M.isFramebufferTexture){if(Ve)if(Ne)t.texStorage2D(a.TEXTURE_2D,le,ue,ee.width,ee.height);else{let Q=ee.width,he=ee.height;for(let ge=0;ge<le;ge++)t.texImage2D(a.TEXTURE_2D,ge,ue,Q,he,0,oe,Pe,null),Q>>=1,he>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in a){let Q=a.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),ee.parentNode!==Q){Q.appendChild(ee),u.add(M),Q.onpaint=he=>{let ge=he.changedElements;for(let ne of u)ge.includes(ne.image)&&(ne.needsUpdate=!0)},Q.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,ee);else{let ge=a.RGBA,ne=a.RGBA,De=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,ge,ne,De,ee)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Ne&&Ve){let Q=ht(Ie[0]);t.texStorage2D(a.TEXTURE_2D,le,ue,Q.width,Q.height)}for(let Q=0,he=Ie.length;Q<he;Q++)ce=Ie[Q],Ne?k&&t.texSubImage2D(a.TEXTURE_2D,Q,0,0,oe,Pe,ce):t.texImage2D(a.TEXTURE_2D,Q,ue,oe,Pe,ce);M.generateMipmaps=!1}else if(Ne){if(Ve){let Q=ht(ee);t.texStorage2D(a.TEXTURE_2D,le,ue,Q.width,Q.height)}k&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,oe,Pe,ee)}else t.texImage2D(a.TEXTURE_2D,0,ue,oe,Pe,ee);p(M)&&x(q),ae.__version=ie.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function ze(I,M,z){if(M.image.length!==6)return;let q=et(I,M),Y=M.source;t.bindTexture(a.TEXTURE_CUBE_MAP,I.__webglTexture,a.TEXTURE0+z);let ie=n.get(Y);if(Y.version!==ie.__version||q===!0){t.activeTexture(a.TEXTURE0+z);let ae=We.getPrimaries(We.workingColorSpace),Z=M.colorSpace===Ti?null:We.getPrimaries(M.colorSpace),ee=M.colorSpace===Ti||ae===Z?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(a.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let oe=M.isCompressedTexture||M.image[0].isCompressedTexture,Pe=M.image[0]&&M.image[0].isDataTexture,ue=[];for(let ne=0;ne<6;ne++)!oe&&!Pe?ue[ne]=g(M.image[ne],!0,i.maxCubemapSize):ue[ne]=Pe?M.image[ne].image:M.image[ne],ue[ne]=Zt(M,ue[ne]);let ce=ue[0],Ie=s.convert(M.format,M.colorSpace),Ne=s.convert(M.type),Ve=v(M.internalFormat,Ie,Ne,M.normalized,M.colorSpace),k=M.isVideoTexture!==!0,le=ie.__version===void 0||q===!0,Q=Y.dataReady,he=S(M,ce);Ye(a.TEXTURE_CUBE_MAP,M);let ge;if(oe){k&&le&&t.texStorage2D(a.TEXTURE_CUBE_MAP,he,Ve,ce.width,ce.height);for(let ne=0;ne<6;ne++){ge=ue[ne].mipmaps;for(let De=0;De<ge.length;De++){let we=ge[De];M.format!==yn?Ie!==null?k?Q&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De,0,0,we.width,we.height,Ie,we.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De,Ve,we.width,we.height,0,we.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Q&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De,0,0,we.width,we.height,Ie,Ne,we.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De,Ve,we.width,we.height,0,Ie,Ne,we.data)}}}else{if(ge=M.mipmaps,k&&le){ge.length>0&&he++;let ne=ht(ue[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,he,Ve,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Pe){k?Q&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ue[ne].width,ue[ne].height,Ie,Ne,ue[ne].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ve,ue[ne].width,ue[ne].height,0,Ie,Ne,ue[ne].data);for(let De=0;De<ge.length;De++){let _t=ge[De].image[ne].image;k?Q&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De+1,0,0,_t.width,_t.height,Ie,Ne,_t.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De+1,Ve,_t.width,_t.height,0,Ie,Ne,_t.data)}}else{k?Q&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ie,Ne,ue[ne]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ve,Ie,Ne,ue[ne]);for(let De=0;De<ge.length;De++){let we=ge[De];k?Q&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De+1,0,0,Ie,Ne,we.image[ne]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De+1,Ve,Ie,Ne,we.image[ne])}}}p(M)&&x(a.TEXTURE_CUBE_MAP),ie.__version=Y.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function ye(I,M,z,q,Y,ie){let ae=s.convert(z.format,z.colorSpace),Z=s.convert(z.type),ee=v(z.internalFormat,ae,Z,z.normalized,z.colorSpace),oe=n.get(M),Pe=n.get(z);if(Pe.__renderTarget=M,!oe.__hasExternalTextures){let ue=Math.max(1,M.width>>ie),ce=Math.max(1,M.height>>ie);Y===a.TEXTURE_3D||Y===a.TEXTURE_2D_ARRAY?t.texImage3D(Y,ie,ee,ue,ce,M.depth,0,ae,Z,null):t.texImage2D(Y,ie,ee,ue,ce,0,ae,Z,null)}t.bindFramebuffer(a.FRAMEBUFFER,I),Ot(M)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,q,Y,Pe.__webglTexture,0,Rt(M)):(Y===a.TEXTURE_2D||Y>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,q,Y,Pe.__webglTexture,ie),t.bindFramebuffer(a.FRAMEBUFFER,null)}function je(I,M,z){if(a.bindRenderbuffer(a.RENDERBUFFER,I),M.depthBuffer){let q=M.depthTexture,Y=q&&q.isDepthTexture?q.type:null,ie=y(M.stencilBuffer,Y),ae=M.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;Ot(M)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Rt(M),ie,M.width,M.height):z?a.renderbufferStorageMultisample(a.RENDERBUFFER,Rt(M),ie,M.width,M.height):a.renderbufferStorage(a.RENDERBUFFER,ie,M.width,M.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,ae,a.RENDERBUFFER,I)}else{let q=M.textures;for(let Y=0;Y<q.length;Y++){let ie=q[Y],ae=s.convert(ie.format,ie.colorSpace),Z=s.convert(ie.type),ee=v(ie.internalFormat,ae,Z,ie.normalized,ie.colorSpace);Ot(M)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Rt(M),ee,M.width,M.height):z?a.renderbufferStorageMultisample(a.RENDERBUFFER,Rt(M),ee,M.width,M.height):a.renderbufferStorage(a.RENDERBUFFER,ee,M.width,M.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Gt(I,M,z){let q=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(M.depthTexture);if(Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),Y.__webglTexture===void 0){Y.__webglTexture=a.createTexture(),t.bindTexture(a.TEXTURE_CUBE_MAP,Y.__webglTexture),Ye(a.TEXTURE_CUBE_MAP,M.depthTexture);let oe=s.convert(M.depthTexture.format),Pe=s.convert(M.depthTexture.type),ue;M.depthTexture.format===Yn?ue=a.DEPTH_COMPONENT24:M.depthTexture.format===ji&&(ue=a.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ue,M.width,M.height,0,oe,Pe,null)}}else B(M.depthTexture,0);let ie=Y.__webglTexture,ae=Rt(M),Z=q?a.TEXTURE_CUBE_MAP_POSITIVE_X+z:a.TEXTURE_2D,ee=M.depthTexture.format===ji?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(M.depthTexture.format===Yn)Ot(M)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ee,Z,ie,0,ae):a.framebufferTexture2D(a.FRAMEBUFFER,ee,Z,ie,0);else if(M.depthTexture.format===ji)Ot(M)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ee,Z,ie,0,ae):a.framebufferTexture2D(a.FRAMEBUFFER,ee,Z,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Je(I){let M=n.get(I),z=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){let q=I.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){let Y=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",Y)};q.addEventListener("dispose",Y),M.__depthDisposeCallback=Y}M.__boundDepthTexture=q}if(I.depthTexture&&!M.__autoAllocateDepthBuffer)if(z)for(let q=0;q<6;q++)Gt(M.__webglFramebuffer[q],I,q);else{let q=I.texture.mipmaps;q&&q.length>0?Gt(M.__webglFramebuffer[0],I,0):Gt(M.__webglFramebuffer,I,0)}else if(z){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=a.createRenderbuffer(),je(M.__webglDepthbuffer[q],I,!1);else{let Y=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ie=M.__webglDepthbuffer[q];a.bindRenderbuffer(a.RENDERBUFFER,ie),a.framebufferRenderbuffer(a.FRAMEBUFFER,Y,a.RENDERBUFFER,ie)}}else{let q=I.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=a.createRenderbuffer(),je(M.__webglDepthbuffer,I,!1);else{let Y=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ie=M.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,ie),a.framebufferRenderbuffer(a.FRAMEBUFFER,Y,a.RENDERBUFFER,ie)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function st(I,M,z){let q=n.get(I);M!==void 0&&ye(q.__webglFramebuffer,I,I.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),z!==void 0&&Je(I)}function vt(I){let M=I.texture,z=n.get(I),q=n.get(M);I.addEventListener("dispose",_);let Y=I.textures,ie=I.isWebGLCubeRenderTarget===!0,ae=Y.length>1;if(ae||(q.__webglTexture===void 0&&(q.__webglTexture=a.createTexture()),q.__version=M.version,r.memory.textures++),ie){z.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[Z]=[];for(let ee=0;ee<M.mipmaps.length;ee++)z.__webglFramebuffer[Z][ee]=a.createFramebuffer()}else z.__webglFramebuffer[Z]=a.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let Z=0;Z<M.mipmaps.length;Z++)z.__webglFramebuffer[Z]=a.createFramebuffer()}else z.__webglFramebuffer=a.createFramebuffer();if(ae)for(let Z=0,ee=Y.length;Z<ee;Z++){let oe=n.get(Y[Z]);oe.__webglTexture===void 0&&(oe.__webglTexture=a.createTexture(),r.memory.textures++)}if(I.samples>0&&Ot(I)===!1){z.__webglMultisampledFramebuffer=a.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Z=0;Z<Y.length;Z++){let ee=Y[Z];z.__webglColorRenderbuffer[Z]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,z.__webglColorRenderbuffer[Z]);let oe=s.convert(ee.format,ee.colorSpace),Pe=s.convert(ee.type),ue=v(ee.internalFormat,oe,Pe,ee.normalized,ee.colorSpace,I.isXRRenderTarget===!0),ce=Rt(I);a.renderbufferStorageMultisample(a.RENDERBUFFER,ce,ue,I.width,I.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Z,a.RENDERBUFFER,z.__webglColorRenderbuffer[Z])}a.bindRenderbuffer(a.RENDERBUFFER,null),I.depthBuffer&&(z.__webglDepthRenderbuffer=a.createRenderbuffer(),je(z.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ie){t.bindTexture(a.TEXTURE_CUBE_MAP,q.__webglTexture),Ye(a.TEXTURE_CUBE_MAP,M);for(let Z=0;Z<6;Z++)if(M.mipmaps&&M.mipmaps.length>0)for(let ee=0;ee<M.mipmaps.length;ee++)ye(z.__webglFramebuffer[Z][ee],I,M,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ee);else ye(z.__webglFramebuffer[Z],I,M,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(M)&&x(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let Z=0,ee=Y.length;Z<ee;Z++){let oe=Y[Z],Pe=n.get(oe),ue=a.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ue=I.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(ue,Pe.__webglTexture),Ye(ue,oe),ye(z.__webglFramebuffer,I,oe,a.COLOR_ATTACHMENT0+Z,ue,0),p(oe)&&x(ue)}t.unbindTexture()}else{let Z=a.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Z=I.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(Z,q.__webglTexture),Ye(Z,M),M.mipmaps&&M.mipmaps.length>0)for(let ee=0;ee<M.mipmaps.length;ee++)ye(z.__webglFramebuffer[ee],I,M,a.COLOR_ATTACHMENT0,Z,ee);else ye(z.__webglFramebuffer,I,M,a.COLOR_ATTACHMENT0,Z,0);p(M)&&x(Z),t.unbindTexture()}I.depthBuffer&&Je(I)}function Qe(I){let M=I.textures;for(let z=0,q=M.length;z<q;z++){let Y=M[z];if(p(Y)){let ie=T(I),ae=n.get(Y).__webglTexture;t.bindTexture(ie,ae),x(ie),t.unbindTexture()}}}let wt=[],jt=[];function dn(I){if(I.samples>0){if(Ot(I)===!1){let M=I.textures,z=I.width,q=I.height,Y=a.COLOR_BUFFER_BIT,ie=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ae=n.get(I),Z=M.length>1;if(Z)for(let oe=0;oe<M.length;oe++)t.bindFramebuffer(a.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+oe,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,ae.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+oe,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);let ee=I.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let oe=0;oe<M.length;oe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Y|=a.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Y|=a.STENCIL_BUFFER_BIT)),Z){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);let Pe=n.get(M[oe]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Pe,0)}a.blitFramebuffer(0,0,z,q,0,0,z,q,Y,a.NEAREST),c===!0&&(wt.length=0,jt.length=0,wt.push(a.COLOR_ATTACHMENT0+oe),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(wt.push(ie),jt.push(ie),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,jt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,wt))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Z)for(let oe=0;oe<M.length;oe++){t.bindFramebuffer(a.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+oe,a.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);let Pe=n.get(M[oe]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,ae.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+oe,a.TEXTURE_2D,Pe,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&c){let M=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[M])}}}function Rt(I){return Math.min(i.maxSamples,I.samples)}function Ot(I){let M=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function O(I){let M=r.render.frame;h.get(I)!==M&&(h.set(I,M),I.update())}function Zt(I,M){let z=I.colorSpace,q=I.format,Y=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||z!==cn&&z!==Ti&&(We.getTransfer(z)===rt?(q!==yn||Y!==mn)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",z)),M}function ht(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=F,this.getTextureUnits=L,this.setTextureUnits=N,this.setTexture2D=B,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=$,this.rebindTextures=st,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Ot,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Yx(a,e){function t(n,i=Ti){let s,r=We.getTransfer(i);if(n===mn)return a.UNSIGNED_BYTE;if(n===$o)return a.UNSIGNED_SHORT_4_4_4_4;if(n===Qo)return a.UNSIGNED_SHORT_5_5_5_1;if(n===Zl)return a.UNSIGNED_INT_5_9_9_9_REV;if(n===$l)return a.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yl)return a.BYTE;if(n===Jl)return a.SHORT;if(n===gr)return a.UNSIGNED_SHORT;if(n===Zo)return a.INT;if(n===Wn)return a.UNSIGNED_INT;if(n===_n)return a.FLOAT;if(n===Wt)return a.HALF_FLOAT;if(n===Ql)return a.ALPHA;if(n===eh)return a.RGB;if(n===yn)return a.RGBA;if(n===Yn)return a.DEPTH_COMPONENT;if(n===ji)return a.DEPTH_STENCIL;if(n===ec)return a.RED;if(n===tc)return a.RED_INTEGER;if(n===Ki)return a.RG;if(n===nc)return a.RG_INTEGER;if(n===ic)return a.RGBA_INTEGER;if(n===_a||n===ya||n===Ma||n===Sa)if(r===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===_a)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===_a)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ya)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ma)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sc||n===rc||n===ac||n===oc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===sc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ac)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cc||n===lc||n===hc||n===uc||n===dc||n===Ta||n===fc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===cc||n===lc)return r===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===hc)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===uc)return s.COMPRESSED_R11_EAC;if(n===dc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ta)return s.COMPRESSED_RG11_EAC;if(n===fc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===pc||n===mc||n===gc||n===bc||n===xc||n===vc||n===_c||n===yc||n===Mc||n===Sc||n===Tc||n===Ec||n===wc||n===Ac)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===pc)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mc)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gc)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bc)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xc)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vc)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_c)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yc)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Mc)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sc)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tc)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ec)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wc)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ac)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rc||n===Cc||n===Pc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Rc)return r===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ic||n===Lc||n===Ea||n===Dc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ic)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Lc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ea)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===br?a.UNSIGNED_INT_24_8:a[n]!==void 0?a[n]:null}return{convert:t}}var Jx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zx=`
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

}`,Rh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ra(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Tt({vertexShader:Jx,fragmentShader:Zx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new be(new Ft(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ch=class extends Bn{constructor(e,t){super();let n=this,i=null,s=1,r=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,b=typeof XRWebGLBinding<"u",g=new Rh,p={},x=t.getContextAttributes(),T=null,v=null,y=[],S=[],A=new xe,_=null,w=null,C=new Ct;C.viewport=new dt;let P=new Ct;P.viewport=new dt;let D=[C,P],F=new Vo,L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let te=y[J];return te===void 0&&(te=new rr,y[J]=te),te.getTargetRaySpace()},this.getControllerGrip=function(J){let te=y[J];return te===void 0&&(te=new rr,y[J]=te),te.getGripSpace()},this.getHand=function(J){let te=y[J];return te===void 0&&(te=new rr,y[J]=te),te.getHandSpace()};function H(J){let te=S.indexOf(J.inputSource);if(te===-1)return;let Se=y[te];Se!==void 0&&(Se.update(J.inputSource,J.frame,l||r),Se.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",B);for(let J=0;J<y.length;J++){let te=S[J];te!==null&&(S[J]=null,y[J].disconnect(te))}L=null,N=null,g.reset();for(let J in p)delete p[J];if(e.setRenderTarget(T),f=null,d=null,u=null,i=null,v=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),w!==null){let J=w.camera;J.fov=w.fov,J.zoom=w.zoom,J.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",X),i.addEventListener("inputsourceschange",B),x.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,ze=null,ye=null;x.depth&&(ye=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=x.stencil?ji:Yn,ze=x.stencil?br:Wn);let je={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(je),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Pt(d.textureWidth,d.textureHeight,{format:yn,type:mn,depthTexture:new Gi(d.textureWidth,d.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Se={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,Se),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Pt(f.framebufferWidth,f.framebufferHeight,{format:yn,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(o),et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B(J){for(let te=0;te<J.removed.length;te++){let Se=J.removed[te],ze=S.indexOf(Se);ze>=0&&(S[ze]=null,y[ze].disconnect(Se))}for(let te=0;te<J.added.length;te++){let Se=J.added[te],ze=S.indexOf(Se);if(ze===-1){for(let je=0;je<y.length;je++)if(je>=S.length){S.push(Se),ze=je;break}else if(S[je]===null){S[je]=Se,ze=je;break}if(ze===-1)break}let ye=y[ze];ye&&ye.connect(Se)}}let G=new R,K=new R;function $(J,te,Se){G.setFromMatrixPosition(te.matrixWorld),K.setFromMatrixPosition(Se.matrixWorld);let ze=G.distanceTo(K),ye=te.projectionMatrix.elements,je=Se.projectionMatrix.elements,Gt=ye[14]/(ye[10]-1),Je=ye[14]/(ye[10]+1),st=(ye[9]+1)/ye[5],vt=(ye[9]-1)/ye[5],Qe=(ye[8]-1)/ye[0],wt=(je[8]+1)/je[0],jt=Gt*Qe,dn=Gt*wt,Rt=ze/(-Qe+wt),Ot=Rt*-Qe;if(te.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ot),J.translateZ(Rt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ye[10]===-1)J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let O=Gt+Rt,Zt=Je+Rt,ht=jt-Ot,I=dn+(ze-Ot),M=st*Je/Zt*O,z=vt*Je/Zt*O;J.projectionMatrix.makePerspective(ht,I,M,z,O,Zt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ve(J,te){te===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(te.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let te=J.near,Se=J.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(Se=g.depthFar)),F.near=P.near=C.near=te,F.far=P.far=C.far=Se,(L!==F.near||N!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),L=F.near,N=F.far),F.layers.mask=J.layers.mask|6,C.layers.mask=F.layers.mask&-5,P.layers.mask=F.layers.mask&-3;let ze=J.parent,ye=F.cameras;ve(F,ze);for(let je=0;je<ye.length;je++)ve(ye[je],ze);ye.length===2?$(F,C,P):F.projectionMatrix.copy(C.projectionMatrix),w===null&&J.isPerspectiveCamera&&(w={camera:J,fov:J.fov,zoom:J.zoom}),pe(J,F,ze)};function pe(J,te,Se){Se===null?J.matrix.copy(te.matrixWorld):(J.matrix.copy(Se.matrixWorld),J.matrix.invert(),J.matrix.multiply(te.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ds*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(J){return p[J]};let lt=null;function Ye(J,te){if(h=te.getViewerPose(l||r),m=te,h!==null){let Se=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ze=!1;Se.length!==F.cameras.length&&(F.cameras.length=0,ze=!0);for(let Je=0;Je<Se.length;Je++){let st=Se[Je],vt=null;if(f!==null)vt=f.getViewport(st);else{let wt=u.getViewSubImage(d,st);vt=wt.viewport,Je===0&&(e.setRenderTargetTextures(v,wt.colorTexture,wt.depthStencilTexture),e.setRenderTarget(v))}let Qe=D[Je];Qe===void 0&&(Qe=new Ct,Qe.layers.enable(Je),Qe.viewport=new dt,D[Je]=Qe),Qe.matrix.fromArray(st.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(st.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(vt.x,vt.y,vt.width,vt.height),Je===0&&(F.matrix.copy(Qe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ze===!0&&F.cameras.push(Qe)}let ye=i.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let Je=u.getDepthInformation(Se[0]);Je&&Je.isValid&&Je.texture&&g.init(Je,i.renderState)}if(ye&&ye.includes("camera-access")&&b){e.state.unbindTexture(),u=n.getBinding();for(let Je=0;Je<Se.length;Je++){let st=Se[Je].camera;if(st){let vt=p[st];vt||(vt=new ra,p[st]=vt);let Qe=u.getCameraImage(st);vt.sourceTexture=Qe}}}}for(let Se=0;Se<y.length;Se++){let ze=S[Se],ye=y[Se];ze!==null&&ye!==void 0&&ye.update(ze,te,l||r)}lt&&lt(J,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),m=null}let et=new Cf;et.setAnimationLoop(Ye),this.setAnimationLoop=function(J){lt=J},this.dispose=function(){}}},$x=new Oe,Nf=new He;Nf.set(-1,0,0,0,1,0,0,0,1);function Qx(a,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,ah(a)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,T,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),b(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,x,T):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ut&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ut&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let x=e.get(p),T=x.envMap,v=x.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4($x.makeRotationFromEuler(v)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Nf),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,x,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=T*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ut&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){let x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ev(a,e,t,n){let i={},s={},r=[],o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){let S=y.program;n.uniformBlockBinding(v,S)}function l(v,y){let S=i[v.id];S===void 0&&(g(v),S=h(v),i[v.id]=S,v.addEventListener("dispose",x));let A=y.program;n.updateUBOMapping(v,A);let _=e.render.frame;s[v.id]!==_&&(d(v),s[v.id]=_)}function h(v){let y=u();v.__bindingPointIndex=y;let S=a.createBuffer(),A=v.__size,_=v.usage;return a.bindBuffer(a.UNIFORM_BUFFER,S),a.bufferData(a.UNIFORM_BUFFER,A,_),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,y,S),S}function u(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let y=i[v.id],S=v.uniforms,A=v.__cache;a.bindBuffer(a.UNIFORM_BUFFER,y);for(let _=0,w=S.length;_<w;_++){let C=S[_];if(Array.isArray(C))for(let P=0,D=C.length;P<D;P++)f(C[P],_,P,A);else f(C,_,0,A)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function f(v,y,S,A){if(b(v,y,S,A)===!0){let _=v.__offset,w=v.value;if(Array.isArray(w)){let C=0;for(let P=0;P<w.length;P++){let D=w[P],F=p(D);m(D,v.__data,C),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(C+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,v.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,_,v.__data)}}function m(v,y,S){typeof v=="number"||typeof v=="boolean"?y[0]=v:v.isMatrix3?(y[0]=v.elements[0],y[1]=v.elements[1],y[2]=v.elements[2],y[3]=0,y[4]=v.elements[3],y[5]=v.elements[4],y[6]=v.elements[5],y[7]=0,y[8]=v.elements[6],y[9]=v.elements[7],y[10]=v.elements[8],y[11]=0):ArrayBuffer.isView(v)?y.set(new v.constructor(v.buffer,v.byteOffset,y.length)):v.toArray(y,S)}function b(v,y,S,A){let _=v.value,w=y+"_"+S;if(A[w]===void 0)return typeof _=="number"||typeof _=="boolean"?A[w]=_:ArrayBuffer.isView(_)?A[w]=_.slice():A[w]=_.clone(),!0;{let C=A[w];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return A[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function g(v){let y=v.uniforms,S=0,A=16;for(let w=0,C=y.length;w<C;w++){let P=Array.isArray(y[w])?y[w]:[y[w]];for(let D=0,F=P.length;D<F;D++){let L=P[D],N=Array.isArray(L.value)?L.value:[L.value];for(let H=0,X=N.length;H<X;H++){let B=N[H],G=p(B),K=S%A,$=K%G.boundary,ve=K+$;S+=$,ve!==0&&A-ve<G.storage&&(S+=A-ve),L.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=G.storage}}}let _=S%A;return _>0&&(S+=A-_),v.__size=S,v.__cache={},this}function p(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Re("WebGLRenderer: Unsupported uniform value type.",v),y}function x(v){let y=v.target;y.removeEventListener("dispose",x);let S=r.indexOf(y.__bindingPointIndex);r.splice(S,1),a.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function T(){for(let v in i)a.deleteBuffer(i[v]);r=[],i={},s={}}return{bind:c,update:l,dispose:T}}var tv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ei=null;function nv(){return ei===null&&(ei=new or(tv,16,16,Ki,Wt),ei.name="DFG_LUT",ei.minFilter=Lt,ei.magFilter=Lt,ei.wrapS=En,ei.wrapT=En,ei.generateMipmaps=!1,ei.needsUpdate=!0),ei}var Hc=class{constructor(e={}){let{canvas:t=Qd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=mn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=r;let b=f,g=new Set([ic,nc,tc]),p=new Set([mn,Wn,gr,br,$o,Qo]),x=new Uint32Array(4),T=new Int32Array(4),v=new R,y=null,S=null,A=[],_=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,D=null,F=null,L=null,N=null;this._outputColorSpace=tt;let H=0,X=0,B=null,G=-1,K=null,$=new dt,ve=new dt,pe=null,lt=new se(0),Ye=0,et=t.width,J=t.height,te=1,Se=null,ze=null,ye=new dt(0,0,et,J),je=new dt(0,0,et,J),Gt=!1,Je=new cr,st=!1,vt=!1,Qe=new Oe,wt=new R,jt=new dt,dn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Rt=!1;function Ot(){return B===null?te:1}let O=n;function Zt(E,U){return t.getContext(E,U)}let ht,I,M,z,q,Y,ie,ae,Z,ee,oe,Pe,ue,ce,Ie,Ne,Ve,k,le,Q,he,ge,ne;try{let E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",_t,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",In,!1),O===null){let U="webgl2";if(O=Zt(U,E),O===null)throw Zt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}De()}catch(E){throw t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",In,!1),Ue("WebGLRenderer: "+E.message),E}function De(){ht=new lb(O),ht.init(),he=new Yx(O,ht),I=new Qg(O,ht,e,he),M=new jx(O,ht),I.reversedDepthBuffer&&d&&M.buffers.depth.setReversed(!0),F=O.createFramebuffer(),L=O.createFramebuffer(),N=O.createFramebuffer(),z=new db(O),q=new Dx,Y=new Kx(O,ht,M,q,I,he,z),ie=new cb(C),ae=new pm(O),ge=new Zg(O,ae),Z=new hb(O,ae,z,ge),ee=new pb(O,Z,ae,ge,z),k=new fb(O,I,Y),Ie=new eb(q),oe=new Lx(C,ie,ht,I,ge,Ie),Pe=new Qx(C,q),ue=new Nx,ce=new zx(ht),Ve=new Jg(C,ie,M,ee,m,c),Ne=new Xx(C,ee,I),ne=new ev(O,z,I,M),le=new $g(O,ht,z),Q=new ub(O,ht,z),z.programs=oe.programs,C.capabilities=I,C.extensions=ht,C.properties=q,C.renderLists=ue,C.shadowMap=Ne,C.state=M,C.info=z}b!==mn&&(w=new gb(b,t.width,t.height,o,i,s));let we=new Ch(C,O);this.xr=we,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let E=ht.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ht.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(E){E!==void 0&&(te=E,this.setSize(et,J,!1))},this.getSize=function(E){return E.set(et,J)},this.setSize=function(E,U,j=!0){if(we.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}et=E,J=U,t.width=Math.floor(E*te),t.height=Math.floor(U*te),j===!0&&(t.style.width=E+"px",t.style.height=U+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(et*te,J*te).floor()},this.setDrawingBufferSize=function(E,U,j){et=E,J=U,te=j,t.width=Math.floor(E*j),t.height=Math.floor(U*j),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(b===mn){Ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){Re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy($)},this.getViewport=function(E){return E.copy(ye)},this.setViewport=function(E,U,j,V){E.isVector4?ye.set(E.x,E.y,E.z,E.w):ye.set(E,U,j,V),M.viewport($.copy(ye).multiplyScalar(te).round())},this.getScissor=function(E){return E.copy(je)},this.setScissor=function(E,U,j,V){E.isVector4?je.set(E.x,E.y,E.z,E.w):je.set(E,U,j,V),M.scissor(ve.copy(je).multiplyScalar(te).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(E){M.setScissorTest(Gt=E)},this.setOpaqueSort=function(E){Se=E},this.setTransparentSort=function(E){ze=E},this.getClearColor=function(E){return E.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,j=!0){let V=0;if(E){let W=!1;if(B!==null){let me=B.texture.format;W=g.has(me)}if(W){let me=B.texture.type,Me=p.has(me),fe=Ve.getClearColor(),Te=Ve.getClearAlpha(),Ae=fe.r,qe=fe.g,Ze=fe.b;Me?(x[0]=Ae,x[1]=qe,x[2]=Ze,x[3]=Te,O.clearBufferuiv(O.COLOR,0,x)):(T[0]=Ae,T[1]=qe,T[2]=Ze,T[3]=Te,O.clearBufferiv(O.COLOR,0,T))}else V|=O.COLOR_BUFFER_BIT}U&&(V|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),D=E},this.dispose=function(){t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",In,!1),Ve.dispose(),ue.dispose(),ce.dispose(),q.dispose(),ie.dispose(),ee.dispose(),ge.dispose(),ne.dispose(),oe.dispose(),we.dispose(),we.removeEventListener("sessionstart",yu),we.removeEventListener("sessionend",Mu),ns.stop()};function _t(E){E.preventDefault(),Yr("WebGLRenderer: Context Lost."),P=!0}function ot(){Yr("WebGLRenderer: Context Restored."),P=!1;let E=z.autoReset,U=Ne.enabled,j=Ne.autoUpdate,V=Ne.needsUpdate,W=Ne.type;De(),z.autoReset=E,Ne.enabled=U,Ne.autoUpdate=j,Ne.needsUpdate=V,Ne.type=W}function In(E){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function qn(E){let U=E.target;U.removeEventListener("dispose",qn),tp(U)}function tp(E){np(E),q.remove(E)}function np(E){let U=q.get(E).programs;U!==void 0&&(U.forEach(function(j){oe.releaseProgram(j)}),E.isShaderMaterial&&oe.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,j,V,W,me){U===null&&(U=dn);let Me=W.isMesh&&W.matrixWorld.determinantAffine()<0,fe=rp(E,U,j,V,W);M.setMaterial(V,Me);let Te=j.index,Ae=1;if(V.wireframe===!0){if(Te=Z.getWireframeAttribute(j),Te===void 0)return;Ae=2}let qe=j.drawRange,Ze=j.attributes.position,Ee=qe.start*Ae,ct=(qe.start+qe.count)*Ae;me!==null&&(Ee=Math.max(Ee,me.start*Ae),ct=Math.min(ct,(me.start+me.count)*Ae)),Te!==null?(Ee=Math.max(Ee,0),ct=Math.min(ct,Te.count)):Ze!=null&&(Ee=Math.max(Ee,0),ct=Math.min(ct,Ze.count));let Bt=ct-Ee;if(Bt<0||Bt===1/0)return;ge.setup(W,V,fe,j,Te);let Mt,xt=le;if(Te!==null&&(Mt=ae.get(Te),xt=Q,xt.setIndex(Mt)),W.isMesh)V.wireframe===!0?(M.setLineWidth(V.wireframeLinewidth*Ot()),xt.setMode(O.LINES)):xt.setMode(O.TRIANGLES);else if(W.isLine){let $t=V.linewidth;$t===void 0&&($t=1),M.setLineWidth($t*Ot()),W.isLineSegments?xt.setMode(O.LINES):W.isLineLoop?xt.setMode(O.LINE_LOOP):xt.setMode(O.LINE_STRIP)}else W.isPoints?xt.setMode(O.POINTS):W.isSprite&&xt.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))xt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let $t=W._multiDrawStarts,_e=W._multiDrawCounts,an=W._multiDrawCount,nt=Te?ae.get(Te).bytesPerElement:1,Sn=q.get(V).currentProgram.getUniforms();for(let Xn=0;Xn<an;Xn++)Sn.setValue(O,"_gl_DrawID",Xn),xt.render($t[Xn]/nt,_e[Xn])}else if(W.isInstancedMesh)xt.renderInstances(Ee,Bt,W.count);else if(j.isInstancedBufferGeometry){let $t=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,_e=Math.min(j.instanceCount,$t);xt.renderInstances(Ee,Bt,_e)}else xt.render(Ee,Bt)};function _u(E,U,j,V){D!==null&&E.isNodeMaterial&&D.setObject(V,E),st===!0&&Ie.setState(E,j,!1),E.transparent===!0&&E.side===un&&E.forceSinglePass===!1?(E.side=Ut,E.needsUpdate=!0,Ga(E,U,V),E.side=Qn,E.needsUpdate=!0,Ga(E,U,V),E.side=un):Ga(E,U,V)}this.compile=function(E,U,j=null){j===null&&(j=E),D!==null&&D.renderStart(E,U,j),S=ce.get(j),S.init(U),_.push(S),j.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),E!==j&&E.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),S.setupLights(),D!==null&&D.updateLights(S.state.lightsArray),vt=this.localClippingEnabled,st=Ie.init(this.clippingPlanes,vt),st===!0&&Ie.setGlobalState(this.clippingPlanes,U),D!==null&&Ne.render(S.state.shadowsArray,j,U);let V=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let me=W.material;if(me)if(Array.isArray(me))for(let Me=0;Me<me.length;Me++){let fe=me[Me];_u(fe,j,U,W),V.add(fe)}else _u(me,j,U,W),V.add(me)}),S=_.pop(),D!==null&&D.renderEnd(),V},this.compileAsync=function(E,U,j=null){let V=this.compile(E,U,j);return new Promise(W=>{function me(){if(V.forEach(function(Me){let Te=q.get(Me).currentProgram;(Te===void 0||Te.isReady())&&V.delete(Me)}),V.size===0){W(E);return}setTimeout(me,10)}ht.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let al=null;function ip(E){al&&al(E)}function yu(){ns.stop()}function Mu(){ns.start()}let ns=new Cf;ns.setAnimationLoop(ip),typeof self<"u"&&ns.setContext(self),this.setAnimationLoop=function(E){al=E,we.setAnimationLoop(E),E===null?ns.stop():ns.start()},we.addEventListener("sessionstart",yu),we.addEventListener("sessionend",Mu),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(E,U);let j=we.enabled===!0&&we.isPresenting===!0,V=w!==null&&(B===null||j)&&w.begin(C,B);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(U),U=we.getCamera()),E.isScene===!0&&E.onBeforeRender(C,E,U,B),S=ce.get(E,_.length),S.init(U),S.state.textureUnits=Y.getTextureUnits(),_.push(S),Qe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Je.setFromProjectionMatrix(Qe,kn,U.reversedDepth),vt=this.localClippingEnabled,st=Ie.init(this.clippingPlanes,vt),y=ue.get(E,A.length),y.init(),A.push(y),we.enabled===!0&&we.isPresenting===!0){let Me=C.xr.getDepthSensingMesh();Me!==null&&ol(Me,U,-1/0,C.sortObjects)}ol(E,U,0,C.sortObjects),y.finish(),D!==null&&D.updateLights(S.state.lightsArray),C.sortObjects===!0&&y.sort(Se,ze),Rt=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,Rt&&Ve.addToRenderList(y,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&Ie.beginShadows();let W=S.state.shadowsArray;if(Ne.render(W,E,U),st===!0&&Ie.endShadows(),(V&&w.hasRenderPass())===!1){let Me=y.opaque,fe=y.transmissive;if(S.setupLights(),U.isArrayCamera){let Te=U.cameras;if(fe.length>0)for(let Ae=0,qe=Te.length;Ae<qe;Ae++){let Ze=Te[Ae];Tu(Me,fe,E,Ze)}Rt&&Ve.render(E);for(let Ae=0,qe=Te.length;Ae<qe;Ae++){let Ze=Te[Ae];Su(y,E,Ze,Ze.viewport)}}else fe.length>0&&Tu(Me,fe,E,U),Rt&&Ve.render(E),Su(y,E,U)}B!==null&&X===0&&(Y.updateMultisampleRenderTarget(B),Y.updateRenderTargetMipmap(B)),V&&w.end(C),E.isScene===!0&&E.onAfterRender(C,E,U),ge.resetDefaultState(),G=-1,K=null,_.pop(),_.length>0?(S=_[_.length-1],Y.setTextureUnits(S.state.textureUnits),st===!0&&Ie.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?y=A[A.length-1]:y=null,D!==null&&D.renderEnd()};function ol(E,U,j,V){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLightProbeGrid)S.pushLightProbeGrid(E);else if(E.isLight)S.pushLight(E),E.castShadow&&S.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(Je)){V&&jt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Qe);let Me=ee.update(E),fe=E.material;fe.visible&&y.push(E,Me,fe,j,jt.z,null,U)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(Je))){let Me=ee.update(E),fe=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),jt.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),jt.copy(Me.boundingSphere.center)),jt.applyMatrix4(E.matrixWorld).applyMatrix4(Qe)),Array.isArray(fe)){let Te=Me.groups;for(let Ae=0,qe=Te.length;Ae<qe;Ae++){let Ze=Te[Ae],Ee=fe[Ze.materialIndex];Ee&&Ee.visible&&y.push(E,Me,Ee,j,jt.z,Ze,U)}}else fe.visible&&y.push(E,Me,fe,j,jt.z,null,U)}}let me=E.children;for(let Me=0,fe=me.length;Me<fe;Me++)ol(me[Me],U,j,V)}function Su(E,U,j,V){let{opaque:W,transmissive:me,transparent:Me}=E;S.setupLightsView(j),st===!0&&Ie.setGlobalState(C.clippingPlanes,j),V&&M.viewport($.copy(V)),W.length>0&&za(W,U,j),me.length>0&&za(me,U,j),Me.length>0&&za(Me,U,j),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Tu(E,U,j,V){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[V.id]===void 0){let Ee=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[V.id]=new Pt(1,1,{generateMipmaps:!0,type:Ee?Wt:mn,minFilter:Vn,samples:Math.max(4,I.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:We.workingColorSpace})}let me=S.state.transmissionRenderTarget[V.id],Me=V.viewport||$;me.setSize(Me.z*C.transmissionResolutionScale,Me.w*C.transmissionResolutionScale);let fe=C.getRenderTarget(),Te=C.getActiveCubeFace(),Ae=C.getActiveMipmapLevel();C.setRenderTarget(me),C.getClearColor(lt),Ye=C.getClearAlpha(),Ye<1&&C.setClearColor(16777215,.5),C.clear(),Rt&&Ve.render(j);let qe=C.toneMapping;C.toneMapping=Gn;let Ze=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),S.setupLightsView(V),st===!0&&Ie.setGlobalState(C.clippingPlanes,V),za(E,j,V),Y.updateMultisampleRenderTarget(me),Y.updateRenderTargetMipmap(me),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let ct=0,Bt=U.length;ct<Bt;ct++){let Mt=U[ct],{object:xt,geometry:$t,material:_e,group:an}=Mt;if(_e.side===un&&xt.layers.test(V.layers)){let nt=_e.side;_e.side=Ut,_e.needsUpdate=!0,Eu(xt,j,V,$t,_e,an),_e.side=nt,_e.needsUpdate=!0,Ee=!0}}Ee===!0&&(Y.updateMultisampleRenderTarget(me),Y.updateRenderTargetMipmap(me))}C.setRenderTarget(fe,Te,Ae),C.setClearColor(lt,Ye),Ze!==void 0&&(V.viewport=Ze),C.toneMapping=qe}function za(E,U,j){let V=U.isScene===!0?U.overrideMaterial:null;for(let W=0,me=E.length;W<me;W++){let Me=E[W],{object:fe,geometry:Te,group:Ae}=Me,qe=Me.material;qe.allowOverride===!0&&V!==null&&(qe=V),fe.layers.test(j.layers)&&Eu(fe,U,j,Te,qe,Ae)}}function Eu(E,U,j,V,W,me){D!==null&&W.isNodeMaterial&&D.setObject(E,W),E.onBeforeRender(C,U,j,V,W,me),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(C,U,j,V,E,me),W.transparent===!0&&W.side===un&&W.forceSinglePass===!1?(W.side=Ut,W.needsUpdate=!0,C.renderBufferDirect(j,U,V,W,E,me),W.side=Qn,W.needsUpdate=!0,C.renderBufferDirect(j,U,V,W,E,me),W.side=un):C.renderBufferDirect(j,U,V,W,E,me),E.onAfterRender(C,U,j,V,W,me)}function Ga(E,U,j){U.isScene!==!0&&(U=dn);let V=q.get(E),W=S.state.lights,me=S.state.shadowsArray,Me=W.state.version,fe=oe.getParameters(E,W.state,me,U,j,S.state.lightProbeGridArray),Te=oe.getProgramCacheKey(fe),Ae=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,V.fog=U.fog;let qe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=ie.get(E.envMap||V.environment,qe),V.envMapRotation=V.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ae===void 0&&(E.addEventListener("dispose",qn),Ae=new Map,V.programs=Ae);let Ze=Ae.get(Te);if(Ze!==void 0){if(V.currentProgram===Ze&&V.lightsStateVersion===Me)return Au(E,fe),Ze}else fe.uniforms=oe.getUniforms(E),D!==null&&E.isNodeMaterial&&D.build(E,j,fe),E.onBeforeCompile(fe,C),Ze=oe.acquireProgram(fe,Te),Ae.set(Te,Ze),V.uniforms=fe.uniforms;let Ee=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ee.clippingPlanes=Ie.uniform),Au(E,fe),V.needsLights=op(E),V.lightsStateVersion=Me,V.needsLights&&(Ee.ambientLightColor.value=W.state.ambient,Ee.lightProbe.value=W.state.probe,Ee.sunLights.value=W.state.sun,Ee.sunLightShadows.value=W.state.sunShadow,Ee.directionalLights.value=W.state.directional,Ee.directionalLightShadows.value=W.state.directionalShadow,Ee.spotLights.value=W.state.spot,Ee.spotLightShadows.value=W.state.spotShadow,Ee.rectAreaLights.value=W.state.rectArea,Ee.ltc_1.value=W.state.rectAreaLTC1,Ee.ltc_2.value=W.state.rectAreaLTC2,Ee.pointLights.value=W.state.point,Ee.pointLightShadows.value=W.state.pointShadow,Ee.hemisphereLights.value=W.state.hemi,Ee.sunShadowMatrix.value=W.state.sunShadowMatrix,Ee.sunShadowCascade.value=W.state.sunShadowCascade,Ee.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ee.spotLightMatrix.value=W.state.spotLightMatrix,Ee.spotLightMap.value=W.state.spotLightMap,Ee.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=S.state.lightProbeGridArray.length>0,V.currentProgram=Ze,V.uniformsList=null,Ze}function wu(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=yr.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Au(E,U){let j=q.get(E);j.outputColorSpace=U.outputColorSpace,j.batching=U.batching,j.batchingColor=U.batchingColor,j.instancing=U.instancing,j.instancingColor=U.instancingColor,j.instancingMorph=U.instancingMorph,j.skinning=U.skinning,j.morphTargets=U.morphTargets,j.morphNormals=U.morphNormals,j.morphColors=U.morphColors,j.morphTargetsCount=U.morphTargetsCount,j.numClippingPlanes=U.numClippingPlanes,j.numIntersection=U.numClipIntersection,j.vertexAlphas=U.vertexAlphas,j.vertexTangents=U.vertexTangents,j.toneMapping=U.toneMapping}function sp(E,U){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;v.setFromMatrixPosition(U.matrixWorld);for(let j=0,V=E.length;j<V;j++){let W=E[j];if(W.texture!==null&&W.boundingBox.containsPoint(v))return W}return null}function rp(E,U,j,V,W){U.isScene!==!0&&(U=dn),Y.resetTextureUnits();let me=U.fog,Me=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?U.environment:null,fe=B===null?C.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:We.workingColorSpace,Te=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ae=ie.get(V.envMap||Me,Te),qe=V.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ze=!!j.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ee=!!j.morphAttributes.position,ct=!!j.morphAttributes.normal,Bt=!!j.morphAttributes.color,Mt=Gn;V.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Mt=C.toneMapping);let xt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,$t=xt!==void 0?xt.length:0,_e=q.get(V),an=S.state.lights;if(st===!0&&(vt===!0||E!==K)){let yt=E===K&&V.id===G;Ie.setState(V,E,yt)}let nt=!1;V.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==an.state.version||_e.outputColorSpace!==fe||W.isBatchedMesh&&_e.batching===!1||!W.isBatchedMesh&&_e.batching===!0||W.isBatchedMesh&&_e.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&_e.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&_e.instancing===!1||!W.isInstancedMesh&&_e.instancing===!0||W.isSkinnedMesh&&_e.skinning===!1||!W.isSkinnedMesh&&_e.skinning===!0||W.isInstancedMesh&&_e.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&_e.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&_e.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&_e.instancingMorph===!1&&W.morphTexture!==null||_e.envMap!==Ae||V.fog===!0&&_e.fog!==me||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Ie.numPlanes||_e.numIntersection!==Ie.numIntersection)||_e.vertexAlphas!==qe||_e.vertexTangents!==Ze||_e.morphTargets!==Ee||_e.morphNormals!==ct||_e.morphColors!==Bt||_e.toneMapping!==Mt||_e.morphTargetsCount!==$t||!!_e.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(nt=!0):(nt=!0,_e.__version=V.version);let Sn=_e.currentProgram;nt===!0&&(Sn=Ga(V,U,W),D&&V.isNodeMaterial&&D.onUpdateProgram(V,Sn,_e));let Xn=!1,Ci=!1,Is=!1,gt=Sn.getUniforms(),It=_e.uniforms;if(M.useProgram(Sn.program)&&(Xn=!0,Ci=!0,Is=!0),V.id!==G&&(G=V.id,Ci=!0),_e.needsLights){let yt=sp(S.state.lightProbeGridArray,W);_e.lightProbeGrid!==yt&&(_e.lightProbeGrid=yt,Ci=!0)}if(Xn||K!==E){M.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),gt.setValue(O,"projectionMatrix",E.projectionMatrix),gt.setValue(O,"viewMatrix",E.matrixWorldInverse);let Ii=gt.map.cameraPosition;Ii!==void 0&&Ii.setValue(O,wt.setFromMatrixPosition(E.matrixWorld)),I.logarithmicDepthBuffer&&gt.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&gt.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),K!==E&&(K=E,Ci=!0,Is=!0)}if(_e.needsLights&&(an.state.sunShadowMap.length>0&&gt.setValue(O,"sunShadowMap",an.state.sunShadowMap,Y),an.state.directionalShadowMap.length>0&&gt.setValue(O,"directionalShadowMap",an.state.directionalShadowMap,Y),an.state.spotShadowMap.length>0&&gt.setValue(O,"spotShadowMap",an.state.spotShadowMap,Y),an.state.pointShadowMap.length>0&&gt.setValue(O,"pointShadowMap",an.state.pointShadowMap,Y)),W.isSkinnedMesh){gt.setOptional(O,W,"bindMatrix"),gt.setOptional(O,W,"bindMatrixInverse");let yt=W.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),gt.setValue(O,"boneTexture",yt.boneTexture,Y))}W.isBatchedMesh&&(gt.setOptional(O,W,"batchingTexture"),gt.setValue(O,"batchingTexture",W._matricesTexture,Y),gt.setOptional(O,W,"batchingIdTexture"),gt.setValue(O,"batchingIdTexture",W._indirectTexture,Y),gt.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&gt.setValue(O,"batchingColorTexture",W._colorsTexture,Y));let Pi=j.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&k.update(W,j,Sn),(Ci||_e.receiveShadow!==W.receiveShadow)&&(_e.receiveShadow=W.receiveShadow,gt.setValue(O,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&U.environment!==null&&(It.envMapIntensity.value=U.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=nv()),Ci){if(gt.setValue(O,"toneMappingExposure",C.toneMappingExposure),_e.needsLights&&ap(It,Is),me&&V.fog===!0&&Pe.refreshFogUniforms(It,me),Pe.refreshMaterialUniforms(It,V,te,J,S.state.transmissionRenderTarget[E.id]),_e.needsLights&&_e.lightProbeGrid){let yt=_e.lightProbeGrid;It.probesSH.value=yt.texture,It.probesMin.value.copy(yt.boundingBox.min),It.probesMax.value.copy(yt.boundingBox.max),It.probesResolution.value.copy(yt.resolution)}yr.upload(O,wu(_e),It,Y)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(yr.upload(O,wu(_e),It,Y),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&gt.setValue(O,"center",W.center),gt.setValue(O,"modelViewMatrix",W.modelViewMatrix),gt.setValue(O,"normalMatrix",W.normalMatrix),gt.setValue(O,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){let yt=V.uniformsGroups;for(let Ii=0,Ls=yt.length;Ii<Ls;Ii++){let Cu=yt[Ii];ne.update(Cu,Sn),ne.bind(Cu,Sn)}}return Sn}function ap(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.sunLights.needsUpdate=U,E.sunLightShadows.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function op(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(E,U,j){let V=q.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),q.get(E.texture).__webglTexture=U,q.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:j,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){let j=q.get(E);j.__webglFramebuffer=U,j.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,j=0){B=E,H=U,X=j;let V=null,W=!1,me=!1;if(E){let fe=q.get(E);if(fe.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(O.FRAMEBUFFER,fe.__webglFramebuffer),$.copy(E.viewport),ve.copy(E.scissor),pe=E.scissorTest,M.viewport($),M.scissor(ve),M.setScissorTest(pe),G=-1;return}else if(fe.__webglFramebuffer===void 0)Y.setupRenderTarget(E);else if(fe.__hasExternalTextures)Y.rebindTextures(E,q.get(E.texture).__webglTexture,q.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let qe=E.depthTexture;if(fe.__boundDepthTexture!==qe){if(qe!==null&&q.has(qe)&&(E.width!==qe.image.width||E.height!==qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(E)}}let Te=E.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(me=!0);let Ae=q.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ae[U])?V=Ae[U][j]:V=Ae[U],W=!0):E.samples>0&&Y.useMultisampledRTT(E)===!1?V=q.get(E).__webglMultisampledFramebuffer:Array.isArray(Ae)?V=Ae[j]:V=Ae,$.copy(E.viewport),ve.copy(E.scissor),pe=E.scissorTest}else $.copy(ye).multiplyScalar(te).floor(),ve.copy(je).multiplyScalar(te).floor(),pe=Gt;if(j!==0&&(V=F),M.bindFramebuffer(O.FRAMEBUFFER,V)&&M.drawBuffers(E,V),M.viewport($),M.scissor(ve),M.setScissorTest(pe),W){let fe=q.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,fe.__webglTexture,j)}else if(me){let fe=U;for(let Te=0;Te<E.textures.length;Te++){let Ae=q.get(E.textures[Te]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Te,Ae.__webglTexture,j,fe)}}else if(E!==null&&j!==0){let fe=q.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,fe.__webglTexture,j)}G=-1};function Ru(E){let U=q.get(E);return(U.__readFormat!==E.format||U.__readType!==E.type)&&(U.__readFormat=E.format,U.__readType=E.type,U.__formatReadable=I.textureFormatReadable(E.format),U.__typeReadable=I.textureTypeReadable(E.type)),U}this.readRenderTargetPixels=function(E,U,j,V,W,me,Me,fe=0){if(!(E&&E.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){M.bindFramebuffer(O.FRAMEBUFFER,Te);try{let Ae=E.textures[fe],qe=Ae.format,Ze=Ae.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+fe);let Ee=Ru(Ae);if(Ee.__formatReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-V&&j>=0&&j<=E.height-W&&O.readPixels(U,j,V,W,he.convert(qe),he.convert(Ze),me)}finally{let Ae=B!==null?q.get(B).__webglFramebuffer:null;M.bindFramebuffer(O.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(E,U,j,V,W,me,Me,fe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te)if(U>=0&&U<=E.width-V&&j>=0&&j<=E.height-W){M.bindFramebuffer(O.FRAMEBUFFER,Te);let Ae=E.textures[fe],qe=Ae.format,Ze=Ae.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+fe);let Ee=Ru(Ae);if(Ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ct),O.bufferData(O.PIXEL_PACK_BUFFER,me.byteLength,O.STREAM_READ),O.readPixels(U,j,V,W,he.convert(qe),he.convert(Ze),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Bt=B!==null?q.get(B).__webglFramebuffer:null;M.bindFramebuffer(O.FRAMEBUFFER,Bt);let Mt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await tf(O,Mt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ct),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,me),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ct),O.deleteSync(Mt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,j=0){let V=Math.pow(2,-j),W=Math.floor(E.image.width*V),me=Math.floor(E.image.height*V),Me=U!==null?U.x:0,fe=U!==null?U.y:0;Y.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,j,0,0,Me,fe,W,me),M.unbindTexture()},this.copyTextureToTexture=function(E,U,j=null,V=null,W=0,me=0){let Me,fe,Te,Ae,qe,Ze,Ee,ct,Bt,Mt=E.isCompressedTexture?E.mipmaps[me]:E.image;if(j!==null)Me=j.max.x-j.min.x,fe=j.max.y-j.min.y,Te=j.isBox3?j.max.z-j.min.z:1,Ae=j.min.x,qe=j.min.y,Ze=j.isBox3?j.min.z:0;else{let It=Math.pow(2,-W);Me=Math.floor(Mt.width*It),fe=Math.floor(Mt.height*It),E.isDataArrayTexture?Te=Mt.depth:E.isData3DTexture?Te=Math.floor(Mt.depth*It):Te=1,Ae=0,qe=0,Ze=0}V!==null?(Ee=V.x,ct=V.y,Bt=V.z):(Ee=0,ct=0,Bt=0);let xt=he.convert(U.format),$t=he.convert(U.type),_e;U.isData3DTexture?(Y.setTexture3D(U,0),_e=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Y.setTexture2DArray(U,0),_e=O.TEXTURE_2D_ARRAY):(Y.setTexture2D(U,0),_e=O.TEXTURE_2D),M.activeTexture(O.TEXTURE0),M.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),M.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),M.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let an=M.getParameter(O.UNPACK_ROW_LENGTH),nt=M.getParameter(O.UNPACK_IMAGE_HEIGHT),Sn=M.getParameter(O.UNPACK_SKIP_PIXELS),Xn=M.getParameter(O.UNPACK_SKIP_ROWS),Ci=M.getParameter(O.UNPACK_SKIP_IMAGES);M.pixelStorei(O.UNPACK_ROW_LENGTH,Mt.width),M.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Mt.height),M.pixelStorei(O.UNPACK_SKIP_PIXELS,Ae),M.pixelStorei(O.UNPACK_SKIP_ROWS,qe),M.pixelStorei(O.UNPACK_SKIP_IMAGES,Ze);let Is=E.isDataArrayTexture||E.isData3DTexture,gt=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){let It=q.get(E),Pi=q.get(U),yt=q.get(It.__renderTarget),Ii=q.get(Pi.__renderTarget);M.bindFramebuffer(O.READ_FRAMEBUFFER,yt.__webglFramebuffer),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let Ls=0;Ls<Te;Ls++)Is&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,q.get(E).__webglTexture,W,Ze+Ls),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,q.get(U).__webglTexture,me,Bt+Ls)),O.blitFramebuffer(Ae,qe,Me,fe,Ee,ct,Me,fe,O.DEPTH_BUFFER_BIT,O.NEAREST);M.bindFramebuffer(O.READ_FRAMEBUFFER,null),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||q.has(E)){let It=q.get(E),Pi=q.get(U);M.bindFramebuffer(O.READ_FRAMEBUFFER,L),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,N);for(let yt=0;yt<Te;yt++)Is?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,It.__webglTexture,W,Ze+yt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,It.__webglTexture,W),gt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pi.__webglTexture,me,Bt+yt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Pi.__webglTexture,me),W!==0?O.blitFramebuffer(Ae,qe,Me,fe,Ee,ct,Me,fe,O.COLOR_BUFFER_BIT,O.NEAREST):gt?O.copyTexSubImage3D(_e,me,Ee,ct,Bt+yt,Ae,qe,Me,fe):O.copyTexSubImage2D(_e,me,Ee,ct,Ae,qe,Me,fe);M.bindFramebuffer(O.READ_FRAMEBUFFER,null),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else gt?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(_e,me,Ee,ct,Bt,Me,fe,Te,xt,$t,Mt.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(_e,me,Ee,ct,Bt,Me,fe,Te,xt,Mt.data):O.texSubImage3D(_e,me,Ee,ct,Bt,Me,fe,Te,xt,$t,Mt):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,me,Ee,ct,Me,fe,xt,$t,Mt.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,me,Ee,ct,Mt.width,Mt.height,xt,Mt.data):O.texSubImage2D(O.TEXTURE_2D,me,Ee,ct,Me,fe,xt,$t,Mt);M.pixelStorei(O.UNPACK_ROW_LENGTH,an),M.pixelStorei(O.UNPACK_IMAGE_HEIGHT,nt),M.pixelStorei(O.UNPACK_SKIP_PIXELS,Sn),M.pixelStorei(O.UNPACK_SKIP_ROWS,Xn),M.pixelStorei(O.UNPACK_SKIP_IMAGES,Ci),me===0&&U.generateMipmaps&&O.generateMipmap(_e),M.unbindTexture()},this.initRenderTarget=function(E){q.get(E).__webglFramebuffer===void 0&&Y.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Y.setTextureCube(E,0):E.isData3DTexture?Y.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Y.setTexture2DArray(E,0):Y.setTexture2D(E,0),M.unbindTexture()},this.resetState=function(){H=0,X=0,B=null,M.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}};function Ji(a,e=!1){let t=a[0].index!==null,n=new Set(Object.keys(a[0].attributes)),i=new Set(Object.keys(a[0].morphAttributes)),s={},r={},o=a[0].morphTargetsRelative,c=new it,l=0;for(let h=0;h<a.length;++h){let u=a[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<a.length;++d){let f=a[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=a[d].attributes.position.count}c.setIndex(u)}for(let h in s){let u=Uf(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in r){let u=r[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let b=0;b<r[h].length;++b)f.push(r[h][b][d]);let m=Uf(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}}return c}function Uf(a){let e,t,n,i=-1,s=0;for(let l=0;l<a.length;++l){let h=a[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let r=new e(s),o=new St(r,t,n),c=0;for(let l=0;l<a.length;++l){let h=a[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){let b=h.getComponent(d,m);o.setComponent(d+u,m,b)}}else r.set(h.array,c);c+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function Ph(a,e){if(e===th)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===xr||e===wa){let t=a.getIndex();if(t===null){let s=[],r=a.getAttribute("position");if(r!==void 0){for(let o=0;o<r.count;o++)s.push(o);a.setIndex(s),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}let n=t.count-2,i=[];if(e===xr)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),a.setIndex(i),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}function Er(a){let e=new Map,t=new Map,n=a.clone();return kf(a,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,r=e.get(i),o=r.skeleton.bones;s.skeleton=r.skeleton.clone(),s.bindMatrix.copy(r.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function kf(a,e,t){t(a,e);for(let n=0;n<a.children.length;n++)kf(a.children[n],e.children[n],t)}var Vc=class extends Zn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new kh(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Uh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Fh(t)}),this.register(function(t){return new Wc(t,Ke.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Wc(t,Ke.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Jh(t)})}load(e,t,n,i){let s=this,r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){let l=Si.extractUrlBase(e);r=Si.resolveURL(l,this.path)}else r=Si.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new dr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,r,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,r={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Gf){try{r[Ke.KHR_BINARY_GLTF]=new Zh(e)}catch(u){i&&i(u);return}s=JSON.parse(r[Ke.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new su(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,r[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Ke.KHR_MATERIALS_UNLIT:r[u]=new Nh;break;case Ke.KHR_DRACO_MESH_COMPRESSION:r[u]=new $h(s,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:r[u]=new Qh;break;case Ke.KHR_MESH_QUANTIZATION:r[u]=new eu;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function sv(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}function kt(a,e,t){let n=a.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Fh=class{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,h=new se(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],cn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Mi(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new sn(h),l.distance=u;break;case"spot":l=new yi(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ni(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Nh=class{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return ft}extendParams(e,t,n){let i=[];e.color=new se(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let r=s.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],cn),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,tt))}return Promise.all(i)}},Uh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},kh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return kt(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new xe(s,s)}return Promise.all(i)}},Oh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){return kt(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Bh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return kt(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Hh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){return kt(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new se(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],cn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,tt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},zh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return kt(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Gh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){return kt(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new se().setRGB(s[0],s[1],s[2],cn),Promise.all(i)}},Vh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){return kt(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Wh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){return kt(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new se().setRGB(s[0],s[1],s[2],cn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,tt)),Promise.all(i)}},qh=class{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){return kt(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},Xh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return kt(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},jh=class{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}},Kh=class{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let r=s.extensions[t],o=i.images[r.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,r.source,c)}},Yh=class{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let r=s.extensions[t],o=i.images[r.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,r.source,c)}},Wc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):r.ready.then(function(){let f=new ArrayBuffer(h*u);return r.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},Jh=class{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Rn.TRIANGLES&&l.mode!==Rn.TRIANGLE_STRIP&&l.mode!==Rn.TRIANGLE_FAN&&l.mode!==void 0)return null;let r=n.extensions[this.name].attributes,o=[],c={};for(let l in r)o.push(this.parser.getDependency("accessor",r[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let m of u){let b=new Oe,g=new R,p=new zt,x=new R(1,1,1),T=new Hn(m.geometry,m.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&x.fromBufferAttribute(c.SCALE,y),T.setMatrixAt(y,b.compose(g,p,x));let v=null;for(let y in c)if(y==="_COLOR_0"){let S=c[y];T.instanceColor=new fi(S.array,S.itemSize,S.normalized)}else if(y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"){if(v===null){let A=T.geometry;v=new it,v.name=A.name;for(let _ in A.attributes)v.setAttribute(_,A.attributes[_]);for(let _ in A.morphAttributes)v.morphAttributes[_]=A.morphAttributes[_];A.index!==null&&v.setIndex(A.index),v.morphTargetsRelative=A.morphTargetsRelative;for(let _ of A.groups)v.addGroup(_.start,_.count,_.materialIndex);A.boundingBox!==null&&(v.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(v.boundingSphere=A.boundingSphere.clone()),v.drawRange.start=A.drawRange.start,v.drawRange.count=A.drawRange.count,v.userData=Object.assign({},A.userData),T.geometry=v}let S=c[y];v.setAttribute(y,new fi(S.array,S.itemSize,S.normalized))}at.prototype.copy.call(T,m),this.parser.assignFinalMaterial(T),f.push(T)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Gf="glTF",Ia=12,Of={JSON:1313821514,BIN:5130562},Zh=class{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ia),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Gf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ia,s=new DataView(e,Ia),r=0;for(;r<i;){let o=s.getUint32(r,!0);r+=4;let c=s.getUint32(r,!0);if(r+=4,c===Of.JSON){let l=new Uint8Array(e,Ia+r,o);this.content=n.decode(l)}else if(c===Of.BIN){let l=Ia+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},$h=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},c={},l={};for(let h in r){let u=nu[h]||h.toLowerCase();o[u]=r[h]}for(let h in e.attributes){let u=nu[h]||h.toLowerCase();if(r[h]!==void 0){let d=n.accessors[e.attributes[h]],f=wr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let m in f.attributes){let b=f.attributes[m],g=c[m];g!==void 0&&(b.normalized=g)}u(f)},o,l,cn,d)})})}},Qh=class{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},eu=class{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}},qc=class extends Jn{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,m=e*l,b=m-l,g=-2*f+3*d,p=f-d,x=1-g,T=p-d+u;for(let v=0;v!==o;v++){let y=r[b+v+o],S=r[b+v+c]*h,A=r[m+v+o],_=r[m+v]*h;s[v]=x*y+T*S+g*A+p*_}return s}},rv=new zt,tu=class extends qc{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return rv.fromArray(s).normalize().toArray(s),s}},Rn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},wr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Bf={9728:At,9729:Lt,9984:Jo,9985:mr,9986:Ts,9987:Vn},Hf={33071:En,33648:Qs,10497:xn},Ih={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},nu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Zi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},av={CUBICSPLINE:void 0,LINEAR:us,STEP:hs},Lh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ov(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new Ce({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qn})),a.DefaultMaterial}function As(a,e,t){for(let n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ni(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function cv(a,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(a);let r=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):a.attributes.position;r.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):a.attributes.normal;o.push(d)}if(s){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):a.attributes.color;c.push(d)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(a.morphAttributes.position=h),i&&(a.morphAttributes.normal=u),s&&(a.morphAttributes.color=d),a.morphTargetsRelative=!0,a})}function lv(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function hv(a){let e,t=a.extensions&&a.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Dh(t.attributes):e=a.indices+":"+Dh(a.attributes)+":"+a.mode,a.targets!==void 0)for(let n=0,i=a.targets.length;n<i;n++)e+=":"+Dh(a.targets[n]);return e}function Dh(a){let e="",t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function iu(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function uv(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":a.search(/\.ktx2($|\?)/i)>0||a.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var dv=new Oe,su=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new sv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,r=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,r=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&r<98?this.textureLoader=new bs(this.options.manager):this.textureLoader=new ua(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new dr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){let o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return As(s,o,i),ni(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i].joints;for(let o=0,c=r.length;o<c;o++)e[r[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(r,o)=>{let c=this.associations.get(r);c!=null&&this.associations.set(o,c);for(let[l,h]of r.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,r){n.load(Si.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let r=Ih[i.type],o=wr[i.componentType],c=i.normalized===!0,l=new o(i.count*r);return Promise.resolve(new St(l,r,c))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){let o=r[0],c=Ih[i.type],l=wr[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,b,g;if(f&&f!==u){let p=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,T=t.cache.get(x);T||(b=new l(o,p*f,i.count*f/h),T=new fs(b,f/h),t.cache.add(x,T)),g=new Oi(T,c,d%f/h,m)}else o===null?b=new l(i.count*c):b=new l(o,d,i.count*c),g=new St(b,c,m);if(i.sparse!==void 0){let p=Ih.SCALAR,x=wr[i.sparse.indices.componentType],T=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,y=new x(r[1],T,i.sparse.count*p),S=new l(r[2],v,i.sparse.count*c);o!==null&&(g=new St(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let A=0,_=y.length;A<_;A++){let w=y[A];if(g.setX(w,S[A*c]),c>=2&&g.setY(w,S[A*c+1]),c>=3&&g.setZ(w,S[A*c+2]),c>=4&&g.setW(w,S[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s],o=this.textureLoader;if(r.uri){let c=n.manager.getHandler(r.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,r=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=r.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(s.samplers||{})[r.sampler]||{};return h.magFilter=Bf[d.magFilter]||Lt,h.minFilter=Bf[d.minFilter]||Vn,h.wrapS=Hf[d.wrapS]||xn,h.wrapT=Hf[d.wrapT]||xn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==At&&h.minFilter!==Lt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let r=i.images[e],o=self.URL||self.webkitURL,c=r.uri||"",l=!1;if(r.bufferView!==void 0)c=n.getDependency("bufferView",r.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:r.mimeType});return c=o.createObjectURL(d),c});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(b){let g=new Vt(b);g.needsUpdate=!0,d(g)}),t.load(Si.resolveURL(u,s.path),m,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),ni(u,r),u.userData.mimeType=r.mimeType||uv(r.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[Ke.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(r);r=s.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,c)}}return i!==void 0&&(r.colorSpace=i),e[t]=r,r})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new lr,nn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new zi,nn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||r){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),r&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ce}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],r,o={},c=s.extensions||{},l=[];if(c[Ke.KHR_MATERIALS_UNLIT]){let u=i[Ke.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),l.push(u.extendParams(o,s,t))}else{let u=s.pbrMetallicRoughness||{};if(o.color=new se(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],cn),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,tt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=un);let h=s.alphaMode||Lh.OPAQUE;if(h===Lh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Lh.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==ft&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new xe(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&r!==ft&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==ft){let u=s.emissiveFactor;o.emissive=new se().setRGB(u[0],u[1],u[2],cn)}return s.emissiveTexture!==void 0&&r!==ft&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,tt)),Promise.all(l).then(function(){let u=new r(o);return s.name&&(u.name=s.name),ni(u,s),t.associations.set(u,{materials:e}),s.extensions&&As(i,u,s),u})}createUniqueName(e){let t=bt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return zf(c,o,t)})}let r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=hv(l),u=i[h];if(u)r.push(u.promise);else{let d;l.extensions&&l.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=zf(new it,l,t),l.mode===Rn.TRIANGLE_STRIP?d=d.then(f=>Ph(f,wa)):l.mode===Rn.TRIANGLE_FAN&&(d=d.then(f=>Ph(f,xr))),i[h]={primitive:l,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,o=[];for(let c=0,l=r.length;c<l;c++){let h=r[c].material===void 0?ov(this.cache):this.getDependency("material",r[c].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let b=h[f],g=r[f],p,x=l[f];if(g.mode===Rn.TRIANGLES||g.mode===Rn.TRIANGLE_STRIP||g.mode===Rn.TRIANGLE_FAN||g.mode===void 0){let T=s.isSkinnedMesh===!0,v=b.hasAttribute("skinIndex")&&b.hasAttribute("skinWeight");T&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=T&&v?new ea(b,x):new be(b,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===Rn.LINES)p=new na(b,x);else if(g.mode===Rn.LINE_STRIP)p=new pi(b,x);else if(g.mode===Rn.LINE_LOOP)p=new ia(b,x);else if(g.mode===Rn.POINTS)p=new ms(b,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&lv(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),ni(p,s),g.extensions&&As(i,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&As(i,u[0],s),u[0];let d=new Be;s.extensions&&As(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ct(rh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new $n(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ni(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),r=i,o=[],c=[];for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u){o.push(u);let d=new Oe;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ta(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,r=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],m=i.samplers[f.sampler],b=f.target,g=b.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,x=i.parameters!==void 0?i.parameters[m.output]:m.output;b.node!==void 0&&(r.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(m),h.push(b))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],b=u[3],g=u[4],p=[];for(let T=0,v=d.length;T<v;T++){let y=d[T],S=f[T],A=m[T],_=b[T],w=g[T];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let C=n._createAnimationTracks(y,S,A,_,w);if(C)for(let P=0;P<C.length;P++)p.push(C[P])}let x=new gs(s,void 0,p);return ni(x,i),x})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),r})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),r=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)r.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,dv)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,m=u[0];h.pivot=new R().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new ar:l.length>1?h=new Be:l.length===1?h=l[0]:h=new at,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=r),ni(h,s),s.extensions&&As(n,h,s),s.matrix!==void 0){let u=new Oe;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new Be;n.name&&(s.name=i.createUniqueName(n.name)),ni(s,n),n.extensions&&As(t,s,n);let r=n.nodes||[],o=[];for(let c=0,l=r.length;c<l;c++)o.push(i.getDependency("node",r[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?s.add(Er(d)):s.add(d)}let l=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof nn||d instanceof Vt)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){let r=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}Zi[s.path]===Zi.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(Zi[s.path]){case Zi.weights:h=xi;break;case Zi.rotation:h=vi;break;case Zi.translation:case Zi.scale:h=Vi;break;default:n.itemSize===1?h=xi:h=Vi;break}let u=i.interpolation!==void 0?av[i.interpolation]:us,d=this._getArrayFromAccessor(n);for(let f=0,m=c.length;f<m;f++){let b=new h(c[f]+"."+Zi[s.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),r.push(b)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=iu(t.constructor),i=new Float32Array(t.length);for(let s=0,r=t.length;s<r;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof vi?tu:qc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function fv(a,e,t){let n=e.attributes,i=new ln;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new R(c[0],c[1],c[2]),new R(l[0],l[1],l[2])),o.normalized){let h=iu(wr[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new R,c=new R;for(let l=0,h=s.length;l<h;l++){let u=s[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let b=iu(wr[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;let r=new tn;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=r}function zf(a,e,t){let n=e.attributes,i=[];function s(r,o){return t.getDependency("accessor",r).then(function(c){a.setAttribute(o,c)})}for(let r in n){let o=nu[r]||r.toLowerCase();o in a.attributes||i.push(s(n[r],o))}if(e.indices!==void 0&&!a.index){let r=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(r)}return We.workingColorSpace!==cn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${We.workingColorSpace}" not supported.`),ni(a,e),fv(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?cv(a,e.targets,t):a})}var Vf=(function(){var a="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(a),s,r=WebAssembly.instantiate(i,{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),T=0;T<p.length;++T){var v=p.charCodeAt(T);x[T]=v>96?v-97:v>64?v-39:v+4}for(var y=0,T=0;T<p.length;++T)x[y++]=x[T]<60?n[x[T]]:(x[T]-60)*64+x[++T];return x.buffer.slice(0,y)}function c(p,x,T,v,y,S,A){var _=p.exports.sbrk,w=v+3&-4,C=_(w*y),P=_(S.length),D=new Uint8Array(p.exports.memory.buffer);D.set(S,P);var F=x(C,v,y,P,S.length);if(F==0&&A&&A(C,w,y),T.set(D.subarray(C,C+v*y)),_(C-_(0)),F!=0)throw new Error("Malformed buffer data: "+F)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(T){var v=T.data;x.pending-=v.count,x.requests[v.id][v.action](v.value),delete x.requests[v.id]},x}function m(p){for(var x="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+c.toString()+g.toString(),T=new Blob([x],{type:"text/javascript"}),v=URL.createObjectURL(T),y=u.length;y<p;++y)u[y]=f(v);for(var y=p;y<u.length;++y)u[y].object.postMessage({});u.length=p,URL.revokeObjectURL(v)}function b(p,x,T,v,y){for(var S=u[0],A=1;A<u.length;++A)u[A].pending<S.pending&&(S=u[A]);return new Promise(function(_,w){var C=new Uint8Array(T),P=++d;S.pending+=p,S.requests[P]={resolve:_,reject:w},S.object.postMessage({id:P,count:p,size:x,source:C,mode:v,filter:y},[C.buffer])})}function g(p){var x=p.data;self.ready.then(function(T){if(!x.id)return self.close();try{var v=new Uint8Array(x.count*x.size);c(T,T.exports[x.mode],v,x.count,x.size,x.source,T.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:v},[v.buffer])}catch(y){self.postMessage({id:x.id,count:x.count,action:"reject",value:y})}})}return{ready:r,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,x,T,v,y){c(s,s.exports.meshopt_decodeVertexBuffer,p,x,T,v,s.exports[l[y]])},decodeIndexBuffer:function(p,x,T,v){c(s,s.exports.meshopt_decodeIndexBuffer,p,x,T,v)},decodeIndexSequence:function(p,x,T,v){c(s,s.exports.meshopt_decodeIndexSequence,p,x,T,v)},decodeGltfBuffer:function(p,x,T,v,y,S){c(s,s.exports[h[y]],p,x,T,v,s.exports[l[S]])},decodeGltfBufferAsync:function(p,x,T,v,y){return u.length>0?b(p,x,T,h[v],l[y]):r.then(function(){var S=new Uint8Array(p*x);return c(s,s.exports[h[v]],S,p,x,T,s.exports[l[y]]),S})}}})();var Xc=class extends di{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Le;e.deleteAttribute("uv");let t=new Ce({side:Ut}),n=new Ce,i=new sn(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new be(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let r=new Hn(e,n,6),o=new at;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),r.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),r.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),r.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),r.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),r.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),r.setMatrixAt(5,o.matrix),this.add(r);let c=new be(e,Ar(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new be(e,Ar(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new be(e,Ar(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new be(e,Ar(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new be(e,Ar(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new be(e,Ar(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Ar(a){return new oa({color:0,emissive:16777215,emissiveIntensity:a})}var Rr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Mn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},pv=new $n(-1,1,1,-1,0,1),ru=class extends it{constructor(){super(),this.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ge([0,2,0,0,2,0],2))}},mv=new ru,$i=class{constructor(e){this._mesh=new be(mv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,pv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Cr=class extends Mn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Tt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=wi.clone(e.uniforms),this.material=new Tt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new $i(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var La=class extends Mn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},jc=class extends Mn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Kc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new xe);this._width=n.width,this._height=n.height,t=new Pt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Cr(Rr),this.copyPass.material.blending=An,this.timer=new da}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}La!==void 0&&(r instanceof La?n=!0:r instanceof jc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new xe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Da=class extends Mn{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new se}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=i}};var Wf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new se(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Pr=class a extends Mn{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new xe(e.x,e.y):new xe(256,256),this.clearColor=new se(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Pt(s,r,{type:Wt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Pt(s,r,{type:Wt,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Pt(s,r,{type:Wt,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),r=Math.round(r/2)}let o=Wf;this.highPassUniforms=wi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Tt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new xe(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=wi.clone(Rr.uniforms),this.blendMaterial=new Tt({uniforms:this.copyUniforms,vertexShader:Rr.vertexShader,fragmentShader:Rr.fragmentShader,premultipliedAlpha:!0,blending:Jt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new se,this._oldClearAlpha=1,this._basic=new ft,this._fsQuad=new $i(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new xe(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=a.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=a.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=r}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let i=[],s=[];for(let r=1;r<e;r+=2){let o=t[r],c=r+1<e?t[r+1]:0,l=o+c;i.push((r*o+(r+1)*c)/l),s.push(l)}return new Tt({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new xe(.5,.5)},direction:{value:new xe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}};Pr.BlurDirectionX=new xe(1,0);Pr.BlurDirectionY=new xe(0,1);var Fa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Yc=class extends Mn{constructor(){super(),this.isOutputPass=!0,this.uniforms=wi.clone(Fa.uniforms),this.material=new hr({name:Fa.name,uniforms:this.uniforms,vertexShader:Fa.vertexShader,fragmentShader:Fa.fragmentShader}),this._fsQuad=new $i(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},We.getTransfer(this._outputColorSpace)===rt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===fa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===pa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ma?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ms?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ba?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===xa?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ga&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var gv=["########################################","########################################","##........######........######........##","##.S...CC.######.....WS.MMMMMM...L..S.##","##......C.MMMMMM..L.....PPPLPP........##","##....L...PPRPPP........MMMMMM.....W..##","##..W.....MMMMMM........######.CC.....##","##.B......########MPPM####MMMM......B.##","##........########MPLM###MPPPP........##","####MPMMMMMMMMMMMMMWPM###MPMMM###MPM####","####MPPPPLPPPPPPRPPPPM###MLM#####MRM####","####MLMMMMMMPMMMMMMPPM###MPPM####MPM####","####MPM#####M#............MPM##.......##","##.......#####....W.R.....MPMMM.CC..C.##","##..C..B.#####..O......O..PPLPP....C..##","##.......MMMMM...K........MMMMM...WC..##","##.S.L...PPRPP......@.K...#####.C...B.##","##.......MMMMM..O......O..MMMMM..C....##","##....W..#####.....W.W....PPLPP...R...##","##.......#####............MMMMM.W...S.##","####MPM#########MPM##MPM#######.......##","####MPM#########MPM##MRM#########MPM####","####MLM#########MLM##MPM#########MLM####","####MPM#########MPM##MPM#########MPM####","##.........###...........###..........##","##..CC...B.###.....K.....MMM..W.......##","##....L....MMM..W.....W..PRP....L.....##","##.........PLP...........MMM..........##","##.S....W..MMM.C...S...B.###..B..CC.S.##","##.........###...........###..........##","########################################","########################################"],bv=gv.map((a,e)=>e===4?a.slice(0,33)+"E"+a.slice(34):a);var xv=["################################################","################################################","##............................................##","##....S................S.................S....##","##............................................##","##.............CC.............................##","##..........Y..............B.......Y..........##","##............................XXXX............##","##.......XXX..................................##","##...B....................C...................##","##................W.....................C.....##","##....................X.......................##","##..Y.......C........................B.....Y..##","##.S........................................S.##","##......................Y........X............##","##.............X.................X............##","##.............X....B...W.....................##","##....C.......................................##","##...........................CC...............##","##.......B......Y...............Y.......B.....##","##....................XXX.....................##","##.S........................................S.##","##............W..................W............##","##....................................X.......##","##......X.............................X.......##","##......X.............B.......................##","##...Y........C...............C...........Y...##","##......................W.....................##","##............................................##","##.................TTTTTTTTTT.................##","##.................TTTTTTTTTT.................##","##..........1234567TTTT@TTTTT7654321..........##","##..........1234567TTTTTTTTTT7654321..........##","##.................TTTTTTTTET.................##","##.................TTTTTTTTTT.................##","##.................##########.................##","##.................##########.................##","##.................##########.................##","################################################","################################################"],Jc=4,Zc={halle:{key:"halle",name:"Die Halle",map:bv,outdoor:!1,wallH:4.4,fog:.032,fogColor:460553,startYaw:Math.PI,ambient:0},hof:{key:"hof",name:"Der Hof",map:xv,outdoor:!0,wallH:7.5,fog:.0095,fogColor:725016,startYaw:0,ambient:.55}},Fe=2,vv=4.4,qf=new Set(["#","M"]),_v=new Set(["#","M","C","B","O","W","X","Y"]),au=2.8,Rs=.9,Xf=1.7,ka=class{constructor(e,t=Zc.halle){this.tex=e,this.def=t,this.map=t.map,this.outdoor=!!t.outdoor,this.rows=this.map.length,this.cols=this.map[0].length,this.w=this.cols*Fe,this.h=this.rows*Fe,this.group=new Be,this.colliders=[],this.virtual=[],this.shadowLights=[],this.spawns=[],this.circles=[],this.lampPositions=[],this.playerStart=new R,this.blocked=new Uint8Array(this.rows*this.cols),this.flow=new Float32Array(this.rows*this.cols),this.flowCell=-1,this.barrels=[],this.heap=new Int32Array(this.rows*this.cols*8);for(let n=0;n<this.rows;n++)for(let i=0;i<this.cols;i++){let s=this.map[n][i];_v.has(s)&&(this.blocked[n*this.cols+i]=1)}this.heights=new Float32Array(this.rows*this.cols);for(let n=0;n<this.rows;n++)for(let i=0;i<this.cols;i++)this.heights[n*this.cols+i]=this.cellH(this.map[n][i])}cellH(e){return e==="T"||this.outdoor&&(e==="@"||e==="E")?Jc:e>="1"&&e<="9"?(e.charCodeAt(0)-48)*.5:0}hAt(e,t){return e<0||t<0||e>=this.cols||t>=this.rows?0:this.heights[t*this.cols+e]}stepOk(e,t,n,i){return Math.abs(this.hAt(n,i)-this.hAt(e,t))<.6}cx(e){return Math.floor(e/Fe)}cz(e){return Math.floor(e/Fe)}center(e,t){return new R((e+.5)*Fe,0,(t+.5)*Fe)}isBlocked(e,t){return e<0||t<0||e>=this.cols||t>=this.rows?!0:this.blocked[t*this.cols+e]===1}isWall(e,t){return e<0||t<0||e>=this.cols||t>=this.rows?!0:qf.has(this.map[t][e])}mat(e,t={}){let{normalScale:n,...i}=t,s=this.tex[e],r=new Ce({map:s.c,normalMap:s.n,roughnessMap:s.orm,metalnessMap:s.orm,aoMap:s.orm,roughness:1,metalness:1,aoMapIntensity:1,...i});return n&&r.normalScale.set(n,n),r}build(e){let t=this.group;e.add(t);let n={bricks:this.mat("bricks",{color:10128518,normalScale:1.4}),metal:this.mat("metal",{color:12107976,normalScale:1.2}),concrete:this.mat("concrete",{color:7169374,normalScale:.7}),plate:this.mat("plate",{color:9080982}),ceiling:this.mat("ceiling",{color:3881532}),hazard:this.mat("hazard",{color:13619151}),rust:this.mat("rust",{color:10518640})};this.mats=n;let i={"#":[],M:[]},s=[],r=this.def.wallH||vv,o=[[0,-1,"n"],[0,1,"s"],[-1,0,"w"],[1,0,"e"]];for(let C=0;C<this.rows;C++)for(let P=0;P<this.cols;P++){let D=this.map[C][P];if(qf.has(D))for(let[F,L,N]of o){if(this.isWall(P+F,C+L))continue;let H=P*Fe,X=C*Fe,B,G;N==="n"&&(B=[H+Fe,X],G=[H,X]),N==="s"&&(B=[H,X+Fe],G=[H+Fe,X+Fe]),N==="w"&&(B=[H,X],G=[H,X+Fe]),N==="e"&&(B=[H+Fe,X+Fe],G=[H+Fe,X]);let K=[F,0,L];i[D].push(jf(B,G,0,r,K,2.2));let $=.04,ve=[B[0]+F*$,B[1]+L*$],pe=[G[0]+F*$,G[1]+L*$];s.push(jf(ve,pe,0,.32,K,1,.32))}}for(let C of Object.keys(i)){if(!i[C].length)continue;let P=new be(Ji(i[C]),C==="#"?n.bricks:n.metal);P.receiveShadow=!0,P.castShadow=!0,t.add(P),this.colliders.push(P)}let c=new be(Ji(s),n.hazard);c.receiveShadow=!0,t.add(c);let l=new Ft(this.w,this.h);l.rotateX(-Math.PI/2),l.translate(this.w/2,0,this.h/2),Na(l,"xz",3.2);let h=new be(l,n.concrete);h.receiveShadow=!0,t.add(h),this.colliders.push(h),this.floor=h;let u=[];for(let C=0;C<this.rows;C++)for(let P=0;P<this.cols;P++){if(this.map[C][P]!=="P")continue;let D=new Ft(Fe,Fe);D.rotateX(-Math.PI/2),D.translate((P+.5)*Fe,.004,(C+.5)*Fe),Na(D,"xz",2),u.push(D)}if(u.length){let C=new be(Ji(u),n.plate);C.receiveShadow=!0,t.add(C)}if(!this.outdoor){let C=new Ft(this.w,this.h);C.rotateX(Math.PI/2),C.translate(this.w/2,r,this.h/2),Na(C,"xz",4);let P=new be(C,n.ceiling);P.receiveShadow=!0,t.add(P),this.colliders.push(P);let D=[];for(let L=2;L<this.rows;L+=4){let N=new Le(this.w,.35,.3);N.translate(this.w/2,r-.175,L*Fe),Na(N,"xy",2),D.push(N)}let F=new be(Ji(D),n.rust);F.castShadow=!1,t.add(F)}let d=[],f=[],m=[],b=[],g=new Ce({color:662021,emissive:8257338,emissiveIntensity:3.2}),p=[],x=[],T=[],v=[],y=[],S=Sv(1337);for(let C=0;C<this.rows;C++)for(let P=0;P<this.cols;P++){let D=this.map[C][P],F=(P+.5)*Fe,L=(C+.5)*Fe;if(D==="C"){let N=Xf,H=new Le(N,N,N);Ua(H,N),H.rotateY((S()-.5)*.12),H.translate(F,N/2,L),d.push(H)}else if(D==="W"){let N=new Le(1.8,Rs,1.8);Ua(N,1.8),N.translate(F,Rs/2,L),m.push(N);for(let[H,X,B,G]of[[1.82,.08,0,.87],[1.82,.08,0,-.87],[.08,1.82,.87,0],[.08,1.82,-.87,0]]){let K=new Le(H,.1,X);K.translate(F+B,Rs-.045,L+G),b.push(K)}}else if(D==="B"){let N=[],H=[];for(let ve=0;ve<3;ve++){let pe=F+(ve===0?-.35:ve===1?.4:.05),lt=L+(ve===2?.5:-.15),Ye=new ke(.36,.36,1.15,20,1,!1);Ye.translate(pe,.575,lt),N.push(Ye);let et=new zn(.3,20);et.rotateX(-Math.PI/2),et.translate(pe,1.152,lt),H.push(et)}let X=new be(Ji(N),null),B=new be(Ji(H),g);X.castShadow=!0,X.receiveShadow=!0;let G={x:F,z:L,r:.9},K=this.addLight(F,1.6,L,7208746,6,7,!1),$={c:P,r:C,x:F,z:L,mesh:X,top:B,circle:G,light:K,hp:25,alive:!1};X.userData.barrel=$,B.userData.barrel=$,this.barrels.push($)}else if(D==="O"){let N=new ke(.7,.8,r,16,1,!0);N.translate(F,r/2,L),Mv(N,.7,r),f.push(N);let H=new ke(.81,.81,.08,16,1,!0);H.translate(F,2.2,L),y.push(H),this.circles.push({x:F,z:L,r:.85})}else if(D==="L"||D==="K"){let N=new Le(1.4,.12,.5);N.translate(F,r-.06,L),p.push(N);let H=new Ft(1.25,.36);H.rotateX(Math.PI/2),H.translate(F,r-.125,L),x.push(H),this.addLight(F,r-.5,L,16767400,D==="K"?40:22,16,D==="K",S()<.25),this.lampPositions.push(new R(F,r-.5,L))}else if(D==="R"){let N=new Le(.6,.12,.6);N.translate(F,r-.06,L),p.push(N);let H=new Ft(.5,.5);H.rotateX(Math.PI/2),H.translate(F,r-.125,L),T.push(H),this.addLight(F,r-.6,L,16722450,18,13,!1,!0)}else if(D==="S"){let N=new Ft(1.7,1.7);N.rotateX(-Math.PI/2),N.translate(F,.008,L),v.push(N),this.spawns.push(new R(F,0,L))}else if(D==="@")this.playerStart.set(F,this.cellH(D),L);else if(D==="E")this.exitPos=new R(F,this.cellH(D),L);else if(D==="X"){let N=new Le(Fe,au,Fe);Ua(N,2.4),N.translate(F,au/2,L),(this._containers||(this._containers=[])).push(N)}else if(D==="Y"){let N=new ke(.09,.13,7,10);N.translate(F,3.5,L),(this._poles||(this._poles=[])).push(N);let H=new Le(.9,.18,.5);H.translate(F,7.05,L),p.push(H);let X=new Ft(.8,.4);X.rotateX(Math.PI/2),X.translate(F,6.95,L),x.push(X),this.addLight(F,6.6,L,13623551,110,30,!1,S()<.2),this.circles.push({x:F,z:L,r:.2})}}for(let C=0;C<this.rows;C++)for(let P=0;P<this.cols;P++)if(this.map[C][P]==="M")for(let[D,F]of[[0,-1],[0,1],[-1,0],[1,0]]){if(this.isWall(P+D,C+F))continue;let L=(P+.5)*Fe+D*(Fe/2+.02),N=(C+.5)*Fe+F*(Fe/2+.02),H=new Le(D?.03:.08,2.6,D?.08:.03);H.translate(L,1.9,N),y.push(H)}let A=(C,P,D=!0,F=!0)=>{if(!C.length)return null;let L=new be(Ji(C),P);return L.castShadow=D,L.receiveShadow=!0,t.add(L),F&&this.colliders.push(L),L};A(d,this.mat("rust",{color:9404266})),A(m,this.mat("plate",{color:10133670})),A(b,n.hazard,!1,!1);for(let C of this.barrels)C.mesh.material=n.hazard,this.restoreBarrel(C);A(f,n.metal),A(p,new Ce({color:2236962,roughness:.5,metalness:.8}),!1,!1),A(x,new Ce({color:0,emissive:16769720,emissiveIntensity:6}),!1,!1),A(T,new Ce({color:0,emissive:16719888,emissiveIntensity:7}),!1,!1),A(y,new Ce({color:1115392,emissive:16739125,emissiveIntensity:4.5}),!1,!1);let _=new Ce({map:Kf(),transparent:!0,depthWrite:!1,roughness:.6,metalness:.7,emissive:16720384,emissiveIntensity:.9,emissiveMap:Kf(!0),polygonOffset:!0,polygonOffsetFactor:-2});A(v,_,!1,!1),this.outdoor&&this.buildOutdoor(t,n,A),this.buildExit(t),this.initLightPool(10);let w=this.outdoor?new Wi(7375032,2761756,1.5):new Wi(9082544,2759960,.55);t.add(w),this.hemi=w}buildOutdoor(e,t,n){let i=[],s=[],r=[],o=[];for(let f=0;f<this.rows;f++)for(let m=0;m<this.cols;m++){let b=this.hAt(m,f);if(b<=0)continue;let g=(m+.5)*Fe,p=(f+.5)*Fe,x=b<Jc-.01,T=new Le(Fe,b,Fe);if(Ua(T,2),T.translate(g,b/2,p),(x?r:i).push(T),!x){let v=new Ft(Fe,Fe);v.rotateX(-Math.PI/2),v.translate(g,b+.004,p),Na(v,"xz",2),s.push(v);for(let[y,S]of[[0,-1],[0,1],[-1,0],[1,0]]){let A=this.hAt(m+y,f+S),_=this.map[f+S]&&this.map[f+S][m+y];if(A>0||_==="#")continue;let w=y?.25:Fe,C=y?Fe:.25,P=new Le(w,1,C);Ua(P,1),P.translate(g+y*(Fe/2-.125),b+.5,p+S*(Fe/2-.125)),o.push(P)}}}n(i,t.bricks),n(s,t.plate),n(r,t.concrete),n(o,t.metal),this._containers&&n(this._containers,this.mat("rust",{color:7309978})),this._poles&&n(this._poles,t.metal,!0,!1);let c=new be(new Nt(190,32,16),new Tt({side:Ut,depthWrite:!1,fog:!1,uniforms:{},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec3 vP;
          float h(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
          void main(){
            float y = max(vP.y, 0.0);
            vec3 col = mix(vec3(0.05, 0.07, 0.11), vec3(0.008, 0.012, 0.03), pow(y, 0.6));
            vec3 q = floor(vP * 260.0);
            float s = step(0.9975, h(q)) * smoothstep(0.05, 0.3, y);
            col += vec3(s) * 0.9;
            gl_FragColor = vec4(col, 1.0);
          }`}));c.position.set(this.w/2,0,this.h/2),c.renderOrder=-10,e.add(c);let l=new be(new zn(7,32),new ft({color:15921120,fog:!1})),h=new R(-.45,.55,-.7).normalize();l.position.copy(h).multiplyScalar(180).add(new R(this.w/2,0,this.h/2)),l.lookAt(this.w/2,0,this.h/2),e.add(l);let u=new Mi(11123936,3.2);u.position.copy(h).multiplyScalar(80).add(new R(this.w/2,0,this.h/2)),u.target.position.set(this.w/2,0,this.h/2),e.add(u.target),u.castShadow=!0,u.shadow.mapSize.set(globalThis.ZW_LOW?1024:2048,globalThis.ZW_LOW?1024:2048);let d=u.shadow.camera;d.left=-62,d.right=62,d.top=62,d.bottom=-62,d.near=10,d.far=180,u.shadow.bias=-6e-4,u.shadow.normalBias=.04,e.add(u),this.moon=u}buildExit(e){if(!this.exitPos)return;let t=new Be;t.position.copy(this.exitPos);let n=new ft({color:3531007,transparent:!0,opacity:.9,blending:Jt,depthWrite:!1,side:un,toneMapped:!1}),i=new be(new gi(.75,.95,40),n);i.rotation.x=-Math.PI/2,i.position.y=.03;let s=new ft({color:3531007,transparent:!0,opacity:.22,blending:Jt,depthWrite:!1,side:un,toneMapped:!1}),r=new be(new ke(.85,.85,6,32,1,!0),s);r.position.y=3;let o=document.createElement("canvas");o.width=256,o.height=64;let c=o.getContext("2d");c.fillStyle="#35e0ff",c.font="900 44px Impact, Arial, sans-serif",c.textAlign="center",c.textBaseline="middle",c.fillText(this.outdoor?"ZUR HALLE":"AUSGANG",128,34);let l=new Dt(o);l.colorSpace=tt;let h=new ps(new Bi({map:l,transparent:!0,depthWrite:!1,toneMapped:!1}));h.scale.set(2.4,.6,1),h.position.y=2.6,t.add(i,r,h),t.visible=!1,e.add(t),this.exit={group:t,ring:i,beam:r,sign:h,active:!1}}setExit(e){this.exit&&(this.exit.active=e,this.exit.group.visible=e)}addLight(e,t,n,i,s,r,o=!1,c=!1){if(o){let h=new yi(i,s*9,26,Math.PI/2.6,.6,1.6);return h.position.set(e,t,n),h.target.position.set(e,0,n),this.group.add(h.target),h.castShadow=!0,h.shadow.mapSize.set(globalThis.ZW_LOW?512:1024,globalThis.ZW_LOW?512:1024),h.shadow.camera.near=.5,h.shadow.camera.far=26,h.shadow.bias=-4e-4,h.shadow.normalBias=.02,h.shadow.radius=4,this.group.add(h),this.shadowLights.push(h),this.virtual.push({pos:new R(e,t,n),color:new se(i),intensity:s,dist:r,flicker:c,seed:Math.random()*100,cur:s,real:h}),h}let l={pos:new R(e,t,n),color:new se(i),intensity:s,dist:r,flicker:c,seed:Math.random()*100,cur:s};return this.virtual.push(l),l}initLightPool(e=10){this.pool=[];for(let t=0;t<e;t++){let n=new sn(16777215,0,10,1.6);this.group.add(n),this.pool.push(n)}}update(e,t){if(this.exit&&this.exit.active){let s=.5+.5*Math.sin(e*4);this.exit.beam.material.opacity=.14+.12*s,this.exit.ring.scale.setScalar(1+.08*s),this.exit.sign.position.y=2.6+Math.sin(e*2)*.08}for(let s of this.virtual){if(!s.flicker){s.cur=s.intensity;continue}let r=Math.sin(e*13+s.seed)*Math.sin(e*7.3+s.seed*2)+Math.sin(e*31+s.seed),o=Math.sin(e*.7+s.seed)>.93?.08:1;s.cur=s.intensity*o*(.82+.18*r),s.real&&(s.real.intensity=s.cur*9)}if(!t||!this.pool)return;let n=this.virtual.filter(s=>!s.real);for(let s of n)s.d=s.pos.distanceToSquared(t);n.sort((s,r)=>s.d-r.d);let i=this.outdoor?8100:1156;for(let s=0;s<this.pool.length;s++){let r=this.pool[s],o=n[s];if(!o){r.intensity=0;continue}r.position.copy(o.pos),r.color.copy(o.color),r.distance=o.dist;let c=Math.max(0,Math.min(1,(i-o.d)/(i*.35))),l=s>=this.pool.length-2?.5:1;r.intensity=o.cur*c*l}}lightAt(e){let t=0;for(let n of this.virtual){let i=n.pos.distanceToSquared(e);t+=n.cur/(1+i*.6)}return t}solidTop(e,t,n){if(e==="#"||e==="M")return 1/0;if(e==="C")return Xf;if(e==="X")return au;if(e==="W")return t>Rs-.32?-1:Rs;let i=this.cellH(e);return i>0?t>i-.6?-1:i:n>=Jc-.05&&t>Jc-.6?1/0:-1}collide(e,t,n=0){for(let i=0;i<2;i++){let s=this.cx(e.x),r=this.cz(e.z),o=this.hAt(s,r);for(let c=r-1;c<=r+1;c++)for(let l=s-1;l<=s+1;l++){let h=l>=0&&c>=0&&l<this.cols&&c<this.rows?this.map[c][l]:"#";if(this.solidTop(h,n,o)<0)continue;let d=h==="C"?.12:h==="W"?.1:0,f=l*Fe+d,m=(l+1)*Fe-d,b=c*Fe+d,g=(c+1)*Fe-d,p=Math.max(f,Math.min(e.x,m)),x=Math.max(b,Math.min(e.z,g)),T=e.x-p,v=e.z-x,y=T*T+v*v;if(y<t*t)if(y<1e-8){let S=[e.x-f,m-e.x,e.z-b,g-e.z],A=Math.min(...S),_=S.indexOf(A);_===0?e.x=f-t:_===1?e.x=m+t:_===2?e.z=b-t:e.z=g+t}else{let S=Math.sqrt(y),A=t-S;e.x+=T/S*A,e.z+=v/S*A}}for(let c of this.circles){if(c.top!==void 0&&n>c.top)continue;let l=e.x-c.x,h=e.z-c.z,u=c.r+t,d=l*l+h*h;if(d<u*u&&d>1e-8){let f=Math.sqrt(d);e.x=c.x+l/f*u,e.z=c.z+h/f*u}}}}groundAt(e,t,n,i){let s=0,r=this.cx(e),o=this.cz(t),c=n*.55;for(let l=o-1;l<=o+1;l++)for(let h=r-1;h<=r+1;h++){if(h<0||l<0||h>=this.cols||l>=this.rows)continue;let u=this.map[l][h],d=0;if(u==="W"){if(i<Rs-.35)continue;d=Rs}else if(d=this.heights[l*this.cols+h],d<=0||i<d-.6)continue;let f=h*Fe+.1,m=(h+1)*Fe-.1,b=l*Fe+.1,g=(l+1)*Fe-.1,p=Math.max(f,Math.min(e,m)),x=Math.max(b,Math.min(t,g));((e-p)**2+(t-x)**2<c*c||h===r&&l===o)&&(s=Math.max(s,d))}return s}restoreBarrel(e){e.alive||(e.alive=!0,e.hp=25,this.group.add(e.mesh,e.top),this.colliders.push(e.mesh),this.circles.push(e.circle),this.blocked[e.r*this.cols+e.c]=1,this.virtual.includes(e.light)||this.virtual.push(e.light),this.flowCell=-1)}removeBarrel(e){e.alive&&(e.alive=!1,this.group.remove(e.mesh,e.top),this.colliders=this.colliders.filter(t=>t!==e.mesh),this.circles=this.circles.filter(t=>t!==e.circle),this.blocked[e.r*this.cols+e.c]=0,this.virtual=this.virtual.filter(t=>t!==e.light),this.flowCell=-1)}resetBarrels(){for(let e of this.barrels)this.restoreBarrel(e)}los(e,t,n,i,s=!1,r=null){let o=e/Fe,c=t/Fe,l=n/Fe,h=i/Fe,u=Math.floor(o),d=Math.floor(c),f=Math.floor(l),m=Math.floor(h),b=l-o,g=h-c,p=Math.sign(b),x=Math.sign(g),T=b!==0?Math.abs(1/b):1/0,v=g!==0?Math.abs(1/g):1/0,y=b>0?(u+1-o)*T:b<0?(o-u)*T:1/0,S=g>0?(d+1-c)*v:g<0?(c-d)*v:1/0;for(let A=0;A<64;A++){if(u===f&&d===m)return!0;if(y<S?(y+=T,u+=p):(S+=v,d+=x),(s?this.isWall(u,d):this.isBlocked(u,d))||r!==null&&Math.abs(this.hAt(u,d)-r)>.6)return!1}return!0}updateFlow(e,t){let n=Math.max(0,Math.min(this.cols-1,this.cx(e))),s=Math.max(0,Math.min(this.rows-1,this.cz(t)))*this.cols+n;if(s===this.flowCell)return;this.flowCell=s;let r=this.flow,o=this.heap,c=this.cols;r.fill(1e9),r[s]=0;let l=0,h=f=>{let m=l++;for(o[m]=f;m>0;){let b=m-1>>1;if(r[o[b]]<=r[o[m]])break;let g=o[b];o[b]=o[m],o[m]=g,m=b}},u=()=>{let f=o[0];o[0]=o[--l];let m=0;for(;;){let b=2*m+1,g=b+1,p=m;if(b<l&&r[o[b]]<r[o[p]]&&(p=b),g<l&&r[o[g]]<r[o[p]]&&(p=g),p===m)break;let x=o[p];o[p]=o[m],o[m]=x,m=p}return f};h(s);let d=yv;for(;l>0;){let f=u(),m=f%c,b=f/c|0,g=r[f];for(let p=0;p<8;p++){let x=d[p*3],T=d[p*3+1],v=d[p*3+2],y=m+x,S=b+T;if(this.isBlocked(y,S)||!this.stepOk(m,b,y,S)||x&&T&&(this.isBlocked(m+x,b)||this.isBlocked(m,b+T)||!this.stepOk(m,b,m+x,b)||!this.stepOk(m,b,m,b+T)))continue;let A=S*c+y,_=g+v;_<r[A]-1e-6&&(r[A]=_,l<o.length&&h(A))}}}flowDir(e,t,n){let i=this.cx(e),s=this.cz(t),r=this.isBlocked(i,s)?1e9:this.flow[s*this.cols+i],o=i,c=s;for(let h=-1;h<=1;h++)for(let u=-1;u<=1;u++){if(!u&&!h)continue;let d=i+u,f=s+h;if(this.isBlocked(d,f)||!this.stepOk(i,s,d,f)||u&&h&&(this.isBlocked(i+u,s)||this.isBlocked(i,s+h)||!this.stepOk(i,s,i+u,s)||!this.stepOk(i,s,i,s+h)))continue;let m=this.flow[f*this.cols+d];m<r&&(r=m,o=d,c=f)}n.set((o+.5)*Fe-e,0,(c+.5)*Fe-t);let l=n.length();return l>1e-4&&n.multiplyScalar(1/l),r}},yv=[1,0,1,-1,0,1,0,1,1,0,-1,1,1,1,1.414,1,-1,1.414,-1,1,1.414,-1,-1,1.414];function jf(a,e,t,n,i,s,r){let o=new it,c=[a[0],t,a[1],e[0],t,e[1],e[0],n,e[1],a[0],n,a[1]],l=Math.hypot(e[0]-a[0],e[1]-a[1]),h=(Math.abs(i[0])>0?a[1]*-i[0]:a[0]*i[2])/s,u=h+l/s,d=t/(r||s),f=n/(r||s),m=[h,d,u,d,u,f,h,f],b=[...i,...i,...i,...i];return o.setAttribute("position",new Ge(c,3)),o.setAttribute("normal",new Ge(b,3)),o.setAttribute("uv",new Ge(m,2)),o.setIndex([0,1,2,0,2,3]),o}function Na(a,e,t){let n=a.attributes.position,i=a.attributes.uv;for(let s=0;s<n.count;s++){let r=n.getX(s),o=n.getY(s),c=n.getZ(s);e==="xz"?i.setXY(s,r/t,c/t):i.setXY(s,(r+c)/t,o/t)}i.needsUpdate=!0}function Ua(a,e){let t=a.attributes.uv;for(let n=0;n<t.count;n++)t.setXY(n,t.getX(n)*e/1.6,t.getY(n)*e/1.6)}function Mv(a,e,t){let n=a.attributes.uv;for(let i=0;i<n.count;i++)n.setXY(i,n.getX(i)*(2*Math.PI*e)/2,n.getY(i)*t/2)}function Sv(a){return function(){let e=a+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Kf(a=!1){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");if(t.clearRect(0,0,256,256),a){let i=t.createRadialGradient(128,128,10,128,128,128);i.addColorStop(0,"#ff5020"),i.addColorStop(.7,"#801000"),i.addColorStop(1,"#000"),t.fillStyle=i,t.fillRect(0,0,256,256),t.fillStyle="#000";for(let s=0;s<9;s++)t.fillRect(14+s*26,14,10,228);t.fillRect(0,0,256,14),t.fillRect(0,242,256,14),t.fillRect(0,0,14,256),t.fillRect(242,0,14,256)}else{t.fillStyle="#2a2a2a",t.fillRect(0,0,256,256),t.fillStyle="#0b0807";for(let i=0;i<9;i++)t.fillRect(24+i*26,18,12,220);t.strokeStyle="#555",t.lineWidth=6,t.strokeRect(6,6,244,244)}let n=new Dt(e);return n.colorSpace=tt,n}function Ps(a,e=a){let t=document.createElement("canvas");return t.width=a,t.height=e,[t,t.getContext("2d")]}function ou(a){let e=a>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Oa(a,e="floor"){let[n,i]=Ps(256),s=ou(a);i.clearRect(0,0,256,256);let r=h=>`rgba(${90+s()*40|0},${s()*6|0},${s()*6|0},${h})`,o=e==="drip"?3:14;for(let h=0;h<o;h++){let u=s()*Math.PI*2,d=s()*(e==="drip"?10:34),f=256/2+Math.cos(u)*d,m=256/2+Math.sin(u)*d,b=(e==="drip"?14:22)+s()*(e==="drip"?14:34),g=i.createRadialGradient(f,m,b*.2,f,m,b);g.addColorStop(0,r(.95)),g.addColorStop(.75,r(.9)),g.addColorStop(1,r(0)),i.fillStyle=g,i.beginPath(),i.arc(f,m,b,0,Math.PI*2),i.fill()}let c=e==="drip"?4:16;for(let h=0;h<c;h++){let u=s()*Math.PI*2,d=40+s()*80,f=256/2,m=256/2;i.strokeStyle=r(.85);for(let b=0;b<6;b++){let g=128+Math.cos(u)*d*(b+1)/6,p=256/2+Math.sin(u)*d*(b+1)/6;i.lineWidth=Math.max(.5,(6-b)*(.6+s())),i.beginPath(),i.moveTo(f,m),i.lineTo(g,p),i.stroke(),f=g,m=p}for(let b=0;b<3;b++){let g=d+6+s()*30;i.fillStyle=r(.9),i.beginPath(),i.arc(256/2+Math.cos(u+(s()-.5)*.2)*g,256/2+Math.sin(u+(s()-.5)*.2)*g,1+s()*4,0,Math.PI*2),i.fill()}}let l=new Dt(n);return l.colorSpace=tt,l.anisotropy=4,l}function Yf(a){let[t,n]=Ps(256),i=ou(a),s=o=>`rgba(${95+i()*35|0},${i()*5|0},${i()*5|0},${o})`;for(let o=0;o<10;o++){let c=128+(i()-.5)*60,l=256*.38+(i()-.5)*50,h=12+i()*26,u=n.createRadialGradient(c,l,h*.25,c,l,h);u.addColorStop(0,s(.95)),u.addColorStop(1,s(0)),n.fillStyle=u,n.beginPath(),n.arc(c,l,h,0,Math.PI*2),n.fill()}for(let o=0;o<40;o++){let c=i()*Math.PI*2,l=30+i()*90;n.fillStyle=s(.9),n.beginPath(),n.arc(256/2+Math.cos(c)*l,256*.38+Math.sin(c)*l*.8,1+i()*3.5,0,Math.PI*2),n.fill()}for(let o=0;o<6;o++){let c=128+(i()-.5)*70,l=256*.4,h=40+i()*110,u=2+i()*4,d=n.createLinearGradient(0,l,0,l+h);d.addColorStop(0,s(.9)),d.addColorStop(.85,s(.8)),d.addColorStop(1,s(0)),n.fillStyle=d,n.fillRect(c-u/2,l,u,h),n.beginPath(),n.arc(c,l+h*.95,u*.8,0,Math.PI*2),n.fill()}let r=new Dt(t);return r.colorSpace=tt,r}function Tv(){let[e,t]=Ps(64),n=t.createRadialGradient(32,32,2,32,32,30);n.addColorStop(0,"rgba(0,0,0,1)"),n.addColorStop(.25,"rgba(10,8,6,0.95)"),n.addColorStop(.45,"rgba(40,34,30,0.6)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,64,64),t.strokeStyle="rgba(0,0,0,0.6)";for(let s=0;s<7;s++){let r=Math.random()*Math.PI*2;t.lineWidth=1,t.beginPath(),t.moveTo(32,32),t.lineTo(32+Math.cos(r)*(10+Math.random()*14),32+Math.sin(r)*(10+Math.random()*14)),t.stroke()}let i=new Dt(e);return i.colorSpace=tt,i}function Ev(){let[e,t]=Ps(256),n=ou(77);for(let s=0;s<40;s++){let r=n()*Math.PI*2,o=n()*70,c=256/2+Math.cos(r)*o,l=256/2+Math.sin(r)*o,h=20+n()*60,u=t.createRadialGradient(c,l,0,c,l,h);u.addColorStop(0,"rgba(5,4,3,0.55)"),u.addColorStop(1,"rgba(5,4,3,0)"),t.fillStyle=u,t.beginPath(),t.arc(c,l,h,0,Math.PI*2),t.fill()}for(let s=0;s<26;s++){let r=n()*Math.PI*2,o=60+n()*60;t.strokeStyle="rgba(0,0,0,0.35)",t.lineWidth=2+n()*5,t.beginPath(),t.moveTo(256/2,256/2),t.lineTo(256/2+Math.cos(r)*o,256/2+Math.sin(r)*o),t.stroke()}let i=new Dt(e);return i.colorSpace=tt,i}function wv(){let[e,t]=Ps(64),n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.4,"rgba(255,255,255,0.6)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64),new Dt(e)}function Av(){let[e,t]=Ps(16);t.fillStyle="#fff",t.fillRect(3,3,10,10);let n=new Dt(e);return n.magFilter=At,n.minFilter=At,n.generateMipmaps=!1,n}function Rv(){let[e,t]=Ps(128);for(let n=0;n<26;n++){let i=64+(Math.random()-.5)*50,s=64+(Math.random()-.5)*50,r=16+Math.random()*26,o=t.createRadialGradient(i,s,0,i,s,r);o.addColorStop(0,"rgba(255,255,255,0.22)"),o.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=o,t.fillRect(0,0,128,128)}return new Dt(e)}var Cv=`
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
}`,Pv=`
uniform sampler2D uMap;
uniform float uLight;
uniform float uOpacity;
varying float vAlpha;
varying vec3 vColor;
void main(){
  vec4 t = texture2D(uMap, gl_PointCoord);
  gl_FragColor = vec4(vColor * uLight, t.a * vAlpha * uOpacity);
  #include <colorspace_fragment>
}`,ii=class{constructor(e,{texture:t,additive:n=!1,light:i=1,gravity:s=-9.8,drag:r=.4,opacity:o=1}){this.n=e,this.geo=new it,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.col=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.grow=new Float32Array(e),this.flags=new Uint8Array(e),this.geo.setAttribute("position",new St(this.pos,3).setUsage(Ei)),this.geo.setAttribute("size",new St(this.size,1).setUsage(Ei)),this.geo.setAttribute("alpha",new St(this.alpha,1).setUsage(Ei)),this.geo.setAttribute("pcolor",new St(this.col,3).setUsage(Ei)),this.geo.boundingSphere=new tn(new R,1e5),this.mat=new Tt({uniforms:{uMap:{value:t},uScale:{value:300},uLight:{value:i},uOpacity:{value:o}},vertexShader:Cv,fragmentShader:Pv,transparent:!0,depthWrite:!1,blending:n?Jt:qi}),this.points=new ms(this.geo,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,this.cursor=0,this.gravity=s,this.drag=r,this.onLand=null,this.live=0}emit(e,t,n,i,s,r=0,o=0){let c=this.cursor;this.cursor=(this.cursor+1)%this.n,this.pos[c*3]=e.x,this.pos[c*3+1]=e.y,this.pos[c*3+2]=e.z,this.vel[c*3]=t.x,this.vel[c*3+1]=t.y,this.vel[c*3+2]=t.z,this.size[c]=n,this.life[c]=i,this.maxLife[c]=i,this.alpha[c]=1,this.grow[c]=r,this.col[c*3]=s.r,this.col[c*3+1]=s.g,this.col[c*3+2]=s.b,this.flags[c]=o,this.live=1}update(e){if(!this.live)return;let t=this.gravity,n=Math.exp(-this.drag*e),i=0;for(let s=0;s<this.n;s++){if(this.life[s]<=0){this.alpha[s]=0;continue}i=1,this.life[s]-=e;let r=s*3;this.vel[r+1]+=t*e,this.vel[r]*=n,this.vel[r+1]*=n,this.vel[r+2]*=n,this.pos[r]+=this.vel[r]*e,this.pos[r+1]+=this.vel[r+1]*e,this.pos[r+2]+=this.vel[r+2]*e,this.size[s]+=this.grow[s]*e,this.pos[r+1]<.01&&this.gravity<0&&(this.pos[r+1]=.01,this.flags[s]&&this.onLand&&this.onLand(this.pos[r],this.pos[r+2],this.size[s]),this.life[s]=0);let o=this.life[s]/this.maxLife[s];this.alpha[s]=Math.min(1,o*3)}this.live=i,this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.size.needsUpdate=!0,this.geo.attributes.alpha.needsUpdate=!0,this.geo.attributes.pcolor.needsUpdate=!0}clear(){this.life.fill(0),this.alpha.fill(0),this.live=1}},Cs=class{constructor(e,t,{color:n=16777215,roughness:i=.25,metalness:s=0,opacity:r=1,wet:o=!0,renderOrder:c=2}={}){this.meshes=e.map(l=>{let h=new Ce({map:l,transparent:!0,depthWrite:!1,color:n,roughness:i,metalness:s,opacity:r,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4});o&&(h.envMapIntensity=1.4);let u=new Ft(1,1),d=new Hn(u,h,t);return d.instanceMatrix.setUsage(Ei),d.count=0,d.frustumCulled=!1,d.renderOrder=c,d.receiveShadow=!0,{im:d,n:0,cursor:0,max:t,grow:[]}}),this._m=new Oe,this._q=new zt,this._qr=new zt,this._s=new R}add(e,t,n,i=Math.random()*Math.PI*2,s=-1,r=0){let o=this.meshes[s>=0?s:Math.random()*this.meshes.length|0],c=o.cursor;o.cursor=(o.cursor+1)%o.max,o.n=Math.min(o.n+1,o.max),o.im.count=o.n,this._q.setFromUnitVectors(Jf,t),this._qr.setFromAxisAngle(Jf,i),this._q.multiply(this._qr);let l=r?n*.15:n;return this._s.set(l,l,l),this._m.compose(e,this._q,this._s),o.im.setMatrixAt(c,this._m),o.im.instanceMatrix.needsUpdate=!0,r&&o.grow.push({i:c,pos:e.clone(),q:this._q.clone(),s:l,target:r,speed:r*.18}),o}update(e){for(let t of this.meshes)if(t.grow.length){for(let n=t.grow.length-1;n>=0;n--){let i=t.grow[n];i.s=Math.min(i.target,i.s+i.speed*e),i.speed*=Math.exp(-.35*e),this._s.set(i.s,i.s,i.s),this._m.compose(i.pos,i.q,this._s),t.im.setMatrixAt(i.i,this._m),(i.s>=i.target||i.speed<.002)&&t.grow.splice(n,1)}t.im.instanceMatrix.needsUpdate=!0}}addTo(e){this.meshes.forEach(t=>e.add(t.im))}clear(){this.meshes.forEach(e=>{e.n=0,e.cursor=0,e.im.count=0,e.grow.length=0})}},Ai=new R(0,1,0),Jf=new R(0,0,1),$c=class{constructor(e,t){this.scene=e,this.level=t,this.blood=!0;let n=wv(),i=Rv();this.drops=new ii(1800,{texture:n,gravity:-11,drag:.6}),this.mist=new ii(300,{texture:i,gravity:-.6,drag:2.2,opacity:.55}),this.sparks=new ii(500,{texture:n,additive:!0,gravity:-9,drag:1.2}),this.dust=new ii(300,{texture:i,gravity:.15,drag:2.6,opacity:.8}),this.embers=new ii(400,{texture:n,additive:!0,gravity:.6,drag:1.4}),this.fire=new ii(400,{texture:i,additive:!0,gravity:1.2,drag:3.2}),this.smoke=new ii(400,{texture:i,gravity:.5,drag:1.6,opacity:.9}),this.pixels=new ii(900,{texture:Av(),additive:!0,gravity:-5,drag:1.6}),this.pools=[this.drops,this.mist,this.sparks,this.dust,this.embers,this.fire,this.smoke,this.pixels],this.pools.forEach(o=>e.add(o.points)),this.floorDecals=new Cs([Oa(11),Oa(23),Oa(37)],90,{color:11538448,roughness:.18}),this.dripDecals=new Cs([Oa(5,"drip"),Oa(9,"drip")],220,{color:10488844,roughness:.2}),this.wallDecals=new Cs([Yf(3),Yf(8)],70,{color:11538448,roughness:.22}),this.holes=new Cs([Tv()],120,{color:16777215,roughness:.9,wet:!1,renderOrder:1}),this.scorch=new Cs([Ev()],40,{color:16777215,roughness:.95,wet:!1,renderOrder:1}),this.decals=[this.floorDecals,this.dripDecals,this.wallDecals,this.holes,this.scorch],this.decals.forEach(o=>o.addTo(e)),this.drops.onLand=(o,c,l)=>{Math.random()<.35&&this.dripDecals.add(new R(o,.012+Math.random()*.004,c),Ai,.1+l*.02+Math.random()*.12)},this.gibGeo=new aa(.05,0),this.gibMat=new Ce({color:16777215,roughness:.3,metalness:0,envMapIntensity:.6}),this.gibs=new Hn(this.gibGeo,this.gibMat,200);let s=new se;for(let o=0;o<200;o++){let c=Math.random();c<.06?s.setRGB(.5,.44,.36):c<.4?s.setRGB(.36,.06,.05):s.setRGB(.22,.015,.01),this.gibs.setColorAt(o,s)}this.gibs.instanceMatrix.setUsage(Ei),this.gibs.frustumCulled=!1,this.gibs.castShadow=!0,this.gibData=[];for(let o=0;o<200;o++)this.gibData.push({p:new R(0,-10,0),v:new R,r:new Yt,w:new R,s:1,life:0,rest:!1});this.gibCursor=0,e.add(this.gibs),this.cubeMat=new ft({color:16777215,toneMapped:!1}),this.cubes=new Hn(new Le(.07,.07,.07),this.cubeMat,260),this.cubes.instanceMatrix.setUsage(Ei),this.cubes.frustumCulled=!1,this.cubeData=[];let r=new se;for(let o=0;o<260;o++)this.cubes.setColorAt(o,r.setRGB(1,1,1)),this.cubeData.push({p:new R,v:new R,r:new Yt,w:new R,s:1,life:0,max:1});this.cubeCursor=0,this._cubesWasAny=!0,e.add(this.cubes),this._v=new R,this._c=new se,this._m=new Oe,this._q=new zt,this._sv=new R,this._ray=new hn,this.lightLevel=1}setLight(e){this.lightLevel=e,this.drops.mat.uniforms.uLight.value=.55+e*.5,this.mist.mat.uniforms.uLight.value=.4+e*.4,this.dust.mat.uniforms.uLight.value=.3+e*.5}setScale(e){for(let t of this.pools)t.mat.uniforms.uScale.value=e*.5}bloodHit(e,t,n=1,i=!1){if(!this.blood){this.puff(e,t,9080696,.6);return}let s=Math.floor((i?90:34)*n),r=this._c;for(let l=0;l<s;l++){let h=Math.random()<.7,u=(h?2.5:1.5)+Math.random()*(i?6:3.5),d=this._v.set((h?t.x:-t.x*.6)*u+(Math.random()-.5)*2.4,(Math.random()*.9+.3)*u*.55+(i?1.5:0),(h?t.z:-t.z*.6)*u+(Math.random()-.5)*2.4);r.setRGB(.42+Math.random()*.2,0,0),this.drops.emit(e,d,.035+Math.random()*(i?.09:.06),1.2+Math.random()*.8,r,0,1)}for(let l=0;l<(i?8:3)*n;l++){let h=this._v.set(t.x*(.5+Math.random())+(Math.random()-.5)*.6,Math.random()*.5,t.z*(.5+Math.random())+(Math.random()-.5)*.6);r.setRGB(.22,.01,.01),this.mist.emit(e,h,.16+Math.random()*.18,.35+Math.random()*.35,r,i?.9:.5)}let o=this._ray;o.set(e,this._sv.copy(t).setY(t.y*.4).normalize()),o.far=i?3.2:2.2;let c=o.intersectObjects(this.level.colliders,!1)[0];if(c&&c.face){let l=c.face.normal.clone().transformDirection(c.object.matrixWorld);if(Math.abs(l.y)<.5){let h=(i?1.4:.8)+Math.random()*.5;this.wallDecals.add(c.point.clone().addScaledVector(l,.01),l,h,(Math.random()-.5)*.4)}else l.y>.5&&this.floorDecals.add(c.point.clone().setY(.013),Ai,.8+Math.random()*.6)}i&&this.spawnGibs(e,t,12)}spawnGibs(e,t,n,i=1,s=1){if(this.blood)for(let r=0;r<n;r++){let o=this.gibData[this.gibCursor];this.gibCursor=(this.gibCursor+1)%this.gibData.length,o.p.copy(e),s>1&&o.p.add(this._sv.set((Math.random()-.5)*.5,(Math.random()-.3)*.9,(Math.random()-.5)*.5)),o.v.set(t.x*(2+Math.random()*3)*i+(Math.random()-.5)*3*i,(2+Math.random()*3)*Math.sqrt(i),t.z*(2+Math.random()*3)*i+(Math.random()-.5)*3*i),o.w.set(Math.random()*20,Math.random()*20,Math.random()*20),o.s=(.6+Math.random()*1.2)*(s>1?.8+Math.random()*s:1),o.life=40,o.rest=!1}}glitchHit(e,t,n=1,i=16739125,s=!1){let r=this._c,o=this._v,c=new se(i),l=Math.floor((s?46:20)*n);for(let h=0;h<l;h++){let u=Math.random()<.6,d=1.5+Math.random()*(s?5:3);o.set((u?t.x:-t.x*.5)*d+(Math.random()-.5)*2.5,(Math.random()*.9+.2)*d*.6,(u?t.z:-t.z*.5)*d+(Math.random()-.5)*2.5),Math.random()<.3?r.setRGB(1.6,1.6,1.6):r.copy(c).multiplyScalar(1.6),this.pixels.emit(e,o,.035+Math.random()*.05,.35+Math.random()*.4,r)}s&&this.spawnCubes(e,t,10,i,.8)}spawnCubes(e,t,n,i,s=1,r=.4){let o=new se(i),c=this._c;for(let l=0;l<n;l++){let h=this.cubeData[this.cubeCursor],u=this.cubeCursor;this.cubeCursor=(this.cubeCursor+1)%this.cubeData.length,h.p.copy(e).add(this._sv.set((Math.random()-.5)*r,(Math.random()-.5)*r*2.2,(Math.random()-.5)*r)),h.v.set(t.x*2*s+(Math.random()-.5)*4*s,(1+Math.random()*3.5)*s,t.z*2*s+(Math.random()-.5)*4*s),h.w.set(Math.random()*12,Math.random()*12,Math.random()*12),h.s=.6+Math.random()*1.4,h.life=h.max=.7+Math.random()*.7;let d=Math.random();d<.25?c.setRGB(1,1,1):d<.4?c.setRGB(.2,.9,1):c.copy(o),this.cubes.setColorAt(u,c.multiplyScalar(1.4))}this.cubes.instanceColor.needsUpdate=!0}derez(e,t,n=16739125,i=1){let s=this._c,r=this._v,o=new se(n);for(let c=0;c<90*i;c++)r.set(Math.random()-.5,Math.random()*.8+.1,Math.random()-.5).normalize().multiplyScalar(1+Math.random()*4).addScaledVector(t,1.2),Math.random()<.3?s.setRGB(1.5,1.5,1.5):s.copy(o).multiplyScalar(1.5),this.pixels.emit(this._sv.copy(e).add(new R((Math.random()-.5)*.5,(Math.random()-.5)*1.4*i,(Math.random()-.5)*.5)),r,.04+Math.random()*.06,.5+Math.random()*.6,s);this.spawnCubes(e,t,Math.round(34*i),n,1,.5*i)}wallHit(e,t){this.holes.add(e.clone().addScaledVector(t,.006),t,.08+Math.random()*.04);let n=this._c;for(let i=0;i<14;i++){let s=this._v.copy(t).multiplyScalar(2+Math.random()*4).add(this._sv.set((Math.random()-.5)*4,(Math.random()-.2)*4,(Math.random()-.5)*4));n.setRGB(1,.55+Math.random()*.3,.2),this.sparks.emit(e,s,.02+Math.random()*.03,.15+Math.random()*.25,n)}this.puff(e,t,10130570,.7)}puff(e,t,n,i=1){let s=this._c.set(n),r=new R;for(let o=0;o<6;o++)r.copy(t).multiplyScalar(.4+Math.random()*.9).add(this._sv.set((Math.random()-.5)*.5,Math.random()*.4,(Math.random()-.5)*.5)),this.dust.emit(e,r,(.18+Math.random()*.2)*i,.7+Math.random()*.6,s,.7*i)}pool(e,t,n=1.6){this.blood&&this.floorDecals.add(new R(e,.014+Math.random()*.003,t),Ai,.3,Math.random()*6.28,-1,n)}spawnPortal(e,t=null){let n=this._c;if(t!==null){let s=new se(t);for(let r=0;r<50;r++){let o=this._v.set((Math.random()-.5)*.6,1+Math.random()*2.5,(Math.random()-.5)*.6);n.copy(s).multiplyScalar(1.5),this.pixels.emit(new R(e.x+(Math.random()-.5)*1,.05+Math.random()*1.6,e.z+(Math.random()-.5)*1),o,.03+Math.random()*.04,.6+Math.random()*.6,n)}return}let i=new R;for(let s=0;s<10;s++){let r=this._v.set((Math.random()-.5)*.8,.3+Math.random()*.9,(Math.random()-.5)*.8);n.setRGB(.06,.03,.03),this.dust.emit(i.set(e.x+(Math.random()-.5)*.9,.15,e.z+(Math.random()-.5)*.9),r,.5+Math.random()*.5,1.4+Math.random(),n,.8)}for(let s=0;s<40;s++){let r=this._v.set((Math.random()-.5)*1.5,1.2+Math.random()*2.5,(Math.random()-.5)*1.5);n.setRGB(1,.35+Math.random()*.2,.08),this.embers.emit(i.set(e.x+(Math.random()-.5)*1.1,.05,e.z+(Math.random()-.5)*1.1),r,.025+Math.random()*.03,.8+Math.random(),n)}}explosion(e,t,n=1){let i=this._c,s=this._v,r=new R;for(let l=0;l<46*n;l++){s.set(Math.random()-.5,Math.random()-.3,Math.random()-.5).normalize().multiplyScalar(2+Math.random()*7*n),t&&s.addScaledVector(t,2.5);let h=Math.random();h<.3?i.setRGB(3.2,2.6,1.6):h<.7?i.setRGB(2.6,1.1,.25):i.setRGB(1.6,.35,.05),this.fire.emit(r.copy(e).add(this._sv.set((Math.random()-.5)*.4,(Math.random()-.5)*.4,(Math.random()-.5)*.4)),s,(.5+Math.random()*.7)*n,.25+Math.random()*.4,i,2.4*n)}for(let l=0;l<26*n;l++){s.set(Math.random()-.5,Math.random()*.8,Math.random()-.5).normalize().multiplyScalar(1+Math.random()*3.5*n);let h=.05+Math.random()*.06;i.setRGB(h,h*.95,h*.9),this.smoke.emit(r.copy(e),s,(.7+Math.random()*.8)*n,1.8+Math.random()*1.6,i,1.5*n)}for(let l=0;l<70*n;l++)s.set(Math.random()-.5,Math.random()-.2,Math.random()-.5).normalize().multiplyScalar(5+Math.random()*12),i.setRGB(1,.6+Math.random()*.3,.25),this.sparks.emit(e,s,.03+Math.random()*.04,.4+Math.random()*.7,i);for(let l=0;l<30*n;l++)s.set(Math.random()-.5,Math.random()*.6+.2,Math.random()-.5).normalize().multiplyScalar(1+Math.random()*3),i.setRGB(1,.4,.1),this.embers.emit(r.copy(e),s,.03+Math.random()*.03,1+Math.random()*1.5,i);let o=this._ray;o.set(r.copy(e).addScaledVector(t||Ai,.3),this._sv.copy(t||Ai).negate()),o.far=1.6;let c=o.intersectObjects(this.level.colliders,!1)[0];if(c&&c.face){let l=c.face.normal.clone().transformDirection(c.object.matrixWorld);this.scorch.add(c.point.clone().addScaledVector(l,.012),l,(2.6+Math.random())*n)}else e.y<1.5&&this.scorch.add(new R(e.x,.011,e.z),Ai,(2.6+Math.random())*n)}gibExplode(e,t){if(!this.blood){this.puff(e,Ai,9080696,2);return}let n=this._c,i=this._v;for(let r=0;r<220;r++)i.set(Math.random()-.5,Math.random()*.9,Math.random()-.5).normalize().multiplyScalar(2+Math.random()*7).addScaledVector(t,2),n.setRGB(.4+Math.random()*.2,0,0),this.drops.emit(this._sv.copy(e).add(new R((Math.random()-.5)*.4,(Math.random()-.5)*1.2,(Math.random()-.5)*.4)),i,.05+Math.random()*.1,1.3+Math.random(),n,0,1);for(let r=0;r<14;r++)i.set(Math.random()-.5,Math.random()*.6,Math.random()-.5).multiplyScalar(2.5),n.setRGB(.22,.01,.01),this.mist.emit(e,i,.35+Math.random()*.4,.6+Math.random()*.5,n,1.4);this.spawnGibs(e,t,26,1.3,1.5);let s=this._ray;for(let r=0;r<7;r++){let o=Math.random()*Math.PI*2;s.set(e,this._sv.set(Math.cos(o),(Math.random()-.6)*.5,Math.sin(o)).normalize()),s.far=4;let c=s.intersectObjects(this.level.colliders,!1)[0];if(!c||!c.face)continue;let l=c.face.normal.clone().transformDirection(c.object.matrixWorld);Math.abs(l.y)<.5?this.wallDecals.add(c.point.clone().addScaledVector(l,.01),l,1.2+Math.random()*.8,(Math.random()-.5)*.4):l.y>.5&&this.floorDecals.add(c.point.clone().setY(c.point.y+.013),Ai,1+Math.random()*.8)}this.pool(e.x,e.z,2.6)}update(e){for(let i of this.pools)i.update(e);this.floorDecals.update(e);let t=!1;for(let i=0;i<this.gibData.length;i++){let s=this.gibData[i];if(s.life<=0){this._m.makeScale(0,0,0),this.gibs.setMatrixAt(i,this._m);continue}t=!0,s.life-=e,s.rest||(s.v.y-=11*e,s.p.addScaledVector(s.v,e),s.r.x+=s.w.x*e,s.r.y+=s.w.y*e,s.r.z+=s.w.z*e,s.p.y<.03&&(s.p.y=.03,Math.abs(s.v.y)<1.2&&(s.rest=!0,Math.random()<.6&&this.dripDecals.add(new R(s.p.x,.012,s.p.z),Ai,.18+Math.random()*.15)),s.v.y*=-.3,s.v.x*=.5,s.v.z*=.5,s.w.multiplyScalar(.5)),this.level.collide(s.p,.04));let r=s.s*Math.min(1,s.life/3);this._q.setFromEuler(s.r),this._m.compose(s.p,this._q,this._sv.set(r,r*.7,r)),this.gibs.setMatrixAt(i,this._m)}(t||this._gibsWasAny)&&(this.gibs.instanceMatrix.needsUpdate=!0),this._gibsWasAny=t;let n=!1;for(let i=0;i<this.cubeData.length;i++){let s=this.cubeData[i];if(s.life<=0){this._cubesWasAny&&(this._m.makeScale(0,0,0),this.cubes.setMatrixAt(i,this._m));continue}n=!0,s.life-=e,s.v.y-=7*e,s.v.multiplyScalar(Math.exp(-1.2*e)),s.p.addScaledVector(s.v,e),s.p.y<.04&&(s.p.y=.04,s.v.y*=-.4),s.r.x+=s.w.x*e,s.r.y+=s.w.y*e;let r=Math.sin(s.life*40+i)>-.6?1:0,o=s.s*Math.min(1,s.life/s.max*2.2)*r;this._q.setFromEuler(s.r),this._m.compose(s.p,this._q,this._sv.set(o,o,o)),this.cubes.setMatrixAt(i,this._m)}(n||this._cubesWasAny)&&(this.cubes.instanceMatrix.needsUpdate=!0),this._cubesWasAny=n}reset(){this.decals.forEach(e=>e.clear());for(let e of this.gibData)e.life=0;for(let e of this.cubeData)e.life=0;this._gibsWasAny=!0,this._cubesWasAny=!0;for(let e of this.pools)e.clear()}};var Ri="CityDeadOutfit",Qi=[["Head","+Head",.125,"head"],["Neck","Head",.075,"head"],["Hips","Spine1",.16,"body"],["Spine1","Spine2",.16,"body"],["Spine2","Neck",.13,"body"],["LeftUpLeg","LeftLeg",.11,"limb"],["RightUpLeg","RightLeg",.11,"limb"],["LeftLeg","LeftFoot",.085,"limb"],["RightLeg","RightFoot",.085,"limb"],["LeftArm","LeftForeArm",.075,"limb"],["RightArm","RightForeArm",.075,"limb"],["LeftForeArm","LeftHand",.065,"limb"],["RightForeArm","RightHand",.065,"limb"]],Ba={normal:{name:"Zombie",glitchName:"Glitch",hp:1,speed:1,dmg:1,scale:1,radius:.38,reach:1.35,glow:16739125,tint:[1,1,1]},runner:{name:"Sprinter",glitchName:"Sprinter",hp:.55,speed:1,dmg:.7,scale:.88,radius:.34,reach:1.3,glow:3531007,tint:[1.15,1.12,1.05],clip:"run"},bomber:{name:"Bl\xE4hbauch",glitchName:"Bit-Bombe",hp:.7,speed:1.15,dmg:0,scale:1.05,radius:.4,reach:2,glow:16765498,tint:[.85,1.05,.55],fat:1.22},brute:{name:"Brocken",glitchName:"Firewall",hp:3.6,speed:.6,dmg:1.8,scale:1.34,radius:.52,reach:1.75,glow:16723311,tint:[.75,.62,.6]}};function Iv(a,e){let t=a.clone();return t.name=a.name+"-glitch",t.normalScale=new xe(.6,.6),t.onBeforeCompile=n=>{Object.assign(n.uniforms,e),n.vertexShader=`uniform float uTime; uniform float uGlitch;
`+n.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
      {
        float sy = gl_Position.y / gl_Position.w;
        float band = floor(sy * 22.0) + floor(uTime * 11.0) * 13.0;
        float h = fract(sin(band * 12.9898) * 43758.5453);
        gl_Position.x += step(0.94 - uGlitch * 0.35, h) * (h - 0.5) * 0.06 * gl_Position.w * (0.35 + uGlitch);
      }`),n.fragmentShader=`uniform vec3 uRim; uniform float uTime; uniform float uDissolve; uniform float uPulse; uniform float uGlitch;
float zwh(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
`+n.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
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
        }`)},t.customProgramCacheKey=()=>"zw-glitch",t}var Lv=2.25,Qc=class{constructor(e,t){this.scene=e.scene,this.clips={};let n=new ln().setFromObject(this.scene);this.rawHeight=n.max.y-n.min.y,this.scale=1.78/this.rawHeight,this.mats={};let i=(f,m={})=>new Ce({map:f.c,normalMap:f.n,roughnessMap:f.orm,metalnessMap:f.orm,aoMap:f.orm,roughness:1,metalness:1,...m});this.scene.traverse(f=>{if(!f.isMesh)return;let m=f.material.name||"";/Outfit/i.test(m)?f.material=i(t.outfit,{name:"outfit"}):f.material=i(t.body,{name:"body"}),f.castShadow=!0,f.receiveShadow=!0});for(let f of e.animations)this.clips[f.name]=f;let s=Ri+"Hips.position";this.speed={};for(let[f,m]of Object.entries(this.clips)){let b=m.tracks.find(S=>S.name===s);if(!b)continue;let g=b.values,p=g.length/3,x=g[(p-1)*3+2]-g[2],T=g[(p-1)*3]-g[0];if(this.speed[f]=Math.hypot(T,x)*this.scale/m.duration,f==="die")continue;let v=g[0],y=g[2];for(let S=0;S<p;S++)g[S*3]=v,g[S*3+2]=y}{let f=Er(this.scene),m=new vs(f),b=f.getObjectByName(Ri+"LeftToeBase")||f.getObjectByName(Ri+"LeftFoot"),g=f.getObjectByName(Ri+"RightToeBase")||f.getObjectByName(Ri+"RightFoot"),p=new R,x=new R,T=new R,v=new R;for(let y of["walk","walk2","run"]){let S=this.clips[y];if(!S||this.speed[y]>.2)continue;let A=m.clipAction(S);A.reset().play();let _=90,w=S.duration/_,C=[];for(let D=0;D<=_;D++){if(m.setTime(D*w),f.updateMatrixWorld(!0),b.getWorldPosition(p),g.getWorldPosition(x),D>0){let F=p.y<x.y?[p,T]:[x,v];C.push(-(F[0].z-F[1].z)/w)}T.copy(p),v.copy(x)}A.stop(),C.sort((D,F)=>D-F);let P=C[C.length*.6|0];this.speed[y]=Math.max(.15,Math.min(3.5,P*this.scale))}}for(let f of Object.values(this.clips))f.tracks=f.tracks.filter(m=>!m.name.startsWith("root."));this.attackHits={};let r=Er(this.scene),o=new vs(r),c=r.getObjectByName(Ri+"LeftHand"),l=r.getObjectByName(Ri+"RightHand"),h=r.getObjectByName(Ri+"Hips"),u=new R,d=new R;for(let f of["attack","attack2","attack3"]){let m=this.clips[f];if(!m)continue;let b=o.clipAction(m);b.reset().play();let g=[],p=60;for(let S=0;S<=p;S++){o.setTime(m.duration*S/p),r.updateMatrixWorld(!0),h.getWorldPosition(d);let A=c.getWorldPosition(u).z-d.z,_=l.getWorldPosition(u).z-d.z;g.push(Math.max(A,_))}b.stop();let x=Math.max(...g),T=Math.min(...g),v=T+(x-T)*.78,y=[];for(let S=1;S<p;S++)if(g[S]>=v&&g[S]>=g[S-1]&&g[S]>=g[S+1]){let A=S/p;(!y.length||A-y[y.length-1]>.12)&&y.push(A)}this.attackHits[f]=y.length?y:[.45]}}},Dv=0,uu=class{constructor(e){this.id=++Dv,this.tpl=e,this.root=new Be,this.model=Er(e.scene),this.model.scale.setScalar(e.scale),this.root.add(this.model),this.meshes=[],this.U={uTime:{value:0},uRim:{value:new se(16739125)},uDissolve:{value:0},uPulse:{value:0},uGlitch:{value:0}},this.style="hard",this.model.traverse(t=>{t.isMesh&&(t.material=t.material.clone(),t.material.emissive=new se(0),t.userData.real=t.material,t.userData.glitch=Iv(t.material,this.U),t.userData.glitch.emissive=new se(0),t.frustumCulled=!1,this.meshes.push(t))}),this.type=Ba.normal,this.typeKey="normal",this.bones={},this.model.traverse(t=>{t.isBone&&(this.bones[t.name.replace(Ri,"")]=t)}),this.mixer=new vs(this.model),this.actions={};for(let[t,n]of Object.entries(e.clips))this.actions[t]=this.mixer.clipAction(n);this.actions.die.setLoop(Yi,1),this.actions.die.clampWhenFinished=!0;for(let t of["attack","attack2","attack3","hit","scream"])this.actions[t]&&(this.actions[t].setLoop(Yi,1),this.actions[t].clampWhenFinished=!0);this.blob=new be(kv,Zf),this.blob.rotation.x=-Math.PI/2,this.blob.position.y=.02,this.blob.renderOrder=1,this.root.add(this.blob),hu||(hu=new Bi({map:Nv(),depthTest:!1,depthWrite:!1,transparent:!0,toneMapped:!1})),this.marker=new ps(hu),this.marker.scale.set(.42,.42,1),this.marker.renderOrder=20,this.marker.visible=!1,this.root.add(this.marker),this.marked=!1,this.active=!1,this.cur=null,this._v=new R,this.capsA=Qi.map(()=>new R),this.capsB=Qi.map(()=>new R)}spawn(e,t){this.active=!0,this.gibbed=!1,this.push=0,this.state="rise",this.dead=!1,this.root.position.copy(e),this.root.scale.set(1,1,1),this.root.rotation.y=Math.random()*Math.PI*2,this.root.visible=!0;let n=this.type=Ba[t.type]||Ba.normal;this.typeKey=t.type||"normal",this.hp=this.maxHp=t.hp*n.hp,this.speedMul=t.speed*n.speed,this.dmg=t.dmg*n.dmg,this.radius=n.radius,this.fuse=-1,this.marked=!1,this.markT=0,this.marker.visible=!1;let i=(.92+Math.random()*.16)*n.scale;this.model.scale.setScalar(this.tpl.scale*i),n.fat&&(this.model.scale.x*=n.fat,this.model.scale.z*=n.fat),this.height=1.78*i,this.marker.position.y=this.height+.45,this.walkClip=n.clip||(Math.random()<.3?"walk":"walk2"),this.U.uRim.value.set(n.glow),this.U.uDissolve.value=this.style==="glitch"?1:0,this.U.uPulse.value=0,this.U.uGlitch.value=.6,this.dissolveDir=-1,this.flinch=0,this.flinchSide=0,this.knock=0,this.knockDir=new R,this.flash=0,this.stagger=0,this.groanT=1+Math.random()*4,this.attackCD=0,this.deadT=0,this.sink=0,this.headless=!1,this.bones.Head.scale.setScalar(1),this.pathT=0,this.blob.visible=!0,this.blob.material=Zf,this.blob.scale.setScalar(1);let s=.85+Math.random()*.2;for(let o of this.meshes)for(let c of[o.userData.real,o.userData.glitch])c.emissive.setRGB(0,0,0),c.color.setRGB(s*n.tint[0],s*n.tint[1],s*n.tint[2]);this.mixer.stopAllAction();let r=this.actions.die;r.reset(),r.setLoop(Yi,1),r.clampWhenFinished=!0,r.time=r.getClip().duration,r.timeScale=-1.35,r.play(),this.cur="die",this.mixer.update(0)}play(e,t=.25,n=1){let i=this.actions[e];if(!i)return;if(this.cur===e&&i.isRunning()){i.timeScale=n;return}i.reset(),i.timeScale=n,i.setEffectiveWeight(1),i.play();let s=this.actions[this.cur];s&&s!==i&&s.crossFadeTo(i,t,!1),this.cur=e}setStyle(e){this.style=e;for(let t of this.meshes)t.material=e==="glitch"?t.userData.glitch:t.userData.real;e!=="glitch"&&(this.U.uDissolve.value=0)}setEmissive(e,t,n){for(let i of this.meshes)i.material.emissive.setRGB(e,t,n)}updateCapsules(){for(let e=0;e<Qi.length;e++){let[t,n]=Qi[e];this.bones[t].getWorldPosition(this.capsA[e]),n==="+Head"?(this.bones.Neck.getWorldPosition(this.capsB[e]),this.capsB[e].sub(this.capsA[e]).normalize().multiplyScalar(-.2*(this.height/1.78)).add(this.capsA[e])):this.bones[n].getWorldPosition(this.capsB[e])}}raycast(e,t,n){if(!this.active||this.dead)return null;let i=this._v.copy(this.root.position);i.y+=1;let s=i.sub(e),r=s.dot(t);if(r<0||r-1.4>n||s.lengthSq()-r*r>1.5*1.5)return null;this.updateCapsules();let o=null;for(let c=0;c<Qi.length;c++){let l=Qi[c][2]*(this.height/1.78),h=Fv(e,t,this.capsA[c],this.capsB[c],l);h!==null&&h<n&&(!o||h<o.t)&&(o={t:h,zone:Qi[c][3],bone:Qi[c][0]})}return o&&(o.point=e.clone().addScaledVector(t,o.t)),o}},Ir=new R,cu=new R,lu=new R;function Fv(a,e,t,n,i){Ir.subVectors(n,t),cu.subVectors(a,t);let s=Ir.dot(Ir),r=Ir.dot(e),o=Ir.dot(cu),c=e.dot(cu),l=s-r*r,h=l>1e-6?(s*-c+r*o)/l:0,u=s>1e-6?(o+h*r)/s:0;u=Math.max(0,Math.min(1,u)),lu.copy(t).addScaledVector(Ir,u),h=Math.max(0,lu.clone().sub(a).dot(e));let f=a.clone().addScaledVector(e,h).distanceTo(lu);return f>i?null:Math.max(0,h-Math.sqrt(Math.max(0,i*i-f*f)))}function Nv(){let a=document.createElement("canvas");a.width=a.height=64;let e=a.getContext("2d");e.translate(32,32),e.rotate(Math.PI/4),e.strokeStyle="#ffffff",e.lineWidth=6,e.strokeRect(-14,-14,28,28),e.fillStyle="#ff6b35",e.fillRect(-8,-8,16,16);let t=new Dt(a);return t.colorSpace=tt,t}var hu=null;function Uv(){let a=document.createElement("canvas");a.width=a.height=64;let e=a.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,32);return t.addColorStop(0,"rgba(0,0,0,0.75)"),t.addColorStop(.5,"rgba(0,0,0,0.4)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Dt(a)}var kv=new Ft(1.3,1.3),Zf=new ft({map:Uv(),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3}),el=class{constructor(e,t,n=18){this.game=e,this.tpl=t,this.pool=[],this.style="hard";for(let i=0;i<n;i++){let s=new uu(t);s.root.visible=!1,e.scene.add(s.root),this.pool.push(s)}this._d=new R,this._f=new R,this._s=new R}get alive(){return this.pool.filter(e=>e.active&&!e.dead)}setStyle(e){this.style=e;for(let t of this.pool)t.setStyle(e),t.active&&t.dead&&(t.active=!1,t.root.visible=!1)}spawn(e,t){let n=this.pool.find(i=>!i.active);if(!n){let i=this.pool.filter(s=>s.dead).sort((s,r)=>r.deadT-s.deadT)[0];if(!i)return null;n=i}return n.setStyle(this.style),n.spawn(e,t),this.game.fx.spawnPortal(e,this.style==="glitch"?n.type.glow:null),this.game.audio.roar(e.clone().setY(1.5)),n}reset(){for(let e of this.pool)e.active=!1,e.root.visible=!1,e.mixer.stopAllAction()}damage(e,t,n,i,s,r=0,o=!1){if(e.dead)return!1;e.marked&&(t*=1.3),e.hp-=t,e.flash=1;let c=this.game;if(e.hp<=0)return this.kill(e,o&&c.fx.blood?"gib":n,i,s,r),!0;let l=e.typeKey==="brute";return r>0&&(e.knock=r*(l?.15:.6),e.knockDir=s.clone().setY(0).normalize()),e.flinch=Math.min(1.2,e.flinch+(n==="head"?1.1:.7)*(l?.4:1)),e.flinchSide=(Math.random()-.5)*2,e.stagger=(n==="limb"?.35:.25)*(l?.3:1),e.style==="glitch"&&(e.U.uGlitch.value=1),Math.random()<(l?.06:.25)&&e.state==="chase"&&(e.state="hit",e.hitT=.55,e.play("hit",.08,1.6)),Math.random()<.5&&c.audio.groan(e.root.position.clone().setY(1.6)),!1}kill(e,t,n,i,s=0){let r=this.game;if(e.dead=!0,e.marker.visible=!1,e.deathY=e.root.position.y,e.state="dead",e.deadT=0,e.flinch=0,e.fuse=-1,e.push=s,e.pushDir=i.clone().setY(0).normalize(),e.style==="glitch"){e.dissolveDir=1,e.U.uDissolve.value=.02,e.U.uGlitch.value=1,e.setEmissive(0,0,0);let l=e.actions.die;l.reset(),l.timeScale=1.6,l.setLoop(Yi,1),l.clampWhenFinished=!0,l.play();let h=e.actions[e.cur];h&&h!==l&&h.crossFadeTo(l,.1,!1),e.cur="die",e.root.rotation.y=Math.atan2(-i.x,-i.z),r.fx.derez(e.root.position.clone().setY(e.height*.55),e.pushDir,e.type.glow,e.type.scale),r.audio.derez(e.root.position.clone().setY(1.2),e.typeKey==="brute"),r.onKill(e,t==="gib"?"body":t);return}if(t==="gib"||e.typeKey==="bomber"){e.gibbed=!0,e.root.visible=!1,e.pooled=!0,r.fx.gibExplode(e.root.position.clone().setY(.95),e.pushDir),r.audio.headshot(e.root.position.clone().setY(1)),r.onKill(e,t==="self"?"self":"gib");return}let o=e.actions.die;o.reset(),o.timeScale=1.15,o.setLoop(Yi,1),o.clampWhenFinished=!0,o.play();let c=e.actions[e.cur];c&&c!==o&&c.crossFadeTo(o,.12,!1),e.cur="die",e.setEmissive(0,0,0),e.root.rotation.y=Math.atan2(-i.x,-i.z),t==="head"&&r.fx.blood&&(e.headless=!0,e.bones.Head.scale.setScalar(1e-4)),r.audio.death(e.root.position.clone().setY(1.4)),setTimeout(()=>e.active&&e.dead&&r.audio.thud(e.root.position.clone().setY(.2)),1300),r.onKill(e,t)}update(e,t){let n=this.game,i=n.level,s=t.pos;i.updateFlow(s.x,s.z);let r=this.pool.filter(c=>c.active),o=n.time;for(let c of r){let l=c.root.position;c.mixer.update(e),c.U.uTime.value=o+c.id*1.7,c.style==="glitch"&&(c.dissolveDir<0&&c.U.uDissolve.value>0&&(c.U.uDissolve.value=Math.max(0,c.U.uDissolve.value-e*1.1)),c.U.uGlitch.value=Math.max(.12,c.U.uGlitch.value-e*2.5));let h=0;if(c.typeKey==="bomber"&&!c.dead){let P=c.fuse>=0;if(h=(.5+.5*Math.sin(o*(P?28:5)+c.id))*(P?1:.35),P){let D=1+(.7-Math.max(0,c.fuse))*.25;c.root.scale.set(D,1+(D-1)*.4,D)}}if((c.flash>0||h>0||c._emis)&&(c.flash=Math.max(0,c.flash-e*9),c.style==="glitch"?(c.U.uPulse.value=h,c.setEmissive(c.flash*.6,c.flash*.6,c.flash*.6)):c.setEmissive(c.flash*.22+h*.35,c.flash*.02+h*.3,h*.02),c._emis=c.flash>0||h>0),c.dead){if(c.deadT+=e,c.style==="glitch"){c.deadT>.12&&(c.U.uDissolve.value=Math.min(1.05,c.U.uDissolve.value+e*1.9)),c.deadT>.7&&(c.active=!1,c.root.visible=!1,c.root.scale.set(1,1,1));continue}if(c.gibbed){c.deadT>.5&&(c.active=!1,c.gibbed=!1,c.root.scale.set(1,1,1));continue}if(c.push>.05){l.addScaledVector(c.pushDir,c.push*e),c.push*=Math.exp(-e*4),i.collide(l,.3,l.y);let P=i.groundAt(l.x,l.z,.3,l.y);l.y>P&&(l.y=Math.max(P,l.y-e*8),c.deathY=l.y)}if(c.deadT>1.9&&!c.pooled){c.pooled=!0;let P=c.bones.Hips.getWorldPosition(this._d);l.y<.05&&n.fx.pool(P.x,P.z,c.headless?2.2:1.5)}c.deadT>.4&&(c.blob.material.opacity=1),c.deadT>28&&(c.sink+=e*.25,l.y=(c.deathY||0)-c.sink,c.sink>.6&&(c.active=!1,c.root.visible=!1,c.pooled=!1,l.y=0,c.root.scale.set(1,1,1)));continue}c.pooled=!1;let u=s.x-l.x,d=s.z-l.z,f=Math.hypot(u,d),m=Math.abs(t.y-l.y);c.marker.visible=c.marked;let b=c.typeKey==="runner"?1.05*c.speedMul:c.speedMul*Lv;if(c.state==="rise"){c.actions.die.time<=.02&&(c.state=Math.random()<(c.typeKey==="runner"?.15:.35)?"scream":"chase",c.state==="scream"?(c.play("scream",.25,1.4),c.screamT=1.6,n.audio.roar(l.clone().setY(1.6))):c.play(c.walkClip,.3,b)),this.face(c,u,d,e,2);continue}if(c.state==="scream"){c.screamT-=e,this.face(c,u,d,e,3),c.screamT<=0&&(c.state="chase",c.play(c.walkClip,.35,b));continue}if(c.state==="hit"){c.hitT-=e,c.hitT<=0&&(c.state="chase",c.play(c.walkClip,.25,b));continue}if(c.state==="fuse"){if(c.fuse-=e,this.face(c,u,d,e,4),c.fuse<=0){c.hp=0;let P=l.clone().setY(1);this.kill(c,"self",P,this._d.set(u,0,d).normalize().clone(),0)}continue}if(c.state==="attack"){this.face(c,u,d,e,5);let P=c.actions[c.attackClip],D=P.time/P.getClip().duration,F=this.tpl.attackHits[c.attackClip];for(;c.nextHit<F.length&&D>=F[c.nextHit];)c.nextHit++,f<c.type.reach+.4+(t.y-l.y>.4?.4:0)&&m<1.3*c.type.scale&&!t.dead&&n.hurtPlayer(c.dmg,l);(!P.isRunning()||D>.97||f>c.type.reach+1.25&&D>(F[F.length-1]||.5)+.05)&&(c.state="chase",c.attackCD=c.typeKey==="brute"?.8:.4,c.play(c.walkClip,.3,b));continue}if(c.attackCD-=e,f<c.type.reach+(t.y-l.y>.4?.45:0)&&m<1.3*c.type.scale&&c.attackCD<=0&&!t.dead){if(c.typeKey==="bomber"){c.state="fuse",c.fuse=.7,c.play("scream",.1,1.8),n.audio.fuse(l.clone().setY(1.2));continue}c.state="attack",c.attackClip=["attack","attack2","attack3"][Math.random()*3|0],c.nextHit=0,c.play(c.attackClip,.15,c.typeKey==="brute"?1.05:1.45),n.audio.attackGrunt(l.clone().setY(1.6));continue}let g=this._f,p=.42,x=-d/(f||1),T=u/(f||1);f<24&&m<.6&&i.los(l.x+x*p,l.z+T*p,s.x,s.z,!1,l.y)&&i.los(l.x-x*p,l.z-T*p,s.x,s.z,!1,l.y)?g.set(u/f,0,d/f):i.flowDir(l.x,l.z,g);let y=this._s.set(0,0,0);for(let P of r){if(P===c||P.dead||Math.abs(P.root.position.y-l.y)>1)continue;let D=l.x-P.root.position.x,F=l.z-P.root.position.z,L=(c.radius+P.radius)*1.15,N=D*D+F*F;if(N<L*L&&N>1e-5){let H=Math.sqrt(N);y.x+=D/H*(L-H)*2.2,y.z+=F/H*(L-H)*2.2}}g.add(y),g.y=0,g.lengthSq()>1e-6&&g.normalize(),this.face(c,g.x,g.z,e,c.typeKey==="runner"?4.5:3.2),c.stagger=Math.max(0,c.stagger-e);let S=this.tpl.speed[c.walkClip]||.9,A=(c.typeKey==="runner"?3.2*c.speedMul:S*b*c.type.scale)*(c.stagger>0?.25:1)*(f<c.radius+.7?0:1);c.knock>.05&&(l.addScaledVector(c.knockDir,c.knock*e),c.knock*=Math.exp(-e*6));let _=c.root.rotation.y;l.x+=Math.sin(_)*A*e,l.z+=Math.cos(_)*A*e,i.collide(l,c.radius,l.y);let w=i.groundAt(l.x,l.z,c.radius,l.y);w>l.y?l.y=Math.min(w,l.y+e*3.2):w<l.y&&(l.y=Math.max(w,l.y-e*9));let C=c.actions[c.walkClip];C&&(C.timeScale=b*(c.stagger>0?.4:1)),c.groanT-=e,c.groanT<=0&&(c.groanT=3+Math.random()*6,f<26&&n.audio.groan(l.clone().setY(1.6)))}for(let c of r){if(c.dead||c.flinch<=.001)continue;c.flinch*=Math.exp(-e*7);let l=c.flinch;c.bones.Spine2.rotation.x-=l*.45,c.bones.Spine1.rotation.x-=l*.25,c.bones.Head.rotation.x-=l*.5,c.bones.Spine2.rotation.z+=l*.3*c.flinchSide}}face(e,t,n,i,s){if(Math.abs(t)+Math.abs(n)<1e-5)return;let o=Math.atan2(t,n)-e.root.rotation.y;o=Math.atan2(Math.sin(o),Math.cos(o)),e.root.rotation.y+=o*Math.min(1,s*i)}raycast(e,t,n,i=null){let s=null;for(let r of this.pool){if(!r.active||r.dead||i&&i.has(r))continue;let o=r.raycast(e,t,n);o&&(!s||o.t<s.t)&&(s=o,s.z=r)}return s}};var Ov=17,Et=6,Bv=a=>"#"+a.toString(16).padStart(6,"0"),tl=class{constructor(e,t){this.c=e,this.g=e.getContext("2d"),this.cache=new Map,this.t=0,this.setLevel(t)}setLevel(e){this.level=e,this.cache.has(e)||this.cache.set(e,this.renderMap(e)),this.bg=this.cache.get(e)}renderMap(e){let t=e.map,n=t.length,i=t[0].length,s=document.createElement("canvas");s.width=i*Et,s.height=n*Et;let r=s.getContext("2d"),o=new Set([".","P","L","K","R","S","@","B","E","Y"]);for(let c=0;c<n;c++)for(let l=0;l<i;l++){let h=t[c][l],u=e.hAt(l,c);if(u>=3.9)r.fillStyle="rgba(255,190,140,0.32)";else if(u>0)r.fillStyle=`rgba(255,190,140,${.12+u*.05})`;else if(o.has(h))r.fillStyle="rgba(255,255,255,0.13)";else if(h==="C"||h==="W"||h==="O"||h==="X")r.fillStyle="rgba(255,255,255,0.3)";else continue;r.fillRect(l*Et,c*Et,Et,Et),h==="S"&&(r.fillStyle="rgba(227,36,27,0.55)",r.fillRect(l*Et+1,c*Et+1,Et-2,Et-2))}r.fillStyle="rgba(255,107,53,0.35)";for(let c=1;c<n-1;c++)for(let l=1;l<i-1;l++){let h=(u,d)=>t[u][d]==="#"||t[u][d]==="M";h(c,l)&&(h(c-1,l)||r.fillRect(l*Et,c*Et,Et,1),h(c+1,l)||r.fillRect(l*Et,c*Et+Et-1,Et,1),h(c,l-1)||r.fillRect(l*Et,c*Et,1,Et),h(c,l+1)||r.fillRect(l*Et+Et-1,c*Et,1,Et))}return s}fit(){let e=Math.min(2,devicePixelRatio||1),t=Math.round(this.c.clientWidth*e);return t&&this.c.width!==t&&(this.c.width=t,this.c.height=t),this.c.width}draw(e){let t=this.fit();if(!t)return;let n=this.g,i=t/2,s=e.player,r=i/Ov;this.t+=.016,n.clearRect(0,0,t,t),n.save(),n.beginPath(),n.arc(i,i,i-1,0,Math.PI*2),n.clip(),n.fillStyle="rgba(6,6,10,0.72)",n.fillRect(0,0,t,t),n.translate(i,i),n.rotate(s.yaw),n.imageSmoothingEnabled=!1;let o=r*Fe/Et;n.drawImage(this.bg,-s.pos.x*r,-s.pos.z*r,this.bg.width*o,this.bg.height*o);let c=(m,b)=>[(m-s.pos.x)*r,(b-s.pos.z)*r];for(let m of e.pickups){if(!m.active)continue;let[b,g]=c(m.holder.position.x,m.holder.position.z);n.fillStyle=m.type==="health"?"#50ff70":"#ffffff";let p=Math.max(2,t*.018);n.fillRect(b-p/2,g-p/2,p,p)}let l=this.level.exit;if(l&&l.active){let[m,b]=c(this.level.exitPos.x,this.level.exitPos.z),g=Math.hypot(m,b),p=i-t*.06;g>p&&(m*=p/g,b*=p/g);let x=t*(.045+.012*Math.sin(this.t*6));n.strokeStyle="#35e0ff",n.lineWidth=Math.max(2,t*.014),n.beginPath(),n.arc(m,b,x,0,Math.PI*2),n.stroke(),n.fillStyle="#35e0ff",n.beginPath(),n.arc(m,b,x*.35,0,Math.PI*2),n.fill()}n.globalCompositeOperation="lighter";let h=.75+.25*Math.sin(this.t*7);for(let m of e.zombies.pool){if(!m.active||m.dead)continue;let[b,g]=c(m.root.position.x,m.root.position.z),p=Math.hypot(b,g),x=!1,T=i-t*.04;p>T&&(b*=T/p,g*=T/p,x=!0);let v=Bv(m.type.glow),y=t*(m.typeKey==="brute"?.034:.024)*(x?.7:1),S=n.createRadialGradient(b,g,0,b,g,y*3.2);S.addColorStop(0,v+"cc"),S.addColorStop(1,v+"00"),n.globalAlpha=(x?.55:1)*h,n.fillStyle=S,n.beginPath(),n.arc(b,g,y*3.2,0,Math.PI*2),n.fill(),n.globalAlpha=x?.7:1,n.fillStyle=m.typeKey==="bomber"&&m.fuse>=0?"#ffffff":v,n.beginPath(),n.arc(b,g,y,0,Math.PI*2),n.fill(),m.marked&&(n.strokeStyle="#ffffff",n.lineWidth=Math.max(1,t*.008),n.beginPath(),n.arc(b,g,y*2,0,Math.PI*2),n.stroke())}n.globalAlpha=1,n.globalCompositeOperation="source-over";let u=-Math.PI/2;n.fillStyle="rgba(244,239,232,0.7)",n.font=`800 ${Math.round(t*.075)}px system-ui, sans-serif`,n.textAlign="center",n.textBaseline="middle",n.save(),n.translate(Math.cos(u)*(i-t*.07),Math.sin(u)*(i-t*.07)),n.rotate(-s.yaw),n.fillText("N",0,0),n.restore(),n.restore(),n.save(),n.translate(i,i);let d=n.createRadialGradient(0,0,0,0,0,i*.7);d.addColorStop(0,"rgba(255,241,220,0.22)"),d.addColorStop(1,"rgba(255,241,220,0)"),n.fillStyle=d,n.beginPath(),n.moveTo(0,0),n.arc(0,0,i*.7,-Math.PI/2-.55,-Math.PI/2+.55),n.closePath(),n.fill();let f=t*.045;n.fillStyle="#ff6b35",n.strokeStyle="#000",n.lineWidth=Math.max(1,t*.008),n.beginPath(),n.moveTo(0,-f*1.2),n.lineTo(f*.8,f*.9),n.lineTo(0,f*.45),n.lineTo(-f*.8,f*.9),n.closePath(),n.fill(),n.stroke(),n.restore(),n.strokeStyle="rgba(255,255,255,0.22)",n.lineWidth=Math.max(1,t*.01),n.beginPath(),n.arc(i,i,i-n.lineWidth,0,Math.PI*2),n.stroke()}};var Ha=new R;function Cn(a,e,t,n,i,s){let r=2*Math.PI*i/4,o=Math.max(s-2*i,0),c=Math.PI/4;Ha.copy(e),Ha[n]=0,Ha.normalize();let l=.5*r/(r+o),h=1-Ha.angleTo(a)/c;return Math.sign(Ha[t])===1?h*l:o/(r+o)+l+l*(1-h)}var pt=class a extends Le{constructor(e=1,t=1,n=1,i=2,s=.1){let r=i*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,r,r,r),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:s},r===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new R,l=new R,h=new R(e,t,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,m=u.length/6,b=new R,g=.5/r;for(let p=0,x=0;p<u.length;p+=3,x+=2)switch(c.fromArray(u,p),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),u[p+0]=h.x*Math.sign(c.x)+l.x*s,u[p+1]=h.y*Math.sign(c.y)+l.y*s,u[p+2]=h.z*Math.sign(c.z)+l.z*s,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/m)){case 0:b.set(1,0,0),f[x+0]=Cn(b,l,"z","y",s,n),f[x+1]=1-Cn(b,l,"y","z",s,t);break;case 1:b.set(-1,0,0),f[x+0]=1-Cn(b,l,"z","y",s,n),f[x+1]=1-Cn(b,l,"y","z",s,t);break;case 2:b.set(0,1,0),f[x+0]=1-Cn(b,l,"x","z",s,e),f[x+1]=Cn(b,l,"z","x",s,n);break;case 3:b.set(0,-1,0),f[x+0]=1-Cn(b,l,"x","z",s,e),f[x+1]=1-Cn(b,l,"z","x",s,n);break;case 4:b.set(0,0,1),f[x+0]=1-Cn(b,l,"x","y",s,e),f[x+1]=1-Cn(b,l,"y","x",s,t);break;case 5:b.set(0,0,-1),f[x+0]=Cn(b,l,"x","y",s,e),f[x+1]=1-Cn(b,l,"y","x",s,t);break}}static fromJSON(e){return new a(e.width,e.height,e.depth,e.segments,e.radius)}};function Hv(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.translate(128/2,128/2);let n=t.createRadialGradient(0,0,0,0,0,128/2);n.addColorStop(0,"rgba(255,255,240,1)"),n.addColorStop(.15,"rgba(255,230,150,1)"),n.addColorStop(.4,"rgba(255,140,40,0.6)"),n.addColorStop(1,"rgba(255,60,0,0)"),t.fillStyle=n;for(let i=0;i<7;i++)t.rotate(Math.PI*2/7+Math.random()*.3),t.beginPath(),t.moveTo(-6,0),t.lineTo(0,-128/2*(.6+Math.random()*.4)),t.lineTo(6,0),t.fill();return t.beginPath(),t.arc(0,0,128*.2,0,Math.PI*2),t.fill(),new Dt(e)}function zv(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.fillStyle="#808080",t.fillRect(0,0,128,128);for(let i=0;i<1400;i++){let s=90+Math.random()*90|0;t.fillStyle=`rgb(${s},${s},${s})`,t.fillRect(Math.random()*128,Math.random()*128,2,2)}let n=new Dt(e);return n.wrapS=n.wrapT=xn,n}function Gv(){let t=document.createElement("canvas");t.width=256,t.height=64;let n=t.getContext("2d");n.fillStyle="#6b4226",n.fillRect(0,0,256,64);for(let s=0;s<70;s++){let r=Math.random()*64,o=.05+Math.random()*.18;n.strokeStyle=Math.random()<.5?`rgba(40,20,8,${o})`:`rgba(150,95,55,${o})`,n.lineWidth=.5+Math.random()*2,n.beginPath(),n.moveTo(0,r);for(let c=0;c<=256;c+=16)n.lineTo(c,r+Math.sin(c*.03+s)*2.5);n.stroke()}let i=new Dt(t);return i.colorSpace=tt,i.wrapS=i.wrapT=xn,i}var mt={pistol:{name:"Pistole",slot:1,mag:12,maxReserve:1/0,cooldown:.15,reload:1.25,damage:34,pellets:1,spread:.006,kick:[2.2,26],camKick:.012},shotgun:{name:"Pump-Action",slot:2,mag:6,maxReserve:40,cooldown:.2,pump:.52,shellTime:.42,damage:15,pellets:10,spread:.075,kick:[5.5,70],camKick:.035},rocket:{name:"Raketenwerfer",slot:3,mag:1,maxReserve:12,cooldown:.4,reload:1.5,kick:[5,34],camKick:.03},sniper:{name:"Scharfsch\xFCtzengewehr",slot:4,mag:5,maxReserve:30,cooldown:.2,bolt:.95,reload:2.3,damage:240,pellets:1,spread:7e-4,hipSpread:.05,pierce:2,kick:[7,55],camKick:.045}},Pn=["pistol","shotgun","rocket","sniper"],du=6,nl=class{constructor(e){this.scene=new di,this.camera=new Ct(52,16/9,.01,10),this.scene.add(this.camera),this.hemi=new Wi(12109020,3811872,1),this.scene.add(this.hemi),this.key=new Mi(16770760,1.4),this.key.position.set(-.5,1,.4),this.scene.add(this.key),this.flashLight=new sn(16756832,0,1.5,2),this.scene.add(this.flashLight),this.scene.environment=e,this.scene.environmentIntensity=.35,this.rig=new Be,this.kick=new Be,this.camera.add(this.rig),this.rig.add(this.kick);let t=this.m={steel:new Ce({color:2500651,metalness:.92,roughness:.32}),steelLight:new Ce({color:5593180,metalness:.95,roughness:.22}),dark:new Ce({color:657930,roughness:.6,metalness:.5}),black:new ft({color:0}),poly:new Ce({color:1315860,metalness:.05,roughness:.78}),grip:new Ce({color:1381653,metalness:0,roughness:.9,bumpMap:zv(),bumpScale:1.2}),glove:new Ce({color:1841688,metalness:.05,roughness:.55}),knuckle:new Ce({color:2762532,metalness:.05,roughness:.7}),sleeve:new Ce({color:3093284,metalness:0,roughness:.95}),dot:new Ce({color:0,emissive:9109338,emissiveIntensity:3}),red:new Ce({color:0,emissive:16719888,emissiveIntensity:4}),brass:new Ce({color:13213766,metalness:1,roughness:.3}),shellRed:new Ce({color:10227728,metalness:.1,roughness:.45}),wood:new Ce({map:Gv(),color:12618336,roughness:.5,metalness:0}),olive:new Ce({color:4082220,metalness:.35,roughness:.55}),oliveDark:new Ce({color:2436122,metalness:.4,roughness:.5}),orange:new Ce({color:2230528,emissive:16739125,emissiveIntensity:1.2,roughness:.4}),warhead:new Ce({color:5922634,metalness:.6,roughness:.35}),nade:new Ce({color:3819048,metalness:.3,roughness:.55})};this.flashTex=Hv(),this.models={pistol:this.buildPistol(),shotgun:this.buildShotgun(),rocket:this.buildLauncher(),sniper:this.buildSniper()};for(let s of Pn){let r=this.models[s];r.group.visible=s==="pistol",this.kick.add(r.group),r.group.traverse(o=>{o.isMesh&&(o.castShadow=!1,o.receiveShadow=!1)})}this.buildNadeHand(),this.shells=[];let n=new ke(.0045,.0045,.019,10),i=new ke(.0115,.0115,.065,12);for(let s=0;s<10;s++){let r=s>=5,o=new be(r?i:n,r?t.shellRed:t.brass);o.visible=!1,this.camera.add(o),this.shells.push({m:o,v:new R,w:new R,life:0,shot:r})}this.reset()}reset(){this.state={pistol:{ammo:12,reserve:1/0},shotgun:{ammo:6,reserve:12},rocket:{ammo:1,reserve:3},sniper:{ammo:5,reserve:10}},this.grenades=3,this.owned={pistol:!0,shotgun:!0,rocket:!0,sniper:!1},this.boltT=0,this.current="pistol",this.last="shotgun",this.pending=null,this.switchT=0,this.cooldown=0,this.reloadT=0,this.pumpT=0,this.sgReload=null,this.flashT=0,this.slideT=0,this.recoil={z:0,vz:0,rx:0,vrx:0,ry:0,vry:0},this.swayX=0,this.swayY=0,this.raise=1,this.nade.t=-1,this.nade.group.visible=!1;for(let e of Pn)this.models[e].group.visible=e==="pistol";this.applyPose("pistol")}get def(){return mt[this.current]}get st(){return this.state[this.current]}get reloading(){return this.reloadT>0||!!this.sgReload}get busy(){return this.switchT>0||this.nade.t>=0||this.raise>.3}applyPose(e){let t=this.models[e];this.rigBase=t.rigBase,this.kick.rotation.set(0,0,0),t.group.rotation.copy(t.rot)}_add(e,t,n,i,s,r){let o=new be(t,n);return o.position.set(i,s,r),e.add(o),o}rightHand(e){let t=this.m,n=(...u)=>this._add(...u),i=new Be;e.add(i);let s=n(i,new pt(.06,.1,.07,3,.02),t.glove,.004,-.088,.085);s.rotation.x=.28;for(let u=0;u<3;u++){let d=new Be;d.position.set(0,-.058-u*.022,.044-u*.006),d.rotation.x=.28,i.add(d);let f=n(d,new wn(.0105,.03,4,10),t.glove,-.018,0,-.005);f.rotation.z=Math.PI/2,f.rotation.y=.35;let m=n(d,new wn(.0098,.018,4,10),t.knuckle,.008,0,-.022);m.rotation.x=Math.PI/2;let b=n(d,new wn(.0095,.02,4,10),t.glove,.024,0,-.01);b.rotation.z=Math.PI/2,b.rotation.y=-.6}let r=n(i,new wn(.0095,.04,4,10),t.glove,.017,-.036,.022);r.rotation.x=Math.PI/2-.25,r.rotation.z=-.15;let o=n(i,new wn(.011,.045,4,10),t.glove,-.02,-.02,.045);o.rotation.x=Math.PI/2+.25,o.rotation.z=.2;let c=n(i,new ke(.03,.033,.06,14),t.glove,.01,-.14,.13);c.rotation.x=1;let l=n(i,new ke(.038,.05,.36,16),t.sleeve,.03,-.2,.32);l.rotation.x=1.05,l.rotation.z=-.12;let h=n(i,new vn(.036,.008,8,18),t.sleeve,.012,-.152,.152);return h.rotation.x=1.05+Math.PI/2,i}supportHand(e,t,n,i,s=.028){let r=this.m,o=(...b)=>this._add(...b),c=new Be;c.position.set(t,n,i),e.add(c);let l=o(c,new pt(.05,.035,.085,3,.014),r.glove,-.006,-s-.012,0);l.rotation.z=.25;for(let b=0;b<4;b++){let g=o(c,new wn(.0095,.034,4,10),r.glove,s*.9+.004,-.004,-.032+b*.021);g.rotation.z=-.35}let h=o(c,new wn(.0105,.04,4,10),r.knuckle,-s-.006,.004,-.01);h.rotation.x=Math.PI/2,h.rotation.z=.2;let u=new R(-.35,-.55,.75).normalize(),d=.42,f=o(c,new ke(.048,.036,d,16),r.sleeve,0,0,0);f.quaternion.setFromUnitVectors(new R(0,-1,0),u),f.position.set(-.012,-s-.02,.03).addScaledVector(u,d/2+.02);let m=o(c,new Nt(.032,12,10),r.glove,-.012,-s-.022,.035);return c}makeFlash(e,t,n,i,s){let r=new ft({map:this.flashTex,transparent:!0,blending:Jt,depthWrite:!1,opacity:.85}),o=new Be;o.position.set(t,n,i),e.add(o);let c=new be(new Ft(s,s),r),l=new be(new Ft(s*.46,s*1.55),r);l.rotation.x=Math.PI/2,l.position.z=-s*.58;let h=l.clone();return h.rotation.set(Math.PI/2,0,Math.PI/2),o.add(c,l,h),o.visible=!1,o}buildPistol(){let e=this.m,t=(...m)=>this._add(...m),n=new Be,i=new Be;n.add(i),t(i,new pt(.03,.032,.192,3,.004),e.steel,0,0,0);for(let m=0;m<7;m++)t(i,new Le(.0315,.022,.0025),e.steelLight,0,-.002,.055+m*.0055);t(i,new Le(.004,.012,.034),e.dark,.0135,.007,-.012),t(i,new Le(.0045,.0105,.028),e.steelLight,.0128,.007,-.012),t(i,new Le(.005,.007,.008),e.steel,0,.019,-.085),t(i,new Nt(.0013,8,8),e.dot,0,.0205,-.0805),t(i,new Le(.024,.008,.008),e.steel,0,.0195,.086),t(i,new Le(.006,.0085,.0085),e.black,0,.021,.086),t(i,new Nt(.0012,8,8),e.dot,-.0062,.0215,.0818),t(i,new Nt(.0012,8,8),e.dot,.0062,.0215,.0818);let s=t(i,new ke(.0072,.0072,.012,16),e.steelLight,0,.002,-.097);s.rotation.x=Math.PI/2;let r=t(i,new zn(.0046,16),e.black,0,.002,-.1032);r.rotation.y=Math.PI,t(n,new pt(.027,.02,.17,2,.003),e.poly,0,-.024,-.008),t(n,new Le(.02,.006,.05),e.poly,0,-.036,-.055);let o=t(n,new vn(.019,.0035,8,20,Math.PI),e.poly,0,-.035,.012);o.rotation.set(Math.PI,Math.PI/2,0),o.scale.set(1,1.15,1);let c=t(n,new Le(.006,.018,.005),e.steel,0,-.04,.012);c.rotation.x=.25;let l=t(n,new pt(.031,.115,.052,3,.008),e.grip,0,-.082,.07);l.rotation.x=.28;let h=new Be;n.add(h);let u=t(h,new pt(.033,.012,.054,2,.003),e.poly,0,-.142,.087);u.rotation.x=.28,t(n,new Le(.008,.012,.01),e.steel,0,.004,.1),this.rightHand(n);let d=this.makeFlash(i,0,.002,-.112,.048),f=new at;return f.position.set(.016,.01,-.012),i.add(f),{group:n,slide:i,mag:h,flash:d,eject:f,rigBase:new R(.12,-.105,-.36),rot:new Yt(0,.3,-.05)}}buildShotgun(){let e=this.m,t=(...x)=>this._add(...x),n=new Be,i=e.poly;t(n,new pt(.066,.088,.27,4,.01),e.steel,0,.012,-.045),t(n,new pt(.068,.05,.2,2,.006),e.steelLight,0,0,-.045).scale.set(1,1,1),t(n,new Le(.004,.034,.09),e.dark,.0335,.022,-.05),t(n,new Le(.004,.024,.07),e.steelLight,.0325,.022,-.05),t(n,new pt(.012,.06,.12,2,.004),i,-.039,.01,-.06);for(let x=0;x<4;x++){let T=t(n,new ke(.0115,.0115,.07,14),e.shellRed,-.05,.01,-.105+x*.03),v=t(n,new ke(.0118,.0118,.016,14),e.brass,-.05,.047,-.105+x*.03)}let s=t(n,new ke(.021,.021,.56,24),e.steel,0,.038,-.45);s.rotation.x=Math.PI/2;let r=t(n,new ke(.025,.025,.045,24),e.steelLight,0,.038,-.71);r.rotation.x=Math.PI/2;let o=t(n,new zn(.016,20),e.black,0,.038,-.7326);o.rotation.y=Math.PI,t(n,new pt(.05,.026,.4,2,.006),i,0,.062,-.39);for(let x=0;x<8;x++)t(n,new Le(.052,.01,.022),e.dark,0,.062,-.24-x*.042);for(let x of[-.016,.016])t(n,new Le(.008,.03,.02),e.steel,x,.07,.06);let c=t(n,new vn(.011,.0035,8,18),e.steel,0,.083,.06);t(n,new Le(.006,.024,.018),e.steel,0,.083,-.66),t(n,new Nt(.0035,8,8),e.red,0,.096,-.66);let l=t(n,new ke(.019,.019,.5,20),e.steel,0,-.012,-.42);l.rotation.x=Math.PI/2;let h=t(n,new ke(.022,.022,.03,20),e.steelLight,0,-.012,-.675);h.rotation.x=Math.PI/2,t(n,new pt(.05,.085,.03,2,.008),e.steel,0,.013,-.63);let u=new Be;u.position.set(0,-.01,-.38),n.add(u),t(u,new pt(.08,.072,.25,4,.02),e.wood,0,0,0);for(let x=0;x<8;x++)t(u,new Le(.082,.074,.007),e.dark,0,0,-.1+x*.028).scale.set(1,.92,1);this.supportHand(u,0,-.004,.01,.042);let d=t(n,new vn(.024,.005,8,20,Math.PI),e.steel,0,-.034,.016);d.rotation.set(Math.PI,Math.PI/2,0),d.scale.set(1,1.15,1);let f=t(n,new Le(.008,.022,.006),e.steel,0,-.042,.016);f.rotation.x=.25;let m=t(n,new pt(.04,.125,.062,3,.012),e.grip,0,-.085,.072);m.rotation.x=.28;let b=t(n,new pt(.052,.1,.34,3,.016),i,0,-.025,.3);b.rotation.x=-.12,t(n,new pt(.056,.11,.03,2,.01),e.knuckle,0,-.045,.47),this.rightHand(n);let g=this.makeFlash(n,0,.038,-.76,.14),p=new at;return p.position.set(.036,.022,-.05),n.add(p),{group:n,pump:u,pumpZ:-.38,pumpTravel:.1,flash:g,eject:p,rigBase:new R(.17,-.15,-.56),rot:new Yt(0,.12,-.04)}}buildLauncher(){let e=this.m,t=(...S)=>this._add(...S),n=new Be,i=.105,s=t(n,new ke(.058,.058,.92,28,1,!0),e.olive,0,i,-.16);s.rotation.x=Math.PI/2;let r=t(n,new ke(.052,.052,.9,20,1,!0),e.oliveDark,0,i,-.16);r.rotation.x=Math.PI/2,r.material=e.oliveDark.clone(),r.material.side=Ut;let o=t(n,new ke(.067,.067,.06,28,1,!0),e.oliveDark,0,i,-.6);o.rotation.x=Math.PI/2;let c=t(n,new gi(.052,.067,28),e.oliveDark,0,i,-.63);c.rotation.y=Math.PI;let l=t(n,new ke(.058,.08,.1,28,1,!0),e.oliveDark,0,i,.33);l.rotation.x=Math.PI/2;let h=t(n,new zn(.05,20),e.black,0,i,.1),u=t(n,new ke(.0595,.0595,.025,28,1,!0),e.orange,0,i,-.46);u.rotation.x=Math.PI/2;for(let S of[-.3,.05]){let A=t(n,new vn(.059,.005,8,28),e.oliveDark,0,i,S)}let d=new Be;d.position.set(0,i,-.6),n.add(d);let f=t(d,new mi(.044,.12,20),e.warhead,0,0,-.03);f.rotation.x=-Math.PI/2;let m=t(d,new ke(.044,.044,.06,20),e.warhead,0,0,.05);m.rotation.x=Math.PI/2;let b=t(d,new Nt(.008,8,8),e.red,0,0,-.09);t(n,new pt(.03,.045,.1,2,.005),e.oliveDark,-.07,i+.03,-.08),t(n,new Le(.02,.02,.005),e.dark,-.07,i+.035,-.032),t(n,new Nt(.0025,8,8),e.red,-.07,i+.036,-.029),t(n,new Le(.03,.012,.03),e.oliveDark,-.05,i+.01,-.08),t(n,new pt(.034,.07,.14,2,.008),e.oliveDark,0,.03,.04);let g=t(n,new vn(.019,.0035,8,20,Math.PI),e.steel,0,-.03,.012);g.rotation.set(Math.PI,Math.PI/2,0),g.scale.set(1,1.15,1);let p=t(n,new Le(.006,.018,.005),e.steel,0,-.036,.012);p.rotation.x=.25;let x=t(n,new pt(.034,.115,.054,3,.01),e.grip,0,-.082,.07);x.rotation.x=.28,t(n,new pt(.03,.03,.06,2,.006),e.oliveDark,0,.045,-.3);let T=t(n,new pt(.03,.1,.035,2,.008),e.grip,0,-.01,-.3);T.rotation.x=.1;let v=new Be;n.add(v),this.rightHand(v),v.scale.x=-1,v.position.set(0,.072,-.37),this.rightHand(n);let y=this.makeFlash(n,0,i,-.66,.18);return{group:n,warhead:d,flash:y,rigBase:new R(.2,-.2,-.52),rot:new Yt(0,.06,-.02)}}buildSniper(){let e=this.m,t=(...v)=>this._add(...v),n=new Be,i=t(n,new pt(.042,.075,.42,3,.012),e.wood,0,-.012,.12);t(n,new pt(.045,.11,.16,3,.02),e.wood,0,-.035,.36),t(n,new pt(.05,.12,.02,2,.008),e.dark,0,-.035,.445);let s=t(n,new pt(.034,.1,.05,3,.012),e.wood,0,-.075,.075);s.rotation.x=.35,t(n,new pt(.04,.05,.36,3,.01),e.wood,0,-.004,-.2);let r=t(n,new ke(.019,.019,.2,18),e.steel,0,.03,-.01);r.rotation.x=Math.PI/2;let o=t(n,new ke(.011,.014,.62,16),e.steel,0,.032,-.42);o.rotation.x=Math.PI/2;let c=t(n,new ke(.017,.017,.06,14),e.steelLight,0,.032,-.75);c.rotation.x=Math.PI/2;for(let v of[-.74,-.76])t(n,new Le(.036,.006,.012),e.black,0,.032,v);t(n,new vn(.018,.0035,8,20,Math.PI),e.steel,0,-.03,.03).rotation.set(Math.PI,Math.PI/2,0);let h=new Be;h.position.set(.02,.035,.05),n.add(h);let u=t(h,new ke(.004,.004,.05,8),e.steelLight,.022,0,0);u.rotation.z=Math.PI/2,t(h,new Nt(.01,12,10),e.steelLight,.048,0,0);let d=.085,f=t(n,new ke(.016,.016,.24,20),e.dark,0,d,-.03);f.rotation.x=Math.PI/2;let m=t(n,new ke(.026,.017,.07,20),e.dark,0,d+.004,-.18);m.rotation.x=Math.PI/2;let b=t(n,new ke(.021,.016,.05,20),e.dark,0,d,.11);b.rotation.x=Math.PI/2;let g=t(n,new zn(.023,20),new Ce({color:662058,metalness:1,roughness:.05,emissive:666176,emissiveIntensity:.6}),0,d+.004,-.216);g.rotation.y=Math.PI,t(n,new ke(.009,.009,.03,12),e.dark,0,d+.022,-.03),t(n,new ke(.009,.009,.03,12),e.dark,.022,d,-.03).rotation.z=Math.PI/2;for(let v of[-.09,.04])t(n,new Le(.02,.04,.018),e.steel,0,.058,v);let p=t(n,new ke(.0165,.0165,.012,20,1,!0),e.orange,0,d,.07);p.rotation.x=Math.PI/2,this.rightHand(n),this.supportHand(n,0,-.02,-.26,.026);let x=this.makeFlash(n,0,.032,-.8,.16),T=new at;return T.position.set(.025,.035,0),n.add(T),{group:n,bolt:h,boltZ:.05,flash:x,eject:T,rigBase:new R(.15,-.14,-.42),rot:new Yt(0,.08,-.03)}}buildNadeHand(){let e=this.m,t=(...h)=>this._add(...h),n=new Be;this.camera.add(n);let i=new Be;n.add(i),t(i,new Nt(.032,18,14),e.nade,0,0,0).scale.set(1,1.18,1);for(let h=0;h<3;h++){let u=t(i,new vn(.0325,.0025,6,20),e.oliveDark,0,-.018+h*.018,0);u.rotation.x=Math.PI/2}t(i,new ke(.012,.014,.018,12),e.steelLight,0,.044,0);let r=t(i,new Le(.008,.055,.004),e.steelLight,.022,.03,0);r.rotation.z=-.25;let o=t(i,new vn(.011,.0018,6,16),e.steelLight,-.016,.052,0);o.rotation.y=Math.PI/2;let c=t(n,new pt(.06,.05,.075,3,.02),e.glove,.012,-.036,.018);for(let h=0;h<4;h++){let u=t(n,new wn(.0095,.03,4,10),e.glove,.034,-.01,-.03+h*.02);u.rotation.z=.5}t(n,new ke(.038,.05,.4,16),e.sleeve,.02,-.17,.12).rotation.set(.6,0,-.3),n.visible=!1,n.traverse(h=>{h.isMesh&&(h.castShadow=!1)}),this.nade={group:n,ball:i,t:-1,released:!1}}hasAmmo(e){let t=this.state[e];return!!this.owned[e]&&(t.ammo>0||t.reserve>0)}select(e){return!mt[e]||!this.owned[e]||e===this.current&&!this.pending||!this.hasAmmo(e)||this.nade.t>=0?!1:(this.pending=e,this.switchT<=0&&(this.switchT=.45),this.reloadT=0,this.sgReload=null,!0)}cycle(e){let t=Pn.indexOf(this.pending||this.current);for(let n=0;n<Pn.length;n++)if(t=(t+e+Pn.length)%Pn.length,this.hasAmmo(Pn[t]))return this.select(Pn[t]);return!1}selectLast(){return this.select(this.last)}fire(){let e=this.current,t=mt[e],n=this.st;if(this.busy||(e==="shotgun"&&this.sgReload&&n.ammo>0&&(this.sgReload=null),this.cooldown>0||this.reloadT>0||this.pumpT>0||e==="sniper"&&this.boltT>0||this.sgReload))return"wait";if(n.ammo<=0)return this.cooldown=.25,"empty";n.ammo--,this.cooldown=t.cooldown;let i=this.models[e];this.flashT=e==="rocket"?.08:.055,i.flash.visible=!0,i.flash.rotation.z=Math.random()*Math.PI;let s=.85+Math.random()*.4;i.flash.scale.set(s,s,s);let r=this.recoil;return r.vz+=t.kick[0],r.vrx+=t.kick[1],r.vry+=(Math.random()-.5)*6,e==="pistol"&&(this.slideT=.085,this.eject("pistol")),e==="shotgun"&&(n.ammo>0||n.reserve>0||!0)&&(this.pumpT=t.pump+.18),e==="rocket"&&(i.warhead.visible=!1),e==="sniper"&&n.ammo>0&&(this.boltT=t.bolt),"shot"}startReload(){let e=this.current,t=mt[e],n=this.st;return this.busy||this.reloading||this.pumpT>0||e==="sniper"&&this.boltT>0||n.ammo>=t.mag||n.reserve<=0?!1:e==="shotgun"?(this.sgReload={t:0,phase:"in"},"shotgun"):(this.reloadT=t.reload,e)}throwGrenade(){return this.grenades<=0||this.nade.t>=0||this.switchT>0?!1:(this.grenades--,this.nade.t=0,this.nade.released=!1,this.nade.group.visible=!0,this.nade.ball.visible=!0,this.reloadT=0,this.sgReload=null,!0)}eject(e){let t=this.models[e],n=this.shells.filter(r=>r.shot===(e==="shotgun"));e==="sniper"?n.forEach(r=>r.m.scale.set(1.5,2.6,1.5)):e==="pistol"&&n.forEach(r=>r.m.scale.set(1,1,1));let i=n.find(r=>r.life<=0)||n[0];i.m.visible=!0;let s=new R;t.eject.getWorldPosition(s),this.camera.worldToLocal(s),i.m.position.copy(s),i.v.set(.9+Math.random()*.4,.9+Math.random()*.5,.15+Math.random()*.2),i.w.set(Math.random()*30,Math.random()*30,20),i.life=.6}update(e,{moving:t=0,sprint:n=!1,bobPhase:i=0,lookDX:s=0,lookDY:r=0,light:o=1,time:c=0},l){let h=this.current,u=mt[h],d=this.st,f=this.models[h];this.cooldown=Math.max(0,this.cooldown-e);let m=e*(this.reloadSpeed||1),b=Math.min(2.4,.6+o*.8);if(this.hemi.intensity=.5*b,this.key.intensity=1.1*b,this.scene.environmentIntensity=.25+.15*b,this.flashT>0&&(this.flashT-=e,this.flashLight.intensity=h==="pistol"?3:6,this.flashLight.position.set(this.rig.position.x,this.rig.position.y+.05,this.rig.position.z-.2),this.flashT<=0)){for(let B of Pn)this.models[B].flash.visible=!1;this.flashLight.intensity=0}let g=0,p=0,x=0;if(h==="pistol"&&(this.slideT>0?(this.slideT-=e,f.slide.position.z=Math.sin(this.slideT/.085*Math.PI)*.03):d.ammo===0&&this.reloadT<=0?f.slide.position.z=.028:this.reloadT<=0&&(f.slide.position.z=0)),h==="shotgun"){if(this.pumpT>0){let B=this.pumpT;this.pumpT-=m;let G=u.pump,K=1-Math.max(0,this.pumpT)/G;if(this.pumpT<G){let $=Math.min(1,Math.max(0,K));f.pump.position.z=f.pumpZ+Math.sin($*Math.PI)*f.pumpTravel,x=Math.sin($*Math.PI)*.25,B>=G*.62&&this.pumpT<G*.62&&(this.eject("shotgun"),l.push("pumpBack")),B>=G*.2&&this.pumpT<G*.2&&l.push("pumpFwd")}this.pumpT<=0&&(this.pumpT=0,f.pump.position.z=f.pumpZ)}if(this.sgReload){let B=this.sgReload;B.t+=m,p=Math.min(1,B.t/.2)*.6,B.phase==="in"&&B.t>.25&&(B.phase="load",B.t=.25,B.next=.25+u.shellTime),B.phase==="load"&&(p=.6+Math.sin((B.t-.25)/u.shellTime*Math.PI*2)*.05,B.t>=B.next&&(d.ammo<u.mag&&d.reserve>0&&(d.ammo++,d.reserve--,l.push("shellIn")),B.next+=u.shellTime,(d.ammo>=u.mag||d.reserve<=0)&&(B.phase="out",B.out=0))),B.phase==="out"&&(B.out+=m,p=.6*(1-B.out/.25),B.out>=.25&&(this.sgReload=null))}}if(h==="sniper"&&this.boltT>0){let B=this.boltT,G=u.bolt;this.boltT-=m;let K=1-Math.max(0,this.boltT)/G,$=K<.25?K/.25:K<.75?1:1-(K-.75)/.25,ve=K<.25?0:K<.5?(K-.25)/.25:K<.75?1-(K-.5)/.25:0;f.bolt.rotation.z=$*1.2,f.bolt.position.z=f.boltZ+ve*.075,x=$*.12,B/G>.55&&this.boltT/G<=.55&&(this.eject("sniper"),l.push("boltBack")),B/G>.2&&this.boltT/G<=.2&&l.push("boltFwd"),this.boltT<=0&&(this.boltT=0,f.bolt.rotation.z=0,f.bolt.position.z=f.boltZ)}if(this.reloadT>0){this.reloadT-=m;let B=1-this.reloadT/u.reload;if(g=B<.2?B/.2:B>.85?(1-B)/.15:1,p=g,h==="pistol"){if(B>.18&&B<.62){let G=(B-.18)/.44;f.mag.position.y=-Math.min(1,G*2.5)*.25,f.mag.visible=G<.4||G>.75,G>.75&&(f.mag.position.y=-(1-(G-.75)/.25)*.08)}else f.mag.position.y=0,f.mag.visible=!0;B>.72&&B<.86&&(f.slide.position.z=Math.sin((B-.72)/.14*Math.PI)*.032)}if(h==="rocket"&&(f.warhead.visible=B>.45,B>.45&&(f.warhead.position.z=-.6-Math.max(0,.7-B)*.6)),this.reloadT<=0){this.reloadT=0;let G=Math.min(u.mag-d.ammo,d.reserve);d.ammo+=G,d.reserve!==1/0&&(d.reserve-=G),f.mag&&(f.mag.position.y=0,f.mag.visible=!0),f.warhead&&(f.warhead.visible=!0,f.warhead.position.z=-.6)}}h==="rocket"&&this.reloadT<=0&&(f.warhead.visible=d.ammo>0);let T=0;if(this.switchT>0){let B=this.switchT;this.switchT-=e,B>.22&&this.switchT<=.22&&this.pending&&(this.models[this.current].group.visible=!1,this.last=this.current,this.current=this.pending,this.pending=null,this.models[this.current].group.visible=!0,this.applyPose(this.current),this.pumpT=0,l.push("switched")),T=this.switchT>.22?1-(this.switchT-.22)/.23:Math.max(0,this.switchT)/.22,this.switchT<=0&&(this.switchT=0)}let v=0,y=this.nade;if(y.t>=0){y.t+=e;let B=y.t;v=B<.15?B/.15:B>.55?Math.max(0,1-(B-.55)/.2):1;let G=-.17,K=-.3,$=-.3,ve=0;if(B<.22){let pe=B/.22;K=-.3+pe*.2,$=-.3+pe*.12,ve=-pe*.6}else if(B<.36){let pe=(B-.22)/.14;K=-.1+pe*.07,$=-.18-pe*.32,G=-.17+pe*.07,ve=-.6+pe*1.4}else{let pe=Math.min(1,(B-.36)/.3);K=-.03-pe*.35,$=-.5+pe*.1,G=-.1,ve=.8}y.group.position.set(G,K,$),y.group.rotation.set(ve,.3,.2),!y.released&&B>=.31&&(y.released=!0,y.ball.visible=!1,l.push("nadeRelease")),B>.7&&(y.t=-1,y.group.visible=!1)}this.raise=Math.max(0,this.raise-e*2.2);let S=this.recoil,A=220,_=22;S.vz+=(-A*S.z-_*S.vz)*e,S.z+=S.vz*e,S.vrx+=(-A*S.rx-_*S.vrx)*e,S.rx+=S.vrx*e,S.vry+=(-A*S.ry-_*S.vry)*e,S.ry+=S.vry*e,this.kick.position.z=S.z*.03,this.kick.position.y=S.rx*9e-4,this.kick.rotation.x=S.rx*.012,this.kick.rotation.y=S.ry*.01,this.kick.rotation.z=x;let w=t*(n?1.6:1),C=Math.sin(i)*.009*w,P=-Math.abs(Math.cos(i))*.008*w,D=Math.sin(c*1.6)*.0018;this.swayX+=(-s*35e-5-this.swayX)*Math.min(1,e*8),this.swayY+=(r*35e-5-this.swayY)*Math.min(1,e*8),this.swayX=Math.max(-.03,Math.min(.03,this.swayX)),this.swayY=Math.max(-.03,Math.min(.03,this.swayY));let F=n&&t>.3?1:0;this._sd=(this._sd||0)+(F-(this._sd||0))*Math.min(1,e*7);let L=this.raise*this.raise,N=Math.max(T,v*.7),H=this.rigBase;this.rig.position.set(H.x+C+this.swayX+this._sd*.02,H.y+P+D+this.swayY-g*.06-L*.35-this._sd*.035-N*.3,H.z+g*.04);let X=h==="rocket"?-p*.45:p*.55;h==="rocket"&&(this.rig.position.y-=g*.08),this.rig.rotation.set(X+this._sd*-.25+L*.8+N*.5,this.swayX*2+this._sd*.5,p*.6+C*2+this._sd*.35);for(let B of this.shells)B.life<=0||(B.life-=e,B.v.y-=6*e,B.m.position.addScaledVector(B.v,e),B.m.rotation.x+=B.w.x*e,B.m.rotation.y+=B.w.y*e,B.m.rotation.z+=B.w.z*e,B.life<=0&&(B.m.visible=!1))}setAspect(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}};var il=class{constructor(e){this.game=e;let t=e.scene;this.ray=new hn,this._v=new R,this._n=new R,this._c=new se;let n=new Ce({color:5922634,metalness:.6,roughness:.35}),i=new ft({color:16760944,transparent:!0,blending:Jt,depthWrite:!1});this.rockets=[];for(let o=0;o<4;o++){let c=new Be,l=new be(new ke(.045,.045,.32,14),n);l.rotation.x=Math.PI/2,c.add(l);let h=new be(new mi(.045,.14,14),n);h.rotation.x=-Math.PI/2,h.position.z=-.23,c.add(h);for(let d=0;d<4;d++){let f=new be(new Le(.004,.07,.08),n);f.position.set(Math.cos(d*Math.PI/2)*.05,Math.sin(d*Math.PI/2)*.05,.13),f.rotation.z=d*Math.PI/2,c.add(f)}let u=new be(new Nt(.09,10,8),i);u.position.z=.2,u.scale.set(1,1,2.2),c.add(u),c.visible=!1,c.traverse(d=>{d.isMesh&&(d.castShadow=!1)}),t.add(c),this.rockets.push({g:c,ex:u,active:!1,vel:new R,life:0})}this.rocketLight=new sn(16751168,0,9,1.6),t.add(this.rocketLight);let s=new Ce({color:3819048,metalness:.3,roughness:.5}),r=new ft({color:16723984});this.nades=[];for(let o=0;o<4;o++){let c=new Be,l=new be(new Nt(.06,14,10),s);l.scale.set(1,1.2,1),l.castShadow=!0,c.add(l);let h=new be(new ke(.02,.025,.035,10),s);h.position.y=.08,c.add(h);let u=new be(new Nt(.012,8,6),r);u.position.y=.1,c.add(u),c.visible=!1,t.add(c),this.nades.push({g:c,led:u,active:!1,vel:new R,spin:new R,fuse:0,bounces:0,rest:!1})}this.timers=[]}reset(){for(let e of this.rockets)e.active=!1,e.g.visible=!1;for(let e of this.nades)e.active=!1,e.g.visible=!1;this.rocketLight.intensity=0,this.timers.length=0}later(e,t){this.timers.push({t:e,fn:t})}fireRocket(e,t){let n=this.rockets.find(i=>!i.active)||this.rockets[0];return n.active=!0,n.life=4,n.g.visible=!0,n.g.position.copy(e),n.vel.copy(t).multiplyScalar(30),n.g.lookAt(this._v.copy(e).sub(t)),n.smokeT=0,n}throwGrenade(e,t){let n=this.nades.find(i=>!i.active)||this.nades[0];return n.active=!0,n.fuse=2.1,n.rest=!1,n.bounces=0,n.g.visible=!0,n.g.position.copy(e),n.vel.copy(t),n.spin.set(Math.random()*12,Math.random()*12,Math.random()*12),n}update(e){let t=this.game,n=t.fx,i=t.level;for(let r=this.timers.length-1;r>=0;r--){let o=this.timers[r];o.t-=e,o.t<=0&&(this.timers.splice(r,1),o.fn())}let s=null;for(let r of this.rockets){if(!r.active)continue;r.life-=e;let o=r.g.position,c=r.vel.length()*e,l=this._v.copy(r.vel).normalize();this.ray.set(o,l),this.ray.far=c+.15;let h=this.ray.intersectObjects(i.colliders,!1)[0],u=t.zombies.raycast(o,l,c+.3);if(u&&(!h||u.t<h.distance)){this.detonateRocket(r,u.point,l.clone().negate());continue}if(h){let f=h.face?h.face.normal.clone().transformDirection(h.object.matrixWorld):l.clone().negate();h.object.userData.barrel&&t.damageBarrel(h.object.userData.barrel,999),this.detonateRocket(r,h.point.clone().addScaledVector(f,.2),f);continue}if(r.life<=0){this.detonateRocket(r,o.clone(),null);continue}o.addScaledVector(r.vel,e),r.ex.scale.set(1+Math.random()*.4,1+Math.random()*.4,2+Math.random()),r.smokeT-=e;let d=this._n.copy(o).addScaledVector(l,-.3);if(r.smokeT<=0){r.smokeT=.012;let f=.25+Math.random()*.15;this._c.setRGB(f,f,f*.95),n.smoke.emit(d,new R((Math.random()-.5)*.4,(Math.random()-.3)*.3,(Math.random()-.5)*.4),.18+Math.random()*.12,1.1+Math.random()*.8,this._c,.9),this._c.setRGB(2.6,1.2,.35),n.fire.emit(d,new R((Math.random()-.5)*.6,(Math.random()-.5)*.6,(Math.random()-.5)*.6).addScaledVector(l,-3),.14,.12,this._c,.6)}s=o}s?(this.rocketLight.position.copy(s),this.rocketLight.intensity=14+Math.random()*4):this.rocketLight.intensity=0;for(let r of this.nades){if(!r.active)continue;r.fuse-=e;let o=r.g.position;if(r.led.visible=Math.sin(r.fuse*(r.fuse<.8?40:14))>0,r.fuse<=0){r.active=!1,r.g.visible=!1,t.explode(o.clone().setY(Math.max(o.y,.25)),{radius:5.2,damage:220,source:"grenade"});continue}if(r.rest)continue;r.vel.y-=16*e;let c=r.vel.length()*e;if(c>1e-5){let l=this._v.copy(r.vel).normalize();this.ray.set(o,l),this.ray.far=c+.07;let h=this.ray.intersectObjects(i.colliders,!1)[0];if(h&&h.face){let u=h.face.normal.clone().transformDirection(h.object.matrixWorld);o.copy(h.point).addScaledVector(u,.07);let d=r.vel.dot(u);r.vel.addScaledVector(u,-1.45*d).multiplyScalar(.62),r.spin.multiplyScalar(.6),Math.abs(d)>1.2&&t.audio.grenadeBounce(o,Math.abs(d)/8),u.y>.6&&r.vel.length()<.8&&(r.rest=!0,r.vel.set(0,0,0))}else o.addScaledVector(r.vel,e)}for(let l of t.zombies.alive){let h=o.x-l.root.position.x,u=o.z-l.root.position.z;h*h+u*u<.25&&o.y<1.8&&(r.vel.x*=-.3,r.vel.z*=-.3)}o.y<.07&&(o.y=.07,Math.abs(r.vel.y)>1.2&&t.audio.grenadeBounce(o,Math.abs(r.vel.y)/8),r.vel.y*=-.38,r.vel.x*=.7,r.vel.z*=.7,r.vel.length()<.6&&(r.rest=!0)),r.g.rotation.x+=r.spin.x*e,r.g.rotation.y+=r.spin.y*e,r.g.rotation.z+=r.spin.z*e}}detonateRocket(e,t,n){e.active=!1,e.g.visible=!1,this.game.explode(t,{radius:5.8,damage:270,source:"rocket",normal:n})}};var sl=class{constructor(){this.ctx=null,this.enabled=!0,this.ready=!1}init(){if(this.ctx)return;let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=this.enabled?.9:0;let n=t.createDynamicsCompressor();n.threshold.value=-14,n.knee.value=10,n.ratio.value=4,n.attack.value=.003,n.release.value=.2,this.master.connect(n).connect(t.destination),this.reverb=t.createConvolver(),this.reverb.buffer=this._impulse(2.6,2.4),this.reverbSend=t.createGain(),this.reverbSend.gain.value=.55,this.duck=t.createGain(),this.duck.connect(this.master),this.reverbSend.connect(this.reverb).connect(this.duck),this.dry=t.createGain(),this.dry.connect(this.duck),this.noiseBuf=this._noise(2),this.brownBuf=this._brown(4),this.ready=!0}resume(){this.ctx||this.init(),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setEnabled(e){this.enabled=e,this.master&&this.master.gain.setTargetAtTime(e?.9:0,this.ctx.currentTime,.05)}get t(){return this.ctx.currentTime}_noise(e){let t=this.ctx,n=Math.floor(t.sampleRate*e),i=t.createBuffer(1,n,t.sampleRate),s=i.getChannelData(0);for(let r=0;r<n;r++)s[r]=Math.random()*2-1;return i}_brown(e){let t=this.ctx,n=Math.floor(t.sampleRate*e),i=t.createBuffer(1,n,t.sampleRate),s=i.getChannelData(0),r=0;for(let o=0;o<n;o++)r=(r+.02*(Math.random()*2-1))/1.02,s[o]=r*3.5;return i}_impulse(e,t){let n=this.ctx,i=Math.floor(n.sampleRate*e),s=n.createBuffer(2,i,n.sampleRate);for(let r=0;r<2;r++){let o=s.getChannelData(r);for(let c=0;c<i;c++){let l=c/i,h=c<n.sampleRate*.08&&Math.random()<.004?(Math.random()*2-1)*.8:0;o[c]=((Math.random()*2-1)*Math.pow(1-l,t)+h)*(l<.002?l/.002:1)}}return s}_out(e,t=.3,n=1){let i=this.ctx,s=i.createGain();s.gain.value=n;let r=s;if(e){let o=i.createPanner();o.panningModel="HRTF",o.distanceModel="inverse",o.refDistance=2.5,o.maxDistance=60,o.rolloffFactor=1.3,o.positionX.value=e.x,o.positionY.value=e.y,o.positionZ.value=e.z,s.connect(o),r=o}if(r.connect(this.dry),t>0){let o=i.createGain();o.gain.value=t,r.connect(o).connect(this.reverbSend)}return s}setListener(e,t,n){if(!this.ready)return;let i=this.ctx.listener,s=this.t;i.positionX?(i.positionX.setValueAtTime(e.x,s),i.positionY.setValueAtTime(e.y,s),i.positionZ.setValueAtTime(e.z,s),i.forwardX.setValueAtTime(t.x,s),i.forwardY.setValueAtTime(t.y,s),i.forwardZ.setValueAtTime(t.z,s),i.upX.setValueAtTime(n.x,s),i.upY.setValueAtTime(n.y,s),i.upZ.setValueAtTime(n.z,s)):(i.setPosition(e.x,e.y,e.z),i.setOrientation(t.x,t.y,t.z,n.x,n.y,n.z))}_noiseSrc(e){let t=this.ctx.createBufferSource();return t.buffer=e||this.noiseBuf,t.loopStart=0,t.loop=!0,t}_env(e,t,n,i,s,r=1e-4){e.cancelScheduledValues(t),e.setValueAtTime(1e-4,t),e.exponentialRampToValueAtTime(i,t+n),e.exponentialRampToValueAtTime(r,t+n+s)}pistol(){if(!this.ready)return;let e=this.ctx,t=this.t,n=this._out(null,.5,1),i=this._noiseSrc();i.loopStart=Math.random();let s=e.createBiquadFilter();s.type="highpass",s.frequency.value=900;let r=e.createGain();this._env(r.gain,t,.001,1.1,.09),i.connect(s).connect(r).connect(n),i.start(t,Math.random()),i.stop(t+.15);let o=e.createOscillator();o.type="sine",o.frequency.setValueAtTime(190,t),o.frequency.exponentialRampToValueAtTime(42,t+.16);let c=e.createGain();this._env(c.gain,t,.002,1.3,.18),o.connect(c).connect(n),o.start(t),o.stop(t+.22);let l=this._noiseSrc(),h=e.createBiquadFilter();h.type="bandpass",h.frequency.value=2400,h.Q.value=.8;let u=e.createGain();this._env(u.gain,t,5e-4,.9,.035),l.connect(h).connect(u).connect(n),l.start(t,Math.random()),l.stop(t+.06),this._click(t+.045,3200,.18)}_click(e,t=2500,n=.3,i=null){let s=this.ctx,r=this._out(i,.08,1),o=this._noiseSrc(),c=s.createBiquadFilter();c.type="bandpass",c.frequency.value=t,c.Q.value=6;let l=s.createGain();this._env(l.gain,e,5e-4,n,.03),o.connect(c).connect(l).connect(r),o.start(e,Math.random()),o.stop(e+.05)}dryFire(){this.ready&&this._click(this.t,1800,.35)}reload(e=1.2){if(!this.ready)return;let t=this.t;this._click(t+.12,1500,.35),this._click(t+.16,900,.2),this._click(t+e*.62,1300,.45),this._click(t+e*.66,2600,.25),this._click(t+e*.86,3400,.4),this._click(t+e*.89,2200,.3)}shell(e){if(!this.ready)return;let t=this.t+.35+Math.random()*.1;for(let n=0;n<3;n++)this._ting(t+n*(.07-n*.015),5200+Math.random()*900,.08/(n+1),e)}_ting(e,t,n,i){let s=this.ctx,r=this._out(i,.15,1),o=s.createOscillator();o.type="sine",o.frequency.value=t;let c=s.createOscillator();c.type="sine",c.frequency.value=t*1.51;let l=s.createGain();this._env(l.gain,e,.001,n,.12),o.connect(l),c.connect(l),l.connect(r),o.start(e),c.start(e),o.stop(e+.15),c.stop(e+.15)}impactWall(e){if(!this.ready)return;let t=this.ctx,n=this.t,i=this._out(e,.25,1),s=this._noiseSrc(),r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=1800+Math.random()*1500,r.Q.value=1.5;let o=t.createGain();this._env(o.gain,n,.001,.5,.06),s.connect(r).connect(o).connect(i),s.start(n,Math.random()),s.stop(n+.09),Math.random()<.35&&this._ricochet(e)}_ricochet(e){let t=this.ctx,n=this.t+.01,i=this._out(e,.3,1),s=t.createOscillator();s.type="sine",s.frequency.setValueAtTime(3400+Math.random()*800,n),s.frequency.exponentialRampToValueAtTime(1300,n+.28);let r=t.createGain();this._env(r.gain,n,.005,.07,.3),s.connect(r).connect(i),s.start(n),s.stop(n+.34)}fleshHit(e,t=!1){if(!this.ready)return;let n=this.ctx,i=this.t,s=this._out(e,.15,1),r=this._noiseSrc(),o=n.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(2400,i),o.frequency.exponentialRampToValueAtTime(300,i+.12);let c=n.createGain();this._env(c.gain,i,.002,t?1.1:.75,t?.22:.13),r.connect(o).connect(c).connect(s),r.start(i,Math.random()),r.stop(i+.3);let l=n.createOscillator();l.type="sine",l.frequency.setValueAtTime(120,i),l.frequency.exponentialRampToValueAtTime(45,i+.12);let h=n.createGain();this._env(h.gain,i,.002,t?.9:.5,.14),l.connect(h).connect(s),l.start(i),l.stop(i+.18);let u=this._noiseSrc(),d=n.createBiquadFilter();d.type="bandpass",d.frequency.value=3500,d.Q.value=.7;let f=n.createGain();this._env(f.gain,i+.02,.01,t?.35:.18,t?.35:.18),u.connect(d).connect(f).connect(s),u.start(i,Math.random()),u.stop(i+.45)}glitchHit(e,t=!1){if(!this.ready)return;let n=this.ctx,i=this.t,s=this._out(e,.15,1),r=n.createOscillator();r.type="square";let o=t?6:4;for(let f=0;f<o;f++)r.frequency.setValueAtTime(300+Math.random()*1400,i+f*.018);let c=n.createGain();this._env(c.gain,i,.002,t?.32:.22,o*.02);let l=n.createBiquadFilter();l.type="lowpass",l.frequency.value=3200,r.connect(l).connect(c).connect(s),r.start(i),r.stop(i+o*.02+.05);let h=this._noiseSrc(),u=n.createBiquadFilter();u.type="bandpass",u.frequency.value=900,u.Q.value=1.2;let d=n.createGain();this._env(d.gain,i,.002,t?.9:.6,.08),h.connect(u).connect(d).connect(s),h.start(i,Math.random()),h.stop(i+.12)}derez(e,t=!1){if(!this.ready)return;let n=this.ctx,i=this.t,s=this._out(e,.35,1),r=n.createOscillator();r.type="square";let o=t?520:880;[1,.75,.6,.5,.375,.3,.25].forEach((m,b)=>r.frequency.setValueAtTime(o*m*(1+(Math.random()-.5)*.04),i+b*.035));let l=n.createGain();this._env(l.gain,i,.003,t?.3:.22,.28);let h=n.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(5e3,i),h.frequency.exponentialRampToValueAtTime(600,i+.3),r.connect(h).connect(l).connect(s),r.start(i),r.stop(i+.32);let u=this._noiseSrc(),d=n.createBiquadFilter();d.type="highpass",d.frequency.setValueAtTime(6e3,i),d.frequency.exponentialRampToValueAtTime(800,i+.35);let f=n.createGain();this._env(f.gain,i,.01,t?.5:.35,.35),u.connect(d).connect(f).connect(s),u.start(i,Math.random()),u.stop(i+.4)}fuse(e){if(!this.ready)return;let t=this.ctx,n=this.t,i=this._out(e,.2,1);for(let s=0;s<6;s++){let r=n+s*.11-s*s*.004,o=t.createOscillator();o.type="square",o.frequency.value=900+s*180;let c=t.createGain();this._env(c.gain,r,.002,.25,.05),o.connect(c).connect(i),o.start(r),o.stop(r+.07)}}sniper(){if(!this.ready)return;let e=this.ctx,t=this.t,n=this._out(null,.9,1),i=this._noiseSrc(),s=e.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(9e3,t),s.frequency.exponentialRampToValueAtTime(500,t+.35);let r=e.createGain();this._env(r.gain,t,.001,1.4,.4),i.connect(s).connect(r).connect(n),i.start(t,Math.random()),i.stop(t+.5);let o=e.createOscillator();o.type="sine",o.frequency.setValueAtTime(140,t),o.frequency.exponentialRampToValueAtTime(38,t+.3);let c=e.createGain();this._env(c.gain,t,.002,1.2,.35),o.connect(c).connect(n),o.start(t),o.stop(t+.4);let l=this._noiseSrc(),h=e.createBiquadFilter();h.type="lowpass",h.frequency.value=900;let u=e.createGain();this._env(u.gain,t+.28,.02,.22,.9),l.connect(h).connect(u).connect(n),l.start(t+.28,Math.random()),l.stop(t+1.3)}bolt(e=!0){if(!this.ready)return;let t=this.t;this._click(t,e?1500:1900,.4),this._click(t+.05,e?900:2400,.35)}mark(){if(!this.ready)return;let e=this.ctx,t=this.t,n=this._out(null,.1,1);[1320,1760].forEach((i,s)=>{let r=e.createOscillator();r.type="sine",r.frequency.value=i;let o=e.createGain();this._env(o.gain,t+s*.07,.003,.18,.12),r.connect(o).connect(n),r.start(t+s*.07),r.stop(t+s*.07+.16)})}zoom(e=!0){this.ready&&this._click(this.t,e?700:500,.18)}whoosh(){if(!this.ready)return;let e=this.ctx,t=this.t,n=this._out(null,.4,1),i=this._noiseSrc(),s=e.createBiquadFilter();s.type="bandpass",s.Q.value=.8,s.frequency.setValueAtTime(300,t),s.frequency.exponentialRampToValueAtTime(2500,t+.6);let r=e.createGain();this._env(r.gain,t,.3,.6,.6),i.connect(s).connect(r).connect(n),i.start(t,Math.random()),i.stop(t+1)}upgrade(){if(!this.ready)return;let e=this.ctx,t=this.t,n=this._out(null,.3,1);[523,659,784,1047].forEach((i,s)=>{let r=e.createOscillator();r.type="triangle",r.frequency.value=i;let o=e.createGain();this._env(o.gain,t+s*.06,.005,.28,.35),r.connect(o).connect(n),r.start(t+s*.06),r.stop(t+s*.06+.42)})}headshot(e){if(!this.ready)return;this.fleshHit(e,!0);let t=this.ctx,n=this.t,i=this._out(e,.2,1);for(let o=0;o<4;o++)this._click(n+o*.012+Math.random()*.01,600+Math.random()*900,.5,e);let s=t.createOscillator();s.type="triangle",s.frequency.setValueAtTime(90,n),s.frequency.exponentialRampToValueAtTime(30,n+.3);let r=t.createGain();this._env(r.gain,n,.002,.8,.3),s.connect(r).connect(i),s.start(n),s.stop(n+.35)}_voice(e,{f0:t=90,dur:n=1.2,formants:i=[520,1400,2500],vol:s=.5,bend:r=-.3,rough:o=.5,rev:c=.3,at:l=0}={}){let h=this.ctx,u=this.t+l,d=this._out(e,c,1),f=h.createOscillator();f.type="sawtooth",f.frequency.setValueAtTime(t*(1+Math.random()*.1),u),f.frequency.linearRampToValueAtTime(t*(1+r),u+n);let m=h.createOscillator();m.frequency.value=5+Math.random()*18;let b=h.createGain();b.gain.value=t*.12*o,m.connect(b).connect(f.frequency);let g=h.createGain();g.gain.value=1;let p=h.createOscillator();p.frequency.value=22+Math.random()*20;let x=h.createGain();x.gain.value=.35*o,p.connect(x).connect(g.gain);let T=h.createGain();T.gain.setValueAtTime(1e-4,u),T.gain.exponentialRampToValueAtTime(s,u+n*.2),T.gain.setValueAtTime(s,u+n*.6),T.gain.exponentialRampToValueAtTime(1e-4,u+n);let v=h.createGain();v.gain.value=1,i.forEach((w,C)=>{let P=h.createBiquadFilter();P.type="bandpass",P.frequency.setValueAtTime(w,u),P.frequency.linearRampToValueAtTime(w*(.8+Math.random()*.4),u+n),P.Q.value=5+C*2;let D=h.createGain();D.gain.value=[1,.6,.25][C]||.2,f.connect(P).connect(D).connect(v)});let y=this._noiseSrc(),S=h.createBiquadFilter();S.type="bandpass",S.frequency.value=1100,S.Q.value=1;let A=h.createGain();A.gain.value=.25*o,y.connect(S).connect(A).connect(v),v.connect(g).connect(T).connect(d),f.start(u),m.start(u),p.start(u),y.start(u,Math.random());let _=u+n+.05;f.stop(_),m.stop(_),p.stop(_),y.stop(_)}groan(e){this.ready&&this._voice(e,{f0:70+Math.random()*45,dur:.9+Math.random()*1.1,formants:[400+Math.random()*250,1e3+Math.random()*500,2300],vol:.55,bend:-.25+Math.random()*.2,rough:.6+Math.random()*.4})}roar(e){this.ready&&(this._voice(e,{f0:120,dur:1.4,formants:[700,1500,2700],vol:.8,bend:-.45,rough:1,rev:.45}),this._voice(e,{f0:82,dur:1.5,formants:[500,1200,2400],vol:.5,bend:-.4,rough:1,rev:.45}))}attackGrunt(e){this.ready&&this._voice(e,{f0:110+Math.random()*30,dur:.45,formants:[650,1300,2500],vol:.7,bend:-.35,rough:.9})}death(e){this.ready&&this._voice(e,{f0:95,dur:1.3,formants:[480,1100,2400],vol:.65,bend:-.6,rough:.8,rev:.4})}thud(e){if(!this.ready)return;let t=this.ctx,n=this.t,i=this._out(e,.25,1),s=t.createOscillator();s.type="sine",s.frequency.setValueAtTime(85,n),s.frequency.exponentialRampToValueAtTime(35,n+.25);let r=t.createGain();this._env(r.gain,n,.003,.9,.3),s.connect(r).connect(i),s.start(n),s.stop(n+.35);let o=this._noiseSrc(),c=t.createBiquadFilter();c.type="lowpass",c.frequency.value=500;let l=t.createGain();this._env(l.gain,n,.002,.6,.15),o.connect(c).connect(l).connect(i),o.start(n,Math.random()),o.stop(n+.2)}hurt(){if(!this.ready)return;this._voice(null,{f0:135+Math.random()*20,dur:.32,formants:[700,1200,2600],vol:.55,bend:-.25,rough:.35,rev:.1});let e=this.ctx,t=this.t,n=this._out(null,.05,1),i=this._noiseSrc(),s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=700;let r=e.createGain();this._env(r.gain,t,.002,.8,.12),i.connect(s).connect(r).connect(n),i.start(t,Math.random()),i.stop(t+.16)}step(e=.12){if(!this.ready)return;let t=this.ctx,n=this.t,i=this._out(null,.12,1),s=this._noiseSrc(this.brownBuf),r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=380+Math.random()*200;let o=t.createGain();this._env(o.gain,n,.004,e*3,.09),s.connect(r).connect(o).connect(i),s.start(n,Math.random()*3),s.stop(n+.12),this._click(n+.005,4200+Math.random()*1500,e*.25)}pickup(){if(!this.ready)return;let e=this.ctx,t=this.t,n=this._out(null,.2,1);[660,990,1320].forEach((i,s)=>{let r=e.createOscillator();r.type="triangle",r.frequency.value=i;let o=e.createGain();this._env(o.gain,t+s*.06,.005,.25,.18),r.connect(o).connect(n),r.start(t+s*.06),r.stop(t+s*.06+.25)})}hitmarker(){this.ready&&this._click(this.t,5e3,.12)}waveHorn(){if(!this.ready)return;let e=this.ctx,t=this.t,n=this._out(null,.7,1);[55,55.6,82.5].forEach(i=>{let s=e.createOscillator();s.type="sawtooth",s.frequency.value=i;let r=e.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(150,t),r.frequency.linearRampToValueAtTime(900,t+.8),r.frequency.linearRampToValueAtTime(200,t+2.2);let o=e.createGain();o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(.32,t+.3),o.gain.setValueAtTime(.32,t+1.4),o.gain.exponentialRampToValueAtTime(1e-4,t+2.4),s.connect(r).connect(o).connect(n),s.start(t),s.stop(t+2.5)}),this.thud(null)}waveClear(){if(!this.ready)return;let e=this.ctx,t=this.t,n=this._out(null,.5,1);[196,247,294,392].forEach((i,s)=>{let r=e.createOscillator();r.type="square",r.frequency.value=i;let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=1400;let c=e.createGain();this._env(c.gain,t+s*.09,.01,.09,.5),r.connect(o).connect(c).connect(n),r.start(t+s*.09),r.stop(t+s*.09+.6)})}startAmbience(){if(!this.ready||this.amb)return;let e=this.ctx,t=e.createGain();t.gain.value=1e-4,t.gain.setTargetAtTime(.22,this.t,1.5);let n=this._noiseSrc(this.brownBuf),i=e.createBiquadFilter();i.type="lowpass",i.frequency.value=160,n.connect(i).connect(t);let s=e.createOscillator();s.type="sine",s.frequency.value=50;let r=e.createGain();r.gain.value=.18,s.connect(r).connect(t);let o=e.createOscillator();o.type="sine",o.frequency.value=100.4;let c=e.createGain();c.gain.value=.06,o.connect(c).connect(t);let l=this._out(null,.4,1);t.connect(l),n.start(),s.start(),o.start(),this.amb={g:t,n,hum:s,hum2:o},this._ambTimer=setInterval(()=>this._distant(),5200)}stopAmbience(){if(!this.amb)return;let{g:e,n:t,hum:n,hum2:i}=this.amb;e.gain.setTargetAtTime(1e-4,this.t,.3);let s=this.t+1.5;t.stop(s),n.stop(s),i.stop(s),clearInterval(this._ambTimer),this.amb=null}_distant(){if(!this.ready||Math.random()<.4)return;let e=this.ctx,t=this.t,n={x:(Math.random()-.5)*80,y:3,z:(Math.random()-.5)*80},i=this._out(n,.9,.5),s=e.createOscillator();s.type="square",s.frequency.value=120+Math.random()*200;let r=e.createOscillator();r.type="square",r.frequency.value=s.frequency.value*2.71;let o=e.createBiquadFilter();o.type="bandpass",o.frequency.value=900,o.Q.value=3;let c=e.createGain();this._env(c.gain,t,.002,.18,.9),s.connect(o),r.connect(o),o.connect(c).connect(i),s.start(t),r.start(t),s.stop(t+1),r.stop(t+1)}shotgun(){if(!this.ready)return;let e=this.ctx,t=this.t,n=this._out(null,.65,1),i=this._noiseSrc(),s=e.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(6e3,t),s.frequency.exponentialRampToValueAtTime(400,t+.3);let r=e.createGain();this._env(r.gain,t,.001,1.5,.32),i.connect(s).connect(r).connect(n),i.start(t,Math.random()),i.stop(t+.4);let o=e.createOscillator();o.type="sine",o.frequency.setValueAtTime(120,t),o.frequency.exponentialRampToValueAtTime(32,t+.3);let c=e.createGain();this._env(c.gain,t,.002,1.8,.32),o.connect(c).connect(n),o.start(t),o.stop(t+.36);let l=this._noiseSrc(),h=e.createBiquadFilter();h.type="bandpass",h.frequency.value=1800,h.Q.value=.6;let u=e.createGain();this._env(u.gain,t,5e-4,1.1,.06),l.connect(h).connect(u).connect(n),l.start(t,Math.random()),l.stop(t+.08)}pump(e=!0){if(!this.ready)return;let t=this.ctx,n=this.t,i=this._out(null,.15,1),s=this._noiseSrc(),r=t.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(e?2200:1500,n),r.frequency.linearRampToValueAtTime(e?1300:2400,n+.09),r.Q.value=2;let o=t.createGain();this._env(o.gain,n,.01,.35,.08),s.connect(r).connect(o).connect(i),s.start(n,Math.random()),s.stop(n+.12),this._click(n+.09,e?1200:900,.6),this._click(n+.1,3e3,.3)}shellIn(){if(!this.ready)return;let e=this.t;this._click(e,1700,.35),this._click(e+.05,900,.3)}rocketFire(){if(!this.ready)return;let e=this.ctx,t=this.t,n=this._out(null,.6,1),i=this._noiseSrc(),s=e.createBiquadFilter();s.type="bandpass",s.frequency.setValueAtTime(400,t),s.frequency.exponentialRampToValueAtTime(2600,t+.5),s.Q.value=.7;let r=e.createGain();r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(1.2,t+.03),r.gain.exponentialRampToValueAtTime(1e-4,t+.9),i.connect(s).connect(r).connect(n),i.start(t,Math.random()),i.stop(t+1);let o=e.createOscillator();o.type="sine",o.frequency.setValueAtTime(90,t),o.frequency.exponentialRampToValueAtTime(40,t+.25);let c=e.createGain();this._env(c.gain,t,.003,1.4,.3),o.connect(c).connect(n),o.start(t),o.stop(t+.35)}rocketLoad(){if(!this.ready)return;let e=this.t;this._click(e+.5,700,.5),this._click(e+.56,1400,.35),this._click(e+1.2,2200,.4)}explosion(e,t=1){if(!this.ready)return;let n=this.ctx,i=this.t,s=this._out(e,.9,1.6*t),r=this._noiseSrc(this.brownBuf),o=n.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(3e3,i),o.frequency.exponentialRampToValueAtTime(180,i+1.2);let c=n.createGain();this._env(c.gain,i,.004,2.2,1.6),r.connect(o).connect(c).connect(s),r.start(i,Math.random()*2),r.stop(i+1.8);let l=this._noiseSrc(),h=n.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(8e3,i),h.frequency.exponentialRampToValueAtTime(600,i+.4);let u=n.createGain();this._env(u.gain,i,.001,1.4,.45),l.connect(h).connect(u).connect(s),l.start(i,Math.random()),l.stop(i+.5);let d=n.createOscillator();d.type="sine",d.frequency.setValueAtTime(70,i),d.frequency.exponentialRampToValueAtTime(22,i+.9);let f=n.createGain();this._env(f.gain,i,.005,2.4,1),d.connect(f).connect(s),d.start(i),d.stop(i+1.1);for(let m=0;m<6;m++)this._click(i+.25+Math.random()*.8,600+Math.random()*2500,.15,e)}grenadeBounce(e,t=1){if(!this.ready)return;let n=this.ctx,i=this.t,s=this._out(e,.2,Math.min(1,t)),r=n.createOscillator();r.type="triangle",r.frequency.value=520+Math.random()*200;let o=n.createGain();this._env(o.gain,i,.001,.35,.09),r.connect(o).connect(s),r.start(i),r.stop(i+.12),this._click(i,1800,.3,e)}pin(){if(!this.ready)return;let e=this.t;this._ting(e,3800,.08,null),this._click(e+.02,2600,.3),this._click(e+.22,1400,.25)}throwWhoosh(){if(!this.ready)return;let e=this.ctx,t=this.t,n=this._out(null,.1,1),i=this._noiseSrc(),s=e.createBiquadFilter();s.type="bandpass",s.frequency.setValueAtTime(500,t),s.frequency.exponentialRampToValueAtTime(1800,t+.15),s.Q.value=1.2;let r=e.createGain();this._env(r.gain,t,.04,.3,.15),i.connect(s).connect(r).connect(n),i.start(t,Math.random()),i.stop(t+.25)}switchWeapon(){if(!this.ready)return;let e=this.t;this._click(e,1100,.3),this._click(e+.07,2400,.25)}jump(){this.ready&&this.step(.1)}land(e=1){if(!this.ready)return;let t=this.ctx,n=this.t,i=this._out(null,.15,1),s=this._noiseSrc(this.brownBuf),r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=300;let o=t.createGain();this._env(o.gain,n,.003,.5*Math.min(1.5,e),.14),s.connect(r).connect(o).connect(i),s.start(n,Math.random()*3),s.stop(n+.2)}ammo(){if(!this.ready)return;let e=this.t;this._click(e,1500,.4),this._click(e+.06,2600,.35),this._click(e+.12,1200,.3)}async loadVoices(e,t){!this.ready||this.voices||(this.voices={},await Promise.all(t.map(async n=>{try{let i=await fetch(`${e}${n}.mp3`);if(!i.ok)return;let s=await i.arrayBuffer();this.voices[n]=await new Promise((r,o)=>this.ctx.decodeAudioData(s,r,o))}catch{}})))}voice(e){if(!this.ready||!this.voices||!this.voices[e])return!1;let t=this.ctx,n=this.t;if(this.voiceSrc)try{this.voiceSrc.stop()}catch{}let i=t.createBufferSource();i.buffer=this.voices[e];let s=t.createBiquadFilter();s.type="lowshelf",s.frequency.value=180,s.gain.value=3;let r=t.createGain();return r.gain.value=1.25,i.connect(s).connect(r).connect(this.master),i.start(n+.05),this.voiceSrc=i,this.duck&&(this.duck.gain.cancelScheduledValues(n),this.duck.gain.setTargetAtTime(.55,n,.05),this.duck.gain.setTargetAtTime(1,n+i.buffer.duration,.25)),!0}};var fu={kill:[["k01","Feierabend.","Feierabend."],["k02","N\xE4chster!","N\xE4chster!"],["k03","404 \u2013 Zombie nicht gefunden.","Vier null vier. Zombie nicht gefunden."],["k04","Ab in den Papierkorb.","Ab in den Papierkorb."],["k05","Deine Sitzung ist abgelaufen.","Deine Sitzung ist abgelaufen."],["k06","Weiterleitung ins Jenseits.","Weiterleitung ins Jenseits."],["k07","Gel\xF6scht. Ohne Backup.","Gel\xF6scht. Ohne Backup."],["k08","Und tsch\xFCss.","Und tsch\xFCss."],["k09","Abgemeldet.","Abgemeldet."],["k10","Absprungrate: hundert Prozent.","Absprungrate: hundert Prozent."],["k11","Keine R\xFCckerstattung.","Keine R\xFCckerstattung."],["k12","Der N\xE4chste bitte.","Der N\xE4chste, bitte."],["k13","Zwischenspeicher geleert.","Zwischenspeicher geleert."],["k14","Seite nicht gefunden \u2013 du auch nicht mehr.","Seite nicht gefunden. Du auch nicht mehr."]],head:[["h01","Kopfsache.","Kopfsache."],["h02","Volltreffer im Oberst\xFCbchen.","Volltreffer im Oberst\xFCbchen."],["h03","Oberst\xFCbchen ger\xE4umt.","Oberst\xFCbchen ger\xE4umt."],["h04","Kopf hoch! \u2026 ach nee.","Kopf hoch! ... Ach, nee."],["h05","Da war wohl nicht viel drin.","Da war wohl nicht viel drin."]],gib:[["g01","In Einzelteilen geliefert.","In Einzelteilen geliefert."],["g02","Das kriegt keiner mehr zusammen.","Das kriegt keiner mehr zusammen."],["g03","Konfetti!","Konfetti!"],["g04","Bitte nicht wischen.","Bitte nicht wischen."],["g05","Das gibt \xC4rger mit der Putzkolonne.","Das gibt \xC4rger mit der Putzkolonne."]],shotgun:[["s01","Hallo, Nachbar.","Hallo, Nachbar."],["s02","Aus n\xE4chster N\xE4he.","Aus n\xE4chster N\xE4he."],["s03","Schrot und Korn.","Schrot und Korn."]],multi:[["m01","Doppelt h\xE4lt besser!","Doppelt h\xE4lt besser!"],["m02","Zwei auf einen Streich.","Zwei auf einen Streich!"]],streak:[["r01","Das ist ein Massaker!","Das ist ein Massaker!"],["r02","Ich bin warmgelaufen.","Ich bin warmgelaufen."],["r03","Wer will noch mal?","Wer will noch mal?"]],hurt:[["u01","Das gibt Abz\xFCge in der B-Note.","Das gibt Abz\xFCge in der B-Note."],["u02","Autsch. Okay. Jetzt bin ich sauer.","Autsch. Okay. Jetzt bin ich sauer."]],wave:[["w01","Da kommen noch mehr.","Da kommen noch mehr."],["w02","Es wird voller.","Es wird voller."],["w03","Pause vorbei.","Pause vorbei."]],start:[["a01","Sie kommen \u2026","Sie kommen."]],barrel:[["b01","Vorsicht, Fass!","Vorsicht, Fass!"],["b02","Das war mal ein Fass.","Das war mal ein Fass."]],nade:[["n01","Fang!","Fang!"],["n02","Kleines Geschenk!","Kleines Geschenk!"],["n03","Granate!","Granate!"]],rocket:[["x01","Post f\xFCr dich.","Post f\xFCr dich."],["x02","Express-Lieferung.","Express-Lieferung."]],death:[["d01","Das \u2026 war \u2026 unprofessionell.","Das ... war ... unprofessionell."],["d02","Ich komme wieder. Als Zombie.","Ich komme wieder. Als Zombie."]],clear:[["c01","Welle \xFCberstanden. Wer ist der N\xE4chste?","Welle \xFCberstanden. Wer ist der N\xE4chste?"],["c02","Durchatmen. Nachladen. Weiter.","Durchatmen. Nachladen. Weiter."]]};var rl=class{constructor(e){this.g=e,this.move={x:0,y:0,mag:0},this.sprint=!1,this.hold=!1,this.stickId=null,this.lookIds=new Map,this.fireId=null,this.build(),this.bind()}build(){let e=this.layer=document.createElement("div");e.id="touch",e.innerHTML=`
      <div class="t-stick" id="t-stick"><i></i></div>
      <div class="t-stickhint"><span>laufen</span></div>
      <div class="t-lookhint"><span>wischen = umsehen</span></div>`,document.body.insertBefore(e,document.getElementById("hud"));let t=this.ctl=document.createElement("div");t.id="tctl",t.innerHTML=`
      <button type="button" class="tb t-fire" data-t="fire" aria-label="Feuer"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 2v6M12 16v6M2 12h6M16 12h6" stroke="currentColor" stroke-width="2"/></svg></button>
      <button type="button" class="tb t-jump" data-t="jump" aria-label="Springen"><svg viewBox="0 0 24 24"><path d="M5 14l7-7 7 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 19h8" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg></button>
      <button type="button" class="tb t-nade" data-t="nade" aria-label="Granate"><svg viewBox="0 0 24 24"><circle cx="11" cy="14" r="6.5" fill="currentColor"/><path d="M9 6.5h5v2.5H9z" fill="currentColor"/><path d="M14 6.5c2-2.5 4.5-2 5.5 0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg><i id="t-nades">3</i></button>
      <button type="button" class="tb t-reload" data-t="reload" aria-label="Nachladen"><svg viewBox="0 0 24 24"><path d="M19 12a7 7 0 1 1-2.05-4.95" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path d="M19 4v4.5h-4.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
      <button type="button" class="tb t-scope" data-t="scope" aria-label="Zielfernrohr"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M12 4v16M4 12h16" stroke="currentColor" stroke-width="1.4"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/></svg></button>
      <button type="button" class="tb t-breath" data-t="breath" aria-label="Luft anhalten"><span>LUFT<br>HALTEN</span></button>
      <button type="button" class="tb t-pause" data-t="pause" aria-label="Pause"><svg viewBox="0 0 24 24"><path d="M8 5v14M16 5v14" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/></svg></button>`,document.body.appendChild(t),this.stickEl=e.querySelector("#t-stick"),this.knob=this.stickEl.querySelector("i")}bind(){let e=this.g,t={passive:!1};this.layer.addEventListener("touchstart",s=>{if(s.preventDefault(),e.state==="play")for(let r of s.changedTouches){let o=this.layer.clientWidth;r.clientX<o*.42&&this.stickId===null?(this.stickId=r.identifier,this.ox=r.clientX,this.oy=r.clientY,this.stickEl.style.left=this.ox+"px",this.stickEl.style.top=this.oy+"px",this.stickEl.classList.add("on"),this.layer.classList.add("used-stick"),this.setStick(r.clientX,r.clientY)):(this.lookIds.set(r.identifier,{x:r.clientX,y:r.clientY}),this.layer.classList.add("used-look"))}},t);let n=s=>{s.preventDefault();for(let r of s.changedTouches){r.identifier===this.stickId&&this.setStick(r.clientX,r.clientY);let o=this.lookIds.get(r.identifier);o&&(this.look(r.clientX-o.x,r.clientY-o.y),o.x=r.clientX,o.y=r.clientY)}},i=s=>{for(let r of s.changedTouches)r.identifier===this.stickId&&this.releaseStick(),this.lookIds.delete(r.identifier),r.identifier===this.fireId&&(this.fireId=null,e.mouseDown=!1,this.ctl.querySelector(".t-fire").classList.remove("down")),r.identifier===this.breathId&&(this.breathId=null,this.hold=!1,this.ctl.querySelector(".t-breath").classList.remove("down"))};document.addEventListener("touchmove",n,t),document.addEventListener("touchend",i),document.addEventListener("touchcancel",i),this.ctl.querySelectorAll(".tb").forEach(s=>{s.addEventListener("touchstart",r=>{r.preventDefault(),r.stopPropagation();let o=r.changedTouches[0];this.press(s.dataset.t,o,s)},t),s.addEventListener("mousedown",r=>{r.preventDefault(),r.stopPropagation(),this.press(s.dataset.t,null,s)}),s.addEventListener("mouseup",()=>{s.dataset.t==="fire"&&(e.mouseDown=!1),s.dataset.t==="breath"&&(this.hold=!1),s.classList.remove("down")})}),document.querySelectorAll(".slot[data-w]").forEach(s=>{let r=o=>{if(o.preventDefault(),o.stopPropagation(),e.state!=="play")return;let c=s.dataset.w;if(c==="nade"){e.throwGrenade();return}if(c==="binoc"){e.hasBinoc&&(e.binoc=!e.binoc,e.audio.zoom(e.binoc));return}e.arsenal.select(c)?e.audio.switchWeapon():e.arsenal.hasAmmo(c)||e.flashSlot(c)};s.addEventListener("touchstart",r,t)}),document.getElementById("up-cards").addEventListener("touchstart",s=>{let r=s.target.closest(".upcard");if(!r)return;s.preventDefault();let o=[...r.parentNode.children].indexOf(r);e.chooseUpgrade(o)},t),document.addEventListener("gesturestart",s=>s.preventDefault()),document.addEventListener("dblclick",s=>s.preventDefault())}press(e,t,n){let i=this.g;if(e==="pause"){i.state==="play"&&i.pause();return}i.state==="play"&&(n.classList.add("down"),e!=="fire"&&e!=="breath"&&setTimeout(()=>n.classList.remove("down"),140),e==="fire"&&(i.mouseDown=!0,i.tryFire(),t&&(this.fireId=t.identifier,this.lookIds.set(t.identifier,{x:t.clientX,y:t.clientY}))),e==="jump"&&i.jump(),e==="nade"&&i.throwGrenade(),e==="reload"&&i.reload(),e==="scope"&&i.arsenal.current==="sniper"&&(i.rmb=!i.rmb,i.rmb&&(i.binoc=!1),i.audio.zoom(i.rmb)),e==="breath"&&(this.hold=!0,t&&(this.breathId=t.identifier)))}setStick(e,t){let n=e-this.ox,i=t-this.oy,s=Math.hypot(n,i);if(s>54*1.6){let u=(s-86.4)/s;this.ox+=n*u,this.oy+=i*u,this.stickEl.style.left=this.ox+"px",this.stickEl.style.top=this.oy+"px",n=e-this.ox,i=t-this.oy}let r=Math.hypot(n,i),o=Math.min(r,54),c=r>0?n/r:0,l=r>0?i/r:0;this.knob.style.transform=`translate(${c*o}px, ${l*o}px)`;let h=Math.min(1,r/54);h=h<.12?0:(h-.12)/.88,this.move.x=c*h,this.move.y=-l*h,this.move.mag=h,this.sprint=r>54*1.05&&-l>.55,this.stickEl.classList.toggle("run",this.sprint)}releaseStick(){this.stickId=null,this.move.x=this.move.y=this.move.mag=0,this.sprint=!1,this.knob.style.transform="",this.stickEl.classList.remove("on","run")}look(e,t){let n=this.g;if(n.state!=="play"||n.player.dead)return;let i=.0062*n.settings.sens*(n.camera.fov/74);e=Math.max(-120,Math.min(120,e)),t=Math.max(-120,Math.min(120,t)),n.player.yaw-=e*i,n.player.pitch=Math.max(-1.45,Math.min(1.45,n.player.pitch-t*i*.85)),n.look.dx+=e*1.6,n.look.dy+=t*1.6}reset(){this.releaseStick(),this.lookIds.clear(),this.fireId=null,this.hold=!1,this.g.mouseDown=!1,this.ctl.querySelectorAll(".down").forEach(e=>e.classList.remove("down"))}update(){let e=this.g,t=e.arsenal,n=e.state==="play"&&!e.player.dead,i=(e.scopeAmt||0)>.5,s=this.ctl.classList;s.toggle("show",n),this.layer.classList.toggle("show",n),s.toggle("sniper",t.current==="sniper"&&!t.pending),s.toggle("scoped",i),s.toggle("binoc",!!e.binoc),this.ctl.querySelector(".t-scope").classList.toggle("active",!!e.rmb);let o=document.getElementById("t-nades");o.textContent!==String(t.grenades)&&(o.textContent=t.grenades),this.ctl.querySelector(".t-nade").classList.toggle("off",t.grenades<=0),!n&&(this.stickId!==null||this.lookIds.size||this.fireId!==null)&&this.reset()}};var re=a=>document.getElementById(a),es={get(a,e){try{let t=localStorage.getItem(a);return t===null?e:JSON.parse(t)}catch{return e}},set(a,e){try{localStorage.setItem(a,JSON.stringify(e))}catch{}}},Dr=/[?&]test/.test(location.search),ts=/[?&]touch/.test(location.search)||matchMedia("(hover: none) and (pointer: coarse)").matches&&!Dr;globalThis.ZW_LOW=ts;function $f(){try{let a=localStorage.getItem("fps_sound_v1");return a===null?!0:a==="1"}catch{return!0}}function Qf(a){try{localStorage.setItem("fps_sound_v1",a?"1":"0")}catch{}}var pu=Object.fromEntries(Object.entries(fu).map(([a,e])=>[a,e.map(([t,n])=>({id:t,t:n}))])),Wv=Object.values(fu).flat().map(a=>a[0]),mu=a=>a[Math.random()*a.length|0],gu=document.body.dataset.hardmode!=="off",qv=new Set(["g04","g05","r01","h05"]),bu={pistolMag:mt.pistol.mag,shotgunMag:mt.shotgun.mag,pellets:mt.shotgun.pellets},xu=[{id:"dmg",icon:"\u2726",name:"Feuerkraft",desc:"+15 % Schaden mit allen Waffen",max:5},{id:"reload",icon:"\u21BB",name:"Schnellladen",desc:"+30 % Nachlade- und Repetiertempo",max:3},{id:"armor",icon:"\u26E8",name:"Firewall",desc:"\u221212 % erlittener Schaden",max:3},{id:"maxhp",icon:"\u271A",name:"Mehr Leben",desc:"+25 maximales Leben, sofort voll geheilt",max:3},{id:"leech",icon:"\u2665",name:"Selbstreparatur",desc:"+3 Leben pro erledigtem Gegner",max:3},{id:"mag",icon:"\u25A4",name:"Gro\xDFes Magazin",desc:"Pistole +6, Pump-Action +3 Schuss pro Magazin",max:2},{id:"speed",icon:"\xBB",name:"Flinke F\xFC\xDFe",desc:"+10 % Laufgeschwindigkeit",max:3},{id:"nades",icon:"\u25CF",name:"Granatengurt",desc:"+2 Granaten und +2 Platz im Gurt",max:3},{id:"blast",icon:"\u273A",name:"Sprengmeister",desc:"Explosionen +20 % Radius und +25 % Schaden",max:3},{id:"head",icon:"\u25CE",name:"Kopfj\xE4ger",desc:"Kopftreffer machen deutlich mehr Schaden",max:3},{id:"pierce",icon:"\u27B6",name:"Durchschlag",desc:"Pistolenkugeln durchdringen einen weiteren Gegner",max:2},{id:"magnet",icon:"\u2295",name:"Magnet",desc:"Mehr Beute, die aus der Entfernung angezogen wird",max:3},{id:"pellets",icon:"\u2058",name:"Schrot-Kaliber",desc:"+3 Schrotkugeln pro Schuss",max:2}],ep={runner:{wave:2,hint:"schnell, aber schwach"},bomber:{wave:3,hint:"platzt in deiner N\xE4he \u2013 auf Abstand halten!"},brute:{wave:4,hint:"z\xE4h und hart im Nehmen \u2013 Raketen helfen"}},Xv={halle:2,hof:3},Lr={health:{label:"+25 Leben",color:5308272},shells:{label:"+6 Schrot",color:16747056,amount:6},rockets:{label:"+2 Raketen",color:16726570,amount:2},grenade:{label:"+1 Granate",color:16765498,amount:1},rounds:{label:"+5 Gewehrpatronen",color:3531007,amount:5}},vu=class{constructor(){this.stage=re("stage"),this.audio=new sl,this.settings={mode:gu&&es.get("zw_mode","glitch")==="hard"?"hard":"glitch",sound:$f(),sens:es.get("zw_sens",1)},this.best=es.get("zw_best_v2",{wave:0,kills:0}),this.state="loading",this.keys={},this.look={dx:0,dy:0},this.time=0,this.dynScale=1,this.frameTimes=[],this.events=[]}async init(){ts&&(document.body.classList.add("touch"),this.dynScale=.85),this.setupRenderer(),this.bindUI(),ts&&(this.touch=new rl(this)),await this.load(),this.setupWorld(),await this.precompile(),this.state="menu",re("loading").hidden=!0,re("ready").hidden=!1,this.showBest(),this.renderer.setAnimationLoop(()=>this.frame()),window.ZW=this,Dr&&(window.__RC=hn)}setupRenderer(){let e=this.renderer=new Hc({antialias:!1,powerPreference:"high-performance",stencil:!1});e.shadowMap.enabled=!0,e.shadowMap.type=_s,e.toneMapping=Ms,e.toneMappingExposure=1.15,e.outputColorSpace=tt,this.stage.appendChild(e.domElement),this.canvas=e.domElement,this.scene=new di,this.scene.background=new se(394760),this.scene.fog=new Zr(460553,.032),this.camera=new Ct(74,16/9,.05,140),this.scene.add(this.camera);let t=new Mr(e);this.envMap=t.fromScene(new Xc,.04).texture,this.scene.environment=this.envMap,this.scene.environmentIntensity=.12;let n=new yi(16773596,26,30,.48,.6,1.3);n.position.set(.25,-.15,.1),this.camera.add(n),n.target.position.set(0,-.2,-6),this.camera.add(n.target),this.flashlight=n,this.muzzleLight=new sn(16752704,0,7,1.8),this.scene.add(this.muzzleLight),this.boomLights=[0,1].map(()=>{let i=new sn(16752720,0,16,1.5);return this.scene.add(i),{l:i,t:0}}),window.addEventListener("resize",()=>this.resize())}setupComposer(){let e=this.renderer,t=new Pt(4,4,{type:Wt,samples:ts?0:4}),n=this.composer=new Kc(e,t);n.addPass(new Da(this.scene,this.camera));let i=new Da(this.arsenal.scene,this.arsenal.camera);i.clear=!1,i.clearDepth=!0,n.addPass(i),this.bloom=new Pr(new xe(512,512),.55,.55,.92),n.addPass(this.bloom),this.post=new Cr({uniforms:{tDiffuse:{value:null},uTime:{value:0},uDamage:{value:0},uLow:{value:0},uAspect:{value:1.7},uFlash:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
        }`}),n.addPass(this.post),n.addPass(new Yc),this.resize()}resize(){let e=innerWidth,t=innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.arsenal&&this.arsenal.setAspect(e/t);let n=Math.min(devicePixelRatio||1,ts?1.3:1.5)*this.dynScale;this.renderer.setPixelRatio(n),this.renderer.setSize(e,t),this.composer&&(this.composer.setPixelRatio(n),this.composer.setSize(e,t),this.post.uniforms.uAspect.value=e/t),this.fx&&this.fx.setScale(t*n)}async load(){let e=new ur;e.onProgress=(f,m,b)=>{re("loadbar").style.width=Math.round(m/b*100)+"%"};let t=new bs(e),n=this.renderer.capabilities.getMaxAnisotropy(),i=(f,m,b=!0)=>new Promise((g,p)=>t.load(f,x=>{m&&(x.colorSpace=tt),b&&(x.wrapS=x.wrapT=xn),x.anisotropy=Math.min(8,n),g(x)},void 0,p)),s=(f,m=!0)=>Promise.all([i(f+"_c.webp",!0,m),i(f+"_n.webp",!1,m),i(f+"_orm.webp",!1,m)]).then(([b,g,p])=>({c:b,n:g,orm:p})),r=["bricks","metal","concrete","plate","ceiling","hazard","rust"],o=f=>Promise.all([i(`models/${f}_BaseColor.webp`,!0,!1),i(`models/${f}_Normal.webp`,!1,!1),i(`models/${f}_OcclusionRoughnessMetallic.webp`,!1,!1)]).then(([m,b,g])=>({c:m,n:b,orm:g})),c=new Vc(e);c.setMeshoptDecoder(Vf);let[l,h,u,d]=await Promise.all([c.loadAsync("models/zombie.glb"),Promise.all(r.map(f=>s("tex/"+f))).then(f=>Object.fromEntries(f.map((m,b)=>[r[b],m]))),o("body"),o("outfit")]);re("loadtxt").textContent="Baue Level \u2026",this.assets={gltf:l,levelTex:h,zTex:{body:u,outfit:d}}}setupWorld(){this.levels={halle:new ka(this.assets.levelTex,Zc.halle),hof:new ka(this.assets.levelTex,Zc.hof)};for(let e of Object.values(this.levels))e.build(this.scene);this.levels.hof.group.visible=!1,this.level=this.levels.halle,this.levelKey="halle",this.fx=new $c(this.scene,this.level),this.fx.blood=this.settings.mode==="hard",this.ztpl=new Qc(this.assets.gltf,this.assets.zTex),this.zombies=new el(this,this.ztpl,18),this.zombies.setStyle(this.settings.mode),this.arsenal=new nl(this.envMap),this.proj=new il(this),this.setupComposer(),this.player={pos:new R().copy(this.level.playerStart),vel:new R,y:0,vy:0,onGround:!0,yaw:Math.PI,pitch:0,hp:100,maxHp:100,dead:!1,bob:0,stepAcc:0,shake:0,deadT:0,land:0},this.placeCamera(),this.buildPickups(),this.minimap=new tl(re("minimap"),this.level),this.up={},this.maxNades=du}buildPickups(){this.pickups=[];let e={health:()=>{let n=new Be,i=new be(new Le(.42,.26,.3),new Ce({color:15263976,roughness:.4,metalness:.1,emissive:1122833}));n.add(i);let s=new Ce({color:0,emissive:16719904,emissiveIntensity:3});for(let r of[.152,-.152]){let o=new be(new Le(.2,.06,.012),s);o.position.z=r;let c=new be(new Le(.06,.2,.012),s);c.position.z=r,n.add(o,c)}return n},shells:()=>{let n=new Be;n.add(new be(new Le(.36,.16,.24),new Ce({color:9049104,roughness:.5})));let i=new Ce({color:13213766,metalness:1,roughness:.3});for(let s=0;s<5;s++){let r=new be(new ke(.022,.022,.05,10),i);r.position.set(-.13+s*.065,.1,0),n.add(r)}return n},rounds:()=>{let n=new Be;n.add(new be(new Le(.3,.12,.2),new Ce({color:2306106,roughness:.5,metalness:.4})));let i=new Ce({color:13213766,metalness:1,roughness:.3});for(let r=0;r<5;r++){let o=new be(new ke(.012,.012,.11,8),i);o.position.set(-.1+r*.05,.11,0),n.add(o)}let s=new be(new Le(.31,.03,.21),new Ce({color:4120,emissive:3531007,emissiveIntensity:1.5}));return n.add(s),n},rockets:()=>{let n=new Be,i=new Ce({color:5922634,metalness:.6,roughness:.35});for(let r of[-.07,.07]){let o=new be(new ke(.05,.05,.36,14),i);o.rotation.z=Math.PI/2,o.position.set(0,0,r),n.add(o);let c=new be(new mi(.05,.14,14),i);c.rotation.z=-Math.PI/2,c.position.set(.25,0,r),n.add(c)}let s=new be(new Le(.06,.12,.26),new Ce({color:2230528,emissive:16739125,emissiveIntensity:1.5}));return n.add(s),n},grenade:()=>{let n=new Be,i=new Ce({color:3819048,metalness:.3,roughness:.5}),s=new be(new Nt(.11,16,12),i);s.scale.set(1,1.2,1),n.add(s);let r=new be(new ke(.035,.04,.06,10),new Ce({color:7829367,metalness:1,roughness:.3}));return r.position.y=.15,n.add(r),n}},t=new gi(.3,.42,32);t.rotateX(-Math.PI/2);for(let[n,i]of Object.entries(e)){let s=new ft({color:Lr[n].color,transparent:!0,opacity:.5,blending:Jt,depthWrite:!1});for(let r=0;r<6;r++){let o=i();o.traverse(h=>{h.isMesh&&(h.castShadow=!0)});let c=new be(t,s),l=new Be;l.add(o,c),l.visible=!1,this.scene.add(l),this.pickups.push({type:n,holder:l,item:o,ring:c,active:!1,t:0})}}}async precompile(){let e=this.zombies.pool[0];e.root.visible=!0,e.root.position.copy(this.level.playerStart).add(new R(0,0,-4));let t=this.zombies.pool[1];e.setStyle("glitch"),t.setStyle("hard"),t.root.visible=!0,t.root.position.copy(e.root.position).add(new R(1,0,0)),this.fx.glitchHit(e.root.position.clone().setY(1),new R(0,0,1),1,16739125,!0);for(let i of Object.keys(Lr)){let s=this.pickups.find(r=>r.type===i);s.holder.visible=!0,s.holder.position.copy(e.root.position)}for(let i of Pn)this.arsenal.models[i].group.visible=!0,this.arsenal.models[i].flash.visible=!0;this.arsenal.nade.group.visible=!0;for(let i of this.proj.rockets)i.g.visible=!0;for(let i of this.proj.nades)i.g.visible=!0;let n=new R(this.level.playerStart.x,1,this.level.playerStart.z-3);this.fx.bloodHit(n,new R(0,0,-1),.2),this.fx.explosion(n,null,.3);try{this.renderer.compileAsync&&(await this.renderer.compileAsync(this.scene,this.camera),await this.renderer.compileAsync(this.arsenal.scene,this.arsenal.camera),this.levels.halle.group.visible=!1,this.levels.hof.group.visible=!0,await this.renderer.compileAsync(this.scene,this.camera),this.composer.render(.016),this.levels.halle.group.visible=!0,this.levels.hof.group.visible=!1)}catch{this.levels.halle.group.visible=!0,this.levels.hof.group.visible=!1}this.composer.render(.016),e.root.visible=!1,t.root.visible=!1,this.zombies.setStyle(this.settings.mode);for(let i of this.pickups)i.holder.visible=!1;for(let i of Pn)this.arsenal.models[i].flash.visible=!1;this.proj.reset(),this.arsenal.reset(),this.fx.reset()}bindUI(){let e=()=>{for(let t of["","2"])re("opt-hard"+t).checked=this.settings.mode==="hard",re("opt-sound"+t).checked=this.settings.sound,re("opt-sens"+t).value=this.settings.sens};e();for(let t of["","2"])re("opt-hard"+t).addEventListener("change",n=>{if(n.target.checked&&!es.get("zw_adult",!1)){n.target.checked=!1,re("ov-age").hidden=!1;return}this.applyMode(n.target.checked?"hard":"glitch"),e()}),re("opt-sound"+t).addEventListener("change",n=>{this.settings.sound=n.target.checked,Qf(this.settings.sound),this.audio.setEnabled(this.settings.sound),e()}),re("opt-sens"+t).addEventListener("input",n=>{this.settings.sens=parseFloat(n.target.value),es.set("zw_sens",this.settings.sens),e()});this.audio.enabled=this.settings.sound,this.syncOpts=e,gu||document.querySelectorAll(".opt-hard").forEach(t=>{t.hidden=!0}),re("btn-age-yes").addEventListener("click",()=>{es.set("zw_adult",!0),re("ov-age").hidden=!0,this.applyMode("hard"),e()}),re("btn-age-no").addEventListener("click",()=>{re("ov-age").hidden=!0,e()}),this.applyModeUI(),window.addEventListener("storage",t=>{t.key==="fps_sound_v1"&&(this.settings.sound=$f(),this.audio.setEnabled(this.settings.sound),e())}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="play"&&this.pause()}),re("btn-start").addEventListener("click",()=>this.start()),re("btn-again").addEventListener("click",()=>this.start()),re("btn-resume").addEventListener("click",()=>this.resume()),re("btn-quit").addEventListener("click",()=>this.gameOver()),re("fsbtn").addEventListener("click",()=>this.toggleFullscreen()),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==this.canvas&&this.state==="play"&&!Dr&&this.pause()}),document.addEventListener("pointerlockerror",()=>{this.state==="play"&&this.pause()}),document.addEventListener("mousemove",t=>{if(this.state!=="play"||document.pointerLockElement!==this.canvas&&!Dr)return;let n=.0022*this.settings.sens*(this.camera.fov/74),i=Math.max(-300,Math.min(300,t.movementX||0)),s=Math.max(-300,Math.min(300,t.movementY||0));this.player.yaw-=i*n,this.player.pitch=Math.max(-1.45,Math.min(1.45,this.player.pitch-s*n)),this.look.dx+=i,this.look.dy+=s}),document.addEventListener("mousedown",t=>{if(this.state==="play"){if(document.pointerLockElement!==this.canvas&&!Dr){this.lock();return}t.button===0&&(this.mouseDown=!0,this.tryFire()),t.button===2&&(this.arsenal.current==="sniper"?(this.rmb=!0,this.audio.zoom(!0)):this.throwGrenade())}}),document.addEventListener("contextmenu",t=>t.preventDefault()),document.addEventListener("mouseup",t=>{t.button===0&&(this.mouseDown=!1),t.button===2&&this.rmb&&(this.rmb=!1,this.audio.zoom(!1))}),document.addEventListener("wheel",t=>{if(this.state!=="play"||Math.abs(t.deltaY)<4)return;let n=performance.now();n-(this._wheelT||0)<140||(this._wheelT=n,this.arsenal.cycle(t.deltaY>0?1:-1)&&this.audio.switchWeapon())},{passive:!0}),document.addEventListener("keydown",t=>{if(this.keys[t.code]=!0,this.state==="play"){t.code==="KeyR"&&this.reload(),t.code==="Space"&&(t.preventDefault(),this.jump()),t.code==="KeyG"&&this.throwGrenade(),t.code==="KeyQ"&&this.arsenal.selectLast()&&this.audio.switchWeapon();let n={Digit1:0,Digit2:1,Digit3:2,Numpad1:0,Numpad2:1,Numpad3:2}[t.code];if(this.waveState==="choose"&&n!==void 0){this.chooseUpgrade(n);return}t.code==="KeyB"&&this.hasBinoc&&!t.repeat&&(this.binoc=!this.binoc,this.audio.zoom(this.binoc));let i={Digit1:"pistol",Digit2:"shotgun",Digit3:"rocket",Digit4:"sniper",Numpad1:"pistol",Numpad2:"shotgun",Numpad3:"rocket",Numpad4:"sniper"}[t.code];i&&(this.arsenal.select(i)?this.audio.switchWeapon():this.arsenal.hasAmmo(i)||this.flashSlot(i)),["ArrowUp","ArrowDown"].includes(t.code)&&t.preventDefault()}t.code==="KeyF"&&this.state!=="loading"&&this.toggleFullscreen(),t.code==="Enter"&&(this.state==="menu"||this.state==="over")&&this.start()}),document.addEventListener("keyup",t=>{this.keys[t.code]=!1}),window.addEventListener("blur",()=>{this.keys={},this.mouseDown=!1,this.rmb=!1})}applyMode(e){if(e==="hard"&&!gu&&(e="glitch"),!(e===this.settings.mode&&this._modeApplied)){if(this._modeApplied=!0,this.settings.mode=e,es.set("zw_mode",e),this.fx&&(this.fx.blood=e==="hard",e==="glitch")){this.fx.floorDecals.clear(),this.fx.dripDecals.clear(),this.fx.wallDecals.clear();for(let t of this.fx.gibData)t.life=0;this.fx._gibsWasAny=!0}this.zombies&&this.zombies.setStyle(e),this.applyModeUI()}}applyModeUI(){let e=this.settings.mode==="hard";document.body.classList.toggle("mode-hard",e),document.body.classList.toggle("mode-glitch",!e),re("sub-start").innerHTML=e?"Die Seite gibt es nicht. Die Zombies leider schon.<br>Halte so viele Wellen durch, wie du kannst.":"Die Seite gibt es nicht \u2013 daf\xFCr jede Menge Glitch-Zombies.<br>L\xF6sch so viele Wellen, wie du kannst."}q(e){let t=pu[e]||[];if(this.settings.mode==="hard")return mu(t);let n=t.filter(i=>!qv.has(i.id));return mu(n.length?n:pu.kill)}toggleFullscreen(){try{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen({navigationUI:"hide"}).then(()=>this.state==="play"&&this.lock()).catch(()=>{})}catch{}}lock(){if(!(Dr||ts))try{let e=this.canvas.requestPointerLock({unadjustedMovement:!0});e&&e.catch&&e.catch(()=>{try{this.canvas.requestPointerLock()}catch{}})}catch{try{this.canvas.requestPointerLock()}catch{}}}showBest(){let e=this.best,t=re("best-start");e.kills>0&&(t.hidden=!1,t.textContent=`Rekord: Welle ${e.wave} \xB7 ${e.kills} Kills`)}start(){Qf(this.settings.sound),this.audio.resume(),this.audio.setEnabled(this.settings.sound),this.resetRun(),this.state="play",document.body.classList.add("playing"),["ov-start","ov-over","ov-pause"].forEach(e=>{re(e).hidden=!0}),this.lock(),this.audio.startAmbience(),this.audio.loadVoices("voice/",Wv),this.nextWave()}resetRun(){this.levelKey!=="halle"&&this.switchLevel("halle");for(let t of Object.values(this.levels))t.setExit(!1);this.wavesHere=0,this.hasBinoc=!1,this.binoc=!1,this.rmb=!1,this.scopeAmt=0,this.binocAmt=0,this.breath=1,re("fade").classList.remove("on");let e=this.player;e.pos.set(this.level.playerStart.x,0,this.level.playerStart.z),e.vel.set(0,0,0),e.y=this.level.playerStart.y,e.vy=0,e.onGround=!0,e.yaw=Math.PI,e.pitch=0,e.hp=100,e.maxHp=100,e.dead=!1,e.deadT=0,e.shake=0,this.up={},this.maxNades=du,mt.pistol.mag=bu.pistolMag,mt.shotgun.mag=bu.shotgunMag,mt.shotgun.pellets=bu.pellets,this.arsenal.reloadSpeed=1,this.seenTypes=new Set(["normal"]),re("upgrades").classList.remove("show"),this.zombies.reset(),this.fx.reset(),this.proj.reset(),this.level.resetBarrels(),this.pickups.forEach(t=>{t.active=!1,t.holder.visible=!1}),this.arsenal.reset(),this.wave=0,this.kills=0,this.headshots=0,this.damageFx=0,this.flashFx=0,this.quipCD=0,this.lastKillT=-10,this.streak=0,this.waveState="idle",this.updateHUD()}buildQueue(e,t){let n=[],i={runner:e>=2?Math.min(.3,.1+.03*e):0,bomber:e>=3?Math.min(.16,.07+.015*e):0,brute:e>=4?Math.min(.14,.04+.015*e):0};for(let[r,o]of Object.entries(ep))if(e===o.wave)for(let c=0;c<(r==="brute"?1:2);c++)n.push(r);for(;n.length<t;){let r=Math.random(),o=0,c="normal";for(let[l,h]of Object.entries(i))if(o+=h,r<o){c=l;break}n.push(c)}for(let r=n.length-1;r>0;r--){let o=Math.random()*(r+1)|0;[n[r],n[o]]=[n[o],n[r]]}let s=n.findIndex(r=>r==="normal");return s>0&&([n[0],n[s]]=[n[s],n[0]]),n}nextWave(){this.wave++,this.wavesHere=(this.wavesHere||0)+1;let e=this.wave;if(this.waveCfg={total:6+(e-1)*3,maxAlive:Math.min(4+e,14),hp:100+(e-1)*12,speed:Math.min(1.7,1.1+(e-1)*.07),dmg:11+e,interval:Math.max(.55,2.2-e*.13)},this.level.outdoor&&(this.waveCfg.speed*=1.3,this.waveCfg.maxAlive=Math.min(16,this.waveCfg.maxAlive+2)),this.queue=this.buildQueue(e,this.waveCfg.total),this.spawned=0,this.spawnT=1.6,this.waveState="fight",e>1){let i=this.arsenal,s=i.state;s.shotgun.reserve=Math.min(mt.shotgun.maxReserve,s.shotgun.reserve+6),s.rocket.reserve=Math.min(mt.rocket.maxReserve,s.rocket.reserve+1),i.grenades=Math.min(this.maxNades,i.grenades+1),i.owned.sniper&&(s.sniper.reserve=Math.min(mt.sniper.maxReserve,s.sniper.reserve+5)),this.level.resetBarrels()}let t=e===1?pu.start[0]:this.q("wave"),n=Object.entries(ep).find(([i,s])=>s.wave===e);if(n){let i=Ba[n[0]],s=this.settings.mode==="hard"?i.name:i.glitchName;this.banner(`WELLE ${e}`,`Neu: ${s} \u2013 ${n[1].hint}`,3.6)}else this.banner(`WELLE ${e}`,e===1?t.t:t.t+" \xB7 Nachschub erhalten");setTimeout(()=>this.state==="play"&&this.quip(t,!0),900),this.audio.waveHorn(),this.updateHUD()}banner(e,t,n=2.4){re("banner-big").textContent=e,re("banner-small").textContent=t||"";let i=re("banner");i.classList.add("show"),clearTimeout(this._bannerT),this._bannerT=setTimeout(()=>i.classList.remove("show"),n*1e3)}toast(e){let t=re("toast");t.textContent=e,t.classList.remove("show"),t.offsetWidth,t.classList.add("show")}quip(e,t=!1){if(!t&&this.quipCD>0)return;this.quipCD=5.5,this.audio.voice(e.id);let n=re("quip");n.textContent="\u201E"+e.t+"\u201C",n.classList.add("show"),clearTimeout(this._quipT),this._quipT=setTimeout(()=>n.classList.remove("show"),2200)}pause(){if(this.state!=="play")return;this.state="pause";let e=xu.filter(t=>this.up[t.id]).map(t=>`${t.icon} ${t.name}${this.up[t.id]>1?" "+"I".repeat(this.up[t.id]):""}`);re("pause-ups").textContent=e.length?"Deine Upgrades: "+e.join(" \xB7 "):"",re("ov-pause").hidden=!1,this.mouseDown=!1,this.keys={},this.touch&&this.touch.reset()}resume(){this.state==="pause"&&(re("ov-pause").hidden=!0,this.state="play",this.lock())}gameOver(){this.state="over",document.body.classList.remove("playing"),re("ov-pause").hidden=!0,document.pointerLockElement&&document.exitPointerLock(),this.audio.stopAmbience();let e=this.wave>this.best.wave||this.wave===this.best.wave&&this.kills>this.best.kills;e&&this.kills>0&&(this.best={wave:this.wave,kills:this.kills},es.set("zw_best_v2",this.best)),re("go-title").innerHTML=this.settings.mode==="hard"?"GEFRESSEN<span>.</span>":"ABGEST\xDCRZT<span>.</span>";let t=xu.filter(n=>this.up[n.id]).map(n=>`${n.icon} ${n.name}${this.up[n.id]>1?" "+"I".repeat(this.up[n.id]):""}`);re("go-ups").textContent=t.length?"Upgrades: "+t.join(" \xB7 "):"",re("upgrades").classList.remove("show"),re("nextwave").classList.remove("show"),re("go-wave").textContent=this.wave,re("go-kills").textContent=this.kills,re("go-hs").textContent=this.headshots,re("go-newbest").hidden=!(e&&this.kills>0),re("go-best").textContent=this.best.kills>0?`Rekord: Welle ${this.best.wave} \xB7 ${this.best.kills} Kills`:"Noch kein Rekord \u2013 n\xE4chstes Mal!",re("ov-over").hidden=!1;try{parent.postMessage({type:"zombiewelle:best",best:this.best},location.origin)}catch{}}jump(){let e=this.player;e.dead||!e.onGround||(e.vy=6.9,e.onGround=!1,this.audio.jump())}reload(){let e=this.arsenal.startReload();e&&(e==="pistol"&&this.audio.reload(mt.pistol.reload),e==="rocket"&&this.audio.rocketLoad())}flashSlot(e){let t=document.querySelector(`.slot[data-w="${e}"]`);t&&(t.classList.remove("nope"),t.offsetWidth,t.classList.add("nope"))}tryFire(){if(this.player.dead)return;if(this.binoc){this.binoc=!1,this.audio.zoom(!1);return}let e=this.arsenal,t=e.current;ts&&e.cooldown<=0&&!e.reloading&&e.st.ammo>0&&this.aimAssist();let n=e.fire();if(n==="empty"){this.audio.dryFire(),e.st.reserve>0?this.reload():t!=="pistol"&&(e.cycle(-1),this.audio.switchWeapon());return}if(n!=="shot")return;let i=mt[t];if(this.player.pitch=Math.min(1.45,this.player.pitch+i.camKick),this.player.yaw+=(Math.random()-.5)*i.camKick*.35,this.player.shake=Math.min(1.2,this.player.shake+(t==="pistol"?.12:.4)),this.muzzleT=t==="pistol"?.06:.09,t==="sniper"&&(this.audio.sniper(),this.player.pitch=Math.min(1.45,this.player.pitch+(this.scopeAmt>.5?.02:0)),this.shootHitscan(i)),t==="pistol"&&(this.audio.pistol(),this.shootHitscan(i)),t==="shotgun"&&(this.audio.shotgun(),this.shootHitscan(i)),t==="rocket"){this.audio.rocketFire(),Math.random()<.3&&this.quip(this.q("rocket"));let s=this.camera,r=new R(.18,-.12,-.6).applyMatrix4(s.matrixWorld),o=new R(0,0,-1).applyQuaternion(s.quaternion),c=new hn(s.getWorldPosition(new R),o,0,80),l=c.intersectObjects(this.level.colliders,!1)[0],h=this.zombies.raycast(c.ray.origin,o,l?l.distance:80),u=h?h.point:l?l.point:c.ray.origin.clone().addScaledVector(o,60),d=u.clone().sub(r).normalize();u.distanceTo(r)<1.2&&d.copy(o),this.proj.fireRocket(r,d),this.fx.puff(r.clone().addScaledVector(o,-.6),o.clone().negate(),7829367,1.6)}}aimAssist(){if((this.scopeAmt||0)>.3)return;let e=this.camera,t=e.getWorldPosition(new R),n=new R(0,0,-1).applyQuaternion(e.quaternion),i=null,s=.075,r=new R;for(let h of this.zombies.alive){if(h.dying||h.dead)continue;r.copy(h.root.position),r.y+=h.height*.72,r.sub(t);let u=r.length();if(u>38)continue;r.divideScalar(u);let d=Math.acos(Math.min(1,r.dot(n)));if(d<s){if(new hn(t,r.clone(),0,u-.4).intersectObjects(this.level.colliders,!1).length)continue;s=d,i=r.clone()}}if(!i)return;let o=Math.atan2(-i.x,-i.z),c=Math.asin(Math.max(-1,Math.min(1,i.y))),l=o-this.player.yaw;l=Math.atan2(Math.sin(l),Math.cos(l)),this.player.yaw+=l*.7,this.player.pitch+=(c-this.player.pitch)*.7,this.placeCamera(),e.updateMatrixWorld()}shootHitscan(e){let t=this.camera,n=new R;t.getWorldPosition(n);let i=this.player.vel.length()/6+(this.player.onGround?0:.6),s=new hn,r=new Map,o=0,c=1+.15*(this.up.dmg||0),l=3.2+.9*(this.up.head||0),h=e.pellets===1?(this.up.pierce||0)+(e.pierce||0):0,u=e===mt.sniper,d=null;for(let m=0;m<e.pellets;m++){let b=u?this.scopeAmt>.9?e.spread*(1+i*4):e.hipSpread:e.spread*(e.pellets>1?1:1+i*2.5),g=Math.random()*Math.PI*2,p=e.pellets>1?Math.sqrt(Math.random())*b:(Math.random()-.5)*b,x=new R(Math.cos(g)*p,Math.sin(g)*p,-1).normalize().applyQuaternion(t.quaternion);s.set(n,x),s.far=u?260:90;let T=s.intersectObjects(this.level.colliders,!1)[0],v=T?T.distance:s.far;u&&(d=n.clone().addScaledVector(x,v));let y=this.zombies.raycast(n,x,v);if(y){let S=new Set,A=1;for(let _=0;y&&_<=h;_++){let w=r.get(y.z)||{dmg:0,n:0,head:!1,point:y.point,rd:x,dist:y.t},C=y.zone==="head"?l:y.zone==="body"?1:.7;w.dmg+=e.damage*c*A*C*(.9+Math.random()*.2)*(e.pellets>1?Math.max(.35,1-y.t/22):1),w.n++,y.zone==="head"&&(w.head=!0),r.set(y.z,w),S.add(y.z),A*=.8,y=_<h?this.zombies.raycast(n,x,v,S):null}}else if(T){T.object.userData.barrel&&this.damageBarrel(T.object.userData.barrel,e.damage);let S=T.face.normal.clone().transformDirection(T.object.matrixWorld);o<4?this.fx.wallHit(T.point,S):this.fx.holes.add(T.point.clone().addScaledVector(S,.006),S,.07),o===0&&this.audio.impactWall(T.point),o++}}let f=!1;for(let[m,b]of r){let g=e.pellets>1,p=g&&b.dist<4.5&&b.n>=6,x=g?Math.max(0,6-b.dist)*.9:0,T=this.zombies.damage(m,b.dmg,b.head?"head":"body",b.point,b.rd,x,p),v=b.head&&!g,y=g?Math.min(2.2,.5+b.n*.18):v?1.2:1;this.settings.mode==="hard"?(this.fx.bloodHit(b.point,b.rd,y,(v||b.head&&g)&&T),T&&b.head?this.audio.headshot(b.point):this.audio.fleshHit(b.point,T||g)):(this.fx.glitchHit(b.point,b.rd,y,m.type.glow,b.head),this.audio.glitchHit(b.point,T||g||b.head)),T&&(f=!0),T&&g&&!p&&Math.random()<.3&&this.quip(this.q("shotgun"))}if(r.size&&this.hitmarker(f),u&&d){let m=new R(.12,-.08,-.5).applyMatrix4(this.camera.matrixWorld);this.tracer(this.scopeAmt>.5?m.lerp(n,.7):m,d)}}tracer(e,t){this.tracers||(this.tracers=[0,1,2].map(()=>{let s=new it().setFromPoints([new R,new R(0,0,-1)]),r=new zi({color:16767136,transparent:!0,opacity:0,blending:Jt,depthWrite:!1,toneMapped:!1}),o=new pi(s,r);return o.frustumCulled=!1,this.scene.add(o),{l:o,t:0}}));let n=this.tracers.reduce((s,r)=>s.t<r.t?s:r),i=n.l.geometry.attributes.position;i.setXYZ(0,e.x,e.y,e.z),i.setXYZ(1,t.x,t.y,t.z),i.needsUpdate=!0,n.t=.18}throwGrenade(){if(!this.player.dead){if(this.arsenal.grenades<=0){this.flashSlot("nade");return}this.arsenal.throwGrenade()&&(this.audio.pin(),Math.random()<.45&&this.quip(this.q("nade")))}}releaseGrenade(){let e=this.camera,t=new R(-.15,-.05,-.5).applyMatrix4(e.matrixWorld),i=new R(0,0,-1).applyQuaternion(e.quaternion).multiplyScalar(14).add(new R(0,3.2,0)).add(new R(this.player.vel.x*.5,0,this.player.vel.z*.5)),s=new hn(e.getWorldPosition(new R),t.clone().sub(e.position).normalize(),0,e.position.distanceTo(t)+.1),r=s.intersectObjects(this.level.colliders,!1)[0];r&&t.copy(r.point).addScaledVector(s.ray.direction,-.1),this.proj.throwGrenade(t,i),this.audio.throwWhoosh()}explode(e,{radius:t=5,damage:n=150,source:i="rocket",normal:s=null}={}){let r=n;if(i!=="bomber"){let f=this.up.blast||0;t*=1+.2*f,n*=(1+.25*f)*(1+.15*(this.up.dmg||0))}this.fx.explosion(e,s,i==="barrel"?1.2:i==="bomber"?.85:1),this.audio.explosion(e,i==="barrel"?1.15:1);let o=this.boomLights.reduce((f,m)=>f.t<m.t?f:m);o.l.position.copy(e).addScaledVector(s||new R(0,1,0),.6),o.t=.45;let c=this.camera.position.distanceTo(e);this.player.shake=Math.min(2.5,this.player.shake+Math.max(0,2.2-c*.12)),this.flashFx=Math.min(1,this.flashFx+Math.max(0,1-c/18));let l=new hn,h=0;for(let f of this.zombies.alive){let m=f.root.position.clone();m.y+=1;let b=m.distanceTo(e);if(b>t)continue;let g=m.clone().sub(e).setY(0);g.lengthSq()<1e-4&&g.set(Math.random()-.5,0,Math.random()-.5),g.normalize(),l.set(e,m.clone().sub(e).normalize()),l.far=b;let p=l.intersectObjects(this.level.colliders,!1)[0];if(p&&p.distance<b-.4&&!p.object.userData.barrel)continue;let x=Math.pow(1-b/t,.7),T=this.zombies.damage(f,n*x+10,"body",m,g,8*x+2,b<t*.55);!T&&this.settings.mode!=="hard"&&this.fx.glitchHit(m,g,.8,f.type.glow),T&&h++}h>0&&this.hitmarker(!0),h>=2&&this.quip(this.q("gib"),!0);let u=new R(this.player.pos.x,this.player.y+1,this.player.pos.z),d=u.distanceTo(e);if(d<t&&!this.player.dead){let f=1-d/t;this.hurtPlayer(r*(i==="bomber"?.5:.45)*f,e,!0);let m=u.clone().sub(e).normalize().multiplyScalar(9*f);this.player.vel.x+=m.x,this.player.vel.z+=m.z,this.player.vy=Math.max(this.player.vy,4*f),this.player.onGround=!1}for(let f of this.level.barrels){if(!f.alive)continue;Math.hypot(f.x-e.x,f.z-e.z)<t+.6&&this.proj.later(.12+Math.random()*.2,()=>this.damageBarrel(f,999))}for(let f of this.proj.nades)f.active&&f.g.position.distanceTo(e)<t*.6&&(f.fuse=Math.min(f.fuse,.15))}damageBarrel(e,t){if(e.alive){if(e.hp-=t,e.hp>0){this.fx.puff(new R(e.x,1,e.z),new R(0,1,0),8978244,.8);return}this.level.removeBarrel(e),Math.random()<.5&&this.quip(this.q("barrel")),this.explode(new R(e.x,.7,e.z),{radius:6.2,damage:270,source:"barrel"})}}hitmarker(e){let t=re("hitmark");t.classList.remove("show","kill"),t.offsetWidth,t.classList.add("show"),e&&t.classList.add("kill"),this.audio.hitmarker()}onKill(e,t){if(e.typeKey==="bomber"){let l=e.root.position.clone().setY(.9);this.proj.later(t==="self"?0:.12,()=>this.explode(l,{radius:4.2,damage:150,source:"bomber"}))}if(t==="self")return;this.kills++,this.up.leech&&(this.player.hp=Math.min(this.player.maxHp,this.player.hp+3*this.up.leech));let n=t==="head";n&&this.headshots++;let i=this.time;i-this.lastKillT<1.6?this.streak++:this.streak=1,this.lastKillT=i;let s=re("killfeed"),r=document.createElement("div"),o=this.settings.mode==="hard",c=o?e.type.name:e.type.glitchName;for(r.textContent=n?`\u2716 ${c} \u2013 Kopftreffer`:t==="gib"?`\u2716 ${c} zerfetzt`:o?`\u2716 ${c} erledigt`:`\u2716 ${c} gel\xF6scht`,(n||t==="gib")&&(r.className="hs"),s.prepend(r),setTimeout(()=>r.remove(),2500);s.children.length>4;)s.lastChild.remove();this.streak===2?this.quip(this.q("multi"),!0):this.streak>=3?this.quip(this.q("streak"),!0):t==="gib"&&Math.random()<.5?this.quip(this.q("gib")):n&&Math.random()<.6?this.quip(this.q("head")):Math.random()<.35&&this.quip(this.q("kill")),this.maybeDrop(e.root.position,e.typeKey==="brute"?2:1),this.updateHUD()}maybeDrop(e,t=1){for(let n=0;n<t;n++)this.dropOnce(e,n)}dropOnce(e,t=0){let n=this.arsenal,i=n.state,s=this.player.hp,r=[];if(s<this.player.maxHp*.8&&r.push(["health",s<35?4:1.5]),r.push(["shells",i.shotgun.reserve<12?3:1]),r.push(["rockets",i.rocket.reserve<3?2:.6]),r.push(["grenade",n.grenades<2?1.6:.5]),n.owned.sniper&&r.push(["rounds",i.sniper.reserve<8?3:1]),Math.random()>.3+.1*(this.up.magnet||0)&&t===0)return;let o=r.reduce((u,d)=>u+d[1],0),c=Math.random()*o,l=r[0][0];for(let[u,d]of r)if(c-=d,c<=0){l=u;break}let h=this.pickups.find(u=>!u.active&&u.type===l);h&&(h.active=!0,h.t=0,h.holder.visible=!0,h.holder.position.set(e.x+(t?(Math.random()-.5)*1.2:0),0,e.z+(t?(Math.random()-.5)*1.2:0)),h.holder.position.y=this.level.groundAt(h.holder.position.x,h.holder.position.z,.2,e.y+.1))}updatePickups(e){let t=this.player,n=this.arsenal,i=n.state;for(let s of this.pickups){if(!s.active)continue;if(s.t+=e,s.item.rotation.y+=e*1.6,s.item.position.y=.36+Math.sin(s.t*3)*.06,s.ring.material.opacity=.35+Math.sin(s.t*5)*.15,s.t>35){s.active=!1,s.holder.visible=!1;continue}let r=t.pos.x-s.holder.position.x,o=t.pos.z-s.holder.position.z,c=Math.hypot(r,o),l=1+1.8*(this.up.magnet||0);if(this.up.magnet&&c<l&&c>.3){let u=Math.min(c,e*(5+3*this.up.magnet));s.holder.position.x+=r/c*u,s.holder.position.z+=o/c*u}if(Math.abs(t.y-s.holder.position.y)>1.3||c>1)continue;let h=!1;s.type==="health"&&t.hp<t.maxHp&&(t.hp=Math.min(t.maxHp,t.hp+25),h=!0,this.audio.pickup()),s.type==="shells"&&i.shotgun.reserve<mt.shotgun.maxReserve&&(i.shotgun.reserve=Math.min(mt.shotgun.maxReserve,i.shotgun.reserve+Lr.shells.amount),h=!0),s.type==="rockets"&&i.rocket.reserve<mt.rocket.maxReserve&&(i.rocket.reserve=Math.min(mt.rocket.maxReserve,i.rocket.reserve+Lr.rockets.amount),h=!0),s.type==="grenade"&&n.grenades<this.maxNades&&(n.grenades++,h=!0),s.type==="rounds"&&i.sniper.reserve<mt.sniper.maxReserve&&(i.sniper.reserve=Math.min(mt.sniper.maxReserve,i.sniper.reserve+Lr.rounds.amount),h=!0),h&&(s.type!=="health"&&this.audio.ammo(),s.active=!1,s.holder.visible=!1,this.toast(Lr[s.type].label),this.updateHUD())}}hurtPlayer(e,t,n=!1){let i=this.player;if(i.dead||this.state!=="play")return;e*=1-.12*(this.up.armor||0),i.hp=Math.max(0,i.hp-e),this.damageFx=Math.min(1,this.damageFx+(n?.8:.55)),i.shake=Math.min(1.5,i.shake+.6),this.audio.hurt();let r=Math.atan2(t.x-i.pos.x,t.z-i.pos.z)-i.yaw+Math.PI,o=re("dmgdir");o.style.transform=`rotate(${-r}rad)`,o.style.transition="none",o.style.opacity=1,requestAnimationFrame(()=>{o.style.transition="opacity .8s",o.style.opacity=0}),i.hp<=0?(i.dead=!0,i.deadT=0,this.quip(this.q("death"),!0)):i.hp<30&&Math.random()<.3&&this.quip(this.q("hurt")),this.updateHUD()}updateHUD(){let e=this.player,t=this.arsenal;re("h-wave").textContent=this.wave||1,re("h-kills").textContent=this.kills||0;let n=this.waveCfg?Math.max(0,this.waveCfg.total-this.spawned)+this.zombies.alive.length:0;re("h-left").textContent=n,re("h-hp").textContent=Math.ceil(e.hp),re("h-hpbar").style.width=e.hp/e.maxHp*100+"%",re("h-hpbox").classList.toggle("low",e.hp<30);let i=t.pending||t.current,s=t.state[i],r=mt[i];re("h-wname").textContent=r.name,re("h-ammo").textContent=t.reloading&&i!=="shotgun"?"\u2026":s.ammo,re("h-reserve").textContent=s.reserve===1/0?"\u221E":s.reserve,re("h-ammobox").classList.toggle("empty",s.ammo===0&&!t.reloading),re("h-ammobox").classList.toggle("lowammo",s.ammo>0&&s.ammo<=Math.ceil(r.mag/4)&&!t.reloading&&r.mag>1),re("h-nades").textContent=t.grenades,document.querySelectorAll(".slot[data-w]").forEach(o=>{let c=o.dataset.w;if(c==="nade"){o.classList.toggle("off",t.grenades<=0);return}if(c==="binoc"){o.hidden=!this.hasBinoc,o.classList.toggle("on",!!this.binoc);return}c==="sniper"&&(o.hidden=!t.owned.sniper),o.classList.toggle("on",c===i),o.classList.toggle("off",!t.hasAmmo(c))})}spawnTick(e){let t=this.waveCfg;if(this.waveState==="fight"){this.spawnT-=e;let n=this.zombies.alive.length;if(this.spawnT<=0&&this.spawned<t.total&&n<t.maxAlive){this.spawnT=t.interval*(.7+Math.random()*.6);let i=this.pickSpawn();i&&this.zombies.spawn(i,{...t,type:this.queue[this.spawned]||"normal"})&&(this.spawned++,this.updateHUD())}this.spawned>=t.total&&n===0&&(this.banner(`WELLE ${this.wave} \xDCBERSTANDEN`,"",1.7),setTimeout(()=>this.state==="play"&&this.quip(this.q("clear"),!0),1200),this.audio.waveClear(),this.player.hp=Math.min(this.player.maxHp,this.player.hp+15),this.updateHUD(),this.waveState="pre",this.breakT=2)}else if(this.waveState==="pre")this.breakT-=e,this.breakT<=0&&this.offerUpgrades();else if(this.waveState==="exit"){let n=this.level.exitPos,i=this.player,s=Math.hypot(i.pos.x-n.x,i.pos.z-n.z),r=re("nextwave");r.textContent=`Ausgang: ${Math.round(s)} m \u2013 folge der blauen Markierung`,r.classList.add("show"),s<1.1&&Math.abs(i.y-n.y)<1&&this.travel()}else if(this.waveState==="travel")this.updateTravel(e);else if(this.waveState==="break"){this.breakT-=e;let n=re("nextwave");n.textContent=`N\xE4chste Welle in ${Math.ceil(Math.max(0,this.breakT))} \u2026`,n.classList.toggle("show",this.breakT>.1),this.breakT<=0&&(n.classList.remove("show"),this.nextWave())}}offerUpgrades(){let e=xu.filter(n=>(this.up[n.id]||0)<n.max);for(let n=e.length-1;n>0;n--){let i=Math.random()*(n+1)|0;[e[n],e[i]]=[e[i],e[n]]}if(this.offer=e.slice(0,3),!this.offer.length){this.afterUpgrade();return}let t=re("up-cards");t.innerHTML="",this.offer.forEach((n,i)=>{let s=this.up[n.id]||0,r=document.createElement("div");r.className="upcard",r.innerHTML=`<kbd>${i+1}</kbd><div class="ic">${n.icon}</div><b>${n.name}</b><p>${n.desc}</p><div class="pips">${'<i class="on"></i>'.repeat(s)}<i class="next"></i>${"<i></i>".repeat(n.max-s-1)}</div>`,r.addEventListener("click",()=>this.chooseUpgrade(i)),t.appendChild(r)}),re("upgrades").classList.add("show"),this.waveState="choose",this.chooseT=0}chooseUpgrade(e){if(this.waveState!=="choose"||!this.offer||!this.offer[e])return;let t=this.offer[e];this.up[t.id]=(this.up[t.id]||0)+1;let n=this.player,i=this.arsenal;t.id==="maxhp"&&(n.maxHp+=25,n.hp=n.maxHp),t.id==="reload"&&(i.reloadSpeed=1+.3*this.up.reload),t.id==="mag"&&(mt.pistol.mag+=6,mt.shotgun.mag+=3),t.id==="nades"&&(this.maxNades+=2,i.grenades=Math.min(this.maxNades,i.grenades+2)),t.id==="pellets"&&(mt.shotgun.pellets+=3),document.querySelectorAll(".upcard").forEach((r,o)=>r.classList.add(o===e?"picked":"gone")),setTimeout(()=>re("upgrades").classList.remove("show"),450),this.toast(`${t.name}${this.up[t.id]>1?" "+"I".repeat(this.up[t.id]):""}`),this.audio.upgrade(),this.offer=null,this.afterUpgrade(),this.updateHUD()}afterUpgrade(){if((this.wavesHere||0)>=Xv[this.levelKey]){this.waveState="exit",this.level.setExit(!0);let e=this.levelKey==="halle"?"Raus auf den Hof!":"Zur\xFCck in die Halle!";setTimeout(()=>this.state==="play"&&this.waveState==="exit"&&this.banner("AUSGANG OFFEN",`${e} Folge der blauen Markierung.`,3.2),500);return}this.waveState="break",this.breakT=3.5}applyLevelEnv(){let e=this.level.def;this.scene.fog.density=e.fog,this.scene.fog.color.set(e.fogColor),this.scene.background.set(e.fogColor),this.camera.far=e.outdoor?400:140,this.camera.updateProjectionMatrix(),this.flashlight.intensity=e.outdoor?14:26}switchLevel(e){let t=this.level;t.setExit(!1),t.group.visible=!1,this.level=this.levels[e],this.levelKey=e,this.level.group.visible=!0,this.level.flowCell=-1,this.level.resetBarrels(),this.fx.level=this.level,this.fx.reset(),this.zombies.reset(),this.proj.reset(),this.pickups.forEach(i=>{i.active=!1,i.holder.visible=!1}),this.minimap.setLevel(this.level),this.applyLevelEnv();let n=this.player;n.pos.set(this.level.playerStart.x,0,this.level.playerStart.z),n.y=this.level.playerStart.y,n.vel.set(0,0,0),n.vy=0,n.onGround=!0,n.yaw=this.level.def.startYaw,n.pitch=0,this.wavesHere=0}travel(){this.waveState="travel",this.travelT=0,this.binoc=!1,this.rmb=!1,re("fade").classList.add("on"),re("nextwave").classList.remove("show"),this.audio.whoosh()}updateTravel(e){if(this.travelT+=e,this.travelT>=.7&&!this._switched){this._switched=!0;let t=this.levelKey==="halle"?"hof":"halle";if(this.switchLevel(t),t==="hof"){let n=this.arsenal,i=!n.owned.sniper;n.owned.sniper=!0,this.hasBinoc=!0,i&&(n.state.sniper.ammo=mt.sniper.mag,n.state.sniper.reserve=10,n.select("sniper")),this.banner("DER HOF",i?ts?"Neu: Gewehr (unten in der Leiste, \u25CE = Zielfernrohr) \xB7 Fernglas":"Neu: Scharfsch\xFCtzengewehr (4, rechte Maustaste = Zielfernrohr) \xB7 Fernglas (B)":"Vom Dach aus hast du den \xDCberblick",4.5)}else this.banner("DIE HALLE","Wieder drinnen \u2013 eng und laut",3)}this.travelT>=1&&(re("fade").classList.remove("on"),this._switched=!1,this.waveState="break",this.breakT=4.5,this.updateHUD())}pickSpawn(){let e=this.player.pos,t=this.level.spawns.map(s=>({s,d:s.distanceTo(e)})).filter(s=>s.d>(this.level.outdoor?22:10)).sort((s,r)=>s.d-r.d);if(!t.length)return null;let n=this.level.outdoor?t:t.slice(0,Math.min(4,t.length)),i=mu(n).s;return new R(i.x+(Math.random()-.5)*.8,0,i.z+(Math.random()-.5)*.8)}updatePlayer(e){let t=this.player;if(t.dead){t.deadT+=e,t.pitch+=(.5-t.pitch)*Math.min(1,e*2),t.deadT>2.4&&this.state==="play"&&this.gameOver();return}let n=this.keys,i=(n.KeyW||n.ArrowUp?1:0)-(n.KeyS||n.ArrowDown?1:0),s=(n.KeyD||n.ArrowRight?1:0)-(n.KeyA||n.ArrowLeft?1:0),r=1,o=this.touch;o&&o.move.mag>0&&!i&&!s&&(i=o.move.y,s=o.move.x,r=Math.max(.35,o.move.mag));let c=(this.scopeAmt||0)>.3||(this.binocAmt||0)>.3,l=(n.ShiftLeft||n.ShiftRight||o&&o.sprint)&&i>0&&!c,h=(l?7.6:5)*(1+.1*(this.up.speed||0))*(c?.45:1)*(l?1:r),u=-Math.sin(t.yaw),d=-Math.cos(t.yaw),f=Math.cos(t.yaw),m=-Math.sin(t.yaw),b=u*i+f*s,g=d*i+m*s,p=Math.hypot(b,g);p>0&&(b/=p,g/=p);let x=(p>0?14:10)*(t.onGround?1:.35);t.vel.x+=(b*h-t.vel.x)*Math.min(1,x*e),t.vel.z+=(g*h-t.vel.z)*Math.min(1,x*e),t.pos.x+=t.vel.x*e,t.pos.z+=t.vel.z*e,this.level.collide(t.pos,.36,t.y);for(let y of this.zombies.alive){if(Math.abs(t.y-y.root.position.y)>1.2)continue;let S=t.pos.x-y.root.position.x,A=t.pos.z-y.root.position.z,_=Math.hypot(S,A),w=.37+y.radius;_<w&&_>1e-4&&(t.pos.x=y.root.position.x+S/_*w,t.pos.z=y.root.position.z+A/_*w)}this.level.collide(t.pos,.36,t.y);let T=this.level.groundAt(t.pos.x,t.pos.z,.36,t.y);if(t.onGround&&T>t.y+.01&&T-t.y<.65)t.y=Math.min(T,t.y+e*7);else if(!t.onGround||t.y>T+.01)if(t.vy-=19*e,t.y+=t.vy*e,t.y<=T){let y=-t.vy;t.y=T,t.vy=0,t.onGround||(t.land=Math.min(1,y/9),this.audio.land(y/7)),t.onGround=!0}else t.onGround=!1;else t.y=T,t.vy=0,t.onGround=!0;t.land=Math.max(0,t.land-e*4);let v=Math.hypot(t.vel.x,t.vel.z);this.moving=t.onGround?Math.min(1,v/5):0,this.sprinting=l,t.onGround&&(t.bob+=v*e*1.25,t.stepAcc+=v*e,t.stepAcc>(l?2.1:1.75)&&(t.stepAcc=0,this.audio.step(l?.16:.11))),this.updatePickups(e)}updateZoom(e){let t=this.arsenal,n=this.state==="play"&&!this.player.dead;(t.current!=="sniper"||t.pending)&&(this.rmb=!1),n||(this.rmb=!1,this.binoc=!1);let i=this.rmb&&!this.binoc&&t.current==="sniper"&&!t.reloading&&!t.busy?1:0,s=this.binoc?1:0;this.scopeAmt=(this.scopeAmt||0)+(i-(this.scopeAmt||0))*Math.min(1,e*12),this.binocAmt=(this.binocAmt||0)+(s-(this.binocAmt||0))*Math.min(1,e*10),this.scopeAmt<.01&&(this.scopeAmt=0),this.binocAmt<.01&&(this.binocAmt=0);let r=74+(8.5-74)*this.scopeAmt+-58*this.binocAmt*(1-this.scopeAmt);Math.abs(this.camera.fov-r)>.01&&(this.camera.fov=r,this.camera.updateProjectionMatrix()),this.renderer.toneMappingExposure=1.15+.9*this.scopeAmt+.6*this.binocAmt*(1-this.scopeAmt);let o=this.keys.ShiftLeft||this.keys.ShiftRight||this.touch&&this.touch.hold;this.outOfBreath&&(this.breath=Math.min(1,(this.breath||0)+e*.35),this.breath>=1&&(this.outOfBreath=!1)),this.steady=!1,this.scopeAmt>.5&&o&&!this.outOfBreath?(this.steady=!0,this.breath=Math.max(0,(this.breath??1)-e/3.5),this.breath<=0&&(this.outOfBreath=!0)):this.outOfBreath||(this.breath=Math.min(1,(this.breath??1)+e*.5));let c=re("scope"),l=re("binoc");if(c.classList.toggle("on",this.scopeAmt>.85),l.classList.toggle("on",this.binocAmt>.85&&this.scopeAmt<.5),re("crosshair").style.opacity=this.scopeAmt>.3||this.binocAmt>.3?0:1,this.scopeAmt>.85||this.binocAmt>.85){let h=this.camera,u=h.getWorldPosition(new R),d=new R(0,0,-1).applyQuaternion(h.quaternion),m=new hn(u,d,0,260).intersectObjects(this.level.colliders,!1)[0],b=m?m.distance:260,g=this.zombies.raycast(u,d,b),p=g?g.t:m?m.distance:null,x=p?`${Math.round(p)} m`:"\u2013 m";if(re("scope-range").textContent=x,re("binoc-range").textContent=x,re("scope-breath").style.width=Math.round((this.breath??1)*100)+"%",re("scope-breath").parentNode.classList.toggle("low",!!this.outOfBreath),this.binocAmt>.85&&this.scopeAmt<.5){let T=g?g.z:null;if(!T){let v=.035;for(let y of this.zombies.alive){let S=y.root.position.clone();S.y+=y.height*.6;let A=S.sub(u),_=A.length();A.normalize();let w=Math.acos(Math.min(1,A.dot(d)));w<v&&_<b+2&&(v=w,T=y)}}T&&!T.marked?(this._markTarget!==T&&(this._markTarget=T,this._markT=0),this._markT+=e,re("binoc-mark").textContent="Markiere \u2026",this._markT>.3&&(T.marked=!0,this.audio.mark(),this._markTarget=null)):(this._markTarget=null,re("binoc-mark").textContent=T&&T.marked?"Markiert: +30 % Schaden":"")}}}placeCamera(){let e=this.player,t=this.camera,n=Math.abs(Math.sin(e.bob*Math.PI*.5))*.055*(this.moving||0),i=Math.sin(e.bob*Math.PI*.25)*.03*(this.moving||0),s=e.y+1.62-(e.land||0)*.12;e.dead&&(s=Math.max(e.y+.35,e.y+1.62-e.deadT*1.4)),t.position.set(e.pos.x+Math.cos(e.yaw)*i,s+n,e.pos.z-Math.sin(e.yaw)*i);let r=e.shake*e.shake;t.rotation.order="YXZ";let o=(this.scopeAmt||0)*(this.steady?.12:this.outOfBreath?1.8:1),c=this.time||0,l=(Math.sin(c*.9)*.0035+Math.sin(c*2.3+1)*.0014)*o,h=(Math.sin(c*1.3+2)*.0028+Math.sin(c*3.1)*.001)*o;t.rotation.y=e.yaw+l+(Math.random()-.5)*r*.03,t.rotation.x=e.pitch+h+(Math.random()-.5)*r*.03,t.rotation.z=(e.dead?Math.min(.5,e.deadT*.4):0)+Math.sin(e.bob*Math.PI*.25)*.004*(this.moving||0)}frame(){let e=performance.now()/1e3,t=this._last?e-this._last:.016;this._last=e,t=Math.min(t,.05),!this.frozen&&(this.perf(t),this.update(t),this.composer.render(t))}sim(e,t=1/60){for(let n=0;n<e;n+=t)this.update(t);this.composer.render(t)}update(e){this.time+=e;let t=this.state==="play";if(t){this.updatePlayer(e),this.spawnTick(e),this.zombies.update(e,this.player),this.proj.update(e);let l=this.arsenal;if(this.mouseDown&&l.cooldown<=0&&!l.reloading){this._holdT=(this._holdT||0)+e;let h=l.current==="pistol"?.26:.05;this._holdT>h&&(this._holdT=0,this.tryFire())}else this._holdT=0;l.st.ammo===0&&l.st.reserve>0&&!l.reloading&&l.pumpT<=0&&l.cooldown<=0&&!l.busy&&this.reload(),this.quipCD-=e,this.player.shake=Math.max(0,this.player.shake-e*3),this.damageFx=Math.max(0,this.damageFx-e*1.3),this.flashFx=Math.max(0,this.flashFx-e*3),(this._hudT===void 0||(this._hudT-=e)<0)&&(this._hudT=.1,this.updateHUD()),this.minimap.draw(this)}else this.state==="menu"&&(this.player.yaw+=e*.08,this.player.pitch=-.05);if(this.placeCamera(),this.level.update(this.time,this.camera.position),this.fx.update(t||this.state==="over"?e:e*.3),this.muzzleT>0){this.muzzleT-=e;let l=new R(.25,-.1,-.8).applyMatrix4(this.camera.matrixWorld);this.muzzleLight.position.copy(l),this.muzzleLight.intensity=(this.arsenal.current==="pistol"?9:16)*Math.max(0,this.muzzleT/.06)}else this.muzzleLight.intensity=0;for(let l of this.boomLights)l.t>0?(l.t-=e,l.l.intensity=90*Math.max(0,l.t/.45)**1.5):l.l.intensity=0;let n=this.level.lightAt(this.camera.position)*.06+(this.level.def.ambient||0)+(this.muzzleT>0?1.5:0)+this.flashFx*2;this.fx.setLight(Math.min(1.5,n));let i=this.events;i.length=0,this.arsenal.update(e,{moving:t&&this.moving||0,sprint:this.sprinting,bobPhase:this.player.bob*Math.PI*.5,lookDX:this.look.dx,lookDY:this.look.dy,light:n,time:this.time},i);for(let l of i)l==="pumpBack"&&this.audio.pump(!0),l==="boltBack"&&this.audio.bolt(!0),l==="boltFwd"&&this.audio.bolt(!1),l==="pumpFwd"&&this.audio.pump(!1),l==="shellIn"&&this.audio.shellIn(),l==="nadeRelease"&&this.releaseGrenade(),l==="switched"&&this.updateHUD();if(this.look.dx=0,this.look.dy=0,this.updateZoom(e),this.touch&&this.touch.update(),this.arsenal.rig.visible=this.state!=="menu"&&!this.player.dead&&this.scopeAmt<.6&&this.binocAmt<.4,this.tracers)for(let l of this.tracers)l.t=Math.max(0,l.t-e),l.l.material.opacity=l.t/.18*.9;if(this.audio.ready){let l=new R(0,0,-1).applyQuaternion(this.camera.quaternion),h=new R(0,1,0).applyQuaternion(this.camera.quaternion);this.audio.setListener(this.camera.position,l,h)}let s=this.arsenal,o=(s.current==="shotgun"?14:s.current==="rocket"?9:5)+(this.moving||0)*6+(s.cooldown>.08?4:0)+(this.player.onGround?0:6);re("crosshair").style.setProperty("--gap",o.toFixed(1)+"px");let c=this.post.uniforms;c.uTime.value=this.time,c.uDamage.value=this.damageFx,c.uFlash.value=this.flashFx||0,c.uLow.value=this.player.hp<35&&!this.player.dead?(35-this.player.hp)/35:this.player.dead?1:0}perf(e){if(this.state!=="play")return;let t=this.frameTimes;if(t.push(e),t.length<90)return;let n=t.reduce((s,r)=>s+r,0)/t.length;t.length=0;let i=this.dynScale;n>1/45?i=Math.max(.55,i-.12):n<1/75&&(i=Math.min(1,i+.06)),i!==this.dynScale&&(this.dynScale=i,this.resize())}},jv=new vu;jv.init().catch(a=>{console.error(a),re("loadtxt").textContent="Fehler beim Laden \u2013 bitte Seite neu laden."});
