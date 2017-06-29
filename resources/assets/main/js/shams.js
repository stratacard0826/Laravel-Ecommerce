// for the pure CSS slider to work on iOS

var iPadLabels = function () {
    function fix() {
        var labels = document.getElementsByTagName('label'),
            target_id,
            el;
        for (var i = 0; labels[i]; i++) {
            if (labels[i].getAttribute('for')) {
                labels[i].onclick = labelClick;
            }
        }
    };
    function labelClick() {
        el = document.getElementById(this.getAttribute('for'));
        if (['radio', 'checkbox'].indexOf(el.getAttribute('type')) != -1) {
            el.setAttribute('selected', !el.getAttribute('selected'));
        } else {
            el.focus();
        }
    };
    return {
        fix: fix
    }
}();

window.onload = function () {

    iPadLabels.fix();

}