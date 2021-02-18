var mysql=require('mysql');

var conexion=mysql.createConnection({
    host:'remotemysql.com',
    user:'vHUY15Bwv1',
    password:'MzVWbheiCF',
    database:'vHUY15Bwv1'
});

conexion.connect(function (error){
    if (error)
        console.log('Problemas de conexion con mysql');
    else
        console.log('se inicio conexion');
});


module.exports=conexion;
