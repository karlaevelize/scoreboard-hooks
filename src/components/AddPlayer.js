import React, { useState } from "react";
import PropTypes from "prop-types";
import "./AddPlayer.css"

export default function AddPlayer(props) {

    const [name, setName] = useState("")

    function handleSubmit(event){
      event.preventDefault()
      props.addPlayer(name)
    //   this.setState({ name: ""})
    setName("")
    }

  
    return (
      <div className="add-player">
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                onChange={event => {setName(event.target.value)}}
                value={name}
              />
            </label>
            <input type="submit" value="Add" />
          </form>
     </div>
      )
    }

    AddPlayer.propTypes = {
        addPlayer: PropTypes.func.isRequired
    }