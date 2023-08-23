<template>
    <div class="rounded-md bg-white shadow-md py-3 px-8 grid align-middle cursor-pointer relative">
        <!-- // 完了ボタン -->
        <div class="flex justify-between" @click="toggleComplete()">
            <template v-if="todo.completed">
                <TickSolid class="text-green-600" />
            </template>
            <template v-else>
                <TickOutlined />
            </template>

            <h3>{{ todo.title }}</h3>
        </div>

        <span @click="removeTodo()"
            class="absolute bottom-0 right-0 transform translate-y-full bg-red-100 text-red-800 shadow-sm text-xs mr-2 px-2.5 py-0.5 rounded-b-md rounded-t-none dark:bg-red-200 dark:text-red-900">Remove</span>
    </div>
</template>
    
<script lang="ts">
import { Todo, useTodoStore } from '@/store/todo';
import { PropType, defineComponent } from 'vue';
import TickOutlined from '../icons/TickOutlined.vue';
import TickSolid from '../icons/TickSolid.vue';

// デフォルトエクスポート
export default defineComponent({
    // <script setup>を用いないコンポーネントの場合はpropsオプションを使ってpropsを宣言します
    props: {
        todo: {
            type: Object as PropType<Todo>,
            // 入力必須
            required: true
        }
    },
    // setupは引数にpropsを受け取る
    setup(props) {
        const todoStore = useTodoStore()
        const toggleComplete = () => {
            // updateメソッドで、要素の内容を書き換える
            // update(要素,更新する値)
            // idに基づいてtodoの状態を完了状態に更新している
            todoStore.update(props.todo.id, { completed: !props.todo.completed })
        }
        const removeTodo = () => {
            // removeで引数の属性を削除
            todoStore.remove(props.todo.id)
        }
        //HTMLへ以下の部分を反映させる
        return {
            toggleComplete,
            removeTodo
        }
    },
    components: { TickSolid, TickOutlined }
})
</script>
