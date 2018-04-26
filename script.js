var bioDisplayed = false;

$(".cat-nav-item").hover((function(){
    $(this).css("color","orange
    ")
}),function(){
    $(this).css("color","white")
});

$(".project").hover((function(){
    $(this).css("text-decoration","none").css("color","white")
    console.log("test")
}),function(){
    $(this).css("text-decoration","underline").css("color","black")
});