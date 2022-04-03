const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function getProjects() {
  try {
    const projects = await prisma.projects.findMany();

    return projects;
  } catch(err) {
    console.log("Failed to get projects:", err);
  } finally {
    await prisma.$disconnect();
  }
}

async function getOneProject(title, version) {
  try {
    const project = await prisma.projects.findMany({
      where: { 
          title: title,
          version: version 
      },
    });
    
    return project[0];
  } catch(err) {
    console.log("Failed to get project:", err);
  } finally {
    await prisma.$disconnect();
  }
}

async function updateProject() {
  try {

  } catch(err) {
    console.log("Failed to update project:", err);
  } finally {
    await prisma.$disconnect();
  }
}

async function createProject({
  app_type, 
	deployed_url, 
	description, 
	game_file, 
	git_url, 
	icon_file, 
	secret_key, 
	title,
  version
}) {
  try {
    await prisma.projects.create({
      data: {
        app_type, 
        deployed_url, 
        description, 
        game_file, 
        git_url, 
        icon_file, 
        secret_key, 
        title,
        version
      },
    })
  } catch(err) {
    console.log("Failed to create project:", err);
  } finally {
    await prisma.$disconnect();
  }
}

module.exports = {
  getProjects,
  getOneProject,
  updateProject,
  createProject
};
