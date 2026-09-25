'use strict';
(()=>{
const baseArt=window.StoryArt;
if(typeof baseArt!=='function')return;
const addLayer=(svg,layer)=>svg.replace('</svg>',layer+'</svg>');
const gold='#e8aa3b',cream='#fff8e7',brown='#8a6b48',green='#51856a',red='#b84a3d',blue='#4b6e92';
const sandal=(x,y,flip=1)=>`<g transform="translate(${x} ${y}) scale(${flip} 1)"><path d="M-16 8Q-13-13-3-24Q7-30 13-19Q17-7 11 16Q5 27-7 24Q-18 21-16 8Z" fill="#a97036" stroke="#76512f" stroke-width="2"/><path d="M-5-10Q2-1 8 6" fill="none" stroke="#e9c16f" stroke-width="4" stroke-linecap="round"/></g>`;
const footprints=(x,y)=>`<g fill="#9d7048" opacity=".8"><ellipse cx="${x}" cy="${y}" rx="6" ry="10" transform="rotate(-22 ${x} ${y})"/><ellipse cx="${x+17}" cy="${y-14}" rx="6" ry="10" transform="rotate(22 ${x+17} ${y-14})"/><ellipse cx="${x+32}" cy="${y-29}" rx="5" ry="9" transform="rotate(-22 ${x+32} ${y-29})"/></g>`;
const globe=(x,y,r)=>`<g transform="translate(${x} ${y})"><circle r="${r}" fill="#75a9c6" stroke="${blue}" stroke-width="3"/><path d="M-${r} 0H${r}M0-${r}V${r}" fill="none" stroke="#eef5e8" stroke-width="2"/><path d="M-${r*.55} -${r*.1}q${r*.22}-${r*.42} ${r*.52}-${r*.16}q${r*.18} ${r*.2} ${r*.42} ${r*.02}q${r*.02} ${r*.34}-${r*.23} ${r*.45}q-${r*.31} ${r*.12}-${r*.71}-${r*.31}" fill="#78a96b"/></g>`;
const layers={
learn:`<g aria-hidden="true"><rect x="185" y="104" width="129" height="116" rx="12" fill="#ead5a4"/><path d="M199 207V151h91v56" fill="#d9a05a" stroke="#b5733c" stroke-width="3"/><path d="M212 151v-24h65v24" fill="#f0c979" stroke="#b5733c" stroke-width="3"/>${footprints(210,199)}<path d="M247 155Q282 129 304 109" fill="none" stroke="${gold}" stroke-width="3" stroke-dasharray="6 5"/><path d="M298 108l8-2l-2 8" fill="none" stroke="${gold}" stroke-width="3"/></g>`,
sandals:`<g aria-hidden="true"><ellipse cx="160" cy="145" rx="48" ry="29" fill="${cream}" stroke="${gold}" stroke-width="3"/>${sandal(145,148,.72)}${sandal(176,148,-.72)}<path d="M160 111v-15M145 116l-9-11M175 116l9-11" stroke="${gold}" stroke-width="3"/></g>`,
serve:`<g aria-hidden="true"><path d="M188 206v-50h103v50Z" fill="#d3a665" stroke="#a56b39" stroke-width="3"/><path d="M201 156v-18h77v18" fill="#f0c979" stroke="#a56b39" stroke-width="3"/>${sandal(228,171,.72)}${sandal(258,171,-.72)}<path d="M239 113h24" stroke="${red}" stroke-width="3"/></g>`,
challenge:`<g aria-hidden="true">${globe(160,105,34)}<path d="M109 104Q160 56 211 104" fill="none" stroke="${gold}" stroke-width="4" stroke-dasharray="7 6"/><path d="M205 97l10 7l-11 5" fill="${gold}"/></g>`,
wisdom:`<g aria-hidden="true">${globe(121,135,27)}<ellipse cx="122" cy="160" rx="62" ry="39" fill="none" stroke="${gold}" stroke-width="4" stroke-dasharray="8 6"/><path d="M181 151l11 4l-9 9" fill="${gold}"/><path d="M248 88l5 10l11 2l-8 8l2 11l-10-5l-10 5l2-11l-8-8l11-2Z" fill="${gold}"/></g>`,
conditions:`<g aria-hidden="true"><rect x="127" y="105" width="68" height="49" rx="7" fill="${cream}" stroke="#bfa971" stroke-width="3"/><path d="M137 118h47M137 130h36M137 142h42" stroke="${brown}" stroke-width="3"/><path d="M111 119q18-17 31-3M210 119q-18-17-31-3" fill="none" stroke="${gold}" stroke-width="4"/><path d="M143 169l10 10l23-27" fill="none" stroke="${green}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></g>`
};
window.StoryArt=(key)=>layers[key]?addLayer(baseArt(key),layers[key]):baseArt(key);
})();