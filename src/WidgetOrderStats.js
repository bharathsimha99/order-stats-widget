import React from 'react'
import data from "../src/data.json"
import OrderStat from './OrderStat';

const WidgetOrderStats = () => {
    const {stats}=data;
  return (
    <div>
      <div className="widget-order-stats">
      {stats.map((stat, index) => (
        <OrderStat
          key={index}
          title={stat.title} 
          value={stat.value}
          
        />
      ))}
    </div>
    </div>
  )
}

export default WidgetOrderStats
