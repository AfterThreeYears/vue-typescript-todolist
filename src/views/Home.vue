<template>
  <div class="home">
    <todo-item
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoItem from '@/components/TodoItem.vue';

@Component({
  components: {
    TodoItem,
  },
})
export default class Home extends Vue {
  public todos: Object[] = [];
}
</script>
