module.exports = function check(str, bracketsConfig) {
  if(str.length % 2 == 1) return false

  let brackets = []

  for(let i = 0; i < bracketsConfig.length; i++) {
    const start = bracketsConfig[i][0]
    const end = bracketsConfig[i][1]

    if(start == Number(start)) {
      brackets.push(`${start}${end}`)
    } else {
      brackets.push(`\\${start}\\${end}`)
    }
    
  }

  brackets = brackets.join('|')
  let newStr = str

  for(let i = 0; i < str.length / 2; i++) {
    newStr = newStr.replace(new RegExp(brackets, 'g'), '')
  }
  
  return !Boolean(newStr)
}