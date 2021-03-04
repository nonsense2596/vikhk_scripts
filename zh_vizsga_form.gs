function parseMessageData(messages){
  var records=[];
  for(var m=0;m<messages.length;m++)
  {
    console.log(m);
    var rec = {};
    var text = messages[m].getPlainBody();
    console.log(text);
    var matches = text.match("ZHVIZSGAFORMSZAK\:(.|\n)*");
    if(matches) rec.szak = matches[0];
    rec.szak = rec.szak.replace("ZHVIZSGAFORMSZAK\: ",'');

    var matches2 = text.match("ZHVIZSGAFORMTARGY\:(.|\n)*");
    if(matches2) rec.targy = matches2[0];
    rec.targy = rec.targy.replace("ZHVIZSGAFORMTARGY\: ",'');

    var matches3 = text.match("ZHVIZSGAFORMTIPUS\:(.|\n)*");
    if(matches3) rec.tipus = matches3[0];
    rec.tipus = rec.tipus.replace("ZHVIZSGAFORMTIPUS\: ",'');

    var matches4 = text.match("ZHVIZSGAFORMEGYEBTIPUS\:(.|\n)*");
    if(matches4) rec.szamegyebtipus = matches4[0];
    rec.szamegyebtipus = rec.szamegyebtipus.replace("ZHVIZSGAFORMEGYEBTIPUS\:",'');

    var matches5 = text.match("ZHVIZSGAFORMOSSZHANG\:(.|\n)*");
    if(matches5) rec.osszhang = matches5[0];
    rec.osszhang = rec.osszhang.replace("ZHVIZSGAFORMOSSZHANG\: ",'');

    var matches6 = text.match("ZHVIZSGAFORMMIBENNEM\:(.|\n)*");
    if(matches6) rec.mibennem = matches6[0];
    rec.mibennem = rec.mibennem.replace("ZHVIZSGAFORMMIBENNEM\:",'');


    var matches7 = text.match("ZHVIZSGAFORMNEMSZEREP\:(.|\r\n)*ZHVIZSGAFORMSZABALYT");
    if(matches7) rec.nemszerep = matches7[0];
    rec.nemszerep = rec.nemszerep.replace("ZHVIZSGAFORMNEMSZEREP\: ",'');
    rec.nemszerep = rec.nemszerep.replace("ZHVIZSGAFORMSZABALYT",'');


    var matches8 = text.match("ZHVIZSGAFORMSZABALYT\:(.|\n)*");
    if(matches8) rec.szabalyt = matches8[0];
    rec.szabalyt = rec.szabalyt.replace("ZHVIZSGAFORMSZABALYT\: ",'');


    var matches9 = text.match("ZHVIZSGAFORMELEGIDO\:(.|\n)*");
    if(matches9) rec.elegido = matches9[0];
    rec.elegido = rec.elegido.replace("ZHVIZSGAFORMELEGIDO\: ",'');


    var matches10 = text.match("ZHVIZSGAFORMEGYEB\:(.|\r\n)*");
    if(matches10) rec.egyeb = matches10[0];
    rec.egyeb = rec.egyeb.replace("ZHVIZSGAFORMEGYEB\: ",'');


    records.push(rec);
  }
  return records;
}

function getRelevantMessages() {
  var filter = "subject:OMRZHVIZSGAFORM AND newer_than:1d AND -label:OMR_ZHVIZSGA"
  var threads = GmailApp.search(filter,0,100); 

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
  var label = 'OMR_ZHVIZSGA';
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
  var sheet = spreadsheet.getSheetByName("");
  for(var r=0;r<records.length;r++)
  {
    sheet.appendRow([
      records[r].szak,
      records[r].targy,
      records[r].tipus,
      records[r].szamegyebtipus,
      records[r].osszhang,
      records[r].mibennem,
      records[r].nemszerep,
      records[r].szabalyt,
      records[r].elegido,
      records[r].egyeb
    ]);
  }
}

















