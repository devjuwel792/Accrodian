const faqs = document.getElementsByClassName('faq');

console.log(faqs);

// for (let i = 0; i < faqs.length; i++) {
//     accordion[i].addEventListener('click', function () {
//         this.classList.toggle('active');
//         let panel = this.nextElementSibling;
//         if (panel.style.maxHeight) {
//             panel.style.maxHeight = null;
//         } else {
//             panel.style.maxHeight = (panel.scrollHeight+10) +  "px"

//         }
//     });
// }

for (i = 0; i < faqs.length; i++) {

    faqs[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })

}