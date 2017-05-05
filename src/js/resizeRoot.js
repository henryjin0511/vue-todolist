(function resizeRoot(){
	let device_width = 750,order = 0,uAgent = window.navigator.userAgent,isIOS = uAgent.match(/iphone/i),wWidth,wHeight,dpr = window.devicePixelRatio,wFsize;
	(function get_width(){
		if(window.innerWidth === 320 && window.innerHeight === 240 && order <20){
			order++;
			setTimeout(function(){
				get_width();
			},0);
		}else{
			wWidth = (screen.width > 0) ? (window.innerWidth >= screen.width || window.innerWidth === 0) ? screen.width : window.innerWidth : window.innerWidth;
			wHeight = (screen.height > 0) ? (window.innerHeight >= screen.height || window.innerHeight === 0) ? screen.height : window.innerHeight : window.innerHeight;
			if(isIOS) {
				wWidth = screen.width;
				wHeight = screen.height;
			}
			if(wWidth > wHeight){
				wWidth = wHeight;
			}
			wFsize = wWidth > 1080 ? 144 : ((wWidth * 100) / device_width);
			wFsize = wFsize > 32 ? wFsize : 32;
			//document.getElementsByTagName('html')[0].dataset.dpr = wDpr;
			document.getElementsByTagName('html')[0].style.fontSize = wFsize + 'px';
			//alert("fz="+wFsize+";dpr="+window.devicePixelRatio+";UA="+uAgent+";width="+wWidth+";sw="+screen.width+";wiw="+window.innerWidth+";wsw="+window.screen.width+window.screen.availWidth);
		}
	})();
})();