import React, { useEffect , useState } from 'react'
import BilingInformationItem from '../BilingInformationItem/BilingInformationItem'




function BilingInformation() {


  const [BilingInformationItemInfos , setBilingInformationItemInfos] = useState([])
  useEffect(() => {
    fetch('https://cmscms-a-default-rtdb.firebaseio.com/BilingInformationItemInfos.json')
    .then(res => res.json())
    .then(res => setBilingInformationItemInfos(Object.entries(res)[0][1]))
  }, [])

  return (
    <div className="same-box-shdow p-4">
      <div className=' transaction-box bg-white'>
        <h2 className='title '>Your Transaction's</h2>
      </div>
      <div className="items">
        {BilingInformationItemInfos.map(item => (
        <BilingInformationItem {...item} key={item.VATNumber} />
        ))}
      </div>
    </div>
  )
}

export default BilingInformation