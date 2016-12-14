(function() {
    'use strict';

    function refreshId() {
        var x = new XMLHttpRequest();
        x.onreadystatechange = function() {
            if (x.readyState == XMLHttpRequest.DONE) {
                var id = x.responseText.trim();
                document.getElementById("esp-id").innerHTML = id;
                document.getElementById("esp-id-input").value = id;
                document.title = id + " (ESP8266)";
            }
        };
        x.open("GET", "id.json", true);
        x.send();
    }
    refreshId();

    document.getElementById("esp-id").onclick = function() {
        document.getElementById("esp-id").style.display = "none";
        document.getElementById("esp-id-input").style.display = "block";
    };
    document.getElementById("esp-id-input").onkeypress = function(e) {
        if (e.keyCode == 13) {
            var newId = document.getElementById("esp-id-input").value.trim().replace(/[^0-9a-z]/gi, '');
            get('/setId?id=' + newId);
            document.getElementById("esp-id").innerHTML = newId;
            document.title = newId + " (ESP8266)";
            document.getElementById("esp-id").style.display = "block";
            document.getElementById("esp-id-input").style.display = "none";
            return false;
        }
    };

    function refreshSwitch() {
        var x = new XMLHttpRequest();
        x.onreadystatechange = function() {
            if (x.readyState == XMLHttpRequest.DONE) {
                var value = parseInt(x.responseText.trim());
                if (value === 1) {
                    document.getElementById("set-switch-high-on").style.display = "inline-block";
                    document.getElementById("set-switch-high-off").style.display = "none";
                    document.getElementById("set-switch-low-on").style.display = "none";
                    document.getElementById("set-switch-low-off").style.display = "inline-block";
                } else {
                    document.getElementById("set-switch-high-on").style.display = "none";
                    document.getElementById("set-switch-high-off").style.display = "inline-block";
                    document.getElementById("set-switch-low-on").style.display = "inline-block";
                    document.getElementById("set-switch-low-off").style.display = "none";
                }
            }
        };
        x.open("GET", "getSwitch", true);
        x.send();
    }
    refreshSwitch();
    setInterval(refreshSwitch, 1000);

    function get(url, action) {
        var x = new XMLHttpRequest();
        if (action !== undefined) {
            x.onreadystatechange = action(x);
        }
        x.open("GET", url, true);
        x.send();
        refreshSwitch();
    }

    function showSwitch(id, value) {
        document.getElementById(id).innerHTML = value;
    }

    document.getElementById("set-switch-high-on").onclick = function() { get("setSwitchHigh") };
    document.getElementById("set-switch-high-off").onclick = function() { get("setSwitchHigh") };
    document.getElementById("set-switch-low-on").onclick = function() { get("setSwitchLow") };
    document.getElementById("set-switch-low-off").onclick = function() { get("setSwitchLow") };

})();