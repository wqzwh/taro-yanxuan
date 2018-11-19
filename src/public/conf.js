let HOST
if(process.env.NODE_ENV === 'development') {
  HOST = 'http://localhost:3000/api'
} else {
  HOST = 'http://localhost:3000/api'
}

export {
  HOST,
}
