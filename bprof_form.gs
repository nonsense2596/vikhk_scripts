function parseMessageData(messages) {
  var records=[];
  for(var m=0;m<messages.length;m++)
  {
    var rec = {};
    var text = messages[m].getPlainBody();
    console.log(text);

    var matches = text.match("ERTEKELES\:(.|\n)*");
    if(matches) rec.ertekeles = matches[0];
    rec.ertekeles = rec.ertekeles.replace("ERTEKELES\: ",'');

    var matches2 = text.match("UJRA\:(.|\n)*");
    if(matches2) rec.ujra = matches2[0];
    rec.ujra = rec.ujra.replace("UJRA\: ",'');

    var matches3 = text.match("AJANLAS\:(.|\n)*");
    if(matches3) rec.ajanlas = matches3[0];
    rec.ajanlas = rec.ajanlas.replace("AJANLAS\: ",'');

    var matches4 = text.match("MASIKSZAK\:(.|\n)*");
    if(matches4) rec.masikszak = matches4[0];
    rec.masikszak = rec.masikszak.replace("MASIKSZAK\: ",'');

    var matches5 = text.match("HASONLOTERULET\:(.|\n)*");
    if(matches5) rec.hasonlo = matches5[0];
    rec.hasonlo = rec.hasonlo.replace("HASONLOTERULET\: ",'');

    var matches6 = text.match("MIERTEZAKEPZES\:(.|\n)*");
    if(matches6) rec.miert = matches6[0];
    rec.miert = rec.miert.replace("MIERTEZAKEPZES\: ",'');

    var matches7 = text.match("OKTATOKSKALA\:(.|\n)*");
    if(matches7) rec.oktatoskala = matches7[0];
    rec.oktatoskala = rec.oktatoskala.replace("OKTATOKSKALA\: ",'');

    var matches8 = text.match("TARGYAKKOTELEZOSKALA\:(.|\n)*");
    if(matches8) rec.kotskala = matches8[0];
    rec.kotskala = rec.kotskala.replace("TARGYAKKOTELEZOSKALA\: ",'');

    var matches9 = text.match("TARGYAKVALASZTHATOSKALA\:(.|\n)*");
    if(matches9) rec.valskala = matches9[0];
    rec.valskala = rec.valskala.replace("TARGYAKVALASZTHATOSKALA\: ",'');

    var matches10 = text.match("OKTATOK\:(.|\n)*");
    if(matches10) rec.oktatok = matches10[0];
    rec.oktatok = rec.oktatok.replace("OKTATOK\: ",'');

    var matches11 = text.match("TARGYAK\:(.|\n)*");
    if(matches11) rec.targyak = matches11[0];
    rec.targyak = rec.targyak.replace("TARGYAK\: ",'');

    var matches12 = text.match("ELMELETGYAKORLAT\:(.|\n)*");
    if(matches12) rec.egy = matches12[0];
    rec.egy = rec.egy.replace("ELMELETGYAKORLAT\: ",'');

    var matches13 = text.match("ELMGYAKVALTOZTATAS\:(.|\n)*");
    if(matches13) rec.egyv = matches13[0];
    rec.egyv = rec.egyv.replace("ELMGYAKVALTOZTATAS\: ",'');

    var matches14 = text.match("TARGYKIV\:(.|\n)*");
    if(matches14) rec.targykiv = matches14[0];
    rec.targykiv = rec.targykiv.replace("TARGYKIV\: ",'');

    var matches15 = text.match("TARGYAKKIVETEL\:(.|\n)*");
    if(matches15) rec.targykivetel = matches15[0];
    rec.targykivetel = rec.targykivetel.replace("TARGYAKKIVETEL\: ",'');

    var matches16 = text.match("HASZNOS\:(.|\n)*");
    if(matches16) rec.hasznos = matches16[0];
    rec.hasznos = rec.hasznos.replace("HASZNOS\: ",'');

    var matches17 = text.match("TARGYAKPLUSZ\:(.|\n)*");
    if(matches17) rec.targyplusz = matches17[0];
    rec.targyplusz = rec.targyplusz.replace("TARGYAKPLUSZ\: ",'');

    var matches18 = text.match("VALTOZTATAS\:(.|\n)*");
    if(matches18) rec.valtoztatas = matches18[0];
    rec.valtoztatas = rec.valtoztatas.replace("VALTOZTATAS\: ",'');

    var matches19 = text.match("SPEC\:(.|\n)*");
    if(matches19) rec.spec = matches19[0];
    rec.spec = rec.spec.replace("SPEC\: ",'');

    var matches20 = text.match("SPECELEGEDETTSEGSKALA\:(.|\n)*");
    if(matches20) rec.specelskala = matches20[0];
    rec.specelskala = rec.specelskala.replace("SPECELEGEDETTSEGSKALA\: ",'');

    var matches21 = text.match("SPECELEGEDETTSEG\:(.|\n)*");
    if(matches21) rec.specel = matches21[0];
    rec.specel = rec.specel.replace("SPECELEGEDETTSEG\: ",'');

    var matches22 = text.match("SPECINFO\:(.|\n)*");
    if(matches22) rec.specinfo = matches22[0];
    rec.specinfo = rec.specinfo.replace("SPECINFO\: ",'');

    var matches23 = text.match("SPECTAJEKOZOTTSAG\:(.|\n)*");
    if(matches23) rec.spectaj = matches23[0];
    rec.spectaj = rec.spectaj.replace("SPECTAJEKOZOTTSAG\: ",'');

    var matches24 = text.match("CEG\:(.|\n)*");
    if(matches24) rec.ceg = matches24[0];
    rec.ceg = rec.ceg.replace("CEG\: ",'');

    var matches25 = text.match("CEGSKALA\:(.|\n)*");
    if(matches25) rec.cegskala = matches25[0];
    rec.cegskala = rec.cegskala.replace("CEGSKALA\: ",'');

    var matches26 = text.match("SZAKGYAK\:(.|\n)*");
    if(matches26) rec.szakgyak = matches26[0];
    rec.szakgyak = rec.szakgyak.replace("SZAKGYAK\: ",'');

    var matches27 = text.match("CEGFEJLODES\:(.|\n)*");
    if(matches27) rec.cegfejl = matches27[0];
    rec.cegfejl = rec.cegfejl.replace("CEGFEJLODES\: ",'');

    var matches28 = text.match("CEGSEGITSEG\:(.|\n)*");
    if(matches28) rec.cegsegit = matches28[0];
    rec.cegsegit = rec.cegsegit.replace("CEGSEGITSEG\: ",'');

    var matches29 = text.match("ALAPOKSKALA\:(.|\n)*");
    if(matches29) rec.alapokskala = matches29[0];
    rec.alapokskala = rec.alapokskala.replace("ALAPOKSKALA\: ",'');

    var matches30 = text.match("CEGMARADT\:(.|\n)*");
    if(matches30) rec.cegmaradt = matches30[0];
    rec.cegmaradt = rec.cegmaradt.replace("CEGMARADT\: ",'');

    var matches31 = text.match("CEGLEHETOSEG\:(.|\n)*");
    if(matches31) rec.ceglehet = matches31[0];
    rec.ceglehet = rec.ceglehet.replace("CEGLEHETOSEG\: ",'');

    var matches32 = text.match("CEGMARADNAL\:(.|\n)*");
    if(matches32) rec.cegmaradnal = matches32[0];
    rec.cegmaradnal = rec.cegmaradnal.replace("CEGMARADNAL\: ",'');

    var matches33 = text.match("CEGAJANLAS\:(.|\n)*");
    if(matches33) rec.cegajanlas = matches33[0];
    rec.cegajanlas = rec.cegajanlas.replace("CEGAJANLAS\: ",'');

    var matches34 = text.match("CEGAJANLASKINEK\:(.|\n)*");
    if(matches34) rec.kinek = matches34[0];
    rec.kinek = rec.kinek.replace("CEGAJANLASKINEK\: ",'');

    var matches35 = text.match("CEGSZAKDOGAIDO\:(.|\n)*");
    if(matches35) rec.szakdido = matches35[0];
    rec.szakdido = rec.szakdido.replace("CEGSZAKDOGAIDO\: ",'');

    var matches36 = text.match("MUNKAKERESESSKALA\:(.|\n)*");
    if(matches36) rec.keresskala = matches36[0];
    rec.keresskala = rec.keresskala.replace("MUNKAKERESESSKALA\: ",'');

    var matches37 = text.match("SZAKGYAKBARMI\:(.|\n)*");
    if(matches37) rec.szgybarmi = matches37[0];
    rec.szgybarmi = rec.szgybarmi.replace("SZAKGYAKBARMI\: ",'');

    records.push(rec);
  }
  return records;
}

