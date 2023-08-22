<template>
    <div>
        <!-- # ボタンに関係づけられたフォーム -->
        <form @submit.prevent="addTodo()">
            <div class="shadow-sm">
                <div>
                    <!-- tailwindowのCSSを利用して、初期値としてEnter todo が表示される入力フォームを作成(input)  -->
                    <input v-model="todoTitle" type="text" autocomplete="text" required
                        class="relative block w-full appearance-none rounded-t-md rounded-b-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter todo">
                </div>
            </div>
            <div>
                <!-- Create TODO　のボタン作成 -->
                <button type="submit"
                    class="group relative flex w-full justify-center rounded-b-md rounded-t-none border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Create TODO
                </button>
            </div>
        </form>
    </div>
</template>
 
<script lang="ts">
//
// 単一コンポーネントでTypeScriptを使用時は、scriptタグにlang="ts"属性を追加。全てのテンプレート内の式に対して型チェックを利用できる
//

// defineComponentをvueから、useTodoStoreを'@/store/todoからインポートしている
import { useTodoStore } from '@/store/todo'
import { defineComponent } from 'vue'

// デフォルトエクスポート(この機能を定義?) →　外部からの import の際波括弧を指定しなかった場合、デフォルトエクスポートが読み込まれる
export default defineComponent({
    // コンポーネントのテンプレート内でrefにアクセスするために、setup()関数で宣言し、それを返す
    // setup は Composition API専用の特別なフック
    setup() {
        // todoStore は useTodoStore と定義
        // ストアを定義してコンポーネントからストアを利用

        const todoStore = useTodoStore()

        // todoTitle は　refがあるため、v-modelと同期
        // refで定義した変数の値はvalueプロパティを用いてアクセスする
        // <template>への記述では、.valueは不要
        const todoTitle = ref('')

        // addTodoを定義 何も返さない(void型)
        // 引数のないアロー関数
        const addTodo = () => {
            // {}で囲まれた以下の処理を実行する
            // タイトルの入力がない場合、Please　enter the title　という表示を返す
            // todoTitle.value で変数(入力した単語)へアクセスする
            if (!todoTitle.value) {
                return alert('Please enter the title')
            }
            // todoStoreにtitle属性を追加 titleはtodoTitle型
            todoStore.add({
                title: todoTitle.value
            })

            todoTitle.value = ''
        }
        // ref をテンプレート(HTML)に公開する
        return {
            addTodo,
            todoTitle
        }
    },
})
</script>
