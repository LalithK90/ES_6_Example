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
    constructor(newVenueId, newName, newImpression) {
        this.venueId = newVenueId;
        this.visitorName = newName;
        this.impression = newImpression;
    }
}
const stars = ["⭐️", "⭐️⭐️", "⭐️⭐️⭐️", "⭐️⭐️⭐️⭐️", "⭐️⭐️⭐️⭐️⭐️"];
var venueCatalogue = [];
venueCatalogue.push(new Park("p001", "Yosemite", "Home of the Half Dome and El Capitan.", "California", "images/yosemite.jpg"));
venueCatalogue.push(new Park("p002", "Yellowstone", "The first national park of the United States.", "Wyoming", "images/yellowstone.jpg"));
venueCatalogue.push(new Park("p003", "Volcano", "New lands in the making. Witness Mother Nature at work!", "Hawaii", "images/volcano.jpg"));
venueCatalogue.push(new Park("p004", "Zion", "Follow the paths where ancient native people and pioneers walked.", "Utah", "images/zion.jpg"));
venueCatalogue.push(new Park("p005", "Acadia", "Highest rocky headlands along the Atlantic coastline of the United States.", "Maine", "images/acadia.jpg"));
venueCatalogue.push(new Park("p006", "Denali", "Solitude, tranquility and wilderness await.", "Alaska", "images/denali.jpg"));
var ratings = [];
ratings.push(new Rating("p001", "Katie", new ImpressionComment("Best park ever!")));
ratings.push(new Rating("p001", "Mike", new ImpressionComment("How did I not do this sooner?")));
ratings.push(new Rating("p001", "Johan", new ImpressionComment("Classic, a must-see!")));
ratings.push(new Rating("p001", "Hector", new ImpressionStars(4)));
ratings.push(new Rating("p001", "Vidya", new ImpressionStars(5)));
ratings.push(new Rating("p002", "Katie", new ImpressionComment("Sensational! Book early in the summer!")));
ratings.push(new Rating("p002", "Mike", new ImpressionComment("It was amazing!")));
ratings.push(new Rating("p002", "Marianne", new ImpressionComment("Simply inspirational!")));
ratings.push(new Rating("p003", "Syd", new ImpressionStars(5)));
ratings.push(new Rating("p003", "Peter", new ImpressionStars(3)));
ratings.push(new Rating("p003", "X. Zheng", new ImpressionStars(4)));
ratings.push(new Rating("p003", "Han", new ImpressionComment("Felt like out of this world!")));
ratings.push(new Rating("p004", "Jim", new ImpressionComment("How did I not do this sooner?")));
ratings.push(new Rating("p004", "S. Patel", new ImpressionComment("Classic, a must-see!")));
ratings.push(new Rating("p004", "Gloria", new ImpressionStars(3)));
ratings.push(new Rating("p004", "Samuel G.", new ImpressionStars(4)));
function buildImpressionSectionFor(targetVenueId) {
    const ratingsForVenue = ratings.filter(entry => entry.venueId == targetVenueId);
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
        rowHTML = rowHTML.replace("~~image~~", park.image);
        rowHTML = rowHTML.replace("~~name~~", park.name.toUpperCase());
        rowHTML = rowHTML.replace("~~location~~", park.location);
        rowHTML = rowHTML.replace("~~description~~", park.description);
        rowHTML = rowHTML.replace("~~impression-section~~", buildImpressionSectionFor(park.id));
        row.innerHTML = rowHTML;
    });
}
buildParkTable();
