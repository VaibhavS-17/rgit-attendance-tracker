// --- PWA INSTALL LOGIC ---
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (app && document.getElementById('subjectList')) {
        app.renderSubjects();
    }
});

// --- 1. DATA ---
const RGIT_DATA = {
    students: {
        // --- DIV A (101 - 161) ---
        "101": { n: "ADAGA NITESH", b: "A1" },
        "102": { n: "AJGAONKAR GAURANG", b: "A1" },
        "103": { n: "ANSARI MOHAMMAD HAMZA", b: "A1" },
        "104": { n: "AZHARI AFRA", b: "A1" },
        "105": { n: "BARDE KEYAA", b: "A1" },
        "106": { n: "BHURE SUYASH", b: "A1" },
        "107": { n: "BHAGAT ADITYA", b: "A1" },
        "108": { n: "BHARANKAR SHREEJEET", b: "A1" },
        "109": { n: "BILLAVA AMIT", b: "A1" },
        "110": { n: "BOKADE ABHIJIT", b: "A1" },
        "111": { n: "BONDRE VAISHNAVI", b: "A1" },
        "112": { n: "CHAUHAN ASHISH", b: "A1" },
        "113": { n: "CHIPAT ARYAN", b: "A1" },
        "114": { n: "CHOGALE KRISHNA", b: "A1" },
        "115": { n: "CHOPKAR ASHLESH", b: "A1" },
        "116": { n: "DAKHNI MOHAMMAD", b: "A1" },
        "117": { n: "DEOLIA SPARSH", b: "A1" },
        "118": { n: "DHANAWADE SHUBHAM", b: "A1" },
        "119": { n: "DHUMAL PRAJYOT", b: "A1" },
        "120": { n: "DHUMAL TANISH", b: "A1" },
        "121": { n: "DUBEY ANSH", b: "A1" },
        "122": { n: "FAROOQUI MOHAMMED", b: "A1" },
        "123": { n: "GAIKWAD ADWAIT", b: "A1" },
        "124": { n: "GHULE PRIYANKA", b: "A2" },
        "125": { n: "HAIDER MOHAMMED", b: "A2" },
        "126": { n: "GIJE AAYUSH", b: "A2" },
        "127": { n: "GOHANE PRADYUAM", b: "A2" },
        "128": { n: "GUJJETI VIDYA", b: "A2" },
        "129": { n: "GUPTA JANHAVI", b: "A2" },
        "130": { n: "HARYAN ANANT", b: "A2" },
        "131": { n: "JAISWAL SURYANSHI", b: "A2" },
        "132": { n: "JAISWAL PRINCE", b: "A2" },
        "133": { n: "JAITAPKAR OM", b: "A2" },
        "134": { n: "JAMBEKAR ATHARV", b: "A2" },
        "135": { n: "JHA SANDIP", b: "A2" },
        "136": { n: "KAMBLE PRACHI", b: "A2" },
        "137": { n: "KARANDE ADITYA", b: "A2" },
        "138": { n: "KENI MANAS", b: "A2" },
        "139": { n: "KHAN MAWIYAH", b: "A2" },
        "140": { n: "KHATATE PIYUSH", b: "A2" },
        "141": { n: "KOKANE PRANAV", b: "A2" },
        "142": { n: "KHAN MOHD AALIM", b: "A2" },
        "143": { n: "KOUNDAR VISURUTHIKKUMAR", b: "A2" },
        "144": { n: "KSHIRSAGAR GAURAV", b: "A2" },
        "145": { n: "KUDEKAR TANISH", b: "A2" },
        "146": { n: "KUMAR TARUN", b: "A2" },
        "147": { n: "KUMAVAT DEVESH", b: "A3" },
        "148": { n: "LAGADE YASH", b: "A3" },
        "149": { n: "MANANI PRATHAM", b: "A3" },
        "150": { n: "MANKAR TANISH", b: "A3" },
        "151": { n: "MATKAR TANISH", b: "A3" },
        "152": { n: "PANDEY HIMESH", b: "A3" },
        "153": { n: "METHWALE CHAITANYA", b: "A3" },
        "154": { n: "MORE ADITYA", b: "A3" },
        "155": { n: "MUNGASE PAYAL", b: "A3" },
        "156": { n: "NAGMOTI TANMAY", b: "A3" },
        "157": { n: "TARAFDER MANYA", b: "A3" },
        "158": { n: "NAIK ROHIT", b: "A3" },
        "159": { n: "ALTAMASH MOHAMMED", b: "A3" },
        "160": { n: "AMBHIRE ISHAN", b: "A3" },
        "161": { n: "DESAI SHAIVI", b: "A3" },

        // --- DIV F (601 - 660) ---
        "601": { n: "NANDAL AKSHAYA", b: "F1" },
        "602": { n: "CHOHAN MOHAMMED", b: "F1" },
        "603": { n: "PARAB GAYATRI", b: "F1" },
        "604": { n: "PARAB RUTUJA", b: "F1" },
        "605": { n: "PATIL ARYA", b: "F1" },
        "606": { n: "PATIL GAURAV", b: "F1" },
        "607": { n: "PATIL HARIOM", b: "F1" },
        "608": { n: "PATIL KRUPA", b: "F1" },
        "609": { n: "PATIL MIRA", b: "F1" },
        "610": { n: "PATIL PRATIK", b: "F1" },
        "611": { n: "PATIL PRAPTI", b: "F1" },
        "612": { n: "PATIL TEJASVEE", b: "F1" },
        "613": { n: "PAWAR SOHAM", b: "F1" },
        "614": { n: "PIMPLE RAHI", b: "F1" },
        "615": { n: "PURADKAR VEDANT", b: "F1" },
        "616": { n: "SABLE VAIBHAV", b: "F1" },
        "617": { n: "SAHARE ADITYA", b: "F1" },
        "618": { n: "SANGALE DNYANESHWAR", b: "F1" },
        "619": { n: "SAWANT ATHARVA", b: "F1" },
        "620": { n: "CHOUDHARI MADHURA", b: "F1" },
        "621": { n: "SAYYED KAUSARBANO", b: "F1" },
        "622": { n: "SHAIKH NILOFER", b: "F1" },
        "623": { n: "SHARMA BHARATI", b: "F1" },
        "624": { n: "SHELAR AYUSH", b: "F2" },
        "625": { n: "SHELKE ARPITA", b: "F2" },
        "626": { n: "SHELKE SHRUTI", b: "F2" },
        "627": { n: "SINGH ATHARVA", b: "F2" },
        "628": { n: "SINGH KRITHARTH", b: "F2" },
        "629": { n: "SINGH SAURABH", b: "F2" },
        "630": { n: "SUPUGADE PRANAV", b: "F2" },
        "631": { n: "SUTAR PARTH", b: "F2" },
        "632": { n: "TADASE OM", b: "F2" },
        "633": { n: "DEVRUSHI SIDDHANT", b: "F2" },
        "634": { n: "THAKUR RUTUJA", b: "F2" },
        "635": { n: "THOBHANI ARYAN", b: "F2" },
        "636": { n: "TIWARI RISHAV", b: "F2" },
        "637": { n: "TOSHNIWAL MADHAV", b: "F2" },
        "638": { n: "TRIVEDI ANANT", b: "F2" },
        "639": { n: "TUMBADA JAGRUTI", b: "F2" },
        "640": { n: "VARMA HARSHIT", b: "F2" },
        "641": { n: "VHATTE VIVEKANAND", b: "F2" },
        "642": { n: "KHEDEKAR ARYAN", b: "F2" },
        "643": { n: "MASURKAR ATHARVA", b: "F2" },
        "644": { n: "MHATRE KANISHKA", b: "F2" },
        "645": { n: "MISHRA PRIYAL", b: "F2" },
        "646": { n: "NAGAR SURUCHI", b: "F2" },
        "647": { n: "PADHI SHUBAN", b: "F3" },
        "648": { n: "PANDAWVEER SRUSHTI", b: "F3" },
        "649": { n: "PATEL ARYA", b: "F3" },
        "650": { n: "PATIL CHINMAY", b: "F3" },
        "651": { n: "RAJPUROHIT RAMSINGH", b: "F3" },
        "652": { n: "SALIAN RUSHIL", b: "F3" },
        "653": { n: "SANKHE ARYAN", b: "F3" },
        "654": { n: "SANKPAL ARYAN", b: "F3" },
        "655": { n: "SAWANT SARVESH", b: "F3" },
        "656": { n: "SHARMA HARDIK", b: "F3" },
        "657": { n: "SHARMA MANAV", b: "F3" },
        "658": { n: "SOLUNKE SHREYAS", b: "F3" },
        "659": { n: "SRIVASTAVA ROHIT", b: "F3" },
        "660": { n: "VAIDIKAR GANGOTRI", b: "F3" }
    },

    subjects: {
        "EP": {
            name: "Elective Physics",
            prof: {
                "A": "Dr. K.G. Chaudhari",
                "F": "Dr. Y.S. Patil"
            },
            types: ["LEC", "PRAC"]
        },
        "EC": {
            name: "Elective Chemistry",
            prof: {
                "A": "Dr. Neeta Kapase",
                "F": "Dr. Pallavi S. Dikkar"
            },
            types: ["LEC", "PRAC"]
        },
        "IKS": {
            name: "Indian Knowledge Sys",
            prof: {
                "A": "Prof. D.K. Chakradev",
                "F": "Prof. D.K. Chakradev"
            },
            types: ["LEC", "PRAC"]
        },
        "PP": {
            name: "Python Programming",
            prof: {
                "A": "Prof. Deepak Gaikar",
                "F": "Prof. Deepak Gaikar"
            },
            types: ["LEC", "PRAC"]
        },
        "DS": {
            name: "Data Structures",
            prof: {
                "A": "Prof. D.M. Dalgade",
                "F": "Prof. Kajal Sharma"
            },
            types: ["LEC", "PRAC"]
        },
        "EG": {
            name: "Engg. Graphics",
            prof: {
                "A": "Dr. Y.P. Deshmukh",
                "F": "Prof. R.N. Shanmukha"
            },
            types: ["LEC", "PRAC"]
        },
        "AM-II": {
            name: "Applied Maths-II",
            prof: {
                "A": "Prof. Shalini Sharma",
                "F": "Prof. B.B. Sawant"
            },
            types: ["LEC", "TUT"]
        },
        "SS&CS": {
            name: "Social Science",
            prof: {
                "A": "Prof. D.K. Chakradev",
                "F": "Prof. D.K. Chakradev"
            },
            types: ["LEC", "PRAC"]
        },
        "WS-II": {
            name: "Workshop-II",
            prof: {
                "A": "Workshop Staff",
                "F": "Workshop Staff"
            },
            types: ["PRAC"]
        }
    },

    schedules: {
        // --- DIVISION A SCHEDULE ---
        "A": {
            1: [ // MON
                { t: "08:30", e: "10:30", c: "PP", type: "PRAC", r:"B-11" },
                { t: "10:30", e: "11:30", c: "AM-II", type: "LEC", r: "B-21" },
                { t: "11:30", e: "12:30", c: "EC", type: "LEC", r: "B-21" },
                { t: "12:30", e: "13:15", type: "BREAK", name: "RECESS" },
                { t: "13:15", e: "14:15", c: "IKS", type: "LEC", r: "B-21" }
            ],
            2: [ // TUE
                { t: "08:30", e: "09:30", c: "EG", type: "LEC", r: "B-21" },
                { t: "09:30", e: "10:30", c: "EP", type: "LEC", r: "B-21" },
                { t: "10:30", e: "12:30", 
                  map: { "A2": "DS" }, 
                  rMap: { "A2":"DS Lab" },
                  type: "PRAC" 
                },
                { t: "10:30", e: "11:30", 
                  map: { "A1": "EP", "A3": "EC" }, 
                  rMap: { "A1":"Phy Lab", "A3":"Chem Lab" },
                  type: "PRAC" 
                },
                { t: "11:30", e: "12:30", 
                  map: { "A1": "EC", "A3": "EP" }, 
                  rMap: { "A1":"Chem Lab", "A3":"Phy Lab" },
                  type: "PRAC" 
                },
                { t: "12:30", e: "13:15", type: "BREAK", name: "RECESS" },
                { t: "13:15", e: "14:15", c: "AM-II", type: "LEC", r: "B-21" },
                { t: "14:15", e: "15:15", c: "PP", type: "LEC", r: "B-21" },
                { t: "15:15", e: "16:15", c: "IKS", type: "LEC", r: "B-21" }
            ],
            3: [ // WED
                { t: "08:30", e: "09:30", c: "IKS", type: "LEC", r: "B-21" },
                { t: "09:30", e: "10:30", c: "DS", type: "LEC", r: "B-21" },
                { t: "10:30", e: "11:30", c: "EC", type: "LEC", r: "B-21" },
                { t: "11:30", e: "12:30", c: "EG", type: "LEC", r: "B-21" },
                { t: "12:30", e: "13:15", type: "BREAK", name: "RECESS" },
                { t: "13:15", e: "15:15", 
                   c: "EG", 
                   rMap: { "A1":"B-21", "A2":"B-21", "A3":"C-23" },
                   type: "PRAC" 
                },
                { t: "15:15", e: "16:15", c: "AM-II", type: "TUT", r: "B-11" }
            ],
            4: [ // THU
                { t: "08:30", e: "10:30",
                  map: { "A1": "DS", "A3": "WS-II" },
                  rMap: { "A1":"DS Lab", "A3":"Workshop" },
                  type: "PRAC"
                },
                { t: "08:30", e: "09:30",
                  map: { "A2": "EC", },
                  rMap: { "A2":"Chem Lab", },
                  type: "PRAC"
                },
                { t: "09:30", e: "10:30",
                  map: { "A2": "EP", },
                  rMap: { "A2":"Phy Lab", },
                  type: "PRAC"
                },
                { t: "10:30", e: "11:30", c: "SS&CS", type: "LEC", r: "A-26" },
                { t: "11:30", e: "12:30", type: "BREAK", name: "RECESS" },
                { t: "12:30", e: "13:15", c: "EP", type: "LEC", r: "B-21" },
                { t: "13:15", e: "14:15", c: "AM-II", type: "LEC", r: "B-21" },
                { t: "14:15", e: "15:15", c: "SS&CS", type: "LEC", r: "B-21" }
            ],
            5: [ // FRI
                { t: "08:30", e: "10:30",
                  map: { "A1": "WS-II", "A2": "WS-II", "A3": "DS" },
                  rMap: { "A1":"Workshop", "A2":"Workshop", "A3":"DS Lab" },
                  type: "PRAC"
                },
                { t: "10:30", e: "11:30", c: "PP", type: "LEC", r: "C-22" },
                { t: "11:30", e: "12:30", c: "EG", type: "LEC", r: "C-22" },
                { t: "12:30", e: "13:15", type: "BREAK", name: "RECESS" },
                { t: "13:15", e: "14:15", c: "DS", type: "LEC", r: "C-22" },
                { t: "14:15", e: "15:15", c: "SS&CS", type: "LEC", r: "C-22" }
            ]
        },

        // --- DIVISION F SCHEDULE ---
        "F": {
            1: [ // MON
                { t: "08:30", e: "09:30", c: "EP", type: "LEC", r: "C-22" },
                { t: "09:30", e: "10:30", c: "EC", type: "LEC", r: "C-22" },
                { t: "10:30", e: "11:30", c: "IKS", type: "LEC", r: "C-22" },
                { t: "11:30", e: "12:30", c: "PP", type: "LEC", r: "C-22" },
                { t: "12:30", e: "13:15", type: "BREAK", name: "RECESS" },
                { t: "13:15", e: "15:15", map: { "F1": "WS-II", "F2": "WS-II", "F3": "DS" }, rMap: { "F1": "Workshop", "F2": "Workshop", "F3": "DS Lab" }, type: "PRAC" },
                { t: "15:15", e: "16:15", c: "AM-II", type: "TUT", r: "B-11" }
            ],
            2: [ // TUE
                { t: "08:30", e: "10:30", map: { "F1": "DS", "F3": "WS-II" }, rMap: { "F1": "DS Lab", "F3": "Workshop" }, type: "PRAC" },
                { t: "08:30", e: "09:30", map: { "F2": "EC" }, rMap: { "F2": "Chem Lab" }, type: "PRAC" },
                { t: "09:30", e: "10:30", map: { "F2": "EP" }, rMap: { "F2": "Phy Lab" }, type: "PRAC" },
                { t: "10:30", e: "11:30", c: "DS", type: "LEC", r: "B-22" },
                { t: "11:30", e: "12:30", c: "PP", type: "LEC", r: "B-22" },
                { t: "12:30", e: "13:15", type: "BREAK", name: "RECESS" },
                { t: "13:15", e: "15:15", c: "SS&CS", type: "PRAC", r: "C-26" }
            ],
            3: [ // WED
                { t: "08:30", e: "10:30", map: { "F2": "DS" }, rMap: { "F2": "DS Lab" }, type: "PRAC" },
                { t: "08:30", e: "09:30", map: { "F1": "EP", "F3": "EC" }, rMap: { "F1": "Phy Lab", "F3": "Chem Lab" }, type: "PRAC" },
                { t: "09:30", e: "10:30", map: { "F1": "EC", "F3": "EP" }, rMap: { "F1": "Chem Lab", "F3": "Phy Lab" }, type: "PRAC" },
                { t: "10:30", e: "12:30", c: "IKS", type: "PRAC", r: "A-26" },
                { t: "12:30", e: "13:15", type: "BREAK", name: "RECESS" },
                { t: "13:15", e: "14:15", c: "EG", type: "LEC", r: "C-22" },
                { t: "14:15", e: "15:15", c: "AM-II", type: "LEC", r: "C-22" },
                { t: "15:15", e: "16:15", c: "IKS", type: "LEC", r: "C-22" }
            ],
            4: [ // THU
                { t: "08:30", e: "09:30", c: "SS&CS", type: "LEC", r: "C-22" },
                { t: "09:30", e: "10:30", c: "EG", type: "LEC", r: "C-22" },
                { t: "10:30", e: "12:15", c: "PP", type: "PRAC", r: "B-11" },
                { t: "12:15", e: "13:15", type: "BREAK", name: "RECESS" },
                { t: "13:15", e: "14:15", c: "DS", type: "LEC", r: "B-22" },
                { t: "14:15", e: "15:15", c: "AM-II", type: "LEC", r: "B-22" }
            ],
            5: [ // FRI
                { t: "08:30", e: "09:30", c: "EC", type: "LEC", r: "B-23" },
                { t: "09:30", e: "10:30", c: "SS&CS", type: "LEC", r: "B-23" },
                { t: "10:30", e: "11:30", c: "AM-II", type: "LEC", r: "B-23" },
                { t: "11:30", e: "12:30", c: "EP", type: "LEC", r: "B-23" },
                { t: "12:30", e: "13:15", type: "BREAK", name: "RECESS" },
                { t: "13:15", e: "14:15", c: "EG", type: "LEC", r: "B-23" },
                { t: "14:15", e: "16:15", c: "EG", rMap: { "F1": "B-23", "F2": "B-23", "F3": "C-23" }, type: "PRAC" }
            ]
        }
    }
};