function getRelevantMessages() {
  var filter = "subject:KKOFORM AND newer_than:1d AND -label:KKOFORM"
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
  var label = 'BPROF';
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
  var spreadsheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1uQ7eho_Ge8u-RgW64IvCWwg4Doxty2IjYSlEOkI0WHg/edit#gid=0");
  var sheet = spreadsheet.getSheetByName("Sheet1");
  for(var r=0;r<records.length;r++)
  {
    sheet.appendRow([
      records[r].ertekeles,
      records[r].ujra,
      records[r].ajanlas,
      records[r].masikszak,
      records[r].hasonlo,
      records[r].miert,
      records[r].oktatoskala,
      records[r].kotskala,
      records[r].valskala,
      records[r].oktatok,
      records[r].targyak,
      records[r].egy,
      records[r].egyv,
      records[r].targykiv,
      records[r].targykivetel,
      records[r].hasznos,
      records[r].targyplusz,
      records[r].valtoztatas,
      records[r].spec,
      records[r].specelskala,
      records[r].specel,
      records[r].specinfo,
      records[r].spectaj,
      records[r].ceg,
      records[r].cegskala,
      records[r].szakgyak,
      records[r].cegfejl,
      records[r].cegsegit,
      records[r].alapokskala,
      records[r].cegmaradt,
      records[r].ceglehet,
      records[r].cegmaradnal,
      records[r].cegajanlas,
      records[r].kinek,
      records[r].szakdido,
      records[r].keresskala,
      records[r].szgybarmi,
    ]);
  }
}
