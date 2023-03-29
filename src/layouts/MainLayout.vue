<template>
  <link rel="stylesheet" type="text/css" href="fanadesh/css/bootstrap.css" />
  <!-- progress barstle -->
  <!-- <link rel="stylesheet" href="fanadesh/css/css-circular-prog-bar.css"> -->
  <!-- fonts style -->
  <link href="https://fonts.googleapis.com/css?family=Poppins:400,700|Raleway:400,600&display=swap" rel="stylesheet">
  <!-- font wesome stylesheet -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  <!-- Custom styles for this template -->
  <link href="fanadesh/css/style.css" rel="stylesheet" />
  <!-- responsive style -->
  <link href="fanadesh/css/responsive.css" rel="stylesheet" />
  <!-- <link rel="stylesheet" href="fanadesh/css/css-circular-prog-bar.css"> -->


  <router-view></router-view>

  <section class="info_section layout_padding-top">
    <div class="info_logo-box">
      <h2>Schooltesting</h2>
    </div>
    <div class="container layout_padding2">
      <div class="row">
        <div class="col-md-8">
          <h5>Biz haqimizda</h5>
          <p>
            Schooltesting – bu o‘quvchilarni xalqaro PISA, TIMSS, PIRLS tadqiqotlariga tayyorgarlik ko‘rishi uchun sinov platformasidir.
          </p>
        </div>
        <div class="col-md-4">
          <h5>Foydali linklar</h5>
          <ul>
            <li>
              <router-link to="/">Bosh sahifa</router-link>
            </li>
            <li>
              <router-link to="/about">Biz haqimizda</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <div class="container"> -->
      <!-- <div class="social_container">
        <div class="social-box">
          <a href="">
            <img src="../../public/fanadesh/images/fb.png" alt="">
          </a>
          <a href="">
            <img src="../../public/fanadesh/images/twitter.png" alt="">
          </a>
          <a href="">
            <img src="../../public/fanadesh/images/linkedin.png" alt="">
          </a>
          <a href="">
            <img src="../../public/fanadesh/images/instagram.png" alt="">
          </a>
        </div>
      </div> -->
    <!-- </div> -->
  </section>
  <!-- footer section -->
  <section class="container-fluid footer_section">
    <p>
      Mualliflik huquqi &copy; 2023 Barcha huquqlar himoyalangan
      <!-- <a href="https://html.design/">Free Html Templates</a> -->
    </p>
  </section>

</template>

<script>
export default {

}
</script>