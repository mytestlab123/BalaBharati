'use strict';
(()=>{
const previousArt=window.StoryArt;
if(typeof previousArt!=='function')return;

const C={
  night:'#314866',night2:'#405f79',stone:'#6d7072',stone2:'#565b60',
  cream:'#fff4d4',gold:'#e8aa3b',orange:'#d77b3f',red:'#b84a3d',
  blue:'#5f9fc0',deepBlue:'#356f93',river:'#4f9fb5',river2:'#397f9c',
  green:'#5d8c65',green2:'#86a777',brown:'#8a6441',skin:'#c99068',
  skin2:'#d8a57c',white:'#fffdf4',ink:'#253a3a',purple:'#77558a'
};

const svg=(body,bg,label)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 224" role="img" aria-label="${label}"><rect width="320" height="224" fill="${bg}"/>${body}</svg>`;

const stoneWall=()=>`<g opacity=".95"><rect y="0" width="320" height="224" fill="${C.stone2}"/><g stroke="#7e8284" stroke-width="2" opacity=".6"><path d="M0 35h320M0 72h320M0 109h320M0 146h320M0 183h320"/><path d="M54 0v35M128 0v35M205 0v35M276 0v35M25 35v37M99 35v37M177 35v37M248 35v37M60 72v37M142 72v37M219 72v37M291 72v37M20 109v37M95 109v37M170 109v37M246 109v37M64 146v37M136 146v37M213 146v37M286 146v37"/></g></g>`;

const devaki=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})"><path d="M-13-4L-16 16M13-4L16 16" stroke="${C.skin2}" stroke-width="8"/><path d="M-22-40Q0-53 22-40L28 7Q0 20-28 7Z" fill="${C.purple}"/><path d="M-20-39L17-5L25-18L-9-45Z" fill="${C.gold}"/><ellipse cy="-58" rx="17" ry="21" fill="${C.skin2}"/><path d="M-19-63Q-10-83 1-82Q18-79 20-61Q4-68-12-59Z" fill="#343b39"/><circle cy="-68" r="2.5" fill="${C.red}"/><path d="M-6-61h1M5-61h1" stroke="${C.ink}" stroke-width="2.4"/><path d="M-4-50q4 4 8 0" stroke="#765746" stroke-width="1.6" fill="none"/><path d="M-17-36L-29-18M17-36L29-18" stroke="${C.skin2}" stroke-width="8" stroke-linecap="round"/></g>`;

const yashoda=(x,y,s=1)=>devaki(x,y,s).replace(C.purple,C.green).replace(C.gold,C.red);

const vasudeva=(x,y,s=1,armsUp=false)=>`<g transform="translate(${x} ${y}) scale(${s})"><path d="M-12-4L-16 18M12-4L16 18" stroke="${C.skin}" stroke-width="9" stroke-linecap="round"/><path d="M-22-41Q0-54 22-41L27 7Q0 19-27 7Z" fill="${C.orange}"/><path d="M-17-60Q0-66 17-60L20-36Q0-23-20-36Z" fill="${C.skin}"/><ellipse cy="-60" rx="17" ry="20" fill="${C.skin}"/><path d="M-20-66Q0-84 20-66L14-60Q0-66-14-60Z" fill="#3e443f"/><path d="M-10-48Q0-43 10-48" stroke="#604536" stroke-width="3" fill="none"/><path d="M-6-63h1M5-63h1" stroke="${C.ink}" stroke-width="2.4"/>${armsUp?`<path d="M-18-40L-28-81M18-40L28-81" stroke="${C.skin}" stroke-width="9" stroke-linecap="round"/>`:`<path d="M-18-39L-30-22M18-39L30-22" stroke="${C.skin}" stroke-width="9" stroke-linecap="round"/>`}</g>`;

const basketBaby=(x,y,s=1,glow=true)=>`<g transform="translate(${x} ${y}) scale(${s})">${glow?'<circle cy="-12" r="42" fill="#f8d77c" opacity=".28"/><circle cy="-12" r="30" fill="#fff0a9" opacity=".22"/>':''}<path d="M-37 4Q0 22 37 4L29 27Q0 40-29 27Z" fill="#b77a3e" stroke="#7d532f" stroke-width="3"/><path d="M-31 2Q0-15 31 2" fill="none" stroke="#d49a55" stroke-width="6"/><ellipse cy="-11" rx="14" ry="12" fill="${C.blue}"/><path d="M-23-4Q0 8 23-4V13Q0 25-23 13Z" fill="${C.gold}"/><path d="M-8-12h1M7-12h1" stroke="${C.ink}" stroke-width="2.2"/><path d="M-1-26q5-10 13-6q-2 9-10 12" fill="${C.green}"/><path d="M0-24q2-9 0-14" stroke="#7b5b38" stroke-width="2"/></g>`;

