/* =========================================================
   DG UI PRIMAM — SCRIPT (500+ SNIPPETS)
   ========================================================= */

var D=[];
function add(cat,title,html,css,js){D.push({cat:cat,title:title,html:html,css:css,js:js||''});}

/* ========== LOADING (50) ========== */
var L = [
['Ring Spin','<div class="dasun-r"></div>','.dasun-r{width:46px;height:46px;border:4px solid rgba(124,92,255,.2);border-top-color:#7c5cff;border-radius:50%;animation:dasunSpin .9s linear infinite}@keyframes dasunSpin{to{transform:rotate(360deg)}}'],
['Dual Ring','<div class="dasun-r"></div>','.dasun-r{width:50px;height:50px;border:3px solid transparent;border-top-color:#7c5cff;border-bottom-color:#ec4899;border-radius:50%;animation:dasunSpin 1s linear infinite}@keyframes dasunSpin{to{transform:rotate(360deg)}}'],
['Gradient Ring','<div class="dasun-r"></div>','.dasun-r{width:50px;height:50px;border-radius:50%;background:conic-gradient(from 0deg,#7c5cff,#ec4899,#06b6d4,#7c5cff);-webkit-mask:radial-gradient(circle,transparent 60%,#000 62%);mask:radial-gradient(circle,transparent 60%,#000 62%);animation:dasunSpin 1s linear infinite}@keyframes dasunSpin{to{transform:rotate(360deg)}}'],
['Dashed Ring','<div class="dasun-r"></div>','.dasun-r{width:46px;height:46px;border:4px dashed #7c5cff;border-radius:50%;animation:dasunSpin 1.6s linear infinite}@keyframes dasunSpin{to{transform:rotate(360deg)}}'],
['Dotted Ring','<div class="dasun-r"></div>','.dasun-r{width:46px;height:46px;border:5px dotted #ec4899;border-radius:50%;animation:dasunSpin 2s linear infinite}@keyframes dasunSpin{to{transform:rotate(360deg)}}'],
['Triple Ring','<div class="dasun-r"></div>','.dasun-r{width:54px;height:54px;border:3px solid transparent;border-top-color:#7c5cff;border-right-color:#a855f7;border-bottom-color:#ec4899;border-radius:50%;animation:dasunSpin 1.1s linear infinite}@keyframes dasunSpin{to{transform:rotate(360deg)}}'],
['Thick Ring','<div class="dasun-r"></div>','.dasun-r{width:48px;height:48px;border:8px solid rgba(124,92,255,.15);border-top-color:#06b6d4;border-radius:50%;animation:dasunSpin .9s linear infinite}@keyframes dasunSpin{to{transform:rotate(360deg)}}'],
['Reverse Ring','<div class="dasun-r"></div>','.dasun-r{width:46px;height:46px;border:4px solid rgba(236,72,153,.2);border-top-color:#ec4899;border-radius:50%;animation:dasunSpin .9s linear infinite reverse}@keyframes dasunSpin{to{transform:rotate(360deg)}}'],
['Dots Bounce','<div class="dasun-d"><span></span><span></span><span></span></div>','.dasun-d{display:flex;gap:9px}.dasun-d span{width:13px;height:13px;border-radius:50%;background:#7c5cff;animation:dasunB .65s infinite alternate ease-in-out}.dasun-d span:nth-child(2){background:#a855f7;animation-delay:.15s}.dasun-d span:nth-child(3){background:#ec4899;animation-delay:.3s}@keyframes dasunB{to{transform:translateY(-16px);opacity:.35}}'],
['Dots Fade','<div class="dasun-d"><span></span><span></span><span></span><span></span></div>','.dasun-d{display:flex;gap:8px}.dasun-d span{width:12px;height:12px;border-radius:50%;background:#06b6d4;animation:dasunF 1.2s infinite}.dasun-d span:nth-child(2){animation-delay:.15s}.dasun-d span:nth-child(3){animation-delay:.3s}.dasun-d span:nth-child(4){animation-delay:.45s}@keyframes dasunF{0%,100%{opacity:.25}50%{opacity:1}}'],
['Dots Scale','<div class="dasun-d"><span></span><span></span><span></span></div>','.dasun-d{display:flex;gap:10px}.dasun-d span{width:14px;height:14px;border-radius:50%;background:linear-gradient(135deg,#7c5cff,#a855f7);animation:dasunS 1s infinite ease-in-out}.dasun-d span:nth-child(2){animation-delay:.2s}.dasun-d span:nth-child(3){animation-delay:.4s}@keyframes dasunS{0%,80%,100%{transform:scale(.4)}40%{transform:scale(1)}}'],
['Dots Wave','<div class="dasun-d"><span></span><span></span><span></span><span></span><span></span></div>','.dasun-d{display:flex;gap:5px}.dasun-d span{width:10px;height:10px;border-radius:50%;background:#ec4899;animation:dasunW 1.2s infinite ease-in-out}.dasun-d span:nth-child(2){animation-delay:.1s}.dasun-d span:nth-child(3){animation-delay:.2s}.dasun-d span:nth-child(4){animation-delay:.3s}.dasun-d span:nth-child(5){animation-delay:.4s}@keyframes dasunW{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-12px)}}'],
['Dots Orbit','<div class="dasun-do"><span></span><span></span><span></span></div>','.dasun-do{position:relative;width:44px;height:44px;animation:dasunSpin 1.4s linear infinite}.dasun-do span{position:absolute;width:10px;height:10px;border-radius:50%;background:#7c5cff}.dasun-do span:nth-child(1){top:0;left:50%;margin-left:-5px}.dasun-do span:nth-child(2){bottom:0;left:50%;margin-left:-5px;background:#ec4899}.dasun-do span:nth-child(3){top:50%;right:0;margin-top:-5px;background:#06b6d4}@keyframes dasunSpin{to{transform:rotate(360deg)}}'],
['Dots Spiral','<div class="dasun-ds"><span></span><span></span><span></span><span></span><span></span><span></span></div>','.dasun-ds{position:relative;width:50px;height:50px}.dasun-ds span{position:absolute;top:50%;left:50%;width:7px;height:7px;margin:-3.5px;border-radius:50%;background:#7c5cff;animation:dasunDs 1.5s infinite}.dasun-ds span:nth-child(2){animation-delay:.15s;background:#a855f7}.dasun-ds span:nth-child(3){animation-delay:.3s;background:#ec4899}.dasun-ds span:nth-child(4){animation-delay:.45s;background:#06b6d4}.dasun-ds span:nth-child(5){animation-delay:.6s;background:#10b981}.dasun-ds span:nth-child(6){animation-delay:.75s;background:#f59e0b}@keyframes dasunDs{0%{transform:rotate(0) translateX(20px) rotate(0);opacity:1}100%{transform:rotate(720deg) translateX(0) rotate(-720deg);opacity:0}}'],
['Bars Equalizer','<div class="dasun-b"><span></span><span></span><span></span><span></span><span></span></div>','.dasun-b{display:flex;align-items:flex-end;gap:5px;height:48px}.dasun-b span{width:6px;border-radius:3px;background:linear-gradient(180deg,#06b6d4,#7c5cff);animation:dasunBa 1s infinite ease-in-out alternate}.dasun-b span:nth-child(2){animation-delay:-.8s}.dasun-b span:nth-child(3){animation-delay:-.6s}.dasun-b span:nth-child(4){animation-delay:-.4s}.dasun-b span:nth-child(5){animation-delay:-.2s}@keyframes dasunBa{0%{height:8px}100%{height:46px}}'],
['Bars Scale','<div class="dasun-b"><span></span><span></span><span></span><span></span></div>','.dasun-b{display:flex;gap:6px}.dasun-b span{width:8px;height:40px;border-radius:4px;background:#a855f7;animation:dasunBs 1s infinite ease-in-out}.dasun-b span:nth-child(2){animation-delay:.15s}.dasun-b span:nth-child(3){animation-delay:.3s}.dasun-b span:nth-child(4){animation-delay:.45s}@keyframes dasunBs{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}'],
['Bars Opacity','<div class="dasun-b"><span></span><span></span><span></span><span></span><span></span></div>','.dasun-b{display:flex;gap:5px}.dasun-b span{width:8px;height:40px;border-radius:4px;background:#ec4899;animation:dasunBo 1.2s infinite}.dasun-b span:nth-child(2){animation-delay:.15s}.dasun-b span:nth-child(3){animation-delay:.3s}.dasun-b span:nth-child(4){animation-delay:.45s}.dasun-b span:nth-child(5){animation-delay:.6s}@keyframes dasunBo{0%,100%{opacity:.2}50%{opacity:1}}'],
['Bars Flip','<div class="dasun-b"><span></span><span></span><span></span></div>','.dasun-b{display:flex;gap:6px;perspective:200px}.dasun-b span{width:10px;height:36px;border-radius:4px;background:linear-gradient(180deg,#7c5cff,#ec4899);animation:dasunBf 1s infinite}.dasun-b span:nth-child(2){animation-delay:.2s}.dasun-b span:nth-child(3){animation-delay:.4s}@keyframes dasunBf{0%,100%{transform:rotateY(0)}50%{transform:rotateY(180deg)}}'],
['Bars Rotate','<div class="dasun-br"><span></span><span></span><span></span><span></span><span></span></div>','.dasun-br{display:flex;gap:4px}.dasun-br span{width:6px;height:30px;border-radius:3px;background:#7c5cff;transform-origin:bottom;animation:dasunBr 1s infinite ease-in-out}.dasun-br span:nth-child(2){animation-delay:.1s;background:#a855f7}.dasun-br span:nth-child(3){animation-delay:.2s;background:#ec4899}.dasun-br span:nth-child(4){animation-delay:.3s;background:#06b6d4}.dasun-br span:nth-child(5){animation-delay:.4s;background:#10b981}@keyframes dasunBr{0%,100%{transform:rotate(-30deg)}50%{transform:rotate(30deg)}}'],
['Orbit Single','<div class="dasun-o"><span></span></div>','.dasun-o{position:relative;width:56px;height:56px}.dasun-o::before{content:"";position:absolute;inset:0;border-radius:50%;border:2px solid #1e2633}.dasun-o span{position:absolute;top:-4px;left:50%;width:10px;height:10px;margin-left:-5px;border-radius:50%;background:#7c5cff;box-shadow:0 0 12px #7c5cff;animation:dasunOr 1.5s linear infinite;transform-origin:5px 32px}@keyframes dasunOr{to{transform:rotate(360deg)}}'],
['Orbit Twin','<div class="dasun-o"><span></span><span></span></div>','.dasun-o{position:relative;width:56px;height:56px}.dasun-o span{position:absolute;top:0;left:50%;width:10px;height:10px;margin-left:-5px;border-radius:50%;background:#7c5cff;animation:dasunOr 1.4s linear infinite;transform-origin:5px 28px}.dasun-o span:nth-child(2){background:#ec4899;animation-duration:1s;animation-direction:reverse}@keyframes dasunOr{to{transform:rotate(360deg)}}'],
['Orbit Trio','<div class="dasun-o"><span></span><span></span><span></span></div>','.dasun-o{position:relative;width:60px;height:60px}.dasun-o span{position:absolute;top:-5px;left:50%;width:10px;height:10px;margin-left:-5px;border-radius:50%;background:#7c5cff;animation:dasunOr 1.6s linear infinite;transform-origin:5px 35px}.dasun-o span:nth-child(2){background:#a855f7;animation-duration:1.2s}.dasun-o span:nth-child(3){background:#ec4899;animation-duration:.9s}@keyframes dasunOr{to{transform:rotate(360deg)}}'],
['Pulse Circle','<div class="dasun-p"></div>','.dasun-p{width:52px;height:52px;border-radius:50%;background:#7c5cff;position:relative}.dasun-p::before,.dasun-p::after{content:"";position:absolute;inset:0;border-radius:50%;background:#7c5cff;animation:dasunPu 1.6s ease-out infinite}.dasun-p::after{animation-delay:.8s}@keyframes dasunPu{0%{transform:scale(1);opacity:.7}100%{transform:scale(2.3);opacity:0}}'],
['Pulse Rings','<div class="dasun-pr"><span></span><span></span><span></span></div>','.dasun-pr{position:relative;width:56px;height:56px}.dasun-pr span{position:absolute;inset:0;border:3px solid #a855f7;border-radius:50%;animation:dasunPr 2s ease-out infinite}.dasun-pr span:nth-child(2){animation-delay:.65s;border-color:#ec4899}.dasun-pr span:nth-child(3){animation-delay:1.3s;border-color:#06b6d4}@keyframes dasunPr{0%{transform:scale(.3);opacity:1}100%{transform:scale(1.5);opacity:0}}'],
['Ripple','<div class="dasun-ri"><span></span><span></span><span></span></div>','.dasun-ri{position:relative;width:64px;height:64px}.dasun-ri span{position:absolute;inset:0;border:3px solid #ec4899;border-radius:50%;animation:dasunR 2s cubic-bezier(.2,.6,.3,1) infinite}.dasun-ri span:nth-child(2){animation-delay:.5s;border-color:#a855f7}.dasun-ri span:nth-child(3){animation-delay:1s;border-color:#7c5cff}@keyframes dasunR{0%{transform:scale(.2);opacity:1}100%{transform:scale(1);opacity:0}}'],
['Cube Spin','<div class="dasun-c"></div>','.dasun-c{width:38px;height:38px;background:linear-gradient(135deg,#7c5cff,#a855f7);border-radius:6px;animation:dasunCs 1.4s infinite ease-in-out}@keyframes dasunCs{0%{transform:rotate(0)}50%{transform:rotate(180deg) scale(.7)}100%{transform:rotate(360deg)}}'],
['Cube Flip','<div class="dasun-c"></div>','.dasun-c{width:38px;height:38px;background:linear-gradient(135deg,#06b6d4,#7c5cff);border-radius:6px;animation:dasunCf 1.3s infinite ease-in-out}@keyframes dasunCf{0%{transform:perspective(140px) rotateX(0) rotateY(0)}50%{transform:perspective(140px) rotateX(-180deg) rotateY(0)}100%{transform:perspective(140px) rotateX(-180deg) rotateY(-180deg)}}'],
['Hourglass','<div class="dasun-hg"></div>','.dasun-hg{width:32px;height:44px;border:3px solid #7c5cff;border-top-width:6px;border-bottom-width:6px;position:relative;animation:dasunHgR 1.6s infinite}@keyframes dasunHgR{50%{transform:rotate(180deg)}}.dasun-hg::after{content:"";position:absolute;top:50%;left:50%;width:6px;height:6px;background:#7c5cff;border-radius:50%;transform:translate(-50%,-50%);animation:dasunHg 1.6s infinite ease-in-out}@keyframes dasunHg{0%,100%{width:20px;height:2px;border-radius:2px}50%{width:6px;height:6px;border-radius:50%}}'],
['Infinity','<div class="dasun-inf"><span></span><span></span></div>','.dasun-inf{position:relative;width:80px;height:36px}.dasun-inf span{position:absolute;top:50%;width:36px;height:36px;margin-top:-18px;border:3px solid #a855f7;border-radius:50%;animation:dasunInf 1.8s infinite ease-in-out}.dasun-inf span:first-child{left:0}.dasun-inf span:last-child{right:0;border-color:#ec4899}@keyframes dasunInf{0%,100%{transform:translateX(0)}50%{transform:translateX(8px)}}'],
['Bouncing Ball','<div class="dasun-ball"></div>','.dasun-ball{width:22px;height:22px;border-radius:50%;background:linear-gradient(135deg,#06b6d4,#7c5cff);box-shadow:0 10px 20px rgba(124,92,255,.4);animation:dasunBall .9s cubic-bezier(.5,0,.5,1) infinite alternate}@keyframes dasunBall{from{transform:translateY(-22px)}to{transform:translateY(16px)}}'],
['Typing','<div class="dasun-tb"><span></span><span></span><span></span></div>','.dasun-tb{display:flex;gap:6px;padding:12px 18px;background:#1a1f2e;border-radius:16px}.dasun-tb span{width:8px;height:8px;border-radius:50%;background:#8a94a8;animation:dasunTb 1.2s infinite}.dasun-tb span:nth-child(2){animation-delay:.2s}.dasun-tb span:nth-child(3){animation-delay:.4s}@keyframes dasunTb{0%,60%,100%{transform:translateY(0);opacity:.4}30%{transform:translateY(-6px);opacity:1}}'],
['Progress Stripes','<div class="dasun-ps"><span></span></div>','.dasun-ps{width:200px;height:12px;border-radius:6px;background:#1e2633;overflow:hidden}.dasun-ps span{display:block;height:100%;width:100%;background:repeating-linear-gradient(45deg,#7c5cff,#7c5cff 10px,#a855f7 10px,#a855f7 20px);background-size:200% 100%;animation:dasunPs 1s linear infinite}@keyframes dasunPs{to{background-position:28px 0}}'],
['Progress Gradient','<div class="dasun-pg"><span></span></div>','.dasun-pg{width:200px;height:10px;border-radius:5px;background:#1e2633;overflow:hidden}.dasun-pg span{display:block;height:100%;width:40%;border-radius:5px;background:linear-gradient(90deg,#7c5cff,#a855f7,#ec4899);animation:dasunPg 1.7s ease-in-out infinite}@keyframes dasunPg{0%{transform:translateX(-100%)}100%{transform:translateX(350%)}}'],
['Progress Fill','<div class="dasun-pf"><span></span></div>','.dasun-pf{width:200px;height:10px;border-radius:5px;background:#1e2633;overflow:hidden}.dasun-pf span{display:block;height:100%;border-radius:5px;background:linear-gradient(90deg,#06b6d4,#7c5cff);animation:dasunPf 2s ease-in-out infinite}@keyframes dasunPf{0%{width:0}50%{width:100%}100%{width:0}}'],
['Skeleton','<div class="dasun-sk"><div class="dasun-skl"></div><div class="dasun-skl dasun-sks"></div><div class="dasun-skl dasun-skm"></div></div>','.dasun-sk{width:220px;display:flex;flex-direction:column;gap:10px}.dasun-skl{height:12px;border-radius:6px;background:linear-gradient(90deg,#1a1f2e 25%,#252b3d 37%,#1a1f2e 63%);background-size:400% 100%;animation:dasunSh 1.4s ease infinite}.dasun-sks{width:70%}.dasun-skm{width:50%}@keyframes dasunSh{0%{background-position:100% 50%}100%{background-position:0 50%}}'],
['Skeleton Card','<div class="dasun-sk"><div class="dasun-ski"></div><div class="dasun-skl"></div><div class="dasun-skl dasun-sks"></div></div>','.dasun-sk{width:220px;padding:14px;border-radius:14px;background:#12151f;border:1px solid #212635}.dasun-ski{height:110px;border-radius:10px;margin-bottom:12px}.dasun-skl{height:12px;border-radius:6px;margin-bottom:8px}.dasun-sks{width:60%}.dasun-ski,.dasun-skl{background:linear-gradient(90deg,#1a1f2e 25%,#252b3d 37%,#1a1f2e 63%);background-size:400% 100%;animation:dasunSh 1.4s ease infinite}@keyframes dasunSh{0%{background-position:100% 50%}100%{background-position:0 50%}}'],
['Radar','<div class="dasun-rd"></div>','.dasun-rd{width:34px;height:34px;background:#06b6d4;border-radius:50%;box-shadow:0 0 0 0 rgba(6,182,212,.7);animation:dasunRd 1.5s infinite}@keyframes dasunRd{70%{box-shadow:0 0 0 22px rgba(6,182,212,0)}100%{box-shadow:0 0 0 0 rgba(6,182,212,0)}}'],
['Cross Spinner','<div class="dasun-cr"><span></span><span></span></div>','.dasun-cr{position:relative;width:40px;height:40px}.dasun-cr span{position:absolute;top:50%;left:0;right:0;height:4px;background:#7c5cff;border-radius:2px;transform:translateY(-50%);animation:dasunCr 1s infinite}.dasun-cr span:nth-child(2){transform:translateY(-50%) rotate(90deg);background:#ec4899}@keyframes dasunCr{0%,100%{transform:translateY(-50%) scaleX(1)}50%{transform:translateY(-50%) scaleX(.3)}}'],
['Flower','<div class="dasun-fl"><span></span><span></span><span></span><span></span><span></span><span></span></div>','.dasun-fl{position:relative;width:50px;height:50px}.dasun-fl span{position:absolute;top:50%;left:50%;width:8px;height:14px;margin:-7px 0 0 -4px;border-radius:4px;background:#7c5cff;transform-origin:4px 25px;animation:dasunFl 1.4s infinite ease-in-out}.dasun-fl span:nth-child(2){transform:rotate(60deg);background:#a855f7}.dasun-fl span:nth-child(3){transform:rotate(120deg);background:#ec4899}.dasun-fl span:nth-child(4){transform:rotate(180deg);background:#06b6d4}.dasun-fl span:nth-child(5){transform:rotate(240deg);background:#10b981}.dasun-fl span:nth-child(6){transform:rotate(300deg);background:#f59e0b}@keyframes dasunFl{0%,100%{opacity:.2}50%{opacity:1}}'],
['DNA Helix','<div class="dasun-dna"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>','.dasun-dna{display:flex;gap:3px;align-items:center;height:50px}.dasun-dna span{width:6px;height:6px;border-radius:50%;background:#06b6d4;animation:dasunDna 1.4s infinite ease-in-out}.dasun-dna span:nth-child(2){animation-delay:.15s;background:#7c5cff}.dasun-dna span:nth-child(3){animation-delay:.3s}.dasun-dna span:nth-child(4){animation-delay:.45s;background:#a855f7}.dasun-dna span:nth-child(5){animation-delay:.6s}.dasun-dna span:nth-child(6){animation-delay:.75s;background:#ec4899}.dasun-dna span:nth-child(7){animation-delay:.9s}.dasun-dna span:nth-child(8){animation-delay:1.05s;background:#f59e0b}@keyframes dasunDna{0%,100%{transform:translateY(-14px);opacity:.3}50%{transform:translateY(14px);opacity:1}}'],
['Atom Orbits','<div class="dasun-at"><span></span><span></span><span></span></div>','.dasun-at{position:relative;width:56px;height:56px}.dasun-at span{position:absolute;inset:0;border:2px solid #7c5cff;border-radius:50%;animation:dasunAt 2s linear infinite}.dasun-at span:nth-child(2){transform:rotate(60deg);animation-delay:-.5s;border-color:#a855f7}.dasun-at span:nth-child(3){transform:rotate(120deg);animation-delay:-1s;border-color:#ec4899}@keyframes dasunAt{to{transform:rotate(360deg)}}'],
['Gear Rotate','<div class="dasun-ge"></div>','.dasun-ge{width:44px;height:44px;border:8px dashed #a855f7;border-radius:50%;animation:dasunGe 2s linear infinite}@keyframes dasunGe{to{transform:rotate(360deg)}}'],
['Comet','<div class="dasun-co"></div>','.dasun-co{position:relative;width:60px;height:60px}.dasun-co::before{content:"";position:absolute;top:50%;left:50%;width:8px;height:8px;margin:-4px;border-radius:50%;background:#7c5cff;box-shadow:0 0 12px #7c5cff}.dasun-co::after{content:"";position:absolute;top:50%;left:50%;width:40px;height:2px;background:linear-gradient(90deg,transparent,#7c5cff);transform-origin:0 50%;margin-top:-1px;animation:dasunCo 1.2s linear infinite}@keyframes dasunCo{to{transform:rotate(360deg)}}'],
['Star Spin','<div class="dasun-st">★</div>','.dasun-st{font-size:44px;color:#fbbf24;animation:dasunSt 1.6s linear infinite;filter:drop-shadow(0 0 12px rgba(251,191,36,.6))}@keyframes dasunSt{to{transform:rotate(360deg)}}'],
['Liquid Blob','<div class="dasun-lb"></div>','.dasun-lb{width:44px;height:44px;background:linear-gradient(135deg,#7c5cff,#ec4899);animation:dasunLb 2s ease-in-out infinite}@keyframes dasunLb{0%,100%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%;transform:rotate(0)}50%{border-radius:30% 60% 70% 40%/50% 60% 30% 60%;transform:rotate(180deg)}}'],
['Clock Hands','<div class="dasun-cl"><span></span><span></span></div>','.dasun-cl{position:relative;width:50px;height:50px;border:3px solid #2d3346;border-radius:50%}.dasun-cl span{position:absolute;top:50%;left:50%;width:2px;background:#7c5cff;transform-origin:50% 100%}.dasun-cl span:nth-child(1){height:18px;margin:-18px 0 0 -1px;animation:dasunCl 2s linear infinite}.dasun-cl span:nth-child(2){height:12px;margin:-12px 0 0 -1px;background:#ec4899;animation:dasunCl 1s linear infinite}@keyframes dasunCl{to{transform:rotate(360deg)}}'],
['Wifi Signal','<div class="dasun-wf"><span></span><span></span><span></span><span></span></div>','.dasun-wf{position:relative;width:52px;height:52px}.dasun-wf span{position:absolute;left:50%;bottom:10px;width:40px;height:40px;margin-left:-20px;border:3px solid #7c5cff;border-radius:50%;clip-path:polygon(0 0,100% 0,100% 50%,0 50%);opacity:0;animation:dasunWf 1.6s infinite}.dasun-wf span:nth-child(2){animation-delay:.2s;width:30px;height:30px;margin-left:-15px}.dasun-wf span:nth-child(3){animation-delay:.4s;width:20px;height:20px;margin-left:-10px}.dasun-wf span:nth-child(4){animation-delay:.6s;width:10px;height:10px;margin-left:-5px;background:#7c5cff;border:none;border-radius:50%}@keyframes dasunWf{0%,100%{opacity:0}50%{opacity:1}}'],
['Snowflake','<div class="dasun-sf">❄</div>','.dasun-sf{font-size:44px;color:#7cc4ff;animation:dasunSf 2s linear infinite}@keyframes dasunSf{to{transform:rotate(360deg)}}'],
['Pendulum','<div class="dasun-pd"><span></span></div>','.dasun-pd{position:relative;width:2px;height:40px;background:#2d3346;transform-origin:top center;animation:dasunPd 1.4s infinite ease-in-out}.dasun-pd span{position:absolute;bottom:-6px;left:50%;width:16px;height:16px;margin-left:-8px;border-radius:50%;background:#7c5cff;box-shadow:0 0 14px #7c5cff}@keyframes dasunPd{0%,100%{transform:rotate(-28deg)}50%{transform:rotate(28deg)}}'],
['Fingerprint','<div class="dasun-fp"><span></span><span></span><span></span><span></span></div>','.dasun-fp{position:relative;width:44px;height:56px}.dasun-fp span{position:absolute;left:50%;top:0;width:36px;height:52px;margin-left:-18px;border:2px solid #7c5cff;border-radius:50% 50% 40% 40%;animation:dasunFp 2s infinite ease-in-out}.dasun-fp span:nth-child(2){width:28px;margin-left:-14px;animation-delay:.3s;opacity:.7;border-color:#a855f7}.dasun-fp span:nth-child(3){width:20px;margin-left:-10px;animation-delay:.6s;opacity:.5;border-color:#ec4899}.dasun-fp span:nth-child(4){width:12px;margin-left:-6px;animation-delay:.9s;opacity:.3;border-color:#06b6d4}@keyframes dasunFp{0%,100%{clip-path:inset(0 0 0 0)}50%{clip-path:inset(30% 0 0 0)}}']
];
L.forEach(function(x){add('Loading',x[0],x[1],x[2]);});

