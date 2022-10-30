import React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import useStyles from "./styles";
import { fillForm } from "../../../redux/slices/forms";
import { deletePost, likePost } from "../../../redux/actionCreators/posts";
import Likes from "./Likes";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const defaultImage = process.env.REACT_APP_DEFAULT_IMAGE;

  const handleOnUpdate = () => {
    dispatch(fillForm(post));
  };

  const handleOnDelete = () => {
    dispatch(deletePost(post._id));
  };

  const handleOnLike = () => {
    dispatch(likePost(post));
  };

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile ? post.selectedFile : defaultImage}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        {user && user.id === post.userId && (
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => {
              handleOnUpdate();
            }}
          >
            <MoreHorizIcon fontSize="medium" />
          </Button>
        )}
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          {post.text}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          disabled={!user}
          onClick={handleOnLike}
        >
          <Likes post={post} />
        </Button>
        {user && user.id === post.userId && (
          <Button size="small" color="primary" onClick={handleOnDelete}>
            <DeleteIcon fontSize="small" />
            Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
