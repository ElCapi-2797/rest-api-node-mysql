1. npm init --yes
2. npm i express mysql
3. crear archivo: index.js { 
     - configuraciones
     - middlewares
     - rutas: carpeta routes
     - iniciando el servidor   
}
4. -D: dependencia de desarrollo
5. Cambio probando git
6. archivo database.js: conexion a la db usando mysql
7. error conexion mysql: "MySQL 8.0 - Client does not support authentication protocol requested by server; consider upgrading MySQL client" 
 /*QUERY ERROR AUTH USER*/
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root123$';
flush privileges;
