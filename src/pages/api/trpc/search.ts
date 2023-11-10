import type { NextApiRequest, NextApiResponse } from "next";
import prisma from '../../../../prisma/client'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        try {
            const { q: query } = req.query;

            if (typeof query !== "string") {
                throw new Error("Invalid request")
            }

            // Search job posts
            const jobPosts = await prisma.jobPosting.findMany({
                where: {
                    OR: [
                        {
                            title: {
                                contains: query.toLowerCase()
                            }
                        },
                        {
                            company: {
                                contains: query.toLowerCase()
                            }
                        }
                    ]
                }
            });


            res.status(200).json({ jobPosts })
        } catch (error) {
            res.status(500).end();
        }
    }
    
}