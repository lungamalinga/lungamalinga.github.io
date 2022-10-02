//desktop send email
let send_message_btn = document.getElementById('send-message-btn');
let sender_name = document.getElementById('sender-name');
let sender_email = document.getElementById('sender-email');
let sender_message = document.getElementById('sender-message');
let sendingAnimation = document.getElementById('loading');
let sentCheck = document.getElementById('email-sent');

send_message_btn.addEventListener('click', sendEmail);

function sendEmail() {
     var tempParams = {
          from_name: sender_name.value + ' (' + sender_email.value + ')',
          to_name: "Lunga Malinga",
          message: sender_message.value
     };
     sender_name.value == '';
     sender_email.value == '';
     sender_message.value == '';
     sendingAnimation.style.display = 'block';
     emailjs.send('service_hvcgqu8', 'template_8wczulj', tempParams, 'yruLUUtLyxsSH3ffa').then(function (response) {
          console.log('Success', response.status, response.text);
          sentCheck.style.display = 'block';
          sendingAnimation.style.display = 'none';
          //clearing the text fields
          sender_name.value = '';
          sender_email.value = '';
          sender_message.value = '';
     },
          function (error) {
               console.log('Failed -> ', error)
               alert('Message failed to send. Error : ' + error)
          }
     );
}

//*****************MOBILE SEND MESSAGE (EMAIL)********************
let mBtn =  document.getElementById('mobile-send-message-btn');
let mName = document.getElementById('m-name');
let mEmail= document.getElementById('m-email');
let mMessage = document.getElementById('m-message');
let sendingAnimationMobile = document.getElementById('loading-mobile');
let sentCheckMobile = document.getElementById('email-sent-mobile');

mBtn.addEventListener('click', sendEmailMobile)

function sendEmailMobile() {
     var tempParams = {
          from_name: mName.value + ' (' + mEmail.value + ')',
          to_name: "Lunga Malinga",
          message: mMessage.value
     };
     mName.value == '';
     mEmail.value == '';
     mMessage.value == '';
     sendingAnimationMobile.style.display = 'block';
     emailjs.send('service_hvcgqu8', 'template_8wczulj', tempParams, 'yruLUUtLyxsSH3ffa').then(function (response) {
          console.log('Success', response.status, response.text);
          sentCheckMobile.style.display = 'block';
          sendingAnimationMobile.style.display = 'none';
          //clearing the text fields
          mName.value = '';
          mEmail.value = '';
          mMessage.value = '';
     },
          function (error) {
               console.log('Failed -> ', error)
               alert('Message failed to send. Error : ' + error)
          }
     );
}

/**************Back to top button (back to id =-> mobile-nav************/
var btt = document.getElementById("back-to-top");
var body = document.body;
var docElem = document.documentElement;
var offset = 100;
var scrollPos;
var docHeight;

//Calculate the height
docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight); //will return the maximum height of the page / document
if (docHeight != 'undesined') {
     offset = docHeight / 3;
}

//add scroll event listener
window.addEventListener("scroll", function (event) {
     scrollPos = body.scrollTop || docElem.scrollTop;
     btt.className = (scrollPos > offset) ? "visible" : "";
});

/***************btt END****************/

/* CV DOWNLOAD / OPEN  */
let cv_download = document.getElementById('cv-download');
let m_cv_download = document.getElementById('m-cv-download');
let hireMeBtn = document.getElementById(`hire-me-btn`);

hireMeBtn.addEventListener('click', downloadCV);
cv_download.addEventListener('click', downloadCV);

m_cv_download.addEventListener('click', downloadCV);

function downloadCV() {
     window.open('documents/Lunga_Malinga_CV.pdf', '_blank', 'fullscreen=yes')
}

/*Drop down (mobile)*/
let mobileNav = document.getElementById('mobile-nav');
let navBox = document.getElementById('nav-box');
let topLine = document.getElementById('top-line');
let bottomLine = document.getElementById('bottom-line');
var isOpen = false;

//get hover content
let hoverContent = document.getElementById('hover-content');

navBox.addEventListener('click', function (event) {
     if (isOpen == false) {
          topLine.style.rotate = '45deg';
          topLine.style.marginTop = '23px';
          bottomLine.style.rotate = '135deg';
          bottomLine.style.marginTop = '-9px';
          isOpen = true
          showOrHideHoverContent(isOpen);
          mobileNav.style.backgroundColor = '#C9EBFE';
          topLine.style.backgroundColor = '#101D36';
          bottomLine.style.backgroundColor = '#101D36';
     }
     else if (isOpen == true) {
          topLine.style.rotate = '0deg';
          topLine.style.marginTop = '19px';
          bottomLine.style.rotate = '0deg';
          bottomLine.style.margin = '5px'
          isOpen = false
          showOrHideHoverContent(isOpen)
          mobileNav.style.backgroundColor = '#101D36';
          topLine.style.backgroundColor = '#C9EBFE';
          bottomLine.style.backgroundColor = '#C9EBFE';
     }
});

/*hover content funstion*/
function showOrHideHoverContent(isOpen) {
     if(isOpen == true){
          hoverContent.style.minHeight = '100%';
          hoverContent.style.visibility = 'visible';
     }
     else if(isOpen == false){
          hoverContent.style.minHeight = '0%';
          hoverContent.style.visibility = 'hidden';
     }
}

//close hover content from one of the hover items

let toSkills = document.getElementById('to-skills');
let toContact = document.getElementById('to-contact');
let toProjects = document.getElementById('to-projects');
let toAboutMe = document.getElementById('to-about-me');

toSkills.addEventListener('click', closeHover);
toContact.addEventListener('click', closeHover);
toProjects.addEventListener('click', closeHover);
toAboutMe.addEventListener('click', closeHover);

function closeHover(){
     if (isOpen == true) {
          topLine.style.rotate = '0deg';
          topLine.style.marginTop = '19px';
          bottomLine.style.rotate = '0deg';
          bottomLine.style.margin = '5px'
          isOpen = false
          showOrHideHoverContent(isOpen)
          mobileNav.style.backgroundColor = '#101D36';
          topLine.style.backgroundColor = '#C9EBFE';
          bottomLine.style.backgroundColor = '#C9EBFE';
     }
}