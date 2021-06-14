import React, { Component } from "react";

class Modal extends Component {
  // state = {};

  componentDidMount() {
    document.querySelector("body").classList.add("scroll_hidden");
  }

  componentWillUnmount() {
    document.querySelector("body").classList.remove("scroll_hidden");
  }

  render() {
    const { showClose, onClose, style, className } = this.props;
    return (
      <div className={`modal_overlay ${className}`}>
        <div className="modal_enclose" style={style}>
          {showClose ? (
            <button className="close_btn" onClick={onClose}>
              &times;
              {/* <img src="/img/close.png" alt="" /> */}
            </button>
          ) : null}
          <div className="modal_outer">
            <div className="custom_modal">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
