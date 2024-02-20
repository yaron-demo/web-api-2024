const mysql=require('mysql');
module.exports={

GetAllProducts:(req,res)=>{
    const conn=global.db;// שליפת הקונקשן מתוך הזכרון הגלובאלי
    conn.query('SELECT * FROM T_PRODUCTS',(error,results,fields)={

       if(error) // במידה והייתה שגיאה
            return res.status(500).json(error);// החזרת פרטי השגיאה
        else
            return res.status(200).json(results);// החזרת הנתונים שנתקבלו מהשרת
    });
}

}