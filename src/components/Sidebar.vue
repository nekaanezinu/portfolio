<template>
  <div class="sidebar">
    <div class="sidebar-content">
      <div class="name">Sandis Sticers</div>
      <div class="description">Web developer</div>
      <div class="links">
        <a
          v-for="(link, index) in links"
          :key="`link-${index}`"
          :href="link.href"
        >
          <unicon :name="link.icon" fill="#87bdb7" height="30" width="30" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      links: [
        {
          href: 'https://github.com/nekaanezinu',
          icon: 'github'
        },
        {
          href: 'https://www.linkedin.com/in/sandis-sticers-30a914170/',
          icon: 'linkedin'
        },
        {
          href: 'mailto:nekaanezinu@gmail.com',
          icon: 'at'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.sidebar {
  height: 100vh;
  width: 25%;
  background: #00796b;

  @media screen and (max-width: 1000px) {
    height: 11em;
    width: 100%;
  }

  .sidebar-content {
    margin-top: 40px;
    text-align: right;
    padding: 10px;

    .name {
      color: #f5f5f5;
      font-size: 20px;
    }

    .description {
      color: #87bdb7;
      font-weight: bold;
      font-size: 20px;
    }

    .links {
      .unicon {
        padding: 5px;
      }
    }
  }
}
</style>
