<template>
  <div>
    <PersonalHeader />
    <About />
    <KnowledgeAreas />
    <Projects />
  </div>
</template>

<script>
//  import Logo from '~/components/Logo.vue'
import PersonalHeader from "~/components/PersonalHeader.vue";
import KnowledgeAreas from "~/components/KnowledgeAreas.vue";
import Projects from "~/components/Projects.vue";
import About from "~/components/About.vue";

export default {
  components: {
    PersonalHeader,
    KnowledgeAreas,
    Projects,
    About,
  },
};
</script>

<style></style>
