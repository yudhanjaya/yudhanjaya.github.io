/* The Library as a game of Life: a soup of cells runs Conway's rules on grid paper. Now and then the soup is
   coaxed into the outline of one of the blurbs, holds while it is read, then crumbles back into soup.
   Quotes come from _data/quotes.yml via a JSON block written by _includes/library.html.
   Controls (#qp, #qa, #qn) and the caption (#cap) are driven from here. */
(function(){
  var node=document.getElementById('library-quotes');if(!node)return;
  var Q=JSON.parse(node.textContent);if(!Q.length)return;
  var c=document.getElementById('gal');if(!c)return;
  var g=c.getContext('2d'),cap=document.getElementById('cap'),CAP0=cap.innerHTML;
  var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
  function esc(s){return String(s).replace(/[&<>"]/g,function(ch){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]})}
  function css(n){return getComputedStyle(c).getPropertyValue(n).trim()}
  function ease(x){x=x<0?0:x>1?1:x;return x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2}

  /* cells are 6px (4px on phones), so four cells span one 24px square of the grid-paper background */
  var CS=6,GEN=75,DUR={drift:3500,gather:3200,hold:6500,release:2200};
  function dur(k){return reduce?1:DUR[k]}
  var phase='drift',T=0,ps=0,qi=-1,queue=null,paused=false,acc=0,gens=0;
  var W=0,H=0,D=1,NX=0,NY=0,cur,nxt,mask,lines=[],FS=17,col={};

  function geom(){
    D=Math.min(devicePixelRatio||1,2);W=c.clientWidth;H=c.clientHeight;c.width=W*D;c.height=H*D;
    CS=W<500?4:6;NX=Math.ceil(W/CS);NY=Math.ceil(H/CS);var n=NX*NY;
    cur=new Uint8Array(n);nxt=new Uint8Array(n);mask=new Uint8Array(n);
    for(var i=0;i<n;i++)cur[i]=Math.random()<.2?1:0;
    col={ink:css('--ink'),red:css('--red')};layout()}

  /* a glider dropped at (x,y), heading along one of the four diagonals */
  function glider(x,y,dx,dy){
    [[1,0],[2,1],[0,2],[1,2],[2,2]].forEach(function(p){
      cur[(((y+p[1]*dy)%NY+NY)%NY)*NX+((x+p[0]*dx)%NX+NX)%NX]=1})}
  function rnd(n){return Math.floor(Math.random()*n)}

  /* centre the current quote on lines, and mark the cells its letters cover */
  function layout(){
    lines=[];mask.fill(0);if(!W||qi<0)return;
    var words=Q[qi].text.split(' '),yTop=44,yBot=H-74,f,cw,lh;
    for(f=W<420?15:19;f>=10;f--){
      g.font='500 '+f+'px "DM Mono",monospace';cw=g.measureText('M').width||f*.6;
      var cols=Math.max(12,Math.floor((W-(W<420?36:80))/cw)),ln='';lines=[];
      words.forEach(function(w){var t=ln?ln+' '+w:w;if(t.length>cols&&ln){lines.push(ln);ln=w}else ln=t});lines.push(ln);
      lh=Math.round(f*1.6);if(lines.length*lh<=yBot-yTop)break}
    FS=f;
    var y0=(yTop+yBot)/2-(lines.length-1)*lh/2,m=document.createElement('canvas'),mg=m.getContext('2d');
    m.width=W;m.height=H;
    lines=lines.map(function(l,i){return{s:l,y:y0+i*lh}});
    mg.font='500 '+f+'px "DM Mono",monospace';mg.textAlign='center';mg.textBaseline='middle';
    mg.fillStyle=mg.strokeStyle='#fff';mg.lineWidth=1.2;
    lines.forEach(function(l){mg.fillText(l.s,W/2,l.y);mg.strokeText(l.s,W/2,l.y)});
    var px=mg.getImageData(0,0,W,H).data;
    for(var y=0;y<NY;y++)for(var x=0;x<NX;x++){
      for(var sy=1;sy<CS;sy+=2)for(var sx=1;sx<CS;sx+=2){
        var X=x*CS+sx,Y=y*CS+sy;if(X<W&&Y<H&&px[(Y*W+X)*4+3]>90)mask[y*NX+x]=1}}}

  /* one generation of Life; while gathering and holding, the quote's cells are nudged alive and the rest die */
  function life(el){
    var i,x,y,n;
    for(y=0;y<NY;y++){
      var ym=((y+NY-1)%NY)*NX,y0=y*NX,yp=((y+1)%NY)*NX;
      for(x=0;x<NX;x++){
        var xm=(x+NX-1)%NX,xp=(x+1)%NX;
        n=cur[ym+xm]+cur[ym+x]+cur[ym+xp]+cur[y0+xm]+cur[y0+xp]+cur[yp+xm]+cur[yp+x]+cur[yp+xp];
        i=y0+x;nxt[i]=n===3||(n===2&&cur[i])?1:0}}
    var e=phase==='gather'?ease(el/dur('gather')):1;
    if(phase==='gather'||phase==='hold')for(i=0;i<nxt.length;i++){
      if(mask[i]){if(phase==='hold'||Math.random()<.02+.5*e)nxt[i]=1}
      else if(nxt[i]&&Math.random()<.05+.6*e)nxt[i]=0}
    var t=cur;cur=nxt;nxt=t}

  function setCap(on){cap.classList.add('sw');setTimeout(function(){
    if(on&&qi>=0){var q=Q[qi];cap.innerHTML='<b>'+esc(q.book)+'</b><span class="by">'+esc(q.by)+'</span>'}else cap.innerHTML=CAP0;cap.classList.remove('sw')},reduce?0:350)}
  function begin(i){qi=(i+Q.length)%Q.length;queue=null;if(!W)geom();layout();phase='gather';ps=T}
  function toHold(){phase='hold';ps=T;if(reduce)cur.set(mask);setCap(true)}
  function toRelease(){
    phase='release';ps=T;setCap(false);
    /* a few gliders and a fresh scatter of cells to eat the text */
    for(var k=0;k<8;k++)glider(rnd(NX),Math.random()<.5?2:NY-6,Math.random()<.5?1:-1,k%2?1:-1);
    for(var i=0;i<cur.length;i++)if(Math.random()<.1)cur[i]=1}
  function go(i){
    i=(i+Q.length)%Q.length;
    if(phase==='hold'){queue=i;toRelease()}else if(phase==='drift')begin(i);else queue=i}
  document.getElementById('qn').addEventListener('click',function(){go((queue!==null?queue:qi)+1)});
  document.getElementById('qp').addEventListener('click',function(){go((queue!==null?queue:qi)-1)});
  var qa=document.getElementById('qa');
  qa.addEventListener('click',function(){paused=!paused;qa.setAttribute('aria-pressed',String(paused));qa.textContent=paused?'Resume':'Pause'});

  var last=performance.now();
  function step(ts){
    var dt=Math.min(100,ts-last);last=ts;
    if(!paused){
      T+=dt;
      if(W&&!reduce){acc+=dt;
        for(var n=0;acc>=GEN&&n<3;n++){life(T-ps);acc-=GEN;
          /* a stray glider now and then keeps the soup from settling into still lifes */
          if(++gens%22===0&&phase!=='hold')glider(rnd(NX),rnd(NY),Math.random()<.5?1:-1,Math.random()<.5?1:-1)}
        if(acc>GEN)acc=0}}
    var el=T-ps;
    if(phase==='drift'){if(el>=(qi<0?1500:dur('drift')))begin(queue!==null?queue:qi+1)}
    else if(phase==='gather'){if(el>=dur('gather'))toHold()}
    else if(phase==='hold'){if((queue!==null&&el>700)||(!reduce&&el>dur('hold')))toRelease()}
    else if(el>=dur('release')){phase='drift';ps=T}
    draw(T-ps);requestAnimationFrame(step)}

  /* how visible the crisp text is */
  function textAlpha(el){
    if(phase==='gather')return ease((el/dur('gather')-.55)/.45);
    if(phase==='hold')return 1;
    if(phase==='release')return 1-ease(el/dur('release')*2.5);
    return 0}

  function draw(el){
    if(!c.clientWidth)return;
    if(!W||c.width!==Math.round(c.clientWidth*Math.min(devicePixelRatio||1,2))||c.height!==Math.round(c.clientHeight*Math.min(devicePixelRatio||1,2)))geom();
    g.setTransform(1,0,0,1,0,0);g.clearRect(0,0,c.width,c.height);g.scale(D,D);
    var ta=textAlpha(el),inText=phase!=='drift',i,x,y;
    /* soup in ink, the cells that are part of the quote in red */
    for(var pass=0;pass<2;pass++){
      g.fillStyle=pass?col.red:col.ink;g.globalAlpha=pass?.3+.2*ta:.4;
      for(i=0;i<cur.length;i++){
        if(!cur[i]||(inText&&mask[i]?1:0)!==pass)continue;
        y=(i/NX)|0;x=i-y*NX;g.fillRect(x*CS,y*CS,CS-1,CS-1)}}
    if(ta>0){
      g.textAlign='center';g.textBaseline='middle';g.font='500 '+FS+'px "DM Mono",monospace';
      g.fillStyle=col.ink;g.globalAlpha=ta;
      lines.forEach(function(l){g.fillText(l.s,W/2,l.y)})}
    g.globalAlpha=1}

  addEventListener('resize',function(){W=0});
  (document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(function(){W=0;requestAnimationFrame(step)});
})();
