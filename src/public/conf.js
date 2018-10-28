let HOST
if(process.env.NODE_ENV === 'development') {
  HOST = 'http://localhost:3000'
} else {
  HOST = 'http://localhost:3000'
}

export {
  HOST,
}
