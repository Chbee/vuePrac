const camelCase = str => {
    const string = str.toLowerCase().replace(/[^A-Za-z0-9]/g, ' ').split(' ')
      .reduce((result, word) => result + capitalize(word.toLowerCase()))
    return string.charAt(0).toLowerCase() + string.slice(1)
 }

const constMaker = (...keys) => {
    if (!keys || keys.length <= 0) { return {} }
    if (Array.isArray(keys[0])) { keys = keys[0] }
    const con = {}
      // console.log(keys)
    keys.forEach((key) => { con[key] = camelCase(key) })
    return con
}

export const ViewType = constMaker(
    'NEWS',
    'ASK',
    'JOBS'
)

