import path, {resolve} from "node:path";
import * as glob from 'glob';



import { defineConfig } from "vite";

import htmlPurge from "vite"


const obtenerEntradasHTML = ()=>{
    return Object.fromEntries(

        [...glob.sync('./**/*.html', {ignore: ["./dist/**","./node_modules/**"]}

        ).map(
            fileData=>[
                fileData.slice(0, fileData.leght - path.extname(fileData).length),
                resolve(__dirname, fileData)
            ]
        )
    
    ]
        
);
}

export default defineConfig({
    appType: 'mpa',
    base: process.env.DEPLOY_BASE_URL,
    build: {
        rollupOptions: {
            input: obtenerEntradasHTML()
        }
    },
    pluggins:[
        htmlPurge({})
    ]
});