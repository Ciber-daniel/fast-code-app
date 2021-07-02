export interface Picture {
  id: string;
  title: string;
  link: Link[];
}

interface Link {
  $: LinkImage;
}

interface LinkImage {
  type: string;
  href: string;
}
