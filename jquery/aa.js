//jquery easy than js code 

$('h1').hide() //jquery ko use instead of document.querySelector('h1').style.display = 'none'

$('.a').click(()=>{ 

$('h3').hide(3000)
})  

$('.b').click(() => { 

$('h3').show()
})  

$('.c').click(() => { 

$('h3').toggle()
})  



$('.d').click(() => { 

$('h3').slideUp()
})  

$('.e').click(() => { 

$('h3').slideDown()
})  

$('.f').click(() => { 

$('h3').slideToggle()
})  



$('.g').click(() => { 

$('h3').fadeOut()
})  

$('.h').click(() => { 

$('h3').fadeIn()
})  

$('.i').click(() => { 

$('h3').fadeToggle()
})  

$('.j').click(() => { 

$('h3').fadeTo(4000, '0.5')
})  


$('.k').click(() => {
$('h3').remove()
}) 

$('.l').click(() => {
$('h3').empty()
}) 

$('.m').click(() => {
$('h3').css({'color': 'white', 'background': 'purple'})
}) 

$('.n').click(() => {
    $('h3').animate({marginLeft: '500px'}, 7000 )
})

$('.o').click(() => {
$('h3').stop()
}) 

$('.p').click(() => {
$('h3').prepend('<input>')
}) 

$('.q').click(() => {
$('h3').append('<input>')
}) 

$('.r').click(() => {
$('h3').after('<input>')
}) 

$('.s').click(() => {
$('h3').before('<input>')
}) 

$('.t').click(() => {
$('h3').addClass('mm')
}) 

$('.u').click(() => {
$('h3').removeClass('mm')
}) 

$('.v').click(() => {
$('h3').toggleClass('mm')
}) 

$('.w').dblclick(() => {
  alert('you double clicked') //double click garda alert msg
})   

$('.x').mouseover(() => {
  alert('hello mouse over') //mouse button ma hover garda alert
})   

$('.y').mouseleave(() => {
  alert('hello mouse leave') //mouse button ma hover garera leave garda alert
})   

$('.z').click(() => {
  $('h3').slideUp().slideDown() //mouse le click garda jane ni aaune ni
})   