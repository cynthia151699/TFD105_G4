$(document).ready(function() {
    $('#myContainer').multiscroll({
        sectionsColor: ['#583B75', '#293241', '#293241'],
        anchors: ['first', 'second', 'third'],
        menu: '#menu',
            navigation: true,
            navigationTooltips: ['One', 'Two', 'Three'],
            loopBottom: true,
            loopTop: true
    });
});