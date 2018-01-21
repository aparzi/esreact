import React from 'react'
import PropTypes from 'prop-types'

export default class CustomInput extends React.Component {

    getLabelAddon() {
        if(this.props.label.length > 0)
            return <div className="input-group-addon" style={this.props.style}>{this.props.label}</div>

        return <div></div>
    }

    render() {
        var labelAddon = this.getLabelAddon();

        return (
          <div className="input-group">
              {labelAddon}
              <br />
              <input
                type={this.props.type}
                value={this.props.value}
                placeholder={this.props.placeholder}
                className="form-control"
                onChange={this.props.onChange.bind(this)}
              >
              </input>
          </div>
        );
    }
}

CustomInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
  ]).isRequired,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  label:PropTypes.string
};

CustomInput.defaultProps = {
  type: "text",
  label: ""
};