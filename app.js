const phases=[
{name:'Foundation',weeks:[1,4],desc:'Learn the movements, find comfortable machine settings, and finish most sets with 2–3 strong repetitions still available.'},
{name:'Strength Builder',weeks:[5,8],desc:'Add repetitions and small weight increases while keeping every movement controlled.'},
{name:'Muscle Builder',weeks:[9,12],desc:'Use slightly more training volume for legs, glutes, back, shoulders, and arms.'},
{name:'Fresh & Strong',weeks:[13,16],desc:'Refresh selected exercises so training stays interesting while the same muscles keep progressing.'},
{name:'Transformation',weeks:[17,20],desc:'Build confidence and push gradual progression while recovering well during active weight loss.'},
{name:'Strong for Life',weeks:[21,24],desc:'Set personal bests, celebrate consistency, and prepare your next customized phase.'}
];

// Search-result links are used instead of fragile provider pages, so a moved video does not create a File Not Found page.
const videoSearch={
'Leg Press':'leg press machine proper form beginner','Dumbbell Romanian Deadlift':'dumbbell Romanian deadlift proper form beginner','Chest Press Machine':'chest press machine proper form beginner','Incline Dumbbell Press':'incline dumbbell press proper form beginner','Lat Pulldown':'lat pulldown proper form beginner','Seated Cable Row':'seated cable row proper form beginner','Seated Row Machine':'seated row machine proper form beginner','Seated Dumbbell Shoulder Press':'seated dumbbell shoulder press proper form beginner','Cable Face Pull':'cable face pull proper form beginner','Goblet Squat':'goblet squat proper form beginner','Hip Thrust Machine':'hip thrust machine proper form beginner','Seated Hamstring Curl':'seated hamstring curl proper form beginner','Dumbbell Biceps Curl':'dumbbell biceps curl proper form beginner','Hammer Curl':'hammer curl proper form beginner','Cable Biceps Curl':'cable biceps curl proper form beginner','Cable Triceps Pressdown':'cable triceps pressdown rope proper form beginner','Overhead Cable Triceps Extension':'overhead cable triceps extension proper form beginner','Rope Triceps Pressdown':'rope triceps pressdown proper form beginner','Dumbbell Lateral Raise':'dumbbell lateral raise proper form beginner','Plank':'front plank proper form beginner','Dead Bug':'dead bug exercise proper form beginner','Cable Wood Chop':'cable wood chop proper form beginner'
};
const videoUrl=name=>`https://www.youtube.com/results?search_query=${encodeURIComponent(videoSearch[name]||`${name} proper form beginner`)}`;

const descriptions={
'Leg Press':'Place your feet about shoulder-width apart. Lower only as far as your hips and lower back stay firmly against the pad.',
'Dumbbell Romanian Deadlift':'Keep the dumbbells close to your legs, soften your knees, and push your hips backward while keeping your back neutral.',
'Chest Press Machine':'Set the seat so the handles line up near mid-chest. Keep your shoulders down and press without locking your elbows.',
'Incline Dumbbell Press':'Keep your shoulder blades gently pulled back. Lower the dumbbells with control and press upward without banging them together.',
'Lat Pulldown':'Keep your chest tall and pull the bar toward your upper chest. Avoid swinging or leaning far backward.',
'Seated Cable Row':'Sit tall, pull your elbows toward your sides, and squeeze your shoulder blades without shrugging.',
'Seated Row Machine':'Keep your chest supported when possible and pull with your back instead of jerking with your arms.',
'Seated Dumbbell Shoulder Press':'Brace your core, keep your wrists stacked over your elbows, and stop before your shoulders feel pinched.',
'Cable Face Pull':'Pull the rope toward eye level with elbows high. Finish by gently squeezing the muscles across your upper back.',
'Goblet Squat':'Hold the weight close to your chest, sit down between your hips, and keep your knees tracking in the same direction as your toes.',
'Hip Thrust Machine':'Drive through your heels and squeeze your glutes at the top while keeping your ribs down instead of arching your lower back.',
'Seated Hamstring Curl':'Line your knees up with the machine pivot and curl smoothly without lifting your hips from the seat.',
'Dumbbell Biceps Curl':'Keep your elbows close to your sides and curl without swinging your torso.',
'Hammer Curl':'Keep your palms facing each other and your elbows still while you curl the dumbbells.',
'Cable Biceps Curl':'Stand tall and keep your upper arms still as you curl the handle toward your shoulders.',
'Cable Triceps Pressdown':'Keep your elbows close to your sides and straighten your arms without leaning your body weight onto the cable.',
'Overhead Cable Triceps Extension':'Keep your ribs down and elbows pointed forward while extending your arms overhead.',
'Rope Triceps Pressdown':'Press the rope down, then gently separate the ends at the bottom while keeping your elbows still.',
'Dumbbell Lateral Raise':'Raise the dumbbells only to about shoulder height with soft elbows and no shrugging.',
'Plank':'Brace your stomach and glutes while keeping your body in one long line. Stop before your lower back sags.',
'Dead Bug':'Keep your lower back gently pressed down while slowly extending the opposite arm and leg.',
'Cable Wood Chop':'Rotate through your upper back and hips under control. Do not yank the cable with your arms.'
};

