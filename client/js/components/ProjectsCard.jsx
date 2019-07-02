import React, { Component } from 'react';


export default class ProjectCard extends Component {

  constructor({ projects, selectedProject, ...props }) {
    super()
    this.state = {
      projects,
      selectedProject
    }
  }

  componentDidMount() {
    document.getElementsByClassName('card-two-imgs__photo')[0].style.padding = '0'
      // document.getElementsByClassName('card-two-imgs__photo')[0].onMouseEnter(()=>{

    //   document.getElementsByClassName('card-two-imgs__photo')[0].style.padding = '8rem'
    // })

    // document.getElementsByClassName('card-two-imgs__photo')[0].onMouseLeave(()=>{
    //   document.getElementsByClassName('card-two-imgs__photo')[0].style.padding = '0'
    // })
  }

  render() {
    let state = this.state

    return (
      <div className="card-two-imgs">
        <div className='row'>
          <div className="col-3-of-4">
            <div className="card-two-imgs__img-box">
              <div className="row">
                <div className="col-1-of-2">
                  <div className="UTILITY-CLASS-FOR-MAC-STENCIL" alt="Macbook Computer">
                    <img src={state.selectedProject.pics[0]} alt="Website Snapshot" className="card-two-imgs__photo card-two-imgs__photo--1" />
                  </div>
                </div>
                <div className="col-1-of-2">
                  <div className="paragraph">{state.selectedProject.description}</div>
                </div>
              </div>

              <div className="row">
                <div className="col-1-of-2">
                  <h1 className="heading-primary align-text__bottom">{state.selectedProject.name}</h1>
                </div>
                <div className="col-1-of-2">
                  <img src={state.selectedProject.pics[1]} alt="Website Snapshot" className="card-two-imgs__photo card-two-imgs__photo--2" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-1-of-4">

            <ul className="list-of-things list-items">
              {
                Object.keys(state.projects).map((projectId) => {
                  return (
                    <li key={state.projects[projectId].name + state.projects[projectId].id} value={projectId} className="list-of-things__thing" alt={state.projects[projectId].name} onClick={
                      (e) => { this.setState({ selectedProject: state.projects[e.target.value] }) }
                    }>
                      {state.projects[projectId].name}
                    </li>
                  )
                })
              }
            </ul>
          </div>

        </div>
      </div>
    )
  }
}

  // ProjectCard.propTypes = {
  //   projects: PropTypes.object.isRequired
  // }