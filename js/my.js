
//const firsts = <h1>Hello!</h1>;
var w = [
	{
		z: 'test z1',
		x: 'test x1'
	},
	{
		z: 'test z2',
		x: 'test x2'
	}

];

var Appdet = React.createClass(
	{
		render: function() {
			var z = this.props.data.z;
			var x = this.props.data.x;
			return (
				<div>
					<span>{z}</span>
					<span>{x}</span>
				</div>
			)
		}
	}
);

var App = React.createClass({
  render: function() {
  		//console.log(this.props.data);
		var date = this.props.data;
		
    	var tpl = date.map(function(item, index) {
    		return (

					<div className="appdet" key={index}>
						<Appdet data={item} />
					</div>
    			)
		});
	//console.log(tpl);
    return (
    	<div className={date.length > 0 ? 'have':'none'}>
    		{tpl}
				<div>Элементов в массиве: {date.length}</div>
    	</div>			
    )
    
  }
});

var Qwerty = React.createClass({
		
		render: function() {
			return (
				<div data={w}>hjkfhsdk</div>
				);
		}
	}); 
//console.log(w);


ReactDOM.render(
  <Qwerty />,
  document.getElementById('first')
);

ReactDOM.render(
  <App data={w}/>,
  document.getElementById('first3')
);

ReactDOM.render(
  <App data={w}/>,
  document.getElementById('first4')
);

$("#first4").html('Вроде арбайтен ppp');
$("#first2").html('Вроде арбайтен ppp');
//console.log(React);
//console.log(ReactDOM);