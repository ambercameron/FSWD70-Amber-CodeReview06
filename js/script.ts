class places {
	image = "";
	name = "";
	city = "";
	address = ""
	areaCode = "";
	date: Date = new Date();

	constructor(image, name, city, address, areaCode, date) {
		this.image = image;
		this.name = name;
		this.city = city;
		this.address = address;
		this.areaCode = areaCode;
		this.date = date;
	}

	content() {
		return ` <div class="card px-0 mx-1 col-10 col-md-5 col-lg-2 m-auto">
					<img class="card-img-top d-none d-md-block" src=${this.image}>
					<div class="card-body">
					    <h5 class="card-title">${this.name}</h5>
					    <p class="card-text">${this.address} ${this.city} ${this.areaCode}</p>
					    <p class="card-text">Created: ${this.date.toDateString()}</p>
					</div>
				</div>`;
	}
	display() {
		document.getElementById("places").innerHTML += this.content();
	}
}


class restaurant extends places {
	category = "";
	phone = "";
	website = "";

	constructor(image, name, city, address, areaCode, date, category, phone, website) {
		super(image, name, city, address, areaCode, date);
		this.category = category;
		this.phone = phone;
		this.website = website;	
	}
	content(): string {
		return `<div class="card px-0 mx-1 col-10 col-md-5 col-lg-2 m-auto">
					<img class="card-img-top d-none d-md-block" src=${this.image}>
					<div class="card-body">
					    <h5 class="card-title">${this.name}</h5>
					    <p class="card-text">${this.address} ${this.city} ${this.areaCode}</p>
					    <p class="card-text">${this.category}</p>
					    <p class="card-text">${this.phone}</p>
					    <p class="card-text">${this.website}</p>
					    <p class="card-text">Created: ${this.date.toDateString()}</p>
					   </div
				</div>`;
	}
	display(): void {
		document.getElementById("restaurants").innerHTML += this.content();
	}
}


class events extends places {
	venue = "";
	eventDate: Date = new Date();
	time = ""
	cost = ""

	constructor(image, name, city, address, areaCode, date, venue, eventDate, time, cost) {
		super(image, name, city, address, areaCode, date);
		this.venue = venue;
		this.eventDate = eventDate;
		this.time = time;	
		this.cost = cost;
	}
	content(): string {
		return `<div class="card px-0 mx-1 col-10 col-md-5 col-lg-2 m-auto">
					<img class="card-img-top d-none d-md-block"  src=${this.image}>
					<div class="card-body">
					    <h5 class="card-title">${this.name}</h5>
					    <p class="card-text">${this.venue} ${this.address}, ${this.city} ${this.areaCode}</p>
					    <p class="card-text">${this.eventDate.toDateString()} ${this.time}</p>
					    <p class="card-text">${this.cost}</p>
					    <p class="card-text">Created: ${this.date.toDateString()}</p>
					<div>
				</div>`;
	}
	display(): void {
		document.getElementById("events").innerHTML += this.content();
	}
}


let items: Array<places> = [];

items.push(new places ("img/karls.jpg", "St. Charles Church", "Vienna", "Karlsplatz 1", "1010", new Date(2018, 7, 9)));
items.push(new places ("img/zoo.jpg", "Vienna Zoo", "Vienna", "Maxingstrasse 13b", "1130", new Date(2019, 5, 29)));
items.push(new places ("img/steph.jpg", "Stephansdom", "Vienna", "Stephansplatz", "1010", new Date(2018, 9, 7)));
items.push(new places ("img/kahl.jpg", "Kahlenberg", "Vienna", "Hoehenstrasse", "1190", new Date(2019, 3, 22)));

items.push(new restaurant ("img/lemon.png", "Lemon Leaf Thai Restaurant", "Vienna", "Kettenbruckengasse 19", "1050", new Date(2018, 11, 18), "Thai", "+43(1)5812308", "www.lemonleaf.at"));
items.push(new restaurant ("img/sixta.png", "Sixta", "Vienna", "SchonbrunnerStrasse 21", "1050", new Date(2019, 2, 14), "Viennese", "+4315852856", "www.sixta-restaurant.at"));

items.push(new events ("img/lenny.jpg", "Lenny Kravitz", "Vienna", "Roland Rainer Platz 1", "1150", new Date(2018, 12, 09), "Wiener Stadthalle, Halle D", new Date(2019, 12, 09), "7:30pm", "47.80 EUR"));
items.push(new events ("img/kris.jpg", "Kris Kristofferson", "Vienna", "Roland Rainer Platz 1", "1150", new Date(2018, 11, 15), "Wiener Stadthalle, Halle F", new Date(2019, 11, 15), "8pm", "58.50 EUR"));

function ascend(){
	items.sort(function(a:places, b:places){
		return a.date.getTime() - b.date.getTime();
	});
}

function descend(){
	items.sort(function(a:places, b:places){
		return b.date.getTime() - a.date.getTime();
	});
}

var filepath = document.URL.substring(document.URL.lastIndexOf('/')+1);

if(filepath == "index_asc.html"){
	ascend()
}

if(filepath == "index_desc.html"){
	descend()
}


for(let a in items) {
	items[a].display();
}