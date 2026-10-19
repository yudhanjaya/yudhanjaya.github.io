/* The Library: wandering hexagonal galleries, where one page in the noise resolves into a quote.
   Quotes come from _data/quotes.yml via a JSON block written by _includes/library.html. */
(function(){
  var node=document.getElementById('library-quotes');if(!node)return;
  var Q=JSON.parse(node.textContent).map(function(q){return{t:q.text,b:q.book,by:q.by}});
  if(!Q.length)return;
  function esc(s){return String(s).replace(/[&<>"]/g,function(ch){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]})}
  var c=document.getElementById('gal');if(!c)return;var g=c.getContext('2d'),cap=document.getElementById('cap'),CAP0=cap.innerHTML,site=document.documentElement;
  var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
  var SQ3=Math.sqrt(3),DIRS=[[1,0],[0,1],[-1,1],[-1,0],[0,-1],[1,-1]],AB='abcdefghijklmnopqrstuv,. ';
  function rc(){return AB.charAt(Math.floor(Math.random()*AB.length))}
  function hs(q,r,k){var x=(q*73856093)^(r*19349663)^(k*83492791);x=Math.imul(x^(x>>>13),1274126177);return((x^(x>>>16))>>>0)/4294967296}
  function css(n){return getComputedStyle(site).getPropertyValue(n).trim()}
  function ease(x){x=x<0?0:x>1?1:x;return x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2}
  function cellPx(q,r){return[S*1.5*q,S*SQ3*(r+q/2)]}
  function nearest(x,y){var cx=(2/3*x)/S,cz=(-x/3+SQ3/3*y)/S,cy=-cx-cz,rx=Math.round(cx),ry=Math.round(cy),rz=Math.round(cz),dx=Math.abs(rx-cx),dy=Math.abs(ry-cy),dz=Math.abs(rz-cz);
    if(dx>dy&&dx>dz)rx=-ry-rz;else if(dy>dz)ry=-rx-rz;else rz=-rx-ry;return[rx,rz]}
  var W=0,H=0,D=1,S=30,PX=0,PY=0,PW=0,PH=0,FS=13,CW=8,LH=19,COLS=20,ROWS=8,PAD=14,HDR=24,NZ=[],TG=[],LT=null,addr='';
  function geom(){D=Math.min(devicePixelRatio||1,2);W=c.clientWidth;H=c.clientHeight;c.width=W*D;c.height=H*D;
    S=Math.max(24,Math.min(38,W/11));FS=W<380?12:13;g.font='400 '+FS+'px "DM Mono",monospace';CW=g.measureText('M').width||FS*.6;LH=Math.round(FS*1.55);
    PW=Math.min(W-28,420);PH=Math.min(H-118,360);PX=(W-PW)/2;PY=46;
    COLS=Math.max(16,Math.floor((PW-2*PAD)/CW));ROWS=Math.max(6,Math.floor((PH-2*PAD-HDR)/LH))}
  function layoutPage(){
    var n=COLS*ROWS;NZ=[];TG=[];LT=new Float32Array(n);for(var i=0;i<n;i++){NZ.push(rc());TG.push(null)}
    addr='GALLERY '+dest[0]+','+dest[1]+' · WALL '+(1+Math.floor(Math.random()*4))+' · SHELF '+(1+Math.floor(Math.random()*5))+' · VOL. '+(1+Math.floor(Math.random()*32))+' · P. '+(1+Math.floor(Math.random()*410));
    if(qi<0)return;
    var words=Q[qi].t.split(' '),lines=[],ln='',wm=COLS-2;
    words.forEach(function(w){var t=ln?ln+' '+w:w;if(t.length>wm&&ln){lines.push(ln);ln=w}else ln=t});lines.push(ln);
    var st=Math.max(0,Math.floor((ROWS-lines.length)/2)),tot=0,seen=0;lines.forEach(function(l){tot+=l.length});
    lines.forEach(function(l,ri){var off=Math.floor((COLS-l.length)/2);for(var ci=0;ci<l.length;ci++){var idx=(st+ri)*COLS+off+ci;if(idx<0||idx>=n||off+ci<0||off+ci>=COLS)continue;TG[idx]=l.charAt(ci);LT[idx]=.05+.62*(seen/tot)+.3*Math.random();seen++}})}
  /* world, walking, phases */
  var phase='idle',ps=performance.now(),qi=-1,queue=null,paused=false,Dp=0,pa=0,Ds=0,camX=0,camY=0,dest=[0,0],route=[],rlen=[],rtot=1,trail=[],old=[],head=[0,0];
  var DUR={idle:1200,walk:2600,open:600,decode:2400,hold:6500,scramble:1400,close:500};
  function dur(k){return reduce?1:DUR[k]}
  function startWalk(i){
    qi=i;queue=null;if(!W)geom();
    var cur=nearest(camX,camY),cell=cur,prev=-1,pts=[[camX,camY]],n=4+Math.floor(Math.random()*3);
    for(var k=0;k<n;k++){var d;do{d=Math.floor(Math.random()*6)}while(d===(prev+3)%6&&k>0);prev=d;cell=[cell[0]+DIRS[d][0],cell[1]+DIRS[d][1]];pts.push(cellPx(cell[0],cell[1]))}
    route=pts;rlen=[0];for(var j=1;j<pts.length;j++)rlen.push(rlen[j-1]+Math.hypot(pts[j][0]-pts[j-1][0],pts[j][1]-pts[j-1][1]));rtot=rlen[rlen.length-1]||1;
    old=trail;trail=pts;dest=cell;phase='walk';ps=performance.now()}
  function along(L){var j=1;while(j<rlen.length-1&&rlen[j]<L)j++;var t=(L-rlen[j-1])/((rlen[j]-rlen[j-1])||1);t=t<0?0:t>1?1:t;return[route[j-1][0]+(route[j][0]-route[j-1][0])*t,route[j-1][1]+(route[j][1]-route[j-1][1])*t,j]}
  function setCap(on){cap.classList.add('sw');setTimeout(function(){
    if(on){var q=Q[qi];cap.innerHTML='<b>'+esc(q.b)+'</b><span class="by">'+esc(q.by)+'</span>'}else cap.innerHTML=CAP0;cap.classList.remove('sw')},reduce?0:350)}
  function go(i){i=(i+Q.length)%Q.length;
    if(phase==='hold'||phase==='decode'){queue=i;phase='scramble';ps=performance.now();Ds=Dp;setCap(false)}
    else if(phase==='scramble'||phase==='close'){queue=i}
    else{pa=0;startWalk(i)}}
  document.getElementById('qn').addEventListener('click',function(){go((queue!==null?queue:qi)+1)});
  document.getElementById('qp').addEventListener('click',function(){go((queue!==null?queue:qi)-1)});
  var qa=document.getElementById('qa');
  qa.addEventListener('click',function(){paused=!paused;qa.setAttribute('aria-pressed',String(paused));qa.textContent=paused?'Resume':'Pause'});
  var last=performance.now();
  function qframe(ts){
    var dt=ts-last;last=ts;if(paused)ps+=dt;
    var el=ts-ps;
    if(phase==='idle'){if(el>dur('idle'))startWalk(0)}
    else if(phase==='walk'){var u=ease(el/dur('walk')),p=along(u*rtot);camX=p[0];camY=p[1];
      if(el>=dur('walk')){camX=route[route.length-1][0];camY=route[route.length-1][1];phase='open';ps=ts;layoutPage()}}
    else if(phase==='open'){pa=Math.min(1,el/dur('open'));if(el>=dur('open')){pa=1;phase='decode';ps=ts}}
    else if(phase==='decode'){Dp=Math.min(1,el/dur('decode'));if(el>=dur('decode')){Dp=1;phase='hold';ps=ts;setCap(true)}}
    else if(phase==='hold'){Dp=1;if(el>dur('hold')&&!reduce){phase='scramble';ps=ts;Ds=1;setCap(false)}}
    else if(phase==='scramble'){Dp=Ds*(1-Math.min(1,el/dur('scramble')));if(el>=dur('scramble')){Dp=0;phase='close';ps=ts}}
    else if(phase==='close'){pa=1-Math.min(1,el/dur('close'));if(el>=dur('close')){pa=0;startWalk(queue!==null?queue:(qi+1)%Q.length)}}
    draw();requestAnimationFrame(qframe)}
  function draw(){
    if(!c.clientWidth)return;
    if(!W||c.width!==Math.round(c.clientWidth*Math.min(devicePixelRatio||1,2))){geom();if(pa>0)layoutPage()}
    g.setTransform(1,0,0,1,0,0);g.clearRect(0,0,c.width,c.height);g.scale(D,D);
    var rule=css('--rule'),ink2=css('--ink-2'),red=css('--red'),acc=css('--teal'),ink=css('--ink'),pp=css('--paper'),p2=css('--paper-2');
    var ox=W/2-camX,oy=H*.46-camY,cq=nearest(camX,camY),Rg=Math.ceil(Math.max(W,H)/(S*1.5))+1,corners=[];
    for(var k=0;k<6;k++)corners.push([Math.cos(k*Math.PI/3)*S,Math.sin(k*Math.PI/3)*S]);
    /* map: galleries, shelves, vents */
    var cells=[];
    for(var dq=-Rg;dq<=Rg;dq++)for(var dr=Math.max(-Rg,-dq-Rg);dr<=Math.min(Rg,-dq+Rg);dr++){var q=cq[0]+dq,r=cq[1]+dr,pxy=cellPx(q,r),x=ox+pxy[0],y=oy+pxy[1];if(x<-S||x>W+S||y<-S||y>H+S)continue;cells.push([q,r,x,y])}
    g.lineWidth=1;g.strokeStyle=rule;g.globalAlpha=1;g.beginPath();
    cells.forEach(function(e){for(var k=0;k<6;k++){var a=corners[k];(k?g.lineTo:g.moveTo).call(g,e[2]+a[0],e[3]+a[1])}g.closePath()});g.stroke();
    g.globalAlpha=.8;g.beginPath();
    cells.forEach(function(e){var open=Math.floor(hs(e[0],e[1],1)*3);
      for(var k=0;k<6;k++){if(k%3===open)continue;var A=corners[k],B=corners[(k+1)%6],nx=-Math.cos(Math.PI/6+k*Math.PI/3),ny=-Math.sin(Math.PI/6+k*Math.PI/3);
        for(var j=1;j<=3;j++){var d=j*S*.085,ax=A[0]+(B[0]-A[0])*.16+nx*d,ay=A[1]+(B[1]-A[1])*.16+ny*d,bx=A[0]+(B[0]-A[0])*.84+nx*d,by=A[1]+(B[1]-A[1])*.84+ny*d;g.moveTo(e[2]+ax,e[3]+ay);g.lineTo(e[2]+bx,e[3]+by)}}});g.stroke();
    g.globalAlpha=.9;g.beginPath();
    cells.forEach(function(e){for(var k=0;k<6;k++){var a=corners[k];(k?g.lineTo:g.moveTo).call(g,e[2]+a[0]*.24,e[3]+a[1]*.24)}g.closePath()});g.stroke();g.globalAlpha=1;
    /* destination gallery */
    if(phase!=='idle'&&phase!=='walk'||(phase==='walk')){var dp=cellPx(dest[0],dest[1]),dx=ox+dp[0],dy=oy+dp[1];
      if(phase!=='walk'||true){g.beginPath();for(var k2=0;k2<6;k2++){var a2=corners[k2];(k2?g.lineTo:g.moveTo).call(g,dx+a2[0],dy+a2[1])}g.closePath();g.fillStyle=pp;g.globalAlpha=.7;g.fill();g.globalAlpha=1;g.strokeStyle=red;g.lineWidth=2;g.stroke();g.lineWidth=1}}
    /* trails */
    function poly(pts,upTo,al,lw){g.strokeStyle=red;g.globalAlpha=al;g.lineWidth=lw;g.beginPath();g.moveTo(ox+pts[0][0],oy+pts[0][1]);for(var j=1;j<pts.length&&j<=upTo;j++)g.lineTo(ox+pts[j][0],oy+pts[j][1]);g.stroke();g.globalAlpha=1;g.lineWidth=1}
    if(old.length>1)poly(old,old.length,.28,1.4);
    if(trail.length>1&&phase!=='idle'){var pr=phase==='walk'?along(ease((performance.now()-ps)/dur('walk'))*rtot):null;
      g.strokeStyle=red;g.lineWidth=2.2;g.beginPath();g.moveTo(ox+trail[0][0],oy+trail[0][1]);
      if(pr){for(var j2=1;j2<pr[2];j2++)g.lineTo(ox+trail[j2][0],oy+trail[j2][1]);g.lineTo(ox+pr[0],oy+pr[1])}else{for(var j3=1;j3<trail.length;j3++)g.lineTo(ox+trail[j3][0],oy+trail[j3][1])}
      g.stroke();g.lineWidth=1;
      g.fillStyle=red;g.beginPath();g.arc(ox+(pr?pr[0]:trail[trail.length-1][0]),oy+(pr?pr[1]:trail[trail.length-1][1]),4,0,6.3);g.fill()}
    /* the page */
    if(pa>0){
      g.globalAlpha=.6*pa;g.fillStyle=p2;g.fillRect(0,0,W,H);
      g.globalAlpha=pa;g.fillStyle=rule;g.fillRect(PX+7,PY+7,PW,PH);g.fillStyle=pp;g.fillRect(PX,PY,PW,PH);
      g.strokeStyle=ink;g.lineWidth=1;g.strokeRect(PX+.5,PY+.5,PW-1,PH-1);
      g.font='400 10px "DM Mono",monospace';g.fillStyle=ink2;g.textAlign='left';g.textBaseline='alphabetic';g.fillText(addr,PX+PAD,PY+PAD+7);
      g.strokeStyle=rule;g.beginPath();g.moveTo(PX+PAD,PY+PAD+HDR-8);g.lineTo(PX+PW-PAD,PY+PAD+HDR-8);g.stroke();
      var gx0=PX+PAD,gy0=PY+PAD+HDR+FS*.85,n=COLS*ROWS,i;
      g.font='400 '+FS+'px "DM Mono",monospace';
      for(i=0;i<n;i++){var tg=TG[i],lockd=tg!==null&&Dp>=LT[i];if(lockd)continue;
        var fl=tg!==null&&Dp>0;
        if(!reduce&&(fl||Math.random()<.012))NZ[i]=rc();
        g.fillStyle=fl?acc:ink2;g.globalAlpha=pa*(fl?.9:.4);
        g.fillText(NZ[i],gx0+(i%COLS)*CW,gy0+Math.floor(i/COLS)*LH)}
      g.font='500 '+FS+'px "DM Mono",monospace';g.fillStyle=ink;g.globalAlpha=pa;
      for(i=0;i<n;i++){if(TG[i]!==null&&Dp>=LT[i]&&TG[i]!==' ')g.fillText(TG[i],gx0+(i%COLS)*CW,gy0+Math.floor(i/COLS)*LH)}
      g.globalAlpha=1}
  }

  function redraw(){W=0}
  addEventListener('resize',redraw);
  document.addEventListener('atlas:theme',redraw);
  (document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(function(){W=0;requestAnimationFrame(qframe)});
})();
