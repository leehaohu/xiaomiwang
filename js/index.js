$(".nav-hover").hide()
$(".content-nav a").mouseenter(function(){
	$(".nav-hover").show()
	
})
$("#leader").mouseleave(function(){
	$(".nav-hover").hide()
})
$(".tab").hide()
$("#banner a").mouseenter(function(){
	$(".tab").show()
	
})
$(".father").mouseleave(function(){
	$(".tab").hide()
})
$(".buyCar").mouseenter(function(){
	$(".con").show()
	
})
$(".buyCar").mouseleave(function(){
	$(".con").hide()
})
var swiper=new Swiper('.swiper-container',{
            loop:true,
            autoplay:3000,
            pagination:'.swiper-pagination',
            nextButton:'.swiper-button-next',
            prevButton:'.swiper-button-prev',
            autoplayDisableOnInteraction:false,
            paginationClickable:true,
            speed:1000
        })
$(".shop button").eq(0).click(function(){
	var $shopcontent=$(".shop-content")
	if($shopcontent.position().left<=0){
		$shopcontent.css({"transform":"translateX(0)"})
	}
})
var $index=0
var $shopcontent=$(".shop-content")
$(".shop button").eq(1).click(function(){
	$index+=340
	if($shopcontent.position().left<=-800){
		$shopcontent.css({"left":-600})
		console.log($shopcontent.position().left)
	}else {
		$shopcontent.css({"transform":"translateX("+ -$index +"px)","transition":"all 2s"})
		if($index>500){
			$shopcontent.css({"transform":"translateX("+ -500 +"px)","transition":"all 2s"})
		}
	}
	
})
var aa=$(".hua");
//aa.mouseover(function(){
	// $i=$(this).index()
	// alert($(".content-two .hua").length)
	aa.mouseover(function(){
		
		var i=$(this).index()
		$(".hua .slide").eq(i).css({"transform":"translateY(-120px)","transition":"all 2s"})
	})
	aa.mouseout(function(){
		var i=$(this).index()
		$(".hua .slide").eq(i).css({"transform":"translateY(0)","transition":"all 2s"})
	})
//})



