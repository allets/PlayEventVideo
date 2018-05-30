/**
Operation steps:
1. Open your browser and then go to the developer console.
2. After you submit the following code to the developer console, it will open a new window.
3. Copy the content, which is JSON, in that window to overwrite the content in the file at "/server/api/events".
*/

function genDataForApiEvents() {
    var vVideo = [
        {
            "title": "Steve Jobs previews OS X Lion & MacBook Air - Apple Special Event (2010)",
            "src": "http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8"
        },
        {
            "title": "iPhone Sample Bip Bop All",
            "src": "http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8"
        },
        {
            "title": "Tears of Steel - Blender VFX Open Movie (2012-09-26)",
            "src": "http://content.jwplatform.com/manifests/vM7nH0Kl.m3u8"
        },
        {
            "title": "HLS Sample Test 1",
            "src": "http://cdn-fms.rbs.com.br/hls-vod/sample1_1500kbps.f4v.m3u8"
        },
        {
            "title": "HLS Sample Test 2",
            "src": "http://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8"
        },
        {
            "title": "HLS Sample Test 3",
            "src": "http://playertest.longtailvideo.com/adaptive/oceans_aes/oceans_aes.m3u8"
        },
        {
            "title": "Big Buck Bunny (short) - Blender Open Movie (2008-04-10)",
            "src": "http://www.nacentapps.com/m3u8/index.m3u8"
        },
        {
            "title": "Apple HLS Sample Test 4",
            "src": "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8"
        },
        {
            "title": "HLS Sample Test 5",
            "src": "https://content.jwplatform.com/manifests/yp34SRmf.m3u8"
        },
        {
            "title": "Big Buck Bunny - Blender Open Movie (2008-04-10)",
            "src": "https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8"
        }
    ];

    // config
    var EVENT_AMOUNT = 30;
    var THE_LATEST_EVENT_DATE = new Date();
    var PERIOD_S = 25*60; // 25 minutes
    var RANDOM_PERIOD_S = 10*60; // 10 minutes

    // ======
    var VIDEO_AMOUNT = vVideo.length;
    var i = 0;
    var video = null;
    var happenedDate_s = (THE_LATEST_EVENT_DATE.getTime() - THE_LATEST_EVENT_DATE.getMilliseconds())/1000;
    var random_s = 0;
    var vEvent = [];
    for (i=0; i<EVENT_AMOUNT; i++) {
        video = vVideo[(i % VIDEO_AMOUNT)];
        vEvent.push({
            "event_id": (i+1),
            "ts": happenedDate_s,
            "title": video.title,
            "video": video.src
        });

        // a random number between 1 and $RANDOM_PERIOD_S
        random_s = Math.floor((Math.random() * RANDOM_PERIOD_S) + 1);
        happenedDate_s -= (PERIOD_S + random_s);
    }

    return JSON.stringify(vEvent, null, "\t");
}

var events = genDataForApiEvents();

var newWindow = window.open("", "_blank");
newWindow.document.write("<pre>" + events + "</pre>");