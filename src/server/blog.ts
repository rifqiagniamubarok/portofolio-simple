'use server';

import prisma from '@/lib/prismaClient';

export const getAllBlogs = async () => {
  try {
    const blogs = await prisma.blog.findMany();

    return blogs;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getDetailBlog = async (slug: string) => {
  try {
    const isBlogExist = await prisma.blog.count({
      where: {
        slug: slug,
        isPublished: true,
      },
    });

    if (isBlogExist === 0) {
      return null;
    }

    const blog = await prisma.blog.findFirst({
      where: {
        slug: slug,
        isPublished: true,
      },
    });

    return blog;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const viewBlog = async (slug: string) => {
  try {
    const isBlogExist = await prisma.blog.count({
      where: {
        slug: slug,
        isPublished: true,
      },
    });

    if (isBlogExist === 0) {
      return null;
    }

    const blog = await prisma.blog.updateMany({
      where: {
        slug: slug,
      },
      data: {
        views: {
          increment: 1,
        },
      },
    });

    return blog;
  } catch (error) {
    console.error(error);
    return null;
  }
};
