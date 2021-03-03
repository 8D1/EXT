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

execute.command (data.wget) (1)
function(a)
respond.findall "responce" 1. 626.23 X(9.5pX) Y(19PX)
function(b)
respond.findall "responce" 2. 626.23 X(9.5pX) Y(19PX)
function(c)
respond.findall "responce" 3. 626.23 X(9.5pX) Y(19PX)

if responce(execute(1)
	    = a
	    execute(a)
else if responce = b
	    execute(b)
else responce = c
	    execute(c)