// Every workout includes direct biceps and triceps work, as requested.
const basePlans={
A:[['Leg Press',3,'8–12'],['Dumbbell Romanian Deadlift',3,'8–12'],['Chest Press Machine',3,'8–12'],['Seated Cable Row',3,'8–12'],['Dumbbell Biceps Curl',2,'10–15'],['Cable Triceps Pressdown',2,'10–15'],['Plank',2,'20–45 sec']],
B:[['Goblet Squat',3,'8–12'],['Hip Thrust Machine',3,'8–12'],['Lat Pulldown',3,'8–12'],['Seated Dumbbell Shoulder Press',2,'8–12'],['Hammer Curl',2,'10–15'],['Overhead Cable Triceps Extension',2,'10–15'],['Dead Bug',2,'8–12 each side']],
C:[['Leg Press',3,'10–15'],['Seated Row Machine',3,'8–12'],['Incline Dumbbell Press',3,'8–12'],['Dumbbell Lateral Raise',2,'12–15'],['Cable Biceps Curl',2,'10–15'],['Rope Triceps Pressdown',2,'10–15'],['Cable Wood Chop',2,'10–12 each side']]
};

const warmups={
A:[['Easy treadmill or recumbent bike','5 minutes at a pace that lets you speak comfortably.'],['Sit-to-stand','8 slow repetitions from a bench or sturdy chair.'],['Hip hinge practice','8 repetitions with no weight, pushing your hips backward.'],['Arm circles','8 forward and 8 backward.']],
B:[['Easy recumbent bike or treadmill','5 minutes at a comfortable pace.'],['Shoulder blade squeezes','10 gentle repetitions without shrugging.'],['Band pull-aparts or light cable rows','10 easy repetitions.'],['Bodyweight box squat','8 controlled repetitions to a bench.']],
C:[['Easy treadmill, bike, or elliptical','5 minutes at a comfortable pace.'],['March in place','30 seconds with relaxed shoulders.'],['Wall push-ups','8 slow repetitions.'],['Hip circles','6 each direction while holding support if needed.']]
};

function cardioForWeek(week){
 if(week<=4)return{minutes:'10–15 minutes',effort:'Easy-to-moderate steady pace. You should be able to talk in full sentences.',options:['Treadmill walk','Recumbent bike','Elliptical if comfortable']};
 if(week<=8)return{minutes:'15–20 minutes',effort:'Moderate pace. Breathing is quicker, but conversation is still possible.',options:['Treadmill walk with a small incline','Recumbent bike','Elliptical']};
 if(week<=12)return{minutes:'20 minutes',effort:'Steady moderate pace, or alternate 2 minutes comfortable with 1 minute slightly faster.',options:['Treadmill','Bike','Elliptical']};
 if(week<=16)return{minutes:'20–25 minutes',effort:'Mostly moderate. Add four short 30-second brisk efforts only if joints and energy feel good.',options:['Treadmill','Bike','Elliptical']};
 return{minutes:'25–30 minutes',effort:'Moderate steady pace. Keep the goal sustainable after strength training.',options:['Treadmill','Bike','Elliptical']};
}

