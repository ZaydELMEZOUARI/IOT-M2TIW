var Switch = React.createClass({ displayName: "Switch",
  getInitialState: function () {
    return {
      time: 'night' };

  },
  handleClick: function () {
    if (this.state.time === 'night') {
      this.setState({ time: 'day' });
    } else {
      this.setState({ time: 'night' });
    }
  },
  render: function () {
    return /*#__PURE__*/(
      React.createElement("div", { className: "Switch", "data-time": this.state.time }, /*#__PURE__*/
      React.createElement(Toggle, { onClick: this.handleClick, time: this.state.time })));


  } });


var Toggle = React.createClass({ displayName: "Toggle",
  render: function () {
    return /*#__PURE__*/(
      React.createElement("div", { onClick: this.props.onClick, "data-time": this.props.time, className: "Toggle" }, /*#__PURE__*/
      React.createElement(Button, null)));


  } });


var Button = React.createClass({ displayName: "Button",
  render: function () {
    return /*#__PURE__*/React.createElement("div", { className: "Button" });
  } });


ReactDOM.render( /*#__PURE__*/
React.createElement(Switch, null),
document.getElementById('switch'));


TweenLite.defaultEase = Power1.easeInOut;

var tween,
		opacity = false,
		motionPathMoon = MorphSVGPlugin.pathDataToBezier('#outline_x5F_down', {align: '#moon'}).reverse(),
		motionPathSun = MorphSVGPlugin.pathDataToBezier('#outline_x5F_up', {align: '#sun'}).reverse();

var strokeUp = "#outline_x5F_up";
var strokeDown = "#outline_x5F_down";

TweenMax.set('#sun', {xPercent: -50, yPercent: -50});

TweenMax.set('#moon', {xPercent: -50, yPercent: -50, autoAlpha: 0});

TweenMax.to("#sun", 3, {bezier:{values:motionPathSun, type:"cubic"}});
TweenMax.to("#sun", 0.1, {delay: 3, autoAlpha: 0});

TweenMax.to("#moon", 0, {delay: 3, autoAlpha: 1});
TweenMax.to("#moon", 3, {delay: 3, bezier:{values:motionPathMoon, type:"cubic"}});

TweenLite.set(strokeUp, { scaleX: -1, transformOrigin: "center center", drawSVG: 0 });

TweenLite.set(strokeDown, { scaleX: -1, transformOrigin: "center center", drawSVG: 0 });

TweenLite.to(strokeUp, 3, {drawSVG: true });
TweenLite.to(strokeUp, 0.2, {delay: 3, autoAlpha: 0 });

TweenLite.to(strokeDown, 3, {delay: 3, drawSVG: true });