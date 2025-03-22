// params is a promise that resolves to an object containing the dynamic route parameters for the current route.
// searchParams is a promise that resolves to an object containing the query parameters(like filters and sorting).
// While page.tsx has access to both params and SearchParamsContext, Layout.tsx only has access to params

import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome home!</h1>
      <Link href="/counter">Counter</Link>
      <Link href="/products">Products</Link>
      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
      <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
    </>
  );
}
