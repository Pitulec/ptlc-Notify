//Pitulec

window.addEventListener('message', (event) => {
    if (event.data.action === 'Notify') {
        createNotify(event.data.desc);
    }
});

function createNotify(message) {
    const notifyHtml = `
        <div class="notify">
            <div>
                <div class="header">Powiadomienie</div>
                <div class="desc">${message}</div>
            </div>
            <div class="icon"><i class="fad fa-bells"></i></div>
        </div>
    `;
    

    let $notify = $(notifyHtml);
    $('.notify-container').append($notify);


    $notify.animate({ right: '0vw' }, 300);
    setTimeout(function() {
        $notify.animate({ right: '-20vw' }, 300);
        setTimeout(function() {
            $notify.remove();
        }, 500);
    }, 5000);
}