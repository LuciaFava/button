function showMore(id){
    document.getElementById(id+'Overflow').className='';
    document.getElementById(id+'MoreLink').className='hidden';
    document.getElementById(id+'LessLink').className='';
}

function showLess(id){
    document.getElementById(id+'Overflow').className='hidden';
    document.getElementById(id+'MoreLink').className='';
    document.getElementById(id+'LessLink').className='hidden';
}

var len = 100;
var shrinkables = document.getElementsByClassName('shrinkable');
if (shrinkables.length > 0) {
    for (var i = 0; i < shrinkables.length; i++){
        var fullText = shrinkables[i].innerHTML;
        if(fullText.length > len){
            var trunc = fullText.substring(0, len).replace(/\w+$/, '');
            var remainder = "";
            var id = shrinkables[i].id;
            remainder = fullText.substring(len, fullText.length);
            shrinkables[i].innerHTML = '<span>' + trunc + '<span class="hidden" id="' + id + 'Overflow">'+ remainder +'</span></span>&nbsp;<br><br><div class="button23"><a id="' + id + 'MoreLink" href="#!" onclick="showMore(\''+ id + '\');"> <img src="img/down.svg" width="35"></a><a class="hidden" href="#!" id="' + id + 'LessLink" onclick="showLess(\''+ id + '\');"> <img src="img/up.svg" width="35"></a></div>';
        }
    }
}