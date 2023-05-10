import React from 'react'
import { FidgetSpinner } from 'react-loader-spinner'

const Loader = () => {
  return (
    <FidgetSpinner
        visible={true}
        height="50"
        width="50"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        ballColors={['#ff0000', '#00ff00', '#0000ff']}
        backgroundColor="#F4442E"
    />
  )
}

export default Loader