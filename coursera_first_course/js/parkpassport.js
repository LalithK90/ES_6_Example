class Park {
    constructor(id, name, description, location, image) {
        this.id = "";
        this.name = "";
        this.description = "";
        this.location = "";
        this.image = "";
        this.id = id;
        this.name = name;
        this.description = description;
        this.location = location;
        this.image = image;
    }
}
var ImpressionType;
(function (ImpressionType) {
    ImpressionType[ImpressionType["comment"] = 0] = "comment";
    ImpressionType[ImpressionType["starts"] = 1] = "starts";
})(ImpressionType || (ImpressionType = {}));
class ImpressionComment {
    constructor(newComment) {
        this.type = ImpressionType.comment;
        this.comment = newComment;
    }
}
class ImpressionStars {
    constructor(newStarts) {
        this.type = ImpressionType.starts;
        this.numStars = newStarts;
    }
}
class Rating {
    constructor(newName, newImpression) {
        this.visitorName = newName;
        this.impression = newImpression;
    }
}
const stars = ["⭐️", "⭐️⭐️", "⭐️⭐️⭐️", "⭐️⭐️⭐️⭐️", "⭐️⭐️⭐️⭐️⭐️"];
var venueCatalogue = [];
venueCatalogue.push([
    new Park("p001", "Yosemite", "Home of the Half Dome and El Capitan.", "California", "images/yosemite.jpg"),
    [
        new Rating("Katie", new ImpressionComment("Best park ever!")),
        new Rating("Mike", new ImpressionComment("How did I not do this sooner?")),
        new Rating("Johan", new ImpressionComment("Classic, a must-see!")),
        new Rating("Hector", new ImpressionStars(4)),
        new Rating("Vidya", new ImpressionStars(5))
    ]
]);
venueCatalogue.push([
    new Park("p002", "Yellowstone", "The first national park of the United States.", "Wyoming", "images/yellowstone.jpg"),
    [
        new Rating("Katie", new ImpressionComment("Sensational! Book early in the summer!")),
        new Rating("Mike", new ImpressionComment("It was amazing!")),
        new Rating("Johan", new ImpressionComment("Simply inspirational!"))
    ]
]);
venueCatalogue.push([
    new Park("p003", "Volcano", "New lands in the making. Witness Mother Nature at work!", "Hawaii", "images/volcano.jpg"),
    [
        new Rating("Syd", new ImpressionStars(5)),
        new Rating("Peter", new ImpressionStars(3)),
        new Rating("X. Zheng", new ImpressionStars(4)),
        new Rating("Han", new ImpressionComment("Felt like out of this world!"))
    ]
]);
venueCatalogue.push([
    new Park("p004", "Zion", "Follow the paths where ancient native people and pioneers walked.", "Utah", "images/zion.jpg"),
    [
        new Rating("Jim", new ImpressionComment("How did I not do this sooner?")),
        new Rating("S. Patel", new ImpressionComment("Classic, a must-see!")),
        new Rating("Gloria", new ImpressionStars(3)),
        new Rating("Samuel G.", new ImpressionStars(4))
    ]
]);
venueCatalogue.push([
    new Park("p005", "Acadia", "Highest rocky headlands along the Atlantic coastline of the United States.", "Maine", "images/acadia.jpg"),
    []
]);
venueCatalogue.push([
    new Park("p006", "Denali", "Solitude, tranquility and wilderness await.", "Alaska", "images/denali.jpg"),
    []
]);
function buildImpressionSectionFor(ratingsForVenue) {
    var resultString = "";
    const htmlTemplate = `<p class="park-rating">~~impression~~ - ~~visitor-name~~</p>`;
    ratingsForVenue.forEach(entry => {
        var entryHtml = "";
        switch (entry.impression.type) {
            case ImpressionType.comment:
                entryHtml = htmlTemplate.replace("~~impression~~", entry.impression.comment);
                break;
            case ImpressionType.starts:
                const startGiven = entry.impression.numStars;
                if (startGiven >= 1 && startGiven <= 5) {
                    entryHtml = htmlTemplate.replace("~~impression~~", stars[startGiven - 1]);
                }
                break;
            default:
                throw new Error("Unknown impression type");
        }
        entryHtml = entryHtml.replace("~~visitor-name~~", entry.visitorName);
        resultString += entryHtml;
    });
    if (resultString.length > 0) {
        resultString = "<p class='reviews-heading'>What visitors say:</p><hr class='reviews-hr'>" + resultString;
    }
    return resultString;
}
function buildParkTable() {
    const htmlTemplate = `<td class="park-image">
        <img class="park-image" src="~~image~~" alt="image">
    </td>
    <td>
        <p class="park-name">~~name~~</p>
        <p class="park-location">~~location~~</p>
        <p class="park-description">~~description~~</p>
        ~~impression-section~~
    </td>`;
    let parkTable = document.getElementById("park-table");
    if (parkTable == null)
        return;
    venueCatalogue.forEach((park, index) => {
        let row = parkTable.insertRow(index);
        row.className = "park-row";
        let rowHTML = htmlTemplate.replace("~~index~~", index.toString());
        rowHTML = rowHTML.replace("~~image~~", park[0].image);
        rowHTML = rowHTML.replace("~~name~~", park[0].name.toUpperCase());
        rowHTML = rowHTML.replace("~~location~~", park[0].location);
        rowHTML = rowHTML.replace("~~description~~", park[0].description);
        rowHTML = rowHTML.replace("~~impression-section~~", buildImpressionSectionFor(park[1]));
        row.innerHTML = rowHTML;
    });
}
buildParkTable();
