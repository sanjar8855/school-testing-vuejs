<template>
<div class="top_container">
    <!-- header section strats -->
    <header class="header_section">
      <div class="container">
        <nav class="navbar navbar-expand-lg custom_nav-container ">
          <router-link to="/">
            <a class="navbar-brand" href="">
              <span>Schooltesting</span>
            </a>
          </router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul class="navbar-nav">
<!--                <li class="nav-item active">-->
<!--                  <a class="nav-link" href="index.html"> Home <span class="sr-only">(current)</span></a>-->
<!--                </li>-->
                <li class="nav-item ">
                  <router-link to="/about">
                    <a class="nav-link" href="">Loyiha haqida</a>
                  </router-link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contact">Bog'lanish</a>
                </li>
                <router-link to="/auth">
                  <a class="nav-link" href="">Kirish</a>
                </router-link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <section class="hero_section ">
      <div class="hero-container container">
        <div class="hero_detail-box">
          <h1>
            O‘z bilimingizni sinang!
          </h1>
          <p>
            Schooltesting – bu o‘quvchilarni xalqaro PISA, TIMSS, PIRLS tadqiqotlariga tayyorgarlik ko‘rishi uchun sinov platformasidir.
          </p>
          <div class="hero_btn-continer">
            <router-link to="/auth">
              <a href="" class="call_to-btn btn_white-border">
                Boshlash
              </a>
            </router-link>
          </div>
        </div>
        <div class="hero_img-container">
          <div>
            <img src="../../public/fanadesh/images/schooltesting.jpeg" alt="" class="img-fluid">
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- end header section -->

  <div class="common_style">

    <!-- about section -->
    <section class="about_section" id="about">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="about_img-container">
              <img src="../../public/fanadesh/images/about.png" alt="">
            </div>
          </div>
          <div class="col-md-6">
            <div class="about_detail-box">
              <h3>Schooltesting loyihasi haqida</h3>
              <p>
                Schooltesting – bu o‘quvchilarni xalqaro PISA, TIMSS, PIRLS tadqiqotlariga tayyorgarlik ko‘rishi uchun sinov platformasidir. “STesting”platformasi xalqaro tadqiqotlardan muvaffaqiyatli o'tishga yordam beradi. Topshiriqlar formati bilan tanishing, ularni bajaring, bilimlaringizni sinang va charxlang! “STesting” sizning doimiy do‘stingiz! U bilan siz yuqori natijalarga erishasiz!
              </p>
              <div class="">
                <router-link to="/about">
                  <a href="#" class="call_to-btn btn_white-border">
                    Batafsil
                  </a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end about section -->

    <!-- admission section -->
    <!-- <section class="admission_section" id="admission">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="admission_detail-box">
              <h3>Admission open</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              </p>
              <div class="">
                <a href="" class="call_to-btn btn_white-border">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="admission_img-container">
              <img src="../../public/fanadesh/images/admission.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- end admission section -->

    <!-- why section -->
    <!-- <section class="why_section" id="why">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="why_img-container">
              <img src="../../public/fanadesh/images/why.png" alt="">
            </div>
          </div>
          <div class="col-md-6">
            <div class="why_detail-box">
              <h3>Why learn on Fanadesh</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              </p>
              <div class="">
                <a href="" class="call_to-btn btn_white-border">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- end why section -->

    <!-- determine section -->
    <!-- <section class="determine_section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="determine_detail-box">
              <h3>Datermine the right for you</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              </p>
              <div class="">
                <a href="" class="call_to-btn btn_white-border">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="determine_img-container">
              <img src="../../public/fanadesh/images/determine.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- end determine section -->
  </div>
  <!-- client section -->
  <!-- <section class="client_section layout_padding">
    <h2 class="">
      Testimonial
    </h2>
    <div class="container">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row">
              <div class="col-md-3">
                <div class="client_img-box">
                  <img src="../../public/fanadesh/images/client.png" alt="">
                </div>
              </div>
              <div class="col-md-9">
                <div class="client_detail-box">
                  <h5>Alex Du</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-md-3">
                <div class="client_img-box">
                  <img src="../../public/fanadesh/images/client.png" alt="">
                </div>
              </div>
              <div class="col-md-9">
                <div class="client_detail-box">
                  <h5>Alex Du</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-md-3">
                <div class="client_img-box">
                  <img src="../../public/fanadesh/images/client.png" alt="">
                </div>
              </div>
              <div class="col-md-9">
                <div class="client_detail-box">
                  <h5>Alex Du</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->
  <!-- end client section -->
  <!-- contact section -->
  <section class="contact_section " id="contact">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="d-flex justify-content-center d-md-block">
            <h2>Bog'lanish</h2>
          </div>
          <form action="">
            <div class="contact_form-container">
              <div>
                <div>
                  <input type="text" placeholder="Ism">
                </div>
                <div>
                  <input type="email" placeholder="Pochta">
                </div>
                <div>
                  <input type="text" placeholder="Telefon raqam">
                </div>
                <div class="mt-5">
                  <input type="text" placeholder="Matn">
                </div>
                <div class="mt-5">
                  <button type="submit">
                    Yuborish
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="col-md-6">
          <div class="contact_img-box">
            <img src="../../public/fanadesh/images/students.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end contact section -->
  <!-- footer section -->
</template>
<script></script>