/* Demo purposes only */
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
  
  
  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 
 
 function EN() {
  var element = document.body;
  element.classList.toggle("EN");
}
AOS.init({
  duration: 1200,
})
//اسکرول نرم
window.scrollTo({ top: 0, behavior: 'smooth'})
//لود شدن کد قبل اسکرول
window.onbeforeunload = function(event){}