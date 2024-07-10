import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Comment } from "./Comment";
import { Post } from "./Post";
import { getComments } from "./getComments";

export function PostCard(post: Post) {
  const [comments, setComments] = useState([] as Comment[]);
  useEffect(() => {
    getComments(post.id).then(setComments);
  }, [post.id])

  const [showComments, setShowComments] = useState(false);
  const toggleShowComments = () => setShowComments(!showComments);

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.body}
        </Typography>
      </CardContent>
      <CardActions>
        {comments.length &&
        <Button size="small" onClick={toggleShowComments} >{comments.length} Comments</Button>
        }
      </CardActions>
      {showComments && <CommentList comments={comments} />}
    </Card>
  );
}

export function CommentList({ comments }: { comments: Comment[] }) {
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.body}</li>
      ))}
    </ul>
  );
}
