window.hjSiteSettings = window.hjSiteSettings || {"testers_widgets":[],"surveys":[],"record_targeting_rules":[],"recording_capture_keystrokes":true,"polls":[],"site_id":385995,"forms":[],"record":false,"heatmaps":[{"targeting":[{"negate":false,"pattern":"https:\/\/farmeruncle.com\/shop#!\/Organic-&-Chemical-Residue-Free-Fresh-Fruits\/c\/21297161\/offset=0&sort=nameAsc","match_operation":"exact","component":"url"}],"created_epoch_time":1485523526,"id":1100660,"selector_version":2},{"targeting":[{"negate":false,"pattern":"https:\/\/farmeruncle.com\/shop","match_operation":"exact","component":"url"}],"created_epoch_time":1485523490,"id":1100654,"selector_version":2},{"targeting":[{"negate":false,"pattern":"https:\/\/farmeruncle.com\/","match_operation":"exact","component":"url"}],"created_epoch_time":1485523441,"id":1100647,"selector_version":2}],"deferred_page_contents":[],"feedback_widgets":[],"r":1.0,"state_change_listen_mode":"manual"};

window.hjBootstrap = window.hjBootstrap || function (scriptUrl) {
    var b = function () {}, d = document, h = d.head || d.getElementsByTagName('head')[0], s, v, c, ct;

    if (!d.addEventListener) {
        return;
    }

    s = d.createElement('script');
    s.async = 1;
    s.src = scriptUrl;
    h.appendChild(s);

    ct = [
        'iframe#_hjRemoteVarsFrame {',
        'display: none !important; width: 1px !important; height: 1px !important; ' +
        'opacity: 0 !important; pointer-events: none !important;',
        '}'
    ];
    c = document.createElement('style');
    c.type = 'text/css';
    if (c.styleSheet) {
        c.styleSheet.cssText = ct.join('');
    } else {
        c.appendChild(d.createTextNode(ct.join('')));
    }
    h.appendChild(c);

    v = d.createElement('iframe');
    v.style.cssText = ct[1];
    v.name = '_hjRemoteVarsFrame';
    v.title = 'Hotjar Remote Vars Frame';
    v.id = '_hjRemoteVarsFrame';
    v.src = 'https://' + (window._hjSettings.varsHost || 'vars.hotjar.com') + '/rcj-b2c1bce0a548059f409c021a46ea2224.html';
    v.onload = function () {
        b.varsLoaded = true;
        if ((typeof hj != 'undefined') && hj.event) {
            hj.event.signal('varsLoaded');
        }
    };
    b.varsJar = v;

    if (d.body) {
        d.body.appendChild(v);
    } else {
        d.addEventListener('DOMContentLoaded', function () {
            d.body.appendChild(v);
        });
    }
    window.hjBootstrap = b;
};


hjBootstrap('https://script.hotjar.com/modules-32d61a0066675ea0ed80bffeb85e613f.js');