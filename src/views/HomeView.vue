<template>
  <main class="mt-5">
    <div class="container-xxl">
      <NavProjects v-model="activeSection"/>
      <section class="row">
        <TransitionGroup name="list">
          <ProjectCard v-for="project in activeProjects" :project="project" :key="project.website"/>
        </TransitionGroup>
      </section>
    </div>
  </main>
</template>

<script setup>
import {computed, ref} from "vue";
import ProjectCard from '../components/ProjectCard.vue'
import NavProjects from "../components/NavProjects.vue";
import {myProjects} from "../myProjects";
const projects = ref(myProjects)
const activeProjects = computed(() =>{
      if (activeSection.value === 'All') {
        return myProjects
      } else {
        return myProjects.filter((project) => project.section === activeSection.value)
      }
    })

const activeSection = ref('All')

// import { onMounted } from 'vue'
// import { Tooltip } from 'bootstrap'
//
// onMounted(() => {
//   new Tooltip(document.body, {
//     selector: "[data-bs-toggle='tooltip']",
//   })
// })
</script>

<style lang="scss">

  .list-move,
  .list-enter-active,
  .list-leave-active {
    transition: all .3s ease;

  }
  .list-enter-active {
    transition-delay: .3s;
  }

  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(-100px);
  }
  /* убедитесь, что удаляющиеся элементы выведены из потока, чтобы
анимации перемещения могли быть рассчитаны правильно. */
</style>
