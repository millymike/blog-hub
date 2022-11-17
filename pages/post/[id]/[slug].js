import { getSinglePosts } from "../../../client/request";

export const getServerSideProps = async (ctx) => {
  const { query } = ctx;

  const res = await getSinglePosts(query.id);
  if (!res.hasError) {
    return {
      props: {
        post: res.body,
      },
    };
  } else {
    return {
      props: {
        post: null,
      },
    };
  }
};

const PostDetailsPage = ({ post }) => {
  return (
    <div className="container">
      <div className="row">
        <article class="blog-post">
          <h1 class="blog-post-title mb-1">{post.title}</h1>
          <p class="blog-post-meta">
            {post.createdAt} by <a href="#">{post.user.name}</a>
          </p>

          <div style={{ textAlign: "center", margin: "50px 0" }}>
            <img src={post.image} style={{ width: "400px" }} />
          </div>

          <p>{post.desc}</p>
        </article>
      </div>
    </div>
  );
};

export default PostDetailsPage;
