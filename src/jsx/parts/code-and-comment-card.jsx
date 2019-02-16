import { h, Component } from 'preact'

import Button from './button.jsx'


class CodeAndCommentCard extends Component {
  constructor(props) {
    super(props)
    this.state = { isDeleting: false }
    this.deleting = this.deleting.bind(this)
    this.cancel = this.cancel.bind(this)
    this.deleteOne = props.deleteOne.bind(null, props.codeAndComment.id)
    this.edit = props.edit.bind(null, props.codeAndComment.id)
  }

  deleting() {
    this.setState({ isDeleting: true })
  }

  cancel() {
    this.setState({ isDeleting: false })
  }

  shouldComponentUpdate({ codeAndComment }, { isDeleting }) {
    return !(
      this.state.isDeleting === isDeleting
      && this.props.codeAndComment.id === codeAndComment.id
      && this.props.codeAndComment.updated_at.getTime() === codeAndComment.updated_at.getTime()
    )
  }

  render({ codeAndComment }, { isDeleting }) {
    let controls
    if (isDeleting) {
      controls = (
        <div className="controls">
          <div className="message">This code and comment is removed.</div>
          <Button onClick={ this.deleteOne }>OK</Button>
          { ' ' }
          <Button onClick={ this.cancel }>Cancel</Button>
        </div>
      )
    }
    else {
      controls = (
        <div className="controls">
          <Button onClick={ this.edit }>Edit</Button>
          { ' ' }
          <Button onClick={ this.deleting }>Delete</Button>
        </div>
      )
    }
    return (
      <div className="cc-code-and-comment-card">
        <div>{ codeAndComment.repository }</div>
        <div>{ codeAndComment.path }</div>
        <div>{ codeAndComment.title }</div>
        <div>{ codeAndComment.updated_at.toLocaleString() }</div>
        { controls }
      </div>
    )
  }
}


export default CodeAndCommentCard