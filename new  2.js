function getsayhi()
{
if ( request.getMethod() == 'GET' )
   {
    var o = new Object();
    o.getsayhi = 'Hello World! ';
    return o;
    }
}