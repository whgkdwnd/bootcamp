"use client";

import { Todo } from "@/types/todo";

const API_BASE_URL = "/api/todos";

// API 응답 타입
interface ApiResponse<T> {
  data?: T;
  error?: string;
}

// 할 일 목록 가져오기
export async function getTodos(): Promise<Todo[]> {
  try {
    const response = await fetch(API_BASE_URL);
    
    if (!response.ok) {
      throw new Error("할 일 목록을 불러오는 중 오류가 발생했습니다.");
    }

    const data = await response.json();
    
    // Supabase 데이터를 Todo 타입으로 변환
    return data.map((item: any) => ({
      id: item.id,
      text: item.text,
      completed: item.completed,
      createdAt: new Date(item.created_at).getTime(),
    }));
  } catch (error) {
    console.error("할 일 목록 조회 오류:", error);
    return [];
  }
}

// 새로운 할 일 추가
export async function addTodo(text: string): Promise<Todo | null> {
  try {
    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "할 일을 추가하는 중 오류가 발생했습니다.");
    }

    const data = await response.json();
    
    // Supabase 데이터를 Todo 타입으로 변환
    return {
      id: data.id,
      text: data.text,
      completed: data.completed,
      createdAt: new Date(data.created_at).getTime(),
    };
  } catch (error) {
    console.error("할 일 추가 오류:", error);
    return null;
  }
}

// 할 일 완료 상태 토글
export async function toggleTodo(id: string, completed: boolean): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: !completed }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "할 일을 수정하는 중 오류가 발생했습니다.");
    }

    return true;
  } catch (error) {
    console.error("할 일 수정 오류:", error);
    return false;
  }
}

// 할 일 삭제
export async function deleteTodo(id: string): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "할 일을 삭제하는 중 오류가 발생했습니다.");
    }

    return true;
  } catch (error) {
    console.error("할 일 삭제 오류:", error);
    return false;
  }
}

// 할 일 수정
export async function updateTodo(id: string, text: string): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "할 일을 수정하는 중 오류가 발생했습니다.");
    }

    return true;
  } catch (error) {
    console.error("할 일 수정 오류:", error);
    return false;
  }
}
