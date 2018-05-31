import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import keyframes from "popmotion/animations/keyframes";
import styler from "stylefire";

const defaultBoxStyle = {
  width: 100,
  height: 100
};

export default class ShimBox extends React.Component {
  constructor(props) {
    super(props);
    this.$box = React.createRef();
  }
  static propTypes = {
    loop: PropTypes.number,
    backgrounds: PropTypes.arrayOf(PropTypes.string),
    duration: PropTypes.number,
    style: PropTypes.object,
    className: PropTypes.string
  };
  static defaultProps = {
    loop: Infinity,
    backgrounds: ["#bbb", "#ddd", "#bbb"],
    duration: 3000,
    style: defaultBoxStyle,
    className: ""
  };
  componentDidMount() {
    const boxStyler = styler(this.$box.current);
    const { loop, backgrounds, duration, style } = this.props;
    this.keyframes = keyframes({
      values: backgrounds.map(d => ({ backgroundColor: d })),
      duration,
      loop
    }).start(keyStyle => {
      const newStyle = { ...style, ...keyStyle };
      boxStyler.set(newStyle);
    });
  }
  componentWillUnmount() {
    this.keyframes.stop();
  }
  render() {
    const props = this.props;
    return (
      <div
        ref={this.$box}
        className={classnames("placeholder-box", props.className)}
        style={{ ...defaultBoxStyle, ...props.style }}
      />
    );
  }
}
