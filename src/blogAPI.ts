import { Article } from "./types";

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch("http://localhost:3001/posts", { cache: "no-store" }); //SSR
  // const res = fetch("http://localhost:3001/posts", { cache: "force-ca-che" }); //SSG
  // const res = fetch("http://localhost:3001/posts", { next: { revalidate: 10} }); //ISR
  // CSRはクライアント側でuseEffectを使う。
  if (!res.ok) {
    throw new Error("エラーが発生しました。");
  }
  const articles = await res.json();
  return articles;
};
