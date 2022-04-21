<script>
/**
 * Header Email Click
 */

var header_email = document.querySelector('.topbar-section > p > a');

header_email.addEventListener('click', function (e) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'header_info_email_clicked',
        'email': header_email.textContent,
        'click_location': 'header'
    });
})

/**
 * Footer Sales Email 
 */
var footer_email = document.querySelectorAll('.widget-contact-details-item');
var arr_parant = Array.from(footer_email)
var arr_child = Array.from(arr_parant[3].childNodes);
var email_node = Array.from(arr_child[1].childNodes);
var sales_email = email_node[0];

sales_email.addEventListener('click', function (e) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'footer_sales_email_clicked',
        'email': sales_email.textContent,
        'click_location': 'footer'
    });
})


/**
 *Footer Info 
 */
arr_child = Array.from(arr_parant[6].childNodes);
email_node = Array.from(arr_child[1].childNodes);
var info_email = email_node[0];

info_email.addEventListener('click', function (e) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'footer_info_email_clicked',
        'email': info_email.textContent,
        'click_location': 'footer'
    });
})

/**
 * Enquire Now
 */
var enquire_now = document.querySelector('.simple-banner-text')
enquire_now.addEventListener('click', function (e) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'enquire_now_click',
        'click_location': 'footer'
    });
})
  </script>
