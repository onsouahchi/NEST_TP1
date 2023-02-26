import { Delete, Get, Controller, Patch, Post, Put } from '@nestjs/common';

@Controller('premier')
export class PremierController {
    @Get("get")
    getPremier() {
        console.log("Get request from Premier Module");
        return "Get request from Premier Module";
    }

    @Post("post")
    postPremier() {
        console.log("Post request from Premier Module");
        return "Post request from Premier Module";
    }

    @Delete("delete")
    deletePremier() {
        console.log("Delete request from Premier Module");
        return "Delete request from Premier Module";
    }

    @Put("put")
    putPremier() {
        console.log("Put request from Premier Module");
        return "Put request from Premier Module";
    }

    @Patch("patch")
    patchPremier() {
        console.log("Patch request from Premier Module");
        return "Patch request from Premier Module";
    }
}
