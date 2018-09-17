app.get("/scrape", function (req, res) {
    // console.log("test");
    request("https://www.nytimes.com/section/technology", function (err, response, html) {
        var $ = cheerio.load(html);
        var results = [];
        $("h2.headline").each(function (i, element) {
            var title = $(element).text().trim();
            var summary = $(element).siblings("p.summary").text().trim();
            var author = $(element).siblings("p.byline").text().trim();
            var link = $(element).parent().parent().attr("href");
            // var imgLink = $(element).find("a").find("img").attr("src");

            db.cheeriMonDB.insert({
                    title: title,
                    summary: summary,
                    author: author,
                    link: link,
                    // imgLink: imgLink
                },
                function (error, inserted) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log(inserted);
                    }
                });
        });
    });
    res.render("index", {});
});