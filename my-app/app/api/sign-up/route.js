
import { NextResponse } from 'next/server'
import { DBConnection } from '../db/db-connection';
import { Client } from '@/app/libs/db/db-schema';

export async function POST(request) {
   try {
      const { full_name, email, password } = await request.json()
      await DBConnection()
      const clientExists = await Client.findOne({ email })
      if (clientExists) {
         return NextResponse.json({ message: "User already exists" }, { status: 400 })
      }
      else {
         await Client.create({ full_name, email, password })
         return NextResponse.json({ message: "Sign up succesful" }, { status: 201 })
      }
   } catch (error) {
      console.log("Sign up API error: " + error)
      return NextResponse.json({ message: 'Something went wrong!' }, { status: 400 })
   }

}