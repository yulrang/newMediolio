$(function(){
	$('body').on('click',function(e){
	   if( e.target.className != 'link_user_pop' ){
		   $('.link_user_pop').attr('aria-expanded','false');
		   $('.l_user_pop').remove();
	   }
   })

})


function addClass(obj, className){
	$(obj).addClass(className);
};
function removeClass(obj, className){
	$(obj).removeClass(className);
};
function toggleClass(obj, className){
	$(obj).toggleClass(className);
};

function userPop(obj){
	var c_obj = '.' + $(obj).attr('class');
	var userPop =
		'<ul class="l_user_pop" aria-labelledby="link_user_pop">'+
			'<li class="user_pop" aria-labelledby="link_user_pop"><a href="#" class="link_user_pop">유저페이지</a></li>'+
			'<li class="user_pop" aria-labelledby="link_user_pop"><a href="#" class="link_user_pop">쪽지 보내기</a></li>'+
			'<li class="user_pop" aria-labelledby="link_user_pop"><a href="#" class="link_user_pop">유저 히스토리</a></li>'+
		'</ul>';

	$(c_obj).attr('aria-expanded','false');
	$(obj).attr('aria-expanded','true');

	$('.l_user_pop').remove();
	$(obj).parent().append(userPop);
}
