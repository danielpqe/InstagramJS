var page=require('page');
var yo=require('yo-yo');
var main=document.getElementById('main-container');

page('/',function (ctx,next) {
    main.innerHTML='HOME <a href="/signup">Signup</a>';
})

page('/signup',function (ctx,next) {
    var main=document.getElementById('main-container');
    var el = 'yo'
})
page.start()