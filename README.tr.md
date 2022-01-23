# Giriş
- Bu proje [TheOdinProject'in yönergeleriyle](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/tic-tac-toe) tamamlanmıştır.
- [Önizleme](https://talipakcelik.github.io/tic-tac-toe/)
- Not: Aşağıdaki başlıklar projenin içeriği hakkında spoiler içermektedir. 

## Bu projede fark ettiğim kilit noktalar
### *brain dump*, *pseudo code* ve gidişat
- *brain dump* ve *pseudo code* esnasında beni en çok zorlayan husus board mantığı oldu. İlk başta board array'inin "X" veya "O" şeklinde oyuncunun tercihlerinin kaynağı olarak görmüştüm. Yani oyuncuya her sıra geldiğinde belirli bir array içerisinden kendisine işaretçi gelecek gibi.
  - sonrasında **factory function** ile oyuncuları yaratınca, her bir oyuncuya belirli bir *mark*'ı verince bu kısmı atlamış oldum. 
    ```js
      let players = [
    playerCreator("Gandalf", "X", true),
    playerCreator("Sauron", "O", false),
    ];
    ```
   - oyuncunun tercihleri hakkında çok fazla düşünmeme gerek yokmuş, zaten en baştan verili (*given*) bir şekilde gelmiş oldu. 
 - sonraki odak noktası, ekran arayüzünün temizlenmesi ve oyunun restart'ı için `gameBoard` array'ı ve oyuncunun ekran arayüzündeki board üzerinden tercihlerini depolayan `storeBoard. 
    - oyuncu ekrana kendi marker'ı ile tıkladığında, ekrandaki hangi hücreye tıklarsa, o hücrenin sahip olduğu id numarasına göre `storeBoard` içerisinde depolanmış oluyordu. 
    - length'i 9 olan bir array ve ekranda bu arrayın indexlerine dinamik olarak karşılık gelen bir board. 
      - bu yüzden 2d array gibi bir durum da gerekmedi, 1d array tek başına yeterli oldu. 
### teorik açıdan kazanımlar
- factory functions, module pattern and IIFE
  - module pattern sayesinde, factory function gibi istediğim vasıflara sahip object'leri tekrar tekrar yaratmak yerine, bir çıktıyı işimize yarayacağı zaman çağırmış oluyor. [^1]
  - aslında, normal bir fonksiyon yazıyoruz, bunu parantez içerisine alıyoruz. ve en sondaki ``()`` parantezle beraber bu fonksiyonu aniden çağırıyoruz. böylece ayrıca yürütmemize gerek kalmıyor. 
  - factory function'ın sorunlu olabilecek kısmı örneğin içerisinde aynı fonksiyonu taşıyan binlerce örneği (*instances*) yaratmış olabiliriz. bu da bir performans sorunu.

- **closure**
  - örneğin birbiri içinde iki fonksiyon olsun (*nested*). içteki fonksiyon, *execution context* esnasında kendisinin doğmuş olduğu context'in değişkenlerine ana fonksiyon yürütmesini bitirmiş olsa dahi erişmeye devam edebiliyor.[^2]:
   - örneğin bu proje bir anlamda factory function, module pattern ve IIFE aracılığıyla yaratıldı. 
     ```js
     const Tttgame = (function () {
      let activePlayer = players[0];
         
      const displayController = function () {
        board.addEventListener("click", function (e) {
          e.target.textContent = activePlayer.mark;
        });
      };
      return { displayController };
     })();
     ``` 
     - buradaki fonksiyon bir module pattern ve IIFE içerisinde yer almış olsa dahi, istediğim şekilde çalışabilmesinin sebebi **closure**. çünkü fonksiyonda execution context içerisinden gitmiş olsa dahi, ekrana her bir tıklayışta event listener'ın *call back* fonksiyonu kendisine gereken değişkenlere erişebiliyor. ve böylece beklediğimiz gibi çalışıyor. 
      - hâlbuki, fonksiyon bir kere çalıştı ve gitti. ancak click eventi çalışmaya devam ediyor. 
- [.every()](https://devdocs.io/javascript/global_objects/array/every) methodu, kazanma durumunu sağlayan koşulları tespit etmek için çok işime yaradı. 
  - `.find()` ile birçok kod satırından kurtarmış oldu. 
### Refactoring üzerine düşünceler
- yapay zeka ile oyunu tasarlama
  - minimax algoritmasını kullanarak

[^1]: https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/factory-functions-and-the-module-pattern
[^2]: https://www.reddit.com/r/webdev/comments/2u7dsd/articulating_what_a_javascript_closure_is/
