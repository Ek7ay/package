// 1获取字符串中出现最多的字母和该字母的次数
export const getMaxCount = (str) => {
  const json = {}
  for (let i = 0; i < str.length; i++) {
    if (!json[str.charAt(i)]) {
      json[str.charAt(i)] = 1
    } else {
      json[str.charAt(i)]++;
    }
  }
  let maxCountChart = '';
  let maxCount = 0;
  for (let key in json) {
    if (json[key] > maxCount) {
      maxCount = json[key]
      maxCountChart = key
    }
  }

  return '出现最多的字符' + maxCountChart + '出现的次数为' + maxCount
}

//2, 获取字符串中第一个不重复字符的下标  百度面试题
export const firstSubscript = (str) => {
  const json = {}
  for (let i = 0; i < str.length; i++) {
    if (!json[str.charAt(i)]) {
      json[str.charAt(i)] = 1
    } else {
      json[str.charAt(i)]++
    }
  }
  const arr = []
  for (let key in json) {
    if (json[key] == 1) {
      arr.push(key)
    }
  }
  let position = str.length
  arr.map(item => {
    let posi = str.split('').indexOf(item)
    if (posi < position) {
      position = posi
    }
  })

  return '第一个不重复字符的位置是' + position
}

//5， 阶乘    n! = n * (n-1) * (n-2) ... * 1
// 5! = 4 *3 * 2 * 1
export const factorial = (n) => {
  if (n === 1) return 1
  return n * factorial(n - 1)
}

//6, 防抖
export const debounce = (fn, delay = 500) => {
  let timer = null
  return function () {
      if (timer) {
          clearTimeout(timer)
      }

      timer = setTimeout(() => {
          fn()
          timer = null
      }, delay)
  }
}


//7,处理地址栏url
export const urlDeal = () => {
  let url = location.search
  const arr = url.substring(1).split('&')
  const json = {}
  arr.map(item => {
    json[item.split('=')[0]] = item.split('=')[1]
  })
  return json
}


//8,数组合并同类项
export const mergeFn = (arr) => {
  const keys = [... new Set(arr.map(item => item.name))]
  const re = keys.map(item => {
    return  {
      name: item,
      val: arr.filter(res => res.name === item).reduce((sum, curVal) => {
        return sum.concat(curVal.val)
      }, [])
    }  
  })
  return re
}


//9,深拷贝
export const deepClone = (obj = {}) => {
  if(typeof obj !== 'object' || obj == null) {
    return obj
  }

  let res;
  if(obj instanceof Array) {
    res = []
  } else {
    res = {}
  }

  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      res[key] = deepClone(obj[key]) 
    }
  }

  return res;
}

//10
export function pick() {
  const arr = []
  Array.prototype.forEach.call(arguments, item => {
    arr.push(item)
  })
  const obj = arr.shift()
  const res = {}
  if(arr.length) {
    arr.map(item => {
      res[item] = obj[item]
    })
  }
  return res;
}

// 11
export const randomFn = () => {
  const arr = []
  while(arr.length < 10) {
    let b = Math.floor(Math.random() * 50) + 1;
    if(!arr.includes(b)) {
      arr.unshift(b)
    }
  }
  return arr
}

//12 掩码

export function mask(num = '') {
  let str = num.toString();
  const arr = []
  for(let i = 0; i < str.length; i++ ) {
    if( i > 2 && i < 7) {
      arr.push ('*')
    } else {
      arr.push(str.charAt(i))
    }
  }
  return arr.join('')
}

// export function mask(str = '') {
//   let res = str.toString().split('')
//   res.splice(3, 4, '*', '*', '*', '*')
//   return res.join('')
// }


// 14搜索关键字，返回完整路径
export function search(keyword, treedata) {
  const result = []

  const exec = (data, parentPath) => {
    const currentPath = parentPath.concat(data.label)
    if(data.label.search(keyword) > -1) {
      result.push(currentPath)
    }
    if(Reflect.has(data, 'children')) {
      const children = data.children
      children.forEach(item => {
        exec(item, currentPath)
      });
    }
  }

  exec(treedata, [])
  return result
}




















