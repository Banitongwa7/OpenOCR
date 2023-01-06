package com.example.openocr;

import net.sourceforge.tess4j.Tesseract;
import org.opencv.core.Core;
import org.opencv.core.Mat;
import org.opencv.imgcodecs.Imgcodecs;

import java.io.InputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class Process {

    private static final String saveFile = "INSERT INTO files (fichier) values (?)";
    static Tesseract tesseract = new Tesseract();
    static {
        System.loadLibrary(Core.NATIVE_LIBRARY_NAME);
        tesseract.setDatapath("E:/programme/ocr/Tesseract-OCR/tessdata");
    }

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

    public String getContentText(InputStream file){
        String content = "";
        Mat gray = new Mat();
        //Mat image = Imgcodecs.imread();


        return content;
    }
}
