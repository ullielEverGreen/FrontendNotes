function instanceOf(left, right) {
  let proto = Object.getPrototypeOf(left)
  let protoType = right.protoType

  while(true) {
    if (!proto) return false
    if (proto === protoType) return true

    proto = Object.getPrototypeOf(proto)
  }
}