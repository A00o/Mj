function getParameter(p)
{
    var url = window.location.search.substring(1);
    var varUrl = url.split('&').replace(/%3D/g,"=");
    for (var i = 0; i < varUrl.length; i++)
    {
        var parameter = varUrl[i].split('=');
        if (parameter[0] == p)
        {
            return parameter[1];
        }
    }
}

let searchParams = new URLSearchParams(window.location.search)
searchParams.has('id') 
let id = searchParams.get('id')


var myVariable = '<div id=\"root\" onclick=\"slug(\'\'+id+\'\')\"><\/div>\n\n';