const clone=o=>JSON.parse(JSON.stringify(o));
const defaultState={week:1,nextWorkout:'A',workoutsCompleted:0,xp:0,settings:{weight:226,startingWeight:226},plans:clone(basePlans),logs:[],checkins:[],victories:[],appVersion:'1.1'};
let state=JSON.parse(localStorage.getItem('strongSonyaStateV1')||'null')||clone(defaultState);
let deferredPrompt=null,timerSeconds=60,timerRemaining=60,timerId=null;
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const save=()=>localStorage.setItem('strongSonyaStateV1',JSON.stringify(state));
const phaseForWeek=w=>Math.max(0,phases.findIndex(p=>w>=p.weeks[0]&&w<=p.weeks[1]));

function migrateState(){
 state.settings=state.settings||clone(defaultState.settings); state.logs=state.logs||[]; state.checkins=state.checkins||[]; state.victories=state.victories||[];
 state.plans=state.plans||clone(basePlans);
 ['A','B','C'].forEach(letter=>{
   const existing=Array.isArray(state.plans[letter])?state.plans[letter]:[];
   const required=basePlans[letter];
   const requiredArmNames=required.filter(x=>/Curl|Triceps/.test(x[0]));
   requiredArmNames.forEach(ex=>{if(!existing.some(x=>x[0]===ex[0]))existing.splice(Math.max(existing.length-1,0),0,clone(ex));});
   state.plans[letter]=existing.length?existing:clone(required);
 });
 state.appVersion='1.1';save();
}

function showView(id){$$('.view').forEach(v=>v.classList.toggle('active',v.id===id));$$('.tab').forEach(t=>t.classList.toggle('active',t.dataset.view===id));if(id==='progress')renderProgress();if(id==='photos')renderPhotos();if(id==='achievements')renderAchievements();if(id==='workout'){renderWarmup();renderCardio();}}
$$('.tab').forEach(t=>t.addEventListener('click',()=>showView(t.dataset.view)));

function weeklyStreak(){
 if(!state.logs.length)return 0;
 const keys=[...new Set(state.logs.map(l=>{const d=new Date(l.date);const onejan=new Date(d.getFullYear(),0,1);const week=Math.ceil((((d-onejan)/86400000)+onejan.getDay()+1)/7);return`${d.getFullYear()}-${week}`}))].sort().reverse();
 let streak=1;for(let i=1;i<keys.length;i++){const [y,w]=keys[i-1].split('-').map(Number),[py,pw]=keys[i].split('-').map(Number);if((y===py&&w-pw===1)||(y-py===1&&w===1&&pw>=52))streak++;else break;}return streak;
}
function updateDashboard(){const pi=phaseForWeek(state.week),p=phases[pi],level=Math.floor(state.xp/250)+1;$('#phasePill').textContent=`Phase ${pi+1}`;$('#phaseTitle').textContent=p.name;$('#phaseWeeks').textContent=`Weeks ${p.weeks[0]}–${p.weeks[1]}`;$('#phaseDescription').textContent=p.desc;$('#phaseProgress').style.width=`${((state.week-p.weeks[0]+1)/(p.weeks[1]-p.weeks[0]+1))*100}%`;$('#weekMetric').textContent=state.week;$('#workoutMetric').textContent=state.workoutsCompleted;$('#weightMetric').textContent=`${state.settings.weight} lb`;$('#streakMetric').textContent=`${weeklyStreak()} week${weeklyStreak()===1?'':'s'}`;$('#levelValue').textContent=level;$('#motivation').textContent=['Small steps become strong habits.','Your future self is cheering for you.','Strength looks good on you.','Consistency beats perfection.'][state.workoutsCompleted%4];$('#nextWorkoutBadge').textContent=`Workout ${state.nextWorkout}`;$('#nextWorkoutPreview').innerHTML=state.plans[state.nextWorkout].slice(0,5).map(x=>`<div class="preview-item">${x[0]} · ${x[1]} sets · ${x[2]}</div>`).join('');$('#latestVictory').textContent=state.victories.at(-1)?.text||'Complete your first workout to start your Victory Wall.'}
function populateWeeks(){for(let i=1;i<=24;i++)$('#weekSelect').insertAdjacentHTML('beforeend',`<option value="${i}">${i}</option>`);$('#weekSelect').value=state.week}
function currentPlan(){return state.plans[$('#workoutSelect').value]}
function lastFor(name){for(let i=state.logs.length-1;i>=0;i--){const e=state.logs[i].exercises.find(x=>x.name===name&&x.completed);if(e)return e}return null}
function bestFor(name){let best=0;state.logs.forEach(l=>l.exercises.forEach(e=>{if(e.name===name&&e.completed)best=Math.max(best,e.weight||0)}));return best}

