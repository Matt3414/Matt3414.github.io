//import jquery
var script = document.createElement('script');
script.src = "https://code.jquery.com/jquery-3.7.1.min.js"; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

var activeSkin = 0;
var buttonimgs = ["src/light.png", "src/light.png"]
function theme(){
    var skins = $('.style-skin');
    if (activeSkin > (skins.length - 1)) activeSkin=0;
    skins.each(function(index){
        if (index === activeSkin){
            $(this).prop('title', 'main');
            $(this).prop('disabled', false);
            $('#themebtn').attr('src', "src/dark.png")

        }else{
            $(this).prop('title', '');
            $(this).prop('disabled', true);
            $('#themebtn').attr('src', "src/light.png")

        }
    });
    activeSkin++
}

function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
}
