selectnav('nav', {
    activeclass: false,
    nested: false,
    label: false,
    autoselect: false
});

jQuery(document).ready(function ($) {
    if ($("ul.contactinfo").find("li.m").length > 0) {
        $("ul.contactinfo").find("li.m").append("+91 8412077223");
    }
    if ($("ul.contactinfo").find("li.e").length > 0) {
        $("ul.contactinfo").find("li.e").append("proloy@chakroborty.com");
    }
    if ($("ul.contactinfo").find("li.s").length > 0) {
        $("ul.contactinfo").find("li.s").append("proloy.chakroborty");
    }

    //Count Days - present
    var joined = new Date('2013/10/28'),
        today = new Date(),
        duration = Math.floor(Math.abs((today - joined) / (1000 * 60 * 60 * 24))),
        showDuration,
        totalYears = 7,
        totalMonths = 6;
    
    if (duration >= 365) {
        var years = Math.floor(duration / 365);
        var months = Math.floor((duration - (365 * years)) / 30);
        if (years == 1) {
            showDuration = '<strong>(' + year + ' year';
        } else {
            showDuration = '<strong>(' + years + ' years';
        }
        if (months == 1) {
            showDuration += ', ' + months + ' month)</strong>';
        } else if (months > 1) {
            showDuration += ', ' + months + ' months)</strong>';
        } else {
            showDuration += ')';
        }
        $('#present').html(showDuration);

        totalYears = totalYears + years;
        totalMonths = totalMonths + months;
        $('#total').html('(' + totalYears + ' years, ' + totalMonths + ' months)');
    } else {
        var months = Math.floor(duration / 30);
        if (months == 1) {
            showDuration = '<strong>(' + months + ' month)</strong>';
        } else if (months > 1) {
            showDuration = '<strong>(' + months + ' months)</strong>';
        }
        $('#present').html(showDuration);

        totalMonths = totalMonths + months;
        if (totalMonths >= 12) {
            totalYears = totalYears + Math.floor(totalMonths / 12);
            totalMonths = totalMonths - (12 * Math.floor(totalMonths / 12))
        }
        if (totalMonths == 0) {
            $('#total').html('(' + totalYears + ' years)');
        } else if (totalMonths == 1) {
            $('#total').html('(' + totalYears + ' years, ' + totalMonths + ' month)');
        } else if (totalMonths > 1) {
            $('#total').html('(' + totalYears + ' years, ' + totalMonths + ' months)');
        }
    }
});