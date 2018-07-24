    window.onload=function(){

    	//侧导航
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

    	//轮播图
    	let tu_banner=document.getElementsByClassName('tu_banner')[0];
    	let lis=tu_banner.getElementsByTagName('li');
    	let img=tu_banner.getElementsByTagName('img');
    	let leftGo=document.getElementsByClassName('banner-left')[0];
    	let rightGo=document.getElementsByClassName('banner-right')[0];
        let lidian=tu_banner.getElementsByClassName('banner-nav-ls');

    	let num=0;
    	let t=setInterval(move,2000);
    	function move(){
    		num++;
    		if(num==lis.length){
    			num=0;
    		}
    		for(let i=0;i<lis.length;i++){
    			img[i].style.zIndex=5;
                lidian[i].style.background='rgba(255, 255, 255, 0.7)';
    		}
    		img[num].style.zIndex=10;
            lidian[num].style.background='#f90';
    	}

    	tu_banner.onmouseenter=function(){
    		clearInterval(t);
    	}
    	tu_banner.onmouseleave=function(){
    		t=setInterval(move,2000);
    	}

    	function move1(){
    		num--;
    		if(num<0){
    			num=lis.length-1;
    		}
    		for(let i=0;i<lis.length;i++){
    			img[i].style.zIndex=5;
                lidian[i].style.background='rgba(255, 255, 255, 0.7)';
    		}
    		img[num].style.zIndex=10;
            lidian[num].style.background='#f90';
    	}

    	leftGo.onclick=function(){
    		move1();
    	}
    	rightGo.onclick=function(){
    		move();
    	}
    }