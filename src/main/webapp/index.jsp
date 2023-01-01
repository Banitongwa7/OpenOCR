<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link href="https://fonts.googleapis.com/css2?family=Crete+Round:ital@1&display=swap" rel="stylesheet">
    <link href="'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">

    <title>Open OCR - Free tool</title>
    <style>
        * {
            box-sizing: border-box;
            margin:0;
            padding: 0;
        }


        header {
            display: flex;
            position: sticky;
            justify-content: space-between;
            background-color: #5f65667b;
            padding: 10px 40px;
        }

        header .logo {
            color: rgb(31, 37, 83);
            font-family: 'Crete Round', serif;
        }

        header .social-media {
            align-self: center;
        }

        header .social-media a{
            color: white;
            margin-right: 20px;
            font-size: 20px;
        }

        header .social-media .facebook:hover{
            color: #4267B2;
            transition: color 0.2s ease-out;
            -webkit-transition: color 0.2s ease-out;
            -moz-transition: color 0.2s ease-out;
            -ms-transition: color 0.2s ease-out;
            -o-transition: color 0.2s ease-out;
        }


        header .social-media .twitter:hover{
            color: #1DA1F2;
            transition: color 0.2s ease-out;
            -webkit-transition: color 0.2s ease-out;
            -moz-transition: color 0.2s ease-out;
            -ms-transition: color 0.2s ease-out;
            -o-transition: color 0.2s ease-out;
        }

        header .social-media .linkedin:hover{
            color: #0077b5;
            transition: color 0.2s ease-out;
            -webkit-transition: color 0.2s ease-out;
            -moz-transition: color 0.2s ease-out;
            -ms-transition: color 0.2s ease-out;
            -o-transition: color 0.2s ease-out;
        }

        header .social-media .github:hover{
            color: #333;
            transition: color 0.2s ease-out;
            -webkit-transition: color 0.2s ease-out;
            -moz-transition: color 0.2s ease-out;
            -ms-transition: color 0.2s ease-out;
            -o-transition: color 0.2s ease-out;
        }


        .file-container{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 86.7vh;
            font-family: "Poppins", sans-serif;
        }

        .file-container .wrapper{
            width: 430px;
            background: #fff;
            border-radius: 5px;
            padding: 30px;
            box-shadow: 7px 7px 12px rgba(0,0,0,0.05);
        }

        .file-container .wrapper .header-text{
            color: rgb(31, 37, 83);
            font-size: 27px;
            font-weight: 600;
            text-align: center;
        }


        .file-container .wrapper form{
            height: 297px;
            display: flex;
            margin: 30px 0;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            border-radius: 5px;
            border: 2px dashed #6990F2;
        }

        .file-container .wrapper form :where(i, p){
            color: #6990F2;
        }
        .file-container .wrapper form i{
            font-size: 50px;
            color: rgb(31, 37, 83);
        }
        .file-container .wrapper form p{
            margin-top: 15px;
            font-size: 16px;
        }

        section .row{
            margin-bottom: 10px;
            background: #E9F0FF;
            list-style: none;
            padding: 15px 20px;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        section .row i{
            color: #6990F2;
            font-size: 30px;
        }
        .file-container .wrapper section .details span{
            font-size: 14px;
        }
        .file-container .wrapper .progress-area .row .content{
            width: 100%;
            margin-left: 15px;
        }
        .file-container .wrapper .progress-area .details{
            display: flex;
            align-items: center;
            margin-bottom: 7px;
            justify-content: space-between;
        }
        .file-container .wrapper .progress-area .content .progress-bar{
            height: 6px;
            width: 100%;
            margin-bottom: 4px;
            background: #fff;
            border-radius: 30px;
        }
        .file-container .wrapper .content .progress-bar .progress{
            height: 100%;
            width: 0%;
            background: #6990F2;
            border-radius: inherit;
        }
        .file-container .wrapper .uploaded-area{
            max-height: 232px;
            overflow-y: scroll;
        }
        .file-container .wrapper .uploaded-area.onprogress{
            max-height: 150px;
        }
        .file-container .wrapper .uploaded-area::-webkit-scrollbar{
            width: 0px;
        }
        .file-container .wrapper .uploaded-area .row .content{
            display: flex;
            align-items: center;
        }
        .file-container .wrapper .uploaded-area .row .details{
            display: flex;
            margin-left: 15px;
            flex-direction: column;
        }
        .file-container .wrapper .uploaded-area .row .details .size{
            color: #404040;
            font-size: 11px;
        }
        .file-container .wrapper .uploaded-area i.fa-check{
            font-size: 16px;
        }

        .wrapper .btn-container{
            width: 100%;
            text-align: center;
        }


        .wrapper .btn-container .btn {
            width: 50%;
            background-image: linear-gradient(#0dccea, #0d70ea);
            border: none;
            border-radius: 4px;
            box-shadow: rgba(0, 0, 0, .3) 0 5px 15px;
            color: #fff;
            cursor: pointer;
            font-family: Montserrat,sans-serif;
            font-size: .9em;
            padding: 10px 15px;
            user-select: none;
            opacity: .7;
        }

        .wrapper .btn-container .btn:hover{
            opacity: 1;
            transition: opacity 0.2s ease-in-out;
            -webkit-transition: opacity 0.2s ease-in-out;
            -moz-transition: opacity 0.2s ease-in-out;
            -ms-transition: opacity 0.2s ease-in-out;
            -o-transition: opacity 0.2s ease-in-out;
        }

        .wrapper form .bi-cloud-upload{
            cursor: pointer;
        }


        .wrapper form .file-input{
            margin-top: 30px;
            color:rgb(31, 37, 83);
            font-family: Georgia, 'Times New Roman', Times, serif;
            border: #292c2f;
        }





        /* ------------------------------------------- Footer ------------------------------------------------ */

        .footer{
            position: relative;
            background-color: #292c2f;
            box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
            width: 100%;
            text-align: left;
            font: normal 16px sans-serif;
            padding: 15px 50px;
            bottom: 0;
        }



        .footer .signature {
            text-align: center;
            color: #8f9296;
            font-size: 14px;
            margin: 0;
        }

        .resultat p{
            font-size: 13px;
            width: 50%;
            margin: auto;
            color: red;
        }


    </style>
</head>

<body>


<header>
    <div class="logo">
        <h2>Open OCR</h2>
    </div>
    <div class="social-media">
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
        <a href="#" class="github"><i class="bi bi-github"></i></a>
    </div>
</header>



<section class="file-container">

    <div class="wrapper">
        <div class="header-text">OCR - Free tool</div>
        <form action="ServletUploadFile" method="POST" enctype="multipart/form-data">
            <i class="bi bi-cloud-upload"></i>
            <p>Déposez votre  document PDF, PNG ou JPG</p>
            <input class="file-input" type="file" name="file">
        </form>
        <div class="btn-container">
            <button class="btn" type="button">Recuperer texte</button>
        </div>
    </div>

    <div class="resultat">
        <p><%= request.getAttribute("Message") %></p>
    </div>

</section>


<footer class="footer">
    <div class="signature">
        <p>Open OCR - free tool By David Banitongwa &copy; <span class="date"></span></p>
    </div>
</footer>



<script>

    const icon = document.querySelector("form .bi-cloud-upload");
    const fileInput = document.querySelector(".file-input");
    const btn = document.querySelector(".wrapper .btn-container .btn")
    const form = document.querySelector(".wrapper form")


    icon.addEventListener("click", () =>{
        fileInput.click();
    });

    btn.addEventListener("click", () => {
        if(fileInput.files[0]){
            form.submit()
        }else{
            alert("Veuillez inserer un fichier !");
        }
    })

    // Date

    let span = document.querySelector(".signature .date")
    let date = new Date
    let year = date.getFullYear()

    span.innerText = year
</script>

</body>

</html>