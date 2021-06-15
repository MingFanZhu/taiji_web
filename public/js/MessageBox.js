function MessageBox(innerHTML){
    this.innerHTML=innerHTML;
    this.element=function(){
        var div=document.createElement('div');
        div.id='MessageBox';
        div.innerHTML=
        '<div class="MBcontainer">\
        <button>关闭</button>\
        <p></p>\
        </div>';
        div.querySelector('p').innerHTML=this.innerHTML;
        div.querySelector('button').onclick=this.remove;
        return div;
    }

    this.remove=function(){
        document.querySelector('body').removeChild(document.getElementById('MessageBox'));
    }
}