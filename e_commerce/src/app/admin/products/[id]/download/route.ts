import db from "@/db/db";
import { NextApiRequest } from "next";
import { notFound } from "next/navigation";
import fs from "fs/promises";
import { NextResponse } from "next/server";

export async function GET(
  req: NextApiRequest,
  { params: { id } }: { params: { id: string } }
) {
  const product = await db.product.findUnique({
    where: { id },
    select: { filePath: true, name: true },
  });

  if (product == null) return notFound();

  const { size } = await fs.stat(product.filePath);
  const file = await fs.readFile(product.filePath);
  const extension = product.filePath.split(".").pop();

  return new NextResponse(file, {
    headers: {
      "content-Disposition": `attachment; filename="${product.name}.${extension}"`,
      "content-Length": size.toString(),
    },
  });
}