const prisonWindow=(x,y)=>`<g transform="translate(${x} ${y})"><rect x="-40" y="-38" width="80" height="76" rx="4" fill="#26384b"/><circle cx="18" cy="-12" r="15" fill="#f2d68f"/><g stroke="#93989c" stroke-width="5"><path d="M-28-38v76M-9-38v76M10-38v76M29-38v76"/></g></g>`;

const chain=(x,y)=>`<g transform="translate(${x} ${y})" fill="none" stroke="#c0c3c4" stroke-width="4"><ellipse cy="0" rx="7" ry="11"/><ellipse cy="18" rx="7" ry="11"/><ellipse cy="36" rx="7" ry="11"/></g>`;

const sleepingGuard=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="2" rx="28" ry="10" fill="#39454a" opacity=".28"/><path d="M-22-5Q0-24 25-5L18 11H-22Z" fill="#9c6740"/><circle cx="-20" cy="-18" r="12" fill="${C.skin}"/><path d="M-31-23q11-17 23 0" fill="${C.red}"/><path d="M-27-17h12" stroke="${C.ink}" stroke-width="2.2"/><path d="M10-19l20 5" stroke="#6f5138" stroke-width="6" stroke-linecap="round"/></g>`;

const rain=()=>`<g stroke="#bcd9e4" stroke-width="2.5" opacity=".85"><path d="M25 25l-9 16M58 15L46 37M91 29L78 52M127 13l-11 21M164 22l-13 23M205 12l-13 22M244 28l-12 22M286 16l-13 24M41 73L29 96M100 66L87 88M153 70l-13 25M220 65l-13 25M278 73l-12 21"/></g>`;

const river=()=>`<g><path d="M0 126Q55 109 110 126T220 126T320 118V224H0Z" fill="${C.river}"/><path d="M0 160Q58 144 116 160T232 158T320 151V224H0Z" fill="${C.river2}"/><g stroke="#bde2e3" stroke-width="3" opacity=".75"><path d="M12 145q22-9 44 0M79 176q27-10 54 0M172 143q25-9 50 0M237 184q25-9 51 0"/></g></g>`;

const shesha=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})" fill="#5a7c67" stroke="#365947" stroke-width="2"><path d="M0 25Q-7 2 0-20Q7 2 0 25Z"/><ellipse cx="-32" cy="-31" rx="19" ry="25"/><ellipse cx="-16" cy="-39" rx="19" ry="27"/><ellipse cx="0" cy="-43" rx="20" ry="29"/><ellipse cx="16" cy="-39" rx="19" ry="27"/><ellipse cx="32" cy="-31" rx="19" ry="25"/><g fill="${C.cream}" stroke="none"><circle cx="-37" cy="-34" r="2"/><circle cx="-27" cy="-34" r="2"/><circle cx="-21" cy="-42" r="2"/><circle cx="-11" cy="-42" r="2"/><circle cx="-5" cy="-46" r="2"/><circle cx="5" cy="-46" r="2"/><circle cx="11" cy="-42" r="2"/><circle cx="21" cy="-42" r="2"/><circle cx="27" cy="-34" r="2"/><circle cx="37" cy="-34" r="2"/></g></g>`;

const hut=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})"><path d="M-57 18v-55H57v55Z" fill="#d7a76b"/><path d="M-72-36L0-87l72 51Z" fill="#9e7048"/><path d="M-49-42L0-76L49-42" fill="none" stroke="#efd07b" stroke-width="5"/><path d="M-14 18v-27Q0-25 14-9v27" fill="#655146"/></g>`;

