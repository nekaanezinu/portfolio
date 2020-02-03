<template>
  <div class="project-stack-item">
    <div class="item-text">
      {{ mappedItem.text }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      baseItems: [
        {
          name: 'rails',
          text: 'Rails'
        },
        {
          name: 'ubuntu',
          text: 'Ubuntu'
        },
        {
          name: 'aws',
          text: 'AWS'
        },
        {
          name: 'nginx',
          text: 'nginx'
        },
        {
          name: 'c#',
          text: 'C#'
        },
        {
          name: '.netcore',
          text: '.NETCore'
        },
        {
          name: 'windows',
          text: 'Windows'
        },
        {
          name: 'azure',
          text: 'Azure'
        }
      ]
    };
  },
  computed: {
    mappedItem() {
      return this.baseItems.find(item => item.name == this.item);
    }
  }
}
</script>

<style>
.project-stack-item {
  font-weight: 300;
  font-size: 0.8rem;
  color: #fff;
  background-color: #26a69a;
  border-radius: 2px;
  padding: 3px 6px;
  margin-right: 5px;
}
</style>
