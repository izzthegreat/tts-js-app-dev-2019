import React, {Component} from 'react'
import propTypes from 'prop-types'
import '../css/Note.css'

const GENERIC_NOTE_TITLE = "New Note Title"
const GENERIC_NOTE_BODY = "New Note Body"

class Note extends Component {
    constructor () {
        super()
    }

    componentWillMount() {
        this.state = {
            id: Date.now(),
            title: GENERIC_NOTE_TITLE,
            body: GENERIC_NOTE_BODY,
            editMode: false
        }
    }

    handleEdit() {
        this.setState({
            editMode: true
        })
    }

    handleSave() {
        this.setState({
            title: this.refs.titleContent.value,
            body: this.refs.bodyContent.value,
            editMode: false
        })
    }

    handleDelete(){
        this.props.deleteHandler(this.props.id)
    }
    
    render() {
        let titleElement, bodyElement, buttonArea
        if (this.state.editMode) {
            titleElement = <textarea ref = "titleContent" className = "title-textarea" defaultValue = {this.state.title}/>
            bodyElement = <textarea ref = "bodyContent" className = "body-textarea" defaultValue = {this.state.body}/>
            buttonArea = <div><button className="btn btn-info" onClick={this.handleSave.bind(this)}>Save</button>
            </div>
        } else {
            titleElement = <h5>{this.state.title}</h5>
            bodyElement = <p>{this.state.body}</p>
            buttonArea = <div>
                <button className="btn btn-warning" onClick={this.handleEdit.bind(this)}>Edit</button>
                <button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete</button>
            </div>
        }

        return(
            <div className="col-sm-4">
                <div className="card card-view">
                    <div className="card-body">
                        {titleElement}
                        {bodyElement}
                        {buttonArea}
                    </div>
                </div>
            </div>
        )
    }
}

Note.defaultProps = {
    title: "Title",
    body: "Body"
}

Note.propTypes = {
    title: propTypes.string,
    body: propTypes.string
}

export default Note