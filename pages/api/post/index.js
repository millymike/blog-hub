import { errorHandler, responseHandler } from "../../../utils/common";
import { dbConnect } from "../../../lib/db-connect";
import Post from "../../../models/post";

export default async function handler(req, res) {
  try {
    await dbConnect();

    const posts = await Post.find({})
      .select("_id title slug image createdAt")
      .exec();
    if (posts) {
      responseHandler(posts, res);
    } else {
      errorHandler("Something went wrong!", res);
    }
  } catch (error) {
    errorHandler(error, res);
  }
}
