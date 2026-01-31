const { expect } = require("@playwright/test");

module.exports = [
  
// POSITIVE FUNCTIONAL (24)

  {
    id: "Pos_Fun_0001",
    input: "mama aeDHum soodhanavaa.",
    expected:"මම ඇඳුම් සෝදනවා.",
  },
  
  {
    id: "Pos_Fun_0002",
    expected:"මම කතාව කිව්වා හැබැයි එයාට තේරුනාද දන්නෙ නෑ.",
    input: "mama kathaava kivvaa haebaeyi eyaata theerunaadha dhanne naee.",

  },
  {
    id: "Pos_Fun_0003",
    input: "nimal aavee naeththee oyaa enna kivvee naethi nisaa",
    expected:"නිමල් ආවේ නැත්තේ ඔයා එන්න කිව්වේ නැති නිසා",
  },
  {
    id: "Pos_Fun_0004",
    input: "oyaa yaaluvaage gedharata velaa vaedak aethi dheyakdha karanne? ehema naethnam vahaama gedhara enna.",
    expected:"ඔයා යාලුවාගෙ ගෙදරට වෙලා වැඩක් ඇති දෙයක්ද කරන්නේ? එහෙම නැත්නම් වහාම ගෙදර එන්න.",
  },
  {
    id: "Pos_Fun_0005",
    input: "mata haemadhaama raeeta hoDHata nindha yanavaa.",
    expected:"මට හැමදාම රෑට හොඳට නින්ද යනවා.",
  },
  {
    id: "Pos_Fun_0006",
    input: "mata kavadhaavath raeeta hoDHata nindha yannee naee.",
    expected:"මට කවදාවත් රෑට හොඳට නින්ද යන්නේ නෑ.",
  },
  {
    id: "Pos_Fun_0007",
    input: "suBha udhaeesanak! mata mee prashnaya karana vidhiya kiyala dhenna puluvandha?",
    expected:"සුභ උදෑසනක්! මට මේ ප්‍රශ්නය කරන විදිය කියල දෙන්න පුලුවන්ද?",
  },
  {
    id: "Pos_Fun_0008",
    input: "ayiyoo ooka mokakdha, mama kiyala dhennam.",
    expected:"අයියෝ ඕක මොකක්ද, මම කියල දෙන්නම්.",
  },
  {
    id: "Pos_Fun_0009",
    input: "karuNaakarala mee illiima gaena naevatha salakaa balanna puluvandha?",
    expected:"කරුණාකරල මේ ඉල්ලීම ගැන නැවත සලකා බලන්න පුලුවන්ද?",
  },
  {
    id: "Pos_Fun_0010",
    input: "machan ikmanata varen.",
    expected:"මචන් ඉක්මනට වරෙන්.",
  },
  {
    id: "Pos_Fun_0011",
    input: "maara mahansi, mama passe call ekak gannam.",
    expected:"මාර මහන්සි, මම පස්සෙ call එකක් ගන්නම්.",
  },
  {
    id: "Pos_Fun_0012",
    input: "yamu yamu ikmanata, dhaenatamath api parakkuyi kiya kiya giyee kamal.",
    expected:"යමු යමු ඉක්මනට, දැනටමත් අපි පරක්කුයි කිය කිය ගියේ කමල්.",
  },
  {
    id: "Pos_Fun_0013",
    input: "akkaa pothak kiyavanavaa.",
    expected:"අක්කා පොතක් කියවනවා.",
  },
  {
    id: "Pos_Fun_0014",
    input: "ammaa iiyee pansal giyaa.",
    expected:"අම්මා ඊයේ පන්සල් ගියා.",
  },
  {
    id: "Pos_Fun_0015",
    input: "mama heta rata yanavaa.",
    expected:"මම හෙට රට යනවා.",
  },
  {
    id: "Pos_Fun_0016",
    input: "oyaa issarahin bahinavadha? naethnam karuNaakarala poddak ehaata venna puluvandha?",
    expected:"ඔයා ඉස්සරහින් බහිනවද? නැත්නම් කරුණාකරල පොඩ්ඩක් එහාට වෙන්න පුලුවන්ද?",
  },
  {
    id: "Pos_Fun_0017",
    input: "eyaala adha enavadha? anee ehenam ikmanata ooka karala dhiyan baQQ.",
    expected:"එයාල අද එනවද? අනේ එහෙනම් ඉක්මනට ඕක කරල දියන් බං.",
  },
  {
    id: "Pos_Fun_0018",
    input: "mama google eken search karalaa hoyaagena whatsapp ekata share karalaa town ekata gihin printout ekak aragena aavaa.",
    expected:"මම google එකෙන් search කරලා හොයාගෙන whatsapp එකට share කරලා town එකට ගිහින් printout එකක් අරගෙන ආවා.",
  },
  {
    id: "Pos_Fun_0019",
    input: "ASAP kamalta email eka yavanna. ethakota eyaa MP4 file eka evayi.",
    expected:"ASAP කමල්ට email එක යවන්න. එතකොට එයා MP4 file එක එවයි.",
  },
  {
    id: "Pos_Fun_0020",
    input: "dheviyanee! ehema venne kohomadha?",
    expected:"දෙවියනේ! එහෙම වෙන්නෙ කොහොමද?",
  },
  {
    id: "Pos_Fun_0021",
    input: "mama 2026-01-31 oyaata Rs.2000 k transfer kalaa.",
    expected:"මම 2026-01-31 ඔයාට Rs.2000 ක් transfer කලා.",
  },
  {
    id: "Pos_Fun_0022",
    input: "akkaa iiye 6.30 PM vaeda aerilaa enakota kiri 500ml yi haal 5kg yi genaavaa.",
    expected:"අක්කා ඊයෙ 6.30 PM වැඩ ඇරිලා එනකොට කිරි 500ml යි හාල් 5kg යි ගෙනාවා.",
  },
  {
    id: "Pos_Fun_0023",
    input: "heta udhee lectures enavadha?\nara potha geenna puluvandha?\nmama next week dhennam.",
    expected: `හෙට උදේ lectures එනවද?
අර පොත ගේන්න පුලුවන්ද?
මම next week දෙන්නම්.`,
  },
  {
    id: "Pos_Fun_0024",
    input: "adoo siraavata? eekanam pissuvak baQQ,supiri. uBAta kiyanna api iiye giyaama thamayi dhaekkee puus paetav godak ethana hitiyaa. Puus ammaa peenna hitiyee naee, eeth tikakin uuth aavaa. passee api ammayi paetav tikayi okkoma aragena ayith vaccinate karaa, bayayinee naethnam. dhaen nam okkoma hoDHAta innavaa kaala biilaa sellam kara kara. eeth paetav dhenna oona kaata hari ekkenek vitharak thiyaagena. Haemooma hadhanna baeene ithin. Oyaatath eka puus paetiyek oonadha?",
    expected:"අඩෝ සිරාවට? ඒකනම් පිස්සුවක් බං,සුපිරි. උඹට කියන්න අපි ඊයෙ ගියාම තමයි දැක්කේ පූස් පැටව් ගොඩක් එතන හිටියා. ඵූස් අම්මා පේන්න හිටියේ නෑ, ඒත් ටිකකින් ඌත් ආවා. පස්සේ අපි අම්මයි පැටව් ටිකයි ඔක්කොම අරගෙන අයිත් vaccinate කරා, බයයිනේ නැත්නම්. දැන් නම් ඔක්කොම හොඳට ඉන්නවා කාල බීලා සෙල්ලම් කර කර. ඒත් පැටව් දෙන්න ඕන කාට හරි එක්කෙනෙක් විතරක් තියාගෙන. හැමෝම හදන්න බෑනෙ ඉතින්. ඔයාටත් එක පූස් පැටියෙක් ඕනද?",
    
  },

  
  // NEGATIVE FUNCTIONAL (10)
  
  {
    id: "Neg_Fun_0001",
    input: "puuspaetiyaasellamkaranavaa",
    expected:"පූස් පැටියා සෙල්ලම් කරනවා",
  },
  {
    id: "Neg_Fun_0002",
    input: "mamahaemadhaamaudheetaaachchibalannagiyaa",
    expected:"මම හැමදාම උදේට ආච්චි බලන්න ගියා",
  },
  {
    id: "Neg_Fun_0003",
    input: "mama adha town ekata gihin enakota paraNa yaaluvek meet vunaa.",
    expected:"මම අද town එකට ගිහින් එනකොට පරණ යාලුවෙක් meet වුනා",
  },
  {
    id: "Neg_Fun_0004",
    input: "PIN number ekayi CVC number ekayi kaatavathma yavanna epaa ok?",
    expected:"PIN number එකයි CVC number එකයි කාටවත්ම යවන්න එපා ok?",
  },
  {
    id: "Neg_Fun_0005",
    input: "ayiyoo        matanam          dhaen epaa        velaa thiyenne              haemadheema.",
    expected:"අයියෝ මටනම් දැන් එපා වෙලා තියෙන්නෙ හැමදේම.",
  },
  {
    id: "Neg_Fun_0006",
    input: "oyaa ikmanata yanna, takecare.",
    expected:"ඔයා ඉක්මනට යන්න, takecare.",
  },
  {
    id: "Neg_Fun_0007",
    input: "aMmAa gEdHaRa YaNaVaA",
    expected:"අම්මා ගෙදර යනවා",
  },
  {
    id: "Neg_Fun_0008",
    input: "mama ##@@ gedhara giyaata % passe amma ekka kathaa kalaa",
    expected:"මම අද ගෙදර ගියාට පස්සෙ අම්ම එක්ක කතා කලා",
  },
  {
    id: "Neg_Fun_0009",
    input:
      "oyaaenavadha",
    expected:"ඔයා එනවද?",
  },
{
  id: "Neg_FUN_0010",
  input: "meetingsvalatajoinvunaadha?",
  expected:"meetings වලට join වුනාද?",
},

  // POSITIVE UI
{
  id: "Pos_UI_0001",
  input: "mama bas ekee yanavaa.",
  expected:"මම බස් එකේ යනවා.",
  uiAction: "REAL_TIME_UPDATE",
},

];
