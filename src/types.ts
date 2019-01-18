export interface PostI {
  node: {
    frontmatter: PostFrontmatterI;
    fields: {
      slug: string;
    };
  };
}

export interface PostFrontmatterI {
  title: string;
  imageURL: string;
  imageTitle: string;
  subtitle: string;
  date: string;
  thumbURL: string;
  body: string;
}

export interface MdPostFrontmatterI {
  data: {
    markdownRemark: {
      frontmatter: PostFrontmatterI;
    };
  };
}

export interface PostCollectionI {
  allMarkdownRemark: {
    edges: Array<PostI>;
  };
}

export interface PostInfoI {
  title: string;
  subtitle: string;
  imageTitle: string;
  slug: string;
  date: string;
  thumbURL: string;
}
