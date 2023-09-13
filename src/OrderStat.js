
import { ShoppingOutlined } from '@ant-design/icons'
import{RiseOutlined} from'@ant-design/icons'
import React from 'react'

const OrderStat = ({title,value}) => {
  return (
    <div>
      <div className="order-stat">
      <h3>{title}<ShoppingOutlined/></h3>
      <p><RiseOutlined />{value}</p>
    </div>
    </div>
  )
}

export default OrderStat
