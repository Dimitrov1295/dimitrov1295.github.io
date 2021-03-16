jQuery(document).ready(function ($) {
    /*======= Skillset *=======*/

    $(".level-bar-inner").css("width", "0");

    $(window).on("load", function () {
        $(".level-bar-inner").each(function () {
            var itemWidth = $(this).data("level");

            $(this).animate(
                {
                    width: itemWidth,
                },
                800
            );
        });
    });

    setInterval(() => {
        rollTheDice();
    }, 5000);

    $(".level-label").tooltip();

    $("#rss-feeds").rss(
        "http://feeds.feedburner.com/TechCrunch/startups",

        {
            limit: 3,

            // the effect, which is used to let the entries appear
            // default: 'show'
            // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
            effect: "slideFastSynced",

            // outer template for the html transformation
            // default: "<ul>{entries}</ul>"
            // valid values: any string
            layoutTemplate: "<div class='item'>{entries}</div>",

            // inner template for each entry
            // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
            // valid values: any string
            entryTemplate:
                '<h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fa fa-external-link"></i>Read more</a></div>',
        }
    );

    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    GitHubActivity.feed({username: "Dimitrov1295", selector: "#ghfeed"});

    const start = new Date(2016, 8, 20);
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const end = new Date();
    const diffDays = Math.round(Math.abs((end - start) / oneDay));
    $("#period").html(diffDays);
});

function rollTheDice() {
    const avatar = $("#avatar");
    const currentSrc = avatar.attr("src");
    const newSrc = currentSrc.replace(/eyeType=(\w*)/g, calculateEyeType());
    avatar.attr("src", newSrc);
}

function calculateEyeType() {
    const default1 = "Default";
    return "eyeType=" + (Math.random() < .5 ? spiceUp() : default1);
}

function spiceUp() {
    const eyeType = ["Close", "Cry", "Dizzy", "EyeRoll", "Happy", "Hearts", "Side", "Squint", "Surprised", "Wink", "WinkWacky"];
    return eyeType[Math.floor(Math.random() * eyeType.length)];
}
