import { h } from 'preact'
import { connect } from 'unistore/preact'

export function onChange(event) {
  const number = event.target.value
  if (number === '0') {
    return
  }
  const selector = `.cc-line:nth-child(${number})`
  document.querySelector(selector).scrollIntoView({ center: true })
}

export function CommentList({ comments, lines }) {
  return (
    <select className="cc-comment-list" onChange={ onChange }>
      <option value="0">Select comment</option>
      {
        Object.keys(comments).map((number) => {
          number -= 0
          return (
            <option value={ number + 1 } key={ number }>
              { number + 1 }: { lines[number].trim().substr(0, 100) }
            </option>
          )
        })
      }
    </select>
  )
}


export default connect(['comments', 'lines'])(CommentList)