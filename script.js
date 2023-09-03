const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar')


if (bar) {
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}


        // scroll button

    let calcScrollValue = () => {
        let scrollProgress = document.getElementById("progress");
        let progressValue = document.getElementById("progress-value");
        let pos = document.documentElement.scrollTop;
        let calcHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        let scrollValue = Math.round((pos * 100) / calcHeight);
        if (pos > 100) {
          scrollProgress.style.display = "grid";
        } else {
          scrollProgress.style.display = "none";
        }
        scrollProgress.addEventListener("click", () => {
          document.documentElement.scrollTop = 0;
        });
        scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
      };
      
      window.onscroll = calcScrollValue;
      window.onload = calcScrollValue;



      // single product img

      var MainImg = document.getElementById("MainImg");
      var smallimg = document.getElementsByClassName("small-img");
      
      smallimg[0].onclick = function(){
        MainImg.src = smallimg[0].src;
      }
      smallimg[1].onclick = function(){
        MainImg.src = smallimg[1].src;
      }
      smallimg[2].onclick = function(){
        MainImg.src = smallimg[2].src;
      }
      smallimg[3].onclick = function(){
        MainImg.src = smallimg[3].src;
      }