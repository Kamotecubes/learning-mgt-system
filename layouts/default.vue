<template>
  <div>
    <UCard :ui="ui" >
      <div class="flex flex-row gap-4 w-full">
        <div>
          <UButton @click="isOpen = true" icon="i-heroicons-bars-3-20-solid"></UButton>
        </div>
        <div>
          <p class="text-2xl">{{ pageName }}</p>
        </div>

      </div>
      
    </UCard>

    <USlideover v-model="isOpen" :side="'left'">
      <UCard @click="isOpen = false" class="flex flex-col flex-1" :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <h1>Menu</h1>
        </template>

        <UVerticalNavigation :links="links"/>

  
      </UCard>
    </USlideover>
    <slot />
  </div>
</template>

<script lang="ts" setup>

const route = useRoute()
const routeMap: Record<string, string> = {
  'announcements': 'Announcements',
  'my-subjects': 'My Subjects'
}
const pageName = computed(() => routeMap[route.name])
const ui = /*ui*/ {
  background: 'bg-white dark:bg-slate-900'
}
const isOpen = ref(false)

const links = [{
  label: 'Announcements',
  icon: 'i-heroicons-home',
  to: '/announcements'
}, {
  label: 'My Subjects',
  icon: 'i-heroicons-chart-bar',
  to: '/my-subjects'
}, {
  label: 'Command Palette',
  icon: 'i-heroicons-command-line',
  to: '/navigation/command-palette'
}]

</script>

<style>

</style>

