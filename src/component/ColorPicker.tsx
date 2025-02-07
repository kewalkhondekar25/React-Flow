import React, { useState } from 'react'
import { GithubPicker } from 'react-color';
import { CloseLogo } from '../lib/logo';
import { useAppDispatch } from '../store/hooks';
import { closeColor } from '../features/colorSlice';
import { changeNodeColor, setOldColor, setNewColor } from '../features/graphSlice';

const ColorPicker = ({id, oldColor}: {id: any, oldColor: string}) => {

  const [color, setColor] = useState("#ff0000");
  const dispatch = useAppDispatch();
  

  return (
    <div>
      <div onClick={() => dispatch(closeColor())}>
        <CloseLogo/>
      </div>
      <GithubPicker
        color={color}
        onChangeComplete={(color) => {
          setColor(color.hex);
          dispatch(setOldColor({id, oldColor}));
          dispatch(changeNodeColor({id, color: color.hex}));
          dispatch(setNewColor({id, newColor: color.hex}))
        }}
      />
    </div>
  )
}

export default ColorPicker