import { Request, Response } from "express";
import Page from "../models/statistics";

const statistics = {
    stats: async (req: Request, res: Response) => {
        const new_User = req.body.user_ID;
        const new_Session = req.body.session_ID;
        const new_Page = req.body.pages;
        try {
            if (Page.findOne({ session_ID: new_Session })) {
                Page.updateOne({ session_ID: new_Session }, { $push: { page: new_Page } });
            }
            else {
                const page = new Page({
                    user_ID: new_User,
                    session_ID: new_Session,
                    pages: new_Page,
                });
                page.save();
            }
            console.log("Successfully done without any error");
        }
        catch (e) {
            console.error(e);
        }
    }
};
export default statistics;