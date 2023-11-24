const router = require("express").Router();

router.get("/api/:date", (req, res) => {
    const inputDate = req.params.date;
    let unixtime, utcdate;
    if (!isNaN(inputDate) && inputDate.length <= 13) {
        unixtime = parseInt(inputDate);
        utcdate = new Date(unixtime).toUTCString();
    } else {
        const date = new Date(inputDate);
        unixtime = Date.parse(date);
        utcdate = date.toUTCString();

        if (isNaN(unixtime)) {
            return res.json({ "error": "Invalid Date" });
        }
    }

    return res.json({ "unix": unixtime, "utc": utcdate });
});

router.get("/api", (req, res) => {
    const inputDate = req.params.date;
    let unixtime, utcdate;
    if (!inputDate) {
        const currentDate = new Date();
        unixtime = currentDate.getTime();
        utcdate = currentDate.toUTCString();
    }
    
    return res.json({ "unix": unixtime, "utc": utcdate });
});

module.exports = router;
