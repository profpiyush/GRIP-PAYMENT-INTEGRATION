/* Start client-defined Callback Handler Functions */
function onOpenHandler() {
    alert('Payments Modal is Opened');
}

function onCloseHandler() {
    alert('Payments Modal is Closed');
}

function onPaymentSuccessHandler(response) {
    alert('Payment Success');
    console.log('Payment Success Response', response);
}

function onPaymentFailureHandler(response) {
    alert('Payment Failure');
    console.log('Payment Failure Response', response);
}
/* End client-defined Callback Handler Functions */

/* Configuring Handlers */
Instamojo.configure({
    handlers: {
        onOpen: onOpenHandler,
        onClose: onCloseHandler,
        onSuccess: onPaymentSuccessHandler,
        onFailure: onPaymentFailureHandler
    }
});

function onButtonClick() {
    Instamojo.open('https://test.instamojo.com/@profpiyush1905');
}

//change the focused thumbnail img
{
    const galleryImageArray = [...document.querySelector(".gallery").children];
    const galleryThumbnail = document.querySelector(".gallery-wrapper .banner img");

    function galleryImageFocus(ind) {
        galleryThumbnail.src = galleryImageArray[ind].src;
    }

    const leftArrow = document.querySelector(".left-arrow")
    const rightArrow = document.querySelector(".right-arrow")
    const gallery = document.querySelector(".gallery");

    leftArrow.addEventListener('click', () => {
        gallery.scrollLeft -= 150;

    })
    rightArrow.addEventListener('click', () => {
        gallery.scrollLeft += 150;

    })
}