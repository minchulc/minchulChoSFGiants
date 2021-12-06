const MD5 = function (d) { var r = M(V(Y(X(d), 8 * d.length))); return r.toLowerCase() }; function M(d) { for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++)_ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _); return f } function X(d) { for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++)_[m] = 0; for (m = 0; m < 8 * d.length; m += 8)_[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32; return _ } function V(d) { for (var _ = "", m = 0; m < 32 * d.length; m += 8)_ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255); return _ } function Y(d, _) { d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _; for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) { var h = m, t = f, g = r, e = i; f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e) } return Array(m, f, r, i) } function md5_cmn(d, _, m, f, r, i) { return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m) } function md5_ff(d, _, m, f, r, i, n) { return md5_cmn(_ & m | ~_ & f, d, _, r, i, n) } function md5_gg(d, _, m, f, r, i, n) { return md5_cmn(_ & f | m & ~f, d, _, r, i, n) } function md5_hh(d, _, m, f, r, i, n) { return md5_cmn(_ ^ m ^ f, d, _, r, i, n) } function md5_ii(d, _, m, f, r, i, n) { return md5_cmn(m ^ (_ | ~f), d, _, r, i, n) } function safe_add(d, _) { var m = (65535 & d) + (65535 & _); return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m } function bit_rol(d, _) { return d << _ | d >>> 32 - _ };
const router = require('express').Router();
let shelljs = require('shelljs');
const query = require('st-mysql')({ host: 'localhost', user: 'root', password: '1234', database: 'MLBplayList', flat: true, encode: false });
const {
    setTeamsInfo,
    today_,
    statsAPI,
    getTeamInfo,
    createTable,
    updateTable,
    csvfile,
    loadFromCacheDB,
    saveToCacheDB,

} = require('./common.js');

router.get('/playerA', async function (req, res) {
    let jsonFile = await csvfile('/home/ubuntu/server/player_trackman.csv');
    let dircList = [];
    let foulDirectList = [];
    jsonFile.forEach(row => {
        if (row["play_result"] === "Single" || row["play_result"] === "Double" || row["play_result"] === "Triple" || row["play_result"] === "HomeRun") {
            if (row["direction"] !== "NULL") {
                dircList.push(row["direction"]);
            }
        }
        if (row["pitch_call"] === "FoulBall") {
            if (row["direction"] !== "NULL") {
                foulDirectList.push(row["direction"])
            }
        }
    })
    let hitDircList = dircList.sort(function (a, b) { return a - b });
    let foulDircList = foulDirectList.sort(function (a, b) { return a - b });


    let obj = {};
    if (1) {
        get_all_pitch_types(jsonFile, obj)
        getplayerInfo(jsonFile, obj)
        if (1) {
            getAvg(obj, "rel_speed");
            getAvg(obj, "spin_rate");
            getAvg(obj, "plate_loc_side");
            getAvg(obj, "plate_loc_height");
            getRate(obj)
            strikeZoneLocation(obj, "plate_loc_side");
            strikeZoneLocation(obj, "plate_loc_height");
        }
        gameInfo(jsonFile, obj);
        hitsDir(jsonFile,obj),"player a";
    }

    let testCase = 0;
    if (testCase) {
        // findValueInTitle( jsonFile, "play_resuslt")
        res.send(hitDircList);
    } else {
        res.render("sfgiants", { obj });
    }

})
router.get('/playerB', async function (req, res) {
    let jsonFile = await csvfile('/home/ubuntu/server/player_trackman.csv');
    let dircList = [];
    let foulDirectList = [];
    jsonFile.forEach(row => {
        if (row["play_result"] === "Single" || row["play_result"] === "Double" || row["play_result"] === "Triple" || row["play_result"] === "HomeRun") {
            if (row["direction"] !== "NULL") {
                dircList.push(row["direction"]);
            }

        }
        if (row["pitch_call"] === "FoulBall") {
            if (row["direction"] !== "NULL") {
                foulDirectList.push(row["direction"])
            }

        }
    })
    let hitDircList = dircList.sort(function (a, b) { return a - b });
    let foulDircList = foulDirectList.sort(function (a, b) { return a - b });
    console.log(" 안타 들의 direction", hitDircList.filter(function (elem) {
        return elem < 46;
    }).length);

    let obj = {};
    if (1) {
        get_all_pitch_types(jsonFile, obj)
        getplayerInfo(jsonFile, obj)
        if (1) {
            getAvg(obj, "rel_speed");
            getAvg(obj, "spin_rate");
            getAvg(obj, "plate_loc_side");
            getAvg(obj, "plate_loc_height");
            getRate(obj)
            strikeZoneLocation(obj, "plate_loc_side");
            strikeZoneLocation(obj, "plate_loc_height");
        }
        gameInfo(jsonFile, obj);
        hitsDir(jsonFile,obj, "player b");
    }


    let testCase = 0;
    if (testCase) {
        // findValueInTitle( jsonFile, "play_resuslt")
        res.send(hitDircList);
    } else {
        res.render("playerB", { obj });
    }

})

