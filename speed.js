function timespan(diff) {
	diff -= Math.floor(diff / (1000 * 60 * 60 * 24)) * (1000 * 60 * 60 * 24);
	diff -= Math.floor(diff / (1000 * 60 * 60)) * (1000 * 60 * 60);

	var m = Math.floor(diff / (1000 * 60));
	diff -= m * (1000 * 60);

	var s = Math.floor(diff / (1000));
	diff -= s * (1000);

	var ms = Math.floor(diff / (1000));
	diff -= ms * (1000);

	return m + ":" + s + "." + ms;
}

Game.HardReset(2);

window.hasMakingSomeDough = false;
window.hasSoBakedRightNow = false;
window.hasFledglingBakery = false;
window.hasAffluentBakery = false;
window.hasWorldFamousBakery = false;

window.timeStart = Date.now();

window.timeMakingSomeDough = 0;
window.timeSoBakedRightNow = 0;
window.timeFledglingBakery = 0;
window.timeAffluentBakery = 0;
window.timeWorldFamousBakery = 0;

window.speedrunTimer = setInterval(function () {
	if (!window.hasMakingSomeDough) {
		if (Game.HasAchiev("Making some dough")) {
			window.timeMakingSomeDough = Date.now();
			window.hasMakingSomeDough = true;
			console.log("%cMaking some dough:", "font-size:250%; color:#f00;");
			console.log("%c" + timespan(window.timeMakingSomeDough - window.timeStart), "font-size:200%; color:#f00;");
		}
	}
	if (!window.hasSoBakedRightNow) {
		if (Game.HasAchiev("So baked right now")) {
			window.timeSoBakedRightNow = Date.now();
			window.hasSoBakedRightNow = true;
			console.log("%cSo baked right now:", "font-size:250%; color:#f00;");
			console.log("%c" + timespan(window.timeSoBakedRightNow - window.timeStart), "font-size:200%; color:#f00;");
		}
	}
	if (!window.hasFledglingBakery) {
		if (Game.HasAchiev("Fledgling bakery")) {
			window.timeFledglingBakery = Date.now();
			window.hasFledglingBakery = true;
			console.log("%cFledgling bakery:", "font-size:250%; color:#f00;");
			console.log("%c" + timespan(window.timeFledglingBakery - window.timeStart), "font-size:200%; color:#f00;");
		}
	}
	if (!window.hasAffluentBakery) {
		if (Game.HasAchiev("Affluent bakery")) {
			window.timeAffluentBakery = Date.now();
			window.hasAffluentBakery = true;
			console.log("%cAffluent bakery:", "font-size:250%; color:#f00;");
			console.log("%c" + timespan(window.timeAffluentBakery - window.timeStart), "font-size:200%; color:#f00;");
		}
	}
	if (!window.hasWorldFamousBakery) {
		if (Game.HasAchiev("World-famous bakery")) {
			window.timeWorldFamousBakery = Date.now();
			window.hasWorldFamousBakery = true;
			console.log("%cWorld-famous bakery:", "font-size:250%; color:#f00;");
			console.log("%c" + timespan(window.timeWorldFamousBakery - window.timeStart), "font-size:200%; color:#f00;");
		}
	}
}, 10)