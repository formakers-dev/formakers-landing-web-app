<template>
  <div class="home-page">
    <Title />
    <SearchForm />
  </div>
</template>

<script>
import Title from '@/components/Title';
import SearchForm from '@/components/SearchForm';

export default {
  name: 'Home',
  components: {
    Title,
    SearchForm
  }
};
</script>

<style scoped>

</style>
