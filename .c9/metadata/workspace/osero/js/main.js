{"changed":true,"filter":false,"title":"main.js","tooltip":"/osero/js/main.js","value":"(function(){\n    \"use strict\";\n    console.log(\"ok?\");\n    \n    //get id alius\n    var PA_PL1 = document.getElementById(\"PA_PL1\");\n    var PA_PL2 = document.getElementById(\"PA_PL2\");\n    \n    var PI_PL1 = document.getElementById(\"PI_PL1\");\n    var PI_PL2 = document.getElementById(\"PI_PL2\");\n    \n    var PTH_PL1 = document.getElementById(\"PTH_PL1\");\n    var PTH_PL2 = document.getElementById(\"PTH_PL2\");\n    \n    var mainBoard = document.getElementById(\"mainBoard\");\n    \n    var A1 = document.getElementById(\"A1\");\n    var A2 = document.getElementById(\"A2\");\n    var A3 = document.getElementById(\"A3\");\n    var A4 = document.getElementById(\"A4\");\n    var A5 = document.getElementById(\"A5\");\n    var A6 = document.getElementById(\"A6\");\n    var A7 = document.getElementById(\"A7\");\n    var A8 = document.getElementById(\"A8\");\n    \n    var B1 = document.getElementById(\"B1\");\n    var B2 = document.getElementById(\"B2\");\n    var B3 = document.getElementById(\"B3\");\n    var B4 = document.getElementById(\"B4\");\n    var B5 = document.getElementById(\"B5\");\n    var B6 = document.getElementById(\"B6\");\n    var B7 = document.getElementById(\"B7\");\n    var B8 = document.getElementById(\"B8\");\n    \n    var C1 = document.getElementById(\"C1\");\n    var C2 = document.getElementById(\"C2\");\n    var C3 = document.getElementById(\"C3\");\n    var C4 = document.getElementById(\"C4\");\n    var C5 = document.getElementById(\"C5\");\n    var C6 = document.getElementById(\"C6\");\n    var C7 = document.getElementById(\"C7\");\n    var C8 = document.getElementById(\"C8\");\n    \n    var D1 = document.getElementById(\"D1\");\n    var D2 = document.getElementById(\"D2\");\n    var D3 = document.getElementById(\"D3\");\n    var D4 = document.getElementById(\"d4\");\n    var D5 = document.getElementById(\"D5\");\n    var D6 = document.getElementById(\"D6\");\n    var D7 = document.getElementById(\"D7\");\n    var D8 = document.getElementById(\"D8\");\n    \n    var E1 = document.getElementById(\"E1\");\n    var E2 = document.getElementById(\"E2\");\n    var E3 = document.getElementById(\"E3\");\n    var E4 = document.getElementById(\"E4\");\n    var E5 = document.getElementById(\"E5\");\n    var E6 = document.getElementById(\"E6\");\n    var E7 = document.getElementById(\"E7\");\n    var E8 = document.getElementById(\"E8\");\n    \n    var F1 = document.getElementById(\"F1\");\n    var F2 = document.getElementById(\"F2\");\n    var F3 = document.getElementById(\"F3\");\n    var F4 = document.getElementById(\"F4\");\n    var F5 = document.getElementById(\"F5\");\n    var F6 = document.getElementById(\"F6\");\n    var F7 = document.getElementById(\"F8\");\n    var F8 = document.getElementById(\"F8\");\n    \n    var G1 = document.getElementById(\"G1\");\n    var G2 = document.getElementById(\"G2\");\n    var G3 = document.getElementById(\"G3\");\n    var G4 = document.getElementById(\"G4\");\n    var G5 = document.getElementById(\"G5\");\n    var G6 = document.getElementById(\"G6\");\n    var G7 = document.getElementById(\"G8\");\n    var G8 = document.getElementById(\"G8\");\n    \n    var H1 = document.getElementById(\"H1\");\n    var H2 = document.getElementById(\"H2\");\n    var H3 = document.getElementById(\"H3\");\n    var H4 = document.getElementById(\"H4\");\n    var H5 = document.getElementById(\"H5\");\n    var H6 = document.getElementById(\"H6\");\n    var H7 = document.getElementById(\"H8\");\n    var H8 = document.getElementById(\"H8\");\n    \n    var token_ID1 = document.getElementById(\"token_ID1\");\n    var token_ID2 = document.getElementById(\"token_ID2\");\n    var token_ID3 = document.getElementById(\"token_ID3\");\n    var token_ID4 = document.getElementById(\"token_ID4\");\n    var token_ID5 = document.getElementById(\"token_ID5\");\n    var token_ID6 = document.getElementById(\"token_ID6\");\n    var token_ID7 = document.getElementById(\"token_ID7\");\n    var token_ID8 = document.getElementById(\"token_ID8\");\n    var token_ID9 = document.getElementById(\"token_ID9\");\n    var token_ID10 = document.getElementById(\"token_ID10\");\n    var token_ID11 = document.getElementById(\"token_ID11\");\n    var token_ID12 = document.getElementById(\"token_ID12\");\n    var token_ID13 = document.getElementById(\"token_ID13\");\n    var token_ID14 = document.getElementById(\"token_ID14\");\n    var token_ID15 = document.getElementById(\"token_ID15\");\n    var token_ID16 = document.getElementById(\"token_ID16\");\n    var token_ID17 = document.getElementById(\"token_ID17\");\n    var token_ID18 = document.getElementById(\"token_ID18\");\n    var token_ID19 = document.getElementById(\"token_ID19\");\n    var token_ID20 = document.getElementById(\"token_ID20\");\n    var token_ID21 = document.getElementById(\"token_ID21\");\n    var token_ID22 = document.getElementById(\"token_ID22\");\n    var token_ID23 = document.getElementById(\"token_ID23\");\n    var token_ID24 = document.getElementById(\"token_ID24\");\n    var token_ID25 = document.getElementById(\"token_ID25\");\n    var token_ID26 = document.getElementById(\"token_ID26\");\n    var token_ID27 = document.getElementById(\"token_ID27\");\n    var token_ID28 = document.getElementById(\"token_ID28\");\n    var token_ID29 = document.getElementById(\"token_ID29\");\n    var token_ID30 = document.getElementById(\"token_ID30\");\n    var token_ID31 = document.getElementById(\"token_ID31\");\n    var token_ID32 = document.getElementById(\"token_ID32\");\n    var token_ID33 = document.getElementById(\"token_ID33\");\n    var token_ID34 = document.getElementById(\"token_ID34\");\n    var token_ID35 = document.getElementById(\"token_ID35\");\n    var token_ID36 = document.getElementById(\"token_ID36\");\n    var token_ID37 = document.getElementById(\"token_ID37\");\n    var token_ID38 = document.getElementById(\"token_ID38\");\n    var token_ID39 = document.getElementById(\"token_ID39\");\n    var token_ID40 = document.getElementById(\"token_ID40\");\n    var token_ID41 = document.getElementById(\"token_ID41\");\n    var token_ID42 = document.getElementById(\"token_ID42\");\n    var token_ID43 = document.getElementById(\"token_ID43\");\n    var token_ID44 = document.getElementById(\"token_ID44\");\n    var token_ID45 = document.getElementById(\"token_ID45\");\n    var token_ID46 = document.getElementById(\"token_ID46\");\n    var token_ID47 = document.getElementById(\"token_ID47\");\n    var token_ID48 = document.getElementById(\"token_ID48\");\n    var token_ID49 = document.getElementById(\"token_ID49\");\n    var token_ID50 = document.getElementById(\"token_ID50\");\n    var token_ID51 = document.getElementById(\"token_ID51\");\n    var token_ID52 = document.getElementById(\"token_ID52\");\n    var token_ID53 = document.getElementById(\"token_ID53\");\n    var token_ID54 = document.getElementById(\"token_ID54\");\n    var token_ID55 = document.getElementById(\"token_ID55\");\n    var token_ID56 = document.getElementById(\"token_ID56\");\n    var token_ID57 = document.getElementById(\"token_ID57\");\n    var token_ID58 = document.getElementById(\"token_ID58\");\n    var token_ID59 = document.getElementById(\"token_ID59\");\n    var token_ID60 = document.getElementById(\"token_ID60\");\n    var token_ID61 = document.getElementById(\"token_ID61\");\n    var token_ID62 = document.getElementById(\"token_ID62\");\n    var token_ID63 = document.getElementById(\"token_ID63\");\n    var token_ID64 = document.getElementById(\"token_ID64\");\n    \n    \n    \n    \n})();","undoManager":{"mark":98,"position":100,"stack":[[{"start":{"row":136,"column":56},"end":{"row":136,"column":57},"action":"remove","lines":["9"],"id":844}],[{"start":{"row":136,"column":55},"end":{"row":136,"column":56},"action":"remove","lines":["0"],"id":845}],[{"start":{"row":136,"column":55},"end":{"row":136,"column":56},"action":"insert","lines":["9"],"id":846}],[{"start":{"row":137,"column":4},"end":{"row":137,"column":59},"action":"insert","lines":["var token_ID40 = document.getElementById(\"token_ID40\");"],"id":847}],[{"start":{"row":137,"column":16},"end":{"row":137,"column":17},"action":"remove","lines":["4"],"id":848}],[{"start":{"row":137,"column":16},"end":{"row":137,"column":17},"action":"insert","lines":["5"],"id":849}],[{"start":{"row":137,"column":54},"end":{"row":137,"column":55},"action":"remove","lines":["4"],"id":850}],[{"start":{"row":137,"column":54},"end":{"row":137,"column":55},"action":"insert","lines":["5"],"id":851}],[{"start":{"row":137,"column":59},"end":{"row":138,"column":0},"action":"insert","lines":["",""],"id":852},{"start":{"row":138,"column":0},"end":{"row":138,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":138,"column":4},"end":{"row":138,"column":59},"action":"insert","lines":["var token_ID50 = document.getElementById(\"token_ID50\");"],"id":853}],[{"start":{"row":138,"column":59},"end":{"row":139,"column":0},"action":"insert","lines":["",""],"id":854},{"start":{"row":139,"column":0},"end":{"row":139,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":139,"column":4},"end":{"row":139,"column":59},"action":"insert","lines":["var token_ID50 = document.getElementById(\"token_ID50\");"],"id":855}],[{"start":{"row":139,"column":59},"end":{"row":140,"column":0},"action":"insert","lines":["",""],"id":856},{"start":{"row":140,"column":0},"end":{"row":140,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":140,"column":4},"end":{"row":140,"column":59},"action":"insert","lines":["var token_ID50 = document.getElementById(\"token_ID50\");"],"id":857}],[{"start":{"row":140,"column":59},"end":{"row":141,"column":0},"action":"insert","lines":["",""],"id":858},{"start":{"row":141,"column":0},"end":{"row":141,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":141,"column":4},"end":{"row":141,"column":59},"action":"insert","lines":["var token_ID50 = document.getElementById(\"token_ID50\");"],"id":859}],[{"start":{"row":141,"column":59},"end":{"row":142,"column":0},"action":"insert","lines":["",""],"id":860},{"start":{"row":142,"column":0},"end":{"row":142,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":142,"column":4},"end":{"row":142,"column":59},"action":"insert","lines":["var token_ID50 = document.getElementById(\"token_ID50\");"],"id":861}],[{"start":{"row":142,"column":59},"end":{"row":143,"column":0},"action":"insert","lines":["",""],"id":862},{"start":{"row":143,"column":0},"end":{"row":143,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":143,"column":4},"end":{"row":143,"column":59},"action":"insert","lines":["var token_ID50 = document.getElementById(\"token_ID50\");"],"id":863}],[{"start":{"row":143,"column":59},"end":{"row":144,"column":0},"action":"insert","lines":["",""],"id":864},{"start":{"row":144,"column":0},"end":{"row":144,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":144,"column":4},"end":{"row":144,"column":59},"action":"insert","lines":["var token_ID50 = document.getElementById(\"token_ID50\");"],"id":865}],[{"start":{"row":144,"column":59},"end":{"row":144,"column":114},"action":"insert","lines":["var token_ID50 = document.getElementById(\"token_ID50\");"],"id":866}],[{"start":{"row":144,"column":114},"end":{"row":145,"column":0},"action":"insert","lines":["",""],"id":867},{"start":{"row":145,"column":0},"end":{"row":145,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":145,"column":4},"end":{"row":146,"column":0},"action":"insert","lines":["",""],"id":868},{"start":{"row":146,"column":0},"end":{"row":146,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":146,"column":4},"end":{"row":146,"column":59},"action":"insert","lines":["var token_ID50 = document.getElementById(\"token_ID50\");"],"id":869}],[{"start":{"row":146,"column":59},"end":{"row":147,"column":0},"action":"insert","lines":["",""],"id":870},{"start":{"row":147,"column":0},"end":{"row":147,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":147,"column":4},"end":{"row":147,"column":59},"action":"insert","lines":["var token_ID50 = document.getElementById(\"token_ID50\");"],"id":871}],[{"start":{"row":144,"column":59},"end":{"row":145,"column":0},"action":"insert","lines":["",""],"id":872},{"start":{"row":145,"column":0},"end":{"row":145,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":138,"column":17},"end":{"row":138,"column":18},"action":"remove","lines":["0"],"id":873}],[{"start":{"row":138,"column":17},"end":{"row":138,"column":18},"action":"insert","lines":["1"],"id":874}],[{"start":{"row":139,"column":17},"end":{"row":139,"column":18},"action":"remove","lines":["0"],"id":875}],[{"start":{"row":139,"column":17},"end":{"row":139,"column":18},"action":"insert","lines":["2"],"id":876}],[{"start":{"row":140,"column":17},"end":{"row":140,"column":18},"action":"remove","lines":["0"],"id":877}],[{"start":{"row":140,"column":17},"end":{"row":140,"column":18},"action":"insert","lines":["3"],"id":878}],[{"start":{"row":141,"column":17},"end":{"row":141,"column":18},"action":"remove","lines":["0"],"id":879}],[{"start":{"row":141,"column":17},"end":{"row":141,"column":18},"action":"insert","lines":["4"],"id":880}],[{"start":{"row":142,"column":17},"end":{"row":142,"column":18},"action":"remove","lines":["0"],"id":881}],[{"start":{"row":142,"column":17},"end":{"row":142,"column":18},"action":"insert","lines":["5"],"id":882}],[{"start":{"row":143,"column":17},"end":{"row":143,"column":18},"action":"remove","lines":["0"],"id":883}],[{"start":{"row":143,"column":17},"end":{"row":143,"column":18},"action":"insert","lines":["6"],"id":884}],[{"start":{"row":144,"column":18},"end":{"row":144,"column":19},"action":"insert","lines":["7"],"id":885}],[{"start":{"row":144,"column":18},"end":{"row":144,"column":19},"action":"remove","lines":["7"],"id":886}],[{"start":{"row":144,"column":17},"end":{"row":144,"column":18},"action":"remove","lines":["0"],"id":887}],[{"start":{"row":144,"column":17},"end":{"row":144,"column":18},"action":"insert","lines":["7"],"id":888}],[{"start":{"row":145,"column":17},"end":{"row":145,"column":18},"action":"remove","lines":["0"],"id":889}],[{"start":{"row":145,"column":17},"end":{"row":145,"column":18},"action":"insert","lines":["8"],"id":890}],[{"start":{"row":147,"column":17},"end":{"row":147,"column":18},"action":"remove","lines":["0"],"id":891}],[{"start":{"row":147,"column":17},"end":{"row":147,"column":18},"action":"insert","lines":["9"],"id":892}],[{"start":{"row":148,"column":16},"end":{"row":148,"column":17},"action":"remove","lines":["5"],"id":893}],[{"start":{"row":148,"column":16},"end":{"row":148,"column":17},"action":"insert","lines":["6"],"id":894}],[{"start":{"row":148,"column":54},"end":{"row":148,"column":55},"action":"remove","lines":["5"],"id":895}],[{"start":{"row":148,"column":54},"end":{"row":148,"column":55},"action":"insert","lines":["6"],"id":896}],[{"start":{"row":138,"column":55},"end":{"row":138,"column":56},"action":"remove","lines":["0"],"id":897}],[{"start":{"row":138,"column":55},"end":{"row":138,"column":56},"action":"insert","lines":["1"],"id":898}],[{"start":{"row":139,"column":55},"end":{"row":139,"column":56},"action":"remove","lines":["0"],"id":899}],[{"start":{"row":139,"column":55},"end":{"row":139,"column":56},"action":"insert","lines":["3"],"id":900}],[{"start":{"row":140,"column":55},"end":{"row":140,"column":56},"action":"remove","lines":["0"],"id":901}],[{"start":{"row":139,"column":55},"end":{"row":139,"column":56},"action":"remove","lines":["3"],"id":902}],[{"start":{"row":139,"column":55},"end":{"row":139,"column":56},"action":"insert","lines":["2"],"id":903}],[{"start":{"row":140,"column":55},"end":{"row":140,"column":56},"action":"insert","lines":["3"],"id":904}],[{"start":{"row":141,"column":55},"end":{"row":141,"column":56},"action":"remove","lines":["0"],"id":905}],[{"start":{"row":141,"column":55},"end":{"row":141,"column":56},"action":"insert","lines":["4"],"id":906}],[{"start":{"row":142,"column":55},"end":{"row":142,"column":56},"action":"remove","lines":["0"],"id":907}],[{"start":{"row":142,"column":55},"end":{"row":142,"column":56},"action":"insert","lines":["5"],"id":908}],[{"start":{"row":143,"column":55},"end":{"row":143,"column":56},"action":"remove","lines":["0"],"id":909}],[{"start":{"row":143,"column":55},"end":{"row":143,"column":56},"action":"insert","lines":["6"],"id":910}],[{"start":{"row":144,"column":55},"end":{"row":144,"column":56},"action":"remove","lines":["0"],"id":911}],[{"start":{"row":144,"column":55},"end":{"row":144,"column":56},"action":"insert","lines":["7"],"id":912}],[{"start":{"row":145,"column":55},"end":{"row":145,"column":56},"action":"remove","lines":["0"],"id":913}],[{"start":{"row":145,"column":55},"end":{"row":145,"column":56},"action":"insert","lines":["8"],"id":914}],[{"start":{"row":147,"column":55},"end":{"row":147,"column":56},"action":"remove","lines":["0"],"id":915}],[{"start":{"row":147,"column":55},"end":{"row":147,"column":56},"action":"insert","lines":["9"],"id":916}],[{"start":{"row":146,"column":0},"end":{"row":146,"column":4},"action":"remove","lines":["    "],"id":917}],[{"start":{"row":145,"column":59},"end":{"row":146,"column":0},"action":"remove","lines":["",""],"id":918}],[{"start":{"row":147,"column":59},"end":{"row":148,"column":0},"action":"insert","lines":["",""],"id":919},{"start":{"row":148,"column":0},"end":{"row":148,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":148,"column":4},"end":{"row":148,"column":59},"action":"insert","lines":["var token_ID60 = document.getElementById(\"token_ID60\");"],"id":920}],[{"start":{"row":148,"column":59},"end":{"row":149,"column":0},"action":"insert","lines":["",""],"id":921},{"start":{"row":149,"column":0},"end":{"row":149,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":149,"column":4},"end":{"row":149,"column":59},"action":"insert","lines":["var token_ID60 = document.getElementById(\"token_ID60\");"],"id":922}],[{"start":{"row":149,"column":59},"end":{"row":150,"column":0},"action":"insert","lines":["",""],"id":923},{"start":{"row":150,"column":0},"end":{"row":150,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":150,"column":4},"end":{"row":150,"column":59},"action":"insert","lines":["var token_ID60 = document.getElementById(\"token_ID60\");"],"id":924}],[{"start":{"row":150,"column":59},"end":{"row":151,"column":0},"action":"insert","lines":["",""],"id":925},{"start":{"row":151,"column":0},"end":{"row":151,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":151,"column":4},"end":{"row":151,"column":59},"action":"insert","lines":["var token_ID60 = document.getElementById(\"token_ID60\");"],"id":926}],[{"start":{"row":148,"column":17},"end":{"row":148,"column":18},"action":"remove","lines":["0"],"id":927}],[{"start":{"row":148,"column":17},"end":{"row":148,"column":18},"action":"insert","lines":["1"],"id":928}],[{"start":{"row":149,"column":17},"end":{"row":149,"column":18},"action":"remove","lines":["0"],"id":929}],[{"start":{"row":149,"column":17},"end":{"row":149,"column":18},"action":"insert","lines":["2"],"id":930}],[{"start":{"row":150,"column":17},"end":{"row":150,"column":18},"action":"remove","lines":["0"],"id":931}],[{"start":{"row":150,"column":17},"end":{"row":150,"column":18},"action":"insert","lines":["3"],"id":932}],[{"start":{"row":151,"column":17},"end":{"row":151,"column":18},"action":"remove","lines":["0"],"id":933}],[{"start":{"row":151,"column":17},"end":{"row":151,"column":18},"action":"insert","lines":["4"],"id":934}],[{"start":{"row":148,"column":55},"end":{"row":148,"column":56},"action":"remove","lines":["0"],"id":935}],[{"start":{"row":148,"column":55},"end":{"row":148,"column":56},"action":"insert","lines":["1"],"id":936}],[{"start":{"row":149,"column":55},"end":{"row":149,"column":56},"action":"remove","lines":["0"],"id":937}],[{"start":{"row":149,"column":55},"end":{"row":149,"column":56},"action":"insert","lines":["2"],"id":938}],[{"start":{"row":150,"column":55},"end":{"row":150,"column":56},"action":"remove","lines":["0"],"id":939}],[{"start":{"row":150,"column":55},"end":{"row":150,"column":56},"action":"insert","lines":["3"],"id":940}],[{"start":{"row":151,"column":55},"end":{"row":151,"column":56},"action":"remove","lines":["0"],"id":941}],[{"start":{"row":151,"column":55},"end":{"row":151,"column":56},"action":"insert","lines":["4"],"id":942}],[{"start":{"row":153,"column":4},"end":{"row":154,"column":0},"action":"insert","lines":["",""],"id":943},{"start":{"row":154,"column":0},"end":{"row":154,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":154,"column":4},"end":{"row":155,"column":0},"action":"insert","lines":["",""],"id":944},{"start":{"row":155,"column":0},"end":{"row":155,"column":4},"action":"insert","lines":["    "]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":154,"column":4},"end":{"row":154,"column":4},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1482210643187}