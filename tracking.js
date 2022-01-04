<script>
      var slug = window.location.pathname;
    var urlPart = slug.split('/');
    /**
     * Yes or No Event 
     * Step 1
     */
    var buttons = document.querySelectorAll('.twoColumnButton');
    var btnArray = Array.from(buttons);
    btnArray[0].addEventListener('click', function (e) {
        window.dataLayer.push({
            "event": "YesClicked",
            "eventLabel": "step-1",
            "eventCategory": urlPart[2],
            "eventAction": "YesClicked"
        })
    });
    btnArray[1].addEventListener('click', function (e) {
        window.dataLayer.push({
            "event": "NoClicked",
            "eventLabel": "step-1",
            "eventCategory": urlPart[2],
            "eventAction": "NoClicked"
        })
    });
  
  </script>