function hitsDir(jsonFile,obj, pName) {

    let dircList = [];
    let foulDirectList = [];
    let hits = {};
    let totalHits = 0;
    let playerAtotalHits = 0;
    let playerBtotalHits = 0;

    hits["direction"] = []
    jsonFile.forEach(row => {
        if (!obj[row["player"]]["hitLocation"]) {
            obj[row["player"]]["hitLocation"] = {}
            obj[row["player"]]["hitLocation"]["direction"] = [];
            obj[row["player"]]["hitLocation"]["distance"] = [];
        }
        if (!obj[row["player"]]["hitLocation"]["FoulBall"]) {
            obj[row["player"]]["foulLocation"] = {}
            obj[row["player"]]["foulLocation"]["direction"] = [];
            obj[row["player"]]["foulLocation"]["distance"] = [];
        }

        if (row["play_result"] === "Single" || row["play_result"] === "Double" || row["play_result"] === "Triple") {
            if (row["direction"] !== "NULL") {

                obj[row["player"]]["hitLocation"]["direction"].push(row["direction"]);
                if (row["player"] === "player a") {
                    playerAtotalHits += 1;
                }
                if (row["player"] === "player b") {
                    playerBtotalHits += 1;

                }
                totalHits += 1;
            }
            if (row["distance"] !== "NULL") {
                obj[row["player"]]["hitLocation"]["distance"].push(row["distance"]);
            }

        }

    })


    let line = 120;
    Object.keys(obj).forEach(player => {
        Object.keys(obj[player]["hitLocation"]).forEach(elem => {
            if (elem === "direction") {
                obj[player]["hitLocation"][elem].forEach((data, index) => {
                    let distance = obj[player]["hitLocation"]["distance"][index];
                    if (!obj[player]["hitLocation"]["zones"]) {
                        obj[player]["hitLocation"]["zones"] = {}
                        obj[player]["hitLocation"]["zones"]["infield"] = {};
                        obj[player]["hitLocation"]["zones"]["outfield"] = {};
                    }
                    if (data >= 22.9 && data <= 46 && distance <= line) {
                        if (!obj[player]["hitLocation"]["zones"]["infield"]["zone1"]) {
                            obj[player]["hitLocation"]["zones"]["infield"]["zone1"] = {};
                        }
                        if (!obj[player]["hitLocation"]["zones"]["infield"]["zone1"][elem]) {
                            obj[player]["hitLocation"]["zones"]["infield"]["zone1"][elem] = [];
                            obj[player]["hitLocation"]["zones"]["infield"]["zone1"]["distance"] = [];
                        }
                        obj[player]["hitLocation"]["zones"]["infield"]["zone1"][elem].push(data);
                        obj[player]["hitLocation"]["zones"]["infield"]["zone1"]["distance"].push(distance);
                    }
                    if (data >= 0 && data <= 22.9 && distance <= line) {
                        if (!obj[player]["hitLocation"]["zones"]["infield"]["zone2"]) {
                            obj[player]["hitLocation"]["zones"]["infield"]["zone2"] = {};
                        }
                        if (!obj[player]["hitLocation"]["zones"]["infield"]["zone2"][elem]) {
                            obj[player]["hitLocation"]["zones"]["infield"]["zone2"][elem] = [];
                            obj[player]["hitLocation"]["zones"]["infield"]["zone2"]["distance"] = [];
                        }
                        obj[player]["hitLocation"]["zones"]["infield"]["zone2"][elem].push(data);
                        obj[player]["hitLocation"]["zones"]["infield"]["zone2"]["distance"].push(distance);

                    }
                    if (data >= -22.9 && data <= 0 && distance <= line) {
                        if (!obj[player]["hitLocation"]["zones"]["infield"]["zone3"]) {
                            obj[player]["hitLocation"]["zones"]["infield"]["zone3"] = {};
                        }
                        if (!obj[player]["hitLocation"]["zones"]["infield"]["zone3"][elem]) {
                            obj[player]["hitLocation"]["zones"]["infield"]["zone3"][elem] = [];
                            obj[player]["hitLocation"]["zones"]["infield"]["zone3"]["distance"] = [];
                        }
                        obj[player]["hitLocation"]["zones"]["infield"]["zone3"][elem].push(data);
                        obj[player]["hitLocation"]["zones"]["infield"]["zone3"]["distance"].push(distance);
                    }
                    if (data <= -23 && data >= -46 && distance <= line) {
                        if (!obj[player]["hitLocation"]["zones"]["infield"]["zone4"]) {
                            obj[player]["hitLocation"]["zones"]["infield"]["zone4"] = {};
                        }
                        if (!obj[player]["hitLocation"]["zones"]["infield"]["zone4"][elem]) {
                            obj[player]["hitLocation"]["zones"]["infield"]["zone4"][elem] = [];
                            obj[player]["hitLocation"]["zones"]["infield"]["zone4"]["distance"] = [];
                        }
                        obj[player]["hitLocation"]["zones"]["infield"]["zone4"][elem].push(data);
                        obj[player]["hitLocation"]["zones"]["infield"]["zone4"]["distance"].push(distance);
                    }

                    ////////////////////////////////////////////////////////////////////////////////////////////////
                    if (data > 22.9 && data < 46 && distance > line) {
                        if (!obj[player]["hitLocation"]["zones"]["outfield"]["zone5"]) {
                            obj[player]["hitLocation"]["zones"]["outfield"]["zone5"] = {};
                        }
                        if (!obj[player]["hitLocation"]["zones"]["outfield"]["zone5"][elem]) {
                            obj[player]["hitLocation"]["zones"]["outfield"]["zone5"][elem] = [];
                            obj[player]["hitLocation"]["zones"]["outfield"]["zone5"]["distance"] = [];
                        }
                        obj[player]["hitLocation"]["zones"]["outfield"]["zone5"][elem].push(data);
                        obj[player]["hitLocation"]["zones"]["outfield"]["zone5"]["distance"].push(distance);
                    }
                    if (data > 0 && data < 22.9 && distance > line) {
                        if (!obj[player]["hitLocation"]["zones"]["outfield"]["zone6"]) {
                            obj[player]["hitLocation"]["zones"]["outfield"]["zone6"] = {};
                        }
                        if (!obj[player]["hitLocation"]["zones"]["outfield"]["zone6"][elem]) {
                            obj[player]["hitLocation"]["zones"]["outfield"]["zone6"][elem] = [];
                            obj[player]["hitLocation"]["zones"]["outfield"]["zone6"]["distance"] = [];
                        }
                        obj[player]["hitLocation"]["zones"]["outfield"]["zone6"][elem].push(data);
                        obj[player]["hitLocation"]["zones"]["outfield"]["zone6"]["distance"].push(distance);

                    }
                    if (data > -22.9 && data < 0 && distance > line) {
                        if (!obj[player]["hitLocation"]["zones"]["outfield"]["zone7"]) {
                            obj[player]["hitLocation"]["zones"]["outfield"]["zone7"] = {};
                        }
                        if (!obj[player]["hitLocation"]["zones"]["outfield"]["zone7"][elem]) {
                            obj[player]["hitLocation"]["zones"]["outfield"]["zone7"][elem] = [];
                            obj[player]["hitLocation"]["zones"]["outfield"]["zone7"]["distance"] = [];
                        }
                        obj[player]["hitLocation"]["zones"]["outfield"]["zone7"][elem].push(data);
                        obj[player]["hitLocation"]["zones"]["outfield"]["zone7"]["distance"].push(distance);
                    }
                    if (data < -23 && data > -46 && distance > line) {
                        if (!obj[player]["hitLocation"]["zones"]["outfield"]["zone8"]) {
                            obj[player]["hitLocation"]["zones"]["outfield"]["zone8"] = {};
                        }
                        if (!obj[player]["hitLocation"]["zones"]["outfield"]["zone8"][elem]) {
                            obj[player]["hitLocation"]["zones"]["outfield"]["zone8"][elem] = [];
                            obj[player]["hitLocation"]["zones"]["outfield"]["zone8"]["distance"] = [];
                        }
                        obj[player]["hitLocation"]["zones"]["outfield"]["zone8"][elem].push(data);
                        obj[player]["hitLocation"]["zones"]["outfield"]["zone8"]["distance"].push(distance);
                    }


                })
            }
        })
    })

    console.log("playerAtotalHits : ", playerAtotalHits);
    console.log("playerBtotalHits : ", playerBtotalHits);
    console.log("totalHits: ", totalHits);
    let totalA = 0;
    let totalB = 0;


    Object.keys(obj).forEach(player => {
        Object.keys(obj[player]["hitLocation"]["zones"]).forEach(field => {
            Object.keys(obj[player]["hitLocation"]["zones"][field]).forEach(zone => {
                if (!obj[player]["hitLocation"]["zones"]["summary"]) {
                    obj[player]["hitLocation"]["zones"]["summary"] = {};
                }

                if (player === pName) {
                    if (!obj[player]["hitLocation"]["zones"]["summary"][zone]) {
                        obj[player]["hitLocation"]["zones"]["summary"][zone] = ((obj[player]["hitLocation"]["zones"][field][zone]["direction"].length / playerAtotalHits) * 100).toFixed(2);;
                    }
                } else {
                    if (!obj[player]["hitLocation"]["zones"]["summary"][zone]) {
                        obj[player]["hitLocation"]["zones"]["summary"][zone] = ((obj[player]["hitLocation"]["zones"][field][zone]["direction"].length / playerBtotalHits) * 100).toFixed(2);
                    }
                }
            })
        });
    })
}
function gameInfo(jsonFile, obj) {
    Object.keys(obj).forEach(player => {
        if (!obj[player]["gameInfo"]) {
            obj[player]["gameInfo"] = {};
            obj[player]["gameInfo"]["games"] = {}
        }
        let counter = 0;
        jsonFile.forEach(row => {

            if (row["player"] === player) {
                if (row["k_or_bb"] !== "Undefined" || row["hit_type"] !== "Undefined" || row["play_result"] !== "Undefined") {

                    let gameId = row["game_num"];
                    counter += 1;
                    if (!obj[player]["gameInfo"]["games"][`game${gameId}`]) {
                        obj[player]["gameInfo"]["games"][`game${gameId}`] = [];
                        counter = 1;
                    }
                    if (false) {
                        if (!obj[player]["gameInfo"]["games"][gameId][`${counter}`]) {
                            obj[player]["gameInfo"]["games"][gameId][`${counter}`] = {};
                        }

                        obj[player]["gameInfo"]["games"][gameId][`${counter}`]["player"] = row["player"];
                        obj[player]["gameInfo"]["games"][gameId][`${counter}`]["game_num"] = row["game_num"];
                        obj[player]["gameInfo"]["games"][gameId][`${counter}`]["pa_of_inning"] = row["pa_of_inning"];
                        obj[player]["gameInfo"]["games"][gameId][`${counter}`]["k_or_bb"] = row["k_or_bb"];
                        obj[player]["gameInfo"]["games"][gameId][`${counter}`]["hit_type"] = row["hit_type"];
                        obj[player]["gameInfo"]["games"][gameId][`${counter}`]["rel_speed"] = row["rel_speed"]
                        obj[player]["gameInfo"]["games"][gameId][`${counter}`]["pitch_of_game"] = row["pitch_of_game"];
                    }
                    let aaa = {}


                    aaa["player"] = row["player"];
                    aaa["game_num"] = row["game_num"];
                    aaa["pa_of_inning"] = row["pa_of_inning"];
                    aaa["k_or_bb"] = row["k_or_bb"];
                    aaa["hit_type"] = row["hit_type"];
                    aaa["rel_speed"] = row["rel_speed"]
                    aaa["play_result"] = row["play_result"]
                    aaa["pitch_of_game"] = row["pitch_of_game"];
                    aaa["pitch_of_game"] = row["pitch_of_game"];
                    aaa["tagged_pitch_type"] = row["tagged_pitch_type"];
                    obj[player]["gameInfo"]["games"][`game${gameId}`].push(aaa);
                }
            }
        })

        // Object.keys( obj[player]["gameInfo"]["games"]).forEach ( elem => { 
        //     Object.keys( obj[player]["gameInfo"]["games"][elem]).forEach( counter=> { 
        //         console.log( counter);
        //         // Object.keys( obj[player]["gameInfo"]["games"][elem][counter]).forEach( aaa=> { 
        //         //     console.log( aaa );
        //         // })
        //     })
        // })


    })


    Object.keys(obj).forEach(player => {
        let totalPlateAppearance = 0;
        let totalWalk = 0;
        let totalStrikeout = 0;
        let totalHits = 0;
        let totalGroundBallOut = 0;
        let totalFlyOut = 0;
        let totalPopup = 0;
        let totalError = 0;
        let totalOut = 0;
        let totalLineDrive = 0;
        if (!obj[player]["gameInfo"]["totalPlateAppearance"]) {
            obj[player]["gameInfo"]["totalPlateAppearance"] = 0;
        }

        obj[player]["gameInfo"]["totalHits"] = 0;
        obj[player]["gameInfo"]["totalWalk"] = 0;
        obj[player]["gameInfo"]["totalStrikeout"] = 0;
        obj[player]["gameInfo"]["groundBallOut"] = 0;
        obj[player]["gameInfo"]["totalFlyOut"] = 0;
        obj[player]["gameInfo"]["totalPopup"] = 0;
        obj[player]["gameInfo"]["totalError"] = 0;
        obj[player]["gameInfo"]["totalOut"] = 0;
        obj[player]["gameInfo"]["totalLineDrive"] = 0;


        Object.keys(obj[player]["gameInfo"]["games"]).forEach(gameId => {
            let gameResult = obj[player]["gameInfo"]["games"][gameId];
            totalPlateAppearance += gameResult.length;
            gameResult.forEach(atBat => {
                // console.log( atBat["k_or_bb"]);
                if (atBat["k_or_bb"] === "Walk") {
                    totalWalk += 1;
                }
                if (atBat["k_or_bb"] === "Strikeout") {
                    totalStrikeout += 1;
                }

                if (atBat["play_result"] === "Single" || atBat["play_result"] === "Double" || atBat["play_result"] === "Triple" || atBat["play_result"] === "HomeRun") {
                    // console.log( atBat["play_result"]);
                    totalHits += 1;
                }

                if (atBat["hit_type"] === "GroundBall" && atBat["play_result"] === "Out") {
                    totalGroundBallOut += 1;
                }
                if (atBat["hit_type"] === "FlyBall" && atBat["play_result"] === "Out") {
                    totalFlyOut += 1;
                }
                if (atBat["hit_type"] === "Popup" && atBat["play_result"] === "Out") {
                    totalPopup += 1;
                }
                if (atBat["hit_type"] === "LineDrive" && atBat["play_result"] === "Out") {
                    totalLineDrive += 1;
                }
                if (atBat["play_result"] === "Error") {
                    totalError += 1;
                }
                if (atBat["play_result"] === "Out") {
                    totalOut += 1;
                }
            })

        });
        obj[player]["gameInfo"]["totalPlateAppearance"] += totalPlateAppearance;
        obj[player]["gameInfo"]["totalWalk"] += totalWalk;
        obj[player]["gameInfo"]["totalStrikeout"] += totalStrikeout;
        obj[player]["gameInfo"]["totalHits"] += totalHits;
        obj[player]["gameInfo"]["groundBallOut"] += totalGroundBallOut;
        obj[player]["gameInfo"]["totalFlyOut"] += totalFlyOut;
        obj[player]["gameInfo"]["totalPopup"] += totalPopup;
        obj[player]["gameInfo"]["totalOut"] += totalOut;
        obj[player]["gameInfo"]["totalLineDrive"] += totalLineDrive;


        obj[player]["gameInfo"]["totalError"] += totalError;

    })


}

