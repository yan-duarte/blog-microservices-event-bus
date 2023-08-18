enum EventTypes {
  COMMENT_CREATED = "CommentCreated",
  COMMENT_UPDATED = "CommentUpdated",
  COMMENT_MODERATED = "CommentModerated",
  POST_CREATED = "PostCreated",
}

export interface Event {
  type: EventTypes;
  data: Record<string, unknown>;
}
