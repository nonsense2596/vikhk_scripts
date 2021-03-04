function parseMessageData(messages){
  var records=[];
  for(var m=0;m<messages.length;m++)
  {
    var rec = {};
    var text = messages[m].getPlainBody();
    console.log(text);

    var matches = text.match("TTKSZAK\:(.|\n)*");
    if(matches) rec.szak = matches[0];
    rec.szak = rec.szak.replace("TTKSZAK\: ",'');
    var matches2 = text.match("TTKVILLANYTARGY\:(.|\n)*");
    if(matches2) rec.villtargy = matches2[0];
    rec.villtargy = rec.villtargy.replace("TTKVILLANYTARGY\: ",'');
    var matches3 = text.match("TTKINFOTARGY\:(.|\n)*");
    if(matches3) rec.infotargy = matches3[0];
    rec.infotargy = rec.infotargy.replace("TTKINFOTARGY\: ",'');
    var matches4 = text.match("TTKBPROFTARGY\:(.|\n)*");
    if(matches4) rec.bproftargy = matches4[0];
    rec.bproftargy = rec.bproftargy.replace("TTKBPROFTARGY\: ",'');

    var matches5 = text.match("TTKEARESZVET\:(.|\n)*");
    if(matches5) rec.eareszvet = matches5[0];
    rec.eareszvet = rec.eareszvet.replace("TTKEARESZVET\: ",'');
    var matches6 = text.match("TTKEAVELEMENY\:(.|\r\n)*TTKEAOKTATO");
    if(matches6) rec.eavelemeny = matches6[0];
    rec.eavelemeny = rec.eavelemeny.replace("TTKEAVELEMENY\: ",'');
    rec.eavelemeny = rec.eavelemeny.replace("TTKEAOKTATO",'');
    var matches7 = text.match("TTKEAOKTATO\:(.|\n)*");
    if(matches7) rec.eaoktato = matches7[0];
    rec.eaoktato = rec.eaoktato.replace("TTKEAOKTATO\: ",'');
    var matches8 = text.match("TTKEAOKTVEL\:(.|\r\n)*TTKEAEGYEB");
    if(matches8) rec.eaoktvel = matches8[0];
    rec.eaoktvel = rec.eaoktvel.replace("TTKEAOKTVEL\: ",'');
    rec.eaoktvel = rec.eaoktvel.replace("TTKEAEGYEB",'');
    var matches9 = text.match("TTKEAEGYEB\:(.|\r\n)*TTKGYAKRESZVET");
    if(matches9) rec.eaegyeb = matches9[0];
    rec.eaegyeb = rec.eaegyeb.replace("TTKEAEGYEB\: ",'');
    rec.eaegyeb = rec.eaegyeb.replace("TTKGYAKRESZVET",'');

    var matches10 = text.match("TTKGYAKRESZVET\:(.|\n)*");
    if(matches10) rec.gyakreszvet = matches10[0];
    rec.gyakreszvet = rec.gyakreszvet.replace("TTKGYAKRESZVET\: ",'');
    var matches11 = text.match("TTKGYAKVEL\:(.|\r\n)*TTKGYAKEAKOVET");
    if(matches11) rec.gyakvel = matches11[0];
    rec.gyakvel = rec.gyakvel.replace("TTKGYAKVEL\: ",'');
    rec.gyakvel = rec.gyakvel.replace("TTKGYAKEAKOVET",'');
    var matches12 = text.match("TTKGYAKEAKOVET\:(.|\r\n)*TTKGYAKEGYEB");
    if(matches12) rec.gyakeakovet = matches12[0];
    rec.gyakeakovet = rec.gyakeakovet.replace("TTKGYAKEAKOVET\: ",'');
    rec.gyakeakovet = rec.gyakeakovet.replace("TTKGYAKEGYEB",'');
    var matches13 = text.match("TTKGYAKEGYEB\:(.|\r\n)*TTKOSSZHANG");
    if(matches13) rec.gyakegyeb = matches13[0];
    rec.gyakegyeb = rec.gyakegyeb.replace("TTKGYAKEGYEB\: ",'');
    rec.gyakegyeb = rec.gyakegyeb.replace("TTKOSSZHANG",''); 

    var matches14 = text.match("TTKOSSZHANG\:(.|\n)*");
    if(matches14) rec.osszhang = matches14[0];
    rec.osszhang = rec.osszhang.replace("TTKOSSZHANG\: ",'');
    var matches15 = text.match("TTKSZKVEL\:(.|\r\n)*TTKSZKSEGIT");
    if(matches15) rec.szkvel = matches15[0];
    rec.szkvel = rec.szkvel.replace("TTKSZKVEL\: ",'');
    rec.szkvel = rec.szkvel.replace("TTKSZKSEGIT",'');
    var matches16 = text.match("TTKSZKSEGIT\:(.|\r\n)*TTKSZKSEGED");
    if(matches16) rec.szksegit = matches16[0];
    rec.szksegit = rec.szksegit.replace("TTKSZKSEGIT\: ",'');
    rec.szksegit = rec.szksegit.replace("TTKSZKSEGED",'');
    var matches17 = text.match("TTKSZKSEGED\:(.|\r\n)*TTKSZKEGYEB");
    if(matches17) rec.szkseged = matches17[0];
    rec.szkseged = rec.szkseged.replace("TTKSZKSEGED\: ",'');
    rec.szkseged = rec.szkseged.replace("TTKSZKEGYEB",'');
    var matches18 = text.match("TTKSZKEGYEB\:(.|\r\n)*TTKTUDKAP");
    if(matches18) rec.szkegyeb = matches18[0];
    rec.szkegyeb = rec.szkegyeb.replace("TTKSZKEGYEB\: ",'');
    rec.szkegyeb = rec.szkegyeb.replace("TTKTUDKAP",'');

    var matches19 = text.match("TTKTUDKAP\:(.|\n)*");
    if(matches19) rec.tudkap = matches19[0];
    rec.tudkap = rec.tudkap.replace("TTKTUDKAP\: ",'');
    var matches20 = text.match("TTKTUDHASZ\:(.|\r\n)*TTKTUDBIZT");
    if(matches20) rec.tudhasz = matches20[0];
    rec.tudhasz = rec.tudhasz.replace("TTKTUDHASZ\: ",'');
    rec.tudhasz = rec.tudhasz.replace("TTKTUDBIZT",'');
    var matches21 = text.match("TTKTUDBIZT\:(.|\n)*");
    if(matches21) rec.tudbizt = matches21[0];
    rec.tudbizt = rec.tudbizt.replace("TTKTUDBIZT\: ",'');
    var matches22 = text.match("TTKTARGYOSSZ\:(.|\r\n)*TTKTARGYEGYEB");
    if(matches22) rec.tudtargyossz = matches22[0];
    rec.tudtargyossz = rec.tudtargyossz.replace("TTKTARGYOSSZ\: ",'');
    rec.tudtargyossz = rec.tudtargyossz.replace("TTKTARGYEGYEB",'');
    var matches23 = text.match("TTKTARGYEGYEB\:(.|\r\n)*");
    if(matches23) rec.egyeb = matches23[0];
    rec.egyeb = rec.egyeb.replace("TTKTARGYEGYEB\: ",'');


    records.push(rec);
  }
  return records;
}

