import { h } from 'preact'
import { connect } from 'unistore/preact'

import actions from '../actions/view.jsx'
import Line from '../parts/line.jsx'
import Header from '../parts/header.jsx'
import Navigator from '../parts/navigator.jsx'


function View({ lines, comments, path, back, getFile }) {
  let content;
  if (lines.length) {
      content = [
        (<Navigator
          key={'navigator'}
          leftLabel={'<-Edit'}
          leftClick={back}
        />),
        <div key={'path'}>{ path }</div>,
        (<div key={'file'} className="file">
          {lines.map((code, index) => <Line 
            key={index}
            code={code}
            comment={comments[index]}
            index={index}
            editable={false}/>
          )}
        </div>)
      ];
      setTimeout(() => {
        document.querySelector('.comment').scrollIntoView({})
      }, 0)
  }
  else {
    getFile(location.hash.substring(12))
    content = 'Loading'
  }
  return (
    <div className="view center">
      <Header />
      {content}
    </div>
  )
}


export default connect(['lines', 'comments', 'path'], actions)(View)