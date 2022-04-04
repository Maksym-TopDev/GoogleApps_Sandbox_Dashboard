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

async function updateProject(fields) {
  const { id } = fields;
  delete fields.id;
  
  try {
    await prisma.projects.update({
      where: {
        id: parseInt(id),
      },
      data: fields, // object
    });
  } catch(err) {
    console.log("Failed to update project:", err);
  } finally {
    await prisma.$disconnect();
  }
}

async function createProject({
  projectType, 
	repository, 
	description, 
	app, 
	website, 
	icon, 
	secret_key, 
	title,
  version
}) {
  try {
    await prisma.projects.create({
      data: {
        projectType, 
        repository, 
        description, 
        app, 
        website, 
        icon, 
        secret_key, 
        title,
        version
      },
    });
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
