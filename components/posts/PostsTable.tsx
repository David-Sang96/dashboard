import posts from "@/data/post";
import { Post } from "@/types/posts";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

interface PostsTableProps {
  limit?: number;
  title?: string;
}

const PostsTable = ({ limit, title }: PostsTableProps) => {
  // sort posts in desc based on date
  const sortedPosts: Post[] = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  // filter posts to limit
  const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;

  return (
    <div className="mt-10">
      <h2 className="mb-4 text-2xl font-semibold">{title || "Posts"}</h2>
      <Table>
        {/* <TableCaption>A list of recent posts</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Author</TableHead>
            <TableHead className="hidden text-right md:table-cell">
              Date
            </TableHead>
            <TableHead>View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPosts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.title}</TableCell>
              <TableCell className="hidden md:table-cell">
                {post.author}
              </TableCell>
              <TableCell className="hidden text-right md:table-cell">
                {post.date}
              </TableCell>
              <TableCell>
                <Link href={`/posts/edit/${post.id}`}>
                  <button className="rounded bg-blue-500 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700">
                    Edit
                  </button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PostsTable;
