(function() {
    if (typeof Swal === 'undefined') {
        const swalScript = document.createElement('script');
        swalScript.src = chrome.runtime.getURL('lib/sweetalert2.min.js');
        document.head.appendChild(swalScript);
    }

    const script = document.createElement('script');
    script.src = chrome.runtime.getURL('menu-script.js');
    document.body.appendChild(script);

    script.onload = function () {
        script.remove();
    };
})();
