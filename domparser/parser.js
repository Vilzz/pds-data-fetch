import xmldom from 'xmldom'

const DOMParser = xmldom.DOMParser
const parser = new DOMParser()

const getParsedDOMText = (domstr) => {
  let dom = parser.parseFromString(domstr, 'text/html')
  let text = ''
  walkDOM(dom, function (node) {
    if (node.tagName === 'BR') {
      text += node.outerHTML
    } else if (node.nodeType === 3) {
      // Text node
      text += node.nodeValue
    }
  })
  return text
}

const walkDOM = (node, func) => {
  func(node)
  node = node.firstChild
  while (node) {
    walkDOM(node, func)
    node = node.nextSibling
  }
}

export default getParsedDOMText