function get_all_pitch_types(jsonFile, obj) {
    jsonFile.forEach(elem => {
        let playerName = elem["player"];
        let pitch_type = elem["tagged_pitch_type"];

        if (!obj[playerName]) {
            obj[playerName] = {};
            obj[playerName]["all_pitch_types"] = {};
        }
        if (!obj[playerName]["all_pitch_types"][pitch_type]) {
            obj[playerName]["all_pitch_types"][pitch_type] = {};
        }
        let gameInfo = `${elem["game_num"]}_${elem["pitch_of_game"]}`;
        obj[playerName]["all_pitch_types"][pitch_type][gameInfo] = {};
        obj[playerName]["all_pitch_types"][pitch_type][gameInfo]["rel_speed"] = elem["rel_speed"];
        obj[playerName]["all_pitch_types"][pitch_type][gameInfo]["pitch_call"] = elem["pitch_call"];
        obj[playerName]["all_pitch_types"][pitch_type][gameInfo]["spin_rate"] = elem["spin_rate"];
        obj[playerName]["all_pitch_types"][pitch_type][gameInfo]["plate_loc_side"] = elem["plate_loc_side"];
        obj[playerName]["all_pitch_types"][pitch_type][gameInfo]["plate_loc_height"] = elem["plate_loc_height"];
    })
}

