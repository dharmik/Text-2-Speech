function Controller() {
    function doClick() {
        alert("Data");
        textToSpeech();
    }
    function textToSpeech() {
        var xhr = Ti.Network.createHTTPClient({
            onload: function() {
                Ti.API.info("this.responseText------>" + this.responseText);
                var player = Ti.Media.createSound({
                    url: url
                });
                player.play();
            },
            onerror: function(e) {
                Ti.API.info("this.responseText------++>" + e);
            }
        });
        var url = "http://translate.google.com/translate_tts?ie=UTF-8&q=" + $.textField.value + "&tl=en-us";
        xhr.open("GET", url);
        xhr.send();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.textField = Ti.UI.createTextField({
        id: "textField",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "10",
        left: "10",
        width: "90",
        height: "30"
    });
    $.__views.index.add($.__views.textField);
    $.__views.button = Ti.UI.createButton({
        id: "button",
        title: "Convert Text 2 Speech",
        left: "10",
        top: "50",
        height: "50"
    });
    $.__views.index.add($.__views.button);
    doClick ? $.__views.button.addEventListener("click", doClick) : __defers["$.__views.button!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.button!click!doClick"] && $.__views.button.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;