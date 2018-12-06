$(function(){
$(".Conf_vot").children("p").bind("click",function(){
	var num=0;
	var num=$("input[type='checkbox']:checked").length;
	if(num>5){
       $("input[type='checkbox']").attr("checked",false)
       alert("只能选择5个人");
	}else if(num<2){
       $("input[type='checkbox']").attr("checked",false)
		alert("至少选择两个")
	}else{
       $("input[type='checkbox']").attr("checked",false)
		alert("投票成功!")
	}
//	选择后的值
$('input[name="check"]:checked').each(function(){ 
var chk_value =[]; 
chk_value.push($(this).val()); 
console.log(chk_value[0])
})
})
})