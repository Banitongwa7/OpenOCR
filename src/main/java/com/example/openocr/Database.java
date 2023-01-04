package com.example.openocr;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Database {
    public static Connection connectDatabase() {
        Connection connect = null;
        String url = "jdbc:mysql://localhost:3306/openocrdb"; // "jdbc:mysql://localhost:3306/mydatabase?useSSL=false";
        String user = "dba";
        String password = "dbaPass"; // "david123";
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connect = DriverManager.getConnection(url, user, password);
            System.out.println("connexion établie.");
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println("erreur de connexion !" + e);
        }
        return connect;
    }
}
