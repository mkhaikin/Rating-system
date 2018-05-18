$(".rating-circle").hover(function(){
	$(this).removeClass("rating-chosen") + $(this).prevAll().removeClass("rating-chosen");
		$(this).addClass("rating-hover") + $(this).prevAll().addClass("rating-hover");
		$(".rating-circle").on("click",function(){//click event starts here
			$("div[value='rated']").removeAttr("value") + $("div[value='rated']").removeClass("rating-chosen");
      $(this).prevAll().removeClass("rating-chosen") + $(this).nextAll().removeClass("rating-chosen");
			$(this).addClass("rating-chosen") + $(this).prevAll().css("rating-chosen");
			$(this).attr("value", "rated")+$(this).prevAll().attr("value", "rated");
	});
		}, function(){
			$(".rating-circle").removeClass("rating-hover");
		if($(".rating-circle").attr("value")){
			$("div[value='rated']").addClass("rating-chosen");
    }
});
