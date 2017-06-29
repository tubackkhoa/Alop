import models from 'models'

// Create the tables:
models.posts.sync()
models.projects.sync()
models.authors.sync()

// Force the creation!
// this will drop the table first and re-create it afterwards
// models.projects.sync({force: true}) 