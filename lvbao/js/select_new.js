$(document).ready(function(){
    $("#ul_select1 li").mouseover(function(){
        $("#ul_select1 li").removeClass("select_blue");
        $(this).addClass("select_blue");
        })
    $(".div_select").click(function(){
        $("#ul_select1").show();
        })
    $("#ul_select1 li").click(function(){
        $("#ul_select1").hide();
        $("#text1").html(($(this).text()));     
        })   
    })// JavaScript Document