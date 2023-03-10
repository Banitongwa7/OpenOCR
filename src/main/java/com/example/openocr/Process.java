package com.example.openocr;

import java.io.InputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class Process {

    private static final String saveFile = "INSERT INTO files (fichier) values (?)";

    public int saveFileDatabase(InputStream file) {
        Connection connect = Database.connectDatabase();
        System.out.println(connect);

        int row = 0;

        try {
            PreparedStatement pr = connect.prepareStatement(saveFile);

            if (file != null) {
                pr.setBlob(1, file);
            }

            // send file to database
            row = pr.executeUpdate();

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

        return row;
    }

    public static void main(String[] args) {
        Connection connect = Database.connectDatabase();
        System.out.println(connect);
    }
}
