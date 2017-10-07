
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
/*
var fordebug = React.createClass({
  propTypes: {
    // Вы можете указать, каким примитивом должно быть свойство
    optionalArray: React.PropTypes.array,
    optionalBool: React.PropTypes.bool,
    optionalFunc: React.PropTypes.func,
    optionalNumber: React.PropTypes.number,
    optionalObject: React.PropTypes.object,
    optionalString: React.PropTypes.string,

    // Вы может указать, что свойство можеть быть одни из ...
    optionalUnion: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.instanceOf(Message)
    ]),

    // Вы можете указать, конкретную структуру объекта свойства
    optionalObjectWithShape: React.PropTypes.shape({
      color: React.PropTypes.string,
      fontSize: React.PropTypes.number
    }),

    // Вы можете указать, что свойство ОБЯЗАТЕЛЬНО
    requiredFunc: React.PropTypes.func.isRequired,

    // Если нужно указать, что свойство просто обязательно, и может быть любым примитивом
    requiredAny: React.PropTypes.any.isRequired,

  }
});
*/
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
	propTypes: {
		data: React.PropTypes.array.isRequired
	},
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