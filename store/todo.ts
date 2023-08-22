// Todoを管理するストアを作成
import { defineStore } from "pinia";
import { v4 as uuidv4 } from 'uuid';

// interface = インスタンスのプロパティやメソッドの使用を定義する
// 全てのプロパティに値を設定する必要がある
// idは数字、　titleは文字列、　completed(完了したか)はture false
export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}
// Todos は　Todoの配列型をとる
export type Todos = Todo[];

// TodoAdd　は　titleとして文字列をとる
export interface TodoAdd {
    title: string;
}
// 必ずしも全てのプロパティが必須とは限らないため、任意のプロパティを表す時にはプロパティ名の末尾に?をつける
// completed プロパティはオプショナル(省略できる)
export interface TodoUpdate {
    completed?: boolean;
}
// TodoStateは、Todos型を持つアイテムによって構成されたオブジェクト
interface TodoState {
    items: Todos;
}

// 課題が完了した時(trueの時)にチェックボックスをつける
//stateは初期状態
const state = (): TodoState => ({
    items: [
        {
            id: uuidv4(),
            title: 'Complete this project',
            completed: true
        }
    ],
});

const getters = {
    getTodoById: (state: TodoState) => {
        return (id: number) =>
            // itemsの配列に対して、条件(itemでなく、idが一致するもの??)に一致する最初の要素を返す
            state.items.find((item) => !!item && (item as Todo).id == id);
    },
};

export const useTodoStore = defineStore("todoStore", {
    state,
    getters,
    actions: {
        // async でfunctionを同期処理にする(上から順番に実行する)
        async add(todo: TodoAdd) {
            this.items.push({ id: uuidv4(), ...todo });
        },
        async remove(id: number) {
            // filter : items配列の要素である文字列内にitemのid がidと一致しないものだけを抽出する
            this.items = this.items.filter((item) => item.id !== id);
        },
        async update(id: number, updatedTodo: TodoUpdate) {
            const items = this.items as Todos;
            const index = items.findIndex(
                (item) => !!item && (item as Todo).id == id
            );

            items[index] = { ...items[index], ...updatedTodo };
        },
    },
});
