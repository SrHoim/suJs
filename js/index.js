/*window.addEventListener('load', function(){
		var swiper = new Swiper('.swiper-container', {
		      centeredSlides: true,
		      loop: true,
		      hashNavigation: {
		      watchState: true,
		      },
		      autoplay: {
		        delay: 2500,
		        disableOnInteraction: false,
		      },
		      pagination: {
		        el: '.swiper-pagination',
		        clickable: true,
		      },
		      navigation: {
		        nextEl: '.swiper-button-next',
		        prevEl: '.swiper-button-prev',
		      },
	    });
    })*/

    window.onload=function(){
    	let li=document.getElementsByClassName('li');
    	console.log(li);
    	let liBox=document.getElementsByClassName('liBox');
    	console.log(liBox);
    	for(let i=0;i<li.length;i++){
    		li[i].onmouseenter=function(){
    			liBox[i].style.display='block';
    			li[i].className='li hot';
    		}
    		li[i].onmouseleave=function(){
    			liBox[i].style.display='none';
    			li[i].className='li';
    		}
    	}
    }