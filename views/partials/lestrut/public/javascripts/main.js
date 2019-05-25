let config = {
    apiKey: "AIzaSyBhe8-m9KZxkzLsw7bhERZksx3DD-L3P1Q",
    authDomain: "lestrut-c343d.firebaseapp.com",
    databaseURL: "https://lestrut-c343d.firebaseio.com",
    projectId: "lestrut-c343d",
    storageBucket: "",
    messagingSenderId: "868519901278"
  }

  let app = firebase.initializeApp(config);
  let db = app.database();

  let refAll = db.ref('all');

  function post(title,art,cata){
    let ref = db.ref(`${cata}`);
    let data = {
      title: `${title}`,
      article: `${art}`
    };
    ref.push(data);
    refAll.push(data);
  }
}