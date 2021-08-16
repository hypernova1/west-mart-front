export default interface PostType {
  id: number;
  title: string;
  content: string;
  writer: string;
  hits: number;
  tags: string[];
}