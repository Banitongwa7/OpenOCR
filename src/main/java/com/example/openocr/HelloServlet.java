package com.example.openocr;

import java.io.*;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

//@WebServlet(name = "helloServlet", value = "/hello-servlet")
@WebServlet()
public class HelloServlet extends HttpServlet {
   /* private String message;

    public void init() {
        message = "Hello World!";
    }*/

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        //response.setContentType("text/html");

        // Hello
//        PrintWriter out = response.getWriter();
//        out.println("<html><body>");
//        out.println("<h1>" + message + "</h1>");
//        out.println("</body></html>");

        request.getRequestDispatcher("index.jsp").forward(request, response);
    }

    public void destroy() {
    }
}