const app = {
    user: null,
    selectedDate: new Date(),
    attendanceLog: {},
    globalStats: {},
    extraClasses: {},
    currentExtraType: 'LEC',

    getSafeDateKey: function(dateObj) {
        const y = dateObj.getFullYear();
        const m = String(dateObj.getMonth() + 1).padStart(2, '0');
        const d = String(dateObj.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
    },

    // HELPER: Detect Division (A vs F)
    getUserDiv: function() {
        if(!this.user) return 'F';
        return parseInt(this.user.id) < 400 ? 'A' : 'F'; 
    },

    init: function() {
        const u = localStorage.getItem('rgit_user') || sessionStorage.getItem('rgit_user');

        if (u) {
            this.user = JSON.parse(u);
            this.attendanceLog = JSON.parse(localStorage.getItem(`log_${this.user.id}`) || '{}');
            this.globalStats = JSON.parse(localStorage.getItem(`stats_${this.user.id}`) || '{}');
            this.extraClasses = JSON.parse(localStorage.getItem(`extra_${this.user.id}`) || '{}');
            this.recalculateAllStats();
            this.showMain();
        } else {
            document.getElementById('loginView').classList.remove('hidden');
            this.attachFocusListeners();
        }
    },

    vibrate: function() {
        if (navigator.vibrate) navigator.vibrate(50);
    },

    getStatus: function(pct, totalT) {
        const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

        if (totalT === 0) {
            return {
                t: pick(["Shubh Aarambh! 🥥", "Chala suru karuya! 🚀", "Abhi toh party shuru hui hai 🎉", "Ganpati Bappa Morya! 🙏", "Account kholo bidu 🖊️", "Zero se Hero banna hai 🦸"]),
                c: "#8b949e"
            };
        }

        if (pct >= 90) return {
            t: pick(["Topper hai kya? 🤓", "Bas kar bhai, rulayega kya? 😭", "Chatur Ramalingam 2.0 📚", "Principal banega kya? 🏛️", "Abhyas karun karun maratos ka? 😵"]),
            c: "#3fb950"
        };
        if (pct >= 75) return {
            t: pick(["Life set hai bidu! 😎", "Aal iz well 🔔", "Tera bhai safe hai 🤝", "Vishay hard aahe pan card clear aahe 🔥", "Hawa aane de 💨"]),
            c: "#3fb950"
        };
        if (pct >= 65) return {
            t: pick(["Cut-to-cut game chalu hai 🏏", "Sambhal jaa bidu! ✋", "Thoda adjust karun gya saheb 🙏", "Kaathavar pass... 🧱", "Calculated risk le raha hai? 🧮"]),
            c: "#d29922"
        };
        if (pct >= 50) return {
            t: pick(["Dhak dhak horela hai 💓", "Khatron ke Khiladi 💀", "Defaulter list is calling 📞", "Lagli... Watt lagli 📉", "Moye Moye moment 🎶"]),
            c: "#d29922"
        };
        if (pct >= 30) return {
            t: pick(["Ghar pe baat karlo... 🏠", "HOD cabin ka rasta dekh le 🚪", "Aai baba na kalvava lagel 🥖", "Bag bharo, nikal lo 🎒", "Ab toh Bhagwan bharose 🙏"]),
            c: "#da3633"
        };

        return {
            t: pick(["College rasta bhul gaya? 🗺️", "Agla saal wapas milte hai ✌️", "Tata Bye Bye Khatam 👋", "Tu tourist hai ya student? 🏖️", "Deva... uthav re mala 😩"]),
            c: "#da3633"
        };
    },

    updateOverall: function() {
        let totalP = 0,
            totalT = 0;
        Object.values(this.globalStats).forEach(s => {
            totalP += s.p;
            totalT += s.t;
        });
        const pct = totalT === 0 ? 0 : Math.round((totalP / totalT) * 100);
        const status = this.getStatus(pct, totalT);

        const pctEl = document.getElementById('overallPct');
        const textEl = document.getElementById('safeText');
        if (pctEl) pctEl.innerText = `${pct}%`;
        if (textEl) textEl.innerText = status.t;
    },

    shareStats: function() {
        this.vibrate();
        const btn = document.querySelector('#statsCard button');
        const originalIcon = btn ? btn.innerHTML : '';
        if (btn) btn.innerHTML = '<i class="bi bi-hourglass-split"></i>';

        let totalP = 0,
            totalT = 0;
        Object.values(this.globalStats).forEach(s => {
            totalP += s.p;
            totalT += s.t;
        });
        const pct = totalT === 0 ? 0 : Math.round((totalP / totalT) * 100);
        const status = this.getStatus(pct, totalT);
        const now = new Date();
        const dateStr = now.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });

        const canvas = document.createElement('canvas');
        const size = 1080;
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');

        // --- BACKGROUND ---
        ctx.fillStyle = "#050505";
        ctx.fillRect(0, 0, size, size);

        ctx.lineWidth = 1;
        ctx.strokeStyle = "rgba(40, 40, 40, 0.3)";
        for (let i = 0; i < size; i += 108) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, size);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(0, i);
            ctx.lineTo(size, i);
            ctx.stroke();
        }

        function drawBox(x, y, w, h, color = "#161b22") {
            ctx.fillStyle = color;
            ctx.shadowBlur = 0;
            ctx.beginPath();
            ctx.roundRect(x, y, w, h, 32);
            ctx.fill();
            ctx.lineWidth = 2;
            ctx.strokeStyle = "rgba(255,255,255,0.08)";
            ctx.stroke();
        }

        const pad = 60;
        const gap = 30;
        const boxW_Full = size - (pad * 2);

        const h1 = 240;
        drawBox(pad, pad, boxW_Full, h1);

        const h2 = 520;
        const w2 = 550;
        drawBox(pad, pad + h1 + gap, w2, h2);

        const w3 = boxW_Full - w2 - gap;
        const h3 = (h2 - gap) / 2;
        drawBox(pad + w2 + gap, pad + h1 + gap, w3, h3);
        drawBox(pad + w2 + gap, pad + h1 + gap + h3 + gap, w3, h3);

        const h4 = 130;
        const y4 = pad + h1 + gap + h2 + gap;

        ctx.shadowBlur = 40;
        ctx.shadowColor = status.c;
        drawBox(pad, y4, boxW_Full, h4, "#0d1117");
        ctx.strokeStyle = status.c;
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.shadowBlur = 0;

        ctx.textAlign = "left";

        ctx.fillStyle = "#8b949e";
        ctx.font = "600 24px Inter, sans-serif";
        ctx.fillText("ATTENDANCE STATUS", pad + 50, pad + 60);

        ctx.textAlign = "right";
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 32px Inter, sans-serif";
        ctx.fillText(dateStr, pad + boxW_Full - 50, pad + 65);
        ctx.textAlign = "left";

        ctx.fillStyle = "#ffffff";
        ctx.font = "800 65px Inter, sans-serif";
        ctx.fillText(this.user.n, pad + 45, pad + 145);

        // UPDATED: Removed separate Division text
        ctx.fillStyle = "#58a6ff";
        ctx.font = "500 32px Inter, sans-serif";
        ctx.fillText(`${this.user.id} • Batch ${this.user.b}`, pad + 50, pad + 195);

        const cx = pad + (w2 / 2);
        const cy = pad + h1 + gap + (h2 / 2);
        const r = 160;

        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.lineWidth = 30;
        ctx.strokeStyle = "rgba(255,255,255,0.05)";
        ctx.stroke();

        const endAngle = ((pct / 100) * 2 * Math.PI) - 0.5 * Math.PI;

        ctx.shadowBlur = 50;
        ctx.shadowColor = status.c;

        ctx.beginPath();
        ctx.arc(cx, cy, r, -0.5 * Math.PI, endAngle);
        ctx.strokeStyle = status.c;
        ctx.lineCap = "round";
        ctx.stroke();

        ctx.shadowBlur = 0;

        ctx.textAlign = "center";
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 110px Inter, sans-serif";
        ctx.fillText(`${pct}%`, cx, cy + 38);

        ctx.font = "500 24px Inter, sans-serif";
        ctx.fillStyle = "#8b949e";
        ctx.fillText("Overall Attendance", cx, cy + 210);

        let sx = pad + w2 + gap + (w3 / 2);
        let sy = pad + h1 + gap + (h3 / 2);

        ctx.fillStyle = "#3fb950";
        ctx.font = "bold 90px Inter, sans-serif";
        ctx.fillText(totalP, sx, sy + 25);

        ctx.fillStyle = "#8b949e";
        ctx.font = "500 22px Inter, sans-serif";
        ctx.fillText("LECTURES ATTENDED", sx, sy + 70);

        sy = pad + h1 + gap + h3 + gap + (h3 / 2);

        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 90px Inter, sans-serif";
        ctx.fillText(totalT, sx, sy + 25);

        ctx.fillStyle = "#8b949e";
        ctx.font = "500 22px Inter, sans-serif";
        ctx.fillText("TOTAL CONDUCTED", sx, sy + 70);

        const qy = y4 + (h4 / 2);
        ctx.fillStyle = status.c;
        ctx.font = "bold 40px Inter, sans-serif";
        ctx.fillText(status.t, size / 2, qy + 15);

        ctx.font = "600 22px Inter, sans-serif";
        ctx.fillStyle = "#2f81f7";
        ctx.textAlign = "center";
        ctx.fillText("Designed by Vaibhav", size / 2, size - 35);

        canvas.toBlob(async (blob) => {
            const file = new File([blob], `Attendance_${this.user.id}.png`, {
                type: "image/png"
            });
            if (navigator.canShare && navigator.canShare({
                    files: [file]
                })) {
                try {
                    await navigator.share({
                        files: [file],
                        title: 'My Attendance',
                        text: `Attendance: ${pct}%`
                    });
                } catch (e) {}
            } else {
                const link = document.createElement('a');
                link.download = `Attendance_${this.user.id}.png`;
                link.href = canvas.toDataURL();
                link.click();
            }
            if (btn) btn.innerHTML = originalIcon;
        }, 'image/png');
    },

    resetData: function() {
        this.showConfirmModal(
            '⚠️ Reset All Data',
            'Are you sure? This will delete <strong>ALL</strong> your attendance data permanently. This action cannot be undone.',
            () => {
                localStorage.removeItem(`log_${this.user.id}`);
                localStorage.removeItem(`stats_${this.user.id}`);
                location.reload();
            },
            'Delete Everything'
        );
    },

    login: function() {
        const r = document.getElementById('rollInput').value;
        const student = RGIT_DATA.students[r];
        if (student) {
            this.user = {
                id: r,
                ...student
            };
            const remember = document.getElementById('rememberMe').checked;
            if (remember) localStorage.setItem('rgit_user', JSON.stringify(this.user));
            else sessionStorage.setItem('rgit_user', JSON.stringify(this.user));

            this.init();
        } else {
            document.getElementById('errorMsg').innerText = "Roll number not found!";
        }
    },

    logout: function() {
        if (confirm('Log out?')) {
            localStorage.removeItem('rgit_user');
            sessionStorage.removeItem('rgit_user');
            location.reload();
        }
    },

    attachFocusListeners: function() {
        const inputField = document.getElementById('rollInput');
        const loginView = document.getElementById('loginView');
        if (inputField && loginView) {
            inputField.addEventListener('focus', () => loginView.classList.add('typing-mode'));
            inputField.addEventListener('blur', () => setTimeout(() => loginView.classList.remove('typing-mode'), 200));
        }
    },

    showMain: function() {
        document.getElementById('loginView').classList.add('hidden');
        document.getElementById('mainView').classList.remove('hidden');

        const firstName = this.user.n.split(" ")[1] || this.user.n.split(" ")[0];
        document.getElementById('userName').innerText = firstName;
        
        // UPDATED: Only show Batch (e.g. "F1"), removed "F - F1"
        document.getElementById('userBatch').innerText = this.user.b;

        this.updateOverall();
        this.switchTab('dashboard');
        if (document.getElementById('fabBtn')) {
            document.getElementById('fabBtn').style.display = 'flex';
        }
        this.renderDateStrip();
        this.loadDay(this.selectedDate);
    },

    switchTab: function(tabName) {
        document.getElementById('navDash').classList.toggle('active', tabName === 'dashboard');
        document.getElementById('navSub').classList.toggle('active', tabName === 'subjects');

        // Toggle elements based on the tab
        if (tabName === 'dashboard') {
            document.getElementById('timelineList').classList.remove('hidden');
            document.getElementById('statsCard').classList.remove('hidden');
            document.getElementById('subjectList').classList.add('hidden');
            
            // Show Date Strip Wrapper (which contains the strip + the hint)
            const wrapper = document.getElementById('dateWrapper');
            if (wrapper) wrapper.style.display = 'block';

            // Add the scroll hint ONLY when in dashboard
            this.addScrollHint();

            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            document.getElementById('pageTitle').innerText = months[this.selectedDate.getMonth()];
        } else {
            document.getElementById('timelineList').classList.add('hidden');
            document.getElementById('statsCard').classList.add('hidden');
            document.getElementById('subjectList').classList.remove('hidden');
            
            // Hide Date Strip Wrapper
            const wrapper = document.getElementById('dateWrapper');
            if (wrapper) wrapper.style.display = 'none';

            // Remove scroll hint to be safe
            this.removeScrollHint();

            document.getElementById('pageTitle').innerText = "Analysis";
            this.renderSubjects();
        }

        const fab = document.getElementById('fabBtn');
        if (fab) fab.style.display = tabName === 'dashboard' ? 'flex' : 'none';
    },

    // NEW: Function to inject the scroll hint
    addScrollHint: function() {
        const wrapper = document.getElementById('dateWrapper');
        if (!wrapper) return;

        // Check if hint already exists to avoid duplicates
        if (!wrapper.querySelector('.scroll-hint')) {
            const hint = document.createElement('div');
            hint.className = 'scroll-hint';
            hint.innerHTML = '<i class="bi bi-chevron-compact-right"></i>';
            wrapper.appendChild(hint);
        }
    },

    // NEW: Function to remove the scroll hint
    removeScrollHint: function() {
        const wrapper = document.getElementById('dateWrapper');
        if (!wrapper) return;
        const hint = wrapper.querySelector('.scroll-hint');
        if (hint) {
            hint.remove();
        }
    },

    renderDateStrip: function() {
        const strip = document.getElementById('dateStrip');
        if (!strip) return;
        
        strip.innerHTML = '';
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        if (document.getElementById('navDash').classList.contains('active')) {
            document.getElementById('pageTitle').innerText = months[this.selectedDate.getMonth()];
        }

        for (let i = -3; i <= 3; i++) {
            const d = new Date(this.selectedDate);
            d.setDate(this.selectedDate.getDate() + i);
            const isSel = d.toDateString() === this.selectedDate.toDateString();
            const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            const el = document.createElement('div');
            el.className = `date-item ${isSel ? 'active' : ''}`;
            el.onclick = () => {
                this.selectedDate = d;
                this.renderDateStrip();
                this.loadDay(d);
            };
            el.innerHTML = `<span class="day">${days[d.getDay()]}</span><span class="num">${d.getDate()}</span>`;
            strip.appendChild(el);
        }
    },

    formatTime: function(time24) {
        if (!time24) return '';
        const [h, m] = time24.split(':');
        let hour = parseInt(h);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        hour = hour % 12 || 12;
        return `${hour}:${m} ${ampm}`;
    },

    loadDay: function(date) {
        const container = document.getElementById('timelineList');
        container.innerHTML = '';

        const dayIdx = date.getDay();
        const dateKey = this.getSafeDateKey(date);

        const div = this.getUserDiv();
        const schedule = RGIT_DATA.schedules[div] || {};
        
        let todaysClasses = schedule[dayIdx] ? [...schedule[dayIdx]] : [];
        if (this.extraClasses[dateKey]) {
            todaysClasses = [...todaysClasses, ...this.extraClasses[dateKey]];
        }
        todaysClasses.sort((a, b) => (a.t > b.t) ? 1 : -1);

        if (!todaysClasses || todaysClasses.length === 0) {
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

        todaysClasses.forEach(slot => {
            if (slot.type === 'BREAK') {
                container.innerHTML += `
                <div class="timeline-row">
                    <div class="time-col"><div>${this.formatTime(slot.t)}</div><div class="end-time">${this.formatTime(slot.e)}</div></div>
                    <div class="line-col"><div class="dot" style="background:#8b949e"></div><div class="line"></div></div>
                    <div class="card-col"><div class="class-card recess-card"><div class="recess-title">☕ Recess</div></div></div>
                </div>`;
                return;
            }

            let code = slot.c;
            if (slot.map) code = slot.map[this.user.b];
            if (!code) return;

            let room = slot.r || "";
            if (slot.rMap) room = slot.rMap[this.user.b];
            const roomHtml = room ? `<div class="room-loc"><i class="bi bi-geo-alt-fill"></i> ${room}</div>` : '';

            const statsKey = `${code}_${slot.type}`;
            const uniqueTime = slot.t.replace(':', '');
            const modernKey = (slot.isExtra && slot.id) ? slot.id : `${statsKey}_${uniqueTime}`;
            const legacyKey = statsKey;

            let activeLogKey = modernKey;
            let dailyStatus = null;

            if (this.attendanceLog[dateKey]) {
                if (this.attendanceLog[dateKey][modernKey]) {
                    dailyStatus = this.attendanceLog[dateKey][modernKey];
                } else if (this.attendanceLog[dateKey][legacyKey]) {
                    dailyStatus = this.attendanceLog[dateKey][legacyKey];
                    activeLogKey = legacyKey;
                }
            }

            const meta = RGIT_DATA.subjects[code] || { name: code, prof: {} };
            
            // --- NEW: Select prof based on Division ---
            const profName = meta.prof ? (meta.prof[div] || "") : "";

            if (!this.globalStats[statsKey]) this.globalStats[statsKey] = {
                p: 0,
                t: 0
            };
            const stats = this.globalStats[statsKey];
            const pct = stats.t === 0 ? 0 : Math.round((stats.p / stats.t) * 100);

            let ringColor = '#da3633';
            if (pct >= 75) ringColor = '#3fb950';
            else if (pct >= 60) ringColor = '#d29922';

            const deleteBtn = slot.isExtra ?
                `<button class="trash-btn" onclick="app.deleteExtraClass('${dateKey}', '${slot.id}')"><i class="bi bi-trash"></i></button>` :
                '';

            container.innerHTML += `
            <div class="timeline-row">
                <div class="time-col"><div>${this.formatTime(slot.t)}</div><div class="end-time">${this.formatTime(slot.e)}</div>${roomHtml}</div>
                <div class="line-col"><div class="dot ${this.isNow(slot.t, slot.e) ? 'active' : ''}"></div><div class="line"></div></div>
                <div class="card-col">
                    <div class="class-card ${this.isNow(slot.t, slot.e) ? 'now-glow' : ''}">
                        
                        <div class="card-header">
                            <div class="subject-info">
                                <div class="subject-row"><span class="code">${code}</span><span class="tag ${slot.type}">${slot.type}</span></div>
                                <span class="name">${meta.name}</span><span class="prof">${profName}</span>
                            </div>

                            <div class="header-right">
                                ${deleteBtn}
                                <div class="ring-container">
                                    <svg class="ring-svg"><circle cx="21" cy="21" r="18" class="ring-bg"></circle>
                                    <circle cx="21" cy="21" r="18" class="ring-val" stroke="${ringColor}" stroke-dasharray="113" stroke-dashoffset="${113 - (113*pct)/100}"></circle></svg>
                                    <div class="ring-text" style="color:${ringColor}">${pct}%</div>
                                </div>
                            </div>
                            
                        </div>

                        <div class="btn-grid">
                            <button class="act-btn can ${dailyStatus==='C'?'active':''}" onclick="app.toggle('${dateKey}', '${activeLogKey}', '${statsKey}', 'C')"><i class="bi bi-slash-circle"></i> Can</button>
                            <button class="act-btn abs ${dailyStatus==='A'?'active':''}" onclick="app.toggle('${dateKey}', '${activeLogKey}', '${statsKey}', 'A')"><i class="bi bi-x-circle"></i> Abs</button>
                            <button class="act-btn pre ${dailyStatus==='P'?'active':''}" onclick="app.toggle('${dateKey}', '${activeLogKey}', '${statsKey}', 'P')"><i class="bi bi-check-circle"></i> Pre</button>
                        </div>
                    </div>
                </div>
            </div>`;
        });

        container.innerHTML += `
            <div style="text-align:center; margin-top: 25px;">
                <div style="font-size:0.7rem; color:var(--text-muted); opacity:0.6; margin-bottom: 6px;">
                    <i class="bi bi-info-circle"></i> Tip: Go to <b>Subjects</b> tab to reset data
                </div>
            <div class="scroll-credit" style="margin-top: 20px;">Made with ❤️ by <b>Vaibhav</b></div>`;
    },

    toggle: function(dateKey, logKey, statsKey, newStatus) {
        this.vibrate();
        if (!this.attendanceLog[dateKey]) this.attendanceLog[dateKey] = {};

        const currentStatus = this.attendanceLog[dateKey][logKey];

        if (!this.globalStats[statsKey]) this.globalStats[statsKey] = {
            p: 0,
            t: 0
        };
        let stats = this.globalStats[statsKey];

        if (currentStatus) {
            if (currentStatus === 'P') {
                stats.p--;
                stats.t--;
            }
            if (currentStatus === 'A') {
                stats.t--;
            }
            delete this.attendanceLog[dateKey][logKey];
        }

        if (currentStatus !== newStatus) {
            if (newStatus === 'P') {
                stats.p++;
                stats.t++;
            }
            if (newStatus === 'A') {
                stats.t++;
            }
            this.attendanceLog[dateKey][logKey] = newStatus;
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

        subjects.forEach(code => {
            const subjectData = RGIT_DATA.subjects[code];
            const types = subjectData.types || ['LEC'];
            let rowsHtml = '';

            types.forEach(type => {
                const key = `${code}_${type}`;
                const stats = this.globalStats[key] || {
                    p: 0,
                    t: 0
                };
                const pct = stats.t === 0 ? 0 : Math.round((stats.p / stats.t) * 100);

                let colorVar = 'var(--red-bar)';
                let predMsg = 'No classes yet.';
                let predClass = 'pred-red';

                if (stats.t > 0) {
                    if (pct >= 75) {
                        colorVar = 'var(--green-bar)';
                        predClass = 'pred-green';
                        const buffer = Math.floor((stats.p / 0.75) - stats.t);
                        predMsg = buffer > 0 ?
                            `Safe! You can bunk <b>${buffer}</b> next ${type}s.` :
                            `Safe, but don't miss the next one!`;
                    } else {
                        const need = Math.ceil((0.75 * stats.t - stats.p) / 0.25);
                        predMsg = `Danger! You must attend <b>${need}</b> more ${type}s.`;
                        if (pct >= 60) colorVar = 'var(--yellow-bar)';
                    }
                } else {
                    colorVar = '#30363d';
                    predClass = '';
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

        let installHtml = '';
        if (window.deferredPrompt) {
            installHtml = `<button onclick="app.triggerInstall()" style="background: var(--accent); color: white; border: none; padding: 12px 24px; border-radius: 12px; font-weight: 600; margin-bottom: 25px; cursor: pointer; display: flex; align-items: center; gap: 8px; margin-left: auto; margin-right: auto;"><i class="bi bi-download"></i> Install App</button>`;
        } else {
            installHtml = `<div style="background: var(--bg-card); border: 1px dashed var(--border); padding: 15px; border-radius: 12px; margin-bottom: 25px; font-size: 0.85rem; color: var(--text-muted);"><i class="bi bi-phone" style="font-size: 1.2rem; color: var(--accent); margin-bottom: 6px; display: block;"></i><strong>Install App:</strong> Tap <i class="bi bi-three-dots-vertical"></i> or <i class="bi bi-share"></i> then select <br><b>"Add to Home Screen"</b></div>`;
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
        setTimeout(() => {
            document.querySelectorAll('.progress-fill').forEach(el => {
                el.style.width = el.getAttribute('data-width');
            });
        }, 50);
    },

    triggerInstall: async function() {
        if (window.deferredPrompt) {
            window.deferredPrompt.prompt();
            await window.deferredPrompt.userChoice;
            window.deferredPrompt = null;
            this.renderSubjects();
        }
    },

    isNow: function(t, e) {
        // Get current time in minutes (e.g., 9:30 AM = 570 minutes)
        const now = new Date();
        const currentMins = now.getHours() * 60 + now.getMinutes();

        // Parse Start Time
        const [sh, sm] = t.split(':').map(Number);
        const startMins = sh * 60 + sm;

        // Parse End Time (Default to 1 hour duration if 'e' is missing)
        let endMins;
        if (e) {
            const [eh, em] = e.split(':').map(Number);
            endMins = eh * 60 + em;
        } else {
            endMins = startMins + 60;
        }

        // Check if current time is between Start and End
        return currentMins >= startMins && currentMins < endMins;
    },

    openAddModal: function() {
        const modal = document.getElementById('addModal');
        const select = document.getElementById('extraSub');
        select.innerHTML = '';

        Object.keys(RGIT_DATA.subjects).forEach(code => {
            const sub = RGIT_DATA.subjects[code];
            const opt = document.createElement('option');
            opt.value = code;
            opt.innerText = `${code} - ${sub.name}`;
            select.appendChild(opt);
        });

        select.onchange = () => {
            this.renderModalTypes(select.value);
        };

        if (select.options.length > 0) {
            this.renderModalTypes(select.value);
        }

        modal.classList.remove('hidden');
    },

    renderModalTypes: function(code) {
        const types = RGIT_DATA.subjects[code].types;
        const container = document.querySelector('.type-selector');
        container.innerHTML = '';

        types.forEach((type, index) => {
            const btn = document.createElement('div');
            const isActive = (index === 0);
            if (isActive) this.currentExtraType = type;

            btn.className = `type-opt ${isActive ? 'active' : ''}`;
            btn.innerText = type;

            btn.onclick = () => {
                container.querySelectorAll('.type-opt').forEach(el => el.classList.remove('active'));
                btn.classList.add('active');
                this.currentExtraType = type;
            };

            container.appendChild(btn);
        });
    },

    saveExtraClass: function() {
        const code = document.getElementById('extraSub').value;
        const startTime = document.getElementById('extraTime').value;
        const endTime = document.getElementById('extraEndTime').value;

        // Basic Validation
        if (!startTime || !endTime) {
            this.showConfirmModal(
                'Validation Error',
                'Please select both Start and End time.',
                () => {},
                'OK'
            );
            return;
        }
        if (endTime <= startTime) {
            this.showConfirmModal(
                'Validation Error',
                'End time must be after Start time.',
                () => {},
                'OK'
            );
            return;
        }

        const dateKey = this.getSafeDateKey(this.selectedDate);

        const newClass = {
            id: `ex_${Date.now()}`,
            t: startTime,
            e: endTime,     // Now uses the selected end time
            c: code,
            type: this.currentExtraType,
            isExtra: true
        };

        if (!this.extraClasses[dateKey]) this.extraClasses[dateKey] = [];
        this.extraClasses[dateKey].push(newClass);
        localStorage.setItem(`extra_${this.user.id}`, JSON.stringify(this.extraClasses));

        document.getElementById('addModal').classList.add('hidden');
        this.loadDay(this.selectedDate);
    },

    deleteExtraClass: function(dateKey, classId) {
        this.showConfirmModal(
            'Delete Extra Class',
            'Are you sure you want to delete this extra class? Any attendance marked for this class will also be removed.',
            () => {
                if (this.extraClasses[dateKey]) {
                    this.extraClasses[dateKey] = this.extraClasses[dateKey].filter(c => c.id !== classId);
                    if (this.extraClasses[dateKey].length === 0) delete this.extraClasses[dateKey];
                }

                if (this.attendanceLog[dateKey] && this.attendanceLog[dateKey][classId]) {
                    delete this.attendanceLog[dateKey][classId];
                }

                localStorage.setItem(`extra_${this.user.id}`, JSON.stringify(this.extraClasses));
                localStorage.setItem(`log_${this.user.id}`, JSON.stringify(this.attendanceLog));

                this.recalculateAllStats();
                this.loadDay(this.selectedDate);
                this.updateOverall();
            },
            'Delete Class'
        );
    },

    recalculateAllStats: function() {
        const newStats = {};

        Object.keys(this.attendanceLog).forEach(date => {
            const dayLog = this.attendanceLog[date];

            Object.keys(dayLog).forEach(key => {
                const status = dayLog[key];
                let subjectKey = key;

                if (key.startsWith('ex_')) {
                    const daysExtras = this.extraClasses[date] || [];
                    const extraClass = daysExtras.find(e => e.id === key);
                    if (extraClass) subjectKey = `${extraClass.c}_${extraClass.type}`;
                    else return;
                }
                else if (key.match(/_\d{4}$/)) {
                    subjectKey = key.replace(/_\d{4}$/, '');
                }

                if (!newStats[subjectKey]) newStats[subjectKey] = {
                    p: 0,
                    t: 0
                };

                if (status === 'P') {
                    newStats[subjectKey].p++;
                    newStats[subjectKey].t++;
                } else if (status === 'A') {
                    newStats[subjectKey].t++;
                }
            });
        });

        this.globalStats = newStats;
        localStorage.setItem(`stats_${this.user.id}`, JSON.stringify(this.globalStats));
    },

    // Custom confirmation modal functions
    showConfirmModal: function(title, message, confirmCallback, confirmBtnText = 'Confirm') {
        document.getElementById('confirmTitle').innerText = title;
        document.getElementById('confirmMessage').innerHTML = message;
        document.getElementById('confirmBtn').innerText = confirmBtnText;
        this.pendingConfirmCallback = confirmCallback;
        document.getElementById('confirmModal').classList.remove('hidden');
    },

    closeConfirmModal: function() {
        document.getElementById('confirmModal').classList.add('hidden');
        this.pendingConfirmCallback = null;
    },

    confirmAction: function() {
        if (this.pendingConfirmCallback) {
            this.pendingConfirmCallback();
            this.pendingConfirmCallback = null;
        }
        this.closeConfirmModal();
    },

    // Toast notification system
    showToast: function(message, type = 'success', duration = 3000) {
        const toastContainer = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <div style="display: flex; align-items: center; gap: 12px;">
                <i class="bi bi-${type === 'success' ? 'check-circle' : 'exclamation-triangle'}" aria-hidden="true"></i>
                <span>${message}</span>
            </div>
        `;

        toastContainer.appendChild(toast);

        // Trigger animation
        setTimeout(() => toast.classList.add('show'), 10);

        // Auto remove
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, duration);
    },

    // Enhanced login with loading state
    login: function() {
        const btn = document.querySelector('.btn-primary');
        const originalHTML = btn.innerHTML;

        // Show loading state
        btn.classList.add('loading');
        btn.innerHTML = `
            <span class="sr-only">Logging in...</span>
            <div class="btn-loader">
                <div class="spinner" aria-hidden="true"></div>
            </div>
        `;

        const r = document.getElementById('rollInput').value.trim();
        const student = RGIT_DATA.students[r];

        // Simulate processing time for better UX
        setTimeout(() => {
            if (student) {
                this.user = {
                    id: r,
                    ...student
                };
                const remember = document.getElementById('rememberMe').checked;
                if (remember) localStorage.setItem('rgit_user', JSON.stringify(this.user));
                else sessionStorage.setItem('rgit_user', JSON.stringify(this.user));

                this.showToast('Login successful! Welcome back.', 'success');
                this.init();
            } else {
                // Reset button
                btn.classList.remove('loading');
                btn.innerHTML = originalHTML;

                document.getElementById('errorMsg').innerText = "Roll number not found!";
                document.getElementById('errorMsg').style.display = 'block';
                this.showToast('Invalid roll number. Please try again.', 'error');
            }
        }, 800);
    },

    // Enhanced logout with confirmation
    logout: function() {
        this.showConfirmModal(
            'Logout',
            'Are you sure you want to logout? Your session will end.',
            () => {
                localStorage.removeItem('rgit_user');
                sessionStorage.removeItem('rgit_user');
                this.showToast('Logged out successfully.', 'success');
                setTimeout(() => location.reload(), 500);
            },
            'Logout'
        );
    },

    // Data export functionality
    exportData: function() {
        const data = {
            user: this.user,
            attendanceLog: this.attendanceLog,
            globalStats: this.globalStats,
            extraClasses: this.extraClasses,
            exportDate: new Date().toISOString(),
            version: '1.0'
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `rgit-attendance-${this.user.id}-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        this.showToast('Data exported successfully!', 'success');
    },

    // Data import functionality
    importData: function() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        const data = JSON.parse(e.target.result);

                        // Validate data structure
                        if (data.user && data.attendanceLog && data.globalStats) {
                            // Backup current data
                            const backup = {
                                attendanceLog: this.attendanceLog,
                                globalStats: this.globalStats,
                                extraClasses: this.extraClasses
                            };

                            // Import new data
                            this.attendanceLog = data.attendanceLog;
                            this.globalStats = data.globalStats;
                            this.extraClasses = data.extraClasses || {};

                            // Save to localStorage
                            localStorage.setItem(`log_${this.user.id}`, JSON.stringify(this.attendanceLog));
                            localStorage.setItem(`stats_${this.user.id}`, JSON.stringify(this.globalStats));
                            localStorage.setItem(`extra_${this.user.id}`, JSON.stringify(this.extraClasses));

                            this.recalculateAllStats();
                            this.updateOverall();
                            this.loadDay(this.selectedDate);

                            this.showToast('Data imported successfully!', 'success');
                        } else {
                            throw new Error('Invalid data format');
                        }
                    } catch (error) {
                        this.showToast('Failed to import data. Invalid file format.', 'error');
                        console.error('Import error:', error);
                    }
                };
                reader.readAsText(file);
            }
        };
        input.click();
    },

    // Keyboard navigation support
    initKeyboardNavigation: function() {
        document.addEventListener('keydown', (e) => {
            // Escape key closes modals
            if (e.key === 'Escape') {
                if (!document.getElementById('confirmModal').classList.contains('hidden')) {
                    this.closeConfirmModal();
                } else if (!document.getElementById('addModal').classList.contains('hidden')) {
                    document.getElementById('addModal').classList.add('hidden');
                }
            }

            // Tab navigation for date strip
            if (e.key === 'ArrowLeft' && e.target.closest('.date-strip')) {
                e.preventDefault();
                const currentIndex = Array.from(document.querySelectorAll('.date-item')).findIndex(el => el.classList.contains('active'));
                if (currentIndex > 0) {
                    const newDate = new Date(this.selectedDate);
                    newDate.setDate(this.selectedDate.getDate() - 1);
                    this.selectedDate = newDate;
                    this.renderDateStrip();
                    this.loadDay(newDate);
                }
            }

            if (e.key === 'ArrowRight' && e.target.closest('.date-strip')) {
                e.preventDefault();
                const currentIndex = Array.from(document.querySelectorAll('.date-item')).findIndex(el => el.classList.contains('active'));
                if (currentIndex < 6) {
                    const newDate = new Date(this.selectedDate);
                    newDate.setDate(this.selectedDate.getDate() + 1);
                    this.selectedDate = newDate;
                    this.renderDateStrip();
                    this.loadDay(newDate);
                }
            }
        });
    },
};

const inp = document.getElementById('rollInput');
if (inp) {
    inp.addEventListener('focus', () => document.getElementById('loginView').classList.add('typing-mode'));
    inp.addEventListener('blur', () => setTimeout(() => document.getElementById('loginView').classList.remove('typing-mode'), 200));
}
app.init();