function getplayerInfo(jsonFile, obj) {
    jsonFile.forEach(elem => {

        let player = elem["player"];  
        let playerInfo;
        if (!obj[player]["playerInfo"]) {
            obj[player]["playerInfo"] = {};
            playerInfo = obj[player]["playerInfo"];
            playerInfo["name"] = player;
            playerInfo["throw"] = elem["pitcher_throws"];
        }
    })
}


function findValueInTitle(jsonFile, name) {
    let obj12 = {}
    jsonFile.forEach(elem => {
        let k_or_bb = elem[name];
        obj12[name] = true;
        if (!obj12[k_or_bb]) {
            obj12[k_or_bb] = true;
        }
    })
    console.log(obj12);
}

function strikeZoneLocation(obj, value) {
    Object.keys(obj).forEach(playerName => {
        // obj1[playerName]= {};
        if (!obj[playerName]["location"]) {
            obj[playerName]["location"] = {}
        }
        Object.keys(obj[playerName]["all_pitch_types"]).forEach(type => {
            // console.log(type);
            if (!obj[playerName]["location"][type]) {
                obj[playerName]["location"][type] = {};
            }
            if (!obj[playerName]["location"][type][value]) {
                obj[playerName]["location"][type][value] = [];
            }
            Object.keys(obj[playerName]["all_pitch_types"][type]).forEach((pitchInfo) => {
                if (obj[playerName]["all_pitch_types"][type][pitchInfo][value] !== null) {
                    obj[playerName]["location"][type][value].push(obj[playerName]["all_pitch_types"][type][pitchInfo][value]);
                }

            });
        });

    })
}