function renderWarmup(){const items=warmups[$('#workoutSelect').value]||warmups.A;$('#warmupList').innerHTML=items.map(([name,detail],i)=>`<label class="routine-item"><input type="checkbox" class="warmup-check"><span><strong>${name}</strong><small>${detail}</small></span></label>`).join('')}
function renderCardio(){const c=cardioForWeek(state.week);$('#cardioSummary').textContent=`Week ${state.week}: ${c.minutes}. ${c.effort}`;$('#cardioList').innerHTML=c.options.map((name,i)=>`<label class="routine-item"><input type="radio" name="cardioChoice" value="${name}" ${i===0?'checked':''}><span><strong>${name}</strong><small>${i===0?'Choose this or another comfortable option.':'Use this instead if it feels better today.'}</small></span></label>`).join('')}

function renderExercises(){const box=$('#exerciseList');box.innerHTML='';currentPlan().forEach((ex,index)=>{const node=$('#exerciseTemplate').content.cloneNode(true),card=node.querySelector('.exercise-card'),prev=lastFor(ex[0]),best=bestFor(ex[0]);const nameInput=card.querySelector('.exercise-name');nameInput.value=ex[0];card.querySelector('.sets').value=ex[1];card.querySelector('.rep-target').value=ex[2];const demoLink=card.querySelector('.video-link');demoLink.href=videoUrl(ex[0]);demoLink.setAttribute('aria-label',`Search YouTube for a demonstration of ${ex[0]}`);card.querySelector('.exercise-tip').textContent=descriptions[ex[0]]||'Use slow, controlled repetitions and stop if you feel sharp, radiating, or unusual pain.';card.querySelector('.previous-line').textContent=prev?`Last time: ${prev.weight||'—'} lb · ${prev.reps||'reps not entered'}${best?` · Best: ${best} lb`:''}`:'No previous entry yet. Start light and learn the movement.';
 const load=card.querySelector('.load'),pr=card.querySelector('.pr-badge');
 const updatePr=()=>{const n=Number(load.value)||0;pr.hidden=!(n>best&&n>0)};load.addEventListener('input',updatePr);
 nameInput.addEventListener('change',e=>{ex[0]=e.target.value.trim()||'New exercise';save();renderExercises()});card.querySelector('.sets').addEventListener('change',e=>{ex[1]=Number(e.target.value)||1;save()});card.querySelector('.rep-target').addEventListener('change',e=>{ex[2]=e.target.value;save()});card.querySelector('.completed').addEventListener('change',e=>card.classList.toggle('done',e.target.checked));card.querySelector('.remove-btn').addEventListener('click',()=>{if(confirm(`Remove ${ex[0]} from this workout?`)){currentPlan().splice(index,1);save();renderExercises()}});box.appendChild(node)});renderWarmup();renderCardio()}

