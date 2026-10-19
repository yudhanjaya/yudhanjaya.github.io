/* The Library, as a galaxy: a slowly turning spiral of letters and numbers that now and then swirls inward
   and settles into one of the blurbs. Quotes come from _data/quotes.yml via a JSON block written by
   _includes/library.html. Controls (#qp, #qa, #qn) and the caption (#cap) are unchanged. */
(function(){
  var node=document.getElementById('library-quotes');if(!node)return;
  var Q=JSON.parse(node.textContent).map(function(q){return{t:q.text,b:q.book,by:q.by}});
  if(!Q.length)return;
  var c=document.getElementById('gal');if(!c)return;
  var g=c.getContext('2d'),cap=document.getElementById('cap'),CAP0=cap.innerHTML,site=document.documentElement;
  var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
  function esc(s){return String(s).replace(/[&<>"]/g,function(ch){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]})}
  function css(n){return getComputedStyle(site).getPropertyValue(n).trim()}
  function ease(x){x=x<0?0:x>1?1:x;return x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2}
  function clamp(x){return x<0?0:x>1?1:x}
  var GLYPHS='0123456789abcdefghijklmnopqrstuvwxyz0123456789,.;',TAU=Math.PI*2,ARMS=3,TILT=.56,ROT=-.4;
  function rg(){return GLYPHS.charAt(Math.floor(Math.random()*GLYPHS.length))}

  var W=0,H=0,D=1,CX=0,CY=0,R=1,FS=14,CW=8,LH=20,P=[],tg=[],col={};
  var DUR={drift:3200,gather:3400,hold:6500,release:2400};
  function dur(k){return reduce?1:DUR[k]}

  function readColors(){col={ink:css('--ink'),ink2:css('--ink-2'),red:css('--red'),teal:css('--teal'),p2:css('--paper-2')}}

  function build(){
    var n=Math.round(Math.max(260,Math.min(1100,W*H/260)));P=[];
    for(var i=0;i<n;i++){
      var u=Math.random(),r=Math.min(1.04,-Math.log(1-u*.965)*.3),arm=i%ARMS,
        twist=3.3*Math.log(1+r*4)/Math.log(5),
        a=arm*TAU/ARMS+twist*1.15+(Math.random()-.5)*(.2+.5*Math.random());
      var k=Math.random();
      P.push({r:r,a:a,w:(1+.28*(1-Math.min(1,r)))*(1+(Math.random()-.5)*.1),g:rg(),seed:Math.random()*1000,
        sz:r<.18?9+Math.random()*2:8+Math.random()*3.2,
        c:k<.07?2:k<.3?1:0,al:.25+.55*Math.random()*(1-r*.55),ti:-1,dl:0})}
  }
  /* orbit position of particle p at time t, in canvas px */
  function orbit(p,t){
    var a=p.a+p.w*t*.00008*TAU*.5,wob=1+.03*Math.sin(t*.0004+p.seed),
      x=Math.cos(a)*p.r*R*wob,y=Math.sin(a)*p.r*R*wob*TILT,cr=Math.cos(ROT),sr=Math.sin(ROT);
    return[CX+x*cr-y*sr,CY+x*sr+y*cr]}

  function geom(){
    D=Math.min(devicePixelRatio||1,2);W=c.clientWidth;H=c.clientHeight;c.width=W*D;c.height=H*D;
    CX=W/2;CY=H*.46;R=Math.min(W*.6,H*.72);build();layout()}

  /* lay the current quote out in monospace lines, centred on the galaxy */
  function layout(){
    tg=[];if(qi<0||!W)return;
    var text=Q[qi].t,maxW=W-(W<420?36:64),maxH=H-150,f,lines,cw,lh;
    for(f=W<420?15:17;f>=9;f--){
      g.font='500 '+f+'px "DM Mono",monospace';cw=g.measureText('M').width||f*.6;lh=Math.round(f*1.6);
      var cols=Math.max(12,Math.floor(maxW/cw)),words=text.split(' '),ln='';lines=[];
      words.forEach(function(w){var t=ln?ln+' '+w:w;if(t.length>cols&&ln){lines.push(ln);ln=w}else ln=t});lines.push(ln);
      if(lines.length*lh<=maxH)break}
    FS=f;CW=cw;LH=lh;
    var top=CY-lines.length*lh/2+lh/2;
    lines.forEach(function(l,ri){for(var ci=0;ci<l.length;ci++){var ch=l.charAt(ci);if(ch===' ')continue;
      tg.push({ch:ch,x:CX+(ci-(l.length-1)/2)*cw,y:top+ri*lh,a:0})}});
    /* match targets to particles in angular order so the swirl looks coherent */
    tg.forEach(function(t){t.a=Math.atan2(t.y-CY,t.x-CX)});
    tg.sort(function(a,b){return a.a-b.a});
    P.forEach(function(p){p.ti=-1});
    var order=P.map(function(p,i){var o=orbit(p,To());return{i:i,a:Math.atan2(o[1]-CY,o[0]-CX)}}).sort(function(a,b){return a.a-b.a}),
      m=Math.min(tg.length,P.length),off=Math.floor(Math.random()*order.length);
    for(var k=0;k<m;k++){var pi=order[(off+Math.floor(k*order.length/m))%order.length].i;P[pi].ti=k;P[pi].dl=.5*k/m+.12*Math.random()}}

  /* state: drift (galaxy turns) -> gather (swirl in) -> hold (quote legible) -> release -> drift */
  var phase='drift',T=0,ps=0,qi=-1,queue=null,paused=false;
  function To(){return reduce?0:T}
  function setCap(on){cap.classList.add('sw');setTimeout(function(){
    if(on&&qi>=0){var q=Q[qi];cap.innerHTML='<b>'+esc(q.b)+'</b><span class="by">'+esc(q.by)+'</span>'}else cap.innerHTML=CAP0;cap.classList.remove('sw')},reduce?0:350)}
  function begin(i){qi=(i+Q.length)%Q.length;queue=null;if(!W)geom();layout();phase='gather';ps=T}
  function go(i){
    i=(i+Q.length)%Q.length;
    if(phase==='hold'){queue=i;phase='release';ps=T;setCap(false)}
    else if(phase==='drift'){begin(i)}
    else queue=i}
  document.getElementById('qn').addEventListener('click',function(){go((queue!==null?queue:qi)+1)});
  document.getElementById('qp').addEventListener('click',function(){go((queue!==null?queue:qi)-1)});
  var qa=document.getElementById('qa');
  qa.addEventListener('click',function(){paused=!paused;qa.setAttribute('aria-pressed',String(paused));qa.textContent=paused?'Resume':'Pause'});

  var last=performance.now();
  function step(ts){
    var dt=Math.min(100,ts-last);last=ts;if(!paused)T+=dt;
    var el=T-ps;
    if(phase==='drift'){if(el>=(qi<0?1200:dur('drift')))begin(queue!==null?queue:qi+1)}
    else if(phase==='gather'){if(el>=dur('gather')){phase='hold';ps=T;setCap(true)}}
    else if(phase==='hold'){if(queue!==null&&el>700||(!reduce&&el>dur('hold'))){phase='release';ps=T;setCap(false)}}
    else if(phase==='release'){if(el>=dur('release')){phase='drift';ps=T}}
    draw(el);requestAnimationFrame(step)}

  /* how far (0..1) particle p has travelled toward its place in the quote */
  function prog(p,el){
    if(p.ti<0)return 0;
    var span=.5;
    if(phase==='gather')return ease((el/dur('gather')-p.dl*.9)/span);
    if(phase==='hold')return 1;
    if(phase==='release')return 1-ease((el/dur('release')-p.dl*.9)/span);
    return 0}
  function dimOf(el){
    if(phase==='gather')return ease(el/dur('gather')*1.3);
    if(phase==='hold')return 1;
    if(phase==='release')return 1-ease(el/dur('release')*1.3);
    return 0}

  function draw(el){
    if(!c.clientWidth)return;
    if(!W||c.width!==Math.round(c.clientWidth*Math.min(devicePixelRatio||1,2))||c.height!==Math.round(c.clientHeight*Math.min(devicePixelRatio||1,2))){geom();readColors()}
    if(!col.ink)readColors();
    g.setTransform(1,0,0,1,0,0);g.clearRect(0,0,c.width,c.height);g.scale(D,D);
    g.textAlign='center';g.textBaseline='middle';
    var t=To(),dim=dimOf(el),i,p,o;
    /* core glow */
    var gr=g.createRadialGradient(CX,CY,0,CX,CY,R*.5);gr.addColorStop(0,col.red);gr.addColorStop(1,'transparent');
    g.globalAlpha=.16*(1-dim*.6);g.fillStyle=gr;g.fillRect(0,0,W,H);g.globalAlpha=1;
    /* the galaxy */
    g.font='400 10px "DM Mono",monospace';
    var late=[];
    for(i=0;i<P.length;i++){p=P[i];
      var s=prog(p,el);
      if(p.ti>=0&&s>0){late.push(i);continue}
      o=orbit(p,t);
      var gl=p.g;if(!reduce){var ph=Math.floor(t/1500+p.seed);if(ph!==p.ph){p.ph=ph;if(Math.random()<.25){p.g=rg();gl=p.g}}}
      g.globalAlpha=p.al*(1-dim*.7);g.fillStyle=p.c===2?col.red:p.c===1?col.teal:col.ink2;
      g.font='400 '+p.sz.toFixed(1)+'px "DM Mono",monospace';
      g.fillText(gl,o[0],o[1])}
    /* glyphs in transit, or settled as the quote */
    for(var k=0;k<late.length;k++){p=P[late[k]];var tgt=tg[p.ti],s2=prog(p,el);o=orbit(p,t);
      var dx0=o[0]-CX,dy0=o[1]-CY,r0=Math.hypot(dx0,dy0),a0=Math.atan2(dy0,dx0),
        dx1=tgt.x-CX,dy1=tgt.y-CY,r1=Math.hypot(dx1,dy1),a1=Math.atan2(dy1,dx1),da=a1-a0;
      da=da-TAU*Math.round(da/TAU);
      var e=s2,swirl=reduce?0:TAU*.85*e*(1-e)*4*(p.seed%2<1?1:-1)*.5,
        a=a0+da*e+swirl,r=r0+(r1-r0)*e,x=CX+Math.cos(a)*r,y=CY+Math.sin(a)*r;
      if(s2>=.999){x=tgt.x;y=tgt.y}
      var settled=s2>.9,ch=settled?tgt.ch:(reduce?tgt.ch:(Math.floor(t/90+p.seed)%3===0?rg():p.g));
      g.globalAlpha=.4+.6*s2;g.fillStyle=s2>.5?col.ink:(p.c===2?col.red:p.c===1?col.teal:col.ink2);
      g.font=(s2>.5?'500 ':'400 ')+(p.sz+(FS-p.sz)*e).toFixed(1)+'px "DM Mono",monospace';
      g.fillText(ch,x,y)}
    g.globalAlpha=1;
    /* the centre */
    if(dim<.5){g.globalAlpha=1-dim*2;g.fillStyle=col.red;g.beginPath();g.arc(CX,CY,2.6,0,TAU);g.fill();g.globalAlpha=1}
  }

  function refresh(){W=0;col={}}
  addEventListener('resize',refresh);
  document.addEventListener('atlas:theme',refresh);
  (document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(function(){W=0;requestAnimationFrame(step)});
})();
