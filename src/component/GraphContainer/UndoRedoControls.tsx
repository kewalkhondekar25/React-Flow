import React, { useState } from 'react'
import { RedoLogo, UndoLogo } from '../../lib/logo'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { changeToPrevColor, changeToNewColor } from '../../features/graphSlice'

const UndoRedoControls = ({id}: {id: any}) => {
  
  const dispatch = useAppDispatch();
  const oldColorNode = useAppSelector(state => state.graph.nodes.find(item => item.id === id));
  const [undoCount, setUndoCount] = useState(0);
  const old = oldColorNode?.data.oldColor || "";
  const newOne = oldColorNode?.data.newColor || "";
  const isDissable = oldColorNode?.data.oldColor;
  
  return (
    <div>
      <button disabled={isDissable === null ? true : false} onClick={() => {
        setUndoCount(prev => prev + 1);
        dispatch(changeToPrevColor({id, oldColor: old, i: undoCount}));
      }}>
        <UndoLogo/>
      </button>
      <button disabled={isDissable === null ? true : false} onClick={() => dispatch(changeToNewColor({id, newColor: newOne}))}>
        <RedoLogo/>
      </button>
    </div>
  )
}

export default UndoRedoControls