function coach(){const cards=$$('.exercise-card'),done=cards.filter(c=>c.querySelector('.completed').checked),easy=cards.filter(c=>c.querySelector('.difficulty').value==='easy').length,hard=cards.filter(c=>c.querySelector('.difficulty').value==='hard').length;if(!done.length)return'Record your sets and difficulty. Keep 1–3 good repetitions in reserve on most sets.';if(hard>=2)return'Several movements felt very hard. Repeat the same weight next time, or reduce it slightly if your form changed.';if(easy>=2)return'Several movements felt easy. When you reach the top of the rep range with good form, add the smallest available weight increase next time.';return'Good effort. Try adding one repetition next time before increasing the weight.'}
function confetti(){const c=document.createElement('div');c.className='confetti';for(let i=0;i<45;i++){const p=document.createElement('i');p.style.left=Math.random()*100+'vw';p.style.animationDelay=Math.random()*.4+'s';c.appendChild(p)}document.body.appendChild(c);setTimeout(()=>c.remove(),1800)}
function finishWorkout(){const workout=$('#workoutSelect').value,exercises=$$('.exercise-card').map((c,i)=>({name:currentPlan()[i]?.[0]||'',sets:Number(c.querySelector('.sets').value),target:c.querySelector('.rep-target').value,weight:Number(c.querySelector('.load').value)||0,reps:c.querySelector('.reps-done').value,difficulty:c.querySelector('.difficulty').value,notes:c.querySelector('.exercise-notes').value,completed:c.querySelector('.completed').checked}));if(!exercises.some(e=>e.completed)){alert('Mark at least one strength exercise complete before saving.');return}const priorBest={};state.logs.forEach(l=>l.exercises.forEach(e=>priorBest[e.name]=Math.max(priorBest[e.name]||0,e.weight||0)));const prs=exercises.filter(e=>e.completed&&e.weight>(priorBest[e.name]||0)&&e.weight>0);const win=$('#biggestWin').value.trim(),cardioChoice=document.querySelector('input[name="cardioChoice"]:checked')?.value||'',cardioMinutes=Number($('#cardioMinutes').value)||0;state.logs.push({date:new Date().toISOString(),week:state.week,workout,feel:$('#sessionFeel').value,win,notes:$('#workoutNotes').value,cardio:{type:cardioChoice,minutes:cardioMinutes},warmupCompleted:$$('.warmup-check').filter(x=>x.checked).length,exercises});state.workoutsCompleted++;state.xp+=100+prs.length*25+(cardioMinutes?10:0);state.nextWorkout=workout==='A'?'B':workout==='B'?'C':'A';state.victories.push({date:new Date().toISOString(),text:win||`Completed Workout ${workout}${prs.length?` and set ${prs.length} new personal record${prs.length>1?'s':''}!`:'!'}`});save();$('#coachMessage').textContent=coach();updateDashboard();confetti();setTimeout(()=>alert(`Workout saved! +${100+prs.length*25+(cardioMinutes?10:0)} XP`),250)}

function formatTimer(){const m=String(Math.floor(timerRemaining/60)).padStart(2,'0'),s=String(timerRemaining%60).padStart(2,'0');$('#timerDisplay').textContent=`${m}:${s}`}
function stopTimer(){clearInterval(timerId);timerId=null;$('#timerToggle').textContent='Start'}
function startTimer(){if(timerId)return;$('#timerToggle').textContent='Pause';timerId=setInterval(()=>{timerRemaining--;formatTimer();if(timerRemaining<=0){stopTimer();timerRemaining=0;formatTimer();if(navigator.vibrate)navigator.vibrate([200,100,200]);alert('Rest is over — ready for your next set!')}},1000)}
$$('.timer-preset').forEach(b=>b.addEventListener('click',()=>{stopTimer();timerSeconds=timerRemaining=Number(b.dataset.seconds);formatTimer()}));$('#timerToggle').addEventListener('click',()=>timerId?stopTimer():startTimer());$('#timerReset').addEventListener('click',()=>{stopTimer();timerRemaining=timerSeconds;formatTimer()});

