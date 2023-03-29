<template>
  <!-- Favicon -->
  <link href="img/favicon.ico" rel="icon">

  <!-- Google Web Fonts -->
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Handlee&family=Nunito&display=swap" rel="stylesheet">

  <!-- Font Awesome -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">

  <!-- Flaticon Font -->
  <link href="kindergarten/lib/flaticon/font/flaticon.css" rel="stylesheet">

  <!-- Libraries Stylesheet -->
  <link href="kindergarten/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
  <link href="kindergarten/lib/lightbox/css/lightbox.min.css" rel="stylesheet">

  <!-- Customized Bootstrap Stylesheet -->
  <link href="kindergarten/css/style.css" rel="stylesheet">

  <app-message></app-message>


    <!-- Navbar Start -->
    <div class="container-fluid bg-light position-relative shadow">
      <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
        <a href="#" class="navbar-brand font-weight-bold text-secondary" style="font-size: 50px;">
          <i class="flaticon-043-teddy-bear"></i>
          <span class="text-primary">Schooltesting</span>
        </a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <div class="navbar-nav font-weight-bold mx-auto py-0">
            <router-link to="/dashboard" class="nav-item nav-link">Bosh sahifa</router-link>
            <router-link to="/studentadd" class="nav-item nav-link">O'quvchi qo'shish</router-link>
          </div>
          <a href="" class="btn btn-primary px-4" @click.prevent="logout">Chiqish</a>

        </div>
      </nav>
    </div>
    <!-- Navbar End -->

<router-view></router-view>

    <!-- Footer Start -->
    <div class="container-fluid bg-secondary text-white mt-5 py-5 px-sm-3 px-md-5">
      <div class="row pt-5">
        <div class="col-lg-3 col-md-6 mb-5">
          <a href="" class="navbar-brand font-weight-bold text-primary m-0 mb-4 p-0" style="font-size: 40px; line-height: 40px;">
            <i class="flaticon-043-teddy-bear"></i>
            <span class="text-white">KidKinder</span>
          </a>
          <p>Labore dolor amet ipsum ea, erat sit ipsum duo eos. Volup amet ea dolor et magna dolor, elitr rebum duo est sed diam elitr. Stet elitr stet diam duo eos rebum ipsum diam ipsum elitr.</p>
          <div class="d-flex justify-content-start mt-4">
            <a class="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
               style="width: 38px; height: 38px;" href="#"><i class="fab fa-twitter"></i></a>
            <a class="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
               style="width: 38px; height: 38px;" href="#"><i class="fab fa-facebook-f"></i></a>
            <a class="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
               style="width: 38px; height: 38px;" href="#"><i class="fab fa-linkedin-in"></i></a>
            <a class="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
               style="width: 38px; height: 38px;" href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-5">
          <h3 class="text-primary mb-4">Get In Touch</h3>
          <div class="d-flex">
            <h4 class="fa fa-map-marker-alt text-primary"></h4>
            <div class="pl-3">
              <h5 class="text-white">Address</h5>
              <p>123 Street, New York, USA</p>
            </div>
          </div>
          <div class="d-flex">
            <h4 class="fa fa-envelope text-primary"></h4>
            <div class="pl-3">
              <h5 class="text-white">Email</h5>
              <p>info@example.com</p>
            </div>
          </div>
          <div class="d-flex">
            <h4 class="fa fa-phone-alt text-primary"></h4>
            <div class="pl-3">
              <h5 class="text-white">Phone</h5>
              <p>+012 345 67890</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-5">
          <h3 class="text-primary mb-4">Quick Links</h3>
          <div class="d-flex flex-column justify-content-start">
            <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Home</a>
            <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>About Us</a>
            <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Our Classes</a>
            <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Our Teachers</a>
            <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Our Blog</a>
            <a class="text-white" href="#"><i class="fa fa-angle-right mr-2"></i>Contact Us</a>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-5">
          <h3 class="text-primary mb-4">Newsletter</h3>
          <form action="">
            <div class="form-group">
              <input type="text" class="form-control border-0 py-4" placeholder="Your Name" required="required" />
            </div>
            <div class="form-group">
              <input type="email" class="form-control border-0 py-4" placeholder="Your Email"
                     required="required" />
            </div>
            <div>
              <button class="btn btn-primary btn-block border-0 py-3" type="submit">Submit Now</button>
            </div>
          </form>
        </div>
      </div>
      <div class="container-fluid pt-5" style="border-top: 1px solid rgba(23, 162, 184, .2);;">
        <p class="m-0 text-center text-white">
          &copy; <a class="text-primary font-weight-bold" href="#">Your Site Name</a>. All Rights Reserved. Designed
          by
          <a class="text-primary font-weight-bold" href="https://htmlcodex.com">HTML Codex</a>
        </p>
      </div>
    </div>
    <!-- Footer End -->

    
    <!-- Back to Top -->
    <a href="#" class="btn btn-primary p-3 back-to-top"><i class="fa fa-angle-double-up"></i></a>

</template>

<script>
import AppMessage from "@/components/AppMessage.vue";
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    return {
      logout: () => {
        store.commit('auth/logout')
        router.push('/')
      }
    }
  },
  components:{
    AppMessage
  }
}
</script>

<style scoped>

</style>