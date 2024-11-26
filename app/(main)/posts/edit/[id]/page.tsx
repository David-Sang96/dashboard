"use client";

import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import posts from "@/data/post";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";

import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  body: z.string().min(1, { message: "Body is required" }),
  author: z.string().min(1, { message: "Author is required" }),
  date: z.string().min(1, { message: "Date is required" }),
});

type formData = z.infer<typeof formSchema>;

const PostDetails = () => {
  const params = useParams();
  const post = posts.find((post) => post.id === params.id);
  const { toast } = useToast();
  const form = useForm<formData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title || "",
      body: post?.body || "",
      author: post?.author || "",
      date: post?.date || "",
    },
  });

  const handleSubmit: SubmitHandler<formData> = (data) => {
    toast({
      title: "Post has been updated successfully",
      description: `Updated by ${data.author} on ${data.date}`,
    });
  };

  return (
    <>
      <BackButton text="Back To Posts" link="/posts" />
      <h3 className="mb-4 text-2xl">Edit Post</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-bold uppercase text-zinc-500 dark:text-white">
                  Title
                </FormLabel>
                <FormControl>
                  <Input
                    className="border-0 bg-slate-100 text-black ring-offset-0 focus-visible:ring-0 dark:bg-slate-500 dark:text-white"
                    placeholder="Enter Title"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-bold uppercase text-zinc-500 dark:text-white">
                  Body
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="border-0 bg-slate-100 text-black ring-offset-0 focus-visible:ring-0 dark:bg-slate-500 dark:text-white"
                    placeholder="Enter Body"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-bold uppercase text-zinc-500 dark:text-white">
                  Author
                </FormLabel>
                <FormControl>
                  <Input
                    className="border-0 bg-slate-100 text-black ring-offset-0 focus-visible:ring-0 dark:bg-slate-500 dark:text-white"
                    placeholder="Enter Author"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-bold uppercase text-zinc-500 dark:text-white">
                  Date
                </FormLabel>
                <FormControl>
                  <Input
                    className="border-0 bg-slate-100 text-black ring-offset-0 focus-visible:ring-0 dark:bg-slate-500 dark:text-white"
                    placeholder="Enter Date"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full dark:bg-slate-800 dark:text-white">
            Update Post
          </Button>
        </form>
      </Form>
    </>
  );
};

export default PostDetails;
