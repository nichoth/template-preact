import { render } from 'preact'
import { htm } from 'htm'
var html = htm.bind(h)

function Example (props) {
    return html`<div>example</div>`
}

render(<Example />, document.getElementById('content'))

