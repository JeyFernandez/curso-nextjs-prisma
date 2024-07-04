import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
export async function GET() {
  try {
    const notas = await prisma.note.findMany();
    return NextResponse.json({
      message: "Gettin notes...",
      data: notas,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}

export async function POST(request: Request) {
  try {
    const { title, content } = await request.json();
    const newNote = await prisma.note.create({
      data: {
        title,
        content,
      },
    });

    return NextResponse.json({
      message: `Note created: ${title}`,
      data: newNote,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}