function getRelevantMessages() {
  var filter = "subject:OMRTTKFORM AND newer_than:1d AND -label:OMR_TTKFORM"
  var threads = GmailApp.search(filter,0,10);
  var messages=[];
  threads.forEach(function(thread){
    messages.push(thread.getMessages()[0]);
  });
  return messages;
}

function doGet(){
  var messages = getRelevantMessages();
  var records = parseMessageData(messages);
  saveDataToSheet(records);
  labelMessagesAsDone(messages);
}

function labelMessagesAsDone(messages)
{
  var label = 'OMR_TTKFORM';
  var label_obj = GmailApp.getUserLabelByName(label);
  if(!label_obj)
    label_obj = GmailApp.createLabel(label);
  for(var m=0;m<messages.length;m++)
  {
    label_obj.addToThread(messages[m].getThread());
  }
}



function saveDataToSheet(records)
{
  var spreadsheet = SpreadsheetApp.openByUrl(" ");
  var sheet = spreadsheet.getSheetByName(" ");
  for(var r=0;r<records.length;r++)
  {
    sheet.appendRow([
      records[r].szak,
      records[r].villtargy,
      records[r].infotargy,
      records[r].bproftargy,
      records[r].eareszvet,
      records[r].eavelemeny,
      records[r].eaoktato,      
      records[r].eaoktvel,
      records[r].eaegyeb,      
      records[r].gyakreszvet,
      records[r].gyakvel,
      records[r].gyakeakovet,
      records[r].gyakegyeb,
      records[r].osszhang,
      records[r].szkvel,
      records[r].szksegit,
      records[r].szkseged,
      records[r].szkegyeb,
      records[r].tudkap,
      records[r].tudhasz,
      records[r].tudbizt,
      records[r].tudtargyossz,
      records[r].egyeb
    ]);
  }
}

















