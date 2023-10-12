function changeActiveTab(tabToDisable, tabToActivate, blockToDisable, blockToActivate){
    $(tabToDisable).removeClass("active");
    $(tabToActivate).addClass("active");
    $(blockToDisable).css("display", "none");
    $(blockToActivate).css("display", "block");
}

$(".review_tab").on("click",function(){
    changeActiveTab(".resrv_tab",".review_tab",".resrv_box",".review_box");
});

$(".resrv_tab").on("click",function(){
    changeActiveTab(".review_tab",".resrv_tab",".review_box",".resrv_box");
});