import { useRouter } from "next/router";

export const getStaticPaths = () => {
  return {
    paths: [
      {
        params: {
          postId: "4",
        },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const jsonPost = await post.json();

  return {
    props: {
      post: jsonPost || null,
    },
  };
};

const PostDetails = ({ post }) => {
  const router = useRouter();
  //   const { postId } = router.query;
  if (router.isFallback) {
    return <h1>Loading...!</h1>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetails;
