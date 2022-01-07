<script>
      var slug = window.location.pathname;
    var urlPart = slug.split('/');
    /**
     * Yes or No Event 
     * Step 1
     */
    
    function addEventListnerOnMyElement(){
      var nextButton = document.getElementsByClassName('largeGreenButtonActive')[0].addEventListener('click', publishData);
    }
    
    function publishData(){
    var selectedCategory = '';
    
      for(var i = 0; i < document.getElementsByClassName('p-2').length; i++){

        var elementName = document.getElementsByClassName('p-2')[i].childNodes[0];
        if(elementName.childNodes[0].tagName == 'svg'){
          console.log(elementName.childNodes[1].innerText);
          selectedCategory += ' ,'+elementName.childNodes[1].innerText;
        }

      }
      
      if(selectedCategory != ''){
        window.dataLayer.push({
            "event": "NextClicked",
            "eventLabel": "step-2",
            "eventCategory": selectedCategory,
            "eventAction": "NextClicked"
        })
      }
    
    }
     
    var buttons = document.querySelectorAll('.twoColumnButton');
    var btnArray = Array.from(buttons);
    btnArray[0].addEventListener('click', function (e) {
         
       window.dataLayer.push({
            "event": "YesClicked",
            "eventLabel": "step-1",
            "eventCategory": urlPart[2],
            "eventAction": "YesClicked"
        })
        
      var myTimeout = setTimeout(addEventListnerOnMyElement, 3000);
      
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
