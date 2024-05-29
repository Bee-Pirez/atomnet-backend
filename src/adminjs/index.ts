import AdminJS  from "adminjs";
import AdminJSExpress from "@adminjs/express"
import AdminJSSequelize from "@adminjs/sequelize"
import { sequelize } from "../database";


import { brandingOptions } from "./branding";



AdminJS.registerAdapter(AdminJSSequelize)

export const adminJs = new AdminJS({
    databases: [sequelize],
    rootPath: "/admin",
    branding: brandingOptions,
})

export const adminJsRouter = AdminJSExpress.buildRouter(
    adminJs,
)