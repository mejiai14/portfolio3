/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function() {
    $(".yeah").css("background-color", "yellow");
    
    $('div:last p:nth-child(3)').css('background-color', 'pink');
    
    $('p:last').css('color', 'red');
    
    $('p:gt(1)').css('border-style', 'solid');
    
    $('p:first').css('background-color', 'blue');
    
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
  
    $('h1').bind('click', mouseClick);
    
    $('#replaceWText').bind('click', replaceWText);
    
    $('#randPara').bind('click', addAPara);
    
    $('#removePara').bind('click', removeAPara);
    
    $('#show').css('visibility', 'hidden');
    
    $('#hide').bind('click', hideTheImage);
    
    $('#show').bind('click', showTheImage);
    
    $('#superHumans').accordion({header: "h2"});
});
function removeAPara() { 
    $('#randPara p:last').remove();
}

function addAPara() {
    $('#randPara').append('<p>Down</p>');
}

function replaceWText() {
    $('#replaceWText').text('Promise');
}
   

function mouseOverMe(){
    $("h1").html("OREOS");
}

function mouseOutMe(){
    $('h1').html('Chips Ahoy');
}

function mouseClick() {    
    $('p').html('Papaya');
}

function hideTheImage() {
    $('#show').css('visibility', 'visible');
    $('div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}

function showTheImage () {
    $('div').show('fold', {}, 2500);
    $('#show').hide('puff', {}, 2500);
}