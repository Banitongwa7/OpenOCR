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
            height: 167px;
            display: flex;
            cursor: pointer;
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
        <form action="#">
            <input class="file-input" type="file" name="file" hidden>
            <i class="bi bi-cloud-upload"></i>
            <p>Déposez votre  document PDF, PNG ou JPG</p>
        </form>
        <section class="progress-area"></section>
        <section class="uploaded-area"></section>
    </div>

</section>


<footer class="footer">
    <div class="signature">
        <p>Open OCR - free tool By David Banitongwa &copy; <span class="date"></span></p>
    </div>
</footer>



<script>
    const form = document.querySelector("form"),
        fileInput = document.querySelector(".file-input"),
        progressArea = document.querySelector(".progress-area"),
        uploadedArea = document.querySelector(".uploaded-area");
    form.addEventListener("click", () =>{
        fileInput.click();
    });
    fileInput.onchange = ({target})=>{
        let file = target.files[0];
        if(file){
            let fileName = file.name;
            if(fileName.length >= 12){
                let splitName = fileName.split('.');
                fileName = splitName[0].substring(0, 13) + "... ." + splitName[1];
            }
            uploadFile(fileName);
        }
    }
    function uploadFile(name){
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "php/upload.php");
        xhr.upload.addEventListener("progress", ({loaded, total}) =>{
            let fileLoaded = Math.floor((loaded / total) * 100);
            let fileTotal = Math.floor(total / 1000);
            let fileSize;
            (fileTotal < 1024) ? fileSize = fileTotal + " KB" : fileSize = (loaded / (1024*1024)).toFixed(2) + " MB";
            let progressHTML = `<li class="row">
                          <i class="bi bi-file-earmark-text"></i>
                          <div class="content">
                            <div class="details">
                              <span class="name">${name} • Uploading</span>
                              <span class="percent">${fileLoaded}%</span>
                            </div>
                            <div class="progress-bar">
                              <div class="progress" style="width: ${fileLoaded}%"></div>
                            </div>
                          </div>
                        </li>`;
            uploadedArea.classList.add("onprogress");
            progressArea.innerHTML = progressHTML;
            if(loaded == total){
                progressArea.innerHTML = "";
                let uploadedHTML = `<li class="row">
                            <div class="content upload">
                              <i class="bi bi-file-earmark-text"></i>
                              <div class="details">
                                <span class="name">${name} • Uploaded</span>
                                <span class="size">${fileSize}</span>
                              </div>
                            </div>
                            <i class="bi bi-patch-check"></i>
                          </li>`;
                uploadedArea.classList.remove("onprogress");
                uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML);
            }
        });
        let data = new FormData(form);
        xhr.send(data);
    }


    // Date

    let span = document.querySelector(".signature .date")
    let date = new Date
    let year = date.getFullYear()

    span.innerText = year
</script>

</body>

</html>