enum Colors {
    RED,
    GREEN,
    YELLOW
}

let myColor: Colors = Colors.GREEN

enum Days {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
}

const getDailyMessage = (day: Days) => {
    switch (day) {
        case Days.MONDAY:
            return "Monday message"
        case Days.FRIDAY:
            return "Friday message"
    }
}

console.log(Days);

console.log(getDailyMessage(Days.FRIDAY));

