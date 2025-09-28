const s = new Set()

s.add(1)
s.add({a: 'b'}).add({a: 'c'})

console.log(s.has({a: 'b'}))