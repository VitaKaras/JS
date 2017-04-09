$(document).ready(function() {
    $('#navHome').click(function(){
           $('html, body').animate({scrollTop:$('#home').position().top}, 2000);
    });
    $('#navPortfolio').click(function(){
           $('html, body').animate({scrollTop:$('#portfolio').position().top}, 2000);
    });
    $('#navContact').click(function(){
           $('html, body').animate({scrollTop:$('#clients').position().top + 2350}, 2000);
    });
    $('#navAbout').click(function(){
           $('html, body').animate({scrollTop:$('#about').position().top}, 2000);
    });
    $('#navClients').click(function(){
           $('html, body').animate({scrollTop:$('#clients').position().top + 1420}, 2000);
    });
    $('#navServices').click(function(){
           $('html, body').animate({scrollTop:$('#services').position().top}, 2000);
    });
    $('.nav-arrow').click(function(){
           $('html, body').animate({scrollTop:$('#home').position().top}, 4000);
    });
    $('#contactUsBtn').click(function(){
           $('html, body').animate({scrollTop:$('#clients').position().top + 2350}, 2000);
    });
});