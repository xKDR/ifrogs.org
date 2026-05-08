

## html code end


top       <- readLines ("top_zcyc.html")
bottom    <- readLines ("bottom_zcyc.html")
body      <- readLines ("body_extended_spread.html")
cat(top, body, bottom, file = "extended_spread_page.html")


top            <- readLines ("top_zcyc.html")
bottom    <- readLines ("bottom_zcyc.html")
body         <- readLines ("body_extended_zcyc.html")
cat(top, body, bottom, file = "extended_zcyc_page.html")


top            <- readLines ("top_zcyc.html")
bottom    <- readLines ("bottom_zcyc.html")
body         <- readLines ("body_extended_video.html")
cat(top, body, bottom, file = "extended_video_page.html")


top            <- readLines ("top_zcyc.html")
bottom    <- readLines ("bottom_zcyc.html")
body         <- readLines ("body_zcyc.html")
cat(top, body, bottom, file = "zcyc_webpage.html")