/* ========== ANIMATION (50) ========== */
var A = [
['Fade Pulse','<div class="dasun-af"></div>','.dasun-af{width:70px;height:70px;border-radius:16px;background:linear-gradient(135deg,#7c5cff,#a855f7);animation:dasunAf 1.4s ease-in-out infinite}@keyframes dasunAf{0%,100%{opacity:.2}50%{opacity:1}}'],
['Slide Up','<div class="dasun-su"></div>','.dasun-su{width:70px;height:70px;border-radius:16px;background:linear-gradient(135deg,#7c5cff,#a855f7);animation:dasunSu 1.4s ease-in-out infinite}@keyframes dasunSu{0%{opacity:0;transform:translateY(24px)}50%{opacity:1;transform:translateY(0)}100%{opacity:0;transform:translateY(-24px)}}'],
['Slide Left','<div class="dasun-sl"></div>','.dasun-sl{width:70px;height:70px;border-radius:16px;background:linear-gradient(135deg,#06b6d4,#7c5cff);animation:dasunSl 1.4s ease-in-out infinite}@keyframes dasunSl{0%{opacity:0;transform:translateX(30px)}50%{opacity:1;transform:translateX(0)}100%{opacity:0;transform:translateX(-30px)}}'],
['Zoom In','<div class="dasun-zi"></div>','.dasun-zi{width:70px;height:70px;border-radius:50%;background:linear-gradient(135deg,#7c5cff,#ec4899);animation:dasunZi 1.4s ease-in-out infinite}@keyframes dasunZi{0%,100%{transform:scale(.4);opacity:.3}50%{transform:scale(1);opacity:1}}'],
['Rotate 3D','<div class="dasun-r3"></div>','.dasun-r3{width:60px;height:60px;border-radius:14px;background:linear-gradient(135deg,#7c5cff,#ec4899);animation:dasunR3 2.4s infinite linear}@keyframes dasunR3{0%{transform:rotateX(0) rotateY(0)}100%{transform:rotateX(360deg) rotateY(360deg)}}'],
['Heartbeat','<div class="dasun-hb">♥</div>','.dasun-hb{font-size:56px;color:#ef4444;animation:dasunHb 1.1s infinite;filter:drop-shadow(0 0 16px rgba(239,68,68,.6))}@keyframes dasunHb{0%,100%{transform:scale(1)}15%{transform:scale(1.25)}30%{transform:scale(1)}45%{transform:scale(1.18)}}'],
['Float 3D','<div class="dasun-ft"></div>','.dasun-ft{width:70px;height:70px;border-radius:18px;background:linear-gradient(135deg,#7c5cff,#a855f7);box-shadow:0 18px 40px rgba(124,92,255,.4);animation:dasunFt 3s ease-in-out infinite}@keyframes dasunFt{0%,100%{transform:translateY(-14px) rotate(-6deg)}50%{transform:translateY(14px) rotate(6deg)}}'],
['Wobble','<div class="dasun-wb"></div>','.dasun-wb{width:60px;height:60px;border-radius:16px;background:linear-gradient(135deg,#06b6d4,#7c5cff);animation:dasunWb 1.6s infinite}@keyframes dasunWb{0%,100%{transform:rotate(0)}15%{transform:rotate(-12deg)}30%{transform:rotate(10deg)}45%{transform:rotate(-6deg)}60%{transform:rotate(4deg)}75%{transform:rotate(-2deg)}}'],
['Jello','<div class="dasun-jl"></div>','.dasun-jl{width:60px;height:60px;border-radius:14px;background:linear-gradient(135deg,#06b6d4,#a855f7);animation:dasunJl 1s infinite}@keyframes dasunJl{0%,100%{transform:skewX(0) skewY(0)}30%{transform:skewX(-12deg) skewY(-12deg)}40%{transform:skewX(8deg) skewY(8deg)}60%{transform:skewX(-5deg) skewY(-5deg)}80%{transform:skewX(3deg) skewY(3deg)}}'],
['Glow Pulse','<div class="dasun-gp"></div>','.dasun-gp{width:66px;height:66px;border-radius:50%;background:#7c5cff;animation:dasunGp 1.4s ease-in-out infinite}@keyframes dasunGp{0%,100%{box-shadow:0 0 0 0 rgba(124,92,255,.8),0 0 0 0 rgba(124,92,255,.4)}50%{box-shadow:0 0 30px 8px rgba(124,92,255,.6),0 0 60px 20px rgba(124,92,255,.2)}}'],
['Neon Flicker','<div class="dasun-nf"></div>','.dasun-nf{width:70px;height:70px;border-radius:16px;background:#06b6d4;box-shadow:0 0 20px #06b6d4,0 0 40px #06b6d4;animation:dasunNf 1.4s infinite}@keyframes dasunNf{0%,100%{opacity:1}20%{opacity:.4}40%{opacity:1}60%{opacity:.7}80%{opacity:1}}'],
['Gradient Shift','<div class="dasun-gs"></div>','.dasun-gs{width:120px;height:70px;border-radius:14px;background:linear-gradient(90deg,#7c5cff,#a855f7,#ec4899,#7c5cff);background-size:300% 100%;animation:dasunGs 3s linear infinite}@keyframes dasunGs{to{background-position:300% 0}}'],
['Wave Letters','<div class="dasun-wl"><span>D</span><span>G</span><span>U</span><span>I</span></div>','.dasun-wl{display:flex;gap:4px}.dasun-wl span{font-size:40px;font-weight:800;color:#7c5cff;animation:dasunWl 1.4s ease-in-out infinite;display:inline-block;font-family:"Space Grotesk"}.dasun-wl span:nth-child(2){animation-delay:.1s;color:#a855f7}.dasun-wl span:nth-child(3){animation-delay:.2s;color:#ec4899}.dasun-wl span:nth-child(4){animation-delay:.3s;color:#f59e0b}@keyframes dasunWl{0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)}}'],
['Typewriter','<div class="dasun-ty">Loading...</div>','.dasun-ty{font-family:"JetBrains Mono",monospace;font-size:18px;color:#7c5cff;overflow:hidden;white-space:nowrap;border-right:2px solid #7c5cff;width:11ch;animation:dasunTy 2.5s steps(11) infinite,blink .7s step-end infinite}@keyframes dasunTy{from{width:0}to{width:11ch}}@keyframes blink{50%{border-color:transparent}}'],
['Bounce Ball','<div class="dasun-bb"></div>','.dasun-bb{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#06b6d4,#7c5cff);box-shadow:0 14px 24px rgba(124,92,255,.4);animation:dasunBb 1s cubic-bezier(.5,0,.5,1) infinite alternate}@keyframes dasunBb{from{transform:translateY(-28px)}to{transform:translateY(20px)}}'],
['Flip Card','<div class="dasun-fc"><div class="dasun-fci"></div></div>','.dasun-fc{width:80px;height:100px;perspective:600px}.dasun-fci{width:100%;height:100%;border-radius:12px;background:linear-gradient(135deg,#7c5cff,#ec4899);animation:dasunFc 2s infinite;transform-style:preserve-3d}@keyframes dasunFc{0%{transform:rotateY(0)}50%{transform:rotateY(180deg);background:linear-gradient(135deg,#06b6d4,#a855f7)}100%{transform:rotateY(360deg)}}'],
['Hover Lift','<div class="dasun-hl"></div>','.dasun-hl{width:100px;height:70px;border-radius:14px;background:linear-gradient(135deg,#7c5cff,#a855f7);transition:.35s;cursor:pointer}.dasun-hl:hover{transform:translateY(-10px);box-shadow:0 20px 40px rgba(124,92,255,.5)}'],
['Border Spin','<div class="dasun-bs"><p>Border Spin</p></div>','.dasun-bs{position:relative;padding:2px;border-radius:16px;overflow:hidden;background:#1e2633;display:inline-block}.dasun-bs::before{content:"";position:absolute;top:50%;left:50%;width:220%;height:220%;background:conic-gradient(#7c5cff,#ec4899,#7c5cff);transform:translate(-50%,-50%);animation:dasunBs 3s linear infinite}.dasun-bs p{position:relative;padding:20px 34px;border-radius:14px;background:#0a0d16;font-size:14px;color:#fff;font-family:"Space Grotesk"}@keyframes dasunBs{to{transform:translate(-50%,-50%) rotate(360deg)}}'],
['Rainbow Border','<div class="dasun-rb"><p>Rainbow</p></div>','.dasun-rb{position:relative;padding:3px;border-radius:16px;overflow:hidden;display:inline-block}.dasun-rb::before{content:"";position:absolute;inset:-50%;background:conic-gradient(from 0deg,#ef4444,#f59e0b,#eab308,#10b981,#06b6d4,#3b82f6,#a855f7,#ef4444);animation:dasunRb 4s linear infinite}.dasun-rb p{position:relative;padding:20px 34px;border-radius:13px;background:#0a0d16;font-size:14px;color:#fff;font-family:"Space Grotesk"}@keyframes dasunRb{to{transform:rotate(360deg)}}'],
['Bubbles Rise','<div class="dasun-bu"><span></span><span></span><span></span><span></span></div>','.dasun-bu{position:relative;width:80px;height:100px}.dasun-bu span{position:absolute;bottom:0;width:12px;height:12px;border-radius:50%;background:rgba(124,92,255,.7);animation:dasunBu 3s infinite}.dasun-bu span:nth-child(1){left:10%;animation-delay:0s}.dasun-bu span:nth-child(2){left:35%;animation-delay:.5s;width:10px;height:10px}.dasun-bu span:nth-child(3){left:60%;animation-delay:1s;width:14px;height:14px}.dasun-bu span:nth-child(4){left:85%;animation-delay:1.5s}@keyframes dasunBu{0%{bottom:0;opacity:0}20%{opacity:1}100%{bottom:100%;opacity:0;transform:translateX(20px)}}'],
['Fire Flame','<div class="dasun-fr"><span></span><span></span><span></span></div>','.dasun-fr{position:relative;width:40px;height:60px}.dasun-fr span{position:absolute;bottom:0;left:50%;width:20px;height:40px;margin-left:-10px;background:linear-gradient(0deg,#f59e0b,#ef4444,transparent);border-radius:50% 50% 20% 20%;filter:blur(4px);animation:dasunFr 1s infinite alternate}.dasun-fr span:nth-child(2){width:14px;height:30px;margin-left:-7px;left:30%;background:linear-gradient(0deg,#fbbf24,#f59e0b,transparent);animation-delay:.2s}.dasun-fr span:nth-child(3){width:16px;height:34px;margin-left:-8px;left:70%;background:linear-gradient(0deg,#f59e0b,#ef4444,transparent);animation-delay:.4s}@keyframes dasunFr{0%{transform:scaleY(1)}100%{transform:scaleY(1.3)}}'],
['Aurora','<div class="dasun-au"></div>','.dasun-au{width:200px;height:100px;border-radius:14px;background:linear-gradient(120deg,#7c5cff,#a855f7,#ec4899,#06b6d4,#7c5cff);background-size:300% 300%;animation:dasunAu 5s ease infinite;filter:blur(2px)}@keyframes dasunAu{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}'],
['Snowfall','<div class="dasun-sn"><span></span><span></span><span></span><span></span><span></span></div>','.dasun-sn{position:relative;width:80px;height:100px;overflow:hidden}.dasun-sn span{position:absolute;top:-10px;width:6px;height:6px;border-radius:50%;background:#fff;opacity:.85;animation:dasunSn 3s linear infinite}.dasun-sn span:nth-child(1){left:10%;animation-delay:0s}.dasun-sn span:nth-child(2){left:30%;animation-delay:.6s}.dasun-sn span:nth-child(3){left:50%;animation-delay:1.2s}.dasun-sn span:nth-child(4){left:70%;animation-delay:1.8s}.dasun-sn span:nth-child(5){left:90%;animation-delay:2.4s}@keyframes dasunSn{0%{top:-10px;transform:translateX(0)}100%{top:100%;transform:translateX(15px)}}'],
['Rain Drops','<div class="dasun-rn"><span></span><span></span><span></span><span></span><span></span></div>','.dasun-rn{position:relative;width:80px;height:100px;overflow:hidden}.dasun-rn span{position:absolute;top:-20px;width:2px;height:14px;background:linear-gradient(180deg,transparent,#06b6d4);animation:dasunRn 1s linear infinite}.dasun-rn span:nth-child(1){left:15%;animation-delay:0s}.dasun-rn span:nth-child(2){left:35%;animation-delay:.2s}.dasun-rn span:nth-child(3){left:55%;animation-delay:.4s}.dasun-rn span:nth-child(4){left:75%;animation-delay:.6s}.dasun-rn span:nth-child(5){left:90%;animation-delay:.8s}@keyframes dasunRn{0%{top:-20px}100%{top:100%}}'],
['Laser Scan','<div class="dasun-ls"><span></span></div>','.dasun-ls{position:relative;width:140px;height:80px;border-radius:10px;background:#0a0d16;border:1px solid #2d3346;overflow:hidden}.dasun-ls span{position:absolute;top:0;bottom:0;width:3px;background:linear-gradient(180deg,transparent,#06b6d4,transparent);box-shadow:0 0 20px #06b6d4;animation:dasunLs 1.8s ease-in-out infinite}@keyframes dasunLs{0%,100%{left:0}50%{left:calc(100% - 3px)}}'],
['Shimmer','<div class="dasun-sm"></div>','.dasun-sm{width:120px;height:60px;border-radius:12px;background:linear-gradient(100deg,#1a1f2e 30%,#2d3346 50%,#1a1f2e 70%);background-size:200% 100%;animation:dasunSm 2s linear infinite}@keyframes dasunSm{to{background-position:-200% 0}}'],
['Color Cycle','<div class="dasun-cc"></div>','.dasun-cc{width:60px;height:60px;border-radius:50%;animation:dasunCc 4s linear infinite}@keyframes dasunCc{0%{background:#7c5cff}25%{background:#a855f7}50%{background:#ec4899}75%{background:#06b6d4}100%{background:#7c5cff}}'],
['Scale Pulse','<div class="dasun-sp"></div>','.dasun-sp{width:70px;height:70px;border-radius:50%;background:linear-gradient(135deg,#7c5cff,#ec4899);animation:dasunSp 1.6s ease-in-out infinite}@keyframes dasunSp{0%,100%{transform:scale(1)}50%{transform:scale(1.3)}}'],
['Orbit Text','<div class="dasun-ot"><span>D</span><span>G</span><span>U</span><span>I</span></div>','.dasun-ot{position:relative;width:100px;height:100px;animation:dasunOt 6s linear infinite}.dasun-ot span{position:absolute;top:50%;left:50%;font-size:20px;font-weight:800;color:#7c5cff;font-family:"Space Grotesk"}.dasun-ot span:nth-child(1){transform:translate(-50%,-50%) translateY(-40px)}.dasun-ot span:nth-child(2){transform:translate(-50%,-50%) translateX(40px)}.dasun-ot span:nth-child(3){transform:translate(-50%,-50%) translateY(40px)}.dasun-ot span:nth-child(4){transform:translate(-50%,-50%) translateX(-40px)}@keyframes dasunOt{to{transform:rotate(360deg)}}'],
['Glitch','<div class="dasun-gl">GLITCH</div>','.dasun-gl{font-family:"Space Grotesk";font-size:32px;font-weight:800;color:#7c5cff;position:relative;animation:dasunGl 2s infinite}@keyframes dasunGl{0%,90%,100%{text-shadow:none;transform:translate(0)}92%{text-shadow:-2px 0 #ec4899,2px 0 #06b6d4;transform:translate(-2px,0)}94%{text-shadow:2px 0 #ec4899,-2px 0 #06b6d4;transform:translate(2px,0)}96%{text-shadow:-1px 0 #ec4899,1px 0 #06b6d4;transform:translate(-1px,0)}}'],
['Neon Sign','<div class="dasun-ns">OPEN</div>','.dasun-ns{font-family:"Space Grotesk";font-size:28px;font-weight:800;color:#00e5ff;padding:12px 24px;border:2px solid #00e5ff;border-radius:8px;animation:dasunNs 2s infinite;text-shadow:0 0 8px #00e5ff}@keyframes dasunNs{0%,100%{opacity:1;box-shadow:0 0 15px #00e5ff,inset 0 0 15px rgba(0,229,255,.2)}50%{opacity:.85;box-shadow:0 0 30px #00e5ff,inset 0 0 30px rgba(0,229,255,.4)}}'],
['Swing','<div class="dasun-sw"></div>','.dasun-sw{width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,#f59e0b,#ec4899);transform-origin:top center;animation:dasunSw 1.6s infinite}@keyframes dasunSw{0%,100%{transform:rotate(0)}20%{transform:rotate(15deg)}40%{transform:rotate(-12deg)}60%{transform:rotate(8deg)}80%{transform:rotate(-5deg)}}'],
['Bounce In','<div class="dasun-bi"></div>','.dasun-bi{width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,#ec4899,#f59e0b);animation:dasunBi 1.4s cubic-bezier(.2,.8,.3,1) infinite}@keyframes dasunBi{0%{transform:scale(0);opacity:0}60%{transform:scale(1.15);opacity:1}100%{transform:scale(1)}}'],
['Morph Blob','<div class="dasun-mb"></div>','.dasun-mb{width:80px;height:80px;background:linear-gradient(135deg,#7c5cff,#ec4899);animation:dasunMb 4s ease-in-out infinite}@keyframes dasunMb{0%,100%{border-radius:50%;transform:rotate(0)}25%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%;transform:rotate(90deg)}50%{border-radius:30% 60% 70% 40%/50% 60% 30% 60%;transform:rotate(180deg)}75%{border-radius:70% 30% 40% 60%/40% 70% 60% 30%;transform:rotate(270deg)}}'],
['Shine Text','<div class="dasun-ts">SHINE</div>','.dasun-ts{font-family:"Space Grotesk";font-size:32px;font-weight:800;background:linear-gradient(90deg,#7c5cff 30%,#fff 50%,#7c5cff 70%);background-size:200% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:dasunTs 2s linear infinite}@keyframes dasunTs{to{background-position:-200% 0}}'],
['Breathe','<div class="dasun-br"></div>','.dasun-br{width:60px;height:60px;border-radius:50%;background:radial-gradient(circle,#7c5cff,#3b2d8f);animation:dasunBr 3s ease-in-out infinite}@keyframes dasunBr{0%,100%{transform:scale(.8);opacity:.7;filter:blur(2px)}50%{transform:scale(1.1);opacity:1;filter:blur(0)}}'],
['Pendulum Swing','<div class="dasun-ps2"><span></span></div>','.dasun-ps2{position:relative;width:80px;height:60px;display:flex;justify-content:center}.dasun-ps2 span{width:20px;height:20px;border-radius:50%;background:linear-gradient(135deg,#7c5cff,#ec4899);transform-origin:50% -30px;animation:dasunPs2 1.4s ease-in-out infinite}@keyframes dasunPs2{0%,100%{transform:rotate(-25deg)}50%{transform:rotate(25deg)}}'],
['Rotate In','<div class="dasun-ri"></div>','.dasun-ri{width:60px;height:60px;border-radius:14px;background:linear-gradient(135deg,#7c5cff,#a855f7);animation:dasunRi 1.8s infinite ease-out}@keyframes dasunRi{0%{transform:rotate(-360deg) scale(0);opacity:0}60%{transform:rotate(0) scale(1.1);opacity:1}100%{transform:rotate(0) scale(1)}}'],
['Zoom Fade','<div class="dasun-zf"></div>','.dasun-zf{width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,#06b6d4,#7c5cff);animation:dasunZf 2s ease-in-out infinite}@keyframes dasunZf{0%{transform:scale(0) rotate(0);opacity:0}50%{transform:scale(1.2) rotate(180deg);opacity:1}100%{transform:scale(1) rotate(360deg);opacity:.3}}'],
['Split Reveal','<div class="dasun-sr"><span></span><span></span></div>','.dasun-sr{display:flex;gap:4px}.dasun-sr span{width:30px;height:80px;background:linear-gradient(135deg,#7c5cff,#a855f7);border-radius:8px;animation:dasunSr 1.6s ease-in-out infinite}.dasun-sr span:nth-child(2){animation-delay:.8s;background:linear-gradient(135deg,#ec4899,#7c5cff)}@keyframes dasunSr{0%,100%{transform:scaleY(.4)}50%{transform:scaleY(1)}}'],
['Puzzle','<div class="dasun-pz"><span></span><span></span><span></span><span></span></div>','.dasun-pz{display:grid;grid-template-columns:20px 20px;gap:4px}.dasun-pz span{width:20px;height:20px;background:#7c5cff;border-radius:4px;animation:dasunPz 2s infinite}.dasun-pz span:nth-child(2){animation-delay:.5s;background:#a855f7}.dasun-pz span:nth-child(3){animation-delay:1s;background:#ec4899}.dasun-pz span:nth-child(4){animation-delay:1.5s;background:#06b6d4}@keyframes dasunPz{0%,100%{transform:translate(0,0) rotate(0);border-radius:4px}50%{transform:translate(10px,-10px) rotate(180deg);border-radius:50%}}'],
['Bar Rhythm','<div class="dasun-br2"><span></span><span></span><span></span><span></span><span></span><span></span></div>','.dasun-br2{display:flex;gap:3px;align-items:center;height:60px}.dasun-br2 span{width:6px;background:linear-gradient(180deg,#7c5cff,#ec4899);border-radius:3px;animation:dasunBr2 1.6s infinite ease-in-out}.dasun-br2 span:nth-child(1){animation-delay:0s}.dasun-br2 span:nth-child(2){animation-delay:.2s}.dasun-br2 span:nth-child(3){animation-delay:.4s}.dasun-br2 span:nth-child(4){animation-delay:.6s}.dasun-br2 span:nth-child(5){animation-delay:.8s}.dasun-br2 span:nth-child(6){animation-delay:1s}@keyframes dasunBr2{0%,100%{height:10px;opacity:.4}50%{height:50px;opacity:1}}'],
['Diamond Spin','<div class="dasun-dm"></div>','.dasun-dm{width:46px;height:46px;background:linear-gradient(135deg,#7c5cff,#ec4899);transform:rotate(45deg);animation:dasunDm 2s infinite}@keyframes dasunDm{0%{transform:rotate(45deg) scale(1)}50%{transform:rotate(225deg) scale(.6)}100%{transform:rotate(405deg) scale(1)}}'],
['Lightning','<div class="dasun-lt">⚡</div>','.dasun-lt{font-size:52px;color:#fbbf24;animation:dasunLt 1.2s infinite;filter:drop-shadow(0 0 12px rgba(251,191,36,.7))}@keyframes dasunLt{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(1.15)}}'],
['Slide Show','<div class="dasun-ss"><span></span><span></span><span></span></div>','.dasun-ss{position:relative;width:80px;height:60px}.dasun-ss span{position:absolute;inset:0;border-radius:10px;background:linear-gradient(135deg,#7c5cff,#ec4899);animation:dasunSs 3s infinite}.dasun-ss span:nth-child(2){background:linear-gradient(135deg,#06b6d4,#7c5cff);animation-delay:1s}.dasun-ss span:nth-child(3){background:linear-gradient(135deg,#10b981,#a855f7);animation-delay:2s}@keyframes dasunSs{0%,33%,100%{opacity:0;transform:translateX(30px)}15%,18%{opacity:1;transform:translateX(0)}}'],
['Spring','<div class="dasun-sp2"></div>','.dasun-sp2{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#7c5cff,#a855f7);animation:dasunSp2 1.4s cubic-bezier(.5,-0.5,.5,1.5) infinite}@keyframes dasunSp2{0%,100%{transform:translateY(-20px)}50%{transform:translateY(20px)}}'],
['Metronome','<div class="dasun-mt"><span></span></div>','.dasun-mt{position:relative;width:60px;height:60px;border-bottom:3px solid #2d3346}.dasun-mt span{position:absolute;bottom:0;left:50%;width:3px;height:50px;background:linear-gradient(180deg,#7c5cff,#ec4899);transform-origin:50% 100%;animation:dasunMt 1s infinite}@keyframes dasunMt{0%,100%{transform:translateX(-50%) rotate(-30deg)}50%{transform:translateX(-50%) rotate(30deg)}}'],
['Zoom Rotate','<div class="dasun-zr"></div>','.dasun-zr{width:60px;height:60px;background:linear-gradient(135deg,#7c5cff,#ec4899);border-radius:8px;animation:dasunZr 2s ease-in-out infinite}@keyframes dasunZr{0%,100%{transform:scale(1) rotate(0);border-radius:8px}50%{transform:scale(.5) rotate(180deg);border-radius:50%}}'],
['Glow Border','<div class="dasun-gb">GLOW</div>','.dasun-gb{font-family:"Space Grotesk";font-size:22px;font-weight:800;color:#7c5cff;padding:14px 28px;border-radius:12px;background:#0a0d16;position:relative;animation:dasunGb 2s infinite}@keyframes dasunGb{0%,100%{box-shadow:0 0 0 0 rgba(124,92,255,.6),inset 0 0 0 0 rgba(124,92,255,.3)}50%{box-shadow:0 0 30px 4px rgba(124,92,255,.6),inset 0 0 20px 2px rgba(124,92,255,.3)}}'],
['Confetti','<div class="dasun-cf"><span></span><span></span><span></span><span></span><span></span><span></span></div>','.dasun-cf{position:relative;width:80px;height:80px}.dasun-cf span{position:absolute;top:50%;left:50%;width:6px;height:6px;animation:dasunCf 2s infinite}.dasun-cf span:nth-child(1){background:#7c5cff;animation-delay:0s;--tx:-25px;--ty:-25px}.dasun-cf span:nth-child(2){background:#ec4899;animation-delay:.2s;--tx:25px;--ty:-25px}.dasun-cf span:nth-child(3){background:#06b6d4;animation-delay:.4s;--tx:-25px;--ty:25px}.dasun-cf span:nth-child(4){background:#10b981;animation-delay:.6s;--tx:25px;--ty:25px}.dasun-cf span:nth-child(5){background:#f59e0b;animation-delay:.8s;--tx:0;--ty:-30px}.dasun-cf span:nth-child(6){background:#ef4444;animation-delay:1s;--tx:0;--ty:30px}@keyframes dasunCf{0%{transform:translate(0,0) rotate(0);opacity:1}100%{transform:translate(var(--tx),var(--ty)) rotate(720deg);opacity:0}}'],
['Liquid Flow','<div class="dasun-lf"></div>','.dasun-lf{width:60px;height:60px;background:linear-gradient(135deg,#7c5cff,#ec4899);animation:dasunLf 3s infinite ease-in-out}@keyframes dasunLf{0%,100%{border-radius:50% 50% 50% 50%/50% 50% 50% 50%}25%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%}50%{border-radius:30% 60% 70% 40%/50% 60% 30% 60%}75%{border-radius:70% 30% 40% 60%/40% 70% 60% 30%}}'],
['Chase Tail','<div class="dasun-ct"><span></span><span></span><span></span></div>','.dasun-ct{position:relative;width:70px;height:20px}.dasun-ct span{position:absolute;top:50%;width:12px;height:12px;margin-top:-6px;border-radius:50%;background:#7c5cff}.dasun-ct span:nth-child(1){animation:dasunCt 1.4s infinite;background:#7c5cff}.dasun-ct span:nth-child(2){animation:dasunCt 1.4s infinite .1s;background:#a855f7}.dasun-ct span:nth-child(3){animation:dasunCt 1.4s infinite .2s;background:#ec4899}@keyframes dasunCt{0%{left:0;opacity:1}100%{left:calc(100% - 12px);opacity:0}}'],
['Neon Glitch','<div class="dasun-ng">NEON</div>','.dasun-ng{font-family:"JetBrains Mono",monospace;font-size:26px;font-weight:800;color:#00e5ff;text-shadow:0 0 10px #00e5ff;animation:dasunNg 3s infinite}@keyframes dasunNg{0%,90%,100%{transform:translate(0);opacity:1}10%{transform:translate(-2px,1px);text-shadow:-2px 0 #ec4899,2px 0 #7c5cff}20%{transform:translate(2px,-1px);text-shadow:2px 0 #ec4899,-2px 0 #7c5cff}}'],
['Rainbow Text','<div class="dasun-rt">RAINBOW</div>','.dasun-rt{font-family:"Space Grotesk";font-size:28px;font-weight:800;background:linear-gradient(90deg,#ef4444,#f59e0b,#eab308,#10b981,#06b6d4,#3b82f6,#a855f7,#ef4444);background-size:300% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:dasunRt 3s linear infinite}@keyframes dasunRt{to{background-position:300% 0}}']
];
A.forEach(function(x){add('Animation',x[0],x[1],x[2]);});

