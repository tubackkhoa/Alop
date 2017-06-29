import models from 'models'
import {cryptPassword,comparePassword} from 'passport/password-crypto'

cryptPassword('alop@2016').then(encrypted_password=>
  models.authors.create({
    email:'admin@alop.vn',
    name: 'Alop Admin',
    encrypted_password, 
  })
)