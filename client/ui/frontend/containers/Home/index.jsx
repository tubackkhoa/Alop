import React from 'react'
import { Link } from 'react-router'

export default (props) => (
  <div className='frontend'>
    <div className='vertical-center-block container'>

      <div className='row'>
        <div className='col-sm-6 text-right'>
          <img width='150' src='/images/alop-icon.png' />
          <div className='version mt-20'>Alop 1.0</div>
        </div>
        <div className='col-sm-6 text-left pl-20'>
          <ul className='list-app mt-40'>
            <li>Ứng dụng</li>
            <li><Link to="/posts">Cứu trợ xe</Link></li>
            <li><a href='#'>- Mua bán lốp cũ, mới</a></li>
            <li><a href='#'>- Vận tải 2 chiều</a></li>
          </ul>
        </div>
      </div>

      <div className='row mt-40'>
        <div className='col-sm-6 text-right'>
          <a href='https://itunes.apple.com/vn/app/alop-cuu-ho-xe-mua-ban-lop/id1194869400?mt=8'><img width='150' src='/images/appstore.png' /></a>
        </div>
        <div className='col-sm-6 text-left pl-20'>
          <a href='https://play.google.com/store/apps/details?id=com.app.alop'><img width='150' src='/images/google-store.png' /></a>
        </div>
      </div>      
    </div>  

    <div className='footer text-center'>
      Copyright © 2016 Alop. All rights reserved. Development by LN Studio
    </div>

  </div>
)






