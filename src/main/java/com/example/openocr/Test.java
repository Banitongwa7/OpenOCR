package com.example.openocr;

import java.sql.Connection;

public class Test {
    public static void main(String[] args) {
        Connection connect = Database.connectDatabase();
        System.out.println(connect);
    }
}