/* ========== LOGIN (50) ========== */
var LG_SHAPES = [
['Minimal Dark','<form class="dasun-lg1" onsubmit="return false"><h2>Welcome</h2><input type="text" placeholder="Username"><input type="password" placeholder="Password"><button type="submit">Login</button></form>','.dasun-lg1{width:260px;padding:24px;border-radius:16px;background:#141824;border:1px solid #2d3346;display:flex;flex-direction:column;gap:10px;font-family:Inter}.dasun-lg1 h2{font-size:18px;color:#fff;font-family:"Space Grotesk";text-align:center;margin-bottom:4px}.dasun-lg1 input{padding:11px 13px;border-radius:9px;border:1px solid #2d3346;background:#0a0d16;color:#e5e7eb;font-size:13px;outline:none}.dasun-lg1 input:focus{border-color:#7c5cff}.dasun-lg1 button{padding:11px;border:none;border-radius:9px;background:linear-gradient(90deg,#7c5cff,#a855f7);color:#fff;font-size:14px;cursor:pointer;font-family:"Space Grotesk";font-weight:600}'],
['Glass Frosted','<div class="dasun-lg2"><div class="dasun-lg2b1"></div><div class="dasun-lg2b2"></div><form onsubmit="return false"><h2>Sign In</h2><input type="email" placeholder="Email"><input type="password" placeholder="Password"><button type="submit">Continue</button></form></div>','.dasun-lg2{position:relative;width:290px;padding:30px 16px;border-radius:22px;overflow:hidden;background:#0b0f1a;display:flex;justify-content:center;font-family:Inter}.dasun-lg2b1,.dasun-lg2b2{position:absolute;width:160px;height:160px;border-radius:50%;filter:blur(50px);opacity:.85}.dasun-lg2b1{background:#7c5cff;top:-40px;left:-40px}.dasun-lg2b2{background:#ec4899;bottom:-50px;right:-40px}.dasun-lg2 form{position:relative;width:230px;padding:22px;border-radius:18px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.13);backdrop-filter:blur(14px);display:flex;flex-direction:column;gap:11px}.dasun-lg2 form h2{font-size:17px;text-align:center;color:#fff;font-family:"Space Grotesk"}.dasun-lg2 form input{padding:11px 13px;border-radius:9px;border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.05);color:#fff;font-size:13px;outline:none}.dasun-lg2 form button{padding:11px;border:none;border-radius:9px;background:linear-gradient(90deg,#7c5cff,#a855f7);color:#fff;font-size:13px;cursor:pointer;font-family:"Space Grotesk";font-weight:600}'],
['Neon Cyber','<form class="dasun-lg3" onsubmit="return false"><h2>ACCESS</h2><input type="text" placeholder="Username"><input type="password" placeholder="Password"><button type="submit">ENTER</button></form>','.dasun-lg3{width:260px;padding:26px;border-radius:14px;background:#080b10;border:1px solid rgba(0,229,255,.27);box-shadow:0 0 22px rgba(0,229,255,.15);display:flex;flex-direction:column;gap:11px;font-family:Inter}.dasun-lg3 h2{text-align:center;font-size:16px;letter-spacing:4px;color:#00e5ff;text-shadow:0 0 12px #00e5ff;font-family:"Space Grotesk"}.dasun-lg3 input{padding:11px 13px;background:#0d1219;border:1px solid rgba(0,229,255,.2);border-radius:8px;color:#00e5ff;font-size:13px;outline:none}.dasun-lg3 button{padding:11px;background:transparent;border:1px solid #00e5ff;border-radius:8px;color:#00e5ff;letter-spacing:3px;cursor:pointer;font-weight:600;font-family:"Space Grotesk"}'],
['Terminal CLI','<form class="dasun-lg4" onsubmit="return false"><div class="dasun-lg4h"><span></span><span></span><span></span></div><div class="dasun-lg4c"><p>$ login --user</p><input type="text" placeholder="username"><p>$ login --pass</p><input type="password" placeholder="password"><button type="submit">▸ EXECUTE</button></div></form>','.dasun-lg4{width:320px;border-radius:10px;background:#0d1117;border:1px solid #30363d;overflow:hidden;font-family:"JetBrains Mono",monospace}.dasun-lg4h{padding:10px 14px;background:#161b22;display:flex;gap:6px;border-bottom:1px solid #30363d}.dasun-lg4h span{width:12px;height:12px;border-radius:50%;background:#ff5f57}.dasun-lg4h span:nth-child(2){background:#febc2e}.dasun-lg4h span:nth-child(3){background:#28c840}.dasun-lg4c{padding:18px;display:flex;flex-direction:column;gap:8px}.dasun-lg4c p{font-size:11.5px;color:#7ee787}.dasun-lg4c input{padding:8px 12px;background:#010409;border:1px solid #30363d;color:#7ee787;font-size:12px;outline:none;font-family:inherit;border-radius:4px}.dasun-lg4c button{padding:10px;background:#238636;border:none;color:#fff;font-size:12px;cursor:pointer;font-family:inherit;border-radius:4px;margin-top:6px}'],
['Split Layout','<div class="dasun-lg5"><div class="dasun-lg5l"><h2>DG UI</h2><p>Welcome back to the future of design.</p></div><form class="dasun-lg5r" onsubmit="return false"><h3>Sign In</h3><input type="text" placeholder="Email"><input type="password" placeholder="Password"><button type="submit">Continue</button></form></div>','.dasun-lg5{display:flex;width:100%;max-width:480px;border-radius:18px;overflow:hidden;border:1px solid #2d3346;font-family:Inter}.dasun-lg5l{width:45%;padding:32px 24px;background:linear-gradient(160deg,#7c5cff,#ec4899);display:flex;flex-direction:column;justify-content:center;gap:10px}.dasun-lg5l h2{font-size:24px;color:#fff;font-family:"Space Grotesk";font-weight:800}.dasun-lg5l p{font-size:12px;color:rgba(255,255,255,.9);line-height:1.6}.dasun-lg5r{width:55%;padding:32px 26px;background:#141824;display:flex;flex-direction:column;gap:11px}.dasun-lg5r h3{font-size:17px;color:#fff;font-family:"Space Grotesk";margin-bottom:4px}.dasun-lg5r input{padding:11px 13px;border-radius:10px;border:1px solid #2d3346;background:#0a0d16;color:#e5e7eb;font-size:12.5px;outline:none}.dasun-lg5r button{padding:11px;border:none;border-radius:10px;background:#7c5cff;color:#fff;font-size:13px;cursor:pointer;font-family:"Space Grotesk";font-weight:600}'],
['Brutalist','<form class="dasun-lg6" onsubmit="return false"><h2>SIGN IN</h2><input type="text" placeholder="USERNAME"><input type="password" placeholder="PASSWORD"><button type="submit">ENTER</button></form>','.dasun-lg6{width:290px;background:#fff;border:4px solid #000;display:flex;flex-direction:column;box-shadow:12px 12px 0 #7c5cff;font-family:Inter}.dasun-lg6 h2{font-size:22px;background:#000;color:#fff;padding:14px 18px;font-family:"Space Grotesk";font-weight:800;letter-spacing:3px}.dasun-lg6 input{padding:14px 18px;border:none;border-bottom:3px solid #000;background:#fff;font-size:14px;outline:none;font-family:"JetBrains Mono",monospace;font-weight:600}.dasun-lg6 button{padding:16px;border:none;background:#000;color:#fff;font-size:15px;cursor:pointer;font-family:"Space Grotesk";font-weight:800;letter-spacing:3px}'],
['Neumorphism','<form class="dasun-lg7" onsubmit="return false"><h2>Sign In</h2><input type="email" placeholder="Email"><input type="password" placeholder="Password"><button type="submit">Login</button></form>','.dasun-lg7{width:300px;padding:30px 26px;border-radius:22px;background:#e0e5ec;display:flex;flex-direction:column;gap:14px;font-family:Inter}.dasun-lg7 h2{font-size:19px;color:#3d4461;text-align:center;font-family:"Space Grotesk";margin-bottom:6px}.dasun-lg7 input{padding:14px 18px;border-radius:12px;border:none;background:#e0e5ec;color:#3d4461;font-size:13px;outline:none;box-shadow:inset 5px 5px 10px #c1c5cc,inset -5px -5px 10px #ffffff}.dasun-lg7 button{padding:14px;border:none;border-radius:12px;background:linear-gradient(145deg,#f0f5fc,#c8cdd4);color:#5b6379;font-size:14px;cursor:pointer;font-family:"Space Grotesk";font-weight:600;box-shadow:5px 5px 10px #c1c5cc,-5px -5px 10px #ffffff}'],
['Retro Y2K','<form class="dasun-lg8" onsubmit="return false"><div class="dasun-lg8h">★ SIGN IN ★</div><input type="text" placeholder="username"><input type="password" placeholder="password"><button type="submit">GO!</button></form>','.dasun-lg8{width:280px;padding:22px;border-radius:20px;background:linear-gradient(145deg,#ff00ff,#00ffff);display:flex;flex-direction:column;gap:10px;box-shadow:8px 8px 0 #000}.dasun-lg8h{background:#000;color:#0ff;text-align:center;padding:8px;font-family:"JetBrains Mono",monospace;font-weight:700;letter-spacing:2px;font-size:14px;border-radius:4px}.dasun-lg8 input{padding:11px 14px;border-radius:12px;border:3px solid #000;background:#fff;font-size:13px;outline:none;font-weight:600}.dasun-lg8 button{padding:12px;border-radius:12px;border:3px solid #000;background:#ff0;font-size:14px;cursor:pointer;font-weight:800;font-family:"JetBrains Mono",monospace;letter-spacing:2px}'],
['Magazine','<form class="dasun-lg9" onsubmit="return false"><h2>Welcome<br>Back</h2><input type="email" placeholder="your@email.com"><input type="password" placeholder="password"><button type="submit">Continue →</button></form>','.dasun-lg9{width:340px;padding:44px 36px;background:#f5f1ea;color:#1a1a1a;display:flex;flex-direction:column;gap:18px;font-family:"Space Grotesk";border-top:6px solid #1a1a1a}.dasun-lg9 h2{font-size:36px;line-height:1.05;font-weight:800;letter-spacing:-.03em;margin-bottom:6px}.dasun-lg9 input{padding:14px 0;border:none;border-bottom:1.5px solid #1a1a1a;background:transparent;font-size:15px;outline:none;font-family:"Space Grotesk"}.dasun-lg9 button{padding:16px;border:none;background:#1a1a1a;color:#f5f1ea;font-size:15px;cursor:pointer;font-family:"Space Grotesk";font-weight:600;letter-spacing:1px}'],
['Material Float','<form class="dasun-lg10" onsubmit="return false"><h2>Sign in</h2><div class="dasun-lg10f"><input type="email" placeholder=" "><label>Email</label></div><div class="dasun-lg10f"><input type="password" placeholder=" "><label>Password</label></div><button type="submit">Continue</button></form>','.dasun-lg10{width:300px;padding:32px 26px;background:#fff;color:#111;display:flex;flex-direction:column;gap:14px;box-shadow:0 4px 12px rgba(0,0,0,.15);font-family:Inter}.dasun-lg10 h2{font-size:22px;font-family:"Space Grotesk";font-weight:500;margin-bottom:6px}.dasun-lg10f{position:relative}.dasun-lg10f input{width:100%;padding:16px 14px 6px;border:none;border-bottom:2px solid #ddd;background:transparent;font-size:14px;outline:none}.dasun-lg10f input:focus{border-color:#7c5cff}.dasun-lg10f label{position:absolute;left:14px;top:14px;font-size:14px;color:#888;pointer-events:none;transition:.2s}.dasun-lg10f input:focus+label,.dasun-lg10f input:not(:placeholder-shown)+label{top:2px;font-size:11px;color:#7c5cff}.dasun-lg10 button{padding:14px;border:none;background:linear-gradient(90deg,#7c5cff,#a855f7);color:#fff;font-size:14px;cursor:pointer;font-family:"Space Grotesk";font-weight:600}'],
['Dark Elegant','<form class="dasun-lg11" onsubmit="return false"><div class="dasun-lg11logo">D</div><h2>Welcome Back</h2><p>Sign in to continue</p><input type="email" placeholder="Email address"><input type="password" placeholder="Password"><button type="submit">Sign In</button></form>','.dasun-lg11{width:340px;padding:36px 32px;border-radius:20px;background:#0d1017;border:1px solid #2d3346;display:flex;flex-direction:column;gap:14px;font-family:Inter}.dasun-lg11logo{width:52px;height:52px;border-radius:14px;background:linear-gradient(135deg,#7c5cff,#a855f7);display:flex;align-items:center;justify-content:center;font-family:"Space Grotesk";font-weight:800;font-size:24px;color:#fff;margin-bottom:6px}.dasun-lg11 h2{font-size:22px;color:#fff;font-family:"Space Grotesk"}.dasun-lg11 p{font-size:12.5px;color:#8a94a8}.dasun-lg11 input{padding:13px 15px;border-radius:10px;border:1px solid #2d3346;background:#0a0d16;color:#e5e7eb;font-size:13.5px;outline:none}.dasun-lg11 input:focus{border-color:#7c5cff}.dasun-lg11 button{padding:13px;border:none;border-radius:10px;background:linear-gradient(90deg,#7c5cff,#a855f7);color:#fff;font-size:14px;cursor:pointer;font-family:"Space Grotesk";font-weight:600}'],
['Command Palette','<form class="dasun-lg12" onsubmit="return false"><div class="dasun-lg12s"><input type="text" placeholder="› Sign in to DG UI..."></div><div class="dasun-lg12i"><span>📧</span> Continue with Email <em>↵</em></div><div class="dasun-lg12i"><span>🔒</span> Continue with Password <em>⌘P</em></div><div class="dasun-lg12i"><span>🔑</span> Use Passkey <em>⌘K</em></div></form>','.dasun-lg12{width:360px;background:#0d1017;border:1px solid #2d3346;border-radius:14px;overflow:hidden;font-family:Inter}.dasun-lg12s{padding:14px 18px;border-bottom:1px solid #2d3346}.dasun-lg12s input{width:100%;background:transparent;border:none;color:#e5e7eb;font-size:14px;outline:none}.dasun-lg12i{padding:12px 18px;display:flex;align-items:center;gap:12px;color:#c8d0e0;font-size:13px;cursor:pointer}.dasun-lg12i:hover{background:#1a1f2e}.dasun-lg12i em{margin-left:auto;font-style:normal;font-size:11px;background:#141824;padding:3px 8px;border-radius:5px;color:#8a94a8}']
];
var LOGIN_COLORS = [
  ['#7c5cff','#a855f7','purple'],['#ec4899','#f43f5e','pink'],['#06b6d4','#3b82f6','cyan'],
  ['#10b981','#059669','green']
];
var _loginCount=0;
LG_SHAPES.forEach(function(shape){
  LOGIN_COLORS.forEach(function(col){
    if(_loginCount>=50)return;
    var name = col[2].charAt(0).toUpperCase()+col[2].slice(1)+' '+shape[0];
    var css = shape[2].replace(/#7c5cff/g,col[0]).replace(/#a855f7/g,col[1]).replace(/linear-gradient\(90deg,#7c5cff,#a855f7\)/g,'linear-gradient(90deg,'+col[0]+','+col[1]+')').replace(/linear-gradient\(135deg,#7c5cff,#a855f7\)/g,'linear-gradient(135deg,'+col[0]+','+col[1]+')').replace(/linear-gradient\(160deg,#7c5cff,#ec4899\)/g,'linear-gradient(160deg,'+col[0]+','+col[1]+')').replace(/#7c5cff/g,col[0]);
    add('Login',name,shape[1],css);
    _loginCount++;
  });
});
while(_loginCount<50){
  var base=LG_SHAPES[_loginCount%LG_SHAPES.length];
  add('Login',base[0]+' v'+_loginCount,base[1],base[2]);
  _loginCount++;
}

/* ========== COMPONENT (30) ========== */
var C = [
['Primary Button','<button class="dasun-c1" type="button">Click Me</button>','.dasun-c1{padding:12px 26px;border:none;border-radius:10px;background:#7c5cff;color:#fff;font-size:14px;font-family:"Space Grotesk";font-weight:600;cursor:pointer;transition:.25s}.dasun-c1:hover{background:#6b4ff0;transform:translateY(-1px);box-shadow:0 10px 24px rgba(124,92,255,.5)}'],
['Gradient Button','<button class="dasun-c2" type="button">Gradient</button>','.dasun-c2{padding:13px 30px;border:none;border-radius:11px;background:linear-gradient(90deg,#7c5cff,#ec4899);color:#fff;font-size:14px;font-family:"Space Grotesk";font-weight:600;cursor:pointer;transition:.3s}.dasun-c2:hover{transform:translateY(-2px);box-shadow:0 12px 30px rgba(236,72,153,.5)}'],
['Ghost Button','<button class="dasun-c3" type="button">Ghost</button>','.dasun-c3{padding:11px 26px;border:1.5px solid #7c5cff;border-radius:10px;background:transparent;color:#a78bfa;font-size:14px;font-family:"Space Grotesk";font-weight:600;cursor:pointer;transition:.25s}.dasun-c3:hover{background:#7c5cff;color:#fff}'],
['3D Button','<button class="dasun-c4" type="button">Press Me</button>','.dasun-c4{padding:13px 30px;border:none;border-radius:11px;background:#7c5cff;color:#fff;font-size:14px;font-family:"Space Grotesk";font-weight:600;cursor:pointer;box-shadow:0 6px 0 #4535a8;transition:.1s}.dasun-c4:active{transform:translateY(4px);box-shadow:0 2px 0 #4535a8}'],
['Pill Button','<button class="dasun-c5" type="button">Pill</button>','.dasun-c5{padding:12px 30px;border:none;border-radius:999px;background:linear-gradient(90deg,#7c5cff,#a855f7);color:#fff;font-size:14px;font-family:"Space Grotesk";font-weight:600;cursor:pointer;transition:.3s}.dasun-c5:hover{transform:scale(1.05);box-shadow:0 14px 32px rgba(124,92,255,.5)}'],
['Neon Glow','<button class="dasun-c6" type="button">NEON</button>','.dasun-c6{padding:13px 30px;background:transparent;border:2px solid #00e5ff;border-radius:10px;color:#00e5ff;font-size:13px;letter-spacing:3px;font-family:"Space Grotesk";font-weight:700;cursor:pointer;transition:.3s;box-shadow:0 0 14px rgba(0,229,255,.5)}.dasun-c6:hover{background:#00e5ff;color:#0a0d16}'],
['Cyberpunk','<button class="dasun-c7" type="button">► EXECUTE</button>','.dasun-c7{padding:13px 28px;background:linear-gradient(90deg,rgba(6,182,212,.15),rgba(6,182,212,.05));border:1px solid #06b6d4;color:#06b6d4;font-size:13px;font-family:"JetBrains Mono",monospace;font-weight:600;letter-spacing:2px;cursor:pointer;clip-path:polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px);transition:.25s}.dasun-c7:hover{background:#06b6d4;color:#0a0d16}'],
['Brutalist','<button class="dasun-c8" type="button">CLICK</button>','.dasun-c8{padding:14px 32px;background:#ff0;border:3px solid #000;color:#000;font-size:15px;font-family:"Space Grotesk";font-weight:800;letter-spacing:2px;cursor:pointer;box-shadow:6px 6px 0 #000;transition:.15s}.dasun-c8:hover{transform:translate(-2px,-2px);box-shadow:8px 8px 0 #000}'],
['Retro Pixel','<button class="dasun-c9" type="button">START</button>','.dasun-c9{padding:14px 30px;background:#000;border:none;color:#0ff;font-size:14px;font-family:"JetBrains Mono",monospace;font-weight:700;letter-spacing:3px;cursor:pointer;box-shadow:4px 4px 0 #ff00ff,inset 0 0 0 2px #0ff;transition:.15s}.dasun-c9:hover{transform:translate(2px,2px)}'],
['Loading Button','<button class="dasun-c10" type="button"><span></span>Loading</button>','.dasun-c10{padding:13px 26px;border:none;border-radius:10px;background:#7c5cff;color:#fff;font-size:14px;font-family:"Space Grotesk";font-weight:600;cursor:pointer;display:flex;align-items:center;gap:10px}.dasun-c10 span{width:14px;height:14px;border:2px solid rgba(255,255,255,.35);border-top-color:#fff;border-radius:50%;animation:dasunC10 .7s linear infinite}@keyframes dasunC10{to{transform:rotate(360deg)}}'],
['Basic Card','<div class="dasun-c11"><h3>Card Title</h3><p>Description text here</p></div>','.dasun-c11{width:240px;padding:22px;border-radius:14px;background:#141824;border:1px solid #2d3346}.dasun-c11 h3{font-size:16px;color:#fff;font-family:"Space Grotesk";margin-bottom:8px}.dasun-c11 p{font-size:13px;color:#8a94a8;line-height:1.6}'],
['Profile Card','<div class="dasun-c12"><div class="dasun-c12a">D</div><h3>Dasun Gimahana</h3><p>Full-stack Dev</p></div>','.dasun-c12{width:220px;padding:26px;border-radius:16px;background:#141824;border:1px solid #2d3346;text-align:center}.dasun-c12a{width:64px;height:64px;margin:0 auto 12px;border-radius:50%;background:linear-gradient(135deg,#7c5cff,#a855f7);display:flex;align-items:center;justify-content:center;font-family:"Space Grotesk";font-weight:700;font-size:26px;color:#fff}.dasun-c12 h3{font-size:15px;color:#fff;font-family:"Space Grotesk"}.dasun-c12 p{font-size:12px;color:#8a94a8;margin-top:3px}'],
['Glass Card','<div class="dasun-c13"><h3>Glass</h3><p>Blurred glassmorphism</p></div>','.dasun-c13{width:240px;padding:24px;border-radius:16px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.13);backdrop-filter:blur(14px);box-shadow:0 14px 40px rgba(0,0,0,.4)}.dasun-c13 h3{font-size:15px;color:#fff;font-family:"Space Grotesk";margin-bottom:6px}.dasun-c13 p{font-size:12.5px;color:rgba(255,255,255,.7)}'],
['Badge Success','<span class="dasun-c14">● Active</span>','.dasun-c14{padding:5px 12px;border-radius:999px;background:rgba(16,185,129,.15);color:#34d399;font-size:11.5px;font-weight:600;border:1px solid rgba(16,185,129,.35);font-family:"Space Grotesk"}'],
['Badge Pro','<span class="dasun-c15">★ PRO</span>','.dasun-c15{padding:5px 14px;border-radius:8px;background:linear-gradient(90deg,#fbbf24,#f59e0b);color:#0a0d16;font-size:11px;font-weight:700;font-family:"Space Grotesk";letter-spacing:1.5px}'],
['Toggle Switch','<div class="dasun-c16" id="dasunT1"><span></span></div>','.dasun-c16{width:52px;height:28px;border-radius:999px;background:#2d3346;position:relative;cursor:pointer;transition:.3s}.dasun-c16 span{position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:#fff;transition:.3s}.dasun-c16.on{background:#7c5cff;box-shadow:0 0 20px rgba(124,92,255,.5)}.dasun-c16.on span{left:27px}','var t1=document.getElementById("dasunT1");if(t1)t1.addEventListener("click",function(){this.classList.toggle("on");});'],
['Checkbox','<label class="dasun-c17"><input type="checkbox" checked><span></span></label>','.dasun-c17{display:inline-block;cursor:pointer}.dasun-c17 input{display:none}.dasun-c17 span{display:flex;width:24px;height:24px;border-radius:7px;border:2px solid #2d3346;background:#0a0d16;transition:.25s;position:relative}.dasun-c17 span::after{content:"✓";color:#fff;font-size:14px;font-weight:700;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(0);transition:.25s}.dasun-c17 input:checked+span{background:linear-gradient(135deg,#7c5cff,#a855f7);border-color:transparent}.dasun-c17 input:checked+span::after{transform:translate(-50%,-50%) scale(1)}'],
['Slider','<div class="dasun-c18"><span></span></div>','.dasun-c18{width:200px;height:6px;border-radius:3px;background:#2d3346;position:relative}.dasun-c18 span{position:absolute;top:50%;left:65%;transform:translate(-50%,-50%);width:20px;height:20px;border-radius:50%;background:#7c5cff;box-shadow:0 0 0 4px rgba(124,92,255,.2);cursor:pointer}'],
['Progress Bar','<div class="dasun-c19"><span></span></div>','.dasun-c19{width:200px;height:8px;border-radius:4px;background:#2d3346;overflow:hidden}.dasun-c19 span{display:block;height:100%;width:65%;border-radius:4px;background:linear-gradient(90deg,#7c5cff,#ec4899)}'],
['Tooltip','<div class="dasun-c20">Hover me<div class="dasun-c20t">Tooltip text</div></div>','.dasun-c20{position:relative;display:inline-block;padding:9px 18px;background:#1a1f2e;border-radius:9px;color:#fff;font-size:13px;font-family:"Space Grotesk";cursor:pointer}.dasun-c20t{position:absolute;bottom:calc(100% + 8px);left:50%;transform:translateX(-50%) scale(.9);padding:7px 13px;background:#0d1017;color:#fff;font-size:12px;border-radius:8px;white-space:nowrap;opacity:0;pointer-events:none;transition:.25s;border:1px solid #2d3346}.dasun-c20:hover .dasun-c20t{opacity:1;transform:translateX(-50%) scale(1)}'],
['Alert Success','<div class="dasun-c21"><span>✓</span><div><strong>Success!</strong><p>Changes were saved.</p></div></div>','.dasun-c21{display:flex;align-items:flex-start;gap:12px;padding:14px 18px;border-radius:12px;background:rgba(16,185,129,.1);border:1px solid rgba(16,185,129,.3);max-width:320px}.dasun-c21>span{width:26px;height:26px;border-radius:50%;background:#10b981;color:#fff;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0}.dasun-c21 strong{font-size:13px;color:#34d399;font-family:"Space Grotesk";display:block;margin-bottom:3px}.dasun-c21 p{font-size:12px;color:#8a94a8}'],
['Alert Error','<div class="dasun-c22"><span>!</span><div><strong>Error!</strong><p>Something went wrong.</p></div></div>','.dasun-c22{display:flex;align-items:flex-start;gap:12px;padding:14px 18px;border-radius:12px;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.3);max-width:320px}.dasun-c22>span{width:26px;height:26px;border-radius:50%;background:#ef4444;color:#fff;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;font-weight:700}.dasun-c22 strong{font-size:13px;color:#f87171;font-family:"Space Grotesk";display:block;margin-bottom:3px}.dasun-c22 p{font-size:12px;color:#8a94a8}'],
['Alert Info','<div class="dasun-c23"><span>i</span><div><strong>Info</strong><p>Here is some information.</p></div></div>','.dasun-c23{display:flex;align-items:flex-start;gap:12px;padding:14px 18px;border-radius:12px;background:rgba(59,130,246,.1);border:1px solid rgba(59,130,246,.3);max-width:320px}.dasun-c23>span{width:26px;height:26px;border-radius:50%;background:#3b82f6;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0;font-weight:700;font-style:italic}.dasun-c23 strong{font-size:13px;color:#60a5fa;font-family:"Space Grotesk";display:block;margin-bottom:3px}.dasun-c23 p{font-size:12px;color:#8a94a8}'],
['Avatar','<div class="dasun-c24">D</div>','.dasun-c24{width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#7c5cff,#a855f7);display:flex;align-items:center;justify-content:center;font-family:"Space Grotesk";font-weight:700;font-size:22px;color:#fff;box-shadow:0 8px 22px rgba(124,92,255,.5)}'],
['Avatar Group','<div class="dasun-c25"><span>A</span><span>B</span><span>C</span><span>+5</span></div>','.dasun-c25{display:flex}.dasun-c25 span{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#7c5cff,#a855f7);display:flex;align-items:center;justify-content:center;font-family:"Space Grotesk";font-weight:700;font-size:14px;color:#fff;margin-left:-10px;border:2px solid #0d1017}.dasun-c25 span:first-child{margin-left:0}.dasun-c25 span:nth-child(2){background:linear-gradient(135deg,#a855f7,#ec4899)}.dasun-c25 span:nth-child(3){background:linear-gradient(135deg,#06b6d4,#3b82f6)}.dasun-c25 span:nth-child(4){background:#1a1f2e;font-size:11px;color:#a78bfa}'],
['Tabs','<div class="dasun-c26"><button class="on" type="button">Tab 1</button><button type="button">Tab 2</button><button type="button">Tab 3</button></div>','.dasun-c26{display:inline-flex;background:#0a0d16;border-radius:11px;padding:4px;border:1px solid #2d3346}.dasun-c26 button{padding:9px 20px;border:none;background:transparent;color:#8a94a8;font-size:12.5px;cursor:pointer;border-radius:8px;font-family:"Space Grotesk";font-weight:500;transition:.25s}.dasun-c26 button.on{background:linear-gradient(90deg,#7c5cff,#a855f7);color:#fff}'],
['Breadcrumb','<div class="dasun-c27"><a>Home</a><span>/</span><a>Docs</a><span>/</span><b>Current</b></div>','.dasun-c27{display:flex;align-items:center;gap:10px;font-size:13px;font-family:"Space Grotesk"}.dasun-c27 a{color:#8a94a8;text-decoration:none;cursor:pointer}.dasun-c27 a:hover{color:#a78bfa}.dasun-c27 span{color:#5f6b80}.dasun-c27 b{color:#fff;font-weight:600}'],
['Pagination','<div class="dasun-c28"><button type="button">‹</button><button type="button">1</button><button class="on" type="button">2</button><button type="button">3</button><button type="button">›</button></div>','.dasun-c28{display:flex;gap:6px}.dasun-c28 button{width:36px;height:36px;border-radius:9px;border:1px solid #2d3346;background:#141824;color:#c8d0e0;font-size:13px;font-family:"Space Grotesk";font-weight:500;cursor:pointer;transition:.2s}.dasun-c28 button:hover{border-color:#7c5cff;color:#fff}.dasun-c28 button.on{background:linear-gradient(90deg,#7c5cff,#a855f7);color:#fff;border-color:transparent}'],
['Rating','<div class="dasun-c29">★★★★★</div>','.dasun-c29{font-size:22px;color:#fbbf24;letter-spacing:3px;filter:drop-shadow(0 0 8px rgba(251,191,36,.5))}'],
['Stat Card','<div class="dasun-c30"><span>Total Users</span><b>15,847</b><em>↑ 12% this week</em></div>','.dasun-c30{padding:22px;border-radius:14px;background:#141824;border:1px solid #2d3346;min-width:180px}.dasun-c30 span{display:block;font-size:11.5px;color:#8a94a8;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;font-weight:500}.dasun-c30 b{display:block;font-size:30px;font-family:"Space Grotesk";font-weight:700;color:#7c5cff;margin-bottom:8px}.dasun-c30 em{font-style:normal;font-size:12px;color:#34d399;font-weight:500}']
];
C.forEach(function(x){add('Component',x[0],x[1],x[2],x[3]);});

/* ========== BUTTONS (60) ========== */
var BT = [
['Solid Primary','.dasun-b1{padding:12px 28px;border:none;border-radius:10px;background:#7c5cff;color:#fff;font-size:14px;font-family:"Space Grotesk";font-weight:700;cursor:pointer;transition:.25s}.dasun-b1:hover{background:#6b4ff0;transform:translateY(-2px);box-shadow:0 10px 24px rgba(124,92,255,.55)}'],
['Gradient Flow','.dasun-b2{padding:13px 32px;border:none;border-radius:11px;background:linear-gradient(120deg,#7c5cff,#a855f7,#ec4899,#7c5cff);background-size:250% 100%;color:#fff;font-size:14px;font-family:"Space Grotesk";font-weight:700;cursor:pointer;transition:.3s}.dasun-b2:hover{background-position:100% 50%;box-shadow:0 14px 32px rgba(236,72,153,.5)}'],
['Glass Frost','.dasun-b3{padding:13px 30px;border:1px solid rgba(255,255,255,.25);border-radius:12px;background:rgba(255,255,255,.08);backdrop-filter:blur(12px);color:#fff;font-size:14px;font-family:"Space Grotesk";font-weight:600;cursor:pointer;transition:.25s}.dasun-b3:hover{background:rgba(255,255,255,.15)}'],
['Neon Glow','.dasun-b4{padding:13px 30px;background:transparent;border:2px solid #00e5ff;border-radius:10px;color:#00e5ff;font-size:13px;letter-spacing:3px;font-family:"Space Grotesk";font-weight:700;cursor:pointer;transition:.3s;box-shadow:0 0 14px rgba(0,229,255,.5)}.dasun-b4:hover{background:#00e5ff;color:#0a0d16}'],
['Cyberpunk','.dasun-b5{padding:13px 28px;background:linear-gradient(90deg,rgba(6,182,212,.15),rgba(6,182,212,.05));border:1px solid #06b6d4;color:#06b6d4;font-size:13px;font-family:"JetBrains Mono",monospace;font-weight:600;letter-spacing:2px;cursor:pointer;clip-path:polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px);transition:.25s}.dasun-b5:hover{background:#06b6d4;color:#0a0d16}'],
['3D Press','.dasun-b6{padding:13px 30px;border:none;border-radius:12px;background:#7c5cff;color:#fff;font-size:14px;font-family:"Space Grotesk";font-weight:700;cursor:pointer;box-shadow:0 6px 0 #4535a8;transition:.08s}.dasun-b6:active{transform:translateY(4px);box-shadow:0 2px 0 #4535a8}'],
['Soft Shadow','.dasun-b7{padding:13px 30px;border:none;border-radius:14px;background:#fff;color:#111;font-size:14px;font-family:"Space Grotesk";font-weight:600;cursor:pointer;box-shadow:8px 8px 16px #c8cdd4,-8px -8px 16px #ffffff;transition:.2s}.dasun-b7:active{box-shadow:inset 6px 6px 12px #c8cdd4,inset -6px -6px 12px #ffffff}'],
['Brutalist','.dasun-b8{padding:14px 32px;background:#ff0;border:3px solid #000;color:#000;font-size:15px;font-family:"Space Grotesk";font-weight:800;letter-spacing:2px;cursor:pointer;box-shadow:6px 6px 0 #000;transition:.15s}.dasun-b8:hover{transform:translate(-2px,-2px);box-shadow:8px 8px 0 #000}'],
['Retro Pixel','.dasun-b9{padding:14px 30px;background:#000;border:none;color:#0ff;font-size:14px;font-family:"JetBrains Mono",monospace;font-weight:700;letter-spacing:3px;cursor:pointer;box-shadow:4px 4px 0 #ff00ff,inset 0 0 0 2px #0ff;transition:.15s}.dasun-b9:hover{transform:translate(2px,2px)}'],
['Ripple','.dasun-b10{padding:14px 32px;border:none;border-radius:12px;background:linear-gradient(90deg,#7c5cff,#a855f7);color:#fff;font-size:14px;font-family:"Space Grotesk";font-weight:700;cursor:pointer;position:relative;overflow:hidden}.dasun-b10::after{content:"";position:absolute;top:50%;left:50%;width:5px;height:5px;border-radius:50%;background:rgba(255,255,255,.7);transform:translate(-50%,-50%) scale(0);opacity:0;transition:.6s}.dasun-b10:active::after{transform:translate(-50%,-50%) scale(40);opacity:0}'],
['Sliding BG','.dasun-b11{padding:13px 32px;border:2px solid #7c5cff;border-radius:10px;background:transparent;color:#7c5cff;font-size:14px;font-family:"Space Grotesk";font-weight:700;cursor:pointer;position:relative;overflow:hidden;z-index:1;transition:.3s}.dasun-b11::before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,#7c5cff,#a855f7);transform:translateX(-100%);transition:.4s;z-index:-1}.dasun-b11:hover{color:#fff;border-color:transparent}.dasun-b11:hover::before{transform:translateX(0)}'],
['Border Draw','.dasun-b12{padding:14px 34px;background:transparent;color:#a78bfa;border:2px solid transparent;font-size:14px;font-family:"Space Grotesk";font-weight:700;cursor:pointer;position:relative}.dasun-b12::before,.dasun-b12::after{content:"";position:absolute;left:0;right:0;height:2px;background:#7c5cff;transition:.35s}.dasun-b12::before{top:0;transform:scaleX(0);transform-origin:left}.dasun-b12::after{bottom:0;transform:scaleX(0);transform-origin:right}.dasun-b12:hover::before,.dasun-b12:hover::after{transform:scaleX(1)}'],
['Corner Accents','.dasun-b13{padding:14px 32px;background:transparent;border:none;color:#7c5cff;font-size:14px;font-family:"Space Grotesk";font-weight:700;cursor:pointer;position:relative;transition:.3s}.dasun-b13::before,.dasun-b13::after{content:"";position:absolute;width:14px;height:14px;border:2px solid #7c5cff;transition:.3s}.dasun-b13::before{top:0;left:0;border-right:none;border-bottom:none}.dasun-b13::after{bottom:0;right:0;border-left:none;border-top:none}.dasun-b13:hover::before,.dasun-b13:hover::after{width:100%;height:100%}'],
['Skew','.dasun-b14{padding:13px 34px;background:linear-gradient(90deg,#7c5cff,#ec4899);border:none;color:#fff;font-size:14px;font-family:"Space Grotesk";font-weight:700;cursor:pointer;transform:skewX(-12deg);transition:.3s}.dasun-b14:hover{transform:skewX(0deg) scale(1.05);box-shadow:0 12px 28px rgba(236,72,153,.5)}'],
['Text Swap','.dasun-b15{padding:14px 30px;border:none;border-radius:11px;background:linear-gradient(90deg,#7c5cff,#a855f7);color:#fff;font-size:14px;font-family:"Space Grotesk";font-weight:700;cursor:pointer;position:relative;overflow:hidden;width:150px;height:46px}.dasun-b15 span{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;transition:.4s}.dasun-b15 span:nth-child(2){transform:translateY(100%);opacity:0}.dasun-b15:hover span:nth-child(1){transform:translateY(-100%);opacity:0}.dasun-b15:hover span:nth-child(2){transform:translateY(0);opacity:1}'],
['Arrow Slide','.dasun-b16{padding:13px 30px;border:none;border-radius:11px;background:#7c5cff;color:#fff;font-size:14px;font-family:"Space Grotesk";font-weight:700;cursor:pointer;display:inline-flex;align-items:center;gap:10px}.dasun-b16 span{transition:.3s}.dasun-b16:hover span{transform:translateX(6px)}'],
['Underline Expand','.dasun-b17{padding:10px 22px;background:transparent;border:none;color:#a78bfa;font-size:15px;font-family:"Space Grotesk";font-weight:700;cursor:pointer;position:relative}.dasun-b17::after{content:"";position:absolute;left:50%;bottom:4px;width:0;height:2px;background:#a78bfa;transition:.3s;transform:translateX(-50%)}.dasun-b17:hover::after{width:70%}'],
['Liquid Fill','.dasun-b18{padding:14px 32px;border:2px solid #7c5cff;border-radius:11px;background:transparent;color:#7c5cff;font-size:14px;font-family:"Space Grotesk";font-weight:700;cursor:pointer;position:relative;overflow:hidden}.dasun-b18::before{content:"";position:absolute;left:50%;top:100%;width:200%;height:200%;background:#7c5cff;border-radius:40%;transition:top .6s;transform:translateX(-50%)}.dasun-b18:hover{color:#fff}.dasun-b18:hover::before{top:-50%}'],
['Gradient Border','.dasun-b19{padding:2px;border:none;border-radius:999px;background:linear-gradient(90deg,#7c5cff,#a855f7,#ec4899);cursor:pointer;font-family:"Space Grotesk"}.dasun-b19 span{display:block;padding:11px 30px;border-radius:999px;background:#0a0d16;color:#e6edf3;font-size:14px;font-weight:600;transition:.3s}.dasun-b19:hover span{background:transparent;color:#fff}'],
['Loading Spin','.dasun-b20{padding:13px 26px;border:none;border-radius:11px;background:#7c5cff;color:#fff;font-size:14px;font-family:"Space Grotesk";font-weight:700;cursor:pointer;display:inline-flex;align-items:center;gap:10px}.dasun-b20 span{width:14px;height:14px;border:2px solid rgba(255,255,255,.35);border-top-color:#fff;border-radius:50%;animation:dasunB20 .7s linear infinite}@keyframes dasunB20{to{transform:rotate(360deg)}}'],
['Icon Circle','.dasun-b21{width:52px;height:52px;border-radius:50%;border:none;background:linear-gradient(135deg,#fbbf24,#f59e0b);color:#fff;font-size:22px;cursor:pointer;box-shadow:0 12px 26px rgba(251,191,36,.5);transition:.3s}.dasun-b21:hover{transform:rotate(72deg) scale(1.08)}'],
['Split Button','.dasun-b22{display:inline-flex;border-radius:11px;overflow:hidden}.dasun-b22 button{padding:13px 22px;border:none;background:#7c5cff;color:#fff;font-size:13.5px;font-family:"Space Grotesk";font-weight:700;cursor:pointer}.dasun-b22 button:last-child{padding:13px 14px;border-left:1px solid rgba(255,255,255,.2)}'],
['Pill Outline','.dasun-b23{padding:12px 32px;background:transparent;border:2px solid #7c5cff;border-radius:999px;color:#7c5cff;font-size:14px;font-family:"Space Grotesk";font-weight:700;cursor:pointer;transition:.3s}.dasun-b23:hover{background:#7c5cff;color:#fff;transform:scale(1.05)}'],
['Underline Shadow','.dasun-b24{padding:12px 28px;border:none;border-radius:8px;background:#fff;color:#111;font-size:14px;font-family:"Space Grotesk";font-weight:700;cursor:pointer;box-shadow:5px 5px 0 #7c5cff;transition:.2s}.dasun-b24:hover{transform:translate(-2px,-2px);box-shadow:7px 7px 0 #7c5cff}'],
['Pulse Ring','.dasun-b25{padding:14px 32px;border:none;border-radius:12px;background:#7c5cff;color:#fff;font-size:14px;font-family:"Space Grotesk";font-weight:700;cursor:pointer;position:relative}.dasun-b25::after{content:"";position:absolute;inset:0;border-radius:12px;box-shadow:0 0 0 0 rgba(124,92,255,.6);animation:dasunB25 1.8s infinite}@keyframes dasunB25{0%{box-shadow:0 0 0 0 rgba(124,92,255,.6)}100%{box-shadow:0 0 0 20px rgba(124,92,255,0)}}'],
['Gradient Ring','.dasun-b26{padding:13px 30px;border:none;border-radius:12px;background:#0a0d16;color:#fff;font-size:14px;font-family:"Space Grotesk";font-weight:700;cursor:pointer;position:relative}.dasun-b26::before{content:"";position:absolute;inset:-2px;border-radius:12px;background:conic-gradient(#7c5cff,#ec4899,#7c5cff);z-index:-1;animation:dasunB26 3s linear infinite}@keyframes dasunB26{to{transform:rotate(360deg)}}'],
['Emoji React','.dasun-b27{padding:12px 26px;border:2px solid #2d3346;border-radius:12px;background:transparent;color:#c8d0e0;font-size:14px;font-family:"Space Grotesk";font-weight:600;cursor:pointer;transition:.25s}.dasun-b27:hover{border-color:#7c5cff;color:#7c5cff;transform:translateY(-2px)}'],
['Social Button','.dasun-b28{padding:12px 24px;border:1px solid #2d3346;border-radius:11px;background:#0a0d16;color:#e5e7eb;font-size:13.5px;font-family:"Space Grotesk";font-weight:600;cursor:pointer;display:inline-flex;align-items:center;gap:12px}.dasun-b28 span{width:24px;height:24px;border-radius:6px;background:#4285f4;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px}'],
['Scroll Top','.dasun-b29{width:48px;height:48px;border-radius:50%;border:1px solid #2d3346;background:#141824;color:#a78bfa;font-size:18px;cursor:pointer;transition:.3s}.dasun-b29:hover{background:linear-gradient(135deg,#7c5cff,#a855f7);color:#fff;transform:translateY(-4px)}'],
['Magnetic','.dasun-b30{padding:14px 32px;border:none;border-radius:12px;background:linear-gradient(135deg,#06b6d4,#7c5cff);color:#fff;font-size:14px;font-family:"Space Grotesk";font-weight:700;cursor:pointer;transition:.3s}.dasun-b30:hover{transform:scale(1.1) rotate(-3deg);box-shadow:0 16px 34px rgba(6,182,212,.5)}'],
['Neon Outline','.dasun-b31{padding:13px 30px;background:transparent;border:2px solid #a855f7;color:#a855f7;font-size:14px;font-family:"Space Grotesk";font-weight:700;border-radius:11px;cursor:pointer;transition:.3s}.dasun-b31:hover{background:#a855f7;color:#fff;box-shadow:0 0 24px rgba(168,85,247,.7)}'],
['Cyber Square','.dasun-b32{padding:13px 26px;background:#0a0d16;border:1px solid #00ff88;color:#00ff88;font-size:13px;font-family:"JetBrains Mono",monospace;font-weight:700;letter-spacing:3px;cursor:pointer;border-radius:0;transition:.3s;box-shadow:0 0 15px rgba(0,255,136,.3)}.dasun-b32:hover{background:#00ff88;color:#000}'],
['Duo Tone','.dasun-b33{padding:13px 30px;border:none;background:linear-gradient(90deg,#7c5cff 50%,#ec4899 50%);background-size:200% 100%;background-position:0% 50%;color:#fff;font-size:14px;font-family:"Space Grotesk";font-weight:700;border-radius:11px;cursor:pointer;transition:.5s}.dasun-b33:hover{background-position:100% 50%}'],
['Paper Cut','.dasun-b34{padding:14px 30px;background:#e0e5ec;color:#3d4461;font-size:14px;font-family:"Space Grotesk";font-weight:700;border:none;border-radius:14px;cursor:pointer;box-shadow:6px 6px 12px #c1c5cc,-6px -6px 12px #ffffff;transition:.2s}.dasun-b34:active{box-shadow:inset 4px 4px 8px #c1c5cc,inset -4px -4px 8px #ffffff}'],
['Glitch','.dasun-b35{padding:13px 30px;background:#0a0d16;border:2px solid #ec4899;color:#fff;font-size:14px;font-family:"Space Grotesk";font-weight:700;cursor:pointer;position:relative;letter-spacing:2px}.dasun-b35:hover{animation:dasunB35 .3s infinite}@keyframes dasunB35{0%,100%{transform:translate(0);color:#fff}25%{transform:translate(-3px,2px);color:#ec4899}50%{transform:translate(3px,-2px);color:#06b6d4}75%{transform:translate(-2px,-2px);color:#7c5cff}}'],
['Arrow Circle','.dasun-b36{width:56px;height:56px;border-radius:50%;border:none;background:#7c5cff;color:#fff;font-size:22px;cursor:pointer;transition:.4s;position:relative;overflow:hidden}.dasun-b36::after{content:"";position:absolute;inset:0;background:linear-gradient(135deg,#a855f7,#ec4899);transform:translateX(-100%);transition:.4s;border-radius:50%}.dasun-b36:hover::after{transform:translateX(0)}'],
['Gradient Pill','.dasun-b37{padding:13px 32px;background:linear-gradient(90deg,#ec4899,#a855f7);border:none;color:#fff;font-size:14px;font-family:"Space Grotesk";font-weight:700;border-radius:999px;cursor:pointer;transition:.3s}.dasun-b37:hover{transform:translateY(-3px);box-shadow:0 15px 35px rgba(236,72,153,.6)}'],
['Box Shadow Pop','.dasun-b38{padding:14px 30px;background:#fff;color:#111;font-size:15px;font-family:"Space Grotesk";font-weight:800;letter-spacing:1px;border:3px solid #111;border-radius:0;cursor:pointer;transition:.15s;box-shadow:8px 8px 0 #7c5cff}.dasun-b38:hover{transform:translate(-3px,-3px);box-shadow:12px 12px 0 #7c5cff}'],
['Glass Wave','.dasun-b39{padding:14px 32px;border:1px solid rgba(255,255,255,.2);background:linear-gradient(135deg,rgba(255,255,255,.1),rgba(255,255,255,.02));backdrop-filter:blur(14px);color:#fff;font-size:14px;font-family:"Space Grotesk";font-weight:700;border-radius:14px;cursor:pointer;position:relative;overflow:hidden}.dasun-b39::before{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);transition:.6s}.dasun-b39:hover::before{left:100%}'],
['Corner Fold','.dasun-b40{padding:14px 32px;background:#7c5cff;color:#fff;font-size:14px;font-family:"Space Grotesk";font-weight:700;border:none;cursor:pointer;position:relative}.dasun-b40::after{content:"";position:absolute;top:0;right:0;width:0;height:0;border-style:solid;border-width:0 20px 20px 0;border-color:transparent #ec4899 transparent transparent;transition:.3s}.dasun-b40:hover::after{border-width:0 26px 26px 0}'],
['Gradient Outline','.dasun-b41{padding:2px;border:none;background:linear-gradient(90deg,#06b6d4,#7c5cff,#ec4899);border-radius:12px;cursor:pointer;font-family:"Space Grotesk"}.dasun-b41 span{display:block;padding:12px 28px;border-radius:10px;background:#0a0d16;color:#fff;font-size:14px;font-weight:700;transition:.3s}.dasun-b41:hover span{background:transparent}'],
['Neumorphic Dark','.dasun-b42{padding:14px 30px;background:#1a1f2e;color:#7c5cff;font-size:14px;font-family:"Space Grotesk";font-weight:700;border:none;border-radius:14px;cursor:pointer;box-shadow:6px 6px 12px #0a0d16,-6px -6px 12px #2a3242}.dasun-b42:active{box-shadow:inset 4px 4px 8px #0a0d16,inset -4px -4px 8px #2a3242}'],
['Gradient Shadow','.dasun-b43{padding:14px 30px;background:linear-gradient(90deg,#7c5cff,#ec4899);color:#fff;font-size:14px;font-family:"Space Grotesk";font-weight:700;border:none;border-radius:11px;cursor:pointer;box-shadow:0 10px 25px rgba(124,92,255,.5);transition:.3s}.dasun-b43:hover{transform:translateY(-4px);box-shadow:0 20px 40px rgba(236,72,153,.6)}'],
['Fancy Underline','.dasun-b44{padding:12px 24px;background:transparent;border:none;color:#fff;font-size:15px;font-family:"Space Grotesk";font-weight:700;cursor:pointer;position:relative;letter-spacing:1px}.dasun-b44::after{content:"";position:absolute;left:0;right:0;bottom:6px;height:2px;background:linear-gradient(90deg,#7c5cff,#ec4899);transform:scaleX(0);transform-origin:right;transition:.4s}.dasun-b44:hover::after{transform:scaleX(1);transform-origin:left}'],
['Ribbon','.dasun-b45{padding:14px 40px 14px 30px;background:#ec4899;color:#fff;font-size:14px;font-family:"Space Grotesk";font-weight:700;border:none;cursor:pointer;position:relative;clip-path:polygon(0 0,calc(100% - 20px) 0,100% 50%,calc(100% - 20px) 100%,0 100%);transition:.3s}.dasun-b45:hover{background:#7c5cff;transform:translateX(5px)}'],
['Square Hover','.dasun-b46{padding:14px 30px;background:#0a0d16;border:2px solid #7c5cff;color:#7c5cff;font-size:14px;font-family:"Space Grotesk";font-weight:700;cursor:pointer;position:relative;overflow:hidden;transition:.3s}.dasun-b46::before{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:#7c5cff;transition:.4s}.dasun-b46 span{position:relative;z-index:1}.dasun-b46:hover::before{left:0}.dasun-b46:hover{color:#fff}'],
['Double Layer','.dasun-b47{padding:13px 28px;background:transparent;border:2px solid #7c5cff;color:#7c5cff;font-size:14px;font-family:"Space Grotesk";font-weight:700;border-radius:10px;cursor:pointer;position:relative;transition:.25s}.dasun-b47::before{content:"";position:absolute;top:4px;left:4px;right:-4px;bottom:-4px;border:2px solid #7c5cff;border-radius:10px;transition:.25s;z-index:-1}.dasun-b47:hover{transform:translate(-2px,-2px)}.dasun-b47:hover::before{transform:translate(4px,4px)}'],
['Neon Pulse','.dasun-b48{padding:13px 30px;background:transparent;border:2px solid #00e5ff;color:#00e5ff;font-size:14px;font-family:"Space Grotesk";font-weight:700;letter-spacing:2px;border-radius:10px;cursor:pointer;animation:dasunB48 2s infinite}@keyframes dasunB48{0%,100%{box-shadow:0 0 15px rgba(0,229,255,.4),inset 0 0 15px rgba(0,229,255,.2)}50%{box-shadow:0 0 30px rgba(0,229,255,.8),inset 0 0 30px rgba(0,229,255,.4)}}'],
['Bouncy','.dasun-b49{padding:14px 30px;background:linear-gradient(90deg,#f59e0b,#ec4899);color:#fff;font-size:14px;font-family:"Space Grotesk";font-weight:700;border:none;border-radius:14px;cursor:pointer;transition:.3s cubic-bezier(.5,-0.5,.5,1.5)}.dasun-b49:hover{transform:translateY(-8px) scale(1.05);box-shadow:0 20px 40px rgba(245,158,11,.5)}'],
['Corner Bracket','.dasun-b50{padding:14px 32px;background:transparent;border:none;color:#7c5cff;font-size:14px;font-family:"Space Grotesk";font-weight:700;cursor:pointer;position:relative}.dasun-b50::before,.dasun-b50::after{content:"";position:absolute;top:0;bottom:0;width:12px;border:2px solid #7c5cff;transition:.3s}.dasun-b50::before{left:0;border-right:none}.dasun-b50::after{right:0;border-left:none}.dasun-b50:hover::before,.dasun-b50:hover::after{width:100%}'],
['Slide Sideways','.dasun-b51{padding:13px 30px;background:#0a0d16;color:#fff;font-size:14px;font-family:"Space Grotesk";font-weight:700;border:2px solid #a855f7;border-radius:10px;cursor:pointer;position:relative;overflow:hidden}.dasun-b51::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(90deg,#7c5cff,#ec4899);transform:translateX(-100%);transition:.4s}.dasun-b51 span{position:relative}.dasun-b51:hover::before{transform:translateX(0)}'],
['Long Shadow','.dasun-b52{padding:13px 30px;background:#7c5cff;color:#fff;font-size:14px;font-family:"Space Grotesk";font-weight:700;border:none;border-radius:10px;cursor:pointer;transition:.3s;box-shadow:1px 1px 0 #5a3eff,2px 2px 0 #5a3eff,3px 3px 0 #5a3eff,4px 4px 0 #5a3eff,5px 5px 0 #5a3eff}.dasun-b52:hover{transform:translate(-5px,-5px);box-shadow:1px 1px 0 #5a3eff,2px 2px 0 #5a3eff,3px 3px 0 #5a3eff,4px 4px 0 #5a3eff,5px 5px 0 #5a3eff,6px 6px 0 #5a3eff,7px 7px 0 #5a3eff}'],
['Wave Hover','.dasun-b53{padding:13px 30px;background:#0a0d16;border:2px solid #06b6d4;color:#06b6d4;font-size:14px;font-family:"Space Grotesk";font-weight:700;border-radius:10px;cursor:pointer;position:relative;overflow:hidden}.dasun-b53::after{content:"";position:absolute;top:50%;left:50%;width:0;height:0;background:#06b6d4;border-radius:50%;transform:translate(-50%,-50%);transition:.5s;z-index:-1}.dasun-b53:hover::after{width:200%;height:200%}.dasun-b53:hover{color:#0a0d16}'],
['Zoom In','.dasun-b54{padding:14px 32px;background:linear-gradient(135deg,#7c5cff,#a855f7);color:#fff;font-size:14px;font-family:"Space Grotesk";font-weight:700;border:none;border-radius:12px;cursor:pointer;transition:.3s}.dasun-b54:hover{transform:scale(1.1)}.dasun-b54:active{transform:scale(.95)}'],
['Hover Box','.dasun-b55{padding:14px 32px;background:#0a0d16;border:2px solid #7c5cff;color:#7c5cff;font-size:14px;font-family:"Space Grotesk";font-weight:700;cursor:pointer;position:relative;transition:.3s}.dasun-b55::before{content:"";position:absolute;top:-2px;left:-2px;width:0;height:0;background:#7c5cff;transition:.3s;z-index:-1}.dasun-b55:hover{color:#fff}.dasun-b55:hover::before{width:calc(100% + 4px);height:calc(100% + 4px)}'],
['Sliced','.dasun-b56{padding:14px 32px;background:#0a0d16;color:#fff;font-size:14px;font-family:"Space Grotesk";font-weight:700;border:2px solid #ec4899;cursor:pointer;position:relative;overflow:hidden}.dasun-b56::before{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,#ec4899,transparent);transition:.5s}.dasun-b56:hover::before{left:100%}'],
['Retro 3D','.dasun-b57{padding:13px 30px;background:linear-gradient(180deg,#7c5cff 50%,#5a3eff 50%);color:#fff;font-size:14px;font-family:"JetBrains Mono",monospace;font-weight:700;border:2px solid #0a0d16;border-radius:0;cursor:pointer;box-shadow:4px 4px 0 #ec4899;transition:.15s}.dasun-b57:hover{transform:translate(-2px,-2px);box-shadow:6px 6px 0 #ec4899}'],
['Marquee','.dasun-b58{padding:13px 30px;background:linear-gradient(90deg,#7c5cff,#ec4899);color:#fff;font-size:14px;font-family:"Space Grotesk";font-weight:700;border:none;border-radius:10px;cursor:pointer;overflow:hidden;position:relative;white-space:nowrap;width:180px;height:46px}.dasun-b58 span{position:absolute;top:50%;left:100%;transform:translateY(-50%);animation:dasunB58 6s linear infinite}@keyframes dasunB58{to{left:-200%}}'],
['Split Reveal','.dasun-b59{padding:0;background:transparent;border:none;cursor:pointer;font-family:"Space Grotesk";position:relative;width:140px;height:46px}.dasun-b59 span{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:#7c5cff;color:#fff;font-size:14px;font-weight:700;border-radius:10px;transition:.4s}.dasun-b59 span::before{content:"";position:absolute;top:0;left:0;right:0;height:50%;background:#0a0d16;transform:translateY(-100%);transition:.4s;border-radius:10px 10px 0 0}.dasun-b59 span::after{content:"";position:absolute;bottom:0;left:0;right:0;height:50%;background:#0a0d16;transform:translateY(100%);transition:.4s;border-radius:0 0 10px 10px}.dasun-b59:hover span{color:#7c5cff}.dasun-b59:hover span::before,.dasun-b59:hover span::after{transform:translateY(0)}'],
['Pill Slide','.dasun-b60{padding:0;background:#0a0d16;border:2px solid #a855f7;border-radius:999px;cursor:pointer;font-family:"Space Grotesk";position:relative;overflow:hidden;width:160px;height:46px}.dasun-b60::before{content:"";position:absolute;top:0;left:0;bottom:0;width:0;background:linear-gradient(90deg,#7c5cff,#ec4899);transition:.4s;border-radius:999px}.dasun-b60 span{position:relative;z-index:1;color:#a855f7;font-size:14px;font-weight:700;display:flex;align-items:center;justify-content:center;height:100%;transition:.4s;padding:0 20px}.dasun-b60:hover::before{width:100%}.dasun-b60:hover span{color:#fff}']
];
BT.forEach(function(row){
  var name=row[0],css=row[1];
  var m=css.match(/\.dasun-b\d+/);
  var cls=m?m[0].substring(1):'dasun-b1';
  var label=name.split(' ')[0];
  var html='<button class="'+cls+'" type="button">'+label+'</button>';
  if(name.indexOf('Arrow')>=0)html='<button class="'+cls+'" type="button">Continue <span>→</span></button>';
  if(name.indexOf('Loading')>=0)html='<button class="'+cls+'" type="button"><span></span>Loading</button>';
  if(name.indexOf('Icon')>=0)html='<button class="'+cls+'" type="button">★</button>';
  if(name.indexOf('Scroll')>=0)html='<button class="'+cls+'" type="button">↑</button>';
  if(name.indexOf('Social')>=0)html='<button class="'+cls+'" type="button"><span>G</span>Sign in with Google</button>';
  if(name.indexOf('Split Button')>=0)html='<div class="'+cls+'"><button type="button">Save</button><button type="button">▾</button></div>';
  if(name.indexOf('Text Swap')>=0)html='<button class="'+cls+'" type="button"><span>Hover Me</span><span>Let\'s Go!</span></button>';
  if(name.indexOf('Marquee')>=0)html='<button class="'+cls+'" type="button"><span>Click Me · Click Me · </span></button>';
  if(name.indexOf('Split Reveal')>=0)html='<button class="'+cls+'" type="button"><span>Hover</span></button>';
  if(name.indexOf('Pill Slide')>=0)html='<button class="'+cls+'" type="button"><span>Slide</span></button>';
  if(name.indexOf('Gradient Border')>=0)html='<button class="'+cls+'" type="button"><span>Gradient</span></button>';
  if(name.indexOf('Gradient Outline')>=0)html='<button class="'+cls+'" type="button"><span>Outline</span></button>';
  if(name.indexOf('Square Hover')>=0)html='<button class="'+cls+'" type="button"><span>HOVER</span></button>';
  if(name.indexOf('Slide Sideways')>=0)html='<button class="'+cls+'" type="button"><span>SLIDE</span></button>';
  if(name.indexOf('Split Button')<0 && name.indexOf('Marquee')<0 && name.indexOf('Split Reveal')<0 && name.indexOf('Pill Slide')<0 && name.indexOf('Text Swap')<0 && name.indexOf('Gradient Border')<0 && name.indexOf('Gradient Outline')<0 && name.indexOf('Square Hover')<0 && name.indexOf('Slide Sideways')<0 && name.indexOf('Arrow')<0 && name.indexOf('Loading')<0 && name.indexOf('Icon')<0 && name.indexOf('Scroll')<0 && name.indexOf('Social')<0){
    var fullLabel=name;
    html='<button class="'+cls+'" type="button">'+fullLabel+'</button>';
  }
  add('Buttons',name,html,css);
});

/* ========== NAVIGATION BARS (30) ========== */
var NAVBARS_DATA = [];
(function(){
  var names=[
    ['Minimal Light','clean minimal white navbar'],['Dark Glass','frosted glass dark navbar'],
    ['Gradient Bold','gradient colored navbar'],['Neon Outline','neon outlined links'],
    ['Brutalist','raw brutalist design'],['Pill Floating','floating pill navbar'],
    ['Underline Hover','underline animation'],['Split Logo','logo left links right'],
    ['Vertical Side','vertical sidebar nav'],['Center Brand','centered brand'],
    ['Icon + Text','icon with labels'],['Sticky Clean','sticky minimal'],
    ['Mega Menu','dropdown mega menu'],['Burger Mobile','responsive burger'],
    ['Search Bar','with search input'],['Two Tier','two-level nav'],
    ['Transparent','transparent hero nav'],['Blur Backdrop','heavy backdrop blur'],
    ['Border Bottom','bottom accent line'],['Shadow Depth','deep shadow lift'],
    ['Neumorphic','soft neumorphic'],['Neon Glow','glowing neon'],
    ['Retro Pixel','pixel-art inspired'],['Split Color','diagonal split color'],
    ['Rounded Cards','card-style links'],['Capsule','capsule dark nav'],
    ['Frosted Pill','frosted glass pill'],['Block Buttons','block button style'],
    ['Social Icons','with social icons'],['Command Bar','command palette style']
  ];
  var colors=[['#7c5cff','#a855f7'],['#06b6d4','#3b82f6'],['#ec4899','#f59e0b'],['#10b981','#059669'],['#f59e0b','#ef4444'],['#8b5cf6','#ec4899']];
  names.forEach(function(n,i){
    var c=colors[i%colors.length];
    var html='',css='';
    var base='<div class="dnb-logo">DG</div><ul class="dnb-links"><li><a href="#">Home</a></li><li><a href="#">About</a></li><li><a href="#">Work</a></li><li><a href="#">Contact</a></li></ul>';
    if(i%8===0){
      html='<nav class="dnb dnb-'+i+'">'+base+'<button class="dnb-btn">Get Started</button></nav>';
      css='.dnb-'+i+'{display:flex;align-items:center;justify-content:space-between;padding:16px 28px;background:#fff;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,.08);font-family:Inter;width:100%;gap:20px}.dnb-'+i+' .dnb-logo{font-family:"Space Grotesk";font-size:20px;font-weight:800;color:#111}.dnb-'+i+' .dnb-links{display:flex;gap:26px;list-style:none;margin-left:auto}.dnb-'+i+' .dnb-links a{color:#555;text-decoration:none;font-size:14px;font-weight:500;transition:.2s}.dnb-'+i+' .dnb-links a:hover{color:'+c[0]+'}.dnb-'+i+' .dnb-btn{padding:10px 22px;background:'+c[0]+';color:#fff;border:none;border-radius:8px;font-weight:600;font-size:13px;cursor:pointer}';
    }else if(i%8===1){
      html='<nav class="dnb dnb-'+i+'">'+base+'</nav>';
      css='.dnb-'+i+'{display:flex;align-items:center;justify-content:space-between;padding:14px 26px;background:rgba(20,24,36,.85);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.1);border-radius:16px;font-family:Inter;width:100%;box-shadow:0 20px 45px rgba(0,0,0,.4)}.dnb-'+i+' .dnb-logo{font-family:"Space Grotesk";font-size:20px;font-weight:800;color:#fff}.dnb-'+i+' .dnb-links{display:flex;gap:24px;list-style:none}.dnb-'+i+' .dnb-links a{color:rgba(255,255,255,.7);text-decoration:none;font-size:13.5px;font-weight:500;transition:.25s}.dnb-'+i+' .dnb-links a:hover{color:'+c[0]+'}';
    }else if(i%8===2){
      html='<nav class="dnb dnb-'+i+'">'+base+'</nav>';
      css='.dnb-'+i+'{display:flex;align-items:center;justify-content:space-between;padding:16px 28px;background:linear-gradient(90deg,'+c[0]+','+c[1]+');border-radius:14px;font-family:Inter;width:100%;box-shadow:0 16px 40px rgba(168,85,247,.4)}.dnb-'+i+' .dnb-logo{font-family:"Space Grotesk";font-size:20px;font-weight:800;color:#fff}.dnb-'+i+' .dnb-links{display:flex;gap:26px;list-style:none}.dnb-'+i+' .dnb-links a{color:rgba(255,255,255,.95);text-decoration:none;font-size:13.5px;font-weight:500}';
    }else if(i%8===3){
      html='<nav class="dnb dnb-'+i+'"><div class="dnb-logo">DG</div><ul class="dnb-links"><li><a href="#">HOME</a></li><li><a href="#">ABOUT</a></li><li><a href="#">WORK</a></li></ul></nav>';
      css='.dnb-'+i+'{display:flex;align-items:center;justify-content:space-between;padding:16px 30px;background:#0a0d16;border:2px solid '+c[0]+';border-radius:12px;font-family:"JetBrains Mono",monospace;width:100%;box-shadow:0 0 30px '+c[0]+'44}.dnb-'+i+' .dnb-logo{font-size:18px;font-weight:800;color:'+c[0]+';text-shadow:0 0 10px '+c[0]+';letter-spacing:2px}.dnb-'+i+' .dnb-links{display:flex;gap:22px;list-style:none}.dnb-'+i+' .dnb-links a{color:'+c[0]+';text-decoration:none;font-size:12.5px;font-weight:600;letter-spacing:1px;padding:6px 12px;border:1px solid transparent;border-radius:6px;transition:.3s}.dnb-'+i+' .dnb-links a:hover{border-color:'+c[0]+';box-shadow:0 0 12px '+c[0]+'99}';
    }else if(i%8===4){
      html='<nav class="dnb dnb-'+i+'"><div class="dnb-logo">DASUN.</div><ul class="dnb-links"><li><a href="#">WORK</a></li><li><a href="#">ABOUT</a></li><li><a href="#">CONTACT</a></li></ul></nav>';
      css='.dnb-'+i+'{display:flex;align-items:center;justify-content:space-between;padding:18px 28px;background:#fff;border:4px solid #000;font-family:"Space Grotesk";width:100%;box-shadow:8px 8px 0 #000}.dnb-'+i+' .dnb-logo{font-size:22px;font-weight:900;color:#000;letter-spacing:2px}.dnb-'+i+' .dnb-links{display:flex;gap:28px;list-style:none}.dnb-'+i+' .dnb-links a{color:#000;text-decoration:none;font-size:13px;font-weight:800;letter-spacing:2px;padding:4px 0;border-bottom:3px solid transparent;transition:.2s}.dnb-'+i+' .dnb-links a:hover{border-color:'+c[0]+';background:#ff0}';
    }else if(i%8===5){
      html='<nav class="dnb dnb-'+i+'">'+base+'</nav>';
      css='.dnb-'+i+'{display:flex;align-items:center;gap:20px;padding:10px 10px 10px 22px;background:#0f0c19;border-radius:100px;font-family:Inter;width:100%;max-width:640px;margin:0 auto;box-shadow:0 20px 40px rgba(0,0,0,.4);border:1px solid rgba(255,255,255,.08)}.dnb-'+i+' .dnb-logo{width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,'+c[0]+','+c[1]+');display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:13px}.dnb-'+i+' .dnb-links{display:flex;gap:4px;list-style:none;margin:0 auto}.dnb-'+i+' .dnb-links a{color:rgba(255,255,255,.65);text-decoration:none;font-size:12.5px;font-weight:500;padding:8px 14px;border-radius:999px;transition:.22s}.dnb-'+i+' .dnb-links a:hover{background:rgba(124,92,255,.18);color:#fff}';
    }else if(i%8===6){
      html='<nav class="dnb dnb-'+i+'"><div class="dnb-logo">DG.</div><ul class="dnb-links"><li><a href="#">Home</a></li><li><a href="#">About</a></li><li><a href="#">Work</a></li><li><a href="#">Contact</a></li></ul></nav>';
      css='.dnb-'+i+'{display:flex;align-items:center;justify-content:space-between;padding:20px 30px;background:#fff;border-bottom:2px solid #111;font-family:"Space Grotesk";width:100%}.dnb-'+i+' .dnb-logo{font-size:20px;font-weight:800;color:#111}.dnb-'+i+' .dnb-links{display:flex;gap:32px;list-style:none}.dnb-'+i+' .dnb-links a{position:relative;color:#555;text-decoration:none;font-size:14px;font-weight:600;padding:6px 0;transition:.25s}.dnb-'+i+' .dnb-links a::after{content:"";position:absolute;left:0;bottom:0;width:100%;height:2px;background:'+c[0]+';transform:scaleX(0);transform-origin:right;transition:transform .35s}.dnb-'+i+' .dnb-links a:hover{color:#111}.dnb-'+i+' .dnb-links a:hover::after{transform:scaleX(1);transform-origin:left}';
    }else{
      html='<nav class="dnb dnb-'+i+'"><div class="dnb-logo">DG</div><ul class="dnb-links"><li><a href="#">Home</a></li><li><a href="#">About</a></li><li><a href="#">Work</a></li></ul><span class="dnb-dot"></span></nav>';
      css='.dnb-'+i+'{display:flex;align-items:center;justify-content:space-between;padding:14px 26px;background:#0f0c19;border:1px solid rgba(255,255,255,.08);border-radius:14px;font-family:Inter;width:100%}.dnb-'+i+' .dnb-logo{font-family:"Space Grotesk";font-size:18px;font-weight:800;color:#fff}.dnb-'+i+' .dnb-links{display:flex;gap:26px;list-style:none}.dnb-'+i+' .dnb-links a{color:rgba(255,255,255,.7);text-decoration:none;font-size:13px;font-weight:500}.dnb-'+i+' .dnb-links a:hover{color:'+c[0]+'}.dnb-'+i+' .dnb-dot{width:8px;height:8px;border-radius:50%;background:#4dff88;box-shadow:0 0 10px #4dff88}';
    }
    NAVBARS_DATA.push({name:n[0],html:html,css:css});
  });
})();

/* ========== PORTFOLIO (5) ========== */
var PORTFOLIO=[];
PORTFOLIO.push({
  name:'Neon Developer',
  html:'<div class="dpp"><header class="dpp-h"><div class="dpp-logo">DG</div><nav><a href="#">Work</a><a href="#">About</a><a href="#">Contact</a></nav></header><section class="dpp-hero"><div class="dpp-tag">◆ AVAILABLE FOR WORK</div><h1>Hi, I\'m <span>Dasun</span></h1><p>Full-stack developer from Sri Lanka building modern web experiences.</p><div class="dpp-btns"><a class="dpp-b1" href="https://wa.me/94743277981">Start a Project</a><a class="dpp-b2" href="#contact">Contact</a></div></section><section class="dpp-grid"><div class="dpp-card"><div class="dpp-img c1"></div><h3>Project Alpha</h3><p>Web Design · 2024</p></div><div class="dpp-card"><div class="dpp-img c2"></div><h3>Project Beta</h3><p>Development · 2024</p></div><div class="dpp-card"><div class="dpp-img c3"></div><h3>Project Gamma</h3><p>UI/UX · 2024</p></div></section><footer class="dpp-f"><span>© 2025 Dasun Gimahana</span><div><a href="tel:0752664962">Phone</a><a href="https://t.me/DasunTECH">Telegram</a></div></footer></div>',
  css:'.dpp{width:100%;max-width:900px;background:#0a0d16;color:#f0f2f7;font-family:Inter;padding:26px;border-radius:18px;border:1px solid #2d3346}.dpp-h{display:flex;justify-content:space-between;align-items:center;padding-bottom:22px;border-bottom:1px solid rgba(255,255,255,.08);margin-bottom:34px}.dpp-logo{width:46px;height:46px;border-radius:13px;background:linear-gradient(135deg,#7c5cff,#a855f7);display:flex;align-items:center;justify-content:center;font-family:"Space Grotesk";font-weight:800;color:#fff;font-size:16px}.dpp-h nav{display:flex;gap:26px}.dpp-h nav a{font-size:13px;color:rgba(255,255,255,.65);cursor:pointer;text-decoration:none}.dpp-hero{text-align:center;padding:20px 0 40px}.dpp-tag{display:inline-block;padding:6px 14px;border-radius:999px;background:rgba(124,92,255,.15);color:#a78bfa;font-size:10.5px;font-weight:700;font-family:"Space Grotesk";letter-spacing:1.5px;margin-bottom:16px}.dpp-hero h1{font-family:"Space Grotesk";font-size:46px;font-weight:800;letter-spacing:-.03em;margin-bottom:14px}.dpp-hero h1 span{background:linear-gradient(90deg,#7c5cff,#ec4899);-webkit-background-clip:text;background-clip:text;color:transparent}.dpp-hero p{font-size:14px;color:rgba(255,255,255,.6);max-width:480px;margin:0 auto 24px;line-height:1.7}.dpp-btns{display:flex;gap:12px;justify-content:center}.dpp-b1,.dpp-b2{padding:11px 24px;border-radius:11px;font-size:13px;font-family:"Space Grotesk";font-weight:600;cursor:pointer;text-decoration:none}.dpp-b1{background:linear-gradient(90deg,#7c5cff,#ec4899);color:#fff}.dpp-b2{border:1px solid rgba(255,255,255,.2);color:#fff}.dpp-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:28px}.dpp-card{padding:14px;border-radius:14px;background:#141824;border:1px solid rgba(255,255,255,.06);transition:.3s}.dpp-card:hover{border-color:#7c5cff;transform:translateY(-4px)}.dpp-img{height:100px;border-radius:10px;margin-bottom:12px}.dpp-img.c1{background:linear-gradient(135deg,#7c5cff,#ec4899)}.dpp-img.c2{background:linear-gradient(135deg,#06b6d4,#a855f7)}.dpp-img.c3{background:linear-gradient(135deg,#f59e0b,#ec4899)}.dpp-card h3{font-size:14px;font-family:"Space Grotesk";font-weight:600;margin-bottom:3px}.dpp-card p{font-size:11.5px;color:rgba(255,255,255,.5)}.dpp-f{display:flex;justify-content:space-between;padding-top:20px;border-top:1px solid rgba(255,255,255,.08);font-size:11.5px;color:rgba(255,255,255,.5)}.dpp-f div{display:flex;gap:16px}.dpp-f a{color:#a78bfa;text-decoration:none;font-weight:600}',
  js:''
});
PORTFOLIO.push({
  name:'Aurora Dream',
  html:'<div class="dap"><div class="dap-aurora"></div><header class="dap-h"><div class="dap-logo">DG</div><nav><a href="#">Home</a><a href="#">About</a><a href="#">Skills</a><a href="#">Contact</a></nav></header><section class="dap-hero"><div class="dap-badge"><span></span>Hello, I\'m Dasun</div><h1>Dasun<br><span class="hl">Gimahana</span></h1><div class="dap-role">&gt; Web Developer</div><p>An 18-year-old developer from Kurunagala, Sri Lanka crafting modern digital experiences.</p><div class="dap-btns"><a href="https://wa.me/94743277981" class="dap-b1">💬 Let\'s Talk</a><a href="mailto:gimahandasun@gmail.com" class="dap-b2">✉ Contact Me</a></div></section><section class="dap-stats"><div class="dap-st"><div class="dap-n">18</div><div class="dap-l">Years Old</div></div><div class="dap-st"><div class="dap-n">5+</div><div class="dap-l">Languages</div></div><div class="dap-st"><div class="dap-n">∞</div><div class="dap-l">Curiosity</div></div></section></div>',
  css:'.dap{position:relative;width:100%;max-width:900px;min-height:520px;background:#030014;color:#eaeaf5;font-family:Outfit;padding:30px;border-radius:20px;overflow:hidden}.dap-aurora{position:absolute;inset:0;background:radial-gradient(circle at 20% 30%,rgba(168,85,247,.4),transparent 45%),radial-gradient(circle at 80% 70%,rgba(6,182,212,.35),transparent 45%),radial-gradient(circle at 50% 50%,rgba(236,72,153,.2),transparent 55%);filter:blur(60px);z-index:0}.dap-h{position:relative;z-index:2;display:flex;justify-content:space-between;align-items:center;margin-bottom:40px}.dap-logo{width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,#a855f7,#22d3ee);display:flex;align-items:center;justify-content:center;font-family:"Space Grotesk";font-weight:800;color:#fff;font-size:16px}.dap-h nav{display:flex;gap:20px}.dap-h nav a{color:#b8b8d0;font-size:13px;text-decoration:none;cursor:pointer}.dap-hero{position:relative;z-index:2;padding:20px 0 30px}.dap-badge{display:inline-flex;align-items:center;gap:10px;padding:7px 16px;background:rgba(168,85,247,.1);border:1px solid rgba(168,85,247,.35);border-radius:50px;font-size:12px;color:#c4b5fd;letter-spacing:1px;margin-bottom:20px}.dap-badge span{width:8px;height:8px;background:#22c55e;border-radius:50%;box-shadow:0 0 10px #22c55e}.dap-hero h1{font-family:Syne;font-size:52px;font-weight:800;line-height:1;letter-spacing:-2px;margin-bottom:14px}.dap-hero h1 .hl{background:linear-gradient(135deg,#22d3ee,#a855f7);-webkit-background-clip:text;background-clip:text;color:transparent}.dap-role{font-family:"JetBrains Mono",monospace;font-size:15px;color:#22d3ee;margin-bottom:18px;font-weight:500}.dap-hero p{color:#a3a3b8;line-height:1.8;margin-bottom:26px;max-width:520px;font-size:14px}.dap-btns{display:flex;gap:12px;flex-wrap:wrap}.dap-b1,.dap-b2{padding:13px 26px;border-radius:50px;font-size:13px;font-weight:600;text-decoration:none;cursor:pointer}.dap-b1{background:linear-gradient(135deg,#a855f7,#22d3ee);color:#030014}.dap-b2{border:1.5px solid rgba(255,255,255,.18);color:#eaeaf5}.dap-stats{position:relative;z-index:2;display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:20px}.dap-st{padding:18px;background:rgba(20,15,45,.5);border:1px solid rgba(168,85,247,.2);border-radius:16px;text-align:center}.dap-n{font-family:Syne;font-size:26px;font-weight:700;background:linear-gradient(135deg,#fff,#a855f7);-webkit-background-clip:text;background-clip:text;color:transparent}.dap-l{font-size:10.5px;letter-spacing:1.5px;color:#8b8ba5;text-transform:uppercase;margin-top:4px}',
  js:''
});
PORTFOLIO.push({
  name:'Poppins Simple',
  html:'<div class="dsp2"><div class="dsp2-blob b1"></div><div class="dsp2-blob b2"></div><div class="dsp2-c"><div class="dsp2-photo"><img src="https://res.cloudinary.com/divxgmr1g/image/upload/v1790598717/ix6foqmtptw6kykujib2.jpg" alt="Dasun"><div class="dsp2-badge"><span class="dsp2-dot"></span>Available for work</div></div><div class="dsp2-txt"><div class="dsp2-greet">✨ Hello, I\'m</div><h1>Dasun<br>Gimahana</h1><div class="dsp2-role"><span>Web Developer</span></div><p>I\'m an 18-year-old passionate developer from Kurunagala, Sri Lanka. I craft clean, modern digital experiences with HTML, CSS, JavaScript, Python and Java.</p><div class="dsp2-chips"><span>HTML</span><span>CSS</span><span>JS</span><span>Python</span><span>Java</span></div><div class="dsp2-btnrow"><a href="https://wa.me/94743277981" class="dsp2-b1">Hire Me</a><a href="mailto:gimahandasun@gmail.com" class="dsp2-b2">Contact</a></div></div></div></div>',
  css:'.dsp2{position:relative;width:100%;max-width:900px;background:#10101a;color:#e8e8f0;font-family:Poppins;padding:40px;border-radius:24px;overflow:hidden;min-height:480px}.dsp2-blob{position:absolute;border-radius:50%;filter:blur(90px);opacity:.5}.dsp2-blob.b1{width:300px;height:300px;background:#ff4ecd;top:-80px;left:-80px}.dsp2-blob.b2{width:300px;height:300px;background:#00d4ff;bottom:-80px;right:-80px}.dsp2-c{position:relative;z-index:2;display:flex;align-items:center;gap:40px;flex-wrap:wrap}.dsp2-photo{position:relative;flex-shrink:0}.dsp2-photo img{width:220px;height:220px;border-radius:28px;object-fit:cover;border:3px solid rgba(255,255,255,.15);box-shadow:0 30px 70px rgba(0,0,0,.5)}.dsp2-badge{position:absolute;bottom:14px;right:-10px;background:rgba(16,16,26,.92);border:1px solid rgba(255,255,255,.15);padding:8px 14px;border-radius:20px;font-size:12px;display:flex;align-items:center;gap:6px;white-space:nowrap}.dsp2-dot{width:8px;height:8px;background:#22c55e;border-radius:50%;box-shadow:0 0 10px #22c55e}.dsp2-txt{flex:1;min-width:260px}.dsp2-greet{display:inline-block;background:rgba(168,85,247,.12);border:1px solid rgba(168,85,247,.35);color:#c4b5fd;font-size:12px;padding:6px 14px;border-radius:20px;margin-bottom:16px;letter-spacing:.5px}.dsp2-txt h1{font-family:"Space Grotesk";font-size:40px;line-height:1.05;letter-spacing:-1.5px;margin-bottom:12px;background:linear-gradient(120deg,#fff 20%,#a855f7 60%,#22d3ee 90%);-webkit-background-clip:text;background-clip:text;color:transparent}.dsp2-role{font-family:"Space Grotesk";font-size:16px;color:#22d3ee;font-weight:500;margin-bottom:18px}.dsp2-txt p{color:#a3a3b5;line-height:1.8;font-size:13.5px;margin-bottom:20px}.dsp2-chips{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:22px}.dsp2-chips span{padding:6px 14px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:20px;font-size:12px}.dsp2-btnrow{display:flex;gap:10px;flex-wrap:wrap}.dsp2-b1,.dsp2-b2{padding:12px 22px;border-radius:40px;font-size:13px;font-weight:600;text-decoration:none;cursor:pointer}.dsp2-b1{background:linear-gradient(135deg,#a855f7,#22d3ee);color:#10101a}.dsp2-b2{border:1.5px solid rgba(255,255,255,.2);color:#e8e8f0}',
  js:''
});
PORTFOLIO.push({
  name:'Split Magazine',
  html:'<div class="dmp"><div class="dmp-l"><div class="dmp-role">Portfolio 2025</div><h1>Dasun<br><span>Gimahana</span></h1><div class="dmp-info">📍 Kurunagala, Sri Lanka</div><div class="dmp-info">🎂 18 Years Old</div><p>Hello! I\'m Dasun — a young and passionate developer. I create modern websites and applications using HTML, CSS, JavaScript, Python, and Java.</p><div class="dmp-contacts"><a href="tel:0752664962">📞 Phone <small>0752664962</small></a><a href="https://wa.me/94743277981">💬 WhatsApp <small>0743277981</small></a><a href="mailto:gimahandasun@gmail.com">✉️ Email <small>gimahandasun@gmail.com</small></a></div></div><div class="dmp-r"><img class="dmp-photo" src="https://res.cloudinary.com/divxgmr1g/image/upload/v1790598717/ix6foqmtptw6kykujib2.jpg" alt="Dasun"><div><h3 class="dmp-h3">My Skills</h3><div class="dmp-skills"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>Python</span><span>Java</span></div></div></div></div>',
  css:'.dmp{display:grid;grid-template-columns:1fr 1fr;min-height:520px;background:#f5f3ee;color:#1a1a1a;font-family:"Segoe UI",Inter;border-radius:20px;overflow:hidden;max-width:900px;width:100%}.dmp-l{background:#111;color:#fff;padding:50px 40px;display:flex;flex-direction:column;justify-content:center;position:relative;overflow:hidden}.dmp-l::before{content:"";position:absolute;width:400px;height:400px;background:radial-gradient(circle,#ff6b35,transparent 70%);top:-120px;left:-120px;opacity:.35}.dmp-l>*{position:relative;z-index:1}.dmp-role{font-size:12px;color:#ffb08a;letter-spacing:3px;text-transform:uppercase;margin-bottom:18px}.dmp-l h1{font-size:44px;line-height:1.05;margin-bottom:20px;letter-spacing:-1.5px;font-family:"Space Grotesk"}.dmp-l h1 span{color:#ff6b35}.dmp-info{color:#aaa;font-size:13px;margin-bottom:6px}.dmp-l p{color:#bbb;line-height:1.75;margin:16px 0 24px;font-size:13.5px}.dmp-contacts a{display:block;margin-bottom:10px;text-decoration:none;color:#fff;font-weight:600;font-size:13.5px;border-left:3px solid #ff6b35;padding-left:12px}.dmp-contacts a small{display:block;color:#888;font-weight:400;font-size:11.5px}.dmp-r{padding:50px 40px;display:flex;flex-direction:column;justify-content:center;gap:30px}.dmp-photo{width:180px;height:180px;border-radius:50%;object-fit:cover;border:6px solid #111;box-shadow:12px 12px 0 #ff6b35;align-self:center}.dmp-h3{font-size:20px;color:#111;border-bottom:3px solid #ff6b35;display:inline-block;padding-bottom:6px;margin-bottom:14px;font-family:"Space Grotesk"}.dmp-skills{display:flex;flex-wrap:wrap;gap:8px}.dmp-skills span{background:#111;color:#fff;padding:8px 18px;border-radius:30px;font-size:12.5px}@media(max-width:700px){.dmp{grid-template-columns:1fr}.dmp-l h1{font-size:32px}}',
  js:''
});
PORTFOLIO.push({
  name:'Glass Card',
  html:'<div class="dgp"><div class="dgp-blob b1"></div><div class="dgp-blob b2"></div><div class="dgp-blob b3"></div><div class="dgp-card"><img class="dgp-av" src="https://res.cloudinary.com/divxgmr1g/image/upload/v1790598717/ix6foqmtptw6kykujib2.jpg" alt="Dasun"><div class="dgp-info"><h1>Dasun Gimahana</h1><div class="dgp-sub">18 • Kurunagala, Sri Lanka</div><p>I\'m a young developer passionate about coding and design. From responsive websites to Python and Java applications — I love creating things that work beautifully.</p><div class="dgp-tags"><span>HTML</span><span>CSS</span><span>JS</span><span>Python</span><span>Java</span></div><div class="dgp-btns"><a href="tel:0752664962">📞 Call</a><a href="https://wa.me/94743277981">💬 WhatsApp</a><a href="mailto:gimahandasun@gmail.com">✉️ Mail</a></div></div></div></div>',
  css:'.dgp{position:relative;width:100%;max-width:900px;min-height:500px;background:#10101a;display:flex;align-items:center;justify-content:center;padding:30px;border-radius:24px;overflow:hidden;font-family:Poppins}.dgp-blob{position:absolute;border-radius:50%;filter:blur(90px);opacity:.55}.dgp-blob.b1{width:300px;height:300px;background:#ff4ecd;top:-80px;left:-80px}.dgp-blob.b2{width:300px;height:300px;background:#00d4ff;bottom:-80px;right:-80px}.dgp-blob.b3{width:250px;height:250px;background:#7c3aed;top:40%;left:40%}.dgp-card{position:relative;z-index:2;width:100%;background:rgba(255,255,255,.08);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.18);border-radius:28px;padding:40px;display:flex;gap:36px;flex-wrap:wrap;align-items:center;box-shadow:0 25px 60px rgba(0,0,0,.5)}.dgp-av{width:200px;height:200px;border-radius:24px;object-fit:cover;border:3px solid rgba(255,255,255,.3);flex-shrink:0}.dgp-info{flex:1;min-width:240px;color:#fff}.dgp-info h1{font-size:32px;margin-bottom:6px;font-family:"Space Grotesk";letter-spacing:-1px}.dgp-sub{color:#c8b6ff;margin-bottom:16px;font-size:13px;letter-spacing:.5px}.dgp-info p{color:#dcdce8;line-height:1.75;margin-bottom:20px;font-size:13.5px}.dgp-tags{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:22px}.dgp-tags span{background:rgba(255,255,255,.12);padding:6px 14px;border-radius:20px;font-size:11.5px;border:1px solid rgba(255,255,255,.2)}.dgp-btns{display:flex;flex-wrap:wrap;gap:8px}.dgp-btns a{display:inline-flex;align-items:center;gap:6px;padding:10px 20px;background:#fff;color:#10101a;font-weight:600;text-decoration:none;border-radius:30px;font-size:12.5px}@media(max-width:700px){.dgp-card{padding:26px;text-align:center;justify-content:center}.dgp-av{margin:0 auto}}',
  js:''
});
PORTFOLIO.forEach(function(p){add('Portfolio',p.name,p.html,p.css,p.js);});

/* ========== RGB TRANSITIONS (25) ========== */
var RGB_DATA=[
  ['Rainbow Flow','linear-gradient(90deg,#ef4444,#f59e0b,#eab308,#10b981,#06b6d4,#3b82f6,#a855f7,#ef4444)','background-position:300% 0'],
  ['Purple Pulse','linear-gradient(135deg,#7c5cff,#a855f7,#7c5cff)','background-position:200% 0'],
  ['Cyan Shift','linear-gradient(90deg,#06b6d4,#3b82f6,#06b6d4)','background-position:200% 0'],
  ['Warm Sunset','linear-gradient(90deg,#f59e0b,#ef4444,#ec4899)','background-position:200% 0'],
  ['Ocean Wave','linear-gradient(90deg,#0891b2,#06b6d4,#67e8f9,#06b6d4)','background-position:200% 0'],
  ['Forest Green','linear-gradient(90deg,#059669,#10b981,#4ade80)','background-position:200% 0'],
  ['Pink Dream','linear-gradient(90deg,#ec4899,#f472b6,#f9a8d4)','background-position:200% 0'],
  ['Galaxy Purple','linear-gradient(90deg,#7e22ce,#a855f7,#c084fc)','background-position:200% 0'],
  ['Fire Red','linear-gradient(90deg,#7f1d1d,#dc2626,#ef4444)','background-position:200% 0'],
  ['Ice Blue','linear-gradient(90deg,#0ea5e9,#38bdf8,#7dd3fc)','background-position:200% 0'],
  ['Emerald Shift','linear-gradient(90deg,#10b981,#34d399,#6ee7b7)','background-position:200% 0'],
  ['Rose Gold','linear-gradient(90deg,#fda4af,#fb7185,#e11d48)','background-position:200% 0'],
  ['Midnight','linear-gradient(90deg,#1e3a8a,#3b82f6,#60a5fa)','background-position:200% 0'],
  ['Aurora','linear-gradient(120deg,#7c5cff,#a855f7,#ec4899,#06b6d4,#7c5cff)','background-position:300% 50%'],
  ['Neon Rainbow','linear-gradient(90deg,#ff00ff,#00ffff,#ffff00,#ff00ff)','background-position:300% 0'],
  ['Heat Wave','linear-gradient(90deg,#fbbf24,#f97316,#dc2626)','background-position:200% 0'],
  ['Candy','linear-gradient(90deg,#ec4899,#a855f7,#06b6d4)','background-position:200% 0'],
  ['Sunrise','linear-gradient(90deg,#fbbf24,#f472b6,#a855f7)','background-position:200% 0'],
  ['Tropical','linear-gradient(90deg,#10b981,#06b6d4,#3b82f6)','background-position:200% 0'],
  ['Cotton Candy','linear-gradient(90deg,#fbcfe8,#e9d5ff,#c7d2fe)','background-position:200% 0'],
  ['Deep Sea','linear-gradient(90deg,#0f172a,#1e3a8a,#0ea5e9)','background-position:200% 0'],
  ['Volcano','linear-gradient(90deg,#7f1d1d,#ea580c,#facc15)','background-position:200% 0'],
  ['Spring','linear-gradient(90deg,#22c55e,#a3e635,#facc15)','background-position:200% 0'],
  ['Cyber','linear-gradient(90deg,#00e5ff,#ff00ff,#00e5ff)','background-position:200% 0'],
  ['Gradient Morph','linear-gradient(45deg,#ef4444,#f59e0b,#10b981,#06b6d4,#7c5cff,#ef4444)','background-position:400% 0']
];
var RGB=[];
RGB_DATA.forEach(function(r){
  var name=r[0];
  var gradient=r[1];
  var anim=r[2];
  var css='.dasun-rgb{width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:'+gradient+';background-size:300% 100%;animation:dasunRGBflow 3s linear infinite;border-radius:14px;color:#fff;font-family:"Space Grotesk";font-weight:800;font-size:13px;letter-spacing:2px;text-shadow:0 2px 8px rgba(0,0,0,.3)}@keyframes dasunRGBflow{0%{background-position:0% 50%}100%{background-position:'+anim.replace('background-position:','')+'}}';
  var html='<div style="width:100%;height:100%;padding:12px"><div class="dasun-rgb">'+name.toUpperCase()+'</div></div>';
  RGB.push({name:name,html:html,css:css,gradient:gradient,anim:anim});
});

/* ========== COLORS (150) ========== */
var COLORS = {
  'Reds':['#ff0000','#dc143c','#b22222','#8b0000','#ff6b6b','#ff4d4d','#e63946','#c1121f','#d62828','#f77f00','#e63946','#ff8fa3','#ffb3c1','#ffc9d1','#7f1d1d'],
  'Oranges':['#ff7f50','#ff6347','#ff4500','#ff8c00','#ffa500','#ffb347','#ffcc80','#ffa07a','#ff7f50','#ff5722','#f4511e','#e64a19','#d84315','#bf360c','#ea580c'],
  'Yellows':['#ffff00','#ffd700','#ffeb3b','#fcd303','#fdd835','#ffc107','#ffb300','#ffca28','#fff59d','#fff9c4','#f9a825','#f57f17','#ffea00','#ffee58','#facc15'],
  'Greens':['#00ff00','#00ff7f','#32cd32','#228b22','#006400','#2ecc71','#27ae60','#16a085','#1abc9c','#10b981','#059669','#34d399','#6ee7b7','#a7f3d0','#4ade80'],
  'Cyans':['#00ffff','#00ced1','#20b2aa','#008b8b','#00bcd4','#0097a7','#00acc1','#26c6da','#4dd0e1','#80deea','#b2ebf2','#06b6d4','#0891b2','#67e8f9','#22d3ee'],
  'Blues':['#0000ff','#1e90ff','#4169e1','#0000cd','#00008b','#2196f3','#1976d2','#0d47a1','#3b82f6','#2563eb','#1d4ed8','#60a5fa','#93c5fd','#bfdbfe','#0ea5e9'],
  'Purples':['#800080','#9400d3','#8a2be2','#4b0082','#9b59b6','#8e44ad','#7c5cff','#a855f7','#9333ea','#7e22ce','#c084fc','#d8b4fe','#e9d5ff','#f3e8ff','#6366f1'],
  'Pinks':['#ffc0cb','#ff69b4','#ff1493','#db7093','#e91e63','#c2185b','#ad1457','#ec4899','#db2777','#be185d','#f472b6','#f9a8d4','#fbcfe8','#fce7f3','#f43f5e'],
  'Browns':['#a52a2a','#8b4513','#a0522d','#d2691e','#cd853f','#deb887','#f5deb3','#d2b48c','#bc8f8f','#8b7355','#5d4037','#4e342e','#3e2723','#795548','#6b4423'],
  'Grays':['#000000','#1c1c1c','#333333','#4d4d4d','#666666','#808080','#999999','#b3b3b3','#cccccc','#e0e0e0','#f0f0f0','#f5f5f5','#fafafa','#ffffff','#8a94a8']
};

/* ========== CONTACT BOXES (25) ========== */
var CONTACTS = [
  {n:'Gradient Card',h:'<a href="https://wa.me/94743277981" class="dcb1"><div class="dcb1-ic">💬</div><div class="dcb1-t"><b>WhatsApp</b><span>074 327 7981</span></div></a>',c:'.dcb1{display:flex;align-items:center;gap:16px;padding:22px 26px;border-radius:18px;text-decoration:none;font-family:Inter;background:linear-gradient(135deg,#7c5cff,#a855f7);color:#fff;box-shadow:0 14px 30px rgba(124,92,255,.4);transition:.4s;position:relative;overflow:hidden;width:100%}.dcb1::before{content:"";position:absolute;inset:0;background:linear-gradient(120deg,transparent,rgba(255,255,255,.25),transparent);transform:translateX(-100%);transition:.6s}.dcb1:hover::before{transform:translateX(100%)}.dcb1:hover{transform:translateY(-6px) scale(1.02);box-shadow:0 22px 48px rgba(124,92,255,.65)}.dcb1-ic{width:52px;height:52px;border-radius:14px;background:rgba(255,255,255,.22);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;transition:.3s}.dcb1:hover .dcb1-ic{transform:rotate(-10deg) scale(1.1)}.dcb1-t b{display:block;font-size:14.5px;font-family:"Space Grotesk";font-weight:700;margin-bottom:3px}.dcb1-t span{font-size:12.5px;opacity:.85}'},
  {n:'Glass Dark',h:'<a href="mailto:gimahandasun@gmail.com" class="dcb2"><div class="dcb2-ic">✉</div><div class="dcb2-t"><b>Email Us</b><span>gimahandasun@gmail.com</span></div><span class="dcb2-a">↗</span></a>',c:'.dcb2{display:flex;align-items:center;gap:16px;padding:22px 26px;border-radius:18px;text-decoration:none;font-family:Inter;background:rgba(255,255,255,.06);backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.12);color:#fff;transition:.4s;width:100%;position:relative;overflow:hidden}.dcb2:hover{border-color:#22d3ee;transform:translateY(-6px);box-shadow:0 20px 50px rgba(34,211,238,.3)}.dcb2-ic{width:52px;height:52px;border-radius:14px;background:linear-gradient(135deg,#06b6d4,#3b82f6);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;transition:.3s}.dcb2:hover .dcb2-ic{transform:rotate(12deg) scale(1.1)}.dcb2-t b{display:block;font-size:14.5px;font-family:"Space Grotesk";font-weight:700;margin-bottom:3px}.dcb2-t span{font-size:12px;color:rgba(255,255,255,.65);word-break:break-all}.dcb2-a{margin-left:auto;color:#22d3ee;font-size:18px;transition:.3s}.dcb2:hover .dcb2-a{transform:translate(4px,-4px)}'},
  {n:'Neon Border',h:'<a href="tel:0752664962" class="dcb3"><div class="dcb3-ic">☎</div><div class="dcb3-t"><b>CALL NOW</b><span>075 266 4962</span></div></a>',c:'.dcb3{display:flex;align-items:center;gap:16px;padding:22px 26px;border-radius:14px;text-decoration:none;font-family:"JetBrains Mono",monospace;background:#0a0d16;border:2px solid #00e5ff;color:#00e5ff;box-shadow:0 0 25px rgba(0,229,255,.35),inset 0 0 20px rgba(0,229,255,.08);transition:.4s;width:100%}.dcb3:hover{background:#00e5ff;color:#0a0d16;box-shadow:0 0 45px rgba(0,229,255,.8),0 20px 45px rgba(0,229,255,.4);transform:translateY(-5px)}.dcb3-ic{width:52px;height:52px;border-radius:12px;background:rgba(0,229,255,.12);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0}.dcb3:hover .dcb3-ic{background:rgba(0,0,0,.15)}.dcb3-t b{display:block;font-size:14px;font-weight:700;letter-spacing:2px}.dcb3-t span{font-size:12.5px;opacity:.85;margin-top:3px;display:block}'},
  {n:'Split Icon',h:'<a href="https://t.me/DasunTECH" class="dcb4"><div class="dcb4-l">TG</div><div class="dcb4-r"><b>Telegram</b><span>@DasunTECH</span></div></a>',c:'.dcb4{display:flex;align-items:stretch;padding:0;border-radius:16px;overflow:hidden;text-decoration:none;font-family:Inter;background:#0f0c19;border:1px solid rgba(255,255,255,.08);color:#fff;transition:.4s;width:100%}.dcb4:hover{transform:translateY(-5px);border-color:#0088cc;box-shadow:0 20px 45px rgba(0,136,204,.35)}.dcb4-l{width:80px;background:linear-gradient(135deg,#0088cc,#0066aa);display:flex;align-items:center;justify-content:center;font-family:"Space Grotesk";font-weight:800;font-size:20px;color:#fff;transition:.4s;flex-shrink:0}.dcb4:hover .dcb4-l{width:100px;background:linear-gradient(135deg,#22d3ee,#0088cc)}.dcb4-r{padding:22px 24px;flex:1}.dcb4-r b{display:block;font-size:14.5px;font-family:"Space Grotesk";font-weight:700;margin-bottom:4px}.dcb4-r span{font-size:12.5px;color:rgba(255,255,255,.6)}'},
  {n:'Icon Top',h:'<a href="https://wa.me/94762664962" class="dcb5"><div class="dcb5-ic">💬</div><b>WhatsApp</b><span>076 266 4962</span></a>',c:'.dcb5{display:flex;flex-direction:column;align-items:center;text-align:center;padding:32px 22px;border-radius:20px;text-decoration:none;font-family:Inter;background:#141824;border:1px solid #2d3346;color:#fff;gap:10px;transition:.4s;width:100%}.dcb5:hover{transform:translateY(-8px);border-color:#25d366;box-shadow:0 25px 55px rgba(37,211,102,.35)}.dcb5-ic{width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,#25d366,#128c7e);display:flex;align-items:center;justify-content:center;font-size:26px;box-shadow:0 12px 28px rgba(37,211,102,.5);transition:.4s}.dcb5:hover .dcb5-ic{transform:scale(1.1) rotate(360deg)}.dcb5 b{font-size:15px;font-family:"Space Grotesk";margin-top:8px;font-weight:700}.dcb5 span{font-size:12.5px;color:rgba(255,255,255,.6)}'},
  {n:'Rounded Pill',h:'<a href="tel:0752664962" class="dcb6"><div class="dcb6-ic">📞</div><span>075 266 4962</span><i>→</i></a>',c:'.dcb6{display:flex;align-items:center;gap:14px;padding:14px 14px 14px 20px;border-radius:999px;text-decoration:none;font-family:"Space Grotesk";background:linear-gradient(135deg,#7c5cff,#a855f7);color:#fff;box-shadow:0 14px 30px rgba(124,92,255,.45);transition:.4s;width:100%}.dcb6:hover{transform:translateY(-5px) scale(1.02);box-shadow:0 22px 48px rgba(236,72,153,.6)}.dcb6-ic{width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,.22);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0}.dcb6 span{font-size:14.5px;font-weight:700;flex:1}.dcb6 i{font-style:normal;font-size:20px;color:rgba(255,255,255,.7);transition:.3s}.dcb6:hover i{transform:translateX(6px)}'},
  {n:'Corner Fold',h:'<a href="https://wa.me/94752664962" class="dcb7"><span class="dcb7-c"></span><div class="dcb7-ic">💬</div><div class="dcb7-t"><b>WhatsApp Alt</b><span>075 266 4962</span></div></a>',c:'.dcb7{display:flex;align-items:center;gap:16px;padding:22px 26px;border-radius:16px;text-decoration:none;font-family:Inter;background:#141824;border:1px solid #2d3346;color:#fff;position:relative;overflow:hidden;transition:.4s;width:100%}.dcb7-c{position:absolute;top:0;right:0;width:0;height:0;border-style:solid;border-width:0 60px 60px 0;border-color:transparent #7c5cff transparent transparent;transition:.4s}.dcb7:hover .dcb7-c{border-width:0 100px 100px 0;border-color:transparent #ec4899 transparent transparent}.dcb7-ic{width:52px;height:52px;border-radius:14px;background:rgba(37,211,102,.15);color:#25d366;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;transition:.3s}.dcb7:hover .dcb7-ic{background:#25d366;color:#fff}.dcb7-t{position:relative;z-index:1}.dcb7-t b{display:block;font-size:14.5px;font-family:"Space Grotesk";font-weight:700;margin-bottom:3px}.dcb7-t span{font-size:12.5px;color:rgba(255,255,255,.6)}.dcb7:hover{transform:translateY(-5px);border-color:#7c5cff}'},
  {n:'Brutalist Bold',h:'<a href="tel:0752664962" class="dcb8"><div class="dcb8-ic">☎</div><div class="dcb8-t"><b>PHONE</b><span>075 266 4962</span></div></a>',c:'.dcb8{display:flex;align-items:center;gap:16px;padding:22px 26px;text-decoration:none;font-family:"Space Grotesk";background:#fff;color:#000;border:4px solid #000;box-shadow:8px 8px 0 #7c5cff;transition:.3s;width:100%}.dcb8:hover{transform:translate(-4px,-4px);box-shadow:12px 12px 0 #ec4899}.dcb8-ic{width:52px;height:52px;background:#000;color:#fff;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0}.dcb8-t b{display:block;font-size:14px;font-weight:800;letter-spacing:2px;margin-bottom:3px}.dcb8-t span{font-size:13px;font-weight:600}'},
  {n:'Sliding BG',h:'<a href="https://wa.me/94743277981" class="dcb9"><div class="dcb9-ic">💬</div><div class="dcb9-t"><b>WhatsApp</b><span>074 327 7981</span></div></a>',c:'.dcb9{display:flex;align-items:center;gap:16px;padding:22px 26px;border-radius:16px;text-decoration:none;font-family:Inter;background:#141824;border:1px solid #2d3346;color:#fff;position:relative;overflow:hidden;transition:.4s;width:100%}.dcb9::before{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(37,211,102,.25),transparent);transition:.7s}.dcb9:hover::before{left:100%}.dcb9:hover{border-color:#25d366;transform:translateY(-5px);box-shadow:0 20px 45px rgba(37,211,102,.3)}.dcb9-ic{width:52px;height:52px;border-radius:12px;background:rgba(37,211,102,.15);color:#25d366;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;position:relative;z-index:1}.dcb9-t{position:relative;z-index:1}.dcb9-t b{display:block;font-size:14.5px;font-family:"Space Grotesk";font-weight:700;margin-bottom:3px}.dcb9-t span{font-size:12.5px;color:rgba(255,255,255,.6)}'},
  {n:'Neumorphic',h:'<a href="tel:0752664962" class="dcb10"><div class="dcb10-ic">☎</div><div class="dcb10-t"><b>Call Us</b><span>075 266 4962</span></div></a>',c:'.dcb10{display:flex;align-items:center;gap:16px;padding:22px 26px;border-radius:18px;text-decoration:none;font-family:Inter;background:#e0e5ec;color:#3d4461;box-shadow:8px 8px 16px #c1c5cc,-8px -8px 16px #ffffff;transition:.3s;width:100%}.dcb10:hover{transform:translateY(-4px)}.dcb10:active{box-shadow:inset 4px 4px 8px #c1c5cc,inset -4px -4px 8px #ffffff}.dcb10-ic{width:52px;height:52px;border-radius:16px;background:#e0e5ec;box-shadow:4px 4px 8px #c1c5cc,-4px -4px 8px #ffffff;display:flex;align-items:center;justify-content:center;font-size:22px;color:#7c5cff;flex-shrink:0}.dcb10-t b{display:block;font-size:14.5px;font-family:"Space Grotesk";font-weight:700;margin-bottom:3px}.dcb10-t span{font-size:12.5px;color:#666}'},
  {n:'Ribbon',h:'<a href="mailto:gimahandasun@gmail.com" class="dcb11"><div class="dcb11-r">NEW</div><div class="dcb11-ic">✉</div><div class="dcb11-t"><b>Email</b><span>gimahandasun@gmail.com</span></div></a>',c:'.dcb11{display:flex;align-items:center;gap:16px;padding:22px 26px;border-radius:16px;text-decoration:none;font-family:Inter;background:#141824;border:1px solid #2d3346;color:#fff;position:relative;transition:.4s;width:100%}.dcb11:hover{border-color:#ec4899;transform:translateY(-5px);box-shadow:0 20px 45px rgba(236,72,153,.3)}.dcb11-r{position:absolute;top:14px;right:-8px;background:linear-gradient(90deg,#ec4899,#a855f7);color:#fff;padding:4px 14px;font-size:10px;font-weight:800;font-family:"Space Grotesk";letter-spacing:1.5px;border-radius:4px 0 0 4px}.dcb11-ic{width:52px;height:52px;border-radius:14px;background:rgba(236,72,153,.15);color:#ec4899;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0}.dcb11-t b{display:block;font-size:14.5px;font-family:"Space Grotesk";font-weight:700;margin-bottom:3px}.dcb11-t span{font-size:12px;color:rgba(255,255,255,.6);word-break:break-all}'},
  {n:'Circular Icon',h:'<a href="tel:0752664962" class="dcb12"><div class="dcb12-ic">☎</div><div class="dcb12-t"><b>Phone</b><span>075 266 4962</span></div><i>→</i></a>',c:'.dcb12{display:flex;align-items:center;gap:16px;padding:22px 26px;border-radius:16px;text-decoration:none;font-family:Inter;background:#fff;color:#111;border:1px solid #eee;box-shadow:0 6px 20px rgba(0,0,0,.05);transition:.4s;width:100%}.dcb12:hover{transform:translateY(-5px);box-shadow:0 20px 45px rgba(124,92,255,.2)}.dcb12-ic{width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#7c5cff,#a855f7);color:#fff;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;box-shadow:0 10px 22px rgba(124,92,255,.4);transition:.3s}.dcb12:hover .dcb12-ic{transform:scale(1.1)}.dcb12-t b{display:block;font-size:14.5px;font-family:"Space Grotesk";font-weight:700;margin-bottom:3px}.dcb12-t span{font-size:12.5px;color:#666}.dcb12 i{margin-left:auto;color:#7c5cff;font-style:normal;font-size:18px;transition:.3s}.dcb12:hover i{transform:translateX(5px)}'},
  {n:'Soft Tile',h:'<a href="https://t.me/DasunTECH" class="dcb13"><div class="dcb13-l"></div><div class="dcb13-ic">✈</div><div class="dcb13-t"><b>Telegram</b><span>@DasunTECH</span></div></a>',c:'.dcb13{display:flex;align-items:center;gap:16px;padding:22px 26px 22px 30px;border-radius:16px;text-decoration:none;font-family:Inter;background:#141824;border:1px solid #2d3346;color:#fff;position:relative;overflow:hidden;transition:.4s;width:100%}.dcb13-l{position:absolute;left:0;top:14px;bottom:14px;width:5px;border-radius:3px;background:linear-gradient(180deg,#0088cc,#22d3ee)}.dcb13:hover{border-color:#0088cc;transform:translateY(-5px);box-shadow:0 20px 45px rgba(0,136,204,.3)}.dcb13-ic{width:52px;height:52px;border-radius:12px;background:rgba(0,136,204,.15);color:#22d3ee;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0}.dcb13-t b{display:block;font-size:14.5px;font-family:"Space Grotesk";font-weight:700;margin-bottom:3px}.dcb13-t span{font-size:12.5px;color:rgba(255,255,255,.6)}'},
  {n:'Gradient Ring',h:'<a href="tel:0752664962" class="dcb14"><div class="dcb14-in"><div class="dcb14-ic">☎</div><div class="dcb14-t"><b>Call</b><span>075 266 4962</span></div></div></a>',c:'.dcb14{display:block;padding:2px;border-radius:18px;text-decoration:none;font-family:Inter;background:linear-gradient(135deg,#7c5cff,#ec4899,#06b6d4,#7c5cff);background-size:300% 300%;animation:dcb14an 4s ease infinite;transition:.4s;width:100%}@keyframes dcb14an{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}.dcb14:hover{transform:translateY(-5px) scale(1.02);box-shadow:0 20px 45px rgba(124,92,255,.4)}.dcb14-in{display:flex;align-items:center;gap:16px;padding:20px 22px;border-radius:16px;background:#0d1017;color:#fff}.dcb14-ic{width:52px;height:52px;border-radius:12px;background:rgba(124,92,255,.15);color:#a78bfa;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0}.dcb14-t b{display:block;font-size:14.5px;font-family:"Space Grotesk";font-weight:700;margin-bottom:3px}.dcb14-t span{font-size:12.5px;color:rgba(255,255,255,.6)}'},
  {n:'Hover Invert',h:'<a href="mailto:gimahandasun@gmail.com" class="dcb15"><div class="dcb15-ic">✉</div><div class="dcb15-t"><b>Email</b><span>gimahandasun@gmail.com</span></div></a>',c:'.dcb15{display:flex;align-items:center;gap:16px;padding:22px 26px;border-radius:16px;text-decoration:none;font-family:Inter;background:transparent;border:2px solid #7c5cff;color:#a78bfa;position:relative;overflow:hidden;z-index:1;transition:.4s;width:100%}.dcb15::before{content:"";position:absolute;inset:0;background:linear-gradient(135deg,#7c5cff,#ec4899);transform:translateY(100%);transition:.4s;z-index:-1}.dcb15:hover{color:#fff;border-color:transparent}.dcb15:hover::before{transform:translateY(0)}.dcb15-ic{width:52px;height:52px;border-radius:50%;background:rgba(124,92,255,.15);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0}.dcb15-t b{display:block;font-size:14.5px;font-family:"Space Grotesk";font-weight:700;margin-bottom:3px}.dcb15-t span{font-size:12px;word-break:break-all}'},
  {n:'Circle Badge',h:'<a href="https://wa.me/94743277981" class="dcb16"><div class="dcb16-ic">💬</div><div class="dcb16-t"><b>WhatsApp</b><span>074 327 7981</span></div><span class="dcb16-b">●</span></a>',c:'.dcb16{display:flex;align-items:center;gap:16px;padding:22px 26px;border-radius:16px;text-decoration:none;font-family:Inter;background:#141824;border:1px solid #2d3346;color:#fff;position:relative;transition:.4s;width:100%}.dcb16:hover{border-color:#25d366;transform:translateY(-5px);box-shadow:0 20px 45px rgba(37,211,102,.3)}.dcb16-ic{width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#25d366,#128c7e);display:flex;align-items:center;justify-content:center;font-size:22px;color:#fff;flex-shrink:0;box-shadow:0 10px 22px rgba(37,211,102,.4)}.dcb16-t b{display:block;font-size:14.5px;font-family:"Space Grotesk";font-weight:700;margin-bottom:3px}.dcb16-t span{font-size:12.5px;color:rgba(255,255,255,.6)}.dcb16-b{position:absolute;top:16px;right:18px;font-size:14px;color:#22c55e;animation:dcb16p 1.6s infinite}@keyframes dcb16p{50%{opacity:.3}}'},
  {n:'Underglow',h:'<a href="tel:0752664962" class="dcb17"><div class="dcb17-ic">☎</div><div class="dcb17-t"><b>Direct Line</b><span>075 266 4962</span></div></a>',c:'.dcb17{display:flex;align-items:center;gap:16px;padding:22px 26px 26px;border-radius:16px;text-decoration:none;font-family:Inter;background:#141824;border:1px solid #2d3346;color:#fff;position:relative;transition:.4s;width:100%;overflow:hidden}.dcb17::after{content:"";position:absolute;bottom:0;left:20%;right:20%;height:2px;background:linear-gradient(90deg,transparent,#7c5cff,#ec4899,#7c5cff,transparent);border-radius:3px;transform:scaleX(0);transform-origin:center;transition:.4s}.dcb17:hover::after{transform:scaleX(1)}.dcb17:hover{border-color:#7c5cff;transform:translateY(-5px);box-shadow:0 20px 45px rgba(124,92,255,.35)}.dcb17-ic{width:52px;height:52px;border-radius:14px;background:rgba(124,92,255,.15);color:#a78bfa;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0}.dcb17-t b{display:block;font-size:14.5px;font-family:"Space Grotesk";font-weight:700;margin-bottom:3px}.dcb17-t span{font-size:12.5px;color:rgba(255,255,255,.6)}'},
  {n:'Retro Pixel',h:'<a href="mailto:gimahandasun@gmail.com" class="dcb18"><div class="dcb18-ic">✉</div><div class="dcb18-t"><b>EMAIL_</b><span>gimahandasun@gmail.com</span></div></a>',c:'.dcb18{display:flex;align-items:center;gap:16px;padding:20px 24px;text-decoration:none;font-family:"JetBrains Mono",monospace;background:#000;border:2px solid #00ff88;color:#00ff88;box-shadow:4px 4px 0 #ff00ff;transition:.3s;width:100%}.dcb18:hover{transform:translate(-3px,-3px);box-shadow:7px 7px 0 #ff00ff}.dcb18-ic{width:52px;height:52px;background:#00ff88;color:#000;display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0;font-weight:700}.dcb18-t b{display:block;font-size:13.5px;font-weight:800;letter-spacing:2px;margin-bottom:3px}.dcb18-t span{font-size:11.5px;color:rgba(0,255,136,.75);word-break:break-all}'},
  {n:'Split Side',h:'<a href="https://wa.me/94752664962" class="dcb19"><div class="dcb19-l">💬</div><div class="dcb19-r"><b>WhatsApp Alt</b><span>075 266 4962</span></div></a>',c:'.dcb19{display:flex;align-items:stretch;padding:0;border-radius:16px;overflow:hidden;text-decoration:none;font-family:Inter;background:#0f0c19;border:1px solid rgba(255,255,255,.08);color:#fff;transition:.4s;width:100%}.dcb19:hover{transform:translateY(-5px);border-color:#25d366;box-shadow:0 20px 45px rgba(37,211,102,.3)}.dcb19-l{width:70px;background:linear-gradient(135deg,#25d366,#128c7e);display:flex;align-items:center;justify-content:center;font-size:26px;color:#fff;flex-shrink:0;transition:.4s}.dcb19:hover .dcb19-l{width:90px;background:linear-gradient(135deg,#7c5cff,#25d366)}.dcb19-r{padding:22px 24px;flex:1}.dcb19-r b{display:block;font-size:14.5px;font-family:"Space Grotesk";font-weight:700;margin-bottom:4px}.dcb19-r span{font-size:12.5px;color:rgba(255,255,255,.6)}'},
  {n:'Border Accent',h:'<a href="tel:0752664962" class="dcb20"><div class="dcb20-ic">☎</div><div class="dcb20-t"><b>Call Now</b><span>075 266 4962</span></div></a>',c:'.dcb20{display:flex;align-items:center;gap:16px;padding:22px 26px;border-radius:16px;text-decoration:none;font-family:Inter;background:#141824;color:#fff;border-left:5px solid #7c5cff;border-top:1px solid #2d3346;border-right:1px solid #2d3346;border-bottom:1px solid #2d3346;transition:.4s;width:100%}.dcb20:hover{border-left-color:#ec4899;transform:translateY(-5px);box-shadow:0 20px 45px rgba(236,72,153,.3)}.dcb20-ic{width:52px;height:52px;border-radius:12px;background:rgba(124,92,255,.15);color:#a78bfa;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0}.dcb20-t b{display:block;font-size:14.5px;font-family:"Space Grotesk";font-weight:700;margin-bottom:3px}.dcb20-t span{font-size:12.5px;color:rgba(255,255,255,.6)}'},
  {n:'Floating Badge',h:'<a href="mailto:gimahandasun@gmail.com" class="dcb21"><div class="dcb21-ic">✉</div><div class="dcb21-t"><b>Email</b><span>gimahandasun@gmail.com</span></div><span class="dcb21-bdg">New</span></a>',c:'.dcb21{display:flex;align-items:center;gap:16px;padding:22px 26px;border-radius:16px;text-decoration:none;font-family:Inter;background:#141824;border:1px solid #2d3346;color:#fff;position:relative;transition:.4s;width:100%}.dcb21:hover{border-color:#ec4899;transform:translateY(-5px);box-shadow:0 20px 45px rgba(236,72,153,.3)}.dcb21-ic{width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#ec4899,#a855f7);display:flex;align-items:center;justify-content:center;font-size:22px;color:#fff;flex-shrink:0;box-shadow:0 10px 22px rgba(236,72,153,.4);position:relative}.dcb21-ic::after{content:"";position:absolute;inset:-4px;border-radius:50%;border:2px solid rgba(236,72,153,.3);animation:dcb21ring 2s infinite}@keyframes dcb21ring{0%{transform:scale(1);opacity:1}100%{transform:scale(1.4);opacity:0}}.dcb21-t b{display:block;font-size:14.5px;font-family:"Space Grotesk";font-weight:700;margin-bottom:3px}.dcb21-t span{font-size:12px;color:rgba(255,255,255,.6);word-break:break-all}.dcb21-bdg{position:absolute;top:12px;right:14px;padding:3px 10px;background:rgba(236,72,153,.2);border:1px solid rgba(236,72,153,.5);color:#ec4899;font-size:9.5px;font-weight:700;font-family:"Space Grotesk";letter-spacing:1px;text-transform:uppercase;border-radius:999px}'},
  {n:'Diagonal Split',h:'<a href="https://t.me/DasunTECH" class="dcb22"><div class="dcb22-ic">✈</div><div class="dcb22-t"><b>Telegram</b><span>@DasunTECH</span></div></a>',c:'.dcb22{display:flex;align-items:center;gap:16px;padding:22px 26px;border-radius:16px;text-decoration:none;font-family:Inter;color:#fff;position:relative;overflow:hidden;transition:.4s;width:100%;background:#0f0c19;border:1px solid rgba(255,255,255,.08)}.dcb22::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(135deg,#0088cc 0%,#0088cc 50%,transparent 50%,transparent 100%);opacity:.15;transition:.5s}.dcb22:hover::before{opacity:.35}.dcb22:hover{border-color:#0088cc;transform:translateY(-5px);box-shadow:0 20px 45px rgba(0,136,204,.3)}.dcb22-ic{width:52px;height:52px;border-radius:12px;background:linear-gradient(135deg,#0088cc,#22d3ee);color:#fff;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;position:relative}.dcb22-t{position:relative}.dcb22-t b{display:block;font-size:14.5px;font-family:"Space Grotesk";font-weight:700;margin-bottom:3px}.dcb22-t span{font-size:12.5px;color:rgba(255,255,255,.6)}'},
  {n:'Soft Float',h:'<a href="tel:0752664962" class="dcb23"><div class="dcb23-ic">☎</div><div class="dcb23-t"><b>Contact Us</b><span>075 266 4962</span></div></a>',c:'.dcb23{display:flex;align-items:center;gap:16px;padding:24px 28px;border-radius:20px;text-decoration:none;font-family:Inter;background:linear-gradient(160deg,#1a2332,#0f1720);color:#fff;border:1px solid #2d3346;box-shadow:0 10px 30px rgba(0,0,0,.4);transition:.4s;width:100%}.dcb23:hover{transform:translateY(-8px);box-shadow:0 30px 60px rgba(0,0,0,.5),0 0 0 1px #7c5cff inset;border-color:transparent}.dcb23-ic{width:54px;height:54px;border-radius:16px;background:linear-gradient(135deg,#7c5cff,#a855f7);color:#fff;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;box-shadow:0 12px 28px rgba(124,92,255,.4);transition:.4s}.dcb23:hover .dcb23-ic{transform:rotate(-8deg) scale(1.1)}.dcb23-t b{display:block;font-size:15px;font-family:"Space Grotesk";font-weight:700;margin-bottom:3px}.dcb23-t span{font-size:12.5px;color:rgba(255,255,255,.6)}'},
  {n:'Vertical Slice',h:'<a href="https://wa.me/94743277981" class="dcb24"><div class="dcb24-ic">💬</div><div class="dcb24-t"><b>WhatsApp</b><span>074 327 7981</span></div></a>',c:'.dcb24{display:flex;align-items:center;gap:16px;padding:20px 24px;border-radius:12px;text-decoration:none;font-family:Inter;background:#0a0d16;border:1px solid #2d3346;color:#fff;position:relative;overflow:hidden;transition:.4s;width:100%}.dcb24::before{content:"";position:absolute;top:0;left:0;bottom:0;width:0;background:linear-gradient(135deg,rgba(37,211,102,.15),rgba(37,211,102,.05));transition:.5s}.dcb24:hover::before{width:100%}.dcb24:hover{border-color:#25d366;box-shadow:0 20px 45px rgba(37,211,102,.3)}.dcb24-ic,.dcb24-t{position:relative;z-index:1}.dcb24-ic{width:52px;height:52px;border-radius:50%;background:rgba(37,211,102,.15);color:#25d366;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0}.dcb24-t b{display:block;font-size:14.5px;font-family:"Space Grotesk";font-weight:700;margin-bottom:3px}.dcb24-t span{font-size:12.5px;color:rgba(255,255,255,.6)}'},
  {n:'Cyber Card',h:'<a href="mailto:gimahandasun@gmail.com" class="dcb25"><div class="dcb25-ic">✉</div><div class="dcb25-t"><b>EMAIL</b><span>gimahandasun@gmail.com</span></div></a>',c:'.dcb25{display:flex;align-items:center;gap:16px;padding:22px 26px;text-decoration:none;font-family:"JetBrains Mono",monospace;background:linear-gradient(90deg,rgba(6,182,212,.15),rgba(6,182,212,.05));border:1px solid #06b6d4;color:#06b6d4;clip-path:polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px);transition:.4s;width:100%}.dcb25:hover{background:#06b6d4;color:#0a0d16;box-shadow:0 0 35px rgba(6,182,212,.7);transform:translateY(-4px)}.dcb25-ic{width:52px;height:52px;background:rgba(6,182,212,.15);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0}.dcb25:hover .dcb25-ic{background:rgba(0,0,0,.15)}.dcb25-t b{display:block;font-size:13px;font-weight:800;letter-spacing:2.5px;margin-bottom:3px}.dcb25-t span{font-size:11.5px;word-break:break-all}'}
];

/* ========== GOOGLE FONTS (200) ========== */
var FONTS = [
  {n:'Poppins',cat:'Sans',w:'300;400;500;600;700;800'},{n:'Inter',cat:'Sans',w:'300;400;500;600;700;800'},
  {n:'Roboto',cat:'Sans',w:'300;400;500;700;900'},{n:'Open Sans',cat:'Sans',w:'300;400;500;600;700;800'},
  {n:'Lato',cat:'Sans',w:'300;400;700;900'},{n:'Montserrat',cat:'Sans',w:'300;400;500;600;700;800;900'},
  {n:'Raleway',cat:'Sans',w:'300;400;500;600;700;800;900'},{n:'Nunito',cat:'Sans',w:'300;400;600;700;800;900'},
  {n:'Nunito Sans',cat:'Sans',w:'300;400;600;700;800;900'},{n:'Ubuntu',cat:'Sans',w:'300;400;500;700'},
  {n:'Work Sans',cat:'Sans',w:'300;400;500;600;700;800;900'},{n:'DM Sans',cat:'Sans',w:'400;500;700'},
  {n:'Manrope',cat:'Sans',w:'200;300;400;500;600;700;800'},{n:'Karla',cat:'Sans',w:'200;300;400;500;600;700;800'},
  {n:'Barlow',cat:'Sans',w:'100;200;300;400;500;600;700;800;900'},{n:'Mulish',cat:'Sans',w:'200;300;400;500;600;700;800;900'},
  {n:'Heebo',cat:'Sans',w:'100;200;300;400;500;600;700;800;900'},{n:'Rubik',cat:'Sans',w:'300;400;500;600;700;800;900'},
  {n:'Oxygen',cat:'Sans',w:'300;400;700'},{n:'Titillium Web',cat:'Sans',w:'200;300;400;600;700;900'},
  {n:'Quicksand',cat:'Sans',w:'300;400;500;600;700'},{n:'Josefin Sans',cat:'Sans',w:'100;200;300;400;500;600;700'},
  {n:'Cabin',cat:'Sans',w:'400;500;600;700'},{n:'Dosis',cat:'Sans',w:'200;300;400;500;600;700;800'},
  {n:'Barlow Condensed',cat:'Sans',w:'100;200;300;400;500;600;700;800;900'},
  {n:'Source Sans Pro',cat:'Sans',w:'200;300;400;600;700;900'},{n:'PT Sans',cat:'Sans',w:'400;700'},
  {n:'Fira Sans',cat:'Sans',w:'100;200;300;400;500;600;700;800;900'},{n:'Assistant',cat:'Sans',w:'200;300;400;500;600;700;800'},
  {n:'Cairo',cat:'Sans',w:'200;300;400;500;600;700;800;900'},{n:'IBM Plex Sans',cat:'Sans',w:'100;200;300;400;500;600;700'},
  {n:'Roboto Condensed',cat:'Sans',w:'300;400;700'},{n:'Roboto Mono',cat:'Mono',w:'100;200;300;400;500;600;700'},
  {n:'JetBrains Mono',cat:'Mono',w:'100;200;300;400;500;600;700;800'},{n:'Fira Code',cat:'Mono',w:'300;400;500;600;700'},
  {n:'Source Code Pro',cat:'Mono',w:'200;300;400;500;600;700;900'},{n:'IBM Plex Mono',cat:'Mono',w:'100;200;300;400;500;600;700'},
  {n:'Inconsolata',cat:'Mono',w:'200;300;400;500;600;700;800;900'},{n:'Space Mono',cat:'Mono',w:'400;700'},
  {n:'Ubuntu Mono',cat:'Mono',w:'400;700'},{n:'Courier Prime',cat:'Mono',w:'400;700'},
  {n:'Anonymous Pro',cat:'Mono',w:'400;700'},{n:'Cousine',cat:'Mono',w:'400;700'},
  {n:'Cutive Mono',cat:'Mono',w:'400'},{n:'Major Mono Display',cat:'Mono',w:'400'},
  {n:'Nanum Gothic Coding',cat:'Mono',w:'400;700'},{n:'Share Tech Mono',cat:'Mono',w:'400'},
  {n:'Overpass Mono',cat:'Mono',w:'300;400;600;700'},{n:'VT323',cat:'Mono',w:'400'},
  {n:'Azeret Mono',cat:'Mono',w:'100;200;300;400;500;600;700;800;900'},
  {n:'Playfair Display',cat:'Serif',w:'400;500;600;700;800;900'},{n:'Merriweather',cat:'Serif',w:'300;400;700;900'},
  {n:'Lora',cat:'Serif',w:'400;500;600;700'},{n:'Crimson Text',cat:'Serif',w:'400;600;700'},
  {n:'EB Garamond',cat:'Serif',w:'400;500;600;700;800'},{n:'Cormorant',cat:'Serif',w:'300;400;500;600;700'},
  {n:'Cormorant Garamond',cat:'Serif',w:'300;400;500;600;700'},{n:'Bitter',cat:'Serif',w:'100;200;300;400;500;600;700;800;900'},
  {n:'Libre Baskerville',cat:'Serif',w:'400;700'},{n:'Noto Serif',cat:'Serif',w:'100;200;300;400;500;600;700;800;900'},
  {n:'Source Serif Pro',cat:'Serif',w:'200;300;400;600;700;900'},{n:'PT Serif',cat:'Serif',w:'400;700'},
  {n:'Zilla Slab',cat:'Serif',w:'300;400;500;600;700'},{n:'Arvo',cat:'Serif',w:'400;700'},
  {n:'Rokkitt',cat:'Serif',w:'100;200;300;400;500;600;700;800;900'},{n:'Alegreya',cat:'Serif',w:'400;500;600;700;800;900'},
  {n:'Domine',cat:'Serif',w:'400;500;600;700'},{n:'Marcellus',cat:'Serif',w:'400'},
  {n:'Cinzel',cat:'Serif',w:'400;500;600;700;800;900'},{n:'Bodoni Moda',cat:'Serif',w:'400;500;600;700;800;900'},
  {n:'DM Serif Display',cat:'Serif',w:'400'},{n:'DM Serif Text',cat:'Serif',w:'400'},
  {n:'Fraunces',cat:'Serif',w:'100;200;300;400;500;600;700;800;900'},
  {n:'Spectral',cat:'Serif',w:'200;300;400;500;600;700;800'},{n:'Newsreader',cat:'Serif',w:'200;300;400;500;600;700;800'},
  {n:'Space Grotesk',cat:'Display',w:'300;400;500;600;700'},{n:'Syne',cat:'Display',w:'400;500;600;700;800'},
  {n:'Outfit',cat:'Display',w:'100;200;300;400;500;600;700;800;900'},{n:'Archivo',cat:'Display',w:'100;200;300;400;500;600;700;800;900'},
  {n:'Bebas Neue',cat:'Display',w:'400'},{n:'Anton',cat:'Display',w:'400'},
  {n:'Archivo Black',cat:'Display',w:'400'},{n:'Oswald',cat:'Display',w:'200;300;400;500;600;700'},
  {n:'Fredoka',cat:'Display',w:'300;400;500;600;700'},{n:'Righteous',cat:'Display',w:'400'},
  {n:'Bungee',cat:'Display',w:'400'},{n:'Abril Fatface',cat:'Display',w:'400'},
  {n:'Russo One',cat:'Display',w:'400'},{n:'Kalam',cat:'Display',w:'300;400;700'},
  {n:'Pacifico',cat:'Display',w:'400'},{n:'Lobster',cat:'Display',w:'400'},
  {n:'Dancing Script',cat:'Script',w:'400;500;600;700'},{n:'Great Vibes',cat:'Script',w:'400'},
  {n:'Satisfy',cat:'Script',w:'400'},{n:'Sacramento',cat:'Script',w:'400'},
  {n:'Allura',cat:'Script',w:'400'},{n:'Parisienne',cat:'Script',w:'400'},
  {n:'Courgette',cat:'Script',w:'400'},{n:'Caveat',cat:'Script',w:'400;500;600;700'},
  {n:'Indie Flower',cat:'Script',w:'400'},{n:'Shadows Into Light',cat:'Script',w:'400'},
  {n:'Amatic SC',cat:'Script',w:'400;700'},{n:'Permanent Marker',cat:'Script',w:'400'},
  {n:'Rock Salt',cat:'Script',w:'400'},{n:'Gloria Hallelujah',cat:'Script',w:'400'},
  {n:'Cookie',cat:'Script',w:'400'},{n:'Kaushan Script',cat:'Script',w:'400'},
  {n:'Yellowtail',cat:'Script',w:'400'},{n:'Berkshire Swash',cat:'Script',w:'400'},
  {n:'Italianno',cat:'Script',w:'400'},{n:'Tangerine',cat:'Script',w:'400;700'},
  {n:'Marck Script',cat:'Script',w:'400'},{n:'Homemade Apple',cat:'Script',w:'400'},
  {n:'Playball',cat:'Script',w:'400'},{n:'Comforter',cat:'Script',w:'400'},
  {n:'Rampart One',cat:'Display',w:'400'},{n:'Rubik Mono One',cat:'Display',w:'400'},
  {n:'Bungee Inline',cat:'Display',w:'400'},{n:'Monoton',cat:'Display',w:'400'},
  {n:'Orbitron',cat:'Display',w:'400;500;600;700;800;900'},{n:'Audiowide',cat:'Display',w:'400'},
  {n:'Black Ops One',cat:'Display',w:'400'},{n:'Staatliches',cat:'Display',w:'400'},
  {n:'Alfa Slab One',cat:'Display',w:'400'},{n:'Bowlby One SC',cat:'Display',w:'400'},
  {n:'Passion One',cat:'Display',w:'400;700;900'},{n:'Chivo',cat:'Sans',w:'100;200;300;400;500;600;700;800;900'},
  {n:'Sora',cat:'Sans',w:'100;200;300;400;500;600;700;800'},{n:'Epilogue',cat:'Sans',w:'100;200;300;400;500;600;700;800;900'},
  {n:'Plus Jakarta Sans',cat:'Sans',w:'200;300;400;500;600;700;800'},{n:'Figtree',cat:'Sans',w:'300;400;500;600;700;800;900'},
  {n:'Onest',cat:'Sans',w:'100;200;300;400;500;600;700;800;900'},{n:'Bricolage Grotesque',cat:'Sans',w:'200;300;400;500;600;700;800'},
  {n:'Schibsted Grotesk',cat:'Sans',w:'400;500;600;700;800;900'},{n:'Sofia Sans',cat:'Sans',w:'100;200;300;400;500;600;700;800;900'},
  {n:'Unbounded',cat:'Display',w:'200;300;400;500;600;700;800;900'},{n:'Instrument Sans',cat:'Sans',w:'400;500;600;700'},
  {n:'Instrument Serif',cat:'Serif',w:'400'},{n:'Red Hat Display',cat:'Sans',w:'300;400;500;600;700;800;900'},
  {n:'Red Hat Text',cat:'Sans',w:'300;400;500;600;700'},{n:'Alexandria',cat:'Sans',w:'100;200;300;400;500;600;700;800;900'},
  {n:'Tilt Neon',cat:'Display',w:'400'},{n:'Tilt Prism',cat:'Display',w:'400'},
  {n:'Bungee Spice',cat:'Display',w:'400'},{n:'Silkscreen',cat:'Display',w:'400;700'},
  {n:'Handjet',cat:'Display',w:'100;200;300;400;500;600;700;800;900'},{n:'Pixelify Sans',cat:'Display',w:'400;500;600;700'},
  {n:'Press Start 2P',cat:'Display',w:'400'},{n:'Kode Mono',cat:'Mono',w:'400;500;600;700'},
  {n:'Martian Mono',cat:'Mono',w:'100;200;300;400;500;600;700;800'},{n:'Geist Mono',cat:'Mono',w:'100;200;300;400;500;600;700;800;900'},
  {n:'Geist',cat:'Sans',w:'100;200;300;400;500;600;700;800;900'},{n:'Rethink Sans',cat:'Sans',w:'400;500;600;700;800'},
  {n:'Wix Madefor Display',cat:'Sans',w:'400;500;600;700;800'},{n:'Wix Madefor Text',cat:'Sans',w:'400;500;600;700;800'},
  {n:'Roboto Slab',cat:'Serif',w:'100;200;300;400;500;600;700;800;900'},{n:'Rubik Burned',cat:'Display',w:'400'},
  {n:'Rubik Glitch',cat:'Display',w:'400'},{n:'Rubik Puddles',cat:'Display',w:'400'},
  {n:'Rubik Spray Paint',cat:'Display',w:'400'},{n:'Rubik Vinyl',cat:'Display',w:'400'},
  {n:'Nabla',cat:'Display',w:'400'},{n:'Foldit',cat:'Display',w:'100;200;300;400;500;600;700;800;900'},
  {n:'Sixtyfour',cat:'Display',w:'400'},{n:'Workbench',cat:'Display',w:'400'},
  {n:'Protest Revolution',cat:'Display',w:'400'},{n:'Protest Riot',cat:'Display',w:'400'},
  {n:'Bricolage Grotesque 4',cat:'Sans',w:'200;300;400;500;600;700;800'},
  {n:'JetBrains Mono NL',cat:'Mono',w:'100;200;300;400;500;600;700;800'},
  {n:'DM Mono',cat:'Mono',w:'300;400;500'},{n:'Fragment Mono',cat:'Mono',w:'400'},
  {n:'Reddit Sans',cat:'Sans',w:'200;300;400;500;600;700;800;900'},{n:'Reddit Mono',cat:'Mono',w:'200;300;400;500;600;700;800;900'},
  {n:'Anta',cat:'Sans',w:'400'},{n:'Sometype Mono',cat:'Mono',w:'400;500;600;700'},
  {n:'Spline Sans Mono',cat:'Mono',w:'300;400;500;600;700'},{n:'Geologica',cat:'Sans',w:'100;200;300;400;500;600;700;800;900'},
  {n:'Familjen Grotesk',cat:'Sans',w:'400;500;600;700'},{n:'Darker Grotesque',cat:'Sans',w:'300;400;500;600;700;800;900'},
  {n:'Chivo Mono',cat:'Mono',w:'100;200;300;400;500;600;700;800;900'},{n:'Bricolage Grotesque 5',cat:'Display',w:'200;300;400;500;600;700;800'}
];
FONTS = FONTS.slice(0,200);
while(FONTS.length<200){
  FONTS.push({n:'Fallback '+FONTS.length,cat:'Sans',w:'400;700'});
}

/* =========================================================
   HELPERS
   ========================================================= */
function $(i){return document.getElementById(i);}
function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function attr(s){return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function fmtCss(css){
  if(!css) return '';
  css=css.replace(/\s+/g,' ').trim();
  var out='',indent=0,buf='';
  for(var i=0;i<css.length;i++){
    var c=css[i];
    if(c==='{'){out+=buf.trim()+' {\n';indent++;out+='  '.repeat(indent);buf='';}
    else if(c==='}'){if(buf.trim())out+=buf.trim()+';\n';indent--;out+='  '.repeat(Math.max(0,indent))+'}\n';if(indent>0)out+='  '.repeat(indent);buf='';}
    else if(c===';'){out+=buf.trim()+';\n';if(indent>0)out+='  '.repeat(indent);buf='';}
    else{buf+=c;}
  }
  if(buf.trim())out+=buf.trim();
  return out.replace(/\n{3,}/g,'\n\n').trim();
}
function fmtHtml(h){if(!h) return '';return h.replace(/></g,'>\n<').trim();}
function hexToRgb(hex){var r=parseInt(hex.slice(1,3),16);var g=parseInt(hex.slice(3,5),16);var b=parseInt(hex.slice(5,7),16);return 'rgb('+r+', '+g+', '+b+')';}

/* =========================================================
   ROUTER — Clean URLs
   ========================================================= */
var PAGE_TO_PATH = {
  'home':'/', 'projects':'/projects', 'portfolio':'/portfolio',
  'navbars':'/navbars', 'colors':'/colors', 'rgb':'/rgb',
  'contacts':'/contacts', 'fonts':'/fonts', 'profile':'/profile'
};
var FILTER_TO_PATH = {
  'All':'/projects', 'Loading':'/loading', 'Animation':'/animation',
  'Login':'/login', 'Component':'/component', 'Buttons':'/buttons'
};
var PATH_TO_FILTER = {
  'projects':'All', 'loading':'Loading', 'animation':'Animation',
  'login':'Login', 'component':'Component', 'buttons':'Buttons'
};
var APP_RENDERED = false;

function navigate(path, replace) {
  if (location.pathname === path) return;
  try {
    if (replace) history.replaceState({path:path}, '', path);
    else history.pushState({path:path}, '', path);
  } catch(e) {}
}

function show(id){
  document.querySelectorAll('.v').forEach(function(v){v.classList.remove('on');});
  $(id).classList.add('on');
  window.scrollTo(0,0);
  if (id === 'v-land') navigate('/', true);
  else if (id === 'v-auth') navigate('/auth', true);
}

function page(name, path){
  document.querySelectorAll('.page').forEach(function(p){p.classList.remove('on');});
  var el=$('page-'+name);if(el)el.classList.add('on');
  window.scrollTo(0,0);
  document.querySelectorAll('.drawer-item').forEach(function(it){
    var match = false;
    if (name === 'projects') {
      match = (it.dataset.page === 'projects' && it.dataset.cat === activeFilter);
    } else {
      match = (it.dataset.page === name && !it.dataset.cat);
    }
    it.classList.toggle('on', match);
  });
  if (path === false) return;
  navigate(path || PAGE_TO_PATH[name] || '/');
}

function ensureAppRendered() {
  if (APP_RENDERED) return;
  APP_RENDERED = true;
  renderStatsAnimated();
  renderFilters();
  renderGrid();
  renderPfGrid();
  renderNavGrid();
  renderColors();
  renderRGB();
  renderContactGrid();
  renderFonts();
  setTimeout(function(){
    document.querySelectorAll('.dev-link-new').forEach(function(el,i){
      setTimeout(function(){el.classList.add('in');},i*150);
    });
  },300);
}

function resolveInitialRoute() {
  var path = location.pathname.replace(/^\/+|\/+$/g, '');
  var u = getCurrent();
  if (u && (path === 'auth' || path === 'signin' || path === 'signup')) {
    navigate('/', true); path = '';
  }
  if (!u) { show('v-land'); return; }
  updateUserUI(u);
  show('v-app');
  ensureAppRendered();
  if (PATH_TO_FILTER[path]) {
    activeFilter = PATH_TO_FILTER[path];
    renderFilters(); renderGrid();
    var t = (activeFilter === 'All')
      ? '<span>All</span> Components'
      : '<span>' + activeFilter + '</span> Components';
    $('projTitle').innerHTML = t;
    $('projSub').textContent = (activeFilter === 'All')
      ? 'Browse the complete collection'
      : 'Handpicked ' + activeFilter.toLowerCase() + ' snippets';
    page('projects', false);
  } else if (['portfolio','navbars','colors','rgb','contacts','fonts','profile'].indexOf(path) !== -1) {
    page(path, false);
  } else {
    page('home', false);
    if (path !== '') navigate('/', true);
  }
}
window.addEventListener('popstate', function(){ resolveInitialRoute(); });

/* =========================================================
   HIGHLIGHT
   ========================================================= */
var HR={
  html:[['cmt',/<!--[\s\S]*?-->/],['tag',/<\/?[a-zA-Z][\w-]*/],['str',/"[^"]*"|'[^']*'/],['attr',/[a-zA-Z-]+(?==)/],['punc',/\/?>/]],
  css:[['cmt',/\/\*[\s\S]*?\*\//],['str',/"[^"]*"|'[^']*'/],['at',/@[\w-]+/],['num',/#[0-9a-fA-F]{3,8}\b/],['prop',/[a-zA-Z-]+(?=\s*:)/],['num',/\b\d+(?:\.\d+)?(?:px|em|rem|%|s|ms|deg|vh|vw|fr)?\b/],['punc',/[{}:;,()]/]],
  js:[['cmt',/\/\/[^\n]*|\/\*[\s\S]*?\*\//],['str',/"[^"]*"|'[^']*'/],['kw',/\b(?:var|let|const|function|return|if|else|for|while|new|this|true|false|null|typeof|document|window|setTimeout|addEventListener|querySelector)\b/],['num',/\b\d+(?:\.\d+)?\b/],['punc',/[{}()\[\];,.]/]]
};
function hi(code,lang){
  var rules=HR[lang];if(!rules||!code) return esc(code||'');
  var parts=[];for(var r=0;r<rules.length;r++)parts.push('('+rules[r][1].source+')');
  var re=new RegExp(parts.join('|'),'g'),out='',last=0,m;
  while((m=re.exec(code))!==null){
    out+=esc(code.slice(last,m.index));
    for(var i=0;i<rules.length;i++){if(m[i+1]!==undefined){out+='<span class="'+rules[i][0]+'-c">'+esc(m[i+1])+'</span>';break;}}
    last=m.index+m[0].length;if(m[0].length===0)re.lastIndex++;
  }
  out+=esc(code.slice(last));return out;
}

/* =========================================================
   TOAST
   ========================================================= */
var TT=null;
function toast(ic,t,m){
  $('toastIc').innerHTML=ic;
  $('toastT').textContent=t;$('toastM').textContent=m;
  $('toast').classList.add('on');
  clearTimeout(TT);TT=setTimeout(function(){$('toast').classList.remove('on');},3200);
}

/* =========================================================
   THEME
   ========================================================= */
function toggleTheme(){
  document.body.classList.toggle('light');
  localStorage.setItem('dg_theme',document.body.classList.contains('light')?'light':'dark');
  var ic=document.querySelector('#themeBtn i');
  if(ic) ic.className=document.body.classList.contains('light')?'fa-solid fa-sun':'fa-solid fa-moon';
}
if(localStorage.getItem('dg_theme')==='light') document.body.classList.add('light');
$('themeBtn').addEventListener('click',toggleTheme);
$('landThemeBtn').addEventListener('click',toggleTheme);

/* =========================================================
   AUTH
   ========================================================= */
function getUsers(){try{return JSON.parse(localStorage.getItem('dg_users')||'[]');}catch(e){return[];}}
function saveUsers(u){localStorage.setItem('dg_users',JSON.stringify(u));}
function getCurrent(){try{return JSON.parse(localStorage.getItem('dg_current')||'null');}catch(e){return null;}}
function setCurrent(u){if(u===null)localStorage.removeItem('dg_current');else localStorage.setItem('dg_current',JSON.stringify(u));}
function err(m){var el=$('authErr');el.textContent=m;el.classList.add('on');setTimeout(function(){el.classList.remove('on');},4500);}

document.querySelectorAll('.auth-tab').forEach(function(t){
  t.addEventListener('click',function(){
    document.querySelectorAll('.auth-tab').forEach(function(x){x.classList.remove('on');});
    t.classList.add('on');
    document.querySelectorAll('.auth-form').forEach(function(f){f.classList.remove('on');});
    $(t.dataset.tab==='in'?'formIn':'formUp').classList.add('on');
    $('authErr').classList.remove('on');
  });
});
document.querySelectorAll('[data-goto]').forEach(function(b){
  b.addEventListener('click',function(){
    var t=b.dataset.goto;
    document.querySelectorAll('.auth-tab').forEach(function(x){x.classList.toggle('on',x.dataset.tab===t);});
    document.querySelectorAll('.auth-form').forEach(function(f){f.classList.remove('on');});
    $(t==='in'?'formIn':'formUp').classList.add('on');
  });
});
$('vchk').addEventListener('click',function(){this.classList.toggle('on');});

$('formUp').addEventListener('submit',function(e){
  e.preventDefault();
  var name=$('upName').value.trim(),email=$('upEmail').value.trim().toLowerCase(),
      phone=$('upPhone').value.trim(),user=$('upUser').value.trim().toLowerCase(),
      pass=$('upPass').value,pass2=$('upPass2').value,
      verified=$('vchk').classList.contains('on');
  if(!name||!email||!phone||!user||!pass||!pass2) return err('Please fill all fields.');
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return err('Please enter a valid email.');
  if(!email.endsWith('@gmail.com')) return err('Only @gmail.com addresses are allowed.');
  if(!/^[0-9+\s-]{9,15}$/.test(phone)) return err('Enter a valid phone number.');
  if(user.length<3) return err('Username must be at least 3 characters.');
  if(!/^[a-z0-9_.]+$/.test(user)) return err('Username: letters, numbers, _ .');
  if(pass.length<6) return err('Password must be at least 6 characters.');
  if(pass!==pass2) return err('Passwords do not match.');
  if(!verified) return err('Please verify that you are not a robot.');
  var users=getUsers();
  if(users.some(function(u){return u.email===email;})) return err('This email is already registered.');
  if(users.some(function(u){return u.username===user;})) return err('This username is already taken.');
  var btn=$('btnUp');btn.disabled=true;
  var stages=['<span class="sp-large"></span> Creating your account...','<span class="sp-large"></span> Securing password...','<span class="sp-large"></span> Generating profile...','<span class="sp-large"></span> Sending welcome email...','<span class="sp-large"></span> Almost done...'];
  btn.classList.add('loading');
  var si=0;btn.innerHTML=stages[0];
  var st=setInterval(function(){si++;if(si<stages.length)btn.innerHTML=stages[si];},900);
  setTimeout(function(){
    clearInterval(st);
    users.push({name:name,email:email,phone:phone,username:user,password:pass,avatar:'',created:Date.now()});
    saveUsers(users);
    $('formUp').reset();$('vchk').classList.remove('on');
    toast('<i class="fa-solid fa-envelope"></i>','Welcome!','Confirmation email sent to '+email);
    btn.disabled=false;btn.classList.remove('loading');btn.textContent='Create Account';
    setTimeout(function(){
      document.querySelectorAll('.auth-tab').forEach(function(x){x.classList.toggle('on',x.dataset.tab==='in');});
      document.querySelectorAll('.auth-form').forEach(function(f){f.classList.remove('on');});
      $('formIn').classList.add('on');$('inId').value=email;
    },700);
  },4600);
});

$('formIn').addEventListener('submit',function(e){
  e.preventDefault();
  var id=$('inId').value.trim().toLowerCase(),pass=$('inPass').value;
  if(!id||!pass) return err('Please enter your credentials.');
  var users=getUsers();
  var found=users.find(function(u){return(u.email===id||u.username===id)&&u.password===pass;});
  if(!found) return err('Invalid credentials. Please try again.');
  var btn=$('btnIn');btn.disabled=true;
  var stages=['<span class="sp-large"></span> Verifying credentials...','<span class="sp-large"></span> Loading your library...','<span class="sp-large"></span> Almost ready...'];
  btn.classList.add('loading');
  var si=0;btn.innerHTML=stages[0];
  var st=setInterval(function(){si++;if(si<stages.length)btn.innerHTML=stages[si];},800);
  setTimeout(function(){
    clearInterval(st);
    found.lastLogin=Date.now();
    var idx=users.findIndex(function(u){return u.email===found.email;});
    if(idx!==-1){users[idx]=found;saveUsers(users);}
    setCurrent(found);
    toast('<i class="fa-solid fa-unlock"></i>','Welcome Back','Signed in as '+found.name);
    btn.disabled=false;btn.classList.remove('loading');btn.textContent='Sign In';
    $('formIn').reset();
    enterApp();
  },3200);
});

$('authBack').addEventListener('click',function(){show('v-land');});
$('getStartBtn').addEventListener('click',function(e){e.preventDefault();show('v-auth');});

/* =========================================================
   ENTER APP
   ========================================================= */
function enterApp(){
  var u=getCurrent();if(!u)return;
  updateUserUI(u);
  show('v-app');
  ensureAppRendered();
  page('home', '/');
}

function updateUserUI(u){
  var initial=(u.name||'U').charAt(0).toUpperCase();
  var dav=$('drawerAv');
  if(u.avatar)dav.innerHTML='<img src="'+u.avatar+'" alt="">';
  else dav.textContent=initial;
  $('drawerName').textContent=u.name;
  $('drawerEmail').textContent=u.email;
  $('profName').textContent=u.name;
  $('profUser').textContent='@'+u.username;
  $('profEmail').textContent=u.email;
  var pimg=$('profImg'),pl=$('profLetter');
  if(u.avatar){pimg.src=u.avatar;pimg.style.display='block';pl.style.display='none';}
  else{pimg.style.display='none';pl.style.display='block';pl.textContent=initial;}
  $('pmName').value=u.name;$('pmUser').value=u.username;$('pmPhone').value=u.phone||'';
  var created=u.created||u.lastLogin||Date.now();
  var days=Math.max(1,Math.floor((Date.now()-created)/(1000*60*60*24)));
  var d=new Date(created);
  $('pstatDays').textContent=days;
  $('pstatJoined').textContent=d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear();
  $('pstatSnippets').textContent=D.length;
}

/* =========================================================
   DRAWER
   ========================================================= */
var MENU=[
  {key:'home',label:'Home',icon:'home',page:'home'},
  {key:'all',label:'All Components',icon:'layer-group',page:'projects',cat:'All'},
  {key:'loading',label:'Loading',icon:'spinner',page:'projects',cat:'Loading'},
  {key:'anim',label:'Animation',icon:'star',page:'projects',cat:'Animation'},
  {key:'login',label:'Login',icon:'lock',page:'projects',cat:'Login'},
  {key:'comp',label:'Component',icon:'cube',page:'projects',cat:'Component'},
  {key:'btn',label:'Buttons',icon:'hand-pointer',page:'projects',cat:'Buttons'},
  {key:'pf',label:'Portfolio',icon:'briefcase',page:'portfolio'},
  {key:'nb',label:'Navigation Bars',icon:'bars',page:'navbars'},
  {key:'col',label:'CSS Colors',icon:'palette',page:'colors'},
  {key:'rgb',label:'RGB Transitions',icon:'rainbow',page:'rgb'},
  {key:'cb',label:'Contact Boxes',icon:'envelope',page:'contacts'},
  {key:'fn',label:'Google Fonts',icon:'font',page:'fonts'},
  {key:'profile',label:'Profile',icon:'user',page:'profile'}
];

function renderDrawer(){
  var html='<div class="drawer-label">Navigate</div>';
  var counts={All:0};
  D.forEach(function(s){if(s.cat!=='Portfolio')counts.All++;counts[s.cat]=(counts[s.cat]||0)+1;});
  MENU.forEach(function(it){
    var cnt='';
    if(it.cat)cnt='<span class="cnt">'+(counts[it.cat]||0)+'</span>';
    else if(it.page==='portfolio')cnt='<span class="cnt">'+PORTFOLIO.length+'</span>';
    else if(it.page==='navbars')cnt='<span class="cnt">'+NAVBARS_DATA.length+'</span>';
    else if(it.page==='colors'){
      var total=0;Object.keys(COLORS).forEach(function(k){total+=COLORS[k].length;});
      cnt='<span class="cnt">'+total+'</span>';
    }
    else if(it.page==='rgb')cnt='<span class="cnt">'+RGB.length+'</span>';
    else if(it.page==='contacts')cnt='<span class="cnt">'+CONTACTS.length+'</span>';
    else if(it.page==='fonts')cnt='<span class="cnt">'+FONTS.length+'</span>';
    html+='<div class="drawer-item" data-key="'+it.key+'" data-page="'+it.page+'" data-cat="'+(it.cat||'')+'">'+
      '<div class="drawer-item-ic"><i class="fa-solid fa-'+it.icon+'"></i></div>'+it.label+cnt+'</div>';
  });
  $('drawerNav').innerHTML=html;
  document.querySelectorAll('.drawer-item').forEach(function(el){
    el.addEventListener('click',function(){
      var pg=el.dataset.page,cat=el.dataset.cat;
      if(pg==='projects'){
        activeFilter=cat||'All';
        renderFilters();renderGrid();
        var t=(activeFilter==='All')?'<span>All</span> Components':'<span>'+activeFilter+'</span> Components';
        $('projTitle').innerHTML=t;
        $('projSub').textContent=(activeFilter==='All')?'Browse the complete collection':'Handpicked '+activeFilter.toLowerCase()+' snippets';
        page(pg, FILTER_TO_PATH[activeFilter] || '/projects');
      } else {
        page(pg);
      }
      closeDrawer();
    });
  });
}
function openDrawer(){$('drawer').classList.add('on');$('overlay').classList.add('on');}
function closeDrawer(){$('drawer').classList.remove('on');$('overlay').classList.remove('on');}
$('burger').addEventListener('click',openDrawer);
$('drawerX').addEventListener('click',closeDrawer);
$('overlay').addEventListener('click',closeDrawer);
$('drawerLogout').addEventListener('click',function(){setCurrent(null);closeDrawer();show('v-land');toast('<i class="fa-solid fa-hand-wave"></i>','Signed Out','See you again soon!');});

/* =========================================================
   STATS ANIMATED
   ========================================================= */
function renderStatsAnimated(){
  var counts={Loading:0,Animation:0,Login:0,Component:0,Buttons:0};
  D.forEach(function(s){if(counts[s.cat]!==undefined)counts[s.cat]++;});
  var total=D.filter(function(s){return s.cat!=='Portfolio';}).length;
  var totalResources=NAVBARS_DATA.length+CONTACTS.length+FONTS.length+RGB.length;
  var items=[
    {n:total,l:'Snippets'},
    {n:counts.Loading+counts.Animation,l:'Loaders+Anim'},
    {n:counts.Login+counts.Component+counts.Buttons,l:'Components'},
    {n:totalResources+PORTFOLIO.length,l:'Resources'}
  ];
  var html='';
  items.forEach(function(it,i){html+='<div class="stat"><div class="stat-n" data-target="'+it.n+'" id="statN'+i+'">1</div><div class="stat-l">'+it.l+'</div></div>';});
  $('statsGrid').innerHTML=html;
  document.querySelectorAll('[data-target]').forEach(function(el){
    var target=parseInt(el.dataset.target,10);
    if(!target||target<1){el.textContent='0';return;}
    var dur=1400,start=null;el.textContent='1';
    function step(ts){
      if(!start)start=ts;
      var p=Math.min((ts-start)/dur,1);var eased=1-Math.pow(1-p,3);
      var val=Math.max(1,Math.floor(1+eased*(target-1)));
      el.textContent=val;
      if(p<1)requestAnimationFrame(step);else el.textContent=target;
    }
    requestAnimationFrame(step);
  });
}

/* =========================================================
   FILTERS + GRID
   ========================================================= */
var activeFilter='All';
function renderFilters(){
  var cats=['All','Loading','Animation','Login','Component','Buttons'];
  var counts={All:0};
  D.forEach(function(s){if(s.cat!=='Portfolio')counts.All++;counts[s.cat]=(counts[s.cat]||0)+1;});
  var html='';
  cats.forEach(function(c){html+='<button class="filter'+(c===activeFilter?' on':'')+'" data-c="'+c+'" type="button">'+c+' ('+(counts[c]||0)+')</button>';});
  $('filters').innerHTML=html;
  document.querySelectorAll('.filter').forEach(function(b){
    b.addEventListener('click',function(){
      activeFilter=b.dataset.c;renderFilters();renderGrid();
      var t=(activeFilter==='All')?'<span>All</span> Components':'<span>'+activeFilter+'</span> Components';
      $('projTitle').innerHTML=t;
      $('projSub').textContent=(activeFilter==='All')?'Browse the complete collection':'Handpicked '+activeFilter.toLowerCase()+' snippets';
      navigate(FILTER_TO_PATH[activeFilter] || '/projects');
      document.querySelectorAll('.drawer-item').forEach(function(it){
        var match = (it.dataset.page === 'projects' && it.dataset.cat === activeFilter);
        it.classList.toggle('on', match);
      });
    });
  });
}
function renderGrid(){
  var q=($('search').value||'').toLowerCase().trim();
  var html='',shown=0;
  D.forEach(function(s,i){
    if(s.cat==='Portfolio')return;
    if(activeFilter!=='All'&&s.cat!==activeFilter)return;
    if(q&&s.title.toLowerCase().indexOf(q)===-1&&s.cat.toLowerCase().indexOf(q)===-1)return;
    shown++;
    html+='<div class="card" data-i="'+i+'"><div class="card-prev"><iframe loading="lazy" sandbox="allow-scripts" srcdoc="'+attr(doc(s))+'"></iframe></div><div class="card-foot"><div><div class="card-name">'+esc(s.title)+'</div><div class="card-cat">'+s.cat+'</div></div><button class="card-btn" type="button">Code</button></div></div>';
  });
  if(!shown)html='<div class="empty">No components found 🕵️</div>';
  $('grid').innerHTML=html;
  document.querySelectorAll('#grid .card').forEach(function(c){c.addEventListener('click',function(){openModal(parseInt(c.dataset.i,10));});});
}
function renderPfGrid(){
  var startIdx=D.length-PORTFOLIO.length;
  var html='';
  PORTFOLIO.forEach(function(p,i){
    var idx=startIdx+i;
    html+='<div class="card" data-i="'+idx+'"><div class="card-prev"><iframe loading="lazy" sandbox="allow-scripts" srcdoc="'+attr(doc(D[idx]))+'"></iframe></div><div class="card-foot"><div><div class="card-name">'+esc(p.name)+'</div><div class="card-cat">Portfolio</div></div><a href="https://t.me/Dg_Ui_Project" target="_blank" class="card-btn card-btn-tg"><i class="fa-brands fa-telegram"></i>Get Code</a></div></div>';
  });
  $('pfGrid').innerHTML=html;
  document.querySelectorAll('#pfGrid .card').forEach(function(c){c.addEventListener('click',function(){openModal(parseInt(c.dataset.i,10));});});
}
function renderNavGrid(){
  var html='';
  NAVBARS_DATA.forEach(function(n,i){
    html+='<div class="card" data-nav="'+i+'"><div class="card-prev"><iframe loading="lazy" sandbox="allow-scripts" srcdoc="'+attr(doc({html:n.html,css:n.css,js:''}))+'"></iframe></div><div class="card-foot"><div><div class="card-name">'+esc(n.name)+'</div><div class="card-cat">Navbar</div></div><button class="card-btn" type="button">Code</button></div></div>';
  });
  $('navGrid').innerHTML=html;
  document.querySelectorAll('#navGrid .card').forEach(function(c){
    c.addEventListener('click',function(){
      var n=NAVBARS_DATA[parseInt(c.dataset.nav,10)];
      openCustomModal(n.name,'Navbar',n.html,n.css,'');
    });
  });
}
function renderColors(){
  var cats=['Reds','Oranges','Yellows','Greens','Cyans','Blues','Purples','Pinks','Browns','Grays'];
  var filterHtml='<button class="filter on" data-c="All" type="button">All Colors</button>';
  cats.forEach(function(c){filterHtml+='<button class="filter" data-c="'+c+'" type="button">'+c+'</button>';});
  $('colorFilters').innerHTML=filterHtml;
  function draw(cat){
    var html='';
    var source = cat==='All' ? null : [cat];
    var keys = source || Object.keys(COLORS);
    keys.forEach(function(k){
      COLORS[k].forEach(function(hex){
        var rgb=hexToRgb(hex);
        var name=k.replace(/s$/,'')+' '+hex.slice(1,3).toUpperCase();
        html+='<div class="color-card" data-hex="'+hex+'"><div class="color-swatch" style="background:'+hex+'"></div><div class="color-info"><div class="color-name">'+name+'</div><div class="color-hex">'+hex.toUpperCase()+'</div><div class="color-rgb">'+rgb+'</div></div></div>';
      });
    });
    $('colorGrid').innerHTML=html;
    document.querySelectorAll('#colorGrid .color-card').forEach(function(el){
      el.addEventListener('click',function(){
        var hx=el.dataset.hex;
        var rgb=hexToRgb(hx);
        var text=hx.toUpperCase()+'\n'+rgb;
        if(navigator.clipboard) navigator.clipboard.writeText(text);
        else {var ta=document.createElement('textarea');ta.value=text;document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);}
        toast('<i class="fa-solid fa-copy"></i>','Copied!',hx.toUpperCase()+' · '+rgb);
      });
    });
  }
  draw('All');
  document.querySelectorAll('#colorFilters .filter').forEach(function(b){
    b.addEventListener('click',function(){
      document.querySelectorAll('#colorFilters .filter').forEach(function(x){x.classList.remove('on');});
      b.classList.add('on');
      draw(b.dataset.c);
    });
  });
}
function renderRGB(){
  var filterHtml='<button class="filter on" data-c="All" type="button">All Transitions</button>';
  $('rgbFilters').innerHTML=filterHtml;
  function draw(){
    var html='';
    RGB.forEach(function(r,i){
      html+='<div class="rgb-card" data-rgb="'+i+'"><div class="rgb-prev"><iframe loading="lazy" sandbox="allow-scripts" srcdoc="'+attr(doc({html:r.html,css:r.css,js:''}))+'"></iframe></div><div class="rgb-info"><div class="rgb-name">'+esc(r.name)+'</div><div class="rgb-cat">RGB Transition</div></div></div>';
    });
    $('rgbGrid').innerHTML=html;
    document.querySelectorAll('#rgbGrid .rgb-card').forEach(function(el){
      el.addEventListener('click',function(){
        var r=RGB[parseInt(el.dataset.rgb,10)];
        var code='/* '+r.name+' — RGB Transition */\n.dasun-rgb {\n  width: 100%;\n  height: 100%;\n  background: '+r.gradient+';\n  background-size: 300% 100%;\n  animation: dasunRGBflow 3s linear infinite;\n  border-radius: 14px;\n}\n\n@keyframes dasunRGBflow {\n  0% { background-position: 0% 50%; }\n  100% { '+r.anim+'; }\n}';
        if(navigator.clipboard) navigator.clipboard.writeText(code);
        else {var ta=document.createElement('textarea');ta.value=code;document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);}
        toast('<i class="fa-solid fa-copy"></i>','Copied!',r.name+' CSS code');
      });
    });
  }
  draw();
}
function renderContactGrid(){
  var html='';
  CONTACTS.forEach(function(c,i){
    html+='<div class="card" data-ci="'+i+'"><div class="card-prev"><iframe loading="lazy" sandbox="allow-scripts" srcdoc="'+attr(doc({html:c.h,css:c.c,js:''}))+'"></iframe></div><div class="card-foot"><div><div class="card-name">'+esc(c.n)+'</div><div class="card-cat">Contact</div></div><button class="card-btn" type="button">Code</button></div></div>';
  });
  $('contactGrid').innerHTML=html;
  document.querySelectorAll('#contactGrid .card').forEach(function(c){
    c.addEventListener('click',function(){
      var cc=CONTACTS[parseInt(c.dataset.ci,10)];
      openCustomModal(cc.n,'Contact Box',cc.h,cc.c,'');
    });
  });
}
function renderFonts(){
  var html='';
  FONTS.forEach(function(f,i){
    var safe=f.n.replace(/ /g,'+');
    var importRule='@import url("https://fonts.googleapis.com/css2?family='+safe+':wght@'+f.w+'&display=swap");';
    html+='<div class="font-card" data-i="'+i+'">'+
      '<div class="font-preview" style="font-family:\''+f.n+'\', sans-serif;">'+esc(f.n)+' — Beautiful</div>'+
      '<div class="font-name">'+esc(f.n)+'<span class="font-cat">'+f.cat+'</span></div>'+
      '<div class="font-import">'+esc(importRule)+'</div>'+
    '</div>';
  });
  $('fontGrid').innerHTML=html;
  FONTS.forEach(function(f){
    var id='gf_'+f.n.replace(/[^a-z0-9]/gi,'_');
    if(document.getElementById(id))return;
    if(f.n.indexOf('Fallback')>=0)return;
    var l=document.createElement('link');
    l.id=id;l.rel='stylesheet';
    l.href='https://fonts.googleapis.com/css2?family='+f.n.replace(/ /g,'+')+':wght@'+f.w+'&display=swap';
    document.head.appendChild(l);
  });
  document.querySelectorAll('.font-card').forEach(function(c){
    c.addEventListener('click',function(){
      var f=FONTS[parseInt(c.dataset.i,10)];
      var code='/* '+f.n+' ('+f.cat+') */\n@import url("https://fonts.googleapis.com/css2?family='+f.n.replace(/ /g,'+')+':wght@'+f.w+'&display=swap");\n\n/* Usage */\nbody {\n  font-family: \''+f.n+'\', sans-serif;\n}';
      if(navigator.clipboard) navigator.clipboard.writeText(code);
      toast('<i class="fa-solid fa-copy"></i>','Copied!',f.n+' import code');
    });
  });
  var searchEl=$('fontSearch');
  searchEl.addEventListener('input',function(){
    var q=this.value.toLowerCase();
    document.querySelectorAll('.font-card').forEach(function(c){
      var f=FONTS[parseInt(c.dataset.i,10)];
      c.style.display=(f.n.toLowerCase().indexOf(q)>=0||f.cat.toLowerCase().indexOf(q)>=0)?'':'none';
    });
  });
}

/* =========================================================
   PREVIEW DOC
   ========================================================= */
function doc(s){
  var base='*{margin:0;padding:0;box-sizing:border-box}body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:transparent;color:#f0f2f7;font-family:"Inter",system-ui,sans-serif;padding:16px;overflow:hidden}';
  if(s.cat==='Portfolio'||s.title==='Portfolio'){
    base='*{margin:0;padding:0;box-sizing:border-box}body{background:#0a0d16;padding:20px;font-family:"Inter",sans-serif;overflow-x:auto}';
  }
  var d='<!DOCTYPE html><html><head><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&family=Outfit:wght@300;400;500;600;700&family=Syne:wght@400;600;700;800&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet"><style>'+base+(s.css||'')+'</style></head><body>';
  d+=s.html||'';
  if(s.js)d+='<scr'+'ipt>'+s.js+'</scr'+'ipt>';
  d+='</body></html>';
  return d;
}

/* =========================================================
   MODAL
   ========================================================= */
var MI=null,MT='html';
var customData=null;
function renderTabs(){
  var s=customData || D[MI];
  var isPortfolio=s.cat==='Portfolio';
  var tabs=[];
  if(isPortfolio){tabs=[['full','📄 Full Code']];}
  else{
    if(s.html)tabs.push(['html','HTML']);
    if(s.css)tabs.push(['css','CSS']);
    if(s.js)tabs.push(['js','JS']);
  }
  if(!tabs.length)tabs=[['html','HTML']];
  if(!tabs.some(function(t){return t[0]===MT;})) MT=tabs[0][0];
  var html='';
  tabs.forEach(function(t){html+='<button class="tab'+(t[0]===MT?' on':'')+'" data-t="'+t[0]+'" type="button">'+t[1]+'</button>';});
  $('modalTabs').innerHTML=html;
  document.querySelectorAll('.tab').forEach(function(b){b.addEventListener('click',function(){MT=b.dataset.t;renderTabs();renderCode();});});
}
function buildFullHtml(s){
  return '<!-- '+s.title+' · '+s.cat+' -->\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width,initial-scale=1.0">\n  <title>'+s.title+'</title>\n  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">\n  <style>\n'+fmtCss(s.css).replace(/^/gm,'    ')+'\n  </style>\n</head>\n<body>\n'+fmtHtml(s.html).replace(/^/gm,'  ')+(s.js?'\n  <script>\n'+s.js+'\n  <\/script>':'')+'\n</body>\n</html>';
}
function renderCode(){
  var s=customData || D[MI],code='';
  if(MT==='full'||s.cat==='Portfolio'){
    code=buildFullHtml(s);
    $('modalCode').innerHTML=hi(code,'html');
    return;
  }
  code=s[MT]||'';
  if(MT==='css')code=fmtCss(code);
  else if(MT==='html')code=fmtHtml(code);
  $('modalCode').innerHTML=hi(code,MT);
}
function openModal(i){
  customData=null;MI=i;var s=D[i];
  $('modalTitle').textContent=s.title+' · '+s.cat;
  MT=s.cat==='Portfolio'?'full':(s.html?'html':(s.css?'css':'js'));
  if(s.cat==='Portfolio')$('modalTelegram').style.display='inline-flex';
  else $('modalTelegram').style.display='none';
  renderTabs();renderCode();
  $('modalFrame').srcdoc=doc(s);
  $('modal').classList.add('on');
}
function openCustomModal(name,cat,html,css,js){
  customData={title:name,cat:cat,html:html,css:css,js:js||''};
  $('modalTitle').textContent=name+' · '+cat;
  MT='html';
  $('modalTelegram').style.display='none';
  renderTabs();renderCode();
  $('modalFrame').srcdoc=doc(customData);
  $('modal').classList.add('on');
}
function closeModal(){$('modal').classList.remove('on');}
$('modalX').addEventListener('click',closeModal);
$('modal').addEventListener('click',function(e){if(e.target===this)closeModal();});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeModal();closeDrawer();}});

/* =========================================================
   COPY
   ========================================================= */
function cp(text,btn,label){
  function done(){if(!btn)return;var old=btn.textContent;btn.classList.add('copied');btn.textContent='✓ Copied!';setTimeout(function(){btn.classList.remove('copied');btn.textContent=label||old;},1500);}
  if(navigator.clipboard&&window.isSecureContext)navigator.clipboard.writeText(text).then(done,function(){fb(text,done);});
  else fb(text,done);
}
function fb(text,cb){var ta=document.createElement('textarea');ta.value=text;ta.style.position='fixed';ta.style.top='-1000px';document.body.appendChild(ta);ta.select();try{document.execCommand('copy');}catch(e){}document.body.removeChild(ta);if(cb)cb();}
$('modalCopy').addEventListener('click',function(){
  var s=customData || D[MI];
  if(MT==='full'||s.cat==='Portfolio'){cp(buildFullHtml(s),this,'Copy Tab');return;}
  var code=s[MT]||'';
  if(MT==='css')code=fmtCss(code);
  else if(MT==='html')code=fmtHtml(code);
  cp(code,this,'Copy Tab');
});
$('modalCopyAll').addEventListener('click',function(){cp(buildFullHtml(customData||D[MI]),this,'Copy All');});

$('search').addEventListener('input',function(){if(!$('page-projects').classList.contains('on'))page('projects');renderGrid();});

document.querySelectorAll('[data-page]').forEach(function(b){
  b.addEventListener('click',function(){
    if (b.dataset.page === 'projects') {
      activeFilter = 'All';
      renderFilters(); renderGrid();
      page('projects', '/projects');
    } else {
      page(b.dataset.page);
    }
  });
});

/* =========================================================
   PROFILE
   ========================================================= */
$('profAv').addEventListener('click',function(){$('avFile').click();});
$('avFile').addEventListener('change',function(){
  var f=this.files[0];if(!f)return;
  if(f.size>1024*1024)return toast('<i class="fa-solid fa-triangle-exclamation"></i>','File too large','Choose an image under 1MB');
  var r=new FileReader();
  r.onload=function(e){
    var u=getCurrent();if(!u)return;
    u.avatar=e.target.result;
    var users=getUsers();
    var i=users.findIndex(function(x){return x.email===u.email;});
    if(i!==-1){users[i]=u;saveUsers(users);}
    setCurrent(u);updateUserUI(u);
    toast('<i class="fa-solid fa-image"></i>','Photo Updated','Your profile photo was changed');
  };
  r.readAsDataURL(f);
});
$('pmNameSave').addEventListener('click',function(){
  var name=$('pmName').value.trim(),user=$('pmUser').value.trim().toLowerCase(),phone=$('pmPhone').value.trim();
  if(!name||!user)return toast('<i class="fa-solid fa-triangle-exclamation"></i>','Missing fields','Fill both fields');
  if(user.length<3)return toast('<i class="fa-solid fa-triangle-exclamation"></i>','Invalid username','At least 3 characters');
  var btn=this;btn.disabled=true;btn.innerHTML='<span class="sp"></span> Saving...';
  setTimeout(function(){
    var u=getCurrent();if(!u)return;
    u.name=name;u.username=user;u.phone=phone;
    var users=getUsers();
    var i=users.findIndex(function(x){return x.email===u.email;});
    if(i!==-1){users[i]=u;saveUsers(users);}
    setCurrent(u);updateUserUI(u);
    btn.disabled=false;btn.textContent='Save Changes';
    var st=$('pmNameOk');st.classList.add('on');
    setTimeout(function(){st.classList.remove('on');},2200);
    toast('<i class="fa-solid fa-check"></i>','Profile Updated','Your details were saved');
  },1400);
});
$('pmPassSave').addEventListener('click',function(){
  var op=$('pmOld').value,np=$('pmNew').value,np2=$('pmNew2').value;
  var u=getCurrent();if(!u)return;
  if(op!==u.password)return toast('<i class="fa-solid fa-xmark"></i>','Wrong Password','Current password is incorrect');
  if(np.length<6)return toast('<i class="fa-solid fa-triangle-exclamation"></i>','Weak Password','At least 6 characters');
  if(np!==np2)return toast('<i class="fa-solid fa-triangle-exclamation"></i>','Mismatch','Passwords do not match');
  var btn=this;btn.disabled=true;btn.innerHTML='<span class="sp"></span> Updating...';
  setTimeout(function(){
    u.password=np;
    var users=getUsers();
    var i=users.findIndex(function(x){return x.email===u.email;});
    if(i!==-1){users[i]=u;saveUsers(users);}
    setCurrent(u);
    $('pmOld').value='';$('pmNew').value='';$('pmNew2').value='';
    btn.disabled=false;btn.textContent='Update Password';
    var st=$('pmPassOk');st.classList.add('on');
    setTimeout(function(){st.classList.remove('on');},2200);
    toast('<i class="fa-solid fa-lock"></i>','Password Changed','Your password has been updated');
  },1400);
});

/* =========================================================
   LANDING FEATURES
   ========================================================= */
(function(){
  var obs=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting)e.target.classList.add('in');});},{threshold:.15});
  document.querySelectorAll('.feat').forEach(function(el){obs.observe(el);});
})();

$('tbLogo').addEventListener('click',function(){page('home');});
$('landTotal').textContent=(D.filter(function(s){return s.cat!=='Portfolio';}).length+NAVBARS_DATA.length+CONTACTS.length+FONTS.length+RGB.length)+'+';

/* =========================================================
   BOOT
   ========================================================= */
renderDrawer();
resolveInitialRoute();

(function(){
  var u = getCurrent();
  if (u) {
    setTimeout(function(){
      toast('<i class="fa-solid fa-hand"></i>','Welcome Back','Logged in as '+u.name);
    }, 400);
  }
})();

console.log('DG UI PRIMAM · Snippets:',D.length,'· NavBars:',NAVBARS_DATA.length,'· Contacts:',CONTACTS.length,'· Fonts:',FONTS.length,'· RGB:',RGB.length);
