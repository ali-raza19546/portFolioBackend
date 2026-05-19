import { User } from "../models/authModel.js";
import { PostModel } from "../models/postModel.js";
import { ExpressErr } from "../utils/ExpressErr.js";
import { WrapAsync } from "../utils/WrapAsync.js";

const postLikes = WrapAsync(async (req, res) => {
  let { postId } = req.params;
  const userId = req.user.id;

  const post = await PostModel.findById(postId);
  if (!post) {
    throw new ExpressErr(404, "Post Not Found!");
  }
  let alreadyLikes = post.likes.includes(userId);

  if (alreadyLikes) {
    post.likes.pull(userId);
    post.likeCount -= 1;
  } else {
    post.likes.push(userId);
    post.likeCount += 1;
  }

  res.status(200).json({
    success: true,
    likeCount: post.likeCount,
    like: !alreadyLikes,
  });
  await post.save();
});

export { postLikes };
