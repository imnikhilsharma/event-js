// submit button.
let submitButton = document.getElementsByClassName('action submit primary')[0];

// added click event listner to the button.
submitButton.addEventListener("click", trackEvents);

function trackEvents() {
    let orderId = document.getElementById('oar-order-id').value;
    let billingLastName = document.getElementById('oar-billing-lastname').value;
   
    let findOrderByType;
    let findOrderByValue;
    let emailZipEmementId;

    // fetching selected Find Order By
    let selectedFindOrderBy = document.getElementById('quick-search-type-id').value;
   
    if(selectedFindOrderBy === 'email'){
        findOrderByType = 'email';
        emailZipElementId = 'oar_email';
    }else{
        findOrderByType = 'zip';
        emailZipElementId = 'oar_zip';
    }

    // fetching email/zip value as per above selection.
    let emailZipValue = document.getElementById(emailZipEmementId).value;

   
    // event fire.
    window.dataLayer.push({
        "event": "ContinueClicked",
        "eventLabel": "OrderAndReturns",
        "orderId": orderId,
        "billingLastName" : billingLastName,
        "findOrderByType" : findOrderByType,
        "emailZipValue" : emailZipValue,
        "eventAction": "Continue"
    })
   
   


   
}
