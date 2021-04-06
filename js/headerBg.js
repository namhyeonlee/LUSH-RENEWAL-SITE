
window.onload = function(){
//header
//header height를 구한 뒤 height 만큼 스크롤링을 하면 .navBg가 없어지도록

const navBg = document.querySelector('.navBg');
const navBgHeight = navBg.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{

    if(window.scrollY>navBgHeight){
        navBg.classList.add('navBg--none');
    }else {
        navBg.classList.remove('navBg--none');
    }

}); 




}
