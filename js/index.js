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
    	/*let tu_banner=document.getElementsByClassName('tu_banner')[0];
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

        for(let j=0;j<lidian.length;j++){
            lidian[j].onclick=function(){
                for(let k=0;k<lidian.length;k++){
                    lidian[k].style.background='rgba(255, 255, 255, 0.7)';
                    img[k].style.zIndex=5;
                }
                lidian[j].style.background='#f90';
                img[j].style.zIndex=10;
                num=j;
            }
        }*/


        let tu_banner=document.querySelector('.tu_banner');
        let imgs=document.querySelectorAll('ul img');
        let widths=parseInt(getComputedStyle(tu_banner,null).width);
        let left=document.querySelector('.tu_banner .banner-left');
        let right=document.querySelector('.tu_banner .banner-right');
        let brns=document.querySelectorAll('.banner-nav-ls');
        console.log(tu_banner,imgs,widths,brns,left,right);

        let t=setInterval(move,3000);
        let now=0;
        let next=0;
        let flg=true;
        function move(){
            next++;
            if(next==imgs.length){
                next=0;                
            }
            imgs[next].style.left=widths+'px';
            brns[now].classList.remove('lshot');
            brns[next].classList.add('lshot');
            animate(imgs[now],{left:-widths});
            animate(imgs[next],{left:0},function(){
                flg=true;
            })
            now=next;
        }

        function move1(){
            next--;
            if(next<0){
                next=imgs.length-1;                
            }
            imgs[next].style.left=-widths+'px';
            brns[now].classList.remove('lshot');
            brns[next].classList.add('lshot');
            animate(imgs[now],{left:widths});
            animate(imgs[next],{left:0},function(){
                flg=true;
            })
            now=next;
        }

        tu_banner.onmouseenter=function(){
            clearInterval(t);
        }
        tu_banner.onmouseleave=function(){
            t=setInterval(move,3000);
        }
        right.onclick=function(){
            if(flg==false){
                return;
            }
            if(next==imgs.length-1){
                return;
            }
            flg=false;
            move();
        }
        left.onclick=function(){
            if(flg==false){
                return;
            }
            if(next==0){
                return;
            }
            flg=false;
            move1();
        }

        brns.forEach(function(elements,index){
            elements.onclick=function(){
                if(index==now){
                return;
                }
                if(now<index){
                    imgs[index].style.left=widths+'px';
                    animate(imgs[now],{left:-widths});
                    animate(imgs[index],{left:0});
                    brns[now].classList.remove('lshot')
                    brns[index].classList.add('lshot');
                    now=next=index;
                }
                if(now>index){
                    imgs[index].style.left=-widths+'px';
                    animate(imgs[now],{left:widths});
                    animate(imgs[index],{left:0});
                    brns[now].classList.remove('lshot')
                    brns[index].classList.add('lshot');
                    now=next=index;
                }

        }
            
        })
    }