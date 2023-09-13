import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest){
    const access = req.cookies.get("Access")
    const url = req.nextUrl.pathname

/*    if(url.includes("confirmacion-compra")){
        if(!access){
            return NextResponse.redirect("http://localhost:3000")
        }
    }*/
}