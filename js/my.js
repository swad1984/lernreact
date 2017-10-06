
//const firsts = <h1>Hello!</h1>;
var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        Всем привет, я компонент App!
      </div>
    );
  }
});
/* */
//* */

var Qwerty = React.createClass({
		render: function() {
			return (
				<div>hjkfhsdk</div>
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