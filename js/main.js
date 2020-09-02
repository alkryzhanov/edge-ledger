let map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: -34.397,
      lng: 150.644
    },
    zoom: 8
  });
}

// Smooth scrolling
$('#navbar a, .btn').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();
    const {
      hash
    } = this;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 100
    },
    800);
  }
});

// Sticky menu bg

window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});
