"use server";

import { renderError } from "@/utils/rendererror";
import { blogSchema, validateWiteZod } from "@/utils/schemats";
import prisma from "../utils/db";
import { getUser } from "@/utils/getuser";
import { uploadFile } from "@/utils/supabase";

export const createBlog = async (prevState: any, formData: FormData) => {
  try {
    const user = await getUser();
    const data = Object.fromEntries(formData);
    const validate = validateWiteZod(blogSchema, data);
    const fullPath = await uploadFile(validate.image);
    await prisma.blog.create({
      data: {
        clerkId: user.id,
        title: validate.title,
        description: validate.description,
        category: validate.category,
        image: fullPath,
      },
    });
    return { message: "Create Blog Successfully" };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchBlog = async () => {
  const Blogs = await prisma.blog.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return Blogs;
};

export const fetchMyBlog = async () => {
  try {
    const user = await getUser();
    const myBlog = await prisma.blog.findMany({
      where: {
        clerkId: user.id,
      },
    });
    return myBlog;
  } catch (error) {
    return renderError(error);
  }
};

export const deleteBlog = async (id: string) => {
  try {
    await prisma.blog.delete({
      where: {
        id: id,
      },
    });
    return { message: "Delete Blog Successfully" };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchCatBlog = async ({ category }: { category?: string }) => {
  const blogs = await prisma.blog.findMany({
    where: {
      OR: [
        { category: { contains: category, mode: "insensitive" } },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return blogs;
};
