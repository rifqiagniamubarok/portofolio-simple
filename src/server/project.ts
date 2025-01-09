'use server';

import prisma from '@/lib/prismaClient';

export const getAllProjects = async () => {
  try {
    const projects = await prisma.project.findMany();

    return projects;
  } catch (error) {
    throw error;
  }
};

export const getDetailProject = async (slug: string) => {
  try {
    const isProjectExist = await prisma.project.count({
      where: {
        slug: slug,
        isPublished: true,
      },
    });

    if (isProjectExist === 0) {
      return null;
    }

    const project = await prisma.project.findFirst({
      where: {
        slug: slug,
        isPublished: true,
      },
    });

    return project;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const viewProject = async (slug: string) => {
  try {
    const isProjectExist = await prisma.project.count({
      where: {
        slug: slug,
        isPublished: true,
      },
    });

    if (isProjectExist === 0) {
      return null;
    }

    const project = await prisma.project.updateMany({
      where: {
        slug: slug,
      },
      data: {
        views: {
          increment: 1,
        },
      },
    });

    return project;
  } catch (error) {
    console.error(error);
    return null;
  }
};
