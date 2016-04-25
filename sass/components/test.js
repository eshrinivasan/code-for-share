function Initialize(n) {
    setupDate(n), setupPager(n), setupMaxLenWorkaround(n)
}
function setupDate(n) {
    $(".datepicker").each(function () {
        $(this).datepicker({
            showOn: "button",
            buttonImage: n.calendarImage,
            buttonImageOnly: !0,
            buttonText: "Select date",
            dateFormat: "mm/dd/yy"
        }).attr("placeholder", "mm/dd/yyyy")
    })
}
function setupPager() {
    $(document).ready(function () {
        $(".paginglink,.paginglinkselected").click(function (n) {
            n.preventDefault();
            var t = $(this).attr("data-update"), i = $(this).attr("data-page");
            $(t).val(i), $(this).closest("form").submit()
        })
    })
}
function SyncForum(n, t) {
    var i = function () {
        n.val() == "1" ? t.prop("disabled", !1) : (t.val(null), t.prop("disabled", !0))
    };
    $(n).change(function () {
        i()
    }), i()
}
function SetupSortChanged(n) {
    $(n).change(function () {
        $("#IsMainSearchRequest").val(!1), $(n).closest("form").submit()
    })
}
function setupMaxLenWorkaround() {
    $("input[data-val-length-max]").each(function () {
        $(this).attr("maxlength", $(this).attr("data-val-length-max"))
    })
}
function showHide(n, t, i, r) {
    var e;
    if (document.getElementById(n).style.display == "none") {
        document.getElementById("lblMsg").innerHTML = i;
        var s = i.length, f = 0, o = 0;
        if (t.offsetParent) {
            var u = t, h = u.clientHeight, c = u.clientWidth;
            do f += u.offsetLeft, o += u.offsetTop; while (u = u.offsetParent)
        }
        document.body && document.body.offsetWidth && (e = document.body.offsetWidth), document.compatMode == "CSS1Compat" && document.documentElement && document.documentElement.offsetWidth && (e = document.documentElement.offsetWidth), window.innerWidth && window.innerHeight && (e = window.innerWidth), document.getElementById(n).style.position = "absolute", r == "Link" && (o += 18), document.getElementById(n).style.top = c + o + "px", document.getElementById(n).style.left = 400 + f > e ? f - 200 + "px" : h + f + "px", document.getElementById(n).style.width = s * 7 + "px", document.getElementById(n).style.display = "inline", document.getElementById(n).style.zIndex = 99999
    } else document.getElementById(n).style.display = "none"
}
function setUpPopover() {
    $('[data-toggle="popover"]').popover({
        trigger: "click",
        container: "body",
        placement: "bottom",
        html: !0,
        content: function () {
            return $("#popover_content_wrapper").html()
        }
    });
    $("body").on("click", function (n) {
        $('[data-toggle="popover"]').each(function () {
            $(this).is(n.target) || $(this).has(n.target).length !== 0 || $(".popover").has(n.target).length !== 0 || $(this).popover("hide")
        })
    })
}
function scrolldoc() {
    var n = 50, t = $("#top").offset().top + n;
    $("html, body").animate({scrollTop: t}, 200)
}
function logError(n, t) {
    var i = n.originalEvent ? n.originalEvent : n, r = "[" + i.message + "] ";
    i.filename && (r = r + " Occured in " + i.filename + " (" + i.lineno + ", " + i.colno + ")"), j191.jq.post(t, {errorMessage: r})
}
function CallPluginOnloadScript() {
    j191.jq("body").animate({opacity: 1}), RenderOnLoadScripts()
}