function getAvg(obj, value) {
    // let list = [];
    let name = `avg_${value}`;
    Object.keys(obj).forEach(playerName => {
        if (!obj[playerName]["pitchInfo"]) {
            obj[playerName]["pitchInfo"] = {};
        }
        if (!obj[playerName]["pitchInfo"][name]) {
            obj[playerName]["pitchInfo"][name] = {};
        }
        Object.keys(obj[playerName]["all_pitch_types"]).forEach(type => {
            let total = 0;
            Object.keys(obj[playerName]["all_pitch_types"][type]).forEach(pitchInfo => {
                if (obj[playerName]["all_pitch_types"][type][pitchInfo][value] !== "NULL") {
                    total += Number(obj[playerName]["all_pitch_types"][type][pitchInfo][value]);
                }
            });
            let ptotal = Object.keys(obj[playerName]["all_pitch_types"][type]).length;
            obj[playerName]["pitchInfo"][name][type] = total / ptotal;
        });
    })
}

function getRate(obj) {
    Object.keys(obj).forEach(playerName => {
        if (!obj[playerName]["pitchInfo"]["rate"]) {
            obj[playerName]["pitchInfo"]["rate"] = {};
        }
        let total = 0;
        Object.keys(obj[playerName]["all_pitch_types"]).forEach(type => {
            // obj[playerName]["pitchInfo"]["rate"][type] = ( Object.values(obj[playerName]["all_pitch_types"][type]).length);
            total += (Object.values(obj[playerName]["all_pitch_types"][type]).length);
        });
        let list = []
        let obj2 = {}
        Object.keys(obj[playerName]["all_pitch_types"]).forEach(type => {
            obj[playerName]["pitchInfo"]["rate"][type] = ((Object.values(obj[playerName]["all_pitch_types"][type]).length) / total) * 100;

        });

        obj[playerName]["pitchInfo"]["rate"]["total"] = total;
    })
}


router.use(function (req, res, next) {
    res.status(404).send('not found');
});

router.use(function (err, req, res, next) {
    console.log(err);
    console.log(err.stack);
    res.status(500).send('server error!!!');
});

module.exports = router;
