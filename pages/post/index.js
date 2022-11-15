export const getStaticProps = async () => {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/4`);
  const jsonPost = await post.json();

  return {
    props: {
      post: jsonPost || null,
    },
  };
};

const Post = ({ post }) => {
  return (
    <div>
      <h1> {post.title}</h1>
      <p> {post.body}</p>
    </div>
  );
};

export default Post;
