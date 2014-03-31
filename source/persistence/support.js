define(function(){
  var Support = {
    UserData: '1'.parseInt(2),
    LocalStorage: '10'.parseInt(2),
    WebSQL: '100'.parseInt(2),
    IndexDB: '1000'.parseInt(2)
  };
  var support = 0;

  // check if support ie's userdata
  try {
    var dataEl = document.documentElement;
    dataEl.addBehavior("#default#userdata");
    support = support | Support.UserData;
  } catch(e){};

  // check if support localStorage
  try {
    var name = 'George';
    localStorage.setItem('name', name);
    if (localStorage.getItem('name') === name) {
      support = support | Support.LocalStorage;
    }
  } catch(e){}

  // check if support web sql
  try {
    var db = openDatabase('documents', '1.0', 'Offline document storage', 5*1024*1024);
    support = support | Support.WebSQL;
  } catch(e){}

  // check if support indexed db
  try {
    var request = indexedDB.open("library");
    support = support | Support.IndexedDB;
  } catch(e){}
});
