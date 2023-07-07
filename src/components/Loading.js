import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

function Loading({loading}) {
  return (
    <div>
        {loading ? <CircularProgress /> : null}
    </div>
  )
}

export default Loading
