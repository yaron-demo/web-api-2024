const mysql=require('mysql');



var connection = mysql.createConnection({
    host     : 'localhost',// שם השרת
    user     : 'root', // שם המשתמש
    password : '',// סיסמה
    database : 'ecom'// שם בסיס הנתונים
  });


connection.connect(()=>{
    console.log('connected to MySql');
});
global.db=connection;// יצירת משתנה גלובאלי בשם דיבי שמחזיק את הקונקשן