function drawChart(){const canvas=$('#weightChart'),ctx=canvas.getContext('2d'),dpr=devicePixelRatio||1,w=canvas.clientWidth||320,h=190;canvas.width=w*dpr;canvas.height=h*dpr;ctx.scale(dpr,dpr);ctx.clearRect(0,0,w,h);const data=state.checkins.filter(c=>c.weight);if(data.length<2){ctx.fillStyle='#766977';ctx.font='14px sans-serif';ctx.fillText('Add at least two weigh-ins to see your trend.',15,40);return}const vals=data.map(x=>x.weight),min=Math.min(...vals)-2,max=Math.max(...vals)+2;ctx.strokeStyle='#f1d8e7';for(let i=1;i<5;i++){ctx.beginPath();ctx.moveTo(30,i*h/5);ctx.lineTo(w-10,i*h/5);ctx.stroke()}ctx.strokeStyle='#ec4899';ctx.lineWidth=3;ctx.beginPath();data.forEach((x,i)=>{const px=30+i*(w-45)/(data.length-1),py=15+(max-x.weight)*(h-35)/(max-min);i?ctx.lineTo(px,py):ctx.moveTo(px,py)});ctx.stroke();ctx.fillStyle='#14b8a6';data.forEach((x,i)=>{const px=30+i*(w-45)/(data.length-1),py=15+(max-x.weight)*(h-35)/(max-min);ctx.beginPath();ctx.arc(px,py,4,0,Math.PI*2);ctx.fill()});const change=vals.at(-1)-vals[0];$('#weightChange').textContent=`${change>0?'+':''}${change.toFixed(1)} lb`}
function renderProgress(){$('#checkinList').innerHTML=state.checkins.length?state.checkins.slice().reverse().slice(0,8).map(c=>`<div class="history-item"><strong>${new Date(c.date+'T12:00').toLocaleDateString()}</strong><br>${c.weight||'—'} lb · Waist ${c.measurements?.waist||'—'} in · Hips ${c.measurements?.hips||'—'} in</div>`).join(''):'<p>No check-ins yet.</p>';const best={};state.logs.forEach(l=>l.exercises.forEach(e=>{if(e.weight>0&&(!best[e.name]||e.weight>best[e.name]))best[e.name]=e.weight}));$('#strengthHighlights').innerHTML=Object.keys(best).length?Object.entries(best).sort((a,b)=>b[1]-a[1]).slice(0,10).map(([n,w])=>`<div class="history-item"><strong>${n}</strong><br>Best recorded weight: ${w} lb</div>`).join(''):'<p>Strength highlights appear after logged workouts.</p>';drawChart()}
function saveCheckin(){const val=id=>Number($(id).value)||null,c={date:$('#progressDate').value||new Date().toISOString().slice(0,10),weight:val('#progressWeight'),measurements:{neck:val('#mNeck'),chest:val('#mChest'),waist:val('#mWaist'),hips:val('#mHips'),leftArm:val('#mLArm'),rightArm:val('#mRArm'),leftThigh:val('#mLThigh'),rightThigh:val('#mRThigh'),leftCalf:val('#mLCalf'),rightCalf:val('#mRCalf')}};state.checkins.push(c);state.checkins.sort((a,b)=>a.date.localeCompare(b.date));if(c.weight)state.settings.weight=c.weight;state.xp+=20;state.victories.push({date:new Date().toISOString(),text:`Logged a progress check-in${c.weight ? ` at ${c.weight} lb` : ''}.`});save();updateDashboard();renderProgress();alert('Check-in saved! +20 XP')}
function photoDB(){return new Promise((resolve,reject)=>{const r=indexedDB.open('SonyaStrongPhotos',1);r.onupgradeneeded=()=>r.result.createObjectStore('photos',{keyPath:'id',autoIncrement:true});r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)})}async function addPhoto(record){const db=await photoDB();return new Promise((res,rej)=>{const t=db.transaction('photos','readwrite');t.objectStore('photos').add(record);t.oncomplete=res;t.onerror=()=>rej(t.error)})}async function getPhotos(){const db=await photoDB();return new Promise((res,rej)=>{const r=db.transaction('photos').objectStore('photos').getAll();r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})}async function deletePhoto(id){const db=await photoDB();return new Promise((res,rej)=>{const t=db.transaction('photos','readwrite');t.objectStore('photos').delete(id);t.oncomplete=res;t.onerror=()=>rej(t.error)})}async function renderPhotos(){const all=await getPhotos(),filter=$('#photoFilter').value,list=all.filter(p=>filter==='All'||p.view===filter).sort((a,b)=>b.date.localeCompare(a.date));$('#photoGallery').innerHTML=list.length?list.map(p=>`<div class="photo-card"><img src="${URL.createObjectURL(p.file)}" alt="${p.view} progress photo from ${p.date}"><button class="photo-delete" data-id="${p.id}">×</button><div class="photo-meta"><span>${p.view}</span><span>${new Date(p.date+'T12:00').toLocaleDateString()}</span></div></div>`).join(''):'<p>No photos saved yet.</p>';$$('.photo-delete').forEach(b=>b.addEventListener('click',async()=>{if(confirm('Delete this photo?')){await deletePhoto(Number(b.dataset.id));renderPhotos()}}))}
const badges=[['First Step','🥉',s=>s.workoutsCompleted>=1],['Ten Strong','💪',s=>s.workoutsCompleted>=10],['Twenty-Five','🏆',s=>s.workoutsCompleted>=25],['Fifty Club','👑',s=>s.workoutsCompleted>=50],['PR Power','⭐',s=>s.logs.some(l=>l.exercises.some(e=>e.weight>0))],['Three-Week Streak','🔥',s=>weeklyStreak()>=3],['Halfway Hero','🌟',s=>s.week>=13],['Six-Month Strong','✨',s=>s.week>=24]];
function renderAchievements(){const level=Math.floor(state.xp/250)+1,next=level*250;$('#xpBar').style.width=`${(state.xp%250)/250*100}%`;$('#xpText').textContent=`Level ${level} · ${state.xp} XP · ${next-state.xp} XP to next level`;$('#badgeGrid').innerHTML=badges.map(([n,i,f])=>`<article class="card badge-card ${f(state)?'':'locked'}"><div class="badge-icon">${i}</div><strong>${n}</strong><p>${f(state)?'Unlocked!':'Keep going'}</p></article>`).join('');$('#victoryWall').innerHTML=state.victories.length?state.victories.slice().reverse().map(v=>`<div class="history-item"><strong>${new Date(v.date).toLocaleDateString()}</strong><br>${v.text}</div>`).join(''):'<p>Your victories will appear here.</p>'}
function renderPhases(){$('#phaseList').innerHTML=phases.map((p,i)=>`<div class="phase-item"><strong>Phase ${i+1}: ${p.name}</strong><br><span>Weeks ${p.weeks[0]}–${p.weeks[1]}</span><p>${p.desc}</p></div>`).join('')}

