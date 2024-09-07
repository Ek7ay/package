<template>
  ajax
</template>

<script setup>
const xhr = new XMLHttpRequest()
xhr.open('get', '/data.json')
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4) {
    if(xhr.status === 200) {
      console.log(xhr.responseText)
    } else {
      console.log('其他情况')
    }
  }
}
xhr.send(null)


</script>

























