<template>
  <div class="projects">
    <div class="header">Projects</div>
    <div class="project-list">
      <project
        v-for="(project, index) in projects"
        :key="`project-${index}`"
        :project="project"
      />
    </div>
  </div>
</template>

<script>
import Project from './projects/Project.vue'

export default {
  components: {
    Project
  },
  data() {
    return {
      projects: [
        {
          name: 'FjordHub',
          period: 'Q1 2019 - Present',
          image: '/images/previews/fh.png',
          site: 'https://fjordhub.com',
          description: 'Started out as just a time tracking and reporting web application. Quickly evolved into time tracking, planning and task management system.',
          stack: ['rails', 'nginx', 'ubuntu', 'aws'],
          technologies: [
            'vue',
            'jQuery',
            'MySQL',
            'Sidekiq',
            'Sendgrid',
            'Bootstrap',
            'Reform',
            'grape',
            'swagger',
            'git',
            'SASS',
            'Pundit'
          ],
          features: [
            'API based time logging',
            'Multi-tenancy based data management',
            'Calendar based time logging and planning',
            'Event based notifications',
            'Kanban-style task management',
            'Various data import solutions',
            'CRUD actions in administration panel'
          ]
        },
        {
          name: 'H5 Property photo ordering system',
          period: 'Q1 2017 - Q2 2019',
          image: '/images/previews/pa.png',
          site: 'https://h5foto.no',
          description: 'Joined the project just after starting to learn Rails. The system handles order processing - from booking of a photographer to picture delivery.',
          stack: ['rails', 'nginx', 'ubuntu', 'aws'],
          technologies: [
            'vue',
            'jQuery',
            'MySQL',
            'Sidekiq',
            'Sendgrid',
            'Bootstrap',
            'Reform',
            'grape',
            'swagger',
            'git',
            'SASS',
            'Pundit',
            'fabric.js'
          ],
          features: [
            'Configurable event based notification system',
            'Various integrations with other systems (AgileCRM, Poweroffice, Vitec, Webmegler, etc.)',
            'Custom virtual staging preview with farbric.js',
            'Various customer based feature toggles',
            'Dynamic image versioning and processing',
            'CRUD actions in administration panel'
          ]
        },
        {
          name: 'Eiendomsmeglerskolen',
          period: 'Q1 2017 - Present',
          image: '/images/previews/ems.png',
          site: 'https://eiendomsmeglerskolen.no',
          description: 'Video education platform used for real estate agent qualification. Started out as QA, moved on to maintaining after 3 months.',
          stack: ['rails', 'nginx', 'ubuntu', 'aws'],
          technologies: [
            'vue',
            'jQuery',
            'MySQL',
            'Sidekiq',
            'Sendgrid',
            'Bootstrap',
            'Vuetify',
            'grape',
            'swagger',
            'git',
            'SASS',
            'Pundit',
            'CanCanCan'
          ],
          features: [
            'Transition from closed userbase to public with purchasable courses',
            'Userbase synchronization with Vitec',
            'Quiz based examination system',
            'Customer based user management',
            'Various reporting options',
            'CRUD actions in administration panel'
          ]
        },
        {
          name: 'Ideasmotors',
          period: 'Q2 2017 - Q1 2019',
          image: '/images/previews/im.png',
          site: 'https://ideasmotors.com',
          description: 'Content administration platform for a mobile application. Location and route based motorcycling event aggregator.',
          stack: ['c#', '.netcore', 'windows', 'azure'],
          technologies: [
            'vue',
            'jQuery',
            'CosmosDb',
            'Sendgrid',
            'Bootstrap',
            'swagger',
            'git',
            'CSS'
          ],
          features: [
            'Import.io integration',
            'REST API used for a mobile application',
            'Paypal and FirstData single purchase and subscription payment system',
            'Fun spatial data calculations with CosmosDb',
            'CRUD actions in administration panel'
          ]
        },
        {
          name: 'Escalator',
          period: 'Q2 2019 - Q4 2019',
          image: '/images/previews/esc.png',
          site: null,
          description: 'Private use surveying platform with focus on mobile devices.',
          stack: ['rails', 'nginx', 'ubuntu', 'aws'],
          technologies: [
            'vue',
            'MySQL',
            'Bootstrap',
            'SASS',
            'Pundit'
          ],
          features: [
            'Dynamic survey creation',
            'Survey result display',
            'Mobile display for surveys',
            'CRUD actions in administration panel'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.projects {
  padding: 10px;
  width: calc(75% - 20px);

  .header {
    font-size: 35px;
    padding-bottom: 5px;
    border-bottom: 1px solid #00796b;
  }

  .project-list {
    padding-top: 10px;
    max-height: 90vh;
    overflow-y: auto;
  }
}
</style>