const cow=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="-18" rx="34" ry="20" fill="${C.white}" stroke="#9a907b" stroke-width="2"/><circle cx="35" cy="-29" r="14" fill="${C.white}" stroke="#9a907b" stroke-width="2"/><path d="M42-38l10-8M31-39l-7-9" stroke="#9a7047" stroke-width="4"/><path d="M-22-2v23M15-2v23" stroke="#9a907b" stroke-width="6"/><path d="M-34-21q-15 6-19 18" fill="none" stroke="#9a907b" stroke-width="4"/><circle cx="39" cy="-31" r="2" fill="${C.ink}"/></g>`;

const art={
'krishna-birth':()=>{
  let body=stoneWall()+prisonWindow(260,58)+chain(28,88)+chain(58,88);
  body+=`<rect y="183" width="320" height="41" fill="#4a4e50"/><ellipse cx="160" cy="166" rx="62" ry="27" fill="#4b4e51" opacity=".55"/>`;
  body+=devaki(92,196,.92)+vasudeva(229,197,.92)+basketBaby(160,153,1.05,true);
  body+=`<path d="M131 104q29-19 58 0" fill="none" stroke="${C.gold}" stroke-width="3" stroke-dasharray="5 5"/>`;
  return svg(body,C.stone2,'Krishna is born in prison');
},
'krishna-prison-opens':()=>{
  let body=stoneWall()+`<rect y="184" width="320" height="40" fill="#484d50"/><path d="M112 24h96v160h-96Z" fill="#27394c"/><path d="M112 24v160M136 24v160M160 24v160M184 24v160M208 24v160" stroke="#969a9b" stroke-width="6"/><path d="M112 24L82 44v140l30 0Z" fill="#7d8284" stroke="#a3a6a7" stroke-width="4"/><path d="M208 24l31 20v140h-31Z" fill="#7d8284" stroke="#a3a6a7" stroke-width="4"/><path d="M145 24Q160 6 175 24" fill="none" stroke="${C.gold}" stroke-width="4"/>`;
  body+=sleepingGuard(56,188,.72)+sleepingGuard(268,188,.72)+vasudeva(160,205,.8)+basketBaby(160,104,.8,true);
  return svg(body,C.stone2,'The prison doors open while the guards sleep');
},
'krishna-carry':()=>{
  let body=`<rect width="320" height="224" fill="${C.night}"/><circle cx="272" cy="42" r="21" fill="#f0d793"/><path d="M0 171Q80 151 160 171T320 165V224H0Z" fill="#536b62"/><path d="M0 169h74v-39h22v39h31v55H0Z" fill="#293b48"/><path d="M13 130v-30h18v30M47 130V87h20v43" fill="#293b48"/><path d="M96 169v-55h18v55" fill="#293b48"/>${rain()}<path d="M95 76l-22 17M224 78l23 17" stroke="${C.gold}" stroke-width="4" opacity=".75"/>`;
  body+=vasudeva(160,208,1.05,true)+basketBaby(160,92,1.0,true);
  return svg(body,C.night,'Vasudeva carries baby Krishna through the rainy night');
},
'krishna-yamuna':()=>{
  let body=`<rect width="320" height="224" fill="${C.night2}"/><circle cx="281" cy="35" r="17" fill="#e8d08d"/>${rain()}${river()}`;
  body+=vasudeva(160,220,1.0,true)+basketBaby(160,99,.92,true)+shesha(160,77,.9);
  body+=`<path d="M18 95l18-18l-8 20l18-5" fill="none" stroke="#f4dd89" stroke-width="4"/><path d="M256 87l16-20l-5 19l17-6" fill="none" stroke="#f4dd89" stroke-width="4"/>`;
  return svg(body,C.night2,'Vasudeva crosses the Yamuna while Shesha shelters baby Krishna');
},
'krishna-gokul':()=>{
  let body=`<rect width="320" height="224" fill="#f7e8c8"/><circle cx="270" cy="43" r="23" fill="${C.gold}"/><path d="M0 169Q73 145 146 169T320 161V224H0Z" fill="#a9bc82"/><path d="M0 186Q73 168 146 186T320 178V224H0Z" fill="#8da86f"/>`;
  body+=hut(250,176,.62)+cow(52,190,.7)+vasudeva(118,208,.78)+yashoda(220,205,.78);
  body+=basketBaby(170,158,.88,true)+`<path d="M138 122Q170 99 202 122" fill="none" stroke="${C.gold}" stroke-width="4"/><path d="M197 116l10 7l-11 5" fill="${C.gold}"/>`;
  return svg(body,'#f7e8c8','Baby Krishna reaches peaceful Gokul safely');
}
};

window.StoryArt=(key)=>art[key]?art[key]():previousArt(key);
})();
