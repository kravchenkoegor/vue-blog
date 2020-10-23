import createAxiosInstance from './createAxiosInstance';
import { Post } from '@/interfaces';

const axios = createAxiosInstance();

export async function fetchPosts(skip?: number) {
  const { data } = await axios.get(`/posts${skip ? `?skip=${skip}` : ''}`);
  return data;
}

// export async function changePage(page: number) {
//   const { data } = await axios.post('/page', page);
//   return data;
// }

export async function viewPost(postId: string) {
  const { data } = await axios.get(`/post/${postId}`);
  return data;
}

export async function createPost(post: Post) {
  const { data } = await axios.post('/post', post);
  return data;
}

export async function updatePost(postId: string, post: Post) {
  const { data } = await axios.put(`/post/${postId}`, post);
  return data;
}

export async function deletePost(postId: string) {
  const { data } = await axios.delete(`/post/${postId}`);
  return data;
}
