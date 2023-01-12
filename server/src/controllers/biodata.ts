import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { nanoid } from "nanoid";

const prisma = new PrismaClient();

class Biodata {
  async getBio(_req: Request, res: Response) {
    const bio = await prisma.bio.findMany();
    res.json(bio);
  }

  async createBio(req: Request, res: Response) {
    const result = await prisma.bio.create({
      data: { 
        id: nanoid(),
        ...req.body 
      }
    });
    res.json(result);
  }

  async updateBio(req: Request, res: Response) {
    const { id } = req.params;
    const bio = await prisma.bio.update({
      where: {
        id: id
      },
      data: {
        ...req.body
      }
    });
    res.json(bio);
  }

  async deleteBio(req: Request, res: Response) {
    const { id } = req.params;
    const bio = await prisma.bio.delete({
      where: {
        id: id
      }
    });
    res.json(bio);
  }
}

export default Biodata;