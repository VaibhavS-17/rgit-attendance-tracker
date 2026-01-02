// --- PWA INSTALL LOGIC ---
let deferredPrompt; // Saves the install event
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e; // Save it for later
  // If the app is already running, we can update the UI now
  if(app && document.getElementById('subjectList')) {
      app.renderSubjects(); // Re-render to show the button
  }
});

// --- 1. DATA ---
const RGIT_DATA = {
    students: {
        "601": {n:"NANDAL AKSHAYA", b:"F1"}, "602": {n:"CHOHAN MOHAMMED", b:"F1"}, "603": {n:"PARAB GAYATRI", b:"F1"},
        "604": {n:"PARAB RUTUJA", b:"F1"}, "605": {n:"PATIL ARYA", b:"F1"}, "606": {n:"PATIL GAURAV", b:"F1"},
        "607": {n:"PATIL HARIOM", b:"F1"}, "608": {n:"PATIL KRUPA", b:"F1"}, "609": {n:"PATIL MIRA", b:"F1"},
        "610": {n:"PATIL PRATIK", b:"F1"}, "611": {n:"PATIL PRAPTI", b:"F1"}, "612": {n:"PATIL TEJASVEE", b:"F1"},
        "613": {n:"PAWAR SOHAM", b:"F1"}, "614": {n:"PIMPLE RAHI", b:"F1"}, "615": {n:"PURADKAR VEDANT", b:"F1"},
        "616": {n:"SABLE VAIBHAV", b:"F1"}, "617": {n:"SAHARE ADITYA", b:"F1"}, "618": {n:"SANGALE DNYANESHWAR", b:"F1"},
        "619": {n:"SAWANT ATHARVA", b:"F1"}, "620": {n:"CHOUDHARI MADHURA", b:"F1"}, "621": {n:"SAYYED KAUSARBANO", b:"F1"},
        "622": {n:"SHAIKH NILOFER", b:"F1"}, "623": {n:"SHARMA BHARATI", b:"F1"},
        "624": {n:"SHELAR AYUSH", b:"F2"}, "625": {n:"SHELKE ARPITA", b:"F2"}, "626": {n:"SHELKE SHRUTI", b:"F2"},
        "627": {n:"SINGH ATHARVA", b:"F2"}, "628": {n:"SINGH KRITHARTH", b:"F2"}, "629": {n:"SINGH SAURABH", b:"F2"},
        "630": {n:"SUPUGADE PRANAV", b:"F2"}, "631": {n:"SUTAR PARTH", b:"F2"}, "632": {n:"TADASE OM", b:"F2"},
        "633": {n:"DEVRUSHI SIDDHANT", b:"F2"}, "634": {n:"THAKUR RUTUJA", b:"F2"}, "635": {n:"THOBHANI ARYAN", b:"F2"},
        "636": {n:"TIWARI RISHAV", b:"F2"}, "637": {n:"TOSHNIWAL MADHAV", b:"F2"}, "638": {n:"TRIVEDI ANANT", b:"F2"},
        "639": {n:"TUMBADA JAGRUTI", b:"F2"}, "640": {n:"VARMA HARSHIT", b:"F2"}, "641": {n:"VHATTE VIVEKANAND", b:"F2"},
        "642": {n:"KHEDEKAR ARYAN", b:"F2"}, "643": {n:"MASURKAR ATHARVA", b:"F2"}, "644": {n:"MHATRE KANISHKA", b:"F2"},
        "645": {n:"MISHRA PRIYAL", b:"F2"}, "646": {n:"NAGAR SURUCHI", b:"F2"},
        "647": {n:"PADHI SHUBAN", b:"F3"}, "648": {n:"PANDAWVEER SRUSHTI", b:"F3"}, "649": {n:"PATEL ARYA", b:"F3"},
        "650": {n:"PATIL CHINMAY", b:"F3"}, "651": {n:"RAJPUROHIT RAMSINGH", b:"F3"}, "652": {n:"SALIAN RUSHIL", b:"F3"},
        "653": {n:"SANKHE ARYAN", b:"F3"}, "654": {n:"SANKPAL ARYAN", b:"F3"}, "655": {n:"SAWANT SARVESH", b:"F3"},
        "656": {n:"SHARMA HARDIK", b:"F3"}, "657": {n:"SHARMA MANAV", b:"F3"}, "658": {n:"SOLUNKE SHREYAS", b:"F3"},
        "659": {n:"SRIVASTAVA ROHIT", b:"F3"}, "660": {n:"VAIDIKAR GANGOTRI", b:"F3"}
    },

    subjects: {
        "EP": { name: "Elective Physics", prof: "Dr. Y.S. Patil", types: ["LEC", "PRAC"] },
        "EC": { name: "Elective Chemistry", prof: "Dr. Pallavi S.", types: ["LEC", "PRAC"] },
        "IKS": { name: "Indian Knowledge Sys", prof: "Prof. D.K. Chakradev", types: ["LEC", "PRAC"] },
        "PP": { name: "Python Programming", prof: "Prof. Deepak Gaikar", types: ["LEC", "PRAC"] },
        "DS": { name: "Data Structures", prof: "Prof. Kajal Sharma", types: ["LEC", "PRAC"] },
        "EG": { name: "Engg. Graphics", prof: "Prof. R.N. Shanmukha", types: ["LEC", "PRAC"] },
        "AM-II": { name: "Applied Maths-II", prof: "Prof. B.B. Sawant", types: ["LEC", "TUT"] },
        "SS&CS": { name: "Social Science", prof: "Prof. D.K. Chakradev", types: ["LEC", "PRAC"] },
        "WS-II": { name: "Workshop-II", prof: "Workshop Staff", types: ["PRAC"] }
    },

    schedule: {
        1: [ // MON
            {t:"08:30", e:"09:30", c:"EP", type:"LEC", r:"C-22"}, 
            {t:"09:30", e:"10:30", c:"EC", type:"LEC", r:"C-22"},
            {t:"10:30", e:"11:30", c:"IKS", type:"LEC", r:"C-22"}, 
            {t:"11:30", e:"12:30", c:"PP", type:"LEC", r:"C-22"},
            {t:"12:30", e:"13:15", type:"BREAK", name:"RECESS"},
            // Workshop is in Workshop area, DS F3 in B-11
            {t:"13:15", e:"15:15", map:{"F1":"WS-II","F2":"WS-II","F3":"DS"}, rMap:{"F1":"Workshop","F2":"Workshop","F3":"B-11"}, type:"PRAC"}, 
            {t:"15:15", e:"16:15", c:"AM-II", type:"TUT", r:"B-11"}
        ],
        2: [ // TUE
            // Rooms not fully clear for DS/EC in image, assumed Lab/Class. WS is Workshop.
            {t:"08:30", e:"09:30", map:{"F1":"DS","F2":"EC","F3":"WS-II"}, rMap:{"F3":"Workshop"}, type:"PRAC"},
            {t:"09:30", e:"10:30", map:{"F1":"DS","F2":"EP","F3":"WS-II"}, rMap:{"F3":"Workshop"}, type:"PRAC"},
            {t:"10:30", e:"11:30", c:"DS", type:"LEC", r:"B-22"}, 
            {t:"11:30", e:"12:30", c:"PP", type:"LEC", r:"B-22"},
            {t:"12:30", e:"13:15", type:"BREAK", name:"RECESS"},
            {t:"13:15", e:"15:15", c:"SS&CS", type:"PRAC", r:"C-26"}
        ],
        3: [ // WED
            {t:"08:30", e:"09:30", map:{"F1":"EP","F2":"DS","F3":"EC"}, type:"PRAC"},
            {t:"09:30", e:"10:30", map:{"F1":"EC","F2":"DS","F3":"EP"}, type:"PRAC"},
            {t:"10:30", e:"12:30", c:"IKS", type:"PRAC", r:"A-26"}, 
            {t:"12:30", e:"13:15", type:"BREAK", name:"RECESS"},
            {t:"13:15", e:"14:15", c:"EG", type:"LEC", r:"C-22"},
            {t:"14:15", e:"15:15", c:"AM-II", type:"LEC", r:"C-22"}, 
            {t:"15:15", e:"16:15", c:"IKS", type:"LEC", r:"C-22"} 
        ],
        4: [ // THU
            {t:"08:30", e:"09:30", c:"SS&CS", type:"LEC", r:"C-22"}, 
            {t:"09:30", e:"10:30", c:"EG", type:"LEC", r:"C-22"},
            {t:"10:30", e:"12:15", c:"PP", type:"PRAC", r:"B-11"},
            {t:"12:15", e:"13:15", type:"BREAK", name:"RECESS"},
            {t:"13:15", e:"14:15", c:"DS", type:"LEC", r:"B-22"}, 
            {t:"14:15", e:"15:15", c:"AM-II", type:"LEC", r:"B-22"}
        ],
        5: [ // FRI
            {t:"08:30", e:"09:30", c:"EC", type:"LEC", r:"B-23"}, 
            {t:"09:30", e:"10:30", c:"SS&CS", type:"LEC", r:"B-23"},
            {t:"10:30", e:"11:30", c:"AM-II", type:"LEC", r:"B-23"}, 
            {t:"11:30", e:"12:30", c:"EP", type:"LEC", r:"B-23"},
            {t:"12:30", e:"13:15", type:"BREAK", name:"RECESS"},
            {t:"13:15", e:"14:15", c:"EG", type:"LEC", r:"B-23"}, 
            // F3 is in C-23, others B-23
            {t:"14:15", e:"16:15", c:"EG", rMap:{"F1":"B-23","F2":"B-23","F3":"C-23"}, type:"PRAC"}
        ]
    }
};

