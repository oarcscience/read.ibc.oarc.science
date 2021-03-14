function readchapter(e,n,r){for(var t=null,o=null,a=null,i=-1,c="";" "==e.charAt(e.length-1);)e=e.substring(0,e.length-1);e.length>0&&(c=e.split(" ")),(0>n-0||n-0>=66)&&(n=0),0>=n-0&&0>r-0&&(r=0),n-0>=65&&r-0>=22&&(r=21),0>r-0&&(n--,r=book_chapters[n+1]-book_chapters[n]-1),r-0>=book_chapters[n+1]-book_chapters[n]&&(n++,r=0);var s,h=chapter_lines[book_chapters[n]+r],l=chapter_lines[book_chapters[n]+r+1],p=1;t=document.getElementById("nothing"),"{{site.data.meta[page.id].locpsalmbookname}}"!=books[n]?(t.innerHTML='<h2 class="chapter-title">'+books[n]+"{{site.data.meta[page.id].locspacingpref }}{{site.data.meta[page.id].locchapterpref }}"+numbers[r]+"{{site.data.meta[page.id].locchaptersuff  }}</h2>",t.style.paddingTop="5rem",document.title="{{site.data.meta[page.id].locsitetitle }} — "+books[n]+"{{site.data.meta[page.id].locchapterpref }}"+numbers[r]+"{{site.data.meta[page.id].locchaptersuff  }}"):(t.innerHTML='<h2 class="chapter-title">'+books[n]+"{{site.data.meta[page.id].locpsalmpref }}{{site.data.meta[page.id].locspacingpref }}"+numbers[r]+"{{site.data.meta[page.id].locpsalmcountword }}</h2>",t.style.paddingTop="5rem",document.title="{{site.data.meta[page.id].locsitetitle }} — "+books[n]+"{{site.data.meta[page.id].locchapterpref  }}"+numbers[r]+"{{site.data.meta[page.id].locpsalmcountword }}"),o=document.createElement("DIV"),o.className+="verse-container",o.style.paddingBottom="5rem",t.appendChild(o);for(var u=h;l>u;u++){var f=profiles[u].substring(profiles[u].indexOf(" "));for(a=document.createElement("OL"),o.appendChild(a),s=document.createElement("LI"),i=0;i<c.length&&e.length>0;){for(var d="",g=c[i];-1!=f.indexOf(g);)d+=f.substring(0,f.indexOf(g))+g.fontcolor("red"),f=f.substring(f.indexOf(g)+g.length);d+=f,f=d,i++}s.innerHTML=f,a.appendChild(s),s.setAttribute("value",p++)}temp1='<a href="" class="btn" onClick="readchapter(\''+e+"', nowbook,--nowchapter); return false;\">←</a>\n",temp2='<a href="" class="btn" onClick="readchapter(\''+e+"', nowbook,++nowchapter); return false;\">→</a>\n",nowbook=n,nowchapter=r;navigator.userAgent.toLowerCase();s=document.getElementById("link2"),s.innerHTML="",s.innerHTML+=temp1,s.innerHTML+=temp2,location.hash="#top",location=location,location.hash="#"+n+"_"+r}function replacing(e,n){for(var r=e;-1!=r.indexOf(n);)r=r.replace(n," § ");for(;-1!=r.indexOf("§");)r=r.replace(/§/,n);return r}function validate(e,n,r){var t;for(t=1;9>t;t++)e=replacing(e,operators[t]);for(;-1!=e.indexOf("  ");)e=e.replace(/  /," ");for("+"==e.charAt(0)?(e=e.substring(1,e.length),searchType=SEARCHALL):"url:"==e.substring(0,4)?(e=e.substring(5,e.length),searchType=SEARCHURL):searchType=SEARCHANY;" "==e.charAt(0);)e=e.substring(1,e.length),document.search.query.value=e;for(;" "==e.charAt(e.length-1);)e=e.substring(0,e.length-1),document.search.query.value=e;convertString(e,n,r)}function convertString(e,n,r){var t=e.split(" ");allowAny(t,n,r)}function evaluate(e){var n=new Array(0),r=-1;for(i=0;i<e.length;i++)e[i]===!1||e[i]===!0?n[++r]=e[i]:"!"==e[i].charAt(0)||"-"==e[i].charAt(0)?n[r]?n[r]=!1:n[r]=!0:("*"==e[i].charAt(0)||"&"==e[i].charAt(0))&&r>=1?(n[r-1]&&n[r]?n[r-1]=!0:n[r-1]=!1,r--):("+"==e[i].charAt(0)||"|"==e[i].charAt(0))&&r>=1&&(n[r-1]||n[r]?n[r-1]=!0:n[r-1]=!1,r--);for(i=r;i>0;i--)n[i-1]&&n[i]?n[i-1]=!0:n[i-1]=!1;return n[0]}function postfix(e){var n,r=[],t=-1,o=0,a=0,i=[];for(r[++t]=0;o<e.length;){for(n=0;9>n&&e[o]!=operators[n];n++);if(9==n)i[a++]=e[o];else if(8==n){for(;t>0&&7!=r[t];)i[a++]=operators[r[t--]];7==r[t]&&t--}else{for(;isp[r[t]]<=icp[n];)i[a++]=operators[r[t--]];r[++t]=n}o++}for(;t>0;)i[a++]=operators[r[t--]];return i}function allowAny(e,n,r){var t,o,a,i=new Array(0),c=new Array(0),s=new Array(0),h=new Array(0),l=1,p=new Array(0);for(e=postfix(e),opnum=0,o=0;o<e.length;o++)"*"==e[o].charAt(0)||"+"==e[o].charAt(0)||"!"==e[o].charAt(0)||"&"==e[o].charAt(0)||"|"==e[o].charAt(0)||"-"==e[o].charAt(0)?h[o]=e[o]:(h[o]=!0,s[opnum]=o,c[opnum++]=e[o]);for(t=0;t<opnum;t++)l*=2;for(t=0;l>t;t++){for(a=t,o=0;o<opnum;o++)a%2===0?h[s[o]]=!1:h[s[o]]=!0,a>>=1;evaluate(h)?p[t]=!0:p[t]=!1}for(nowbook=0,nowchapter=0,t=chapter_lines[book_chapters[n]];t<chapter_lines[book_chapters[r+1]];t++){var u,f=profiles[t],d=profiles[t].toUpperCase();u=searchType==SEARCHANY?d.substring(0,d.indexOf("|HTTP")):d.substring(d.indexOf("|HTTP"),d.length);var g=0;for(d=d.substring(d.indexOf(" ")+1,d.length),o=opnum-1;o>=0;o--)g+=-1==d.indexOf(c[o])?0:1,g*=2;if(g/=2,p[g]){for(o=0;o<c.length;o++){var b=c[o],A="";if(-1!=d.indexOf(b)){for(;chapter_lines[book_chapters[nowbook]+nowchapter+1]<=t;)nowchapter++,nowchapter+book_chapters[nowbook]>book_chapters[nowbook+1]&&(nowchapter=0,nowbook++);for(findbook[i.length]=nowbook,findchapter[i.length]=nowchapter,A=f.substring(0,f.indexOf(" ")+1),f=f.substring(f.indexOf(" ")+1);-1!=f.indexOf(b);)A+=f.substring(0,f.indexOf(b))+b.fontcolor("red"),f=f.substring(f.indexOf(b)+b.length);A+=f,f=A}}i[i.length]=f}}verifyManage(c,i)}function verifyManage(e,n){0===n.length?noMatch():(copyArray=n,formatResults(e,copyArray,currentMatch,showMatches))}function noMatch(){var e;e=document.getElementById("nothing"),e.innerHTML='<HR NOSHADE WIDTH=100%>"'+document.search.query.value+'" returned no results.<HR NOSHADE WIDTH=100%></TD></TR></TABLE>'}function formatResults(e,n,r,t){var o,a,i,c,s=n.length<r+t?n.length:r+t;document.title="{{site.data.meta[page.id].locsearchquery}}"+document.search.query.value,c="";for(var h=0;h<e.length;h++)c+=e[h]+" ";o=document.getElementById("nothing"),o.innerHTML="Search Query: <i>"+document.search.query.value+"</i><br>\n",o.innerHTML+="Search Results: <i>"+(r+1)+" — "+s+" of "+n.length+"</i><br>\n\n<!-- Begin result set //-->\n\n	",a=document.createElement("OL"),o.appendChild(a);var l=1;if(searchType==SEARCHURL)for(var p=r;s>p;p++)i=document.createElement("LI"),i.innerHTML=n[p],a.appendChild(i),i.setAttribute("value",l++);else for(var p=r;s>p;p++){var u=n[p].substring(n[p].indexOf(" "),n[p].length),f=n[p].substring(0,n[p].indexOf(" "));i=document.createElement("LI"),i.innerHTML='<a href="" onClick="readchapter(\''+c+"', "+findbook[p]+", "+findchapter[p]+'); return false;">'+f+"</a> "+u+"\n",a.appendChild(i),i.setAttribute("value",l++)}}function setachap(){var e,n,r;if(setchap(document.Reading,document.Reading.na.selectedIndex,document.Reading.chap.selectedIndex),ua=navigator.userAgent.toLowerCase(),r=location.hash,location.hash.length>1){for(e=r.substring(1,r.indexOf("_")),n=r;-1!=n.indexOf("_");)n=n.substring(n.indexOf("_")+1);readchapter(" ",e,n)}}function setchap(e,n,r){var t,o,a,i=new Array(50,40,27,36,34,24,21,4,31,24,22,25,29,36,10,13,10,42,150,31,12,8,66,52,5,48,12,14,3,9,1,4,7,3,3,3,2,14,4,28,16,24,21,28,16,16,13,6,6,4,4,5,3,6,4,3,1,13,5,5,3,5,1,1,1,22);t=i[n];var c=e.chap.options.length;if(150==t&&150>c)for(o=1;150>=o;o++)a="{{site.data.meta[page.id].locchapterpref}}"+o+"{{site.data.meta[page.id].locchaptersuff}}",e.chap.options[o-1]=new Option(a,o);else if(150>t&&150==c){for(o=1;t>=o;o++)a="{{site.data.meta[page.id].locchapterpref}}"+o+"{{site.data.meta[page.id].locchaptersuff}}",e.chap.options[o-1]=new Option(a,o);for(o=150;o>t;o--)e.chap.options[o-1]=null}else if(t>c)for(o=c;t>=o;o++)a="{{site.data.meta[page.id].locchapterpref}}"+o+"{{site.data.meta[page.id].locchaptersuff}}",e.chap.options[o-1]=new Option(a,o);else if(c>t)for(o=c;o>t;o--)e.chap.options[o-1]=null;e.chap.options[0].selected=r}var SEARCHANY=1,SEARCHALL=2,SEARCHURL=4,searchType="",showMatches=2e3,currentMatch=0,copyArray=[],nowbook=39,nowchapter=0,findbook=[],findchapter=[],operators=new Array("#","*","&","|","+","!","-","(",")"),icp=new Array(3,2,2,2,2,1,1,0,3),isp=new Array(3,2,2,2,2,1,1,3,3);
function init(){function e(t,n,o){if(!(0>o)){var i=n-t.scrollTop,s=i/o*10;setTimeout(function(){t.scrollTop=t.scrollTop+s,t.scrollTop!=n&&e(t,n,o-10)},10)}}function t(){e(s.body,0,300)}function n(){window.onhashchange=function(){0!==scrollY&&t()}}function o(){function e(e){a.classList.contains(r.hasCover)&&(c=s.querySelector(".cover-txt"),s.addEventListener("mousemove",function(){console.log("mouse is moving!"),c.classList.contains(r.fadeOut)&&(c.classList.remove(r.fadeOut),c.classList.add(r.fadeIn),a.classList.remove(r.noCursor)),clearTimeout(l),l=window.setTimeout(function(){c&&(c.classList.remove(r.fadeIn),c.classList.add(r.fadeOut),a.classList.add(r.noCursor))},e)},!1))}function t(e){a.removeChild(e),a.classList.remove(r.hasCover),a.classList.remove(r.noCursor)}function n(t){a.appendChild(t),a.classList.add(r.hasCover),e(7e3)}var o=s.querySelector(".toggle-light"),i=s.createElement("div"),c=null,l=null;i.className="cover",i.innerHTML='<span class="cover-txt">Press ESC key to leave</span>',o&&(o.addEventListener("click",function(e){n(i)},!1),i.addEventListener("click",function(e){t(this)},!1),s.addEventListener("keydown",function(e){27===e.keyCode&&a.classList.contains(r.hasCover)&&t(i)},!1))}function i(){var e="";-1!=navigator.appVersion.indexOf("Win")&&(e="windows"),-1!=navigator.appVersion.indexOf("Mac")&&(e="mac"),a.classList.add(e)}var s=document,a=(document.documentElement,s.body),c=s.getElementById("nothing"),r={fadeIn:"fade-in",fadeOut:"fade-out",noCursor:"no-cursor",hasCover:"has-cover",reading:"reading-mode",lowLight:"low-light-theme",show:"show",fontSize:"font-size",mac:"mac"},l=s.querySelector(".top");l.addEventListener("click",t,!1),n(),o(),i();var d=function(e){return this===window?new d(e):(this.range=s.querySelector(e.els.range),void(this.rangeSize=s.querySelector(e.els.rangeSize)))};d.prototype={togglePanel:function(){var e=s.querySelector(".setting-btn"),t=s.querySelector(".setting-panel");e&&t&&(e.addEventListener("click",function(n){t.classList.toggle(r.show),e.classList.toggle(r.show),n.stopPropagation()},!1),t.addEventListener("click",function(e){e.stopPropagation()},!1),s.addEventListener("click",function(n){t.classList.contains(r.show)&&(t.classList.remove(r.show),e.classList.remove(r.show))},!1))},setDefaultFontSize:function(){var e=-1;window.localStorage.getItem(r.fontSize)?e=window.localStorage.getItem(r.fontSize):(e=24,window.localStorage.setItem(r.fontSize,24)),c.style.fontSize=e+"px",this.range.value=e,this.rangeSize.textContent=e+"px"},changeFontSize:function(){var e=this;this.range.addEventListener("change",function(){e.rangeSize.textContent=this.value+"px",c.style.fontSize=this.value+"px",window.localStorage.setItem(r.fontSize,this.value)},!1)},switchTheme:function(){var e=s.querySelector(".toggle-theme .toggle"),t="";window.localStorage.getItem("theme")?(t=window.localStorage.getItem("theme"),"default-theme"===t?e.checked=!1:(e.checked=!0,a.classList.add(r.lowLight))):(t="default-theme",window.localStorage.setItem("theme","default-theme"),e.checked=!1),e.addEventListener("click",function(){this.checked===!0?(a.classList.add(r.lowLight),window.localStorage.setItem("theme","low-light-theme")):(a.classList.remove(r.lowLight),window.localStorage.setItem("theme","default-theme"))},!1)},toggleVerseNumber:function(){var e=s.querySelector(".toggle-verse-number .toggle"),t=s.querySelector("#nothing"),n="";window.localStorage.getItem("verse-number")?(n=window.localStorage.getItem("verse-number"),"on"===n?(e.checked=!0,t.classList.remove("no-verse-number")):(e.checked=!1,t.classList.add("no-verse-number"))):(n="on",window.localStorage.setItem("verse-number","on"),e.checked=!0),e.addEventListener("click",function(e){this.checked===!0?(t.classList.remove("no-verse-number"),window.localStorage.setItem("verse-number","on")):(t.classList.add("no-verse-number"),window.localStorage.setItem("verse-number","off"))},!1)},initialize:function(){this.togglePanel(),this.changeFontSize(),this.setDefaultFontSize(),this.switchTheme(),this.toggleVerseNumber()}};var g=function(e){return this===window?new g(e):(this.toggle=s.querySelector(e.els.toggle),this.controls=s.querySelector(e.els.controls),void(this.content=s.querySelector(e.els.content)))};g.prototype={setReadingMode:function(){var e=this,t=function(){a.classList.add(r.reading),a.classList.contains(r.mac)||$(e.content).perfectScrollbar()},n=function(){a.classList.remove(r.reading),$(e.content).perfectScrollbar("destroy")};e.toggle&&e.toggle.addEventListener("click",function(){t()},!1),s.addEventListener("keydown",function(e){27===e.keyCode&&a.classList.contains(r.reading)&&n()},!1),s.addEventListener("keydown",function(e){e.ctrlKey&&e.altKey&&82===e.keyCode&&(a.classList.contains(r.reading)?n():t())},!1),this.controls&&this.controls.addEventListener("click",function(e){n()},!1)},initialize:function(){this.setReadingMode()}},s.addEventListener("keydown",function(e){37===e.keyCode?readchapter("",nowbook,--nowchapter):39===e.keyCode&&readchapter("",nowbook,++nowchapter)},!1);var u=new d({els:{range:".range-slide",rangeSize:".range-size"}});u.initialize();var h=new g({els:{toggle:".toggle-reading-mode",controls:".reading-mode-controls",content:".content-wrap"}});h.initialize()}window.addEventListener("load",function(){init()},!1);
books=new Array("{{ site.data.meta[page.id].booknames | replace: ", ", '", "' }}"),book_chapters=new Array(0,50,90,117,153,187,211,232,236,267,291,313,338,367,403,413,426,436,478,628,659,671,679,745,797,802,850,862,876,879,888,889,893,900,903,906,909,911,925,929,957,973,997,1018,1046,1062,1078,1091,1097,1103,1107,1111,1116,1119,1125,1129,1132,1133,1146,1151,1156,1159,1164,1165,1166,1167,1189),numbers=new Array("{{ site.data.meta[page.id].locnumnames | replace: ", ", '", "' }}"),chapter_lines=new Array(0,31,56,80,106,138,160,184,206,235,267,299,319,337,361,382,398,425,458,496,514,548,572,592,659,693,728,774,796,831,874,929,961,981,1012,1041,1084,1120,1150,1173,1196,1253,1291,1325,1359,1387,1421,1452,1474,1507,1533,1555,1580,1602,1633,1656,1686,1711,1743,1778,1807,1817,1868,1890,1921,1948,1984,2e3,2027,2052,2078,2114,2145,2178,2196,2236,2273,2294,2337,2383,2421,2439,2474,2497,2532,2567,2605,2634,2665,2708,2746,2763,2779,2796,2831,2850,2880,2918,2954,2978,2998,3045,3053,3112,3169,3202,3236,3252,3282,3319,3346,3370,3403,3447,3470,3525,3571,3605,3659,3693,3744,3793,3824,3851,3940,3966,3989,4025,4060,4076,4109,4154,4195,4245,4258,4290,4312,4341,4376,4417,4447,4472,4490,4555,4578,4609,4649,4665,4719,4761,4817,4846,4880,4893,4939,4976,5005,5054,5087,5112,5138,5158,5187,5209,5241,5273,5291,5320,5343,5365,5385,5407,5428,5448,5471,5501,5526,5548,5567,5586,5612,5680,5709,5729,5759,5811,5840,5852,5870,5894,5911,5935,5950,5977,6003,6038,6065,6108,6131,6155,6188,6203,6266,6276,6294,6322,6373,6382,6427,6461,6477,6510,6546,6569,6600,6624,6655,6695,6720,6755,6812,6830,6870,6885,6910,6930,6950,6981,6994,7025,7055,7103,7128,7150,7173,7191,7213,7241,7277,7298,7320,7332,7353,7370,7392,7419,7446,7461,7486,7509,7561,7596,7619,7677,7707,7731,7773,7788,7811,7840,7862,7906,7931,7943,7968,7979,8010,8023,8050,8082,8121,8133,8158,8181,8210,8228,8241,8260,8287,8318,8357,8390,8427,8450,8479,8512,8555,8581,8603,8654,8693,8718,8771,8817,8845,8879,8897,8935,8986,9052,9080,9109,9152,9185,9219,9250,9284,9318,9342,9388,9409,9452,9481,9534,9552,9577,9604,9648,9675,9708,9728,9757,9794,9830,9851,9872,9897,9926,9964,9984,10025,10062,10099,10120,10146,10166,10203,10223,10253,10307,10362,10386,10429,10455,10536,10576,10616,10660,10674,10721,10761,10775,10792,10821,10864,10891,10908,10927,10935,10966,10984,11016,11047,11078,11110,11144,11165,11195,11212,11230,11247,11269,11283,11325,11347,11365,11396,11415,11438,11454,11476,11491,11510,11524,11543,11577,11588,11625,11645,11657,11678,11705,11733,11756,11765,11792,11828,11855,11876,11909,11934,11967,11994,12017,12028,12098,12111,12135,12152,12174,12202,12238,12253,12297,12308,12328,12360,12383,12402,12421,12494,12512,12550,12589,12625,12672,12703,12725,12748,12763,12780,12794,12808,12818,12835,12867,12870,12892,12905,12931,12952,12979,13009,13030,13052,13087,13109,13129,13154,13182,13204,13239,13261,13277,13298,13327,13356,13390,13420,13437,13462,13468,13482,13505,13533,13558,13589,13629,13651,13684,13721,13737,13770,13794,13835,13865,13889,13923,13940,13946,13958,13966,13974,13986,13996,14013,14022,14042,14060,14067,14075,14081,14088,14093,14104,14119,14169,14183,14192,14205,14236,14242,14252,14274,14286,14300,14309,14320,14332,14356,14367,14389,14411,14439,14451,14491,14513,14526,14543,14556,14567,14572,14598,14615,14626,14635,14649,14669,14692,14711,14720,14726,14733,14756,14769,14780,14791,14808,14820,14828,14840,14851,14861,14874,14894,14901,14936,14972,14977,15001,15021,15049,15072,15082,15094,15114,15186,15199,15218,15234,15242,15260,15272,15285,15302,15309,15327,15379,15396,15412,15427,15432,15455,15466,15479,15491,15500,15509,15514,15522,15550,15572,15607,15652,15700,15743,15756,15787,15794,15804,15814,15823,15831,15849,15868,15870,15899,16075,16082,16090,16099,16103,16111,16116,16122,16127,16133,16141,16149,16152,16170,16173,16176,16197,16223,16232,16240,16264,16277,16287,16294,16306,16321,16342,16352,16372,16386,16395,16401,16434,16456,16491,16518,16541,16576,16603,16639,16657,16689,16720,16748,16773,16808,16841,16874,16902,16926,16955,16985,17016,17045,17080,17114,17142,17170,17197,17225,17252,17285,17316,17334,17360,17382,17398,17418,17430,17459,17476,17494,17514,17524,17538,17555,17572,17583,17599,17615,17628,17641,17655,17686,17708,17734,17740,17770,17783,17808,17830,17851,17885,17901,17907,17929,17961,17970,17984,17998,18005,18030,18036,18053,18078,18096,18119,18131,18152,18165,18194,18218,18251,18260,18280,18304,18321,18331,18353,18391,18413,18421,18452,18481,18506,18534,18562,18587,18600,18615,18637,18663,18674,18697,18712,18724,18741,18754,18766,18787,18801,18822,18844,18855,18867,18886,18898,18923,18947,18966,19003,19028,19059,19090,19120,19154,19176,19202,19227,19250,19267,19294,19316,19337,19358,19385,19408,19423,19441,19455,19485,19525,19535,19573,19597,19619,19636,19668,19692,19732,19776,19802,19824,19843,19875,19896,19924,19942,19958,19976,19998,20011,20041,20046,20074,20081,20128,20167,20213,20277,20311,20333,20355,20421,20443,20465,20493,20503,20530,20547,20564,20578,20605,20623,20634,20656,20681,20709,20732,20755,20763,20826,20850,20882,20896,20945,20977,21008,21057,21084,21101,21122,21158,21184,21205,21231,21249,21281,21314,21345,21360,21398,21426,21449,21478,21527,21553,21573,21600,21631,21656,21680,21703,21738,21759,21808,21838,21875,21906,21934,21962,21989,22016,22037,22082,22095,22106,22129,22134,22153,22168,22179,22195,22209,22226,22241,22253,22267,22283,22292,22312,22344,22365,22380,22396,22411,22424,22451,22465,22482,22496,22511,22532,22549,22559,22569,22580,22596,22609,22621,22634,22649,22665,22685,22700,22713,22732,22749,22769,22788,22806,22821,22841,22856,22879,22900,22913,22923,22937,22948,22963,22977,23e3,23017,23029,23046,23060,23069,23090,23104,23121,23139,23145,23170,23193,23210,23235,23283,23317,23346,23380,23418,23460,23490,23540,23598,23634,23673,23701,23728,23763,23793,23827,23873,23919,23958,24009,24055,24130,24196,24216,24261,24289,24324,24365,24408,24464,24501,24539,24589,24641,24674,24718,24755,24827,24874,24894,24974,25026,25064,25108,25147,25196,25246,25302,25364,25406,25460,25519,25554,25589,25621,25652,25689,25732,25780,25827,25865,25936,25992,26045,26096,26121,26157,26211,26258,26329,26382,26441,26482,26524,26581,26631,26669,26700,26727,26760,26786,26826,26868,26899,26924,26950,26997,27023,27060,27102,27117,27177,27217,27260,27308,27338,27363,27415,27443,27484,27524,27558,27586,27627,27665,27705,27735,27770,27797,27824,27856,27900,27931,27963,27992,28023,28048,28069,28092,28117,28156,28189,28210,28246,28267,28281,28304,28337,28364,28395,28411,28434,28455,28468,28488,28528,28541,28568,28601,28635,28666,28679,28719,28777,28801,28825,28842,28860,28878,28899,28917,28933,28957,28972,28990,29023,29044,29058,29082,29103,29132,29163,29189,29207,29230,29252,29273,29305,29338,29362,29392,29422,29443,29466,29495,29518,29543,29561,29571,29591,29604,29622,29650,29662,29679,29697,29717,29732,29748,29764,29789,29810,29828,29854,29871,29893,29909,29924,29939,29964,29978,29996,30015,30031,30045,30065,30093,30106,30134,30173,30213,30242,30267,30294,30320,30338,30355,30375,30400,30425,30447,30466,30480,30501,30523,30541,30551,30580,30604,30625,30646,30659,30674,30699,30719,30748,30770,30781,30795,30812,30829,30842,30863,30874,30893,30910,30928,30948,30956,30977,30995,31019,31040,31055,31082,31103,31124);
profiles=new Array({{ content }});
