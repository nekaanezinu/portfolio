<template>
  <div class="project">
    <div class="project-title">{{ project.name }}</div>
    <div class="project-body">
      <div class="project-preview">
        <img class="project-image" :src="project.image" />
        <project-stack :stack="project.stack" />
        <p>Technologies used:</p>
        <ul class="project-tech">
          <li
            v-for="(item, index) in project.technologies"
            :key="`project-tech-item-${index}`"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <div class="project-description">
        <div class="description-item">
          Site:
          <a v-if="project.site" :href="project.site">{{ project.site }}</a>
          <span v-else>N/A</span>
        </div>
        <div class="description-item">Period: <span>{{ project.period }}</span></div>
        <div class="description-summary">{{ project.description }}</div>
        <p>Notable features I worked on:</p>
        <ul class="project-features">
          <li
            v-for="(item, index) in project.features"
            :key="`project-features-item-${index}`"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectStack from './ProjectStack.vue';

export default {
  props: ['project'],
  components: {
    ProjectStack
  }
}
</script>

<style lang="scss">
.project {
  margin-bottom: 10px;

  .project-title {
    font-size: 20px;
    font-weight: 700;
  }

  .project-body {
    display: flex;
    width: 100%;
    margin-top: 10px;

    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }

    .project-preview {
      width: 30%;

      @media screen and (max-width: 1000px) {
        width: 100%;
      }

      .project-image {
        max-width: 100%;
        border-radius: 3px;
      }
    }

    .project-description {
      width: calc(70% - 20px);
      padding: 0 10px;

      @media screen and (max-width: 1000px) {
        width: calc(100% - 20px);
      }

      .description-item {
        margin-bottom: 10px;
        font-weight: 700;
      }
    }
  }
}
</style>
