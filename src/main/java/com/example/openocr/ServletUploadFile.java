package com.example.openocr;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.io.InputStream;

@WebServlet(name = "ServletUploadFile", value = "/ServletUploadFile")
@MultipartConfig(maxFileSize = 16177215) // limite 16MB
public class ServletUploadFile extends HttpServlet {


    @Override
    public void init() {
    }


    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {



    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        InputStream inputStream = null;
        String message = null;
        Part filePart = request.getPart("file");



        if (filePart != null){
            // prints out some information for debugging
            System.out.println(filePart.getName());
            System.out.println(filePart.getSize());
            System.out.println(filePart.getContentType());
            inputStream = filePart.getInputStream();
        }

        int row = new Process().saveFileDatabase(inputStream);

        if (row > 0) {
            message = "File save to database";
        }

        // send response
        request.setAttribute("Message", message);
        request.getRequestDispatcher("index.jsp").forward(request, response);
    }
}
