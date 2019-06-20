var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var places = /** @class */ (function () {
    function places(image, name, city, address, areaCode, date) {
        this.image = "";
        this.name = "";
        this.city = "";
        this.address = "";
        this.areaCode = "";
        this.date = new Date();
        this.image = image;
        this.name = name;
        this.city = city;
        this.address = address;
        this.areaCode = areaCode;
        this.date = date;
    }
    places.prototype.content = function () {
        return " <div class=\"card px-0 mx-1 col-10 col-md-5 col-lg-2 m-auto\">\n\t\t\t\t\t<img class=\"card-img-top d-none d-md-block\" src=" + this.image + ">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t    <h5 class=\"card-title\">" + this.name + "</h5>\n\t\t\t\t\t    <p class=\"card-text\">" + this.address + " " + this.city + " " + this.areaCode + "</p>\n\t\t\t\t\t    <p class=\"card-text\">Created: " + this.date.toDateString() + "</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>";
    };
    places.prototype.display = function () {
        document.getElementById("places").innerHTML += this.content();
    };
    return places;
}());
var restaurant = /** @class */ (function (_super) {
    __extends(restaurant, _super);
    function restaurant(image, name, city, address, areaCode, date, category, phone, website) {
        var _this = _super.call(this, image, name, city, address, areaCode, date) || this;
        _this.category = "";
        _this.phone = "";
        _this.website = "";
        _this.category = category;
        _this.phone = phone;
        _this.website = website;
        return _this;
    }
    restaurant.prototype.content = function () {
        return "<div class=\"card px-0 mx-1 col-10 col-md-5 col-lg-2 m-auto\">\n\t\t\t\t\t<img class=\"card-img-top d-none d-md-block\" src=" + this.image + ">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t    <h5 class=\"card-title\">" + this.name + "</h5>\n\t\t\t\t\t    <p class=\"card-text\">" + this.address + " " + this.city + " " + this.areaCode + "</p>\n\t\t\t\t\t    <p class=\"card-text\">" + this.category + "</p>\n\t\t\t\t\t    <p class=\"card-text\">" + this.phone + "</p>\n\t\t\t\t\t    <p class=\"card-text\">" + this.website + "</p>\n\t\t\t\t\t    <p class=\"card-text\">Created: " + this.date.toDateString() + "</p>\n\t\t\t\t\t   </div\n\t\t\t\t</div>";
    };
    restaurant.prototype.display = function () {
        document.getElementById("restaurants").innerHTML += this.content();
    };
    return restaurant;
}(places));
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(image, name, city, address, areaCode, date, venue, eventDate, time, cost) {
        var _this = _super.call(this, image, name, city, address, areaCode, date) || this;
        _this.venue = "";
        _this.eventDate = new Date();
        _this.time = "";
        _this.cost = "";
        _this.venue = venue;
        _this.eventDate = eventDate;
        _this.time = time;
        _this.cost = cost;
        return _this;
    }
    events.prototype.content = function () {
        return "<div class=\"card px-0 mx-1 col-10 col-md-5 col-lg-2 m-auto\">\n\t\t\t\t\t<img class=\"card-img-top d-none d-md-block\"  src=" + this.image + ">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t    <h5 class=\"card-title\">" + this.name + "</h5>\n\t\t\t\t\t    <p class=\"card-text\">" + this.venue + " " + this.address + ", " + this.city + " " + this.areaCode + "</p>\n\t\t\t\t\t    <p class=\"card-text\">" + this.eventDate.toDateString() + " " + this.time + "</p>\n\t\t\t\t\t    <p class=\"card-text\">" + this.cost + "</p>\n\t\t\t\t\t    <p class=\"card-text\">Created: " + this.date.toDateString() + "</p>\n\t\t\t\t\t<div>\n\t\t\t\t</div>";
    };
    events.prototype.display = function () {
        document.getElementById("events").innerHTML += this.content();
    };
    return events;
}(places));
var items = [];
items.push(new places("img/karls.jpg", "St. Charles Church", "Vienna", "Karlsplatz 1", "1010", new Date(2018, 7, 9)));
items.push(new places("img/zoo.jpg", "Vienna Zoo", "Vienna", "Maxingstrasse 13b", "1130", new Date(2019, 5, 29)));
items.push(new places("img/steph.jpg", "Stephansdom", "Vienna", "Stephansplatz", "1010", new Date(2018, 9, 7)));
items.push(new places("img/kahl.jpg", "Kahlenberg", "Vienna", "Hoehenstrasse", "1190", new Date(2019, 3, 22)));
items.push(new restaurant("img/lemon.png", "Lemon Leaf Thai Restaurant", "Vienna", "Kettenbruckengasse 19", "1050", new Date(2018, 11, 18), "Thai", "+43(1)5812308", "www.lemonleaf.at"));
items.push(new restaurant("img/sixta.png", "Sixta", "Vienna", "SchonbrunnerStrasse 21", "1050", new Date(2019, 2, 14), "Viennese", "+4315852856", "www.sixta-restaurant.at"));
items.push(new events("img/lenny.jpg", "Lenny Kravitz", "Vienna", "Roland Rainer Platz 1", "1150", new Date(2018, 12, 09), "Wiener Stadthalle, Halle D", new Date(2019, 12, 09), "7:30pm", "47.80 EUR"));
items.push(new events("img/kris.jpg", "Kris Kristofferson", "Vienna", "Roland Rainer Platz 1", "1150", new Date(2018, 11, 15), "Wiener Stadthalle, Halle F", new Date(2019, 11, 15), "8pm", "58.50 EUR"));
function ascend() {
    items.sort(function (a, b) {
        return a.date.getTime() - b.date.getTime();
    });
}
function descend() {
    items.sort(function (a, b) {
        return b.date.getTime() - a.date.getTime();
    });
}
var filepath = document.URL.substring(document.URL.lastIndexOf('/') + 1);
if (filepath == "index_asc.html") {
    ascend();
}
if (filepath == "index_desc.html") {
    descend();
}
for (var a in items) {
    items[a].display();
}
