$(".rating-circle").hover(function(){
	$(this).removeClass("rating-chosen") + $(this).prevAll().removeClass("rating-chosen");
		$(this).addClass("rating-hover") + $(this).prevAll().addClass("rating-hover");
		$(".rating-circle").on("click",function(){//click event starts here
			$("div[value='true']").removeAttr("value") + $("div[value='true']").removeClass("rating-chosen") + $(this).prevAll().removeClass("rating-chosen") + $(this).nextAll().removeClass("rating-chosen");
			$(this).addClass("rating-chosen") + $(this).prevAll().css("rating-chosen");
			$(this).attr("value", "true")+$(this).prevAll().attr("value", "true");
	});
		}, function(){
			$(".rating-circle").removeClass("rating-hover");
		if($(".rating-circle").attr("value")){
			$("div[value='true']").addClass("rating-chosen");}
});
