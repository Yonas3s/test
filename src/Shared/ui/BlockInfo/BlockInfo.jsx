import './BlockInfo.css'

const BlockInfo = ({title, description}) => {
  return (
    <div className='block-info'>
      <h3 className='block-info__title'>{title}</h3>
      <p className='block-info__description'>{description}</p>
    </div>
  )
}

export default BlockInfo
