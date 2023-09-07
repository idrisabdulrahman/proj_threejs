// import React from 'react'
import { useSnapshot } from 'valtio';
import PropTypes from "prop-types"
import state from '../store';
import { getContrastingColor } from '../config/helpers';

const CustomButton = ({ type, title, handleClick, customStyles }) => {
  const snap = useSnapshot(state);
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if(type === "outline") {
      return {
        borderWidth: "2 px",
        borderColor: snap.color,
        color: snap.color,
      };
    }
  };
  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md  ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};


CustomButton.propTypes={
  handleClick:PropTypes.func,
  customStyles: PropTypes.string,
  type: PropTypes.oneOf(['filled', 'outline']).isRequired,
  title: PropTypes.string.isRequired,
}

export default CustomButton