<template>
    <div>
        <h3 class="text-4xl font-bold mb-5">TODO List:</h3>
        <!-- // 空の場合は、No todos in listを表示 -->
        <template v-if="!todoStore.items.length">
            <p class="text-center">No todos in list</p>
        </template>
        <div class="flex flex-col gap-7">
            <!-- // todoStore内の各プロパティにアクセス -->
            <template v-for="todo in todoStore.items" :key="todo.id">
                <TodoItem :todo="todo" />
            </template>
        </div>
    </div>
</template>
    
<script lang="ts">
import { useTodoStore } from '@/store/todo';
import { defineComponent } from 'vue';
// TodoItem.vue のデフォルトエクスポートをインポート
import TodoItem from './TodoItem.vue';

// デフォルトエクスポート
export default defineComponent({
    setup() {
        const todoStore = useTodoStore();
        return {
            todoStore
        };
    },
    components: { TodoItem }
})
</script>
