import './LinkButton.css'

const LinkButton = ({href, text}) => {
  return (
    <a href={href} className='link-button'>
      {text} &#8594;
    </a>
  )
}

export default LinkButton
