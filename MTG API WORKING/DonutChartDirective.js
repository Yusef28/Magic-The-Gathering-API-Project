
app.directive('arcGraph1', function(){
var width = window.innerWidth/3;
var height = window.innerHeight/3;

	return{
	
	restrict: 'E',
	scope:{ data: '='},
	
	link: function(scope, elem, attrs){
		scope.watchVal = 0;
		
	var graph = d3.select('arc-graph-1')
		.append('svg')
		.attr('height', height)
		.attr('width', width)
		.style('background-color', 'white');
	
	scope.$watch('data', function(newVal, oldVal){
		//scope.watchVal = newVal;
		//if(newVal){
			
		graph.selectAll('*').remove();
	
		
		var group = graph.append('g')
			.attr('transform', 'translate('+width/2+','+ height/2+')');
			
		var ir = width/6;
		var or = width/4
		var angle = 0.5;
		var p = Math.PI * 2;
		var color = d3.scale.ordinal()
			.range(['red', 'blue', 'purple']);
		
		var arc = d3.svg.arc()
			.innerRadius(ir)
			.outerRadius(or)

			
		var pie = d3.layout.pie()
		.value(function (d) {return d;}); //returns it's data
		
		var arcs = group.selectAll('.arc') //creates an array of pie layouts with start/end angles
			.data(pie(scope.data))
			.enter()
			.append('g')
			.attr('class', 'arc');
			
		arcs.append('path') //appends path innner/outer radius to each layout
			.attr('d', arc)
			.attr('fill', function(d){return color(d.data)} );
			
		arcs.append("text")
			.attr('transform', function(d) { return 'translate(' + arc.centroid(d) + ')'; })
			.attr('font-size', '.7em')
			.text(function(d) {return d.data; });

	})//watch
	}//link
	}//return


});


