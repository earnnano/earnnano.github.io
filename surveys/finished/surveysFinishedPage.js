var finishedParagraph = document.getElementById('finishedP');

finishedParagraph.innerHTML = 'You finished a survey and earned ' + getUrlParameter('amount') + ' mNano!';


function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};