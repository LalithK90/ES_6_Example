"use strict";
var Colors;
(function (Colors) {
    Colors[Colors["RED"] = 0] = "RED";
    Colors[Colors["GREEN"] = 1] = "GREEN";
    Colors[Colors["YELLOW"] = 2] = "YELLOW";
})(Colors || (Colors = {}));
let myColor = Colors.GREEN;
var Days;
(function (Days) {
    Days[Days["MONDAY"] = 0] = "MONDAY";
    Days[Days["TUESDAY"] = 1] = "TUESDAY";
    Days[Days["WEDNESDAY"] = 2] = "WEDNESDAY";
    Days[Days["THURSDAY"] = 3] = "THURSDAY";
    Days[Days["FRIDAY"] = 4] = "FRIDAY";
    Days[Days["SATURDAY"] = 5] = "SATURDAY";
    Days[Days["SUNDAY"] = 6] = "SUNDAY";
})(Days || (Days = {}));
const getDailyMessage = (day) => {
    switch (day) {
        case Days.MONDAY:
            return "Monday message";
        case Days.FRIDAY:
            return "Friday message";
    }
};
console.log(Days);
console.log(getDailyMessage(Days.FRIDAY));
