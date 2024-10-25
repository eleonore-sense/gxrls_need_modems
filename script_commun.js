    document.include = function (url) {
     if ('undefined' == typeof(url)) return false;
     var p,rnd;
     if (document.all){
       p = new ActiveXObject("Microsoft.XMLHTTP");
     }
     else {
       p = new XMLHttpRequest();
     }

     rnd = Math.random().toString().substring(2);
     url = url.indexOf('?')>-1 ? url+'&rnd='+rnd : url+'?rnd='+rnd;
     p.open("GET",url,false);
     p.send(null);
     document.write( p.responseText );
    }