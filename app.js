//RAZIYE HANIMIN MARKETI
//Istenenler
//Raziye Hanim Online siparis verilebilecek bir program istiyor.
//Programda ilk kisimda urunler ve bilgileri tablo halinde listelenecek.
//Musteriler urunlerin yanlarinda da buy butonuyla sepete ekleme yapabilecek.
//Sepete eklenen urunler urun ve fiyat olarak gosterilecek.
//Sepetten istenen urunden istenilen miktarda girilebilecek.
//Sepetten istenilmeyen urunler cikarilabilecek
//Eklenen urunler yapilacak bir fonksiyonla toplanacak.
//Yapilmasi Gerekenler.
//1. Oncelikle html de 2 bolum duzenlenecek.
//2. ilk bolumde urunler tablo halinde gosterilecek.
//3. Urunlerin yanina button eklenecek.
//4.ikinci bolumde sepet duzenlenecek.
//5.Secilen urunlerin sadece fiyat resim ve isim bilgileri alinacak.
//6.Sepette de istenmeyen urunleri kaldir butonu eklenecek.
//7. Sepetteki urunlerin toplamini gosteren bir formul kulanilarak fonksiyon haline getirilecek.

//DOM
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#products").addEventListener("click", addButtonClickedEvent);
    document.querySelector("#basket").addEventListener("click", removeButtonClickedEvent);
    document.querySelector("#products").innerHTML = createProductCatalog(productList);
});
