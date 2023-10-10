
function restoreFormValues(formValues) {
  document.getElementById("konaklama").value = formValues.konaklama;
  document.getElementById("egitmenUcreti").value = formValues.egitmenUcreti;
  document.getElementById("ulasim").value = formValues.ulasim;
  document.getElementById("yemek").value = formValues.yemek;
  document.getElementById("sertifika").value = formValues.sertifika;
  document.getElementById("kargo").value = formValues.kargo;
 
}


function formuHesapla() {

  var konaklama = parseFloat(document.getElementById("konaklama").value );
  var eğitmenÜcreti = parseFloat(document.getElementById("egitmenUcreti").value);
  var ulaşım = parseFloat(document.getElementById("ulasim").value);
  var yemek = parseFloat(document.getElementById("yemek").value);
  var sertifika = parseFloat(document.getElementById("sertifika").value);
  var kargo = parseFloat(document.getElementById("kargo").value);
  var yüzüdelikGir = parseFloat(document.getElementById("yüzüdelikGir").value);




  var toplamGider = eğitmenÜcreti + ulaşım + konaklama + yemek + sertifika + kargo ;
  var likKar = toplamGider * yüzüdelikGir;
  var kurumlarVergisi = likKar * 0.25;
  var kar = likKar - toplamGider;
  var genelKar = kar - kurumlarVergisi;
  var damgaVergisi = likKar * 0.00948;
  var genelSonuc = genelKar - damgaVergisi;

  document.getElementById("toplamGider").value = toplamGider.toFixed(2);
  document.getElementById("likKar").value = likKar.toFixed(2);
  document.getElementById("kurumlarVergisi").value = kurumlarVergisi.toFixed(2);
  document.getElementById("kar").value = kar.toFixed(2);
  document.getElementById("genelKar").value = genelKar.toFixed(2);
  document.getElementById("damgaVergisi").value = damgaVergisi.toFixed(2);
  document.getElementById("genelSonuc").value =genelSonuc.toFixed(2);

  saveFormValues();
}
function formuTemizle() {
  localStorage.removeItem('formValues');
  document.getElementById("myForm").reset();
  document.getElementById("toplamGider").value = "";
  document.getElementById("likKar").value = "";
  document.getElementById("kurumlarVergisi").value = "";
  document.getElementById("kar").value = "";
  document.getElementById("genelKar").value = "";
  document.getElementById("damgaVergisi").value ="";
  document.getElementById("genelSonuc").value = "";
}
































// function formuHesapla() {
    
//     var eğitmenÜcreti = parseFloat(document.getElementById("egitmenUcreti").value);
//     var ulaşım = parseFloat(document.getElementById("ulasim").value);
//     var yemek = parseFloat(document.getElementById("yemek").value);
//     var sertifika = parseFloat(document.getElementById("sertifika").value);
//     var kargo = parseFloat(document.getElementById("kargo").value);
    

    
//     var toplamGider = eğitmenÜcreti + ulaşım + yemek + sertifika + kargo;
    

   
//     document.getElementById("toplamGider").value = toplamGider;
 
//   }

//   function formuTemizle() {
//     document.getElementById("myForm").reset();
//     document.getElementById("sonuc").textContent = ""; 
//   }
 // Sayfa yüklendiğinde önceki değerlerin kontrolü
 
//  window.onload = function() {
//   if (localStorage.getItem('formValues')) {
//     var savedFormValues = JSON.parse(localStorage.getItem('formValues'));
//     restoreFormValues(savedFormValues);
//   }
// };

// Form verilerini saklama
// function saveFormValues() {
//   var formValues = {
//     egitmenUcreti: document.getElementById("egitmenUcreti").value,
//     ulasim: document.getElementById("ulasim").value,
//     yemek: document.getElementById("yemek").value,
//     sertifika: document.getElementById("sertifika").value,
//     kargo: document.getElementById("kargo").value
//   };

//   localStorage.setItem('formValues', JSON.stringify(formValues));
// }