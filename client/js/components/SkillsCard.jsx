import React, { Component } from 'react';

export default class SkillsCard extends Component {

  constructor({ skills, selectedSkill, ...props }) {
    super()
    this.state = {
      skills,
      selectedSkill
    }
  }

  render() {
    let state = this.state
    
    return (
      <div className="card-one-img">
        <div className="row">
          <div className="col-1-of-4">
            <ul className="list-of-things list-items paragraph">
              {
                Object.keys(state.skills).map( (skillId) => {
                  return (
                    <li key={state.skills[skillId].name} value={skillId} className="list-of-things__thing" alt={state.skills[skillId].name} onClick={
                      (e) => {
                        this.setState( {selectedSkill: state.skills[e.target.value] })
                      }
                    }>
                      {state.skills[skillId].name}
                    </li>
                  )
                })
              }
            </ul>
          </div>

          <div className="col-3-of-4">
            <div className="card-one-img__img-box">
              <div className="row">
                <div className="col-1-of-2">
                  <img className="card-one-img__photo" src={state.selectedSkill.logoURL} alt={`${state.selectedSkill.name} logo`} />
                </div>
                <div className="col-1-of-2">
                  <div className="card-one-img__text paragraph">
                    {state.selectedSkill.description}
                  </div>
                  <br />
                  {state.selectedSkill.exposure}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }

}

