app.reactEmailTemplate = function(){
	return React.renderComponentToString(NewComponent(null));
}

var emailTemplate = React.createClass({

  // getInitialState: function() {
  //   return {items: this.props.items, disabled: true}
  // },

  // componentDidMount: function() {
  //   this.setState({disabled: false})
  // },

  // handleClick: function() {
  //   this.setState({
  //     items: this.state.items.concat('Item ' + this.state.items.length)
  //   })
  // },

  render: function() {

    return React.createElement("center", null, 
    	React.createElement("div", null, "Hello World")
    );
  },
})

