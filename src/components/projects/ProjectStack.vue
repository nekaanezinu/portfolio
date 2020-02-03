<template>
  <div class="project-stack">
    <project-stack-item
      v-for="(item, index) in stack"
      :key="`project-stack-item-${index}`"
      :item="item"
    />
  </div>
</template>

<script>
import ProjectStackItem from './ProjectStackItem.vue';

export default {
  props: ['stack'],
  components: {
    ProjectStackItem
  }
}
</script>

<style lang="scss">
.project-stack {
  width: 100%;
  display: flex;
}
</style>
