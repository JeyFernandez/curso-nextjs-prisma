import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    message: "Gettin notes...",
  });
}

export function POST() {
  return NextResponse.json({
    message: "Creating notes...",
  });
}
export function DELETE() {
  return NextResponse.json({
    message: "Deleting notes...",
  });
}
