/* The Library as a data stream: rows of letters and numbers run sideways, brightest at the head of each
   stream. Now and then the glyphs in a few rows slide into place and spell out one of the blurbs.
   Quotes come from _data/quotes.yml via a JSON block written by _includes/library.html.
   Controls (#qp, #qa, #qn) and the caption (#cap) are unchanged. */
(function(){
  var node=document.getElementById('library-quotes');if(!node)return;
  var Q=JSON.parse(node.textContent).map(function(q){return{t:q.text,b:q.book,by:q.by}});
  if(!Q.length)return;
  var c=document.getElementById('gal');if(!c)return;
  var g=c.getContext('2d'),cap=document.getElementById('cap'),CAP0=cap.innerHTML,site=document.documentElement;
  var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
  function esc(s){return String(s).replace(/[&<>"]/g,function(ch){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]})}
  function css(n){return getComputedStyle(c.parentElement).getPropertyValue(n).trim()}
  function ease(x){x=x<0?0:x>1?1:x;return x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2}
  function mod(a,n){return((a%n)+n)%n}
  var GLYPHS='0123456789abcdefghijklmnopqrstuvwxyz0123456789,.;:',SF=12,TRAIL=90;
  function rg(){return GLYPHS.charAt(Math.floor(Math.random()*GLYPHS.length))}

  var W=0,H=0,D=1,RP=24,CWs=8,NC=0,WP=0,Y0=46,NR=0,rows=[],tg=[],FS=15,CWq=9,col={};
  var DUR={drift:3000,gather:2600,hold:6500,release:1800};
  function dur(k){return reduce?1:DUR[k]}
  function readColors(){col={ink:css('--ink'),ink2:css('--ink-2'),red:css('--red'),teal:css('--teal')}}

  function build(){
    g.font='400 '+SF+'px "DM Mono",monospace';CWs=Math.ceil((g.measureText('M').width||SF*.6)+1);
    RP=W<420?20:24;NC=Math.ceil(W/CWs)+2;WP=NC*CWs;
    var yEnd=H-72;Y0=44;NR=Math.max(6,Math.floor((yEnd-Y0)/RP)+1);rows=[];
    for(var r=0;r<NR;r++){
      var dir=r%2?-1:1,vh=36+Math.random()*90,gl=[];
      for(var i=0;i<NC;i++)gl.push({ch:rg(),seed:Math.random()*1000,ti:-1,dl:0});
      rows.push({y:Y0+r*RP,dir:dir,vh:vh,vb:vh*.3,off:Math.random()*WP,hoff:Math.random()*WP,gl:gl})}}
  function geom(){D=Math.min(devicePixelRatio||1,2);W=c.clientWidth;H=c.clientHeight;c.width=W*D;c.height=H*D;build();layout()}

  /* unwrapped belt position of glyph i in row r at time t */
  function belt(row,i,t){return i*CWs+row.dir*row.vb*t/1000+row.off}
  function To(){return reduce?0:T}

  /* put the current quote on consecutive rows, centred, and claim the nearest glyph in each row for every letter */
  function layout(){
    tg=[];if(!W)return;
    rows.forEach(function(r){r.gl.forEach(function(p){p.ti=-1})});
    if(qi<0)return;
    var text=Q[qi].t,maxW=W-(W<420?32:60),f,cw,lines,words=text.split(' ');
    for(f=W<420?15:17;f>=9;f--){
      g.font='500 '+f+'px "DM Mono",monospace';cw=g.measureText('M').width||f*.6;
      var cols=Math.max(12,Math.floor(maxW/cw)),ln='';lines=[];
      words.forEach(function(w){var t=ln?ln+' '+w:w;if(t.length>cols&&ln){lines.push(ln);ln=w}else ln=t});lines.push(ln);
      if(lines.length<=NR-2)break}
    FS=f;CWq=cw;
    var r0=Math.max(0,Math.floor((NR-lines.length)/2)),t0=To();
    lines.forEach(function(l,li){
      var row=rows[r0+li],used={},targets=[];
      if(!row)return;
      for(var ci=0;ci<l.length;ci++){if(l.charAt(ci)!==' ')targets.push({ch:l.charAt(ci),x:W/2+(ci-(l.length-1)/2)*cw})}
      targets.forEach(function(tt,k){
        var best=-1,bd=1e9;
        for(var i=0;i<NC;i++){if(used[i])continue;var d=Math.abs(mod(belt(row,i,t0),WP)-CWs-tt.x);d=Math.min(d,WP-d);if(d<bd){bd=d;best=i}}
        if(best<0)return;used[best]=1;
        var p=row.gl[best];p.ti=tg.length;
        /* letters on the stream's upstream side arrive first, so the line fills in along the flow */
        var along=row.dir>0?tt.x/W:1-tt.x/W;p.dl=.5*along+.1*Math.random();
        tg.push({ch:tt.ch,x:tt.x,y:row.y,row:r0+li,i:best})})})}

  /* state: drift -> gather -> hold -> release -> drift */
  var phase='drift',T=0,ps=0,qi=-1,queue=null,paused=false;
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
    if(phase==='drift'){if(el>=(qi<0?1500:dur('drift')))begin(queue!==null?queue:qi+1)}
    else if(phase==='gather'){if(el>=dur('gather')){phase='hold';ps=T;setCap(true)}}
    else if(phase==='hold'){if((queue!==null&&el>700)||(!reduce&&el>dur('hold'))){phase='release';ps=T;setCap(false)}}
    else if(phase==='release'){if(el>=dur('release')){phase='drift';ps=T}}
    draw(T-ps);requestAnimationFrame(step)}

  function prog(p,el){
    if(p.ti<0)return 0;
    if(phase==='gather')return ease((el/dur('gather')-p.dl*.9)/.5);
    if(phase==='hold')return 1;
    if(phase==='release')return 1-ease((el/dur('release')-p.dl*.9)/.5);
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
    var t=To(),dim=dimOf(el),moving=[],r,i,row,p;
    g.font='400 '+SF+'px "DM Mono",monospace';
    for(r=0;r<NR;r++){row=rows[r];
      var hx=[mod(row.hoff+row.dir*row.vh*t/1000,WP),mod(row.hoff+WP/2+row.dir*row.vh*t/1000,WP)];
      for(i=0;i<NC;i++){p=row.gl[i];
        if(p.ti>=0&&prog(p,el)>0){moving.push(p);continue}
        var u=belt(row,i,t),x=mod(u,WP)-CWs,d=1e9;
        for(var h=0;h<2;h++){var dd=row.dir>0?mod(hx[h]-(x+CWs),WP):mod((x+CWs)-hx[h],WP);if(dd<d)d=dd}
        var a=Math.max(.07,Math.exp(-d/TRAIL)*.9);
        if(!reduce&&(d<CWs*1.6||Math.floor(t/900+p.seed)!==p.ph)){if(d<CWs*1.6||Math.random()<.3)p.ch=rg();p.ph=Math.floor(t/900+p.seed)}
        g.globalAlpha=a*(1-dim*.78);
        g.fillStyle=d<CWs*1.2?col.ink:(a>.35?col.teal:col.ink2);
        g.fillText(p.ch,x,row.y)}}
    /* letters sliding into place, or settled as the quote */
    for(var k=0;k<moving.length;k++){p=moving[k];var tgt=tg[p.ti],s=prog(p,el);row=rows[tgt.row];
      var base=belt(row,tgt.i,t)-CWs;base+=WP*Math.round((tgt.x-base)/WP);
      var e=s,x2=base+(tgt.x-base)*e;if(s>=.999)x2=tgt.x;
      var done=s>.92,ch=done?tgt.ch:(reduce?tgt.ch:(Math.floor(t/80+p.seed)%3===0?rg():p.ch));
      g.globalAlpha=.45+.55*s;g.fillStyle=s>.5?col.ink:col.teal;
      g.font=(s>.5?'500 ':'400 ')+(SF+(FS-SF)*e).toFixed(1)+'px "DM Mono",monospace';
      g.fillText(ch,x2,tgt.y)}
    g.globalAlpha=1;
  }

  function refresh(){W=0;col={}}
  addEventListener('resize',refresh);
  document.addEventListener('atlas:theme',refresh);
  (document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(function(){W=0;requestAnimationFrame(step)});
})();