const app = {
    user: null,
    selectedDate: new Date(), 
    attendanceLog: {}, 
    globalStats: {},

    init: function() {
        // Check Local (Remembered) OR Session (Temporary)
        const u = localStorage.getItem('rgit_user') || sessionStorage.getItem('rgit_user');
        
        if(u) {
            this.user = JSON.parse(u);
            // Load stats from LocalStorage regardless of login type (stats should persist)
            this.attendanceLog = JSON.parse(localStorage.getItem(`log_${this.user.id}`) || '{}');
            this.globalStats = JSON.parse(localStorage.getItem(`stats_${this.user.id}`) || '{}');
            this.showMain();
        } else {
            document.getElementById('loginView').classList.remove('hidden');
            // Re-attach focus listener if needed (from previous step)
            this.attachFocusListeners(); 
        }
    },

    // 1. HAPTIC FEEDBACK
    vibrate: function() {
        if(navigator.vibrate) navigator.vibrate(50);
    },
    
        // --- UPDATED HUMOR GENERATOR (With Start Status) ---
    getStatus: function(pct, totalT) {
        // Helper to pick random message
        const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

        // SCENARIO 0: NO DATA ENTERED YET (Fresh Start)
        if (totalT === 0) {
            return {
                t: pick([
                    "Shubh Aarambh! 🥥",          // Auspicious start
                    "Chala suru karuya! 🚀",      // Marathi: Let's start
                    "Abhi toh party shuru hui hai 🎉", 
                    "Ganpati Bappa Morya! 🐘",    // Classic Mumbai Start
                    "Account kholo bidu 🖊️",      // Open account
                    "Zero se Hero banna hai 🦸"
                ]),
                c: "#8b949e" // Grey text for neutral start
            };
        }

        // SCENARIO: ATTENDANCE LOGIC
        if (pct >= 90) return { t: pick(["Topper hai kya? 🤓", "Bas kar bhai, rulayega kya? 😭", "Chatur Ramalingam 2.0 📚", "Principal banega kya? 🏛️", "Abhyas karun karun maratos ka? 😵"]), c: "#3fb950" };
        if (pct >= 75) return { t: pick(["Life set hai bidu! 😎", "Aal iz well 🔔", "Tera bhai safe hai 🤝", "Vishay hard aahe pan card clear aahe 🔥", "Hawa aane de 💨"]), c: "#3fb950" };
        if (pct >= 65) return { t: pick(["Cut-to-cut game chalu hai 🏏", "Sambhal jaa bidu! ✋", "Thoda adjust karun gya saheb 🙏", "Kaathavar pass... 🧱", "Calculated risk le raha hai? 🧮"]), c: "#d29922" };
        if (pct >= 50) return { t: pick(["Dhak dhak horela hai 💓", "Khatron ke Khiladi 💀", "Defaulter list is calling 📞", "Lagli... Watt lagli 📉", "Moye Moye moment 🎶"]), c: "#d29922" };
        if (pct >= 30) return { t: pick(["Ghar pe baat karlo... 🏠", "HOD cabin ka rasta dekh le 🚪", "Aai baba na kalvava lagel 🥖", "Bag bharo, nikal lo 🎒", "Ab toh Bhagwan bharose 🙏"]), c: "#da3633" };
        
        // SCENARIO: 0% ATTENDANCE (But classes have happened)
        return { t: pick(["College rasta bhul gaya? 🗺️", "Agla saal wapas milte hai ✌️", "Tata Bye Bye Khatam 👋", "Tu tourist hai ya student? 🏖️", "Deva... uthav re mala 😩"]), c: "#da3633" };
    },

    // 2. CALCULATE OVERALL STATS
        updateOverall: function() {
        let totalP = 0;
        let totalT = 0;
        
        Object.values(this.globalStats).forEach(s => {
            totalP += s.p;
            totalT += s.t;
        });

        const pct = totalT === 0 ? 0 : Math.round((totalP/totalT)*100);
        
        // --- CHANGE: Pass totalT to the function ---
        const status = this.getStatus(pct, totalT);

        const pctEl = document.getElementById('overallPct');
        const textEl = document.getElementById('safeText');
        
        if(pctEl) pctEl.innerText = `${pct}%`;
        
        if(textEl) {
            textEl.innerText = status.t;
            // Optional: Make the text color match the status color
            // textEl.style.color = status.c; 
        }
    },

    // 3. WHATSAPP SHARE
            shareStats: function() {
        this.vibrate();
        const btn = document.querySelector('#statsCard button');
        const originalIcon = btn ? btn.innerHTML : '';
        if(btn) btn.innerHTML = '<i class="bi bi-hourglass-split"></i>'; 

        // 1. Calculate Data
        let totalP = 0, totalT = 0;
        Object.values(this.globalStats).forEach(s => { totalP += s.p; totalT += s.t; });
        const pct = totalT === 0 ? 0 : Math.round((totalP/totalT)*100);
        
        // --- CHANGE: Pass totalT here too ---
        const status = this.getStatus(pct, totalT);
        
        const statusText = status.t;
        const mainColor = status.c;

        // ... (Rest of the canvas drawing code remains exactly the same) ...
        // ...
        // ...
        
        // 2. Create Canvas (Copy the rest from previous step)
        const canvas = document.createElement('canvas');
        const size = 1080; 
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');

        // ... DRAWING CODE ...
        // A. Background
        const grd = ctx.createLinearGradient(0, 0, 0, size);
        grd.addColorStop(0, '#161b22'); 
        grd.addColorStop(1, '#0d1117'); 
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, size, size);

        // B. Header Text
        ctx.textAlign = "center";
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 60px Inter, sans-serif";
        ctx.fillText("ATTENDANCE CHECK", size/2, 150);

        ctx.fillStyle = "#f0f6fc"; 
        ctx.font = "600 50px Inter, sans-serif"; 
        const nameText = `${this.user.n} • ${this.user.id}`;
        ctx.fillText(nameText, size/2, 230);

        ctx.fillStyle = "#8b949e";
        ctx.font = "500 35px Inter, sans-serif";
        ctx.fillText("Computer Engineering • Div F", size/2, 290);

        // C. Progress Ring
        const centerX = size/2;
        const centerY = size/2 + 50; 
        const radius = 250;
        const lineWidth = 40;

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = "#21262d";
        ctx.lineWidth = lineWidth;
        ctx.lineCap = 'round';
        ctx.stroke();

        const startAngle = -0.5 * Math.PI; 
        const endAngle = ((pct / 100) * 2 * Math.PI) + startAngle;
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.strokeStyle = mainColor;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = 'round';
        ctx.shadowBlur = 30;
        ctx.shadowColor = mainColor;
        ctx.stroke();
        ctx.shadowBlur = 0; 

        // D. Center Stats
        ctx.fillStyle = mainColor;
        ctx.font = "bold 180px Inter, sans-serif";
        ctx.fillText(`${pct}%`, centerX, centerY + 60);

        // E. Status Text
        ctx.fillStyle = "#f0f6fc";
        ctx.font = "bold 50px Inter, sans-serif";
        ctx.fillText(statusText, centerX, 920);

        // F. Footer
        ctx.fillStyle = "#30363d";
        ctx.fillRect(100, 960, 880, 2); 

        ctx.fillStyle = "#8b949e";
        ctx.font = "500 35px Inter, sans-serif";
        ctx.fillText("RGIT Tracker", centerX, 1010);
        
        ctx.font = "600 35px Inter, sans-serif";
        ctx.fillStyle = "#58a6ff"; 
        ctx.fillText("Designed by Vaibhav", centerX, 1055);

        // Sharing Logic
        canvas.toBlob(async (blob) => {
            const file = new File([blob], "attendance_status.png", { type: "image/png" });
            if (navigator.share) {
                try { await navigator.share({ files: [file], title: 'My Attendance' }); } 
                catch (err) { console.log('Share closed'); }
            } else {
                const link = document.createElement('a');
                link.download = 'attendance.png';
                link.href = canvas.toDataURL();
                link.click();
            }
            if(btn) btn.innerHTML = originalIcon; 
        }, 'image/png');
    },

    // 4. RESET DATA
    resetData: function() {
        if(confirm('⚠️ Are you sure? This will delete ALL your attendance data permanently.')) {
            localStorage.removeItem(`log_${this.user.id}`);
            localStorage.removeItem(`stats_${this.user.id}`);
            location.reload();
        }
    },

    login: function() {
        const r = document.getElementById('rollInput').value;
        const student = RGIT_DATA.students[r];
        
        if(student) {
            this.user = { id:r, ...student };
            const remember = document.getElementById('rememberMe').checked;

            if (remember) {
                // Save permanently
                localStorage.setItem('rgit_user', JSON.stringify(this.user));
            } else {
                // Save only for this session
                sessionStorage.setItem('rgit_user', JSON.stringify(this.user));
                // Clear any old permanent data just in case
                localStorage.removeItem('rgit_user'); 
            }
            
            this.init();
        } else {
            document.getElementById('errorMsg').innerText = "Roll number not found!";
        }
    },

    logout: function() {
        if(confirm('Log out?')) {
            localStorage.removeItem('rgit_user');
            sessionStorage.removeItem('rgit_user');
            location.reload();
        }
    },
    
    // Helper for the keyboard fix (Add this if you haven't already)
    attachFocusListeners: function() {
        const inputField = document.getElementById('rollInput');
        const loginView = document.getElementById('loginView');
        if (inputField && loginView) {
            inputField.addEventListener('focus', () => loginView.classList.add('typing-mode'));
            inputField.addEventListener('blur', () => {
                setTimeout(() => loginView.classList.remove('typing-mode'), 200);
            });
        }
    },

    showMain: function() {
        document.getElementById('loginView').classList.add('hidden');
        document.getElementById('mainView').classList.remove('hidden');
        const firstName = this.user.n.split(" ")[1] || this.user.n.split(" ")[0];
        document.getElementById('userName').innerText = firstName;
        document.getElementById('userBatch').innerText = this.user.b;
        this.renderDateStrip();
        this.updateOverall();
        this.loadDay(this.selectedDate);
    },

        switchTab: function(tabName) {
        document.getElementById('navDash').classList.toggle('active', tabName === 'dashboard');
        document.getElementById('navSub').classList.toggle('active', tabName === 'subjects');

        if(tabName === 'dashboard') {
            document.getElementById('timelineList').classList.remove('hidden');
            document.getElementById('statsCard').classList.remove('hidden');
            document.getElementById('subjectList').classList.add('hidden');
            document.getElementById('dateStrip').style.display = 'flex';
            
            // --- UPDATED CODE HERE ---
            const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            document.getElementById('pageTitle').innerText = months[this.selectedDate.getMonth()];
            // -------------------------

        } else {
            document.getElementById('timelineList').classList.add('hidden');
            document.getElementById('statsCard').classList.add('hidden');
            document.getElementById('subjectList').classList.remove('hidden');
            document.getElementById('dateStrip').style.display = 'none';
            document.getElementById('pageTitle').innerText = "Analysis";
            this.renderSubjects();
        }
    },

        renderDateStrip: function() {
        const strip = document.getElementById('dateStrip');
        strip.innerHTML = '';
        const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        
        // --- NEW CODE START ---
        // Update the Page Title to the current Month
        if (document.getElementById('navDash').classList.contains('active')) {
            document.getElementById('pageTitle').innerText = months[this.selectedDate.getMonth()];
        }
        // --- NEW CODE END ---

        for(let i=-3; i<=3; i++) {
            const d = new Date(this.selectedDate);
            d.setDate(this.selectedDate.getDate() + i);
            const isSel = d.toDateString() === this.selectedDate.toDateString();
            const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
            const el = document.createElement('div');
            el.className = `date-item ${isSel ? 'active' : ''}`;
            el.onclick = () => { this.selectedDate = d; this.renderDateStrip(); this.loadDay(d); };
            el.innerHTML = `<span class="day">${days[d.getDay()]}</span><span class="num">${d.getDate()}</span>`;
            strip.appendChild(el);
        }
    },

    formatTime: function(time24) {
        if(!time24) return '';
        const [h, m] = time24.split(':');
        let hour = parseInt(h);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        hour = hour % 12;
        hour = hour ? hour : 12; 
        return `${hour}:${m} ${ampm}`;
    },

                loadDay: function(date) {
        const container = document.getElementById('timelineList');
        container.innerHTML = '';
        const dayIdx = date.getDay(); 
        const dateKey = date.toISOString().split('T')[0];
        const todaysClasses = RGIT_DATA.schedule[dayIdx];

        // --- SCENARIO 1: NO CLASSES (e.g. Sunday) ---
        if(!todaysClasses) {
            container.innerHTML = `
            <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:300px; color:var(--text-muted);">
                <i class="bi bi-cup-hot" style="font-size: 3rem; margin-bottom: 15px; opacity:0.5;"></i>
                <h3 style="margin:0; font-weight:600; color:var(--text-main);">No Classes Today</h3>
                <p style="margin:5px 0 0 0; font-size:0.9rem;">Enjoy your day off!</p>
            </div>
            <div class="scroll-credit" style="font-size: 0.9rem; opacity: 0.8; margin-top:-40px;">
                Made with ❤️ by <b>Vaibhav</b>
            </div>`;
            return;
        }

        // --- SCENARIO 2: CLASSES EXIST ---
        todaysClasses.forEach(slot => {
            if(slot.type === 'BREAK') {
                container.innerHTML += `
                <div class="timeline-row">
                    <div class="time-col">
                        <div>${this.formatTime(slot.t)}</div>
                        <div class="end-time">${this.formatTime(slot.e)}</div>
                    </div>
                    <div class="line-col">
                        <div class="dot" style="background:#8b949e"></div>
                        <div class="line"></div>
                    </div>
                    <div class="card-col">
                        <div class="class-card recess-card">
                            <div class="recess-title">☕ Recess</div>
                        </div>
                    </div>
                </div>`;
                return;
            }

            // Determine Subject Code
            let code = slot.c;
            if(slot.map) code = slot.map[this.user.b];
            
            // Determine Room Number
            let room = slot.r || ""; 
            if(slot.rMap) room = slot.rMap[this.user.b];
            
            // Create Room HTML
            const roomHtml = room ? `<div class="room-loc"><i class="bi bi-geo-alt-fill"></i> ${room}</div>` : '';

            const uniqueKey = `${code}_${slot.type}`;
            const meta = RGIT_DATA.subjects[code] || {name: code, prof: ""};
            const dailyStatus = (this.attendanceLog[dateKey] && this.attendanceLog[dateKey][uniqueKey]) || null;
            
            if(!this.globalStats[uniqueKey]) this.globalStats[uniqueKey] = {p:0, t:0};
            const stats = this.globalStats[uniqueKey];
            const pct = stats.t === 0 ? 0 : Math.round((stats.p/stats.t)*100);
            
            let ringColor = '#da3633';
            if(pct >= 75) ringColor = '#3fb950';
            else if(pct >= 60) ringColor = '#d29922';

            container.innerHTML += `
            <div class="timeline-row">
                <div class="time-col">
                    <div>${this.formatTime(slot.t)}</div>
                    <div class="end-time">${this.formatTime(slot.e)}</div>
                    ${roomHtml} 
                </div>
                <div class="line-col">
                    <div class="dot ${this.isNow(slot.t) ? 'active' : ''}"></div>
                    <div class="line"></div>
                </div>
                <div class="card-col">
                    <div class="class-card ${this.isNow(slot.t) ? 'now-glow' : ''}">
                        <div class="card-header">
                            <div class="subject-info">
                                <div class="subject-row">
                                    <span class="code">${code}</span>
                                    <span class="tag ${slot.type}">${slot.type}</span>
                                </div>
                                <span class="name">${meta.name}</span>
                                <span class="prof">${meta.prof}</span>
                            </div>
                            <div class="ring-container">
                                <svg class="ring-svg"><circle cx="21" cy="21" r="18" class="ring-bg"></circle>
                                <circle cx="21" cy="21" r="18" class="ring-val" stroke="${ringColor}" stroke-dasharray="113" stroke-dashoffset="${113 - (113*pct)/100}"></circle></svg>
                                <div class="ring-text" style="color:${ringColor}">${pct}%</div>
                            </div>
                        </div>
                        <div class="btn-grid">
                            <button class="act-btn can ${dailyStatus==='C'?'active':''}" onclick="app.toggle('${dateKey}', '${uniqueKey}', 'C')"><i class="bi bi-slash-circle"></i> Can</button>
                            <button class="act-btn abs ${dailyStatus==='A'?'active':''}" onclick="app.toggle('${dateKey}', '${uniqueKey}', 'A')"><i class="bi bi-x-circle"></i> Abs</button>
                            <button class="act-btn pre ${dailyStatus==='P'?'active':''}" onclick="app.toggle('${dateKey}', '${uniqueKey}', 'P')"><i class="bi bi-check-circle"></i> Pre</button>
                        </div>
                    </div>
                </div>
            </div>`;
        });

        // --- ADDED: WATERMARK AT BOTTOM OF LIST ---
        container.innerHTML += `
            <div style="text-align:center; margin-top: 25px;">
                <div style="font-size:0.7rem; color:var(--text-muted); opacity:0.6; margin-bottom: 6px;">
                    <i class="bi bi-info-circle"></i> Tip: Go to <b>Subjects</b> tab to reset data
                </div>
            <div class="scroll-credit" style="margin-top: 20px;">
                Made with ❤️ by <b>Vaibhav</b>
            </div>`;
    },

    toggle: function(dateKey, uniqueKey, newStatus) {
        this.vibrate(); 

        if(!this.attendanceLog[dateKey]) this.attendanceLog[dateKey] = {};
        
        const currentStatus = this.attendanceLog[dateKey][uniqueKey];
        if(!this.globalStats[uniqueKey]) this.globalStats[uniqueKey] = {p:0, t:0};
        let stats = this.globalStats[uniqueKey];

        if(currentStatus) {
            if(currentStatus === 'P') { stats.p--; stats.t--; }
            if(currentStatus === 'A') { stats.t--; }
            delete this.attendanceLog[dateKey][uniqueKey];
        }

        if(currentStatus !== newStatus) {
            if(newStatus === 'P') { stats.p++; stats.t++; }
            if(newStatus === 'A') { stats.t++; }
            this.attendanceLog[dateKey][uniqueKey] = newStatus;
        }

        localStorage.setItem(`log_${this.user.id}`, JSON.stringify(this.attendanceLog));
        localStorage.setItem(`stats_${this.user.id}`, JSON.stringify(this.globalStats));
        
        this.updateOverall();
        this.loadDay(this.selectedDate);
    },

                renderSubjects: function() {
        const container = document.getElementById('subjectList');
        container.innerHTML = ''; 
        const subjects = Object.keys(RGIT_DATA.subjects);
        
        // 1. Generate Subject Cards (Same as before)
        subjects.forEach(code => {
            const subjectData = RGIT_DATA.subjects[code];
            const types = subjectData.types || ['LEC'];
            let rowsHtml = '';
            
            types.forEach(type => {
                const key = `${code}_${type}`;
                const stats = this.globalStats[key] || {p:0, t:0};
                const pct = stats.t === 0 ? 0 : Math.round((stats.p / stats.t) * 100);
                
                let colorVar = 'var(--red-bar)';
                let predMsg = 'No classes yet.';
                let predClass = 'pred-red';

                if(stats.t > 0) {
                    if(pct >= 75) {
                        colorVar = 'var(--green-bar)';
                        const bunks = Math.floor((4*stats.p - 3*stats.t)/3);
                        predClass = 'pred-green';
                        predMsg = bunks > 0 ? `Safe! You can bunk <b>${bunks}</b> next ${type}s.` : `Safe, but don't miss the next one!`;
                    } else {
                        const need = Math.ceil(3*stats.t - 4*stats.p);
                        predMsg = `Danger! You must attend next <b>${need}</b> ${type}s.`;
                        if(pct >= 60) colorVar = 'var(--yellow-bar)';
                    }
                } else {
                     colorVar = '#30363d'; predClass = '';
                }

                rowsHtml += `
                    <div class="stat-row">
                        <span class="tag ${type} stat-tag">${type}</span>
                        <div class="progress-track"><div class="progress-fill" style="width:0%; background:${colorVar}" data-width="${pct}%"></div></div>
                        <span class="stat-pct" style="color:${colorVar}">${pct}%</span>
                    </div>
                    <div class="stat-details">${stats.p}/${stats.t} Attended<div class="prediction-box ${predClass}">${predMsg}</div></div>
                `;
            });

            container.innerHTML += `<div class="sub-card"><div class="sub-title">${subjectData.name}</div>${rowsHtml}</div>`;
        });

        // 2. SMART INSTALL SECTION
        let installHtml = '';
        
        // Scenario A: Android/Chrome (Can install automatically)
        if (window.deferredPrompt) {
            installHtml = `
                <button onclick="app.triggerInstall()" style="background: var(--accent); color: white; border: none; padding: 12px 24px; border-radius: 12px; font-weight: 600; margin-bottom: 25px; cursor: pointer; display: flex; align-items: center; gap: 8px; margin-left: auto; margin-right: auto;">
                    <i class="bi bi-download"></i> Install App
                </button>
            `;
        } 
        // Scenario B: iPhone/iPad (Must use text instructions)
        else {
            installHtml = `
                <div style="background: var(--bg-card); border: 1px dashed var(--border); padding: 15px; border-radius: 12px; margin-bottom: 25px; font-size: 0.85rem; color: var(--text-muted);">
                    <i class="bi bi-phone" style="font-size: 1.2rem; color: var(--accent); margin-bottom: 6px; display: block;"></i>
                    <strong>Install App:</strong> Tap <i class="bi bi-three-dots-vertical"></i> or <i class="bi bi-share"></i> then select <b>"Add to Home Screen"</b>
                </div>
            `;
        }

        container.innerHTML += `
            <div style="text-align: center; margin-top: 25px; padding: 0 20px 20px;">
                ${installHtml}
                <button onclick="app.resetData()" style="background:none; border:none; color:var(--red-text); font-size:0.85rem; cursor:pointer; opacity: 0.8;">
                    <i class="bi bi-trash"></i> Reset All Data
                </button>
                <div class="scroll-credit" style="margin-top: 15px;">Made with ❤️ by <b>Vaibhav</b></div>
            </div>
        `;

        setTimeout(() => { document.querySelectorAll('.progress-fill').forEach(el => { el.style.width = el.getAttribute('data-width'); }); }, 50);
    },

    // 3. Add the Trigger Function
    triggerInstall: async function() {
        if (window.deferredPrompt) {
            window.deferredPrompt.prompt(); // Show the native prompt
            const { outcome } = await window.deferredPrompt.userChoice;
            console.log(`User response: ${outcome}`);
            window.deferredPrompt = null; // Used once, discard it
            this.renderSubjects(); // Hide the button
        }
    },

    isNow: function(t) {
        const h = new Date().getHours();
        const slotH = parseInt(t.split(':')[0]);
        return h === slotH;
    }
};

// FIX: Handle Input Focus for Mobile
const inputField = document.getElementById('rollInput');
const loginView = document.getElementById('loginView');

if (inputField) {
    // When user taps/focuses the input
    inputField.addEventListener('focus', function() {
        // Add the class to move UI to top
        loginView.classList.add('typing-mode');
    });

    // When user clicks outside or closes keyboard
    inputField.addEventListener('blur', function() {
        // Delay slightly to allow clicks on buttons to register
        setTimeout(() => {
            loginView.classList.remove('typing-mode');
        }, 200);
    });
}

app.init();