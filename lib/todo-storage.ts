"use client";

import { Todo } from "@/types/todo";

const STORAGE_KEY = "todos";

// LocalStorage에서 할 일 목록 가져오기
export function getTodos(): Todo[] {
  if (typeof window === "undefined") return [];
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("할 일 목록을 불러오는 중 오류 발생:", error);
    return [];
  }
}

// LocalStorage에 할 일 목록 저장하기
export function saveTodos(todos: Todo[]): void {
  if (typeof window === "undefined") return;
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (error) {
    console.error("할 일 목록을 저장하는 중 오류 발생:", error);
  }
}

// 새로운 할 일 추가
export function addTodo(text: string): Todo {
  const newTodo: Todo = {
    id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    text: text.trim(),
    completed: false,
    createdAt: Date.now(),
  };
  
  const todos = getTodos();
  todos.push(newTodo);
  saveTodos(todos);
  
  return newTodo;
}

// 할 일 완료 상태 토글
export function toggleTodo(id: string): void {
  const todos = getTodos();
  const todo = todos.find((t) => t.id === id);
  
  if (todo) {
    todo.completed = !todo.completed;
    saveTodos(todos);
  }
}

// 할 일 삭제
export function deleteTodo(id: string): void {
  const todos = getTodos();
  const filteredTodos = todos.filter((t) => t.id !== id);
  saveTodos(filteredTodos);
}

// 할 일 수정
export function updateTodo(id: string, text: string): void {
  const todos = getTodos();
  const todo = todos.find((t) => t.id === id);
  
  if (todo) {
    todo.text = text.trim();
    saveTodos(todos);
  }
}
