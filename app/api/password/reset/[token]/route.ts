import { dbConnect } from "../../../../../backend/config/dbConnect";
import { resetPassword } from "../../../../../backend/controllers/authControllers";
import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";

interface RequestContext {}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.put(resetPassword);

export async function PUT(
  request: NextRequest,
  ctx: RequestContext
): Promise<void | Response> {
  return router.run(request, ctx) as Promise<void | Response>;
}