$('#startWorkoutBtn').addEventListener('click',()=>{$('#workoutSelect').value=state.nextWorkout;renderExercises();showView('workout')});
$('#weekSelect').addEventListener('change',e=>{state.week=Number(e.target.value);save();updateDashboard();renderCardio()});
$('#workoutSelect').addEventListener('change',renderExercises);
$('#addExerciseBtn').addEventListener('click',()=>{currentPlan().push(['New exercise',2,'8–12']);save();renderExercises()});
$('#finishWorkoutBtn').addEventListener('click',finishWorkout);$('#saveProgressBtn').addEventListener('click',saveCheckin);$('#photoFilter').addEventListener('change',renderPhotos);
$('#savePhotoBtn').addEventListener('click',async()=>{const f=$('#photoInput').files[0];if(!f){alert('Choose a photo first.');return}await addPhoto({date:$('#photoDate').value||new Date().toISOString().slice(0,10),view:$('#photoView').value,file:f});state.xp+=15;state.victories.push({date:new Date().toISOString(),text:'Added a new progress photo.'});save();$('#photoInput').value='';renderPhotos();alert('Photo saved on this device! +15 XP')});
$('#saveSettingsBtn').addEventListener('click',()=>{state.settings.weight=Number($('#settingsWeight').value)||state.settings.weight;state.settings.startingWeight=Number($('#startingWeight').value)||state.settings.startingWeight;save();updateDashboard();alert('Settings saved.')});
$('#exportBtn').addEventListener('click',()=>{const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='sonya-strong-backup-v1.1.json';a.click();URL.revokeObjectURL(a.href)});
$('#importInput').addEventListener('change',e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{state=JSON.parse(r.result);migrateState();location.reload()}catch{alert('That backup file could not be read.')}};r.readAsText(f)});
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;$('#installBtn').hidden=false});$('#installBtn').addEventListener('click',async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$('#installBtn').hidden=true});
if('serviceWorker'in navigator)navigator.serviceWorker.register('sw.js');

migrateState();populateWeeks();renderExercises();renderPhases();updateDashboard();formatTimer();$('#progressDate').value=$('#photoDate').value=new Date().toISOString().slice(0,10);$('#settingsWeight').value=state.settings.weight;$('#startingWeight').value=state.settings.startingWeight;
