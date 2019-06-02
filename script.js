<script>
(function(window, au) {
    if (!window) return;
    if ('doNotTrack' in window.navigator && window.navigator.doNotTrack === '1') return;
    if ('visibilityState' in window.document && window.document.visibilityState === 'prerender') return;
    if (window.location.hostname === 'localhost' || window.location.protocol === 'file:') return;

    try {
        var d = {
            u: window.location.protocol + '//' + window.location.hostname + window.location.pathname,
            ua: window.navigator.userAgent,
            r: window.document.referrer,
            b: window.navigator.userAgent.search(/(bot|spider|crawl)/ig) > -1,
        };

        try {
            d.tz = Intl.DateTimeFormat().resolvedOptions().timeZone
        } catch (ignored) {
        }

        var r = new XMLHttpRequest();
        r.open('POST', au, true);
        r.setRequestHeader('Content-Type', 'text/plain; charset=UTF-8');
        r.send(JSON.stringify(d));
    } catch (e) {
    }
})(window, "URL_HERE");
</script>
