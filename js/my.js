
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

var App = React.createClass({
  render: function() {
  		//console.log(this.props.data);
		var date = this.props.data;
		
    	var tpl = date.map(function(item, index) {
    		return (
    			<div key={index}>
    				<p>{item.z}</p>
    				<p>{item.x}</p>
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

$("#first2").html('Вроде арбайтен ppp');
//console.log(React);
//console.log(ReactDOM);