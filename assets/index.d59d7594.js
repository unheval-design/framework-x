import{z as S,j as v,A as I}from"./index.4987c802.js";import{I as F}from"./Navbar.5a650789.js";const ie=S("todo",()=>{const e=v([]),i=v(0),t=v(""),n=v(!1),o=v(null),a=(r,f=!1,C=!0,g)=>{const p={id:F(),completed:!1,title:r,guide:i.value,project:t.value,challenge:g};C&&(o.value=p.id),f||e.value.unshift(p),f&&e.value.push(p)},s=(r=!0)=>{n.value=r},u=r=>{e.value=e.value.filter(f=>f.id!==r)},c=r=>{e.value=e.value.filter(f=>f.challenge!==r)},h=I(()=>e.value.filter(r=>r.guide.substage.id===i.value.substage.id&&t.value===r.project)),l=I(()=>e.value.filter(r=>r.project===t.value).length),m=I(()=>e.value.filter(r=>r.project===t.value&&r.completed).length);return{listAll:e,list:h,add:a,notify:s,guide:i,project:t,remove:u,removeChallengeTasks:c,lastTaskCreated:o,taskAdded:n,currentTodos:l,currentTodosCompleted:m}},{persist:!0}),ne=S("challenges",()=>{const e=v([]);v({});const i=v(""),t=o=>{e.value.find(a=>a.challenge_id===o&&a.project===i.value)||e.value.push({project:i.value,challenge_id:o})},n=I(()=>e.value.filter(o=>o.project===i.value).length);return{add:t,listAll:e,currentChallenges:n,project:i}},{persist:!0}),oe=S("evaluations",()=>{const e=v([]);v({});const i=v(""),t=(o,a,s)=>{e.value.find(u=>u.question===a&&u.evaluation===o&&u.project===i.value)||e.value.push({project:i.value,evaluation:o,question:a,status:s})},n=I(()=>e.value.filter(o=>o.project===i.value&&o.status).length);return{add:t,listAll:e,currentEvaluations:n,project:i}},{persist:!0});function _(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function j(e,i){for(var t=0;t<i.length;t++){var n=i[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function A(e,i,t){return i&&j(e.prototype,i),t&&j(e,t),e}function E(e){return+e.replace(/px/,"")}function M(e){var i=window.devicePixelRatio,t=getComputedStyle(e),n=E(t.getPropertyValue("width")),o=E(t.getPropertyValue("height"));e.setAttribute("width",(n*i).toString()),e.setAttribute("height",(o*i).toString())}function d(e,i){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,n=Math.random()*(i-e)+e;return Math.floor(n*Math.pow(10,t))/Math.pow(10,t)}function N(e){return e[d(0,e.length)]}var w=.00125,D=5e-4,x=9e-4,L=1e-5,z=6,k=80,B=.9,q=1.7,U=.2,X=.6,W=.03,H=.07,T=15,y=82,V=150,G=100,J=250,Y=40,$=["#fcf403","#62fc03","#f4fc03","#03e7fc","#03fca5","#a503fc","#fc03ad","#fc03c2"];function P(e){var i=1920;return Math.log(e)/Math.log(i)}var R=function(){function e(i){_(this,e);var t=i.initialPosition,n=i.direction,o=i.confettiRadius,a=i.confettiColors,s=i.emojis,u=i.emojiSize,c=i.canvasWidth,h=d(B,q,3),l=h*P(c);this.confettiSpeed={x:l,y:l},this.finalConfettiSpeedX=d(U,X,3),this.rotationSpeed=s.length?.01:d(W,H,3)*P(c),this.dragForceCoefficient=d(D,x,6),this.radius={x:o,y:o},this.initialRadius=o,this.rotationAngle=n==="left"?d(0,.2,3):d(-.2,0,3),this.emojiSize=u,this.emojiRotationAngle=d(0,2*Math.PI),this.radiusYUpdateDirection="down";var m=n==="left"?d(y,T)*Math.PI/180:d(-T,-y)*Math.PI/180;this.absCos=Math.abs(Math.cos(m)),this.absSin=Math.abs(Math.sin(m));var r=d(-V,0),f={x:t.x+(n==="left"?-r:r)*this.absCos,y:t.y-r*this.absSin};this.currentPosition=Object.assign({},f),this.initialPosition=Object.assign({},f),this.color=s.length?null:N(a),this.emoji=s.length?N(s):null,this.createdAt=new Date().getTime(),this.direction=n}return A(e,[{key:"draw",value:function(t){var n=this.currentPosition,o=this.radius,a=this.color,s=this.emoji,u=this.rotationAngle,c=this.emojiRotationAngle,h=this.emojiSize,l=window.devicePixelRatio;a?(t.fillStyle=a,t.beginPath(),t.ellipse(n.x*l,n.y*l,o.x*l,o.y*l,u,0,2*Math.PI),t.fill()):s&&(t.font="".concat(h,"px serif"),t.save(),t.translate(l*n.x,l*n.y),t.rotate(c),t.textAlign="center",t.fillText(s,0,0),t.restore())}},{key:"updatePosition",value:function(t,n){var o=this.confettiSpeed,a=this.dragForceCoefficient,s=this.finalConfettiSpeedX,u=this.radiusYUpdateDirection,c=this.rotationSpeed,h=this.createdAt,l=this.direction,m=n-h;if(o.x>s&&(this.confettiSpeed.x-=a*t),this.currentPosition.x+=o.x*(l==="left"?-this.absCos:this.absCos)*t,this.currentPosition.y=this.initialPosition.y-o.y*this.absSin*m+w*Math.pow(m,2)/2,this.rotationSpeed-=this.emoji?1e-4:L*t,this.rotationSpeed<0&&(this.rotationSpeed=0),this.emoji){this.emojiRotationAngle+=this.rotationSpeed*t%(2*Math.PI);return}u==="down"?(this.radius.y-=t*c,this.radius.y<=0&&(this.radius.y=0,this.radiusYUpdateDirection="up")):(this.radius.y+=t*c,this.radius.y>=this.initialRadius&&(this.radius.y=this.initialRadius,this.radiusYUpdateDirection="down"))}},{key:"getIsVisibleOnCanvas",value:function(t){return this.currentPosition.y<t+G}}]),e}();function Z(){var e=document.createElement("canvas");return e.style.position="fixed",e.style.width="100%",e.style.height="100%",e.style.top="0",e.style.left="0",e.style.zIndex="1000",e.style.pointerEvents="none",document.body.appendChild(e),e}function K(e){var i=e.confettiRadius,t=i===void 0?z:i,n=e.confettiNumber,o=n===void 0?e.confettiesNumber||(e.emojis?Y:J):n,a=e.confettiColors,s=a===void 0?$:a,u=e.emojis,c=u===void 0?e.emojies||[]:u,h=e.emojiSize,l=h===void 0?k:h;return e.emojies&&console.error("emojies argument is deprecated, please use emojis instead"),e.confettiesNumber&&console.error("confettiesNumber argument is deprecated, please use confettiNumber instead"),{confettiRadius:t,confettiNumber:o,confettiColors:s,emojis:c,emojiSize:l}}var Q=function(){function e(i){var t=this;_(this,e),this.canvasContext=i,this.shapes=[],this.promise=new Promise(function(n){return t.resolvePromise=n})}return A(e,[{key:"getBatchCompletePromise",value:function(){return this.promise}},{key:"addShapes",value:function(){var t;(t=this.shapes).push.apply(t,arguments)}},{key:"complete",value:function(){var t;return this.shapes.length?!1:((t=this.resolvePromise)===null||t===void 0||t.call(this),!0)}},{key:"processShapes",value:function(t,n,o){var a=this,s=t.timeDelta,u=t.currentTime;this.shapes=this.shapes.filter(function(c){return c.updatePosition(s,u),c.draw(a.canvasContext),o?c.getIsVisibleOnCanvas(n):!0})}}]),e}(),ae=function(){function e(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};_(this,e),this.activeConfettiBatches=[],this.canvas=i.canvas||Z(),this.canvasContext=this.canvas.getContext("2d"),this.requestAnimationFrameRequested=!1,this.lastUpdated=new Date().getTime(),this.iterationIndex=0,this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}return A(e,[{key:"loop",value:function(){this.requestAnimationFrameRequested=!1,M(this.canvas);var t=new Date().getTime(),n=t-this.lastUpdated,o=this.canvas.offsetHeight,a=this.iterationIndex%10===0;this.activeConfettiBatches=this.activeConfettiBatches.filter(function(s){return s.processShapes({timeDelta:n,currentTime:t},o,a),a?!s.complete():!0}),this.iterationIndex++,this.queueAnimationFrameIfNeeded(t)}},{key:"queueAnimationFrameIfNeeded",value:function(t){this.requestAnimationFrameRequested||this.activeConfettiBatches.length<1||(this.requestAnimationFrameRequested=!0,this.lastUpdated=t||new Date().getTime(),requestAnimationFrame(this.loop))}},{key:"addConfetti",value:function(){for(var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=K(t),o=n.confettiRadius,a=n.confettiNumber,s=n.confettiColors,u=n.emojis,c=n.emojiSize,h=this.canvas.getBoundingClientRect(),l=h.width,m=h.height,r=m*5/7,f={x:0,y:r},C={x:l,y:r},g=new Q(this.canvasContext),p=0;p<a/2;p++){var b=new R({initialPosition:f,direction:"right",confettiRadius:o,confettiColors:s,confettiNumber:a,emojis:u,emojiSize:c,canvasWidth:l}),O=new R({initialPosition:C,direction:"left",confettiRadius:o,confettiColors:s,confettiNumber:a,emojis:u,emojiSize:c,canvasWidth:l});g.addShapes(b,O)}return this.activeConfettiBatches.push(g),this.queueAnimationFrameIfNeeded(),g.getBatchCompletePromise()}}]),e}();export{ae as J,ne as a,oe as b,ie as u};
