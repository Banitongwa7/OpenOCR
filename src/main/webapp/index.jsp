<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Open OCR - Free tool</title>
    <style>
        * {
            font-family: sans-serif;
            margin: 0;
            box-sizing: border-box;
            padding: 0;
        }

        .footer{
            background-color: #292c2f;
            box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
            box-sizing: border-box;
            width: 100%;
            text-align: left;
            font: normal 16px sans-serif;
            padding: 45px 50px;
        }

        .footer .footer-left p {
            color: #8f9296;
            font-size: 14px;
            margin: 0;
        }

        .footer p.footer-links {
            font-size: 18px;
            font-weight: bold;
            color: #ffffff;
            margin: 0 0 10px;
            padding: 0;
            transition: ease .25s;
        }

        .footer p.footer-links a {
            display: inline-block;
            line-height: 1.8;
            text-decoration: none;
            color: inherit;
            transition: ease .25s;
        }

        .footer .footer-links a:before {
            content: "Â·";
            font-size: 20px;
            left: 0;
            color: #fff;
            display: inline-block;
            padding-right: 5px;
        }

        .footer .footer-links .link-1:before {
            content: none;
        }

        .footer .footer-right {
            float: right;
            margin-top: 6px;
            max-width: 180px;
        }

        .footer .footer-right a {
            display: inline-block;
            width: 35px;
            height: 35px;
            background-color: #33383b;
            border-radius: 2px;
            font-size: 20px;
            color: #ffffff;
            text-align: center;
            line-height: 35px;
            margin-left: 3px;
            transition:all .25s;
        }

        .footer .footer-right a:hover{
            transform:scale(1.1);
        }

        .footer p.footer-links a:hover{text-decoration:underline;}

        /* Media Queries */

        @media (max-width: 600px) {
            .footer .footer-left, .footer .footer-right {
                text-align: center;
            }
            .footer .footer-right {
                float: none;
                margin: 0 auto 20px;
            }
            .footer .footer-left p.footer-links {
                line-height: 1.8;
            }
        }
    </style>
</head>

<body>

<header>
    <h3>Salut les gens !!!!!!!!!!!!!!</h3>

</header>

    <section class="section-1">
        <h1>Hello David,</h1>
        <h3>It works!</h3>
    </section>

<footer class="footer">
    <div class="footer-right">
        <a href="#">facebook</a>
        <a href="#">twitter</a>
        <a href="#">linkedin</a>
        <a href="#">github</a>
    </div>

    <div class="footer-left">

        <p class="footer-links">
            <a class="link-1" href="#">Home</a>

            <a href="#">Blog</a>

            <a href="#">Pricing</a>

            <a href="#">About</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
        </p>

        <p>Company Name &copy; 2015</p>
    </div>

</footer>

</body>

</html>