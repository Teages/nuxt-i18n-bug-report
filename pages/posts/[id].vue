<script setup lang="ts">
const route = useRoute()
const router = useRouter()

async function test() {
  console.error(await router.push({
    name: 'index'
  }))
}
</script>

<template>
  <div>
    {{ route.params.id }}
    <button @click="test">Test</button>
  </div>
</template>