
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
  		console.log(this.props.data);
    	var data = this.props.data;
    	var tpl = data.map(function(item, index) {
    		return (
    			<div key={index}>
    				<p>{item.z}</p>
    				<p>{item.x}</p>
    			</div>
    			)
    	})
    return (
    	<div>
    		{tpl}
    	</div>
    )
    
  }
});
/* */
//* */
/*
var t = data.map(
	function (item, index) {
		return (
    			<div key={index}>
    				<p>{item.z}</p>
    				<p>{item.x}</p>
    			</div>
    			)
	}
	); */
/* */
//* */
var Qwerty = React.createClass({
		
		render: function() {
			return (
				<div data={w}>hjkfhsdk</div>
				);
		}
	}); 



ReactDOM.render(
  <Qwerty />,
  document.getElementById('first')
);

ReactDOM.render(
  <App />,
  document.getElementById('first3')
);

$("#first2").html('Вроде арбайтен');
console.log(React);
console.log(ReactDOM);