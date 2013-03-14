function range(from, to)
{
  var r=Object.create(range.methods);
  r.from=from;
  r.to=to;
  return r;
}

range.methods={
		includes: function(x) { return this.from <= x && x <= this.to; },
		foreach: function(f) {
			for(var x = Math.ceil(this.from); x <= this.to; x++)
				{ 
				console.log(x);
				f(x);
				};
			},
			
		toString: function() { return "(" + this.from + "..." + this.to + ")"; }
}

var r= range(1,4);

r.includes(2);

r.foreach(console.log);
console.log(r);