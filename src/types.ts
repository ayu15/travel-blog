export interface PostI {
  node: {
    frontmatter: {
      title: string;
      imageURL: string;
      imageTitle: string;
      subtitle: string;
    };
    fields: {
      slug: string;
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
  imageURL: string;
  imageTitle: string;
  slug: string;
}
