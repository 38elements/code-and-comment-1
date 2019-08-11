import { h, Component } from 'preact'


type Props = {
  lineNumber: number;
  content: string;
  edit: Function;
  editable: boolean;
  isHidden: boolean;
  toggleHidden: Function;
  setMarkedLineNumber: Function;
  scrollToMarkedLineNumber: Function;
}


class Code extends Component<Props> {
  constructor(props) {
    super(props)
    this.keydownHandler = this.keydownHandler.bind(this)
  }

  keydownHandler(event: KeyboardEvent) {
    event.stopPropagation()
    // g
    if (event.keyCode === 71) {
      this.props.scrollToMarkedLineNumber()
    }
    // m
    else if (event.keyCode === 77) {
      this.props.setMarkedLineNumber(event)
    }
  }

  mouseoverHandler(event: MouseEvent) {
    event.stopPropagation()
    // @ts-ignore
    event.currentTarget.focus()
  }

  mouseoutHandler(event: MouseEvent) {
    event.stopPropagation()
    // @ts-ignore
    event.currentTarget.blur()
  }

  render({
    lineNumber,
    content,
    edit,
    editable,
    isHidden,
    toggleHidden
  }) {
    const numberClassName = isHidden ? 'number hidden' : 'number'
    return (
      <div
        tabIndex={ lineNumber }
        data-line-number={ lineNumber }
        className="cc-code"
        onClick={ editable ? edit : null }
        onKeyDown={ this.keydownHandler }
        onMouseOver={ this.mouseoverHandler }
        onMouseOut={ this.mouseoutHandler }
      >
        <span
          className={ numberClassName }
          onClick={ toggleHidden }
        >
          { lineNumber }
        </span>
        <span className="content">
          { content }
        </span>
      </div>
    )
  }
}

export default Code