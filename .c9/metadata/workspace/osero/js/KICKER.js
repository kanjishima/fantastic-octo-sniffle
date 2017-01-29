{"filter":false,"title":"KICKER.js","tooltip":"/osero/js/KICKER.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":6,"column":4},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":525},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":7,"column":4},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":526},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":8,"column":4},"end":{"row":9,"column":0},"action":"insert","lines":["",""],"id":527},{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":9,"column":4},"end":{"row":10,"column":0},"action":"insert","lines":["",""],"id":528},{"start":{"row":10,"column":0},"end":{"row":10,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":10,"column":4},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":529},{"start":{"row":11,"column":0},"end":{"row":11,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":4,"column":4},"end":{"row":19,"column":13},"action":"insert","lines":["    var tapFlag = false,","        timer;","    ","    doc.body.addEventListener(\"touchstart\", function(evt) {","        if (tapFlag) {","            evt.preventDefault();","        }","    }, true);","","    doc.body.addEventListener(\"touchend\", function(evt) {","        tapFlag = true;","        clearTimeout(timer);","        timer = setTimeout(function() {","            tapFlag = false;","        }, 200); // 100だと短い、150だとやや短い","    }, true);"],"id":530}],[{"start":{"row":4,"column":4},"end":{"row":4,"column":8},"action":"remove","lines":["    "],"id":531}],[{"start":{"row":7,"column":4},"end":{"row":7,"column":7},"action":"remove","lines":["doc"],"id":532},{"start":{"row":7,"column":4},"end":{"row":7,"column":5},"action":"insert","lines":["d"]}],[{"start":{"row":7,"column":5},"end":{"row":7,"column":6},"action":"insert","lines":["o"],"id":533}],[{"start":{"row":7,"column":6},"end":{"row":7,"column":7},"action":"insert","lines":["c"],"id":534}],[{"start":{"row":7,"column":7},"end":{"row":7,"column":8},"action":"insert","lines":["u"],"id":535}],[{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"insert","lines":["m"],"id":536}],[{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"insert","lines":["e"],"id":537}],[{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"insert","lines":["n"],"id":538}],[{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"insert","lines":["t"],"id":539}],[{"start":{"row":13,"column":4},"end":{"row":13,"column":7},"action":"remove","lines":["doc"],"id":540},{"start":{"row":13,"column":4},"end":{"row":13,"column":12},"action":"insert","lines":["document"]}],[{"start":{"row":6,"column":4},"end":{"row":6,"column":11},"action":"insert","lines":["prevent"],"id":541}],[{"start":{"row":6,"column":4},"end":{"row":6,"column":5},"action":"insert","lines":["f"],"id":542}],[{"start":{"row":6,"column":5},"end":{"row":6,"column":6},"action":"insert","lines":["u"],"id":543}],[{"start":{"row":6,"column":6},"end":{"row":6,"column":7},"action":"insert","lines":["n"],"id":544}],[{"start":{"row":6,"column":7},"end":{"row":6,"column":8},"action":"insert","lines":["c"],"id":545}],[{"start":{"row":6,"column":8},"end":{"row":6,"column":9},"action":"insert","lines":["t"],"id":546}],[{"start":{"row":6,"column":9},"end":{"row":6,"column":10},"action":"insert","lines":["i"],"id":547}],[{"start":{"row":6,"column":10},"end":{"row":6,"column":11},"action":"insert","lines":["o"],"id":548}],[{"start":{"row":6,"column":11},"end":{"row":6,"column":12},"action":"insert","lines":["n"],"id":549}],[{"start":{"row":6,"column":12},"end":{"row":6,"column":13},"action":"insert","lines":[" "],"id":550}],[{"start":{"row":6,"column":20},"end":{"row":6,"column":21},"action":"insert","lines":["D"],"id":551}],[{"start":{"row":6,"column":21},"end":{"row":6,"column":22},"action":"insert","lines":["o"],"id":552}],[{"start":{"row":6,"column":22},"end":{"row":6,"column":23},"action":"insert","lines":["u"],"id":553}],[{"start":{"row":6,"column":23},"end":{"row":6,"column":24},"action":"insert","lines":["b"],"id":554}],[{"start":{"row":6,"column":24},"end":{"row":6,"column":25},"action":"insert","lines":["l"],"id":555}],[{"start":{"row":6,"column":25},"end":{"row":6,"column":26},"action":"insert","lines":["e"],"id":556}],[{"start":{"row":6,"column":26},"end":{"row":6,"column":27},"action":"insert","lines":["T"],"id":557}],[{"start":{"row":6,"column":27},"end":{"row":6,"column":28},"action":"insert","lines":["a"],"id":558}],[{"start":{"row":6,"column":28},"end":{"row":6,"column":29},"action":"insert","lines":["p"],"id":559}],[{"start":{"row":6,"column":29},"end":{"row":6,"column":31},"action":"insert","lines":["()"],"id":560}],[{"start":{"row":6,"column":31},"end":{"row":6,"column":32},"action":"insert","lines":["{"],"id":561}],[{"start":{"row":20,"column":4},"end":{"row":20,"column":5},"action":"insert","lines":["}"],"id":562}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"remove","lines":["    "],"id":563}],[{"start":{"row":20,"column":0},"end":{"row":20,"column":4},"action":"remove","lines":["    "],"id":564}],[{"start":{"row":6,"column":0},"end":{"row":21,"column":4},"action":"remove","lines":["function preventDoubleTap(){","    document.body.addEventListener(\"touchstart\", function(evt) {","        if (tapFlag) {","            evt.preventDefault();","        }","    }, true);","","    document.body.addEventListener(\"touchend\", function(evt) {","        tapFlag = true;","        clearTimeout(timer);","        timer = setTimeout(function() {","            tapFlag = false;","        }, 200); // 100だと短い、150だとやや短い","    }, true);","}","    "],"id":565}],[{"start":{"row":4,"column":0},"end":{"row":5,"column":14},"action":"remove","lines":["    var tapFlag = false,","        timer;"],"id":566}],[{"start":{"row":5,"column":0},"end":{"row":5,"column":18},"action":"insert","lines":["preventDoubleTap()"],"id":567}],[{"start":{"row":5,"column":18},"end":{"row":5,"column":19},"action":"insert","lines":[";"],"id":568}],[{"start":{"row":5,"column":0},"end":{"row":5,"column":4},"action":"insert","lines":["    "],"id":569}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":4},"action":"remove","lines":["    "],"id":570}],[{"start":{"row":2,"column":4},"end":{"row":3,"column":0},"action":"remove","lines":["",""],"id":571}],[{"start":{"row":2,"column":4},"end":{"row":3,"column":0},"action":"remove","lines":["",""],"id":572}],[{"start":{"row":4,"column":4},"end":{"row":5,"column":4},"action":"remove","lines":["","    "],"id":573}],[{"start":{"row":4,"column":4},"end":{"row":5,"column":4},"action":"remove","lines":["","    "],"id":574}],[{"start":{"row":4,"column":4},"end":{"row":5,"column":4},"action":"remove","lines":["","    "],"id":575}],[{"start":{"row":4,"column":4},"end":{"row":5,"column":4},"action":"remove","lines":["","    "],"id":576}],[{"start":{"row":4,"column":4},"end":{"row":5,"column":4},"action":"remove","lines":["","    "],"id":577}],[{"start":{"row":7,"column":4},"end":{"row":7,"column":8},"action":"remove","lines":["    "],"id":578}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"remove","lines":["    "],"id":579}],[{"start":{"row":6,"column":31},"end":{"row":7,"column":0},"action":"remove","lines":["",""],"id":580}],[{"start":{"row":7,"column":30},"end":{"row":8,"column":0},"action":"remove","lines":["",""],"id":581}],[{"start":{"row":7,"column":29},"end":{"row":7,"column":30},"action":"remove","lines":[";"],"id":582}],[{"start":{"row":7,"column":28},"end":{"row":7,"column":29},"action":"remove","lines":[")"],"id":583}],[{"start":{"row":7,"column":27},"end":{"row":7,"column":28},"action":"remove","lines":["'"],"id":584}],[{"start":{"row":7,"column":26},"end":{"row":7,"column":27},"action":"remove","lines":["r"],"id":585}],[{"start":{"row":7,"column":25},"end":{"row":7,"column":26},"action":"remove","lines":["e"],"id":586}],[{"start":{"row":7,"column":24},"end":{"row":7,"column":25},"action":"remove","lines":["k"],"id":587}],[{"start":{"row":7,"column":23},"end":{"row":7,"column":24},"action":"remove","lines":["c"],"id":588}],[{"start":{"row":7,"column":22},"end":{"row":7,"column":23},"action":"remove","lines":["i"],"id":589}],[{"start":{"row":7,"column":21},"end":{"row":7,"column":22},"action":"remove","lines":["k"],"id":590}],[{"start":{"row":7,"column":20},"end":{"row":7,"column":21},"action":"remove","lines":["'"],"id":591}],[{"start":{"row":7,"column":19},"end":{"row":7,"column":20},"action":"remove","lines":["("],"id":592}],[{"start":{"row":7,"column":18},"end":{"row":7,"column":19},"action":"remove","lines":["g"],"id":593}],[{"start":{"row":7,"column":17},"end":{"row":7,"column":18},"action":"remove","lines":["o"],"id":594}],[{"start":{"row":7,"column":16},"end":{"row":7,"column":17},"action":"remove","lines":["l"],"id":595}],[{"start":{"row":7,"column":15},"end":{"row":7,"column":16},"action":"remove","lines":["."],"id":596}],[{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"remove","lines":["e"],"id":597}],[{"start":{"row":7,"column":13},"end":{"row":7,"column":14},"action":"remove","lines":["l"],"id":598}],[{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"remove","lines":["o"],"id":599}],[{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"remove","lines":["s"],"id":600}],[{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"remove","lines":["n"],"id":601}],[{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"remove","lines":["o"],"id":602}],[{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"remove","lines":["c"],"id":603}],[{"start":{"row":7,"column":4},"end":{"row":7,"column":8},"action":"remove","lines":["    "],"id":604}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"remove","lines":["    "],"id":605}],[{"start":{"row":6,"column":31},"end":{"row":7,"column":0},"action":"remove","lines":["",""],"id":606}],[{"start":{"row":10,"column":0},"end":{"row":10,"column":4},"action":"remove","lines":["    "],"id":607}],[{"start":{"row":9,"column":9},"end":{"row":10,"column":0},"action":"remove","lines":["",""],"id":608}],[{"start":{"row":6,"column":31},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":609},{"start":{"row":7,"column":0},"end":{"row":7,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["/"],"id":610}],[{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":["/"],"id":611}],[{"start":{"row":3,"column":6},"end":{"row":3,"column":25},"action":"remove","lines":["preventDoubleTap();"],"id":612}],[{"start":{"row":7,"column":8},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":613},{"start":{"row":8,"column":0},"end":{"row":8,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":8,"column":8},"end":{"row":9,"column":0},"action":"insert","lines":["",""],"id":614},{"start":{"row":9,"column":0},"end":{"row":9,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":8,"column":8},"end":{"row":8,"column":27},"action":"insert","lines":["preventDoubleTap();"],"id":615}],[{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"remove","lines":["/"],"id":616}],[{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"remove","lines":["/"],"id":617}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":4},"action":"remove","lines":["    "],"id":618}],[{"start":{"row":2,"column":4},"end":{"row":3,"column":0},"action":"remove","lines":["",""],"id":619}],[{"start":{"row":4,"column":0},"end":{"row":15,"column":5},"action":"remove","lines":["    function KICKER(){","        var d = new $.Deferred;","        ","        preventDoubleTap();","        ","        for (var AUDIO in AUDIOs){","            audioSet(String(AUDIO));","        }","        d.resolve();//go next","        ","        return d.promise();","    }"],"id":620}],[{"start":{"row":3,"column":4},"end":{"row":4,"column":0},"action":"remove","lines":["",""],"id":621}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":4},"action":"remove","lines":["    "],"id":622}],[{"start":{"row":2,"column":4},"end":{"row":3,"column":0},"action":"remove","lines":["",""],"id":623}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":4},"action":"remove","lines":["    "],"id":624}],[{"start":{"row":1,"column":17},"end":{"row":2,"column":0},"action":"remove","lines":["",""],"id":625}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":2,"column":4},"end":{"row":2,"column":4},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1484410846800,"hash":"8afde8b428faf6fa3feb8b5970bd7249f6b44341"}