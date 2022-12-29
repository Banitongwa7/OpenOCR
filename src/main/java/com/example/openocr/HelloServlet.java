package com.example.openocr;

import java.io.*;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet(name = "helloServlet")
public class HelloServlet extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        String page = "index.jsp";
        request.getRequestDispatcher(page).forward(request, response);
    }

    public void destroy() {
    }
}