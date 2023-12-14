import React from 'react'

const converttoupper = (word) =>{
    const lokapal = word.toLowerCase();
    return lokapal.charAt(0).toUpperCase() + lokapal.slice(1);

}

function Alert(props) {
  return (
    props.alert && <div class={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
        <strong>{converttoupper(props.alert.typ)}</strong>:{props.alert.msg}
          </div>
  )
}

export default Alert
